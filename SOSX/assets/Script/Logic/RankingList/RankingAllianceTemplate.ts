/*
 * 联盟排行榜模板
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { getTimeDiffString } from "../Alliance/AllianceCommonInterface";
import { kOneNumber, kZeroNumber, sortAllianceRankingListData } from "../Common/CommonInterface";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import { getServerUtcTime } from "../Utils/GameUtils";
import ManagerRankingLevel from "./ManagerRankingLevel";
import RankingListAlliancePfb from "./RankingListAlliancePfb";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankingAllianceTemplate extends InfiniteList {

    @property(cc.Label)
    lbl_update_time: cc.Label = null;

    @property(InfiniteList)
    list_view: InfiniteList = null;

    @property(cc.Label)
    lbl_none_tip: cc.Label = null;
    
    @property(cc.Node)
    node_update_time: cc.Node = null;
    
    @property(cc.Prefab)
    pfb_alliance_rank: cc.Prefab = null;

    @property({displayName: "联盟排行榜信息条高度"})
    alliance_info_bar_height: number = kZeroNumber;

    private _alliance_ranking_list: proto.IRankingOfAllianceData[] = [];
    private _last_update_time: number                              = kZeroNumber;

    onLoad () {
        this.lbl_none_tip.node.active = false;

        //初始化scrollView接口
        this.list_view.Init({
            getCellNumber:    this.getCellCount.bind(this),
            getCellSize:      this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView:      this.getCellView.bind(this),
            getCellData:      this.getCellData.bind(this),
        });

        /* 监听"联盟排行榜"信息 */
        Net.listenProtocol(proto.Ptl.GetAllianceRankingListRsp, (buffer, ptl)=>{
            let msg = proto.Msg_GetAllianceRankingListRsp.decode(buffer);
            cc.log("GetAllianceRankingListRsp (联盟排行榜) msg: " + JSON.stringify(msg))
            if(msg){
                this._alliance_ranking_list = msg.rankingList;
                sortAllianceRankingListData(this._alliance_ranking_list);
                this.displayPage();
            }
        }, this);
    }

    start () {
        this.requestAllianceRankingList();
    }

    onDestroy(){
        this.destroyPage();
        this._alliance_ranking_list = [];
    }

    public destroyPage(){
        this.list_view.CleanCellPools();
    }

    /* 显示页面
     */
    private displayPage(){
        this.lbl_none_tip.node.active = this._alliance_ranking_list.length <= kZeroNumber;
        this.loadRankData();
    }

    /* 请求合作模式排行榜信息
     */
     private requestAllianceRankingList(){
        let msg = new proto.Msg_GetAllianceRankingListReq();
        Net.Send(proto.Ptl.GetAllianceRankingListReq, msg);
    }

    /* 刷新联盟排行榜界面
     */
    public refreshPage(){
        if(this._alliance_ranking_list.length <= kZeroNumber){
            return;
        }
        
        this.list_view.Reload(true);
    }

    /* 设置最近一次的排名更新时间
     */
    private setLastUpdateTime(){
        if(this._last_update_time <= kZeroNumber){
            this.node_update_time.active = false;
            return;
        }
        
        let diffTime = getServerUtcTime() - this._last_update_time;
        this.lbl_update_time.string = getTimeDiffString(diffTime);
    }

    /* 加载排行榜数据
     */
    private loadRankData(){
        this.saveRankingLvAndScoreToCache();
        this.list_view.Reload(true);
    }

    /* 保存排名和赛季积分到缓存中
     */
    private saveRankingLvAndScoreToCache(){
        for(let idx = kZeroNumber; idx < this._alliance_ranking_list.length; idx++){
            ManagerRankingLevel.getInstance().saveRankingLvCache(idx + kOneNumber, this._alliance_ranking_list[idx].rankData.score, false, false);
        }
    }
    
    /* 获取单元格数量
     */
    private getCellCount(){
        return this._alliance_ranking_list.length;
    }

    /* 获取单元格高度
     * @param idx   单元格下标
     */
    private getCellHeight(idx: number){
        return this.alliance_info_bar_height;
    }

    /* 获取单元格定义
     * @param idx  单元格下标
     */
    private getCellIdentifer(idx: number): string{
        return "AllianceRankingCell";
    }

    /* 获取单元格数据
     * @param idx 单元格下标
     */
    private getCellData(idx: number){
        //idx = this.getRightCellIndex(idx);
        return this._alliance_ranking_list[idx];
    }
    
    /* 获取单元格真正下标
     * @param idx  单元格下标
     */
    private getCellView(idx: number): InfiniteCell{
        if(idx < kZeroNumber || idx >= this._alliance_ranking_list.length){
            return null;
        }

        let cell = cc.instantiate(this.pfb_alliance_rank).getComponent(RankingListAlliancePfb);
        return cell;
    }
    
}

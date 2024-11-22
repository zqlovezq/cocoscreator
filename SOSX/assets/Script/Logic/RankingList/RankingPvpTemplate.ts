/*
 * @Descripttion: 对战排行榜模板
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kNegativeOneNumber, kOneNumber, kZeroNumber, sortPvpRankingListData } from "../Common/CommonInterface";
import Role from "../Common/Role";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import RankingInfoOfPreSeason from "./RankingInfoOfPreSeason";
import RankingOfPvp from "./RankingOfPvp";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankingPvpTemplate extends cc.Component {

    @property(InfiniteList)
    list_view: InfiniteList = null;

    @property(cc.Label)
    lbl_none_tip: cc.Label = null;
    
    @property(RankingOfPvp)
    self_ranking_pfb: RankingOfPvp = null;

    @property(cc.Prefab)
    pfb_pvp_info: cc.Prefab = null;

    @property(cc.Prefab)
    pfb_pre_season_info: cc.Prefab = null;
    
    @property({displayName: "对战排行榜信息条高度"})
    pvp_info_bar_height: number = kZeroNumber;

    @property({displayName: "上一赛季模块高度"})
    pre_season_height: number = kZeroNumber;

    private _pvp_ranking_list: proto.IRankingOfRoleData[]      = [];
    private _pre_top3_ranking_list: proto.IRankingOfRoleData[] = []
    private _self_ranking_data: proto.IRankingOfRoleData       = null;
    private _self_ranking_lv: number                           = kZeroNumber;
    private _serverRankLen:number
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

        /* 监听获取PVP排行榜信息 */
        Net.listenProtocol(proto.Ptl.GetPvpRankingListRsp, (buffer, ptl)=>{
            let msg = proto.Msg_GetPvpRankingListRsp.decode(buffer);
            cc.log("GetPvpRankingListRsp (获取PVP排行榜) msg: " ,msg)
            if(msg){
                this._pvp_ranking_list      = msg.roleRankingData;
                this._serverRankLen = this._pvp_ranking_list.length
                this._self_ranking_lv       = msg.selfRankingLv || -1;
                sortPvpRankingListData(this._pvp_ranking_list);
                console.log(this._pvp_ranking_list)
                this.calcSelfRankingData();
                this.displayPage();
            }
        }, this);
    }

    start () {
        this.requestPvpRankingList();
    }

    onDestroy(){
        this.destroyPage();
        this._pvp_ranking_list  = [];
    }

    public destroyPage(){
        this.list_view.CleanCellPools();
    }

    /* 请求对战排行榜信息 */
    private requestPvpRankingList(){
        let msg = new proto.Msg_GetPvpRankingListReq();
        Net.Send(proto.Ptl.GetPvpRankingListReq, msg);
    }
    
    /* 计算个人排行榜数据 */
    private calcSelfRankingData(){
        //看看服务器给的数据列表中有没有自己的信息
        let idx = this._pvp_ranking_list.findIndex(tmpObj=>tmpObj.roleData.roleUUID === Role.Instance.RoleData.id);
        if(idx != kNegativeOneNumber){
            this._self_ranking_lv = idx;
            this._self_ranking_data = this._pvp_ranking_list[idx];
            return;
        }

        //服务器数据表中无自己信息，就创建自己的排行榜信息
        let roleBaseData = {    roleUUID: Role.Instance.RoleData.id, 
                                roleName: Role.Instance.RoleData.name, 
                                headID: Role.Instance.RoleData.indexCard, 
                                allianceIconIdx: Role.Instance.RoleData.allianceData.allianceIcon, 
                                allianceName: Role.Instance.RoleData.allianceData.allianceName,
                                headUrl:Role.Instance.RoleData.head};
        this._self_ranking_data = new proto.RankingOfRoleData({ roleData: roleBaseData, 
                                                                seasonScore: Role.Instance.RoleData.rankData.score,
                                                                timestamp: kZeroNumber,
                                                             });
        //看看要不要把自己数据放到总表中
        // this.checkRankingListFill();
    }

    /* 显示页面 */
    private displayPage(){
        this.setSelfRankingData();
        this.refreshRankingList();
        this.refreshPreSeasonData();
    }

    /* 设置对战排行榜信息单元 */
    private setSelfRankingData(){
        if(this.self_ranking_pfb){
            this.self_ranking_pfb.initData(this._self_ranking_data, this._self_ranking_lv, true);
        }
    }

    /* 检测排行榜总榜数据有没有100人，没有就要把自身数据插进去 */
    private checkRankingListFill(){
        let maxNum = tab.Data.GetKeyValue_ConfigTable().RankListMaxCount;
        if(this._pvp_ranking_list.length < maxNum){
            this._pvp_ranking_list.push(this._self_ranking_data);
            sortPvpRankingListData(this._pvp_ranking_list);
            this.checkSelfRankingLv();
            return;
        }

        //不在列表中，但是分数已经超过列表中最后一名了，就替换成自己的
        let maxLen = this._pvp_ranking_list.length;
        if(this._pvp_ranking_list[maxLen - kOneNumber].seasonScore < this._self_ranking_data.seasonScore){
            this._pvp_ranking_list[maxLen - kOneNumber] = this._self_ranking_data;
            sortPvpRankingListData(this._pvp_ranking_list);
            this.checkSelfRankingLv();
        }
    }

    /* 刷新对战排行榜界面 */
    private refreshRankingList(){
        this.lbl_none_tip.node.active = this._pvp_ranking_list.length <= kZeroNumber;
        if(this._pvp_ranking_list.length <= kZeroNumber){
            return;
        }
        this.list_view.Reload(true);
    }

    /* 刷新前赛季数据 */
    private refreshPreSeasonData(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_RefreshPreSeasonRank, this._pre_top3_ranking_list);
    }
    
    /* 检测自身赛季等级 */
    private checkSelfRankingLv(){
        let idx = this._pvp_ranking_list.findIndex(tmpObj=>tmpObj.roleData.roleUUID === Role.Instance.RoleData.id);
        if(idx != kNegativeOneNumber){
            if (this._serverRankLen){
                let realRankingLv = idx + kOneNumber;
                this._self_ranking_lv = realRankingLv != this._self_ranking_lv ? realRankingLv : this._self_ranking_lv;
            }
        }
    }
    
    /* 获取单元格数量 */
    private getCellCount(){
        return this._pvp_ranking_list.length;
    }

    /* 获取单元格高度
     * @param idx   单元格下标
     */
    private getCellHeight(idx: number){
        if(kZeroNumber == idx){
            return this.pre_season_height;
        }
        return this.pvp_info_bar_height;
    }

    /* 获取单元格定义
     * @param idx  单元格下标
     */
    private getCellIdentifer(idx: number): string{
        if(kZeroNumber == idx){
            return "PreSeasonRankingInfo";
        }
        return "PvpRankingCell";
    }

    /*  获取单元格数据
     * @param idx 单元格下标
     */
    private getCellData(idx: number){
        // if(kZeroNumber == idx){
        //     return null;
        // }
        return this._pvp_ranking_list[idx];
    }
    
    /* 获取单元格真正下标
     * @param idx  单元格下标
     */
    private getCellView(idx: number, identifer: string): InfiniteCell{
        if(idx < kZeroNumber || idx >= this._pvp_ranking_list.length + kOneNumber){
            return null;
        }
        let cell = null;
        // if("PreSeasonRankingInfo" == identifer){
        //     cell = cc.instantiate(this.pfb_pre_season_info).getComponent(RankingInfoOfPreSeason);
        //     cell && cell.initData(this._pre_top3_ranking_list);
        // }else{
            cell = cc.instantiate(this.pfb_pvp_info).getComponent(RankingOfPvp);
        // }
        return cell;
    }
}

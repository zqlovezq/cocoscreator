/*
 * @Descripttion: 合作模式排行榜模板
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNegativeOneNumber, kNoneString, kOneNumber, kZeroNumber, sortCooperationRankingListData } from "../Common/CommonInterface";
import Role from "../Common/Role";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import RankingOfCooperation from "./RankingOfCooperation";
import RankingOfCooperationSelf from "./RankingOfCooperationSelf";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankingCooperationTemplate extends cc.Component {

    @property(InfiniteList)
    list_view: InfiniteList = null;

    @property(RankingOfCooperationSelf)
    self_ranking_pfb: RankingOfCooperationSelf = null;

    @property(cc.Label)
    lbl_none_tip: cc.Label = null;

    @property(cc.Prefab)
    pfb_cooperation_info: cc.Prefab = null;
    
    @property({displayName: "合作排行榜信息条高度"})
    cooperation_info_bar_height: number = kZeroNumber;

    private _cooperation_ranking_list: proto.ICooperationBothRankingData[] = [];
    private _self_cooperation_data   : proto.ICooperationBothRankingData;
    private _self_ranking_lv         : number;

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

        //监听"获取合作模式排行榜"信息
        Net.listenProtocol(proto.Ptl.GetCooperationRankingListRsp, (buffer, ptl)=>{
            let msg = proto.Msg_GetCooperationRankingListRsp.decode(buffer);
            cc.log("GetCooperationRankingListRsp (获取合作模式排行榜) msg: " + JSON.stringify(msg))
            if(msg){
                this._cooperation_ranking_list = msg.rankingList;
                this._self_cooperation_data    = msg.selfData;
                this._self_ranking_lv          = msg.selfRankLv;
                this.checkSelfData();
                sortCooperationRankingListData(this._cooperation_ranking_list);
                this.checkSelfLevel();
                this.displayPage();
            }
        }, this);
    }

    start () {
        this.requestCooperationRankingList();
    }

    /** 请求合作模式排行榜信息 */
    private requestCooperationRankingList(){
        let msg = new proto.Msg_GetCooperationRankingListReq();
        Net.Send(proto.Ptl.GetCooperationRankingListReq, msg);
    }

    /* 显示页面 */
    private displayPage(){
        this.setSelfRankingData();
        this.refreshRankingList();
    }

    /* 设置合作排行榜信息单元 */
    private setSelfRankingData(){
        if(this.self_ranking_pfb){
            this.self_ranking_pfb.initData(this._self_cooperation_data, this._self_ranking_lv);
        }
    }
    
    /* 检测自身数据 */
    private checkSelfData(){
        if(this._self_cooperation_data){
            return;
        }
        
        let curTeamData: proto.IDeckData = Role.Instance.RoleData.decks[Role.Instance.DeckIndex];
        let curTeamArrs = curTeamData.deckItems;
        let cardIdArr: proto.IFightCardData[] = [];
        for(let data of curTeamArrs){
            let cardItem = Role.Instance.RoleItemAtrr.getItemByUUID(data);
            if(cardItem){
                cardIdArr.push({staticId: cardItem.staticId, level: cardItem.level});
            }
        }

        let devilUUID     = Role.Instance.RoleData.decks[Role.Instance.DeckIndex].lord;
        let devilData = Role.Instance.RoleItemAtrr.getItemByUUID(devilUUID);
        if(devilData){
            cardIdArr.push({staticId: devilData.staticId, level: devilData.level});
        }

        this._self_cooperation_data = new proto.CooperationBothRankingData();
        this._self_cooperation_data.leftPlayerData = new proto.CooperationRankingBaseData();
        this._self_cooperation_data.leftPlayerData.cardLists = cardIdArr;

        let bHaveAlliance   = Role.Instance.RoleData.allianceData && isValidObj(Role.Instance.RoleData.allianceData.allianceID);
        let allianceIconIdx = bHaveAlliance ? Role.Instance.RoleData.allianceData.allianceIcon : kNegativeOneNumber;
        let allianceName    = bHaveAlliance ? Role.Instance.RoleData.allianceData.allianceName : kNoneString;
        this._self_cooperation_data.leftPlayerData.roleData = { roleUUID: Role.Instance.RoleData.id, 
                                                                roleName: Role.Instance.RoleData.name, 
                                                                headID: Number(Role.Instance.RoleData.indexCard), 
                                                                allianceIconIdx: allianceIconIdx, 
                                                                allianceName: allianceName};
        this._self_cooperation_data.maxRoundCount = kZeroNumber;
        this._self_cooperation_data.timestamp     = kZeroNumber;
        this._self_cooperation_data.rightPlayerData = null;
    }

    /* 检测自身等级 */
    private checkSelfLevel(){
        let idx = this._cooperation_ranking_list.findIndex(
            tmpObj=>tmpObj.leftPlayerData.roleData.roleUUID === this._self_cooperation_data.leftPlayerData.roleData.roleUUID);
        if(idx != kNegativeOneNumber){
            this._self_ranking_lv = idx + kOneNumber;
        }

        idx = this._cooperation_ranking_list.findIndex(
            tmpObj=>tmpObj.rightPlayerData.roleData.roleUUID === this._self_cooperation_data.leftPlayerData.roleData.roleUUID);
        if(idx != kNegativeOneNumber){
            let lv = idx + kOneNumber;
            this._self_ranking_lv = (kZeroNumber < this._self_ranking_lv && this._self_ranking_lv < lv ) ? this._self_ranking_lv : lv;
        }

        //如果自身等级是0，并且列表满了，就默认给上限加1等级
        if(this._self_ranking_lv == kZeroNumber){
            let limitList = tab.Data.GetKeyValue_ConfigTable().RankListMaxCount;
            this._cooperation_ranking_list.length >= limitList && (this._self_ranking_lv = limitList + kOneNumber);
        }
    }

    /* 刷新个人排行榜界面*/
    private refreshRankingList(){
        this.lbl_none_tip.node.active = this._cooperation_ranking_list.length <= kZeroNumber;
        if(this._cooperation_ranking_list.length <= kZeroNumber){
            return;
        }
        this.list_view.Reload(true);
    }

    /* 获取单元格数量 */
    private getCellCount(){
        return this._cooperation_ranking_list.length;
    }

    /* 获取单元格高度
     * @param idx   单元格下标
     */
    private getCellHeight(idx: number){
        return this.cooperation_info_bar_height;
    }

    /* 获取单元格定义
     * @param idx  单元格下标
     */
    private getCellIdentifer(idx: number): string{
        return "CooperationRankingCell";
    }

    /* 获取单元格数据
     * @param idx 单元格下标
     */
    private getCellData(idx: number){
        return this._cooperation_ranking_list[idx];
    }
    
    /* 获取单元格真正下标
     * @param idx  单元格下标
     */
    private getCellView(idx: number, identifer: string): InfiniteCell{
        if(idx < kZeroNumber || idx >= this._cooperation_ranking_list.length + kOneNumber){
            return null;
        }

        let cell = cc.instantiate(this.pfb_cooperation_info).getComponent(RankingOfCooperation);
        return cell;
    }
}

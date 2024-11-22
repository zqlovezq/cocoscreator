/**
 *  成长基金
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import { BossChangeCardEid } from "../../Fight/Config";
import InfiniteCell from "../../InfiniteList/InfiniteCell";
import timeboxsnode from "../../Main/timeboxsnode";
import SimpleItem from "../../NewPlayerGiftBag/SimpleItem";
import { ShowTips } from "../../Utils/GameUtils";
import ActivityController from "./ActivityController";
import GrowFund from "./GrowFund";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GrowFundCell extends InfiniteCell {

    @property(cc.Label)
    needScore: cc.Label = null;

    @property(cc.Node)
    freeGetNode: cc.Node = null

    @property(cc.Node)
    goonGetNode: cc.Node = null

    @property(cc.Node)
    aleadyGetNode: cc.Node = null

    @property(cc.Node)
    gotoFightNode: cc.Node = null

    @property(cc.Node)
    freeAwardNode:cc.Node = null

    @property([cc.Node])
    awardNodes:cc.Node[] = []

    info: proto.IGFCell;
    grow:proto.IGrowFundData = null
    bshowbox: boolean = false;

    /*  */
    getAwardClick(){
        if(this.grow && this.goonGetNode.active){
            if(this.grow.UnlockFund == false){
                ShowTips("ShouldUnlockGrowFund")
                return
            }
        }
        let param = new proto.Msg_GrowFundGetAwardReq();
        param.ID = this.info.ID
        Net.Send(proto.Ptl.GrowFundGetAwardReq, param)
    }

    /*  */
    gotoClick(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.Activity_CloseLayer, null)
    }

    /*  */
    UpdateContent(info:proto.IGFCell){
        this.info = info
        
        if(!info){
            this.gotoFightNode.active = false
            this.freeGetNode.active = false
            this.goonGetNode.active = false
            this.aleadyGetNode.active = false
            return
        }


        let grow:proto.IGrowFundData = null
        let actinfo = ActivityController.getInstance().getActivityData()
        if(actinfo){
            let commonact = actinfo.get(tab.LimitActivityID.LimitActivityID_GrowFund)
            if(commonact){
                grow = commonact.GrowFund
            }
        }

        this.bshowbox = false  //是否有宝箱类型

        let cfg = tab.Data.LimitActivityGrowFundTableByID.getValue(info.ID)
        if(cfg && grow) {
            this.grow = grow
            this.needScore.string = cfg.NeedRankScore.toString()
            this.gotoFightNode.active = cfg.NeedRankScore > grow.HistoryRankScore

            let freecom:SimpleItem = this.freeAwardNode.getComponent(SimpleItem)
            if(freecom){
                let reward = new proto.RewardSimpleInfo()
                reward.rewardCount = cfg.LFreeAwardCnt
                reward.rewardId = cfg.LFreeAwardID
                reward.rewardType = cfg.LFreeAwardType

                let btype = cfg.LFreeAwardType == tab.RewardType.RewardType_BoxGroupType || cfg.LFreeAwardType == tab.RewardType.RewardType_BoxType 
                this.bshowbox = btype && info.GetAwardType == proto.GFCellAwardState.NotGet

                freecom.setView(reward, true)
                freecom.setExGrowFund(cfg.NeedRankScore <= grow.HistoryRankScore && info.GetAwardType == proto.GFCellAwardState.NotGet,
                    info.GetAwardType != proto.GFCellAwardState.NotGet, 
                    false,
                    false)
            }

            for(let i = 0; i < this.awardNodes.length; i++){
                if(i < cfg.PayFreeAwardID.length) {
                    this.awardNodes[i].active = true
                    let com = this.awardNodes[i].getComponent(SimpleItem)

                    let reward = new proto.RewardSimpleInfo()
                    reward.rewardCount = cfg.PayFreeAwardCnt[i]
                    reward.rewardId = cfg.PayFreeAwardID[i]
                    reward.rewardType = cfg.PayAwardType[i]

                    let btype = cfg.PayAwardType[i] == tab.RewardType.RewardType_BoxGroupType || cfg.PayAwardType[i] == tab.RewardType.RewardType_BoxType 
                    this.bshowbox = this.bshowbox || btype && info.GetAwardType == proto.GFCellAwardState.GetFree

                    com.setView(reward, true)
                    com.setExGrowFund(grow.UnlockFund && cfg.NeedRankScore <= grow.HistoryRankScore && info.GetAwardType != proto.GFCellAwardState.GetAll,
                        info.GetAwardType == proto.GFCellAwardState.GetAll, 
                        grow.UnlockFund == false,
                        false)
                } else {
                    this.awardNodes[i].active = false
                }
            }
        }

        this.freeGetNode.active = (info.GetAwardType == proto.GFCellAwardState.NotGet && cfg.NeedRankScore <= grow.HistoryRankScore)
                                    //|| info.GetAwardType == proto.GFCellAwardState.GetFree && grow.UnlockFund && cfg.NeedRankScore <= grow.HistoryRankScore
                                    
        this.goonGetNode.active = info.GetAwardType == proto.GFCellAwardState.GetFree && cfg.NeedRankScore <= grow.HistoryRankScore
        this.aleadyGetNode.active = info.GetAwardType == proto.GFCellAwardState.GetAll

    }

    start () {

    }
}

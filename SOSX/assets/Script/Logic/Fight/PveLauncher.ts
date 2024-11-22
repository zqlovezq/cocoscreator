/**
 * 
*/

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { RequestPvePathType, SignRequestPvEPath } from "../Chat/ChatCellCommonFunc";
import { checkCanWatchAdvert, checkRechargeInterfaceIsOpen, isValidObj, kNegativeOneNumber, kOneNumber, kZeroNumber, sendAdvertPos, WatchAdvert } from "../Common/CommonInterface";
import ConfirmTips from "../Common/ConfirmTips";
import Role from "../Common/Role";
import BattleLayer from "../Main/BattleLayer";
import { popRewardLayer_Ex, showPopLayer, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import Waiting from "../Utils/Waiting";
import { WaitingTag } from "../Utils/WaitingTag";
import { FightLoader } from "./FightLoader";
import PveClearReward from "./PveClearReward";
import PveRewardTips from "./PveRewardTips";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PveLauncher extends PopLayer {

    @property(cc.Node)
    nodeClearReward:cc.Node = null;

    @property(cc.Prefab)
    prefabReward:cc.Prefab = null;

    @property(cc.Prefab)
    prefabRewardTips:cc.Prefab = null;

    @property(PveClearReward)
    dailyReward:PveClearReward = null;

    @property(cc.Label)
    lblCount:cc.Label = null;

    @property(cc.Node)
    nodeStart:cc.Node = null;

    @property(cc.Node)
    nodeBuy:cc.Node = null;

    @property(cc.Label)
    lblBuyDiamond:cc.Label = null;

    @property(cc.Node)
    btnAd:cc.Node = null;

    @property(cc.Node)
    notbuydesctxt: cc.Node = null

    @property(cc.Node)
    notbuynode: cc.Node = null

    @property(cc.Node)
    hadbuynode: cc.Node = null

    @property(cc.Node)
    evilbg: cc.Node = null

    @property(cc.Node)
    buyEvilPassNodeTxt:cc.Node = null

    @property(cc.Node)
    buyEvilPassNodeBtn:cc.Node = null
    
    @property(cc.Node)
    buyEvilPassFirstHalfNode:cc.Node = null

    private _data:proto.Msg_GetPveStatusRsp

    setData(data:proto.Msg_GetPveStatusRsp) {
        this._data = data
        //首次通关奖励
        for(let clearReward of tab.Data.PveClearRewardTable) {
            let reward = cc.instantiate(this.prefabReward).getComponent(PveClearReward)
            if(reward) {
                let status = proto.PveDailyStatus.Incomplete;
                if(data.clearRewards.indexOf(clearReward.Wave) >= 0) {
                    status = proto.PveDailyStatus.Received;
                } else if(data.maxWave >= clearReward.Wave) {
                    status = proto.PveDailyStatus.Complete;
                }
                reward.setRewardData(clearReward.Gold, clearReward.Wave, status)
                reward.setClickCallback((wave, gold, status)=>{
                    // cc.log(`first clear:${wave}`);
                    if(status == proto.PveDailyStatus.Complete) {
                        let req = new proto.Msg_GetPveClearRewardReq();
                        req.waveNum = wave;
                        Net.Send(proto.Ptl.GetPveClearRewardReq, req);
                    } else {
                        let pos = reward.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
                        pos.y += 110;
                        this.showTips(gold, pos);
                    }
                })
                this.nodeClearReward.addChild(reward.node);
            }
        }
        // this.refreshClearReward(data)
        //日常奖励
        this.dailyReward.setRewardData(tab.Data.GetKeyValue_ConfigTable().PveDailyClearGold,
            tab.Data.GetKeyValue_ConfigTable().PveDailyClearWave, data.dailyStatus);
        this.dailyReward.setClickCallback((wave, gold, status)=>{
            // cc.log(`daily：${wave}`);
            if(status == proto.PveDailyStatus.Complete) {
                let req = new proto.Msg_GetPveDailyRewardReq();
                Net.Send(proto.Ptl.GetPveDailyRewardReq, req);
            } else {
                let pos = this.dailyReward.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
                pos.y += 130;
                this.showTips(gold, pos);
            }
        })

        //次数
        this.refreshCount(data.pveCount,data.pveAdCount)
        this.lblBuyDiamond.string = `${tab.Data.GetKeyValue_ConfigTable().PveBuyCountCost}`

        this.refreshEvilPassNode()
    }

    refreshEvilPassNode(){
        //通行证
        this.hadbuynode.active = Role.Instance.isDemonPass == true
        this.notbuydesctxt.active = Role.Instance.isDemonPass == false
        this.notbuynode.active = Role.Instance.isDemonPass == false

        this.buyEvilPassNodeTxt.active = checkRechargeInterfaceIsOpen()
        this.buyEvilPassNodeBtn.active = checkRechargeInterfaceIsOpen()

        this.buyEvilPassFirstHalfNode.active = Role.Instance.IsFirstPayEvilPss == false
    }

    refreshClearReward(data:proto.Msg_GetPveStatusRsp) {
        for(let rewardNode of this.nodeClearReward.children) {
            let reward = rewardNode.getComponent(PveClearReward)
            if(reward) {
                let status = proto.PveDailyStatus.Incomplete;
                if(data.clearRewards.indexOf(reward.Wave()) >= 0) {
                    status = proto.PveDailyStatus.Received;
                } else if(data.maxWave >= reward.Wave()) {
                    status = proto.PveDailyStatus.Complete;
                }
                reward.setStatus(status)
            }
        }

        let com = this.dailyReward.getComponent(PveClearReward)
        if(com){
            com.setStatus(data.dailyStatus)
        }
    }

    refreshCount(currentCount:number, adCount:number) {
        // cc.log(`adCount=${adCount}`)
        let maxCount = tab.Data.GetKeyValue_ConfigTable().PveMaxCount; 
        if(Role.Instance.isDemonPass) {
            //通行证
            maxCount = tab.Data.GetKeyValue_ConfigTable().PveVipMaxCount;
        }
        let leftCount = maxCount - currentCount
        this.lblCount.string = `${leftCount}/${maxCount}`
        if(leftCount > 0) {
            this.nodeStart.active = true;
            this.nodeBuy.active = false;
        } else {
            this.nodeStart.active = false;
            this.nodeBuy.active = true;
            this.btnAd.active = checkCanWatchAdvert(tab.AdvertPosType.AdvertPosType_CooperationAddCount, adCount);
        }
    }

    start () {
        this.evilbg.on(cc.Node.EventType.TOUCH_END, this.onTouchEvil, this)
        
        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_OnBuyEvilPass, (param: any)=>{
            this.refreshEvilPassNode()
        }, this);

        /* 领取pve奖励 */
        Net.listenProtocol(proto.Ptl.GetPveClearRewardRsp, buffer=>{
            let msg = proto.Msg_GetPveClearRewardRsp.decode(buffer)
            cc.log("GetPveClearRewardRsp (领取pve奖励) msg: " + JSON.stringify(msg));
            if(msg) {
                cc.log(`Msg_GetPveClearRewardRsp: ${msg.result}, ${msg.addGold}`)
                if(msg.result == proto.CommonErrorCode.Succeed) {
                    let itemList:proto.IRewardSimpleInfo[] = [{rewardId:proto.ConstItemID.CTI_Gold, rewardCount:msg.addGold}]
                    popRewardLayer_Ex(itemList)
                    //刷新状态
                    this._data.clearRewards = msg.clearRewards;
                    this.refreshClearReward(this._data)
                }
            }
        }, this)

        /* 领取PVE日常奖励 */
        Net.listenProtocol(proto.Ptl.GetPveDailyRewardRsp, buffer=>{
            let msg = proto.Msg_GetPveDailyRewardRsp.decode(buffer)
            cc.log("GetPveDailyRewardRsp (领取PVE日常奖励) msg: " + JSON.stringify(msg));
            if(msg) {
                // cc.log(`Msg_GetPveDailyRewardRsp: ${rsp.result}, ${rsp.addGold}`)
                if(msg.result == proto.CommonErrorCode.Succeed) {
                    let itemList:proto.IRewardSimpleInfo[] = [{rewardId:proto.ConstItemID.CTI_Gold, rewardCount:msg.addGold}]
                    popRewardLayer_Ex(itemList)
                    //刷新状态
                    this._data.dailyStatus = proto.PveDailyStatus.Received;
                    this.refreshClearReward(this._data)
                }
            }
        }, this)

        /* 购买pve次数 */
        Net.listenProtocol(proto.Ptl.BuyPveCountRsp, buffer=>{
            let msg = proto.Msg_BuyPveCountRsp.decode(buffer)
            cc.log("BuyPveCountRsp (购买pve次数) msg: " + JSON.stringify(msg));
            if(msg) {
                if(msg.result == proto.CommonErrorCode.Succeed) {
                    this._data.pveCount = msg.pveCount;
                    this.refreshCount(this._data.pveCount, this._data.pveAdCount)
                }
            }
        }, this)

        /* 获取pve状态 */
        Net.listenProtocol(proto.Ptl.GetPveStatusRsp, buffer=>{
            if(BattleLayer.bOnlyPveAwardReddot){
                return;
            }
            
            Waiting.Hide(WaitingTag.GetPveStatus.toString());
            let msg = proto.Msg_GetPveStatusRsp.decode(buffer)
            cc.log("GetPveStatusRsp (获取pve状态) msg: " + JSON.stringify(msg));
            if(msg) {
                this.setData(msg)
            }
        }, this)

        Waiting.Show(WaitingTag.GetPveStatus.toString())
        BattleLayer.bOnlyPveAwardReddot = false
        Net.Send(proto.Ptl.GetPveStatusReq, new proto.Msg_GetPveStatusReq())
    }

    onTouchEvil() {
        if(this.hadbuynode.active){
            return
        }
        showPopLayer("prefab/EvilPass")
    }

    onMatchClick() {
        //检测禁用卡牌
        if(!this.checkBanned()) {
            ShowTips("PveBanned")
            return
        }
        FightLoader.Instance.MatchPvE();
    }

    onFriendClick() {
        ShowTips("FunctionClosedTip");
    }

    showTips(gold:number, pos:cc.Vec2) {
        let tipsNode = cc.instantiate(this.prefabRewardTips)
        let tips = tipsNode.getComponent(PveRewardTips)
        if(!tips) {
            return;
        }
        tips.setData(gold, pos)
        cc.director.getScene().addChild(tipsNode)
    }

    onClickBuyByDiamond() {
        if(Role.Instance.Diamond < tab.Data.GetKeyValue_ConfigTable().PveBuyCountCost) {
            ShowTips("DiamondNotEnough")
            return;
        }
        ConfirmTips.show("BuyPveCountConfirm", ()=>{
            let req = new proto.Msg_BuyPveCountReq();
            req.byAd = false;
            Net.Send(proto.Ptl.BuyPveCountReq, req);
        })
    }

    onClickBuyByAd() {
        // ShowTips("FunctionClosedTip")
        // return
        //sendAdvertPos(tab.AdvertPosType.AdvertPosType_CooperationAddCount);
        WatchAdvert((error: Error)=>{
            if(error === undefined){
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_CooperationAddCount, kZeroNumber);
            }
        }, 
        (bFinish: boolean)=>{
            if(bFinish){
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_CooperationAddCount, kOneNumber);

                let req = new proto.Msg_BuyPveCountReq();
                req.byAd = true;
                Net.Send(proto.Ptl.BuyPveCountReq, req);
                this._data.pveAdCount++;
            }
        },tab.AdvertPosType.AdvertPosType_CooperationAddCount);
    }

    checkBanned() {
        let deckItems = Role.Instance.getCurrentDeck()
        let lordId = Role.Instance.getCurrentLord()
        for(let item of deckItems) {
            for(let i = 0; i < tab.Data.PveBannedCardTable.length; i++){
                let ele = tab.Data.PveBannedCardTable[i]
                if(ele.CardID == item.staticId){
                    return false
                }
            }

            if(lordId == item.staticId){
                return false
            }
            // if(tab.Data.GetKeyValue_ConfigTable().PveBannedCard.indexOf(item.staticId) >= 0) {
            //     //存在ban掉的卡牌
            //     return false;
            // }
        }
        return true;
    }
}

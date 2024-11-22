/*
 * @Descripttion: 通行证列表item
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import ConfirmTips from "../Common/ConfirmTips";
import Role from "../Common/Role";
import { ItemState } from "../Common/SeasonRankCommonFunc";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import SimpleItem from "../NewPlayerGiftBag/SimpleItem";
import Func from "../Utils/Func";
import { checkInt, ShowTips } from "../Utils/GameUtils";
import PassportFunc from "./PassportFunc";


const { ccclass, property } = cc._decorator;

@ccclass
export default class PassportList extends InfiniteCell {
    @property(cc.Node)
    unlock_node: cc.Node = null

    @property(cc.Label)
    lv_txt: cc.Label = null

    @property(cc.Node)
    free_node: cc.Node = null

    @property(cc.Node)
    advanced_layout: cc.Node = null

    @property(cc.Node)
    buylv_node: cc.Node = null

    @property(cc.Label)
    diamond_txt: cc.Label = null

    conf: tab.BossBoxTable

    isPreview: boolean
    setPreview(isPre: boolean) {
        this.isPreview = isPre
    }

    changeData(info: tab.BossBoxTable) {
        if (this.conf && this.conf && this.conf.ID == info.ID) {
            return
        }
        this.UpdateContent(info)
    }

    /*  */
    UpdateContent(info: tab.BossBoxTable) {
        if (this.conf) {
            // if (this.conf.ID == info.ID){
            //     return
            // }
        }
        this.conf = info

        this.lv_txt.string = this.conf.BossBoxLv.toString()

        this.refreshItem()
    }

    refreshItem() {
        if (!this.isPreview) {
            this.node.zIndex = 100 - this.conf.BossBoxLv
            let isUnlock = Role.Instance.bossBoxData.level >= this.conf.BossBoxLv
            this.unlock_node.active = !isUnlock

            this.buylv_node.parent.active = false
            if (Role.Instance.bossBoxData.level == this.conf.BossBoxLv && this.conf.BossBoxLv != PassportFunc.getMaxLv()) {
                this.buylv_node.parent.active = true
                this.buylv_node.active = false
                //检测是否可以购买
                if (PassportFunc.isDiamondUnlockTime()) {
                    this.buylv_node.active = true
                    this.diamond_txt.string = `${tab.Data.GetKeyValue_ConfigTable().BossBoxUnlockLvCost}`;
                }
            }
        }


        let nState = this.getNormalState()
        let frees = this.free_node.getComponentsInChildren(SimpleItem)
        for (let index = 0; index < frees.length; index++) {
            const v = frees[index];
            v.setNameVisible(false)
            v.setView({ rewardType: this.conf.ItemType, rewardId: this.conf.ItemId, rewardCount: this.conf.ItemCnt })
            v.setClickCallback(() => {
                this.onItemClick(false)
            })

            v.setCanReceiveVisible(false)
            v.setAleadyGetVisible(false)
            v.setLockVisible(false)
            if (nState == ItemState.CAN_RECEIVE) {
                v.setCanReceiveVisible(true)
            } else if (nState == ItemState.ALREADY_RECEIVE) {
                v.setAleadyGetVisible(true)
            } else if (nState == ItemState.LOCK) {
                // v.setLockVisible(true)
            }
        }
        let pState = this.getPassCheckState()
        let advanceds = this.advanced_layout.getComponentsInChildren(SimpleItem)
        for (let index = 0; index < advanceds.length; index++) {
            const v = advanceds[index];
            v.setNameVisible(false)
            v.setSelectVisible(false)
            v.setClickSelectCallback(null)
            //自选宝箱
            if (Func.isCheckOptionalBox(this.conf.PassItemType,this.conf.PassItemId)){
                let cardId = checkInt( Func.getStorage(PassportFunc.passportSelectBoxStorageKey())) 
                if (cardId > 0){
                    v.setSelectVisible(true)
                    v.setClickSelectCallback(()=>{
                        this.onClickSelect()
                    })
                    v.setView({ rewardType: tab.RewardType.RewardType_ItemType, rewardId: cardId, rewardCount: this.conf.PassItemCnt })
                }else{
                    v.setView({ rewardType: this.conf.PassItemType, rewardId: this.conf.PassItemId, rewardCount: this.conf.PassItemCnt })
                }
            }else{
                v.setView({ rewardType: this.conf.PassItemType, rewardId: this.conf.PassItemId, rewardCount: this.conf.PassItemCnt })
            }
            v.setLockVisible(!Role.Instance.isDemonPass)
            v.setClickCallback(() => {
                this.onItemClick(true)
            })

            v.setCanReceiveVisible(false)
            v.setAleadyGetVisible(false)
            if (pState == ItemState.CAN_RECEIVE) {
                v.setCanReceiveVisible(true)
            } else if (pState == ItemState.ALREADY_RECEIVE) {
                v.setAleadyGetVisible(true)
            } else if (pState == ItemState.LOCK) {
                // v.setLockVisible(true)
            }
        }
    }

    getNormalState() {
        let bossBoxData = Role.Instance.bossBoxData
        return bossBoxData.level < this.conf.BossBoxLv && ItemState.LOCK
            || bossBoxData.gotBossBoxRewardLevels.includes(this.conf.BossBoxLv) && ItemState.ALREADY_RECEIVE
            || ItemState.CAN_RECEIVE
    }

    getPassCheckState() {
        let bossBoxData = Role.Instance.bossBoxData
        return (Role.Instance.isDemonPass == false && ItemState.LOCK)
            || bossBoxData.level < this.conf.BossBoxLv && ItemState.LOCK
            || bossBoxData.gotBossBoxVipRewardLevels.includes(this.conf.BossBoxLv) && ItemState.ALREADY_RECEIVE
            || ItemState.CAN_RECEIVE
    }

    onItemClick(isPassCheck: boolean) {
        if (this.conf == null) {
            return
        }

        let state = this.getNormalState()
        if (isPassCheck) {
            state = this.getPassCheckState()
        }
        if (state == ItemState.CAN_RECEIVE) {
            let cardId = 0
            if (Role.Instance.isDemonPass && Func.isCheckOptionalBox(this.conf.PassItemType,this.conf.PassItemId)) {
                //确定自选宝箱选择的cardid
                cardId = checkInt( Func.getStorage(PassportFunc.passportSelectBoxStorageKey())) 
                if (cardId == 0) {
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShowOpenDrawBox, { boxId: this.conf.PassItemId })
                    return
                }
            }

            let param = new proto.Msg_BossBoxGetLvRewardReq()   //发送领取宝箱的协议
            param.bossBoxId = this.conf.ID
            if (cardId) {
                param.optionalId = cardId
            }
            Net.Send(proto.Ptl.BossBoxGetLvRewardReq, param)
        } else if (state == ItemState.LOCK) {
            if (isPassCheck) {
                if (Func.isCheckOptionalBox(this.conf.PassItemType,this.conf.PassItemId)) {
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShowOpenDrawBox, { boxId: this.conf.PassItemId })
                    return
                }
                if (Role.Instance.isDemonPass == false) {
                    ShowTips("unlockafterbuyevil")
                    return
                }
            }
            if (Role.Instance.bossBoxData.level < this.conf.BossBoxLv) {
                ShowTips("bossboxlevelnotenough")
                return
            }

        }
    }

    onClickSelect(){
        if (this.getPassCheckState() != ItemState.ALREADY_RECEIVE ){
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShowOpenDrawBox, { boxId: this.conf.PassItemId })
        }
    }

    onClick() {
        console.log("点击----")
        let bossBoxData = Role.Instance.bossBoxData
        if (bossBoxData.level < this.conf.BossBoxLv) {
            ShowTips("bossboxlevelnotenough")
            return
        }
        if (this.getNormalState() == ItemState.ALREADY_RECEIVE) {
            this.onItemClick(true)
        } else {
            this.onItemClick(false)
        }
    }

    onClickLvBuy() {
        ConfirmTips.showPassportLvBuy(() => {
            console.log("确定购买----")
            if (!Role.Instance.checkDiamond(tab.Data.GetKeyValue_ConfigTable().BossBoxUnlockLvCost)) {
                ShowTips("DiamondNotEnough");
                return
            }
            //发送解锁下一等级的协议
            let param = new proto.Msg_BossBoxUnlockLvReq()
            param.lv = Role.Instance.bossBoxData.level + 1
            Net.Send(proto.Ptl.BossBoxUnlockLvReq, param)
        })
    }
}

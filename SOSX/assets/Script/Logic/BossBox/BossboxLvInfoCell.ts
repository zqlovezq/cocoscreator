/**
 * 
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import boxtips from "../Common/boxtips";
import { checkRechargeInterfaceIsOpen } from "../Common/CommonInterface";
import CommonItem from "../Common/CommonItem";
import Role from "../Common/Role";
import { ItemState } from "../Common/SeasonRankCommonFunc";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { flyGold, getServerUtcTime, setTimeTXT, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import BossboxOpenNow from "./BossboxOpenNow";

const {ccclass, property} = cc._decorator;

export interface bossboxcellinfo {

}

@ccclass
export default class BossboxLvInfoCell extends InfiniteCell {

    @property(cc.Node)
    leftItem: cc.Node = null

    @property(cc.Node)
    rightItem: cc.Node = null

    @property(cc.Label)
    curLevel: cc.Label = null

    @property(cc.Sprite)
    curLevelbg: cc.Sprite = null

    @property(cc.Node)
    conditionNode: cc.Node = null

    @property(cc.Node)
    unlockNode: cc.Node = null

    @property(cc.Label)
    unlockTimeleft: cc.Label = null

    @property(cc.Node)
    opennowNode: cc.Node = null

    @property(cc.Label)
    opennowCost: cc.Label = null

    _cfg:tab.BossBoxTable = null
    gift_dis24lefttime: number;

    onLoad () {
        this.conditionNode.on(cc.Node.EventType.TOUCH_END, this.opennowMeth, this)

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_BossboxOpenNow, (id:number)=>{
            if(id == this._cfg.ID){
                this.playNormal()
            }
        }, this);

        //Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_BossboxAwardFlyGold, (obj:{id:number, type:number})=> {
            //if(this._cfg.ID == obj.id)
            //{
            //  obj.type == proto.BossBoxType.BossBoxPassCheck && flyGold(this.leftItem.convertToWorldSpaceAR(new cc.Vec2(0,0)))
            //  obj.type == proto.BossBoxType.BossBoxNormal && flyGold(this.rightItem.convertToWorldSpaceAR(new cc.Vec2(0,0)))
            // }
        //}, this);
    }

    opennowMeth() {
        if(this.opennowNode.active){
            showPopLayerV2("prefab/BossboxOpenNow", BossboxOpenNow).then((value:BossboxOpenNow)=>{
                if(value){
                    value.setAction(this._cfg.ID)
                }
            })
        }
    }

    UpdateContent(celldata){
        if(celldata){
            this.node.active = true
            this.setView(celldata)
        }
    }

    GetScoreNode() {
        return null
    }


    setView(bossboxcfg:tab.BossBoxTable){
        if(!bossboxcfg){
            return
        }
       
        this._cfg = bossboxcfg
        let level = bossboxcfg.BossBoxLv
        let bossBoxData = Role.Instance.bossBoxData
        this.curLevel.string = level.toString()
        this.curLevelbg.setTexture(bossboxcfg.indexIcon)


        let leftItem:CommonItem = this.leftItem.getComponent(CommonItem)
        if(leftItem) {
            leftItem.setBossBoxNode(true)
            let state = Role.Instance.isDemonPass ==  false && ItemState.LOCK 
                || bossBoxData.lv < level  && ItemState.LOCK
                || bossBoxData.nextDayUnLockLv >= 0 && bossBoxData.nextDayUnLockLv <= level  && ItemState.LOCK 
                || bossBoxData.getPassCheckRewardLv.includes(level) && ItemState.ALREADY_RECEIVE 
                || ItemState.CAN_RECEIVE

            leftItem.setBossBoxGoldFrame(true)
            leftItem.setQualityFrameVisible(false)
            leftItem.setBossBoxPassLight(true)
            leftItem.setBuleBackground(false)

            leftItem.initWithStaticId(bossboxcfg.PassItemId, bossboxcfg.PassItemType , bossboxcfg.PassItemCnt, state, false, true, false)

            leftItem.setClickCallback(()=>{
                this.onClick({rewardId:bossboxcfg.PassItemId, rewardType:Number(bossboxcfg.PassItemType), rewardCount:bossboxcfg.PassItemCnt}, state, proto.BossBoxType.BossBoxPassCheck, true)
            })
        }

        let rightItem:CommonItem = this.rightItem.getComponent(CommonItem)
        if(rightItem) {
            rightItem.setBossBoxNode(true)

            let state = bossBoxData.lv < level  && ItemState.LOCK 
            || bossBoxData.nextDayUnLockLv >= 0 && bossBoxData.nextDayUnLockLv <= level  && ItemState.LOCK 
            || bossBoxData.getNormalRewardLv.includes(level) && ItemState.ALREADY_RECEIVE 
            || ItemState.CAN_RECEIVE

            rightItem.setQualityFrameVisible(true)
            rightItem.setQualityFrame(tab.ItemQuality.ItemQuality_Blue)
            rightItem.setBuleBackground(true)
            rightItem.setBossBoxGoldFrame(false)
            rightItem.setBossBoxPassLight(false)

            rightItem.initWithStaticId(bossboxcfg.ItemId , bossboxcfg.ItemType , bossboxcfg.ItemCnt , state, false, true, false)

            rightItem.setClickCallback(()=>{
                this.onClick({rewardId:bossboxcfg.ItemId, rewardType:Number(bossboxcfg.ItemType), rewardCount:bossboxcfg.ItemCnt}, state, proto.BossBoxType.BossBoxNormal, false)
            })
        }
        this.conditionNode.active = false
        let bfull:boolean  = bossBoxData.nextDayUnLockLv < 0
        if( bossBoxData.nextDayUnLockLv == this._cfg.BossBoxLv && (bossBoxData.lv + 1) >= this._cfg.BossBoxLv) {
            this.conditionNode.active = true
            this.setUnlockTime()
            this.playReverse()
        } else if( (bfull || bossBoxData.nextDayUnLockLv > this._cfg.BossBoxLv) && (bossBoxData.lv + 1) == this._cfg.BossBoxLv) {
            this.conditionNode.active = true
            this.setUnlockCost()
            this.playReverse()
        } else {
            this.conditionNode.active = false
        }
    }

    onClick(item:proto.IRewardSimpleInfo, state:ItemState, boxtype:proto.BossBoxType, bleft:boolean)
    {
        if(state == ItemState.CAN_RECEIVE)
        {
            let param = new proto.Msg_BossBoxGetLvRewardReq()   //发送领取宝箱的协议
            param.bossBoxId = this._cfg.ID
            param.boxType = boxtype
            Net.Send(proto.Ptl.BossBoxGetLvRewardReq, param)
        }
        else if(state == ItemState.LOCK)
        {
            let node = bleft ? this.leftItem : this.rightItem
            item.rewardType == Number(tab.RewardType.RewardType_BoxGroupType) && boxtips.showTips(item.rewardId, node)
            item.rewardType == Number(tab.RewardType.RewardType_BoxType) && boxtips.showTips(0, node, item.rewardId)
            if(Number(item.rewardType) != Number(tab.RewardType.RewardType_BoxGroupType) || Number(item.rewardType) != Number(tab.RewardType.RewardType_BoxType))
            {
                boxtips.clickTargetUUid = ""
            }

         

            if(Role.Instance.bossBoxData.lv < this._cfg.BossBoxLv)
            {
                ShowTips("bossboxlevelnotenough")
                return
            }

            let nextlv = Role.Instance.bossBoxData.nextDayUnLockLv
            if(nextlv > 0 && nextlv <= this._cfg.BossBoxLv)
            {
                ShowTips("bossboxlevelnotenough")
            }

            if(bleft && boxtype == proto.BossBoxType.BossBoxPassCheck && Role.Instance.isDemonPass == false)
            {
                if(!checkRechargeInterfaceIsOpen()){
                    ShowTips("FunctionClosedTip");
                    return;
                }
                ShowTips("unlockafterbuyevil")
                return
            }
        }
    }

    setUnlockCost() {
        this.conditionNode.active = true
        this.opennowNode.active = true
        this.unlockNode.active = false
       // this.opennowCost.string = tab.Data.GetKeyValue_ConfigTable().BossBoxUnlockLvCost.toString()
    }

    setUnlockTime() {
        this.conditionNode.active = true
        this.opennowNode.active = false
        this.unlockNode.active = true

        let svrt = getServerUtcTime()
        let ptime =  new Date()
        ptime.setTime(svrt*1000)
        let hours = ptime.getHours()
        let mini = ptime.getMinutes()
        let sec = ptime.getSeconds()            
        this.gift_dis24lefttime = 86400 - hours*3600 - mini*60 - sec

        if(this.gift_dis24lefttime > 0) {
            setTimeTXT(this.unlockTimeleft , this.gift_dis24lefttime)
            this.unschedule(this.timeCountDown)
            this.schedule(this.timeCountDown, 1)
        }
    }

    timeCountDown(dt) {
        this.gift_dis24lefttime--;
        let lefttime:number = this.gift_dis24lefttime
        if(lefttime <= -1){
            this.node.active = false
            //重新请求下首领宝箱的信息,用来刷新界面
            let param3 = new proto.Msg_BossBoxInfoReq()
            Net.Send(proto.Ptl.BossBoxInfoReq, param3)

            this.unschedule(this.timeCountDown)
            return
        }

        lefttime = lefttime < 0 ? 0 :lefttime
        setTimeTXT(this.unlockTimeleft, lefttime)
    }

    playNormal(){
        let ani:cc.Animation = this.conditionNode.getComponent(cc.Animation)
        if(ani){
            let clips:cc.AnimationClip[] =  ani.getClips()
            if(clips.length > 0) {
                clips[0].wrapMode = cc.WrapMode.Normal
                ani.play("BossboxLvInfoCell")
            }
        }        
    }

    playReverse(){
        let ani:cc.Animation = this.conditionNode.getComponent(cc.Animation)
        if(ani){
            let clips:cc.AnimationClip[] =  ani.getClips()
            if(clips.length > 0){
                clips[0].wrapMode = cc.WrapMode.Reverse
                ani.play("BossboxLvInfoCell")
            }
        }   
    }

    start () {

    }

}

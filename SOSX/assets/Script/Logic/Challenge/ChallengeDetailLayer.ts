/**
 * 
*/

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import Role from "../Common/Role";
import { getItemIconURL, getServerUtcTime, setTimeTXT, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import ChanllengeDocLayer from "./ChallengeDocLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChallengeDetailLayer extends PopLayer {

    @property(cc.Label)
    title: cc.Label = null;

    @property(cc.Sprite)
    icon: cc.Sprite = null

    @property(cc.Label)
    desc: cc.Label = null

    @property(cc.Label)
    wintimes: cc.Label = null

    @property(cc.Sprite)
    awardIcon: cc.Sprite = null

    @property(cc.Label)
    awardCount: cc.Label = null

    @property(cc.Node)
    openNode: cc.Node = null

    @property(cc.Node)
    freenode: cc.Node = null

    @property(cc.Node)
    costnode: cc.Node = null

    @property(cc.Label)
    cost: cc.Label = null

    @property(cc.Node)
    timenode: cc.Node = null

    @property(cc.Label)
    lefttime: cc.Label = null

    @property([cc.Sprite])
    preAwardSprVec: cc.Sprite[] = []

    @property(cc.Node)
    buffnode: cc.Node = null

    @property(cc.Label)
    bufftime: cc.Label = null

    awardID = []
    awardType = []
    awardVec = []
    scaleVec = []
    challengeInfo:proto.IChallengeInfo
    totime:number = 0
    challengeId: any;

    /* */
    onLoad () {
        for(let i = 0; i< this.preAwardSprVec.length; i++){
            this.preAwardSprVec[i].node.on(cc.Node.EventType.TOUCH_END, (event)=>{
                event.stopPropagation()
                this.onAwardTouch(i)
            }, this)
        }
        this.openNode.active = false
    }

    onAwardTouch(index:number) {
        this.wintimes.string = String(index+1)
        for(let i = 0; i<this.preAwardSprVec.length; i++){
            this.preAwardSprVec[i].node.getChildByName("bule").active = false
        }

        this.preAwardSprVec[index].node.getChildByName("bule").active = true

        let node =  this.preAwardSprVec[index].node.getChildByName("icon")
        if(node) {
            this.awardIcon.spriteFrame = node.getComponent(cc.Sprite).spriteFrame
            // this.awardIcon.node.scaleX = this.scaleVec[index] || 1
            // this.awardIcon.node.scaleY = this.scaleVec[index] || 1
            if(this.awardIcon.node.scale < 1) {
                this.awardIcon.node.setPosition(6, 1)
            } else {
                this.awardIcon.node.setPosition(0,0)
            }
        }

        this.awardCount.string = String(this.awardVec[index] || 0)
        this.awardCount.node.active = this.awardVec[index] > 1

        this.buffnode.active = false
        if(tab.RewardType.RewardType_BagSpeedUp == this.awardType[index]) { //如果是buff
            this.buffnode.active = true
            let cfg = tab.Data.BagSpeedUpTableByID.getValue(this.awardID[index])
            if(cfg){
                this.bufftime.string = cfg.BagSpeedUpTime.toString()
            }
        }   
    }

    onClickGetIn(){
        if(this.challengeInfo.endUTC <= getServerUtcTime()){
            ShowTips("ChallengeActiveEnds")   //活动已结束
            this.hide()
            return
        }
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShowChallengeToFight, this.challengeInfo)
        this.hide()
    }

    /*  */
    onHelp(){
        showPopLayerV2("prefab/ChanllengeDocLayer", ChanllengeDocLayer).then((value:ChanllengeDocLayer)=>{
            value.setview(this.challengeInfo)
        })
    }

    onClose(){
        this.hide()
    }

    /*  */
    setView(chalInfo:proto.IChallengeInfo){
        if(!chalInfo){
            return
        }

        let cfg:tab.ChallengeTable = tab.Data.ChallengeTableByID.getValue(chalInfo.challengeId)
        if(!cfg){
            return
        }

        this.challengeInfo = chalInfo

        this.title.string = cfg.ChalTitle
        this.icon.setTexture(cfg.ChalIcon)
        this.desc.string = cfg.ChalGetInDesc
        //设置奖励,默认选中最后一个
        let award:string[] = cfg.ChalAward
        let curAwardCnt =  Role.Instance.challengeData.challengeData.awardCount
        let brunning = this.challengeInfo.challengeId == Role.Instance.challengeData.challengeData.challengeId
        for(let i = 0; i < award.length && i < this.preAwardSprVec.length; i++){
            let curaward = cfg.ChalAward[i].split(',')

            let itemType = Number(curaward[0])
            let itemId = Number(curaward[1])
            this.awardVec[i] = Number(curaward[2])
            this.awardID[i] = itemId
            this.awardType[i] = itemType
            let icon = this.preAwardSprVec[i].node.getChildByName("icon")
            if(icon){
                let info = getItemIconURL(itemId, itemType)
                if(itemType == tab.RewardType.RewardType_BoxGroupType || itemType == tab.RewardType.RewardType_BoxType){
                    icon.scale = 0.13
                } else {
                    icon.scale = 0.5
                }
                icon.getComponent(cc.Sprite).setTexture(info.icon)
                this.scaleVec[i] = info.scale
            }
            
            if(brunning && i < curAwardCnt) { //领取过
                let rightmark = this.preAwardSprVec[i].node.getChildByName("spr_mask")
                if(rightmark){
                    rightmark.active = true
                }
            }
        }

        this.cost.string = tab.Data.GetKeyValue_ConfigTable().ChallengeActivityCostToFight.toFixed()
        this.costnode.active = false
        if(brunning){
            this.openNode.active = true
            this.costnode.active = Role.Instance.isDemonPass == false && Role.Instance.challengeData.challengeData.failCount >= tab.Data.GetKeyValue_ConfigTable().ChallengeActivityLoseMax
        }
        this.freenode.active = !(this.costnode.active)
        
        let svrtime = getServerUtcTime()
        if(chalInfo.startUTC > svrtime){
            this.timenode.active = true
            this.totime = chalInfo.startUTC
            this.unschedule(this.timeCountDown)
            this.timeCountDown(0)
            this.schedule(this.timeCountDown.bind(this), 1)
        } else if(chalInfo.startUTC <= svrtime && chalInfo.endUTC > svrtime) {
            this.timenode.active  = false          
        }

        this.scheduleOnce(()=>{
            this.onAwardTouch(this.preAwardSprVec.length - 1)
        }, 0.2)
    }

    timeCountDown(dt){
        let left = this.totime - getServerUtcTime()
        if(left <= 0){
            //活动开启
            this.timenode.active  = false
            this.openNode.active = true
            this.costnode.active = Role.Instance.isDemonPass == false && Role.Instance.challengeData.challengeData.failCount >= tab.Data.GetKeyValue_ConfigTable().ChallengeActivityLoseMax

            this.unschedule(this.timeCountDown)
            return
        }
        setTimeTXT(this.lefttime, left)
    }
}

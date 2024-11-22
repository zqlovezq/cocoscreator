/**
 * 
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { checkRechargeInterfaceIsOpen, kOneNumber, kZeroNumber, sendAdvertPos, WatchAdvert } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { flyResources, getItemIconURL, getServerUtcTime, popRewardLayer_Ex, setTimeTXT, showPopLayer, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import ChanllengeDocLayer from "./ChallengeDocLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChallengeFight extends cc.Component {

    @property(cc.Label)
    winCnt: cc.Label = null

    @property([cc.Sprite])
    losesprvec: cc.Sprite[] = []

    @property(cc.Node)
    preAwardNode: cc.Node = null

    @property(cc.Node)
    preAwardMovenode: cc.Node = null

    @property(cc.Sprite)
    preAwardSpr: cc.Sprite = null

    @property(cc.Label)
    preAwardCount: cc.Label = null

    @property(cc.Label)
    preAwardWinNum: cc.Label = null

    @property(cc.Sprite)
    icon: cc.Sprite = null

    @property(cc.Label)
    title: cc.Label = null

    @property(cc.Node)
    leftTimenode: cc.Node = null

    @property(cc.Label)
    toEndLabel: cc.Label = null

    @property(cc.Label)
    leftTime: cc.Label = null

    @property(cc.Node)
    getawardMaskNode: cc.Node = null

    @property(cc.Node)
    getawardItemNode: cc.Node = null

    @property(cc.Sprite)
    getawardItemIcon: cc.Sprite = null

    @property(cc.Label)
    getawardItemCount: cc.Label = null

    @property(cc.Label)
    getawardWinCnt: cc.Label = null

    @property(cc.Node)
    tofightBtnnode: cc.Node = null

    @property(cc.Node)
    buytimesnode: cc.Node = null

    @property(cc.Label)
    buytimescost: cc.Label = null
 
    @property([cc.Sprite])
    preAwardSprVec: cc.Sprite[] = []

    @property(cc.Node)
    buffnode: cc.Node = null

    @property(cc.Label)
    bufftime: cc.Label = null

    @property(cc.Node)
    evilbtn: cc.Node = null

    @property(cc.Node)
    freebtn: cc.Node = null

    challengeInfo: proto.IChallengeInfo;
    totime: number = -1;
    awardIndex:number = -1;
    awardID:number = 0

    awardVec = [];
    scaleVec = []

    /* 领取奖励 */
    onClickGetAward(){
        let param = new proto.Msg_ChallengeDoRewardReq()
        param.awardPosition = this.awardIndex + 1
        Net.Send(proto.Ptl.ChallengeDoRewardReq, param)
    }

    /*  */
    onAwardTouch(index:number){
        if(this.preAwardNode.active == false){
            for(let i = 0; i<this.preAwardSprVec.length; i++){
                this.preAwardSprVec[i].node.parent.getChildByName("New Sprite").active = false
            }
            
            this.preAwardSprVec[index].node.parent.getChildByName("New Sprite").active = true
            
            this.preAwardSpr.spriteFrame =this.preAwardSprVec[index].spriteFrame           
            this.preAwardSpr.node.scale = this.scaleVec[index] || 1
            if(this.preAwardSpr.node.scale < 1) {
                this.preAwardSpr.node.setPosition(6, 1)
            } else {
                this.preAwardSpr.node.setPosition(0,0)
            }
            this.preAwardCount.string = String(this.awardVec[index] || 0)
            this.preAwardCount.node.active = this.awardVec[index] > 1
            this.preAwardWinNum.string = String(index + 1)
            this.preAwardNode.active = true
            this.preAwardMovenode.setPosition( new cc.Vec2(this.preAwardSprVec[index].node.parent.getPosition().x, this.preAwardMovenode.getPosition().y))
        }
    }

    /*  */
    hidePreviewAward(){
        this.preAwardNode.active = false
    }

    /*  */
    onLoad () {
        this.preAwardNode.active = false
        this.getawardItemNode.on(cc.Node.EventType.TOUCH_END, this.onClickGetAward, this)

        for(let i = 0; i< this.preAwardSprVec.length; i++){
            this.preAwardSprVec[i].node.on(cc.Node.EventType.TOUCH_END, ()=>{this.onAwardTouch(i)}, this)
        }

        this.node.on(cc.Node.EventType.TOUCH_END, this.hidePreviewAward, this, true)
        let self = this

        /* 挑战领取奖励 */
        Net.listenProtocol(proto.Ptl.ChallengeDoRewardRsp, function (buffer, ptl){
            let msg = proto.Msg_ChallengeDoRewardRsp.decode(buffer)
            cc.log("ChallengeDoRewardRsp(挑战领取奖励) : msg " + JSON.stringify(msg));
            if (msg != null){
                if(msg.result == proto.CommonErrorCode.Succeed){
                    Role.Instance.challengeData.challengeData.awardCount ++ 
                    popRewardLayer_Ex(msg.reward, ()=>{
                        self.getawardMaskNode.active = false
                        if(self.awardIndex < self.preAwardSprVec.length){
                            flyResources(self.preAwardSprVec[self.awardIndex].node, self.awardID)
                        }
                    });
                    self.setView(this.challengeInfo)
                }
            }
        }, this)

        /* 重置挑战次数 */
        Net.listenProtocol(proto.Ptl.ChallengeCountResetRsp, function (buffer, ptl){
            let msg = proto.Msg_ChallengeCountResetRsp.decode(buffer)
            cc.log("ChallengeCountResetRsp(重置挑战次数) : msg " + JSON.stringify(msg));
            if (msg != null){
                if(msg.result == proto.CommonErrorCode.Succeed){
                   Role.Instance.challengeData.challengeData.failCount = 0
                   self.refreshInfoAboutFail()
                } else if(msg.result == proto.CommonErrorCode.Failed){
                    ShowTips("OnlyGoldNotEnough")
                }
            }
        }, this)

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_OnBuyEvilPass, (param: any)=>{
            this.refreshInfoAboutFail()
        }, this);
    }

    setView(chalInfo:proto.IChallengeInfo) {
        let cfg:tab.ChallengeTable = tab.Data.ChallengeTableByID.getValue(chalInfo.challengeId)
        if(!cfg){
            return
        }
        if(!Role.Instance.challengeData) return

        this.challengeInfo = chalInfo

        this.title.string = cfg.ChalTitle
        this.icon.setTexture(cfg.ChalIcon)

        this.refreshInfoAboutFail();

        if(Role.Instance.challengeData.challengeData.awardCount == cfg.ChalAward.length) { //如果已经领完奖励了
            this.tofightBtnnode.active = false
            this.buytimesnode.active = false
        }

        let awardIndex:number = -1;
        let award:string[] = cfg.ChalAward
        let curWinCnt = Role.Instance.challengeData.challengeData.winCount

        this.winCnt.string = curWinCnt.toString()

        let awardframe:string = null
        let awardtype:number = -1;
        let curAwardCnt =  Role.Instance.challengeData.challengeData.awardCount
        for(let i = 0; i < award.length && i < this.preAwardSprVec.length; i++) {
            let curaward = cfg.ChalAward[i].split(',')

            let itemType = Number(curaward[0])
            let itemId = Number(curaward[1])
            this.awardVec.push(Number(curaward[2]))

            let info = getItemIconURL(itemId, itemType)
            this.preAwardSprVec[i].setTexture(info.icon)
            if(itemType == tab.RewardType.RewardType_BoxGroupType || itemType == tab.RewardType.RewardType_BoxType) {
                this.preAwardSprVec[i].node.scale = 0.13
            } else {
                this.preAwardSprVec[i].node.scale = 0.5
            }

            this.scaleVec[i] = info.scale

            if( i < curAwardCnt) { //领取过
                let rightmark = this.preAwardSprVec[i].node.parent.getChildByName("spr_mask")
                if(rightmark){
                    rightmark.active = true
                }
            } else {
                if(i < curWinCnt && awardIndex < 0){
                    awardIndex = i;
                    awardframe = info.icon
                    this.awardID = itemId
                    awardtype = itemType
                }
            }
        }

        //领奖
        if(awardIndex >= 0){
            this.awardIndex = awardIndex
            this.getawardMaskNode.active = true
            this.getawardItemNode.setPosition( new cc.Vec2(this.preAwardSprVec[awardIndex].node.parent.getPosition().x, this.getawardItemNode.getPosition().y))
            this.getawardItemCount.string = String(this.awardVec[awardIndex])
            this.getawardItemIcon.setTexture(awardframe)
            this.getawardWinCnt.string = String(awardIndex + 1)
            this.buffnode.active = false
            if(tab.RewardType.RewardType_BagSpeedUp == awardtype) { //如果是buff
                this.buffnode.active = true
                let cfg = tab.Data.BagSpeedUpTableByID.getValue(this.awardID)
                if(cfg){
                    this.bufftime.string = cfg.BagSpeedUpTime.toString()
                }
            }
        }

        let svrtime = getServerUtcTime()
        if(chalInfo.startUTC <= svrtime && chalInfo.endUTC > svrtime){
            this.totime = chalInfo.endUTC
            this.unschedule(this.timeCountDown)
            this.timeCountDown(0)
            this.schedule(this.timeCountDown.bind(this), 1)          
        }
    }

    private refreshInfoAboutFail() {
        if(!Role.Instance.challengeData) 
            return

        let failcnt = Role.Instance.challengeData.challengeData.failCount;
        let bshowbuy = failcnt >= tab.Data.GetKeyValue_ConfigTable().ChallengeActivityLoseMax;

        this.tofightBtnnode.active = !bshowbuy;
        this.buytimesnode.active = bshowbuy;
        this.buytimescost.string = tab.Data.GetKeyValue_ConfigTable().ChallengeActivityCostToFight.toString();

        this.evilbtn.active = Role.Instance.isDemonPass == false && checkRechargeInterfaceIsOpen()

        this.freebtn.active = Role.Instance.isDemonPass == true

        for (let i = 0; i < this.losesprvec.length; i++) {
            this.losesprvec[i].node.active = i < failcnt
        }
    }

    buyChallengeTimes(){
        let param = new proto.Msg_ChallengeCountResetReq()
        param.resetType = proto.Msg_ChallengeCountResetReq.ResetType.CostGold
        Net.Send(proto.Ptl.ChallengeCountResetReq, param)
    }

    buyChallengeTimesADV(){
        //sendAdvertPos(tab.AdvertPosType.AdvertPosType_ChallengeResurgence)
        WatchAdvert((error: Error)=>{
            if(error === undefined){
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_ChallengeResurgence, kZeroNumber);
            }
        }, 
        (bFinish: boolean)=>{
            if(bFinish){
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_ChallengeResurgence, kOneNumber);
                let param = new proto.Msg_ChallengeCountResetReq();
                param.resetType = proto.Msg_ChallengeCountResetReq.ResetType.AVD;
                Net.Send(proto.Ptl.ChallengeCountResetReq, param);
            }
        },tab.AdvertPosType.AdvertPosType_ChallengeResurgence);
    }

    buyChallengeTimesFree(){
        let param = new proto.Msg_ChallengeCountResetReq()
        param.resetType = proto.Msg_ChallengeCountResetReq.ResetType.EvilFree
        Net.Send(proto.Ptl.ChallengeCountResetReq, param)
    }

    buyEvilPass(){
        //展示恶魔通行证界面
        if(this.evilbtn.active){
            showPopLayer("prefab/EvilPass")
        }
    }

    /*  */
    timeCountDown(dt){
        let left = this.totime - getServerUtcTime()
        if(left <= 0){
            ShowTips("ChallengeActiveEnds")   //活动已结束
            this.unschedule(this.timeCountDown)
            return
        }
        setTimeTXT(this.leftTime, left)
    }
    
    /*  */
    onClickHelp(){
        showPopLayerV2("prefab/ChanllengeDocLayer", ChanllengeDocLayer).then((value:ChanllengeDocLayer)=>{
            value.setview(this.challengeInfo)
        })
    }

    /*  */
    onClickBack(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ChallengeFightBackToMain, null)
    }
}

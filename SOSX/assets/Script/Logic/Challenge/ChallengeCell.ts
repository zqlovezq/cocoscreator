
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { checkRechargeInterfaceIsOpen } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { getServerUtcTime, setTimeTXT, showPopLayer, showPopLayerV2 } from "../Utils/GameUtils";
import ChallengeDetailLayer from "./ChallengeDetailLayer";
import ChanllengeDocLayer from "./ChallengeDocLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChallengeCell extends cc.Component {

    @property(cc.Sprite)
    background: cc.Sprite = null

    @property(cc.Node)
    winlosenode: cc.Node = null

    @property(cc.Label)
    winCnt: cc.Label = null

    @property([cc.Sprite])
    losesprvec: cc.Sprite[] = []

    @property(cc.Sprite)
    chalIcon: cc.Sprite = null

    @property(cc.Label)
    title: cc.Label = null

    @property(cc.Label)
    titleDesc: cc.Label = null

    @property(cc.Node)
    leftTimenode: cc.Node = null

    @property(cc.Label)
    toStartLabel: cc.Label = null

    @property(cc.Label)
    toEndLabel: cc.Label = null

    @property(cc.Label)
    leftTime: cc.Label = null

    @property(cc.Node)
    evilNode: cc.Node = null

    @property(cc.Node)
    freenode: cc.Node = null

    @property(cc.Node)
    goldnode: cc.Node = null

    @property(cc.Label)
    cost: cc.Label = null

    @property(cc.Node)
    compeleteNode: cc.Node = null

    challengeInfo:proto.IChallengeInfo
    totime:number = 0

    onLoad () {
            this.evilNode.active = false            
            this.goldnode.active = false            
            this.freenode.active = false

            Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_OnBuyEvilPass, (param: any)=>{
                this.refreshEvilFree()
              
            }, this);
    }  

    start () {
        this.winlosenode.active = false

    }

    onClick()
    {
        let chadata = Role.Instance.challengeData
        if(chadata && chadata.challengeData.challengeId && chadata.challengeData.challengeId == this.challengeInfo.challengeId)
        {//如果是正在开启的活动
            if(localStorage.getItem("challengedetailfirst") == null)
            {
                localStorage.setItem("challengedetailfirst", "true")
                showPopLayerV2("prefab/ChanllengeDeatilLayer", ChallengeDetailLayer).then((value:ChallengeDetailLayer)=>{
                    if(value)
                    {
                        value.setView(this.challengeInfo)
                    }
                })
            }
            else
            {

                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShowChallengeToFight, this.challengeInfo)
            }
        }
        else
        {
            let self = this
            showPopLayerV2("prefab/ChanllengeDeatilLayer", ChallengeDetailLayer).then((value:ChallengeDetailLayer)=>{
                if(value)
                {
                    value.setView(self.challengeInfo)
                }
            })
        }
    }

    refresh()
    {
        this.setView(this.challengeInfo)
    }

    refreshEvilFree()
    {
        if(this.challengeInfo && this.challengeInfo.challengeId ==  Role.Instance.challengeData.challengeData.challengeId)
        {

            this.evilNode.active = checkRechargeInterfaceIsOpen() && Role.Instance.isDemonPass == false 
            && Role.Instance.challengeData.challengeData.failCount >= tab.Data.GetKeyValue_ConfigTable().ChallengeActivityLoseMax
            
            this.goldnode.active = this.evilNode.active
            
            this.freenode.active = !(this.evilNode.active)

        }
    }

    setView(chalInfo:proto.IChallengeInfo)
    {

        if(!chalInfo)
        {
            return
        }

        let chaCfg:tab.ChallengeTable = tab.Data.ChallengeTableByID.getValue(chalInfo.challengeId)
        if(!chaCfg)
        {
            return
        }

        this.challengeInfo = chalInfo
        let chaldata = Role.Instance.challengeData

        this.title.string = chaCfg.ChalTitle
        this.titleDesc.string = chaCfg.ChalDesc
        this.chalIcon.setTexture(chaCfg.ChalIcon)
        this.background.setTexture(chaCfg.ChalBg)
        this.cost.string = tab.Data.GetKeyValue_ConfigTable().ChallengeActivityCostToFight.toString()

        if(chalInfo.challengeId == chaldata.challengeData.challengeId)  //当前正在开放
        {
            this.winlosenode.active = true
            this.winCnt.string = chaldata.challengeData.winCount.toString()
            for(let i = 0; i < this.losesprvec.length; i++ )
            {
                this.losesprvec[i].node.active = i < chaldata.challengeData.failCount
            }
            
            this.refreshEvilFree()

            if(chaldata.challengeData.winCount == chaCfg.ChalAward.length)
            {
                this.compeleteNode.active = true
            }
        }

        //tiume
        let svr = getServerUtcTime()
        this.toStartLabel.node.active = chalInfo.startUTC > svr
        this.toEndLabel.node.active = chalInfo.startUTC <= svr && chalInfo.endUTC > svr

        if(this.toStartLabel.node.active)
        {
            this.totime = chalInfo.startUTC
            this.freenode.active = false
        }
        else if(this.toEndLabel.node.active)
        {
            this.totime = chalInfo.endUTC
        }

        if(this.totime > 0)
        {
            this.unschedule(this.countDown)
            this.schedule(this.countDown.bind(this), 1)
        }
    }

    countDown() {
        let left = this.totime - getServerUtcTime()
        if (left <= 0){
            this.leftTimenode.active = false
            //重新请求活动信息
            let param = new proto.Msg_ChallengeGetInfoReq()
            Net.Send(proto.Ptl.ChallengeGetInfoReq, param)
            this.unschedule(this.countDown);
            return;
        }
        left = left < 0 ? 0 : left
        setTimeTXT(this.leftTime, left);
   }

    onClickHelp()
    {
        showPopLayerV2("prefab/ChanllengeDocLayer", ChanllengeDocLayer).then((value:ChanllengeDocLayer)=>{
            value.setview(this.challengeInfo)
        })
    }

}

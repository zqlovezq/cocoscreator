
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import Role from "../Common/Role";
import GuideController from "../Guide/GuideController";
//import PullCardResult from "../PullCard/PullCardResult";
import { getServerUtcTime, popRewardLayer_Ex, setTimeTXT, showPopLayer, showPopLayerV2 } from "../Utils/GameUtils";
import TimeBoxDetail from "./timeboxdetail";


const {ccclass, property} = cc._decorator;

@ccclass
export default class timeboxsnode extends cc.Component {

    @property(cc.Node)
    emptynode: cc.Node = null;

    @property(cc.Node)
    unlockingnode: cc.Node = null;

    @property(cc.Label)
    timeleft: cc.Label = null

    @property(cc.Label)
    yuyuezhongtxt: cc.Label = null

    @property(cc.Sprite)
    boxicon_copy: cc.Sprite = null
    
    @property(cc.Label)
    cost: cc.Label = null


    @property(cc.Node)
    itemnode: cc.Node = null;

    @property(cc.Label)
    fromname: cc.Label = null

    @property(cc.Sprite)
    boxicon: cc.Sprite = null

    @property(cc.Sprite)
    itemBackground: cc.Sprite = null

    @property(cc.Label)
    lockedtime: cc.Label = null
    

    @property(cc.Node)
    yuyuezhongnode: cc.Node = null

    @property(cc.Node)
    lockednode: cc.Node = null;

    @property(cc.Node)
    unlocksuccess: cc.Node = null

    @property(cc.Sprite)
    successicon: cc.Sprite = null

    @property(cc.Node)
    bubblenode: cc.Node = null

    @property(cc.Node)
    bubble_unlocktxt : cc.Node = null

    @property(cc.Node)
    bubble_nextunlocktxt: cc.Node = null

    @property(cc.Button)
    bubble_btn: cc.Button = null

    @property(cc.Node)
    adflag:cc.Node = null

    index:number = 0;
    info:proto.RankBoxData = null;
    yueyuezhongIndex:number = -1
    unlockingIndex:number = -1

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this)
        this.bubble_btn.node.on("click", this.onBubbleClick, this)

        /* 打开排行宝箱 */
        Net.listenProtocol(proto.Ptl.OpenRankBoxRsp, function (buffer, ptl){
            let msg = proto.Msg_OpenRankBoxRsp.decode(buffer)
            cc.log("OpenRankBoxRsp (打开排行宝箱) msg: " + JSON.stringify(msg))
            if (msg != null && msg.result == proto.CommonErrorCode.Succeed){
                if(msg.boxPosIndex == this.index){
                    this.adflag.active = false
                    popRewardLayer_Ex(msg.rewards)
                    Net.pushLoaclMessage(LOCAL_MESSAGE.RankBoxOpen, msg.boxPosIndex)

                    let param = new proto.Msg_GetRankPackageInfoReq()
                    Net.Send(proto.Ptl.GetRankPackageInfoReq, param)
                }
            }
        }, this)

        //用于新手引导
        this.unlocksuccess.active = false;
        Net.listenLoaclMessage(LOCAL_MESSAGE.CheckRankBoxUnlocked, ()=>{
            if(this.unlocksuccess.active) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.RankBoxUnlocked, this.index)
            }
        }, this)
        this.bubblenode.active = false

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_OnBuyEvilPass, ()=>{
            this.setView(this.index, this.info, this.yueyuezhongIndex, this.unlockingIndex)
        }, this)
    }

    /*  */
    onClick(){
        if(this.info.boxId < 0){
            return
        }

        //如果已解锁
        if(this.info.state == proto.RankBoxData.BoxState.Unlocked) {
            let param = new proto.Msg_OpenRankBoxReq()
            param.boxPosIndex = this.index
            Net.Send(proto.Ptl.OpenRankBoxReq, param)
        } else {
            //打开宝箱详细界面
            let _this = this
            showPopLayer("prefab/timeboxdetail").then((node)=>{
                let com = node.getComponent(TimeBoxDetail)
                if(com){
                    com.setView(_this.index, _this.info, _this.yueyuezhongIndex, _this.unlockingIndex)
                }
            }, (reason)=>{
                cc.log(reason)
            })
        }
    }

    onBubbleClick() {
        if(!GuideController.Instance.isGuiding()) {
            this.onClick();
        }
    }

    /*  */
    setView(index:number, info:proto.RankBoxData, yueyuezhongIndex:number = -1, unlockingIndex:number = -1) {
        this.index = index
        this.info = info
        this.yueyuezhongIndex = yueyuezhongIndex
        this.unlockingIndex = unlockingIndex
        this.adflag.active = false
        //this.emptynode.active = this.info.boxId < 0

        if(this.info.boxId < 0){
            this.itemnode.active = false
            this.unlockingnode.active = false
            this.lockednode.active = false
            this.bubblenode.active = false
            this.yuyuezhongnode.active = false
            this.unlocksuccess.active = false
            this.unschedule(this.timeCountDown)

            return
        }

        this.unlocksuccess.active = this.info.state == proto.RankBoxData.BoxState.Unlocked
        if(this.unlocksuccess.active){
            this.adflag.active = false

            let spine:sp.Skeleton = this.unlocksuccess.getComponent(sp.Skeleton)
            if(spine){
                spine.setAnimation(0, "idle", true)
            }

            //解锁成功状态发送一个广播，用于新手引导
            Net.pushLoaclMessage(LOCAL_MESSAGE.RankBoxUnlocked, index)
        }
        
        this.unlockingnode.active = this.info.boxId >= 0 &&  this.info.state == proto.RankBoxData.BoxState.Unlocking
        
        this.yuyuezhongnode.active = this.info.state == proto.RankBoxData.BoxState.Reserve
        this.lockednode.active = this.info.boxId >= 0 && yueyuezhongIndex >= 0 && yueyuezhongIndex != this.index && this.info.state == proto.RankBoxData.BoxState.Lock    //有预约并且不是自己
        this.itemBackground.node.active = !this.lockednode.active
        this.itemnode.active = this.info.boxId > 0 && this.info.state != proto.RankBoxData.BoxState.Unlocking && this.info.state != proto.RankBoxData.BoxState.Unlocked

        this.bubblenode.active = this.info.boxId >= 0 && this.info.state != proto.RankBoxData.BoxState.Unlocked &&  ((yueyuezhongIndex < 0 && unlockingIndex != this.index) || (unlockingIndex < 0))
        if(this.bubblenode.active){
            let ani:cc.Animation = this.bubblenode.getComponent(cc.Animation)
            if(ani){
                ani.play()
            }
        }
        
        this.bubble_nextunlocktxt.active = unlockingIndex >= 0 &&  yueyuezhongIndex < 0   //预约解锁只在有正在解锁并且没有预约解锁时候显示
        this.bubble_unlocktxt.active = unlockingIndex < 0                                    //解锁

        if(this.bubblenode.active &&  this.bubble_nextunlocktxt.active)   //如果预约解锁正在显示，则需判断通行证的状态
        {
            this.bubblenode.active = Role.Instance.isDemonPass
        }

        this.yuyuezhongtxt.node.active = this.info.boxId >= 0 && this.info.state == proto.RankBoxData.BoxState.Reserve

        let cfg:tab.BoxTable = tab.Data.BoxTableByBoxID.getValue(this.info.boxId)
        if(cfg){
            this.boxicon.setTexture(cfg.ItemIcon)
            this.boxicon_copy.setTexture(cfg.ItemIcon)
            this.successicon.setTexture(cfg.ItemIcon)
            let seconds = cfg.UnlockSeconds
            if(getServerUtcTime() <= Role.Instance.RoleData.rankData.buffEndUTC){
                seconds = Math.floor(seconds/2)
            }
            this.cost.string = String(Math.ceil( seconds/10))
            setTimeTXT(this.lockedtime, seconds)

            if(seconds <= 1.5 * 3600) { //可观看广告
                this.adflag.active = true && (this.unlocksuccess.active == false)
            }
        }

        let str = tab.Data.TipsTableByKey.getValue("Arenatxt").Value || ""
        this.fromname.string =str + this.info.rankLevel.toString()

        this.timeleft.string = ""
        if(this.info.state == proto.RankBoxData.BoxState.Unlocking){
            this.cost.string = String( Math.ceil( (this.info.unlockTime - getServerUtcTime()) * 1.0 / 600 ) )
            let lefttime:number = this.info.unlockTime - getServerUtcTime()        
            lefttime = lefttime < 0 ? 0 :lefttime
            setTimeTXT(this.timeleft, lefttime)

            this.unschedule(this.timeCountDown)
            this.schedule(this.timeCountDown, 1)
            if(lefttime <= 1.5 * 3600) { //可观看广告
                this.adflag.active = true
            }
        }
    }

    /*  */
    timeCountDown(dt){
        let lefttime:number = this.info.unlockTime - getServerUtcTime()
        if(lefttime <= -1) {
            this.unlockingnode.active = false
            this.itemnode.active = true
            this.adflag.active = false

            //重新请求下宝箱的信息,用来刷新界面
            let param = new proto.Msg_GetRankPackageInfoReq()
            Net.Send(proto.Ptl.GetRankPackageInfoReq, param)

            this.unschedule(this.timeCountDown)
            return
        }

        if(lefttime <= 1.5 * 3600){
            this.adflag.active = true
        }

        lefttime = lefttime < 0 ? 0 :lefttime
        setTimeTXT(this.timeleft, lefttime)
        this.cost.string = String(Math.ceil( lefttime/600))
    }
}

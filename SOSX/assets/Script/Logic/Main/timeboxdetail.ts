
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kOneNumber, kZeroNumber, sendAdvertPos, WatchAdvert } from "../Common/CommonInterface";
import Role from "../Common/Role";
//import PullCardResult from "../PullCard/PullCardResult";
import { getServerUtcTime, popRewardLayer_Ex, setTimeTXT, showPopLayer, showPopLayerV2, ShowTips, ShowTipsOfCustomString } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import TimeBoxOpenNow from "./TimeBoxOpenNow";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TimeBoxDetail extends PopLayer {

    @property(cc.Sprite)
    background: cc.Sprite = null

    @property(cc.Sprite)
    background_nono: cc.Sprite = null

    @property(cc.Sprite)
    background_time: cc.Sprite = null

    @property(cc.Node)
    itemnode: cc.Node = null;

    @property(cc.Node)
    boxspinenode: cc.Node = null

    @property(cc.Label)
    fromname: cc.Label = null

    @property(cc.Label)
    boxname: cc.Label = null

    @property(cc.Label)
    goldnumber: cc.Label = null

    @property([cc.Node])
    quecardnode:cc.Node[] = []

    @property([cc.Label])
    quecardnode_number: cc.Label[] = []   

    @property(cc.Node)
    opennownode: cc.Node = null

    @property(cc.Node)
    timenodes: cc.Node = null

    @property(cc.Button)
    opennowbtn: cc.Button = null
    
    @property(cc.Button)
    openunlock: cc.Button = null

    @property(cc.Node)
    openunlockspeednode: cc.Node = null    //背包加速的时间节点

    @property(cc.Label)
    openunlockspeedtimeleft: cc.Label = null  //背包加速的剩余时间
    
    @property(cc.Label)
    timeleft: cc.Label = null

    @property(cc.Label)
    opennowcost: cc.Label = null

    @property(cc.Label)
    unlocknowcosttime: cc.Label = null

    @property(cc.Label)
    opennowbtn_opentxt: cc.Label = null

    @property(cc.Node)
    opennowbtn_costnode: cc.Node = null

    @property(cc.Node)
    emotongxingnode: cc.Node = null

    @property(cc.Node)
    guanggaokaiqinode: cc.Node = null

    @property(cc.Button)
    nextopenbtn: cc.Button = null

    @property(cc.Button)
    tongxingzhengbtn: cc.Button = null

    @property(cc.Node)
    tongxingzhengtxt: cc.Node = null

    @property(cc.Node)
    tongxingzhengfirstBuy: cc.Node = null

    @property(cc.Label)
    yuyuetxt: cc.Label = null

    @property(cc.Layout)
    layout: cc.Layout = null

    openunlockpos_center:cc.Vec2 = null
    openunlockpos_right:cc.Vec2 = null
    index:number = -1;
    data:proto.RankBoxData = null;
    cost:number = 0;
    yueyuezhongIndex: number;
    unlockingIndex: number;
    bnotenough:boolean = false
    
    //立刻打开
    OpenNowClick(){
        if(Role.Instance.RoleData.diamond < this.cost){
            ShowTips("DiamondNotEnough")
            return
        }
        
        let _this = this
        showPopLayer("prefab/TimeBoxOpenNow").then((node)=>{
            let com = node.getComponent(TimeBoxOpenNow)
            if(com){
                com.setView(_this.index,proto.OpenRankBoxType.ORB_Diamond, _this.data)
            }
        })
    }

    //解锁
    UnlockBox(){
        let param = new proto.Msg_UnlockRankBoxReq()
        param.boxPosIndex = this.index
        Net.Send(proto.Ptl.UnlockRankBoxReq, param)
    }

    //预约
    NextOpenClick(){
        let param = new proto.Msg_ReserveRankBoxReq()
        param.boxPosIndex = this.index
        Net.Send(proto.Ptl.ReserveRankBoxReq, param)
    }

    //恶魔通行证
    TongXingZhengClick(){
        showPopLayer("prefab/EvilPass")
    }

    /*  */
    setView(index:number, info:proto.RankBoxData, yueyuezhongIndex:number = -1, unlockingIndex:number = -1){
        this.index = index
        this.data = info
        this.yueyuezhongIndex = yueyuezhongIndex
        this.unlockingIndex = unlockingIndex
        
        let cfg:tab.BoxTable = tab.Data.BoxTableByBoxID.getValue(info.boxId)
        if(!cfg){
            return
        }

        let spine:sp.Skeleton = this.boxspinenode.getComponent(sp.Skeleton)
        if(spine){
            spine.setAnimation(0, cfg.BoxSpineActionName, false)
        }

        let str = tab.Data.TipsTableByKey.getValue("Arenatxt").Value || ""
        this.fromname.string = str + info.rankLevel.toString()
        this.boxname.string = cfg.BoxName

        if(cfg.GoldMaxCount > cfg.GoldCount) {
            this.goldnumber.string =tab.Data.GetKeyValue_ConfigTable().MultiFlag +  cfg.GoldCount.toString() + "~" + cfg.GoldMaxCount
        } else {
            this.goldnumber.string =tab.Data.GetKeyValue_ConfigTable().MultiFlag  +  cfg.GoldCount.toString()
        }

        let que2num:Map<number, string> = new Map<number,string>()  //<品质，数量>
        let que3num:Map<number, string> = new Map<number,string>()  //<品质，数量>

        for(let i = 0; i<cfg.CardCount.length; i++) {
            if(cfg.CardCount[i] > 0) {
                if(cfg.CardWeight[i] >= 1000) {
                    que2num.set(cfg.CardType[i], cfg.CardCount[i].toString())
                } else {
                    que3num.set(cfg.CardType[i], cfg.CardCount[i].toString())
                }
            }
        }

        let thistemp = this
        que2num.forEach((value, key)=>{
            if(key < thistemp.quecardnode.length){
                thistemp.quecardnode[key].active = true
                thistemp.quecardnode_number[key].string = value
            }
        })

        que3num.forEach((value, key)=>{
            if(key < thistemp.quecardnode.length){
                thistemp.quecardnode[key].active = true
                thistemp.quecardnode_number[key].string = "0~" + value
            }
        })

        let seconds = cfg.UnlockSeconds
        let bspeed:boolean = getServerUtcTime() <= Role.Instance.RoleData.rankData.buffEndUTC
        if(bspeed) {
            seconds = Math.floor(seconds/2)
        }
        this.bnotenough = false
        let red = new cc.Color(247, 18, 22)

        if(info.state == proto.RankBoxData.BoxState.Unlocking) {
            let cost = Math.ceil( (info.unlockTime - getServerUtcTime()) * 1.0 / 600 )
            this.cost = cost
            
            this.bnotenough = Role.Instance.RoleData.diamond < cost
            this.bnotenough ? this.opennowcost.node.color = red : this.opennowcost.node.color = cc.Color.WHITE
            
            this.opennowcost.string =String(cost  )

            this.timeleft.node.active = true
            let lefttime = this.data.unlockTime - getServerUtcTime()              
            lefttime = lefttime < 0 ? 0 :lefttime
            if(lefttime > 0) {
                setTimeTXT(this.timeleft, lefttime)
            }
            this.unschedule(this.timeCountDown)
            this.schedule(this.timeCountDown, 1)
            //如果解锁时间小于等于 一个半小时,则显示看广告开启
            if(lefttime <= 1.5 * 3600) {
                this.guanggaokaiqinode.active = true
            }
        } else {
            let cost = Math.ceil( seconds/600)
            this.cost = cost
            this.bnotenough = Role.Instance.RoleData.diamond < cost
            this.bnotenough ? this.opennowcost.node.color = red : this.opennowcost.node.color = cc.Color.WHITE
            this.opennowcost.string = String(cost)
            this.timeleft.node.active = true

            setTimeTXT(this.timeleft, seconds)
            //如果解锁时间小于等于 一个半小时,则显示看广告开启
            if(seconds <= 1.5 * 3600) {
                this.guanggaokaiqinode.active = true
            }
        }

        //this.unlocknowcosttime.string = `${cfg.UnlockSeconds / 60}分`
        setTimeTXT(this.unlocknowcosttime, seconds)

        let bcanunlock = (info.state == proto.RankBoxData.BoxState.Lock)  //正常状态需要解锁
        
        this.openunlock.node.active = bcanunlock && unlockingIndex < 0    //开始解锁的按钮
        this.openunlockspeednode.active = bspeed && this.openunlock.node.active
        this.openunlockspeednode.active ? this.openunlock.node.setPosition(this.openunlockpos_right) : this.openunlock.node.setPosition(this.openunlockpos_center)
        if(this.openunlockspeednode.active) {
            setTimeTXT(this.openunlockspeedtimeleft, Role.Instance.RoleData.rankData.buffEndUTC - getServerUtcTime())
        }

        let  havetongxingzheng:boolean = Role.Instance.isDemonPass
        
        this.opennownode.active = !(this.openunlock.node.active)
        this.opennowbtn.node.active = !(this.openunlock.node.active)
        this.timenodes.active = this.opennowbtn.node.active
        this.emotongxingnode.active = !havetongxingzheng &&  unlockingIndex >= 0 && unlockingIndex != this.index

        this.tongxingzhengbtn.node.active = !havetongxingzheng
        this.tongxingzhengtxt.active = !havetongxingzheng
        this.tongxingzhengfirstBuy.active = Role.Instance.IsFirstPayEvilPss == false

        this.nextopenbtn.node.active = havetongxingzheng && unlockingIndex >= 0 && unlockingIndex != this.index && info.state != proto.RankBoxData.BoxState.Reserve
        this.yuyuetxt.node.active = this.nextopenbtn.node.active

        this.background_time.node.active = this.emotongxingnode.active
        this.background.node.active = this.emotongxingnode.active == false &&  this.opennowbtn.node.active == true
        this.background_nono.node.active = !(this.background_time.node.active) && !(this.background.node.active)
        this.layout.updateLayout()
    }

    /*  */
    timeCountDown(dt){
        let lefttime = this.data.unlockTime - getServerUtcTime()
        if(lefttime <= -1){
            this.timeleft.string = "0分0秒"
            this.opennowbtn_opentxt.node.active = true
            this.opennowbtn_costnode.active = false
             //重新请求下宝箱的信息,用来刷新界面
            let param = new proto.Msg_GetRankPackageInfoReq()
            Net.Send(proto.Ptl.GetRankPackageInfoReq, param)
            this.unschedule(this.timeCountDown)
            return;
        }

        lefttime = lefttime < 0 ? 0 :lefttime
        this.opennowcost.string = String(Math.ceil( lefttime / 600 ))

        setTimeTXT(this.timeleft, lefttime)
    }

    onFreeVideoBtn() {
        //直接看广告开启
        //sendAdvertPos(tab.AdvertPosType.AdvertPosType_AccelerateOpenBox)
        WatchAdvert((error: Error)=>{
            if(error === undefined){
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_AccelerateOpenBox, kZeroNumber);
            }
        }, 
        (bFinish: boolean)=>{
            if(bFinish){
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_AccelerateOpenBox, kOneNumber);
                let param = new proto.Msg_ImmediatelyOpenRankBoxReq();
                param.boxPosIndex = this.index;
                param.openType = proto.OpenRankBoxType.ORB_AD;
                Net.Send(proto.Ptl.ImmediatelyOpenRankBoxReq, param);
            }
        },tab.AdvertPosType.AdvertPosType_AccelerateOpenBox);
    }

    /*  */
    onLoad () {
        this.setClickHide()

        this.timeleft.node.active = false
        this.guanggaokaiqinode.active = false
        this.openunlockpos_center = this.openunlock.node.getPosition()
        this.openunlockpos_right = this.opennowbtn.node.getPosition()

        /* 预约竞技场宝箱 */
        Net.listenProtocol(proto.Ptl.ReserveRankBoxRsp, function (buffer, ptl){
            let msg = proto.Msg_ReserveRankBoxRsp.decode(buffer)
            cc.log("ReserveRankBoxRsp (预约竞技场宝箱) msg: " + JSON.stringify(msg))
            if (msg != null){
            let param = new proto.Msg_GetRankPackageInfoReq()
                Net.Send(proto.Ptl.GetRankPackageInfoReq, param)
            }
       }, this)

        /* 立即打开竞技场宝箱 */
        Net.listenProtocol(proto.Ptl.ImmediatelyOpenRankBoxRsp, function (buffer, ptl){
            let msg = proto.Msg_ImmediatelyOpenRankBoxRsp.decode(buffer)
            cc.log("ImmediatelyOpenRankBoxRsp (立即打开竞技场宝箱) msg: " + JSON.stringify(msg))
            if (msg != null ) {
                if(msg.result == proto.Msg_ImmediatelyOpenRankBoxRsp.ErrorCode.Succeed){
                    popRewardLayer_Ex(msg.rewards)
                } else if(msg.result == proto.Msg_ImmediatelyOpenRankBoxRsp.ErrorCode.NotEnoughDiamond) {
                    ShowTips("DiamondNotEnough")
                } else {
                    ShowTipsOfCustomString("错误码:" + msg.result)
                }

                let param = new proto.Msg_GetRankPackageInfoReq()
                Net.Send(proto.Ptl.GetRankPackageInfoReq, param)
          }
       }, this)

        /* 解锁竞技场宝箱 */
        Net.listenProtocol(proto.Ptl.UnlockRankBoxRsp, function (buffer, ptl){
            let msg = proto.Msg_UnlockRankBoxRsp.decode(buffer)
            cc.log("UnlockRankBoxRsp (解锁竞技场宝箱) msg: " + JSON.stringify(msg))
            if (msg != null){
                let param = new proto.Msg_GetRankPackageInfoReq()
                Net.Send(proto.Ptl.GetRankPackageInfoReq, param)
            }
        }, this)

        /* 获取竞技场背包信息 */
        Net.listenProtocol(proto.Ptl.GetRankPackageInfoRsp, function (buffer, ptl){
            let msg = proto.Msg_GetRankPackageInfoRsp.decode(buffer)
            cc.log("GetRankPackageInfoRsp (获取竞技场背包信息) msg: " + JSON.stringify(msg))
            if (msg != null){
                this.hide()
            }
        }, this)

        /* 购买恶魔通行证 */
        Net.listenProtocol(proto.Ptl.BuyDemonPassRsp, function (buffer, ptl){
            let msg = proto.Msg_BuyDemonPassRsp.decode(buffer)
            cc.log("BuyDemonPassRsp (购买恶魔通行证) msg: " + JSON.stringify(msg))
            if (msg != null){
                this.setView(this.index, this.data, this.yueyuezhongIndex, this.unlockingIndex)
            }
       }, this)
    }

    start () {}
}

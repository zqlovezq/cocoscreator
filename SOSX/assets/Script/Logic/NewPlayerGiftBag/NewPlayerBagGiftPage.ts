
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import JoinAllianceTipPfb from "../Alliance/JoinAllianceTipPfb";
import Role from "../Common/Role";
//import PullCardResult from "../PullCard/PullCardResult";
import { getLocalData, getServerUtcTime, popRewardLayer_Vec_Recycle, setTimeTXT, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import NewPlayerBagGiftRewardInfo from "./NewPlayerBagGiftRewardInfo";
import NewPlayerBagGiftRewardInfo_2 from "./NewPlayerBagGiftRewardInfo2";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewPlayerBagGiftPage extends PopLayer {

    @property(cc.Label)
    timeLeft: cc.Label = null;

    @property(cc.Label)
    zhekou: cc.Label = null;

    @property(cc.Node)
    bagIconName6: cc.Node = null;

    @property(cc.Node)
    bagIconName30: cc.Node = null;

    @property(cc.Node)
    bagIconName328: cc.Node = null;

    @property(cc.Node)
    bagIconName648: cc.Node = null;

    @property(cc.Node)
    toggle6: cc.Node = null;

    @property(cc.Node)
    toggle30: cc.Node = null;

    @property(cc.Node)
    toggle328: cc.Node = null;

    @property(cc.Node)
    toggle648: cc.Node = null;

    @property(cc.Node)
    prefabTemplete: cc.Node = null

    bOpenFirst:boolean = true
    endUTC: number = 0;
    data:proto.Msg_NewPlayerGiftBagRsp = null
    mapNameIcon:Map<number, cc.Node> = new Map<number, cc.Node>()
    mapToggle:Map<number, cc.Node> = new Map<number, cc.Node>()
    aleadyBuyID:number = 0  //最近购买的礼包id

    onLoad () {        
        this.mapToggle.set(6,  this.toggle6)
        this.mapToggle.set(30,  this.toggle30)
        this.mapToggle.set(328,  this.toggle328)
        this.mapToggle.set(648,  this.toggle648)

        this.mapNameIcon.set(6,  this.bagIconName6)
        this.mapNameIcon.set(30,  this.bagIconName30)
        this.mapNameIcon.set(328,  this.bagIconName328)
        this.mapNameIcon.set(648,  this.bagIconName648)

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true)

        /*  */
        Net.listenProtocol(proto.Ptl.BuyNewPlayerGiftBagRsp, function (buffer, ptl){
            let msg = proto.Msg_BuyNewPlayerGiftBagRsp.decode(buffer)
            cc.log("BuyNewPlayerGiftBagRsp (购买新手礼包) msg: " + JSON.stringify(msg))
            if (msg != null){
                if(msg.result == proto.Msg_BuyNewPlayerGiftBagRsp.ErrorCode.Succeed){
                    popRewardLayer_Vec_Recycle(msg.rewards)
                    this.aleadyBuyID = msg.giftID
                    let info = null;
                    for(let i = 0; i < this.data.bagGifts.length; i++){
                        if(this.aleadyBuyID == this.data.bagGifts[i].id){
                            this.data.bagGifts[i].buyTimes = (this.data.bagGifts[i].buyTimes || 0) + 1
                            info = this.data.bagGifts[i]
                        }
                    }
                    this.setView(info)
                    //this.getGiftInfo()
                } else {
                    ShowTips("GiftBagIDError")
                }
           }
        }, this)

        /* 新手礼包 */
        Net.listenProtocol(proto.Ptl.NewPlayerGiftBagRsp, function (buffer, ptl){
            let msg = proto.Msg_NewPlayerGiftBagRsp.decode(buffer)
            cc.log("NewPlayerGiftBagRsp (新手礼包) msg: " + JSON.stringify(msg))
            if (msg != null){
                if(msg.result == proto.Msg_NewPlayerGiftBagRsp.ErrorCode.Succeed){
                    this.data = msg
                    for(let i = 0; i < this.data.bagGifts.length; i++){
                        let ele = this.data.bagGifts[i]
                        let cfg = tab.Data.NewPlayerGiftBagTableByID.getValue(ele.id)
                        let recfg = tab.Data.RechargeTableByID.getValue(cfg.RechargeID)
                        ele.price = recfg.Price
                    }
                    this.endUTC = msg.endUTC
                    this.setFirst()
                } else {
                    ShowTips("ChallengeActiveEnds")
                }
           }
        }, this)
    }

    /*  */
    onTouchBegan(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips, null)
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips, null)
    }

    /*  */
    timeCountDown(dt){
        let left = this.endUTC - getServerUtcTime()
        if(left < 0){
            this.timeLeft.string = tab.Data.TipsTableByKey.getValue("ChallengeActiveEnds").Value
            this.unschedule(this.timeCountDown)
            return
        }

        setTimeTXT(this.timeLeft, left)
    }

    /*  */
    toggleClick(node,userdata) {  //在ui里对应上价格
        let str = userdata as string
        let price = Number(str)
        let index = -1;
        for(let i = 0; i < this.data.bagGifts.length; i++){
            let ele = this.data.bagGifts[i]
            if(ele.price == price){
                index = i;
                break
            }
        }
        this.setView(this.data.bagGifts[index])
    }

    /*  */
    setFirst(){
        this.timeCountDown(0)
        this.schedule(this.timeCountDown, 1)

        let canbuyindex = -1
        let aleadyBudedInfo = null

        for(let i = 0; i<this.data.bagGifts.length; i++){
            let ele = this.data.bagGifts[i]
            if(ele.buyTimes == 0){
                canbuyindex >= 0 ? (canbuyindex = canbuyindex) : (canbuyindex = i)
            } else if(ele.buyTimes >= ele.maxBuyTimes && this.bOpenFirst){ //每个礼包只能购买一次
                let node = this.mapToggle.get(ele.price)
                if(node){
                    node.active = false
                }
            }
        }

        let ele2 = this.data.bagGifts[canbuyindex]
        if(this.bOpenFirst && ele2){
            let toggle:cc.Node = this.mapToggle.get(ele2.price)
            if(toggle){
                toggle.getComponent(cc.Toggle).isChecked = true
            }
        }

        this.bOpenFirst = false

        if(ele2) {
            this.setView(ele2)
        } else {
            this.setView(this.data.bagGifts[0])
        }
    }

    setView( info:proto.INewPlayerGiftBag) {   //索引
        if(!info){
            return
        }

        this.mapNameIcon.forEach((value,key)=>{
            value.active = false
        })

        let cfg = tab.Data.NewPlayerGiftBagTableByID.getValue(info.id)
        let node = this.mapNameIcon.get(info.price)
        if(node){
            node.active = true
        }

        this.zhekou.string = cfg.OriPrice
        let com:NewPlayerBagGiftRewardInfo_2 = this.prefabTemplete.getComponent(NewPlayerBagGiftRewardInfo_2)
        if(com){
            com.setView(info)
        }
    }

    start () {
        this.getGiftInfo()
        this.scheduleOnce(()=>{
            cc.sys.localStorage.setItem("newplayergiftbag" + Role.Instance.ID, "newpaler2")
        }, 3)
    }

    getGiftInfo(){
        let param = new proto.Msg_NewPlayerGiftBagReq()
        Net.Send(proto.Ptl.NewPlayerGiftBagReq, param)
    }

    close(){
        if(String(getLocalData("newplayergiftbag" + Role.Instance.ID, "")) == "newpaler1"){
            return
        }
        this.hide()
    }

}

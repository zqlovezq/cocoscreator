/**
 * 
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import Role from "../../Common/Role";
import NewPlayerBagGiftRewardInfo_2 from "../../NewPlayerGiftBag/NewPlayerBagGiftRewardInfo2";
import { getLocalData, getServerUtcTime, popRewardLayer_Vec_Recycle, setTextTime_3, setTimeTXT, ShowTips, ShowTipsOfCustomString } from "../../Utils/GameUtils";
import PopLayer from "../../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

export const toggleclickflaglocal_key = "overbaggifttogglered"
export const toggleclickflaglocal_value = "click"

@ccclass
export default class OverBagGiftLayer extends PopLayer {

    @property(cc.Label)
    timeLeft: cc.Label = null;

    @property(cc.Label)
    zhekou: cc.Label = null;

    @property(cc.Label)
    desc:cc.Label = null

    @property(cc.Node)
    toggleContentNode:cc.Node = null

    @property([cc.Node])
    vectoggle: cc.Node[] = []

    @property([cc.Node])
    vectoggleRed: cc.Node[] = []

    @property(cc.Node)
    prefabTemplete: cc.Node = null

    public static pushOverBagGift:proto.Msg_PushOverBagGift = null
    public static overBagGiftFlag:boolean = false  //是点击还是主动弹出的标志

    bOpenFirst:boolean = true
    endUTC: number = 0;
    data:proto.IMsg_OverBagGiftRsp = null
    curIndex:number = -1
    aleadyBuyID:number = 0  //最近购买的礼包id
    curinfo: proto.IOverBagGift = null;

    onLoad () {
        Net.listenLoaclMessage(LOCAL_MESSAGE.PushOverBagGift, (pa)=>{
            let info = OverBagGiftLayer.pushOverBagGift
            if(info){
                for(let i = 0; i< info.bagGifts.length; i++){
                    this.data.bagGifts.push(info.bagGifts[i])
                }
                this.setView(this.data)
            }
        }, this)

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewDay, (param)=>{
            for(let i = 0; i < this.vectoggleRed.length; i++){
                cc.sys.localStorage.setItem(String(i) + toggleclickflaglocal_key, "")
                this.vectoggleRed[i].active = true
            }

            this.vectoggleRed[this.curIndex].active = false
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true)

        //购买礼包
        Net.listenProtocol(proto.Ptl.BuyOverBagGiftRsp, function (buffer, ptl){
            let msg = proto.Msg_BuyOverBagGiftRsp.decode(buffer)
            cc.log("BuyOverBagGiftRsp(购买礼包) : msg " + JSON.stringify(msg))
            if (msg != null){
                if(msg.result == proto.Msg_BuyOverBagGiftRsp.ErrorCode.Succeed){
                    popRewardLayer_Vec_Recycle(msg.rewardList)
                    let param = new proto.Msg_OverBagGiftReq()
                    Net.Send(proto.Ptl.OverBagGiftReq, param)
                    
                } else if(msg.result == proto.Msg_BuyOverBagGiftRsp.ErrorCode.ActivityOver) {
                    ShowTips("ActivityOver")  
                } else {
                    let tips = tab.Data.TipsTableByKey.getValue("ErrorCodeTxt")
                    if(tips) {
                        ShowTipsOfCustomString(tips.Value + msg.result)
                    }
                }
           }
        }, this)

        //礼包信息
        Net.listenProtocol(proto.Ptl.OverBagGiftRsp, function (buffer, ptl){
           let msg = proto.Msg_OverBagGiftRsp.decode(buffer)
           cc.log("OverBagGiftRsp(礼包信息) : msg " + JSON.stringify(msg))
           if (msg != null){
                this.data = msg
                this.setView(msg)
           }
        }, this)

        for(let i = 0; i < this.vectoggle.length; i++){
            this.vectoggle[i].on("toggle", ()=>{this.toggleClick(this.vectoggle[i], i)}, this)
        }
    }

    onTouchBegan(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips, null)
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips, null)
    }

    toggleClick(node:cc.Node, index) {   //在ui里对应上价格
        if(this.curIndex == Number(index)){
            return
        }

        this.curIndex = Number(index)

        if(this.curIndex > this.vectoggle.length){
            return
        }

        //this.vectoggleRed[this.curIndex].active = false
        let nod = node.getChildByName("RedDotPfb")
        if(nod){
            nod.active = false
        }
        
        //找到该页签id下对应的信息
        this.curinfo = this.data.bagGifts[this.curIndex]
        if(this.curinfo != null){
            cc.sys.localStorage.setItem(String(this.curinfo.overBagGiftId) + toggleclickflaglocal_key + Role.Instance.ID, String(getServerUtcTime()))
            let cfg = tab.Data.OverBagGiftTableByID.getValue(this.curinfo.overBagGiftId)
            if(cfg){
                this.zhekou.string = cfg.OBDiscount
                this.desc.string = cfg.OBDesc
            }

            let com:NewPlayerBagGiftRewardInfo_2 = this.prefabTemplete.getComponent(NewPlayerBagGiftRewardInfo_2)
            if(com){
                com.setView_2(this.curinfo)
            }
        } else {
            this.hide()
        }
    }

    //更新页签上的红点
    setToggleReddot(){
        let cfgs = this.data.bagGifts
        for(let i = 0; i < this.vectoggleRed.length; i++){
            if(i < cfgs.length){
                let flag:string = String(getLocalData(String(cfgs[i].overBagGiftId) + toggleclickflaglocal_key + Role.Instance.ID, ""))
                let time = parseInt(flag)
                if(time > 0){
                    //判断有没有跨天
                    let day = new Date(time*1000);
                    let day2 = new Date(getServerUtcTime()*1000)
                    if(day.getDay() != day2.getDay()){
                        this.vectoggleRed[i].active = true
                    } else {
                        this.vectoggleRed[i].active = false
                    }
                } else {
                    this.vectoggleRed[i].active = true
                }
            } else {
                this.vectoggleRed[i].active = false
            }
        }
    }

    setView( info:proto.IMsg_OverBagGiftRsp) {    //索引
        if(!info){
            return
        }

        if(info.bagGifts.length <= 0){
            Net.pushLoaclMessage(LOCAL_MESSAGE.OverBagGiftLayer_Hide, null)
            this.hide()
            return
        }

        this.data = info
        this.curIndex = -1

        this.data.bagGifts.sort((a,b)=>{return a.endUTC - b.endUTC})

        for(let i = 0; i < this.vectoggle.length; i++){
            this.vectoggle[i].active = false
        }

        if(this.data.bagGifts.length > 1){
            let yuan:string = tab.Data.TipsTableByKey.getValue("RMB").Value
            for(let i = 0; i<this.data.bagGifts.length; i++){
                this.vectoggle[i].active = true
                let ele = this.data.bagGifts[i]
                let cfg = tab.Data.OverBagGiftTableByID.getValue(ele.overBagGiftId)
                if(cfg){
                    let recfg  = tab.Data.RechargeTableByID.getValue(cfg.OBRechargeID)
                    if(recfg){
                        let labels:cc.Label[] = this.vectoggle[i].getComponentsInChildren(cc.Label)
                        for(let i = 0; i < labels.length; i++){
                            labels[i].string = recfg.Price.toString() + yuan
                        }
                    }
                }
            }
        }

        if(info.bagGifts.length <= 0){
            return;
        }
        
        //默认选中第一个       
        let index = 0
        let pushinfo = OverBagGiftLayer.pushOverBagGift
        let gifts = this.data.bagGifts
        if(pushinfo != null) { //如果是有推送那么就选中推送的那个
            for(let i = 0; i < this.data.bagGifts.length; i++){
                if(gifts[i].overBagGiftId == pushinfo.bagGifts[0].overBagGiftId){
                    index  = i
                    break
                }
            }
        }

        this.setToggleReddot()
        this.toggleClick(this.vectoggle[index], index)

        this.vectoggle[index].getComponent(cc.Toggle).isChecked = true        

        this.OverBagGiftCountDown(0)
        this.unschedule(this.OverBagGiftCountDown)
        this.schedule(this.OverBagGiftCountDown, 1)
    }

    OverBagGiftCountDown(dt){
        if(this.curinfo == null) return
        let left = this.curinfo.endUTC - getServerUtcTime()
        if(left <= 0){
            //主界面也有倒计时也会重新请求 超值礼包信息,所以这里不再做请求的操作
            this.unschedule(this.OverBagGiftCountDown)
            return
        }

        setTextTime_3(this.timeLeft, left)
    }

    start () {
       //请求超值礼包信息
        let param = new proto.Msg_OverBagGiftReq()
        Net.Send(proto.Ptl.OverBagGiftReq, param)

        this.setCloseCallBack(()=>{
            OverBagGiftLayer.pushOverBagGift = null
        })
    }

    close(){
        this.hide()
    }

}

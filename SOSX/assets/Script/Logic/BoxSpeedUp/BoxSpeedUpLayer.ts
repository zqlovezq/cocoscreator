/**
 * 
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kOneNumber, kZeroNumber, sendAdvertPos, WatchAdvert } from "../Common/CommonInterface";
import BattleLayer from "../Main/BattleLayer";
import { getFormatString, popRewardLayer_Ex, setGray, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BoxSpeedUpLayer extends PopLayer {

    @property(cc.Label)
    speedUpDocTxt: cc.Label = null;

    @property(cc.Label)
    times: cc.Label = null

    @property(cc.Sprite)
    btnBackG:cc.Sprite = null

    data: proto.Msg_LookADAddBoxSpeedUpTimeInfoRsp = null;

    onLoad () {
        /* 看广告增加宝箱加速时间信息 */
        Net.listenProtocol(proto.Ptl.LookADAddBoxSpeedUpTimeInfoRsp, (buffer, ptl)=>{
            let msg = proto.Msg_LookADAddBoxSpeedUpTimeInfoRsp.decode(buffer);
            cc.log("LookADAddBoxSpeedUpTimeInfoRsp(看广告增加宝箱加速时间信息) : msg " + JSON.stringify(msg));
            if(msg != null){
                this.data = msg
                this.setView()
            }
        },this)

        /* 看广告增加宝箱加速时间 */
        Net.listenProtocol(proto.Ptl.LookADAddBoxSpeedUpTimeRsp, (buffer, ptl)=>{
            let msg = proto.Msg_LookADAddBoxSpeedUpTimeRsp.decode(buffer);
            cc.log("LookADAddBoxSpeedUpTimeRsp(看广告增加宝箱加速时间) : msg " + JSON.stringify(msg));
            if(msg != null){
                this.data.times = msg.times
                popRewardLayer_Ex(msg.reward)
                this.setView()
            }
        },this)

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_Reconnect, (param)=>{
           this.hide()
        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewDay, (param)=>{
            let param1 = new proto.Msg_LookADAddBoxSpeedUpTimeInfoReq()
            Net.Send(proto.Ptl.LookADAddBoxSpeedUpTimeInfoReq, param1)
        }, this);

        BattleLayer.boxSpeedUPReddot = false

        let param = new proto.Msg_LookADAddBoxSpeedUpTimeInfoReq()
        Net.Send(proto.Ptl.LookADAddBoxSpeedUpTimeInfoReq, param)
    }

    onAVDClick(){
        let maxtimes = tab.Data.AdvertPosTableByAdvertPos.getValue(tab.AdvertPosType.AdvertPosType_AddBoxSpeedUpTime).EveryDayAdvertCount

        if(this.data.times >= maxtimes){
            ShowTips("BoxSpeedUpTimesOut")
            return
        }

        WatchAdvert((error: Error)=>{
            if(error === undefined){
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_AddBoxSpeedUpTime, kZeroNumber);
            }
        }, 
        (bFinish: boolean)=>{
            if(bFinish){
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_AddBoxSpeedUpTime, kOneNumber);
                let param = new proto.Msg_LookADAddBoxSpeedUpTimeReq()
                Net.Send(proto.Ptl.LookADAddBoxSpeedUpTimeReq, param)
            }
        },tab.AdvertPosType.AdvertPosType_AddBoxSpeedUpTime);
    }

    setView(){
        let speedId = tab.Data.GetKeyValue_ConfigTable().BoxSpeedUpTimeHour
        let cfg = tab.Data.BagSpeedUpTableByID.getValue(speedId)
        let hours = 0
        if(cfg){
            hours = cfg.BagSpeedUpTime / 3600
        }
        this.speedUpDocTxt.string = getFormatString( tab.Data.TipsTableByKey.getValue("BoxSpeedUpDocTxt").Value, hours)
        let max = tab.Data.AdvertPosTableByAdvertPos.getValue(tab.AdvertPosType.AdvertPosType_AddBoxSpeedUpTime).EveryDayAdvertCount
        this.times.string = `${max - this.data.times}/${max}`
        if(this.data.times >= max){
            setGray(this.btnBackG, true)
        }
    }

    start () {

    }

}

/**
 *  幸运补给
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kOneNumber, kZeroNumber, sendAdvertPos, WatchAdvert } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { checkInt, getBoxIDAndCfg, getFormatString, getLocalData, getServerUtcTime, popRewardLayer_Ex, setGray, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

export const LuckySupply_key = "luckySupply"
const { ccclass, property } = cc._decorator;

@ccclass
export default class LuckySupply extends PopLayer {

    @property(cc.Label)
    times: cc.Label = null

    @property(cc.Node)
    notincludeonenode: cc.Node = null

    data: proto.Msg_LuckySupplyRsp = null

    boxCfg: { boxId: number, boxCfg: tab.BoxTable } = null
    onLoad() {

        /* 幸运补给 */
        Net.listenProtocol(proto.Ptl.LuckySupplyRsp, (buffer, ptl) => {
            let msg = proto.Msg_LuckySupplyRsp.decode(buffer);
            cc.log("LuckySupplyRsp (幸运补给) msg: " + JSON.stringify(msg));
            if (msg != null) {
                this.data = msg
                this.setView()
            }
        }, this)

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_Reconnect, (param) => {
            this.hide()
        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewDay, (param1) => {
            cc.sys.localStorage.setItem(LuckySupply_key + Role.Instance.ID, getServerUtcTime())

            let param = new proto.Msg_LuckySupplyReq()
            Net.Send(proto.Ptl.LuckySupplyReq, param)
        }, this);

        /* 领取幸运补给奖励 */
        Net.listenProtocol(proto.Ptl.LuckySupplyGetAwardRsp, (buffer, ptl) => {
            let msg = proto.Msg_LuckySupplyGetAwardRsp.decode(buffer);
            cc.log("LuckySupplyGetAwardRsp (领取幸运补给奖励) msg: " + JSON.stringify(msg));
            if (msg != null) {
                if (msg.result == proto.Msg_LuckySupplyGetAwardRsp.ErrorCode.Succeed) {
                    popRewardLayer_Ex(msg.Awards, null, true)
                    this.data.LeftTimes = msg.leftTimes
                    this.hide()
                    //this.setView()
                } else {
                    this.data.LeftTimes = 0
                    ShowTips("LeftTimesNotEnough")
                }
            }
        }, this)

        // let param = new proto.Msg_LuckySupplyReq()
        // Net.Send(proto.Ptl.LuckySupplyReq, param)

        //获取奖励->宝箱配置
        let list = tab.Data.GetKeyValue_ConfigTable().LuckySupplyReward.split("|")
        if (checkInt(list[0]) == tab.RewardType.RewardType_BoxGroupType) {
            this.boxCfg = getBoxIDAndCfg(checkInt(list[1]))

            let goldNode = this.notincludeonenode.children[0]
            if (this.boxCfg.boxCfg.GoldCount < this.boxCfg.boxCfg.GoldMaxCount) {
                goldNode.getChildByName("goldnumber").getComponent(cc.Label).string = cc.js.formatStr("x %s~%s", this.boxCfg.boxCfg.GoldCount, this.boxCfg.boxCfg.GoldMaxCount)
            } else if(this.boxCfg.boxCfg.GoldCount == 0) {
                goldNode.active = false
            }else {
                goldNode.getChildByName("goldnumber").getComponent(cc.Label).string = "x " + this.boxCfg.boxCfg.GoldCount
            }

            for (let i = 0; i < this.boxCfg.boxCfg.CardCount.length; i++) {
                let vNode = this.notincludeonenode.children[i+1]
                if (vNode && this.boxCfg.boxCfg.CardCount[i] > 0) {
                    let lab =  vNode.getChildByName("goldnumber").getComponent(cc.Label)
                    if (this.boxCfg.boxCfg.CardWeight[i] >= 1000){
                        if ( this.boxCfg.boxCfg.CardCount[i] == 0){
                            vNode.active = false
                        }
                        lab.string = "x "+this.boxCfg.boxCfg.CardCount[i].toString()
                        // else if ( this.boxCfg.boxCfg.CardCount[i] == 1){
                        //     lab.string = ""
                        // }else{
                        //     lab.string = "x"+this.boxCfg.boxCfg.CardCount[i].toString()
                        // }
                    }else{
                        lab.string = "x " + this.boxCfg.boxCfg.CardCount[i].toString();
                        let pro = vNode.getChildByName("probability_txt");
                        pro.active = true;
                        pro.getComponent(cc.Label).string = this.boxCfg.boxCfg.CardWeight[i]/10+"%";
                    }
                    // lab.node.color = cc.Color.WHITE
                }
            }
        }
       
    }

    /*  */
    onAVDClick() {
        let maxtimes = tab.Data.AdvertPosTableByAdvertPos.getValue(tab.AdvertPosType.AdvertPosType_LuckySupply).EveryDayAdvertCount
        if (this.data.LeftTimes <= 0) {
            ShowTips("LeftTimesNotEnough")
            return
        }

        WatchAdvert((error: Error) => {
            if (error === undefined) {
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_LuckySupply, kZeroNumber);
            }
        },
            (bFinish: boolean) => {
                if (bFinish) {
                    sendAdvertPos(tab.AdvertPosType.AdvertPosType_LuckySupply, kOneNumber);
                    let param = new proto.Msg_LuckySupplyGetAwardReq()
                    Net.Send(proto.Ptl.LuckySupplyGetAwardReq, param)
                }
            },tab.AdvertPosType.AdvertPosType_LuckySupply);
    }

    /*  */
    onClose() {
        cc.sys.localStorage.setItem(LuckySupply_key + Role.Instance.ID, getServerUtcTime())
        this.hide()
    }

    /*  */
    setView() {
        let max = tab.Data.AdvertPosTableByAdvertPos.getValue(tab.AdvertPosType.AdvertPosType_LuckySupply).EveryDayAdvertCount
        this.times.string = `${this.data.LeftTimes}/${max}`
    }

    /*  */
    start() {
        cc.sys.localStorage.setItem(LuckySupply_key + Role.Instance.ID, getServerUtcTime())
    }

    setData(dd: proto.Msg_LuckySupplyRsp){
        this.data = dd
    }

}

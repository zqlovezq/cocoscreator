/**
 *  胜利宝箱页面(看广告领取宝箱)
 */

import PopLayer from "../Utils/PopLayer";
import { Net } from "../../Protocol/Net";
import Role from "../Common/Role";
import { tab } from "../../Table/table_gen";
import { checkInt, getBoxIDAndCfg, popRewardLayer_Ex, ShowTips } from "../Utils/GameUtils";
import { proto } from "../../Protocol/client_protocol";
import { kOneNumber, kZeroNumber, sendAdvertPos, WatchAdvert } from "../Common/CommonInterface";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WinAdvertiseLayer extends PopLayer {

    @property(cc.Label)
    allreadyRewardCount: cc.Label = null; /* 今天已经领取的次数 */

    // @property(cc.Label)
    // refuseCount: cc.Label = null; /* 今天连续拒绝的次数 */

    @property(cc.Node)
    notIncludeOneNode: cc.Node = null; /*  */

    boxCfg: { boxId: number, boxCfg: tab.BoxTable } = null;

    onLoad() {
         /* 胜利宝箱领取信息 */
         Net.listenProtocol(proto.Ptl.VictoryBoxGetAwardRsp, (buffer: Uint8Array, ptl: number) => {
            let msg = proto.Msg_VictoryBoxGetAwardRsp.decode(buffer);
            cc.log("VictoryBoxGetAwardRsp (胜利宝箱领取信息) msg: " + JSON.stringify(msg));
            if (msg) {
                if (msg.result == proto.Msg_VictoryBoxGetAwardRsp.ErrorCode.Succeed) {
                    Role.Instance.VictoryBoxRewardCnt = msg.RewardCount;
                    Role.Instance.VictoryBoxRefuseCnt = msg.RefuseCount;
                    popRewardLayer_Ex(msg.Awards, null, true)
                    //TODO: 
                    this.updateWinAdInfo();
                } else {
                    ShowTips("LeftTimesNotEnough")
                }
                this.hide()
            }
        }, this);
    }

    start() {
        this.updateWinAdInfo();
    }

    private updateWinAdInfo() {
        let maxTime = tab.Data.AdvertPosTableByAdvertPos.getValue(tab.AdvertPosType.AdvertPosType_WinBoxAdCount).EveryDayAdvertCount
        let reCnt = Role.Instance.VictoryBoxRewardCnt;
        this.allreadyRewardCount.string = `${reCnt}/${maxTime}`

        // /* Release的时候不可见 */
        // if(SdkManager.Instance.isSDK()){
        //     this.refuseCount.node.active = false; 
        // }else{
        //     let refuseCnt = Role.Instance.VictoryBoxRefuseCnt;
        //     this.refuseCount.string = `${refuseCnt}`
        // }

        this.setRewardInfo(); // 设置奖品信息
    }

    /* 设置奖品信息 */
    private setRewardInfo() {
        let list = tab.Data.GetKeyValue_ConfigTable().WinBoxAdReward.split("|")
        if (checkInt(list[0]) == tab.RewardType.RewardType_BoxGroupType) { /* 如果是宝箱组 */
            this.boxCfg = getBoxIDAndCfg(checkInt(list[1]))

            let goldNode = this.notIncludeOneNode.children[0]
            if (this.boxCfg.boxCfg.GoldCount < this.boxCfg.boxCfg.GoldMaxCount) {
                goldNode.getChildByName("goldnumber").getComponent(cc.Label).string = cc.js.formatStr("x %s~%s", this.boxCfg.boxCfg.GoldCount, this.boxCfg.boxCfg.GoldMaxCount)
            } else if (this.boxCfg.boxCfg.GoldCount == 0) {
                goldNode.active = false
            } else {
                goldNode.getChildByName("goldnumber").getComponent(cc.Label).string = "x " + this.boxCfg.boxCfg.GoldCount
            }

            for (let i = 0; i < this.boxCfg.boxCfg.CardCount.length; i++) {
                let vNode = this.notIncludeOneNode.children[i + 1]
                if (vNode && this.boxCfg.boxCfg.CardCount[i] > 0) {
                    let lab = vNode.getChildByName("goldnumber").getComponent(cc.Label)
                    if (this.boxCfg.boxCfg.CardWeight[i] >= 1000) {
                        if (this.boxCfg.boxCfg.CardCount[i] == 0) {
                            vNode.active = false
                        } 
                        lab.string = "x " + this.boxCfg.boxCfg.CardCount[i].toString()
                        // else if (this.boxCfg.boxCfg.CardCount[i] == 1) {
                        //     lab.string = ""
                        // } else {
                        //     lab.string = "x" + this.boxCfg.boxCfg.CardCount[i].toString()
                        // }
                    } else {
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
    onAdBtnClicked() {
        cc.log("onAdBtnClicked() called")
        /* 前端检查 领取次数 >= 配置 */
        let maxTime = tab.Data.AdvertPosTableByAdvertPos.getValue(tab.AdvertPosType.AdvertPosType_WinBoxAdCount).EveryDayAdvertCount
        let roleCnt = Role.Instance.VictoryBoxRewardCnt;
        if (roleCnt < maxTime) {

            WatchAdvert((error: Error) => {
                if (error === undefined) {
                    sendAdvertPos(tab.AdvertPosType.AdvertPosType_WinBoxAdCount, kZeroNumber);
                }
            },
                (bFinish: boolean) => {
                    if (bFinish) {
                        sendAdvertPos(tab.AdvertPosType.AdvertPosType_WinBoxAdCount, kOneNumber);
                        let msg = new proto.Msg_VictoryBoxGetAwardReq();
                        Net.Send(proto.Ptl.VictoryBoxGetAwardReq, msg);
                    }
                },tab.AdvertPosType.AdvertPosType_WinBoxAdCount);
        } else {
            ShowTips("LeftTimesNotEnough")
        }
    }

    /*  */
    onRefuseBtnClicked() {
        cc.log("onRefuseBtnClicked() called")
        let msg = new proto.Msg_VictoryBoxRefuseReq();
        Net.Send(proto.Ptl.VictoryBoxRefuseReq, msg);
        this.hide()
    }
}

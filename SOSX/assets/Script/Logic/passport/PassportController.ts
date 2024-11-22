import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import BossboxOpenNow from "../BossBox/BossboxOpenNow";
import BossboxUnlockSuccess from "../BossBox/BossboxUnlockSuccess";
import { checkRewardIsEmotionOrBattleMap } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { showPopLayerV2, popRewardLayer_Ex, ShowTips, ShowErrorTips } from "../Utils/GameUtils";

/* 通行证消息处理 */
export default class PassportMsg {
    protected static _ins: PassportMsg = null;

    static get Instance(): PassportMsg {
        if (!PassportMsg._ins) {
            PassportMsg._ins = new PassportMsg();
        }
        return PassportMsg._ins;
    }


    private listenFlas: boolean = false //消息注册标记

    public listenProtocolEvent() {
        if (this.listenFlas) {
            return
        }

        LOCAL_MESSAGE.LocalMsg_NewSeasonJustBeginning

        /* 购买恶魔通行证 */
        Net.listenProtocol(proto.Ptl.BuyDemonPassRsp, function (buffer, ptl) {
            let msg = proto.Msg_BuyDemonPassRsp.decode(buffer)
            cc.log("BuyDemonPassRsp(购买恶魔通行证) : msg " + JSON.stringify(msg));
            if (msg && msg.result == proto.Msg_BuyDemonPassRsp.ErrorCode.Succeed) {
                Role.Instance.isDemonPass = true
                Role.Instance.RoleData.isDemonPass = true
                Role.Instance.firstPayEvilPass = true

                ShowTips("AleadyBugEvilPass")
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_OnBuyEvilPass, null)

                let param3 = new proto.Msg_BossBoxInfoReq()
                Net.Send(proto.Ptl.BossBoxInfoReq, param3)

                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_CheckPassportRed)
            }
        }, this)

        /* 首领宝箱信息 */
        Net.listenProtocol(proto.Ptl.BossBoxInfoRsp, function (buffer, ptl) {
            let msg = proto.Msg_BossBoxInfoRsp.decode(buffer)
            cc.log("BossBoxInfoRsp(首领宝箱信息) : msg " + JSON.stringify(msg));
            if (msg) {
                Role.Instance.setBossBoxData(msg.data)

                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_CheckPassportRed)
            }
        }, this)

        //解锁等级
        Net.listenProtocol(proto.Ptl.BossBoxUnlockLvRsp, function (buffer, ptl) {
            let msg = proto.Msg_BossBoxUnlockLvRsp.decode(buffer)
            cc.log("BossBoxUnlockLvRsp(解锁等级) : msg " + JSON.stringify(msg));
            if (msg.result == 0) {
                Role.Instance.bossBoxData.level = msg.lv
                Role.Instance.bossBoxData.exp = 0
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_BossboxOpenNow, msg.lv)
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_CheckPassportRed)
            } else{
                ShowErrorTips(ptl,msg.result)
            }
            // else if (msg.result == proto.Msg_BossBoxUnlockLvRsp.ErrorCode.MaxLevel) {
            //     ShowTips("已达最大等级");
            // } else if (msg.result == proto.Msg_BossBoxUnlockLvRsp.ErrorCode.DiamondLack) {
            //     ShowTips("DiamondNotEnough");
            // } else if (msg.result == proto.Msg_BossBoxUnlockLvRsp.ErrorCode.LvError) {
            //     ShowTips("等级错误");
            // }
        }, this)

        //领取奖励
        Net.listenProtocol(proto.Ptl.BossBoxGetLvRewardRsp, function (buffer, ptl) {
            let msg = proto.Msg_BossBoxGetLvRewardRsp.decode(buffer)
            cc.log("BossBoxGetLvRewardRsp(领取奖励) : msg " + JSON.stringify(msg));
            if (msg.result ==  proto.Msg_BossBoxGetLvRewardRsp.ErrorCode.Succeed) {
                popRewardLayer_Ex(msg.reward, () => {
                    //奖励是战场地图或者表情
                    if (msg.reward.length == 1) {
                        checkRewardIsEmotionOrBattleMap(msg.reward[0].rewardId, msg.reward[0].rewardType);
                        return;
                    }
                })

                let cfg = tab.Data.BossBoxTableByID.getValue(msg.bossBoxId)
                if (cfg) {
                    Role.Instance.bossBoxData.gotBossBoxRewardLevels.push(cfg.BossBoxLv)
                    if (Role.Instance.isDemonPass) {
                        Role.Instance.bossBoxData.gotBossBoxVipRewardLevels.push(cfg.BossBoxLv)
                    }
                }
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_CheckPassportRed)
            }  else{
                ShowErrorTips(ptl,msg.result)
            }
            // else if (msg.result == proto.Msg_BossBoxGetLvRewardRsp.ErrorCode.AlreadyGotReward) {
            //     ShowTips("已经领过该奖励");
            // } else if (msg.result == proto.Msg_BossBoxGetLvRewardRsp.ErrorCode.LevelNotEnough) {
            //     ShowTips("首领宝箱等级不足");
            // } else if (msg.result == proto.Msg_BossBoxGetLvRewardRsp.ErrorCode.LevleIsLock) {
            //     ShowTips("等级是锁定状态");
            // } else if (msg.result == proto.Msg_BossBoxGetLvRewardRsp.ErrorCode.OperatorFailed) {
            //     ShowTips("其他的一些server检查错误");
            // }
        }, this)

    }
}
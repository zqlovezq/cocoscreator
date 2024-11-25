import { Node, _decorator, js, log, sys } from "cc";
import { AbsControl, AbsMgr } from "../../../framework/base/IAbs";
import { Net } from "../../net/Net";
import { EventMgr } from "../../mgr/EventMgr";
import { proto } from "client_protocol";
import { RoleData } from "../role/RoleData";
import { LocalEvent } from "../../define/LocalEvent";
import { ItemControl } from "../item/ItemControl";
import { HeroControl } from "../hero/HeroControl";
import { EquipControl } from "../equip/EquipControl";
import { EquipData } from "../equip/EquipData";
import { RareBookData } from "../rareBook/RareBookData";
import { ItemData } from "../item/ItemData";
import { Role } from "../../fight/base/obj/role/role/Role";
import { MailControl } from "../mail/MailControl";
import { TaskControl } from "../task/TaskControl";
import { PrestigeControl } from "../prestige/PrestigeControl";
import { tab } from "../../../Table/table_gen";
import { ShowTips } from "../../mgr/UIMgr";
import { LangMgr } from "../../mgr/LangMgr";
import { PayControl } from "../pay/PayControl";
import { RedMgr } from "../../mgr/RedMgr";
import { RedDotType } from "../../red/RedDotType";
import { ActivityControl } from "../activity/ActivityControl";
import { FriendControl } from "../friends/FriendControl";
import { SceneMgr, ScenesName } from "../../mgr/SceneMgr";
import { FengyunRankData } from "../fengyunRanking/FengyunRankData";
import { OpenFunctionMgr } from "../../../Common/component/OpenFunctionMgr";
import { ActivityData } from "../activity/ActivityData";
import { LoginData } from "../login/LoginData";
import { ChannelMgr } from "../../../channel/ChannelMgr";
import { P8PostEventName } from "../../../channel/ChannelDefine";
import { Func } from "../../utils/Func";
import { GameplayControl } from "../jianghu/GameplayControl";
import Http from "../../net/Http";
import { SettingRedManager } from "./SettingRedManager";

const { ccclass, property } = _decorator;


export class RoleControl extends AbsControl {

    private static _instance: RoleControl;
    public noticeRed: boolean = false;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new RoleControl();
        }
        return this._instance;
    }





    register(): void {
        EventMgr.onMsg(proto.Ptl.SyncRolePush, this.on_s2c_SyncRolePush, this)
        EventMgr.onMsg(proto.Ptl.GetMainStageInfoRsp, this.on_s2c_GetMainStageInfoRsp, this)
        EventMgr.onMsg(proto.Ptl.GetStaminaInfoRsp, this.on_s2c_GetStaminaInfoRsp, this)
        EventMgr.onMsg(proto.Ptl.BuyStaminaRsp, this.on_s2c_BuyStaminaRsp, this)
        EventMgr.onMsg(proto.Ptl.BuyGoldRsp, this.on_s2c_BuyGoldRsp, this)
        EventMgr.onMsg(proto.Ptl.UseRedeemCodeRsp, this.on_s2c_UseRedeemCodeRsp, this)
        EventMgr.onMsg(proto.Ptl.VipBonusPush, this.on_s2c_VipBonusPush, this)
        EventMgr.onMsg(proto.Ptl.GetServerTimeRsp, this.on_s2c_GetServerTime, this)
        EventMgr.onLocal(LocalEvent.LocalEvent_Common_Net_ErrorCode, this.onNetCommonNetErrorCode, this)


        RedMgr.ins.registerCalculateFb(RedDotType.RedStamina, this.buyStaminaRedPoint, this);
        RedMgr.ins.registerCalculateFb(RedDotType.notice, this.red_Notice, this);
    }

    //----------------处理回调---------------------

    on_s2c_SyncRolePush(msg: proto.Msg_SyncRolePush) {
        //只做保存数据
        this.requestGetServerTime();
        RoleData.ins.setData(msg.role)
        RoleData.ins.initServerTimer(msg.role.serverTime);

        if (LoginData.ins.isCreatRole) {
            ChannelMgr.createRole(RoleData.ins.sdkRole())
        }
        ChannelMgr.intoServer(RoleData.ins.sdkRole())


        ActivityData.ins.initOpenActivityMap(msg.role.activities as proto.Activity[])
        OpenFunctionMgr.ins.setOpenFunctionData(RoleData.ins.openFunctions);


        //获取基础数据 拿到英雄数据后再做场景跳转

        // ItemControl.ins.requestItems()
        ItemData.ins.initData();
        EquipControl.ins.requestEquips()
        HeroControl.ins.requestHeros()
        EquipData.ins.initEquipData();
        RareBookData.ins.initBookData();
        MailControl.ins.requestGetMails();
        TaskControl.ins.request();
        PrestigeControl.ins.request();
        PayControl.ins.request();
        ActivityControl.ins.request();
        FriendControl.ins.request();
        FengyunRankData.ins.initMapData(msg.role.honorRollInfo as proto.Msg_GetHonorRollMapRsp);
        GameplayControl.ins.request();
        this.checkFighting();
        this.requestStaminaInfo();
        this.setVipPrivilege();

        if (RoleData.ins.todayLoginTimes == 1) {
            let day = RoleData.ins.getCreateTimeDay();
            if (day == 2) {
                ChannelMgr.postEvent(P8PostEventName.day2_login);
            }
        }



    }

    /**
     * 请求获得体力相关信息
     */
    requestStaminaInfo() {
        let msg = new proto.Msg_GetStaminaInfoReq();
        Net.Send(proto.Ptl.GetStaminaInfoReq, msg)
    }
    /**
   * 请求获得服务器时间
   */
    requestGetServerTime() {
        let msg = new proto.Msg_GetServerTimeReq();
        msg.clientTime = RoleData.ins.serverTimer;
        Net.Send(proto.Ptl.GetServerTimeReq, msg)
    }


    /**
     * 请求购买体力
     */
    requestBuyStamina(type: tab.BuyStaminaType, num: number = 1) {
        let msg = new proto.Msg_BuyStaminaReq();
        msg.type = type;
        msg.num = num;
        Net.Send(proto.Ptl.BuyStaminaReq, msg)

    }
    /** 
     * 请求购买金币 
     */
    requestBuyGold(type: tab.BuyGoldType) {
        let msg = new proto.Msg_BuyGoldReq();
        msg.type = type;
        Net.Send(proto.Ptl.BuyGoldReq, msg)
    }
    /**
       * 请求使用兑换码
       */
    requestUseRedeemCode(code: string) {
        let msg = new proto.Msg_UseRedeemCodeReq();
        msg.code = code;
        Net.Send(proto.Ptl.UseRedeemCodeReq, msg)
    }
    updateNoticeRed() {
        let addr = LoginData.ins.loginServerTab.NoticeAddr;
        Http.request({
            host: addr,
            method: "GET",
            reqParam: "",
            cb: (responseJson) => {
                // console.log(responseJson)
                if (responseJson && responseJson.length > 0) {
                    let notices: Array<any> = responseJson;

                    notices.sort((a, b) => {
                        return b.created_at - a.created_at;
                    })
                    let newNotice = notices[0];
                    let lastTimer = Number(Func.getItem("notice_created_at"));
                    if (lastTimer && lastTimer != 0) {
                        this.noticeRed = newNotice.created_at > lastTimer;
                    } else {
                        this.noticeRed = true;
                    }

                    // callBack(this.noticeRed);
                    RedMgr.refreshEvent(RedDotType.notice);
                }

            }
        })
    }



    checkFighting() {
        if (RoleData.ins.fightingStageId) {
            if (SceneMgr.isFightScene()) {
                //身上有关卡id，还在战斗场景。
                console.warn("身上有关卡id，还在战斗场景。", RoleData.ins.fightingStageId)
                return
            }
            console.warn("在战斗中， 先清除战斗状态", RoleData.ins.fightingStageId)
            let msg = new proto.Msg_FinishStageReq();
            msg.result = proto.Msg_FinishStageReq.Result.Quit
            Net.Send(proto.Ptl.FinishStageReq, msg)
            RoleData.ins.fightingStageId = 0
        } else {
            //可能在战斗场景， 尝试退出
            EventMgr.emitLocal(LocalEvent.quitFight)
        }
    }

    /**
     * 错误码统一处理
     * @param pb 
     * @param ptl 
     */
    onNetCommonNetErrorCode(pb: any, ptl: number) {
        if (pb) {
            let errorCode = pb.error ? pb.error.code : 0
            if (errorCode) {
                this.ShowErrorTips(errorCode, pb.error ? pb.error.message : "")
                if (errorCode == proto.CommonErrorCode.Failed) {
                    Net.Disconnect()
                }
            }
        }
    }
    ShowErrorTips(errorCode: number, errMsg: String = "") {
        let key = js.formatStr("CommonErrorCode_%s", errorCode)
        let lab = LangMgr.getLab(key)
        if (key != lab) {
            ShowTips(LangMgr.getLab(key));
        }
        console.error("错误码：" + key, "server_err_msg：" + errMsg)

    }

    // 获取主线关卡信息
    on_s2c_GetMainStageInfoRsp(msg: proto.Msg_GetMainStageInfoRsp) {
        RoleData.ins.mainStageInfo = msg
        let newStageId = msg.clearedStageIds.length > 0 ? msg.clearedStageIds[msg.clearedStageIds.length - 1] : 0;
        if (newStageId > 0) {
            if (newStageId == 303) {
                let key = P8PostEventName.dungeon_completed_3 + "_" + RoleData.ins.id;
                let isPost = Func.getItem(key);
                if (!isPost) {
                    ChannelMgr.postEvent(P8PostEventName.dungeon_completed_3)
                    Func.setItem(key, true);
                }

            } else if (newStageId == 1004) {
                let key = P8PostEventName.dungeon_completed_10 + "_" + RoleData.ins.id;
                let isPost = Func.getItem(key);
                if (!isPost) {
                    ChannelMgr.postEvent(P8PostEventName.dungeon_completed_10)
                    Func.setItem(key, true);
                }

            } else if (newStageId == 2005) {
                let key = P8PostEventName.dungeon_completed_20 + "_" + RoleData.ins.id;
                let isPost = Func.getItem(key);
                if (!isPost) {
                    ChannelMgr.postEvent(P8PostEventName.dungeon_completed_20)
                    Func.setItem(key, true);
                }

            }
        }
    }
    // 获取金币购买信息返回
    on_s2c_BuyGoldRsp(msg: proto.Msg_BuyGoldRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        RoleData.ins.refreshGoldHistory(msg.history as proto.BuyGoldHistory);
        log("购买金币信息==", msg)
        RedMgr.refreshEvent(RedDotType.GoldBuy);
    }
    // 获取体力信息返回
    on_s2c_GetStaminaInfoRsp(msg: proto.Msg_GetStaminaInfoRsp) {
        RoleData.ins.staminaInfo = msg;
        log("体力信息==", msg)
        RedMgr.refreshEvent(RedDotType.RedStamina);
    }
    // 请求购买体力返回
    on_s2c_BuyStaminaRsp(msg: proto.Msg_BuyStaminaRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            if (msg.type) {
                RoleData.ins.staminaInfo.remainBuyTimesMap[msg.type] = msg.remainBuyTimes;
            } else {
                RoleData.ins.staminaInfo.remainBuyTimesMap[0] = msg.remainBuyTimes;
            }
            RedMgr.refreshEvent(RedDotType.RedStamina);

        }

    }
    // 使用兑换码返回
    on_s2c_UseRedeemCodeRsp(msg: proto.Msg_UseRedeemCodeRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {


        }

    }
    // vip特权推送
    on_s2c_VipBonusPush(msg: proto.Msg_VipBonusPush) {
        RoleData.ins.addPrivilege(msg.vipBonusMap)

    }
    on_s2c_GetServerTime(msg: proto.Msg_GetServerTimeRsp) {
        RoleData.ins.initServerTimer(msg.serverTime);
    }

    /**
     * 购买体力红点
     * @returns 
     */
    buyStaminaRedPoint() {
        // 剩余广告买体力有次数
        const buyTimes = RoleData.ins.staminaInfo.remainBuyTimesMap[tab.BuyStaminaType.BuyStaminaType_WatchAdverts];
        // 玩家体力不足
        let curStaminaCount = ItemData.ins.getCount(6);
        let maxStaminaCount = tab.getData().GetKeyValue_ConfigTable().InitialStaminaMaxCount + RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_StaminaLimit);
        const isStaminaEnough = curStaminaCount < maxStaminaCount;
        // 是否打开过界面
        const isCloseBuyPop = SettingRedManager.ins.getSetting("RedStamina");
        return buyTimes > 0 && isStaminaEnough && !isCloseBuyPop;
    }
    red_Notice() {
        return this.noticeRed;
    }
    /* vip贵宾数据 */
    setVipPrivilege() {
        const vipBonusMap = RoleData.ins.vipBonusMap;
        RoleData.ins.addPrivilege(vipBonusMap);
    }
}
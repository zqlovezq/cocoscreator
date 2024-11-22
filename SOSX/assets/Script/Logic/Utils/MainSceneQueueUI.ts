import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import ActivityController from "../Activity/Activity/ActivityController";
import MonthWeekCardTips from "../Activity/Activity/MonthAndWeekCard/MonthWeekCardTips";
import SevenSignInMainPage from "../Activity/SevenSignIn/SevenSignInMainPage";
import { checkFunctionIsOpen } from "../Common/CommonInterface";
import MainMessage from "../Common/MainMessage";
import Role from "../Common/Role";
import LoginData from "../Login/LoginData";
import BattleLayer from "../Main/BattleLayer";
import WinAdvertiseLayer from "../Main/WinAdvertise";
import SeasonGift from "../Season/SeasonGift";
import SeasonResult from "../Season/SeasonResult";
import Func from "./Func";
import { checkInt, getServerUtcTime, showPopLayer, showPopLayerV2 } from "./GameUtils";
import PopLayer from "./PopLayer";

enum PopUI_id {
    Day7 = 10001,
    LuckySupply = 10002,
    WinAdvertise = 10003,
    Season = 10004,
    Month = 10007,
    FirstPay = 10005
}

const FIRST_LOGIN_KEY = "FIRST_LOGIN_KEY"

/**
 * 进入主场景弹出队列UI
 */
export default class MainSceneQueueUI {

    static battleLayer: BattleLayer
    static queueUIs: { id: number, isOpen: boolean }[] = []

    static init() {
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_QueueUI_check, (param) => {
            MainSceneQueueUI.battleLayer = param
            MainSceneQueueUI.checkOpenAll()
        }, this);

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_QueueUI_deleteUI, (param) => {
            MainSceneQueueUI.deleteUI()
        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_Reconnect, (param) => {
            MainSceneQueueUI.queueUIs = []
        }, this);
    }

    static showUI() {
        let data = this.queueUIs[0]
        if (data) {
            switch (data.id) {
                case PopUI_id.Day7:
                    this.battleLayer.onClickSevenSignIn(null, true)
                    break;
                case PopUI_id.LuckySupply:
                    this.battleLayer.onLuckySupplyClicked(null, true)
                    break;
                case PopUI_id.WinAdvertise:
                    this.battleLayer.onVictoryBoxClicked(null, true)
                    break;
                case PopUI_id.Season:
                    this.battleLayer.onClickOpenSeason()
                    break
                case PopUI_id.Month:
                    this.battleLayer.onClickOpenMonthWeekCardTips()
                    break;
                case PopUI_id.FirstPay:
                    this.battleLayer.clickFirstCharge()
                    break;
                default:
                    break;
            }
        }
    }

    static deleteUI() {
        if (this.queueUIs && this.queueUIs.length > 0) {
            this.queueUIs.splice(0, 1)
            this.showUI()
        }
    }

    static checkOpenAll() {


        let openView: { id: number, isOpen: boolean }[] = []
        //检测打开条件
        for (const key in PopUI_id) {
            let value = PopUI_id[key]
            if (typeof (value) == 'number') {
                openView.push({ id: value, isOpen: this["checkItem" + value]() })
            }
        }
        //处理互斥
        for (let index = 0; index < openView.length; index++) {
            const v = openView[index];
            if (v.isOpen) {
                let conf = tab.Data.PopWindowMechanismByIndexID.getValue(v.id)
                for (let j = 0; j < conf.MutexID.length; j++) {
                    let dd = Func.forBy(openView, "id", conf.MutexID[j])
                    if (dd) {
                        dd.isOpen = false
                    }
                }
            }
        }
        //删除因为互斥不显示的模块
        for (let index = openView.length - 1; index >= 0; index--) {
            let v = openView[index];
            if (!v.isOpen) {
                openView.splice(index, 1)
            }
        }

        openView.sort((a, b) => {
            let aconf = tab.Data.PopWindowMechanismByIndexID.getValue(a.id)
            let bconf = tab.Data.PopWindowMechanismByIndexID.getValue(b.id)
            return aconf.PopPriority - bconf.PopPriority
        })
        this.queueUIs = openView

        console.warn("主场景打开队列", JSON.stringify(this.queueUIs))

        this.showUI()
        LoginData.Instance.isLogin = false

        Func.setStorage(FIRST_LOGIN_KEY, getServerUtcTime())
    }

    //7日登录
    static checkItem10001() {
        if (this.battleLayer.checkSevenSignInEntry() && this.battleLayer.checkSevenSignInRedDot()) {
            let day7Str = Func.getStorage("unlock_7day")
            if (day7Str == "") {
                Func.setStorage("unlock_7day", 1)
                return true
            }
            if (LoginData.Instance.isLogin) {
                return true
            }
        }
        return false
    }

    //幸运宝箱
    static checkItem10002() {
        if (LoginData.Instance.isLogin) {
            return this.battleLayer.checkLuckySupply()
        }
        return false
    }
    //胜利宝箱
    static checkItem10003() {
        let isOpen = false
        if (MainMessage.isComeFromUIWin) {
            /* 1. 检查开启条件: OpenFunctionLimitTable 表中 OpenFunctionName_WinBoxAd :胜利宝箱开启条件 */
            let bOpenVictoryBox = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_WinBoxAd);
            if (bOpenVictoryBox) {
                /* 今天领取的次数还没有达到阈值 */
                let maxTimes = tab.Data.AdvertPosTableByAdvertPos.getValue(tab.AdvertPosType.AdvertPosType_WinBoxAdCount).EveryDayAdvertCount /* 配置每天可以领取的最大次数 */
                let roleCnt = Role.Instance.VictoryBoxRewardCnt; /* 玩家今天领取的次数 */
                if (roleCnt < maxTimes) {
                    /* 检查玩家今天连续拒绝的次数 < 配置中的次数 弹出胜利宝箱页面 */
                    let a = Role.Instance.VictoryBoxRefuseCnt;/* zhibo+@20230504 TODO: 感觉这个地方每天0点的时候没有刷新啊 */
                    let b = tab.Data.GetKeyValue_ConfigTable().WinBoxAdCloseCount;
                    if (a < b) { // 测试新删除它
                        //打开界面
                        // showPopLayer("prefab/WinAdvertise")
                        isOpen = true
                    }
                }
            }
            MainMessage.isComeFromUIWin = false; /* 检查完一定要重置为false */
        }

        return isOpen
    }

    //赛季重置
    static checkItem10004() {
        if (this.battleLayer._seasonResetRsp || this.battleLayer._seasonRewardMsgRsp) {
            return true
        }
        return false
    }

    //首充
    static checkItem10005() {
        if (this.battleLayer.btn_first_charge.node.active) {
            let firstStr = Func.getStorage("unlock_first")
            if (firstStr == "") {
                Func.setStorage("unlock_first", 1)
                return true
            }
        }
        // if (LoginData.Instance.isLogin) {
        //     if (this.isFirstLogin()) {
        //         return this.battleLayer.btn_first_charge.node.active
        //     }
        // }
        return false
    }

    //月卡奖励领取
    static checkItem10007() {
        return LoginData.Instance.isLogin && ActivityController.getInstance().getMembershipCardRewardType() != -1
    }

    static isFirstLogin() {
        let loginTime = checkInt(Func.getStorage(FIRST_LOGIN_KEY))
        if (loginTime == 0) {
            return true
        } else {
            return Func.timeToDayStart1(getServerUtcTime()) != Func.timeToDayStart1(loginTime)
        }
    }
}
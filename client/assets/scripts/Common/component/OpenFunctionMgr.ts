import { _decorator } from "cc";
import { AbsControl } from "../../framework/base/IAbs";
import { proto } from "client_protocol";
import { tab } from "../../Table/table_gen";
import { LangMgr } from "../../logic/mgr/LangMgr";
import { ShowTips, UIMgr } from "../../logic/mgr/UIMgr";
import { RoleData } from "../../logic/model/role/RoleData";
import { Net } from "../../logic/net/Net";
import { ViewName } from "../../logic/define/ViewDefine";
import { EventMgr } from "../../logic/mgr/EventMgr";
import { LocalEvent } from "../../logic/define/LocalEvent";
import { ActivityData } from "../../logic/model/activity/ActivityData";
import { RookieTaskMgr } from "../../logic/model/activity/rookieTask/RookieTaskMgr";
import { PayData } from "../../logic/model/pay/PayData";
import { SettingsManager } from "../../logic/model/role/SettingsManager";
import { BattleMainDataControl } from "../../logic/model/home/battle/BattleMainDataControl";


const { ccclass, property } = _decorator;

/** 功能开启 */
export class OpenFunctionMgr extends AbsControl {
    private _openMap: Map<tab.OpenFunctionName, proto.IOpenFunction> = new Map();
    private static _instance: OpenFunctionMgr;
    private _waitPopOpenName: Array<tab.OpenFunctionName> = [];

    public static get ins() {
        if (null == this._instance) {
            this._instance = new OpenFunctionMgr();
        }
        return this._instance;
    }
    // 设置开放功能列表
    setOpenFunctionData(data: proto.IOpenFunction[]) {
        for (let i = 0; i < data.length; i++) {
            this._openMap.set(data[i].name, data[i]);
        }
    }
    // 获取开放功能列表
    getOpenFunctionData(openFunc: tab.OpenFunctionName): proto.IOpenFunction {
        return this._openMap.get(openFunc);
    }
    // 领取奖励之后修改列表
    changeOpenFunctionDataByName(openFunc: tab.OpenFunctionName) {
        const obj: proto.IOpenFunction = this._openMap.get(openFunc);
        obj.isReceivedRewards = true;
    }
    pushOpenFunctionData(data: proto.IOpenFunction[]) {

        for (let i = 0; i < data.length; i++) {
            this._openMap.set(data[i].name, data[i]);
            // 如果开启的功能中有战令系统 像服务器发送刷新战令功能请求
            this.checkFunctionRefresh(data[i])
            let opTab = tab.getData().OpenFunctionTableByName.getValue(data[i].name)
            if (opTab.FunctionUnlockAnimation && opTab.FunctionUnlockAnimation != "") {
                if (opTab.Type == tab.FunctionType.FunctionType_Activity) {
                    if (ActivityData.ins.getActivityIsOpenByOPName(data[i].name)) {
                        this.waitPopOpenName.push(data[i].name);
                    }
                } else {
                    this.waitPopOpenName.push(data[i].name);
                }

            }
        }
        EventMgr.emitLocal(LocalEvent.checkOpenFuncPop);
        EventMgr.emitLocal(LocalEvent.openFunctions);
        // if(names.length>0){
        //     UIMgr.ins.show({viewName:ViewName.FunctionUnlockPop,data:{"functionNames":names}})
        // }

    }
    // 检测功能开启
    checkFunctionIsOpen(openFunc: tab.OpenFunctionName, extraOpenFunc?: tab.OpenFunctionName) {
        if (openFunc === tab.OpenFunctionName.OpenFunctionName_None) {
            return true;
        }
        let obj: proto.IOpenFunction = this._openMap.get(openFunc);

        let extra = true;
        if (extraOpenFunc) {
            extra = this.checkExtraFunctionOpen(extraOpenFunc);
        }

        if (obj && obj.name === openFunc && extra) {

            if (obj.isOpen) {
                let openTab = tab.getData().OpenFunctionTableByName.getValue(openFunc);
                if (openTab.Type == tab.FunctionType.FunctionType_Activity) {
                    let act = ActivityData.ins.getActivityIsOpenByOPName(openFunc);
                    return act;
                } else {
                    if (openTab.Name === tab.OpenFunctionName.OpenFunctionName_LimitBenifit) {
                        return ActivityData.ins.limitedRewardMsg && ActivityData.ins.isShowLimit()
                    } else if (openTab.Name === tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask || openTab.Name === tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2) {
                        const openName1 = tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask;
                        const openName2 = tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2;
                        const data1 = RookieTaskMgr.ins.getTrialTask(openName1);
                        const data2 = RookieTaskMgr.ins.getTrialTask(openName2);
                        return Boolean(data1 || data2);
                    } else if (openTab.Name === tab.OpenFunctionName.OpenFunctionName_FirstRecharge) {
                        let rechargeData = PayData.ins.getFirstRechargeTable();
                        return rechargeData !== null;
                    } else {
                        return true;
                    }
                }

            } else {
                return false;
            }
        }
    }
    checkExtraFunctionOpen(openFunc: tab.OpenFunctionName): boolean {
        const openTab = tab.getData().OpenFunctionTableByName.getValue(openFunc);
        const BattleLv = openTab.BattleLv
        const PlayerLv = openTab.PlayerLv;
        const CreateDay = openTab.CreateDay;
        if (BattleLv) {
            return BattleMainDataControl.ins.getIsPasstStageByStageId(BattleLv);
        }
        if (PlayerLv) {
            return RoleData.ins.level >= PlayerLv;
        }
        if (CreateDay) {
            const newDate = new Date(RoleData.ins.createTime * 1000);
            const tomorrow = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
            const times = RoleData.ins.getServerUtcTime() - tomorrow.getTime() / 1000;
            let nowDay = 1;
            if (times > 0) {
                nowDay = Math.ceil((RoleData.ins.getServerUtcTime() - tomorrow.getTime() / 1000) / 86400) + 1;
            }
            return nowDay >= CreateDay;
        }
        return true
    }
    // 显示开启条件
    showFunctionTips(openFunc: tab.OpenFunctionName) {
        const openTab = tab.getData().OpenFunctionTableByName.getValue(openFunc);
        const pveTab = tab.getData().PveStageTableByStageId.getValue(openTab.BattleLv)
        const BattleLv = pveTab ? LangMgr.getLab(pveTab.StageName) : "";
        const PlayerLv = openTab.PlayerLv;
        const CreateDay = openTab.CreateDay;
        const Privileged = LangMgr.getLab(tab.PrivilegedType[openTab.Privileged]);
        const VipLv = openTab.VipLv;
        const tipsArr = [BattleLv, PlayerLv, CreateDay, VipLv, Privileged]
        let tips = ""
        tips = LangMgr.getCombineString(openTab.TipsKey, tipsArr);
        ShowTips(tips);
    }
    // 检查是否有特殊系统开启
    checkFunctionRefresh(data: proto.IOpenFunction) {
        // 战令开启
        for (let i = 0; i < tab.getData().BattlePassTable.length; i++) {
            const passTab: tab.BattlePassTable = tab.getData().BattlePassTable[i];
            const openFuncName = passTab.OpenFunction;
            if (data.name === openFuncName && data.isOpen) {
                let pass_msg = new proto.Msg_GetBattlePassInfoMapReq();
                Net.Send(proto.Ptl.GetBattlePassInfoMapReq, pass_msg);
                break;
            }
        }
        switch (data.name) {
            //试炼开启
            case tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask:
            case tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2:
                // 试炼开启
                if (data.isOpen) {
                    let trial_msg = new proto.Msg_GetNewPlayerTrialMapReq();
                    Net.Send(proto.Ptl.GetNewPlayerTrialMapReq, trial_msg);
                }
                break
            // 精彩活动开启
            case tab.OpenFunctionName.OpenFunctionName_SpecialGiftDaily:
            case tab.OpenFunctionName.OpenFunctionName_SpecialGiftWeekly:
            case tab.OpenFunctionName.OpenFunctionName_SpecialGiftMonthly:
                EventMgr.emitLocal(LocalEvent.openFuncRed);
                break;
            case tab.OpenFunctionName.OpenFunctionName_NewPlayerMall:
            case tab.OpenFunctionName.OpenFunctionName_NewPlayerMall2:
                let fixed_msg = new proto.Msg_GetFixedShopInfoMapReq();
                Net.Send(proto.Ptl.GetFixedShopInfoMapReq, fixed_msg);
                break;
            case tab.OpenFunctionName.OpenFunctionName_AutoSelectRogue:
                // SettingsManager.ins.setSetting("isAutoSelectRogue", data.isOpen);
                break;
            // 百抽活动
            case tab.OpenFunctionName.OpenFunctionName_SignInGift:
                let sign_msg = new proto.Msg_GetSignInGiftInfoReq();
                Net.Send(proto.Ptl.GetSignInGiftInfoReq, sign_msg);
                break;
            default:
                break;
        }
    }

    /**
     * 需要等待弹窗开启功能弹窗的列表
     */
    get waitPopOpenName() {
        if (!this._waitPopOpenName) {
            this._waitPopOpenName = [];
        }
        return this._waitPopOpenName;
    }
    set waitPopOpenName(list: Array<number>) {
        this._waitPopOpenName = list;
    }
}
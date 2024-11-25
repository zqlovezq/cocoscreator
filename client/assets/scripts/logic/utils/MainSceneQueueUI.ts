/*
 * @Date: 2024-10-15 16:32:56
 * @LastEditors: wzq
 * @LastEditTime: 2024-11-06 09:57:55
 * @param:进入主场景弹出队列UI
 */
import { _decorator, Component, Node } from 'cc';
import { EventMgr } from '../mgr/EventMgr';
import { LocalEvent } from '../define/LocalEvent';
import { tab } from '../../Table/table_gen';
import { Func } from './Func';
import { SignInGiftData } from '../model/activity/signGift/SignInGiftData';
import { UIMgr } from '../mgr/UIMgr';
import { PatrolDataMgr } from '../model/home/Patrol/PatrolDataMgr';
import { RoleData } from '../model/role/RoleData';
import { ActivityData } from '../model/activity/ActivityData';
import { ViewName } from '../define/ViewDefine';
import { OpenFunctionMgr } from '../../Common/component/OpenFunctionMgr';
import { checkSameDay } from './GameUtil';
import { RecruitType } from '../../Common/script/EnumTypeMgr';
const { ccclass, property } = _decorator;
interface openData {
    id: number,
    isOpen: boolean,
}
enum PopUI_id {
    Sign100 = 10001,
    SignNew = 10002,
    SignDay = 10003,
    Patrol = 10004,
    upBanner = 10005,
}
@ccclass('MainSceneQueueUI')
export default class MainSceneQueueUI {
    static queueUIs: { id: number, isOpen: boolean }[] = []

    static init() {
        EventMgr.onLocal(LocalEvent.LocalMsg_QueueUI_check, this.checkOpenAll, this)
        EventMgr.onLocal(LocalEvent.LocalMsg_QueueUI_deleteUI, this.deleteUI, this)
    }
    static deleteUI() {
        if (this.queueUIs && this.queueUIs.length > 0) {
            this.queueUIs.splice(0, 1)
            this.showUI()
        }
    }
    static checkOpenAll() {
        let openView: openData[] = []
        //检测打开条件
        for (const key in PopUI_id) {
            const value = PopUI_id[key]
            if (typeof (value) == 'number') {
                const openObj: openData = {
                    id: value,
                    isOpen: this["checkItem" + value]()
                }
                openView.push(openObj)
            }
        }
        //处理互斥
        for (let index = 0; index < openView.length; index++) {
            const v = openView[index];
            if (v.isOpen) {
                let conf = tab.getData().PopWindowMechanismByID.getValue(v.id)
                for (let j = 0; j < conf.MutexID.length; j++) {
                    let dd: openData = Func.forBy(openView, "id", conf.MutexID[j])
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
            let aconf = tab.getData().PopWindowMechanismByID.getValue(a.id)
            let bconf = tab.getData().PopWindowMechanismByID.getValue(b.id)
            return aconf.PopPriority - bconf.PopPriority
        })
        this.queueUIs = openView

        console.warn("主场景打开队列", JSON.stringify(this.queueUIs))

        this.showUI()
    }
    static showUI() {
        let data = this.queueUIs[0]
        if (data) {
            switch (data.id) {
                case PopUI_id.Sign100:
                    const isGiftOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_SignInGift);
                    if (isGiftOpen&&!SignInGiftData.ins.checkActivityEnd()) {
                        UIMgr.ins.jumpLayer(tab.Module.Module_SignInGiftPop);
                    }
                    break
                case PopUI_id.SignNew:
                    UIMgr.ins.jumpLayer(tab.Module.Module_NewPlayerSignInPop);
                    break
                case PopUI_id.SignDay:
                    // UIMgr.ins.jumpLayer(tab.Module.Module_NewPlayerSignInPop);
                    break
                case PopUI_id.upBanner:
                    if(!checkSameDay(RecruitType.GaChaUp)){
                        UIMgr.ins.jumpLayer(tab.Module.Module_BannerPop);
                    }
                    break
                case PopUI_id.Patrol:
                    const patrolOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Patrol);
                    if (patrolOpen) {
                        UIMgr.ins.jumpLayer(tab.Module.Module_PatrolPop);
                    }
                    break
                default:
                    break;
            }
        }
    }
    /* 签到 */
    static checkItem10001() {
        return SignInGiftData.ins.canReceive()
    }
    /* 巡逻奖励满 */
    static checkItem10004() {
        const startPatrolData = PatrolDataMgr.ins.startPatrolData;
        const InitialPatrolMaxTime = tab.getData().GetKeyValue_ConfigTable().InitialPatrolMaxTime + RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_PatrolIdleTime)
        const curTime = RoleData.ins.getServerUtcTime();
        let timeCount = curTime - (Number(startPatrolData.startPatrolTime))
        const maxTime = InitialPatrolMaxTime;
        return timeCount > maxTime;
    }
    /* 萌新签到 */
    static checkItem10002() {
        // 还有未签到的
        const canGet = ActivityData.ins.getNewPlayerSignAwards();
        const isOpen = ActivityData.ins.isOpenDailyAcivity(tab.DailyRewardType.DailyRewardType_NewServer)
        return isOpen && canGet;
    }
    static checkItem10003() {
        return false
    }
    static checkItem10005() {
        const actInfos = ActivityData.ins.getAllUpData();
        return actInfos.length > 0;
    }
}



import { _decorator, Component, Node } from 'cc';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { ActivityData } from './ActivityData';
import { tab } from '../../../Table/table_gen';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * ActivityRed
 * zhudingchao
 * Fri Jun 28 2024 16:54:49 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/ActivityRed.ts
 *
 */

@ccclass('ActivityRed')
export class ActivityRed {

    private static instance: ActivityRed = null;

    public static get ins() {
        if (this.instance == null) {
            this.instance = new ActivityRed();
        }
        return this.instance;
    }
    init() {
        RedMgr.ins.registerCalculateFb(RedDotType.NewPlayerSignIn, this.red_NewPlayerSignIn, this);
        RedMgr.ins.registerCalculateFb(RedDotType.SignIn, this.red_SignIn, this);
        RedMgr.ins.registerCalculateFb(RedDotType.HeroRoad, this.red_HeroRoad, this);
        RedMgr.ins.registerCalculateFb(RedDotType.MonthlyCard, this.red_MonthlyCard, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Vip, this.red_Vip, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Vip_Buy, this.red_Vip_Buy, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Welfare_Open, this.red_wlfare_open, this);
    }
    red_wlfare_open(){
        return OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Welfare);
    }
    red_NewPlayerSignIn() {
        tab.VipBonusTable
        let msg = ActivityData.ins.getDailyRewardMsgByType(tab.DailyRewardType.DailyRewardType_NewServer);
        return msg && msg.activatedList.length > 0;
    }
    red_SignIn() {
        let msg = ActivityData.ins.getDailyRewardMsgByType(tab.DailyRewardType.DailyRewardType_Daily);
        return msg && msg.activatedList.length > 0;
    }
    red_HeroRoad() {
        let msg = ActivityData.ins.heroCollectionMsg;
        return msg && msg.activatedList.length > 0;
    }
    red_MonthlyCard() {
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_MonthlyPass)){
            return false;
        }
        let msg = ActivityData.ins.monthlyPassInfo;
        if (msg.PrivilegeMap && msg.PrivilegeMap[tab.PrivilegedType.PrivilegedType_MonthlyPass]) {
            if (!msg.PrivilegeMap[tab.PrivilegedType.PrivilegedType_MonthlyPass].isDailyReceived) {
                return true;
            }
        }
        if (msg.PrivilegeMap && msg.PrivilegeMap[tab.PrivilegedType.PrivilegedType_PremiumMonthlyPass]) {
            if (!msg.PrivilegeMap[tab.PrivilegedType.PrivilegedType_PremiumMonthlyPass].isDailyReceived) {
                return true;
            }
        }
        if (msg.isReceivedMonthlyPassAddtional) {
            return false;
        }
        if (msg.PrivilegeMap && msg.PrivilegeMap[tab.PrivilegedType.PrivilegedType_MonthlyPass] && msg.PrivilegeMap[tab.PrivilegedType.PrivilegedType_PremiumMonthlyPass]) {
            return true;
        }
        return false;
        // return msg&&msg.activatedList.length>0;
    }
    red_Vip() {
        if(OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Vip)){
            let msg = ActivityData.ins.vipMsg;
            return msg && !msg.isDailyGiftReceived;
        }else{
            return false;
        }
        
    }
    red_Vip_Buy() {
        if(OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Vip)){
            let vipBonus = tab.getData().VipBonusTable;
            let vipLevel =ActivityData.ins.vipMsg.vipLevel;
            let stateToChange = {};
            for(let key in vipBonus){
                if(vipBonus[key].VipLv<=vipLevel){
                    let isBuy = ActivityData.ins.vipMsg.boughtVipGifts.indexOf(vipBonus[key].VipLv) >= 0;
                    stateToChange[vipBonus[key].VipLv+""]=!isBuy;
                }else{
                    stateToChange[vipBonus[key].VipLv+""]=false;
                }
            }
            return stateToChange;
        }else{
            let vipBonus = tab.getData().VipBonusTable;
            let stateToChange = {};
            for(let key in vipBonus){
              stateToChange[vipBonus[key].VipLv+""]=false;
            }
            return stateToChange;
        }
        
    }
}
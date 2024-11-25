import { _decorator, Component, Node } from 'cc';
import { AbsControl } from '../../../../framework/base/IAbs';
import { proto } from 'client_protocol';
import { AWARD_STATE } from '../../../../Common/script/EnumTypeMgr';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
import { tab } from '../../../../Table/table_gen';
const { ccclass, property } = _decorator;

@ccclass('SignInGiftData')
export class SignInGiftData extends AbsControl {
    private curSignDay: number = -1;
    private gotSignDays: number[] = [];
    private static _instance: SignInGiftData;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new SignInGiftData();
        }
        return this._instance;
    }
    initSignInGift(msg: proto.Msg_GetSignInGiftInfoRsp) {
        this.curSignDay = msg.signInDays ? msg.signInDays : 0;
        this.gotSignDays = msg.receivedDays ? msg.receivedDays : [];
        RedMgr.refreshEvent(RedDotType.SignGiftRed);
    }
    getSignDay() {
        return this.curSignDay;
    }
    getGotGignDays() {
        return this.gotSignDays;
    }
    // 有可领取的奖励
    canReceive(): boolean {
        return this.gotSignDays.length < this.curSignDay;
    }
    // 判断活动是否结束
    checkActivityEnd(){
        return this.gotSignDays.length===tab.getData().SignInGiftTable.length
    }
    // 获取礼品
    receiveGift(day: number[]) {
        this.gotSignDays = this.gotSignDays.concat(day);
    }
    // 判断当前签到奖励状态
    getSignState(day: number): AWARD_STATE {
        if (day > this.curSignDay) {
            return AWARD_STATE.LOCK
        } else {
            if (this.gotSignDays.indexOf(day) > -1) {
                return AWARD_STATE.GOT
            } else {
                return AWARD_STATE.RECEIVE;
            }
        }
    }
    // 获取当前没有领取奖励的id
    getNotGetData():tab.SignInGiftTable{
        const tabs = tab.getData().SignInGiftTable;
        for(let i=0;i<tabs.length;i++){
            const day = tabs[i].Day;
            if(this.curSignDay>=day){
                // 表示可领的奖励
                if(this.gotSignDays.indexOf(day) > -1){
                    // 已经领过
                    continue
                }else{
                    return tabs[i]
                }
            }else{
                break;
            }
        }
        return tab.getData().SignInGiftTableByDay.getValue(this.curSignDay);
    }
}



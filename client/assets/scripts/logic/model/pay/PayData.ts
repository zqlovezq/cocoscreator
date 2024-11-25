import { _decorator, Component, Node } from 'cc';
import { IClear } from '../../../framework/base/IAbs';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
const { ccclass, property } = _decorator;

/**
 * 
 * PayData
 * zhudingchao
 * Wed Jun 26 2024 14:38:31 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/pay/PayData.ts
 *
 */

@ccclass('PayData')
export class PayData implements IClear {

    private static _instance: PayData;
    private _payInfoMsg: proto.Msg_GetPayInfoRsp;
    private _isShowFirstRecharge: boolean = false;
    private _firstRechargeTabs: tab.FirstRechargeTable[] = []
    public static get ins() {
        if (null == this._instance) {
            this._instance = new PayData();
        }
        return this._instance;
    }
    purge() {

    }
    set payInfoMsg(msg: proto.Msg_GetPayInfoRsp) {
        this._payInfoMsg = msg;
        // let b = this.isShowFirstRecharge();
        // if (b != this._isShowFirstRecharge) {
        //     this._isShowFirstRecharge = b;
        //     EventMgr.emitLocal(LocalEvent.FirstRecharge_Chang);
        // }
        EventMgr.emitLocal(LocalEvent.FirstRecharge_Chang);
    }
    get payInfoMsg() {
        return this._payInfoMsg;
    }

    /**是否显示首充活动 */
    isShowFirstRecharge() {
        if (this.payInfoMsg) {
            let tables = this.getFirstRechargeTabs();
            if (this.payInfoMsg.firstRechargeInfo.boughtGoodsIds.length == tables.length) {
                return false;
            }
            return true;
        }
        return false;
    }
    /**
     * 获得首充奖励id
     * @returns 
     */
    getFirstRechargeTable() {
        let tables = this.getFirstRechargeTabs();
        if (this.payInfoMsg) {
            let boughtGoodsIds = this.payInfoMsg.firstRechargeInfo.boughtGoodsIds;
            for (let key in tables) {
                let id = tables[key].Id;
                if (boughtGoodsIds.indexOf(id) < 0) {
                    return tables[key];
                }
            }
        }
        return null;
    }
    /**首充完成 */
    firstRechargeSucc(rechargeId: number) {
        let tables = tab.getData().FirstRechargeTable;
        let table = tables.find(a => a.RechargeId == rechargeId);
        if (table) {
            this.payInfoMsg.firstRechargeInfo.boughtGoodsIds.push(table.Id);
            if (table.Id === 4) {
                for (let i = 0; i < this._firstRechargeTabs.length; i++) {
                    this.payInfoMsg.firstRechargeInfo.boughtGoodsIds.push(this._firstRechargeTabs[i].Id);
                }
            }
            EventMgr.emitLocal(LocalEvent.FirstRecharge_Chang);
        }
    }
    getFirstRechargeTabs() {
        if (this._firstRechargeTabs.length === 0) {
            this.setFirstRechargeTabs();
        }
        return this._firstRechargeTabs
    }
    setFirstRechargeTabs() {
        let tables = tab.getData().FirstRechargeTable;
        for (let i = 0; i < tables.length; i++) {
            const _tab = tables[i];
            if (_tab.ContainGoodsId.length === 0) {
                this._firstRechargeTabs.push(_tab);
            }
        }
    }
}
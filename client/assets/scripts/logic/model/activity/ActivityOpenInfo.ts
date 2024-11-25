import { _decorator, Component, Node } from 'cc';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

/**
 * 
 * ActivtityOpenInfo
 * zhudingchao
 * Fri Jul 26 2024 11:24:34 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/ActivtityOpenInfo.ts
 *
 */

@ccclass('ActivityOpenInfo')
export class ActivityOpenInfo extends proto.Activity {
    private _actTable: tab.ActivityTable;
    merge(info: proto.Activity) {
        for (const key in info) {
            this[key] = info[key]
        }
    }
    get activityTable() {
        if (!this._actTable) {
            this._actTable = tab.getData().ActivityTableByActivityId.getValue(this.TabId);
        }
        return this._actTable;
    }

    isOpen() {
        let timer = RoleData.ins.getServerUtcTime()
        return timer >= this.startTime && timer < this.endTime;

    }
}
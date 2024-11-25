import { _decorator, Component, Node } from 'cc';
import { IClear } from '../../../framework/base/IAbs';
import { proto } from 'client_protocol';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
import { tab } from '../../../Table/table_gen';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

/**
 * 
 * FengyunRankData
 * zhudingchao
 * Thu Jul 18 2024 10:15:40 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/fengyunRanking/FengyunRankData.ts
 *
 */

@ccclass('FengyunRankData')
export class FengyunRankData implements IClear {
    private static _instance: FengyunRankData;
    private honorRollMap: { [k: string]: proto.IHonorRoll };

    public static get ins() {
        if (null == this._instance) {
            this._instance = new FengyunRankData();
        }
        return this._instance;
    }
    purge() {

    }
    getMapData() {
        return this.honorRollMap;
    }
    initMapData(msg: proto.Msg_GetHonorRollMapRsp) {
        this.honorRollMap = msg.honorRollMap;
    }
    getHonorRollInfoByActId(actId: number) {
        return this.honorRollMap[actId];
    }
    isOpenActivity(actId: number) {
        if (this.honorRollMap[actId]) {
            const endTime = this.honorRollMap[actId].activityEndTime;
            if (endTime) {
                const lastTimer = Number(endTime) - RoleData.ins.getServerUtcTime()
                return lastTimer > 0;
            }
            return false;
        } else {
            return false;
        }
        // OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_AchievementTask)
    }
}
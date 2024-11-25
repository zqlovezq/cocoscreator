import { _decorator, Component, Node } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { PrestigeData } from './PrestigeData';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
const { ccclass, property } = _decorator;

/**
 * 
 * PrestigeControl
 * zhudingchao
 * Thu Jun 06 2024 10:57:07 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/prestige/PrestigeControl.ts
 *
 */

@ccclass('PrestigeControl')
export class PrestigeControl extends AbsControl {

    private static _instance: PrestigeControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new PrestigeControl();
        }
        return this._instance;
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetQuestLogsRsp, this.on_s2c_GetQuestLogsRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveQuestLogRewardRsp, this.on_s2c_ReceiveQuestLogRsp, this);
        EventMgr.onMsg(proto.Ptl.UpQuestLogLevelRsp, this.on_s2c_UpQuestLogLevelRsp, this);
        EventMgr.onMsg(proto.Ptl.TaskChangePush, this.on_s2c_TaskChangePush, this);

        RedMgr.ins.registerCalculateFb(RedDotType.Prestige, this.on_getRedPoint, this);

    }
    request() {
        this.requestQuestLogs();
    }

    requestQuestLogs() {
        let msg = new proto.Msg_GetQuestLogsReq();
        Net.Send(proto.Ptl.GetQuestLogsReq, msg)
    }
    requestUpQuestLogLevel() {
        let msg = new proto.Msg_UpQuestLogLevelReq();
        Net.Send(proto.Ptl.UpQuestLogLevelReq, msg)
    }
    requestReceiveQuestLog(ids: number[]) {
        let msg = new proto.Msg_ReceiveQuestLogRewardReq();
        msg.taskIds = ids;
        Net.Send(proto.Ptl.ReceiveQuestLogRewardReq, msg)
    }
    on_s2c_GetQuestLogsRsp(msg: proto.Msg_GetQuestLogsRsp) {
        PrestigeData.ins.initData(msg);
        RedMgr.refreshEvent(RedDotType.Prestige);
    }
    on_s2c_ReceiveQuestLogRsp(msg: proto.Msg_ReceiveQuestLogRewardRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            PrestigeData.ins.receiveQuestLog(msg);
            RedMgr.refreshEvent(RedDotType.Prestige);
        }
    }
    on_s2c_UpQuestLogLevelRsp(msg: proto.Msg_UpQuestLogLevelRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            PrestigeData.ins.level=msg.level;
            RedMgr.refreshEvent(RedDotType.Prestige);
        }
    }
    on_s2c_TaskChangePush(msg: proto.Msg_TaskChangePush) {
        PrestigeData.ins.updateTask(msg);
        RedMgr.refreshEvent(RedDotType.Prestige);
        // TaskData.ins.updateTask(msg);
    }
    on_getRedPoint(){
        return PrestigeData.ins.getIsRedPoint();
    }
}
import { _decorator, Component, Node } from 'cc';
import { AbsControl } from '../../../../framework/base/IAbs';
import { proto } from 'client_protocol';
const { ccclass, property } = _decorator;

@ccclass('PatrolDataMgr')
export class PatrolDataMgr extends AbsControl {
    public startPatrolData: proto.Msg_GetPatrolInfoRsp = null;//巡逻时间
    private static _instance: PatrolDataMgr;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new PatrolDataMgr();
        }
        return this._instance;
    }
    initData(msg: proto.Msg_GetPatrolInfoRsp) {
        this.startPatrolData = msg;
    }
}



import { _decorator, Component, Node } from 'cc';
import { AbsControl } from '../../../../framework/base/IAbs';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { Net } from '../../../net/Net';
import { BattleMainEliteData } from './BattleMainEliteData';
const { ccclass, property } = _decorator;

@ccclass('BattleMainEliteControl')
export class BattleMainEliteControl extends AbsControl {
    private static _instance: BattleMainEliteControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new BattleMainEliteControl();
        }
        return this._instance;
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetEliteStageInfoRsp, this.on_s2c_GetEliteStageInfoRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveEliteClearStageRewardsRsp, this.on_s2c_ReceiveEliteClearStageRewardsRsp, this);
    }
    reqReceiveEliteClearStageRewards(stageId:number){
        let msg = new proto.Msg_ReceiveEliteClearStageRewardsReq ();
        msg.stageId = stageId;
        Net.Send(proto.Ptl.ReceiveEliteClearStageRewardsReq, msg);
    }
    on_s2c_GetEliteStageInfoRsp(msg: proto.Msg_GetEliteStageInfoRsp){
        // 初始化精英关卡信息
        BattleMainEliteData.ins.initData(msg);
    }
    on_s2c_ReceiveEliteClearStageRewardsRsp(msg: proto.Msg_ReceiveEliteClearStageRewardsRsp){
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        if (msg.rewards) {
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        }

    }
}



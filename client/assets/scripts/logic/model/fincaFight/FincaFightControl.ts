import { _decorator, Component, Node } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { proto } from 'client_protocol';
import { EventMgr } from '../../mgr/EventMgr';
import { Net } from '../../net/Net';
import { MALLNAME, RANKING_TYPE } from '../../../Common/script/EnumTypeMgr';
import { FincaFightData } from './FincaFightData';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ItemData } from '../item/ItemData';
import { ViewName } from '../../define/ViewDefine';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
const { ccclass, property } = _decorator;

@ccclass('FincaFightControl')
export class FincaFightControl extends AbsControl {
    public static isSweepPvp:boolean = false;
    private static _instance: FincaFightControl = null;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new FincaFightControl();
        }
        return this._instance;
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.FincaBattleFightRsp, this.on_s2c_FincaBattleFightRsp, this);
        EventMgr.onMsg(proto.Ptl.SetFincaBattleHeroIdsRsp, this.on_s2c_SetFincaBattleHeroIdsRsp, this);
        EventMgr.onMsg(proto.Ptl.SetFincaBattleBookIdsRsp, this.on_s2c_SetFincaBattleBookIdsRsp, this);
        EventMgr.onMsg(proto.Ptl.GetFincaBattleOpponentsRsp, this.on_s2c_GetFincaBattleOpponentsRsp, this);
        EventMgr.onMsg(proto.Ptl.GetFincaBattleFightRecordsRsp, this.on_s2c_GetFincaBattleFightRecordsRsp, this);
    }
    /* -------------------------------------------------------------------------------------------- */
    // 发起庄园战挑战
    reqFincaBattleFight(opponentRoleId: string, isSweep: boolean) {
        let sendMsg = (() => {
            let msg = new proto.Msg_FincaBattleFightReq();
            FincaFightControl.isSweepPvp = isSweep;
            msg.isSweep = isSweep;
            msg.opponentRoleId = opponentRoleId;
            Net.Send(proto.Ptl.FincaBattleFightReq, msg);
        })
        // 判断当前次数
        if (FincaFightData.ins.freeTimes > 0 || ItemData.ins.getCount(85) > 0) {
            sendMsg();
        } else {
            UIMgr.ins.show({ viewName: ViewName.ItemBuyPop, data: { name: MALLNAME.PvpToken } })
        }
    }
    on_s2c_FincaBattleFightRsp(msg: proto.Msg_FincaBattleFightRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        FincaFightData.ins.freeTimes = tab.getData().GetKeyValue_ConfigTable().FincaFightFreeTimes-msg.freeFightTimes;
        RedMgr.refreshEvent(RedDotType.Free_Fight_Token);
    }
    /* -------------------------------------------------------------------------------------------- */
    // 设置庄园战英雄
    reqSetFincaBattleHeroIds(heroIds: number[]) {
        // 检测一下首个必须是战士还有职业不能重复
        if(FincaFightData.ins.checkHeroIdsOk()){
            let msg = new proto.Msg_SetFincaBattleHeroIdsReq();
            msg.heroIds = heroIds;
            Net.Send(proto.Ptl.SetFincaBattleHeroIdsReq, msg);
        }
    }
    on_s2c_SetFincaBattleHeroIdsRsp(msg: proto.Msg_SetFincaBattleHeroIdsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        // 保存成功
        RedMgr.refreshEvent(RedDotType.PVP_Fight_Team);
    }
    /* -------------------------------------------------------------------------------------------- */
    // 设置庄园战秘籍
    reqSetFincaBattleBookIds(bookIds: number[]) {
        let msg = new proto.Msg_SetFincaBattleBookIdsReq();
        msg.bookItemIds = bookIds;
        Net.Send(proto.Ptl.SetFincaBattleBookIdsReq, msg);
    }
    on_s2c_SetFincaBattleBookIdsRsp(msg: proto.Msg_SetFincaBattleBookIdsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        // 保存成功
        RedMgr.refreshEvent(RedDotType.PVP_Fight_Team);
    }
    /* -------------------------------------------------------------------------------------------- */
    // 获取庄园战对手
    reqGetFincaBattleOpponents() {
        let msg = new proto.Msg_GetFincaBattleOpponentsReq();
        msg.isRefresh = true;
        Net.Send(proto.Ptl.GetFincaBattleOpponentsReq, msg);
    }
    on_s2c_GetFincaBattleOpponentsRsp(msg: proto.Msg_GetFincaBattleOpponentsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
    }
    /* -------------------------------------------------------------------------------------------- */
    // 获取庄园战战斗记录
    reqGetFincaBattleFightRecords() {
        let msg = new proto.Msg_GetFincaBattleFightRecordsReq();
        Net.Send(proto.Ptl.GetFincaBattleFightRecordsReq, msg);
    }
    on_s2c_GetFincaBattleFightRecordsRsp(msg: proto.Msg_GetFincaBattleFightRecordsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
    }
    reqGetRank() {
        let msg = new proto.Msg_GetSimpleRankReq();
        msg.rankId = RANKING_TYPE.Fight;
        msg.pageIndex = 0;
        msg.pageSize = 3;
        Net.Send(proto.Ptl.GetSimpleRankReq, msg)
    }
}



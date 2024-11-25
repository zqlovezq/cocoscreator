import { _decorator, Component, log, Node } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { FriendData } from './FriendData';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
const { ccclass, property } = _decorator;

/**
 * 
 * FriendControl
 * zhudingchao
 * Fri Jun 07 2024 11:11:38 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/friends/FriendControl.ts
 *
 */

@ccclass('FriendControl')
export class FriendControl extends AbsControl {

    private static _instance: FriendControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new FriendControl();
        }
        return this._instance;
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetFriendSimpleRoleRsp, this.on_s2c_GetFriendSimpleRoleRsp, this);
        EventMgr.onMsg(proto.Ptl.AddFriendPush, this.on_s2c_AddFriendPush, this);
        EventMgr.onMsg(proto.Ptl.RemoveFriendPush, this.on_s2c_RemoveFriendPush, this);
        EventMgr.onMsg(proto.Ptl.UpdateFriendOnlineTime, this.on_s2c_UpdateFriendOnlineTime, this);
        EventMgr.onMsg(proto.Ptl.UpdatFriendPowerScore, this.on_s2c_UpdatFriendPowerScore, this);
        EventMgr.onMsg(proto.Ptl.AddBlacklistRsp, this.on_s2c_Msg_AddBlacklistRsp, this);
        EventMgr.onMsg(proto.Ptl.RemoveBlacklistRsp, this.on_s2c_RemoveBlacklistRsp, this);
        EventMgr.onMsg(proto.Ptl.AddFriendRsp, this.on_s2c_AddFriendRsp, this);
        EventMgr.onMsg(proto.Ptl.ConfirmFriendRsp, this.on_s2c_ConfirmFriendRsp, this);
        EventMgr.onMsg(proto.Ptl.RemoveFriendRsp, this.on_s2c_RemoveFriendRsp, this);
        EventMgr.onMsg(proto.Ptl.RemoveFriendApplyRsp, this.on_s2c_RemoveFriendApplyRsp, this);
        EventMgr.onMsg(proto.Ptl.RecommendFriendRsp, this.on_s2c_RecommendFriendRsp, this);
        EventMgr.onMsg(proto.Ptl.FindFriendRsp, this.on_s2c_FindFriendRsp, this);
        EventMgr.onMsg(proto.Ptl.RecvGiftRsp, this.on_s2c_RecvGiftRsp, this);
        EventMgr.onMsg(proto.Ptl.GivingGiftRsp, this.on_s2c_GivingGiftRsp, this);
        EventMgr.onMsg(proto.Ptl.SyncGiftList, this.on_s2c_SyncGiftList, this);
        EventMgr.onMsg(proto.Ptl.GiftPush, this.on_s2c_GiftPush, this);

        RedMgr.ins.registerCalculateFb(RedDotType.FriendApply, this.red_FriendApply, this);
        RedMgr.ins.registerCalculateFb(RedDotType.FriendValueReceive, this.red_FriendValueReceive, this);


    }

    request() {
        this.requestGetFriendSimpleRole(proto.FriendListType.FriendList);
        // this.requestGetFriendSimpleRole(proto.FriendListType.ApplyList);

    }


    private currType: proto.FriendListType;
    requestGetFriendSimpleRole(type: proto.FriendListType) {
        let msg = new proto.Msg_GetFriendSimpleRoleReq();
        msg.type = type;
        this.currType = type;
        Net.Send(proto.Ptl.GetFriendSimpleRoleReq, msg)
    }
    requestRecommendFriend() {
        let msg = new proto.Msg_RecommendFriendReq();
        Net.Send(proto.Ptl.RecommendFriendReq, msg)
    }
    requestAddFriend(roleId: string) {
        let msg = new proto.Msg_AddFriendReq();
        msg.roleId = roleId;
        Net.Send(proto.Ptl.AddFriendReq, msg)
    }
    requestConfirmFriend(roleIds: string[]) {
        let msg = new proto.Msg_ConfirmFriendReq();
        msg.roleId = roleIds;
        Net.Send(proto.Ptl.ConfirmFriendReq, msg)
    }
    requestRemoveFriend(roleId: string) {
        let msg = new proto.Msg_RemoveFriendReq;
        msg.roleId = roleId;
        Net.Send(proto.Ptl.RemoveFriendReq, msg)
    }
    requestRemoveFriendApply(roleIds: string[]) {
        let msg = new proto.Msg_RemoveFriendApplyReq;
        msg.roleId = roleIds;
        Net.Send(proto.Ptl.RemoveFriendApplyReq, msg)
    }
    requestAddBlacklist(roleId: string) {
        let msg = new proto.Msg_AddBlacklistReq;
        msg.roleId = roleId;
        Net.Send(proto.Ptl.AddBlacklistReq, msg)
    }
    requestRemoveBlacklist(roleId: string) {
        let msg = new proto.Msg_RemoveBlacklistReq();
        msg.roleId = roleId;
        Net.Send(proto.Ptl.RemoveBlacklistReq, msg)
    }
    requestFindFriend(name: string) {
        let msg = new proto.Msg_FindFriendReq();
        msg.name = name;
        Net.Send(proto.Ptl.FindFriendReq, msg)
    }
    requestRecvGift(roleIds: string[]) {
        let msg = new proto.Msg_RecvGiftReq();
        msg.roleId = roleIds;
        Net.Send(proto.Ptl.RecvGiftReq, msg)
    }
    requestGivingGift(roleIds: string[]) {
        let msg = new proto.Msg_GivingGiftReq();
        msg.roleId = roleIds;
        Net.Send(proto.Ptl.GivingGiftReq, msg)
    }
    on_s2c_GetFriendSimpleRoleRsp(msg: proto.Msg_GetFriendSimpleRoleRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            FriendData.ins.initFrendData(msg);
            if (msg.type == proto.FriendListType.FriendList) {
                if (!FriendData.ins.isInitApply) {
                    this.requestGetFriendSimpleRole(proto.FriendListType.ApplyList);
                }
            }
        } else if (msg.error.code == proto.CommonErrorCode.TryAgainLater) {
            if (this.currType == proto.FriendListType.FriendList) {
                setTimeout(() => {
                    this.requestGetFriendSimpleRole(proto.FriendListType.FriendList);
                }, 1000);
            } else if (this.currType == proto.FriendListType.ApplyList) {
                setTimeout(() => {
                    this.requestGetFriendSimpleRole(proto.FriendListType.ApplyList);
                }, 1000);
            }

        }
    }
    on_s2c_AddFriendPush(msg: proto.Msg_AddFriendPush) {
        FriendData.ins.addFriendInfo(msg);
    }
    on_s2c_RemoveFriendPush(msg: proto.Msg_RemoveFriendPush) {
        FriendData.ins.removeFiendInfo(msg);
    }
    on_s2c_UpdateFriendOnlineTime(msg: proto.Msg_UpdateFriendOnlineTime) {
        FriendData.ins.updateFriendOnlineTime(msg);
    }
    on_s2c_UpdatFriendPowerScore(msg: proto.Msg_UpdatFriendPowerScore) {
        FriendData.ins.updatFriendPowerScore(msg);
    }
    on_s2c_Msg_AddBlacklistRsp(msg: proto.Msg_AddBlacklistRsp) {

    }
    on_s2c_RemoveBlacklistRsp(msg: proto.Msg_RemoveBlacklistRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {

        }
    }
    on_s2c_AddFriendRsp(msg: proto.Msg_AddFriendRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {

        }
    }
    on_s2c_ConfirmFriendRsp(msg: proto.Msg_ConfirmFriendRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {

        }
    }
    on_s2c_RemoveFriendApplyRsp(msg: proto.Msg_RemoveFriendApplyRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {

        }
    }
    on_s2c_RemoveFriendRsp(msg: proto.Msg_RemoveFriendRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {

        }
    }
    on_s2c_RecommendFriendRsp(msg: proto.Msg_RecommendFriendRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            FriendData.ins.initRecommendFriendData(msg.list);
        }
    }
    on_s2c_FindFriendRsp(msg: proto.Msg_FindFriendRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {

        }
    }
    /**
     * 同步礼物数据
     * @param msg 
     */
    on_s2c_SyncGiftList(msg: proto.Msg_SyncGiftList) {
        FriendData.ins.giftListMsg = msg;
        if(msg.giftList[0]){
            FriendData.ins.giftPush(msg.giftList[0]);
        }
        RedMgr.refreshEvent(RedDotType.FriendValueReceive);
    }
    /**
     * 同步送礼数据
     * @param msg 
     */
    on_s2c_GiftPush(msg: proto.Msg_GiftPush) {
        FriendData.ins.giftPush(msg.roleId);
        RedMgr.refreshEvent(RedDotType.FriendValueReceive);
    }
    /**
    * 收取礼物返回
    * @param msg 
    */
    on_s2c_RecvGiftRsp(msg: proto.Msg_RecvGiftRsp) {
        FriendData.ins.receiveGiftSucc(msg.result);
        RedMgr.refreshEvent(RedDotType.FriendValueReceive);
    }
    /**
   * 赠与礼物返回
   * @param msg 
   */
    on_s2c_GivingGiftRsp(msg: proto.Msg_GivingGiftRsp) {
        FriendData.ins.givingGiftSucc(msg.roleId);
    }


    red_FriendApply() {
        let list = FriendData.ins.getApplyInfos();
        return list && list.length > 0;

    }
    red_FriendValueReceive() {
        return FriendData.ins.getNotReceiveGiftNum() > 0;
    }
}
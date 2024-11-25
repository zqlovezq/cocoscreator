import { _decorator, Component, log, Node } from 'cc';
import { IClear } from '../../../framework/base/IAbs';
import { SimpleRoleInfo } from './SimpleRoleInfo';
import { proto } from 'client_protocol';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { tab } from '../../../Table/table_gen';
const { ccclass, property } = _decorator;

/**
 * 
 * FriendData
 * zhudingchao
 * Fri Jun 07 2024 11:11:08 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/friends/FriendData.ts
 *
 */

@ccclass('FriendData')
export class FriendData implements IClear {
    private _friendMap: Map<string, SimpleRoleInfo>;
    private _applyMap: Map<string, SimpleRoleInfo>
    private _blackMap: Map<string, SimpleRoleInfo>;
    private _recommendMap: Map<string, SimpleRoleInfo>;
    public isInitMyFirend: boolean = false;
    public isInitApply: boolean = false;
    public isInitBlack: boolean = false;
    public isInitRecommend: boolean = false;
    private _removeFiendMsg: Array<proto.Msg_RemoveFriendPush>;
    private _friendOnlineTimeMsg: Array<proto.Msg_UpdateFriendOnlineTime>;
    private _friendPowerScoreMsg: Array<proto.Msg_UpdatFriendPowerScore>;
    public giftListMsg: proto.Msg_SyncGiftList;
    purge(): void {
        // this._friendMap.clear();
        // this._applyMap.clear();
        // this._blackMap.clear();
        // this._recommendMap.clear();

    }

    private static _instance: FriendData;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new FriendData();
        }
        return this._instance;
    }
    /**
     * 好友map
     */
    get friendMap() {
        if (!this._friendMap) {
            this._friendMap = new Map();
        }
        return this._friendMap;
    }

    /**
     * 申请添加好友map
     */
    get applyMap() {
        if (!this._applyMap) {
            this._applyMap = new Map();
        }
        return this._applyMap;
    }
    /**
     * 黑名单
     */
    get blackMap() {
        if (!this._blackMap) {
            this._blackMap = new Map();
        }
        return this._blackMap;
    }
    /**
     * 推荐好友map
     */
    get recommendMap() {
        if (!this._recommendMap) {
            this._recommendMap = new Map();
        }
        return this._recommendMap;
    }
    /**
     * 待移除的好友数据
     */
    private get removeFiendMsg() {
        if (!this._removeFiendMsg) {
            this._removeFiendMsg = [];
        }
        return this._removeFiendMsg;
    }

    /**
     * 待处理的更新用户离线时间消息
     */
    private get friendOnlineTimeMsg() {
        if (!this._friendOnlineTimeMsg) {
            this._friendOnlineTimeMsg = [];
        }
        return this._friendOnlineTimeMsg;
    }
    /**
     * 待处理的更新用户战力消息
     */
    private get friendPowerScoreMsg() {
        if (!this._friendPowerScoreMsg) {
            this._friendPowerScoreMsg = [];
        }
        return this._friendPowerScoreMsg;
    }
    initFrendData(msg: proto.Msg_GetFriendSimpleRoleRsp) {
        if (msg.type == proto.FriendListType.FriendList) {
            this.isInitMyFirend = true;
            let list = msg.list;
            for (let key in list) {
                let info = new SimpleRoleInfo();
                info.merge(list[key]);
                this.friendMap.set(info.id, info);
                info.type = proto.FriendListType.FriendList;
                this.setGiftState(info);
            }
            this.handleCacheData(this.friendMap, msg.type);
            RedMgr.refreshEvent(RedDotType.FriendValueReceive);
        } else if (msg.type == proto.FriendListType.BlackList) {
            this.isInitBlack = true;
            let list = msg.list;
            for (let key in list) {
                let info = new SimpleRoleInfo();
                info.merge(list[key]);
                this.blackMap.set(info.id, info);
                info.type = proto.FriendListType.BlackList;
            }
            this.handleCacheData(this.blackMap, msg.type);
        } else if (msg.type == proto.FriendListType.ApplyList) {
            this.isInitApply = true;
            let list = msg.list;
            for (let key in list) {
                let info = new SimpleRoleInfo();
                info.merge(list[key]);
                this.applyMap.set(info.id, info);
                info.type = proto.FriendListType.ApplyList;
            }
            this.handleCacheData(this.applyMap, msg.type);
            RedMgr.refreshEvent(RedDotType.FriendApply);
        }

    }
    initRecommendFriendData(list: proto.ISimpleRole[]) {
        this.recommendMap.clear();
        for (let key in list) {
            let info = new SimpleRoleInfo();
            info.merge(list[key]);
            this.recommendMap.set(info.id, info);
        }
        this.isInitRecommend = true;
    }
    addFriendInfo(msg: proto.Msg_AddFriendPush) {
        if (msg.type == proto.FriendListType.FriendList) {
            let info = this.friendMap.get(msg.role.id);
            if (info) {
                info.merge(msg.role);
            } else {
                info = new SimpleRoleInfo();
                info.merge(msg.role);
                this.friendMap.set(info.id, info);
                this.setGiftState(info);
            }
            info.type = proto.FriendListType.FriendList;
        } else if (msg.type == proto.FriendListType.BlackList) {
            let info = this.blackMap.get(msg.role.id);
            if (info) {
                info.merge(msg.role);
            } else {
                info = new SimpleRoleInfo();
                info.merge(msg.role);
                this.blackMap.set(info.id, info);
            }
            info.type = proto.FriendListType.BlackList;
        } else if (msg.type == proto.FriendListType.ApplyList) {
            let info = this.applyMap.get(msg.role.id);
            if (info) {
                info.merge(msg.role);
            } else {
                info = new SimpleRoleInfo();
                info.merge(msg.role);
                this.applyMap.set(info.id, info);
            }
            info.type = proto.FriendListType.ApplyList;
            RedMgr.refreshEvent(RedDotType.FriendApply);
        }
        RedMgr.refreshEvent(RedDotType.FriendValueReceive);

    }
    setGiftState(info: SimpleRoleInfo) {
        if (this.giftListMsg) {
            let index = this.giftListMsg.givingList.indexOf(info.id);
            info.isGiveGift = index >= 0;
            let idx = this.giftListMsg.recvList.indexOf(info.id);
            if (idx >= 0) {
                info.receiveGiftState = 2;
            } else {
                idx = this.giftListMsg.giftList.indexOf(info.id);
                if (idx >= 0) {
                    info.receiveGiftState = 1;
                } else {
                    info.receiveGiftState = 0;
                }
            }
        }
    }
    /**
     * 赠与礼物成功
     */
    givingGiftSucc(roleIds: string[]) {
        if (this.giftListMsg) {
            for (let key in roleIds) {
                let idx = this.giftListMsg.givingList.indexOf(roleIds[key]);
                if (idx < 0) {
                    this.giftListMsg.givingList.push(roleIds[key]);
                }
                let info = this.friendMap.get(roleIds[key]);
                if (info) {
                    info.isGiveGift = true;
                }
            }
        }
    }
    /**
     * 领取礼物成功
     * @param roleIds 
     */
    receiveGiftSucc(roleIds: proto.IRecvGiftResult[]) {
        if (this.giftListMsg) {
            for (let key in roleIds) {
                if (!roleIds[key].error || roleIds[key].error.code == proto.CommonErrorCode.Succeed) {
                    let idx = this.giftListMsg.recvList.indexOf(roleIds[key].roleId);
                    if (idx < 0) {
                        this.giftListMsg.recvList.push(roleIds[key].roleId);
                    }
                    let info = this.friendMap.get(roleIds[key].roleId);
                    if (info) {
                        info.receiveGiftState = 2;
                    }
                    let index = this.giftListMsg.giftList.indexOf(roleIds[key].roleId);
                    if (index >= 0) {
                        this.giftListMsg.giftList.splice(index, 1);
                    }
                } else {
                    log("领取礼物错误=====", roleIds[key])
                }

            }
        }
    }
    /**
     * 收到好友送礼物
     */
    giftPush(roleId: string) {
        if (this.giftListMsg) {
            let index = this.giftListMsg.giftList.indexOf(roleId);
            if (index < 0) {
                this.giftListMsg.giftList.push(roleId);
            }
            let info = this.friendMap.get(roleId);
            if (info) {
                info.receiveGiftState = 1;
            }
        }

    }

    /**
     * 处理前端提前收到的数据消息
     */
    private handleCacheData(map: Map<string, SimpleRoleInfo>, type: proto.FriendListType) {
        if (this.removeFiendMsg.length > 0) {
            let remove = [];
            for (let key in this.removeFiendMsg) {
                if (this.removeFiendMsg[key].type == type) {
                    let roleId = this.removeFiendMsg[key].roleId;
                    if (map.has(roleId)) {
                        map.delete(roleId);
                        remove.push(this.removeFiendMsg[key]);
                    }
                }

            }
            if (remove.length > 0) {
                for (let key in remove) {
                    let index = this.removeFiendMsg.indexOf(remove[key]);
                    if (index >= 0) {
                        this.removeFiendMsg.splice(index, 1);
                    }
                }
            }
            remove = null;
        }

        if (this.friendOnlineTimeMsg.length > 0) {
            let remove = [];
            for (let key in this.friendOnlineTimeMsg) {
                let roleId = this.friendOnlineTimeMsg[key].roleId;
                let info = map.get(roleId);
                if (info) {
                    info.offlineTime = this.friendOnlineTimeMsg[key].offlineTime;
                    remove.push(this.friendOnlineTimeMsg[key]);
                }
            }
            if (remove.length > 0) {
                for (let key in remove) {
                    let index = this.friendOnlineTimeMsg.indexOf(remove[key]);
                    if (index >= 0) {
                        this.friendOnlineTimeMsg.splice(index, 1);
                    }
                }
            }
            remove = null;
        }

        if (this.friendPowerScoreMsg.length > 0) {
            let remove = [];
            for (let key in this.friendPowerScoreMsg) {
                let roleId = this.friendPowerScoreMsg[key].roleId;
                let info = map.get(roleId);
                if (info) {
                    info.powerScore = this.friendPowerScoreMsg[key].powerScore;
                    remove.push(this.friendPowerScoreMsg[key]);
                }
            }
            if (remove.length > 0) {
                for (let key in remove) {
                    let index = this.friendPowerScoreMsg.indexOf(remove[key]);
                    if (index >= 0) {
                        this.friendPowerScoreMsg.splice(index, 1);
                    }
                }
            }
            remove = null;
        }
    }
    removeFiendInfo(msg: proto.Msg_RemoveFriendPush) {
        if (msg.type == proto.FriendListType.FriendList) {
            if (this.friendMap.has(msg.roleId)) {
                this.friendMap.delete(msg.roleId);
            } else {
                this.removeFiendMsg.push(msg);
            }

        } else if (msg.type == proto.FriendListType.BlackList) {
            if (this.blackMap.has(msg.roleId)) {
                this.blackMap.delete(msg.roleId);
            } else {
                this.removeFiendMsg.push(msg);
            }
        } else if (msg.type == proto.FriendListType.ApplyList) {
            if (this.applyMap.has(msg.roleId)) {
                this.applyMap.delete(msg.roleId);
            } else {
                this.removeFiendMsg.push(msg);
            }
            RedMgr.refreshEvent(RedDotType.FriendApply);
        }
        RedMgr.refreshEvent(RedDotType.FriendValueReceive);
    }

    updateFriendOnlineTime(msg: proto.Msg_UpdateFriendOnlineTime) {
        let info = this.getSimpleRoleInfoByRoleID(msg.roleId);
        if (info) {
            info.offlineTime = msg.offlineTime;
        } else {
            this.friendOnlineTimeMsg.push(msg);
        }
    }

    updatFriendPowerScore(msg: proto.Msg_UpdatFriendPowerScore) {
        let info = this.getSimpleRoleInfoByRoleID(msg.roleId);
        if (info) {
            info.powerScore = msg.powerScore;
        } else {
            this.friendPowerScoreMsg.push(msg);
        }
    }
    getSimpleRoleInfoByRoleID(roleId: string) {
        if (this.friendMap.has(roleId)) {
            return this.friendMap.get(roleId);
        }
        if (this.blackMap.has(roleId)) {
            return this.blackMap.get(roleId);
        }
        if (this.applyMap.has(roleId)) {
            return this.applyMap.get(roleId);
        }
        return null;
    }
    getRecommendInfos() {
        return Array.from(this.recommendMap.values());
    }
    getMyFreindInfos() {
        return Array.from(this.friendMap.values());
    }
    getApplyInfos() {
        return Array.from(this.applyMap.values());
    }
    getBlackInfos() {
        return Array.from(this.blackMap.values());
    }
    getMyFriendNum() {
        return this.friendMap.size;
    }
    getReceiveGiftNum() {
        if (this.giftListMsg) {
            return this.giftListMsg.recvList.length;
        }
        return 0;
    }
    getGiveGiftNum() {
        if (this.giftListMsg) {
            return this.giftListMsg.givingList.length;
        }
        return 0;
    }
    getNotReceiveGiftNum() {
        if (this.giftListMsg) {
            if (this.giftListMsg.recvList.length >= tab.getData().GetKeyValue_ConfigTable().GiftRecvMaxCount) {
                return 0
            }
            let myFreind = this.getMyFreindInfos();
            if (myFreind.length > 0) {
                let len = 0;
                for (let key in this.giftListMsg.giftList) {
                    let id = this.giftListMsg.giftList[key];
                    if (myFreind.findIndex(a => a.id == id) >= 0) {
                        len++;
                    }

                }
                return len;
            } else {
                return 0;
            }


        }
        return 0;
    }


}
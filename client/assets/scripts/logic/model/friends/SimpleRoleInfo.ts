import { _decorator, Component, Node } from 'cc';
import { proto } from 'client_protocol';
const { ccclass, property } = _decorator;

/**
 * 
 * SimpleRoleInfo
 * zhudingchao
 * Fri Jun 07 2024 14:30:20 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/friends/FriendInfo.ts
 *
 */

@ccclass('FriendInfo')
export class SimpleRoleInfo extends proto.SimpleRole {
    private _isSendAddFrined:boolean=false;
    private _type:number=-1;
  
    private _isGiveGift:boolean=false;
    private  _receiveGiftState:number=0;
    merge(item: proto.ISimpleRole) {
        for (const key in item) {
            this[key] = item[key]
        }
    }
    /**
     * 是否发送添加好友申请
     * 本地缓存记录
     */
    get isSendAddFrined(){
        return this._isSendAddFrined;
    }
    set isSendAddFrined(b:boolean){
        this._isSendAddFrined=b;
    }
    set type(t:proto.FriendListType){
        this._type=t;
    }
    get type(){
       return this._type;
    }
      /**
     * 是否赠与了礼物
     */
    get isGiveGift(){
        return this._isGiveGift;
    }
    set isGiveGift(b:boolean){
        this._isGiveGift=b;
    }
     /**收取礼物状态 0表示未收到 1表示收到未领取 2表示已领取 */
    get receiveGiftState(){
        return this._receiveGiftState;
    }
    set receiveGiftState(n:number){
        this._receiveGiftState=n;
    }
    /**
     * 是否好友
     */
    get isMyFriend(){
        
        return this.type==proto.FriendListType.FriendList;
    }
  
    /**
     * 是否在申请列表里
     */
    get isApplyList(){
        return this.type==proto.FriendListType.ApplyList;
    }
    /**
     * 是否在黑名单里
     */
    get isBlackList(){
        return this.type==proto.FriendListType.BlackList;
    }
    
}
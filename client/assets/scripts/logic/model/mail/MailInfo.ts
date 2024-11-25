import { _decorator, Component, Node } from 'cc';
import { proto } from 'client_protocol';
import { Func } from '../../utils/Func';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
const { ccclass, property } = _decorator;

/**
 * 
 * MailInfo
 * zhudingchao
 * Mon Jun 03 2024 11:18:21 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/mail/MailInfo.ts
 *
 */

@ccclass('MailInfo')
export class MailInfo extends proto.Mail {
    /**
     * 是否已读
     */
    private _isRead:boolean; 
    merge(item: proto.Mail) {
        for (const key in item) {
            this[key] = item[key]
        }
        let b=Func.getItem("mailreadState_"+this.id);
        if(b){
            this._isRead=true;
        }else{
            this._isRead=false;
        }
        this.id=Number(this.id);
       
    }

    get isRead(){
        return this._isRead;
    }
    set isRead(b:boolean){
        if(b!=this._isRead){
            Func.setItem("mailreadState_"+this.id,b?1:0);
            if(b){
                RedMgr.refreshEvent(RedDotType.Mail);
            }
        }
        this._isRead=b;
       
    }
    get isCanReceived(){
        return !this.IsRewardsReceived&&this.Rewards.length>0;
    }
}
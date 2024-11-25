import { _decorator, Component, Node } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { EventMgr } from '../../mgr/EventMgr';
import { MailData } from './MailData';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
const { ccclass, property } = _decorator;

@ccclass('MaillControl')
export class MailControl extends AbsControl {
    private static _instance: MailControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new MailControl();
        }
        return this._instance;
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetMailsRsp, this.on_s2c_GetMailsRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveMailsRewardRsp, this.on_s2c_ReceiveMailsRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.DeleteMailsRsp, this.on_s2c_DeleteMailsRsp, this);
        EventMgr.onMsg(proto.Ptl.NewMailsPush, this.on_s2c_NewMailsPushp, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Mail, this.on_getRedPoint, this);

    }
    requestGetMails() {
        let msg = new proto.Msg_GetMailsReq();
        Net.Send(proto.Ptl.GetMailsReq, msg)

    }
    requestReceiveMailsReward(mailIds: number[]) {
        let msg = new proto.Msg_ReceiveMailsRewardReq();
        msg.ids = mailIds;
        Net.Send(proto.Ptl.ReceiveMailsRewardReq, msg)
    }
    requestDeleteMails(mailIds: number[]) {
        let msg = new proto.Msg_DeleteMailsReq();
        msg.ids = mailIds;
        Net.Send(proto.Ptl.DeleteMailsReq, msg)
    }
    /**
    * 请求邮件
    * @param msg 
    */
    on_s2c_GetMailsRsp(msg: proto.Msg_GetMailsRsp) {

        MailData.ins.initMaillData(msg.mails as proto.Mail[]);
        RedMgr.refreshEvent(RedDotType.Mail);
    }
    /**
    * 请求领取
    * @param msg 
    */
    on_s2c_ReceiveMailsRewardRsp(msg: proto.Msg_ReceiveMailsRewardRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        
        if (msg.ids && msg.ids.length > 0) {
            MailData.ins.receiveMailsRewardSucc(msg.ids);
            RedMgr.refreshEvent(RedDotType.Mail);
        }



    }
    /**
   * 请求领取
   * @param msg 
   */
    on_s2c_DeleteMailsRsp(msg: proto.Msg_DeleteMailsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        if (msg.ids && msg.ids.length > 0) {
            MailData.ins.deleteMails(msg.ids);
        }
    }
    /**
    * 有新邮件
    * @param msg 
    */
    on_s2c_NewMailsPushp(msg: proto.Msg_NewMailsPush) {
        this.requestGetMails();
    }
    on_getRedPoint(){
        
        let mails=MailData.ins.getMails();
        if(!mails){
            return false;
        }
        for(let key in mails){
            if(mails[key].isCanReceived||!mails[key].isRead){
                return true;
            }
        }
        return false;
    }
}



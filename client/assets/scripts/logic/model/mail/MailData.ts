import { _decorator, Component, Node } from 'cc';
import { proto } from 'client_protocol';
import { MailInfo } from './MailInfo';
const { ccclass, property } = _decorator;

/**
 * 
 * MaillData
 * zhudingchao
 * Mon Jun 03 2024 11:05:27 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/mail/MaillData.ts
 *
 */

@ccclass('MaillData')
export class MailData {
    private static _instance: MailData;
    private maillInfos: Array<MailInfo>;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new MailData();
        }
        return this._instance;
    }
    initMaillData(mails: proto.Mail[]) {
        this.maillInfos = [];
        for (let key in mails) {
            let info = new MailInfo();
            info.merge(mails[key]);
            this.maillInfos.push(info);
        }

    }
    getMails() {
        return this.maillInfos;
    }
    getMailInfoById(id: number) {
        id=Number(id);
        return this.maillInfos.find(a => a.id == id);
    }
    receiveMailsRewardSucc(ids: number[]) {
        for (let key in ids) {
            let info = this.getMailInfoById(ids[key]);
            if (info) {
                info.IsRewardsReceived = true;
                info.isRead=true;
            }
        }
    }
    deleteMails(ids: number[]) {
        for (let key in ids) {
            let id=Number(ids[key]);
            let index = this.maillInfos.findIndex(a => Number(a.id) == id);
            if (index >= 0) {
                this.maillInfos.splice(index, 1);
            }
        }
    }
    setReadState(id: number) {
        let info = this.getMailInfoById(id);
        info.isRead = true;
    }
}
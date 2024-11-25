import { _decorator, Component, Label, Node } from 'cc';
import { ComponentBase } from '../../../framework/base/ComponentBase';
import { MailInfo } from './MailInfo';
import { TimeUtil } from '../../utils/TimeUtil';
import { LangMgr } from '../../mgr/LangMgr';
import { proto } from 'client_protocol';
const { ccclass, property } = _decorator;

/**
 * 
 * MailListItem
 * zhudingchao
 * Mon Jun 03 2024 10:55:16 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/mail/MailListItem.ts
 *
 */

@ccclass('MailListItem')
export class MailListItem extends ComponentBase {
    @property(Label)
    nameLab:Label=null;
    @property(Label)
    timeLab:Label=null;
    @property(Label)
    nameLab2:Label=null;
    @property(Label)
    timeLab2:Label=null;
    @property(Node)
    selectNode:Node=null;
    @property(Node)
    notSelectNode:Node=null;
    @property(Node)
    gotNode:Node=null;
    @property(Node)
    cangetNode:Node=null;
    @property(Node)
    readNode:Node=null;
    @property(Node)
    notRedaNode:Node=null;

    public info:MailInfo;
    private touchCallBcak:Function;


    register(): void {
        
    }
    initData(info:MailInfo,touchCallBcak:Function){
        this.info=info;
        this.selectNode.active=false;
        if(info.Type==proto.SysMailType.Gm){
            this.nameLab.string=info.Title;
            this.nameLab2.string=info.Title;
        }else{
            this.nameLab.string=LangMgr.getLab(info.Title);
            this.nameLab2.string=LangMgr.getLab(info.Title);
        }
    
        //let timeLab="剩余"+TimeUtil.getLeftDay(Number(info.ExpireAt))+"天";
        let timeLab=LangMgr.getCombineString("ui_mail_3", [TimeUtil.getLeftDay(Number(info.ExpireAt))]);
        this.timeLab.string=timeLab;
        this.timeLab2.string=timeLab;
        this.touchCallBcak=touchCallBcak;
        this.setShowState();
        // this.gotNode

    }
    setSelectState(b:boolean){
        this.selectNode.active=b;
    }
    setShowState(){
        this.notRedaNode.active=false;
        this.readNode.active=false;
        this.gotNode.active=false;
        this.cangetNode.active=false;
        if(this.info.isRead){
            if(this.info.Rewards.length>0){
                if(this.info.IsRewardsReceived){
                    this.gotNode.active=true;
                }else{
                    this.cangetNode.active=true;
                }
            }else{
               this.readNode.active=true;
            }
        }else{
            this.notRedaNode.active=true;
        }
    }

    onClickBtn(){
        if(this.touchCallBcak){
            this.touchCallBcak(this);
        }

    }
}
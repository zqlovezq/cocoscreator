import { _decorator, Component, instantiate, Label, Node, Prefab, ScrollView } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { MailData } from './MailData';
import { MailListItem } from './MailListItem';
import { TimeUtil } from '../../utils/TimeUtil';
import { CommonItem } from '../item/CommonItem';
import { ItemInfo } from '../item/ItemInfo';
import { proto } from 'client_protocol';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { EventMgr } from '../../mgr/EventMgr';
import { MailControl } from './MailControl';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { MailInfo } from './MailInfo';
import { CommonTipsPop, CommonTipsPopCloseType } from '../common/CommonTipsPop';
import { LangMgr } from '../../mgr/LangMgr';
import { tab } from '../../../Table/table_gen';
import { HeroInfo } from '../hero/HeroInfo';
import { HeroItem } from '../item/HeroItem';
import { EquipInfo } from '../equip/EquipInfo';
const { ccclass, property } = _decorator;

/**
 * 
 * MailPop
 * zhudingchao
 * Mon Jun 03 2024 10:34:28 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/mail/MailPop.ts
 *
 */

@ccclass('MailPop')
export class MailPop extends ViewPop {
    @property(Node)
    mailNode: Node = null;
    @property(Node)
    noMailNode: Node = null;
    @property(Node)
    titleContent: Node = null;
    @property(Label)
    titleNameLab: Label = null;
    @property(Label)
    wordLab: Label = null;
    @property(Label)
    senderLab: Label = null;
    @property(Label)
    timeLab: Label = null;
    @property(Node)
    rewardNode: Node = null;
    @property(Node)
    getBtnNode: Node = null;
    @property(Node)
    deleteBtnNode: Node = null;
    @property(Node)
    oneKeyNode: Node = null;
    @property(Prefab)
    itemPrefab: Prefab = null;
    @property(ScrollView)
    scrollView: ScrollView = null;


    private mailItems: Array<MailListItem>;

    private currSelectItem: MailListItem = null;
    private rewardItems: Array<Node> = [];
    private mailInfos: Array<MailInfo>;
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetMailsRsp, this.on_s2c_GetMailsRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveMailsRewardRsp, this.on_s2c_ReceiveMailsRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.DeleteMailsRsp, this.on_s2c_DeleteMailsRsp, this);
         MailControl.ins.requestGetMails();
    }
    onShow(): void {
    //    this.initView();


    }

    initView() {
        let mailInfos = MailData.ins.getMails();
        mailInfos.sort((a,b)=>{
            return b.CreatedAt-a.CreatedAt;
        })
        this.mailInfos = mailInfos;

        if (mailInfos.length > 0) {
            this.scrollView.scrollToTop();
            this.noMailNode.active = false;
            this.mailNode.active = true;
            for (let key in this.mailItems) {
                this.mailItems[key].node.active = false;
            }
            for (let key in mailInfos) {
                let item = this.creatorItem(Number(key));
                item.initData(mailInfos[key], this.onTouchTitleItem);
            }
            this.currSelectItem = this.mailItems[0];
            this.currSelectItem.setSelectState(true);
            this.updateMailContent();
        } else {
            this.noMailNode.active = true;
            this.mailNode.active = false;
        }
    }

    updateMailContent() {
        if (this.currSelectItem) {
            let info = this.currSelectItem.info;
            if(info.Type==proto.SysMailType.Gm){
                this.titleNameLab.string = info.Title;
                this.wordLab.string = info.Content;
                this.senderLab.string = info.Sender;
            }else{
                this.titleNameLab.string =LangMgr.getLab(info.Title);
                let strs=info.Content.split("|");
                let key=strs[0];
                let valeu=strs.length>1?strs.slice(1,strs.length):[];
                this.wordLab.string = LangMgr.getCombineString(key,valeu);
                this.senderLab.string = LangMgr.getLab(info.Sender);
            }
           
            this.timeLab.string = TimeUtil.timestampToTime(Number(info.CreatedAt));
            this.rewardNode.removeAllChildren();
            let rews = info.Rewards;
            for (let key in rews) {
                let rewInfo = new ItemInfo();
                rewInfo.merge(rews[key]);
                ItemPoolMgr.ins.createRewadItem(rewInfo,this.rewardNode);
                // if(rewInfo.itemTable.Type==tab.ItemType.ItemType_Hero){
                //     let heroInfo=new HeroInfo();
                //     heroInfo.initHeroItemId(rewInfo.itemId);
                //     let itemNode = ItemPoolMgr.ins.createHeroItem(heroInfo,this.rewardNode);
                //     itemNode.getComponent(HeroItem).showHeroNum(rewInfo.num);
                //     this.rewardItems.push(itemNode)
                // }else if(rewInfo.itemTable.Type==tab.ItemType.ItemType_Equip){
                //     let equipInfo=new EquipInfo();
                //     equipInfo.createDefaultData(rewInfo.itemId)
                //     let itemNode = ItemPoolMgr.ins.createItem(equipInfo,this.rewardNode,false);
                //     this.rewardItems.push(itemNode)
                // }
                // else{
                //     let itemNode = ItemPoolMgr.ins.createItem(rewInfo,this.rewardNode);
                //     this.rewardItems.push(itemNode)
                // }
             
            }

            this.getBtnNode.active =info.isCanReceived;
            this.deleteBtnNode.active = !info.isCanReceived;
            if (!info.isRead) {
                info.isRead = true;
                this.currSelectItem.setShowState();
            }

        }
    }
    private creatorItem(index: number) {
        if (!this.mailItems) {
            this.mailItems = [];
        }
        if (!this.mailItems[index]) {
            let node = instantiate(this.itemPrefab);
            node.parent = this.titleContent;
            this.mailItems.push(node.getComponent(MailListItem))
        }
        this.mailItems[index].node.active = true;
        return this.mailItems[index];

    }
    private removeRewardItems() {
        if (this.rewardItems) {
            // for (let key in this.rewardItems) {
            //     let com=this.rewardItems[key].getComponent(CommonItem);
            //     if(com){
            //         ItemPoolMgr.ins.putCommonItem(this.rewardItems[key]);
            //     }else{
            //         let hero=this.rewardItems[key].getComponent(HeroItem);
            //         if(hero){
            //             ItemPoolMgr.ins.putHeroItem(this.rewardItems[key]);
            //         }else{
            //             this.rewardItems[key].removeFromParent();
            //         }
            //     }
               
            // }
            // this.rewardItems = [];
        }
    }
    onTouchTitleItem = (item: MailListItem) => {
        if (item != this.currSelectItem) {
            if (this.currSelectItem) {
                this.currSelectItem.setSelectState(false);
            }
            item.setSelectState(true);
            this.currSelectItem = item;
            this.updateMailContent();
        }
    }

    onClickGetBtn() {
        MailControl.ins.requestReceiveMailsReward([this.currSelectItem.info.id]);

    }
    onClickDeleteBtn() {
        MailControl.ins.requestDeleteMails([this.currSelectItem.info.id]);
    }
    onClickOneKeyGetBtn() {
        let ids = [];
        for (let key in this.mailInfos) {
            if (this.mailInfos[key].isCanReceived) {
                ids.push(this.mailInfos[key].id);
            }
        }
        if (ids.length > 0) {
            MailControl.ins.requestReceiveMailsReward(ids);
        } else {
            ShowTips(LangMgr.getLab("ui_mail_5"));
            //ShowTips("没有可领取的奖励");
        }

    }
    onClickOneKeyDeleteBtn() {
        let ids = [];
        for (let key in this.mailInfos) {
            if (!this.mailInfos[key].isCanReceived && this.mailInfos[key].isRead) {
                ids.push(this.mailInfos[key].id);
            }
        }
        if (ids.length > 0) {
            CommonTipsPop.create(LangMgr.getLab("Tips_mail_1"), (closeType: CommonTipsPopCloseType) => {
                if (closeType == CommonTipsPopCloseType.confirm) {
                    // console.log("ok")
                    MailControl.ins.requestDeleteMails(ids);
                } else {
                    console.log("cancel")
                }
            })
           
        } else {
            ShowTips(LangMgr.getLab("ui_mail_6"));
            //ShowTips("没有可删除的邮件");
        }
    }

    /**
  * 请求邮件
  * @param msg 
  */
    on_s2c_GetMailsRsp(msg: proto.Msg_GetMailsRsp) {
        this.initView();
    }
    /**
    * 请求领取
    * @param msg 
    */
    on_s2c_ReceiveMailsRewardRsp(msg: proto.Msg_ReceiveMailsRewardRsp) {
        if (msg.ids && msg.ids.length > 0) {
            // MailData.ins.receiveMailsRewardSucc(msg.ids);
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
            if (this.currSelectItem) {
                this.getBtnNode.active = this.currSelectItem.info.isCanReceived;
                this.deleteBtnNode.active = !this.currSelectItem.info.isCanReceived;
            }
            for (let key in msg.ids) {
                let id = Number(msg.ids[key]);
                let item = this.mailItems.find(a => Number(a.info.id) == id);
                if (item) {
                    item.setShowState();
                }
            }

        }

    }
    /**
   * 请求删除邮件成功
   * @param msg 
   */
    on_s2c_DeleteMailsRsp(msg: proto.Msg_DeleteMailsRsp) {
        if (msg.ids && msg.ids.length > 0) {
            this.initView();
        }

    }
}
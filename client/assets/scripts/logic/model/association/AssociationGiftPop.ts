/*
 * @Date: 2024-09-06 15:09:10
 * @LastEditors: wzq
 * @LastEditTime: 2024-11-01 11:09:31
 * @ 砍价礼包
 */

import { _decorator, Button, Component, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { AssociationData } from './AssociationData';
import { proto } from 'client_protocol';
import { CommonItem } from '../item/CommonItem';
import { ItemInfo } from '../item/ItemInfo';
import { tab } from '../../../Table/table_gen';
import { AssociationGiftItem } from './AssociationGiftItem';
import { AssociationControl } from './AssociationControl';
import { EventMgr } from '../../mgr/EventMgr';
import { RoleData } from '../role/RoleData';
import { ChannelMgr } from '../../../channel/ChannelMgr';
import { ShowItemNotEnoughTips, ShowTips } from '../../mgr/UIMgr';
import { LangMgr } from '../../mgr/LangMgr';
import { sendChatToGuild } from '../../utils/GameUtil';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import RedComp from '../../../Common/component/RedComp';
import RedEventComp from '../../../Common/component/RedEventComp';
const { ccclass, property } = _decorator;

@ccclass('AssociationGiftPop')
export class AssociationGiftPop extends ViewPop {
    @property(Label)
    lbl_price_total: Label = null;
    @property(Label)
    lbl_price_cur: Label = null;
    @property(CommonItem)
    common_item: CommonItem = null;
    @property(Prefab)
    pfb_log: Prefab = null;
    @property(Node)
    node_conten: Node = null;
    @property(Label)
    lbl_bargain_count: Label = null;
    @property(Node)
    node_step_1: Node = null;
    @property(Node)
    node_step_2: Node = null;
    @property(Node)
    node_step_3: Node = null;
    @property(Node)
    node_bargain:Node = null;
    @property(Node)
    node_buy:Node = null;

    @property(Node)
    redPoint:Node = null;
    private _giftData: proto.GuildGift = null;
    private _giftTab: tab.GuildGiftTable = null;
    private _bargain_Gift: boolean = false;
    private _guildInfo:proto.GuildInfo = null;
    private _openType:string = ""
    onShow(): void {
        // 获取公会礼包
        this._openType = this.openData;
        this._guildInfo = AssociationData.ins.getAssocitionInfo();
        this._giftData = AssociationData.ins.getBargainGift(this._openType);
        this._giftTab = tab.getData().GuildGiftTableById.getValue(this._giftData.tabId);
        this.asyncView();
    }
    asyncView() {
        // 加红点逻辑
        let com= this.node.addComponent(RedComp);
        com.redNode=this.redPoint;
        let evet=new RedEventComp();
        evet.event=RedDotType.Guild_Activity;
        evet.child = this.openData
        com.types.push(evet);
        com.addRed();

        this._bargain_Gift = false;
        this.node_conten.destroyAllChildren();
        const award = new ItemInfo();
        award.itemId = this._giftTab.RewardItemId
        award.num = this._giftTab.ItemCount
        this.common_item.initData(award);
        let curPrice = this._giftTab.DiamondPrice;
        this.lbl_price_total.string = String(this._giftTab.DiamondPrice);
        for (let i = 0; i < this._giftData.bargainRecords.length; i++) {
            const record: proto.IBargainRecord = this._giftData.bargainRecords[i];
            const item = instantiate(this.pfb_log);
            item.parent = this.node_conten;
            const itemTs = item.getComponent(AssociationGiftItem);
            itemTs.initData(record);
            curPrice -= record.bargainNum;
            if (record.roleId === RoleData.ins.id) {
                this._bargain_Gift = true;
            }
        }

        let buyGift = false;
        if(this._giftTab.Button==="gift_btn1"){
            buyGift = this._guildInfo.isBoughtCycleGift;
        }else if(this._giftTab.Button==="gift_btn2"){
            buyGift = this._guildInfo.boughtUpLevelGiftTabIds.indexOf(this._giftTab.Id)>-1;
        }
        if(buyGift){
            this.node_buy.getComponent(Button).interactable = false;
            this.node_buy.getComponent(Sprite).grayscale = true;
        }
        this.node_buy.active = this._bargain_Gift||buyGift||AssociationData.ins.getIsMinPrice(this._openType)
        this.node_bargain.active = !this.node_buy.active;
        // 获取当前公会最大人数
        this.lbl_bargain_count.string = this._giftData.bargainRecords.length + "/" + AssociationData.ins.getGuildMembersCount().totalCount;
        // 当前的价格
        this.lbl_price_cur.string = String(curPrice);
        // 当前的阶段
        const stepNumber = tab.getData().GetKeyValue_ConfigTable().GuildGiftPhase;
        this.node_step_1.active = false;
        this.node_step_2.active = false;
        this.node_step_3.active = false;
        let step = 3;
        for (let k = 0; k < stepNumber.length; k++) {
            const _step = stepNumber[k] / 10000;
            if (curPrice / this._giftTab.DiamondPrice > _step) {
                step = k + 1;
                break;
            }
        }
        this["node_step_"+step].active = true;
    }
    register(): void {
        /* 监听公会砍价 */
        EventMgr.onMsg(proto.Ptl.BargainGuildRsp, this.on_s2c_BargainGuildRsp, this);
        /* 监听购买公会礼包 */
        EventMgr.onMsg(proto.Ptl.BuyGuildGiftRsp, this.on_s2c_BuyGuildGiftRsp, this);
    }
    unRegister(): void {
        super.unRegister();
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    onClickBargain() {
        AssociationControl.ins.reqBargainGuild(this._giftData.id);
    }
    onClickBuy() {
        const needDimamond = Number(this.lbl_price_cur.string);
        if(RoleData.ins.diamond<needDimamond){
            ShowItemNotEnoughTips(1);
            return;
        }
        AssociationControl.ins.reqBuyGuildGift(this._giftData.id);
    }
    /* 砍价 */
    on_s2c_BargainGuildRsp(msg: proto.Msg_BargainGuildRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        let isHaveGift = false
        for(let i=0;i<this._guildInfo.gifts.length;i++){
            let gift = this._guildInfo.gifts[i];
            if(gift.id===msg.giftId){
                this._guildInfo.gifts[i] = msg.gift;
                isHaveGift = true;
                break;
            }
        }
        if(!isHaveGift){
            this._guildInfo.gifts.push(msg.gift);
        }

        this._giftData = msg.gift as proto.GuildGift;
        RedMgr.refreshEvent(RedDotType.Guild_Activity);
        this.asyncView();
        // 判断当前是否是最低价 如果是发送公会聊天
        if(AssociationData.ins.getIsMinPrice(this._openType)){
            console.log("cocos 最底价像聊天发送信息")
            sendChatToGuild(tab.ChatBreviaryType.ChatBreviaryType_GuildGiftLow);
        }
    }
    /* 购买礼包 */
    on_s2c_BuyGuildGiftRsp(msg: proto.Msg_BuyGuildGiftRsp) {
        /* 钻石是否足够 */
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        if(this._openType==="gift_btn1"){
            this._guildInfo.isBoughtCycleGift = true;
        }else if(this._openType==="gift_btn2"){
            this._guildInfo.boughtUpLevelGiftTabIds.push(this._giftTab.Id);
        }
        this.node_buy.getComponent(Button).interactable = false;
        this.node_buy.getComponent(Sprite).grayscale = true;
    }
    onClickShare(){
        console.log("js调用分享")
        sendChatToGuild(tab.ChatBreviaryType.ChatBreviaryType_GuildGiftBargain);
        ShowTips(LangMgr.getLab("ui_association_62"));
        ChannelMgr.share({'url':""}, (retData) => {
           console.log("################ share " + JSON.stringify(retData));
            if (retData.code == 0) {
                // this.testLoopTask();
            }
        });
    }
}



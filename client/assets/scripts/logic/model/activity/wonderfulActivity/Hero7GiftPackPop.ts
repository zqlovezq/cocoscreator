import { _decorator, Component, EventTouch, Label, Node, SpringJoint2D, Sprite, Toggle } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { DEVELOPTYPE } from '../../../../Common/script/EnumTypeMgr';
import { RoleData } from '../../role/RoleData';
import { HeroDataControl } from '../../hero/herobag/HeroDataControl';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { LangMgr } from '../../../mgr/LangMgr';
import { tab } from '../../../../Table/table_gen';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { PayControl } from '../../pay/PayControl';
import { PayData } from '../../pay/PayData';
import { HeroStar } from '../../hero/HeroStar';
import { ChannelMgr } from '../../../../channel/ChannelMgr';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
const { ccclass, property } = _decorator;

@ccclass('Hero7GiftPackPop')
export class Hero7GiftPackPop extends ViewPop {
    @property(Label)
    lbl_hero_desc: Label = null;
    @property(Label)
    lbl_weapon_desc: Label = null;
    @property(Node)
    node_btn_toggle: Node = null;
    @property(Node)
    node_book_btn: Node = null;
    @property(Node)
    node_no_reach: Node = null;
    @property(Node)
    node_price: Node = null;
    @property(Node)
    node_got: Node = null;
    @property(Label)
    lbl_view_desc: Label = null;
    @property(Node)
    node_layout: Node = null;
    @property(Label)
    lbl_price: Label = null;
    @property(Sprite)
    sp_value: Sprite = null;
    @property(Node)
    node_hero: Node = null;
    @property(Node)
    node_weapon: Node = null;

    @property(Node)
    node_sp_hero: Node = null;
    @property(Node)
    node_sp_weapon: Node = null;
    private _view_type: DEVELOPTYPE = DEVELOPTYPE.NONE
    private _click_day: number = 0;
    private _cur_day: number = 0;
    private _tabID: number = 0;
    private node_day_toggle:Node = null;
    register(): void {

    }
    unRegister(): void {
        super.unRegister()
    }
    onShow(): void {
        // 进来默认为Hero界面
        this._view_type = DEVELOPTYPE.HERO;
        // 
        const newDate = new Date(RoleData.ins.createTime*1000);
        const tomorrow = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
        const times = RoleData.ins.getServerUtcTime() - tomorrow.getTime()/1000;
        let nowDay = 1;
        if(times>0){
            nowDay = Math.ceil((RoleData.ins.getServerUtcTime()- tomorrow.getTime()/1000) / 86400) + 1;
        }
        const day = nowDay - (this._view_type - 1) * 7
        this._cur_day = nowDay;
        this._click_day = day > 7 ? 7 : day;
        this.node.getChildByName("toggle_node1").active = true;
        this.node.getChildByName("toggle_node2").active = false;
        this.node_day_toggle = this.node.getChildByName("toggle_node"+this._view_type)
        this.node_day_toggle.getChildByName("Toggle" + this._click_day).getComponent(Toggle).isChecked = true;
        this.node_btn_toggle.getChildByName("hero_btn").getComponent(Toggle).isChecked = true;
        this.setView();
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    setView() {
        if(Number(RoleData.ins.clientData.SevenGiftPack)!==2){
            RoleData.ins.setClientData("SevenGiftPack",String(this._view_type));
            RedMgr.refreshEvent(RedDotType.Seven_Gift_Pack);
        }
        this.node_hero.active = this._view_type === DEVELOPTYPE.HERO;
        this.node_weapon.active = !this.node_hero.active;
        this.node_sp_hero.active = this.node_hero.active
        this.node_sp_weapon.active = !this.node_hero.active
        this.node_book_btn.active = this._cur_day > 7
        this.setDay();
    }
    setDay() {
        this._tabID = this._view_type * 1000 + this._click_day;
        const giftData = tab.getData().NewPlayerDailyGiftTableById.getValue(this._tabID);
        this.lbl_view_desc.string = LangMgr.getCombineString("ui_hero7giftpackpop_1", [giftData.CreateDay]);
        this.node_price.active = this._cur_day >= this._click_day + (this._view_type - 1) * 7;
        this.node_got.active = PayData.ins.payInfoMsg.newPlayerDailyGiftInfo.boughtGoodsIds.indexOf(giftData.Id) > -1;
        this.node_no_reach.active = !this.node_price.active && !this.node_got.active;
        this.lbl_view_desc.node.active = this.node_no_reach.active;
        const rechargeTab = tab.getData().RechargeTableById.getValue(giftData.RechargeId);
        this.lbl_price.string = ChannelMgr.getSdkRechargeShowPrice(rechargeTab);
        this.sp_value.setTexture(giftData.DiscountIcon);
        this.createAward();
    }
    switchView(e: EventTouch, type: string) {
        if (Number(type) == this._view_type) {
            return;
        }
        this._view_type = Number(type);
        const day = this._cur_day - (this._view_type - 1) * 7;
        this._click_day = day > 7 ? 7 : day;
        this.node.getChildByName("toggle_node1").active = this._view_type===DEVELOPTYPE.HERO;
        this.node.getChildByName("toggle_node2").active = this._view_type===DEVELOPTYPE.BOOK;
        this.node_day_toggle = this.node.getChildByName("toggle_node"+this._view_type);
        this.node_day_toggle.getChildByName("Toggle" + this._click_day).getComponent(Toggle).isChecked = true;
        this.setView();
    }
    switchDay(e: EventTouch, day: string) {
        // 根据天数跟viewType显示界面
        if (this._click_day === Number(day)) {
            return;
        }
        this._click_day = Number(day);
        this.setDay();
    }
    // 点击侠客预览
    clickHeroDesc() {
        UIMgr.ins.hideView("Hero7GiftPackPop");
        if (this._view_type === DEVELOPTYPE.HERO) {
            HeroDataControl.ins.refreshBookData(4401);
            UIMgr.ins.show({ viewName: ViewName.HeroBagView, data: { viewType: 2 }, zIndex: 300 })
        } else {
            UIMgr.ins.jumpLayer(tab.Module.Module_RareBookView);
        }
    }
    // 创建奖励
    createAward() {
        // 根据viewtype+day算出ID
        this.node_layout.destroyAllChildren();
        const giftData = tab.getData().NewPlayerDailyGiftTableById.getValue(this._tabID);
        for (let i = 0; i < giftData.RewardItemIds.length; i++) {
            const awardInfo = new ItemInfo();
            awardInfo.itemId = giftData.RewardItemIds[i];
            awardInfo.num = giftData.RewardItemNum[i];
            ItemPoolMgr.ins.createRewadItem(awardInfo, this.node_layout);
        }
    }
    // 点击购买奖励
    clicRMBkBuy() {
        var self = this;
        const giftData = tab.getData().NewPlayerDailyGiftTableById.getValue(this._tabID);
        PayControl.ins.requestPay(giftData.RechargeId, () => {
            if (PayData.ins.payInfoMsg.newPlayerDailyGiftInfo.boughtGoodsIds.indexOf(giftData.Id) === -1) {
                PayData.ins.payInfoMsg.newPlayerDailyGiftInfo.boughtGoodsIds.push(giftData.Id);
            }
            this.setDay();
        })
    }
}



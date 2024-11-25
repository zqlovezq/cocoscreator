import { _decorator, Button, Component, EventTouch, Label, Node, RichText, sp, Sprite, Toggle } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { tab } from '../../../../Table/table_gen';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { ItemInfo } from '../../item/ItemInfo';
import { LangMgr } from '../../../mgr/LangMgr';
import { LoadResAsync } from '../../../mgr/ResMgr';
import { HeroDataControl } from '../../hero/herobag/HeroDataControl';
import { ViewName } from '../../../define/ViewDefine';
import { UIMgr } from '../../../mgr/UIMgr';
import { PayData } from '../../pay/PayData';
import { PayControl } from '../../pay/PayControl';
import { ChannelMgr } from '../../../../channel/ChannelMgr';
import { RoleData } from '../../role/RoleData';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
import { CommonTipsPop } from '../../common/CommonTipsPop';
import { HeroItem } from '../../item/HeroItem';
const { ccclass, property } = _decorator;

/**
 * 
 * FirstRechargePop
 * zhudingchao
 * Thu Jun 20 2024 11:19:29 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/firstRecharge/FirstRechargePop.ts
 *
 */

@ccclass('FirstRechargePop')
export class FirstRechargePop extends ViewPop {
    @property(RichText)
    desRichtext: RichText = null;
    @property(Sprite)
    discountSpr: Sprite = null;
    @property(Node)
    heroNode: Node = null;
    @property(Node)
    propNode: Node = null;
    @property(Node)
    mainItemNode: Node = null;
    @property(Node)
    otherItemLayout: Node = null;
    @property(Label)
    priceLabel: Label = null;
    @property(sp.Skeleton)
    hero_spine: sp.Skeleton = null
    @property(sp.Skeleton)
    chest_spine: sp.Skeleton = null
    @property(Sprite)
    chestSpr: Sprite = null
    @property(Node)
    buyBtnNode: Node = null;
    @property([Node])
    node_toggles: Node[] = [];
    @property(Node)
    node_one_buy: Node = null;
    @property(Label)
    allPriceLabel: Label = null;
    private firstTable: tab.FirstRechargeTable;
    register(): void {

    }
    onShow(): void {
        let table = PayData.ins.getFirstRechargeTable();
        if (table) {
            this.firstTable = table;
            this.node_toggles[table.Id - 1].getComponent(Toggle).isChecked = true;
            RedMgr.refreshEvent(RedDotType.First_Recharge);
            this.initView();
        }
        if (this.firstTable && this.firstTable.Id) {
            RoleData.ins.setClientData("openFirstRecharge", String(this.firstTable.Id));
        } else {
            RoleData.ins.setClientData("openFirstRecharge", "1");
        }
    }
    // 设置toggle
    setToggles() {
        let tables = PayData.ins.getFirstRechargeTabs();
        let boughtGoodsIds = PayData.ins.payInfoMsg.firstRechargeInfo.boughtGoodsIds;
        this.node_one_buy.active = boughtGoodsIds.length === 0;
        for (let i = 0; i < tables.length; i++) {
            const _tab = tables[i];
            const _id = _tab.Id;
            this.node_toggles[i].active = boughtGoodsIds.indexOf(_id) < 0;
            // const lbl = this.node_toggles[i].getChildByName("name_txt").getComponent(Label);
            // const rechargeTable = tab.getData().RechargeTableById.getValue(_id);
            // lbl.string=ChannelMgr.getSdkRechargeShowPrice(rechargeTable);
        }
    }
    getFirstTab(id: number) {
        let tables = PayData.ins.getFirstRechargeTabs();
        for (let key in tables) {
            let _id = tables[key].Id;
            if (_id === id) {
                return tables[key]
            }
        }
    }
    switchView(e: EventTouch, type: string) {
        if (this.firstTable.Id === Number(type)) {
            return;
        }
        this.firstTable = this.getFirstTab(Number(type));
        this.initView();
    }
    async initView() {
        this.setToggles();
        this.otherItemLayout.destroyAllChildren();
        this.mainItemNode.destroyAllChildren();
        let itemInfo = new ItemInfo();
        itemInfo.initItemData(this.firstTable.FRItemIds[0], this.firstTable.FRItemNum[0]);
        const heroNode = ItemPoolMgr.ins.createRewadItem(itemInfo, this.mainItemNode);
        const heroTs = heroNode.getComponent(HeroItem);
        if(heroTs){
            heroTs.setLevel(0);
        }
        for (let i = 1; i < this.firstTable.FRItemIds.length; i++) {
            let info = new ItemInfo();
            info.initItemData(this.firstTable.FRItemIds[i], this.firstTable.FRItemNum[i]);
            ItemPoolMgr.ins.createRewadItem(info, this.otherItemLayout);
        }
        this.desRichtext.string = LangMgr.getLab(this.firstTable.WordKey);
        if (this.firstTable.RateShow && this.firstTable.RateShow != "") {
            this.discountSpr.node.active = true;
            this.discountSpr.setTexture(this.firstTable.RateShow);
        } else {
            this.discountSpr.node.active = false;
        }
        if (this.firstTable.AnimationId) {
            if (itemInfo.itemTable.Type == tab.ItemType.ItemType_Hero) {
                this.heroNode.active = true;
                this.propNode.active = false;
                let tempTab: tab.AnimationTable = tab.getData().AnimationTableById.getValue(this.firstTable.AnimationId)
                let spData = await LoadResAsync(tempTab.Path, sp.SkeletonData)
                this.hero_spine.skeletonData = spData
                this.hero_spine.setAnimation(0, tempTab.AnimationName, true)
            } else {
                this.heroNode.active = false;
                this.propNode.active = true;
                let tempTab: tab.AnimationTable = tab.getData().AnimationTableById.getValue(this.firstTable.AnimationId)
                if (tempTab.Type == tab.AnimationType.AnimationType_SpriteFrame) {
                    this.chest_spine.node.active = false;
                    this.chestSpr.setTexture(tempTab.Path);
                } else if (tempTab.Type == tab.AnimationType.AnimationType_SkeletonData) {
                    this.chestSpr.node.active = false;
                    let spData = await LoadResAsync(tempTab.Path, sp.SkeletonData)
                    this.chest_spine.skeletonData = spData
                    this.chest_spine.setAnimation(0, tempTab.AnimationName, true)
                }
            }

        } else {
            this.hero_spine.node.active = false;
        }

        let rechargeTable = tab.getData().RechargeTableById.getValue(this.firstTable.RechargeId);
        let allRechargeTable = tab.getData().RechargeTableById.getValue(1004);
        this.priceLabel.string = ChannelMgr.getSdkRechargeShowPrice(rechargeTable);
        this.allPriceLabel.string = ChannelMgr.getSdkRechargeShowPrice(allRechargeTable);
    }
    onClickBuy() {
        const cb = (()=>{
            PayControl.ins.requestPay(this.firstTable.RechargeId, () => {
                if(PayData.ins.isShowFirstRecharge()){
                    this.onShow();
                }else{
                    this.onClose();
                }
            });
        })
        let boughtGoodsIds = PayData.ins.payInfoMsg.firstRechargeInfo.boughtGoodsIds;
        if(boughtGoodsIds.length===0){
            const tipsStr = LangMgr.getLab("Tips_firstrecharge_1");
            CommonTipsPop.create(tipsStr, ((val) => {
                if (val) {
                    cb();
                }
            }))
        }else{
            cb();
        }
    }
    // 一键购买
    onClickOneBuy() {
        let boughtGoodsIds = PayData.ins.payInfoMsg.firstRechargeInfo.boughtGoodsIds;
        if (boughtGoodsIds.length === 0) {
            PayControl.ins.requestPay(1004, () => {
                RoleData.ins.setClientData("openFirstRecharge", String(4));
                this.onClose();
            });
        }
    }
    onClickHero() {
        let itemTable = tab.getData().ItemTableById.getValue(this.firstTable.FRItemIds[0])
        if (itemTable.Type == tab.ItemType.ItemType_Hero) {
            HeroDataControl.ins.refreshBookData(itemTable.Id);
            UIMgr.ins.show({ viewName: ViewName.HeroBagView, data: { viewType: 2 }, zIndex: 300 })
        }

    }
}
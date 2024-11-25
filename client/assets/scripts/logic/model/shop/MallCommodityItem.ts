import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { HeroItem } from '../item/HeroItem';
import { CommonItem } from '../item/CommonItem';
import { ItemInfo } from '../item/ItemInfo';
import { proto } from 'client_protocol';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { HeroInfo } from '../hero/HeroInfo';
import { WeaponItem } from '../common/WeaponItem';
import { EquipInfo } from '../equip/EquipInfo';
import { EquipmentItem } from '../item/EquipmentItem';
import { dailyBuyShop, GameUtil } from '../../utils/GameUtil';
import { Net } from '../../net/Net';
import { MallDataMgr } from './MallDataMgr';
import { LangMgr } from '../../mgr/LangMgr';
import { MALLNAME } from '../../../Common/script/EnumTypeMgr';
import { AdMgr } from '../AdMgr';
const { ccclass, property } = _decorator;

@ccclass('MallCommodityItem')
export class MallCommodityItem extends Component {
    @property(HeroItem)
    hero_item: HeroItem = null;

    @property(CommonItem)
    common_item: CommonItem = null;

    @property(WeaponItem)
    weapon_item: WeaponItem = null;

    @property(EquipmentItem)
    equip_item: EquipmentItem = null;

    @property(Label)
    lbl_quota: Label = null;
    @property(Sprite)
    sp_need_item: Sprite = null;
    @property(Label)
    lbl_need_item: Label = null;
    @property(Node)
    node_buy: Node = null;
    @property(Node)
    node_ordinary:Node = null;
    @property(Node)
    node_ad:Node = null;
    @property(Label)
    lbl_item_name:Label = null;
    @property(Sprite)
    sp_off:Sprite = null;
    @property(Node)
    node_lock:Node = null;

    private mallItemTab: any = null;
    private _view_type: tab.MallTab = tab.MallTab.MallTab_None;
    private _view_name: MALLNAME = MALLNAME.NONE;
    private _dailyShopIndex: number = 0;
    private _dailyShopId: number = 0;
    private _dailyShopData: tab.DailyShopItemTable = null;
    private _CostItemId: number = 0;
    private _CostItemNum: number = 0;
    private _GetItemId: number = 0;
    private _GetItemNum: number = 0;
    private boughtCount: number = 0;
    initData(viewData, view: tab.MallTab, viewName: MALLNAME) {
        //   根据商品id设置item
        this._view_name = viewName;
        this.mallItemTab = viewData;
        this._view_type = view;
        this.createItemByType();
        this.setStaticView();
        this.node.on(Node.EventType.TOUCH_END, this.buyItem, this);
    }
    buyItem() {
        // 购买道具
        if(this.mallItemTab.isBought){
            return;
        }
        if(this.mallItemTab.commodityId&&this.mallItemTab.commodityId===1000){
            // 广告看

            AdMgr.ins.playVideoAd(tab.AdType.AdType_BuyDailyShop, () => {
                let msg = new proto.Msg_BuyDailyShopCommodityReq();
                msg.index = this._dailyShopIndex;
                Net.Send(proto.Ptl.BuyDailyShopCommodityReq, msg);
            }, false)
        }else{
            dailyBuyShop(this._CostItemId, this._CostItemNum, this._GetItemId, "Tips_common_buy", () => {
                // 发送购买信息
                if (this._view_type === tab.MallTab.MallTab_Tab1) {
                    // 如果是每日商店
                    let msg = new proto.Msg_BuyDailyShopCommodityReq();
                    msg.index = this._dailyShopIndex;
                    Net.Send(proto.Ptl.BuyDailyShopCommodityReq, msg);
                } else {
                    // 发送购买固定商品
                    if (this.boughtCount >= this.mallItemTab.LimitCount) {
                        console.log("没有次数了")
                    } else {
                        let msg = new proto.Msg_BuyFixedShopCommodityReq();
                        msg.commodityId = this.mallItemTab.Id;
                        msg.num = 1;
                        Net.Send(proto.Ptl.BuyFixedShopCommodityReq, msg);
                    }
                }
            })
        }
    }
    // 根据类型创建不同的item
    createItemByType() {
        this.hero_item.node.parent.active = false;
        this.common_item.node.parent.active = false;
        this.equip_item.node.parent.active = false;
        this.node_buy.active = false;
        this.node_ad.active = false;
        this.node_ordinary.active = true;
        this.sp_off.node.parent.active = false;
        this.node_lock.active = false;
        // 判断当前是商品还是道具
        let data = null;
        if (this._view_type === tab.MallTab.MallTab_Tab2 || this._view_type === tab.MallTab.MallTab_Tab3 || this._view_type === tab.MallTab.MallTab_Tab4) {
            this.boughtCount = MallDataMgr.ins.getFixedShopData(this._view_name).get(this.mallItemTab.Id);
            this._GetItemId = this.mallItemTab.GetItemIds[0];
            this._GetItemNum = this.mallItemTab.GetItemNum[0];
            this._CostItemId = this.mallItemTab.CostItemIds[0];
            this._CostItemNum = this.mallItemTab.CostItemNum[0];
            this.node_buy.active = this.mallItemTab.LimitCount==this.boughtCount;
            this.node_ordinary.active = !this.node_buy.active;
            this.setAsyncView();
        } else if (this._view_type === tab.MallTab.MallTab_Tab1) {
            this._dailyShopIndex = this.mallItemTab.index;
            this._dailyShopId = this.mallItemTab.commodityId;
            this._dailyShopData = tab.getData().DailyShopItemTableById.getValue(this._dailyShopId);
            this._CostItemId = this._dailyShopData.CostItemId;
            this._CostItemNum = this._dailyShopData.CostItemNum;
            this._GetItemId = this._dailyShopData.GetItemId;
            this._GetItemNum = this._dailyShopData.GetItemNum;
            this.lbl_quota.node.active = false;
            this.node_buy.active = this.mallItemTab.isBought;
            this.node_ordinary.active = !this.mallItemTab.isBought;
            this.node.getChildByName("ordinary_node").active = !(this._dailyShopData.Advert==tab.AdType.AdType_BuyDailyShop);
            if(this._dailyShopData.Advert==tab.AdType.AdType_BuyDailyShop&&!this.mallItemTab.isBought){
                // 每日商店广告
                this.node_ad.active = true;
                this.node_ordinary.active = false;
            }
            // 是否有折扣图标 有的话显示折扣信息
            if(this._dailyShopData.DiscountIcon){
                this.sp_off.node.parent.active = true;
                this.sp_off.setTexture(this._dailyShopData.DiscountIcon);
            }
        }
        data = new proto.Item();
        data.itemId = this._GetItemId;
        data.num = this._GetItemNum;

        const itemTab = tab.getData().ItemTableById.getValue(data.itemId);
        this.lbl_item_name.string = LangMgr.getLab(itemTab.Name);
        const Type = itemTab.Type;
        switch (Type) {
            case tab.ItemType.ItemType_Hero:
                this.createHeroItem(data)
                break;
            case tab.ItemType.ItemType_Book:
                this.createBookItem(data)
                break;
            case tab.ItemType.ItemType_Currency:
            case tab.ItemType.ItemType_Material:
            case tab.ItemType.ItemType_HeroCommonCost:
            case tab.ItemType.ItemType_LimitTimeItem:
            case tab.ItemType.ItemType_Elixir:
            case tab.ItemType.ItemType_Box:
            case tab.ItemType.ItemType_Piece:
            case tab.ItemType.ItemType_IdleReward:
            case tab.ItemType.ItemType_ChoiceBox:
                if (itemTab.Id > 6100 && itemTab.Id < 9000) {
                    data.itemId = itemTab.Id - 4000
                    this.createHeroItem(data, true);
                } else {
                    this.createCommonItem(data);
                }
                break;
            case tab.ItemType.ItemType_Equip:
                this.createEquipItem(data)
                break;
            default:
                break;
        }
    }
    // 创建普通item
    createCommonItem(data: proto.Item) {
        this.common_item.node.parent.active = true;
        const info = new ItemInfo();
        info.itemId = data.itemId;
        info.num = data.num;
        this.common_item.initData(info)
    }
    // 创建英雄item
    createHeroItem(data: proto.Item, isPiece: boolean = false) {
        this.hero_item.node.parent.active = true;
        const info = new HeroInfo();
        info.itemId = data.itemId;
        const itemTab = tab.getData().HeroTableById.getValue(data.itemId)
        info.id = 0;
        info.star = itemTab.DefaultStar;
        this.hero_item.UpdateContent(info);
        this.hero_item.numLab.node.active = false;
        if (isPiece) {
            this.hero_item.setPiece(Number(data.num));
        }
    }
    // 创建秘籍
    createBookItem(data: proto.Item) {
        this.weapon_item.initBookItemId(data.itemId)
    }
    // 创建装备
    createEquipItem(data: proto.Item) {
        this.equip_item.node.parent.active = true;;
        const info = new EquipInfo();
        info.itemId = data.itemId;
        this.equip_item.initData(info);
        // this.equip_item.setTouchCallBack(() => {

        // })
    }
    // 设置不会变化的节点
    setStaticView() {
        if(this._CostItemId){
            const itemTab = tab.getData().ItemTableById.getValue(this._CostItemId);
            this.sp_need_item.setTexture(itemTab.Icon);
            this.lbl_need_item.string =GameUtil.convertNumber(this._CostItemNum,true);
        }
    }
    // 设置可以变化的节点
    setAsyncView() {
        // 限购次数
        this.lbl_quota.node.active = true;
        const RefreshType = this.mallItemTab.RefreshType;
        let str = ""
        if (RefreshType === tab.RefreshType.RefreshType_Daily) {
            //str = "每日"
            str = LangMgr.getLab("ui_mall_9")
        } else if (RefreshType === tab.RefreshType.RefreshType_Weekly) {
            //str = "每周"
            str = LangMgr.getLab("ui_mall_10")
        } else if (RefreshType === tab.RefreshType.RefreshType_Monthly) {
            //str = "每月"
            str = LangMgr.getLab("ui_mall_11")
        }
        //this.lbl_quota.string = str + "限購：" + (this.mallItemTab.LimitCount - this.boughtCount) + "/" + this.mallItemTab.LimitCount;
        this.lbl_quota.string = LangMgr.getCombineString("ui_commondesc_108", [str]) + (this.mallItemTab.LimitCount - this.boughtCount) + "/" + this.mallItemTab.LimitCount;
    }
    // 点击看广告
    onClickAd(){
        console.log(`cocos 点击观看广告`);
    }
}



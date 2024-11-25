import { _decorator, Component, Label, Node, Sprite, Vec3 } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { dailyBuyShop } from '../../../utils/GameUtil';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { MallDataMgr } from '../../shop/MallDataMgr';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { ItemInfo } from '../../item/ItemInfo';
import { AdMgr } from '../../AdMgr';
import { PayControl } from '../../pay/PayControl';
import { ShowTips } from '../../../mgr/UIMgr';
import { LangMgr } from '../../../mgr/LangMgr';
import { MALLNAME } from '../../../../Common/script/EnumTypeMgr';
import { ChannelMgr } from '../../../../channel/ChannelMgr';
const { ccclass, property } = _decorator;

@ccclass('CycleGiftItem')
export class CycleGiftItem extends Component {
    @property(Node)
    node_first_item: Node = null;
    @property(Node)
    node_layout: Node = null;
    @property(Node)
    node_price_btn: Node = null;
    @property(Node)
    node_ads_btn: Node = null;
    @property(Label)
    lbl_limit_time: Label = null;
    @property(Node)
    node_nothing: Node = null;
    @property(Sprite)
    sp_chaozhi: Sprite = null;

    @property(Node)
    node_diamonds: Node = null;
    @property(Label)
    lbl_diamond: Label = null;
    @property(Sprite)
    sp_diamond: Sprite = null;

    private mallItemTab: tab.MallItemTabe = null;
    private _view_name: MALLNAME = MALLNAME.DailyGift;
    private boughtCount: number = 0;
    private _CostItemId: number = 0;
    private _CostItemNum: number = 0;
    initData(viewData, viewName: MALLNAME) {
        //   根据商品id设置item
        this._view_name = viewName;
        this.mallItemTab = viewData;
        //先创建首个奖励
        this.setStaticView();
        this.setAsyncView();
    }
    setStaticView() {
        const awards = this.mallItemTab.GetItemIds;
        const awardNums = this.mallItemTab.GetItemNum;
        const firstAward = awards[0];
        const firstAwardNum = awardNums[0];
        const otherAward = [];
        const otherAwardNums = [];
        for (let i = 1; i < awards.length; i++) {
            otherAward.push(awards[i]);
            otherAwardNums.push(awardNums[i]);
        }
        const firstInfo = new ItemInfo();
        firstInfo.itemId = firstAward;
        firstInfo.num = firstAwardNum;
        ItemPoolMgr.ins.createRewadItem(firstInfo, this.node_first_item);
        if (otherAward.length === 0) {
            this.node_first_item.setPosition(new Vec3(0, -135, 0));
        }
        this.node_layout.destroyAllChildren();
        for (let i = 0; i < otherAward.length; i++) {
            const awardInfo = new ItemInfo();
            awardInfo.itemId = otherAward[i];
            awardInfo.num = otherAwardNums[i];
            ItemPoolMgr.ins.createRewadItem(awardInfo, this.node_layout);
        }
        // 显示价格
        if (this.mallItemTab.RechargeId) {
            const rechargeTab = tab.getData().RechargeTableById.getValue(this.mallItemTab.RechargeId);
            const lbl_price = this.node_price_btn.getChildByName("price_txt").getComponent(Label);
            lbl_price.string = ChannelMgr.getSdkRechargeShowPrice(rechargeTab);
        }
        if (this.mallItemTab.IconUrl) {
            this.sp_chaozhi.node.active = true;
            this.sp_chaozhi.setTexture(this.mallItemTab.IconUrl)
        } else {
            this.sp_chaozhi.node.active = false;
        }
    }
    setAsyncView() {
        this.boughtCount = MallDataMgr.ins.getFixedShopData(this._view_name).get(this.mallItemTab.Id);
        this.node_ads_btn.active = this.mallItemTab.CostType === tab.MallCostType.MallCostType_Advert;
        this.node_price_btn.active = this.mallItemTab.CostType === tab.MallCostType.MallCostType_Recharge;
        this.node_diamonds.active = this.mallItemTab.CostType === tab.MallCostType.MallCostType_CostItem;
        if (this.node_ads_btn.active) {
            // 当前是广告 显示广告次数跟广告剩余次数
            const maxAdTimes = AdMgr.ins.getAdCountMaxByType(this.mallItemTab.AdType);
            const curAdTimes = AdMgr.ins.getAdCountByType(this.mallItemTab.AdType);
            this.lbl_limit_time.string = String(maxAdTimes - curAdTimes);
            this.node_nothing.active = curAdTimes >= maxAdTimes
        } else if (this.node_price_btn.active) {
            this.lbl_limit_time.string = String(this.mallItemTab.LimitCount - this.boughtCount);
            this.node_nothing.active = this.boughtCount >= this.mallItemTab.LimitCount
        } else {
            this._CostItemId = this.mallItemTab.CostItemIds[0];
            this._CostItemNum = this.mallItemTab.CostItemNum[0];
            this.lbl_diamond.string = String(this._CostItemNum);
            const itemTab = tab.getData().ItemTableById.getValue(this._CostItemId);
            this.sp_diamond.setTexture(itemTab.Icon);
            this.lbl_limit_time.string = String(this.mallItemTab.LimitCount - this.boughtCount);
            this.node_nothing.active = this.boughtCount >= this.mallItemTab.LimitCount
        }
    }
    // 道具购买
    clickBuy() {
        if (this.boughtCount >= this.mallItemTab.LimitCount) {
            console.log("没有次数了")
            return
        }
        const sendMsg = () => {
            let msg = new proto.Msg_BuyFixedShopCommodityReq();
            msg.commodityId = this.mallItemTab.Id;
            msg.num = 1;
            Net.Send(proto.Ptl.BuyFixedShopCommodityReq, msg);
        }
        if (this._CostItemId) {
            // 花钻石
            dailyBuyShop(this._CostItemId, this._CostItemNum, -1, "Tips_common_buy", () => {
                sendMsg();
            })
        } else {
            //免费 判断是否有广告次数
            sendMsg();
        }
    }
    clickFreeBuyItem() {
        var self = this;
        const maxAdTimes = AdMgr.ins.getAdCountMaxByType(this.mallItemTab.AdType);
        const curAdTimes = AdMgr.ins.getAdCountByType(this.mallItemTab.AdType);
        if (curAdTimes >= maxAdTimes) {
            ShowTips(LangMgr.getLab('Tips_timeshortage'));
            return
        }

        AdMgr.ins.playVideoAd(this.mallItemTab.AdType, () => {
            let msg = new proto.Msg_BuyFixedShopCommodityReq();
            msg.commodityId = self.mallItemTab.Id;
            msg.num = 1;
            Net.Send(proto.Ptl.BuyFixedShopCommodityReq, msg);
        }, false)
    }
    clicRMBkBuy() {
        var self = this;
        if (self.boughtCount >= self.mallItemTab.LimitCount) {
            ShowTips(LangMgr.getLab('Tips_timeshortage'));
            return
        }
        PayControl.ins.requestPay(self.mallItemTab.RechargeId, () => {
            MallDataMgr.ins.getFixedShopData(self._view_name).set(self.mallItemTab.Id, self.boughtCount + 1);
            self.setAsyncView();
        })
    }
}



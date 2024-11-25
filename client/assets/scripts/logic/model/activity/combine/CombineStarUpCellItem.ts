import { _decorator, Button, Component, Label, Node, Sprite } from 'cc';
import InfiniteCell from '../../../../Common/InfiniteList/InfiniteCell';
import { tab } from '../../../../Table/table_gen';
import { HeroItem } from '../../item/HeroItem';
import { HeroInfo } from '../../hero/HeroInfo';
import { CommonItem } from '../../item/CommonItem';
import { PayControl } from '../../pay/PayControl';
import { proto } from 'client_protocol';
import { ActivityData } from '../ActivityData';
import { ChannelMgr } from '../../../../channel/ChannelMgr';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { Net } from '../../../net/Net';
import { HeroDataControl } from '../../hero/herobag/HeroDataControl';
import { ButtonLock } from '../../../utils/GameUtil';
const { ccclass, property } = _decorator;

@ccclass('CombineStarUpCellItem')
export class CombineStarUpCellItem extends InfiniteCell {
    @property(HeroItem)
    item_hero: HeroItem = null;
    @property(CommonItem)
    item_free: CommonItem = null;
    @property(Node)
    node_layout: Node = null;
    @property(Label)
    lbl_remain_times: Label = null;
    @property(Button)
    btn_price: Button = null;
    @property(Label)
    lbl_price: Label = null;
    @property(Node)
    node_lock: Node = null;
    private _tabData: tab.ActivityHeroGrowTable = null;
    private _heroGrowData: proto.HeroGrow = null;
    private _canReceive: boolean = false;
    UpdateContent(data: any): void {
        this._tabData = data.tab;
        this._heroGrowData = ActivityData.ins.getHeroGrowData(data.id);
        let info = new HeroInfo();
        info.createDefaultData(this._tabData.HeroId, this._tabData.HeroStar);
        this.item_hero.UpdateContent(info);
        this.item_hero.setLevel(0);
        // 设置免费奖励
        this.setFreeAward();
        // 设置付费奖励
        this.setBuyAward();
    }
    setFreeAward() {
        const _tab = this._tabData;
        const awardId = _tab.FreeRewardId;
        const awardCount = _tab.FreeRewardCount;
        let itemInfo = new ItemInfo();
        itemInfo.initItemData(awardId, awardCount);
        this.item_free.initData(itemInfo);

        if (this._heroGrowData.receivedFreeRewardStars.indexOf(_tab.HeroStar) > -1) {
            // 已经领取
            this.item_free.setSelectState(true);
            this.node_lock.active = false;
            this._canReceive = false;
        } else {
            // 是否可以领取
            this.item_free.setSelectState(false);
            const maxStar = HeroDataControl.ins.getMaxPaintingStar(this._heroGrowData.heroItemId);
            this._canReceive = maxStar >= _tab.HeroStar;
            this.node_lock.active = !this._canReceive;
        }
    }
    setBuyAward() {
        this.node_layout.destroyAllChildren();
        const _tab = this._tabData;
        for (let i = 0; i < _tab.RewardIds.length; i++) {
            const id = _tab.RewardIds[i];
            const count = _tab.RewardCount[i];
            const awardInfo = new ItemInfo();
            awardInfo.itemId = id;
            awardInfo.num = count;
            ItemPoolMgr.ins.createRewadItem(awardInfo, this.node_layout);
        }
        // 设置购买价格
        const rechargeId = this._tabData.RechargeId
        const rechargeTab = tab.getData().RechargeTableById.getValue(rechargeId);
        this.lbl_price.string = ChannelMgr.getSdkRechargeShowPrice(rechargeTab);
        this.setBuyBtn();
    }
    setBuyBtn() {
        // 设置剩余次数
        const buyCount = this._heroGrowData.boughtNotFreeRewardTimesMap[this._tabData.HeroStar]
        const remainTimes = this._tabData.LimitCount - buyCount;
        this.lbl_remain_times.string = String(remainTimes);
        const sp = this.btn_price.node.getComponent(Sprite);
        sp.grayscale = remainTimes <= 0;
        this.btn_price.interactable = remainTimes > 0;
    }
    @ButtonLock(1, () => { })
    clickFree() {
        if (this._canReceive) {
            let msg = new proto.Msg_ReceiveActivityHeroGrowRewardReq();
            msg.activityId = this._heroGrowData.activityId;
            msg.star = this._tabData.HeroStar;
            Net.Send(proto.Ptl.ReceiveActivityHeroGrowRewardReq, msg)
        }
    }
    clickRMB() {
        var self = this;
        if (this._heroGrowData.boughtNotFreeRewardTimesMap[this._tabData.HeroStar] >= this._tabData.LimitCount) {
            return
        }
        PayControl.ins.requestPay(this._tabData.RechargeId, () => {
            this._heroGrowData.boughtNotFreeRewardTimesMap[this._tabData.HeroStar]++;
            self.setBuyBtn();
        })
    }
}


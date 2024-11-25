import { _decorator, Component, instantiate, Label, Node, Prefab, ScrollView, sp, Sprite, Toggle, Vec3 } from 'cc';
import { ComponentBase } from '../../../../framework/base/ComponentBase';
import { UIMgr } from '../../../mgr/UIMgr';
import { PayControl } from '../../pay/PayControl';
import { ChapterGiftItem } from './ChapterGiftItem';
import { tab } from '../../../../Table/table_gen';
import { MALLNAME } from '../../../../Common/script/EnumTypeMgr';
import { MallDataMgr } from '../../shop/MallDataMgr';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { EventMgr } from '../../../mgr/EventMgr';
import { LocalEvent } from '../../../define/LocalEvent';
import { ViewName } from '../../../define/ViewDefine';
import { createAnimation } from '../../../utils/GameUtil';
import { Func } from '../../../utils/Func';
import { ActivityMainView } from './ActivityMainView';
import { ChannelMgr } from '../../../../channel/ChannelMgr';
const { ccclass, property } = _decorator;

@ccclass('ChapterGiftView')
export class ChapterGiftView extends ComponentBase {
    @property(Prefab)
    pfb_toggle: Prefab = null;
    @property(Node)
    node_toggle_content: Node = null;
    @property(Node)
    node_layout:Node = null;
    @property(Label)
    lbl_price:Label = null;
    @property(sp.Skeleton)
    spine_boss:sp.Skeleton = null;
    @property(Sprite)
    sp_discount:Sprite = null;
    @property(ScrollView)
    scroll_view:ScrollView = null;
    private _shop_view: Map<MALLNAME, tab.MallItemTabe> = new Map();
    private _curView: number = 0;
    register(): void {
        EventMgr.onLocal(LocalEvent.Chapter_Gift_Change, this.changeView, this);
    }
    unRegister(): void {
        super.unRegister()
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    onShow(map?:Map<MALLNAME, tab.MallItemTabe>) {
        if(map){
            this._shop_view = map;
        }
        if(this._shop_view.size===0){
            UIMgr.ins.show({ viewName: ViewName.ActivityMainView})
            return;
        }
        let count = 0;
        this.node_toggle_content.destroyAllChildren();
        this._shop_view.forEach((val, key) => {
            const id = key;
            const mallTab = val;
            const ChapterGiftTab = tab.getData().MainChapterGiftTableByMallId.getValue(mallTab.MallId);
            const toggleItem = instantiate(this.pfb_toggle);
            toggleItem.parent = this.node_toggle_content;
            const toggleItemTs = toggleItem.getComponent(ChapterGiftItem);
            toggleItemTs.initData(id, ChapterGiftTab.MainChapterId);
            count++;
            if (count === this._shop_view.size) {
                this._curView = id;
                toggleItem.getComponent(Toggle).isChecked = true;
                if(this._shop_view.size>4){
                    this.scroll_view.scrollToRight();
                }
            }
        })
        this.setViewByMallId()
    }
    changeView(id:number){
        this._curView = id;
        this.setViewByMallId();
    }
    // 根据MallItemTable的id创建界面
    setViewByMallId() {
        const curMallTab = this._shop_view.get(this._curView);
        const ChapterGiftTab = tab.getData().MainChapterGiftTableByMallId.getValue(curMallTab.MallId);
        const awards = curMallTab.GetItemIds;
        const awardNums = curMallTab.GetItemNum;
        this.node_layout.destroyAllChildren();
        for (let i = 0; i < awards.length; i++) {
            const awardInfo = new ItemInfo();
            awardInfo.itemId = awards[i];
            awardInfo.num = awardNums[i];
            ItemPoolMgr.ins.createRewadItem(awardInfo, this.node_layout);
        }
        // 价格
        if(curMallTab.RechargeId){
            const rechargeTab = tab.getData().RechargeTableById.getValue(curMallTab.RechargeId);
            this.lbl_price.string = ChannelMgr.getSdkRechargeShowPrice(rechargeTab);
        }
        const chapterData = tab.getData().MainChapterTableById.getValue(ChapterGiftTab.MainChapterId);
        createAnimation(this.spine_boss.node,ChapterGiftTab.AnimationId);
        this.sp_discount.setTexture(ChapterGiftTab.DiscountIcon);
        // this.lbl_name.string = LangMgr.getLab(chapterData.Name);
        Func.setItem("chapter_gift_"+curMallTab.Id,"true");

        const view = UIMgr.ins.getView('ActivityMainView');
        view.getComponent(ActivityMainView).refreshChapterRed();
    }
    clicRMBkBuy() {
        var self = this;
        const curMallTab = this._shop_view.get(this._curView);
        PayControl.ins.requestPay(curMallTab.RechargeId, () => {
            this._shop_view.delete(this._curView);
            MallDataMgr.ins.getFixedShopData(curMallTab.MallId).set(curMallTab.Id, 1);
            self.onShow();
        })
    }
}



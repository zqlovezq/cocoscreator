import { _decorator, Component, Node, Prefab, Animation, instantiate, AnimationComponent, Sprite, Label, log } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { proto } from 'client_protocol';
import { HeroItem } from '../item/HeroItem';
import { HeroInfo } from '../hero/HeroInfo';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { CommonItem } from '../item/CommonItem';
import { ItemInfo } from '../item/ItemInfo';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { NewHeroPop } from '../common/NewHeroPop';
import { Net } from '../../net/Net';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
import { WeaponItem } from '../common/WeaponItem';
import { RareBookGetPop } from '../rareBook/RareBookGetPop';
import { ItemData } from '../item/ItemData';
import { gachaReplace } from '../../utils/GameUtil';
import { RecruitType } from '../../../Common/script/EnumTypeMgr';
import { RoleData } from '../role/RoleData';
import { LangMgr } from '../../mgr/LangMgr';
import { GuideController } from '../../guide/GuideController';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
const { ccclass, property } = _decorator;

@ccclass('RecruitGetPop')
export class RecruitGetPop extends ViewPop {
    @property(Prefab)
    pfb_common_item: Prefab = null;
    @property(Prefab)
    pfb_hero_item: Prefab = null;
    @property(Prefab)
    pfb_new_hero: Prefab = null;
    @property(Prefab)
    pfb_rare_book: Prefab = null;
    @property(Node)
    node_item1: Node = null;
    @property(Node)
    node_item10: Node = null;
    @property(Sprite)
    sp_extra_item: Sprite = null;
    @property(Label)
    lbl_extra_count: Label = null;

    @property(Sprite)
    sp_extra_item_1: Sprite = null;
    @property(Label)
    lbl_extra_count_1: Label = null;
    @property(Node)
    node_extra: Node = null;
    @property(Node)
    node_get_item: Node = null;

    @property([Node])
    node_types: Node[] = [];
    @property(Node)
    node_limit: Node = null;

    private _rewards: proto.IItem[] = [];
    private _showNum: number = 0;
    private _gachaNum: number = 0;
    private _gachaId: number = 0;
    private _curStage: Node = null;
    private _herosMap: Map<number, number | boolean> = new Map();
    private _curRecruitType: RecruitType = RecruitType.None
    unRegister(): void {
        super.unRegister();
    }
    register(): void {
        EventMgr.onLocal(LocalEvent.showNewOver, this.autoShowHeroAnim, this)
    }
    onShow(): void {
        this._rewards = this.openData.rewards;
        this._gachaId = this.openData.id;
        this._herosMap = this.openData.map;
        this._curRecruitType = this.openData.type;
        this.node_limit.active = false;
        for (let i = 0; i < this.node_types.length; i++) {
            this.node_types[i].active = false;
        }
        if (this._curRecruitType === RecruitType.GaChaUp) {
            this._curStage = this.node_limit
        }else{
            this._curStage = this.node_types[this._curRecruitType - 1];
        }
        this._curStage.active = true;
        const gachaTab = tab.getData().GachaTableById.getValue(this._gachaId);
        // 消耗道具数量
        this._gachaNum = gachaTab.ItemCount;
        if (this._gachaNum === 1000) {
            this._gachaNum = 1;
        }
        this._curStage.getChildByName("btn_node").getChildByName("recruit1_btn").active = this._gachaNum === 1;
        this._curStage.getChildByName("btn_node").getChildByName("recruit10_btn").active = this._gachaNum === 10;
        this._showNum = 0;

        this.node_extra.active = false;
        const configRecycle = tab.getData().GetKeyValue_ConfigTable().HeroRecycleReward;
        let extraId = 0;
        let extraCount = 0;
        let extraId1 = configRecycle[0];
        let extraCount1 = 0;
        for (let i = this._rewards.length - 1; i >= 0; i--) {
            const reward = this._rewards[i];
            if (reward.itemId === 51 || reward.itemId === 81 || reward.itemId === 82) {
                if (!extraId) {
                    extraId = reward.itemId;
                    extraCount = Number(reward.num);
                }
                this._rewards.splice(i, 1);
            } else {
                const heroTab = tab.getData().HeroTableById.getValue(reward.itemId);
                if (heroTab) {
                    const aptitude = heroTab.Aptitude;
                    if (RoleData.ins.autoDisband && aptitude === tab.HeroAptitude.HeroAptitude_N) {
                        extraCount1 += configRecycle[1];
                    }
                }
            }
        }
        const extraTab = tab.getData().ItemTableById.getValue(extraId);
        const extraTab1 = tab.getData().ItemTableById.getValue(extraId1);
        this.sp_extra_item_1.node.parent.active = extraCount1 > 0;
        this.sp_extra_item.node.parent.active = extraCount > 0;
        this.node_get_item.active = extraCount > 0 && extraCount1 > 0;
        if (extraTab) {
            this.sp_extra_item.setTexture(extraTab.Icon);
            this.lbl_extra_count.string = String(extraCount * this._gachaNum);
        }
        if (extraTab1) {
            this.sp_extra_item_1.setTexture(extraTab1.Icon);
            this.lbl_extra_count_1.string = String(extraCount1);
        }
        this.unschedule(this.addItem);
        this.schedule(this.addItem, 0.15, this._gachaNum - 1);
    }
    addItem() {
        if (!this._rewards[this._showNum]) {
            return;
        }
        const reward = this._rewards[this._showNum];
        const itemId = reward.itemId;
        const itemCount = Number(reward.num);
        const itemTab = tab.getData().ItemTableById.getValue(itemId);
        const children = this["node_item" + this._gachaNum].children;
        // for(let i=0;i<children.length;i++){
        const item = children[this._showNum];
        item.destroyAllChildren();
        item.getComponent(Animation).play();
        if (itemTab.Type === tab.ItemType.ItemType_Hero) {
            this.createHero(item, itemId, 0);
        } else if (itemTab.Type === tab.ItemType.ItemType_Material || itemTab.Type === tab.ItemType.ItemType_Piece) {
            if (itemId > 6100 && itemId < 10000) {
                this.createHero(item, itemId - 4000, itemCount);
            } else {
                this.createItem(item, itemId, itemCount);
            }
        } else if (itemTab.Type === tab.ItemType.ItemType_Book) {
            this.createBook(item, itemId)
        }
        this._showNum++;
        if (this._showNum >= this._gachaNum) {
            this.node_extra.active = true;
            this.unschedule(this.addItem);
        }
    }
    createHero(item: Node, itemId: number, itemCount?: number) {
        const _heroItem = instantiate(this.pfb_hero_item);
        _heroItem.parent = item;
        const itemTs = _heroItem.getComponent(HeroItem);
        const heroTab = tab.getData().HeroTableById.getValue(itemId);
        const heroInfo = new HeroInfo();
        heroInfo.itemId = itemId;
        heroInfo.star = heroTab.DefaultStar;
        itemTs.UpdateContent(heroInfo);
        itemTs.setSelect(false);
        itemTs.setLevel(0);
        itemTs.setAutoDisband(heroInfo.heroTable.Aptitude === tab.HeroAptitude.HeroAptitude_N);
        if (itemCount) {
            itemTs.setPiece(itemCount);
        } else {
            if (heroTab.Aptitude === tab.HeroAptitude.HeroAptitude_SSR) {
                this.showNewHeroPop(itemId);
            } else if (heroTab.Aptitude === tab.HeroAptitude.HeroAptitude_SR) {
                // 判断是否是首次
                if (HeroDataControl.ins.getNewSRHero(itemId)) {
                    this.showNewHeroPop(itemId);
                    HeroDataControl.ins.deleteNewSRHero(itemId)
                }
            }
        }
    }
    createItem(item: Node, itemId: number, itemCount: Number) {
        const _commonItem = instantiate(this.pfb_common_item);
        _commonItem.parent = item;
        const itemTs = _commonItem.getComponent(CommonItem);
        const itemData = new ItemInfo();
        itemData.itemId = itemId;
        itemData.num = Number(itemCount);
        itemTs.initData(itemData);
    }
    createBook(item: Node, itemId: number) {
        const _bookItem = instantiate(this.pfb_rare_book);
        _bookItem.parent = item;
        const itemTs = _bookItem.getComponent(WeaponItem);
        itemTs.initBookItemId(itemId, true, true, false, () => {
            UIMgr.ins.show({ viewName: ViewName.RareBookInfoItemPop, data: { "bookInfo": itemTs.info } });
        });
        const bookTab = tab.getData().BookTableById.getValue(itemId);
        if (bookTab.Aptitude === tab.HeroAptitude.HeroAptitude_SR) {
            // 显示弹窗
            this.showNewBookPop(itemId);
        } else if (bookTab.Aptitude === tab.HeroAptitude.HeroAptitude_R) {
            if (!this._herosMap.get(itemId)) {
                this._herosMap.set(itemId, true);
                this.showNewBookPop(itemId);
            }
        }
    }
    clearHeros() {
        this._showNum = 0;
        this.unschedule(this.addItem);
        if (this._gachaNum === 1) {
            this.node_item1.getChildByName("item1").destroyAllChildren()
        } else {
            for (let i = 1; i <= 10; i++) {
                this.node_item10.getChildByName("item" + i).destroyAllChildren()
            }
        }
    }
    // 如果当前是新秘籍
    showNewBookPop(itemId: number) {
        const self = this;
        this.unschedule(this.addItem);
        UIMgr.ins.show({
            viewName: ViewName.RareBookGetPop, data: {
                itemId: itemId
            }
        })
    }
    // 如果当前是新英雄
    showNewHeroPop(itemId: number) {
        const self = this;
        this.unschedule(this.addItem);
        UIMgr.ins.show({
            viewName: ViewName.NewHeroPop, data: {
                itemId: itemId
            }
        })
    }
    /* 继续播放动画 */
    autoShowHeroAnim() {
        const children = this["node_item" + this._gachaNum].children;
        const item = children[this._showNum - 1];
        item.getComponent(Animation).play();
        this.scheduleOnce(() => {
            this.schedule(this.addItem, 0.15, this._gachaNum - this._showNum - 1)
        }, 0.15)
    }
    sendGacha() {
        if(GuideController.ins.isGuiding()){
            return;
        }
        const slef = this;
        if (this._showNum !== this._gachaNum) {
            return;
        }
        if (this._curRecruitType != RecruitType.Book && this._curRecruitType != RecruitType.BookGuarantee) {
            if (HeroDataControl.ins.getHeroBagFull(this._gachaNum)) {
                ShowTips(LangMgr.getLab("Tips_herobag_1"))
                return
            }
        }

        const gachaTab = tab.getData().GachaTableById.getValue(this._gachaId);
        const count = gachaTab.ItemCount;
        const itemId = gachaTab.ItemId;

        const itemCount = ItemData.ins.getCount(itemId);


        const sendMsg = (() => {
            slef.clearHeros();
            let msg = new proto.Msg_GachaReq();
            msg.id = slef._gachaId;
            Net.Send(proto.Ptl.GachaReq, msg);
        })

        if (itemCount < count) {
            let canSendMsg = gachaReplace(this._gachaId, this._curRecruitType, sendMsg);
            if (!canSendMsg) {
                return;
            }
        }
        sendMsg();
    }
    protected onDestroy(): void {
        super.onDestroy();
        if (GuideController.ins.isGuiding()) {
            EventMgr.emitLocal(LocalEvent.hideHeroPop);
        }
    }
}



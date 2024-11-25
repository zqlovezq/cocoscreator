import { _decorator, Component, instantiate, Label, Node, Prefab, RichText, Sprite } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { HeroMaterialItem } from './HeroMaterialItem';
import { Func } from '../../../utils/Func';
import { tab } from '../../../../Table/table_gen';
import { HeroInfo, materialHeros } from '../HeroInfo';
import { HeroData } from '../HeroData';
import { HeroDataControl } from './HeroDataControl';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { ItemData } from '../../item/ItemData';
import { LangMgr } from '../../../mgr/LangMgr';
import { EventMgr } from '../../../mgr/EventMgr';
import { LocalEvent } from '../../../define/LocalEvent';
const { ccclass, property } = _decorator;

@ccclass('HeroStarSpecialPop')
export class HeroStarSpecialPop extends ViewPop {
    private _step: number = 0;
    @property(Prefab)
    pfb_hero_material: Prefab = null;
    @property(Node)
    node_stuff_star_layout: Node = null;
    @property(Node)
    node_show: Node = null;
    @property(Sprite)
    sp_item: Sprite = null;
    @property(Label)
    lbl_item: Label = null;
    @property(Label)
    rich_text_attr: RichText = null;
    private _heroInfo: HeroInfo = null;
    private _herosMaterialMap: Map<number, materialHeros> = new Map();
    register(): void {
        EventMgr.onLocal(LocalEvent.Hero_Material_Select, this.refeshMaterial, this);
    }
    refeshMaterial(data) {
        if(data){
            this._heroInfo.setHerosMaterialById(data[0], data[1], data[2], data[3] ? data[3] : null);
        }
        this.initData();
    }
    onShow(): void {
        this._step = this.openData.stepId;
        this._heroInfo = HeroData.ins.getById(HeroDataControl.ins.heroId);
        this._herosMaterialMap = this._heroInfo.setHerosMaterialMap(this._step);
        this.initData();
    }
    onDestroy(): void {
        super.onDestroy();
    }
    initData() {
        this.node_stuff_star_layout.destroyAllChildren();
        let starTab = tab.getData().HeroStarStepTableById.getValue(this._step);
        this.node_show.active = this._heroInfo.finshedStarSteps.indexOf(this._step) === -1;
        this.rich_text_attr.string = LangMgr.getLab(starTab.StepDesc);
        if(this.node_show.active){
            for (let i = 0; i < starTab.HeroStarUpType.length; i++) {
                let type: tab.HeroStarUpType = starTab.HeroStarUpType[i];
                let item = instantiate(this.pfb_hero_material);
                item.name = "item" + type;
                item.parent = this.node_stuff_star_layout;
                Func.cocosNodeZIndex(item, type);
                item.active = true;
                let itemTs: HeroMaterialItem = item.getComponent(HeroMaterialItem)
                let heroClass = this._heroInfo.heroClassTable.HeroClass;
                if (type == tab.HeroStarUpType.HeroStarUpType_AnyHero) {
                    heroClass = tab.HeroClass.HeroClass_Any
                }
                itemTs.setMaterial(type, heroClass, this._step);
            }
            /* 升级所需的材料 */
            let itemIds = starTab.CostItemId;
            let counts = starTab.CostItemNum;
            this.sp_item.node.parent.active = itemIds.length > 0;
            for (let k = 0; k < itemIds.length; k++) {
                let _ItemData = ItemData.ins.getByItemId(itemIds[k]);
                let itemTab = tab.getData().ItemTableById.getValue(itemIds[k]);
                if (_ItemData && _ItemData.num) {
                    this.lbl_item.string = _ItemData.num + " / " + counts[k];
                } else {
                    this.lbl_item.string = 0 + " / " + counts[k];
                }
                this.sp_item.setTexture(itemTab.Icon);
            }
        }
    }
    /* 进阶 */
    clickHeroStarStepUp() {
        let MaterialEnough = this._heroInfo.checkStarUpMaterialEnough(this._step);
        if (!MaterialEnough) {
            console.log("cocos 材料不足")
            return;
        }
        let msg = new proto.Msg_FinishHeroStarStepReq()
        const map = this._heroInfo.getHerosMaterialMap();
        let starTab = tab.getData().HeroStarStepTableById.getValue(this._step)
        let upStarCosts: proto.IUpHeroStarCost[] = []
        for (let i = 0; i < starTab.HeroStarUpType.length; i++) {
            let _type: tab.HeroStarUpType = starTab.HeroStarUpType[i];
            let _count: number = starTab.CostHeroNum[i];
            if (this._heroInfo.getHerosMaterialMapCount(_type) < _count) {
                console.log(`cocos type=${_type} 需要的数量为${_count} 当前的数量为${this._heroInfo.getHerosMaterialMapCount(_type)}`)
                return
            }
            let obj: proto.IUpHeroStarCost = {
                costType: _type,
                costHeroIds: [],
                costItems: []
            }
            upStarCosts.push(obj);
        }
        map.forEach((value, key) => {
            let heroCost: proto.IUpHeroStarCost = null;
            for (let i = 0; i < upStarCosts.length; i++) {
                if (value.type === upStarCosts[i].costType) {
                    heroCost = upStarCosts[i]
                }
            }
            let costHeroIds = heroCost.costHeroIds;
            let costItems = heroCost.costItems;
            if (value.itemId) {
                if (costItems.length > 0) {
                    let hasItemIndex = -1
                    for (let i = 0; i < costItems.length; i++) {
                        if (costItems[i].itemId === value.itemId) {
                            hasItemIndex = i;
                        }
                    }
                    if(hasItemIndex>=0){
                        costItems[hasItemIndex].num++;
                    }else{
                        costItems.push({
                            itemId: value.itemId,
                            num: 1
                        })
                    }
                } else {
                    costItems.push({
                        itemId: value.itemId,
                        num: 1
                    })
                }
            } else {
                costHeroIds.push(key);
            }
        })
        msg.stepId = this._step;
        msg.heroId = this._heroInfo.id;
        msg.upStarCosts = upStarCosts;
        Net.Send(proto.Ptl.FinishHeroStarStepReq, msg)
    }
}



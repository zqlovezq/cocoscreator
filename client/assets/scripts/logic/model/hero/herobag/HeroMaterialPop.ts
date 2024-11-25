import { _decorator, Color, Component, Label, log, Node, Prefab } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { HeroInfo } from '../HeroInfo';
import { HeroData } from '../HeroData';
import { HeroDataControl } from './HeroDataControl';
import { HeroItem } from '../../item/HeroItem';
import { EventMgr } from '../../../mgr/EventMgr';
import { LocalEvent } from '../../../define/LocalEvent';
import { HeroTeamControl } from '../HeroTeamControl';
import { ItemInfo } from '../../item/ItemInfo';
import { CommonItem } from '../../item/CommonItem';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import { CommonTipsPop } from '../../common/CommonTipsPop';
import { checkSameDay } from '../../../utils/GameUtil';
import { RecruitType } from '../../../../Common/script/EnumTypeMgr';
const { ccclass, property } = _decorator;

@ccclass('HeroMaterialPop')
export class HeroMaterialPop extends ViewPop {
    @property(Prefab)
    pfb_hero_item: Prefab = null;
    @property(Prefab)
    pfb_common_item: Prefab = null;

    @property(Node)
    node_content: Node = null;
    @property(Node)
    node_empty: Node = null;
    @property(Node)
    node_select: Node = null;

    @property(Label)
    lbl_choice_num: Label = null;
    @property(Label)
    lbl_total_num: Label = null;
    private _heroList: HeroInfo[] = [];
    private _selectCount: number = 0;
    private _needCount: number = 0;
    private _needStar: number = 0;
    register(): void {

    }
    onShow(): void {
        this.node_content.destroyAllChildren();
        let mainHeroInfo = HeroData.ins.getById(HeroDataControl.ins.heroId);
        this.node_content.destroyAllChildren();
        let HeroMap = mainHeroInfo.getHerosByType(this.openData.type, this.openData.stepId, mainHeroInfo.getHerosMaterialMap());
        this.node_empty.active = HeroMap.map.size === 0;
        this.node_select.active = HeroMap.map.size >0;
        this._selectCount = mainHeroInfo.getHerosMaterialMapCount(this.openData.type);
        this._needCount = HeroMap.needCount;

        const vocationArr = [];
        const AnyArr = [];
        const heroArr = [];
        HeroMap.map.forEach((value,key)=>{
            const commonTab = tab.getData().HeroCommonCostTableById.getValue(key-value);
            if(commonTab){
                if(commonTab.HeroClass===tab.HeroClass.HeroClass_Any){
                    AnyArr.push({
                        itemId:key,
                        star:HeroMap.star,
                        count:value,
                    })
                }else{
                    vocationArr.push({
                        itemId:key,
                        star:HeroMap.star,
                        count:value,
                    })
                }
            }else{
                heroArr.push(value.id);
            }
        })
        if(heroArr.length>0){
            heroArr.sort((id1,id2)=>{
                const heroInfo1 = HeroData.ins.getById(id1);
                const heroInfo2 = HeroData.ins.getById(id2);
                const heroTab1 = heroInfo1.heroTable;
                const heroTab2 = heroInfo2.heroTable;
                const itemTab1 = heroInfo1.itemTable;
                const itemTab2 = heroInfo2.itemTable;
                if(heroTab1.Aptitude!=heroTab2.Aptitude){
                    return heroTab1.Aptitude-heroTab2.Aptitude;
                }else{
                    return itemTab1.Sort-itemTab2.Sort;
                }
            })
        }
        const totalArr = vocationArr.concat(AnyArr.concat(heroArr));
        for(let i=0;i<totalArr.length;i++){
            const data = totalArr[i];
            if(typeof data==="object"){
                this.createCommonItem(data.itemId, data.star, data.count);
            }else{
                this.createHeroItem(data);
            }
        }
        // totalArr.forEach((value, key) => {
        //     if (typeof value == "object") {
        //         this.createHeroItem(value.id);
        //     } else {
        //         this.createCommonItem(key, HeroMap.star, value);
        //     }
        // });
        this.refreshLbl();
    }
    refreshLbl() {
        this.lbl_choice_num.string = String(this._selectCount);
        this.lbl_total_num.string = String(this._needCount);
        if (this._selectCount >= this._needCount) {
            this.lbl_choice_num.color = new Color().fromHEX("#455183");
        } else {
            this.lbl_choice_num.color = new Color().fromHEX(tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
        }
    }
    onDestroy(): void {
        super.onDestroy();
    }
    createHeroItem(id: number) {
        var self = this;
        const type = this.openData.type
        let heroInfo = HeroData.ins.getById(id);
        let mainHeroInfo = HeroData.ins.getById(HeroDataControl.ins.heroId);
        let isSelect = Boolean(mainHeroInfo.getHerosMaterialById(id));
        let item = null;
        if (heroInfo) {
            item = ItemPoolMgr.ins.createHeroItem(heroInfo, this.node_content);
        }
        if (item) {
            let ts = item.getComponent(HeroItem)
            ts.UpdateContent(heroInfo);
            ts.setSelect(isSelect);
            ts.setTouchCallBack(() => {
                /* 如果当前的item在别的type中已经存在 则返回 */
                let select = ts.getSelect();
                let cb = function(){
                    let obj = mainHeroInfo.getHerosMaterialById(id);
                    if (obj && obj.type !== type) {
                        return
                    }
                    if (!select) {
                        self._selectCount++;
                    } else {
                        self._selectCount--;
                    }
                    if (self._selectCount > self._needCount) {
                        self._selectCount--;
                        return;
                    }
                    ts.setSelect(!select);
                    self.refreshLbl();
                    EventMgr.emitLocal(LocalEvent.Hero_Material_Select, [ts.getSelect(), id, type]);
                }
                if(select){
                    cb()
                    return;
                }
                if(!checkSameDay(RecruitType.ChoiceSSR)&&heroInfo.heroTable.Aptitude===tab.HeroAptitude.HeroAptitude_SSR&&self._selectCount<self._needCount){
                    const tipsStr = LangMgr.getLab("Tips_risingstar_1");
                    CommonTipsPop.create(tipsStr, ((val) => {
                        if (val) {
                            cb();
                        }
                    }), {
                        gacha: RecruitType.ChoiceSSR
                    })
                }else{
                    cb();
                }
            })
        }
    }
    createCommonItem(itemId: number, star: number, count: number) {
        const type = this.openData.type
        let mainHeroInfo = HeroData.ins.getById(HeroDataControl.ins.heroId);
        let isSelect = Boolean(mainHeroInfo.getHerosMaterialById(itemId));
        let data = new ItemInfo();
        data.itemId = itemId - count;
        data.num = 1
        let item = ItemPoolMgr.ins.createItem(data,this.node_content);
        let ts = item.getComponent(CommonItem)
        ts.setSelectState(isSelect);
        ts.setStar(star);
        ts.setTouchCallBack(() => {
            /* 如果当前的item在别的type中已经存在 则返回 */
            let obj = mainHeroInfo.getHerosMaterialById(itemId);
            if (obj && obj.type !== type) {
                return
            }
            let select = ts.getSelect();
            if (!select) {
                this._selectCount++;
            } else {
                this._selectCount--;
            }
            if (this._selectCount > this._needCount) {
                this._selectCount--;
                return;
            }
            ts.setSelectState(!select);
            this.refreshLbl();
            EventMgr.emitLocal(LocalEvent.Hero_Material_Select, [ts.getSelect(), itemId, type,data.itemId]);
        })
    }
    canclePop(){
        let mainHeroInfo = HeroData.ins.getById(HeroDataControl.ins.heroId);
        mainHeroInfo.setHerosMaterialMap(this.openData.stepId);
        EventMgr.emitLocal(LocalEvent.Hero_Material_Select);
        this.onClose();
    }
}



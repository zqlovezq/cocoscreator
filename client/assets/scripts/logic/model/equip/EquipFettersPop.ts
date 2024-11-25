import { _decorator, Component, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { LangMgr } from '../../mgr/LangMgr';
import { EquipData } from './EquipData';
import { tab } from '../../../Table/table_gen';
import { RareBookStarUpItem } from '../rareBook/RareBookStarUpItem';
const { ccclass, property } = _decorator;

/**
 * 
 * EquipFettersPop
 * zhudingchao
 * Thu Jul 18 2024 17:07:27 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/equip/EquipFettersPop.ts
 *
 */

@ccclass('EquipFettersPop')
export class EquipFettersPop extends ViewPop {
    @property(Sprite)
    titleSpr: Sprite = null;
    @property(Label)
    titleLab1: Label = null;
    @property(Label)
    titleLab2: Label = null;
    @property(Label)
    lastlevelLab: Label = null;
    @property(Label)
    currlevelLab: Label = null;
    @property(Node)
    layoutNode: Node = null;
    @property(Prefab)
    itemPrefab: Prefab = null;

    register(): void {

    }
    onShow(): void {
        if (this.openData) {
            let type = this.openData["type"];
            let level = this.openData["level"];
            let titleIconName = "";
            let tilteKey = ""
            let table: tab.HeroMasterTable = EquipData.ins.getHeroMasterTableByTypeAndLevel(type, level);
            let lastTable = EquipData.ins.getHeroMasterTableByTypeAndLevel(type, level - 1);

            if (type == 1) {
                //品质大师
                titleIconName = "shengXingDaShiTitle";
                tilteKey = "ui_hero_26"

            } else if (type == 2) {
                titleIconName = "qiangHuaDaShiTitle";
                tilteKey = "ui_hero_27"
            } else if (type == 3) {
                titleIconName = "cuiLianDaShiTitle";
                tilteKey = "ui_hero_28"
            }
            this.titleSpr.setTexture("lang/world_lang_cn/hero/"+titleIconName);
            this.titleLab2.string = LangMgr.getLab(tilteKey);
            this.titleLab1.string = LangMgr.getLab(tilteKey);
            this.lastlevelLab.string=LangMgr.getCombineString("ui_heroresonancepop_3",[level-1])
            this.currlevelLab.string=LangMgr.getCombineString("ui_heroresonancepop_3",[level])

            let attrMaps: Map<number, any> = new Map();
            if (table) {
                let atts = table.AttrList;
                for (let key in atts) {
                    let item = tab.getData().EquipAttrTableById.getValue(atts[key]);
                    let info = attrMaps.get(item.AttrType);
                    if (info) {
                        info.next += item.Base;
                    } else {
                        info = { "next": item.Base, "value": 0 }
                        attrMaps.set(item.AttrType, info);
                    }
                }
            }
            if (lastTable) {
                let atts = lastTable.AttrList;
                for (let key in atts) {
                    let item = tab.getData().EquipAttrTableById.getValue(atts[key]);
                    let info = attrMaps.get(item.AttrType);
                    if (info) {
                        info.value += item.Base;
                    } else {
                        info = { "next": 0, "value": item.Base }
                        attrMaps.set(item.AttrType, info);
                    }
                }
            }

            attrMaps.forEach((vlaue, key) => {
                let item=instantiate(this.itemPrefab);
                item.parent=this.layoutNode;
                item.getComponent(RareBookStarUpItem).initView(key,vlaue.value,vlaue.next);
             
            });
        }

    }
}
import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { ComponentBase } from '../../../framework/base/ComponentBase';
import { tab } from '../../../Table/table_gen';
const { ccclass, property } = _decorator;

/**
 * 
 * PrestigeAttributeItem
 * zhudingchao
 * Thu Jun 06 2024 10:10:59 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/prestige/PrestigeAttributeItem.ts
 *
 */

@ccclass('PrestigeAttributeItem')
export class PrestigeAttributeItem extends ComponentBase {
    @property(Sprite)
    typeSpr: Sprite = null;
    @property(Label)
    valueLab: Label = null;
    register(): void {

    }
    initDate(type:number,value:number){
        let tabData=tab.getData().HeroAttrClientTableByType.getValue(type)
       
        this.typeSpr.setTexture(tabData.Icon);
        this.valueLab.string=tabData.ShowPercent?(value/100)+"%":value+""
    }
}
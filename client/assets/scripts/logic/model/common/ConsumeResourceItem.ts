import { _decorator, Color, Component, Label, Node, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { ItemData } from '../item/ItemData';
import { GameUtil } from '../../utils/GameUtil';
const { ccclass, property } = _decorator;

/**
 * 
 * ConsumeResourceItem
 * zhudingchao
 * Fri May 24 2024 17:24:14 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/common/ConsumeResourceItem.ts
 *
 */

@ccclass('ConsumeResourceItem')
export class ConsumeResourceItem extends Component {
    @property(Sprite)
    iconSpr: Sprite = null;
    @property(Label)
    haveLab: Label = null;
    @property(Label)
    needLab: Label = null;
    public isEnough:boolean=false;
    initData(itemId:number,needNum:number) {
        let itemTable=tab.getData().ItemTableById.getValue(itemId);
        this.iconSpr.setTexture(itemTable.Icon);
        let currNum=ItemData.ins.getCount(itemId);
        this.haveLab.string=""+GameUtil.convertNumber(currNum);
        this.needLab.string=""+GameUtil.convertNumber(needNum,true);
        this.isEnough=currNum>=needNum;
        if(!this.isEnough){
            this.haveLab.color = new Color().fromHEX(tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
        }else{
            this.haveLab.color = new Color().fromHEX("#FFFFFF");
        }
    }
}
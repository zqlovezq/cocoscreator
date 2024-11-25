import { _decorator, Component, Node } from 'cc';
import { tab } from '../../../Table/table_gen';
const { ccclass, property } = _decorator;

@ccclass('EquipAttrInfo')
export class EquipAttrInfo {
    public attrId: number;
    private _attrTable:tab.EquipAttrTable;
    private _heroPowerScore:tab.HeroPowerScore;
    
    public initAttrId(id: number) {
        this.attrId = id;
    }
    get attrTable(){
        if(!this._attrTable){
            this._attrTable=tab.getData().EquipAttrTableById.getValue(this.attrId);
        }
        return this._attrTable;
    }
    /**
     * 获得属性增加值根据成长等级
     * @param level 
     */
    getAddValueByLevel(level:number){
       let value =Math.floor((level*this.attrTable.Base*this.attrTable.Growth)/10000);
       return value;
    }
    get heroPowerScore(){
        if(!this._heroPowerScore){
             let tabs=tab.getData().HeroPowerScore;
             this._heroPowerScore=tabs.find(a=>a.Type==this.attrTable.AttrType)
            
            // this._heroPowerScore=tab.getData().HeroPowerScoreById.getValue(this.attrTable.AttrType);
        }
        return this._heroPowerScore;
    }
}



import { _decorator, Component, Node } from 'cc';
import { proto } from 'client_protocol';
import { EquipInfo } from './EquipInfo';
const { ccclass, property } = _decorator;

@ccclass('EquipSlotInfo')
export class EquipSlotInfo extends proto.EquipSlotData {
    private _equipInfo:EquipInfo;
    merge(slotData: any) {
        for (const key in slotData) {
            this[key] = slotData[key]
        }
    }
    set equipInfo(info:EquipInfo){
         this._equipInfo=info;
    }
    get equipInfo(){
        return this._equipInfo;
    }
    
    
}



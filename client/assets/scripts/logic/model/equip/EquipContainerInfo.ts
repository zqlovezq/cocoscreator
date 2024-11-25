import { _decorator, Component, Node } from 'cc';
import { proto } from 'client_protocol';
import { EquipMasterInfo } from './EquipMasterInfo';
import { EquipSlotInfo } from './EquipSlotInfo';
import { EquipData } from './EquipData';
const { ccclass, property } = _decorator;

@ccclass('EquipContainerInfo')
export class EquipContainerInfo extends proto.EquipContainerData {

    private _masterInfo: EquipMasterInfo;
    private _totalAttrMap: Map<number, number>;

    merge(info: any) {
        for (const key in info) {
            this[key] = info[key]
        }

    }

    creatorNull(heroClass: number) {
        let data = new proto.EquipContainerData();
        data.heroClass = heroClass;
        data.slotData = [null, null, null, null, null, null];
        let slot = new proto.EquipSlotData();
        slot.equipId = 0;
        slot.refineLv = 0;
        slot.refineLv = 0;
        data.masterData = new proto.HeroMasterData();
        data.masterData.enhanceLv = 0;
        data.masterData.qualityLv = 0;
        data.masterData.refineLv = 0;
        this.merge(data);
    }
    private initMasterInfo() {
        if (!this.masterData) {
            this.masterData = new proto.HeroMasterData();
            this.masterData.enhanceLv = 0;
            this.masterData.qualityLv = 0;
            this.masterData.refineLv = 0;
        }
        this._masterInfo = new EquipMasterInfo();
        this._masterInfo.merge(this.masterData as proto.HeroMasterData);
    }
    get masteInfo() {
        if (!this._masterInfo) {
            this.initMasterInfo();
        }
        return this._masterInfo;
    }
    initTotalAttrMap() {
        this._totalAttrMap = new Map();
        for (let key in this.slotData) {
            let slot = this.slotData[key];
            if (slot && slot.equipId&&slot.equipId!=0) {
                let equipInfo = EquipData.ins.getEquipInfoById(slot.equipId);
                if(equipInfo){
                    let attrs = equipInfo.totalAttr;
                    attrs.forEach((value, key) => {
                        this.addAttr(key, value);
                    })
                }
              

            }
        }
        let masterAttr=this.masteInfo.totalAttrMap;
        masterAttr.forEach((value,key)=>{
            this.addAttr(key, value);
        })


    }

    private addAttr(type: number, num: number) {
        if (this._totalAttrMap.has(type)) {
            this._totalAttrMap.set(type, this._totalAttrMap.get(type) + num);
        } else {
            this._totalAttrMap.set(type, num);
        }
    }

    get totalAttrMap() {
        if (!this._totalAttrMap) {
            this.initTotalAttrMap();
        }
        return this._totalAttrMap;
    }

}



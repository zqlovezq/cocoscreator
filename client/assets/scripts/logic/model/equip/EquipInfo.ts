import { Node, Prefab, _decorator } from "cc";
import { proto } from "client_protocol";
import { tab } from "../../../Table/table_gen";
import { EquipAttrInfo } from "./EquipAttrInfo";
import { EquipData } from "./EquipData";

const { ccclass, property } = _decorator;

/** 装备数据 */
export class EquipInfo extends proto.EquipData {
    private _itemTable: tab.ItemTable;


    private _equipTable: tab.EquipTable;

    private _isWear: boolean = false;
    /**装备 总的属性map */
    private _totalAttr: Map<number, number>;

    private _slotInfo: proto.EquipSlotData;

    private _baseAttrInfos: Array<EquipAttrInfo>;
    private _extraAttrInfos: Array<EquipAttrInfo>;
    private _enhanceUpgradeTable: tab.EquipUpgradeTable;
    private _refineUpgradeTable: tab.EquipUpgradeTable;

    //因为玉佩只有穿戴上才会有heroClass
    private _jadeHeroClass: number = 0;

    constructor() {
        super()
    }

    merge(equip: any) {
        for (const key in equip) {
            this[key] = equip[key]
        }

    }
   public createDefaultData(itemId: number) {
        this.id = 0;
        this.score = 0;
        this.itemId = itemId;

    }

    updateData(equip: any) {
        this.merge(equip);
        this.initBaseAttrInfos();
        this.initExtraAttrInfos();
        this.updateTotalAttr();

    }
    private initBaseAttrInfos() {
        this._baseAttrInfos = [];
        for (let key in this.baseAttr) {
            let info = new EquipAttrInfo();
            info.initAttrId(this.baseAttr[key]);
            this._baseAttrInfos.push(info);
        }
    }
    get baseAttrInfos() {
        if (!this._baseAttrInfos) {
            this.initBaseAttrInfos();
        }
        return this._baseAttrInfos;
    }

    private initExtraAttrInfos() {
        this._extraAttrInfos = [];
        for (let key in this.extraAttr) {
            let info = new EquipAttrInfo();
            info.initAttrId(this.extraAttr[key]);
            this._extraAttrInfos.push(info);
        }
    }
    get extraAttrInfos() {
        if (!this._extraAttrInfos) {
            this.initExtraAttrInfos();
        }
        return this._extraAttrInfos;
    }
    /**
   * 道具表数据
   */
    get itemTable() {
        if (!this._itemTable) {
            this._itemTable = tab.getData().ItemTableById.getValue(this["itemId"]);
        }
        return this._itemTable;
    }

    get heroClass() {
        if (this.equipTable.Type == tab.EquipType.EquipType_Feather) {
            return this._jadeHeroClass;
        }
        return this.equipTable.Class;
    }
    set heroClass(num: number) {
        if (this.equipTable.Type == tab.EquipType.EquipType_Feather) {
            this._jadeHeroClass = num;
        }
    }
    get equipTable() {
        if (!this._equipTable) {
            this._equipTable = tab.getData().EquipTableById.getValue(this["itemId"]);
        }
        return this._equipTable;
    }
    /**是否穿戴 */
    get isWear() {
        return this._isWear;
    }
    set isWear(b: boolean) {
        this._isWear = b;
    }
    get quality() {
        return this.itemTable.Quality;
    }
    get type() {
        return this.equipTable.Type;
    }


    /**
     * 获取装备类型world表里的key
     * @returns 
     */
    getEquipTypeNameKey() {
        return tab.EquipType[this.equipTable.Type];
    }
    updateTotalAttr() {
        this.totalAttr.clear();
        for (let key in this.baseAttrInfos) {
            // let table = tab.getData().EquipAttrTableById.getValue(this.baseAttr[key]);
            // let addValue=
            let info = this.baseAttrInfos[key];
            let attrType = info.attrTable.AttrType;
            let addValue = info.getAddValueByLevel(this.enhanceLv);
            if (this.totalAttr.has(attrType)) {
                let value = this.totalAttr.get(attrType);
                this.totalAttr.set(attrType, value + info.attrTable.Base + addValue);
            } else {
                this.totalAttr.set(attrType, info.attrTable.Base + addValue);
            }
        }
        for (let key in this.extraAttrInfos) {
            let info = this.extraAttrInfos[key];
            let attrType = info.attrTable.AttrType;
            let addValue = info.getAddValueByLevel(this.refineLv);
            if (this.totalAttr.has(attrType)) {
                let value = this.totalAttr.get(attrType);
                this.totalAttr.set(attrType, value + info.attrTable.Base + addValue);
            } else {
                this.totalAttr.set(attrType, info.attrTable.Base + addValue);
            }
        }

    }
    /**
     * 总属性
     */
    get totalAttr() {
        if (!this._totalAttr) {
            this._totalAttr = new Map();
            this.updateTotalAttr();
        }
        return this._totalAttr;
    }

    set slotInfo(info: proto.IEquipSlotData) {
        this._slotInfo = (info) as proto.EquipSlotData;

    }
    get slotInfo() {
        return this._slotInfo;
    }
    get enhanceLv() {
        if (this.slotInfo&&this.slotInfo.enhanceLv <= this.equipTable.EnhanceLimit) {
            return this.slotInfo.enhanceLv;
        }
        return this.equipTable.EnhanceLimit;
    }
    isEnhanceLimit() {
        return this.enhanceLv >= this.equipTable.EnhanceLimit;
    }
    isRefineLimit() {
        return this.refineLv >= this.equipTable.RefineLimit;
    }
    get refineLv() {
        if (this.slotInfo&&this.slotInfo.refineLv <= this.equipTable.RefineLimit) {
            return this.slotInfo.refineLv;
        }
        return this.equipTable.RefineLimit;
    }
    refreshEquipUpgradeTable() {
        // let tabs=tab.getData().EquipUpgradeTable;
        let level = this.enhanceLv + 1;
        this._enhanceUpgradeTable = EquipData.ins.getEquipUpgradeTab(tab.EquipUpgradeType.EquipUpgradeType_Enhance, level);
    }
    get enhanceUpgradeTable() {
        if (!this._enhanceUpgradeTable) {
            this.refreshEquipUpgradeTable();
        }
        return this._enhanceUpgradeTable;
    }
    refreshRefineEquipUpgradeTable() {
        // let tabs=tab.getData().EquipUpgradeTable;
        let level = this.refineLv + 1;
        this._refineUpgradeTable = EquipData.ins.getEquipUpgradeTab(tab.EquipUpgradeType.EquipUpgradeType_Refine, level);
        // this._refineUpgradeTable=tabs.find(a=>a.Level==level&&tab.EquipUpgradeType.EquipUpgradeType_Refine);
    }
    get refineUpgradeTable() {
        if (!this._refineUpgradeTable) {
            this.refreshRefineEquipUpgradeTable();
        }
        return this._refineUpgradeTable;
    }
}
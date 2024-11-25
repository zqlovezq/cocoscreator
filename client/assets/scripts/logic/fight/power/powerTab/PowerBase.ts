import { _decorator, Component, js } from "cc";
import { tab } from "../../../../Table/table_gen";
import { SkillPowers } from "../SkillPowers";
import { Func } from "../../../utils/Func";
const { ccclass, property } = _decorator;

@ccclass('PowerBase')
export class PowerBase {
    configId: number = 0
    powerType: tab.PowerType

    skillPowers: SkillPowers //增强存储

    constructor() {
    }

    setParentPowers(powers: SkillPowers) {
        this.skillPowers = powers
    }

    insertParent() {
        if (this.skillPowers) {
            this.skillPowers.insertItem(this)
        }
    }

    setConfigId(id: number) {
        this.configId = id
        let tmpTab
        switch (this.powerType) {
            case tab.PowerType.PowerType_SkillGroupTable:
                tmpTab = tab.getData().SkillGroupTableById.getValue(id)
                break
            case tab.PowerType.PowerType_SkillTable:
                tmpTab = tab.getData().SkillTableById.getValue(id)
                break
            case tab.PowerType.PowerType_BuffTable:
                tmpTab = tab.getData().BuffTableById.getValue(id)
                break
            case tab.PowerType.PowerType_EffectTable:
                tmpTab = tab.getData().EffectTableById.getValue(id)
                break
            case tab.PowerType.PowerType_BulletTable:
                tmpTab = tab.getData().BulletTableById.getValue(id)
                break
            case tab.PowerType.PowerType_TriggerTable:
                tmpTab = tab.getData().TriggerTableById.getValue(id)
                break
        }
        if (tmpTab) {
            this.copyTab(tmpTab)
            this.insertParent()
        } else {
            if (id) {
                console.error("powerBase configId is null 找策划--", tab.PowerType[this.powerType], id)
            }
        }
    }

    private copyTab(tmpTab: any) {
        Func.copyTab(tmpTab, this)
    }

    addPower(power: tab.SkillPowerTable) {
        let powerKey = power.PowerMent
        if (this.isKey(powerKey)) {
            for (let index = 0; index < power.PowerValue.length; index++) {
                const v = power.PowerValue[index];
                this.addPowerValue(powerKey, v, index)
            }
        }
    }

    addPowerValue(powerKey: string, powerValue: number, index: number) {
        // console.log(powerKey, this.getValue(powerKey), typeof (this.getValue(powerKey)))
        if (typeof (this.getValue(powerKey)) == 'number') {
            this[powerKey] += powerValue
        } else {
            if (this[powerKey][index] == null) {//自身数组不足补0
                this[powerKey][index] = 0
            }
            this[powerKey][index] += powerValue
        }
    }

    isKey(key: string) {
        return Object.prototype.hasOwnProperty.call(this, key)
    }

    getValue(key: string) {
        return this[key]
    }

    copy() {
        let newBase = new (this as any).constructor()
        PowerBase.copyTab(this, newBase)
        return newBase
    }

    static copyTab(_obj: any, toObj: any) {
        for (let key in _obj) {
            if (_obj.hasOwnProperty(key) && key != "skillPowers") {
                if (typeof _obj[key] == "object") {
                    if (_obj[key] instanceof PowerBase) {
                        if (toObj[key] == null) {
                            toObj[key] = _obj[key].copy()
                        }
                    } else {
                        if (Array.isArray(_obj[key])) {
                            if (toObj[key] == null) {
                                toObj[key] = []
                            }
                        } else {
                            toObj[key] = {}
                        }
                        PowerBase.copyTab(_obj[key], toObj[key])
                    }
                } else {
                    toObj[key] = _obj[key]
                }
            }
        }
        return toObj
    }
}
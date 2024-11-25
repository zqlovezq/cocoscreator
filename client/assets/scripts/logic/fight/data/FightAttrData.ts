import { _decorator, js, math } from "cc";
import { IClear } from "../../../framework/base/IAbs";
import { HeroInfo } from "../../model/hero/HeroInfo";
import { tab } from "../../../Table/table_gen";
import { FightAttrCalculate } from "./FightAttrCalculate";
import { FightMacro } from "../define/FightDefine";

const { ccclass, property } = _decorator;
export enum PrdType {
    CriticalEffect = -1,
    CriticalPerEffect = -2
}

/** 战斗角色属性数据 */
export class FightAttrData {
    level: number = 1
    star: number = 1

    /** 属性计算 */
    attr: Map<tab.AttrType, number> = new Map<tab.AttrType, number>()
    /** 血量相关 */
    private _hp: number = 0
    private _maxHp: number = 0
    private _hpPercent: number = 0
    private _shield: number = 0
    private _shieldPercent: number = 0
    private _maxShield: number = 0

    private isHpChange: boolean = false

    private prdCount: Map<number, number> = new Map<number, number>()

    //属性变化回调
    private cb: Function
    constructor() {
        this.clear()
    }
    clear() {
        this.attr.clear()
        this._hp = 0
        this._maxHp = 0
        this._hpPercent = 0
        this._shieldPercent = 0
        this.isHpChange = false
    }
    copy(newData: FightAttrData) {
        for (const iterator of newData.attr) {
            this.attr.set(iterator[0], iterator[1])
        }
        this._maxHp = newData.maxHp
        this._hp = newData.hp
        this._hpPercent = newData.hpPercent
        this.isHpChange = newData.isHpChange
        this._shieldPercent = newData._shieldPercent
    }
    init() {
        this.fullHp()
    }

    changeCallback(_cb: Function) {
        this.cb = _cb
    }

    fullHp() {
        this.hp = this.maxHp
    }

    getAttr(attrType: tab.AttrType) {
        return this.attr.get(attrType) || 0
    }
    setAttr(attrType: tab.AttrType, value: number) {
        this.attr.set(attrType, value)
        FightAttrCalculate.attrChange(this, attrType, value)
        if (attrType == tab.AttrType.AttrType_TotalHp) {
            this.maxHp = value
        }
        if (attrType == tab.AttrType.AttrType_ShieldLimit) {
            this.changeMaxShield()
        }
       
        // if (attrType == tab.AttrType.AttrType_DamagePer1 && value < 0){
        //     console.warn("攻击百分比1 负数",value)
        // }
        this.cb && this.cb(attrType, value)
    }
    addAttr(attrType: tab.AttrType, value: number) {
        this.setAttr(attrType, this.getAttr(attrType) + value)
    }

    clearAttrByType(attrType: tab.AttrType) {
        this.setAttr(attrType, 0)
    }

    //---------------hp相关-------------------
    /** 血量 */
    get hp() {
        return this._hp
    }
    /** 血量 */
    set hp(value: number) {
        if (this._hp == value) {
            return
        }
        this._hp = value

        this.isHpChange = true
    }
    /** 最大血量 */
    get maxHp() {
        return this._maxHp
    }
    /** 最大血量 */
    set maxHp(value: number) {
        if (this._maxHp == value) {
            return
        }
        this._maxHp = value
        this.hp = Math.min(this.hp, this.maxHp)
        this.isHpChange = true
        this.changeMaxShield()
    }

    /** 血量万分比 */
    get hpPercent() {
        if (this.isHpChange) {
            this._hpPercent = Math.floor((this.hp / this.maxHp) * FightMacro.PERCENT)
            this.isHpChange = false
        }
        return this._hpPercent
    }

    /** 护盾 */
    get shield() {
        return this._shield
    }
    /** 护盾 */
    set shield(value: number) {
        if (this._shield == value) {
            return
        }
        this._shield = value
        this.changeShield()
    }

    /** 最大护盾 */
    get maxShield() {
        return this._maxShield
    }
    set maxShield(value:number){
        this._maxShield = value
    }

    changeMaxShield() {
        this._maxShield = Math.floor(this.maxHp * ((tab.getData().GetKeyValue_ConfigTable().ShieldLimit + this.getAttr(tab.AttrType.AttrType_ShieldLimit)) / FightMacro.PERCENT))
        this.changeShield()
    }

    get shieldPercent() {
        return this._shieldPercent
    }

    set shieldPercent(value: number) {
        this._shieldPercent = value
    }

    changeShield() {
        this._shield = Math.max(Math.min(this._shield, this.maxShield), 0)
        this.shieldPercent = Math.floor((this._shield / this.maxShield) * FightMacro.PERCENT)
    }

    /** 血盾百分比 */
    getHpShieldPercent() {
        return this.hpPercent + this.shieldPercent
    }

    toStrong() {
        // console.log("属性",
        //     js.formatStr("等级:", this.level),
        //     js.formatStr("星级:", this.star),
        //     js.formatStr("血量:", this.hp),
        //     js.formatStr("最大血量:", this.maxHp),
        //     js.formatStr("血量百分比:", this.hpPercent),
        //     js.formatStr("属性:", Array.from(this.attr.entries()).map(([key, value]) => `${tab.AttrType[key]}: ${value}`).join(', ')),
        // )
    }

    getPrdCount(_type: number) {
        return this.prdCount.get(_type) || 1
    }

    addPrdCount(_type) {
        if (!this.prdCount.has(_type)) {
            this.prdCount.set(_type, 1)
        }
        this.prdCount.set(_type, this.prdCount.get(_type) + 1)
    }
    clearPrdCount(_type) {
        this.prdCount.set(_type, 1)
    }
}
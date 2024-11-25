import { _decorator, math } from "cc";
import { AbsRoleInfo } from "../base/obj/role/AbsRoleInfo";
import { tab } from "../../../Table/table_gen";
import { FightMacro } from "../define/FightDefine";
import { FightAttrData } from "./FightAttrData";

const { ccclass, property } = _decorator;

const tmpData: { base: number, parm1: number, parm2: number, parm3: number, parm4: number, result: number, clear: Function } = {
    base: 0,
    parm1: 0,
    parm2: 0,
    parm3: 0,
    parm4: 0,
    result: 0,
    clear() {
        this.base = 0
        this.parm1 = 0
        this.parm2 = 0
        this.parm3 = 0
        this.parm4 = 0
        this.result = 0
    }
}
/** 战斗属性计算 */
export class FightAttrCalculate {
    //-------------------角色属性计算， 攻击、防御、生命（最大血量）--------------
    /** 属性变更 */
    static attrChange(attrData: FightAttrData, attrType: tab.AttrType, value: number) {
        if (this.isAttack(attrType)) {
            this.attack(attrData, attrType)
        } else if (this.isDefanse(attrType)) {
            this.defanse(attrData, attrType)
        } else if (this.isMaxHp(attrType)) {
            this.maxHp(attrData, attrType)
        }

    }

    static isAttack(attrType: tab.AttrType) {
        if (attrType == tab.AttrType.AttrType_Attack
            || attrType == tab.AttrType.AttrType_DamagePer1
            || attrType == tab.AttrType.AttrType_DamagePer2
            || attrType == tab.AttrType.AttrType_DamagePer3
        ) {
            return true
        }
        return false
    }
    /** 攻击 */
    static attack(attrData: FightAttrData, attrType: tab.AttrType) {
        tmpData.clear()
        tmpData.base = attrData.getAttr(tab.AttrType.AttrType_Attack)
        tmpData.parm1 = FightMacro.MAX_CHANCE + attrData.getAttr(tab.AttrType.AttrType_DamagePer1)
        tmpData.parm2 = FightMacro.MAX_CHANCE + attrData.getAttr(tab.AttrType.AttrType_DamagePer2)
        tmpData.parm3 = FightMacro.MAX_CHANCE + attrData.getAttr(tab.AttrType.AttrType_DamagePer3)


        tmpData.result = tmpData.base
            * (tmpData.parm1) / FightMacro.MAX_CHANCE
            * (tmpData.parm2) / FightMacro.MAX_CHANCE
            * (tmpData.parm3) / FightMacro.MAX_CHANCE

        tmpData.result = Math.max(tmpData.result, 1)
        attrData.setAttr(tab.AttrType.AttrType_TotalAttack, Math.floor(tmpData.result))

        // console.log("计算: 攻击 原因：", tab.AttrType[attrType], JSON.stringify(tmpData))
    }

    static isDefanse(attrType: tab.AttrType) {
        if (attrType == tab.AttrType.AttrType_Defence
            || attrType == tab.AttrType.AttrType_DefencePer1
            || attrType == tab.AttrType.AttrType_DefencePer2
            || attrType == tab.AttrType.AttrType_DefencePer3
        ) {
            return true
        }
        return false
    }
    /** 防御计算 */
    static defanse(attrData: FightAttrData, attrType: tab.AttrType) {
        tmpData.clear()
        tmpData.base = attrData.getAttr(tab.AttrType.AttrType_Defence)
        tmpData.parm1 = FightMacro.MAX_CHANCE + attrData.getAttr(tab.AttrType.AttrType_DefencePer1)
        tmpData.parm2 = FightMacro.MAX_CHANCE + attrData.getAttr(tab.AttrType.AttrType_DefencePer2)
        tmpData.parm3 = FightMacro.MAX_CHANCE + attrData.getAttr(tab.AttrType.AttrType_DefencePer3)

        tmpData.result = tmpData.base
            * (tmpData.parm1) / FightMacro.MAX_CHANCE
            * (tmpData.parm2) / FightMacro.MAX_CHANCE
            * (tmpData.parm3) / FightMacro.MAX_CHANCE

        tmpData.result = Math.max(tmpData.result, 0)
        attrData.setAttr(tab.AttrType.AttrType_TotalDefence, Math.floor(tmpData.result))
        // console.log("计算: 防御 原因：", tab.AttrType[attrType], JSON.stringify(tmpData))
    }

    static isMaxHp(attrType: tab.AttrType) {
        if (attrType == tab.AttrType.AttrType_Hp
            || attrType == tab.AttrType.AttrType_HpPer || attrType == tab.AttrType.AttrType_HpPer2
        ) {
            return true
        }
        return false
    }

    /** 最大生命值计算 */
    static maxHp(attrData: FightAttrData, attrType: tab.AttrType) {
        tmpData.clear()
        tmpData.base = attrData.getAttr(tab.AttrType.AttrType_Hp)
        tmpData.parm1 = FightMacro.MAX_CHANCE + attrData.getAttr(tab.AttrType.AttrType_HpPer) * (FightMacro.PERCENT + attrData.getAttr(tab.AttrType.AttrType_HpPer2)) / FightMacro.PERCENT

        tmpData.result = Math.max(tmpData.base * (tmpData.parm1) / FightMacro.MAX_CHANCE, 0)

        attrData.setAttr(tab.AttrType.AttrType_TotalHp, Math.floor(tmpData.result))
        // console.log("计算: HP  原因：", tab.AttrType[attrType], JSON.stringify(tmpData))
    }


    //-------------------子弹属性计算，子弹系数--------------
    /** 子弹系数 */
    static bulletCoefficient(attrData: FightAttrData, attrType: tab.AttrType) {

    }


    //-------------------伤害计算--------------
    /** 伤害计算 */
    static damage(attackRole: AbsRoleInfo, defanseRole: AbsRoleInfo) {

    }
}
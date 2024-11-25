import { Color, Vec3, _decorator } from "cc";
import { BuffTab } from "../../power/powerTab/BuffTab";
import { tab } from "../../../../Table/table_gen";
import { Func } from "../../../utils/Func";
import { runtimeBundleName } from "../../../../../../extensions/localization-editor/static/assets/core/localization-global";
import { FightMacro } from "../../define/FightDefine";

const { ccclass, property } = _decorator;


const CriticalColor = Color.BLUE //会心
const CriticalPointColor = Color.YELLOW//暴击、会心并暴击
const TearColor = Color.RED //撕裂
const HealColor = Color.GREEN //治疗、百分比治疗
const PerSubHealColor = Color.RED //百分比掉血

export enum DamageSource {
    bullet = 1,
    buff = 2
}


export enum DamageColorType {
    white = 0,
    yellow = 1,
    blue = 2,
    green = 3,
    red = 4
}

/** 伤害数据 */
export class DamageData {
    static pool: DamageData[] = []

    static colors = {}

    static splitConfig() {
        if (DamageData.colors[0]) {
            return
        }
        let list = [DamageColorType.white, DamageColorType.yellow, DamageColorType.blue, DamageColorType.green, DamageColorType.red]
        for (let index = 0; index < list.length; index++) {
            const v = list[index];
            let strs = tab.getData().GetKeyValue_ConfigTable()["FightDamageColor_" + v]
            DamageData.colors[v] = { path: strs[0], offsetx: Func.checkInt(strs[1]), size: Func.checkInt(strs[2]) }
        }
    }

    static get(): DamageData {
        let owner
        if (this.pool.length > 0) {
            owner = this.pool.pop()
        } else {
            owner = new DamageData()
        }
        return owner
    }

    static put(obj: DamageData) {
        obj.reset()
        this.pool.push(obj)
    }

    static destroy() {
        this.pool.length = 0
    }

    static copy(data: DamageData): DamageData {
        let dd = DamageData.get()
        dd.isCritical = data.isCritical
        dd.isCriticalPoint = data.isCriticalPoint
        dd.isTear = data.isTear
        dd.isHeal = data.isHeal
        dd.isHealPer = data.isHealPer
        dd.isPerSubHeal = data.isPerSubHeal
        dd.isShield = data.isShield
        dd.damage = data.damage
        dd.source = data.source
        dd.isSelfDamage = data.isSelfDamage
        dd.sourceObjId = data.sourceObjId
        return dd
    }

    isCritical: boolean //是否会心
    isCriticalPoint: boolean //是否暴击
    isTear: boolean //是否撕裂
    isHeal: boolean //是否治疗
    isHealPer: boolean //是否百分比治疗
    isPerSubHeal: boolean //是否百分比掉血
    isShield: boolean//是否为护盾
    isTransferDamage: boolean //是否为链接伤害
    source: DamageSource
    isSelfDamage: boolean = false //是否为自损
    sourceObjId: number = 0

    addBuffTab: BuffTab //计算伤害时， 增加buff, 目前只做了眩晕
    damage: number
    pos?: Vec3
    frameIndex?: number

    constructor() {
        this.pos = new Vec3()
    }

    reset() {
        this.isCritical = false
        this.isCriticalPoint = false
        this.isTear = false
        this.isHeal = false
        this.isHealPer = false
        this.isPerSubHeal = false
        this.isShield = false
        this.isTransferDamage = false
        this.damage = 0
        this.frameIndex = 0
        this.isSelfDamage = false
        this.addBuffTab = null
        this.sourceObjId = 0
        if (this.pos) {
            this.pos.set(Vec3.ZERO)
        }
    }

    recycle() {
        DamageData.put(this)
    }

    /** 是否为伤害 */
    isDamage() {
        if (this.isHeal || this.isHealPer || this.isShield) {
            return false
        }
        return true
    }

    getShowStr() {
        return FightMacro.damageStr(this.damage)
    }


    getColor(): { path: string, offsetx: number, size: number } {
        let colorType: DamageColorType = DamageColorType.white
        if (this.isCritical && this.isCriticalPoint || this.isCriticalPoint) {
            colorType = DamageColorType.yellow
        } else if (this.isCritical) {
            colorType = DamageColorType.blue
        } else if (this.isHeal || this.isHealPer) {
            colorType = DamageColorType.green
        } else if (this.isTear || this.isPerSubHeal) {
            colorType = DamageColorType.red
        } else if (this.isPerSubHeal) {
        }
        return DamageData.colors[colorType]
    }
}
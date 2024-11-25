import { Vec3, View, game, size, v2, view } from "cc";
import { tab } from "../../../../Table/table_gen";
import { AbsObj } from "../obj/AbsObj";
import { AbsRole } from "../obj/role/AbsRole";
import { BuffControl } from "./BuffControl";
import { BuffTab } from "../../power/powerTab/BuffTab";
import { AbsOwner } from "../obj/AbsOwner";
import { EffectControl } from "../effect/EffectControl";
import { FightMacro } from "../../define/FightDefine";
import { FightData } from "../../data/FightData";

const tempPos = new Vec3();
const infinite_num = -1
export class Buff {
    private static pools: Buff[] = []

    static get() {
        let buff = Buff.pools.pop()
        if (buff == null) {
            buff = new Buff()
        }
        return buff
    }

    static put(buff: Buff) {
        buff.reset()
        Buff.pools.push(buff)
    }

    soleId: number = 0

    /** 添加者（来源） */
    addOwner: AbsOwner
    /** 拥有者 */
    owner: AbsOwner

    public lifeTime: number = 0
    public passTime: number = 0
    /** 触发间隔 */
    public triggerTime: number = 0

    /** 叠加数量 */
    public ruleNumber: number = 0

    /** 损失血量百分比 */
    public lossHpPer: number = 0
    _valid: boolean = false

    buffId: number = 0
    configTab: BuffTab

    lockParm: any
    addTime:number = 0
    recycle() {
        Buff.put(this)
    }

    reset() {
        if (this.owner) {
            this.owner.recycle()
            this.owner = null
        }
        if (this.addOwner) {
            this.addOwner.recycle()
            this.addOwner = null
        }
        if (this.lockParm) {
            this.lockParm.recycle()
            this.lockParm = null
        }

        this.buffId = 0
        this._valid = false
        this.passTime = 0
        this.configTab = null
        this.ruleNumber = 0
        this.lifeTime = 0
        this.soleId = 0
        this.triggerTime = 0
        this.addTime = 0
    }

    setBuffTab(_tab: BuffTab) {
        this.addTime = FightData.time
        this.buffId = _tab.Id
        if (_tab.NoOneMemory){
            this.configTab = _tab
        }else{
            this.configTab = _tab.copy()
        }
        for (let index = 0; index < this.configTab.effectTabs.length; index++) {
            const effectTab = this.configTab.effectTabs[index];
            effectTab.random()
        }
    }

    init() {
        this._valid = true
        this.lifeTime = this.configTab.Duration
    }

    addObjId(objId: number) {
        this.addOwner = AbsOwner.get(objId)
        this.addOwner.lockAttr()
    }

    setObjId(objId: number) {
        this.owner = AbsOwner.get(objId)
    }

    isValid() {
        return this._valid
    }

    updateFrame(dt: number) {
        if (!this._valid) {
            return
        }

        this.passTime = this.passTime + dt
        if (this.lifeTime != infinite_num && this.passTime >= this.lifeTime) {
            this.onTimeComplete()
            return
        }
        if (this.configTab.Trigger) {
            this.triggerTime += dt
            this.checkTriggerTime()
        }
    }

    onTimeComplete() {
        this._valid = false
    }

    checkTriggerTime() {
        if (this.triggerTime >= this.configTab.Trigger) {
            this.triggerTime = this.triggerTime - this.configTab.Trigger
            this.onTrigger()
        }
    }

    onTrigger() {
        if (this.configTab.Trigger && this.configTab.Effect) {
            BuffControl.ins.onTriggerEffect(this)
        }
    }

    /** 是否可以叠加 */
    isCanRule() {
        if (this.configTab.Number == 0) {
            return true
        }
        return this.configTab.Number > this.ruleNumber
    }

    /** 是否清除类型 */
    isClearByType(clearType: tab.ClearType) {
        return this.configTab.ClearType.indexOf(clearType) >= 0
    }
    /** 是否buff类型 */
    isBuffType(buffType: tab.BuffType) {
        return this.configTab.BuffType == buffType
    }

    /** 叠加一层 */
    addRuleNumber(isAddAttr: boolean) {
        if (this.configTab.isCheckAttr()) {
            this.checkAttr()
            return
        }
        this.ruleNumber += 1
        if (isAddAttr) {
            this.addAttr()
        }
    }

    disposeRule() {
        //叠加规则
        switch (this.configTab.Rule) {
            case tab.Rule.Rule_TimeNoneEffectNone:
                break
            case tab.Rule.Rule_TimeRefreshEffectNone:// 时间重置，效果不变 
                this.lifeTime = this.configTab.Duration
                this.passTime = 0
                break
            case tab.Rule.Rule_TimeRefreshEffectadd:// 时间重置，效果叠加 
                this.lifeTime = this.configTab.Duration
                this.passTime = 0
                this.addAttr()
                break
            case tab.Rule.Rule_TimeAddEffectNone: // 时间叠加，效果不变 
                this.lifeTime += this.configTab.Duration
                break
        }
    }

    checkAttr(_lossHpPer: number = 0) {
        if (!this.configTab.isCheckAttr()) {
            return
        }

        let lastNum = this.ruleNumber//当前层

        //在条件计算最新层
        if (this.configTab.CheckAttr[0] == 1) { //每损失多少生命值
            this.ruleNumber = Math.min(Math.floor((FightMacro.PERCENT - this.owner.getAttrData().hpPercent) / this.configTab.CheckAttr[1]), this.configTab.Number)
        } else if (this.configTab.CheckAttr[0] == 2) { //生命高于多少值
            this.ruleNumber = this.owner.getAttrData().hpPercent > this.configTab.CheckAttr[1] ? 1 : 0
        } else if (this.configTab.CheckAttr[0] == 3) {//护盾>0
            this.ruleNumber = this.owner.getAttrData().shield >= this.configTab.CheckAttr[1] ? 1 : 0
        } else if (this.configTab.CheckAttr[0] == 4) {//护盾==0
            this.ruleNumber = this.owner.getAttrData().shield == this.configTab.CheckAttr[1] ? 1 : 0
        } else if (this.configTab.CheckAttr[0] == 5) {//每累计损失生命值
            this.lossHpPer += _lossHpPer
            if (this.lossHpPer >= this.configTab.CheckAttr[1]) {
                this.lossHpPer -= this.configTab.CheckAttr[1]
                BuffControl.ins.onTriggerEffect(this)
            }
            return
        } else if (this.configTab.CheckAttr[0] == 6) { //生命低于多少值
            this.ruleNumber = this.owner.getAttrData().hpPercent < this.configTab.CheckAttr[1] ? 1 : 0
        }
        //变更层
        this.attrChange(lastNum)
    }

    attrChange(lastRule: number) {
        let diff = this.ruleNumber - lastRule
        if (diff == 0) {
            return
        }
        for (let index = 0; index < Math.abs(diff); index++) {
            if (diff > 0) {
                this.addAttr()
            } else {
                this.removeOneAttr()
            }
        }
    }

    /** 添加属性 */
    addAttr() {
        if (this.ruleNumber == 0) {
            return
        }
        for (let index = 0; index < this.configTab.effectTabs.length; index++) {
            const effectTab = this.configTab.effectTabs[index];
            EffectControl.ins.addEffect(effectTab, null, this.owner.abs)
        }
    }
    /** 移除属性 */
    removeAttr() {
        let removeCount = 1

        //叠加规则
        switch (this.configTab.Rule) {
            case tab.Rule.Rule_TimeRefreshEffectadd:// 时间重置，效果叠加 
                removeCount = this.ruleNumber
                break
        }
        if (this.configTab.isCheckAttr()) {
            removeCount = this.ruleNumber
        }
        //移除效果
        for (let index = 0; index < removeCount; index++) {
            this.removeOneAttr()
        }
    }
    //移除1层效果
    removeOneAttr() {
        for (let index = 0; index < this.configTab.effectTabs.length; index++) {
            const effectTab = this.configTab.effectTabs[index];
            EffectControl.ins.removeEffect(effectTab, this.owner.abs)
        }
    }
}
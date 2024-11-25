import { _decorator, Component, Vec3 } from "cc";
import { PvpObj, PvpObjType } from "./PvpObj";
import { PvpAttrData } from "../PvpAttrData";
import { proto } from "client_protocol";
import { tab } from "../../../../Table/table_gen";
import { ShadowEffect } from "../../base/effect/ShadowEffect";
import { EventMgr } from "../../../mgr/EventMgr";
import { FightEvent } from "../../define/FightEvent";
import { FightBarItem } from "../../view/common/FightBarItem";
import { Func } from "../../../utils/Func";
import { BuffUI } from "../../base/buff/BuffUI";
import { CDTime } from "../../base/cd/CDTime";
import { HoldTimeEffectUI } from "../../base/effect/HoldTimeEffectUI";

const { ccclass, property } = _decorator;
const tempPos = new Vec3()
const tempPos2 = new Vec3()
@ccclass('PvpRole')
export class PvpRole extends PvpObj {
    objType: PvpObjType = PvpObjType.role
    //阵营
    group: number = 0
    attrData: PvpAttrData = new PvpAttrData();
    hero: proto.HeroFightData
    _animationId: number = 0
    configTab: tab.HeroTable
    avatarShadow: ShadowEffect
    barItem: FightBarItem

    isActive: boolean = true
    skillCdTime: CDTime = new CDTime()//调息时间
    holdEffect: HoldTimeEffectUI
    reset(): void {
        if (this.holdEffect) {
            this.holdEffect.remove()
            this.holdEffect = null
        }
        this.avatarShadow.recycle()
        this.avatarShadow = null
        this.barItem.node.destroy()
        this.barItem = null
        super.reset()
    }

    setGroup(group: number) {
        this.group = group
        tempPos.x = group == 0 ? 1 : -1
        tempPos.y = tempPos.z = 1
        this.node.scale = tempPos
    }

    setHero(hero: proto.HeroFightData) {
        this.hero = hero
        this.attrData = new PvpAttrData()
        this.attrData.init()

        this.configTab = tab.getData().HeroTableById.getValue(hero.itemId)
        this.initShadow(this.configTab.Shadow)
        this.setBounds(this.configTab.Bounds)
    }

    init(): void {
        super.init();
        this.skillCdTime.kill()
        this.playAnim(this.configTab.Born, this.playIlde.bind(this))
    }

    initShadow(animId: number) {
        this.avatarShadow = ShadowEffect.create()
        EventMgr.emitFight(FightEvent.Effect_Add_To_Layer, "shadow", this.avatarShadow.node)
        this.avatarShadow.run(animId)
    }

    setPosition(position: Vec3): void {
        super.setPosition(position)
        if (this.avatarShadow) {
            this.avatarShadow.node.setPosition(position)
        }
        tempPos.set(this.node.position)
        tempPos.y += 125
        this.barItem.node.position = tempPos
    }

    updateFrame(dt: number) {
        super.updateFrame(dt)
        this.skillCdTime.updateFrame(dt)
        if (this.skillCdTime.isValid()) {
            this.barItem.changeSkillCd(this.skillCdTime.getProgress())
        }
        if (this.holdEffect) {
            this.holdEffect.updateFramePvp(dt)
        }
    }

    //--------------属性相关--------
    onDamage(damage: proto.FightFlowDamage) {
        this.attrData.hp = Math.max(0, this.attrData.hp - damage.damage)
        this.attrData.shield = Math.max(0, this.attrData.shield - damage.shieldDamage)
        this.updateHP()
    }
    onHeal(heal: proto.FightFlowBufferHeal) {
        this.attrData.hp = Math.min(this.attrData.maxHp, this.attrData.hp + heal.healHp)
        this.updateHP()
    }
    updateHP() {
        this.barItem.changeHp()
    }

    //状态相关
    /** 射击位置 */
    getShotPos() {
        return this.getAvatarSpineBonePos("root/point_attack")
    }

    /** 命中位置 */
    getHitPos() {
        return this.getAvatarSpineBonePos("root/point_beattack")
    }

    getAvatarSpineBonePos(boneName: string) {
        let bone = this.avatar.getSpineBonePos(boneName)
        if (bone) {
            tempPos.x = bone.x * this.avatar.spine.node.scale.x * this.getScale().x + this.avatar.spine.node.position.x
            tempPos.y = bone.y * this.avatar.spine.node.scale.y * this.getScale().y + this.avatar.spine.node.position.y

            tempPos.x += this.getPosition().x
            tempPos.y += this.getPosition().y
            tempPos.z += this.getPosition().z
            return tempPos
        }
        return this.getPosition()
    }

    onDead() {
        this.isDead = true
        this.barItem.isActive = false
        this.avatarShadow.node.active = false
        EventMgr.emitFight(FightEvent.add_DeadEffect, this)
        this.playDead()
    }

    /** 复活 */
    onRevive() {
        this.skillCdTime.kill()
        this.isDead = false

        this.avatarShadow.node.active = true
        this.barItem.isActive = true
        EventMgr.emitFight(FightEvent.remove_DeadEffect, this)
        EventMgr.emitFight(FightEvent.Hit_Effect_Add, tab.getData().GetKeyValue_ConfigTable().Resurrectioneffect, this)
        this.playRevive()
    }


    onSkillCD(cdTime: number) {
        this.skillCdTime.reset()
        this.skillCdTime.setLiftTime(cdTime, () => {
            this.skillCdEnd()
        })
        this.playSkillCD()
    }

    skillCdEnd() {
        this.skillCdTime.kill()
        this.barItem.changeSkillCd(1)
        this.playIlde()
    }


    //--------------动画相关--------
    playIlde() {
        if (this.isDead) { return }
        this.playAnim(this.configTab.Idle)
    }
    playSkill(animId: number) {
        if (this.isDead) { return }
        this.resetHoldTime()
        this.playAnim(animId, () => {
            this.playIlde()
        })

    }
    playSkillCD() {
        if (this.isDead) { return }
        this.playAnim(this.configTab.Idle2 || this.configTab.Idle)
    }
    playDead() {
        this.playAnim(this.configTab.Dead || this.configTab.Idle)
    }
    playRevive() {
        this.playAnim(this.configTab.Revive || this.configTab.Idle, () => {
            this.playIlde()
        })
    }

    showHoldTime(holdTime: number) {
        if (this.holdEffect == null) {
            EventMgr.emitFight(FightEvent.Create_HoldTime_Effect, this)
        }
        this.holdEffect.holdMinTime = holdTime
        this.holdEffect.resetTimePvp()
    }
    resetHoldTime() {
        if (this.holdEffect) {
            this.holdEffect.resetTimePvp()
        }
    }



    //--------------buff相关--------
    buffs: Array<proto.FightFlowAddBuffer> = []
    buffUis: Array<BuffUI> = []
    getBuffByIndex(index: number) {
        return Func.forBy(this.buffs, "index", index) as proto.FightFlowAddBuffer
    }

    addBuffUI(buffUi: BuffUI) {
        this.buffUis.push(buffUi)
    }
    getBuffUI(buffId: number) {
        return Func.forBy(this.buffUis, "buffId", buffId) as BuffUI
    }


}
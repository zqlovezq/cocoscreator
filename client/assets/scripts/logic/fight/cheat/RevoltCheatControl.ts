import { _decorator, CCInteger, Color, Component, instantiate, Label, Node, Prefab, Quat, Rect, Size, sp, Sprite, tween, UITransform, Vec2, Vec3, view } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { EventMgr } from '../../mgr/EventMgr';
import { FightEvent } from '../define/FightEvent';
import { proto } from 'client_protocol';
import { Monster } from '../base/obj/role/monster/Monster';
import { FightData } from '../data/FightData';
import { RogueControl } from '../view/rogue/RogueControl';
import Fixed from '../../../framework/collision/Fixed';
import { AbsRole } from '../base/obj/role/AbsRole';
import { PlayerControl } from '../base/obj/role/role/PlayerControl';
import { Bullet } from '../base/obj/bullet/Bullet';
import { DamageData } from '../base/damage/DamageData';
import { Buff } from '../base/buff/Buff';
import { LocalEvent } from '../../define/LocalEvent';
import { GuideController } from '../../guide/GuideController';
import { RoleData } from '../../model/role/RoleData';

const { ccclass, property } = _decorator;

/**
 * 反作弊控制器
 */
@ccclass('RevoltCheatControl')
export class RevoltCheatControl extends AbsControl {
    private static _instance: RevoltCheatControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new RevoltCheatControl();
            this._instance.init();
        }
        return this._instance;
    }


    bossDatas: proto.StageBossFightData[] = []
    bossMap: Map<number, proto.StageBossFightData> = new Map()
    init(): void {
        this.register()
        this.clear()
    }

    clear() {
        this.bossMap.clear()
        this.bossDatas.length = 0
    }

    register(): void {
        EventMgr.onFight(FightEvent.Fight_Start, this.onFightStart, this)
        EventMgr.onFight(FightEvent.Boss_Enter, this.onBoss_Enter, this)
        EventMgr.onFight(FightEvent.Fight_Monster_Dead, this.onFight_Monster_Dead, this)
        EventMgr.onFight(FightEvent.Fight_Initiative_Revive, this.onFight_Initiative_Revive, this)
    }

    onFightStart() {
        this.clear()
    }

    getBoss(bossId: number) {
        for (let index = this.bossDatas.length - 1; index >= 0; index--) {
            if (this.bossDatas[index].bossId == bossId) {
                return this.bossDatas[index]
            }
        }
    }

    getBossByObjId(objId: number) {
        return this.bossMap.get(objId)
    }


    getBossList() {
        return this.bossDatas
    }

    onBoss_Enter(absRole: Monster) {
        let dd = new proto.StageBossFightData()
        dd.bossId = absRole.info.configId
        dd.bossSerial = absRole.objId
        dd.weaponList = RogueControl.ins.getSelectAllIdList()
        dd.startTime = Fixed.toFixed(FightData.time / 1000)  //先记录出生时间
        dd.fightTime = 0
        dd.heroList = this.getHeroList()
        dd.combatData = []
        this.bossDatas.push(dd)
        this.bossMap.set(dd.bossSerial, dd)
        console.error("boss出场", dd, this.bossDatas)
    }

    getHeroList() {
        let list = []
        let roles = PlayerControl.ins.getRoles()
        for (let index = 0; index < roles.length; index++) {
            const role = roles[index];
            let dd = new proto.StageFightHeroData()
            dd.heroClass = role.info.configTab.Class
            dd.heroSerial = role.objId
            dd.hp = role.info.attrData.hp

            dd.bufferList = []
            for (let index = 0; index < role.info.buffs.length; index++) {
                let buff = role.info.buffs[index];
                let buffData = new proto.StageFightBufferData()
                buffData.bufferId = buff.buffId
                buffData.createTime = Fixed.toFixed(buff.addTime)
                buffData.layer = buff.ruleNumber
                buffData.adder = buff.addOwner.objId
                buffData.target = buff.owner.objId

                dd.bufferList.push(buffData)
            }

            list.push(dd)
        }

        return list
    }

    /** boss死亡 */
    onFight_Monster_Dead(absRole: Monster) {
        if (absRole.info && absRole.info.isBoss) {
            let boss = this.getBossByObjId(absRole.objId)
            if (boss) {
                boss.fightTime = Fixed.toFixed(FightData.time / 1000)
                console.error("boss死亡", boss, this.bossDatas)
            }
        }
    }

    /** 鸡 复活 */
    onFight_Initiative_Revive(absRole: AbsRole) {
        for (let index = 0; index < this.bossDatas.length; index++) {
            const boss = this.bossDatas[index];
            if (boss.fightTime == 0) {
                boss.reviveRecord.push(absRole.info.configId)
            }
        }
    }

    addRogue(rogueId:number){
        for (let index = 0; index < this.bossDatas.length; index++) {
            const boss = this.bossDatas[index];
            if (boss.fightTime == 0) {
                let dd = new proto.StageFightExtraWeaponData()
                dd.timestamp = FightData.time
                dd.weaponId = rogueId
                boss.extraWeaponList.push(dd)
            }
        }
    }

    //造成伤害
    addBulletDamage(bullet: Bullet, attack: AbsRole, defanse: AbsRole, damageData: DamageData) {
        let boss = this.getBossByObjId(defanse.objId)
        if (boss) {
            let dd = new proto.CombatData()
            dd.timestamp = FightData.time
            dd.ev = proto.CombatEvent.Attack
            dd.attack = new proto.CombatEventAttack()
            dd.attack.attacker = bullet.owner.objId
            dd.attack.bulletId = bullet.info.configId
            dd.attack.target = defanse.objId
            dd.attack.isFatalAtk = damageData.isCritical //会心
            dd.attack.isCritical = damageData.isCriticalPoint//暴击
            dd.attack.damage = damageData.damage

            boss.combatData.push(dd)
        }
    }

    addBuff(ownerRole: AbsRole, buff: Buff) {
        this.addCombatDataByBuff(true, ownerRole, buff)
    }

    createAddBuff(buff: Buff) {
        let addBuff = new proto.CombatData()
        addBuff.timestamp = FightData.time
        addBuff.ev = proto.CombatEvent.AddBuffer
        addBuff.addBuffer = new proto.CombatEventAddBuffer()
        addBuff.addBuffer.bufferId = buff.buffId
        addBuff.addBuffer.adder = buff.addOwner.objId
        addBuff.addBuffer.target = buff.owner.objId
        addBuff.addBuffer.layer = buff.ruleNumber
        return addBuff
    }

    removeBuff(ownerRole: AbsRole, buff: Buff) {
        this.addCombatDataByBuff(false, ownerRole, buff)
    }

    addCombatDataByBuff(isAdd: boolean, ownerRole: AbsRole, buff: Buff) {
        if (ownerRole && ownerRole.isRole()) {
            for (let index = 0; index < this.bossDatas.length; index++) {
                const boss = this.bossDatas[index];
                if (boss.fightTime == 0) {
                    boss.combatData.push(isAdd ? this.createAddBuff(buff) : this.createRemoveBuff(buff))
                }
            }
        } else if (buff && buff.owner) {
            let boss = this.getBossByObjId(buff.owner.objId)
            if (boss) {
                boss.combatData.push(isAdd ? this.createAddBuff(buff) : this.createRemoveBuff(buff))
            }
        }
    }

    createRemoveBuff(buff: Buff) {
        let removeBuff = new proto.CombatData()
        removeBuff.timestamp = FightData.time
        removeBuff.ev = proto.CombatEvent.RemoveBuffer
        removeBuff.removeBuffer = new proto.CombatEventRemoveBuffer()
        removeBuff.removeBuffer.bufferId = buff.buffId
        removeBuff.removeBuffer.owner = buff.addOwner.objId
        removeBuff.removeBuffer.layer = buff.ruleNumber
        return removeBuff
    }
}


import { _decorator, CCInteger, Color, Component, instantiate, Label, Node, Prefab, Quat, Rect, sp, Sprite, tween, UITransform, Vec2, Vec3, view } from 'cc';
import { AbsControl } from '../../../../framework/base/IAbs';
import { SkillTab } from '../../power/powerTab/SkillTab';
import { AbsRole } from '../obj/role/AbsRole';
import { AbsRoleInfo } from '../obj/role/AbsRoleInfo';
import { tab } from '../../../../Table/table_gen';
import { BulletControl } from '../obj/bullet/BulletControl';
import { SearchEnemy } from '../ai/SearchEnemy';
import { BuffControl } from '../buff/BuffControl';
import { EffectControl } from '../effect/EffectControl';
import { RogueInfo } from '../../view/rogue/RogueInfo';
import { PlayerControl } from '../obj/role/role/PlayerControl';
import { AbsObjType } from '../obj/AbsObj';
import { SkillGroupTab } from '../../power/powerTab/SkillGroupTab';
import { SkillPowerControl } from './SkillPowerControl';
import { EventMgr } from '../../../mgr/EventMgr';
import { FightEvent } from '../../define/FightEvent';
import { RoleData } from '../../../model/role/RoleData';
import { stepBranchGuide } from '../../../guide/GuideTask';
import { FightData } from '../../data/FightData';
import { GuideController } from '../../../guide/GuideController';


const { ccclass, property } = _decorator;
const tempSkills: SkillTab[] = []

const tempPos = new Vec3(0, 0, 0);
@ccclass('SkillControl')
export class SkillControl extends AbsControl {
    private static _instance: SkillControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new SkillControl();
        }
        return this._instance;
    }

    init(): void {
        this.register()
    }
    register() {
        EventMgr.onFight(FightEvent.addSkill, this.addSkill, this)
    }

    addSkill(skill: SkillTab, attack: AbsRole) {
        skill.initCd()
        attack.info.addTakeSkill(skill, true)
    }

    switchSkill(skillTab: SkillTab, attack: AbsRole) {
        attack.info.normalGroup.nowSkill = skillTab
    }

    switchSkillGroup(skillGroup: SkillGroupTab, attack: AbsRole) {
        attack.info.switchSkillGroup(skillGroup)
    }

    /** 释放技能 */
    useSkillAndBullet(skill: SkillTab, attack: AbsRole, targetPos: Vec3 = null) {
        if (skill.isInCD(attack.info.attrData)) {
            console.log("技能cd中--", skill)
            return
        }
        this.useSkillTarget(skill, attack)
        this.useSkillBullet(skill, attack, targetPos)
    }

    /** 使用技能目标 */
    useSkillTarget(skill: SkillTab, attack: AbsRole) {
        if (skill.isInCD(attack.info.attrData)) {
            console.log("技能cd中--", skill)
            return
        }
        if (attack == null || (attack && attack.isDestroy())) {
            console.log("已销毁")
            return
        }

        skill.use()

        attack.info.onSkillTrigger(tab.Triggertype.Triggertype_DetectionSkill, { skillId: skill.Id })
        let enemys = SearchEnemy.skillGetBySearchEnemy(attack.objId, attack.objType, attack.getPosition(), skill.EffectUnit, skill.SearchEnemy, skill.SearchNum)// skill.configTab.EffectNum)
        if (enemys.length == 0) {
            // console.log("useSkillTarget 没有找到目标")
            return
        }

        for (let index = 0; index < enemys.length; index++) {
            const enemy = enemys[index];
            this.skillAttr(skill, attack, enemy)
            this.skillPower(skill, attack, enemy)
        }

        BuffControl.ins.checkSkillAddBuff(skill, attack, enemys)
    }

    /** 释放技能属性 */
    skillAttr(skill: SkillTab, attack: AbsRole, enemy: AbsRole) {
        if (skill.Effect.length == 0) {
            return
        }
        for (let index = 0; index < skill.effectTabs.length; index++) {
            const effectTab = skill.effectTabs[index];
            effectTab.random()
            EffectControl.ins.addEffect(effectTab, attack, enemy)
        }
    }

    /** 释放技能增强 */
    skillPower(skill: SkillTab, attack: AbsRole, enemy: AbsRole) {
        SkillPowerControl.ins.skillPowerBySkill(enemy.info, skill)
    }

    /** 释放技能子弹 */
    useSkillBullet(skill: SkillTab, attack: AbsRole, targetPos: Vec3 = null, bulletGroupId: number = 0, runningShot: boolean = false) {
        if (skill.Bullet == 0) {
            return
        }
        if (targetPos) {
            return BulletControl.ins.clickEmitBullet(runningShot ? skill.runningShotBulletTab : skill.bulletTab, attack, targetPos, bulletGroupId)

        }
        return BulletControl.ins.audoEmitBullet(runningShot ? skill.runningShotBulletTab : skill.bulletTab, attack, bulletGroupId)
    }


    /** 肉鸽使用技能目标 */
    rogueUseSkillTarget(rogueInfo: RogueInfo) {
        let attack = PlayerControl.ins.roles[0]
        let searchType = this.getSearchTypeByOwn(rogueInfo.rogueTab.Own)

        let ownRoles = SearchEnemy.skillGetBySearchEnemy(attack.objId, AbsObjType.role, attack.getPosition(), tab.EffectUnit.EffectUnit_Friend, searchType, 1, true)
        console.log(ownRoles)
        for (let index = 0; index < ownRoles.length; index++) {
            const ownRole = ownRoles[index];
            rogueInfo.skills.forEach(skill => {
                ownRole.info.addTakeSkill(skill, true)
            })

            if (rogueInfo.skillGroup) {
                ownRole.info.addWeaponSkillGroup(rogueInfo.skillGroup)
            }
        }

        let roles = PlayerControl.ins.getRoles()
        let parms = { rogueId: rogueInfo.Id }
        for (let index = 0; index < roles.length; index++) {
            const v = roles[index];
            v.info.onSkillTrigger(tab.Triggertype.Triggertype_Rogue, parms)
        }
    }
    /** 角色升级肉鸽使用技能目标 */
    rogueUseSkillRoleLevelUp(rogueInfo: RogueInfo) {

    }

    /** 根据英雄职业获取锁敌规则 */
    getSearchTypeByOwn(ownClass: tab.OwnClass) {
        switch (ownClass) {
            case tab.OwnClass.OwnClass_All:
                return tab.SearchEnemy.SearchEnemy_All
            case tab.OwnClass.OwnClass_Assassin:
                return tab.SearchEnemy.SearchEnemy_Assassin
            case tab.OwnClass.OwnClass_Archer:
                return tab.SearchEnemy.SearchEnemy_Archer
            case tab.OwnClass.OwnClass_Priest:
                return tab.SearchEnemy.SearchEnemy_Priest
            case tab.OwnClass.OwnClass_Caster:
                return tab.SearchEnemy.SearchEnemy_Caster
            case tab.OwnClass.OwnClass_Warrior:
                return tab.SearchEnemy.SearchEnemy_Warrior
        }

    }
}

import { _decorator, CCInteger, Color, Component, instantiate, Label, Node, Prefab, Quat, Rect, sp, Sprite, tween, UITransform, v3, Vec2, Vec3, view } from 'cc';
import { AbsControl } from '../../../../framework/base/IAbs';
import { AbsRole } from '../obj/role/AbsRole';
import { tab } from '../../../../Table/table_gen';
import { EffectTab } from '../../power/powerTab/EffectTab';
import { SkillTab } from '../../power/powerTab/SkillTab';
import { AbsRoleInfo } from '../obj/role/AbsRoleInfo';

const { ccclass, property } = _decorator;

@ccclass('SkillPowerControl')
export class SkillPowerControl extends AbsControl {
    private static _instance: SkillPowerControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new SkillPowerControl();
        }
        return this._instance;
    }

    init(): void {

    }

    skillPowerBySkill(roleInfo: AbsRoleInfo, skill: SkillTab) {
        if (skill.isPower) {
            // console.log("技能已处理增强--", skill.Id, skill.SkillEnhanceIds)
            return
        }
        if (skill.SkillEnhanceIds.length == 0) {
            return
        }
        // console.log("处理技能增强--", roleInfo.configId, skill.Id, skill.SkillEnhanceIds)
        skill.isPower = true
        for (let index = 0; index < skill.SkillEnhanceIds.length; index++) {
            let skillPower = tab.getData().SkillPowerTableById.getValue(skill.SkillEnhanceIds[index])
            if (skillPower) {
                roleInfo.skillPowers.addPower(skillPower, true)
            } else {
                console.error("技能增强id不存在--", skill.SkillEnhanceIds[index])
            }
        }
    }
}


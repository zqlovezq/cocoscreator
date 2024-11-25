import { _decorator, Component } from "cc";
import { SkillTab } from "../../power/powerTab/SkillTab";
import { AbsRoleInfo } from "../obj/role/AbsRoleInfo";
import { SkillControl } from "./SkillControl";


const { ccclass, property } = _decorator;

/** 技能时间释放 
*/
@ccclass('SkillTimePush')
export class SkillTimePush {

    skills: SkillTab[] = [];
    info: AbsRoleInfo = null
    clear() {
        this.skills.length = 0
    }

    setAbsInfo(_info: AbsRoleInfo) {
        this.info = _info
    }

    addSkill(skill: SkillTab) {
        this.skills.push(skill)
    }

    check() {
        if (this.skills.length == 0 || this.info == null) {
            return
        }

        for (let index = 0; index < this.skills.length; index++) {
            const skill = this.skills[index];
            if (skill.isInCD(this.info.attrData)) {
                continue
            }
            SkillControl.ins.useSkillAndBullet(skill, this.info.abs)
        }
    }
}
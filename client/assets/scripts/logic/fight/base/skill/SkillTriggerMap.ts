import { _decorator, Component } from "cc";
import { tab } from "../../../../Table/table_gen";
import { SkillTab } from "../../power/powerTab/SkillTab";


const { ccclass, property } = _decorator;

const tmpList: SkillTab[] = []

/** 技能触发器 
*/
@ccclass('SkillTriggerMap')
export class SkillTriggerMap {
    triggerMap: Map<number, SkillTab[]> = new Map()

    constructor() {

    }

    clear() {
        this.triggerMap.clear()
    }

    getListByType(type: tab.Triggertype) {
        if (this.triggerMap.has(type)) {
            return this.triggerMap.get(type)
        }
        this.triggerMap.set(type, [])
        return this.triggerMap.get(type)
    }

    addSkill(skill: SkillTab) {
        if (skill.isHasTrigger()) {
            skill.triggerTabs.forEach((v) => {
                let list = this.getListByType(v.Triggertype)
                if (list) {
                    list.push(skill)
                }
            })
        }
    }

    removeSkill(skill: SkillTab) {
        if (skill.isHasTrigger()) {
            skill.triggerTabs.forEach((v) => {
                let list = this.getListByType(v.Triggertype)
                if (list) {
                    let index = list.findIndex(v => v.Id == skill.Id)
                    if (index != -1) {
                        list.splice(index, 1)
                    }
                }
            })
        }
    }
}
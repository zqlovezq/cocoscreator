import { _decorator, Component } from "cc";


const { ccclass, property } = _decorator;

/** 技能触发器 
*/
@ccclass('SkillTriggerData')
export class SkillTriggerData {
    triggerMap: Map<string, any[]> = new Map()

    constructor() {

    }

    clear() {
        this.triggerMap.clear()
    }
}
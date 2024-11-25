import { _decorator, Component } from "cc";
import { tab } from "../../../../Table/table_gen";
import { PowerBase } from "./PowerBase";

const { ccclass, property } = _decorator;

@ccclass('RogueTab')
export class RogueTab extends PowerBase {
    configTab: tab.RogueTable
    //---------------------配置字段-------------------
    Id: number // ID 
    Condition: number // 前置条件 
    Sort: tab.VirtualItemType // 分类 
    Own: tab.HeroClass // 归属 
    Level: number // 重数 
    Stage: number // 阶段 
    Skill: number[] // 技能id 
    SkillGroup: number // 技能组id 
    Weight: number // 权重 
    Mutex: boolean // 互斥 
    Backlimit: number // 放回上限 
    BookId: number // 对应秘籍ID 
    ActivationCondition: tab.RogueActivationCondition // 激活条件 

    //---------------------自有字段-------------------
    setConfigId(id: number) {
        super.setConfigId(id)
    }
}
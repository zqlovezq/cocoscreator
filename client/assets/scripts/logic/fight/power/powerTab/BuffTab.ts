import { _decorator, Component } from "cc";
import { tab } from "../../../../Table/table_gen";
import { PowerBase } from "./PowerBase";
import { EffectTab } from "./EffectTab";
import { PowerTabFactory } from "../PowerTabFactory";
import { TaskView } from "../../../model/task/TaskView";
import { Buff } from "../../base/buff/Buff";
import { Func } from "../../../utils/Func";

const { ccclass, property } = _decorator;

@ccclass('BuffTab')
export class BuffTab extends PowerBase {
    powerType: tab.PowerType = tab.PowerType.PowerType_BuffTable
    configTab: tab.BuffTable
    //---------------------配置字段-------------------
    Id: number // ID 
    BuffType: tab.BuffType // buff类型 
    VFXID: number // 特效id 
    Duration: number // 持续时间 
    Effect: number[] // 效果 
    TriggerTable: number // 触发器 
    Trigger: number // 持续时间内触发间隔 
    Addbuff: number[] // 加buff 
    BuffGroup: tab.BuffGroup // buff分组 
    Rule: tab.Rule // 叠加规则 
    CheckAttr: number[] // 属性检测 
    Number: number // 叠加数量 
    ClearType: tab.ClearType[] // 清除buff的条件  
    NoOneMemory : boolean // 非独立内存 
    //---------------------自有字段-------------------
    effectTabs: EffectTab[] = []
    addBuffTabs: BuffTab[] = []
    addBuffObjType: number
    setConfigId(id: number) {
        super.setConfigId(id)
        if (this.Id == null) {
            console.error("未找到buffid", id)
            return
        }
        //效果配置
        for (let index = 0; index < this.Effect.length; index++) {
            if (this.skillPowers) {
                this.effectTabs.push(this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_EffectTable, this.Effect[index]) as EffectTab)
            } else {
                let data = PowerTabFactory.createType(tab.PowerType.PowerType_EffectTable)
                data.setConfigId(this.Effect[index])
                this.effectTabs.push(data as EffectTab)
            }
        }
        if (this.Addbuff) {
            this.addBuffObjType = this.Addbuff[0]
            for (let index = 1; index < this.Addbuff.length; index++) {
                const v = this.Addbuff[index];
                if (this.skillPowers) {
                    this.addBuffTabs.push(this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_BuffTable, this.Addbuff[index]) as BuffTab)
                } else {
                    let data = PowerTabFactory.createType(tab.PowerType.PowerType_BuffTable)
                    data.setConfigId(id)
                    this.addBuffTabs.push(data as BuffTab)
                }
            }

        }
    }

    isBuffGroup(buffGroup: tab.BuffGroup) {
        return this.BuffGroup == buffGroup
    }

    /** 是否检测属性 （主要针对生命变更） */
    isCheckAttr() {
        return this.CheckAttr.length > 0
    }

}
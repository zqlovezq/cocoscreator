import { _decorator, Component } from "cc";
import { tab } from "../../../../Table/table_gen";
import { PowerBase } from "./PowerBase";
import { Random } from "../../util/Random";
const { ccclass, property } = _decorator;

@ccclass('EffectTab')
export class EffectTab extends PowerBase {
    powerType: tab.PowerType = tab.PowerType.PowerType_EffectTable
    configTab: tab.EffectTable
    //---------------------配置字段-------------------
    Id: number // ID 
    EffectType: tab.AttrType // 效果类型 
    Parameters: number[] // 效果参数 
    RandomWave: number[] // 效果基础值波动参数 
    //---------------------自有字段-------------------
    parm: number = 0

    setConfigId(id: number) {
        super.setConfigId(id)
        this.random()
    }

    /** 随机属性
     * 只有buff添加到人身上时会重新随机
     */
    random() {
        this.parm = this.Parameters[0]
        if (this.RandomWave.length > 0) {
            this.parm = Random.getRandomInt(this.parm + this.RandomWave[0], this.parm + this.RandomWave[1] + 1)
        }
    }

}
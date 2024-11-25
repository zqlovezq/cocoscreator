import { _decorator, Component } from "cc";
import { tab } from "../../../../Table/table_gen";
import { PowerBase } from "./PowerBase";

const { ccclass, property } = _decorator;

@ccclass('BoundsTab')
export class BoundsTab {
    configId: number = 0;
    configTab: tab.BoundTable
    //---------------------配置字段-------------------
    Type: tab.BoundType // 类型 
    Parameters: number[] = []
    //---------------------自有字段-------------------

    constructor(id: number) {
        this.setConfigId(id)
    }

    setConfigId(id: number) {
        this.configId = id
        this.configTab = tab.getData().BoundTableById.getValue(id)
        this.Type = this.configTab.Type
        for (let index = 0; index < this.configTab.Parameters.length; index++) {
            this.Parameters[index] = this.configTab.Parameters[index]
        }
    }
}
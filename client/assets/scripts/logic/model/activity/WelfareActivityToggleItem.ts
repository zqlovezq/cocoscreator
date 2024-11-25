import { _decorator, Component, Enum, Node, Toggle } from 'cc';
import { tab } from '../../../Table/table_gen';

const { ccclass, property } = _decorator;

/**
 * 
 * WelfareActivityToggle
 * zhudingchao
 * Tue Jun 25 2024 16:55:56 GMT+0800 (中国标准时间)
 * db://assets/gameRes/prefab/activity/WelfareActivityToggle.ts
 *
 */

@ccclass('WelfareActivityToggleItem')
export class WelfareActivityToggleItem extends Component {
    @property({
        type: Enum(tab.OpenFunctionName),
        tooltip: "功能枚举"
    })
    opName: tab.OpenFunctionName = tab.OpenFunctionName.OpenFunctionName_None;
    @property(Node)
    redPoint:Node=null;
    public index:number;

    updateRedPoint(){

    }
}
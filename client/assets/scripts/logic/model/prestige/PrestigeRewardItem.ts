import { _decorator, Component, Node } from 'cc';
import { ComponentBase } from '../../../framework/base/ComponentBase';
const { ccclass, property } = _decorator;

/**
 * 
 * PrestigeRewardItem
 * zhudingchao
 * Thu Jun 06 2024 10:13:55 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/prestige/PrestigeRewardItem.ts
 *
 */

@ccclass('PrestigeRewardItem')
export class PrestigeRewardItem extends ComponentBase {
    @property(Node)
    itemNode:Node=null;
    @property(Node)
    obtainedNode:Node=null;
    @property(Node)
    recevieNode:Node=null;
    @property(Node)
    lockNode:Node=null;
    register(): void {
        
    }
}
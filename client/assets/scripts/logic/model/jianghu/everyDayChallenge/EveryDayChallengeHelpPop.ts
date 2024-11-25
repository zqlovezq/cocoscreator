import { _decorator, Component, Label, Node } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { GameplayViewDataMgr } from '../GameplayViewDataMgr';
import { tab } from '../../../../Table/table_gen';
import { GameUtil } from '../../../utils/GameUtil';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * EveryDayChallengeHelpPop
 * zhudingchao
 * Wed Jul 10 2024 19:22:53 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/everyDayChallenge/EveryDayChallengeHelpPop.ts
 *
 */

@ccclass('EveryDayChallengeHelpPop')
export class EveryDayChallengeHelpPop extends ViewPop {
    @property(Node)
    nextRewardNode: Node = null;
    @property(Node)
    currContent: Node = null;
    @property(Node)
    nextContent: Node = null;
    @property(Label)
    currLevelLab: Label = null;
    @property(Label)
    nextLevelLab: Label = null;

    register(): void {
        
    }

    onShow(): void {
        // let 
        let currLevel = GameplayViewDataMgr.ins.dailyChallengeDataMsg.level;
        let nextLevel = currLevel + 1;
        let currTable = tab.getData().DailyChallengeLevelTableByLevel.getValue(currLevel);
        let nextTable = tab.getData().DailyChallengeLevelTableByLevel.getValue(nextLevel);
        this.currLevelLab.string = currTable.Level + ""
        let rewards1 = [];
        for (let key in currTable.DropId) {
            let arr = GameUtil.getRewardsByDropId(currTable.DropId[key]);
            rewards1 = GameUtil.itemsAddItems(rewards1, arr);
        }
        for (let key in rewards1) {
            ItemPoolMgr.ins.createRewadItem(rewards1[key], this.currContent);
        }
        if (nextTable) {
            let rewards2 = [];
             this.nextLevelLab.string = nextTable.Level + ""
            for (let key in nextTable.DropId) {
                let arr = GameUtil.getRewardsByDropId(nextTable.DropId[key]);
                rewards2 = GameUtil.itemsAddItems(rewards2, arr);
            }
            for (let key in rewards2) {
                ItemPoolMgr.ins.createRewadItem(rewards2[key], this.nextContent);
            }
        }else{
            this.nextRewardNode.active=false;
        }
    }
}
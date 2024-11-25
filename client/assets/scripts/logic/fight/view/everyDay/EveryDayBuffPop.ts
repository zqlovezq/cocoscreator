import { _decorator, Component, instantiate, Label, Node, Sprite, Vec3 } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { FightData } from '../../data/FightData';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * EveryDayBuffPop
 * zhudingchao
 * Fri Aug 09 2024 16:19:31 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/fight/view/everyDay/EveryDayBuffPop.ts
 *
 */

@ccclass('EveryDayBuffPop')
export class EveryDayBuffPop extends ViewPop {
    @property(Node)
    everyParentNode: Node = null
    @property(Node)
    everyNode: Node = null


    register() {

    }
    onShow(): void {
        let buffList = FightData.ins.fightInfo.bufferList;
        for (let key in buffList) {

            let pveBuffTable = tab.getData().PveStageBuffTableById.getValue(buffList[key]);
            if (pveBuffTable.ShowIcon != "") {
                let node1 = instantiate(this.everyNode)
                node1.setPosition(Vec3.ZERO)
                node1.active = true
                this.everyParentNode.addChild(node1)
                let sprite = node1.getChildByName("icon").getComponent(Sprite);
                sprite.setTexture(pveBuffTable.ShowIcon);
                node1.getChildByName("boxscore_txt").getComponent(Label).string = LangMgr.getLab(pveBuffTable.Show);
            }

        }
    }
}
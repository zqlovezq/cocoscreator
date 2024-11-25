import { _decorator, Tween, Vec3, Node, tween, v3, CCFloat, Component } from 'cc';
import { RoleData } from '../role/RoleData';
import { tab } from '../../../Table/table_gen';
const { ccclass, property } = _decorator;



@ccclass('PowerDifficultyTag')
export class PowerDifficultyTag extends Component {

    @property([Node])
    nodes: Node[] = []

    stageId: number = 0
    setPower(power: number, recommendPower: number) {
        let a = power / recommendPower
        // console.log(power, recommendPower, a)
        let idx = 0
        if (a >= tab.getData().GetKeyValue_ConfigTable().PveStageDifficultyTag[0]) {
            idx = 0
        } else if (tab.getData().GetKeyValue_ConfigTable().PveStageDifficultyTag[1] < a && a < tab.getData().GetKeyValue_ConfigTable().PveStageDifficultyTag[0]) {
            idx = 1
        } else {
            idx = 2
        }
        for (let index = 0; index < this.nodes.length; index++) {
            const element = this.nodes[index];
            element.active = idx == index
        }
    }

    setStageId(stageId: number) {
        if (this.stageId == stageId) {
            return
        }
        this.stageId = stageId
        this.setPower(RoleData.ins.powerScore, tab.getData().PveStageTableByStageId.getValue(this.stageId).RecommendFight)
    }
}

import { _decorator, Component, Prefab } from "cc";
import { FightUITeamItem } from "./FightUITeamItem";

const { ccclass, property } = _decorator;

/** 战斗界面显示的头像 */
@ccclass('FightUITeam')
export class FightUITeam extends Component {
    heads: FightUITeamItem[] = [];
    protected onLoad(): void {
        for (let index = 0; index < this.node.children.length; index++) {
            const v = this.node.children[index];
            v.active = false
            this.heads.push(v.getComponent(FightUITeamItem));
        }
    }

    getFree() {
        for (let index = 0; index < this.heads.length; index++) {
            const v = this.heads[index];
            if (v.roleInfo == null) {
                return v
            }
        }
        return null
    }

}
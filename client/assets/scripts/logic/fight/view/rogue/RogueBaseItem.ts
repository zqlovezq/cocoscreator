import { _decorator, Component, Label, sp, Sprite, Animation } from "cc";
import { RogueInfo } from "./RogueInfo";
import { tab } from "../../../../Table/table_gen";
import { ResMgr } from "../../../mgr/ResMgr";
import { LangMgr } from "../../../mgr/LangMgr";
import { RoguePop } from "./RoguePop";
import { PlayerControl } from "../../base/obj/role/role/PlayerControl";

const { ccclass, property } = _decorator;


@ccclass('RogueBaseItem')
export class RogueBaseItem extends Component {
    owner: RoguePop
    rogueInfo: RogueInfo

    setOwner(_owner) {
        this.owner = _owner
    }

    setData(info: RogueInfo) {
        this.rogueInfo = info
    }

    onClick() {
        this.owner && this.owner.onItemClick(this.rogueInfo)
    }
    setStar(star: number) {
        const recommend_node = this.node.getChildByName("recommend_node");
        if (!recommend_node) {
            return;
        }
        recommend_node.active = true;
        const layout = recommend_node.getChildByName("layout");
        const hideNode = layout.getChildByName("high_node");
        const midNode = layout.getChildByName("mid_node");
        const lowNode = layout.getChildByName("low_node");
        hideNode.active = star === 3;
        midNode.active = star === 2;
        lowNode.active = star === 1;
    }
    showChoose() {
        const anim = this.node.children[0].getComponent(Animation);
        if (anim) {
            anim.play(anim.defaultClip.name);
        } else {
            if (this.node.children[0] && this.node.children[0].children[0]) {
                const weaponAnim = this.node.children[0].children[0].children[0].getComponent(Animation);
                if (weaponAnim) {
                    weaponAnim.play(weaponAnim.defaultClip.name);
                }
            }
        }
    }
}
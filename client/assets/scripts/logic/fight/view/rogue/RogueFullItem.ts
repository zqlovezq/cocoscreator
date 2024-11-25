import { _decorator, Component, Label, Node, RichText, sp, Sprite } from "cc";
import { RogueInfo } from "./RogueInfo";
import { tab } from "../../../../Table/table_gen";
import { ResMgr } from "../../../mgr/ResMgr";
import { LangMgr } from "../../../mgr/LangMgr";
import { RoguePop } from "./RoguePop";
import { RogueControl } from "./RogueControl";

const { ccclass, property } = _decorator;


@ccclass('RogueWeaponHeroItem')
export class RogueWeaponHeroItem extends Component {

    

    owner: RoguePop
    rogueInfo: RogueInfo

    setData(info: RogueInfo) {
        this.rogueInfo = info

    }
    
}
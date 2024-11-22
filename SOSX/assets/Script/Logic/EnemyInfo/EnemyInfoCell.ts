
import { tab } from "../../Table/table_gen";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { CreateSpine } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyInfoCell extends InfiniteCell {

    @property(cc.Label)
    name1: cc.Label = null 
 
    @property(cc.Label)
    detail: cc.Label = null
 
    @property(cc.Sprite)
    icon: cc.Sprite = null
 
    @property(cc.Sprite)
    spinenode: cc.Sprite = null

    UpdateContent(data:tab.EnemyOnlyShowTable){
        this.name1.string = data.Name1
        this.detail.string = data.EnemyDesc
        this.icon.setTexture(data.Icon)

        this.spinenode.setTexture(data.pating)
    }

    start () {

    }
}


import { tab } from "../../Table/table_gen";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { CreateSpine, setTextWithAction } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyBossInfoCell extends InfiniteCell {

   @property(cc.Label)
   name1: cc.Label = null

   @property(cc.Label)
   name2: cc.Label = null

   @property(cc.Label)
   detail: cc.Label = null

   @property(cc.Sprite)
   icon: cc.Sprite = null

   @property(cc.Sprite)
   spinenode: cc.Sprite = null

    UpdateContent(data:tab.EnemyOnlyShowTable){
        this.name1.string = data.Name1
        this.name2.string = data.Name2
        this.detail.string = data.EnemyDesc
        this.icon.setTexture(data.Icon)

        this.spinenode.setTexture(data.pating)        
    }

    start () {

    }

}

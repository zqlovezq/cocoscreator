import { tab } from "../../Table/table_gen";
import { LoadResAsync } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MediumPortrait extends cc.Component {

    @property(cc.Sprite)
    spPortrait: cc.Sprite = null;

    start () {

    }

    async setData(itemId:number) {
        let itemTbl:tab.ItemTable = tab.Data.ItemTableByID.getValue(itemId);
        if(!itemTbl) {
            throw `cannot find ItemTable by id ${itemId}`;
        }

        let sf = await LoadResAsync(itemTbl.Icon, cc.SpriteFrame);
        if(cc.isValid(this.node)) {
            this.spPortrait.spriteFrame = sf;
        }
    }

    setClickCallback(cb: Function) {
        this.node.on(cc.Node.EventType.TOUCH_END, cb, this)
    }
}

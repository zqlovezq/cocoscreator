/*
 * @Descripttion: 
 */
import { tab } from "../../Table/table_gen";
import { CreateSpine, LoadResAsync } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FightEmoji extends cc.Component {
    @property(cc.Node)
    nodeIcon:cc.Node = null;

    protected emojiID:number;
    protected clickCallback:Function = null;

    async setData(id:number, callback:Function) {
        this.emojiID = id;
        this.clickCallback = callback;
        this.nodeIcon.removeAllChildren();
        let emojiData = tab.Data.EmojiTableByID.getValue(id)
        if(emojiData) {
            let spine = await CreateSpine(emojiData.SpineID)
            spine.node.scale = 1;
            this.nodeIcon.addChild(spine.node)
            spine.setAnimation(0, "idle", true)
        }
    }

    start () {
        this.node.on(cc.Node.EventType.TOUCH_END, ()=>{
            if(this.clickCallback) {
                this.clickCallback(this.emojiID)
            }
        }, this)
    }
}
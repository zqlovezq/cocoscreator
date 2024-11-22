/*
 * @Descripttion: 
 */

import { tab } from "../../Table/table_gen";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PveRewardTips extends cc.Component {

    @property(cc.Label)
    lblGold: cc.Label = null;

    @property(cc.Node)
    rootNode:cc.Node = null;

    setData(gold:number, worldPos:cc.Vec2) {
        this.lblGold.string = `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${gold}`
        this.rootNode.setPosition(this.node.convertToNodeSpaceAR(worldPos))
    }

    start () {
        this.node.on(cc.Node.EventType.TOUCH_START, ()=>{
            this.node.destroy()
        }, this)

        let node:any = this.node //这样写只写为了别让ts提示错误
        if(node._touchListener) {
            node._touchListener.setSwallowTouches(false)
        }
    }
}

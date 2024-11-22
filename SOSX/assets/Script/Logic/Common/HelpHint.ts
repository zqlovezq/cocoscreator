
import { tab } from "../../Table/table_gen";
import { LoadResAsync } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HelpHint extends cc.Component {

    @property(cc.RichText)
    lblHint: cc.RichText = null;

    @property(cc.Node)
    rootNode:cc.Node = null;

    static async show(id:number, worldPos:cc.Vec2, anchor?:cc.Vec2) {
        let hintPrefab:cc.Prefab = await LoadResAsync("prefab/HelpHint", cc.Prefab)
        if(hintPrefab) {
            let hint = cc.instantiate(hintPrefab).getComponent(HelpHint)
            if(hint) {
                hint.setData(id)
                hint.rootNode.setPosition(hint.node.convertToNodeSpaceAR(worldPos))
                cc.director.getScene().addChild(hint.node)
                if(anchor) {
                    hint.rootNode.setAnchorPoint(anchor)
                }
            }
        }
    }

    setData(id:number) {
        let hintData = tab.Data.HelpHintTableByID.getValue(id)
        if(!hintData) {
            return;
        }
        this.lblHint.string = hintData.Content;
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

import { Component, Node, Sprite, Vec2, _decorator } from "cc";
import { RedMgr } from "../../logic/mgr/RedMgr";
import RedEventComp from "./RedEventComp";

const { ccclass, property } = _decorator;

/**
 * 红点组件
 */
@ccclass
export default class RedComp extends Component {
    @property({ type: Node, displayName: "红点节点", tooltip: "可不填，空值默认创建" })
    redNode: Node = null
    @property({ tooltip: "位置偏移，统一为右上角标准做偏移" })
    posOffset: Vec2 = new Vec2()
    @property({
        type: [RedEventComp]
    })
    types: RedEventComp[] = [];

    protected onLoad(): void {
        this.addRed()
    }

    protected onDestroy(): void {
        this.removeRed()
    }

    removeRed() {
        RedMgr.remove(this.node)
    }

    addRed() {
        this.removeRed()
        for (let index = 0; index < this.types.length; index++) {
            const element = this.types[index];
            if (this.redNode) {
                RedMgr.add({ node: this.node, event: element.event, child: element.child, child1: element.child1, transform: { redNode: this.redNode, offset: this.posOffset } })
            } else {
                console.error("红点注册节点为空", element.event, this.node)
            }
        }
    }
}


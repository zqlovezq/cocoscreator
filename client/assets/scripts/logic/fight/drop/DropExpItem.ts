import { _decorator, Component, Layers, Node, Prefab, Sprite } from "cc";

const { ccclass, property } = _decorator;

/** 掉落经验 */
@ccclass('DropExpItem')
export class DropExpItem extends Component {
    static create() {
        let nn = new Node("DropExpItem")
        nn.addComponent(Sprite)
        let comp = nn.addComponent(DropExpItem)
        return comp
    }

    exp: number = 0
    setExp() {
        
    }
}
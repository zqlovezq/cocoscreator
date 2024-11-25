import { _decorator, Component, Layers, Node, v3 } from "cc";
import { AbsRole } from "../obj/role/AbsRole";
import { Avatar } from "../../animation/Avatar";
import { AbsObj } from "../obj/AbsObj";
import { EffectUI } from "./EffectUI";

const { ccclass, property } = _decorator;

/** 死亡特效  游魂 */
@ccclass('DeadEffectUI')
export class DeadEffectUI extends Component {
    static create() {
        let nn = new Node("DeadEffectUI");
        nn.layer = Layers.Enum.DEFAULT
        return nn.addComponent(DeadEffectUI)
    }

    index: number = 0
    ids: number[]
    effectUi: EffectUI

    abs: AbsRole
    setAbs(_abs: AbsRole) {
        this.abs = _abs
    }

    setAnimIds(_ids: number[]) {
        this.ids = _ids
        this.index = 0
        this.runNext()
    }

    runNext() {
        if (this.index >= this.ids.length) {
            this.node.destroy()
            return
        }
        let id = this.ids[this.index]
        this.run(id)
        this.index++
    }

    run(animId: number) {
        this.effectUi = EffectUI.create()
        this.effectUi.node.parent = this.node
        this.effectUi.node.position = v3()
        this.effectUi.run(animId, () => {
            this.effectUi = null
            this.runNext()
        })
    }

    remove() {
        if (this.effectUi && this.effectUi.isValid) {
            this.effectUi.remove()
        }
        this.node.destroy()
    }


}
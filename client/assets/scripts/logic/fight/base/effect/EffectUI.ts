import { _decorator, Component, Layers, Node } from "cc";
import { AbsRole } from "../obj/role/AbsRole";
import { Avatar } from "../../animation/Avatar";
import { AbsObj } from "../obj/AbsObj";

const { ccclass, property } = _decorator;

@ccclass('EffectUI')
export class EffectUI extends Component {
    static effects: EffectUI[] = [];

    static create() {
        let anim = EffectUI.effects.pop()
        if (anim == null) {
            let nn = new Node("EffectUI");
            nn.layer = Layers.Enum.DEFAULT
            anim = nn.addComponent(EffectUI)
        }
        anim.node.angle = 0
        return anim
    }

    static put(anim: EffectUI) {
        anim.node.removeFromParent()
        anim.reset()
        EffectUI.effects.push(anim)
    }

    static destory() {
        for (let i = 0; i < EffectUI.effects.length; i++) {
            EffectUI.effects[i].node.destroy()
        }
        EffectUI.effects.length = 0
    }

    reset() {
        if (this.avatar && this.avatar.isValid){
            this.avatar.recycle()
        }
        
        this.avatar = null
    }

    avatar: Avatar = null;
    run(animId: number, cb?: Function) {
        this.avatar = Avatar.create()
        this.node.addChild(this.avatar.node)
        this.avatar.setCb(() => {
            this.remove()
            cb && cb()
        })
        this.avatar.setAnimationId(animId)
    }

    remove() {
        EffectUI.put(this)
    }

}
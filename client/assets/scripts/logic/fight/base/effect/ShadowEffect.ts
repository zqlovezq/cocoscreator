import { _decorator, Component, Layers, Node } from "cc";
import { AbsRole } from "../obj/role/AbsRole";
import { Avatar } from "../../animation/Avatar";
import { AbsObj } from "../obj/AbsObj";

const { ccclass, property } = _decorator;

@ccclass('ShadowEffect')
export class ShadowEffect extends Component {
    static effects: ShadowEffect[] = [];
    static create() {
        let anim = ShadowEffect.effects.pop()
        if (anim == null) {
            let nn = new Node("ShadowEffect");
            nn.layer = Layers.Enum.DEFAULT
            anim = nn.addComponent(ShadowEffect)
        }
        return anim
    }

    static put(effect: ShadowEffect) {
        effect.node.removeFromParent()
        effect.reset()
        ShadowEffect.effects.push(effect)
    }
    /** 销毁 */
    static destory() {
        for (let i = 0; i < ShadowEffect.effects.length; i++) {
            ShadowEffect.effects[i].node.destroy()
        }
        ShadowEffect.effects.length = 0
    }



    reset() {
        this.avatar.recycle()
        this.avatar = null
    }

    avatar: Avatar = null;
    run(animId: number) {
        this.avatar = Avatar.create()
        this.node.addChild(this.avatar.node)
        this.avatar.setAnimationId(animId)
    }

    recycle() {
        ShadowEffect.put(this)
    }
}
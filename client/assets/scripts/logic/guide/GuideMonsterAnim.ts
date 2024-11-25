import { _decorator, Component, Layers, log, Node, Sprite, Animation } from 'cc';
import { Avatar } from '../fight/animation/Avatar';
import { ResMgr } from '../mgr/ResMgr';
import { createAnimation } from '../utils/GameUtil';
const { ccclass, property } = _decorator;

@ccclass('GuideMonsterAnim')
export class GuideMonsterAnim extends Component {
    protected onLoad(): void {
        createAnimation(this.node, Number(this.node.name));
    }
    protected onDisable(): void {
        if(this.node.getComponent(Sprite)){
            const sprite = this.node.getComponent(Sprite);
            sprite.spriteFrame = null;
        }
        if(this.node.getComponent(Animation)){
            const anim = this.node.getComponent(Animation)
            const animName = anim.defaultClip.name;
            const animState = anim.getState(animName)
            animState.stop();
        }
    }
}



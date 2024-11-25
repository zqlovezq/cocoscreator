import { _decorator, Component, isValid, Node, sp, SpriteFrame, Animation, Sprite, log } from 'cc';
import { LoadResAsync } from '../../mgr/ResMgr';
import { createAnimation } from '../../utils/GameUtil';
import { ComponentBase } from '../../../framework/base/ComponentBase';
const { ccclass, property } = _decorator;

@ccclass('HeroStar')
export class HeroStar extends ComponentBase {
    // @property(Node)
    // node_star: Node = null;
    @property([Node])
    node_stars: Node[] = []
    /* 显示当前英雄的星级 */
    private star: number = 0;
    protected onLoad(): void {

    }
    public async showStar(star: number) {
        if(!this.isValid){
            return
        }
        if (this.enabled) {
            this.onDisable();
        }
        for (let i = 0; i < this.node_stars.length; i++) {
            let node = this.node_stars[i];
            const name = node.parent.name;
            let index = Number(name.charAt(name.length - 1));
            node.parent.active = index > (5 - (star % 5 === 0 ? 5 : star % 5));
            let level = Math.ceil(star / 5);
            const animId = 1000 + level;
            if (node.parent.active) {
                await createAnimation(node, animId);
            }
        }
    }
    public onDisable(): void {
        for (let i = 0; i < this.node_stars.length; i++) {
            const node = this.node_stars[i];
            if (node.getComponent(Animation)) {
                const anim = node.getComponent(Animation)
                if (anim.defaultClip) {
                    const animName = anim.defaultClip.name;
                    const animState = anim.getState(animName)
                    animState.stop();
                }
            }
        }
    }
}



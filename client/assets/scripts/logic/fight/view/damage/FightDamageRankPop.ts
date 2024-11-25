import { _decorator, Component, director, EditBox, EventTouch, game, instantiate, js, Label, Layers, Node, Size, Sprite, SpriteFrame, Toggle, Tween, tween, UIOpacity, UITransform, v2, v3, Vec3, view } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { FightDamageRankItem } from './FightDamageRankItem';
import { DamageStatisticsData, DamageStatisticsInfo } from '../../base/damage/DamageStatisticsData';
import { PlayerControl } from '../../base/obj/role/role/PlayerControl';

const { ccclass, property } = _decorator;

@ccclass('FightDamageRankPop')
export class FightDamageRankPop extends ViewPop {
    @property(Node)
    pop: Node = null
    @property(UITransform)
    bgNode:UITransform=null;

    @property(Node)
    heros: Node = null

    heroItems: FightDamageRankItem[] = []

    damageInfos: DamageStatisticsInfo[] = []

    protected onLoad(): void {
        for (let index = 0; index < this.heros.children.length; index++) {
            const v = this.heros.children[index];
            this.heroItems.push(v.getComponent(FightDamageRankItem))
        }

        this.schedule(() => {
            this.refresh()
        }, 0.5)
    }

    register(): void {

    }
    protected start(): void {
        let pos = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(this.openData.event.getUILocation().x, this.openData.event.getUILocation().y))
        pos.x + 50;
        if(pos.x+this.bgNode.width>view.getVisibleSize().width/2){
            pos.x=view.getVisibleSize().width/2-this.bgNode.width;
        }
        if(pos.y-this.bgNode.height<view.getVisibleSize().height/2){
            pos.y=-view.getVisibleSize().height/2+this.bgNode.height-50;
        }
        this.pop.position = pos
        this.refresh()
    }
    onShow(): void {


        let list = PlayerControl.ins.getIntoHeros()

        for (let index = 0; index < list.length; index++) {
            if (list[index].isIntoFight()) {
                this.damageInfos.push(DamageStatisticsData.ins.getRoleById(list[index].id))
            }
        }

        for (let index = 0; index < this.heroItems.length; index++) {
            const v = this.heroItems[index];
            if (list[index]) {
                v.node.active = true
                v.setData(list[index])
            } else {
                v.node.active = false
            }

        }
        this.refresh()
    }

    refresh() {
        let total = 0
        for (let index = 0; index < this.damageInfos.length; index++) {
            const v = this.damageInfos[index];
            total += v.damage
        }
        total = Math.max(total, 1)

        for (let index = 0; index < this.damageInfos.length; index++) {
            const v = this.damageInfos[index];
            if (this.heroItems[index]) {
                this.heroItems[index].setDamage(v.damage, total,v.secDamage)
            }

        }
    }
}

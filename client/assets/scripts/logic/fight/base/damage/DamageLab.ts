import { _decorator, Color, Component, director, Font, instantiate, Label, Layers, Node, Prefab, ResolutionPolicy, Tween, tween, Vec3, view } from 'cc';
import { FightRootControl } from '../../FightRootControl';
import { AbsObj } from '../obj/AbsObj';
import { CocosUtil } from '../../../utils/CocosUtil';
import { DamageData } from './DamageData';
import { ResMgr } from '../../../mgr/ResMgr';
import { FightData } from '../../data/FightData';
const { ccclass, property } = _decorator;


@ccclass('DamageLab')
export class DamageLab {
    //缓存池管理
    static pools: Array<Label> = [];
    static frameDatas: Array<DamageData> = [];

    static get() {
        let lab = this.pools.pop();
        if (!lab) {
            lab = new Node("damageNode").addComponent(Label)
        }
        return lab;
    }

    static put(lab: Label) {
        lab.node.parent = null
        DamageLab.pools.push(lab)
    }

    static destroy() {
        let child = FightRootControl.ins.getDamagesNode().children
        let len = child.length
        for (let i = len - 1; i >= 0; i--) {
            let v = child[i]
            Tween.stopAllByTarget(v)
            v.removeFromParent()
            DamageLab.put(v.getComponent(Label))
        }

        for (let index = 0; index < DamageLab.pools.length; index++) {
            const v = DamageLab.pools[index];
            v.destroy()
        }
        DamageLab.frameDatas.length = 0
        DamageLab.pools.length = 0
    }

    static addShowDamageNum(data: DamageData, b: AbsObj, frameIndex: number = 0) {
        if (!FightData.ins.isDamage() || data.damage == 0) {//不飘伤害，直接回收
            data.recycle()
            return
        }
        data.pos.x = b.getPosition().x + b.center.x
        data.pos.y = b.getPosition().y + b.center.y

        data.frameIndex = frameIndex


        if (frameIndex > 0) {
            if (frameIndex % 2 == 1) {
                data.pos.x -= frameIndex * 5
            }else{
                data.pos.x += frameIndex/2 * 5
            }
            setTimeout(() => {
                DamageLab.showDamageNum(data)
            }, frameIndex*200);
           
        } else {
            DamageLab.showDamageNum(data)
        }
      
    }

    static showDamageNum(data: DamageData) {
        let lab = DamageLab.get()
        lab.node.layer = Layers.Enum.DEFAULT
        lab.string = data.getShowStr()
        lab.fontSize = data.getColor().size || 20
        lab.font = ResMgr.get(data.getColor().path, Font)
        lab.spacingX = data.getColor().offsetx
        lab.node.position = data.pos
        lab.cacheMode = Label.CacheMode.BITMAP
        FightRootControl.ins.getDamagesNode().addChild(lab.node)
        data.recycle()

        tween(lab.node)
            .to(0.09, { scale: CocosUtil.v3(1.75) })
            .to(0.13, { scale: CocosUtil.v3(1) })
            .to(0.13, { scale: CocosUtil.v3(1.5) })
            .to(0.09, { scale: CocosUtil.v3(1) })
            .by(0.13, { position: CocosUtil.v3(0, 50, 0) })
            .call(() => {
                DamageLab.put(lab)
            })
            .start()
    }

    showCureNum(cureHp: number, isCritical: boolean) {

    }

}


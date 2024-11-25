import { _decorator, Animation, AnimationClip, Color, director, game, Graphics, instantiate, js, Label, Layers, Material, Node, Prefab, Rect, resources, sp, Sprite, SpriteAtlas, SpriteFrame, sys, Texture2D, v3 } from 'cc';
import { ViewPop } from '../../framework/base/ViewPop';
import { SceneMgr, ScenesName } from '../mgr/SceneMgr';
import { UIMgr } from '../mgr/UIMgr';
import { proto } from 'client_protocol';
import { MathAngle } from '../../framework/collision/Maths';
import { ViewName } from '../define/ViewDefine';
import { LoadResAsync, ResMgr } from '../mgr/ResMgr';
import { tab } from '../../Table/table_gen';
import { Field } from 'protobufjs';
import Fixed from '../../framework/collision/Fixed';
import { CommonTipsPop, CommonTipsPopCloseType } from './common/CommonTipsPop';
import { FPSAvatar } from '../fight/animation/FPSAvatar';
import { Loading } from './Loading';
import { Random } from '../fight/util/Random';
import { Bridge } from '../../framework/Bridge';
const { ccclass, property } = _decorator;

@ccclass('AzheGmPop')
export class AzheGmPop extends ViewPop {


    @property(Node)
    node1: Node = null
    @property(Node)
    node2: Node = null

    protected onLoad(): void {

        // this.spine.setCompleteListener((trackEntry) => {
        //     if (trackEntry.loop) {
        //         return
        //     }

        //     let name = trackEntry.animation ? trackEntry.animation.name : '';
        //     console.log("播放时间", name, new Date().getTime() - this.time)
        //     this.time = new Date().getTime()
        // })
    }

    register(): void {
    }
    protected update(dt: number): void {
        // let m1 = this.node1.getComponent(Sprite).getMaterialInstance(0)
        // m1.setProperty('u_time', game.totalTime * 0.001)
    }

    onClick1() {
        // Bridge.testCall()

        // UIMgr.ins.show({ viewName: ViewName.DynamicAtlas })
       

        


        // let m2 = this.node2.getComponent(Sprite).getMaterialInstance(0)
        // m2.setProperty('u_color', [0, 0, 0, 1])
        // m2.setProperty('u_rate', 0.6)
        // ResMgr.printCache()
        // Random.seed = 1720664297127
        // UIMgr.ins.show({ viewName: ViewName.ConfirmPop })
        // CommonTipsPop.create("ok", (closeType: CommonTipsPopCloseType) => {
        //     if (closeType == CommonTipsPopCloseType.confirm) {
        //         console.log("ok")
        //     } else {
        //         console.log("cancel")
        //     }
        // })
        // console.log(this.spine.skeletonData._skeletonCache.animations)
        // for (let index = 0; index < this.spine.skeletonData._skeletonCache.animations.length; index++) {
        //     const v = this.spine.skeletonData._skeletonCache.animations[index];
        //     console.log("动画", v.name, v.duration)
        // }
        // this.time = new Date().getTime()
        // this.spine.setAnimation(0, "action_dead", false);
        // this.spine.addAnimation(0, "action_born", false);
        // this.spine.addAnimation(0, "action_dead", false);
        // this.spine.addAnimation(0, "action_idle", false);
        // this.spine.addAnimation(0, "action_move", false);    
        // this.ava = FPSAvatar.get()
        // this.ava.node.layer = Layers.Enum.UI_2D
        // this.node.addChild(this.ava.node)
    }

    onClick2FightScene() {
        Bridge.testCallWithBack()
        // let list = []
        // for (let index = 0; index < 100; index++) {
        //     list.push(Random.getInt())
        // }
        // console.log(list)

        // Loading.create()
        // this.scheduleOnce(() => {
        //     Loading.hide()
        // }, 2)
    }

    hitColorFrame: number = 0
    onClick3DynamicAtlas() {
        // UIMgr.ins.show({ viewName: ViewName.DynamicAtlas })
        // console.log(this.spine.skeletonData._skeletonCache.animations)
        // console.log(this.spine.skeletonData.skeletonJson)
        // console.log(this.spine)
        // console.log(this.spine._cachedSockets.get("root/point_attack"))
        // console.log(this.spine._skeleton["_bones"][this.spine._cachedSockets.get("root/point_attack")])
        // console.log(this.spine.querySockets())

        this.loadSpriteFrame1()
    }

    async test() {
        this.test1()
    }

    test1() {

    }

    onClick4() {

    }

    onClick5() {
        this.spr.spriteFrame = null
        let path = "textrue/test/testbg"
        ResMgr.getBundle().release(path + "/spriteFrame", SpriteFrame)
        // let spf = this.spr.spriteFrame
        // if (spf) {
        //     this.spr.spriteFrame = null

        //     spf.decRef()
        //     console.log(spf)

        //     let path = "textrue/test/testbg"
        this.scheduleOnce(() => {
            console.log(ResMgr.get(path, SpriteFrame))
            console.log(ResMgr.get(path, Texture2D))
            // console.log(ResMgr.get(path, SpriteFrame))
        }, 2)
        // }
    }

    async loadSpriteFrame1() {
        if (this.spr.spriteFrame == null) {
            let path = "textrue/test/testbg"
            console.log(ResMgr.get(path, SpriteFrame))
            let sf: SpriteFrame = await LoadResAsync(path, SpriteFrame)
            sf.addRef()
            this.spr.spriteFrame = sf

            console.log(path, ResMgr.get(path, SpriteFrame), ResMgr.get(path, Texture2D))
        }
    }


}



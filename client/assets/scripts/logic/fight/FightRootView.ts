import { _decorator, Component, EventTouch, Game, game, input, Input, Layers, math, Node, Size, Sprite, SpriteFrame, Toggle, Tween, tween, UITransform, v2, v3, Vec2, Vec3, view } from 'cc';
import { ViewScreen } from '../../framework/base/ViewScreen';
import { PlayerControl } from './base/obj/role/role/PlayerControl';
import { FightEvent } from './define/FightEvent';
import { EventMgr } from '../mgr/EventMgr';
import { tab } from '../../Table/table_gen';
import { DropItem } from './drop/DropItem';
import { EffectUI } from './base/effect/EffectUI';
import { AbsRole } from './base/obj/role/AbsRole';
import { MathAngle, Vector2 } from '../../framework/collision/Maths';
import { Func } from '../utils/Func';
import { DeadEffectUI } from './base/effect/DeadEffectUI';
import { HoldTimeEffectUI } from './base/effect/HoldTimeEffectUI';
import { Role } from './base/obj/role/role/Role';
import { RoguePop } from './view/rogue/RoguePop';
import { DropControl } from './drop/DropControl';
import { FrameControl } from './base/frame/FrameControl';
import { AbsObjType } from './base/obj/AbsObj';
import { FightRenderSort } from './define/FightRenderSort';
import { FightData } from './data/FightData';
import { GuideController } from '../guide/GuideController';
import { LocalEvent } from '../define/LocalEvent';
import { BattleMainDataControl } from '../model/home/battle/BattleMainDataControl';
import { FightRootControl } from './FightRootControl';
import { FightMacro } from './define/FightDefine';
import { PvpRole } from './pvp/obj/PvpRole';
const { ccclass, property } = _decorator;
const tempPos = new Vec3()
@ccclass('FightRootView')
export class FightRootView extends ViewScreen {
    @property(Node)
    camera: Node = null; //跟随相机

    @property(Node)
    rootNode: Node = null

    @property(Sprite)
    mapSpr: Sprite = null

    @property(Node)
    linkNode: Node = null

    @property(Node)
    dropNode: Node = null; //掉落

    @property(Node)
    rolePosNode: Node = null

    @property(Node)
    objects: Node = null; //enemy 显示挂载点

    @property(Node)
    bulletHitEffect: Node = null; //子弹击中特效


    @property(Node)
    bullets: Node = null; //bullet 显示挂载点

    @property(Node) //英雄下层
    roleDown: Node = null

    @property(Node)//英雄上层
    roleUp: Node = null

    @property(Node)
    damages: Node = null; //伤害

    @property(Node)
    touchNode: Node = null; //伤害
    @property(Node)
    dropAnimNode: Node = null; //掉落动画
    @property(Node)
    drawLine: Node = null; //伤害


    public touchID: number = -1;
    private clickCount: number = 0;
    private clickTime: number = 0;

    protected onLoad(): void {
        super.onLoad()
        if (FightData.ins.isPvp) {
            this.mapSpr.node.scale = Vec3.ONE
        }
        this.mapSpr.setTexture(FightData.ins.stageTab.Background)

        if (FightData.ins.isPvp) {
            return
        }
        this.clickCount = 0;
        if (BattleMainDataControl.ins.getLastStageId() <= tab.getData().GetKeyValue_ConfigTable().TapTipsTimes[0]) {
            this.schedule(this.resetClickCount);
        }
    }

    register(): void {
        console.log("注册消息------")
        this.registerTouch()
        EventMgr.onFight(FightEvent.Fight_Drop_Item, this.onFight_Drop_Item, this)
        EventMgr.onFight(FightEvent.Fight_Drop_Item_Anim, this.onFight_Drop_Item_Anim, this)

        EventMgr.onFight(FightEvent.Fight_Drop_Remove_First, this.onFight_Drop_Remove_First, this)
        EventMgr.onFight(FightEvent.Hit_Effect_Add, this.onHit_Effect_Add, this)
        EventMgr.onFight(FightEvent.buff_link, this.onBuff_link, this)
        EventMgr.onFight(FightEvent.Sort_AbsRole, this.onSort_AbsRole, this)
        EventMgr.onFight(FightEvent.add_DeadEffect, this.onadd_DeadEffect, this)
        EventMgr.onFight(FightEvent.remove_DeadEffect, this.onremove_DeadEffect, this)
        EventMgr.onFight(FightEvent.Create_HoldTime_Effect, this.onCreate_HoldTime_Effect, this)
        EventMgr.onFight(FightEvent.Effect_Add_To_Layer, this.onEffect_Add_To_Layer, this)


    }

    addNode(nn: Node) {
        this.objects.addChild(nn);
    }

    getBullet(isBelow: boolean) {
        if (isBelow) {
            return this.roleDown
        }
        return this.bullets
    }


    registerTouch() {
        // input.on(Input.EventType.TOUCH_START, this.touchStart, this);
        // input.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        // input.on(Input.EventType.TOUCH_END, this.touchEnd, this);
        // input.on(Input.EventType.TOUCH_CANCEL, this.touchEnd, this);

        this.touchNode.on(Node.EventType.TOUCH_START, this.touchStart, this);
        this.touchNode.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.touchNode.on(Node.EventType.TOUCH_END, this.touchEnd, this);
        this.touchNode.on(Node.EventType.TOUCH_CANCEL, this.touchCancel, this);

        game.on(Game.EVENT_HIDE, () => {
            console.log("进入后台")
            this.cancelTouch()
        })

        game.on(Game.EVENT_SHOW, () => {
            console.log("进入前台")
            this.cancelTouch()
        })

    }
    resetClickCount(dt: number) {
        this.clickTime += (dt / FightData.ins.timeScale);
        if (this.clickTime >= 1) {
            if (this.clickCount >= tab.getData().GetKeyValue_ConfigTable().TapTipsTimes[1]) {
                // 显示提示tips
                FightRootControl.ins.getUIView().showTapTipsTimes();
            }
            this.clickCount = 0;
            this.clickTime = 0;
        }
    }
    touchStart(event: EventTouch) {
        if (this.touchID == -1) {
            this.touchID = event.getID();
        }

        if (this.touchID != event.getID()) return false;
        this.clickCount++;
        this.innerPosition(event.getUILocation())

        return true;
    }

    touchMove(event: EventTouch) {
        if (this.touchID != event.getID()) return false;

        this.innerPosition(event.getUILocation())

        return true;
    }

    touchEnd(event: EventTouch) {
        if (this.touchID != event.getID()) return false;
        // this.innerPosition(event.getUILocation())
        this.cancelTouch()
        return true;
    }

    touchCancel(event: EventTouch) {
        if (this.touchID != event.getID()) return false;
        // this.innerPosition(event.getUILocation())
        this.cancelTouch()
        return true;
    }

    cancelTouch() {
        this.touchID = -1;
        PlayerControl.ins.isClicking(false)
    }

    innerPosition(uiPos: Vec2) {
        // let clickPos = v3(uiPos.x, uiPos.y, 0)
        PlayerControl.ins.setClickWorldPos(uiPos.x, uiPos.y)
    }

    getRolePosByIndex(index: number) {
        return this.rolePosNode.children[index - 1].position;
    }

    //----------------回调---------------

    /** 普通掉落 */
    onFight_Drop_Item(dropItemId: number, position: Vec3) {

        let dropItem = DropItem.create()
        this.dropNode.addChild(dropItem.node)
        dropItem.setDropItemId(dropItemId)

        dropItem.setPos(position)
        if (FightData.ins.stageId === 1) {
            EventMgr.emitLocal(LocalEvent.JadeDrop);
            EventMgr.emitLocal(LocalEvent.JadeDropFinger)
        }
        if (DropControl.ins.audoDropCollect && this.dropNode.children.length == 1) {
            this.scheduleOnce(() => {
                RoguePop.create()
            }, 0.8)
        }
    }

    /** 普通掉落动画 */
    onFight_Drop_Item_Anim(animId: number, position: Vec3) {
        let nn = EffectUI.create()
        nn.node.parent = this.dropAnimNode
        nn.node.position = position || tempPos.set(Vec3.ZERO)
        nn.run(animId)
    }

    onFight_Drop_Remove_First() {
        if (this.dropNode.children.length) {
            (this.dropNode.children[0].getComponent(DropItem)).remove()
        }
    }

    onHit_Effect_Add(hitEffect: number[], startPos: Vec3, targetPos: Vec3) {
        for (let index = 0; index < hitEffect.length; index++) {
            let hitType = hitEffect[index];
            let hitAnimId = hitEffect[index + 1];
            let nn = EffectUI.create()
            nn.node.parent = this.bulletHitEffect
            if (hitType == 1) {
                nn.node.position = targetPos || tempPos.set(Vec3.ZERO)
                nn.run(hitAnimId)
            } else if (hitType == 2) {
                tempPos.x = (startPos.x + targetPos.x) / 2;
                tempPos.y = (startPos.y + targetPos.y) / 2;
                nn.node.position = tempPos
                nn.node.angle = MathAngle.posToAngle(startPos, targetPos)

                let lengthSqr = Vec3.distance(startPos, targetPos)
                nn.run(hitAnimId)
                if (nn.avatar && nn.avatar.fpsAvatar) {
                    nn.avatar.fpsAvatar.spr.sizeMode = Sprite.SizeMode.CUSTOM
                    nn.avatar.fpsAvatar.spr.getComponent(UITransform).width = lengthSqr
                }
            }
            index++
        }

    }

    onadd_DeadEffect(abs: AbsRole) {
        let nn = DeadEffectUI.create()
        nn.node.parent = this.bulletHitEffect
        nn.node.position = abs ? abs.getHitPos() : tempPos.set(Vec3.ZERO)
        nn.setAbs(abs)
        nn.setAnimIds(tab.getData().GetKeyValue_ConfigTable().Deatheffect)
    }

    onremove_DeadEffect(abs: AbsRole) {
        let list = this.bulletHitEffect.getComponentsInChildren(DeadEffectUI)
        for (let i = 0; i < list.length; i++) {
            let nn = list[i]
            if (nn.abs == abs) {
                nn.remove()
            }
        }
    }
    onCreate_HoldTime_Effect(abs: Role | PvpRole) {
        let nn = HoldTimeEffectUI.create()
        nn.node.parent = this.bulletHitEffect
        if (FightData.ins.isPvp) {
            nn.setAbsPvp(abs as PvpRole)
            return
        }
        this.scheduleOnce(() => {
            nn.setAbs(abs as Role)
        }, 0.1)
    }

    //buff伤害链接
    onBuff_link(roles: AbsRole[]) {
        this.linkNode.destroyAllChildren()

        for (let i = 0; i < roles.length; i++) {
            let now = roles[i]
            let next = roles[i + 1]
            if (next) {
                let nn = new Node("link")
                let uitrans = nn.addComponent(UITransform)
                nn.layer = Layers.Enum.DEFAULT
                nn.parent = this.linkNode
                uitrans.anchorX = 0

                let spr = nn.addComponent(Sprite)
                spr.setTexture("spine/bullet/boss_chain_1")
                spr.sizeMode = Sprite.SizeMode.CUSTOM
                spr.type = Sprite.Type.TILED

                nn.position = now.getHitPos()

                nn.angle = MathAngle.posToAngle(nn.position, next.getHitPos())

                uitrans.width = Vec3.distance(nn.position, next.getHitPos())
                uitrans.height = 32
            }
        }
    }

    onSort_AbsRole() {
        FightRenderSort.sort(this.objects, this.bullets)
    }

    getRendderCout() {
        let total = 0
        for (let index = 0; index < this.rootNode.children.length; index++) {
            const v = this.rootNode.children[index];
            total += v.children.length
        }
        return total - 5
    }

    onEffect_Add_To_Layer(layerType: string, nn: Node) {
        switch (layerType) {
            case "shadow":
                this.roleDown.addChild(nn)
                break;
            default:
                break;
        }
    }
}


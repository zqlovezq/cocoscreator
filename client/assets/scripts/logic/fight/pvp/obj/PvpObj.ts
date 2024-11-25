import { _decorator, ccenum, Component, UITransform, v3, Vec3, view } from 'cc';
import { MathAngle } from '../../../../framework/collision/Maths';
import { AbsMove } from '../../base/move/AbsMove';
import { Avatar } from '../../animation/Avatar';
import { EventMgr } from '../../../mgr/EventMgr';
import { FightEvent } from '../../define/FightEvent';
import { ShapeType } from '../../../../framework/collision/CollisionShape';
import { tab } from '../../../../Table/table_gen';
const { ccclass, property } = _decorator;

/** 战斗对象类型 */
export enum PvpObjType {
    /** 空 */
    default = 0,
    /** 角色 */
    role = 1,
    /** 子弹 */
    bullet = 2,
}
const tempPos = new Vec3()

@ccclass('PvpObj')
export class PvpObj extends Component {
    objId: number = 0
    objType: PvpObjType = PvpObjType.default
    velocity: Vec3 = new Vec3(); //当前速度
    voAngle: number = 0 //vo角度
    speed: number = 0
    isRecycle: boolean = false
    isDead: boolean = false
    center: Vec3 = new Vec3()
    configTab: any
    avatar: Avatar
    _animationId: number = 0

    onLoad() {
        this.node.addComponent(UITransform)

    }
    /** 回收 */
    recycle() {
        EventMgr.emitFight(FightEvent.Pvp_recycle, this)
    }
    reset() {
        this.avatar.recycle()
        this.avatar = null
        this._animationId = 0
        this.isDead = false
        this.velocity.set(Vec3.ZERO)
        this.voAngle = 0
        this.objId = 0
        this.center.set(Vec3.ZERO)
    }

    setBounds(ids: number[]) {
        let bound = tab.getData().BoundTableById.getValue(ids[0] || 1)
        if (bound.Type == tab.BoundType.BoundType_Circle) {
            this.center.x = bound.Parameters[0]
            this.center.y = bound.Parameters[1]
        } else if (bound.Type == tab.BoundType.BoundType_Rectangle) {
            this.center.x = bound.Parameters[0]
            this.center.y = bound.Parameters[1]

        }
    }


    //同步位置到body
    setPosition(position: Vec3) {
        this.node.position = position;
    }


    setAngle(angle: number) {
        this.node.angle = angle
    }

    addAngle(angle: number) {
        this.setAngle(this.node.angle + angle)
    }

    //同步缩放到body
    setScale(scale: Vec3) {
        this.node.scale = scale;
    }

    getRotation() { return this.node.rotation; }
    getPosition() { return this.node.position; }
    getScale() { return this.node.scale; }

    traceDirection(tmpstartPos: Vec3, tmptargetPos: Vec3) {
        Vec3.subtract(tempPos, tmptargetPos, tmpstartPos);
        tempPos.normalize()
        this.setVelocity(tempPos)
    }

    init() {
        this.avatar = Avatar.create()
        this.node.addChild(this.avatar.node)
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
    }

    getVoAngle(): number {
        return this.voAngle
    }

    setVelocity(ve: Vec3) {
        this.voAngle = MathAngle.directionToAngle(ve)
        ve.multiplyScalar(this.speed)
        this.velocity.set(ve)
    }

    setVelocityAngle(angle: number) {
        this.voAngle = angle
        MathAngle.angleToDirection(angle, this.velocity)
        this.velocity.multiplyScalar(this.speed)
    }

    playAnim(animId: number, fb?: Function) {
        if (this._animationId == animId) {
            return
        }
        this._animationId = animId
        if (animId == 0) {
            fb && fb()
            return
        }
        this.avatar.setCb(fb)
        this.avatar.setAnimationId(animId)
    }

    updateFrame(dt: number) {

    }
}


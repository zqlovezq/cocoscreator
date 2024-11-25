import { Input, Layers, Node, PhysicsSystem, Prefab, Quat, UITransform, Vec3, _decorator, sp, v3 } from 'cc';
import { CollisionObject, Trigger } from '../../../../framework/collision/CollisionObject';
import { FightRootControl } from '../../FightRootControl';
import { StateMachine } from './state/StateMachine';
import { AbsStateType, DefaultState } from './state/AbsState';
import { Func } from '../../../utils/Func';
import { AbsMove } from '../move/AbsMove';
import Fixed from '../../../../framework/collision/Fixed';
import { tab } from '../../../../Table/table_gen';
import { ShapeType } from '../../../../framework/collision/CollisionShape';
import { Avatar } from '../../animation/Avatar';
import { AbsObjInfo } from './AbsObjInfo';

const { ccclass, property } = _decorator;

const tempPos = new Vec3();
const tempRot = new Quat();

/** 战斗对象类型 */
export enum AbsObjType {
    /** 空 */
    default = 0,
    /** 角色 */
    role = 1,
    /** 敌人 */
    enemy = 2,
    /** 子弹 */
    bullet = 3,
}

/**战斗对象 地图上 角色、怪物、子弹、掉落、障碍*/
@ccclass('AbsObj')
export class AbsObj extends CollisionObject {
    objType: AbsObjType = AbsObjType.default;

    objId: number = 0

    @property({ tooltip: '是否是预制体' })
    isPrefab: boolean = false

    @property({ tooltip: '是否使用预制体属性' })
    isPrefabProperty: boolean = false

    _isActive: boolean = true
    configId: number = 0;
    _isDead: boolean = false
    isDeadComplete: boolean = false

    avatar: Avatar
    _animationId: number = 0
    /** 状态机 */
    stateMachine: StateMachine
    /** 状态机对应的动画id */
    stateAnims: Map<AbsStateType, number>



    /** 最后伤害的角色 */
    endDamegeObj: AbsObj = null

    move: AbsMove
    info: AbsObjInfo

    /** 子对象数组 */
    childObj: AbsObj[] = []
    onLoad(): void {
        this.node.addComponent(UITransform)
    }

    getBodyId() {
        return this.body.id
    }


    addChildObj(obj: AbsObj) {
        this.childObj.push(obj)
    }

    getObjTypeZh() {
        return AbsObjType[this.objType]
    }

    isMonster() {
        return this.objType == AbsObjType.enemy
    }
    isRole() {
        return this.objType == AbsObjType.role
    }

    /** 初始化状态机 */
    initMachine() {
        if (this.stateMachine == null) {
            this.stateMachine = new StateMachine()
        }
        this.stateMachine.setAbs(this)
        this.stateMachine.run()

        this.avatar = Avatar.create()
        this.node.addChild(this.avatar.node)
        this.avatar.setCb((animName: string) => {
            this.avatarPlayComplete(animName)
        })
    }

    setStateAnimId(state: AbsStateType, animId: number) {
        this.stateAnims.set(state, animId)
    }

    changeState(sateType: AbsStateType) {
        this.stateMachine.changeState(sateType)
    }

    isState(state: AbsStateType) {
        return this.stateMachine.isState(state)
    }


    set animationId(id) {
        if (this._animationId == id) {
            return
        }
        this._animationId = id
        if (id == 0) {
            if (this.avatar) {
                this.avatar.reset()
            }
            return
        }
        this.avatar.setAnimationId(id)
        this.avatarUpdate()
    }

    avatarUpdate() {

    }

    get animationId() {
        return this._animationId
    }

    get isActive() {
        return this._isActive
    }

    set isActive(bo: boolean) {
        if (this._isActive == bo) {
            return
        }
        this._isActive = bo
        this.setTrigger(this._isActive)
        this.updateActive()
    }

    get isDead() {
        return this._isDead
    }

    set isDead(bo: boolean) {
        this._isDead = bo
        this.isDeadComplete = false
    }

    setTrigger(trigger: boolean) {
        super.setTrigger(trigger)
    }
    updateActive(bool?: boolean) {

    }


    setObjInfo(_info: AbsObjInfo) {
        this.info = _info
        this.info.setAbs(this)
        this.isDead = false
        this.stateAnims = new Map<AbsStateType, number>()
    }

    /** 回收 */
    recycle() {
        this.isDead = true
        super.recycle()
    }
    reset() {
        this.avatar.recycle()
        this.info.recycle()
        this.info = null
        this.avatar = null
        this.animationId = 0
        this.endDamegeObj = null
        super.reset()
    }

    addAnimation(trackIndex: number, animName: string, loop?: boolean): void {
        // this.avatar.addAnimation(trackIndex, animName, loop)
    }
    setAnimation(trackIndex: number, animName: string, loop?: boolean): void {
        // if (this.avatar.animation == animName) {
        //     return
        // }
        // this.avatar.setAnimation(trackIndex, animName, loop)
    }

    avatarPlayComplete(animName: string) {
        this.stateMachine.avatarPlayComplete(animName)
    }

    updateFrame(dt: number): void {
        this.info && this.info.updateFrame(dt)
        this.stateMachine.updateFrame(dt)
    }

    insertFrame() {
        FightRootControl.ins.addObj(this)
    }
    removeFrame(): void {
        FightRootControl.ins.removeObj(this)
    }

    onHitRole(defanseAbs: AbsObj) {
        // console.log(this.getObjTypeZh(), "onHitRole", defanseAbs.getObjTypeZh())
    }

    onDetectorToEnemy(abss: AbsObj[]) {

    }

    /** 移动完成 */
    onMoveComplete() {

    }

    setBounds(ids: number[]) {
        let bound = tab.getData().BoundTableById.getValue(ids[0] || 1)
        if (bound.Type == tab.BoundType.BoundType_Circle) {
            this.type = ShapeType.Sphere
            this.center.x = bound.Parameters[0]
            this.center.y = bound.Parameters[1]
            this.radius = bound.Parameters[2]
        } else if (bound.Type == tab.BoundType.BoundType_Rectangle) {
            this.type = ShapeType.Box
            this.center.x = bound.Parameters[0]
            this.center.y = bound.Parameters[1]
            this.size.x = bound.Parameters[2]
            this.size.y = bound.Parameters[3]
        }
    }

    traceDirection(tmpstartPos: Vec3, tmptargetPos: Vec3) {
        Vec3.subtract(tempPos, tmptargetPos, tmpstartPos);
        tempPos.normalize()
        this.setVelocityAndRatio(tempPos, 1)
    }

    initGraphics(): void {
        if (!FightRootControl.ins.isBound) {
            if (this.bobyGraphics) {
                this.bobyGraphics.clear()
            }
            return
        }
        if (this.isActive) {
            super.initGraphics()
        }
    }


    isCollisionInterval() {
        return false
    }

}

import { _decorator, CCInteger, Color, Component, game, instantiate, Label, Node, Prefab, Quat, Rect, sp, Sprite, tween, UITransform, Vec2, Vec3 } from 'cc';
import { AbsControl } from '../../../../framework/base/IAbs';
import { ColliderMgr } from '../../../../framework/collision/ColliderMgr';
import { AbsObj, AbsObjType } from '../obj/AbsObj';
import { EventMgr } from '../../../mgr/EventMgr';
import { Role } from '../obj/role/role/Role';
import Fixed from '../../../../framework/collision/Fixed';
import { RoleInfo } from '../obj/role/role/RoleInfo';
import { WaveTimeControl } from '../../wave/WaveTimeControl';
import { FightEvent } from '../../define/FightEvent';
import { AbsRole } from '../obj/role/AbsRole';
import { Bullet } from '../obj/bullet/Bullet';
import { IFightUpdate } from '../../define/FightDefine';
const { ccclass, property } = _decorator;

@ccclass('FrameControl')
export class FrameControl extends AbsControl implements IFightUpdate {
    private static _instance: FrameControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new FrameControl();
        }
        return this._instance;
    }

    private allAbsObj: Map<string, AbsObj[]> = new Map<string, AbsObj[]>()
    /** 根据唯一id记录 */
    private absAllMap: Map<number, AbsObj> = new Map<number, AbsObj>()

    /** 触碰间隔 */
    private intervalColliderAbss: AbsObj[] = []

    constructor() {
        super()
    }


    init(): void {
        this.register()
        this.allAbsObj.clear()
        this.absAllMap.clear()
        this.intervalColliderAbss.length = 0
        for (const key in AbsObjType) {
            if (typeof AbsObjType[key] == 'number') {
                this.allAbsObj.set(key, [])
            }
        }
        game.frameRate = 60
        FrameControl.frameIndex = 0
        FrameControl.sortIndex = 0
    }

    register(): void {
        EventMgr.onFight(FightEvent.Pause, this.onPause, this)
        EventMgr.onFight(FightEvent.Time_Scale, this.onTime_Scale, this)
        EventMgr.onFight(FightEvent.deal_clear_bullet, this.onDeal_clear_bullet, this)
        
    }

    onPause(bo: boolean) {
        this.updatePause(bo)
    }
    onTime_Scale(time: number) {
        this.updateTimeScale(time)
    }

    onDeal_clear_bullet(abs: AbsRole) {
        //刷新下子弹来源死亡
        let objList = this.getObjList(AbsObjType.bullet) as Bullet[]
        let len = objList.length
        for (let index = 0; index < len; index++) {
            const v = objList[index];
            if (v.owner.objId == abs.objId) {
                v.onOwnerDeal()
            }
        }
    }

    addObj(abs: AbsObj) {
        let objList = this.getObjList(abs.objType)
        objList.push(abs)
        this.absAllMap.set(abs.objId, abs)

        if (abs.isCollisionInterval()) {
            this.intervalColliderAbss.push(abs)
        }
    }

    removeCollisionInterval(abs: AbsObj) {
        if (abs.isCollisionInterval()) {
            let objList = this.intervalColliderAbss
            let len = objList.length
            for (let index = 0; index < len; index++) {
                const v = objList[index];
                if (v == abs) {
                    objList.splice(index, 1)
                    return true
                }
            }
        }
    }

    removeObj(abs: AbsObj) {
        let objList = this.getObjList(abs.objType)
        let len = objList.length
        this.absAllMap.delete(abs.objId)
        this.removeCollisionInterval(abs)
        for (let index = 0; index < len; index++) {
            const v = objList[index];
            if (v == abs) {
                objList.splice(index, 1)
                return true
            }
        }
        return false
    }

    getObjList(objType: AbsObjType) {
        return this.allAbsObj.get(AbsObjType[objType])
    }

    getObjById(objId: number) {
        return this.absAllMap.get(objId)
    }

    updateAllBound() {
        this.allAbsObj.forEach((list, k) => {
            let len = list.length

            for (let index = 0; index < len; index++) {
                const v = list[index];
                v.initGraphics()
            }
        })
    }

    dtTime: number = 0
    static frameIndex: number = 0
    static sortIndex: number = 0
    iFightUpdate(dt: number): void {
        FrameControl.frameIndex++

        this.updateFrame(dt)
        FrameControl.sortIndex++
        if (FrameControl.sortIndex >= 60) {
            FrameControl.sortIndex = 0
            EventMgr.emitFight(FightEvent.Sort_AbsRole)
        }
    }

    preCollider() {
        let objList = this.intervalColliderAbss
        let len = objList.length
        for (let index = 0; index < len; index++) {
            const v = objList[index];
            v && v.preCollider()
        }
    }
    lateCollider() {
        let objList = this.intervalColliderAbss
        let len = objList.length
        for (let index = 0; index < len; index++) {
            const v = objList[index];
            v && v.lateCollider()
        }
    }

    updateFrame(dt: number) {
        this.allAbsObj.forEach((v, k) => {
            this.absObjUpdateFrame(v, dt)
        })
    }

    absObjUpdateFrame(list: AbsObj[], dt: number) {
        let len = list.length

        for (let index = 0; index < len; index++) {
            const v = list[index];
            v && v.updateFrame(dt)
        }
    }

    updatePause(pause) {
        this.allAbsObj.forEach((list, k) => {
            let len = list.length

            for (let index = 0; index < len; index++) {
                const v = list[index];
                if (v && v.avatar) {
                    v.avatar.updatePause(pause)
                }
            }
        })
    }

    updateTimeScale(timeScale: number) {
        this.allAbsObj.forEach((list, k) => {
            let len = list.length

            for (let index = 0; index < len; index++) {
                const v = list[index];
                if (v && v.avatar) {
                    v.avatar.updateTimeScale()
                }
            }
        })
    }




    /** 根据指定类型获取是否全部死亡 */
    isAllDeadByObjType(absType: AbsObjType) {
        let list = this.getObjList(absType)
        let len = list.length
        for (let index = 0; index < len; index++) {
            const v = list[index];
            if (!v.isDead && v.isActive && !v.isDeadComplete) {
                return false
            }
        }
        return true
    }

    /** 回收全部对象 */
    recycleAll() {
        this.allAbsObj.forEach((v, k) => {
            let len = v.length
            for (let index = 0; index < len; index++) {
                const v1 = v[index];
                !v1.isRecycle && v1.recycle()
            }
        })
        this.absAllMap.clear()
    }

    getHasLen() {
        let len = 0
        this.allAbsObj.forEach((v, k) => {
            len += v.length
        })
        console.log("getHasLen", len,ColliderMgr.inst.getBodyLen())
        return len
    }


}


import { Input, Layers, Node, ObjectCurve, PhysicsSystem, Prefab, Quat, TiledUserNodeData, Vec3, _decorator, instantiate, sp, v3 } from 'cc';
import { PvpRole } from './PvpRole';
import { PvpBullet } from './PvpBullet';
import { PvpObj, PvpObjType } from './PvpObj';


const { ccclass, property } = _decorator;

/**战斗对象工厂 */
@ccclass('PvpObjFactory')
export class PvpObjFactory {

    static pools: Map<number, PvpObj[]> = new Map<number, PvpObj[]>()


    static init() {
        PvpObjFactory.getObjList(PvpObjType.role)
        PvpObjFactory.getObjList(PvpObjType.bullet)
    }

    static getRole(parent?: Node, args?: any): PvpRole {
        return PvpObjFactory.get(PvpObjType.role, parent, args) as PvpRole
    }


    static getBullet(parent?: Node, args?: any): PvpBullet {
        return PvpObjFactory.get(PvpObjType.bullet, parent, args) as PvpBullet
    }



    private static get(absType: PvpObjType, parent?: Node, args?: any) {
        let obj: PvpObj

        obj = PvpObjFactory.getObjList(absType).pop()
        if (obj == null) {
            if (absType === PvpObjType.role) {
                obj = new Node("Role").addComponent(PvpRole)
            } else if (absType == PvpObjType.bullet) {
                obj = new Node("bullet").addComponent(PvpBullet)
            }
        }


        obj.node.layer = Layers.Enum.DEFAULT
        obj.node.active = true
        if (parent) {
            parent.addChild(obj.node)
        } else {
            // FightRootControl.ins.getRootView().addNode(obj.node)
        }
        obj.setAngle(0)
        obj.setScale(Vec3.ONE)
        obj.isRecycle = false
        return obj
    }
    static getObjList(absType: PvpObjType): PvpObj[] {
        let absList = PvpObjFactory.pools.get(absType)
        if (absList == null) {
            absList = []
            PvpObjFactory.pools.set(absType, absList)
        }
        return absList
    }

    static put(obj: PvpObj) {
        if (obj == null || (obj && obj.isRecycle)) {
            return
        }
        obj.isRecycle = true
        obj.reset()
        obj.node.removeFromParent()
        PvpObjFactory.getObjList(obj.objType).push(obj)
    }

    /** 销毁对象池 */
    static destroy() {
        PvpObjFactory.pools.forEach((value, key) => {
            value.forEach((item) => {
                item.node.destroy()
            })
            value.length = 0
        })
    }

}

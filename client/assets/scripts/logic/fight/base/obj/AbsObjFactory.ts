import { Input, Layers, Node, ObjectCurve, PhysicsSystem, Prefab, Quat, TiledUserNodeData, Vec3, _decorator, instantiate, sp, v3 } from 'cc';
import { AbsObj, AbsObjType } from './AbsObj';
import { Bullet } from './bullet/Bullet';
import { Monster } from './role/monster/Monster';
import { Role } from './role/role/Role';
import { ResMgr } from '../../../mgr/ResMgr';
import { FightRootControl } from '../../FightRootControl';
import { AbsObjInfo } from './AbsObjInfo';
import { RoleInfo } from './role/role/RoleInfo';
import { MonsterInfo } from './role/monster/MonsterInfo';
import { BulletInfo } from './bullet/BulletInfo';
import { RedDotType } from '../../../red/RedDotType';

const { ccclass, property } = _decorator;

/**战斗对象工厂 */
@ccclass('AbsObjFactory')
export class AbsObjFactory {

    static pools: Map<number, AbsObj[]> = new Map<number, AbsObj[]>()
    static poolInfos: Map<number, AbsObjInfo[]> = new Map<number, AbsObjInfo[]>()

    static selfId: number

    static addSelfId() {
        AbsObjFactory.selfId += 1
        return AbsObjFactory.selfId
    }
    static init() {
        AbsObjFactory.selfId = 0
        AbsObjFactory.getObjList(AbsObjType.role)
        AbsObjFactory.getObjList(AbsObjType.enemy)
        AbsObjFactory.getObjList(AbsObjType.bullet)
    }

    static getRole(objInfo: AbsObjInfo, parent?: Node, args?: any): Role {
        return AbsObjFactory.get(AbsObjType.role, objInfo, parent, args) as Role
    }

    static getMonster(objInfo: AbsObjInfo, parent?: Node, args?: any): Monster {
        return AbsObjFactory.get(AbsObjType.enemy, objInfo, parent, args) as Monster
    }

    static getBullet(objInfo: AbsObjInfo, parent?: Node, args?: any): Bullet {
        return AbsObjFactory.get(AbsObjType.bullet, objInfo, parent, args) as Bullet
    }

    static getObjList(absType: AbsObjType): AbsObj[] {
        let absList = AbsObjFactory.pools.get(absType)
        if (absList == null) {
            absList = []
            AbsObjFactory.pools.set(absType, absList)
        }
        if (AbsObjFactory.selfId == 0){
            console.log("AbsObjFactory.getObjList == 0",absType,absList.length)
        }
        return absList
    }

    static getObjInfoList(absType: AbsObjType): AbsObjInfo[] {
        let absList = AbsObjFactory.poolInfos.get(absType)
        if (absList == null) {
            absList = []
            AbsObjFactory.poolInfos.set(absType, absList)
        }
        return absList
    }

    private static get(absType: AbsObjType, objInfo: AbsObjInfo, parent?: Node, args?: any) {
        let obj: AbsObj

        obj = AbsObjFactory.getObjList(absType).pop()
        if (obj == null) {
            if (absType === AbsObjType.role) {
                obj = new Node("Role").addComponent(Role)
            } else if (absType === AbsObjType.enemy) {
                obj = new Node("Monster").addComponent(Monster)
            } else if (absType == AbsObjType.bullet) {
                obj = new Node("bullet").addComponent(Bullet)
            }
        }


        obj.node.layer = Layers.Enum.DEFAULT
        obj.node.active = true
        if (parent) {
            parent.addChild(obj.node)
        } else {
            FightRootControl.ins.getRootView().addNode(obj.node)
        }
        obj.setAngle(0)
        obj.setScale(Vec3.ONE)
        obj.objId = AbsObjFactory.addSelfId()
        obj.isRecycle = false
        obj.setObjInfo(objInfo)
        obj.initMachine()
        obj.init()
        obj.insert()
        return obj
    }

    public static getData(absType: AbsObjType) {
        let objInfo: AbsObjInfo
        objInfo = AbsObjFactory.getObjInfoList(absType).pop()
        if (objInfo == null) {
            if (absType === AbsObjType.role) {
                objInfo = new RoleInfo()
            } else if (absType === AbsObjType.enemy) {
                objInfo = new MonsterInfo()
            } else if (absType == AbsObjType.bullet) {
                objInfo = new BulletInfo()
            }
        }
        objInfo.isRecycle = false
        return objInfo
    }

    static put(obj: AbsObj) {
        if (obj == null || (obj && obj.isRecycle)) {
            return
        }
        obj.isRecycle = true
        obj.reset()
        obj.node.removeFromParent()
        AbsObjFactory.getObjList(obj.objType).push(obj)
    }

    static putData(obj: AbsObjInfo) {
        obj.isRecycle = true
        obj.reset()
        AbsObjFactory.getObjInfoList(obj.objType).push(obj)
    }

    /** 销毁对象池 */
    static destroy() {

        AbsObjFactory.pools.forEach((value, key) => {
            value.forEach((item) => {
                item.node.destroy()
            })
            value.length = 0
        })
    }

}

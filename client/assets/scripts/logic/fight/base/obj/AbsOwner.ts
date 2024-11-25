import { Vec3, _decorator } from "cc";
import { FightAttrData } from "../../data/FightAttrData";
import { AbsObj, AbsObjType } from "./AbsObj";
import { FrameControl } from "../frame/FrameControl";
import { AbsRole } from "./role/AbsRole";

const { ccclass, property } = _decorator;

/** 归属
 * 子弹、buff，记录来源
 */
export class AbsOwner {

    static pool: AbsOwner[] = []

    static get(objId: number): AbsOwner {
        let owner
        if (this.pool.length > 0) {
            owner = this.pool.pop()
        } else {
            owner = new AbsOwner()
        }
        owner.setObjId(objId)
        return owner
    }

    static put(obj: AbsOwner) {
        obj.reset()
        this.pool.push(obj)
    }

    static destroy() {
        this.pool.length = 0
    }


    objId: number
    objType: AbsObjType
    isLock: boolean = false //锁定
    private attrData: FightAttrData

    abs: AbsRole

    constructor() {
    }

    setObjId(id: number) {
        this.objId = id
        this.isLock = false
        this.getObj()
        if (this.abs) {
            //初始化属性
            this.objType = this.abs.objType
        }
    }
    setOwner(owner: AbsOwner) {
        this.objId = owner.objId
        this.objType = owner.objType
        this.isLock = true
        this.attrCopy(owner.attrData)
    }
    attrCopy(attr: FightAttrData) {
        if (this.attrData == null) {
            this.attrData = new FightAttrData()
        }
        this.attrData.copy(attr)
    }

    lockAttr() {
        if (this.isLock) {
            return
        }
        this.isLock = true
        this.attrCopy(this.abs.info.attrData)
        this.abs = null
    }

    getAttrData() {
        if (this.isLock) {
            return this.attrData
        }
        if (this.abs) {
            return this.abs.info.attrData
        }
    }

    reset() {
        this.objId = 0
        this.objType = 0
        this.isLock = false
        this.abs = null
        if (this.attrData) {
            this.attrData.clear()
        }
    }

    recycle() {
        AbsOwner.put(this)
    }

    getObj() {
        if (this.abs == null) {
            this.abs = FrameControl.ins.getObjById(this.objId) as AbsRole
        }
        return this.abs
    }


}
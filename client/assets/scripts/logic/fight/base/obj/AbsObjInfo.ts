import { _decorator, Component } from "cc";
import { AbsObj, AbsObjType } from "./AbsObj";
import { AbsObjFactory } from "./AbsObjFactory";
import { EventMgr } from "../../../mgr/EventMgr";
import { FightData } from "../../data/FightData";

const { ccclass, property } = _decorator;
export enum AbsObjInfoAttr {
    //------------角色------------
    /** 命中次数 */
    hitCount = "hitCount",
    /** 弹射次数 */
    catapultCount = "catapultCount",
    /** 蓄力时间 */
    holdTime = "holdTime",
    /** 总累计损失生命比例 */
    totalLossHpPer = "totalLossHpPer",
    /** 每累计损失生命比例 */
    EverylHpLostPe = "EverylHpLostPe",

    //------------子弹------------
    /** 是否为正向剑 */
    isForwardArrow = "isForwardArrow",
    /** 多向剑Y偏移 */
    forwardArrowOffsetY = "forwardArrowOffsetY",

    /** 子弹类型组id */
    bulletGroupId = "bulletGroupId",
}

@ccclass('AbsObjInfo')
export class AbsObjInfo {
    objType: AbsObjType = AbsObjType.default;
    abs: AbsObj
    isRecycle: boolean = false
    configId: number
    configTab: any

    private clientAttr: Map<AbsObjInfoAttr, number> = new Map() //子弹属性 各种次数增加

    destroy() {
        this.abs = null
        this.configTab = null
        this.clientAttr.clear()
    }

    /** 回收 */
    recycle() {
        AbsObjFactory.putData(this)
    }
    reset() {
        this.clientAttr.clear()
        this.abs = null
        this.configId = 0
        this.configTab = null
    }
    setAbs(_abs: AbsObj) {
        this.abs = _abs
    }

    setConfigId(id: number) {
        this.configId = id

    }

    protected setConfigTab(conf: any) {
        this.configTab = conf
    }

    init() {

    }
    updateFrame(dt: number) {

    }

    /** 属性设置 */
    setObjAttr(key: AbsObjInfoAttr, count: number = 0) {
        if (key == AbsObjInfoAttr.holdTime) {
            count = FightData.time
        }
        this.clientAttr.set(key, count)
    }

    /** 属性增加 */
    addObjAttr(key: AbsObjInfoAttr, addCount: number = 0) {
        this.clientAttr.set(key, this.getObjAttr(key) + addCount)
    }

    /** 获取属性 */
    getObjAttr(key: AbsObjInfoAttr): number {
        if (!this.clientAttr.has(key)) {
            this.setObjAttr(key, 0)
        }
        return this.clientAttr.get(key)
    }

    clearObjAttr(key: AbsObjInfoAttr) {
        this.setObjAttr(key, 0)
    }
}
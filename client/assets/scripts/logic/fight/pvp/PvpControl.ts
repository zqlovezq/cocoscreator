import { _decorator, ccenum, Mask, Node, UITransform, v3, Vec3, view } from "cc";
import { AbsControl, IClear } from "../../../framework/base/IAbs";
import { tab } from "../../../Table/table_gen";
import { EventMgr } from "../../mgr/EventMgr";
import { FightEvent } from "../define/FightEvent";
import { FightMacro, IFightUpdate } from "../define/FightDefine";
import { FightRootControl, FightState } from "../FightRootControl";
import { PvpObj, PvpObjType } from "./obj/PvpObj";
import { proto } from "client_protocol";
import { PvpRole } from "./obj/PvpRole";
import { FightData } from "../data/FightData";
import { Func } from "../../utils/Func";
import { PvpObjFactory } from "./obj/PvpObjFactory";
import { BuffUI } from "../base/buff/BuffUI";
import { PvpBullet } from "./obj/PvpBullet";
import { DamageData } from "../base/damage/DamageData";
import { DamageLab } from "../base/damage/DamageLab";
import { ConfirmPop } from "../../model/confirm/ConfirmPop";
import { LangMgr } from "../../mgr/LangMgr";
import { CommonTipsPop } from "../../model/common/CommonTipsPop";
import { PvpDrawLine } from "./PvpDrawLine";
import { PvpMoveCircle, PvpMoveLine } from "./move/PvpMove";
import { FightMsgControl } from "../FightMsgControl";
import { ViewName } from "../../define/ViewDefine";
import { UIMgr } from "../../mgr/UIMgr";

const { ccclass, property } = _decorator;

const tempPos = new Vec3()
const owner: { abs: PvpRole, target: PvpRole } = { abs: null, target: null }
const ownerBullet: { abs: PvpBullet } = { abs: null }
const maxDelayTime = 2000

class PvpLineData {
    public timestamp: number = 0
    public points: Array<number[]> = []
    constructor(timestamp: number, points: number[]) {
        this.timestamp = timestamp
        this.points = []
        this.points.push(points)
    }
}

/** PVP控制器 */
export class PvpControl extends AbsControl implements IClear, IFightUpdate {

    private static _instance: PvpControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new PvpControl();
        }
        return this._instance;
    }

    private allAbsObj: Map<number, PvpObj[]> = new Map<number, PvpObj[]>()
    /** 根据唯一id记录 */
    private absAllMap: Map<number, PvpObj> = new Map<number, PvpObj>()
    delayTime: number = 0
    time: number = 0
    executeEvIndex: number = 0
    fightFlow: proto.FightFlow[] = []
    dataPause: boolean = true
    pvpLine: PvpDrawLine = new PvpDrawLine()

    private lineList: PvpLineData[] = []
    private lineListIdx: number = 0

    purge(): void {
        this.dataPause = true
        this.time = 0
        this.delayTime = 0
        this.executeEvIndex = 0
        this.fightFlow.length = 0
        this.allAbsObj.set(PvpObjType.role, [])
        this.allAbsObj.set(PvpObjType.bullet, [])
    }

    init() {
        this.purge()
        if (!FightData.ins.isPvp) {
            return
        }
        this.register()
        this.fightFlow = FightData.ins.fightPvp.fightFlow as proto.FightFlow[]
        // 整理线条消息
        let lineMap = new Map<number, PvpLineData>()
        for (let i = 0; i < this.fightFlow.length; ++i) {
            const flow = this.fightFlow[i];
            if (flow.ev == proto.FightEvent.FEDrawLine) {
                let data = lineMap.get(flow.timestamp)
                if (data == null) {
                    data = new PvpLineData(flow.timestamp, flow.drawLine.points);
                    lineMap.set(flow.timestamp, data);
                    this.lineList.push(data)
                } else {
                    data.points.push(flow.drawLine.points);
                }
            }
        }
        this.lineList.sort(function (a, b) { return a.timestamp - b.timestamp; })
    }

    register() {
        EventMgr.onFight(FightEvent.Pvp_recycle, this.Pvp_recycle, this)
        EventMgr.onFight(FightEvent.Pause, this.onPause, this)
        EventMgr.onFight(FightEvent.Time_Scale, this.onTime_Scale, this)
    }

    start() {
        this.pvpLine.setParent(FightRootControl.ins.getRootView().drawLine)
        FightRootControl.ins.setState(FightState.ing)
        EventMgr.emitFight(FightEvent.Pvp_start)
        this.dataPause = FightMsgControl.ins.isTest
    }

    iFightUpdate(dt: number): void {
        if (this.dataPause) {
            return
        }
        this.delayTime += dt
        if (this.delayTime < maxDelayTime) {
            return
        }

        this.time += dt
        this.allAbsObj.forEach((v, k) => {
            let len = v.length
            for (let index = 0; index < len; index++) {
                const v1 = v[index];
                v1 && v1.updateFrame(dt)
            }
        })

        if (this.lineListIdx < this.lineList.length) {
            const data = this.lineList[this.lineListIdx]
            if (data.timestamp <= this.time) {
                this.pvpLine.recycle()
                for (let p of data.points) {
                    this.pvpLine.show(p)
                }
                ++this.lineListIdx;
            }
        }

        let totalLen = this.fightFlow.length
        if (this.executeEvIndex < totalLen) {
            for (let index = this.executeEvIndex; index < totalLen; index++) {
                const v = this.fightFlow[index];
                if (this.time < v.timestamp) {
                    break
                }
                this.executeEv(v)
                this.executeEvIndex += 1
            }
        }
    }
    onNextFrame() {
        this.dataPause = false
        this.iFightUpdate(16)
        this.dataPause = true
    }
    onNextStep() {
        let totalLen = this.fightFlow.length
        if (this.executeEvIndex < totalLen) {
            for (let index = this.executeEvIndex; index < totalLen; index++) {
                const v = this.fightFlow[index];
                this.executeEv(v)
                this.executeEvIndex += 1
                break
            }
        }
    }

    //-----------------obj相关---------------
    Pvp_recycle(abs: PvpObj) {
        this.removeObj(abs)
        PvpObjFactory.put(abs)
    }
    onPause(pause: boolean) {
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
    onTime_Scale() {
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


    addObj(abs: PvpObj) {
        let objList = this.getObjList(abs.objType)
        objList.push(abs)
        this.absAllMap.set(abs.objId, abs)
    }

    removeObj(abs: PvpObj) {
        let objList = this.getObjList(abs.objType)
        let len = objList.length
        this.absAllMap.delete(abs.objId)
        for (let index = 0; index < len; index++) {
            const v = objList[index];
            if (v == abs) {
                objList.splice(index, 1)
                return true
            }
        }
        return false
    }

    getObjList(objType: PvpObjType) {
        return this.allAbsObj.get(objType)
    }

    getObjById(objId: number) {
        return this.absAllMap.get(objId)
    }

    getRoleById(objId: number): PvpRole {
        return this.getObjById(objId) as PvpRole
    }
    getBulletById(objId: number): PvpBullet {
        return this.getObjById(objId) as PvpBullet
    }

    getHerosByGroup(group: number) {
        let list = this.allAbsObj.get(PvpObjType.role) as PvpRole[]
        let newList = []
        for (let index = 0; index < list.length; index++) {
            const v = list[index];
            if (v.group == group) {
                newList.push(v)
            }
        }
        return newList
    }
    recycleAll() {
        this.allAbsObj.forEach((v, k) => {
            let len = v.length
            for (let index = len - 1; index >= 0; index--) {
                const v1 = v[index];
                !v1.isRecycle && v1.recycle()
            }
        })
        this.absAllMap.clear()
        this.pvpLine.destory()
    }

    //------------执行相关----------------
    executeEv(fl: proto.FightFlow) {
        if (proto.FightEvent[fl.ev] != proto.FightEvent[proto.FightEvent.FEDrawLine]) {
            console.log(proto.FightEvent[fl.ev], fl)
        }
        if (this[proto.FightEvent[fl.ev]]) {
            this[proto.FightEvent[fl.ev]](fl[fl.Event])
        }
    }
    FECreateHero(createHero: proto.FightFlowCreateHero) {

        let fightInfo = FightData.ins.getPvpFightInfoByGroup(createHero.group)
        let hero = Func.forBy(fightInfo.fightInfo.heroData, "id", createHero.serial) as proto.HeroFightData
        if (hero == null) {
            console.log("创建英雄-未找到英雄id,")
            return
        }
        owner.abs = PvpObjFactory.getRole(FightRootControl.ins.getRootView().objects)
        owner.abs.objId = hero.id
        owner.abs.setGroup(createHero.group)
        owner.abs.setHero(hero)
        owner.abs.barItem = FightRootControl.ins.getUIView().createBarItem(null)
        owner.abs.barItem.setAttrData(owner.abs.attrData)
        owner.abs.barItem.isActive = true
        owner.abs.init()

        tempPos.x = createHero.x
        tempPos.y = createHero.y
        tempPos.z = 0
        FightMacro.serverPostion(tempPos)
        owner.abs.setPosition(tempPos)
        this.addObj(owner.abs)
    }
    FEUpdateHP(updateHP: proto.IFightFlowUpdateHP) {
        owner.abs = this.getRoleById(updateHP.serial)
        if (owner.abs) {
            owner.abs.attrData.setData(updateHP)
            owner.abs.updateHP()
        }
    }
    FECreateBullet(createBullet: proto.FightFlowCreateBullet) {
        let configTab = tab.getData().BulletTableById.getValue(createBullet.bulletId)
        if (!configTab || (createBullet.walkAnimId == 0)) {
            console.log("子弹配置为null or walkAnimId为0")
            return
        }

        let bulletParent = FightRootControl.ins.getBulletNode(FightMacro.isEffectShowBelow(createBullet.walkAnimId))
        if (configTab.CommonShow == tab.CommonShow.CommonShow_LaunchMask) {
            let maskNode = new Node("BulletLaunchMask")
            let uiComp = maskNode.addComponent(UITransform)
            uiComp.anchorX = 0
            uiComp.height = view.getVisibleSize().height
            uiComp.width = view.getVisibleSize().width
            maskNode.addComponent(Mask)

            maskNode.parent = bulletParent
            bulletParent = maskNode
            if (createBullet.group == 1) {
                maskNode.angle = 180
            }
        }
        ownerBullet.abs = PvpObjFactory.getBullet(bulletParent)
        ownerBullet.abs.objId = createBullet.serial
        ownerBullet.abs.setFl(createBullet)
        ownerBullet.abs.init()
        this.addObj(ownerBullet.abs)
        ownerBullet.abs.run()
    }
    FERemoveObject(removeObject: proto.FightFlowRemoveObject) {
        owner.abs = this.getRoleById(removeObject.serial)
        if (owner.abs) {
            owner.abs.recycle()
        }
    }

    FEAddBuffer(addBuffer: proto.FightFlowAddBuffer) {
        owner.abs = this.getRoleById(addBuffer.owner)
        if (owner.abs) {
            owner.abs.buffs.push(addBuffer)
            this.addBuffEffect(owner.abs, addBuffer.bufferId)
        }
    }


    FEUpdateBuffer(updateBuffer: proto.FightFlowUpdateBuffer) {
        owner.abs = this.getRoleById(updateBuffer.owner)
        if (owner.abs) {
            let buff = owner.abs.getBuffByIndex(updateBuffer.index)
            if (buff) {
                if (updateBuffer.layer == 0) {
                    Func.removeBy(owner.abs.buffs, "index", updateBuffer.index)
                    this.removeBuffEffect(owner.abs, buff.bufferId)
                } else {
                    buff.layer = updateBuffer.layer
                }
            }
        }
    }

    addBuffEffect(abs: PvpRole, buffId: number) {
        let buff = tab.getData().BuffTableById.getValue(buffId)
        if (buff && buff.VFXID) {
            let buffUI = abs.getBuffUI(buffId)
            if (buffUI == null) {
                buffUI = BuffUI.get()
                if (FightMacro.isEffectShowBelow(buff.VFXID)) {
                    FightRootControl.ins.getRootView().roleDown.addChild(buffUI.node)
                } else {
                    abs.node.addChild(buffUI.node)
                }

                buffUI.setPvpBuff(buffId, abs)
                abs.addBuffUI(buffUI)
            }
            buffUI.addCount()
        }

    }
    removeBuffEffect(abs: PvpRole, buffId: number) {
        let buff = tab.getData().BuffTableById.getValue(buffId)
        if (buff && buff.VFXID) {
            let buffUI = abs.getBuffUI(buffId)
            if (buffUI) {
                buffUI.subCount()
                for (let index = 0; index < abs.buffUis.length; index++) {
                    const v = abs.buffUis[index];
                    if (v.buffId == buffUI.buffId) {
                        if (v.totalCount <= 0) {
                            v.recycle()
                            abs.buffUis.splice(index, 1)
                            break
                        }
                    }
                }
            }
        }

    }


    FEUseSkill(useSkill: proto.FightFlowUseSkill) {
        owner.abs = this.getRoleById(useSkill.attacker)
        if (owner.abs) {
            owner.abs.playSkill(useSkill.actionId)
            owner.abs.avatar.setOtherSpeedScale(Math.max(useSkill.attackSpeed, -9000))
        }
    }

    FEObjectDead(objectDead: proto.FightFlowObjectDead) {
        owner.abs = this.getRoleById(objectDead.hp.serial)
        if (owner.abs) {
            owner.abs.onDead()
            this.FEUpdateHP(objectDead.hp)
        }
    }

    FEObjectRevive(objectRevive: proto.FightFlowObjectRevive) {
        owner.abs = this.getRoleById(objectRevive.hp.serial)
        if (owner.abs) {
            owner.abs.onRevive()
            this.FEUpdateHP(objectRevive.hp)
        }
    }
    FEDamage(damage: proto.FightFlowDamage) {
        // console.log("FEDamage", damage)
        owner.abs = this.getRoleById(damage.target)
        if (owner.abs) {
            owner.abs.onDamage(damage)
            let dd = DamageData.get()
            dd.isCritical = damage.isFatalAtk
            dd.isCriticalPoint = damage.isCritical
            dd.isTear = damage.isDivulse
            dd.damage = damage.damage + damage.shieldDamage
            dd.pos.x = owner.abs.getPosition().x + owner.abs.center.x
            dd.pos.y = owner.abs.getPosition().y + owner.abs.center.y
            DamageLab.showDamageNum(dd)


            //命中特效
            owner.target = this.getRoleById(damage.target)
            ownerBullet.abs = this.getBulletById(damage.bulletSerial)
            if (owner.target && ownerBullet.abs) {
                if (ownerBullet.abs.fl.hitEffect.length) {
                    EventMgr.emitFight(FightEvent.Hit_Effect_Add, ownerBullet.abs.fl.hitEffect, ownerBullet.abs.startPos, owner.target.getHitPos())
                }
            }
        }

    }
    FEBufferHeal(heal: proto.FightFlowBufferHeal) {
        owner.abs = this.getRoleById(heal.serial)
        if (owner.abs) {
            owner.abs.onHeal(heal)
            let buf = owner.abs.getBuffByIndex(heal.bufferIndex)
            if (buf) {
                let dd = DamageData.get()
                dd.isHeal = true
                dd.damage = heal.healHp
                dd.pos.x = owner.abs.getPosition().x + owner.abs.center.x
                dd.pos.y = owner.abs.getPosition().y + owner.abs.center.y
                DamageLab.showDamageNum(dd)
            }
        }
    }
    FEStartRest(startRest: proto.FightFlowStartRest) {
        owner.abs = this.getRoleById(startRest.serial)
        if (owner.abs) {
            owner.abs.onSkillCD(startRest.restTime)
        }
    }

    FEEndRest(endRest: proto.FightFlowEndRest) {
        owner.abs = this.getRoleById(endRest.serial)
        if (owner.abs) {
            owner.abs.skillCdEnd()
        }
    }

    FEMoveTo(moveTo: proto.FightFlowMoveTo) {
        ownerBullet.abs = this.getBulletById(moveTo.serial)
        if (ownerBullet.abs) {
            tempPos.x = moveTo.x
            tempPos.y = moveTo.y
            tempPos.z = 0
            FightMacro.serverPostion(tempPos)
            ownerBullet.abs.setStartPos(tempPos)

            tempPos.x = moveTo.dx
            tempPos.y = moveTo.dy
            ownerBullet.abs.speed = moveTo.speed
            ownerBullet.abs.setVelocity(tempPos)
        }
    }

    FEMoveLineCircle(moveLineCircle: proto.FightFlowMoveLineCircle) {
        ownerBullet.abs = this.getBulletById(moveLineCircle.serial)
        if (ownerBullet.abs) {
            tempPos.x = moveLineCircle.x
            tempPos.y = moveLineCircle.y
            tempPos.z = 0
            FightMacro.serverPostion(tempPos)
            ownerBullet.abs.setStartPos(tempPos)

            tempPos.x = moveLineCircle.dx
            tempPos.y = moveLineCircle.dy
            ownerBullet.abs.speed = moveLineCircle.speed
            ownerBullet.abs.setVelocity(tempPos)
            if (!(ownerBullet.abs.move instanceof PvpMoveCircle)) {
                return
            }
            ownerBullet.abs.move.init();
            (ownerBullet.abs.move as PvpMoveCircle).addAngle = moveLineCircle.angle
        }
    }

    FEEndFight(endFight: proto.FightFlowEndFight) {
        FightRootControl.ins.setState(FightState.end)
        if (endFight.result == 0) {
            UIMgr.ins.show({ viewName: ViewName.FightWinPop, data: FightData.ins.fincaBattleFightRsp.rewards })
        } else if (endFight.result) {
            UIMgr.ins.show({ viewName: ViewName.FightLosePop, data: FightData.ins.fincaBattleFightRsp.rewards })
        }
        // CommonTipsPop.create(LangMgr.getLab("战斗结束," + endFight.result), () => {
        //     FightRootControl.ins.pvpEnd()
        // })
    }

    FEUpdateHoldTime(updateHoldTime: proto.FightFlowUpdateHoldTime) {
        owner.abs = this.getRoleById(updateHoldTime.serial)
        if (owner.abs) {
            owner.abs.showHoldTime(updateHoldTime.holdTime)
        }
    }



    // FESetBulletSpeed(setBulletSpeed: proto.FightFlowSetBulletSpeed) {
    //     let bullet = this.getBulletById(setBulletSpeed.serial)
    //     if (bullet) {
    //         bullet.speed = setBulletSpeed.speed
    //         bullet.setVelocityAngle(bullet.getVoAngle())
    //     }
    // }



    // FEDrawLine(drawLine: proto.FightFlowDrawLine){
    //     console.log(drawLine)
    //     this.pvpLine.show(drawLine.points)
    // }

}
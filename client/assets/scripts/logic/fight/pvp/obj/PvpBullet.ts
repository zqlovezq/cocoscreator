import { _decorator, Component, Vec3 } from "cc";
import { PvpObj, PvpObjType } from "./PvpObj";
import { tab } from "../../../../Table/table_gen";
import { proto } from "client_protocol";
import { AbsMove } from "../../base/move/AbsMove";
import { PvpMove, PvpMoveCircle, PvpMoveLine } from "../move/PvpMove";
import { BulletMoveLine } from "../../base/move/bullet/BulletMoveLine";
import { FightMacro } from "../../define/FightDefine";
const { ccclass, property } = _decorator;
const tempPos = new Vec3()

@ccclass('PvpBullet')
export class PvpBullet extends PvpObj {
    objType: PvpObjType = PvpObjType.bullet
    configTab: tab.BulletTable
    /** 开始位置 */
    startPos: Vec3 = new Vec3()
    fl: proto.FightFlowCreateBullet
    move: PvpMove
    reset(): void {
        super.reset()
        this.fl = null
        this.move = null
        this.startPos.set(Vec3.ZERO)
        if (this.isMaskParent()) {
            let parent = this.node.parent
            this.node.removeFromParent()
            parent.destroy()
        }
    }


    setFl(fl: proto.FightFlowCreateBullet) {
        this.isDead = true
        this.fl = fl
        this.configTab = tab.getData().BulletTableById.getValue(fl.bulletId)
        // this.speed = this.configTab.Speed
        this.speed = 0

        tempPos.x = this.fl.x
        tempPos.y = this.fl.y
        tempPos.z = 0
        FightMacro.serverPostion(tempPos)
        this.setStartPos(tempPos)
        // this.setVelocityAngle(this.fl.angle)
    }

    init(): void {
        super.init();
        this.playAnim(this.fl.walkAnimId)

    }

    isMaskParent() {
        return this.node && this.node.parent && this.node.parent.name == "BulletLaunchMask"
    }

    setStartPos(pos: Vec3) {
        this.startPos.set(pos)
        if (this.isMaskParent()) {
            this.node.parent.position = pos
            tempPos.set(Vec3.ZERO)
            this.setPosition(tempPos)
        } else {
            this.setPosition(pos)
        }
    }

    updateFrame(dt: number): void {
        if (this.isDead) {
            return
        }
        super.updateFrame(dt)
        this.move && this.move.updateFrame(dt)
    }

    setVelocity(ve: Vec3) {
        super.setVelocity(ve)
        this.checkNodeAngle()
    }

    setVelocityAngle(angle: number) {
        super.setVelocityAngle(angle)
        this.checkNodeAngle()
    }
    checkNodeAngle() {
        if (this.isMaskParent() || this.configTab.Trajectory == tab.Trajectory.Trajectory_StraightLine || this.configTab.Trajectory == tab.Trajectory.Trajectory_Laser || this.configTab.Trajectory == tab.Trajectory.Trajectory_Trajectory) {
            this.setAngle(this.voAngle)
        }
    }

    run() {
        this.move = this.getMove(this.configTab.Trajectory)
        this.isDead = false
    }

    getMove(moveType: tab.Trajectory) {
        let absMove: PvpMove
        if (moveType == tab.Trajectory.Trajectory_StraightLine) {

            if (this.configTab.Centrifugation.length > 0) {
                absMove = new PvpMoveCircle()
            } else {
                absMove = new PvpMoveLine()
            }
        } else {
            absMove = new PvpMove()
        }
        absMove.setAbs(this)
        absMove.init()
        return absMove
    }

    getLiveTime() {
        if (this.configTab.Trajectory == tab.Trajectory.Trajectory_Trajectory) {
            let total = 0
            this.configTab.LiveTime.forEach(v => {
                total += v
            })
            return total
        }
        return this.configTab.LiveTime[0]
    }
}
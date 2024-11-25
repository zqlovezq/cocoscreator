import { proto } from "client_protocol";
import { FightData } from "../data/FightData";
import { PvpControl } from "./PvpControl";
import { PvpRole } from "./obj/PvpRole";
import { ViewSize } from "../../define/ViewDefine";

export class PvpTest {

    static createHero(group: number) {
        let msg = new proto.FightFlow()
        msg.timestamp = FightData.time
        msg.ev = proto.FightEvent.FECreateHero
        msg.createHero = new proto.FightFlowCreateHero()
        msg.createHero.group = group

        let newList = PvpControl.ins.getHerosByGroup(group)
        if (newList.length) {
            msg.createHero.serial = newList[newList.length - 1].hero.id + 1
        } else {
            msg.createHero.serial = group * 5 + 1
        }
        msg.createHero.x = -216
        msg.createHero.y = 50

        let hp = new proto.FightFlowUpdateHP()
        hp.serial = msg.createHero.serial
        hp.maxHp = 100
        hp.hp = 80
        hp.sheild = 50

        PvpControl.ins.executeEv(msg)
    }

    static bulletIndex: number = 10000
    static createBullet(bulletId: number, animId: number) {
        PvpTest.bulletIndex += 1
        let msg = new proto.FightFlow()
        msg.ev = proto.FightEvent.FECreateBullet
        msg.createBullet = new proto.FightFlowCreateBullet()
        msg.createBullet.bulletId = bulletId
        msg.createBullet.serial = PvpTest.bulletIndex
        msg.createBullet.x = ViewSize.halfSize.width
        msg.createBullet.y = ViewSize.halfSize.height
        msg.createBullet.walkAnimId = animId
        PvpControl.ins.executeEv(msg)
    }

    static useSkill() {
        // 使用技能
        // let msg = new proto.FightFlow()
        // msg.ev = proto.FightEvent.FEUseSkill
        // msg.useSkill = new proto.FightFlowUseSkill()
        // msg.useSkill.skillId = 3201011
        // msg.useSkill.attacker = 4
        // msg.useSkill.actionId = 320107
        // PvpControl.ins.executeEv(msg)


        let msg = new proto.FightFlow()
        msg.ev = proto.FightEvent.FEMoveLineCircle
        msg.moveLineCircle = new proto.FightFlowMoveLineCircle()
        msg.moveLineCircle.serial = PvpTest.bulletIndex

        msg.moveLineCircle.x = ViewSize.halfSize.width
        msg.moveLineCircle.y = ViewSize.halfSize.height

        msg.moveLineCircle.dx = 1
        msg.moveLineCircle.dy = 0

        msg.moveLineCircle.angle = 10
        msg.moveLineCircle.speed = 80
        PvpControl.ins.executeEv(msg)

    }

    static addBuff() {
        //25411
        let msg = new proto.FightFlow()
        msg.ev = proto.FightEvent.FEAddBuffer
        msg.addBuffer = new proto.FightFlowAddBuffer()

        msg.addBuffer.adder = 1
        msg.addBuffer.owner = 1
        msg.addBuffer.bufferId = 25411
        msg.addBuffer.index = 1
        msg.addBuffer.layer = 3
        PvpControl.ins.executeEv(msg)

    }
    static updateBuff() {
        let msg = new proto.FightFlow()
        msg.ev = proto.FightEvent.FEUpdateBuffer
        msg.updateBuffer = new proto.FightFlowUpdateBuffer()
        msg.updateBuffer.owner = 1
        msg.updateBuffer.index = 1

        let abs = PvpControl.ins.getObjById(msg.updateBuffer.owner) as PvpRole
        if (abs) {
            let buff = abs.getBuffByIndex(msg.updateBuffer.index)
            if (buff) {
                msg.updateBuffer.layer = buff.layer - 1
            }
        } else {
            msg.updateBuffer.layer = 2
        }

        PvpControl.ins.executeEv(msg)
    }

    static skillCD() {
        let msg = new proto.FightFlow()
        msg.ev = proto.FightEvent.FEStartRest
        msg.startRest = new proto.FightFlowStartRest()
        msg.startRest.serial = 1
        msg.startRest.restTime = 2000
        PvpControl.ins.executeEv(msg)
    }

    static skillCDEnd() {
        let msg = new proto.FightFlow()
        msg.ev = proto.FightEvent.FEEndRest
        msg.endRest = new proto.FightFlowEndRest()
        msg.endRest.serial = 1
        PvpControl.ins.executeEv(msg)
    }

    static onDead() {
        let msg = new proto.FightFlow()
        msg.ev = proto.FightEvent.FEObjectDead
        msg.objectDead = new proto.FightFlowObjectDead()
        msg.objectDead.hp = new proto.FightFlowUpdateHP()
        msg.objectDead.hp.hp = 0
        msg.objectDead.hp.maxHp = 100
        msg.objectDead.hp.serial = 1
        msg.objectDead.hp.sheild = 0

        PvpControl.ins.executeEv(msg)
    }

    static onRevive() {
        let msg = new proto.FightFlow()
        msg.ev = proto.FightEvent.FEObjectRevive
        msg.objectRevive = new proto.FightFlowObjectRevive()
        msg.objectRevive.hp = new proto.FightFlowUpdateHP()
        msg.objectRevive.hp.hp = 100
        msg.objectRevive.hp.maxHp = 100
        msg.objectRevive.hp.sheild = 0
        msg.objectRevive.hp.serial = 1
        PvpControl.ins.executeEv(msg)
    }

    static removeObj(objId: number) {
        let msg = new proto.FightFlow()
        msg.ev = proto.FightEvent.FERemoveObject
        msg.removeObject = new proto.FightFlowRemoveObject()
        msg.removeObject.serial = objId
        PvpControl.ins.executeEv(msg)
    }

    static drawLine() {
        let list = []
        list.push([1197, 476, 1067, 476, 1067, 616, 1197, 616, 1197, 476])
        list.push([250, 353, 140, 353, 140, 493, 250, 493, 250, 353])
        list.push([1178, 247, 1068, 247, 1068, 387, 1178, 387, 1178, 247])
        list.push([956, 310, 856, 310, 856, 450, 956, 450, 956, 310])
        list.push([260, 140, 140, 140, 140, 280, 260, 280, 260, 140])
        for (let index = 0; index < list.length; index++) {
            let msg = new proto.FightFlow()
            msg.ev = proto.FightEvent.FEDrawLine
            msg.drawLine = new proto.FightFlowDrawLine()
            msg.drawLine.serial = 1
            // msg.drawLine.points = [
            //     0, 0, 100, 0, 100, 100, 0, 100, 0, 0
            // ]
            msg.drawLine.points = list[index]

            PvpControl.ins.executeEv(msg)
        }


    }
}
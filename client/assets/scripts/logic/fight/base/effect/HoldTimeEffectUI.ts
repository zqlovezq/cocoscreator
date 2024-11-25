import { _decorator, Component, Layers, Node, v3 } from "cc";
import { AbsRole } from "../obj/role/AbsRole";
import { Avatar } from "../../animation/Avatar";
import { AbsObj } from "../obj/AbsObj";
import { EffectUI } from "./EffectUI";
import { Role } from "../obj/role/role/Role";
import { FightData } from "../../data/FightData";
import { AbsObjInfoAttr } from "../obj/AbsObjInfo";
import { tab } from "../../../../Table/table_gen";
import { PvpRole } from "../../pvp/obj/PvpRole";

const { ccclass, property } = _decorator;

/** 蓄力特效 */
@ccclass('HoldTimeEffectUI')
export class HoldTimeEffectUI extends Component {
    static create() {
        let nn = new Node("HoldTimeEffectUI");
        nn.layer = Layers.Enum.DEFAULT
        return nn.addComponent(HoldTimeEffectUI)
    }

    abs: Role
    effectUi: EffectUI
    checkTime: number = 500;
    holdMinTime: number = 0
    setAbs(_abs: Role) {
        this.abs = _abs
        this.node.position = _abs.getHitPos()
        this.checkMinTime()
        this.abs.holdEffect = this
    }
    animationId: number = 0
    checkMinTime() {
        this.holdMinTime = 0
        if (this.abs && this.abs.info) {
            this.abs.info.holdTimeTrigger.sort((a, b) => {
                return a.Parameters[0] - b.Parameters[0]
            })
            this.holdMinTime = this.abs.info.holdTimeTrigger[0].getHoldTime(this.abs.info.attrData.getAttr(tab.AttrType.AttrType_HoldTimePercent))
        }
        if (this.holdMinTime == 0) {
            this.remove()
        }
    }

    cdTime: number = 0
    updateFrame(dt: number): void {
        this.cdTime += dt
        if (this.cdTime > this.checkTime) {
            this.cdTime = 0
            this.checkMinTime()
        }
        if (this.holdMinTime == 0) {
            return
        }
        if (this.abs && this.abs.info) {
            this.changeAnimId(FightData.time - this.abs.info.getObjAttr(AbsObjInfoAttr.holdTime))
        }
    }

    changeAnimId(passTime: number) {
        if (passTime >= this.holdMinTime) {
            this.run(tab.getData().GetKeyValue_ConfigTable().HoldFull)
        } else {
            this.run(tab.getData().GetKeyValue_ConfigTable().Holding)
        }
    }


    run(animId: number) {
        if (this.animationId == animId) {
            return
        }
        this.recycleEffect()
        this.animationId = animId
        this.effectUi = EffectUI.create()
        this.effectUi.node.parent = this.node
        this.effectUi.node.position = v3()
        this.effectUi.run(animId, () => {
            this.effectUi = null
            this.animationId = 0
        })
    }

    recycleEffect() {
        if (this.effectUi) {
            this.effectUi.remove()
        }
        this.effectUi = null
    }

    remove() {
        this.recycleEffect()
        this.node.destroy()
    }

    pvpRole: PvpRole
    setAbsPvp(_abs: PvpRole) {
        this.pvpRole = _abs
        this.node.position = _abs.getHitPos()
        this.pvpRole.holdEffect = this
    }

    resetTimePvp(){
        this.cdTime = 0
        this.changeAnimId(this.cdTime)
    }
    updateFramePvp(dt: number): void {
        this.cdTime += dt
        this.changeAnimId(this.cdTime)
    }

}
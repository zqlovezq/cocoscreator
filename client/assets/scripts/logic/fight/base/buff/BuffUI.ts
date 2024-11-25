import { _decorator, Component, Layers, Node, Prefab, Vec3, view } from "cc";
import { AbsRole } from "../obj/role/AbsRole";
import { Buff } from "./Buff";
import { Avatar } from "../../animation/Avatar";
import { tab } from "../../../../Table/table_gen";
import { FightMacro } from "../../define/FightDefine";
import { PvpRole } from "../../pvp/obj/PvpRole";

const { ccclass, property } = _decorator;
const tempPos = new Vec3(0, 0, 0)

@ccclass('BuffUI')
export class BuffUI extends Component {
    private static poolUIs: BuffUI[] = []

    static get() {
        let buffUI = BuffUI.poolUIs.pop()
        if (buffUI == null) {
            let nn = new Node("BuffUI");
            nn.layer = Layers.Enum.DEFAULT
            buffUI = nn.addComponent(BuffUI)
        }
        tempPos.set(Vec3.ONE)
        buffUI.node.scale = tempPos
        if (tempPos.equals(Vec3.ZERO)) {
            tempPos.x = view.getVisibleSize().width
            tempPos.y = view.getVisibleSize().height
        }
        return buffUI
    }

    static put(buffUI: BuffUI) {
        buffUI.node.removeFromParent()
        buffUI.reset()
        BuffUI.poolUIs.push(buffUI)
    }
    /** 销毁 */
    static destory() {
        for (let i = 0; i < BuffUI.poolUIs.length; i++) {
            BuffUI.poolUIs[i].node.destroy()
        }
        BuffUI.poolUIs.length = 0
    }

    abs: AbsRole | PvpRole
    buffId: number
    avatar: Avatar
    /** buff数量 */
    totalCount: number = 0

    offsetXY = new Vec3(0, 0, 0)
    recycle() {
        BuffUI.put(this)
    }
    reset() {
        if (this.avatar) {
            this.avatar.recycle()
        }

        this.avatar = null
        this.abs = null
        this.node.active = false
    }

    setBuff(buffId: number, abs: AbsRole) {
        this.abs = abs
        this.setBuffId(buffId)
        if (abs.isMonster()) {
            tempPos.z = 1
            tempPos.x = tempPos.y = (abs.info.configTab.BuffVFX || FightMacro.PERCENT) / FightMacro.PERCENT
            this.node.scale = tempPos

            this.offsetXY.x = abs.info.configTab.BuffLocation[0] || 0
            this.offsetXY.y = abs.info.configTab.BuffLocation[1] || 0
        } else {

            tempPos.set(abs.getHitPos()).subtract(abs.getPosition())
            this.offsetXY.x = tempPos.x
            this.offsetXY.y = tempPos.y
        }

        this.posFollow()
    }

    setPvpBuff(buffId: number, abs: PvpRole) {
        this.abs = abs
        this.setBuffId(buffId)
        tempPos.set(abs.getHitPos()).subtract(abs.getPosition())
        this.offsetXY.x = tempPos.x
        this.offsetXY.y = tempPos.y
    }

    setBuffId(buffId: number) {
        this.offsetXY.set(0, 0, 0)
        this.buffId = buffId
        this.node.active = true
        this.avatar = Avatar.create()
        this.node.addChild(this.avatar.node)
        this.avatar.setAnimationId(tab.getData().BuffTableById.getValue(this.buffId).VFXID)
    }

    subCount() {
        this.totalCount -= 1
    }
    addCount() {
        this.totalCount += 1
    }

    update(dt) {
        this.posFollow()
    }

    posFollow() {
        if (this.abs && this.abs.isValid) {
            this.avatar.setOpaticy(this.abs.isDead || !this.abs.isActive ? 0 : 255)
            if (this.node.active) {
                tempPos.set(this.offsetXY)
                if (this.abs.node == this.node.parent) {
                    this.node.position = tempPos
                    return
                }
                if (this.abs.isActive) {
                    tempPos.add(this.abs.getPosition())
                }
                this.node.position = tempPos
            }
        }
    }

}
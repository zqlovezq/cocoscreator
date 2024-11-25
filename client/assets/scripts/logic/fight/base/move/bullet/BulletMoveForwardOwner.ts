import { Vec3, math, setPropertyEnumTypeOnAttrs, v2, v3 } from "cc";
import { AbsMoveType, BulletMove } from "../AbsMove";
import { BulletMoveLine } from "./BulletMoveLine";
import { CDTime } from "../../cd/CDTime";
import { AbsRole } from "../../obj/role/AbsRole";

const tempPos = new Vec3();
/** 跟随 */
export class BulletMoveForwardOwner extends BulletMoveLine {
    ownerAbs: AbsRole
    init(): void {
        super.init()
        this.ownerAbs = this.abs.owner.abs
    }

    fly(dt: number): void {
        if (this.ownerAbs && !this.ownerAbs.isDead) {
            tempPos.x = this.abs.owner.abs.getPosition().x + this.abs.info.configTab.BulletOffset[0] || 0
            tempPos.y = this.abs.owner.abs.getPosition().y + this.abs.info.configTab.BulletOffset[1] || 0

            this.setAbsPos(tempPos)
        }
    }

    /** 检查是否完成 */
    checkComplete() {
        if (this.ownerAbs && this.ownerAbs.isDead) {
            return true
        }
        return super.checkComplete()
    }
}
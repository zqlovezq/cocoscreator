import { Vec3, math, v2, v3 } from "cc";
import { AbsMoveType, BulletMove } from "../AbsMove";
import { tab } from "../../../../../Table/table_gen";
import { BulletTargetType } from "../../obj/bullet/BulletControl";
import { AbsRole } from "../../obj/role/AbsRole";

const tempPos = new Vec3();
/** 无轨迹， 直接到达目标 */
export class BulletMoveTarget extends BulletMove {
    constructor() {
        super(AbsMoveType.BulletMoveTarget)
    }
    init(): void {
        //自身、友方不用处理， 在创建子弹时已经设置为拥有者位置
        // if (this.abs.info.configTab.EffectUnit == tab.EffectUnit.EffectUnit_Enemy) {//敌方
        switch (this.abs.bulletTargetType) {
            case BulletTargetType.role:
                this.abs.setPosition(this.abs.targetRole.getHitPos())
                break
            case BulletTargetType.pos:
                this.abs.setPosition(this.abs.targetPos)
                break
            case BulletTargetType.angle:
                console.error("无轨迹， 不会存在角度发射")
                this.abs.setAngle(0)
                break
        }
        this.abs.setAngle(0)
        // }
    }

}
import { Vec2, Vec3 } from "cc";
import Fixed from "../../../framework/collision/Fixed";
import { FightMacro } from "../define/FightDefine";

/**
 * 定点数工具类
 */
export namespace FixedUtil {

    export function toFixed(): number {
        return 0
    }


    /**
     * 增量时间移动位置计算
     * @param out 返回值
     * @param pos 原位置
     * @param velocity 速率
     * @param deltaTime 时间 （秒)
     */
    export function deltaTimeMovePostion(out: Vec3 | Vec2, pos: Vec3 | Vec2, velocity: Vec3 | Vec2, deltaTime: number, add?: number) {
        if (add) {
            add = (FightMacro.PERCENT + add) / FightMacro.PERCENT
        } else {
            add = 1
        }

        //计算新位置
        out.x = pos.x + velocity.x * add * deltaTime / 1000;
        out.y = pos.y + velocity.y * add * deltaTime / 1000;
        return out
    }
}
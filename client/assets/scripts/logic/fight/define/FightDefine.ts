import { Size, sys, Vec3, view } from "cc";
import { ViewSize } from "../../define/ViewDefine";

/** 碰撞组 */
export enum CollisionGroup {
    /** 角色 */
    role = "role",
    /** 角色子弹 */
    roleBullet = "roleBullet",
    /** 怪物 */
    monster = "monster",
    /** 怪物子弹 */
    monsterBullet = "monsterBullet",
}

/** 多向剑相交类型 */
export enum BulletForwardArrow {
    /** 平行 */
    parallel = 1,
    /** 相交 */
    intersect = 2
}

export interface IFightUpdate {
    iFightUpdate(dt: number): void
}

/** 战斗宏定义 */
export namespace FightMacro {
    /** 最大概率 */
    export const MAX_CHANCE = 10000;
    /** 最大英雄数 */
    export const MAX_HERO_COUNT = 5;
    /** 万分比 */
    export const PERCENT = 10000;
    /** 秒 */
    export const SECOND = 1000

    /** 角色位置 */
    export enum RolePosType {
        one = 1,
        two = 2,
        three = 3,
        four = 4,
        five = 5
    }


    /** 战斗特效， 是否显示在下层，针对 buff、子弹 */
    export function isEffectShowBelow(id: number) {
        return id >= 8000 && id <= 9000
    }

    export function damageStr(damage: number) {
        let str
        if (damage < 1000) {
            str = damage.toString()
        } else if (1000 <= damage && damage < 1000000) {
            str = (damage / 1000).toFixed(1) + "K"
        } else {
            str = (damage / 1000000).toFixed(1) + "M"
        }
        return str
    }

    //pvp服务器坐标转换
    export function serverPostion(position: Vec3) {
        position.x -= ViewSize.halfFrameSize.width
        position.y -= ViewSize.halfFrameSize.height
    }

}
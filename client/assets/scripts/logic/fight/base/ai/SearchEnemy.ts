import { _decorator, absMax, CCInteger, Color, Component, convertUtils, instantiate, Label, Node, Prefab, Quat, Rect, sp, Sprite, tween, UITransform, Vec2, Vec3, view } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { AbsControl } from '../../../../framework/base/IAbs';
import { Random } from '../../util/Random';
import { FrameControl } from '../frame/FrameControl';
import { AbsObj, AbsObjType } from '../obj/AbsObj';
import { AbsRole } from '../obj/role/AbsRole';
import { Monster } from '../obj/role/monster/Monster';
import { Role } from '../obj/role/role/Role';
import { Vector2 } from '../../../../framework/collision/Maths';

const { ccclass, property } = _decorator;

const tempPos = new Vec3(0, 0, 0);
const tempPos1 = new Vec3(0, 0, 0);
const tempStartPos = new Vec3(0, 0, 0);
const tempList = new Array<AbsRole>();

const tempAll = []

/** 搜索敌人 */
@ccclass('SearchEnemy')
export class SearchEnemy {

    private static getAll(objId: number | AbsRole, ownerObjType: AbsObjType, effectUnit: tab.EffectUnit) {

        switch (effectUnit) {
            case tab.EffectUnit.EffectUnit_Mine://自己
                if (typeof objId == "number") {
                    let absRole = FrameControl.ins.getObjById(objId) as AbsRole
                    if (absRole) {
                        return [absRole]
                    }
                }
                return [objId as AbsRole]
            case tab.EffectUnit.EffectUnit_Friend://我方 
                if (ownerObjType == AbsObjType.role) {
                    return FrameControl.ins.getObjList(AbsObjType.role) as AbsRole[]
                } else {
                    return FrameControl.ins.getObjList(AbsObjType.enemy) as AbsRole[]
                }
            case tab.EffectUnit.EffectUnit_Enemy://敌方
                if (ownerObjType == AbsObjType.role) {
                    return FrameControl.ins.getObjList(AbsObjType.enemy) as AbsRole[]
                } else {
                    return FrameControl.ins.getObjList(AbsObjType.role) as AbsRole[]
                }
            case tab.EffectUnit.EffectUnit_FriendNome://友方， 不包含自身
                tempAll.length = 0
                let absRole: AbsRole
                if (typeof objId == "number") {
                    absRole = FrameControl.ins.getObjById(objId) as AbsRole
                } else {
                    absRole = objId as AbsRole
                }

                let list = this.getAll(objId, ownerObjType, tab.EffectUnit.EffectUnit_Friend)

                for (let index = 0; index < list.length; index++) {
                    const v = list[index];
                    if (v != absRole) {
                        tempAll.push(v)
                    }
                }
                return tempAll

        }
        return []
    }

    /** 是否有目标敌人 */
    static isHasEnemy(absRole: AbsRole, ownerObjType: AbsObjType, effectUnit: tab.EffectUnit, includeNoActive?: boolean) {
        let all = this.getAll(absRole, ownerObjType, effectUnit)
        let len = all.length
        if (len == 0) {
            return false
        }
        for (let index = 0; index < len; index++) {
            const v = all[index];
            if (!includeNoActive && !v.isActive) { //是否包含未激活状态的
                continue
            }
            if (v.isDead == false && v.trigger) {
                return true
            }
        }
        return false
    }

    /**
     * 根据锁敌规则获取敌人
     * @param ownerObjId  归属id
     * @param ownerObjType 归属类型
     * @param startPos  归属开始位置
     * @param effectUnit 锁敌单位（查找单位池）
     * @param _type  锁敌规则
     * @param ignore 过滤
     * @param includeNoActive 是否包含未激活
     * @returns 
     */
    static getBySearchEnemy(ownerObjId: number, ownerObjType: AbsObjType, startPos: Vec3, effectUnit: tab.EffectUnit, _type: tab.SearchEnemy, ignore?: number[], includeNoActive?: boolean): AbsRole {
        let all = this.getAll(ownerObjId, ownerObjType, effectUnit)
        tempStartPos.set(startPos)

        let funcName = tab.SearchEnemy[_type]
        if (this[funcName]) {
            return this[funcName](ownerObjId, all, tempStartPos, ignore, includeNoActive)
        }
        return null
    }

    /**
     * 根据技能规则获取敌人
     * @param ownerObjId  归属id
     * @param ownerObjType 归属类型
     * @param startPos  归属开始位置
     * @param effectUnit 锁敌单位（查找单位池）
     * @param _type  锁敌规则
     * @param findCount 查找数量
     * @param includeNoActive 是否包含未激活
     * @returns 
     */
    static skillGetBySearchEnemy(ownerObjId: number, ownerObjType: AbsObjType, startPos: Vec3, effectUnit: tab.EffectUnit, _type: tab.SearchEnemy, findCount?: number, includeNoActive?: boolean): AbsRole[] {
        findCount = findCount || 1
        let result = []
        if (_type == tab.SearchEnemy.SearchEnemy_All) {
            let all = this.getAll(ownerObjId, ownerObjType, effectUnit)
            for (let index = 0; index < all.length; index++) {
                const v = all[index];
                if (!includeNoActive && !v.isActive) {
                    continue
                }
                if (v.isDead) {
                    continue
                }
                result.push(v)
            }
            return result
        }

        /** 查找多个， 每循环一次， 过滤下之前的已找到的 */
        let isIds = []
        for (let index = 0; index < findCount; index++) {
            isIds.length = 0
            for (let i = 0; i < result.length; i++) {
                const abs = result[i];
                isIds.push(abs.objId)
            }
            let enemy = SearchEnemy.getBySearchEnemy(ownerObjId, ownerObjType, startPos, effectUnit, _type, isIds, includeNoActive)
            if (enemy) {
                result.push(enemy)
            } else {
                break
            }
        }
        return result
    }

    private static SearchEnemy_None(objId: number, allRoles: AbsRole[], startPos: Vec3, ignore: number[], includeNoActive?: boolean): AbsRole {
        if (allRoles.length > 0) {
            let v
            for (let index = 0; index < allRoles.length; index++) {
                v = allRoles[index];
                if (!includeNoActive && !v.isActive) { //是否包含未激活状态的
                    continue
                }
                if (this.isSame(ignore, v)) {
                    continue
                }
                return v
            }
        }
        return allRoles[0]
    }

    /** 血量最少 */
    private static SearchEnemy_LowBlood(objId: number, allRoles: AbsRole[], startPos: Vec3, ignore: number[], includeNoActive?: boolean): AbsRole {

        let monster = null

        let len = allRoles.length
        let tmpHp = 0
        let minHp = 0
        let v
        for (let i = 0; i < len; i++) {
            v = allRoles[i]
            if (!includeNoActive && !v.isActive) { //是否包含未激活状态的
                continue
            }
            if (v.isDead) {
                continue
            }
            if (this.isSame(ignore, v)) {
                continue
            }
            tmpHp = v.info.attrData.hpPercent
            if (null == monster) {
                minHp = tmpHp
                monster = v
            } else {
                if (tmpHp < minHp) {
                    minHp = tmpHp;
                    monster = v
                }
            }
        }
        return monster
    }

    private static isSame(ignore: number[], abs: AbsRole) {
        if (ignore) {
            for (let index = 0; index < ignore.length; index++) {
                const v = ignore[index];
                if (v == abs.objId) {
                    return true
                }
            }
        }
        return false
    }

    /** 最近 */
    private static SearchEnemy_Near(objId: number, allRoles: AbsRole[], startPos: Vec3, ignore: number[], includeNoActive?: boolean): AbsRole {
        let time = new Date().getTime()
        let monster = null

        let len = allRoles.length
        let tmpSqr = 0
        let minSqr = 0
        for (let i = 0; i < len; i++) {
            let v = allRoles[i]
            if (!includeNoActive && !v.isActive) { //是否包含未激活状态的
                continue
            }
            if (v.isDead) {
                continue
            }
            if (this.isSame(ignore, v)) {
                continue
            }
            tmpSqr = Math.abs(Vector2.squaredDistance(v.getHitPos(), startPos))
            if (null == monster) {
                minSqr = tmpSqr
                monster = v
            } else {
                if (tmpSqr < minSqr) {
                    minSqr = tmpSqr;
                    monster = v
                }
            }
        }
        return monster
    }

    /** 后排 */
    private static SearchEnemy_Behind(objId: number, allRoles: AbsRole[], startPos: Vec3, ignore: number[], includeNoActive?: boolean): AbsRole {
        tempList.length = 0
        for (let index = 0; index < allRoles.length; index++) {
            const v: Role = allRoles[index] as Role
            if (!includeNoActive && !v.isActive) { //是否包含未激活状态的
                continue
            }
            if (v.isDead) {
                continue
            }
            if (this.isSame(ignore, v)) {
                continue
            }
            if (!v.info.isHeroClassWarrior()) {
                tempList.push(v)
            }
        }
        if (tempList.length) {
            return tempList[Random.getRandomInt(0, tempList.length)]
        }
        return SearchEnemy.SearchEnemy_Warrior(objId, allRoles, startPos, ignore, includeNoActive)
    }

    /** 随机 */
    private static SearchEnemy_RandomGoal(objId: number, allRoles: AbsRole[], startPos: Vec3, ignore: number[], includeNoActive?: boolean): AbsRole {
        tempList.length = 0
        for (let index = 0; index < allRoles.length; index++) {
            const v: Role = allRoles[index] as Role
            if (!includeNoActive && !v.isActive) { //是否包含未激活状态的
                continue
            }
            if (v.isDead) {
                continue
            }
            if (this.isSame(ignore, v)) {
                continue
            }
            tempList.push(v)
        }
        if (tempList.length) {
            return tempList[Random.getRandomInt(0, tempList.length)]
        }
        return null
    }
    /** 自己 */
    private static SearchEnemy_Mine(objId: number, allRoles: AbsRole[], startPos: Vec3, ignore: number[], includeNoActive?: boolean): AbsRole {
        return FrameControl.ins.getObjById(objId) as AbsRole
    }

    /** 寻找职业 */
    private static SearchEnemy_HeroClass(objId: number, allRoles: AbsRole[], heroClass: tab.HeroClass, includeNoActive?: boolean): AbsRole {
        let len = allRoles.length
        let v: Role
        for (let index = 0; index < len; index++) {
            v = allRoles[index] as Role;
            if (v.info.isHeroClass(heroClass)) {
                return v
            }
        }
    }

    /** 刺客  */
    private static SearchEnemy_Assassin(objId: number, allRoles: AbsRole[], startPos: Vec3, ignore: number[], includeNoActive?: boolean): AbsRole {
        return SearchEnemy.SearchEnemy_HeroClass(objId, allRoles, tab.HeroClass.HeroClass_Assassin)
    }
    /** 射手 */
    private static SearchEnemy_Archer(objId: number, allRoles: AbsRole[], startPos: Vec3, ignore: number[], includeNoActive?: boolean): AbsRole {
        return SearchEnemy.SearchEnemy_HeroClass(objId, allRoles, tab.HeroClass.HeroClass_Archer)
    }
    /** 牧师 */
    private static SearchEnemy_Priest(objId: number, allRoles: AbsRole[], startPos: Vec3, ignore: number[], includeNoActive?: boolean): AbsRole {
        return SearchEnemy.SearchEnemy_HeroClass(objId, allRoles, tab.HeroClass.HeroClass_Priest)
    }
    /** 法师 */
    private static SearchEnemy_Caster(objId: number, allRoles: AbsRole[], startPos: Vec3, ignore: number[], includeNoActive?: boolean): AbsRole {
        return SearchEnemy.SearchEnemy_HeroClass(objId, allRoles, tab.HeroClass.HeroClass_Caster)
    }
    /** 战士 */
    private static SearchEnemy_Warrior(objId: number, allRoles: AbsRole[], startPos: Vec3, ignore: number[], includeNoActive?: boolean): AbsRole {
        return SearchEnemy.SearchEnemy_HeroClass(objId, allRoles, tab.HeroClass.HeroClass_Warrior)
    }
    /** 血盾最少 */
    private static SearchEnemy_LowBloodShield(objId: number, allRoles: AbsRole[], startPos: Vec3, ignore: number[], includeNoActive?: boolean) {
        let monster = null

        let len = allRoles.length
        let tmpHp = 0
        let minHp = 0
        let v
        for (let i = 0; i < len; i++) {
            v = allRoles[i]
            if (!includeNoActive && !v.isActive) { //是否包含未激活状态的
                continue
            }
            if (v.isDead) {
                continue
            }
            if (this.isSame(ignore, v)) {
                continue
            }
            tmpHp = v.info.attrData.getHpShieldPercent()
            if (null == monster) {
                minHp = tmpHp
                monster = v
            } else {
                if (tmpHp < minHp) {
                    minHp = tmpHp;
                    monster = v
                }
            }
        }
        return monster
    }
}


import { _decorator, CCInteger, Color, Component, instantiate, Label, Layers, Mask, Node, Prefab, Quat, Rect, sp, Sprite, tween, UITransform, v3, Vec2, Vec3, view } from 'cc';
import { AbsControl } from '../../../../../framework/base/IAbs';
import { AbsRole } from '../role/AbsRole';
import { BulletInfo } from './BulletInfo';
import { FightRootControl } from '../../../FightRootControl';
import { AbsObjFactory } from '../AbsObjFactory';
import { PlayerControl } from '../role/role/PlayerControl';
import { Bullet } from './Bullet';
import { SkillTab } from '../../../power/powerTab/SkillTab';
import { tab } from '../../../../../Table/table_gen';
import { SearchEnemy } from '../../ai/SearchEnemy';
import { AbsStateType } from '../state/AbsState';
import { ColliderMgr } from '../../../../../framework/collision/ColliderMgr';
import { MathAngle } from '../../../../../framework/collision/Maths';
import { EffectControl } from '../../effect/EffectControl';
import { AbsObjInfoAttr } from '../AbsObjInfo';
import { AbsObjType } from '../AbsObj';
import { Random } from '../../../util/Random';
import { EventMgr } from '../../../../mgr/EventMgr';
import { FightEvent } from '../../../define/FightEvent';
import { BulletTab } from '../../../power/powerTab/BulletTab';
import { AbsOwner } from '../AbsOwner';
import { FightMacro } from '../../../define/FightDefine';
import { Func } from '../../../../utils/Func';
import { Buff } from '../../buff/Buff';


const { ccclass, property } = _decorator;

export enum BulletTargetType {
    default = 0,
    /** 角色 */
    role = 1,
    /** 位置 */
    pos = 2,
    /** 角度 */
    angle = 3,
    /** 归属 */
    owner = 4,
}


const tempPos = new Vec3(0, 0, 0);
const tempStartPos = new Vec3(0, 0, 0);
const tempTargetPos = new Vec3(0, 0, 0)
const bulletBaseTarget = new Vec3()
@ccclass('BulletControl')
export class BulletControl extends AbsControl {
    private static _instance: BulletControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new BulletControl();
        }
        return this._instance;
    }

    /** 组id,同组衰减用 */
    groupId: number = 0

    init(): void {
        this.groupId = 0
        bulletBaseTarget.x = tab.getData().GetKeyValue_ConfigTable().BulletBaseTarget[0]
        bulletBaseTarget.y = tab.getData().GetKeyValue_ConfigTable().BulletBaseTarget[1]
    }

    /** 自增组id */
    addSelfGroupId() {
        this.groupId++
        return this.groupId
    }


    /** 点击发射子弹 肯定是从自身发出*/
    clickEmitBullet(bulletTab: BulletTab, attack: AbsRole, targetPos: Vec3, bulletGroupId: number = 0) {
        if (bulletTab == null) {
            console.warn("没有子弹id")
            return
        }
        if (bulletTab.EffectUnit == tab.EffectUnit.EffectUnit_Enemy) {
            return this.emitBullet(bulletTab, AbsOwner.get(attack.objId), attack.getShotPos(), null, targetPos, bulletGroupId)
        }
        //友军、自己走自动逻辑
        return this.audoEmitBullet(bulletTab, attack, bulletGroupId)
    }

    /** 自动发射子弹 */
    audoEmitBullet(bulletTab: BulletTab, attack: AbsRole, bulletGroupId: number = 0) {
        if (bulletTab == null) {
            console.warn("没有子弹id")
            return
        }
        if (bulletTab.SearchEnemy == tab.SearchEnemy.SearchEnemy_None) {
            return this.emitBullet(bulletTab, AbsOwner.get(attack.objId), attack.getShotPos(), null, null, bulletGroupId)

        }
        let enemy = SearchEnemy.getBySearchEnemy(attack.objId, attack.objType, attack.getShotPos(), bulletTab.EnemyUnit, bulletTab.SearchEnemy)
        // if (enemy == null) {
        //     console.log("子弹找不到目标")
        //     return
        // }
        return BulletControl.ins.emitBullet(bulletTab, AbsOwner.get(attack.objId), attack.getShotPos(), enemy, null)
    }

    /**
     * 发射子弹
     * @param bulletTab 子弹配置
     * @param owner (归属)发射者
     * @param startPos 开始位置
     * @param targetPos 目标位置， 如果为null，则自动寻找目标
     * @param bulletGroupId 子弹组id
     * @param parentSoleId 父子弹唯一id
     * 
     */
    emitBullet(bulletTab: BulletTab, owner: AbsOwner, startPos: Vec3, targetRole: AbsRole, targetPos: Vec3, bulletGroupId: number = 0, parentSoleId: string = "", havaDamageObjIds: number[] = []): Vec3 {
        if (bulletTab == null) {
            console.warn("没有子弹id")
            return
        }

        tempStartPos.set(startPos)
        if (bulletTab.Fission.length && bulletTab.Fission[0] == 2) {
            if (bulletTab.SearchEnemy == tab.SearchEnemy.SearchEnemy_None) {
                if (targetPos == null) {
                    targetPos = tempTargetPos
                    targetPos.set(Vec3.ZERO)
                }
                MathAngle.angleToDirection((bulletTab.Fission[1] / 2), targetPos)
                targetPos.multiplyScalar(100).add(tempStartPos)
            }
        }

        if (targetRole == null && targetPos == null) {
            // console.log("没有找到目标，设置发射角度")
            targetPos = tempTargetPos
            targetPos.set(bulletBaseTarget)
        }


        let targetType = BulletTargetType.default
        if (targetRole) {
            targetType = BulletTargetType.role
            tempPos.set(targetRole.getHitPos())
        } else {
            targetType = BulletTargetType.pos
            tempPos.set(targetPos)
        }

        if (bulletTab.Fission.length) {
            let tmpGroupId = this.addSelfGroupId()
            let tmpAngle = MathAngle.posToAngle(tempStartPos, tempPos)
            let list = this.getFissionAngles(tmpAngle, bulletTab.Fission)

            for (let index = 0; index < list.length; index++) {
                const v = list[index];
                this.checkForwardArrow(bulletTab, owner, tempStartPos, BulletTargetType.angle, v, bulletGroupId || tmpGroupId, parentSoleId, havaDamageObjIds)
            }
            return tempPos
        } else {
            this.checkForwardArrow(bulletTab, owner, tempStartPos, targetType, targetRole || targetPos, bulletGroupId, parentSoleId, havaDamageObjIds)
            return tempPos
        }
    }

    checkForwardArrow(bulletTab: BulletTab, owner: AbsOwner, startPos: Vec3, targetType: BulletTargetType, targetObj: AbsRole | Vec3 | number, bulletGroupId: number = 0, parentSoleId: string = "", havaDamageObjIds: number[] = []) {
        let objAttr: any = { bulletGroupId: bulletGroupId, parentSoleId: parentSoleId }
        if (bulletTab.ForwardArrow.length) {
            let rate = bulletTab.ForwardArrow[3]

            if (Random.isSuccess(rate)) {
                objAttr.isForwardArrow = 1
                let list = MathAngle.getForwardDirection(0, bulletTab.ForwardArrow[1], bulletTab.ForwardArrow[2])
                for (let index = 0; index < list.length; index++) {
                    objAttr.forwardArrowOffsetY = list[index]
                    this.addBullet(bulletTab, owner, startPos, targetType, targetObj, objAttr, havaDamageObjIds)
                }
                return
            }
        }

        this.addBullet(bulletTab, owner, startPos, targetType, targetObj, objAttr, havaDamageObjIds)
    }

    /**
     * 添加子弹
     * @param bulletTab 子弹配置
     * @param attack 攻击者
     * @param startPos 开始位置
     * @param targetType 目标类型
     * @param targetObj 目标
     * @param bulletGroudId 子弹组id
     */
    addBullet(bulletTab: BulletTab, owner: AbsOwner, startPos: Vec3, targetType: BulletTargetType, targetObj: AbsRole | Vec3 | number, objAttr: any, havaDamageObjIds: number[] = []) {
        let info = AbsObjFactory.getData(AbsObjType.bullet) as BulletInfo
        info.setConfigTab(bulletTab)
        info.init()
        info.parentSoleId = objAttr.parentSoleId || ""
        for (const key in objAttr) {
            if (typeof objAttr[key] == "number") {
                info.setObjAttr(key as AbsObjInfoAttr, objAttr[key])
            }
        }
        if (info.configTab == null) {
            console.error("创建子弹错误", info)
            return
        }


        let bulletParent = FightRootControl.ins.getBulletNode(FightMacro.isEffectShowBelow(bulletTab.getValidAnimId()))
        if (info.configTab.isLaunchMask()) {
            let maskNode = new Node("BulletLaunchMask")
            let uiComp = maskNode.addComponent(UITransform)
            uiComp.anchorX = 0
            uiComp.height = 300
            uiComp.width = view.getVisibleSize().width
            maskNode.addComponent(Mask)

            maskNode.parent = bulletParent
            bulletParent = maskNode
        }
        let bullet = AbsObjFactory.getBullet(info, bulletParent)
        bullet.setStartPos(startPos)
        bullet.setAbsOnwer(owner)
        bullet.setTargetType(targetType, targetObj)
        bullet.addhavaDamageObjIds(havaDamageObjIds)
        if (bullet.info.isolnyOneSon()) {
            bullet.info.sonGroupId = this.addSelfGroupId()
        }
        bullet.run()
    }

    /** 弹射 */
    addCatapult(bullet: Bullet, defanseAbs: AbsRole) {
        let ignores = this.getEnemyFiltrate(bullet, bullet.info.configTab.EnemyFiltrate)
        let enemy = SearchEnemy.getBySearchEnemy(bullet.owner.objId, bullet.owner.objType, bullet.getTruePosition(), bullet.info.configTab.EnemyUnit, bullet.info.configTab.SearchEnemy, ignores)
        if (enemy == null && bullet.info.configTab.EnemyFiltrate == tab.EnemyFiltrate.EnemyFiltrate_NoSelectSame) { //找不到目标时， 忽略上一目标后重新查找
            ignores = this.getEnemyFiltrate(bullet, tab.EnemyFiltrate.EnemyFiltrate_CanSelectlast)
            enemy = SearchEnemy.getBySearchEnemy(bullet.owner.objId, bullet.owner.objType, bullet.getTruePosition(), bullet.info.configTab.EnemyUnit, bullet.info.configTab.SearchEnemy, ignores)
        }
        if (enemy) {
            ColliderMgr.inst.removeTrigger(bullet, enemy)
            bullet.setStartPos(bullet.getTruePosition())
            bullet.setTargetType(BulletTargetType.pos, enemy.getHitPos())
            bullet.targetDirection()
        }
    }

    /** 子弹死亡触发 */
    checkDeathTrigger(bullet: Bullet) {
        if (bullet.isDead || bullet.OutOfScreen) {
            return
        }
        if (bullet.info.configTab.DeathTrigger.length > 0) {
            for (let index = 0; index < bullet.info.configTab.DeathTrigger.length; index++) {
                let bulletTab = bullet.info.configTab.DeathTriggerTabs[index]
                this.bulletCreateBullet(bullet, bulletTab)
            }
        }
    }

    /** 子弹命中触发 */
    checkHitTrigger(bullet: Bullet) {
        bullet.addHitCount()
        if (bullet.info.configTab.isHitTriggerBullet()) {
            let check = false
            if (bullet.info.configTab.HitTrigger[2] == -1) {
                check = true
            } else if (bullet.info.configTab.HitTrigger[2] == bullet.hitCount) {
                check = true
            }

            if (!check) {
                return
            }
            if (!Random.isSuccess(bullet.info.configTab.HitChance)) {
                return
            }
            this.bulletCreateBullet(bullet, bullet.info.configTab.hitTriggerTab)

        } else if (bullet.info.configTab.isHitTriggerSpeed() && bullet.hitCount == 1) {
            bullet.speed += bullet.info.configTab.HitTrigger[1]
            bullet.setVelocityAngle(bullet.voAngle)
        }
    }
    /** 间隔触发 */
    intervalTrigger(bullet: Bullet) {
        bullet.info.isInitInterval = false
        this.bulletCreateBullet(bullet, bullet.info.configTab.intervalEffectBulletTab)
    }

    bulletCreateBullet(bullet: Bullet, bulletTab: BulletTab) {
        let owner = AbsOwner.get(bullet.owner.objId)

        if (bullet.owner.isLock) {
            owner.setOwner(bullet.owner)
        }

        let parentSoleId = bullet.info.configTab.NoHarm ? bullet.bulletSoleId : ""
        if (parentSoleId != "") {
            if (bullet.endDamegeObj) {
                (bullet.endDamegeObj as AbsRole).addParentSoleId(parentSoleId)
            }
        }
        let havaDamageObjIds = []
        if (bullet.info.configTab.NoHarm) {
            havaDamageObjIds = bullet.havaDamageObjIds
        }

        let tmpGroupId = bullet.info.sonGroupId

        let startPos = new Vec3()
        switch (bulletTab.BulletBorn) {
            // case tab.BulletBorn.BulletBorn_Me:
            //     startPos.set(bullet.ownerRole.getHitPos())
            //     break
            case tab.BulletBorn.BulletBorn_She:
                startPos.set(bullet.getTruePosition())
                break
            case tab.BulletBorn.BulletBorn_Inherit:
                startPos.set(bullet.getTruePosition())
                break
        }

        let SearchEnemy_None = () => { //无目标， 就按照父子弹角度发射
            let target = tempTargetPos
            target.set(Vec3.ZERO)
            target.add(startPos)
            if (bulletTab.Trajectory != tab.Trajectory.Trajectory_Trackless) {
                target.add(bullet.velocity)
            }

            BulletControl.ins.emitBullet(bulletTab, owner, startPos, null, target, tmpGroupId, parentSoleId, havaDamageObjIds)
        }

        if (bulletTab.SearchEnemy == tab.SearchEnemy.SearchEnemy_None) { //无寻敌目标
            SearchEnemy_None()
            return
        }
        let ignores = this.getEnemyFiltrate(bullet, bullet.info.configTab.EnemyFiltrate)
        let enemy = SearchEnemy.getBySearchEnemy(owner.objId, bullet.owner.objType, startPos, bulletTab.EnemyUnit, bulletTab.SearchEnemy, ignores)
        if (enemy == null) {
            SearchEnemy_None()
            return
        }
        BulletControl.ins.emitBullet(bulletTab, owner, startPos, enemy, null, tmpGroupId, parentSoleId, havaDamageObjIds)
        if (enemy && bullet.info.configTab.EnemyFiltrate == tab.EnemyFiltrate.EnemyFiltrate_NoSelectSame) { //子系不选同目标，把id放在父子弹内
            bullet.havaDamageObjIds.push(enemy.objId)
        }
    }

    getEnemyFiltrate(bullet: Bullet, enemyFiltrate: tab.EnemyFiltrate) {
        switch (enemyFiltrate) {
            case tab.EnemyFiltrate.EnemyFiltrate_CanSelectlast:// 可选上一个目标 
                return bullet.havaDamageObjIds.slice(-1)
            case tab.EnemyFiltrate.EnemyFiltrate_Ignorelast: // 忽略上一个目标 
                return bullet.havaDamageObjIds.slice(-2)
            case tab.EnemyFiltrate.EnemyFiltrate_NoSelectSame:// 忽略已攻击目标 
                return bullet.havaDamageObjIds
            case tab.EnemyFiltrate.EnemyFiltrate_NoSelectSame:// 忽略已攻击目标 
                return bullet.havaDamageObjIds
        }
        return []
    }


    /** 子弹分裂角度 */
    getFissionAngles(baseAngle: number, fissions: number[]) {
        if (fissions[0] == 1) {
            return MathAngle.getAverageEmitAnglesAngle(baseAngle, fissions[1], fissions[2])
        } else if (fissions[0] == 2) {
            return MathAngle.getAverageEmitAnglesAngle1(baseAngle, fissions[1], fissions[2])
        } else if (fissions[0] == 3) {
            return MathAngle.getAverageEmitAnglesAngle2(baseAngle, fissions[1], fissions[2])
        }
        return []
    }

    /** 子弹击中特效 */
    checkHitEffect(bullet: Bullet, defanseAbs: AbsRole) {
        if (bullet.info.configTab.HitEffect.length) {
            EventMgr.emitFight(FightEvent.Hit_Effect_Add, bullet.info.configTab.HitEffect, bullet.startPos, defanseAbs.getHitPos())
        }
    }

}


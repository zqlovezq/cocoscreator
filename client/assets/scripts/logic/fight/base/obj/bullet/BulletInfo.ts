import { _decorator, Component } from "cc";
import { AbsObjInfo, AbsObjInfoAttr } from "../AbsObjInfo";
import { tab } from "../../../../../Table/table_gen";
import { BulletForwardArrow, FightMacro } from "../../../define/FightDefine";
import { AbsObjType } from "../AbsObj";
import { BulletTab } from "../../../power/powerTab/BulletTab";

const { ccclass, property } = _decorator;

@ccclass('BulletInfo')
export class BulletInfo extends AbsObjInfo {
    objType: AbsObjType = AbsObjType.bullet;
    configTab: BulletTab

    parentSoleId: string = "" //父子弹唯一id
    ScreenBounceCount: number = 0
    sonGroupId: number = 0 //产生出的子弹组id
    isInitInterval: boolean = false
    /** 伤害系数 */
    DamageScale: number = 0
    reset(): void {
        this.parentSoleId = ""
        this.ScreenBounceCount = 0
        this.DamageScale = 0
        this.sonGroupId = 0
        super.reset()
    }
    setConfigId(id: number) {
        super.setConfigId(id)
        this.setConfigTab(tab.getData().BulletTableById.getValue(id))
       
    }

    /** 组id, 同组衰减用 */
    get groupId() {
        return this.getObjAttr(AbsObjInfoAttr.bulletGroupId)
    }

    public setConfigTab(conf: any): void {
        super.setConfigId(conf.configId)
        super.setConfigTab(conf)
        this.DamageScale = this.configTab.DamageScale[0]
        if (this.configTab.isIntervalEffect()) {
            this.isInitInterval = false
            if (this.configTab.IntervalEffect[2]) {
                this.isInitInterval = true
            }
        }
    }

    /** 命中死亡 */
    isHitDeath() {
        return this.configTab.DeathType == tab.DeathType.DeathType_HitDeath
    }
    /** 生存时间死亡 */
    isTimeDeath() {
        return this.configTab.DeathType == tab.DeathType.DeathType_TimeDeath
    }
    /** 释放者死亡 */
    isOwnDeath() {
        return this.configTab.DeathType == tab.DeathType.DeathType_OwnDeath
    }

    /** 是否可穿透 */
    isPenetration() {
        return this.configTab.Penetration >= 0
    }

    /** 穿透死亡 */
    isPenetrationDeath() {
        return this.isPenetration() && this.getObjAttr(AbsObjInfoAttr.hitCount) > this.configTab.Penetration
    }

    /** 是否可弹射 */
    isCatapult() {
        return this.configTab.Catapult != 0
    }

    /** 弹射死亡 */
    isCatapultDeath() {
        return this.getObjAttr(AbsObjInfoAttr.catapultCount) > this.configTab.Catapult
    }

    /** 回旋(回弹) */
    isRound() {
        return this.configTab.Round.length > 0
    }

    /** 屏幕反弹 */
    isScreenBounce() {
        return this.configTab.ScreenBounce > 0
    }

    /** 旋转 */
    isRotate() {
        return this.configTab.Rotate != 0
    }
    /** 离心 */
    isCentrifugation() {
        return this.configTab.Centrifugation.length > 0
    }

    /** 多向剑类型 */
    isForwardArrowAndType(type: BulletForwardArrow) {
        if (this.configTab.ForwardArrow.length > 0) {
            return this.configTab.ForwardArrow[0] == type
        }
        return false
    }

    /** 是否有可添加buff */
    isHasAddBuff() {
        return this.configTab.AddBuff.length > 0
    }
    /** 相同子弹唯一 */
    isOlnyOne() {
        return this.configTab.OlnyOne
    }
    /** 子系伤害唯一  */
    isolnyOneSon() {
        return this.configTab.OlnyOneSon
    }

    /** 是否跟随发射者 */
    isForwardOwner() {
        return this.configTab.BulletType == tab.BulletType.BulletType_FollowingBullet
    }

    intervalTime() {
        if (this.isInitInterval) {
            console.log("时间间隔---",this.configTab.IntervalEffect[2])
            return this.configTab.IntervalEffect[2]
        }
        return this.configTab.IntervalEffect[0]
    }
    /** 出生音效 */
    bornSound() {
        return this.configTab.SoundId[0]
    }
    /** 命中音效 */
    hitSound() {
        return this.configTab.SoundId[1]
    }

    addScreenBounceCount() {
        this.ScreenBounceCount += 1
        this.DamageScale = this.DamageScale * (this.configTab.ScreenBounce / FightMacro.PERCENT)
    }

    getLiveTime() {
        if (this.configTab.Trajectory == tab.Trajectory.Trajectory_Trajectory) {
            let total = 0
            this.configTab.LiveTime.forEach(v => {
                total += v
            })
            console.log("直线轨迹", total)
            return total
        }
        return this.configTab.LiveTime[0]
    }
}
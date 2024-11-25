import { _decorator, Component } from "cc";
import { tab } from "../../../../Table/table_gen";
import { PowerBase } from "./PowerBase";
import { BoundsTab } from "./BoundsTab";
import { BuffTab } from "./BuffTab";
import { EffectTab } from "./EffectTab";

const { ccclass, property } = _decorator;

@ccclass('BulletTab')
export class BulletTab extends PowerBase {
    powerType: tab.PowerType = tab.PowerType.PowerType_BulletTable
    configTab: tab.BulletTable
    //---------------------配置字段-------------------
    Id: number // ID 
    BulletType: tab.BulletType // 子弹类型 
    BulletOffset: number[] // 跟随子弹偏移 
    Speed: number // 速度 
    Rating: number // 子弹层级 
    BornAnimationId: number // 出生动画 
    WalkAnimationId: number // 移动动画 
    DeadAnimationId: number // 死亡动画 
    Bounds: number[] // 包围盒组 
    BulletBorn: tab.BulletBorn // 子弹出生点 
    EnemyUnit: tab.EffectUnit // 索敌单位 
    SearchEnemy: tab.SearchEnemy // 索敌规则 
    EnemyFiltrate: tab.EnemyFiltrate // 索敌筛选 
    EffectUnit: tab.EffectUnit // 作用单位 
    Trajectory: tab.Trajectory // 子弹轨迹 
    ForwardArrow: number[] // 正向箭 
    Fission: number[] // 分裂 
    Penetration: number // 穿透 
    Catapult: number // 弹射 
    Round: number[] // 回旋 
    Rotate: number // 自旋 
    Centrifugation: number[] // 离心 
    ScreenBounce: number // 屏幕反弹 
    CommonShow: tab.CommonShow // 通用表现 
    IntervalEffect: number[] // 间隔时间效果 
    LiveTime: number[] // 生存时间 
    DamageTick: number // 伤害间隔 
    DamageScale: number[] // 子弹伤害系数 
    AddEffect: number[] // 子弹额外效果 
    DamageAmount: number // 子弹多段伤害 
    SameLow: number // 相同子弹衰减 
    HitChance: number // 命中触发概率 
    HitTrigger: number[] // 命中触发效果 
    HitEffect: number[] // 命中特效 
    HitShake: number // 命中抖动 
    AddBuffChance: number[] // buff触发概率 
    AddBuff: number[] // 加buff 
    CollisionInterval: number // 触碰间隔 
    DeathType: tab.DeathType // 死亡方式 
    DeathTrigger: number[] // 死亡触发子弹 
    OlnyOne: boolean // 相同子弹唯一 
    NoHarm: boolean // 子系忽视父系 
    OlnyOneSon: boolean // 子系伤害唯一 
    IsReviveClean: boolean // 复活清除 
    SoundId: number[] // 子弹音效 
    HitBack : number[] // 命中击退 

    //---------------------自有字段-------------------
    boundTabs: BoundsTab[] = []
    DeathTriggerTabs: BulletTab[] = []
    addBuffTabs: BuffTab[] = []
    hitTriggerTab: BulletTab = null
    addEffectTab: EffectTab[] = []
    intervalEffectBulletTab: BulletTab = null
    //跟随预留
    followOwner: number[] = []

    setConfigId(id: number) {
        super.setConfigId(id)
        // this.Bounds[0] = 4
        //包围盒配置
        for (let index = 0; index < this.Bounds.length; index++) {
            const v = this.Bounds[index];
            this.boundTabs.push(new BoundsTab(v))
        }

        //死亡触发子弹配置
        for (let index = 0; index < this.DeathTrigger.length; index++) {
            this.DeathTriggerTabs.push(this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_BulletTable, this.DeathTrigger[index]) as BulletTab)
        }

        //buff配置
        for (let index = 0; index < this.AddBuff.length; index++) {
            this.addBuffTabs.push(this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_BuffTable, this.AddBuff[index]) as BuffTab)
        }
        //命中触发子弹配置
        if (this.isHitTriggerBullet()) {
            this.hitTriggerTab = this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_BulletTable, this.HitTrigger[1]) as BulletTab
        }
        //效果配置
        for (let index = 0; index < this.AddEffect.length; index++) {
            this.addEffectTab.push(this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_EffectTable, this.AddEffect[index]) as EffectTab)
        }
        /*时间间隔产生子弹 */
        if (this.isIntervalEffect()) {
            this.intervalEffectBulletTab = this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_BulletTable, this.IntervalEffect[1]) as BulletTab
        }
    }

    addPowerValue(powerKey: string, powerValue: number, index: number) {
        if (powerKey == "Bounds") {
            let idx = Math.floor((index) / 4)
            let boundTab = this.boundTabs[idx]
            if (boundTab == null) {
                return
            }
            if (boundTab.Parameters[index] == null) {
                boundTab.Parameters[index] = 0
            }
            boundTab.Parameters[index] += powerValue
        } else {
            super.addPowerValue(powerKey, powerValue, index)
        }
    }

    isSearchNone() {
        return this.SearchEnemy == tab.SearchEnemy.SearchEnemy_None
    }

    /** 获取有效的动画，确定显示层级 */
    getValidAnimId() {
        return this.BornAnimationId || this.WalkAnimationId || this.DeadAnimationId
    }

    isExtends() {
        return this.BulletBorn == tab.BulletBorn.BulletBorn_Inherit
    }

    isHitTrigger() {
        return this.HitTrigger.length > 0
    }

    /** 命中触发子弹 */
    isHitTriggerBullet() {
        return this.HitTrigger[0] == 1
    }

    /** 命中触发更改速度 */
    isHitTriggerSpeed() {
        return this.HitTrigger[0] == 2
    }

    /** 是否间隔效果 */
    isIntervalEffect() {
        return this.IntervalEffect.length > 0
    }

    /** 是否发射遮罩 */
    isLaunchMask() {
        return this.CommonShow == tab.CommonShow.CommonShow_LaunchMask
    }

    isHitBack(){
        return this.HitBack.length > 0
    }
}
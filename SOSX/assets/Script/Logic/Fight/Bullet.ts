/**
 *  子弹类
 */

import { proto } from "../../Protocol/client_protocol"
import { tab } from "../../Table/table_gen"

import Tower from "./Tower"
import Effect from "../Common/Effect"
import ChessFightScene from "./ChessFightScene"
import { SpecialEffect } from "../Common/CommonInterface"

const { ccclass } = cc._decorator;

//let HitEffectLimit = 2;//15
// if(cc.sys.platform === cc.sys.WECHAT_GAME && cc.sys.os === cc.sys.OS_IOS) {
//     HitEffectLimit = 6;
// }

// 子弹是否追踪目标
const BULLET_TRACE_TARGET : boolean = false

@ccclass
export default
class Bullet extends cc.Component {
    public speed: number = 900

    private m_avatar: Effect = null
    private m_avatarCallback: Function = null
    private m_fightScene: ChessFightScene
    private m_attacker: Tower = null
    private m_damages: proto.IDamageData[]
    private m_skillConfig: tab.SkillTable = null
    private m_canHit: boolean = true // 只执行一次命中流程
    private m_curveTrack:cc.Vec2[] = null
    private m_targetPos:cc.Vec2 = null
    
    // 创建子弹对象
    public static create(skillID:number, damages: proto.IDamageData[], fight: ChessFightScene, attacker: Tower) {
        let node = new cc.Node
        let bullet = node.addComponent(Bullet)
        node.active = false
        bullet.m_fightScene = fight
        bullet.m_damages = damages
        bullet.m_attacker = attacker
        bullet.m_skillConfig = tab.Data.SkillTableByID.getValue(skillID)

        // 创建子弹动画
        if (bullet.m_skillConfig != null && bullet.m_skillConfig.BulletEffectID) {
            bullet.m_avatar = Effect.create(bullet.m_skillConfig.BulletEffectID, () => {
                if (bullet.m_avatarCallback != null) {
                    bullet.m_avatarCallback()
                }
            })
            node.addChild(bullet.m_avatar.node)
        }
        return bullet
    }

    // 设置朝向
    setFacedPos(pos: cc.Vec2) {
        let angle = cc.misc.radiansToDegrees(Math.atan2(pos.y, pos.x))
        this.node.angle = angle
    }

    // 获得主目标
    private GetTarget(): Tower {
        if (this.m_damages.length < 1) { return null }
        return this.m_fightScene.getTowerByInstanceID(this.m_damages[0].enmeyId)
    }

    // 运行动画
    run(startPos: cc.Vec2) {
        // 无配置则直接进入命中流程
        if (this.m_skillConfig == null || 
            this.m_skillConfig.Trace == tab.BulletTrace.BulletTrace_Empty || this.m_skillConfig.Trace == tab.BulletTrace.BulletTrace_None) {
            this.onHit()
            return
        }

        // 显示效果
        this.node.active = true
        // 修正起始攻击位置
        startPos = new cc.Vec2(startPos.x + this.m_skillConfig.BulletX, startPos.y + this.m_skillConfig.BulletY)
        this.node.setPosition(startPos)

        // 是否以自身为中心进行特效播放
        if (this.m_skillConfig.Trace == tab.BulletTrace.BulletTrace_Self) {
            //this.m_attacker.incEffectCount(1)
            if (this.m_avatar == null) {
                this.onHit()
            } else {
                this.m_avatarCallback = this.onHit.bind(this)
            }
            return
        }

        // 锁定所有攻击目标
        for (let i = 0;  i < this.m_damages.length; ++i) {
            let tower = this.m_fightScene.getTowerByInstanceID(this.m_damages[i].enmeyId)
            if (tower != null) {
                tower.incEffectCount(1)
            }
        }

        // 获得主目标
        let target = this.GetTarget()
        if (target == null) {
            this.onHit()
            return
        }

        // 是否以目标为中心进行特效播放
        if (this.m_skillConfig.Trace == tab.BulletTrace.BulletTrace_Target) {
            this.node.setPosition(target.node.getPosition())
            if (this.m_avatar == null) {
                this.onHit()
            } else {
                this.m_avatarCallback = this.onHit.bind(this)
            }
            return
        }
              
        // 朝向目标
        let facedPos = target.node.getPosition().sub(startPos)
        this.setFacedPos(facedPos)
        this.m_targetPos = target.node.getPosition()
    }

    // 减少特效计数
    private ReduceEffectCounter() {
        // if (this.m_skillConfig.Trace == tab.BulletTrace.BulletTrace_Self) {
        //     this.m_attacker.incEffectCount(-1)
        //     return
        // }
    }

    /*  */
    protected update(dt:number) {
        if (!this.m_canHit) {
            this.ReduceEffectCounter()
            this.node.removeFromParent()
            this.node.destroy()
            return
        }

        let isDone =  true
        switch (this.m_skillConfig.Trace) {
            case tab.BulletTrace.BulletTrace_Straight: // 直线轨迹
                isDone = this.onUpdateStraight(dt)
                break
            case tab.BulletTrace.BulletTrace_Curve: // 抛物线轨迹
                isDone = this.onUpdateCurve(dt)
                break
            default:
                return
        }

        if (isDone) {
            this.onHit()
        }
    }

    // 直线轨迹
    private onUpdateStraight(dt:number): boolean {
        // 获得主目标
        let target = this.GetTarget()
        if (target == null) { return true }

        // 移动距离
        let mv = this.speed * dt

        let curPos = this.node.getPosition()
        let targetPos = this.m_targetPos
        if (BULLET_TRACE_TARGET) {
            targetPos = target.node.getPosition()
        }
        
        let distPos = targetPos.sub(curPos)
        let dist = distPos.mag()

        // 检查是否达到目标点
        let reached = false
        if (this.m_skillConfig.HitRegion === tab.SkillHitRegion.SkillHitRegion_Edge) {
            let radius = tab.Data.GetKeyValue_ConfigTable().FightChessRadius
            if (dist <= mv + radius) {
                mv = dist > radius ? (dist - radius) : 0
                reached = true
            }
        } else {
            if (dist <= mv) {
                mv = dist
                reached = true
            }
        }
        // 计算最终位置
        curPos.addSelf(distPos.normalizeSelf().mulSelf(mv))
        // 调整朝向
        this.setFacedPos(targetPos.sub(curPos))
        // 移动
        this.node.setPosition(curPos)
        
        return reached
    }

    // 抛物线轨迹
    private onUpdateCurve(dt:number) : boolean {
        // 获得主目标
        let target = this.GetTarget()
        if (target == null) { return true }

        if (this.m_curveTrack == null) {
            // 初始化曲线参数
            let curPos = this.node.getPosition()
            let targetPos = this.m_targetPos
            if (BULLET_TRACE_TARGET) {
                targetPos = target.node.getPosition()
            }
            // 获得两点间距
            let length = targetPos.sub(curPos).mag()
            // 计算曲线运行时间
            let duration = length / this.speed * 1.5;
            // 初始化轨迹矩阵
            this.m_curveTrack = [
                cc.v2(0, duration),
                curPos,
                cc.v2(targetPos.x, targetPos.y + length * 0.4),
                targetPos
            ]
        }

        this.m_curveTrack[0].x += dt

        let reached = false
        let t = this.m_curveTrack[0].x / this.m_curveTrack[0].y
        if (t > 1.0) {
            // 到达目标点
            t = 1.0
            reached = true
        }
        let t0 = 1-t
        
        let curPos = cc.v2(
            t0*t0*this.m_curveTrack[1].x + 2*t*t0*this.m_curveTrack[2].x + t*t*this.m_curveTrack[3].x,
            t0*t0*this.m_curveTrack[1].y + 2*t*t0*this.m_curveTrack[2].y + t*t*this.m_curveTrack[3].y
        )

        // 边缘检查
        if (!reached && this.m_skillConfig.HitRegion === tab.SkillHitRegion.SkillHitRegion_Edge) {
            let radius = tab.Data.GetKeyValue_ConfigTable().FightChessRadius
            if (curPos.sub(this.m_curveTrack[3]).mag() <= radius){
                reached = true
            }
        }

        // 移动
        this.node.setPosition(curPos)

        return reached
    }
    
    // 击中
    private onHit() {
        this.m_canHit = false

        // 添加受击特效
        this.createHitEffect()

        // 攻击目标
        for (let i = 0; i < this.m_damages.length; i++) {
            let damageData = this.m_damages[i];
            let enemy = this.m_fightScene.getTowerByInstanceID(damageData.enmeyId);
            if (enemy) {
                enemy.incEffectCount(-1)
                // if (enemy.isAlive()) {
                    this.damageEnemy(enemy, damageData);
                // }
            }

            if (damageData.cure > 0) {
                this.m_attacker.Cure(damageData.cure)
            }
        }
    }

    // 添加受击特效
    private createHitEffect() {
        let effectID = this.m_skillConfig.HitEffectID
        if (effectID == 0) { return }
        // 获得主目标
        let target = this.GetTarget()
        if (target == null) { return }
        
        let effect = null

        // 创建特效
        // target.incEffectCount(1)
        // let cb = function() {
        //     target.incEffectCount(-1)
        // }
        if (this.m_skillConfig.HitRegion === tab.SkillHitRegion.SkillHitRegion_Edge) {
            effect = this.m_fightScene.addEffect(effectID, this.node.getPosition()/*, null, cb*/)
        } else {
            effect = this.m_fightScene.addEffect(effectID, target.node.getPosition()/*, null, cb*/)
        }
        effect.node.angle = this.node.angle
    }

    // 计算伤害
    private damageEnemy(enemy: Tower, damageData: proto.IDamageData) {
        enemy.changeHp(-damageData.damage, damageData.isCritical, damageData.isInstantKill, damageData.shieldReduce)
        // 添加攻击附加Buffer
        for (let i = 0; i < damageData.bufferList.length; i++) {
            enemy.AddBuff(damageData.bufferList[i].bufferID, damageData.bufferList[i].index)
        }

        // 播放秒杀特效
        if(damageData.isInstantKill){
            enemy.incEffectCount(1);
            this.m_fightScene.addEffect(SpecialEffect.INSTANTKILL,enemy.node.getPosition(),undefined,()=>{
                enemy.incEffectCount(-1)
            })
        }
    }
}

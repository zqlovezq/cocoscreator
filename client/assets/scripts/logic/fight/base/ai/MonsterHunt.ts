import { Vec3, View, game, size, v2, v3, view } from "cc";
import { AbsRole } from "../obj/role/AbsRole";
import { AbsObj } from "../obj/AbsObj";
import { AbsStateType } from "../obj/state/AbsState";
import { PlayerControl } from "../obj/role/role/PlayerControl";
import { SearchEnemy } from "./SearchEnemy";
import { Monster } from "../obj/role/monster/Monster";
import { tab } from "../../../../Table/table_gen";
import { Vector2 } from "../../../../framework/collision/Maths";

const enum HuntState {
    Warning = 1,
    Attack = 2
}
const tempPos = new Vec3(0, 0, 0);
const tempStartPos = new Vec3(0, 0, 0);

const Max_Time = 500
const Min_Time = 100
/** 
 * 怪物寻敌 
 */
export class MonsterHunt {

    abs: Monster
    targetRole: AbsRole

    checkTime: number = 500;
    nextCheck: number = 0; //下一轮时间

    setAbs(abs) {
        this.abs = abs
        this.checkTime = Max_Time
    }

    updateFrame(dt: number) {
        //--范围检测
        this.checkMove(dt)
    }

    findTarget() {
        if (this.targetRole == null || (this.targetRole && this.targetRole.isDead)) {
            this.targetRole = SearchEnemy.getBySearchEnemy(this.abs.objId, this.abs.objType, this.abs.getHitPos(), tab.EffectUnit.EffectUnit_Enemy, this.abs.info.configTab.SearchRules)
        }
        if (this.targetRole == null) {
            // console.log("怪物 根据锁敌规则， 没有找到敌人，根据默认规则再次查找")
        }
    }

    checkMove(dt: number) {
        if (this.abs.isDead) {
            return
        }
        this.nextCheck -= dt;
        if (this.nextCheck <= 0) {
            this.nextCheck = this.checkTime;
            this.targetRole = null
            this.findTarget()
            if (this.targetRole == null) {
                this.abs.velocity.x = this.abs.velocity.y = 0
                return
            }

            this.checkAttack()
        }
    }

    //检测攻击范围，发动攻击
    checkAttack(): void {
        tempPos.set(this.targetRole.getHitPos())
        let lengthSqr = Vector2.squaredDistance(this.abs.getHitPos(), tempPos)
        this.abs.info.onSkillTrigger(tab.Triggertype.Triggertype_SearchEnemy, { distance: lengthSqr })
        let sqr = this.abs.info.attackRange * this.abs.info.attackRange - lengthSqr
        //攻击半径
        if (sqr > 0) {
            this.checkTime = Max_Time
            this.onAttack()
        } else {
            if (sqr < -10000){
                this.checkTime = Min_Time
            }
            this.enterState(AbsStateType.roleMove)
            if (this.abs.getPosition().x < 100) {
                //计算朝目标行进方向
                tempPos.set(this.abs.getHitPos())
                this.abs.traceDirection(tempPos, this.targetRole.getHitPos())
            } else {
                this.abs.setVelocityAngle(180)
            }
        }
    }

    //进入攻击范围
    onAttack() {
        let nowSkill = this.abs.info.getNowSkill()
        if (nowSkill) {
            this.abs.velocity.x = this.abs.velocity.y = 0
            //检测技能是否可以释放
            if (nowSkill.isInCD(this.abs.info.attrData)) {
                // console.log("怪物技能cd,站这不动")
                return
            }
            if (this.abs.info.checkSkillEffectUnit(nowSkill) || this.abs.info.checSkillBulletEffectUnit(nowSkill)) {
                //进入攻击状态
                this.abs.changeState(AbsStateType.roleAttack)
            } else {
                // console.log("没有敌人")
            }
        }
    }


    enterState(state: AbsStateType) {
        if (this.abs.isState(state)) {
            return
        }
        this.abs.changeState(state)
    }
}
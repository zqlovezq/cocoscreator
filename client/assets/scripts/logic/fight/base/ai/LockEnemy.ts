import { Vec3, View, game, size, v2, view } from "cc";
import { AbsRole } from "../obj/role/AbsRole";
import { AbsObj } from "../obj/AbsObj";
import { AbsStateType } from "../obj/state/AbsState";

export enum LockEnemyState {
    default = 0,
    /** 预锁定 */
    preLock = 1,
    /** 锁定 */
    lock = 2
}

/** 
 * 锁定敌人 
 * 预锁定敌人 （在警戒范围内最近的敌人）角色移动到攻击范围内更改为锁定状态
 */
export class LockEnemy {
    state: LockEnemyState = LockEnemyState.default;
    owner: AbsObj;

    enemy: AbsObj
    constructor() {

    }


    setEnemys(enemys: AbsObj[]) {
        if (!this.owner.stateMachine.isState(AbsStateType.roleIdle)) {
            return
        }
        if (enemys.length > 0) {
            this.setEnemy(enemys[0])
        }
    }

    setOnwer(owner: AbsObj) {
        this.owner = owner
    }

    setEnemy(enemy: any) {
        if (this.enemy) {
            this.enemy.node.off("AbsRole_dead", this.onEnemyDead, this)
        }
        this.enemy = enemy;
        if (enemy) {
            this.enemy.node.on("AbsRole_dead", this.onEnemyDead, this)
            this.setState(LockEnemyState.preLock)
        } else {
            this.setState(LockEnemyState.default)
        }
    }

    setState(state: LockEnemyState) {
        this.state = state
        if (this.isPreLock()) {
            this.owner && this.owner.changeState(AbsStateType.roleMove)
        } else if (this.isLock()) {
            this.owner && this.owner.changeState(AbsStateType.roleAttack)
        } else {
            // this.owner && this.owner.changeState(AbsStateType.roleIdle)
        }
    }


    /** 是否为锁敌状态 */
    isLock() {
        return this.state == LockEnemyState.lock
    }

    /** 是否为预锁定状态 */
    isPreLock() {
        return this.state == LockEnemyState.preLock
    }

    /** 是否为死亡（default）状态 */
    isDead() {
        return this.state == LockEnemyState.default || (this.enemy == null || this.enemy.isDead)
    }

    onEnemyDead(e: AbsRole) {
        this.setEnemy(null)
    }
}
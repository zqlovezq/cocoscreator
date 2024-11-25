import { resources, JsonAsset } from "cc"

export enum PhaseclearType {
    /** 时间 */
    time = 1,
    /** boss死亡 */
    bossDead = 2,
    /** 全部死亡 */
    allDead = 3
}
const defaultAddTime = 1

/** 关卡配置 */
export class Leveljson {
    static create(path: string) {
        let json: JsonAsset = resources.get("leveljson/" + path, JsonAsset)

        let dd = new Leveljson()
        dd.initData(json.json)
        return dd
    }

    initData(json: any) {
        this.drop = json.drop
        for (let i = 0; i < json.phaseList.length; i++) {
            let dd = new LevelPhase()
            dd.phase = json.phaseList[i].phase
            dd.phaseclearcondition = json.phaseList[i].phaseclearcondition
            dd.phaseTime = json.phaseList[i].phasetime
            dd.times = []
            this.phaseList.push(dd)
            for (let j = 0; j < json.phaseList[i].times.length; j++) {
                let time = json.phaseList[i].times[j]
                let lt = new LevelPhaseTime()
                for (const key in time) {
                    lt[key] = time[key];
                }
                lt.init()
                dd.times.push(lt)
                lt.time += defaultAddTime
            }
            dd.phaseOverTime = dd.phaseTime
            if (dd.phaseOverTime == 0) {
                if (dd.times.length) {
                    dd.phaseOverTime = dd.times[dd.times.length - 1].time + 1
                }
            }
            dd.phaseOverTime += 1
        }

        console.log("aa", this)
    }

    getTotalTime() {
        let total = 0
        for (let index = 0; index < this.phaseList.length; index++) {
            const v = this.phaseList[index];
            total += v.phaseTime
        }
        return total
    }

    drop: number[] = []
    phaseList: LevelPhase[] = []

    levelPhase: LevelPhase //当前阶段

    nowTimeIndex: number
    nowTime: LevelPhaseTime

    setNowPhase(phase: number) {
        this.levelPhase = this.phaseList[phase]
        this.nowTimeIndex = 0
        this.nowTime = null
    }

    hasPhase(phaseIndex: number) {
        return this.phaseList[phaseIndex]
    }

}

export class LevelPhase {
    phase: number
    phaseclearcondition: PhaseclearType
    phaseTime: number
    times: LevelPhaseTime[]
    phaseOverTime: number
}

export class LevelPhaseTime {
    /** 时间 */
    time: number
    /** 怪物id */
    monsterId: number
    /** 出现次数 */
    count: number
    /** 是否块内随机 */
    isRand: number
    /** 出现间隔 */
    cycles: number
    /** 攻击 */
    attack: number
    /** 血量 */
    hp: number
    /** 防御 */
    def: number
    /** 抗暴 */
    resistcritical: number
    /** 减伤系数修正 */
    damrefix = 66
    /** 速度 */
    spe: number
    /** 经验 */
    exp: number
    /** 掉落 */
    drop: number
    /** 出现位置块 */
    position: number[]
    /** 警告：1.怪潮、2.BOSS */
    warning: number

    init() {
        this.cycles = this.cycles || 0
        if (this.isMonster()) {
            this.cycles = this.cycles * 1000
        }
    }

    inTime: boolean = false //是否进入时间

    isMonster() {
        return this.monsterId != undefined
    }

    isWarning() {
        return this.warning != undefined
    }

    /** 结束时间 */
    overTime() {
        if (this.cycles && this.count) {
            return this.time + Math.ceil(this.cycles * this.count / 1000)
        }
        return this.time
    }
    /** 当前次数 */
    nowCount: number = 1

    isCyclesOver() {
        if (this.cycles == 0) {
            return true
        }
        return this.nowCount >= this.count
    }

    dt: number = 0
    updateTime(_dt: number) {
        if (this.inTime && this.count && this.count != this.nowCount) {
            this.dt += _dt
            if (this.dt >= this.cycles) {
                this.dt -= this.cycles
                this.nowCount += 1
                return true
            }
        }

        return false
    }
}

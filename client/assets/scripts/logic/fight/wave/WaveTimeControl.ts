import { _decorator, CCInteger, Color, Component, director, instantiate, Label, Node, Prefab, Quat, Rect, sp, Sprite, tween, UITransform, Vec2, Vec3, view } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { Leveljson, LevelPhaseTime, PhaseclearType } from '../table/Leveljson';
import { MonsterControl } from '../base/obj/role/monster/MonsterControl';
import { FightRootControl, FightState } from '../FightRootControl';
import { EventMgr } from '../../mgr/EventMgr';
import { FightEvent } from '../define/FightEvent';
import { AbsRole } from '../base/obj/role/AbsRole';
import { Monster } from '../base/obj/role/monster/Monster';
import { FrameControl } from '../base/frame/FrameControl';
import { AbsObjType } from '../base/obj/AbsObj';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { PlayerControl } from '../base/obj/role/role/PlayerControl';
import { FightData } from '../data/FightData';
import { ViewName } from '../../define/ViewDefine';
import { IFightUpdate } from '../define/FightDefine';
import { GuideController } from '../../guide/GuideController';
import { LocalEvent } from '../../define/LocalEvent';


const { ccclass, property } = _decorator;

const tempPos = new Vec3(0, 0, 0);
const Seconds_1000 = 1000;
/** 波次 时间 */
@ccclass('WaveTimeControl')
export class WaveTimeControl extends AbsControl implements IFightUpdate {

    private static _instance: WaveTimeControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new WaveTimeControl();
        }
        return this._instance;
    }
    levelJson: Leveljson = null
    /** 时间 秒 */
    secondsTime: number = 0
    //波次
    nowPhaseIndex: number = 0
    /** 当前总时间 */
    _nowTotalTime: number
    /** 总时间 */
    totalTime: number

    /** 阶段时间索引 */
    phaseTimeIndex: number = 0
    /** 阶段时间完成 */
    isPhaseTimeComplete: boolean = false

    /** 周期出怪数组 */
    Cycless: LevelPhaseTime[] = []


    private dtTime: number = 0
    init(): void {
        this.register()
        this.levelJson = null
        this.secondsTime = 0
        this.dtTime = 0
        this.nowPhaseIndex = 0
        this._nowTotalTime = 0
        this.isPhaseTimeComplete = false
        this.Cycless.length = 0
    }

    register(): void {
        EventMgr.onFight(FightEvent.Fight_Start, this.onFightStart, this)
        EventMgr.onFight(FightEvent.Fight_Monster_Dead, this.onFight_Monster_Dead, this)
        EventMgr.onFight(FightEvent.Select_leader, this.onSelect_leader, this)
    }

    onFightStart() {
        this.setStageJson(FightData.ins.levelJson)
    }


    onFight_Monster_Dead(abs: Monster) {
        if (!this.isPhaseTimeComplete) {//阶段时间未完成
            return
        }

        let isNext = false
        if (this.levelJson.levelPhase) {
            if (abs.info.isBoss && this.levelJson.levelPhase.phaseclearcondition == PhaseclearType.bossDead) {
                //boss死亡， 进入下一阶段
                isNext = true

            } else if (this.levelJson.levelPhase.phaseclearcondition == PhaseclearType.allDead) {
                //全部清除， 进入下一阶段
                isNext = FrameControl.ins.isAllDeadByObjType(AbsObjType.enemy)
            }
        }

        if (isNext) {
            this.checkNextPhase()
        }
    }

    onSelect_leader() {
        if (!FightRootControl.ins.isTime) {
            return
        }
        this.updateSeconds()
    }

    setStageJson(stageJson: Leveljson) {
        this.levelJson = stageJson
        this.totalTime = this.levelJson.getTotalTime()

        this.initPhase()
    }

    get nowTotalTime() {
        if (this.levelJson && this.levelJson.levelPhase) {
            return this._nowTotalTime + Math.min(this.levelJson.levelPhase.phaseTime, this.secondsTime)
        }
        return 0
    }

    initPhase() {
        this.secondsTime = 0
        this.nowPhaseIndex = 0
        this.Cycless.length = 0
        this.updatePhase()
    }

    /** 检测下一个阶段 */
    checkNextPhase() {
        if (this.levelJson.levelPhase.phaseclearcondition == PhaseclearType.time) {//时间---
            this.addPhaseCount()
        } else if (this.levelJson.levelPhase.phaseclearcondition == PhaseclearType.bossDead) {//BOSS死亡---
            let list: Monster[] = FrameControl.ins.getObjList(AbsObjType.enemy) as Monster[]
            for (let index = 0; index < list.length; index++) {
                const v = list[index];
                if (v.info && v.info.isBoss) {
                    if (!v.isDead) {
                        console.log("boss存活, 等待boss死亡---")
                        return
                    }
                }
            }
            this.addPhaseCount()
        } else if (this.levelJson.levelPhase.phaseclearcondition == PhaseclearType.allDead) {//全部清除---
            let isDead = FrameControl.ins.isAllDeadByObjType(AbsObjType.enemy)
            if (!isDead) {
                console.log("等待怪物全部清除---")
                return
            }
            this.addPhaseCount()
        }

    }
    /** 阶段完成 */
    phaseComplete() {
        this.isPhaseTimeComplete = true
        console.log("当前阶段时间完成---")
        this.checkNextPhase()
    }

    /** 增加阶段 */
    addPhaseCount() {
        if (!FightRootControl.ins.isFight()) {
            return
        }
        console.log("进入下一阶段---")
        this.isPhaseTimeComplete = false
        this.secondsTime = 0
        this.dtTime = 0

        this._nowTotalTime = 0
        for (let index = 0; index <= this.nowPhaseIndex; index++) {
            const v = this.levelJson.phaseList[index];
            if (v) {
                this._nowTotalTime += v.phaseTime
            }
        }


        this.nowPhaseIndex += 1
        if (this.levelJson.hasPhase(this.nowPhaseIndex)) {
            this.updatePhase()
        } else {
            this.isPhaseTimeComplete = true
            console.log("没有下一阶段---胜利？")
            EventMgr.emitFight(FightEvent.Clear_All_Monster)
            FightRootControl.ins.setState(FightState.end, true)
        }
    }

    updatePhase() {
        this.levelJson.setNowPhase(this.nowPhaseIndex)
        this.phaseTimeIndex = 0
        this.Cycless.length = 0
        EventMgr.emitFight(FightEvent.Enter_New_PhaseCount)
        if (PlayerControl.ins.getLeader() == null) {
            return
        }
        this.updateSeconds()
    }

    iFightUpdate(dt: number) {
        if (PlayerControl.ins.getLeader() == null) {
            return
        }
        if (!FightRootControl.ins.isTime) {
            return
        }
        if (this.isPhaseTimeComplete) {
            return
        }

        this.dtTime += dt

        for (let index = this.Cycless.length - 1; index >= 0; index--) {
            const v = this.Cycless[index];
            if (v.isCyclesOver()) {
                // console.log("触发移除", v)
                this.Cycless.splice(index, 1)
                continue
            }
            let isTrigger = v.updateTime(dt)
            isTrigger && this.inCycles(v)
        }

        if (this.dtTime > Seconds_1000) {
            this.dtTime -= Seconds_1000
            this.secondsTime += 1
            this.updateSeconds()
        }
    }

    /** 更新秒时间 */
    updateSeconds() {
        if (this.secondsTime == this.levelJson.levelPhase.phaseOverTime) {
            this.phaseComplete()
            return
        }

        let len = this.levelJson.levelPhase.times.length
        for (let index = this.phaseTimeIndex; index < len; index++) {
            const v = this.levelJson.levelPhase.times[index];
            if (v.time == this.secondsTime) {
                this.inLevelphaseTime(v)
                this.phaseTimeIndex = index
            }
        }
    }

    inLevelphaseTime(lpt: LevelPhaseTime) {
        lpt.inTime = true
        // console.log("处理", this.nowPhaseIndex, "时间index", lpt)
        if (lpt.isMonster()) {
            this.inMonster(lpt)
            if (!lpt.isCyclesOver()) {
                this.Cycless.push(lpt)
            } else if (lpt.cycles == 0) {
                for (let index = 1; index < lpt.count; index++) {
                    this.inMonster(lpt)
                }
            }
        } else if (lpt.isWarning()) {
            this.inWarning(lpt)
        }
    }

    inCycles(lpt: LevelPhaseTime) {
        // console.log("触发", this.nowPhaseIndex, "时间index", this.phaseTimeIndex, lpt.nowCount, lpt.count)
        if (lpt.isMonster()) {
            this.inMonster(lpt)
        } else if (lpt.isWarning()) {
            this.inWarning(lpt)
        }
    }

    inMonster(lpt: LevelPhaseTime) {
        // console.log("出怪")
        MonsterControl.ins.addMonsterByLevelPhaseTime(lpt)
    }

    inWarning(lpt: LevelPhaseTime) {
        console.log("警告")
        UIMgr.ins.show({ viewName: ViewName.WarningPop, data: lpt.warning })
        EventMgr.emitFight(FightEvent.Warning, lpt.warning)
    }
}


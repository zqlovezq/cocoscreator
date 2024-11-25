import { _decorator, CCInteger, Color, Component, director, instantiate, JsonAsset, Label, Node, Prefab, Quat, Rect, resources, sp, Sprite, SpriteAtlas, SpriteFrame, sys, tween, UITransform, Vec2, Vec3, view } from 'cc';
import { AbsControl } from '../../framework/base/IAbs';
import { Monster } from './base/obj/role/monster/Monster';
import { Func } from '../utils/Func';
import { ResMgr } from '../mgr/ResMgr';
import { FightUIView } from './FightUIView';
import { FightRootView } from './FightRootView';
import { AbsObj, AbsObjType } from './base/obj/AbsObj';
import { AbsObjFactory } from './base/obj/AbsObjFactory';
import { FrameControl } from './base/frame/FrameControl';
import { PlayerControl } from './base/obj/role/role/PlayerControl';
import { Avatar } from './animation/Avatar';
import { SceneMgr, ScenesName } from '../mgr/SceneMgr';
import { Loading } from '../model/Loading';
import { BulletControl } from './base/obj/bullet/BulletControl';
import { BuffControl } from './base/buff/BuffControl';
import { MonsterControl } from './base/obj/role/monster/MonsterControl';
import { DamageLab } from './base/damage/DamageLab';
import { tab } from '../../Table/table_gen';
import { BuffUI } from './base/buff/BuffUI';
import { Leveljson } from './table/Leveljson';
import { WaveTimeControl } from './wave/WaveTimeControl';
import { CommonTipsPop, CommonTipsPopCloseType } from '../model/common/CommonTipsPop';
import { ColliderMgr } from '../../framework/collision/ColliderMgr';
import { EffectUI } from './base/effect/EffectUI';
import { MonsterInfo } from './base/obj/role/monster/MonsterInfo';
import { RogueControl } from './view/rogue/RogueControl';
import { EventMgr } from '../mgr/EventMgr';
import { FightEvent } from './define/FightEvent';
import { DropControl } from './drop/DropControl';
import { FightMsgControl } from './FightMsgControl';
import { SkillPowers } from './power/SkillPowers';
import { FightData } from './data/FightData';
import Fixed from '../../framework/collision/Fixed';
import { FightEventControl } from './define/FightEventControl';
import { DamageCalculation } from './base/damage/DamageCalculation';
import { Random } from './util/Random';
import { TestAttr } from '../../TestAttr';
import { DamageData } from './base/damage/DamageData';
import { AbsOwner } from './base/obj/AbsOwner';
import { proto } from 'client_protocol';
import { DeadEffectUI } from './base/effect/DeadEffectUI';
import { FightMacro, IFightUpdate } from './define/FightDefine';
import { WorldBossControll } from './stage/WorldBossControll';
import { UIMgr } from '../mgr/UIMgr';
import { ViewName } from '../define/ViewDefine';
import { SkillControl } from './base/skill/SkillControl';
import { DamageStatisticsData } from './base/damage/DamageStatisticsData';
import { ShadowEffect } from './base/effect/ShadowEffect';
import Sound from '../utils/Sound';
import { LocalEvent } from '../define/LocalEvent';
import { GuideController } from '../guide/GuideController';
import { RevoltCheatControl } from './cheat/RevoltCheatControl';
import { FightGainBuffControl } from './gainBuff/FightGainBuffControl';
import { PvpUIView } from './pvp/PvpUIView';
import { PvpControl } from './pvp/PvpControl';
import { PvpObjFactory } from './pvp/obj/PvpObjFactory';

const { ccclass, property } = _decorator;

export enum FightState {
    /** 准备 */
    ready,
    /** 进行中 */
    ing,
    /** 结束 */
    end,
}

const tempPos = new Vec3(0, 0, 0);
@ccclass('FightRootControl')
export class FightRootControl extends AbsControl {
    private static _instance: FightRootControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new FightRootControl();
            this._instance.register()
        }
        return this._instance;
    }
    private rootView: FightRootView
    private uiView: FightUIView
    /** 退出中 */
    isExitIng: boolean = false


    /** 战斗状态 */
    _fightState: FightState = FightState.ready
    fightResult: proto.Msg_FinishStageReq.Result = proto.Msg_FinishStageReq.Result.Quit

    iUpdates: IFightUpdate[] = []
    init(): void {
        this.isExitIng = false
        FightData.ins.isDestory = false
        FightRootControl.ins.isTime = !FightMsgControl.ins.isTest
        this.setState(FightState.ready)

        DamageCalculation.init()
        AbsObjFactory.init()
        FrameControl.ins.init()
        PlayerControl.ins.init()
        BulletControl.ins.init()
        BuffControl.ins.init()
        MonsterControl.ins.init()
        WaveTimeControl.ins.init()
        RogueControl.ins.init()
        DropControl.ins.init()
        FightEventControl.ins.init()
        SkillControl.ins.init()
        FightGainBuffControl.ins.initRegister()
        RevoltCheatControl.ins.init()
        if (FightData.ins.isWorldAndGuildBoss()) {
            WorldBossControll.ins.init()
        }

        PvpControl.ins.init()

        console.log("init-----------")
        this.iUpdates.length = 0
        this.iUpdates.push(FightData.ins)
        this.iUpdates.push(DropControl.ins)
        this.iUpdates.push(RogueControl.ins)
        this.iUpdates.push(WaveTimeControl.ins)
        this.iUpdates.push(FrameControl.ins)
        this.iUpdates.push(PvpControl.ins)
    }

    register() {
    }

    setRoot(root: FightRootView) {
        this.rootView = root

        this.rootView.camera.position = tempPos.set(0.1, 0.1, 1)
    }
    setUIView(uiView: FightUIView) {
        this.uiView = uiView
    }
    setPvpUIView(uiView: PvpUIView) {
        this.uiView = uiView as any
    }

    getRootView() {
        return this.rootView
    }

    getUIView() {
        return this.uiView
    }

    getObjectsNode() {
        return this.rootView.objects
    }

    getBulletNode(isBelow: boolean) {
        return this.rootView.getBullet(isBelow)
    }
    getDamagesNode() {
        return this.rootView.damages
    }

    setState(state: FightState, checkEnd?: boolean) {
        if (this._fightState == FightState.end && state == FightState.end) {
            console.warn("已在结算状态，无需重复设置,喊程序看日志")
            if (FightData.ins.isDestory) {
                this.enterMain()
            }
            return
        }
        this._fightState = state
        if (this.isState(FightState.end) && checkEnd) {
            this.checkFightResult()
        }
    }
    isFight() {
        return this._fightState == FightState.ing
    }

    isState(state: FightState) {
        return this._fightState == state
    }

    onQuitFight() {
        console.log("quitFight-----------")
        this.setState(FightState.end)
        this.fightResult = proto.Msg_FinishStageReq.Result.Quit
        this.showFightResult()
    }

    checkRoleAllDead() {
        if (FrameControl.ins.isAllDeadByObjType(AbsObjType.role)) {
            //全部死亡
            this.setState(FightState.end, true)
        }
    }

    checkFightResult() {
        let roles = FrameControl.ins.getObjList(AbsObjType.role)
        let isWin = false
        for (let i = 0; i < roles.length; i++) {
            let role = roles[i]
            if (!role.isActive) {
                continue
            }
            if (!role.isDead) {
                isWin = true
                break
            }
        }

        let result
        if (isWin || FightData.ins.isWorldAndGuildBoss()) { //世界bosss都是胜利
            result = proto.Msg_FinishStageReq.Result.Win
        } else {
            result = proto.Msg_FinishStageReq.Result.Lose
        }

        this.fightResult = result;
        if (FightData.ins.isWorlBoss()) {
            UIMgr.ins.show({
                viewName: ViewName.FightWorldBossResultPop, data: {
                    cb: () => {
                        this.showFightResult()
                    }
                }
            })
        } else {
            this.showFightResult()
        }
    }

    showFightResult() {
        this.exitFight()
        let req = new proto.Msg_FinishStageReq()
        req.result = this.fightResult
        req.aliveSeconds = WaveTimeControl.ins.nowTotalTime || 0
        req.score = (FightData.ins.isWorldAndGuildBoss()) && WorldBossControll.ins.totalTackDamage
        req.killNum = DamageStatisticsData.ins.totalKill
        req.killBossNum = DamageStatisticsData.ins.bossKill
        req.collectFeatherNum = DropControl.ins.feather
        req.bossFightData = RevoltCheatControl.ins.getBossList()
        // if (FightData.ins.isMainLine()) {
        let record = new proto.MainStageCleardRecord()
        req.record = record
        record.stageId = FightData.ins.stageId
        record.weaponIds = RogueControl.ins.getNowSelectIdList()
        record.heroes = []

        let heros = PlayerControl.ins.getHeros()
        let totalDamage = 0
        for (let index = 0; index < heros.length; index++) {
            const element = heros[index];
            let hero = new proto.MainStageCleardRecord.StageHero()
            hero.heroItemId = element.itemId
            hero.level = element.level
            hero.damage = 0
            if (DamageStatisticsData.ins.getRoleById(heros[index].id)) {
                hero.damage = DamageStatisticsData.ins.getRoleById(heros[index].id).damage
                totalDamage += hero.damage
            }
            record.heroes.push(hero)
        }
        record.heroes.forEach(hero => {
            hero.damage = Math.floor(hero.damage * 100 / totalDamage)
        })
        // }

        FightMsgControl.ins.sendFightResult(req)
    }

    pvpEnd() {
        this.fightResult = proto.Msg_FinishStageReq.Result.Quit
        this.exitFight()
    }

    isTestChuguai: boolean = false
    testBulletId: number = 0
    testSkillGroupId: number = 0
    isBound: boolean
    isTime: boolean = false
    monsterAttack: boolean = true
    monsterMove: boolean = true
    damageToggle: boolean = false
    damageShow: boolean = true
    max: number = 0

    start() {
        this.setState(FightState.ing)
        EventMgr.emitFight(FightEvent.Fight_Start)
        if (!GuideController.ins.isInFightGuiding()) {
            EventMgr.emitFight(FightEvent.Fight_Start_Complete)
        }

        this.timeInMonster()
    }

    ingTime: number = 0
    iLen: number = 0
    dtSecTime: number = 0
    update(dt: number) {
        if (FightData.ins.pause) {
            return
        }
        if (this.isState(FightState.ready)) {
            return
        }
        // this.ingTime = new Date().getTime()
        if (this.isState(FightState.ing)) {
            dt = Fixed.toFixed(dt * 1000)
            this.iLen = this.iUpdates.length
            for (let index = 0; index < this.iLen; index++) {
                this.iUpdates[index].iFightUpdate(dt)
            }
            this.dtSecTime += dt
            if (this.dtSecTime >= FightMacro.SECOND) {
                this.dtSecTime -= FightMacro.SECOND
                EventMgr.emitFight(FightEvent.fight_Sec)
                DamageStatisticsData.ins.nextSec()
            }
        }
        FrameControl.ins.preCollider();
        ColliderMgr.inst.update(dt);
        FrameControl.ins.lateCollider();
        if (this.isExitIng && !FightData.ins.isDestory) {
            if (FightData.ins.isPvp) {
                this.onDestory()
            } else {
                if (FrameControl.ins.getHasLen() == 0) {
                    this.onDestory()
                }
            }
        }
        // console.log("消耗时间：", new Date().getTime() - this.ingTime)
    }

    lateUpdate(dt: number): void {

    }

    addObj(iFrame: any) {
        FrameControl.ins.addObj(iFrame)
    }

    removeObj(Iframe: any) {
        FrameControl.ins.removeObj(Iframe)
        AbsObjFactory.put(Iframe)
    }

    exitFight() {
        this.isExitIng = true

        this.rootView.scheduleOnce(() => {
            FrameControl.ins.recycleAll()
            PvpControl.ins.recycleAll()
            /** UI上需要回收资源的组件 */
            let uiRecycles = [DeadEffectUI, EffectUI]
            for (let index = 0; index < uiRecycles.length; index++) {
                const v = uiRecycles[index];
                let effs = this.rootView.node.getComponentsInChildren(v.name)
                effs.forEach(v => {
                    if (v.isValid && v.node.isValid) {
                        v["remove"]()
                    }
                })
            }
        })
    }

    onDestory() {
        console.log("战斗对象池销毁---")
        if (FightData.ins.isDestory) {
            return
        }
        FightData.ins.isDestory = true
        this.rootView.scheduleOnce(() => {
            AbsObjFactory.destroy()
            PvpObjFactory.destroy()
            BuffUI.destory()
            EffectUI.destory()
            ShadowEffect.destory()

            DamageLab.destroy()
            DamageData.destroy()
            AbsOwner.destroy()
            Avatar.destory()
            Sound.ins.destroyFightEffect()


            if (this.fightResult == proto.Msg_FinishStageReq.Result.Quit || FightMsgControl.ins.isTest) {
                this.enterMain()
            }
        })
    }
    lsit: number[] = [
        10001,
        10002,
        10003,
        10004,
        10101,
        10102,
        10103,
        10201,
        10202,
        10203,
    ]
    async enterMain() {
        PvpControl.ins.purge()
        PlayerControl.ins.destroy()
        FightData.ins.purge()
        SceneMgr.ins.leaveFight(FightMsgControl.ins.isTest)
    }


    timeInMonster() {

        // //定时刷怪
        let i = 1;
        this.rootView.schedule(() => {
            if (this.isExitIng) {
                return
            }
            let len = FrameControl.ins.getObjList(AbsObjType.enemy).length
            if (!this.isTestChuguai) {
                return
            }
            if (PlayerControl.ins.getLeader() == null) {
                return
            }
            if (len < this.max) {
                this.createEnemy(this.lsit[Func.random(0, this.lsit.length - 1)]);
                i++;
            }
        }, 0.1);
    }

    createEnemy(monsterId?: number) {
        let info = AbsObjFactory.getData(AbsObjType.enemy) as MonsterInfo
        info.setConfigId(monsterId || 1001)
        info.speed = 50
        info.setAttrList([
        ].concat(TestAttr.defanse))
        info.init()

        //以主角为中心进行刷怪
        tempPos.x = Func.random(0, 200)
        tempPos.y = Func.random(-300, 300)
        tempPos.z = 0
        MonsterControl.ins.addMonster(info, tempPos)
    }


    getCount() {
        return this.rootView.getRendderCout()
    }
}


import { JsonAsset, _decorator, director, js, resources } from "cc";
import { IClear } from "../../../framework/base/IAbs";
import { Leveljson } from "../table/Leveljson";
import { tab } from "../../../Table/table_gen";
import { SkillPowers } from "../power/SkillPowers";
import { EventMgr } from "../../mgr/EventMgr";
import { FightEvent } from "../define/FightEvent";
import { proto } from "client_protocol";
import { SkillTab } from "../power/powerTab/SkillTab";
import { DamageStatisticsData } from "../base/damage/DamageStatisticsData";
import { Func } from "../../utils/Func";
import { IFightUpdate } from "../define/FightDefine";
import { FightGainBuffControl } from "../gainBuff/FightGainBuffControl";
import { SettingsManager } from "../../model/role/SettingsManager";
import { GuideController } from "../../guide/GuideController";
import { BattleMainDataControl } from "../../model/home/battle/BattleMainDataControl";


const { ccclass, property } = _decorator;
const State_Json_Path = 'leveljson/%s'
/** 战斗数据 */
export class FightData implements IClear, IFightUpdate {

    private static _instance: FightData;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new FightData();
        }
        return this._instance;
    }
    static get time() {
        return FightData.ins.frameTime
    }

    /** 战斗已销毁 */
    isDestory: boolean = false

    stageJsonPath: string = ""
    frameTime: number = 0 //帧时间

    /** 关卡id */
    stageId: number = 0
    /** 关卡配置 */
    stageTab: tab.PveStageTable
    /** 关卡Json配置 */
    levelJson: Leveljson = null

    /** 复活次数 */
    reviceCount: number = 0
    /** 观看广告复活次数 */
    advertReviceCount: number = 0
    /** 复活次数 */
    private _pause: boolean = false
    /** 时间 */
    private _timeScale: number = 1

    fightInfo: proto.FightInfo


    /** 全局技能 战场携带*/
    skills: SkillTab[] = []
    /** 全局技能增强 */
    skillPowers: SkillPowers = new SkillPowers()

    isPvp: boolean = false
    fightPvp: proto.FightPvP
    fincaBattleFightRsp: proto.Msg_FincaBattleFightRsp
    purge(): void {
        this.isPvp = false
        this.skillPowers.clear()
        this.reviceCount = 0
        this.advertReviceCount = 0;
        this.timeScale = 1
        this.stageId = 0
        this.stageTab = null
        this.levelJson = null
        this._pause = false
        this.fightInfo = null
        this.skills.length = 0
        this.frameTime = 0
        this.fincaBattleFightRsp = null
    }

    init() {
        this.purge()
    }

    addReviceCount(isAdvert: boolean = false) {
        this.reviceCount += 1;
        if (isAdvert) {
            this.advertReviceCount += 1;
        }
        EventMgr.emitFight(FightEvent.Change_Revice_Count);
    }


    maxReviceCount() {
        return this.stageTab.ReviveNumber;
    }

    setFightInfo(info: proto.FightInfo) {
        this.isPvp = false
        this.fightInfo = info

        this.stageId = this.fightInfo.stageId
        this.stageTab = tab.getData().PveStageTableByStageId.getValue(this.fightInfo.stageId)

        // if(BattleMainDataControl.ins.getStageClearIds().length === 0){
        //     if(this.stageId===101){
        // this.stageTab.LevelArrange = tab.getData().GetKeyValue_ConfigTable().GuideStage;
        // this.stageTab.LevelBUFF = tab.getData().GetKeyValue_ConfigTable().GuideStageBuff;
        // this.stageTab.EggDropGroup =  tab.getData().GetKeyValue_ConfigTable().GuideStageFeatherGroup;
        // this.stageTab.RougeGroupId =  tab.getData().GetKeyValue_ConfigTable().GuideStageRogueGroup;
        // }
        // }else{
        //     if(this.stageId===101){
        //         this.stageTab.LevelArrange = "main_001-1";
        //         this.stageTab.LevelBUFF = [];
        //         this.stageTab.EggDropGroup = 1;
        //         this.stageTab.RougeGroupId = 1;
        //     }
        // }

        FightGainBuffControl.ins.init()
        // FightGainBuffControl.ins.addIds(this.stageTab.LevelBUFF)
        // if (this.isClimbTower()){
        //     let conf = tab.getData().ClimbTowerTableByStageId.getValue(this.fightInfo.stageId)
        //     if (conf){
        //         info.bufferList = info.bufferList.concat(conf.SkillShow)
        //     }
        // }
        FightGainBuffControl.ins.addIds(info.bufferList)


        this.stageJsonPath = js.formatStr(State_Json_Path, this.stageTab.LevelArrange)
        resources.load(this.stageJsonPath, JsonAsset)
    }

    setPvpInfo(info: proto.FightPvP) {
        this.fightPvp = info
        this.isPvp = true
        this.stageId = this.fightPvp.fightInfo[0].fightInfo.stageId
        this.stageTab = tab.getData().PveStageTableByStageId.getValue(this.stageId)
    }

    getPvpFightInfoByGroup(group: number) {
        return this.fightPvp.fightInfo[group]
    }

    loadLevelJson() {
        this.levelJson = Leveljson.create(this.stageTab.LevelArrange)
    }

    initSkill() {
        for (let index = 0; index < this.fightInfo.skillList.length; index++) {
            const skillId = this.fightInfo.skillList[index];
            let skill = this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_SkillTable, skillId) as SkillTab
            this.skills.push(skill)
        }
    }

    /** 战斗类型 */
    isStageType(_type: tab.PveStageType) {
        return this.stageTab.StageType == _type
    }

    isDropByType(_type: tab.EggDropType) {
        return this.stageTab.EggDropType == _type
    }

    /** 暂停 */
    get pause() {
        return this._pause
    }
    set pause(bool: boolean) {
        if (this._pause == bool) {
            return
        }
        this._pause = bool
        EventMgr.emitFight(FightEvent.Pause, bool)
    }

    get timeScale() {
        return this._timeScale
    }
    set timeScale(value: number) {
        this._timeScale = value
        director.getScheduler().setTimeScale(value)
        EventMgr.emitFight(FightEvent.Time_Scale, this._timeScale)
    }

    iFightUpdate(dt: number): void {
        this.frameTime += dt
    }

    /** 世界boss战斗类型 */
    isWorlBoss() {
        return this.isStageType(tab.PveStageType.PveStageType_WorldBoss)
    }
    /** 公会boss战斗类型 */
    isGuild() {
        return this.isStageType(tab.PveStageType.PveStageType_GuildBoss)
    }

    isWorldAndGuildBoss() {
        return this.isWorlBoss() || this.isGuild()
    }

    /** 爬塔 */
    isClimbTower() {
        return this.isStageType(tab.PveStageType.PveStageType_ClimbTower)
    }

    isMainLine(){
        return this.isStageType(tab.PveStageType.PveStageType_MainChapter)
    }

    /** 是否伤害飘字 */
    isDamage() {
        return SettingsManager.ins.getSetting("damage_flag");
    }

}
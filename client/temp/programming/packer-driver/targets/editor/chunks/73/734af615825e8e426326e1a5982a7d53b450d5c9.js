System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, JsonAsset, _decorator, director, js, resources, Leveljson, tab, SkillPowers, EventMgr, FightEvent, FightGainBuffControl, SettingsManager, FightData, _crd, ccclass, property, State_Json_Path;

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeveljson(extras) {
    _reporterNs.report("Leveljson", "../table/Leveljson", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillPowers(extras) {
    _reporterNs.report("SkillPowers", "../power/SkillPowers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "../power/powerTab/SkillTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFightUpdate(extras) {
    _reporterNs.report("IFightUpdate", "../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightGainBuffControl(extras) {
    _reporterNs.report("FightGainBuffControl", "../gainBuff/FightGainBuffControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingsManager(extras) {
    _reporterNs.report("SettingsManager", "../../model/role/SettingsManager", _context.meta, extras);
  }

  _export("FightData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      JsonAsset = _cc.JsonAsset;
      _decorator = _cc._decorator;
      director = _cc.director;
      js = _cc.js;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      Leveljson = _unresolved_2.Leveljson;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      SkillPowers = _unresolved_4.SkillPowers;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      FightEvent = _unresolved_6.FightEvent;
    }, function (_unresolved_7) {
      FightGainBuffControl = _unresolved_7.FightGainBuffControl;
    }, function (_unresolved_8) {
      SettingsManager = _unresolved_8.SettingsManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e434bfYjzpCkrbG3JAlamd6", "FightData", undefined);

      __checkObsolete__(['JsonAsset', '_decorator', 'director', 'js', 'resources']);

      ({
        ccclass,
        property
      } = _decorator);
      State_Json_Path = 'leveljson/%s';
      /** 战斗数据 */

      _export("FightData", FightData = class FightData {
        constructor() {
          /** 战斗已销毁 */
          this.isDestory = false;
          this.stageJsonPath = "";
          this.frameTime = 0;
          //帧时间

          /** 关卡id */
          this.stageId = 0;

          /** 关卡配置 */
          this.stageTab = void 0;

          /** 关卡Json配置 */
          this.levelJson = null;

          /** 复活次数 */
          this.reviceCount = 0;

          /** 观看广告复活次数 */
          this.advertReviceCount = 0;

          /** 复活次数 */
          this._pause = false;

          /** 时间 */
          this._timeScale = 1;
          this.fightInfo = void 0;

          /** 全局技能 战场携带*/
          this.skills = [];

          /** 全局技能增强 */
          this.skillPowers = new (_crd && SkillPowers === void 0 ? (_reportPossibleCrUseOfSkillPowers({
            error: Error()
          }), SkillPowers) : SkillPowers)();
          this.isPvp = false;
          this.fightPvp = void 0;
          this.fincaBattleFightRsp = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new FightData();
          }

          return this._instance;
        }

        static get time() {
          return FightData.ins.frameTime;
        }

        purge() {
          this.isPvp = false;
          this.skillPowers.clear();
          this.reviceCount = 0;
          this.advertReviceCount = 0;
          this.timeScale = 1;
          this.stageId = 0;
          this.stageTab = null;
          this.levelJson = null;
          this._pause = false;
          this.fightInfo = null;
          this.skills.length = 0;
          this.frameTime = 0;
          this.fincaBattleFightRsp = null;
        }

        init() {
          this.purge();
        }

        addReviceCount(isAdvert = false) {
          this.reviceCount += 1;

          if (isAdvert) {
            this.advertReviceCount += 1;
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Change_Revice_Count);
        }

        maxReviceCount() {
          return this.stageTab.ReviveNumber;
        }

        setFightInfo(info) {
          this.isPvp = false;
          this.fightInfo = info;
          this.stageId = this.fightInfo.stageId;
          this.stageTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(this.fightInfo.stageId); // if(BattleMainDataControl.ins.getStageClearIds().length === 0){
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

          (_crd && FightGainBuffControl === void 0 ? (_reportPossibleCrUseOfFightGainBuffControl({
            error: Error()
          }), FightGainBuffControl) : FightGainBuffControl).ins.init(); // FightGainBuffControl.ins.addIds(this.stageTab.LevelBUFF)
          // if (this.isClimbTower()){
          //     let conf = tab.getData().ClimbTowerTableByStageId.getValue(this.fightInfo.stageId)
          //     if (conf){
          //         info.bufferList = info.bufferList.concat(conf.SkillShow)
          //     }
          // }

          (_crd && FightGainBuffControl === void 0 ? (_reportPossibleCrUseOfFightGainBuffControl({
            error: Error()
          }), FightGainBuffControl) : FightGainBuffControl).ins.addIds(info.bufferList);
          this.stageJsonPath = js.formatStr(State_Json_Path, this.stageTab.LevelArrange);
          resources.load(this.stageJsonPath, JsonAsset);
        }

        setPvpInfo(info) {
          this.fightPvp = info;
          this.isPvp = true;
          this.stageId = this.fightPvp.fightInfo[0].fightInfo.stageId;
          this.stageTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(this.stageId);
        }

        getPvpFightInfoByGroup(group) {
          return this.fightPvp.fightInfo[group];
        }

        loadLevelJson() {
          this.levelJson = (_crd && Leveljson === void 0 ? (_reportPossibleCrUseOfLeveljson({
            error: Error()
          }), Leveljson) : Leveljson).create(this.stageTab.LevelArrange);
        }

        initSkill() {
          for (let index = 0; index < this.fightInfo.skillList.length; index++) {
            const skillId = this.fightInfo.skillList[index];
            let skill = this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_SkillTable, skillId);
            this.skills.push(skill);
          }
        }
        /** 战斗类型 */


        isStageType(_type) {
          return this.stageTab.StageType == _type;
        }

        isDropByType(_type) {
          return this.stageTab.EggDropType == _type;
        }
        /** 暂停 */


        get pause() {
          return this._pause;
        }

        set pause(bool) {
          if (this._pause == bool) {
            return;
          }

          this._pause = bool;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Pause, bool);
        }

        get timeScale() {
          return this._timeScale;
        }

        set timeScale(value) {
          this._timeScale = value;
          director.getScheduler().setTimeScale(value);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Time_Scale, this._timeScale);
        }

        iFightUpdate(dt) {
          this.frameTime += dt;
        }
        /** 世界boss战斗类型 */


        isWorlBoss() {
          return this.isStageType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PveStageType.PveStageType_WorldBoss);
        }
        /** 公会boss战斗类型 */


        isGuild() {
          return this.isStageType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PveStageType.PveStageType_GuildBoss);
        }

        isWorldAndGuildBoss() {
          return this.isWorlBoss() || this.isGuild();
        }
        /** 爬塔 */


        isClimbTower() {
          return this.isStageType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PveStageType.PveStageType_ClimbTower);
        }

        isMainLine() {
          return this.isStageType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PveStageType.PveStageType_MainChapter);
        }
        /** 是否伤害飘字 */


        isDamage() {
          return (_crd && SettingsManager === void 0 ? (_reportPossibleCrUseOfSettingsManager({
            error: Error()
          }), SettingsManager) : SettingsManager).ins.getSetting("damage_flag");
        }

      });

      FightData._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=734af615825e8e426326e1a5982a7d53b450d5c9.js.map
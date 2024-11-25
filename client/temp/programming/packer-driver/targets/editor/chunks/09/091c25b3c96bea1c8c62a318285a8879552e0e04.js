System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "client_protocol", "__unresolved_29", "__unresolved_30", "__unresolved_31", "__unresolved_32", "__unresolved_33", "__unresolved_34", "__unresolved_35", "__unresolved_36", "__unresolved_37", "__unresolved_38", "__unresolved_39", "__unresolved_40", "__unresolved_41", "__unresolved_42"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, AbsControl, Func, AbsObjType, AbsObjFactory, FrameControl, PlayerControl, Avatar, SceneMgr, BulletControl, BuffControl, MonsterControl, DamageLab, BuffUI, WaveTimeControl, ColliderMgr, EffectUI, RogueControl, EventMgr, FightEvent, DropControl, FightMsgControl, FightData, Fixed, FightEventControl, DamageCalculation, TestAttr, DamageData, AbsOwner, proto, DeadEffectUI, FightMacro, WorldBossControll, UIMgr, ViewName, SkillControl, DamageStatisticsData, ShadowEffect, Sound, GuideController, RevoltCheatControl, FightGainBuffControl, PvpControl, PvpObjFactory, _dec, _class, _class2, _crd, ccclass, property, FightState, tempPos, FightRootControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightUIView(extras) {
    _reporterNs.report("FightUIView", "./FightUIView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootView(extras) {
    _reporterNs.report("FightRootView", "./FightRootView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "./base/obj/AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjFactory(extras) {
    _reporterNs.report("AbsObjFactory", "./base/obj/AbsObjFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrameControl(extras) {
    _reporterNs.report("FrameControl", "./base/frame/FrameControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "./base/obj/role/role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAvatar(extras) {
    _reporterNs.report("Avatar", "./animation/Avatar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneMgr(extras) {
    _reporterNs.report("SceneMgr", "../mgr/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletControl(extras) {
    _reporterNs.report("BulletControl", "./base/obj/bullet/BulletControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffControl(extras) {
    _reporterNs.report("BuffControl", "./base/buff/BuffControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterControl(extras) {
    _reporterNs.report("MonsterControl", "./base/obj/role/monster/MonsterControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageLab(extras) {
    _reporterNs.report("DamageLab", "./base/damage/DamageLab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffUI(extras) {
    _reporterNs.report("BuffUI", "./base/buff/BuffUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaveTimeControl(extras) {
    _reporterNs.report("WaveTimeControl", "./wave/WaveTimeControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfColliderMgr(extras) {
    _reporterNs.report("ColliderMgr", "../../framework/collision/ColliderMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectUI(extras) {
    _reporterNs.report("EffectUI", "./base/effect/EffectUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterInfo(extras) {
    _reporterNs.report("MonsterInfo", "./base/obj/role/monster/MonsterInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueControl(extras) {
    _reporterNs.report("RogueControl", "./view/rogue/RogueControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "./define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropControl(extras) {
    _reporterNs.report("DropControl", "./drop/DropControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMsgControl(extras) {
    _reporterNs.report("FightMsgControl", "./FightMsgControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "./data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFixed(extras) {
    _reporterNs.report("Fixed", "../../framework/collision/Fixed", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEventControl(extras) {
    _reporterNs.report("FightEventControl", "./define/FightEventControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageCalculation(extras) {
    _reporterNs.report("DamageCalculation", "./base/damage/DamageCalculation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestAttr(extras) {
    _reporterNs.report("TestAttr", "../../TestAttr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageData(extras) {
    _reporterNs.report("DamageData", "./base/damage/DamageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsOwner(extras) {
    _reporterNs.report("AbsOwner", "./base/obj/AbsOwner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeadEffectUI(extras) {
    _reporterNs.report("DeadEffectUI", "./base/effect/DeadEffectUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "./define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFightUpdate(extras) {
    _reporterNs.report("IFightUpdate", "./define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorldBossControll(extras) {
    _reporterNs.report("WorldBossControll", "./stage/WorldBossControll", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillControl(extras) {
    _reporterNs.report("SkillControl", "./base/skill/SkillControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageStatisticsData(extras) {
    _reporterNs.report("DamageStatisticsData", "./base/damage/DamageStatisticsData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShadowEffect(extras) {
    _reporterNs.report("ShadowEffect", "./base/effect/ShadowEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSound(extras) {
    _reporterNs.report("Sound", "../utils/Sound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../guide/GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRevoltCheatControl(extras) {
    _reporterNs.report("RevoltCheatControl", "./cheat/RevoltCheatControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightGainBuffControl(extras) {
    _reporterNs.report("FightGainBuffControl", "./gainBuff/FightGainBuffControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpUIView(extras) {
    _reporterNs.report("PvpUIView", "./pvp/PvpUIView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpControl(extras) {
    _reporterNs.report("PvpControl", "./pvp/PvpControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpObjFactory(extras) {
    _reporterNs.report("PvpObjFactory", "./pvp/obj/PvpObjFactory", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      Func = _unresolved_3.Func;
    }, function (_unresolved_4) {
      AbsObjType = _unresolved_4.AbsObjType;
    }, function (_unresolved_5) {
      AbsObjFactory = _unresolved_5.AbsObjFactory;
    }, function (_unresolved_6) {
      FrameControl = _unresolved_6.FrameControl;
    }, function (_unresolved_7) {
      PlayerControl = _unresolved_7.PlayerControl;
    }, function (_unresolved_8) {
      Avatar = _unresolved_8.Avatar;
    }, function (_unresolved_9) {
      SceneMgr = _unresolved_9.SceneMgr;
    }, function (_unresolved_10) {
      BulletControl = _unresolved_10.BulletControl;
    }, function (_unresolved_11) {
      BuffControl = _unresolved_11.BuffControl;
    }, function (_unresolved_12) {
      MonsterControl = _unresolved_12.MonsterControl;
    }, function (_unresolved_13) {
      DamageLab = _unresolved_13.DamageLab;
    }, function (_unresolved_14) {
      BuffUI = _unresolved_14.BuffUI;
    }, function (_unresolved_15) {
      WaveTimeControl = _unresolved_15.WaveTimeControl;
    }, function (_unresolved_16) {
      ColliderMgr = _unresolved_16.ColliderMgr;
    }, function (_unresolved_17) {
      EffectUI = _unresolved_17.EffectUI;
    }, function (_unresolved_18) {
      RogueControl = _unresolved_18.RogueControl;
    }, function (_unresolved_19) {
      EventMgr = _unresolved_19.EventMgr;
    }, function (_unresolved_20) {
      FightEvent = _unresolved_20.FightEvent;
    }, function (_unresolved_21) {
      DropControl = _unresolved_21.DropControl;
    }, function (_unresolved_22) {
      FightMsgControl = _unresolved_22.FightMsgControl;
    }, function (_unresolved_23) {
      FightData = _unresolved_23.FightData;
    }, function (_unresolved_24) {
      Fixed = _unresolved_24.default;
    }, function (_unresolved_25) {
      FightEventControl = _unresolved_25.FightEventControl;
    }, function (_unresolved_26) {
      DamageCalculation = _unresolved_26.DamageCalculation;
    }, function (_unresolved_27) {
      TestAttr = _unresolved_27.TestAttr;
    }, function (_unresolved_28) {
      DamageData = _unresolved_28.DamageData;
    }, function (_unresolved_29) {
      AbsOwner = _unresolved_29.AbsOwner;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_30) {
      DeadEffectUI = _unresolved_30.DeadEffectUI;
    }, function (_unresolved_31) {
      FightMacro = _unresolved_31.FightMacro;
    }, function (_unresolved_32) {
      WorldBossControll = _unresolved_32.WorldBossControll;
    }, function (_unresolved_33) {
      UIMgr = _unresolved_33.UIMgr;
    }, function (_unresolved_34) {
      ViewName = _unresolved_34.ViewName;
    }, function (_unresolved_35) {
      SkillControl = _unresolved_35.SkillControl;
    }, function (_unresolved_36) {
      DamageStatisticsData = _unresolved_36.DamageStatisticsData;
    }, function (_unresolved_37) {
      ShadowEffect = _unresolved_37.ShadowEffect;
    }, function (_unresolved_38) {
      Sound = _unresolved_38.default;
    }, function (_unresolved_39) {
      GuideController = _unresolved_39.GuideController;
    }, function (_unresolved_40) {
      RevoltCheatControl = _unresolved_40.RevoltCheatControl;
    }, function (_unresolved_41) {
      FightGainBuffControl = _unresolved_41.FightGainBuffControl;
    }, function (_unresolved_42) {
      PvpControl = _unresolved_42.PvpControl;
    }, function (_unresolved_43) {
      PvpObjFactory = _unresolved_43.PvpObjFactory;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "321e8E3me1CgLInIZOjrZgJ", "FightRootControl", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Color', 'Component', 'director', 'instantiate', 'JsonAsset', 'Label', 'Node', 'Prefab', 'Quat', 'Rect', 'resources', 'sp', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'sys', 'tween', 'UITransform', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightState", FightState = /*#__PURE__*/function (FightState) {
        FightState[FightState["ready"] = 0] = "ready";
        FightState[FightState["ing"] = 1] = "ing";
        FightState[FightState["end"] = 2] = "end";
        return FightState;
      }({}));

      tempPos = new Vec3(0, 0, 0);

      _export("FightRootControl", FightRootControl = (_dec = ccclass('FightRootControl'), _dec(_class = (_class2 = class FightRootControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor(...args) {
          super(...args);
          this.rootView = void 0;
          this.uiView = void 0;

          /** 退出中 */
          this.isExitIng = false;

          /** 战斗状态 */
          this._fightState = FightState.ready;
          this.fightResult = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_FinishStageReq.Result.Quit;
          this.iUpdates = [];
          this.isTestChuguai = false;
          this.testBulletId = 0;
          this.testSkillGroupId = 0;
          this.isBound = void 0;
          this.isTime = false;
          this.monsterAttack = true;
          this.monsterMove = true;
          this.damageToggle = false;
          this.damageShow = true;
          this.max = 0;
          this.ingTime = 0;
          this.iLen = 0;
          this.dtSecTime = 0;
          this.lsit = [10001, 10002, 10003, 10004, 10101, 10102, 10103, 10201, 10202, 10203];
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new FightRootControl();

            this._instance.register();
          }

          return this._instance;
        }

        init() {
          this.isExitIng = false;
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isDestory = false;
          FightRootControl.ins.isTime = !(_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.isTest;
          this.setState(FightState.ready);
          (_crd && DamageCalculation === void 0 ? (_reportPossibleCrUseOfDamageCalculation({
            error: Error()
          }), DamageCalculation) : DamageCalculation).init();
          (_crd && AbsObjFactory === void 0 ? (_reportPossibleCrUseOfAbsObjFactory({
            error: Error()
          }), AbsObjFactory) : AbsObjFactory).init();
          (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
            error: Error()
          }), FrameControl) : FrameControl).ins.init();
          (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.init();
          (_crd && BulletControl === void 0 ? (_reportPossibleCrUseOfBulletControl({
            error: Error()
          }), BulletControl) : BulletControl).ins.init();
          (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
            error: Error()
          }), BuffControl) : BuffControl).ins.init();
          (_crd && MonsterControl === void 0 ? (_reportPossibleCrUseOfMonsterControl({
            error: Error()
          }), MonsterControl) : MonsterControl).ins.init();
          (_crd && WaveTimeControl === void 0 ? (_reportPossibleCrUseOfWaveTimeControl({
            error: Error()
          }), WaveTimeControl) : WaveTimeControl).ins.init();
          (_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
            error: Error()
          }), RogueControl) : RogueControl).ins.init();
          (_crd && DropControl === void 0 ? (_reportPossibleCrUseOfDropControl({
            error: Error()
          }), DropControl) : DropControl).ins.init();
          (_crd && FightEventControl === void 0 ? (_reportPossibleCrUseOfFightEventControl({
            error: Error()
          }), FightEventControl) : FightEventControl).ins.init();
          (_crd && SkillControl === void 0 ? (_reportPossibleCrUseOfSkillControl({
            error: Error()
          }), SkillControl) : SkillControl).ins.init();
          (_crd && FightGainBuffControl === void 0 ? (_reportPossibleCrUseOfFightGainBuffControl({
            error: Error()
          }), FightGainBuffControl) : FightGainBuffControl).ins.initRegister();
          (_crd && RevoltCheatControl === void 0 ? (_reportPossibleCrUseOfRevoltCheatControl({
            error: Error()
          }), RevoltCheatControl) : RevoltCheatControl).ins.init();

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isWorldAndGuildBoss()) {
            (_crd && WorldBossControll === void 0 ? (_reportPossibleCrUseOfWorldBossControll({
              error: Error()
            }), WorldBossControll) : WorldBossControll).ins.init();
          }

          (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.init();
          console.log("init-----------");
          this.iUpdates.length = 0;
          this.iUpdates.push((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins);
          this.iUpdates.push((_crd && DropControl === void 0 ? (_reportPossibleCrUseOfDropControl({
            error: Error()
          }), DropControl) : DropControl).ins);
          this.iUpdates.push((_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
            error: Error()
          }), RogueControl) : RogueControl).ins);
          this.iUpdates.push((_crd && WaveTimeControl === void 0 ? (_reportPossibleCrUseOfWaveTimeControl({
            error: Error()
          }), WaveTimeControl) : WaveTimeControl).ins);
          this.iUpdates.push((_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
            error: Error()
          }), FrameControl) : FrameControl).ins);
          this.iUpdates.push((_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins);
        }

        register() {}

        setRoot(root) {
          this.rootView = root;
          this.rootView.camera.position = tempPos.set(0.1, 0.1, 1);
        }

        setUIView(uiView) {
          this.uiView = uiView;
        }

        setPvpUIView(uiView) {
          this.uiView = uiView;
        }

        getRootView() {
          return this.rootView;
        }

        getUIView() {
          return this.uiView;
        }

        getObjectsNode() {
          return this.rootView.objects;
        }

        getBulletNode(isBelow) {
          return this.rootView.getBullet(isBelow);
        }

        getDamagesNode() {
          return this.rootView.damages;
        }

        setState(state, checkEnd) {
          if (this._fightState == FightState.end && state == FightState.end) {
            console.warn("已在结算状态，无需重复设置,喊程序看日志");

            if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.isDestory) {
              this.enterMain();
            }

            return;
          }

          this._fightState = state;

          if (this.isState(FightState.end) && checkEnd) {
            this.checkFightResult();
          }
        }

        isFight() {
          return this._fightState == FightState.ing;
        }

        isState(state) {
          return this._fightState == state;
        }

        onQuitFight() {
          console.log("quitFight-----------");
          this.setState(FightState.end);
          this.fightResult = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_FinishStageReq.Result.Quit;
          this.showFightResult();
        }

        checkRoleAllDead() {
          if ((_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
            error: Error()
          }), FrameControl) : FrameControl).ins.isAllDeadByObjType((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).role)) {
            //全部死亡
            this.setState(FightState.end, true);
          }
        }

        checkFightResult() {
          let roles = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
            error: Error()
          }), FrameControl) : FrameControl).ins.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).role);
          let isWin = false;

          for (let i = 0; i < roles.length; i++) {
            let role = roles[i];

            if (!role.isActive) {
              continue;
            }

            if (!role.isDead) {
              isWin = true;
              break;
            }
          }

          let result;

          if (isWin || (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isWorldAndGuildBoss()) {
            //世界bosss都是胜利
            result = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_FinishStageReq.Result.Win;
          } else {
            result = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_FinishStageReq.Result.Lose;
          }

          this.fightResult = result;

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isWorlBoss()) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).FightWorldBossResultPop,
              data: {
                cb: () => {
                  this.showFightResult();
                }
              }
            });
          } else {
            this.showFightResult();
          }
        }

        showFightResult() {
          this.exitFight();
          let req = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_FinishStageReq();
          req.result = this.fightResult;
          req.aliveSeconds = (_crd && WaveTimeControl === void 0 ? (_reportPossibleCrUseOfWaveTimeControl({
            error: Error()
          }), WaveTimeControl) : WaveTimeControl).ins.nowTotalTime || 0;
          req.score = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isWorldAndGuildBoss() && (_crd && WorldBossControll === void 0 ? (_reportPossibleCrUseOfWorldBossControll({
            error: Error()
          }), WorldBossControll) : WorldBossControll).ins.totalTackDamage;
          req.killNum = (_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
            error: Error()
          }), DamageStatisticsData) : DamageStatisticsData).ins.totalKill;
          req.killBossNum = (_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
            error: Error()
          }), DamageStatisticsData) : DamageStatisticsData).ins.bossKill;
          req.collectFeatherNum = (_crd && DropControl === void 0 ? (_reportPossibleCrUseOfDropControl({
            error: Error()
          }), DropControl) : DropControl).ins.feather;
          req.bossFightData = (_crd && RevoltCheatControl === void 0 ? (_reportPossibleCrUseOfRevoltCheatControl({
            error: Error()
          }), RevoltCheatControl) : RevoltCheatControl).ins.getBossList(); // if (FightData.ins.isMainLine()) {

          let record = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).MainStageCleardRecord();
          req.record = record;
          record.stageId = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageId;
          record.weaponIds = (_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
            error: Error()
          }), RogueControl) : RogueControl).ins.getNowSelectIdList();
          record.heroes = [];
          let heros = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getHeros();
          let totalDamage = 0;

          for (let index = 0; index < heros.length; index++) {
            const element = heros[index];
            let hero = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).MainStageCleardRecord.StageHero();
            hero.heroItemId = element.itemId;
            hero.level = element.level;
            hero.damage = 0;

            if ((_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
              error: Error()
            }), DamageStatisticsData) : DamageStatisticsData).ins.getRoleById(heros[index].id)) {
              hero.damage = (_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
                error: Error()
              }), DamageStatisticsData) : DamageStatisticsData).ins.getRoleById(heros[index].id).damage;
              totalDamage += hero.damage;
            }

            record.heroes.push(hero);
          }

          record.heroes.forEach(hero => {
            hero.damage = Math.floor(hero.damage * 100 / totalDamage);
          }); // }

          (_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.sendFightResult(req);
        }

        pvpEnd() {
          this.fightResult = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_FinishStageReq.Result.Quit;
          this.exitFight();
        }

        start() {
          this.setState(FightState.ing);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Start);

          if (!(_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isInFightGuiding()) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Fight_Start_Complete);
          }

          this.timeInMonster();
        }

        update(dt) {
          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.pause) {
            return;
          }

          if (this.isState(FightState.ready)) {
            return;
          } // this.ingTime = new Date().getTime()


          if (this.isState(FightState.ing)) {
            dt = (_crd && Fixed === void 0 ? (_reportPossibleCrUseOfFixed({
              error: Error()
            }), Fixed) : Fixed).toFixed(dt * 1000);
            this.iLen = this.iUpdates.length;

            for (let index = 0; index < this.iLen; index++) {
              this.iUpdates[index].iFightUpdate(dt);
            }

            this.dtSecTime += dt;

            if (this.dtSecTime >= (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).SECOND) {
              this.dtSecTime -= (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).SECOND;
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
                error: Error()
              }), FightEvent) : FightEvent).fight_Sec);
              (_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
                error: Error()
              }), DamageStatisticsData) : DamageStatisticsData).ins.nextSec();
            }
          }

          (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
            error: Error()
          }), FrameControl) : FrameControl).ins.preCollider();
          (_crd && ColliderMgr === void 0 ? (_reportPossibleCrUseOfColliderMgr({
            error: Error()
          }), ColliderMgr) : ColliderMgr).inst.update(dt);
          (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
            error: Error()
          }), FrameControl) : FrameControl).ins.lateCollider();

          if (this.isExitIng && !(_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isDestory) {
            if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.isPvp) {
              this.onDestory();
            } else {
              if ((_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
                error: Error()
              }), FrameControl) : FrameControl).ins.getHasLen() == 0) {
                this.onDestory();
              }
            }
          } // console.log("消耗时间：", new Date().getTime() - this.ingTime)

        }

        lateUpdate(dt) {}

        addObj(iFrame) {
          (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
            error: Error()
          }), FrameControl) : FrameControl).ins.addObj(iFrame);
        }

        removeObj(Iframe) {
          (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
            error: Error()
          }), FrameControl) : FrameControl).ins.removeObj(Iframe);
          (_crd && AbsObjFactory === void 0 ? (_reportPossibleCrUseOfAbsObjFactory({
            error: Error()
          }), AbsObjFactory) : AbsObjFactory).put(Iframe);
        }

        exitFight() {
          this.isExitIng = true;
          this.rootView.scheduleOnce(() => {
            (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
              error: Error()
            }), FrameControl) : FrameControl).ins.recycleAll();
            (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
              error: Error()
            }), PvpControl) : PvpControl).ins.recycleAll();
            /** UI上需要回收资源的组件 */

            let uiRecycles = [_crd && DeadEffectUI === void 0 ? (_reportPossibleCrUseOfDeadEffectUI({
              error: Error()
            }), DeadEffectUI) : DeadEffectUI, _crd && EffectUI === void 0 ? (_reportPossibleCrUseOfEffectUI({
              error: Error()
            }), EffectUI) : EffectUI];

            for (let index = 0; index < uiRecycles.length; index++) {
              const v = uiRecycles[index];
              let effs = this.rootView.node.getComponentsInChildren(v.name);
              effs.forEach(v => {
                if (v.isValid && v.node.isValid) {
                  v["remove"]();
                }
              });
            }
          });
        }

        onDestory() {
          console.log("战斗对象池销毁---");

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isDestory) {
            return;
          }

          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isDestory = true;
          this.rootView.scheduleOnce(() => {
            (_crd && AbsObjFactory === void 0 ? (_reportPossibleCrUseOfAbsObjFactory({
              error: Error()
            }), AbsObjFactory) : AbsObjFactory).destroy();
            (_crd && PvpObjFactory === void 0 ? (_reportPossibleCrUseOfPvpObjFactory({
              error: Error()
            }), PvpObjFactory) : PvpObjFactory).destroy();
            (_crd && BuffUI === void 0 ? (_reportPossibleCrUseOfBuffUI({
              error: Error()
            }), BuffUI) : BuffUI).destory();
            (_crd && EffectUI === void 0 ? (_reportPossibleCrUseOfEffectUI({
              error: Error()
            }), EffectUI) : EffectUI).destory();
            (_crd && ShadowEffect === void 0 ? (_reportPossibleCrUseOfShadowEffect({
              error: Error()
            }), ShadowEffect) : ShadowEffect).destory();
            (_crd && DamageLab === void 0 ? (_reportPossibleCrUseOfDamageLab({
              error: Error()
            }), DamageLab) : DamageLab).destroy();
            (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
              error: Error()
            }), DamageData) : DamageData).destroy();
            (_crd && AbsOwner === void 0 ? (_reportPossibleCrUseOfAbsOwner({
              error: Error()
            }), AbsOwner) : AbsOwner).destroy();
            (_crd && Avatar === void 0 ? (_reportPossibleCrUseOfAvatar({
              error: Error()
            }), Avatar) : Avatar).destory();
            (_crd && Sound === void 0 ? (_reportPossibleCrUseOfSound({
              error: Error()
            }), Sound) : Sound).ins.destroyFightEffect();

            if (this.fightResult == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_FinishStageReq.Result.Quit || (_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
              error: Error()
            }), FightMsgControl) : FightMsgControl).ins.isTest) {
              this.enterMain();
            }
          });
        }

        async enterMain() {
          (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.purge();
          (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.destroy();
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.purge();
          (_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
            error: Error()
          }), SceneMgr) : SceneMgr).ins.leaveFight((_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.isTest);
        }

        timeInMonster() {
          // //定时刷怪
          let i = 1;
          this.rootView.schedule(() => {
            if (this.isExitIng) {
              return;
            }

            let len = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
              error: Error()
            }), FrameControl) : FrameControl).ins.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).enemy).length;

            if (!this.isTestChuguai) {
              return;
            }

            if ((_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
              error: Error()
            }), PlayerControl) : PlayerControl).ins.getLeader() == null) {
              return;
            }

            if (len < this.max) {
              this.createEnemy(this.lsit[(_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).random(0, this.lsit.length - 1)]);
              i++;
            }
          }, 0.1);
        }

        createEnemy(monsterId) {
          let info = (_crd && AbsObjFactory === void 0 ? (_reportPossibleCrUseOfAbsObjFactory({
            error: Error()
          }), AbsObjFactory) : AbsObjFactory).getData((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).enemy);
          info.setConfigId(monsterId || 1001);
          info.speed = 50;
          info.setAttrList([].concat((_crd && TestAttr === void 0 ? (_reportPossibleCrUseOfTestAttr({
            error: Error()
          }), TestAttr) : TestAttr).defanse));
          info.init(); //以主角为中心进行刷怪

          tempPos.x = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).random(0, 200);
          tempPos.y = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).random(-300, 300);
          tempPos.z = 0;
          (_crd && MonsterControl === void 0 ? (_reportPossibleCrUseOfMonsterControl({
            error: Error()
          }), MonsterControl) : MonsterControl).ins.addMonster(info, tempPos);
        }

        getCount() {
          return this.rootView.getRendderCout();
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=091c25b3c96bea1c8c62a318285a8879552e0e04.js.map
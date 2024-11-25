System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, AbsControl, PhaseclearType, MonsterControl, FightRootControl, FightState, EventMgr, FightEvent, FrameControl, AbsObjType, UIMgr, PlayerControl, FightData, ViewName, _dec, _class, _class2, _crd, ccclass, property, tempPos, Seconds_1000, WaveTimeControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeveljson(extras) {
    _reporterNs.report("Leveljson", "../table/Leveljson", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelPhaseTime(extras) {
    _reporterNs.report("LevelPhaseTime", "../table/Leveljson", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhaseclearType(extras) {
    _reporterNs.report("PhaseclearType", "../table/Leveljson", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterControl(extras) {
    _reporterNs.report("MonsterControl", "../base/obj/role/monster/MonsterControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightState(extras) {
    _reporterNs.report("FightState", "../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../base/obj/role/monster/Monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrameControl(extras) {
    _reporterNs.report("FrameControl", "../base/frame/FrameControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../base/obj/AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../base/obj/role/role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFightUpdate(extras) {
    _reporterNs.report("IFightUpdate", "../define/FightDefine", _context.meta, extras);
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
      PhaseclearType = _unresolved_3.PhaseclearType;
    }, function (_unresolved_4) {
      MonsterControl = _unresolved_4.MonsterControl;
    }, function (_unresolved_5) {
      FightRootControl = _unresolved_5.FightRootControl;
      FightState = _unresolved_5.FightState;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_unresolved_7) {
      FightEvent = _unresolved_7.FightEvent;
    }, function (_unresolved_8) {
      FrameControl = _unresolved_8.FrameControl;
    }, function (_unresolved_9) {
      AbsObjType = _unresolved_9.AbsObjType;
    }, function (_unresolved_10) {
      UIMgr = _unresolved_10.UIMgr;
    }, function (_unresolved_11) {
      PlayerControl = _unresolved_11.PlayerControl;
    }, function (_unresolved_12) {
      FightData = _unresolved_12.FightData;
    }, function (_unresolved_13) {
      ViewName = _unresolved_13.ViewName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e684cikTLlDVpnTFgu/6CQM", "WaveTimeControl", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Color', 'Component', 'director', 'instantiate', 'Label', 'Node', 'Prefab', 'Quat', 'Rect', 'sp', 'Sprite', 'tween', 'UITransform', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3(0, 0, 0);
      Seconds_1000 = 1000;
      /** 波次 时间 */

      _export("WaveTimeControl", WaveTimeControl = (_dec = ccclass('WaveTimeControl'), _dec(_class = (_class2 = class WaveTimeControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor(...args) {
          super(...args);
          this.levelJson = null;

          /** 时间 秒 */
          this.secondsTime = 0;
          //波次
          this.nowPhaseIndex = 0;

          /** 当前总时间 */
          this._nowTotalTime = void 0;

          /** 总时间 */
          this.totalTime = void 0;

          /** 阶段时间索引 */
          this.phaseTimeIndex = 0;

          /** 阶段时间完成 */
          this.isPhaseTimeComplete = false;

          /** 周期出怪数组 */
          this.Cycless = [];
          this.dtTime = 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new WaveTimeControl();
          }

          return this._instance;
        }

        init() {
          this.register();
          this.levelJson = null;
          this.secondsTime = 0;
          this.dtTime = 0;
          this.nowPhaseIndex = 0;
          this._nowTotalTime = 0;
          this.isPhaseTimeComplete = false;
          this.Cycless.length = 0;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Start, this.onFightStart, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Monster_Dead, this.onFight_Monster_Dead, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Select_leader, this.onSelect_leader, this);
        }

        onFightStart() {
          this.setStageJson((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.levelJson);
        }

        onFight_Monster_Dead(abs) {
          if (!this.isPhaseTimeComplete) {
            //阶段时间未完成
            return;
          }

          let isNext = false;

          if (this.levelJson.levelPhase) {
            if (abs.info.isBoss && this.levelJson.levelPhase.phaseclearcondition == (_crd && PhaseclearType === void 0 ? (_reportPossibleCrUseOfPhaseclearType({
              error: Error()
            }), PhaseclearType) : PhaseclearType).bossDead) {
              //boss死亡， 进入下一阶段
              isNext = true;
            } else if (this.levelJson.levelPhase.phaseclearcondition == (_crd && PhaseclearType === void 0 ? (_reportPossibleCrUseOfPhaseclearType({
              error: Error()
            }), PhaseclearType) : PhaseclearType).allDead) {
              //全部清除， 进入下一阶段
              isNext = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
                error: Error()
              }), FrameControl) : FrameControl).ins.isAllDeadByObjType((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
                error: Error()
              }), AbsObjType) : AbsObjType).enemy);
            }
          }

          if (isNext) {
            this.checkNextPhase();
          }
        }

        onSelect_leader() {
          if (!(_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.isTime) {
            return;
          }

          this.updateSeconds();
        }

        setStageJson(stageJson) {
          this.levelJson = stageJson;
          this.totalTime = this.levelJson.getTotalTime();
          this.initPhase();
        }

        get nowTotalTime() {
          if (this.levelJson && this.levelJson.levelPhase) {
            return this._nowTotalTime + Math.min(this.levelJson.levelPhase.phaseTime, this.secondsTime);
          }

          return 0;
        }

        initPhase() {
          this.secondsTime = 0;
          this.nowPhaseIndex = 0;
          this.Cycless.length = 0;
          this.updatePhase();
        }
        /** 检测下一个阶段 */


        checkNextPhase() {
          if (this.levelJson.levelPhase.phaseclearcondition == (_crd && PhaseclearType === void 0 ? (_reportPossibleCrUseOfPhaseclearType({
            error: Error()
          }), PhaseclearType) : PhaseclearType).time) {
            //时间---
            this.addPhaseCount();
          } else if (this.levelJson.levelPhase.phaseclearcondition == (_crd && PhaseclearType === void 0 ? (_reportPossibleCrUseOfPhaseclearType({
            error: Error()
          }), PhaseclearType) : PhaseclearType).bossDead) {
            //BOSS死亡---
            let list = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
              error: Error()
            }), FrameControl) : FrameControl).ins.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).enemy);

            for (let index = 0; index < list.length; index++) {
              const v = list[index];

              if (v.info && v.info.isBoss) {
                if (!v.isDead) {
                  console.log("boss存活, 等待boss死亡---");
                  return;
                }
              }
            }

            this.addPhaseCount();
          } else if (this.levelJson.levelPhase.phaseclearcondition == (_crd && PhaseclearType === void 0 ? (_reportPossibleCrUseOfPhaseclearType({
            error: Error()
          }), PhaseclearType) : PhaseclearType).allDead) {
            //全部清除---
            let isDead = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
              error: Error()
            }), FrameControl) : FrameControl).ins.isAllDeadByObjType((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).enemy);

            if (!isDead) {
              console.log("等待怪物全部清除---");
              return;
            }

            this.addPhaseCount();
          }
        }
        /** 阶段完成 */


        phaseComplete() {
          this.isPhaseTimeComplete = true;
          console.log("当前阶段时间完成---");
          this.checkNextPhase();
        }
        /** 增加阶段 */


        addPhaseCount() {
          if (!(_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.isFight()) {
            return;
          }

          console.log("进入下一阶段---");
          this.isPhaseTimeComplete = false;
          this.secondsTime = 0;
          this.dtTime = 0;
          this._nowTotalTime = 0;

          for (let index = 0; index <= this.nowPhaseIndex; index++) {
            const v = this.levelJson.phaseList[index];

            if (v) {
              this._nowTotalTime += v.phaseTime;
            }
          }

          this.nowPhaseIndex += 1;

          if (this.levelJson.hasPhase(this.nowPhaseIndex)) {
            this.updatePhase();
          } else {
            this.isPhaseTimeComplete = true;
            console.log("没有下一阶段---胜利？");
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Clear_All_Monster);
            (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.setState((_crd && FightState === void 0 ? (_reportPossibleCrUseOfFightState({
              error: Error()
            }), FightState) : FightState).end, true);
          }
        }

        updatePhase() {
          this.levelJson.setNowPhase(this.nowPhaseIndex);
          this.phaseTimeIndex = 0;
          this.Cycless.length = 0;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Enter_New_PhaseCount);

          if ((_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getLeader() == null) {
            return;
          }

          this.updateSeconds();
        }

        iFightUpdate(dt) {
          if ((_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getLeader() == null) {
            return;
          }

          if (!(_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.isTime) {
            return;
          }

          if (this.isPhaseTimeComplete) {
            return;
          }

          this.dtTime += dt;

          for (let index = this.Cycless.length - 1; index >= 0; index--) {
            const v = this.Cycless[index];

            if (v.isCyclesOver()) {
              // console.log("触发移除", v)
              this.Cycless.splice(index, 1);
              continue;
            }

            let isTrigger = v.updateTime(dt);
            isTrigger && this.inCycles(v);
          }

          if (this.dtTime > Seconds_1000) {
            this.dtTime -= Seconds_1000;
            this.secondsTime += 1;
            this.updateSeconds();
          }
        }
        /** 更新秒时间 */


        updateSeconds() {
          if (this.secondsTime == this.levelJson.levelPhase.phaseOverTime) {
            this.phaseComplete();
            return;
          }

          let len = this.levelJson.levelPhase.times.length;

          for (let index = this.phaseTimeIndex; index < len; index++) {
            const v = this.levelJson.levelPhase.times[index];

            if (v.time == this.secondsTime) {
              this.inLevelphaseTime(v);
              this.phaseTimeIndex = index;
            }
          }
        }

        inLevelphaseTime(lpt) {
          lpt.inTime = true; // console.log("处理", this.nowPhaseIndex, "时间index", lpt)

          if (lpt.isMonster()) {
            this.inMonster(lpt);

            if (!lpt.isCyclesOver()) {
              this.Cycless.push(lpt);
            } else if (lpt.cycles == 0) {
              for (let index = 1; index < lpt.count; index++) {
                this.inMonster(lpt);
              }
            }
          } else if (lpt.isWarning()) {
            this.inWarning(lpt);
          }
        }

        inCycles(lpt) {
          // console.log("触发", this.nowPhaseIndex, "时间index", this.phaseTimeIndex, lpt.nowCount, lpt.count)
          if (lpt.isMonster()) {
            this.inMonster(lpt);
          } else if (lpt.isWarning()) {
            this.inWarning(lpt);
          }
        }

        inMonster(lpt) {
          // console.log("出怪")
          (_crd && MonsterControl === void 0 ? (_reportPossibleCrUseOfMonsterControl({
            error: Error()
          }), MonsterControl) : MonsterControl).ins.addMonsterByLevelPhaseTime(lpt);
        }

        inWarning(lpt) {
          console.log("警告");
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).WarningPop,
            data: lpt.warning
          });
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Warning, lpt.warning);
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0af5eecdc4e9aae4d45297609e2d45fbd7ede7d3.js.map
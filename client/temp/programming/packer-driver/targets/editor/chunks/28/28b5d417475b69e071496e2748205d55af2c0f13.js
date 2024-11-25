System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, AbsControl, AbsObjFactory, AbsObjType, FightRootControl, tab, Random, PlayerControl, FightMacro, EventMgr, FightEvent, GuideController, LocalEvent, AbsStateType, ViewSize, _dec, _class, _class2, _crd, ccclass, property, tempPos, MonsterControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelPhaseTime(extras) {
    _reporterNs.report("LevelPhaseTime", "../../../../table/Leveljson", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjFactory(extras) {
    _reporterNs.report("AbsObjFactory", "../../AbsObjFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../../AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterInfo(extras) {
    _reporterNs.report("MonsterInfo", "./MonsterInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../../../../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "./Monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandom(extras) {
    _reporterNs.report("Random", "../../../../util/Random", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../../../../../guide/GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewSize(extras) {
    _reporterNs.report("ViewSize", "../../../../../define/ViewDefine", _context.meta, extras);
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
      AbsObjFactory = _unresolved_3.AbsObjFactory;
    }, function (_unresolved_4) {
      AbsObjType = _unresolved_4.AbsObjType;
    }, function (_unresolved_5) {
      FightRootControl = _unresolved_5.FightRootControl;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      Random = _unresolved_7.Random;
    }, function (_unresolved_8) {
      PlayerControl = _unresolved_8.PlayerControl;
    }, function (_unresolved_9) {
      FightMacro = _unresolved_9.FightMacro;
    }, function (_unresolved_10) {
      EventMgr = _unresolved_10.EventMgr;
    }, function (_unresolved_11) {
      FightEvent = _unresolved_11.FightEvent;
    }, function (_unresolved_12) {
      GuideController = _unresolved_12.GuideController;
    }, function (_unresolved_13) {
      LocalEvent = _unresolved_13.LocalEvent;
    }, function (_unresolved_14) {
      AbsStateType = _unresolved_14.AbsStateType;
    }, function (_unresolved_15) {
      ViewSize = _unresolved_15.ViewSize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cc09eZ7xfZPlYudALxCPaKu", "MonsterControl", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Color', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Quat', 'Rect', 'Size', 'sp', 'Sprite', 'tween', 'UITransform', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3(0, 0, 0);

      _export("MonsterControl", MonsterControl = (_dec = ccclass('MonsterControl'), _dec(_class = (_class2 = class MonsterControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new MonsterControl();

            this._instance.init();
          }

          return this._instance;
        }

        init() {
          this.register();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Start, this.onFightStart, this);
        }

        onFightStart() {}

        addMonsterByLevelPhaseTime(data) {
          if ((_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getLeader() == null) {
            return;
          }

          let monsterInfo = (_crd && AbsObjFactory === void 0 ? (_reportPossibleCrUseOfAbsObjFactory({
            error: Error()
          }), AbsObjFactory) : AbsObjFactory).getData((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).enemy);
          monsterInfo.setConfigId(data.monsterId);
          monsterInfo.speed = data.spe;
          monsterInfo.setAttrList([{
            type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_Attack,
            value: data.attack
          }, {
            type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_Hp,
            value: data.hp
          }, {
            type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_Defence,
            value: data.def
          }, {
            type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_ResistCriticalPoint,
            value: data.resistcritical
          }, {
            type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_DamageReduceCoefficientFix,
            value: data.damrefix
          }]);
          monsterInfo.exp = data.exp;
          monsterInfo.drop = data.drop;
          monsterInfo.init();

          if (data.isRand) {
            let rand = (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
              error: Error()
            }), Random) : Random).getRandomInt(0, data.position.length);
            this.randomPos(data, rand, tempPos);
          } else {
            this.randomPos(data, 0, tempPos);
          }

          this.addMonster(monsterInfo, tempPos);
        }

        randomPos(data, randPos, out) {
          let pos = data.position[randPos];
          let blockTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MapBlockById.getValue(pos);

          if (blockTab) {
            if (data.isRand) {
              out.x = (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
                error: Error()
              }), Random) : Random).getRandomInt(blockTab.CoordinateX - blockTab.Long * 0.5, blockTab.CoordinateX + blockTab.Long * 0.5);
              out.y = (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
                error: Error()
              }), Random) : Random).getRandomInt(blockTab.CoordinateY - blockTab.High * 0.5, blockTab.CoordinateY + blockTab.High * 0.5);
            } else {
              out.x = blockTab.CoordinateX;
              out.y = blockTab.CoordinateY;
            }
          } else {
            out.x = out.y = out.z = 0;
          }

          out.z = 0;
        }
        /** 召唤 */


        summon(noumenon, argument) {
          for (let index = 0; index < argument.length; index++) {
            const v = argument[index];
            let conf = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().SkillSummonTableBySummonId.getValue(v);
            let monsterInfo = (_crd && AbsObjFactory === void 0 ? (_reportPossibleCrUseOfAbsObjFactory({
              error: Error()
            }), AbsObjFactory) : AbsObjFactory).getData((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).enemy);
            monsterInfo.setConfigId(conf.Summon[0]);
            monsterInfo.setAttrList([{
              type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_Attack,
              value: noumenon.info.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_TotalAttack) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).PERCENT * conf.Summon[1]
            }, {
              type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_Hp,
              value: noumenon.info.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_Hp) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).PERCENT * conf.Summon[2]
            }, {
              type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_Defence,
              value: noumenon.info.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_Defence) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).PERCENT * conf.Summon[3]
            }, {
              type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_ResistCriticalPoint,
              value: noumenon.info.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_ResistCriticalPoint) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).PERCENT * conf.Summon[4]
            }, {
              type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DamageReduceCoefficientFix,
              value: noumenon.info.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DamageReduceCoefficientFix) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).PERCENT * conf.Summon[5]
            }]);
            monsterInfo.speed = noumenon.speed / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT * conf.Summon[6];
            monsterInfo.exp = 0;
            monsterInfo.drop = 0;
            monsterInfo.init();
            tempPos.x = noumenon.getPosition().x + conf.Summon[7];
            tempPos.y = noumenon.getPosition().y + conf.Summon[8];
            this.addMonster(monsterInfo, tempPos);
          }
        }

        onReplaceMonsterAnimation(monster, monsterId) {
          let conf = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MonsterTableById.getValue(monsterId);
          monster.setStateAllAnimdId(conf);
        }

        addMonster(info, initPos) {
          let enemy = (_crd && AbsObjFactory === void 0 ? (_reportPossibleCrUseOfAbsObjFactory({
            error: Error()
          }), AbsObjFactory) : AbsObjFactory).getMonster(info, (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.getRootView().objects);

          if (initPos.x > (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).halfSize.width) {
            initPos.x = (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
              error: Error()
            }), ViewSize) : ViewSize).halfSize.width;
          }

          if (initPos.y > (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).halfSize.height) {
            initPos.y = (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
              error: Error()
            }), ViewSize) : ViewSize).halfSize.height;
          } else if (initPos.x < 0 && Math.abs(initPos.y) > (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).halfSize.height) {
            initPos.y = -(_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
              error: Error()
            }), ViewSize) : ViewSize).halfSize.height;
          }

          enemy.setPosition(initPos);
          enemy.info.useAllPassiveSkill();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).checkAbsRoleGainBuff, enemy);
          enemy.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleBorn);

          if (enemy.info.isBoss) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Boss_Enter, enemy);
          } // 发送怪物出现的事件


          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isInFightGuiding()) {
            setTimeout(() => {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).ShowMonster);
            }, 500);
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=28b5d417475b69e071496e2748205d55af2c0f13.js.map
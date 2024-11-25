System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, js, Label, Node, profiler, Toggle, FightRootControl, FightState, PlayerControl, AbsObjType, FrameControl, Func, tab, BuffControl, DropControl, FightTestAttr, SkillControl, FightMsgControl, ViewName, UIMgr, FightRenderSort, FightData, ShakeAction, PvpTest, PvpControl, PvpObjType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _crd, ccclass, property, FightTestView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "./FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightState(extras) {
    _reporterNs.report("FightState", "./FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "./base/obj/role/role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "./base/obj/AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrameControl(extras) {
    _reporterNs.report("FrameControl", "./base/frame/FrameControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffControl(extras) {
    _reporterNs.report("BuffControl", "./base/buff/BuffControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropControl(extras) {
    _reporterNs.report("DropControl", "./drop/DropControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightTestAttr(extras) {
    _reporterNs.report("FightTestAttr", "./view/test/FightTestAttr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffTab(extras) {
    _reporterNs.report("BuffTab", "./power/powerTab/BuffTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "./power/powerTab/SkillTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillControl(extras) {
    _reporterNs.report("SkillControl", "./base/skill/SkillControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "./base/obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMsgControl(extras) {
    _reporterNs.report("FightMsgControl", "./FightMsgControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRenderSort(extras) {
    _reporterNs.report("FightRenderSort", "./define/FightRenderSort", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "./data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShakeAction(extras) {
    _reporterNs.report("ShakeAction", "../../framework/action/ShakeAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpTest(extras) {
    _reporterNs.report("PvpTest", "./pvp/PvpTest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpControl(extras) {
    _reporterNs.report("PvpControl", "./pvp/PvpControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpObjType(extras) {
    _reporterNs.report("PvpObjType", "./pvp/obj/PvpObj", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      js = _cc.js;
      Label = _cc.Label;
      Node = _cc.Node;
      profiler = _cc.profiler;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      FightRootControl = _unresolved_2.FightRootControl;
      FightState = _unresolved_2.FightState;
    }, function (_unresolved_3) {
      PlayerControl = _unresolved_3.PlayerControl;
    }, function (_unresolved_4) {
      AbsObjType = _unresolved_4.AbsObjType;
    }, function (_unresolved_5) {
      FrameControl = _unresolved_5.FrameControl;
    }, function (_unresolved_6) {
      Func = _unresolved_6.Func;
    }, function (_unresolved_7) {
      tab = _unresolved_7.tab;
    }, function (_unresolved_8) {
      BuffControl = _unresolved_8.BuffControl;
    }, function (_unresolved_9) {
      DropControl = _unresolved_9.DropControl;
    }, function (_unresolved_10) {
      FightTestAttr = _unresolved_10.FightTestAttr;
    }, function (_unresolved_11) {
      SkillControl = _unresolved_11.SkillControl;
    }, function (_unresolved_12) {
      FightMsgControl = _unresolved_12.FightMsgControl;
    }, function (_unresolved_13) {
      ViewName = _unresolved_13.ViewName;
    }, function (_unresolved_14) {
      UIMgr = _unresolved_14.UIMgr;
    }, function (_unresolved_15) {
      FightRenderSort = _unresolved_15.FightRenderSort;
    }, function (_unresolved_16) {
      FightData = _unresolved_16.FightData;
    }, function (_unresolved_17) {
      ShakeAction = _unresolved_17.ShakeAction;
    }, function (_unresolved_18) {
      PvpTest = _unresolved_18.PvpTest;
    }, function (_unresolved_19) {
      PvpControl = _unresolved_19.PvpControl;
    }, function (_unresolved_20) {
      PvpObjType = _unresolved_20.PvpObjType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4edf5wmqClDJKtwxRib67uq", "FightTestView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'EditBox', 'EventTouch', 'game', 'js', 'Label', 'Layers', 'Node', 'profiler', 'Size', 'Sprite', 'SpriteFrame', 'Toggle', 'Tween', 'tween', 'UIOpacity', 'UITransform', 'v2', 'v3', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightTestView", FightTestView = (_dec = ccclass('FightTestView'), _dec2 = property(Node), _dec3 = property(Toggle), _dec4 = property(Toggle), _dec5 = property(Toggle), _dec6 = property(Toggle), _dec7 = property(Toggle), _dec8 = property(Toggle), _dec9 = property(Toggle), _dec10 = property(Label), _dec11 = property(EditBox), _dec12 = property(EditBox), _dec13 = property(EditBox), _dec14 = property(EditBox), _dec15 = property(EditBox), _dec16 = property(EditBox), _dec17 = property(Toggle), _dec18 = property(EditBox), _dec(_class = (_class2 = class FightTestView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "testNode", _descriptor, this);

          _initializerDefineProperty(this, "testToggle", _descriptor2, this);

          _initializerDefineProperty(this, "boundToggle", _descriptor3, this);

          _initializerDefineProperty(this, "timeToggle", _descriptor4, this);

          _initializerDefineProperty(this, "monsterAttackToggle", _descriptor5, this);

          _initializerDefineProperty(this, "monsterMove", _descriptor6, this);

          _initializerDefineProperty(this, "monsterToggle", _descriptor7, this);

          _initializerDefineProperty(this, "DamageToggle", _descriptor8, this);

          _initializerDefineProperty(this, "monsterNum", _descriptor9, this);

          _initializerDefineProperty(this, "skillId", _descriptor10, this);

          _initializerDefineProperty(this, "skillGroupId", _descriptor11, this);

          _initializerDefineProperty(this, "monsterCount", _descriptor12, this);

          _initializerDefineProperty(this, "buffId", _descriptor13, this);

          _initializerDefineProperty(this, "useSkillId", _descriptor14, this);

          _initializerDefineProperty(this, "monsterId", _descriptor15, this);

          this.shakeAc = new (_crd && ShakeAction === void 0 ? (_reportPossibleCrUseOfShakeAction({
            error: Error()
          }), ShakeAction) : ShakeAction)();

          _initializerDefineProperty(this, "pvpToggle", _descriptor16, this);

          _initializerDefineProperty(this, "pvpBulletBox", _descriptor17, this);
        }

        onLoad() {
          // super.onLoad()
          this.skillId.string = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("test_bulletid") || "";
          this.skillGroupId.string = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("test_skillgroupid") || "";
          this.buffId.string = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("test_buffId") || "";
          this.useSkillId.string = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("test_useSkillId") || "";
          this.monsterId.string = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("test_monsterId") || "";
          this.monsterCount.string = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("test_monsterCount") || "";
          this.onmonsterToggle();
          this.boundToggleToggle();
          this.onTimeToggle();
          this.onSkillEdit();
          this.onSkillGroupEdit();
          this.ontestToggle();
          this.onDamageToggle();
          this.schedule(() => {
            this.updateCount();
          }, 0.1);
          this.pvpInit();
        }

        start() {
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.isTime = this.timeToggle.isChecked = !(_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.isTest;
        }

        register() {}

        onMonsterAttackToggle() {
          this.scheduleOnce(() => {
            (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.monsterAttack = this.monsterAttackToggle.isChecked;
          });
        }

        onmonsterMove() {
          this.scheduleOnce(() => {
            (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.monsterMove = this.monsterMove.isChecked;
          });
        }

        onDamageToggle() {
          this.scheduleOnce(() => {
            (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.damageToggle = this.DamageToggle.isChecked;
          });
        }

        onTimeToggle() {
          this.scheduleOnce(() => {
            (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.isTime = this.timeToggle.isChecked;
          });
        }

        onClickShowBullet() {}

        onClickBorder() {
          this.boundToggleToggle();
        }

        updateCount() {
          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isPvp) {
            this.monsterNum.string = js.formatStr("怪：%s 子弹:%s 渲染:%s", (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
              error: Error()
            }), PvpControl) : PvpControl).ins.getObjList((_crd && PvpObjType === void 0 ? (_reportPossibleCrUseOfPvpObjType({
              error: Error()
            }), PvpObjType) : PvpObjType).role).length, (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
              error: Error()
            }), PvpControl) : PvpControl).ins.getObjList((_crd && PvpObjType === void 0 ? (_reportPossibleCrUseOfPvpObjType({
              error: Error()
            }), PvpObjType) : PvpObjType).bullet).length, (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.getCount());
          } else {
            this.monsterNum.string = js.formatStr("怪：%s 子弹:%s 渲染:%s", (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
              error: Error()
            }), FrameControl) : FrameControl).ins.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).enemy).length, (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
              error: Error()
            }), FrameControl) : FrameControl).ins.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).bullet).length, (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.getCount());
          }
        }

        lateUpdate(dt) {}

        onmonsterToggle() {
          this.scheduleOnce(() => {
            (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.isTestChuguai = this.monsterToggle.isChecked;
            var str = this.monsterCount.string.replace(/(^\s*)|(\s*$)/g, "");
            var count = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).checkInt(str);
            (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.max = count;
            (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).setItem("test_monsterCount", str);
          });
        }

        boundToggleToggle() {
          this.scheduleOnce(() => {
            (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.isBound = this.boundToggle.isChecked;
            (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
              error: Error()
            }), FrameControl) : FrameControl).ins.updateAllBound();
          });
        }

        onSkillEdit() {
          var str = this.skillId.string.replace(/(^\s*)|(\s*$)/g, "");
          var id = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).checkInt(str);
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.testBulletId = id;
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).setItem("test_bulletid", str);
        }

        onSkillGroupEdit() {
          var str = this.skillGroupId.string.replace(/(^\s*)|(\s*$)/g, "");
          var id = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).checkInt(str);
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.testSkillGroupId = id;
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).setItem("test_skillgroupid", str);

          if ((_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getLeader() && id > 0) {
            (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
              error: Error()
            }), PlayerControl) : PlayerControl).ins.getLeader().info.resetTestGroupId(id);
          }
        }

        onAddHero() {
          (_crd && DropControl === void 0 ? (_reportPossibleCrUseOfDropControl({
            error: Error()
          }), DropControl) : DropControl).ins.addDropItem(1);
        }

        onAddYuMao() {
          (_crd && DropControl === void 0 ? (_reportPossibleCrUseOfDropControl({
            error: Error()
          }), DropControl) : DropControl).ins.addDropItem(2); // PlayerControl.ins.getLeader().onDead()
        }

        onExitFight() {
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.exitFight();
        }

        addBuff(e, cusData) {
          var leader = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getLeader();

          if (leader == null || leader && leader.isDead) {
            return;
          }

          var str = this.buffId.string.replace(/(^\s*)|(\s*$)/g, "");
          var buff = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).checkInt(str);

          if (!(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BuffTableById.getValue(buff)) {
            return;
          }

          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).setItem("test_buffId", str);

          if (cusData == "2") {
            var list = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
              error: Error()
            }), FrameControl) : FrameControl).ins.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).enemy);
            var enemy = list[0];

            var _buffTab = leader.info.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BuffTable, buff);

            (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
              error: Error()
            }), BuffControl) : BuffControl).ins.addBuff(_buffTab, leader.objId, enemy);
          } else if (cusData == "3") {
            var _list = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
              error: Error()
            }), PlayerControl) : PlayerControl).ins.getRoles();

            for (var index = 0; index < _list.length; index++) {
              var v = _list[index];

              if (v.isActive && !v.isDead && !v.info.isLeader) {
                leader = v;

                var _buffTab2 = leader.info.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).PowerType.PowerType_BuffTable, buff);

                (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
                  error: Error()
                }), BuffControl) : BuffControl).ins.addBuff(_buffTab2, leader.objId, leader);
              }
            }

            return;
          }

          if (leader == null) {
            return;
          }

          var buffTab = leader.info.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PowerType.PowerType_BuffTable, buff);
          (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
            error: Error()
          }), BuffControl) : BuffControl).ins.addBuff(buffTab, leader.objId, leader);
        }

        onWinClick() {
          console.log("一键胜利");
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.setState((_crd && FightState === void 0 ? (_reportPossibleCrUseOfFightState({
            error: Error()
          }), FightState) : FightState).end, true); // 
          // let dd = DamageData.get()
          // dd.damage = 1000000000
          // PlayerControl.ins.getLeader().info.onHitDamage(dd)
        }

        onPicClick() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).DynamicAtlas
          });
        }

        onLookAttr() {
          (_crd && FightTestAttr === void 0 ? (_reportPossibleCrUseOfFightTestAttr({
            error: Error()
          }), FightTestAttr) : FightTestAttr).create(); // let damageData = DamageData.get()
          // damageData.source = DamageSource.bullet
          // damageData.damage = 5000000
          // let leader = PlayerControl.ins.getLeader()
          // if (leader == null || (leader && leader.isDead)) {
          //     return
          // }
          // leader.info.onHitDamage(damageData)
          // DamageLab.addShowDamageNum(damageData, leader)
        }

        ontestToggle() {
          this.scheduleOnce(() => {
            this.testNode.active = this.testToggle.isChecked;
          });
        }

        onUseSkill() {
          var leader = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getLeader();

          if (leader == null || leader && leader.isDead) {
            return;
          }

          var str = this.useSkillId.string.replace(/(^\s*)|(\s*$)/g, "");
          var buff = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).checkInt(str);

          if (!(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().SkillTableById.getValue(buff)) {
            return;
          }

          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).setItem("test_useSkillId", str);
          var skillTab = leader.info.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PowerType.PowerType_SkillTable, buff);
          (_crd && SkillControl === void 0 ? (_reportPossibleCrUseOfSkillControl({
            error: Error()
          }), SkillControl) : SkillControl).ins.addSkill(skillTab, leader);

          if (!skillTab.isPassiveSkill()) {
            (_crd && SkillControl === void 0 ? (_reportPossibleCrUseOfSkillControl({
              error: Error()
            }), SkillControl) : SkillControl).ins.useSkillAndBullet(skillTab, leader);
          }
        }

        onAddMonster() {
          var leader = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getLeader();

          if (leader == null || leader && leader.isDead) {
            return;
          }

          var str = this.monsterId.string.replace(/(^\s*)|(\s*$)/g, "");
          var buff = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).checkInt(str);

          if (!(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MonsterTableById.getValue(buff)) {
            return;
          }

          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).setItem("test_monsterId", str);
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.createEnemy(buff);
        }

        onInvincibleClick() {
          var list = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.roles;

          for (var index = 0; index < list.length; index++) {
            var v = list[index];
            v.info.attrData.addAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_Invincible, 2);
          }
        }

        onPause() {
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.pause = !(_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.pause;
        }

        onSort() {
          (_crd && FightRenderSort === void 0 ? (_reportPossibleCrUseOfFightRenderSort({
            error: Error()
          }), FightRenderSort) : FightRenderSort).sort((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.getRootView().objects, (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.getRootView().bullets);
        }

        onSort1() {
          (_crd && FightRenderSort === void 0 ? (_reportPossibleCrUseOfFightRenderSort({
            error: Error()
          }), FightRenderSort) : FightRenderSort).ySort((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.getRootView().objects);
        }

        onshake() {
          this.shakeAc.runActions((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.getRootView().rootNode, [{
            delay: 0,
            duration: 0.4
          }]);
        }

        onFps() {
          if (profiler.isShowingStats()) {
            profiler.hideStats();
          } else {
            profiler.showStats();
          }
        }

        pvpInit() {
          this.pvpToggle.isChecked = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isPvp;
          this.pvpBulletBox.string = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("test_pvp_bulletId") || "";
        }

        onClickCreateHero() {
          (_crd && PvpTest === void 0 ? (_reportPossibleCrUseOfPvpTest({
            error: Error()
          }), PvpTest) : PvpTest).createHero(0);
        }

        onPvpUseSkill() {
          (_crd && PvpTest === void 0 ? (_reportPossibleCrUseOfPvpTest({
            error: Error()
          }), PvpTest) : PvpTest).useSkill();
        }

        onPvpAddBuff() {
          (_crd && PvpTest === void 0 ? (_reportPossibleCrUseOfPvpTest({
            error: Error()
          }), PvpTest) : PvpTest).addBuff();
        }

        onPvpUpdateBuff() {
          (_crd && PvpTest === void 0 ? (_reportPossibleCrUseOfPvpTest({
            error: Error()
          }), PvpTest) : PvpTest).updateBuff();
        }

        onPvpSkillCD() {
          (_crd && PvpTest === void 0 ? (_reportPossibleCrUseOfPvpTest({
            error: Error()
          }), PvpTest) : PvpTest).skillCD();
        }

        onPvpSkillCDEnd() {
          (_crd && PvpTest === void 0 ? (_reportPossibleCrUseOfPvpTest({
            error: Error()
          }), PvpTest) : PvpTest).skillCDEnd();
        }

        onPvpDead() {
          (_crd && PvpTest === void 0 ? (_reportPossibleCrUseOfPvpTest({
            error: Error()
          }), PvpTest) : PvpTest).onDead();
        }

        onPvpRevive() {
          (_crd && PvpTest === void 0 ? (_reportPossibleCrUseOfPvpTest({
            error: Error()
          }), PvpTest) : PvpTest).onRevive();
        }

        onPvpBullet() {
          var str = this.pvpBulletBox.string.replace(/(^\s*)|(\s*$)/g, "");
          var id = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).checkInt(str);
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).setItem("test_pvp_bulletId", str);
          var bulletTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BulletTableById.getValue(id);

          if (bulletTab) {
            (_crd && PvpTest === void 0 ? (_reportPossibleCrUseOfPvpTest({
              error: Error()
            }), PvpTest) : PvpTest).createBullet(id, bulletTab.WalkAnimationId);
          } else {
            console.log("子弹不存在", id);
          }
        }

        onPvpRemoveObj() {
          (_crd && PvpTest === void 0 ? (_reportPossibleCrUseOfPvpTest({
            error: Error()
          }), PvpTest) : PvpTest).removeObj((_crd && PvpTest === void 0 ? (_reportPossibleCrUseOfPvpTest({
            error: Error()
          }), PvpTest) : PvpTest).bulletIndex);
        }

        onPvpPause() {
          (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.dataPause = !(_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.dataPause;
        }

        onPvpNext() {
          (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.onNextFrame();
        }

        onPvpNextStep() {
          // PvpControl.ins.onNextStep()
          (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.pvpLine.recycle();
        }

        onPvpDrawLine() {
          (_crd && PvpTest === void 0 ? (_reportPossibleCrUseOfPvpTest({
            error: Error()
          }), PvpTest) : PvpTest).drawLine();
        }

        onCopy() {
          var dd = JSON.parse(JSON.stringify((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.fightInfo));
          dd.bufferList = [700000, 900001];
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).copyText(JSON.stringify(dd));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "testNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "testToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "boundToggle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "timeToggle", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "monsterAttackToggle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "monsterMove", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "monsterToggle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "DamageToggle", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "monsterNum", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "skillId", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "skillGroupId", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "monsterCount", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "buffId", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "useSkillId", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "monsterId", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "pvpToggle", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "pvpBulletBox", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f59ecdda89ada958158f3d787b70e6d56d6be100.js.map
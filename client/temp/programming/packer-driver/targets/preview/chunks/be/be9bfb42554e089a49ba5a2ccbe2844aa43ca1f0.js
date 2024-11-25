System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Toggle, tab, ViewPop, ShowTips, UIMgr, FightData, DropControl, FightRoleTeam, FightWeaponTeam, ViewName, CommonTipsPop, LangMgr, LocalEvent, EventMgr, SettingsManager, OpenFunctionMgr, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, FightPausePop;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropControl(extras) {
    _reporterNs.report("DropControl", "../drop/DropControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRoleTeam(extras) {
    _reporterNs.report("FightRoleTeam", "./common/FightRoleTeam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightWeaponTeam(extras) {
    _reporterNs.report("FightWeaponTeam", "./common/FightWeaponTeam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../../model/common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingsManager(extras) {
    _reporterNs.report("SettingsManager", "../../model/role/SettingsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      ViewPop = _unresolved_3.ViewPop;
    }, function (_unresolved_4) {
      ShowTips = _unresolved_4.ShowTips;
      UIMgr = _unresolved_4.UIMgr;
    }, function (_unresolved_5) {
      FightData = _unresolved_5.FightData;
    }, function (_unresolved_6) {
      DropControl = _unresolved_6.DropControl;
    }, function (_unresolved_7) {
      FightRoleTeam = _unresolved_7.FightRoleTeam;
    }, function (_unresolved_8) {
      FightWeaponTeam = _unresolved_8.FightWeaponTeam;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      CommonTipsPop = _unresolved_10.CommonTipsPop;
    }, function (_unresolved_11) {
      LangMgr = _unresolved_11.LangMgr;
    }, function (_unresolved_12) {
      LocalEvent = _unresolved_12.LocalEvent;
    }, function (_unresolved_13) {
      EventMgr = _unresolved_13.EventMgr;
    }, function (_unresolved_14) {
      SettingsManager = _unresolved_14.SettingsManager;
    }, function (_unresolved_15) {
      OpenFunctionMgr = _unresolved_15.OpenFunctionMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0e536Qk4RFG4F/87k14v0N", "FightPausePop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Label', 'Node', 'Prefab', 'Toggle', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 战斗暂停界面 */

      _export("FightPausePop", FightPausePop = (_dec = ccclass('FightPausePop'), _dec2 = property(_crd && FightRoleTeam === void 0 ? (_reportPossibleCrUseOfFightRoleTeam({
        error: Error()
      }), FightRoleTeam) : FightRoleTeam), _dec3 = property(_crd && FightWeaponTeam === void 0 ? (_reportPossibleCrUseOfFightWeaponTeam({
        error: Error()
      }), FightWeaponTeam) : FightWeaponTeam), _dec4 = property(Toggle), _dec5 = property(Toggle), _dec(_class = (_class2 = class FightPausePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "fightTeam", _descriptor, this);

          _initializerDefineProperty(this, "fightWeapon", _descriptor2, this);

          _initializerDefineProperty(this, "autoToggle", _descriptor3, this);

          _initializerDefineProperty(this, "autoSelectToggle", _descriptor4, this);
        }

        static create() {
          return _asyncToGenerator(function* () {
            if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.pause) {
              return;
            }

            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.pause = true;
            yield (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: "FightPausePop"
            });
          })();
        }

        static hide() {
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.pause = false;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView("FightPausePop");
        }

        register() {// audoDropCollect
        }

        onShow() {
          this.fightTeam.refresh(true);
          this.fightWeapon.refresh(true);
          this.autoToggle.isChecked = (_crd && DropControl === void 0 ? (_reportPossibleCrUseOfDropControl({
            error: Error()
          }), DropControl) : DropControl).ins.audoDropCollect;
          this.autoSelectToggle.isChecked = (_crd && SettingsManager === void 0 ? (_reportPossibleCrUseOfSettingsManager({
            error: Error()
          }), SettingsManager) : SettingsManager).ins.getSetting("isAutoSelectRogue");
        }
        /**
         * 是否自动拾取
         * @returns 
         */


        getIsAuto() {
          return this.autoToggle.isChecked;
        }

        onClickAuto() {
          (_crd && DropControl === void 0 ? (_reportPossibleCrUseOfDropControl({
            error: Error()
          }), DropControl) : DropControl).ins.setAudoDropCollect(this.autoToggle.isChecked);
        }

        onClickAutoEvent() {
          var isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_AutoSelectRogue);

          if (!isOpen) {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_fight_22"));
          }
        }

        onClickAutoSelect() {
          var isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_AutoSelectRogue);

          if (isOpen) {
            (_crd && SettingsManager === void 0 ? (_reportPossibleCrUseOfSettingsManager({
              error: Error()
            }), SettingsManager) : SettingsManager).ins.setSetting("isAutoSelectRogue", this.autoSelectToggle.isChecked);
          } else {
            this.autoSelectToggle.isChecked = false;
          }
        }

        onClose() {
          FightPausePop.hide();
        }

        onExitFight() {
          // 弹窗窗口
          (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
            error: Error()
          }), CommonTipsPop) : CommonTipsPop).create((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("Tips_fight_1"), val => {
            if (val) {
              this.onClose();
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).quitFight);
            }
          });
        }
        /**点击武器图鉴 */


        onClickWeaponTuJian() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).WeaponPop
          });
        }
        /**点击伤害统计 */


        onClickDamageStat(event) {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).FightDamageRankPop,
            data: {
              event: event
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fightTeam", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fightWeapon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "autoToggle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "autoSelectToggle", [_dec5], {
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
//# sourceMappingURL=be9bfb42554e089a49ba5a2ccbe2844aa43ca1f0.js.map
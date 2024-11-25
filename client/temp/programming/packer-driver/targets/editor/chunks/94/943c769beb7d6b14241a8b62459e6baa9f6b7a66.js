System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Layout, Node, Prefab, ViewScreen, FightRootControl, FightState, setTextTime_3, PvpControl, FightBarItem, Func, OpenFunctionMgr, tab, LangMgr, ShowTips, FightMsgControl, FightData, CommonTipsPop, CommonTipsPopCloseType, EventMgr, FightEvent, FightWeaponTeam, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, PvpUIView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewScreen(extras) {
    _reporterNs.report("ViewScreen", "../../../framework/base/ViewScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightState(extras) {
    _reporterNs.report("FightState", "../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime_(extras) {
    _reporterNs.report("setTextTime_3", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpControl(extras) {
    _reporterNs.report("PvpControl", "./PvpControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightBarItem(extras) {
    _reporterNs.report("FightBarItem", "../view/common/FightBarItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMsgControl(extras) {
    _reporterNs.report("FightMsgControl", "../FightMsgControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../../model/common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPopCloseType(extras) {
    _reporterNs.report("CommonTipsPopCloseType", "../../model/common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightWeaponTeam(extras) {
    _reporterNs.report("FightWeaponTeam", "../view/common/FightWeaponTeam", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ViewScreen = _unresolved_2.ViewScreen;
    }, function (_unresolved_3) {
      FightRootControl = _unresolved_3.FightRootControl;
      FightState = _unresolved_3.FightState;
    }, function (_unresolved_4) {
      setTextTime_3 = _unresolved_4.setTextTime_3;
    }, function (_unresolved_5) {
      PvpControl = _unresolved_5.PvpControl;
    }, function (_unresolved_6) {
      FightBarItem = _unresolved_6.FightBarItem;
    }, function (_unresolved_7) {
      Func = _unresolved_7.Func;
    }, function (_unresolved_8) {
      OpenFunctionMgr = _unresolved_8.OpenFunctionMgr;
    }, function (_unresolved_9) {
      tab = _unresolved_9.tab;
    }, function (_unresolved_10) {
      LangMgr = _unresolved_10.LangMgr;
    }, function (_unresolved_11) {
      ShowTips = _unresolved_11.ShowTips;
    }, function (_unresolved_12) {
      FightMsgControl = _unresolved_12.FightMsgControl;
    }, function (_unresolved_13) {
      FightData = _unresolved_13.FightData;
    }, function (_unresolved_14) {
      CommonTipsPop = _unresolved_14.CommonTipsPop;
      CommonTipsPopCloseType = _unresolved_14.CommonTipsPopCloseType;
    }, function (_unresolved_15) {
      EventMgr = _unresolved_15.EventMgr;
    }, function (_unresolved_16) {
      FightEvent = _unresolved_16.FightEvent;
    }, function (_unresolved_17) {
      FightWeaponTeam = _unresolved_17.FightWeaponTeam;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5676mMmBlHNZaFwRcQ4siS", "PvpUIView", undefined);

      __checkObsolete__(['_decorator', 'director', 'EditBox', 'EventTouch', 'Font', 'game', 'instantiate', 'js', 'Label', 'Layers', 'Layout', 'Node', 'Prefab', 'ProgressBar', 'Size', 'Sprite', 'SpriteFrame', 'Toggle', 'Tween', 'tween', 'UIOpacity', 'UITransform', 'v2', 'v3', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PvpUIView", PvpUIView = (_dec = ccclass('PvpUIView'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(_crd && FightWeaponTeam === void 0 ? (_reportPossibleCrUseOfFightWeaponTeam({
        error: Error()
      }), FightWeaponTeam) : FightWeaponTeam), _dec7 = property(_crd && FightWeaponTeam === void 0 ? (_reportPossibleCrUseOfFightWeaponTeam({
        error: Error()
      }), FightWeaponTeam) : FightWeaponTeam), _dec(_class = (_class2 = class PvpUIView extends (_crd && ViewScreen === void 0 ? (_reportPossibleCrUseOfViewScreen({
        error: Error()
      }), ViewScreen) : ViewScreen) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "time_lab", _descriptor, this);

          _initializerDefineProperty(this, "barNode", _descriptor2, this);

          _initializerDefineProperty(this, "barItemPfb", _descriptor3, this);

          _initializerDefineProperty(this, "speedNodeParent", _descriptor4, this);

          this.speedIdx = 1;

          _initializerDefineProperty(this, "attackWeapon", _descriptor5, this);

          _initializerDefineProperty(this, "defanseWeapon", _descriptor6, this);

          this.bookIndex = 0;
        }

        onLoad() {
          super.onLoad();
          this.schedule(() => {
            this.updateTime();
          }, 1);
          this.attackWeapon.node.active = this.defanseWeapon.node.active = false;
          this.defanseWeapon.team_layout.getComponent(Layout).horizontalDirection = Layout.HorizontalDirection.RIGHT_TO_LEFT;
        }

        onShow() {}

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Pvp_start, this.Pvp_start, this);
        }

        Pvp_start() {
          let idx = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).checkInt((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("FightSpeedIdx"));
          idx = Math.max(idx, 1);
          this.setSpeedIdx(idx);
          let list = [this.attackWeapon, this.defanseWeapon];

          for (let index = 0; index < list.length; index++) {
            const v = list[index];
            let info = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.getPvpFightInfoByGroup(index);

            if (info) {
              v.node.active = true;
              v.setBooks(info.books, info.questLevel);
            } else {
              v.node.active = false;
            }
          }

          this.schedule(() => {
            this.checkBookActive();
          }, 1);
          this.checkBookActive();
        }

        checkBookActive() {
          for (let index = this.bookIndex; index < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().PvPRogueTick.length; index++) {
            const time = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().PvPRogueTick[index];

            if ((_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
              error: Error()
            }), PvpControl) : PvpControl).ins.time >= time) {
              this.attackWeapon.activeBookIndex(index);
              this.defanseWeapon.activeBookIndex(index);
              this.bookIndex = index + 1;
              break;
            }
          }
        }

        updateTime() {
          if ((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.isFight()) {
            this.time_lab.string = (_crd && setTextTime_3 === void 0 ? (_reportPossibleCrUseOfsetTextTime_({
              error: Error()
            }), setTextTime_3) : setTextTime_3)((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.stageTab.Time - Math.floor((_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
              error: Error()
            }), PvpControl) : PvpControl).ins.time / 1000));
          }
        }

        createBarItem() {
          let barItem = instantiate(this.barItemPfb);
          this.barNode.addChild(barItem);
          return barItem.getComponent(_crd && FightBarItem === void 0 ? (_reportPossibleCrUseOfFightBarItem({
            error: Error()
          }), FightBarItem) : FightBarItem);
        }

        onSpeedClick(event, data) {
          let idx = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).checkInt(data);

          if (this.checkSpeedOpen(idx + 1, true)) {
            idx = idx + 1;
            this.setSpeedIdx(idx);
          } else {
            if (idx + 1 >= 3) {
              this.setSpeedIdx(1);
            }
          }
        }

        setSpeedIdx(idx) {
          if (idx > 3) {
            idx = 1;
          }

          this.speedIdx = idx;
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).setItem("FightSpeedIdx", idx);

          for (let index = 0; index < this.speedNodeParent.children.length; index++) {
            const element = this.speedNodeParent.children[index];
            element.active = idx - 1 == index;
          }

          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.timeScale = Math.max((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).checkInt((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().TimeScale[this.speedIdx - 1]), 0.8);
        }

        checkSpeedOpen(index, istips = false) {
          if ((_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.isTest) {
            return true;
          }

          if (index == 1) {
            return true;
          } else if (index == 2) {
            if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_FightSpeed2)) {
              return true;
            } else {
              if (istips) {
                let openTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().OpenFunctionTableByName.getValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).OpenFunctionName.OpenFunctionName_FightSpeed2);
                let PlayerLv = openTab.PlayerLv;
                let key = "ui_fight_16";
                (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                  error: Error()
                }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getCombineString(key, [PlayerLv]));
              }

              return false;
            }
          } else if (index == 3) {
            if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_FightSpeed3)) {
              return true;
            } else {
              if (istips) {
                (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                  error: Error()
                }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getLab("ui_fight_17"));
              }

              return false;
            }
          } else {
            return true;
          }
        }

        onPauseClick() {
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.pause = true;
          (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
            error: Error()
          }), CommonTipsPop) : CommonTipsPop).create((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("是否退出战斗？"), btnType => {
            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.pause = false;

            if (btnType == (_crd && CommonTipsPopCloseType === void 0 ? (_reportPossibleCrUseOfCommonTipsPopCloseType({
              error: Error()
            }), CommonTipsPopCloseType) : CommonTipsPopCloseType).confirm) {
              // EventMgr.emitLocal(LocalEvent.quitFight)
              (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
                error: Error()
              }), FightRootControl) : FightRootControl).ins.setState((_crd && FightState === void 0 ? (_reportPossibleCrUseOfFightState({
                error: Error()
              }), FightState) : FightState).end);
              (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
                error: Error()
              }), FightRootControl) : FightRootControl).ins.pvpEnd();
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "time_lab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "barNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "barItemPfb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "speedNodeParent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "attackWeapon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "defanseWeapon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=943c769beb7d6b14241a8b62459e6baa9f6b7a66.js.map
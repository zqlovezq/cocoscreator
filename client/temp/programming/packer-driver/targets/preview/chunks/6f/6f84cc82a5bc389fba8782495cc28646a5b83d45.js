System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, tab, ViewName, ClientView, _crd, ccclass, property;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../define/ViewDefine", _context.meta, extras);
  }

  _export("ClientView", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      ViewName = _unresolved_4.ViewName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "818a56emBpPzKyraWKDb+f+", "ClientView", undefined);

      __checkObsolete__(['Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ClientView", ClientView = class ClientView extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);
          this.viewMap = new Map();
          this.first = false;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new ClientView();
          }

          return this._instance;
        }

        init() {
          if (this.first) {
            return;
          }

          this.first = true;
          super.init();

          for (var index = 0; index < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ModuleTable.length; index++) {
            var v = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ModuleTable[index];
            this.addTab(v);
          }

          this.addTab({
            ModuleType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Module.Module_LoginView,
            ViewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).LoginView,
            Path: "prefab/login/LoginView",
            ViewType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewType.ViewType_View,
            ZIndex: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewZIndex.ViewZIndex_View
          });
          this.addTab({
            ModuleType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Module.Module_Unknown,
            ViewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).Loading,
            Path: "prefab/Loading",
            ViewType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewType.ViewType_Persist,
            ZIndex: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewZIndex.ViewZIndex_Loading
          });
          this.addTab({
            ModuleType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Module.Module_Unknown,
            ViewName: "FightTestView",
            Path: "prefab/fight/FightTestView",
            ViewType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewType.ViewType_Diy,
            ZIndex: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewZIndex.ViewZIndex_View
          });
          this.addTab({
            ModuleType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Module.Module_Unknown,
            ViewName: "RoguePop",
            Path: "prefab/fight/view/rogue/RoguePop",
            ViewType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewType.ViewType_Pop,
            ZIndex: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewZIndex.ViewZIndex_Pop
          });
          this.addTab({
            ModuleType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Module.Module_Unknown,
            ViewName: "FightTestAttr",
            Path: "prefab/fight/view/test/FightTestAttr",
            ViewType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewType.ViewType_Pop,
            ZIndex: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewZIndex.ViewZIndex_Pop
          });
          this.addTab({
            ModuleType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Module.Module_Unknown,
            ViewName: "NewHeroPop",
            Path: "prefab/common/NewHeroPop",
            ViewType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewType.ViewType_Pop,
            ZIndex: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewZIndex.ViewZIndex_Pop
          });
          this.addTab({
            ModuleType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Module.Module_Unknown,
            ViewName: "FightDamageRankPop",
            Path: "prefab/fight/view/damage/FightDamageRankPop",
            ViewType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewType.ViewType_Pop,
            ZIndex: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewZIndex.ViewZIndex_Pop
          });
          this.addTab({
            ModuleType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Module.Module_Unknown,
            ViewName: "FightPausePop",
            Path: "prefab/fight/view/FightPausePop",
            ViewType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewType.ViewType_Pop,
            ZIndex: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewZIndex.ViewZIndex_Pop
          });
          this.addTab({
            ModuleType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Module.Module_Unknown,
            ViewName: "FightWorldBossResultPop",
            Path: "prefab/fight/view/result/FightWorldBossResultPop",
            ViewType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewType.ViewType_Pop,
            ZIndex: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewZIndex.ViewZIndex_Pop
          });
          this.addTab({
            ModuleType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Module.Module_Unknown,
            ViewName: "SdkTestPop",
            Path: "prefab/SdkTestPop",
            ViewType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewType.ViewType_Pop,
            ZIndex: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewZIndex.ViewZIndex_Pop
          });
          this.addTab({
            ModuleType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Module.Module_Unknown,
            ViewName: "FightPvpDefenseUIView",
            Path: "prefab/fight/FightPvpDefenseUIView",
            ViewType: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewType.ViewType_View,
            ZIndex: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewZIndex.ViewZIndex_View
          });
          console.log(this.viewMap);
        }

        addTab(viewTab) {
          this.viewMap.set(viewTab.ViewName, viewTab);
        }

        register() {}

        getViewTab(viewName) {
          return this.viewMap.get(viewName);
        }

      });

      ClientView._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6f84cc82a5bc389fba8782495cc28646a5b83d45.js.map
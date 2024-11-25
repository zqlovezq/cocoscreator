System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, error, instantiate, Node, Prefab, Toggle, ToggleContainer, ViewScreen, SignInView, LoadResAsync, ClientView, ViewName, tab, ActivityData, HeroRoadView, WelfareActivityToggleItem, OpenFunctionMgr, MonthlyCardView, VipPrivilegeView, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, WelfareActivityMainView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewScreen(extras) {
    _reporterNs.report("ViewScreen", "../../../framework/base/ViewScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignInView(extras) {
    _reporterNs.report("SignInView", "./signIn/SignInView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResAsync(extras) {
    _reporterNs.report("LoadResAsync", "../../mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientView(extras) {
    _reporterNs.report("ClientView", "../../mgr/ClientView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "./ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroRoadView(extras) {
    _reporterNs.report("HeroRoadView", "./heroRoad/HeroRoadView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWelfareActivityToggleItem(extras) {
    _reporterNs.report("WelfareActivityToggleItem", "./WelfareActivityToggleItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonthlyCardView(extras) {
    _reporterNs.report("MonthlyCardView", "./monthlyCard/MonthlyCardView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVipPrivilegeView(extras) {
    _reporterNs.report("VipPrivilegeView", "./vip/VipPrivilegeView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      error = _cc.error;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Toggle = _cc.Toggle;
      ToggleContainer = _cc.ToggleContainer;
    }, function (_unresolved_2) {
      ViewScreen = _unresolved_2.ViewScreen;
    }, function (_unresolved_3) {
      SignInView = _unresolved_3.SignInView;
    }, function (_unresolved_4) {
      LoadResAsync = _unresolved_4.LoadResAsync;
    }, function (_unresolved_5) {
      ClientView = _unresolved_5.ClientView;
    }, function (_unresolved_6) {
      ViewName = _unresolved_6.ViewName;
    }, function (_unresolved_7) {
      tab = _unresolved_7.tab;
    }, function (_unresolved_8) {
      ActivityData = _unresolved_8.ActivityData;
    }, function (_unresolved_9) {
      HeroRoadView = _unresolved_9.HeroRoadView;
    }, function (_unresolved_10) {
      WelfareActivityToggleItem = _unresolved_10.WelfareActivityToggleItem;
    }, function (_unresolved_11) {
      OpenFunctionMgr = _unresolved_11.OpenFunctionMgr;
    }, function (_unresolved_12) {
      MonthlyCardView = _unresolved_12.MonthlyCardView;
    }, function (_unresolved_13) {
      VipPrivilegeView = _unresolved_13.VipPrivilegeView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d2666oCjIJDMa0TX3a9dH17", "WelfareActivityMainView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'error', 'instantiate', 'Node', 'Prefab', 'Toggle', 'ToggleContainer']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * WelfareActivityMainView
       * zhudingchao
       * Thu Jun 20 2024 17:14:30 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/activity/WelfareActivityMainView.ts
       *
       */

      _export("WelfareActivityMainView", WelfareActivityMainView = (_dec = ccclass('WelfareActivityMainView'), _dec2 = property(Node), _dec3 = property(ToggleContainer), _dec(_class = (_class2 = class WelfareActivityMainView extends (_crd && ViewScreen === void 0 ? (_reportPossibleCrUseOfViewScreen({
        error: Error()
      }), ViewScreen) : ViewScreen) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "activityNode", _descriptor, this);

          _initializerDefineProperty(this, "toggleContainer", _descriptor2, this);

          this.signInView = void 0;
          this.newPlayerSignInView = void 0;
          this.heroRoadView = void 0;
          this.currTag = 0;
          this.currNode = null;
          this.toggleItemMap = void 0;
          this.monthlyCardView = null;
          this.vipView = null;
        }

        register() {}

        onShow() {
          this.initToggle();
          this.initView();
        }

        initToggle() {
          this.toggleItemMap = new Map();
          var toggles = this.toggleContainer.toggleItems;

          for (var key in toggles) {
            var item = toggles[key].node.getComponent(_crd && WelfareActivityToggleItem === void 0 ? (_reportPossibleCrUseOfWelfareActivityToggleItem({
              error: Error()
            }), WelfareActivityToggleItem) : WelfareActivityToggleItem);
            var isOpen = this.getActivityOpen(item.opName);

            if (isOpen) {
              toggles[key].node.active = true;
              item.updateRedPoint();
              this.toggleItemMap.set(item.opName, item);
            } else {
              toggles[key].node.active = false;
            }
          }

          var items = Array.from(this.toggleItemMap.values());

          if (this.openData && this.openData["type"]) {
            var type = this.openData["type"];

            for (var _key in items) {
              if (items[_key].opName == type) {
                items[_key].node.getComponent(Toggle).isChecked = true;
                this.currTag = type;
                break;
              }
            }
          } else {
            items[0].node.getComponent(Toggle).isChecked = true;
            this.currTag = items[0].node.getComponent(_crd && WelfareActivityToggleItem === void 0 ? (_reportPossibleCrUseOfWelfareActivityToggleItem({
              error: Error()
            }), WelfareActivityToggleItem) : WelfareActivityToggleItem).opName;
          } // for (let key in toggles) {
          //     if (toggles[key].isChecked) {
          //         this.currTag = toggles[key].node.getComponent(WelfareActivityToggleItem).opName;
          //     }
          // }

        }

        getActivityOpen(name) {
          var isOpen = false;

          switch (name) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_NewServerSignIn:
              isOpen = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                error: Error()
              }), ActivityData) : ActivityData).ins.isOpenDailyAcivity((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).DailyRewardType.DailyRewardType_NewServer);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_DailySignIn:
              isOpen = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                error: Error()
              }), ActivityData) : ActivityData).ins.isOpenDailyAcivity((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).DailyRewardType.DailyRewardType_Daily);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_HeroCollection:
              isOpen = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                error: Error()
              }), ActivityData) : ActivityData).ins.isOpenHeroCollectio();
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_MonthlyPass:
              isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                error: Error()
              }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen(name);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_Vip:
              isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                error: Error()
              }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen(name);
              break;
          }

          return isOpen;
        }

        initView() {
          if (this.currNode) {
            this.currNode.active = false;
          }

          switch (this.currTag) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_NewServerSignIn:
              this.initNewPlayerSignInView();
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_DailySignIn:
              this.initSignInView();
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_HeroCollection:
              this.initHeroRoadView();
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_MonthlyPass:
              this.initMonthlyCardView();
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_Vip:
              this.initVipView();
              break;
          }
        }

        initSignInView() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.signInView) {
              var view = yield _this.createView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).SignInView);

              if (view) {
                _this.signInView = view.getComponent(_crd && SignInView === void 0 ? (_reportPossibleCrUseOfSignInView({
                  error: Error()
                }), SignInView) : SignInView);
                _this.currNode = view;

                _this.signInView.initView((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).DailyRewardType.DailyRewardType_Daily);
              } // let pfb: Prefab = await LoadResAsync(viewTab.Path, Prefab)

            } else {
              _this.signInView.node.active = true;
              _this.currNode = _this.signInView.node;

              _this.signInView.updateView();
            }
          })();
        }

        initNewPlayerSignInView() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2.newPlayerSignInView) {
              var view = yield _this2.createView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).NewPlayerSignInView);

              if (view) {
                _this2.newPlayerSignInView = view.getComponent(_crd && SignInView === void 0 ? (_reportPossibleCrUseOfSignInView({
                  error: Error()
                }), SignInView) : SignInView);
                _this2.currNode = view;

                _this2.newPlayerSignInView.initView((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).DailyRewardType.DailyRewardType_NewServer);
              } // let pfb: Prefab = await LoadResAsync(viewTab.Path, Prefab)

            } else {
              _this2.newPlayerSignInView.node.active = true;
              _this2.currNode = _this2.newPlayerSignInView.node;

              _this2.newPlayerSignInView.updateView();
            }
          })();
        }

        initHeroRoadView() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (!_this3.heroRoadView) {
              var view = yield _this3.createView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).HeroRoadView);

              if (view) {
                _this3.heroRoadView = view.getComponent(_crd && HeroRoadView === void 0 ? (_reportPossibleCrUseOfHeroRoadView({
                  error: Error()
                }), HeroRoadView) : HeroRoadView);
                _this3.currNode = view;

                _this3.heroRoadView.initView();
              } // let pfb: Prefab = await LoadResAsync(viewTab.Path, Prefab)

            } else {
              _this3.heroRoadView.node.active = true;
              _this3.currNode = _this3.heroRoadView.node;

              _this3.heroRoadView.updateView();
            }
          })();
        }

        initMonthlyCardView() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (!_this4.monthlyCardView) {
              var view = yield _this4.createView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).MonthlyCardView);

              if (view) {
                _this4.monthlyCardView = view.getComponent(_crd && MonthlyCardView === void 0 ? (_reportPossibleCrUseOfMonthlyCardView({
                  error: Error()
                }), MonthlyCardView) : MonthlyCardView);
                _this4.currNode = view;

                _this4.monthlyCardView.initView();
              } // let pfb: Prefab = await LoadResAsync(viewTab.Path, Prefab)

            } else {
              _this4.monthlyCardView.node.active = true;
              _this4.currNode = _this4.monthlyCardView.node;

              _this4.monthlyCardView.updateView();
            }
          })();
        }

        initVipView() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            if (!_this5.vipView) {
              var view = yield _this5.createView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).VipPrivilegeView);

              if (view) {
                _this5.vipView = view.getComponent(_crd && VipPrivilegeView === void 0 ? (_reportPossibleCrUseOfVipPrivilegeView({
                  error: Error()
                }), VipPrivilegeView) : VipPrivilegeView);
                _this5.currNode = view;

                _this5.vipView.initView();
              } // let pfb: Prefab = await LoadResAsync(viewTab.Path, Prefab)

            } else {
              _this5.vipView.node.active = true;
              _this5.currNode = _this5.vipView.node;

              _this5.vipView.updateView();
            }
          })();
        }

        createView(viewName) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var viewTab = (_crd && ClientView === void 0 ? (_reportPossibleCrUseOfClientView({
              error: Error()
            }), ClientView) : ClientView).ins.getViewTab(viewName);

            if (viewTab) {
              var pfb = yield (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
                error: Error()
              }), LoadResAsync) : LoadResAsync)(viewTab.Path, Prefab);
              var view = instantiate(pfb);
              view.parent = _this6.activityNode;
              return view;
            } else {
              error("view路径没有配置", viewName);
            }

            return null;
          })();
        }

        updateToggleRedPoint(opName) {
          var item = this.toggleItemMap.get(opName);

          if (item) {
            item.updateRedPoint();
          }
        }

        onClickToggle(event) {
          var type = event.target.getComponent(_crd && WelfareActivityToggleItem === void 0 ? (_reportPossibleCrUseOfWelfareActivityToggleItem({
            error: Error()
          }), WelfareActivityToggleItem) : WelfareActivityToggleItem).opName;

          if (this.currTag != type) {
            this.currTag = type;
            this.initView();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "activityNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toggleContainer", [_dec3], {
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
//# sourceMappingURL=60dcf25f6a47bdf9e8023d68dbc6f1f75fe5c3e8.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, Size, _decorator, director, error, instantiate, view, AbsMgr, LoadResAsync, ResMgr, ViewBase, Func, tab, ViewName, ClientView, BlackTips, LangMgr, OpenFunctionMgr, LocalEvent, EventMgr, AssociationData, UIMgr, _crd, ccclass, property;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  /**
   * 提示物品不足
   * @param itemId 
   */
  function ShowTips(_x) {
    return _ShowTips.apply(this, arguments);
  }

  function _ShowTips() {
    _ShowTips = _asyncToGenerator(function* (key) {
      var scene = director.getScene();

      if (!scene) {
        return;
      }

      var nodeTipsContainer = scene.getChildByName("BlackTips");

      if (!nodeTipsContainer) {
        var prefab = yield (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
          error: Error()
        }), LoadResAsync) : LoadResAsync)('prefab/BlackTips', Prefab);
        nodeTipsContainer = instantiate(prefab);
        nodeTipsContainer.name = "BlackTips";
        scene.addChild(nodeTipsContainer);
        nodeTipsContainer.setSiblingIndex(1);
      }

      var tipsCom = nodeTipsContainer.getComponent(_crd && BlackTips === void 0 ? (_reportPossibleCrUseOfBlackTips({
        error: Error()
      }), BlackTips) : BlackTips);

      if (!tipsCom) {
        return;
      }

      tipsCom.AddTips(key);
    });
    return _ShowTips.apply(this, arguments);
  }

  function ShowItemNotEnoughTips(_x2) {
    return _ShowItemNotEnoughTips.apply(this, arguments);
  }

  function _ShowItemNotEnoughTips() {
    _ShowItemNotEnoughTips = _asyncToGenerator(function* (itemId) {
      var item = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
        error: Error()
      }), tab) : tab).getData().ItemTableById.getValue(itemId);

      if (item) {
        if (item.AcquireWay.length > 0) {
          UIMgr.ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).ItemGetWayPop,
            data: {
              itemId: itemId
            }
          });
        } else {
          var str = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("Tips_itemshortage", [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(item.Name)]);
          ShowTips(str);
        }
      }
    });
    return _ShowItemNotEnoughTips.apply(this, arguments);
  }

  function _reportPossibleCrUseOfAbsMgr(extras) {
    _reporterNs.report("AbsMgr", "../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResAsync(extras) {
    _reporterNs.report("LoadResAsync", "./ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "./ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewBase(extras) {
    _reporterNs.report("ViewBase", "../../framework/base/ViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewData(extras) {
    _reporterNs.report("ViewData", "../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientView(extras) {
    _reporterNs.report("ClientView", "./ClientView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlackTips(extras) {
    _reporterNs.report("BlackTips", "../../Common/script/BlackTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "./LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "./EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "../model/association/AssociationData", _context.meta, extras);
  }

  _export({
    UIMgr: void 0,
    ShowTips: ShowTips,
    ShowItemNotEnoughTips: ShowItemNotEnoughTips
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      Size = _cc.Size;
      _decorator = _cc._decorator;
      director = _cc.director;
      error = _cc.error;
      instantiate = _cc.instantiate;
      view = _cc.view;
    }, function (_unresolved_2) {
      AbsMgr = _unresolved_2.AbsMgr;
    }, function (_unresolved_3) {
      LoadResAsync = _unresolved_3.LoadResAsync;
      ResMgr = _unresolved_3.ResMgr;
    }, function (_unresolved_4) {
      ViewBase = _unresolved_4.ViewBase;
    }, function (_unresolved_5) {
      Func = _unresolved_5.Func;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      ViewName = _unresolved_7.ViewName;
    }, function (_unresolved_8) {
      ClientView = _unresolved_8.ClientView;
    }, function (_unresolved_9) {
      BlackTips = _unresolved_9.BlackTips;
    }, function (_unresolved_10) {
      LangMgr = _unresolved_10.LangMgr;
    }, function (_unresolved_11) {
      OpenFunctionMgr = _unresolved_11.OpenFunctionMgr;
    }, function (_unresolved_12) {
      LocalEvent = _unresolved_12.LocalEvent;
    }, function (_unresolved_13) {
      EventMgr = _unresolved_13.EventMgr;
    }, function (_unresolved_14) {
      AssociationData = _unresolved_14.AssociationData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7ee8N+QllClKmRzLdeCutj", "UIMgr", undefined);

      __checkObsolete__(['Camera', 'Director', 'DynamicAtlasManager', 'Node', 'Prefab', 'Scene', 'Size', '_decorator', 'director', 'error', 'game', 'instantiate', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIMgr", UIMgr = class UIMgr extends (_crd && AbsMgr === void 0 ? (_reportPossibleCrUseOfAbsMgr({
        error: Error()
      }), AbsMgr) : AbsMgr) {
        constructor() {
          super(...arguments);
          this.camera2d = null;
          this.rootNode = void 0;
          this.uiNode = void 0;
          this.viewTypeMap = new Map();
          this.visibleSize = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new UIMgr();
          }

          return this._instance;
        }

        init() {}

        setCamera(camera) {
          this.camera2d = camera;
        }

        setRootNode(root) {
          this.rootNode = root;
          this.uiNode = root.getChildByName("uiNode");
        }

        /** ViewName 记得查看ViewDefine */
        show(uiData) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var viewTab = (_crd && ClientView === void 0 ? (_reportPossibleCrUseOfClientView({
              error: Error()
            }), ClientView) : ClientView).ins.getViewTab(uiData.viewName);

            if (viewTab == null) {
              error("viewTab==null===viewName:" + uiData.viewName);
              return;
            }

            if (viewTab["isLoading"]) {
              return;
            }

            viewTab["isLoading"] = true;
            console.warn("打开界面", uiData.viewName);

            var nowView = _this.getView(viewTab.ViewName);

            if (nowView == null) {
              var pfb = yield (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
                error: Error()
              }), LoadResAsync) : LoadResAsync)(viewTab.Path, Prefab);

              if (pfb) {
                nowView = instantiate(pfb);

                if (viewTab.ViewType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).ViewType.ViewType_Persist) {
                  pfb.addRef();
                  director.addPersistRootNode(nowView);
                } else {
                  if (uiData.parent) {
                    uiData.parent.addChild(nowView);
                  } else {
                    _this.uiNode.addChild(nowView);
                  }
                }

                _this.addView(viewTab.ViewName, nowView);

                (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                  error: Error()
                }), Func) : Func).cocosNodeZIndex(nowView, uiData.zIndex || viewTab.ZIndex || 0);
                var viewBase = nowView.getComponent(_crd && ViewBase === void 0 ? (_reportPossibleCrUseOfViewBase({
                  error: Error()
                }), ViewBase) : ViewBase);

                if (viewBase) {
                  viewBase.loadShow();
                }
              }
            } else {
              if (viewTab.ViewType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ViewType.ViewType_View || viewTab.ViewType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ViewType.ViewType_Pop) {
                var zIndex = uiData.zIndex || viewTab.ZIndex || 0;
                nowView.active = true;
                (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                  error: Error()
                }), Func) : Func).cocosNodeZIndex(nowView, zIndex + 1);
                (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                  error: Error()
                }), Func) : Func).setzIndex(nowView, zIndex);
              }
            }

            if (nowView) {
              var _viewBase = nowView.getComponent(_crd && ViewBase === void 0 ? (_reportPossibleCrUseOfViewBase({
                error: Error()
              }), ViewBase) : ViewBase);

              if (_viewBase) {
                _viewBase.setOpenData(uiData.data);

                _viewBase.onShow();
              }
            }

            viewTab["isLoading"] = false;
            return nowView;
          })();
        }

        hideView(viewName) {
          console.warn("销毁界面", viewName);
          var viewTab = (_crd && ClientView === void 0 ? (_reportPossibleCrUseOfClientView({
            error: Error()
          }), ClientView) : ClientView).ins.getViewTab(viewName);
          var views = this.getViewListByViewType(viewTab.ViewType);

          for (var index = 0; index < views.length; index++) {
            var v = views[index];

            if (v.viewName == viewName) {
              if (v.view && v.view.isValid) {
                if (viewTab.ViewType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).ViewType.ViewType_Persist) {
                  v.view.getComponent(_crd && ViewBase === void 0 ? (_reportPossibleCrUseOfViewBase({
                    error: Error()
                  }), ViewBase) : ViewBase).onClose();
                  return true;
                }

                v.view.destroy();
              }

              v.view = null;
              views.splice(index, 1);
              this.checkView();
              return true;
            }
          }

          return false;
        }

        addView(viewName, viewNode) {
          var viewTab = (_crd && ClientView === void 0 ? (_reportPossibleCrUseOfClientView({
            error: Error()
          }), ClientView) : ClientView).ins.getViewTab(viewName);

          if (viewTab.ViewType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ViewType.ViewType_Diy) {
            return;
          }

          var views = this.getViewListByViewType(viewTab.ViewType);
          views.push({
            viewName: viewName,
            view: viewNode
          });
          this.checkView();
        }

        getView(viewName) {
          var viewTab = (_crd && ClientView === void 0 ? (_reportPossibleCrUseOfClientView({
            error: Error()
          }), ClientView) : ClientView).ins.getViewTab(viewName);
          var views = this.getViewListByViewType(viewTab.ViewType);
          var viewListData = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).forBy(views, "viewName", viewName);

          if (viewListData) {
            return viewListData.view;
          }

          return null;
        }

        getViewScr(viewName) {
          var _view = this.getView(viewName);

          if (_view) {
            return _view.getComponent(viewName);
          }
        }

        getViewListByViewType(viewType) {
          if (!this.viewTypeMap.has(viewType)) {
            this.viewTypeMap.set(viewType, []);
          }

          return this.viewTypeMap.get(viewType);
        } //只清理存储数据， 不做实际销毁，主要处理切换场景时把当前列表置空


        clearViewAndPop() {
          this.viewTypeMap.forEach((value, key) => {
            if (key != (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ViewType.ViewType_Persist) {
              this.viewTypeMap.set(key, []);
            }
          });
        }

        checkView() {
          var views = this.getViewListByViewType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ViewType.ViewType_View);
          var pops = this.getViewListByViewType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ViewType.ViewType_Pop);
          var persists = this.getViewListByViewType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ViewType.ViewType_Persist);

          if (views.length > 0) {
            for (var index = 0; index < views.length; index++) {
              var v = views[index];
              v.view.active = index + 1 == views.length;
            }
          }
        }

        releaseView(viewName) {
          var viewTab = (_crd && ClientView === void 0 ? (_reportPossibleCrUseOfClientView({
            error: Error()
          }), ClientView) : ClientView).ins.getViewTab(viewName);

          if (viewTab) {
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).release(viewTab.Path, Prefab);
          }
        }

        jumpLayer(module, tabId, closeFunc, opFuncName, deepArgs) {
          var moduleTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ModuleTableByModuleType.getValue(module);
          var isOpen = false;
          var openId = -1;
          var guildOpen = false;
          var guideOpenId = -1; // 功能名称

          if (moduleTab.OpenFunctionId.length > 1) {
            if (tabId) {
              openId = moduleTab.OpenFunctionId[tabId];
            } else {
              if (opFuncName) {
                openId = opFuncName;
              } else {
                openId = moduleTab.OpenFunctionId[1];
              }
            }
          } else if (moduleTab.OpenFunctionId.length === 1) {
            openId = moduleTab.OpenFunctionId[0];
          } else {
            isOpen = true;
          }

          if (openId >= 0) {
            isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen(openId);
          } // 公会功能


          if (moduleTab.GuildOpenFunction) {
            guideOpenId = moduleTab.GuildOpenFunction;
          } else {
            guildOpen = true;
          }

          if (guideOpenId >= 0) {
            guildOpen = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.checkFunctionIsOpen(guideOpenId);
          }

          if (isOpen && guildOpen) {
            if (!tabId) {
              if (deepArgs && deepArgs.length > 0) {
                this.show({
                  viewName: moduleTab.ViewName,
                  data: deepArgs
                });
              } else {
                this.show({
                  viewName: moduleTab.ViewName
                });
              }
            } else {
              this.show({
                viewName: moduleTab.ViewName,
                data: tabId
              });
            }

            if (closeFunc) {
              closeFunc();
            }

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).JumpLayerSuceess, module);
          } else {
            if (guideOpenId > 0) {
              (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
                error: Error()
              }), AssociationData) : AssociationData).ins.showFunctionTips(guideOpenId);
            } else {
              (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                error: Error()
              }), OpenFunctionMgr) : OpenFunctionMgr).ins.showFunctionTips(openId);
            }
          }
        }

        getVisibleSize() {
          if (this.visibleSize == null) {
            this.visibleSize = new Size(view.getVisibleSize().width / 1.8, view.getVisibleSize().height / 1.8);
          }

          return this.visibleSize;
        }

      });

      UIMgr._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=90252842c7b7e5b5d2661e8457351ac4bf5dc19e.js.map
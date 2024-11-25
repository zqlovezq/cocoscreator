System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, error, instantiate, Node, Prefab, ViewPop, ViewName, ClientView, LoadResAsync, tab, CombineStarUpItem, CombineToggleItem, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CombieActivityMainView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientView(extras) {
    _reporterNs.report("ClientView", "../../../mgr/ClientView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResAsync(extras) {
    _reporterNs.report("LoadResAsync", "../../../mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCombineStarUpItem(extras) {
    _reporterNs.report("CombineStarUpItem", "./CombineStarUpItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCombineToggleItem(extras) {
    _reporterNs.report("CombineToggleItem", "./CombineToggleItem", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ViewName = _unresolved_3.ViewName;
    }, function (_unresolved_4) {
      ClientView = _unresolved_4.ClientView;
    }, function (_unresolved_5) {
      LoadResAsync = _unresolved_5.LoadResAsync;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      CombineStarUpItem = _unresolved_7.CombineStarUpItem;
    }, function (_unresolved_8) {
      CombineToggleItem = _unresolved_8.CombineToggleItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61ed2SAPyZC9LJFCZC1UySK", "CombieActivityMainView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'error', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CombieActivityMainView", CombieActivityMainView = (_dec = ccclass('CombieActivityMainView'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = (_class2 = class CombieActivityMainView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "activityNode", _descriptor, this);

          _initializerDefineProperty(this, "pfb_toggle_item", _descriptor2, this);

          _initializerDefineProperty(this, "node_toggle_content", _descriptor3, this);

          this.currNode = null;
          this.view_type = null;
        }

        onShow() {
          // 获取活动分组
          var _tab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ActivityTableByActivityId.getValue(this.openData);

          var tabList = _tab.ActivityIds.splice(0, 1); // 通过tabList创建toggle


          this.createToggle(tabList);
          this.switchView(tabList[2]);
        }

        switchView(activityId) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.currNode) {
              _this.currNode.active = false;
            }

            var activityInfo = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ActivityTableByActivityId.getValue(activityId);
            _this.view_type = activityInfo.Type;

            switch (_this.view_type) {
              // 养成活动
              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityHeroGrow:
                if (!_this["view" + activityId]) {
                  var _hero_grow_layer = yield _this.createView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).CycleGiftView);

                  if (_hero_grow_layer) {
                    _this["view" + activityId] = _hero_grow_layer.getComponent(_crd && CombineStarUpItem === void 0 ? (_reportPossibleCrUseOfCombineStarUpItem({
                      error: Error()
                    }), CombineStarUpItem) : CombineStarUpItem);
                    _this.currNode = _hero_grow_layer;

                    _this["view" + activityId].onShow(activityId);
                  }
                } else {
                  _this["view" + activityId].node.active = true;
                  _this.currNode = _this["view" + activityId];

                  _this["view" + activityId].onShow(activityId);
                }

                break;

              default:
                break;
            }
          })();
        }

        createView(viewName) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var viewTab = (_crd && ClientView === void 0 ? (_reportPossibleCrUseOfClientView({
              error: Error()
            }), ClientView) : ClientView).ins.getViewTab(viewName);

            if (viewTab) {
              var pfb = yield (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
                error: Error()
              }), LoadResAsync) : LoadResAsync)(viewTab.Path, Prefab);
              var view = instantiate(pfb);
              view.parent = _this2.activityNode;
              return view;
            } else {
              error("view路径没有配置", viewName);
            }

            return null;
          })();
        }

        createToggle(tabList) {
          this.node_toggle_content.destroyAllChildren();

          for (var i = 0; i < tabList.length; i++) {
            var _key = tabList[i];
            var item = null;
            var itemTs = null;
            item = instantiate(this.pfb_toggle_item);
            item.parent = this.node_toggle_content;
            item.name = String(_key);
            itemTs = item.getComponent(_crd && CombineToggleItem === void 0 ? (_reportPossibleCrUseOfCombineToggleItem({
              error: Error()
            }), CombineToggleItem) : CombineToggleItem);
            itemTs.setData(_key, this);
            this["view" + _key] = null;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "activityNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_toggle_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_content", [_dec4], {
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
//# sourceMappingURL=aa1dde19108e524f5113ae5b83c1bf950389bb2f.js.map
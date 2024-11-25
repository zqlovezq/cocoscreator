System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Toggle, tab, LangMgr, RedComp, RedEventComp, RedDotType, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, CombineToggleItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCombineActivityMainView(extras) {
    _reporterNs.report("CombineActivityMainView", "./CombineActivityMainView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedComp(extras) {
    _reporterNs.report("RedComp", "../../../../Common/component/RedComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedEventComp(extras) {
    _reporterNs.report("RedEventComp", "../../../../Common/component/RedEventComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      RedComp = _unresolved_4.default;
    }, function (_unresolved_5) {
      RedEventComp = _unresolved_5.default;
    }, function (_unresolved_6) {
      RedDotType = _unresolved_6.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3156eUAeJxOUrqtsgD+/OL/", "CombineToggleItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Label', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CombineToggleItem", CombineToggleItem = (_dec = ccclass('CombineToggleItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Toggle), _dec5 = property(Node), _dec(_class = (_class2 = class CombineToggleItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbl_name", _descriptor, this);

          _initializerDefineProperty(this, "lbl_name_1", _descriptor2, this);

          _initializerDefineProperty(this, "toggle_node", _descriptor3, this);

          _initializerDefineProperty(this, "red_dot", _descriptor4, this);

          this._acitivtyId = 0;
          this._mainView = null;
        }

        setData(activityId, mainView) {
          this._acitivtyId = activityId;
          this._mainView = mainView;
          const activityInfo = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ActivityTableByActivityId.getValue(this._acitivtyId);
          this.lbl_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(activityInfo.WordKey);
          this.lbl_name_1.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(activityInfo.WordKey);

          if (this._acitivtyId === this._mainView.curActivityId) {
            this.toggle_node.isChecked = true;
          }

          let com = this.red_dot.addComponent(_crd && RedComp === void 0 ? (_reportPossibleCrUseOfRedComp({
            error: Error()
          }), RedComp) : RedComp);
          com.redNode = this.red_dot;
          let evet = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
            error: Error()
          }), RedEventComp) : RedEventComp)();

          if (activityInfo.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_BattlePassSignIn1) {
            evet.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Combine_Pass;
          } else if (activityInfo.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityHeroGrow) {
            evet.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Combine_Grow;
          } else if (activityInfo.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityMall) {
            evet.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Combine_Shop;
          } else if (activityInfo.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityCumulativeRecharge) {
            evet.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Combine_Recharge;
          }

          evet.child = String(mainView.openData);
          com.types.push(evet);
          com.addRed();
        }

        onClickCheck(e, type) {
          if (this._acitivtyId === this._mainView.curActivityId) {
            return;
          }

          this._mainView.switchView(this._acitivtyId);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_name", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_name_1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggle_node", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "red_dot", [_dec5], {
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
//# sourceMappingURL=b21f3f047bb3f42b3c8fcd2a246cce3a13d60d57.js.map
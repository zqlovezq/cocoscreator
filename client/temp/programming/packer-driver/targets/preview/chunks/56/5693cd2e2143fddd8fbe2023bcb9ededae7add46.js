System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, tab, LangMgr, RedDotType, RedMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, BattlePassChildToggleItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattlePassItem(extras) {
    _reporterNs.report("BattlePassItem", "./BattlePassItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
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
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      RedDotType = _unresolved_4.RedDotType;
    }, function (_unresolved_5) {
      RedMgr = _unresolved_5.RedMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "74fb3HHGi9IHIlXEZQuEjh8", "BattlePassChildToggleItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattlePassChildToggleItem", BattlePassChildToggleItem = (_dec = ccclass('BattlePassChildToggleItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec(_class = (_class2 = class BattlePassChildToggleItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbl_name_1", _descriptor, this);

          _initializerDefineProperty(this, "lbl_name_2", _descriptor2, this);

          _initializerDefineProperty(this, "node_red", _descriptor3, this);

          this._mainView = null;
          this._passTab = null;
        }

        initData(table, view) {
          this._passTab = table;
          this._mainView = view;
          var openName = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName[table.OpenFunction]);
          this.lbl_name_1.string = openName;
          this.lbl_name_2.string = openName;
          this.refreshRed(); // const redCompTs = this.node_red.addComponent(RedComp);
          // redCompTs.redNode = this.node_red;
          // const evet:RedEventComp = new RedEventComp();
          // evet.event = RedDotType.Battle_Pass;
          // evet.child = String(this._passTab.BattlePassTab);
          // evet.child1 = String(this._passTab.Id);
          // redCompTs.types.push(evet);
          // redCompTs.addRed();
          // console.log(this.node_red);
        }

        refreshRed() {
          this.node_red.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Battle_Pass, String(this._passTab.BattlePassTab), String(this._passTab.Id));
        }

        checkToggleItem() {
          this._mainView.switchView(this._passTab.Id);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_name_1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_name_2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_red", [_dec4], {
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
//# sourceMappingURL=5693cd2e2143fddd8fbe2023bcb9ededae7add46.js.map
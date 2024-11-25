System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, ProgressBar, Sprite, ComponentBase, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, PrestigeBarItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53576LQh5xNBZPeyXJUyzUF", "PrestigeBarItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ProgressBar', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * PrestigeBarItem
       * zhudingchao
       * Thu Jun 06 2024 10:01:03 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/prestige/PrestigeBarItem.ts
       *
       */

      _export("PrestigeBarItem", PrestigeBarItem = (_dec = ccclass('PrestigeBarItem'), _dec2 = property(Node), _dec3 = property(ProgressBar), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec(_class = (_class2 = class PrestigeBarItem extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "selectNode", _descriptor, this);

          _initializerDefineProperty(this, "bar", _descriptor2, this);

          _initializerDefineProperty(this, "btnNode", _descriptor3, this);

          _initializerDefineProperty(this, "redPoint", _descriptor4, this);

          _initializerDefineProperty(this, "nameLab", _descriptor5, this);

          this.touchCallBack = void 0;
          this.table = void 0;
        }

        register() {}

        initData(isUnLock, value, table) {
          this.table = table;
          this.selectNode.active = false;

          if (!table) {
            // this.selectNode.active=false;
            this.btnNode.active = false;
            this.bar.progress = value;
          } else {
            this.btnNode.active = true;
            this.bar.progress = value;
            this.btnNode.getComponent(Sprite).grayscale = !isUnLock;
            this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(table.Name);
          }
        }

        setTouchCallBack(touchCallBack) {
          this.touchCallBack = touchCallBack;
        }

        setSelectState(b) {
          this.selectNode.active = b;
        }

        onClickBtn() {
          if (this.touchCallBack && this.table) {
            this.touchCallBack(this);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selectNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "redPoint", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec6], {
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
//# sourceMappingURL=8c0b951c2b29e763d62ba132c93819e2dd33ac45.js.map
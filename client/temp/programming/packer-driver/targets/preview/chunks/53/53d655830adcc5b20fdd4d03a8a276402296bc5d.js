System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, LangMgr, ItemPoolMgr, ItemInfo, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, SignInRewardItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
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
      LangMgr = _unresolved_2.LangMgr;
    }, function (_unresolved_3) {
      ItemPoolMgr = _unresolved_3.ItemPoolMgr;
    }, function (_unresolved_4) {
      ItemInfo = _unresolved_4.ItemInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8112ER7xZEKaBF8qYvc55R", "SignInRewardItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * SignInRewardItem
       * zhudingchao
       * Thu Jun 20 2024 17:43:05 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/activity/signIn/SignInRewardItem.ts
       *
       */

      _export("SignInRewardItem", SignInRewardItem = (_dec = ccclass('SignInRewardItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = class SignInRewardItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "rewardbgNode", _descriptor, this);

          _initializerDefineProperty(this, "ordinarybgNode", _descriptor2, this);

          _initializerDefineProperty(this, "dayLab", _descriptor3, this);

          _initializerDefineProperty(this, "lockNode", _descriptor4, this);

          _initializerDefineProperty(this, "claimNode", _descriptor5, this);

          _initializerDefineProperty(this, "rewardNode", _descriptor6, this);

          _initializerDefineProperty(this, "signedNode", _descriptor7, this);

          this.table = void 0;
          this.touchCallBack = void 0;
          this.state = void 0;
        }

        initView(table, state, touchCallBack) {
          if (this.dayLab) {
            this.dayLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_commondesc_72", [table.Index]);
          }

          this.table = table;
          var item = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          item.initItemData(table.ItemId, table.ItemCount);
          var comNode = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(item, this.rewardNode);
          this.updateState(state);
          this.touchCallBack = touchCallBack;
          this.updateState(state);
        }

        updateState(state) {
          this.state = state;
          this.rewardbgNode.active = state == 2;
          this.signedNode.active = state == 2;
          this.ordinarybgNode.active = state == 0 || state == 1;
          this.lockNode.active = state == 0;
          this.claimNode.active = state == 1;
        }

        onClickItem() {
          if (this.touchCallBack && this.state == 1) {
            this.touchCallBack(this.table.Index);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rewardbgNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ordinarybgNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dayLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lockNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "claimNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rewardNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "signedNode", [_dec8], {
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
//# sourceMappingURL=53d655830adcc5b20fdd4d03a8a276402296bc5d.js.map
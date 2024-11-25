System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, LangMgr, tab, RedComp, RedEventComp, RedDotType, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, VipLvBtnItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
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
    }, function (_unresolved_2) {
      LangMgr = _unresolved_2.LangMgr;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      RedComp = _unresolved_4.default;
    }, function (_unresolved_5) {
      RedEventComp = _unresolved_5.default;
    }, function (_unresolved_6) {
      RedDotType = _unresolved_6.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35b00Bh8ctKY6+iVFOV93bz", "VipLvBtnItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'TERRAIN_HEIGHT_BASE']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * VipLvBtnItem
       * zhudingchao
       * Tue Jul 02 2024 15:56:49 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/activity/vip/VipLvBtnItem.ts
       *
       */

      _export("VipLvBtnItem", VipLvBtnItem = (_dec = ccclass('VipLvBtnItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec(_class = (_class2 = class VipLvBtnItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bgNode", _descriptor, this);

          _initializerDefineProperty(this, "checkNode", _descriptor2, this);

          _initializerDefineProperty(this, "vipLab", _descriptor3, this);

          _initializerDefineProperty(this, "redPoint", _descriptor4, this);

          this.callBack = void 0;
          this.vipTable = void 0;
        }

        initView(vipTable, callBack) {
          this.vipTable = vipTable;
          this.vipLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_vip_1", [this.vipTable.VipLv]);
          this.callBack = callBack;
          this.bgNode.active = true;
          this.checkNode.active = false;

          if (!this.redPoint.getComponent(_crd && RedComp === void 0 ? (_reportPossibleCrUseOfRedComp({
            error: Error()
          }), RedComp) : RedComp)) {
            var com = this.redPoint.addComponent(_crd && RedComp === void 0 ? (_reportPossibleCrUseOfRedComp({
              error: Error()
            }), RedComp) : RedComp);
            com.redNode = this.redPoint;
            var type1 = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();
            type1.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Vip_Buy;
            type1.child = vipTable.VipLv + "";
            com.types = [type1];
            com.addRed(); // RedMgr.refreshEvent(RedDotType.Vip_Buy);
          }
        }

        onEnable() {
          if (this.vipTable) {
            (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).DropTable;
            this.vipLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_vip_1", [this.vipTable.VipLv]);
          }
        }

        setSelectState(b) {
          this.bgNode.active = !b;
          this.checkNode.active = b;
        }

        onClickItem() {
          if (this.callBack) {
            this.callBack(this);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "checkNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "vipLab", [_dec4], {
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d79fefc79e99d7c13e32a8f9692f3e3d4917ab0f.js.map
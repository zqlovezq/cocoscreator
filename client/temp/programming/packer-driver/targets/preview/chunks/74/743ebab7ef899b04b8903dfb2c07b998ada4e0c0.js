System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, view, ViewPop, ItemPoolMgr, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, CommonBoxTipsPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      view = _cc.view;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ItemPoolMgr = _unresolved_3.ItemPoolMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62877eDGvBEXYLDmRm5pd+k", "CommonBoxTipsPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * CommonBoxTipsPop
       * zhudingchao
       * Wed Jun 05 2024 15:13:30 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/common/CommonBoxTipsPop.ts
       *
       */

      _export("CommonBoxTipsPop", CommonBoxTipsPop = (_dec = ccclass('CommonBoxTipsPop'), _dec2 = property(Node), _dec(_class = (_class2 = class CommonBoxTipsPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tipsNode", _descriptor, this);
        }

        register() {}

        onShow() {
          if (this.openData && this.openData["rewadInfos"]) {
            if (this.openData["worldPos"]) {
              this.tipsNode.worldPosition = this.openData["worldPos"];
            }

            var sY = this.openData["isDown"] ? -1 : 1;
            var rewadInfos = this.openData["rewadInfos"];
            var w = rewadInfos.length * 120 * 0.6 + 45 + this.tipsNode.worldPosition.x;
            var sx = 1;

            if (w > view.getVisibleSize().width) {
              sx = -1;
            }

            for (var key in rewadInfos) {
              var item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(rewadInfos[key], this.tipsNode);
              item.setScale(0.6 * sx, 0.6 * sY);
              item.setPosition(0, -56);
            }

            this.tipsNode.setScale(sx, sY); // this.scheduleOnce(() => {
            //     let y = this.tipsNode.worldPosition.x + this.tipsNode.getComponent(UITransform).contentSize.width - 30;
            //     if (y > view.getVisibleSize().width) {
            //         this.tipsNode.scale = new Vec3(-1, 1, 1);
            //         let nodes = this.tipsNode.children;
            //         for (let key in nodes) {
            //             nodes[key].scale = new Vec3(-0.6, 0.6, 1);
            //         }
            //     }
            // })
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tipsNode", [_dec2], {
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
//# sourceMappingURL=743ebab7ef899b04b8903dfb2c07b998ada4e0c0.js.map
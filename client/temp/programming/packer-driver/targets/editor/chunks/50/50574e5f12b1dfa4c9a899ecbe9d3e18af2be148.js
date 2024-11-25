System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Node, Vec2, _decorator, RedMgr, RedEventComp, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, RedComp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../logic/mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedEventComp(extras) {
    _reporterNs.report("RedEventComp", "./RedEventComp", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      RedMgr = _unresolved_2.RedMgr;
    }, function (_unresolved_3) {
      RedEventComp = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "449aahRX9hFT4o3fR87K6FR", "RedComp", undefined);

      __checkObsolete__(['Component', 'Node', 'Sprite', 'Vec2', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 红点组件
       */

      _export("default", RedComp = (_dec = property({
        type: Node,
        displayName: "红点节点",
        tooltip: "可不填，空值默认创建"
      }), _dec2 = property({
        tooltip: "位置偏移，统一为右上角标准做偏移"
      }), _dec3 = property({
        type: [_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
          error: Error()
        }), RedEventComp) : RedEventComp]
      }), ccclass(_class = (_class2 = class RedComp extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "redNode", _descriptor, this);

          _initializerDefineProperty(this, "posOffset", _descriptor2, this);

          _initializerDefineProperty(this, "types", _descriptor3, this);
        }

        onLoad() {
          this.addRed();
        }

        onDestroy() {
          this.removeRed();
        }

        removeRed() {
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).remove(this.node);
        }

        addRed() {
          this.removeRed();

          for (let index = 0; index < this.types.length; index++) {
            const element = this.types[index];

            if (this.redNode) {
              (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
                error: Error()
              }), RedMgr) : RedMgr).add({
                node: this.node,
                event: element.event,
                child: element.child,
                child1: element.child1,
                transform: {
                  redNode: this.redNode,
                  offset: this.posOffset
                }
              });
            } else {
              console.error("红点注册节点为空", element.event, this.node);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "redNode", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "posOffset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "types", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=50574e5f12b1dfa4c9a899ecbe9d3e18af2be148.js.map
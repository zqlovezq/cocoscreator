System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Animation, createAnimation, ComponentBase, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, HeroStar;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcreateAnimation(extras) {
    _reporterNs.report("createAnimation", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/base/ComponentBase", _context.meta, extras);
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
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      createAnimation = _unresolved_2.createAnimation;
    }, function (_unresolved_3) {
      ComponentBase = _unresolved_3.ComponentBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a455bLbXoJDrbGVe94vGKrk", "HeroStar", undefined);

      __checkObsolete__(['_decorator', 'Component', 'isValid', 'Node', 'sp', 'SpriteFrame', 'Animation', 'Sprite', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroStar", HeroStar = (_dec = ccclass('HeroStar'), _dec2 = property([Node]), _dec(_class = (_class2 = class HeroStar extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor() {
          super(...arguments);

          // @property(Node)
          // node_star: Node = null;
          _initializerDefineProperty(this, "node_stars", _descriptor, this);

          /* 显示当前英雄的星级 */
          this.star = 0;
        }

        onLoad() {}

        showStar(star) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.isValid) {
              return;
            }

            if (_this.enabled) {
              _this.onDisable();
            }

            for (var i = 0; i < _this.node_stars.length; i++) {
              var node = _this.node_stars[i];
              var name = node.parent.name;
              var index = Number(name.charAt(name.length - 1));
              node.parent.active = index > 5 - (star % 5 === 0 ? 5 : star % 5);
              var level = Math.ceil(star / 5);
              var animId = 1000 + level;

              if (node.parent.active) {
                yield (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
                  error: Error()
                }), createAnimation) : createAnimation)(node, animId);
              }
            }
          })();
        }

        onDisable() {
          for (var i = 0; i < this.node_stars.length; i++) {
            var node = this.node_stars[i];

            if (node.getComponent(Animation)) {
              var anim = node.getComponent(Animation);

              if (anim.defaultClip) {
                var animName = anim.defaultClip.name;
                var animState = anim.getState(animName);
                animState.stop();
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_stars", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6cf699c0c1f9936288b1939d87aa3a5d308cce2f.js.map
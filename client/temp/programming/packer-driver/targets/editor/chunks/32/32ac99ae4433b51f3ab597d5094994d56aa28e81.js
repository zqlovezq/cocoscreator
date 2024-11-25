System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Camera, Component, director, instantiate, Prefab, sys, GuideController, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, LoadGuide;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "./GuideController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      director = _cc.director;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      GuideController = _unresolved_2.GuideController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5ebb5j7DEVN+ojbIooIrfZ8", "LoadGuide", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Component', 'director', 'game', 'instantiate', 'Node', 'Prefab', 'sys', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadGuide", LoadGuide = (_dec = ccclass('LoadGuide'), _dec2 = property(Prefab), _dec3 = property(Camera), _dec(_class = (_class2 = class LoadGuide extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "GuidePrefab", _descriptor, this);

          _initializerDefineProperty(this, "camera2d", _descriptor2, this);
        }

        onLoad() {
          if (!(_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins) {
            const node = instantiate(this.GuidePrefab);
            const comp = node.getComponent(_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
              error: Error()
            }), GuideController) : GuideController);

            if (!comp) {
              if (!sys.isNative) {
                throw 'cannot create GuideController from prefab';
              }
            }

            director.addPersistRootNode(node);
            (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
              error: Error()
            }), GuideController) : GuideController).ins = comp;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GuidePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "camera2d", [_dec3], {
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
//# sourceMappingURL=32ac99ae4433b51f3ab597d5094994d56aa28e81.js.map
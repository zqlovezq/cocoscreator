System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, DynamicAtlasManager, Layers, Node, ScrollView, Sprite, SpriteFrame, UITransform, v3, ViewPop, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, DynamicAtlas;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../framework/base/ViewPop", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      DynamicAtlasManager = _cc.DynamicAtlasManager;
      Layers = _cc.Layers;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46c7a7/yldI56aCW0S+S3Eh", "DynamicAtlas", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'director', 'DynamicAtlasManager', 'instantiate', 'Layers', 'Node', 'Prefab', 'ResolutionPolicy', 'ScrollView', 'Sorting', 'Sprite', 'SpriteFrame', 'UITransform', 'v3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DynamicAtlas", DynamicAtlas = (_dec = ccclass('DynamicAtlas'), _dec2 = property(ScrollView), _dec(_class = (_class2 = class DynamicAtlas extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scrollview", _descriptor, this);
        }

        register() {}

        onEnable() {
          this.scrollview.content.destroyAllChildren();
          this.showDebug(true);
        }

        showDebug(isshow) {
          //@ts-ignore
          var _atlases = DynamicAtlasManager.instance._atlases;
          var length = _atlases.length;

          for (var index = 0; index < length; index++) {
            var touchNode = new Node();
            touchNode.addComponent(UITransform).anchorY = 1;
            touchNode.layer = Layers.Enum.UI_2D;
            var spr = touchNode.addComponent(Sprite);
            spr.sizeMode = Sprite.SizeMode.TRIMMED;
            this.scrollview.content.addChild(touchNode);
            var sprFra = new SpriteFrame();
            sprFra.texture = _atlases[index]._texture;
            spr.spriteFrame = sprFra;
            touchNode.scale = v3(0.5, 0.5, 0.5);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollview", [_dec2], {
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
//# sourceMappingURL=ee7fb067888c290daf95815d043c581efd437a0b.js.map
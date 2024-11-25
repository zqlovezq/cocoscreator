System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BlockInputEvents, Color, Layers, Node, Sprite, tween, UITransform, Vec3, view, UIMgr, Func, ComponentBase, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, ViewBase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../logic/mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "./IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../logic/utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "./ComponentBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      BlockInputEvents = _cc.BlockInputEvents;
      Color = _cc.Color;
      Layers = _cc.Layers;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      UIMgr = _unresolved_2.UIMgr;
    }, function (_unresolved_3) {
      Func = _unresolved_3.Func;
    }, function (_unresolved_4) {
      ComponentBase = _unresolved_4.ComponentBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "285fed4UDZN3opVrgbHmVMr", "ViewBase", undefined);

      __checkObsolete__(['_decorator', 'BlockInputEvents', 'Button', 'Color', 'Component', 'director', 'instantiate', 'Layers', 'Node', 'Prefab', 'ResolutionPolicy', 'Sprite', 'tween', 'UITransform', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ViewBase", ViewBase = (_dec = ccclass('ViewBase'), _dec2 = property({
        displayName: '防止输入穿透到下层节点'
      }), _dec3 = property({
        displayName: '是否点击空白处关闭'
      }), _dec4 = property({
        displayName: '是否播放弹出动画'
      }), _dec5 = property({
        type: 0,
        displayName: '是否有黑背景'
      }), _dec(_class = (_class2 = class ViewBase extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "isBlockInput", _descriptor, this);

          _initializerDefineProperty(this, "closeWhenClickEmpty", _descriptor2, this);

          _initializerDefineProperty(this, "showAction", _descriptor3, this);

          _initializerDefineProperty(this, "showGray", _descriptor4, this);

          this.grayNode = void 0;
          this.openData = void 0;
        }

        onLoad() {
          super.onLoad();

          if (this.isBlockInput) {
            this.registerBlockInput();
          }
        }

        onDestroy() {
          super.onDestroy();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.releaseView(this.node.name);
        }
        /**
         * 初始方法
         * @param obj 
         */


        onShow() {}

        close() {
          var nodeName = this.node.name;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView(nodeName);
        }
        /**
         * 设置界面打开数据
         * @param obj 
         */


        setOpenData(obj) {
          this.openData = obj;

          if (obj) {
            this.rewriteData();
          }
        }

        rewriteData() {// throw new Error("Method not implemented.");
        }

        registerBlockInput() {
          var blockInputNode = new Node("BlockInputNode");
          blockInputNode.layer = Layers.Enum.UI_2D;
          var uitrans = blockInputNode.addComponent(UITransform);
          blockInputNode.addComponent(BlockInputEvents);
          uitrans.setContentSize(view.getDesignResolutionSize());
          this.node.addChild(blockInputNode);
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).cocosNodeZIndex(blockInputNode, -3);
        }

        loadShow() {
          this.loadAction(() => {
            this.loadGrayMask();
          });
        }

        loadAction(call) {
          if (this.showAction) {
            tween(this.node).to(0.12, {
              scale: new Vec3(1.1, 1.1, 1.1)
            }).to(0.06, {
              scale: new Vec3(1, 1, 1)
            }).call(() => {
              call();
            }).start();
          } else {
            call();
          }
        }

        loadGrayMask() {
          this.grayNode = new Node("GrayNode");
          this.grayNode.layer = Layers.Enum.UI_2D;
          var uitrans = this.grayNode.addComponent(UITransform);
          uitrans.setContentSize(view.getVisibleSize());
          this.node.addChild(this.grayNode);
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).cocosNodeZIndex(this.grayNode, -2);

          if (this.showGray) {
            var spr = this.grayNode.addComponent(Sprite);
            spr.sizeMode = Sprite.SizeMode.CUSTOM;
            spr.setTexture("textrue/bg_1");
            spr.color = new Color(0, 0, 0, 150);
          }

          if (this.closeWhenClickEmpty) {
            this.scheduleOnce(() => {
              this.grayNode.once(Node.EventType.TOUCH_END, () => {
                this.onClose();
              }, this);
            }, 0.05);
          }
        }

        onClose() {
          if (this.showAction) {
            this.grayNode ? this.grayNode.active = false : false;
            tween(this.node).to(0.06, {
              scale: new Vec3(1.1, 1.1, 1.1)
            }).to(0.03, {
              scale: new Vec3(0.5, 0.5, 0.5)
            }).call(() => {
              this.close();
            }).start();
          } else {
            this.close();
          } // this.close()

        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isBlockInput", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "closeWhenClickEmpty", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "showAction", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "showGray", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7bb669a710251648ac3df6c833cac79aad20fca2.js.map
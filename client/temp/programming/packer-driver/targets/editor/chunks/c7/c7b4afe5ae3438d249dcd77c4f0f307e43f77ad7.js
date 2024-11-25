System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Camera, Component, find, instantiate, Node, Prefab, ResolutionPolicy, UITransformComponent, view, UIMgr, ViewSize, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, SceneBase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../logic/mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewSize(extras) {
    _reporterNs.report("ViewSize", "../logic/define/ViewDefine", _context.meta, extras);
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
      find = _cc.find;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ResolutionPolicy = _cc.ResolutionPolicy;
      UITransformComponent = _cc.UITransformComponent;
      view = _cc.view;
    }, function (_unresolved_2) {
      UIMgr = _unresolved_2.UIMgr;
    }, function (_unresolved_3) {
      ViewSize = _unresolved_3.ViewSize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e91740pszdFo6j2WfRpP9/6", "SceneBase", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Component', 'director', 'find', 'instantiate', 'Node', 'Prefab', 'ResolutionPolicy', 'UITransform', 'UITransformComponent', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SceneBase", SceneBase = (_dec = ccclass('SceneBase'), _dec2 = property(Camera), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = (_class2 = class SceneBase extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "camera2d", _descriptor, this);

          _initializerDefineProperty(this, "rootNode", _descriptor2, this);

          _initializerDefineProperty(this, "defaultPfb", _descriptor3, this);

          this.defaultView = void 0;
        }

        onLoad() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.setCamera(this.camera2d);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.setRootNode(this.rootNode);
          this.register();
          this.resize(["Canvas"]);
        }

        showDefaultPfb() {
          if (this.defaultPfb) {
            this.defaultView = instantiate(this.defaultPfb);
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.uiNode.addChild(this.defaultView);
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.addView(this.defaultView.name, this.defaultView);
          }
        }

        register() {} // protected update(dt: number): void {
        //     console.log("帧率",dt)
        // }


        resize(canvasNames) {
          //根据屏幕大小决定适配策略
          //想明白原理，请阅读本文 https://blog.csdn.net/qq_36720848/article/details/89742451
          console.log(view);
          let dr = view.getDesignResolutionSize();
          var s = view.getFrameSize();
          var rw = s.width;
          var rh = s.height;
          var finalW = rw;
          var finalH = rh;

          if (rw / rh > dr.width / dr.height) {
            //!#zh: 是否优先将设计分辨率高度撑满视图高度。 */
            //cvs.fitHeight = true;
            //如果更长，则用定高
            finalH = dr.height;
            finalW = finalH * rw / rh;
          } else {
            /*!#zh: 是否优先将设计分辨率宽度撑满视图宽度。 */
            //cvs.fitWidth = true;
            //如果更短，则用定宽
            finalW = dr.width;
            finalH = rh / rw * finalW;
          }

          view.setDesignResolutionSize(finalW, finalH, ResolutionPolicy.UNKNOWN);
          (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).init();

          for (let index = 0; index < canvasNames.length; index++) {
            const canvasName = canvasNames[index];
            let cancas = find(canvasName);

            if (cancas) {
              let cvs = cancas.getComponent(UITransformComponent);

              if (cvs) {
                cvs.width = finalW;
                cvs.height = finalH;
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera2d", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rootNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "defaultPfb", [_dec4], {
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
//# sourceMappingURL=c7b4afe5ae3438d249dcd77c4f0f307e43f77ad7.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Input, Node, UITransform, Vec3, _decorator, input, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, Joystick;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Input = _cc.Input;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      input = _cc.input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "69083fUaChAwY0BY0dL7eJL", "Joystick", undefined);

      __checkObsolete__(['Component', 'EventTouch', 'Input', 'Node', 'UITransform', 'Vec2', 'Vec3', '_decorator', 'input']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Joystick", Joystick = (_dec = ccclass('Joystick'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class Joystick extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "round", _descriptor, this);

          //摇杆背景
          _initializerDefineProperty(this, "inner", _descriptor2, this);

          //摇杆 也就是中心点
          _initializerDefineProperty(this, "isStatic", _descriptor3, this);

          //固定罗盘不隐藏
          _initializerDefineProperty(this, "isDiretion", _descriptor4, this);

          //是否为方向模式(中心指示点拉尽)
          _initializerDefineProperty(this, "maxRadius", _descriptor5, this);

          _initializerDefineProperty(this, "activeRange", _descriptor6, this);

          //摇杆触发范围比例（0-1）
          this.joystickCB = null;
          this.touchID = -1;
        }

        onLoad() {
          this.show(this.isStatic);

          if (this.isStatic) {
            this.round.on(Node.EventType.TOUCH_START, this.touchStart, this);
            this.round.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
            this.round.on(Node.EventType.TOUCH_END, this.touchEnd, this);
            this.round.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
          } else {
            input.on(Input.EventType.TOUCH_START, this.touchStart, this);
            input.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
            input.on(Input.EventType.TOUCH_END, this.touchEnd, this);
            input.on(Input.EventType.TOUCH_CANCEL, this.touchEnd, this);
          }
        }

        init(cb) {
          this.joystickCB = cb;
        }

        show(flag) {
          this.round.active = flag;
        }

        innerPosition(pos) {
          let data = {
            type: null,
            active: true,
            angle: 0,
            ratio: 0
          };
          let ui = this.round.getComponent(UITransform);
          let s = ui.convertToNodeSpaceAR(new Vec3(pos.x, pos.y));
          s.z = 0; //触发范围

          if (s.length() <= this.maxRadius * this.activeRange) {
            this.inner.position = new Vec3();
            data.active = false;
            return data;
          } //限制范围


          if (s.length() > this.maxRadius || this.isDiretion) {
            s = s.normalize();
            s = s.multiplyScalar(this.maxRadius);
          }

          this.inner.position = new Vec3(s); //修正位置
          //实际数据

          data.active = true;
          data.angle = Math.atan2(s.y, s.x);
          data.ratio = s.length() / this.maxRadius; // (s.length()-this.maxRadius*this.activeRange)/(this.maxRadius*(1.0 - this.activeRange)); //

          return data;
        }

        touchStart(event) {
          if (this.touchID == -1) {
            this.touchID = event.getID();

            if (!this.isStatic) {
              this.show(true);
              let pos = event.getUILocation();
              this.node.setWorldPosition(new Vec3(pos.x, pos.y, 0));
            }
          }

          if (this.touchID != event.getID()) return false;
          let data = this.innerPosition(event.getUILocation());
          data.type = Input.EventType.TOUCH_START;
          this.joystickCB && this.joystickCB(data);
          return true;
        }

        touchMove(event) {
          if (this.touchID != event.getID()) return false;
          let data = this.innerPosition(event.getUILocation());
          data.type = Input.EventType.TOUCH_MOVE;
          this.joystickCB && this.joystickCB(data);
          return true;
        }

        touchEnd(event) {
          //摇杆弹回原位置
          if (this.touchID != event.getID()) return false;
          this.touchID = -1;
          this.show(this.isStatic);
          this.inner.position = new Vec3();
          let data = {
            type: Input.EventType.TOUCH_END,
            active: false,
            angle: 0,
            ratio: 0
          };
          this.joystickCB && this.joystickCB(data);
          return true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "round", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "inner", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isStatic", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isDiretion", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "maxRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 128;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "activeRange", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f4c5f78898accd539f721b1fd2326aab09e886eb.js.map
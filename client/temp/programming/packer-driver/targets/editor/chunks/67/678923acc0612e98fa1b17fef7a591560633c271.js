System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, CCFloat, CCInteger, Component, EventHandler, instantiate, Node, Prefab, UITransform, v3, BattleMainItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3, _crd, ccclass, property, EventType, UIScrollSelect;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBattleMainItem(extras) {
    _reporterNs.report("BattleMainItem", "./BattleMainItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      CCFloat = _cc.CCFloat;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      EventHandler = _cc.EventHandler;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      BattleMainItem = _unresolved_2.BattleMainItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8a0cCRXjRHBpxs1UFdgDJD", "UIScrollSelect", undefined);
      /**
       * Created by jsroads on 2021/8/30.5:46 下午
       * Note:
       */


      __checkObsolete__(['_decorator', 'Button', 'CCFloat', 'CCInteger', 'Component', 'EventHandler', 'EventTouch', 'instantiate', 'Node', 'Prefab', 'UITransform', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EventType", EventType = /*#__PURE__*/function (EventType) {
        EventType[EventType["SCROLL_START"] = 0] = "SCROLL_START";
        EventType[EventType["SCROLL_ING"] = 1] = "SCROLL_ING";
        EventType[EventType["SCROLL_END"] = 2] = "SCROLL_END";
        return EventType;
      }({}));

      _export("UIScrollSelect", UIScrollSelect = (_dec = ccclass('UIScrollSelect'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property({
        tooltip: "是否无限翻页"
      }), _dec5 = property({
        type: Button,
        tooltip: '左边按钮',

        visible() {
          return !this.circlePage;
        }

      }), _dec6 = property({
        type: Button,
        tooltip: '右边按钮',

        visible() {
          return !this.circlePage;
        }

      }), _dec7 = property({
        type: CCInteger,
        tooltip: '单个控件之间的距离'
      }), _dec8 = property({
        type: CCFloat,
        tooltip: '中心点的缩放比例'
      }), _dec9 = property({
        type: CCFloat,
        tooltip: '边缘点的缩放比例'
      }), _dec10 = property({
        type: CCFloat,
        tooltip: '滚动时的速度'
      }), _dec11 = property({
        type: EventHandler,
        tooltip: "选择后的回调"
      }), _dec(_class = (_class2 = (_class3 = class UIScrollSelect extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pfb_level_item", _descriptor, this);

          _initializerDefineProperty(this, "content", _descriptor2, this);

          _initializerDefineProperty(this, "circlePage", _descriptor3, this);

          _initializerDefineProperty(this, "leftBtn", _descriptor4, this);

          _initializerDefineProperty(this, "rightBtn", _descriptor5, this);

          _initializerDefineProperty(this, "deltaX", _descriptor6, this);

          //x间隔距离
          _initializerDefineProperty(this, "centerScale", _descriptor7, this);

          _initializerDefineProperty(this, "minScale", _descriptor8, this);

          _initializerDefineProperty(this, "scrollSpeed", _descriptor9, this);

          _initializerDefineProperty(this, "selectEvents", _descriptor10, this);

          this.childs = [];
          this.isTouching = false;
          this.hasTouchMove = false;
          this.isTestX = false;
          this._touchId = null;
          this.currentIndex = 0;
          this._toMoveX = 1;
          //移动方向
          this.dx = 0;
          this.moveAim = 0;
        }

        onLoad() {
          for (let i = 0; i < 10; i++) {
            let item = instantiate(this.pfb_level_item);
            this.content.addChild(item);
            item.getComponent(_crd && BattleMainItem === void 0 ? (_reportPossibleCrUseOfBattleMainItem({
              error: Error()
            }), BattleMainItem) : BattleMainItem).UpdateContent(i);
          }

          this.childs = [];

          for (let i = 0; i < this.content.children.length; i++) {
            this.childs[i] = this.content.children[i];
            this.childs[i].position = v3(this.deltaX * (i - 1), this.childs[i].position.y, 0);
          }

          this.isTouching = false;
          this.hasTouchMove = false;
          this.isTestX = false;
          this._touchId = null; // this.currentIndex = 0;

          this.scrollTo(0, false);
        }
        /** 滚动到指定节点
         * @param idx
         * @param anim 是否带移动动画
         */


        scrollTo(idx, anim = true) {
          if (idx < 0 && idx >= this.childs.length) {
            return console.error(this.node.name + '->移动超出边界面');
          }

          this.currentIndex = idx;
          console.log("cocos---3this.moveAim", idx);
          this.moveAim = idx;

          if (!anim) {
            for (let i = 0; i < this.childs.length; i++) {
              this._checkChildX(this.childs[i], (i - idx) * this.deltaX);
            }
          } else {
            this.isTestX = true;
            EventHandler.emitEvents(this.selectEvents, {
              target: this,
              type: EventType.SCROLL_START,
              index: this.currentIndex
            });
          }
        }
        /** 向左滚一个点 */


        scrollToLeft() {
          this._toMoveX = 1;
          this.scrollTo((this.currentIndex - 1 + this.childs.length) % this.childs.length);

          this._setPageBtnsStatus();
        }
        /** 向左滚一个点 */


        scrollToRight() {
          this._toMoveX = -1;
          this.scrollTo((this.currentIndex + 1 + this.childs.length) % this.childs.length);

          this._setPageBtnsStatus();
        }
        /**
         * 更新按钮状态
         */


        _setPageBtnsStatus() {
          const isRightEdge = this.currentIndex >= this.childs.length - 1;

          if (!this.circlePage && isRightEdge) {
            console.log("已经到了最右边", this.currentIndex);
            if (this.rightBtn) this.rightBtn.interactable = false;
          } else {
            if (this.rightBtn) this.rightBtn.interactable = true;
          }

          const isLeftEdge = this.currentIndex <= 0;

          if (!this.circlePage && isLeftEdge) {
            console.log("已经到了最左边", this.currentIndex);
            if (this.leftBtn) this.leftBtn.interactable = false;
          } else {
            if (this.leftBtn) this.leftBtn.interactable = true;
          }
        }

        _checkChildX(child, x) {
          if (this.circlePage) {
            if (x > this.childs.length / 2 * this.deltaX) {
              x -= this.childs.length * this.deltaX;
            } else if (x < -this.childs.length / 2 * this.deltaX) {
              x += this.childs.length * this.deltaX;
            }
          }

          child.position = v3(x, child.position.y, child.position.z);
          let dx = Math.min(Math.abs(x), this.deltaX);
          let scale = (1 - dx / this.deltaX) * (this.centerScale - this.minScale) + this.minScale;
          child.scale = v3(scale, scale, 1);
        }

        start() {
          this.content.on(Node.EventType.TOUCH_START, this._onTouch, this);
          this.content.on(Node.EventType.TOUCH_MOVE, this._onTouch, this);
          this.content.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
          this.content.on(Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
        }

        _onTouch(event) {
          if (this._touchId != null && event.touch != this._touchId) {
            return;
          }

          if (event.type == Node.EventType.TOUCH_START) {
            this.isTouching = true;
            this.hasTouchMove = false;
            this.isTestX = false;
            this._touchId = event.touch;
            this.dx = event.getUIStartLocation().x;
            let evt = {
              target: this,
              type: EventType.SCROLL_START,
              index: this.currentIndex
            };
            EventHandler.emitEvents(this.selectEvents, evt);
            return;
          }

          this.hasTouchMove = true;
          let dx = event.getUILocation().x - this.dx;

          this._move(dx);

          this.dx = event.getUILocation().x;
          let evt = {
            target: this,
            type: EventType.SCROLL_ING,
            dx: this.dx
          };
          EventHandler.emitEvents(this.selectEvents, evt);
        }
        /**
         * 是否到达左右边缘
         * @returns {{left: boolean, right: boolean}}
         */


        _isMoveEdge() {
          const leftEdge = this.childs[0].position.x >= 0;
          const rightEdge = this.childs[this.childs.length - 1].position.x <= 0;
          return {
            left: leftEdge,
            right: rightEdge
          };
        }

        _onTouchEnd(event) {
          if (this._touchId != null && event.touch != this._touchId) {
            return;
          }

          this.isTouching = false;

          if (event.type == Node.EventType.TOUCH_END || event.type == Node.EventType.TOUCH_CANCEL) {
            this._touchId = null;
          }

          if (!this.circlePage) {
            let edge = this._isMoveEdge();

            if (edge.right) {
              console.log("最右边 无法动");
              return;
            }

            if (edge.left) {
              console.log("最左边 无法动");
              return;
            }
          }

          let tf = this.node.getComponent(UITransform);
          let lo = tf.convertToNodeSpaceAR(event.getUILocation());

          if (!this.hasTouchMove) {
            let mx = Math.ceil((lo.x - this.deltaX / 2) / this.deltaX);

            if (mx === 0) {
              let event1 = {
                target: this,
                type: EventType.SCROLL_END,
                index: this.currentIndex
              };
              EventHandler.emitEvents(this.selectEvents, event1);
            } else {
              this.moveAim = (this.currentIndex + mx + this.childs.length) % this.childs.length;
              console.log("cocos---1this.moveAim", this.moveAim);
              this._toMoveX = mx > 0 ? -1 : 1;
              this.isTestX = true;
            }

            return;
          }

          let max = this.deltaX;
          let minidx = 0;

          for (let i = 0; i < this.childs.length; i++) {
            if (Math.abs(this.childs[i].position.x) <= max) {
              max = Math.abs(this.childs[i].position.x);
              minidx = i;
            }
          }

          this.moveAim = minidx;
          console.log("cocos---2this.moveAim", this.moveAim);
          this._toMoveX = this.childs[minidx].position.x >= 0 ? -1 : 1;
          this.isTestX = true;
        }

        _move(dt) {
          if (dt === 0) return;

          if (!this.circlePage) {
            let edge = this._isMoveEdge();

            if (dt < 0 && edge.right) {
              console.log("最右边 无法动");
              return;
            }

            if (dt > 0 && edge.left) {
              console.log("最左边 无法动");
              return;
            }
          }

          for (let i = 0; i < this.childs.length; i++) {
            this._checkChildX(this.childs[i], this.childs[i].position.x + dt);
          }
        }

        update(dt) {
          if (this.isTouching || !this.isTestX) {
            return;
          }

          let stepx = this._toMoveX * dt * this.scrollSpeed;
          let lx = this.childs[this.moveAim].position.x;

          for (let i = 0; i < this.childs.length; i++) {
            this._checkChildX(this.childs[i], this.childs[i].position.x + stepx);
          }

          let x = this.childs[0].position.x;
          let idx = Math.round(x / this.deltaX);
          let tox = this.deltaX * idx;
          let cx = this.childs[this.moveAim].position.x;

          if (lx * cx < 0 && Math.abs(cx) < this.deltaX) {
            this.isTestX = false;

            for (let i = 0; i < this.childs.length; i++) {
              if (Math.abs(this.childs[i].position.x) <= Math.abs(stepx)) {
                this.currentIndex = i;
                break;
              }
            }

            for (let i = 0; i < this.childs.length; i++) {
              this._checkChildX(this.childs[i], this.childs[i].position.x + tox - x);
            }

            let event = {
              target: this,
              type: EventType.SCROLL_END,
              index: this.currentIndex
            };
            EventHandler.emitEvents(this.selectEvents, event);
          }
        }

      }, _class3.EventType = EventType, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_level_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "circlePage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "leftBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rightBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "deltaX", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "centerScale", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "minScale", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "scrollSpeed", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 300;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "selectEvents", [_dec11], {
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
//# sourceMappingURL=678923acc0612e98fa1b17fef7a591560633c271.js.map
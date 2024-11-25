System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, ButtonClickHandler;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15d13iBltFGabTU0oL0Ea1Q", "ButtonClickHandler", undefined); // ButtonClickHandler.ts


      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventTouch', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ButtonClickHandler", ButtonClickHandler = (_dec = ccclass('ButtonClickHandler'), _dec(_class = class ButtonClickHandler extends Component {
        onLoad() {
          this.node.on(Node.EventType.TOUCH_START, this.onButtonTouchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.onButtonTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onButtonTouchCancel, this);
        }

        onButtonTouchStart(event) {
          // 阻止 ScrollView 的触摸事件
          event.propagationStopped = true;
        }

        onButtonTouchEnd(event) {
          // 阻止 ScrollView 的触摸事件
          event.propagationStopped = true; // 处理按钮点击逻辑

          console.log('Button clicked');
        }

        onButtonTouchCancel(event) {
          // 阻止 ScrollView 的触摸事件
          event.propagationStopped = true;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b9daad82fed3d281c61b81052574725ddae0887b.js.map
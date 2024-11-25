System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventMgr, _dec, _class, _crd, ccclass, property, ComponentBase;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../logic/mgr/EventMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cc123236W1HsqRbDv1M8pvB", "ComponentBase", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'director', 'instantiate', 'Layers', 'Node', 'Prefab', 'ResolutionPolicy', 'Sprite', 'tween', 'UITransform', 'v3', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 组件基础
       * 目前只做了事件管理
       */

      _export("ComponentBase", ComponentBase = (_dec = ccclass('ComponentBase'), _dec(_class = class ComponentBase extends Component {
        onLoad() {
          this.register();
        }

        register() {
          throw new Error("Method not implemented.");
        }

        unRegister() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);
        }

        onDestroy() {
          this.unRegister();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=377d7f3c2d549c26ea629f26cdac50b1114f6475.js.map
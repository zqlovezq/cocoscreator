System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, AnimationClip, log, ViewPop, tab, EventMgr, LocalEvent, _dec, _class, _crd, ccclass, property, FunctionUnlockPop;

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      log = _cc.log;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      LocalEvent = _unresolved_5.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "93fe0v0NN5Owb6+OqqIDamW", "FunctionUnlockPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'UI', 'AnimationClip', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * FunctionUnlockPop
       * zhudingchao
       * Tue Jul 23 2024 13:58:19 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/home/FunctionUnlockPop.ts
       *
       */

      _export("FunctionUnlockPop", FunctionUnlockPop = (_dec = ccclass('FunctionUnlockPop'), _dec(_class = class FunctionUnlockPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);
          this.functionName = void 0;
        }

        register() {}

        onShow() {
          if (this.openData && this.openData["functionName"]) {
            this.functionName = this.openData["functionName"];
            this.initView();
          }
        }

        initView() {
          let opTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().OpenFunctionTableByName.getValue(this.functionName);

          if (opTab) {
            if (opTab.FunctionUnlockAnimation) {
              let node = this.node.getChildByName(opTab.FunctionUnlockAnimation);

              if (node) {
                node.active = true;
                let anim = node.getComponent(Animation);
                anim.clips[0].wrapMode = AnimationClip.WrapMode.Normal;
                anim.play();
                anim.on(Animation.EventType.FINISHED, e => {
                  log("动画播放完成");
                  this.onClose();
                });
              }
            }
          }
        }

        onDestroy() {
          super.onDestroy();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).checkOpenFuncPop);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=617b34ce3e0282ef8154a1ee5bceb49155110527.js.map
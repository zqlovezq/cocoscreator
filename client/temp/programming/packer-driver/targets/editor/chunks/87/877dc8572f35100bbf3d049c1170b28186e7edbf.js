System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ViewPop, ChannelMgr, Func, EventMgr, LocalEvent, RoleData, _dec, _class, _crd, ccclass, property, InspirePop;

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ChannelMgr = _unresolved_3.ChannelMgr;
    }, function (_unresolved_4) {
      Func = _unresolved_4.Func;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      LocalEvent = _unresolved_6.LocalEvent;
    }, function (_unresolved_7) {
      RoleData = _unresolved_7.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b438ciXgklI+ogG2scqX9Qv", "InspirePop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * InspirePop
       * zhudingchao
       * Thu Aug 15 2024 10:37:36 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/home/InspirePop.ts
       *
       */

      _export("InspirePop", InspirePop = (_dec = ccclass('InspirePop'), _dec(_class = class InspirePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        register() {}

        onShow() {}

        onClickJudgment() {
          console.log("js调用商店评分");
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).comment("{}", retData => {
            // console.log("##################### comment ret" + JSON.stringify(retData));
            console.log("商店评分============" + retData);

            if (retData.code == 0) {
              (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).setItem("isComment_" + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.id, 1);
              this.onClose();
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).updateInspireBtn); // MeControl.getInstance().setClintData(TypeClientData.REPUTATION, 1);
              // SceneViewReputation.getInstance().hideScene();
              // console.log("商店评分============回调")
            }
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=877dc8572f35100bbf3d049c1170b28186e7edbf.js.map
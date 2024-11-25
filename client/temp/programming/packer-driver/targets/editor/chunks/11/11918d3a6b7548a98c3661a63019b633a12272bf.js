System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, ViewPop, Http, LoginData, Func, RedMgr, RedDotType, RoleControl, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, RoleInfoNoticePop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttp(extras) {
    _reporterNs.report("Http", "../../../net/Http", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginData(extras) {
    _reporterNs.report("LoginData", "../../login/LoginData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleControl(extras) {
    _reporterNs.report("RoleControl", "../RoleControl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      Http = _unresolved_3.default;
    }, function (_unresolved_4) {
      LoginData = _unresolved_4.LoginData;
    }, function (_unresolved_5) {
      Func = _unresolved_5.Func;
    }, function (_unresolved_6) {
      RedMgr = _unresolved_6.RedMgr;
    }, function (_unresolved_7) {
      RedDotType = _unresolved_7.RedDotType;
    }, function (_unresolved_8) {
      RoleControl = _unresolved_8.RoleControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a6c2iKWN5ITaOGeJ3WNfDB", "RoleInfoNoticePop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RoleInfoNoticePop
       * zhudingchao
       * Tue Aug 20 2024 14:11:24 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/role/roleInfo/RoleInfoNoticePop.ts
       *
       */

      _export("RoleInfoNoticePop", RoleInfoNoticePop = (_dec = ccclass('RoleInfoNoticePop'), _dec2 = property(Label), _dec(_class = (_class2 = class RoleInfoNoticePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "wordLab", _descriptor, this);
        }

        register() {}

        onShow() {
          let addr = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.loginServerTab.NoticeAddr;
          (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
            error: Error()
          }), Http) : Http).request({
            host: addr,
            method: "GET",
            reqParam: "",
            cb: responseJson => {
              // console.log(responseJson)
              if (responseJson && responseJson.length > 0) {
                let notices = responseJson;
                notices.sort((a, b) => {
                  return b.created_at - a.created_at;
                });
                let newNotice = notices[0];
                this.initView(newNotice); // if (responseJson.ret == 0 && responseJson.data) {
                //     console.log("公告 ",responseJson.data)
                // }
              }
            }
          });
        }

        initView(notice) {
          this.wordLab.string = notice.content;
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).setItem("notice_created_at", notice.created_at);
          (_crd && RoleControl === void 0 ? (_reportPossibleCrUseOfRoleControl({
            error: Error()
          }), RoleControl) : RoleControl).ins.noticeRed = false;
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).notice);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "wordLab", [_dec2], {
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
//# sourceMappingURL=11918d3a6b7548a98c3661a63019b633a12272bf.js.map
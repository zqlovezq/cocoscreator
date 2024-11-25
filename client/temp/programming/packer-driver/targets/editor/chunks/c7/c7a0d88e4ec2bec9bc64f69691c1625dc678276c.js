System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "client_protocol", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EditBox, ViewPop, ShowTips, UIMgr, EventMgr, proto, ViewName, RoleControl, LangMgr, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, RoleInfoRedemptionCodePop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleControl(extras) {
    _reporterNs.report("RoleControl", "../RoleControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ShowTips = _unresolved_3.ShowTips;
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_5) {
      ViewName = _unresolved_5.ViewName;
    }, function (_unresolved_6) {
      RoleControl = _unresolved_6.RoleControl;
    }, function (_unresolved_7) {
      LangMgr = _unresolved_7.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6619f8fh8RA6qS7Rtre4I6+", "RoleInfoRedemptionCodePop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RoleInfoRedemptionCodePop
       * zhudingchao
       * Thu Jun 20 2024 11:35:00 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/role/roleInfo/RoleInfoRedemptionCodePop.ts
       *
       */

      _export("RoleInfoRedemptionCodePop", RoleInfoRedemptionCodePop = (_dec = ccclass('RoleInfoRedemptionCodePop'), _dec2 = property(EditBox), _dec(_class = (_class2 = class RoleInfoRedemptionCodePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "editBox", _descriptor, this);
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UseRedeemCodeRsp, this.on_s2c_UseRedeemCodeRsp, this);
        }

        onShow() {}

        onClickConfirm() {
          if (this.editBox.string == "") {
            //ShowTips("请输入兑换码")
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_redemptioncode_1"));
            return;
          }

          (_crd && RoleControl === void 0 ? (_reportPossibleCrUseOfRoleControl({
            error: Error()
          }), RoleControl) : RoleControl).ins.requestUseRedeemCode(this.editBox.string);
        } // 使用兑换码返回


        on_s2c_UseRedeemCodeRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            });
            this.onClose();
          } else {}
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "editBox", [_dec2], {
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
//# sourceMappingURL=c7a0d88e4ec2bec9bc64f69691c1625dc678276c.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, proto, Net, EventMgr, MailData, RedMgr, RedDotType, _dec, _class, _class2, _crd, ccclass, property, MailControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailData(extras) {
    _reporterNs.report("MailData", "./MailData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
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
      AbsControl = _unresolved_2.AbsControl;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      Net = _unresolved_3.Net;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      MailData = _unresolved_5.MailData;
    }, function (_unresolved_6) {
      RedMgr = _unresolved_6.RedMgr;
    }, function (_unresolved_7) {
      RedDotType = _unresolved_7.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "895da9x8R9DL7LY6XUxxMrO", "MailControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MailControl", MailControl = (_dec = ccclass('MaillControl'), _dec(_class = (_class2 = class MailControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new MailControl();
          }

          return this._instance;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetMailsRsp, this.on_s2c_GetMailsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveMailsRewardRsp, this.on_s2c_ReceiveMailsRewardRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DeleteMailsRsp, this.on_s2c_DeleteMailsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.NewMailsPush, this.on_s2c_NewMailsPushp, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Mail, this.on_getRedPoint, this);
        }

        requestGetMails() {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetMailsReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetMailsReq, msg);
        }

        requestReceiveMailsReward(mailIds) {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ReceiveMailsRewardReq();
          msg.ids = mailIds;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveMailsRewardReq, msg);
        }

        requestDeleteMails(mailIds) {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_DeleteMailsReq();
          msg.ids = mailIds;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DeleteMailsReq, msg);
        }
        /**
        * 请求邮件
        * @param msg 
        */


        on_s2c_GetMailsRsp(msg) {
          (_crd && MailData === void 0 ? (_reportPossibleCrUseOfMailData({
            error: Error()
          }), MailData) : MailData).ins.initMaillData(msg.mails);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Mail);
        }
        /**
        * 请求领取
        * @param msg 
        */


        on_s2c_ReceiveMailsRewardRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;

          if (msg.ids && msg.ids.length > 0) {
            (_crd && MailData === void 0 ? (_reportPossibleCrUseOfMailData({
              error: Error()
            }), MailData) : MailData).ins.receiveMailsRewardSucc(msg.ids);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Mail);
          }
        }
        /**
        * 请求领取
        * @param msg 
        */


        on_s2c_DeleteMailsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;

          if (msg.ids && msg.ids.length > 0) {
            (_crd && MailData === void 0 ? (_reportPossibleCrUseOfMailData({
              error: Error()
            }), MailData) : MailData).ins.deleteMails(msg.ids);
          }
        }
        /**
        * 有新邮件
        * @param msg 
        */


        on_s2c_NewMailsPushp(msg) {
          this.requestGetMails();
        }

        on_getRedPoint() {
          let mails = (_crd && MailData === void 0 ? (_reportPossibleCrUseOfMailData({
            error: Error()
          }), MailData) : MailData).ins.getMails();

          if (!mails) {
            return false;
          }

          for (let key in mails) {
            if (mails[key].isCanReceived || !mails[key].isRead) {
              return true;
            }
          }

          return false;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b5feaed2685260207c2e5bc458fda5162320ae5.js.map
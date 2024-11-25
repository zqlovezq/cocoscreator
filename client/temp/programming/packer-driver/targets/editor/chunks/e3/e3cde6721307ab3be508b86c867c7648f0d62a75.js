System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, Func, RedMgr, RedDotType, _dec, _class, _crd, ccclass, property, MailInfo;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
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
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_2) {
      Func = _unresolved_2.Func;
    }, function (_unresolved_3) {
      RedMgr = _unresolved_3.RedMgr;
    }, function (_unresolved_4) {
      RedDotType = _unresolved_4.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d18c27xP8tCE7dmhZxk0bqJ", "MailInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * MailInfo
       * zhudingchao
       * Mon Jun 03 2024 11:18:21 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/mail/MailInfo.ts
       *
       */

      _export("MailInfo", MailInfo = (_dec = ccclass('MailInfo'), _dec(_class = class MailInfo extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).Mail {
        constructor(...args) {
          super(...args);

          /**
           * 是否已读
           */
          this._isRead = void 0;
        }

        merge(item) {
          for (const key in item) {
            this[key] = item[key];
          }

          let b = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("mailreadState_" + this.id);

          if (b) {
            this._isRead = true;
          } else {
            this._isRead = false;
          }

          this.id = Number(this.id);
        }

        get isRead() {
          return this._isRead;
        }

        set isRead(b) {
          if (b != this._isRead) {
            (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).setItem("mailreadState_" + this.id, b ? 1 : 0);

            if (b) {
              (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
                error: Error()
              }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
                error: Error()
              }), RedDotType) : RedDotType).Mail);
            }
          }

          this._isRead = b;
        }

        get isCanReceived() {
          return !this.IsRewardsReceived && this.Rewards.length > 0;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e3cde6721307ab3be508b86c867c7648f0d62a75.js.map
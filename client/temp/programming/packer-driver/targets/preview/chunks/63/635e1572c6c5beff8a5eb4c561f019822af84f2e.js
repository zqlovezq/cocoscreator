System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, MailInfo, _dec, _class, _class2, _crd, ccclass, property, MailData;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailInfo(extras) {
    _reporterNs.report("MailInfo", "./MailInfo", _context.meta, extras);
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
      MailInfo = _unresolved_2.MailInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "caaeaWgy2dFxoyWZlOHmkVq", "MailData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * MaillData
       * zhudingchao
       * Mon Jun 03 2024 11:05:27 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/mail/MaillData.ts
       *
       */

      _export("MailData", MailData = (_dec = ccclass('MaillData'), _dec(_class = (_class2 = class MailData {
        constructor() {
          this.maillInfos = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new MailData();
          }

          return this._instance;
        }

        initMaillData(mails) {
          this.maillInfos = [];

          for (var key in mails) {
            var info = new (_crd && MailInfo === void 0 ? (_reportPossibleCrUseOfMailInfo({
              error: Error()
            }), MailInfo) : MailInfo)();
            info.merge(mails[key]);
            this.maillInfos.push(info);
          }
        }

        getMails() {
          return this.maillInfos;
        }

        getMailInfoById(id) {
          id = Number(id);
          return this.maillInfos.find(a => a.id == id);
        }

        receiveMailsRewardSucc(ids) {
          for (var key in ids) {
            var info = this.getMailInfoById(ids[key]);

            if (info) {
              info.IsRewardsReceived = true;
              info.isRead = true;
            }
          }
        }

        deleteMails(ids) {
          var _this = this;

          var _loop = function _loop() {
            var id = Number(ids[key]);

            var index = _this.maillInfos.findIndex(a => Number(a.id) == id);

            if (index >= 0) {
              _this.maillInfos.splice(index, 1);
            }
          };

          for (var key in ids) {
            _loop();
          }
        }

        setReadState(id) {
          var info = this.getMailInfoById(id);
          info.isRead = true;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=635e1572c6c5beff8a5eb4c561f019822af84f2e.js.map
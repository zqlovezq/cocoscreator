System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, tab, LangMgr, _dec, _class, _crd, ccclass, property, ChatMessageInfo;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
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
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4c737rLyVNMI53bHjlBV1cz", "ChatMessageInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ChatMessageInfo
       * zhudingchao
       * Thu Jun 13 2024 17:06:22 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/chat/ChatMessageInfo.ts
       *
       */

      _export("ChatMessageInfo", ChatMessageInfo = (_dec = ccclass('ChatMessageInfo'), _dec(_class = class ChatMessageInfo extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).ChatMessage {
        constructor(...args) {
          super(...args);
          this._systemContent = "";
        }

        merge(item) {
          for (const key in item) {
            this[key] = item[key];
          }
        }

        get systemContent() {
          if (!this._systemContent && this.notice) {
            let table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().NoticeTableById.getValue(this.notice.noticeId);

            if (table) {
              let param = [];
              let texts = table.Texts;

              for (let key in texts) {
                switch (texts[key]) {
                  case "playerName":
                    param.push(this.notice.params[key]);
                    break;

                  case "itemName":
                    let item = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                      error: Error()
                    }), tab) : tab).getData().ItemTableById.getValue(Number(this.notice.params[key]));

                    if (item) {
                      param.push((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                        error: Error()
                      }), LangMgr) : LangMgr).getLab(item.Name));
                    } else {
                      param.push("");
                    }

                    break;

                  default:
                    param.push("");
                    break;
                }
              } // let noticeId=this.notice.noticeId;


              this._systemContent = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString(table.WordKey, param);
            }
          }

          return this._systemContent;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=336836e203058c3c99491180701104bb8ff32292.js.map
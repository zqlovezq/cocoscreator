System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ChatMessageInfo, EventMgr, LocalEvent, _dec, _class, _class2, _crd, ccclass, property, ChatData;

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatMessageInfo(extras) {
    _reporterNs.report("ChatMessageInfo", "./ChatMessageInfo", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ChatMessageInfo = _unresolved_2.ChatMessageInfo;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      LocalEvent = _unresolved_4.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48447AD2eNGrY72bYiaFh+e", "ChatData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ChatData
       * zhudingchao
       * Thu Jun 13 2024 16:31:10 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/chat/ChatData.ts
       *
       */

      _export("ChatData", ChatData = (_dec = ccclass('ChatData'), _dec(_class = (_class2 = class ChatData {
        constructor() {
          this._channelMap = void 0;
          this._chatMrssageMap = void 0;
          this.newMessageInfo = null;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new ChatData();
          }

          return this._instance;
        }

        purge() {}

        get channelMap() {
          if (!this._channelMap) {
            this._channelMap = new Map();
          }

          return this._channelMap;
        }

        get chatMrssageMap() {
          if (!this._chatMrssageMap) {
            this._chatMrssageMap = new Map();
          }

          return this._chatMrssageMap;
        }

        initChannels(channels) {
          for (var key in channels) {
            this.channelMap.set(Number(channels[key].Id), channels[key].type);
          }
        } // 退出频道


        deleteChannel(id) {
          this.channelMap.delete(id);
        }

        getChanneIdByType(type) {
          var id = 0;
          this.channelMap.forEach((value, key) => {
            if (type == value) {
              id = key;
              return key;
            }
          });
          return id;
        }

        getChanneTypeById(id) {
          return this.channelMap.get(Number(id));
        }

        chatMessagePush(message) {
          var info = new (_crd && ChatMessageInfo === void 0 ? (_reportPossibleCrUseOfChatMessageInfo({
            error: Error()
          }), ChatMessageInfo) : ChatMessageInfo)();
          info.merge(message);
          var type = this.channelMap.get(Number(info.channelId));
          var list = this.chatMrssageMap.get(type);

          if (!list) {
            list = [];
            this.chatMrssageMap.set(type, list);
          }

          list.push(info);

          if (list.length > 50) {
            list.splice(0, list.length - 50);
          }

          this.newMessageInfo = info;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).ChatMessage_Change);
        }

        getMessageInfosByType(type) {
          if (this.chatMrssageMap.has(type)) {
            return this.chatMrssageMap.get(type);
          }

          return [];
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d5283e466483ad9be5605b0e6637ab7360bd6ef8.js.map
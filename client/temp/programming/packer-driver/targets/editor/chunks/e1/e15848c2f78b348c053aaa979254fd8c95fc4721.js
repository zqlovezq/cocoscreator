System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, EventMgr, proto, Net, ChatData, _dec, _class, _class2, _crd, ccclass, property, ChatControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatData(extras) {
    _reporterNs.report("ChatData", "./ChatData", _context.meta, extras);
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
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      Net = _unresolved_4.Net;
    }, function (_unresolved_5) {
      ChatData = _unresolved_5.ChatData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "419d7Zo0HZJFZQ0o5EktqHQ", "ChatControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ChatControl
       * zhudingchao
       * Thu Jun 13 2024 16:30:59 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/chat/ChatControl.ts
       *
       */

      _export("ChatControl", ChatControl = (_dec = ccclass('ChatControl'), _dec(_class = (_class2 = class ChatControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new ChatControl();
          }

          return this._instance;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DefaultChatChannelsPush, this.on_s2c_DefaultChatChannelsPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SendChatMessageRsp, this.on_s2c_SendChatMessageRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ChatMessagePush, this.on_s2c_Msg_ChatMessagePush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GuildChatChannelPush, this.on_s2c_Msg_GuildChatChannelPush, this);
        }

        requestSendChatMessage(channelId, content, clientCustomNotice) {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_SendChatMessageReq();
          msg.channelId = channelId;
          msg.message = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).ChatMessage();
          msg.message.channelId = channelId;
          msg.message.normal = content;

          if (clientCustomNotice) {
            msg.message.clientCustomNotice = clientCustomNotice;
          }

          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SendChatMessageReq, msg);
        }

        on_s2c_DefaultChatChannelsPush(msg) {
          (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
            error: Error()
          }), ChatData) : ChatData).ins.initChannels(msg.channels);
        }

        on_s2c_SendChatMessageRsp(msg) {}

        on_s2c_Msg_ChatMessagePush(msg) {
          (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
            error: Error()
          }), ChatData) : ChatData).ins.chatMessagePush(msg.message);
        }

        on_s2c_Msg_GuildChatChannelPush(msg) {
          if (msg.channel) {
            (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
              error: Error()
            }), ChatData) : ChatData).ins.initChannels([msg.channel]);
          } else {
            const id = (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
              error: Error()
            }), ChatData) : ChatData).ins.getChanneIdByType((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).ChatChannelType.Guild);
            (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
              error: Error()
            }), ChatData) : ChatData).ins.deleteChannel(id);
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e15848c2f78b348c053aaa979254fd8c95fc4721.js.map
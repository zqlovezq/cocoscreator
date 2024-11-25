System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "client_protocol", "__unresolved_4", "__unresolved_5", "__unresolved_6", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, DataViewWriter, DataViewReader, LocalEvent, NetStateEvent, sys, log, error, resources, assetManager, EventMgr, proto, Global, ChannelMgr, Func, PREVIEW, Net, _crd, MSG_ID_LEN;

  function _reportPossibleCrUseOfDataViewWriter(extras) {
    _reporterNs.report("DataViewWriter", "./DataViewRW", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataViewReader(extras) {
    _reporterNs.report("DataViewReader", "./DataViewRW", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetStateEvent(extras) {
    _reporterNs.report("NetStateEvent", "../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../../Global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../utils/Func", _context.meta, extras);
  }

  _export("Net", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
      log = _cc.log;
      error = _cc.error;
      resources = _cc.resources;
      assetManager = _cc.assetManager;
    }, function (_unresolved_2) {
      DataViewWriter = _unresolved_2.DataViewWriter;
      DataViewReader = _unresolved_2.DataViewReader;
    }, function (_unresolved_3) {
      LocalEvent = _unresolved_3.LocalEvent;
      NetStateEvent = _unresolved_3.NetStateEvent;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_5) {
      Global = _unresolved_5.Global;
    }, function (_unresolved_6) {
      ChannelMgr = _unresolved_6.ChannelMgr;
    }, function (_unresolved_7) {
      Func = _unresolved_7.Func;
    }, function (_ccEnv) {
      PREVIEW = _ccEnv.PREVIEW;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d655eDAggVFK4F+7QY0hc3x", "Net", undefined);

      __checkObsolete__(['sys', 'log', 'director', 'error', 'resources', 'assetManager']);

      MSG_ID_LEN = 2;

      _export("Net", Net = class Net {
        static Connect(url) {
          Net.m_Url = url;
          return Net.Reconnect();
        }

        static Disconnect(_isReconnect, _isQuit) {
          if (Net.m_Ws !== null) {
            Net.isReconnect = _isReconnect;
            Net.isQuit = _isQuit;
            Net.m_Ws.close();
            Net.m_Ws = null;
          }
        }

        static Reconnect() {
          if (Net.m_Url === null) {
            return false;
          }

          Net.Disconnect();

          if (sys.isNative && Net.m_Url.startsWith("wss")) {
            // We should pass the cacert to libwebsockets used in native platform, otherwise the wss connection would be closed.\
            Net.m_Ws = new WebSocket(Net.m_Url, [], Net.getWssCacert());
          } else {
            Net.m_Ws = new WebSocket(Net.m_Url);
          }

          Net.m_Ws.binaryType = 'arraybuffer';
          Net.m_Ws.onopen = Net.onOpen.bind(this);
          Net.m_Ws.onclose = Net.onClose.bind(this);
          Net.m_Ws.onerror = Net.onError.bind(this);
          Net.m_Ws.onmessage = Net.onMessage.bind(this);
          return true;
        }

        static Send(ptl, message) {
          if (!Net.m_Ws || Net.m_Ws.readyState !== WebSocket.OPEN) {
            return;
          }

          if (message == null) {
            message = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto)["Msg_" + (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl[ptl]]();
          }

          console.log("===>>> \u53D1\u9001\u534F\u8BAE=" + (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl[ptl] + ",\u53C2\u6570\u4E3A=" + JSON.stringify(message));

          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isDebug && (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).isDevChannel) {
            var str = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).getItem("test_message");

            if (str == null || str == "") {
              str = [];
            } else {
              str = JSON.parse(str);
            }

            str.push({
              ptl: ptl,
              message: JSON.stringify(message)
            });
            (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).setItem("test_message", JSON.stringify(str));
          } //encode


          var buf = message.constructor.encode(message).finish();
          var writer = new (_crd && DataViewWriter === void 0 ? (_reportPossibleCrUseOfDataViewWriter({
            error: Error()
          }), DataViewWriter) : DataViewWriter)(new ArrayBuffer(buf.length + MSG_ID_LEN));
          writer.setUint16(ptl); //协议号
          //协议内容

          for (var i = 0; i < buf.length; ++i) {
            writer.setInt8(buf[i]);
          }

          writer.markEnd();

          if (ptl == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FinishStageReq && PREVIEW) {
            console.error("---------FinishStageReq len", writer.getLen());
          }

          Net.m_Ws.send(writer.getArrayBuffer());
        }

        static onOpen(ev) {
          log("onOpen~~~~~" + Net.m_Ws.readyState);

          if (Net.m_Ws.readyState == WebSocket.OPEN) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitNetState((_crd && NetStateEvent === void 0 ? (_reportPossibleCrUseOfNetStateEvent({
              error: Error()
            }), NetStateEvent) : NetStateEvent).CONNCET, (_crd && NetStateEvent === void 0 ? (_reportPossibleCrUseOfNetStateEvent({
              error: Error()
            }), NetStateEvent) : NetStateEvent).CONNCET);
          }
        }

        static onClose(ev) {
          log("onClose~~~~~" + ev.reason);

          if (Net.isQuit) {
            Net.isQuit = false;
            return;
          }

          if (Net.isReconnect) {
            Net.isReconnect = false;
            Net.Reconnect();
            return;
          } // Net.stopSendPing();


          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitNetState((_crd && NetStateEvent === void 0 ? (_reportPossibleCrUseOfNetStateEvent({
            error: Error()
          }), NetStateEvent) : NetStateEvent).CLOSE);
        }

        static onError(ev) {
          log("onError~~~~~", ev);
        }

        static onMessage(ev) {
          var reader = new (_crd && DataViewReader === void 0 ? (_reportPossibleCrUseOfDataViewReader({
            error: Error()
          }), DataViewReader) : DataViewReader)(ev.data);

          if (reader.getLen() < MSG_ID_LEN) {
            //包太小
            error("msg len Error!!!");
            Net.Disconnect();
            return;
          }

          var ptl = reader.getUint16();

          if ((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl[ptl] == undefined) {
            console.log("ptl 无法解析", ptl);
            return;
          }

          var packagaLen = reader.getLen() - MSG_ID_LEN;
          var unit8 = new Uint8Array(reader.getBuffer(), reader.getOffset() + reader.getPos(), packagaLen);
          var pb = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto)["Msg_" + (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl[ptl]].decode(unit8);
          pb.error = pb.error || {
            code: 0
          };

          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isDebug) {
            // console.log(`<<<=== 收到协议=${proto.Ptl[ptl]} 参数为=`, JSON.stringify(pb))
            console.log("<<<=== \u6536\u5230\u534F\u8BAE=" + (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl[ptl] + " \u53C2\u6570\u4E3A=", pb);
          }

          Net.toNumber52(pb);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitMsg(ptl, pb);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).LocalEvent_Common_Net_ErrorCode, pb, ptl);

          if (Net.m_RecvCallback) {
            Net.m_RecvCallback(ptl);
          }
        }

        static toNumber52(pbData) {
          for (var key in pbData) {
            Net.valueType = typeof pbData[key];

            if (Net.valueType == "object") {
              if (pbData[key]) {
                if (pbData[key]["__isLong__"]) {
                  pbData[key] = pbData[key].toNumber();
                } else {
                  Net.toNumber52(pbData[key]);
                }
              }
            }
          }
        }

        static set RecvCallback(callback) {
          Net.m_RecvCallback = callback;
        }

        static getWssCacert() {
          var uuid = resources.getInfoWithPath('cacert').uuid;
          return assetManager.utils.getUrlWithUuid(uuid, {
            isNative: true,
            nativeExt: '.pem'
          });
        }
        /**
         * 是否为链接状态
         * @returns 
         */


        static isConnect() {
          if (!Net.m_Ws || Net.m_Ws.readyState !== WebSocket.OPEN) {
            return false;
          }

          return true;
        }

      });

      Net.m_Ws = null;
      Net.m_Url = null;
      Net.m_RecvCallback = void 0;
      Net.isReconnect = false;
      Net.isQuit = false;
      Net.valueType = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f0a7c7254471444ea0f2dbd868bac87abed7ef5.js.map
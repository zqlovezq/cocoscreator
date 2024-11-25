System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "client_protocol", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, LoginData, Http, Net, EventMgr, LocalEvent, NetStateEvent, SceneMgr, ScenesName, UIMgr, Reconnect, proto, tab, RedMgr, RedDotType, Global, ChannelMgr, Waiting, WaitingTag, Func, CommonTipsPop, LangMgr, LoginControl, _crd, ccclass, property, RandomCharSet;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginData(extras) {
    _reporterNs.report("LoginData", "./LoginData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttp(extras) {
    _reporterNs.report("Http", "../../net/Http", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetStateEvent(extras) {
    _reporterNs.report("NetStateEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneMgr(extras) {
    _reporterNs.report("SceneMgr", "../../mgr/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScenesName(extras) {
    _reporterNs.report("ScenesName", "../../mgr/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReconnect(extras) {
    _reporterNs.report("Reconnect", "../Reconnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../../../Global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaiting(extras) {
    _reporterNs.report("Waiting", "../../../Common/script/Waiting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaitingTag(extras) {
    _reporterNs.report("WaitingTag", "../../../Common/script/Waiting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  _export("LoginControl", void 0);

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
      LoginData = _unresolved_3.LoginData;
    }, function (_unresolved_4) {
      Http = _unresolved_4.default;
    }, function (_unresolved_5) {
      Net = _unresolved_5.Net;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_unresolved_7) {
      LocalEvent = _unresolved_7.LocalEvent;
      NetStateEvent = _unresolved_7.NetStateEvent;
    }, function (_unresolved_8) {
      SceneMgr = _unresolved_8.SceneMgr;
      ScenesName = _unresolved_8.ScenesName;
    }, function (_unresolved_9) {
      UIMgr = _unresolved_9.UIMgr;
    }, function (_unresolved_10) {
      Reconnect = _unresolved_10.Reconnect;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_11) {
      tab = _unresolved_11.tab;
    }, function (_unresolved_12) {
      RedMgr = _unresolved_12.RedMgr;
    }, function (_unresolved_13) {
      RedDotType = _unresolved_13.RedDotType;
    }, function (_unresolved_14) {
      Global = _unresolved_14.Global;
    }, function (_unresolved_15) {
      ChannelMgr = _unresolved_15.ChannelMgr;
    }, function (_unresolved_16) {
      Waiting = _unresolved_16.default;
      WaitingTag = _unresolved_16.WaitingTag;
    }, function (_unresolved_17) {
      Func = _unresolved_17.Func;
    }, function (_unresolved_18) {
      CommonTipsPop = _unresolved_18.CommonTipsPop;
    }, function (_unresolved_19) {
      LangMgr = _unresolved_19.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "04d829ccdhLwa9i3Kn/t3n/", "LoginControl", undefined);

      __checkObsolete__(['Node', '_decorator', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);
      RandomCharSet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

      _export("LoginControl", LoginControl = class LoginControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor(...args) {
          super(...args);
          this.isChangeServer = false;
          //----------------处理回调---------------------
          this.pingInterval = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new LoginControl();
          }

          return this._instance;
        }

        init() {
          super.init();
        }

        connect() {
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Connect(`${(_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.gatewayAddrs[0]}`);
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onNetState((_crd && NetStateEvent === void 0 ? (_reportPossibleCrUseOfNetStateEvent({
            error: Error()
          }), NetStateEvent) : NetStateEvent).CONNCET, this.onNetConnect, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onNetState((_crd && NetStateEvent === void 0 ? (_reportPossibleCrUseOfNetStateEvent({
            error: Error()
          }), NetStateEvent) : NetStateEvent).CLOSE, this.onNetClose, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.LoginRsp, this.on_s2c_LoginRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.CreateRoleRsp, this.on_s2c_CreateRoleRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.Pong, this.on_s2c_Pong, this); //-----------------测试红点

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).testLogin, this.red_TestLogin, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).testLogin);
        }

        red_TestLogin(stateToChange) {
          stateToChange = {};
          stateToChange.login1 = true;
          stateToChange.login = {};
          return stateToChange;
        }

        sdkLogin() {
          this.login((_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).getUid(), (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).getToken(), JSON.stringify((_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).getSdkLoginData()));
        }

        login(uid, token, params = "") {
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).setItem("test_message", "");
          (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.isCreatRole = false;
          let addr = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.serverAddress;
          let svcReviewGroup = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.loginServerTab.ReviewSvcGroup;
          let svcGroup = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.loginServerTab.SvcGroup;
          let channel = (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).channelType;
          let password = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.password; // uid = "120512169";
          // token = "2a4ea55d14cd182099cf7a3952f54024"
          // Global.platform = "ios"
          // channel = 1;
          // svcGroup = "dev";
          // svcReviewGroup = "dev";
          // Global.APP_VERSION = "1.0.0";
          // params = JSON.stringify({"account":"lzhlryt@163.com","uid":"120512169","istemp":"0","nickname":"lzhlryt@163.com","sessiontime":1722592892,"sessionid":"2a4ea55d14cd182099cf7a3952f54024","remind":false,"ismobile":false})
          // password = "111"

          let reqParam = `uid=${uid}&token=${token}&platform=${(_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).platform}&ch=${channel}&group=${svcGroup}&review_group=${svcReviewGroup}&ver=${(_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).APP_VERSION}&extras=${params}&password=${password}`;
          (_crd && Waiting === void 0 ? (_reportPossibleCrUseOfWaiting({
            error: Error()
          }), Waiting) : Waiting).Show((_crd && WaitingTag === void 0 ? (_reportPossibleCrUseOfWaitingTag({
            error: Error()
          }), WaitingTag) : WaitingTag).Login, 0);
          (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
            error: Error()
          }), Http) : Http).request({
            host: addr,
            method: "GET",
            reqParam: reqParam,
            cb: responseJson => {
              console.log(responseJson);

              if (responseJson) {
                if (responseJson.ret == 0 && responseJson.data) {
                  (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                    error: Error()
                  }), LoginData) : LoginData).ins.uid = responseJson.data.uid;
                  (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                    error: Error()
                  }), LoginData) : LoginData).ins.token = responseJson.data.token;
                  (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                    error: Error()
                  }), LoginData) : LoginData).ins.gatewayAddrs = responseJson.data.gateway_addr;
                  (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                    error: Error()
                  }), LoginData) : LoginData).ins.openId = responseJson.data.openId;
                  (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                    error: Error()
                  }), LoginData) : LoginData).ins.default_area = responseJson.data.default_area;
                  (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                    error: Error()
                  }), LoginData) : LoginData).ins.default_area_name = responseJson.data.default_area_name; // if (responseJson.group == LoginData.ins.loginServerTab.SvcGroup) {
                  //     Global.SERVER_VERSION = Global.APP_VERSION
                  // } else {
                  //     //审核服
                  //     responseJson.data.group = LoginData.ins.loginServerTab.ReviewSvcGroup
                  //     Global.SERVER_VERSION = "0.0.0"
                  // }

                  (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                    error: Error()
                  }), LoginData) : LoginData).ins.loginGroup = responseJson.group;
                  console.log(`loginGroup=${(_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                    error: Error()
                  }), LoginData) : LoginData).ins.loginGroup}`);
                  (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                    error: Error()
                  }), LoginData) : LoginData).ins.isLogin = true;
                  (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                    error: Error()
                  }), Net) : Net).Connect(`${(_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                    error: Error()
                  }), LoginData) : LoginData).ins.gatewayAddrs[0]}`);
                  return;
                } else if (responseJson.ret == 6) {
                  //服务器维护中
                  (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                    error: Error()
                  }), UIMgr) : UIMgr).ins.jumpLayer((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).Module.Module_RoleInfoNoticePop);
                  (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                    error: Error()
                  }), LocalEvent) : LocalEvent).ServerMaintain);
                } else {
                  //CommonTipsPop.create(`链接失败,code:${responseJson.ret}`)
                  (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
                    error: Error()
                  }), CommonTipsPop) : CommonTipsPop).create((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                    error: Error()
                  }), LangMgr) : LangMgr).getCombineString("Tips_connection_3", [responseJson.ret]));
                }
              }

              (_crd && Waiting === void 0 ? (_reportPossibleCrUseOfWaiting({
                error: Error()
              }), Waiting) : Waiting).Hide((_crd && WaitingTag === void 0 ? (_reportPossibleCrUseOfWaitingTag({
                error: Error()
              }), WaitingTag) : WaitingTag).Login);
            }
          });
        }

        createRole(nickName) {
          let _prefixArr = [];
          let _suffixArr = [];
          let prefixSuffixTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RandomNameTable;

          for (let i = 0; i < prefixSuffixTable.length; i++) {
            let data = prefixSuffixTable[i];

            _prefixArr.push(data.FirstName);

            _suffixArr.push(data.LastName);
          } // 随机一个名字


          let prefixRdm = Math.floor(Math.random() * _prefixArr.length);
          let suffixRdm = Math.floor(Math.random() * _suffixArr.length);

          if (nickName === "") {
            nickName = _prefixArr[prefixRdm] + _suffixArr[suffixRdm];
            (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
              error: Error()
            }), LoginData) : LoginData).ins.nickName = nickName;
          } //发送创角协议


          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_CreateRoleReq();
          msg.name = nickName;
          msg.area = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.default_area;
          msg.platform = (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).platform;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.CreateRoleReq, msg);
        }

        randomString(length, chars) {
          var result = '';

          for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];

          return result;
        }

        onNetConnect() {
          console.log('ws onNetConnect');
          (_crd && Reconnect === void 0 ? (_reportPossibleCrUseOfReconnect({
            error: Error()
          }), Reconnect) : Reconnect).hide();
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_LoginReq();
          msg.uid = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.uid;
          msg.token = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.token;
          msg.group = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.loginGroup;
          msg.area = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.default_area;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.LoginReq, msg);
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).setItem("lastLoginArea", JSON.stringify({
            area: (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
              error: Error()
            }), LoginData) : LoginData).ins.default_area,
            name: (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
              error: Error()
            }), LoginData) : LoginData).ins.default_area_name
          }));
          this.addPingInterval();
        }

        addPingInterval() {
          this.clearPingInterval();
          this.pingInterval = setInterval(() => {
            let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_Ping();
            msg.time = new Date().getTime();
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.Ping, msg);
          }, 30000);
        }

        clearPingInterval() {
          if (this.pingInterval) {
            clearInterval(this.pingInterval);
            this.pingInterval = null;
          }
        }

        on_s2c_Pong(msg) {
          let param = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_PingDelay();
          param.delay = (new Date().getTime() - msg.time) / 2;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.PingDelay, param);
        }

        onNetClose() {
          console.log('ws onNetClose');
          this.clearPingInterval();
          (_crd && Waiting === void 0 ? (_reportPossibleCrUseOfWaiting({
            error: Error()
          }), Waiting) : Waiting).Hide((_crd && WaitingTag === void 0 ? (_reportPossibleCrUseOfWaitingTag({
            error: Error()
          }), WaitingTag) : WaitingTag).Login);

          if (!this.isChangeServer) {
            if ((_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
              error: Error()
            }), SceneMgr) : SceneMgr).isLoginScene()) {
              console.log("登录场景，走重登逻辑");
            } else {
              (_crd && Reconnect === void 0 ? (_reportPossibleCrUseOfReconnect({
                error: Error()
              }), Reconnect) : Reconnect).create();
            }
          } else {
            (_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
              error: Error()
            }), SceneMgr) : SceneMgr).ins.loadScene((_crd && ScenesName === void 0 ? (_reportPossibleCrUseOfScenesName({
              error: Error()
            }), ScenesName) : ScenesName).login);
          }
        }

        on_s2c_LoginRsp(msg) {
          (_crd && Waiting === void 0 ? (_reportPossibleCrUseOfWaiting({
            error: Error()
          }), Waiting) : Waiting).Hide((_crd && WaitingTag === void 0 ? (_reportPossibleCrUseOfWaitingTag({
            error: Error()
          }), WaitingTag) : WaitingTag).Login);

          if (msg.error == null) {
            // 等待角色信息
            return;
          }

          switch (msg.error.code) {
            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).CommonErrorCode.NoRole:
              (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                error: Error()
              }), LoginData) : LoginData).ins.isCreatRole = true;
              (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                error: Error()
              }), LoginData) : LoginData).ins.nickName = "";
              this.createRole((_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                error: Error()
              }), LoginData) : LoginData).ins.nickName);
              break;
          }
        }

        on_s2c_CreateRoleRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
              error: Error()
            }), LoginData) : LoginData).ins.isCreatRole = true; // // 等待角色信息
            // return
          } else if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.RoleNameExist) {
            this.createRole((_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
              error: Error()
            }), LoginData) : LoginData).ins.nickName + this.randomString(4, RandomCharSet));
          } else if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.RoleNameInvalid) {
            this.createRole((_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
              error: Error()
            }), LoginData) : LoginData).ins.nickName + this.randomString(8, RandomCharSet));
          } // switch (msg.result) {
          //     case proto.Msg_CreatRoleRsp.ErrorCode.Succeed:
          //         LoginData.ins.isCreatRole = true;
          //         break;
          //     case proto.Msg_CreatRoleRsp.ErrorCode.InvalidName:
          //         //名字非法，随机一个名字重新创建角色
          //         this.createRole(LoginData.ins.nickName + this.randomString(8, RandomCharSet))
          //         break;
          //     case proto.Msg_CreatRoleRsp.ErrorCode.DuplicatedName:
          //         //名字重复，在原来名字后面加随机字符串
          //         this.createRole(LoginData.ins.nickName + this.randomString(4, RandomCharSet))
          //         break;
          //     default:
          //         // Waiting.Hide(WaitingTag.Login)
          //         // if (SdkManager.Instance.isSDK()) {
          //         //     console.warn("55555555555555555")
          //         //     this.showLoginFail()
          //         // }
          //         break;
          // }

        }

      });

      LoginControl._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0392b19593bb3d8e36a297f0284b08986736b388.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "cc/env", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, KeyCode, input, Bridge, DevChannel, Global, Http, CommonTipsPop, CommonTipsPopCloseType, tab, Func, P8Channel, Waiting, WaitingTag, LangMgr, PREVIEW, JP37Channel, ChannelManager, _crd, ChannelMgr;

  function _reportPossibleCrUseOfBridge(extras) {
    _reporterNs.report("Bridge", "../framework/Bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseChannel(extras) {
    _reporterNs.report("BaseChannel", "./BaseChannel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDevChannel(extras) {
    _reporterNs.report("DevChannel", "./dev/DevChannel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../Global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttp(extras) {
    _reporterNs.report("Http", "../logic/net/Http", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../logic/model/common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPopCloseType(extras) {
    _reporterNs.report("CommonTipsPopCloseType", "../logic/model/common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../logic/utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfP8Channel(extras) {
    _reporterNs.report("P8Channel", "./p8/P8Channel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaiting(extras) {
    _reporterNs.report("Waiting", "../Common/script/Waiting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaitingTag(extras) {
    _reporterNs.report("WaitingTag", "../Common/script/Waiting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../logic/mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfP8PostEventName(extras) {
    _reporterNs.report("P8PostEventName", "./ChannelDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJP37Channel(extras) {
    _reporterNs.report("JP37Channel", "./jp37/JP37Channel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      input = _cc.input;
    }, function (_unresolved_2) {
      Bridge = _unresolved_2.Bridge;
    }, function (_unresolved_3) {
      DevChannel = _unresolved_3.DevChannel;
    }, function (_unresolved_4) {
      Global = _unresolved_4.Global;
    }, function (_unresolved_5) {
      Http = _unresolved_5.default;
    }, function (_unresolved_6) {
      CommonTipsPop = _unresolved_6.CommonTipsPop;
      CommonTipsPopCloseType = _unresolved_6.CommonTipsPopCloseType;
    }, function (_unresolved_7) {
      tab = _unresolved_7.tab;
    }, function (_unresolved_8) {
      Func = _unresolved_8.Func;
    }, function (_unresolved_9) {
      P8Channel = _unresolved_9.P8Channel;
    }, function (_unresolved_10) {
      Waiting = _unresolved_10.default;
      WaitingTag = _unresolved_10.WaitingTag;
    }, function (_unresolved_11) {
      LangMgr = _unresolved_11.LangMgr;
    }, function (_ccEnv) {
      PREVIEW = _ccEnv.PREVIEW;
    }, function (_unresolved_12) {
      JP37Channel = _unresolved_12.JP37Channel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28db0icRzxL7ZQuyLFbvrqD", "ChannelMgr", undefined);

      __checkObsolete__(['EventKeyboard', 'Input', 'KeyCode', 'input', 'sys']);

      ChannelManager = class ChannelManager {
        constructor() {
          this.channel = null;
          this.channelType = void 0;
          this.channelTab = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new ChannelManager();
          }

          return this._instance;
        }

        init() {
          (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).init();
          var type = this.getChannelType();
          console.log("channelType", type);
          this.channelType = type;
          (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).channelType = this.channelType;

          switch (type) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ChannelType.ChannelType_None:
              this.channel = new (_crd && DevChannel === void 0 ? (_reportPossibleCrUseOfDevChannel({
                error: Error()
              }), DevChannel) : DevChannel)();
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ChannelType.ChannelType_PlayTW:
              this.channel = new (_crd && P8Channel === void 0 ? (_reportPossibleCrUseOfP8Channel({
                error: Error()
              }), P8Channel) : P8Channel)();
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ChannelType.ChannelType_G37JP:
              this.channel = new (_crd && JP37Channel === void 0 ? (_reportPossibleCrUseOfJP37Channel({
                error: Error()
              }), JP37Channel) : JP37Channel)();
              break;

            default:
              console.error(["########## 未定义的channelType", type].join(' '));
              break;
          }

          if (this.channel) {
            this.channel.init();
          }

          this.channelTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ChannelTableByChannelType.getValue(this.channelType);

          if (this.channelTab == null) {
            console.error("未找到渠道配置-------", this.channelType);
            return;
          }

          this.setGloble();
          this.channel.basePhpUrl = (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isRelease ? this.channelTab.BaseUrl : this.channelTab.BaseUrlTest;
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        }

        onKeyDown(event) {
          if (event.keyCode === KeyCode.BACKSPACE) {
            (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
              error: Error()
            }), CommonTipsPop) : CommonTipsPop).create("Tips_exit_1", _type => {
              if (_type == (_crd && CommonTipsPopCloseType === void 0 ? (_reportPossibleCrUseOfCommonTipsPopCloseType({
                error: Error()
              }), CommonTipsPopCloseType) : CommonTipsPopCloseType).confirm) {
                this.exitGame(true);
              }
            });
          }
        }

        setGloble() {
          (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).APP_TYPE = this.getAppType();
          (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).platform = (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).getPlatform();
          (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).APP_VERSION = this.getAppVersionName();
          (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).HOT_UPDATE_PATH = (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isRelease ? this.channelTab.HotUpdateUrl : this.channelTab.HotUpdateUrlTest;
        }
        /** 返回默认语言 */


        getDefaultLanguage() {
          return this.channelTab.BaseLanguage;
        }
        /** 返回语言列表 */


        getLanguageList() {
          return this.channelTab.LanguageList;
        }
        /** 获取默认服务器id */


        getDefaultServerId() {
          return (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isRelease ? this.channelTab.DefultID : this.channelTab.TestSeverID;
        }
        /**
         * 是否开发模式
         * @returns 
         */


        get isDevChannel() {
          return this.channelType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ChannelType.ChannelType_None;
        }

        get isP8() {
          return this.channelType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ChannelType.ChannelType_PlayTW;
        }
        /** 是否为日本37 */


        get isJp37() {
          return this.channelType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ChannelType.ChannelType_G37JP;
        }

        getChannel() {
          return this.channel;
        }

        enterGameStart() {}

        login(params, callback) {
          if (this.channel) {
            params = params || "";
            this.channel.login(JSON.stringify(params), obj => {
              this.getShopInfo();
              callback && callback(obj);
            });
          }
        }

        pay(params) {
          if (this.channel) {
            (_crd && Waiting === void 0 ? (_reportPossibleCrUseOfWaiting({
              error: Error()
            }), Waiting) : Waiting).Show((_crd && WaitingTag === void 0 ? (_reportPossibleCrUseOfWaitingTag({
              error: Error()
            }), WaitingTag) : WaitingTag).PAY, 0);
            params = params || "";
            this.channel.pay(JSON.stringify(params), obj => {
              (_crd && Waiting === void 0 ? (_reportPossibleCrUseOfWaiting({
                error: Error()
              }), Waiting) : Waiting).Hide((_crd && WaitingTag === void 0 ? (_reportPossibleCrUseOfWaitingTag({
                error: Error()
              }), WaitingTag) : WaitingTag).PAY);
            });
          }
        }

        getToken() {
          return this.channel.loginToken;
        }

        getUid() {
          return this.channel.loginUid;
        }

        isLogin() {
          if (this.channel) {
            return this.channel.isLogin();
          } else {
            return false;
          }
        }

        getSdkLoginData() {
          return this.channel.sdkLoginData;
        }

        logout(params, callback) {
          if (this.channel) {
            this.channel.logout(params, callback);
          }
        }
        /**
        * 获得包类型， 0测试、1正式
        */


        getAppType() {
          var code = (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).APP_TYPE;

          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            code = (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("getAppType");
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            code = (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("getAppType", "()I");
          }

          return (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).checkInt(code);
        }
        /**
        * 获取渠道类型
        */


        getChannelType() {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            return (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("getChannelType");
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            return (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("getChannelType", "()I");
          }

          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ChannelType.ChannelType_None;
        }
        /**
        * 获得app版本号  1.0.0
        */


        getAppVersionName() {
          var code;

          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            code = (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("getAppVersionName");
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            code = (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("getAppVersionName", "()Ljava/lang/String;");
          }

          var v = (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).APP_VERSION;

          if (code == undefined || code == "") {
            console.log('getJsbVersionName ret = undefined');
          } else {
            v = code;
          }

          return v;
        }
        /**
        * 获得app版本号  1
        */


        getAppVersionCode() {
          var code;

          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            code = (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("getAppVersionCode");
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            code = (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("getAppVersionCode", "()Ljava/lang/String;");
          }

          var v = 1;

          if (code == undefined || code == "") {
            console.log('getJsbVersionCode ret = undefined');
          } else {
            v = Number(code);
          }

          return v;
        }
        /**
         * 是否sdk初始化成功
         */


        isSdkInitOk() {
          var type = 0;

          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            type = (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("getInitSdkOk");
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            type = (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("getInitSdkOk", "()I");
          }

          return type;
        }
        /**
         * 切换语言
         * @param params 
         */


        changeLanguage(params) {
          if (this.channel) {
            this.channel.changeLanguage(params);
          }
        }
        /**
        * 获得线上远程版本配置并初始化游戏设置
        * @param callback 完成回调函数
        */


        initOnLineVersion(callback) {
          if (PREVIEW) {
            (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
              error: Error()
            }), Global) : Global).IS_REVIEW = false;
            (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
              error: Error()
            }), Global) : Global).ONLINE_VERSION = "1.0.0";
            (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
              error: Error()
            }), Global) : Global).ONLINE_RES_VERSION = "1.0.0";
            callback && callback();
            return;
          }

          var doGet = () => {
            var addr = this.channel.getBasePhpUrl() + "check-is-review";
            var reqParam = "ch=" + this.channelType + "&ver=" + (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
              error: Error()
            }), Global) : Global).APP_VERSION + "&platform=" + (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
              error: Error()
            }), Global) : Global).platform;
            (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
              error: Error()
            }), Http) : Http).request({
              host: addr,
              method: "GET",
              reqParam: reqParam,
              cb: responseJson => {
                console.log(responseJson);

                if (responseJson) {
                  (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
                    error: Error()
                  }), Global) : Global).IS_REVIEW = responseJson.is_review;
                  (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
                    error: Error()
                  }), Global) : Global).ONLINE_VERSION = responseJson.package_version || "1.0.0";
                  (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
                    error: Error()
                  }), Global) : Global).ONLINE_RES_VERSION = responseJson.version || "1.0.0";
                  (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
                    error: Error()
                  }), Global) : Global).print();

                  if ((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                    error: Error()
                  }), Func) : Func).compareVersion((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
                    error: Error()
                  }), Global) : Global).APP_VERSION, (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
                    error: Error()
                  }), Global) : Global).ONLINE_VERSION) < 0) {
                    //线上版本大于本地版本， 需要更新，跳转商店
                    (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
                      error: Error()
                    }), CommonTipsPop) : CommonTipsPop).create((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                      error: Error()
                    }), LangMgr) : LangMgr).getLab("Tips_connection_2"), () => {
                      this.jumpStore();
                    });
                    return;
                  }

                  callback && callback();
                } else {
                  (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
                    error: Error()
                  }), CommonTipsPop) : CommonTipsPop).create((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                    error: Error()
                  }), LangMgr) : LangMgr).getLab("Tips_connection_1"), () => {
                    doGet();
                  });
                }
              }
            });
          };

          doGet();
        }

        jumpStore() {
          var jumpUrl = "";

          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            jumpUrl = this.channelTab.IosStoreUrl;
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            jumpUrl = this.channelTab.AndroidStoreUrl;
          }

          this.openURL(jumpUrl);
        }
        /**
         * 跳转到浏览器
         * @param url 地址
         */


        openURL(url) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("openURL:", null, url);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("openURL", "(Ljava/lang/String;)V", url);
          } else {
            console.log("pc打开链接", url);
          }
        }

        openActionWebView(url) {
          if (this.channel) {
            this.channel.openActionWebView(url);
          }
        }
        /**
         * 
         * @param isSdk 是否调用sdk接口
         * @param param sdk传参 {title:标题,message:内容,btnOkTxt:确认按钮文本,btnCancelTxt:取消按钮文本}
         */


        exitGame(isSdk, param) {
          if (isSdk === void 0) {
            isSdk = false;
          }

          if (param === void 0) {
            param = null;
          }

          if (isSdk) {
            if (this.channel) {
              this.channel.exit(param);
            }
          } else {
            if (this.channel) {
              this.channel.exitApp(param);
            }
          }
        }

        intoServer(params) {
          if (this.channel) {
            this.channel.intoServer(JSON.stringify(params));
          }
        }

        createRole(params) {
          if (this.channel) {
            this.channel.createRole(JSON.stringify(params));
          }
        }

        roleLevelUp(params) {
          if (this.channel) {
            this.channel.roleLevelUp(JSON.stringify(params));
          }
        }

        roleLogoutServer(params) {
          if (this.channel) {
            this.channel.roleLogoutServer(JSON.stringify(params));
          }
        }

        roleCompleteTutorial(params) {
          if (this.channel) {
            this.channel.roleCompleteTutorial(JSON.stringify(params));
          }
        }

        accountUpgrade() {
          if (this.channel) {
            this.channel.accountUpgrade();
          }
        }

        accountCenter(params) {
          if (this.channel) {
            this.channel.accountCenter(JSON.stringify(params));
          }
        }

        initRewardedAd(params, callback) {
          if (this.channel) {
            this.channel.initRewardedAd(JSON.stringify(params), retData => {
              callback && callback(retData);
            });
          }
        }

        showRewardedAd() {
          if (this.channel) {
            this.channel.showRewardedAd();
          }
        }
        /**
         * 返回sdk计费点价格，比如港澳台版本需要转成美元
         * @param p_data 
         * @returns 
         */


        getSdkRechargePrice(p_data) {
          if (this.channel) {
            return this.channel.getSdkRechargePrice(p_data);
          }

          return p_data.PriceDollar / 100;
        }

        getRechargeCurrency() {
          if (this.channel) {
            return this.channel.getRechargeCurrency();
          }

          return "";
        }

        getSdkRechargeShowPrice(p_data) {
          if (this.isJp37) {
            var str = this.channel.getSdkRechargeShowPrice(p_data);

            if (str != null && str != "") {
              return str;
            }
          }

          var price = this.getSdkRechargePrice(p_data);
          var currency = this.getRechargeCurrency();
          return (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString(currency, [price]);
        }
        /**
         * 平台事件打点
         * @param eventName 
         * @param params 
         */


        postEvent(eventName, params) {
          if (params === void 0) {
            params = null;
          }

          console.log("数据埋点===" + eventName, "===params==", params);
          var obj = new Object();
          obj["eventName"] = eventName;

          if (params) {
            obj["data"] = params;
          }

          if (this.channel) {
            this.channel.postEvent(obj);
          }
        }

        comment(params, callback) {
          if (this.channel) {
            this.channel.comment(params, callback);
          }
        }

        share(params, callback) {
          if (this.channel) {
            this.channel.share(params, callback);
          }
        }

        gameHotfixStart() {
          if (this.channel) {
            this.channel.gameHotfixStart();
          }
        }

        gameHotfixSuccess() {
          if (this.channel) {
            this.channel.gameHotfixSuccess();
          }
        }

        openCustomService() {
          if (this.channel) {
            this.channel.openCustomService();
          }
        }

        gameServerPage() {
          if (this.channel) {
            this.channel.gameServerPage();
          }
        }

        getShopInfo() {
          if (this.channel) {
            var list = [];
            (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().RechargeTable.forEach(v => {
              var id = v[this.channelTab.ProductType];

              if (id && id != "") {
                if (list.indexOf(id) == -1) {
                  list.push(id);
                }
              }
            });
            this.channel.getShopInfo(JSON.stringify(list));
          }
        }

      };
      ChannelManager._instance = void 0;

      _export("ChannelMgr", ChannelMgr = ChannelManager.ins);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ddc24a3639662e20e4d730261dd367cf1b8117f5.js.map
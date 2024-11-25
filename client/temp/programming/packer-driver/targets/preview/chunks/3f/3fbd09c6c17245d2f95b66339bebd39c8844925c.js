System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "client_protocol", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, game, BaseChannel, tab, Bridge, CommonTipsPop, EventMgr, proto, RoleData, LangMgr, JP37Channel, _crd;

  function _reportPossibleCrUseOfBaseChannel(extras) {
    _reporterNs.report("BaseChannel", "../BaseChannel", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBridge(extras) {
    _reporterNs.report("Bridge", "../../framework/Bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../../logic/model/common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../logic/mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../logic/model/role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../logic/mgr/LangMgr", _context.meta, extras);
  }

  _export("JP37Channel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      game = _cc.game;
    }, function (_unresolved_2) {
      BaseChannel = _unresolved_2.BaseChannel;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      Bridge = _unresolved_4.Bridge;
    }, function (_unresolved_5) {
      CommonTipsPop = _unresolved_5.CommonTipsPop;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_7) {
      RoleData = _unresolved_7.RoleData;
    }, function (_unresolved_8) {
      LangMgr = _unresolved_8.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e9bb5vK59GsoHiUDt2DVPO", "JP37Channel", undefined);

      __checkObsolete__(['JsonAsset', 'game', 'settings', 'sys']);

      _export("JP37Channel", JP37Channel = class JP37Channel extends (_crd && BaseChannel === void 0 ? (_reportPossibleCrUseOfBaseChannel({
        error: Error()
      }), BaseChannel) : BaseChannel) {
        //表里填写的
        constructor() {
          super();
          this.channelType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ChannelType.ChannelType_PlayTW;
          this.basePhpUrl = "";
          this._isLoginSuc = false;
          //是否登录  
          this.popBtns = new Map();
          //商品
          this.products = null;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.Mobile37PopupsPush, this.on_s2c_Mobile37PopupsPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.LoginRsp, this.on_s2c_LoginRsp, this);
        }

        init() {
          this.gameInitSuccess();
          this.gameSplashScreenStart();
          this.registerChangeAccountEvent();
          this.registerLogoutEvent();
        }

        registerChangeAccountEvent() {
          (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).addEvent("changeAccount", () => {
            (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
              error: Error()
            }), CommonTipsPop) : CommonTipsPop).create((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_changeaccount_1"), () => {
              this.roleLogoutServer(JSON.stringify((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.sdkRole()));
              setTimeout(() => {
                game.restart();
              }, 500);
            });
          });
        }

        registerLogoutEvent() {
          (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).addEvent("logout", () => {
            (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
              error: Error()
            }), CommonTipsPop) : CommonTipsPop).create((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_logout_1"), () => {
              this.roleLogoutServer(JSON.stringify((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.sdkRole()));
              setTimeout(() => {
                game.restart();
              }, 500);
            });
          });
        }

        gameSplashScreenStart() {
          console.log("########## JP37Channel gameSplashScreenStart");

          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("gameSplashScreenStart");
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("gameSplashScreenStart", "()V");
          }
        }

        gameServerPage() {
          console.log("########## JP37Channel gameServerPage");

          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("gameServerPage");
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("gameServerPage", "()V");
          }
        }

        gameInitSuccess() {// console.log("########## JP37Channel gameInitSuccess");
          // if (Bridge.isIos) {
          //     Bridge.call("gameInitSuccess");
          // } else if (Bridge.isAndroid) {
          //     Bridge.call("gameInitSuccess", "()V");
          // }
        }

        gameHotfixStart() {
          console.log("########## JP37Channel gameHotfixStart");

          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("gameHotfixStart");
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("gameHotfixStart", "()V");
          }
        }

        gameHotfixSuccess() {
          console.log("########## JP37Channel gameHotfixSuccess");

          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("gameHotfixSuccess");
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("gameHotfixSuccess", "()V");
          }
        }

        login(params, callback) {
          // this._isLoginSuc = true;
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(param => {
              console.log("ios login:", param, typeof param);
              this.sdkLoginData = JSON.parse(param);
              this.loginUid = this.sdkLoginData.uid;
              this.loginToken = this.sdkLoginData.sessionid;
              callback({
                code: 0
              });
            }, "login:", null, params);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(param => {
              console.log("android login:", param);
              this.sdkLoginData = JSON.parse(param);
              this.loginUid = this.sdkLoginData.uid;
              this.loginToken = this.sdkLoginData.sessionId;
              callback({
                code: this.sdkLoginData.code
              });
            }, "login", "(Ljava/lang/String;)V", params);
          }
        }

        isLogin() {
          return this._isLoginSuc;
        }

        logout(params, callback) {// if (Bridge.isIos) {
          //     Bridge.callWithBack((param: string) => {
          //         console.log("ios logout:", param, typeof (param))
          //         this.sdkLoginData = null;
          //         var obj = JSON.parse(param)
          //         if (Number(obj.code) == 0) {
          //             callback(obj);
          //         }
          //     }, "logout:", null, params)
          // } else if (Bridge.isAndroid) {
          //     Bridge.callWithBack((param: string) => {
          //         this.sdkLoginData = null;
          //         var obj = JSON.parse(param)
          //         callback(obj);
          //     }, "logout", "(Ljava/lang/String;)V", params)
          // }
        }

        exit() {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {} else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## JP37Channel exitGame android");
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(() => {
              this.exitApp("");
            }, "exitGame", "()V");
          }
        }

        exitApp(param) {
          game.end();
        }

        pay(params, callback) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(param => {
              console.log("ios pay:", param, typeof param);
              callback();
            }, "pay:", null, params);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(param => {
              console.log("android pay:", param);
              callback();
            }, "pay", "(Ljava/lang/String;)V", params);
          }
        }
        /**
         * 获得php服务器地址
         * @returns 
         */


        getBasePhpUrl() {
          return this.basePhpUrl;
        }

        loginServer(callback) {}

        intoServer(params) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## JP37Channel intoServer ios", params); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## JP37Channel intoServer ret ios", retData);
              var obj = JSON.parse(retData);
            }, "intoServer:", null, params);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## JP37Channel intoServer android  " + params);
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## JP37Channel intoServer ret android", retData);
              var obj = JSON.parse(retData);
            }, "intoServer", "(Ljava/lang/String;)V", params);
          }
        }

        createRole(params) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## JP37Channel createRole ios", params); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## JP37Channel createRole ret ios", retData);
              var obj = JSON.parse(retData);
            }, "createRole:", null, params);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## JP37Channel createRole android " + params);
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## JP37Channel createRole ret android", retData);
              var obj = JSON.parse(retData);
            }, "createRole", "(Ljava/lang/String;)V", params);
          }
        }

        roleLevelUp(params) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## JP37Channel roleLevelUp ios", params); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## JP37Channel roleLevelUp ret ios", retData);
              var obj = JSON.parse(retData);
            }, "roleLevelUp:", null, params);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## JP37Channel roleLevelUp android " + params);
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## JP37Channel roleLevelUp ret android ", retData);
              var obj = JSON.parse(retData);
            }, "roleLevelUp", "(Ljava/lang/String;)V", params);
          }
        }

        roleLogoutServer(params) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## JP37Channel roleLogoutServer ios", params); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("roleLogout:", null, params);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## JP37Channel roleLogoutServer android " + params);
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("roleLogout", "(Ljava/lang/String;)V", params);
          }
        }

        roleCompleteTutorial(params) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## JP37Channel roleCompleteTutorial ios", params); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("completeTutorial:", null, params);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## JP37Channel roleCompleteTutorial android " + params);
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("completeTutorial", "(Ljava/lang/String;)V", params);
          }
        }

        accountUpgrade() {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## JP37Channel accountUpgrade ios"); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## JP37Channel accountUpgrade ret ios");
            }, "accountUpgrade");
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## JP37Channel accountUpgrade android");
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## JP37Channel accountUpgrade ret android");
            }, "accountUpgrade");
          }
        }

        accountCenter(params) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## JP37Channel accountCenter ios", params); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## JP37Channel accountCenter ret ios", retData);
              var obj = JSON.parse(retData);
            }, "accountCenter:", null, params);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            //p8安卓没有用户中心
            console.log("########## JP37Channel accountCenter android");
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## JP37Channel accountCenter ret android", retData);
              var obj = JSON.parse(retData);
            }, "accountCenter", "(Ljava/lang/String;)V", params);
          }
        }

        initRewardedAd(params, callback) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## JP37Channel initRewardedAd ios", params); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## JP37Channel initRewardedAd ret ios", retData);
              var obj = JSON.parse(retData);
              callback(obj);
            }, "initRewardedAd:", null, params);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## JP37Channel initRewardedAd android");
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## JP37Channel initRewardedAd ret android", retData);
              var obj = JSON.parse(retData);
              callback(obj);
            }, "initRewardedAd", "(Ljava/lang/String;)V", params);
          }
        }

        showRewardedAd() {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## JP37Channel showRewardedAd ios"); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("showRewardedAd");
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## JP37Channel initRewardedAd android");
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("showRewardedAd");
          }
        }

        comment(params, callback) {
          var self = this;

          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## JP37Channel comment ios"); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("comment:", null, JSON.stringify(params));
            callback({
              code: 0
            });
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## JP37Channel comment android"); // Bridge.call("comment", JSON.stringify(params));

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("comment", "(Ljava/lang/String;)V", JSON.stringify(params));
            callback({
              code: 0
            }); //因为playe800 安卓没有评价没有成功回调 只要调起sdk评分方法就算成功
          }
        }

        share(params, callback) {
          var self = this;
          params.shareType = "facebook";

          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## JP37Channel share ios"); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## JP37Channel share ret ios");
              self.sdkLoginData = null;
              var obj = JSON.parse(retData);
              callback(obj);
            }, "share:", null, JSON.stringify(params));
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## JP37Channel share android");
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## JP37Channel share ret android");
              self.sdkLoginData = null;
              var obj = JSON.parse(retData);
              callback(obj);
            }, "share", "(Ljava/lang/String;)V", JSON.stringify(params));
          }
        }

        community() {}

        getVersionPhpUrl() {
          return this.basePhpUrl + "version_play800.php";
        }

        getRandomNameFile() {
          return "radom_name_en.xml";
        }

        getSdkRechargePrice(p_data) {
          return p_data.PriceJPY;
        }

        getRechargeCurrency() {
          return "ui_commondesc_73";
        }

        postEvent(params) {
          console.log("上报打点事件===" + JSON.stringify(params)); // if (Bridge.isIos) {
          //     console.log("########## JP37Channel postEvent ios", params);
          //     //iOS注意函数签名，注意与Android的不同
          //     Bridge.call("postEvent:", null, JSON.stringify(params));
          // }
          // else if (Bridge.isAndroid) {
          //     console.log("########## JP37Channel postEvent android " + params);
          //     Bridge.call("postEvent", "(Ljava/lang/String;)V", JSON.stringify(params));
          // }
        }

        openActionWebView(url) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            //iOS注意函数签名，注意与Android的不同
            console.log("########## JP37Channel openActionWebView ret ios", url);
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("openActionWebView:", null, url);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## JP37Channel openActionWebView android " + url);
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("openActionWebView", "(Ljava/lang/String;)V", url);
          } else {
            console.log("########## JP37Channel openActionWebView pc " + url);
          }
        }

        openCustomService() {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## JP37Channel openCustomService ios");
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("openCustomService:", null, "");
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## JP37Channel openCustomService android");
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("openCustomService", "(Ljava/lang/String;)V", "");
          }
        }

        on_s2c_LoginRsp() {
          this.popBtns.clear();
        }

        on_s2c_Mobile37PopupsPush(msg) {
          for (var index = 0; index < msg.popups.length; index++) {
            var v = msg.popups[index];
            this.popBtns.set(v.type, v);
          }
        }

        getShopInfo(param) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            //iOS注意函数签名，注意与Android的不同
            console.log("########## JP37Channel getShopInfo ret ios", param);
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(ret => {
              console.log("########## JP37Channel getShopInfo ret ios", ret);
              this.products = JSON.parse(ret);
            }, "getShopInfo:", null, param);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## JP37Channel getShopInfo android " + param);
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(ret => {
              console.log("########## JP37Channel getShopInfo ret android", ret);
              this.products = JSON.parse(ret);
            }, "getShopInfo", "(Ljava/lang/String;)V", param);
          } else {
            console.log("########## JP37Channel getShopInfo pc " + param);
          }
        }

        getSdkRechargeShowPrice(p_data) {
          if (this.products && this.products[p_data.ProductId37JP]) {
            var key = "priceStr";

            if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).isIos) {
              key = "price";
            }

            return this.products[p_data.ProductId37JP][key];
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3fbd09c6c17245d2f95b66339bebd39c8844925c.js.map
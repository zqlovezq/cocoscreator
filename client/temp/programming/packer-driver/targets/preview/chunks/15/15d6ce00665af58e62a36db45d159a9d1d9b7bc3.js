System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, game, BaseChannel, tab, Bridge, P8Channel, _crd;

  function _reportPossibleCrUseOfBaseChannel(extras) {
    _reporterNs.report("BaseChannel", "../BaseChannel", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBridge(extras) {
    _reporterNs.report("Bridge", "../../framework/Bridge", _context.meta, extras);
  }

  _export("P8Channel", void 0);

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22a05IrK/dHdr/25vGTp2CO", "P8Channel", undefined);

      __checkObsolete__(['JsonAsset', 'game', 'sys']);

      _export("P8Channel", P8Channel = class P8Channel extends (_crd && BaseChannel === void 0 ? (_reportPossibleCrUseOfBaseChannel({
        error: Error()
      }), BaseChannel) : BaseChannel) {
        constructor() {
          super(...arguments);
          this.channelType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ChannelType.ChannelType_PlayTW;
          this.basePhpUrl = "";
          //表里填写的
          this._isLoginSuc = false;
        }

        //是否登录  
        init() {}

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

        logout(params, callback) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(param => {
              console.log("ios logout:", param, typeof param);
              this.sdkLoginData = null;
              var obj = JSON.parse(param);

              if (Number(obj.code) == 0) {
                callback(obj);
              }
            }, "logout:", null, params);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(param => {
              this.sdkLoginData = null;
              var obj = JSON.parse(param);
              callback(obj);
            }, "logout", "(Ljava/lang/String;)V", params);
          }
        }

        exit() {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {} else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## P8Channel exitGame android");
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(null, "exitGame", "()V");
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
            console.log("########## P8Channel intoServer ios", params); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## P8Channel intoServer ret ios", retData);
              var obj = JSON.parse(retData);
            }, "intoServer:", null, params);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## P8Channel intoServer android  " + params);
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## P8Channel intoServer ret android", retData);
              var obj = JSON.parse(retData);
            }, "intoServer", "(Ljava/lang/String;)V", params);
          }
        }

        createRole(params) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## P8Channel createRole ios", params); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## P8Channel createRole ret ios", retData);
              var obj = JSON.parse(retData);
            }, "createRole:", null, params);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## P8Channel createRole android " + params);
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## P8Channel createRole ret android", retData);
              var obj = JSON.parse(retData);
            }, "createRole", "(Ljava/lang/String;)V", params);
          }
        }

        roleLevelUp(params) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## P8Channel roleLevelUp ios", params); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## P8Channel roleLevelUp ret ios", retData);
              var obj = JSON.parse(retData);
            }, "roleLevelUp:", null, params);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## P8Channel roleLevelUp android " + params);
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## P8Channel roleLevelUp ret android ", retData);
              var obj = JSON.parse(retData);
            }, "roleLevelUp", "(Ljava/lang/String;)V", params);
          }
        }

        accountUpgrade() {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## P8Channel accountUpgrade ios"); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## P8Channel accountUpgrade ret ios");
            }, "accountUpgrade");
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## P8Channel accountUpgrade android");
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## P8Channel accountUpgrade ret android");
            }, "accountUpgrade");
          }
        }

        accountCenter(params) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## P8Channel accountCenter ios", params); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## P8Channel accountCenter ret ios", retData);
              var obj = JSON.parse(retData);
            }, "accountCenter:", null, params);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {//p8安卓没有用户中心
            // console.log("########## P8Channel accountCenter android");
            // Bridge.callWithBack(function (retData) {
            //     console.log("########## P8Channel accountCenter ret android", retData);
            //     var obj = JSON.parse(retData)
            // }, "accountCenter", "(Ljava/lang/String;)V", params);
          }
        }

        initRewardedAd(params, callback) {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## P8Channel initRewardedAd ios", params); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## P8Channel initRewardedAd ret ios", retData);
              var obj = JSON.parse(retData);
              callback(obj);
            }, "initRewardedAd:", null, params);
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## P8Channel initRewardedAd android");
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## P8Channel initRewardedAd ret android", retData);
              var obj = JSON.parse(retData);
              callback(obj);
            }, "initRewardedAd", "(Ljava/lang/String;)V", params);
          }
        }

        showRewardedAd() {
          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## P8Channel showRewardedAd ios"); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("showRewardedAd");
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## P8Channel initRewardedAd android");
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
            console.log("########## P8Channel comment ios"); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## P8Channel comment ret ios");
              self.sdkLoginData = null;
              var obj = JSON.parse(retData);
              callback(obj);
            }, "comment:", null, JSON.stringify(params));
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## P8Channel comment android"); // Bridge.call("comment", JSON.stringify(params));

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(null, "comment", "(Ljava/lang/String;)V", JSON.stringify(params));
            callback({
              code: 0
            }); //因为playe800 安卓没有评价没有成功回调 只要调起sdk评分方法就算成功
          }
        }

        share(params, callback) {
          var self = this;

          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            params.url = "https://www.mcjdhjj.com/chick/shareFB/game_share_fb.jpg";
            params.des = "超雞小隊，全軍出雞，所向披靡！";
            console.log("########## P8Channel share ios"); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## P8Channel share ret ios");
              self.sdkLoginData = null;
              var obj = JSON.parse(retData);
              callback(obj);
            }, "share:", null, JSON.stringify(params));
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            params.url = "https://www.mcjdhjj.com/chick/shareFB/game_share_fb.jpg";
            console.log("########## P8Channel share android");
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).callWithBack(function (retData) {
              console.log("########## P8Channel share ret android");
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
          return p_data.PriceDollar / 100;
        }

        getRechargeCurrency() {
          return "ui_commondesc_73";
        }

        postEvent(params) {
          console.log("上报打点事件===" + JSON.stringify(params));

          if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isIos) {
            console.log("########## P8Channel postEvent ios", params); //iOS注意函数签名，注意与Android的不同

            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("postEvent:", null, JSON.stringify(params));
          } else if ((_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).isAndroid) {
            console.log("########## P8Channel postEvent android " + params);
            (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
              error: Error()
            }), Bridge) : Bridge).call("postEvent", "(Ljava/lang/String;)V", JSON.stringify(params));
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=15d6ce00665af58e62a36db45d159a9d1d9b7bc3.js.map
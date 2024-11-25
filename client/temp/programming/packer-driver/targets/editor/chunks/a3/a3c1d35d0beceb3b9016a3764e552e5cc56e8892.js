System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, game, ViewPop, tab, ChannelMgr, Func, AdMgr, Global, P8PostEventName, _dec, _class, _crd, ccclass, property, SdkTestPop;

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdMgr(extras) {
    _reporterNs.report("AdMgr", "./AdMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../../Global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfP8PostEventName(extras) {
    _reporterNs.report("P8PostEventName", "../../channel/ChannelDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      game = _cc.game;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      ChannelMgr = _unresolved_4.ChannelMgr;
    }, function (_unresolved_5) {
      Func = _unresolved_5.Func;
    }, function (_unresolved_6) {
      AdMgr = _unresolved_6.AdMgr;
    }, function (_unresolved_7) {
      Global = _unresolved_7.Global;
    }, function (_unresolved_8) {
      P8PostEventName = _unresolved_8.P8PostEventName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a52a6xR2bpBFpjxxQYX4ZoB", "SdkTestPop", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AnimationClip', 'Color', 'director', 'game', 'Game', 'Graphics', 'instantiate', 'js', 'Label', 'Layers', 'Material', 'Node', 'Prefab', 'Rect', 'resources', 'sp', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'sys', 'Texture2D', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SdkTestPop", SdkTestPop = (_dec = ccclass('SdkTestPop'), _dec(_class = class SdkTestPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        register() {}

        onLoginClick() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).login({}, params => {
            console.log("sdkLoginClick");

            if (params.code == 0) {// LoginControl.ins.sdkLogin()
            } else {
              console.log("登录失败");
            }
          });
        }

        onAdInitClick() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).initRewardedAd({}, retData => {
            if (retData) {
              retData.code = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).checkInt(retData.code);
            }
          });
        }

        onAdShowClick() {
          (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.playVideoAd((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_MainChapterReward, () => {
            console.log("播放成功");
          });
        }

        getRoleInfo() {
          let t_obj = {};
          t_obj.diamond = 100;
          t_obj.gold = 100;
          t_obj.roleID = "test_sdk_roleId";
          t_obj.roleName = "test_sdk_roleName";
          t_obj.roleLevel = 1;
          t_obj.vipLevel = 1;
          t_obj.serverID = 1;
          t_obj.serverName = "test_sdk_1服";
          t_obj.createRoleTime = Math.round(Date.now() / 1000);
          t_obj.levelUpTime = Math.round(Date.now() / 1000);
          t_obj.partyName = "无";
          return t_obj;
        }

        onCreateRoleClick() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).createRole(this.getRoleInfo());
        }

        onIntoServerClick() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).intoServer(this.getRoleInfo());
        }

        onUpLvClick() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).roleLevelUp(this.getRoleInfo());
        }

        onLogoutServer() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).roleLogoutServer(this.getRoleInfo());
        }

        onRoleCompleteTutorial() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).roleCompleteTutorial(this.getRoleInfo());
        }

        onAccountCenterClick() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).accountCenter(this.getRoleInfo());
        }

        onExitGame() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).exitGame(true, "");
        }

        onLogOut() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).logout("", () => {
            console.log("重启游戏代码");
            game.restart();
          });
        }

        onPay() {
          //SDK支付
          let t_obj = this.getRoleInfo();
          let orderId = "sdasdas";
          t_obj.onLineTime = "1";
          t_obj.objJson = orderId;
          t_obj.orderId = orderId;
          t_obj.gameOrderIdTst = (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isDebug ? 1 : 0; //@"0"是正式环境订单  @"1" 是测试环境订单

          let rechangeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RechargeTableById.getValue(1);
          t_obj.productld = rechangeTab[(_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).channelTab.ProductType]; //    "com.cjxd2.0.99"

          t_obj.ptPrice = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).getSdkRechargePrice(rechangeTab);
          t_obj.rmb = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).getSdkRechargePrice(rechangeTab);
          t_obj.productDesc = rechangeTab.Desc;
          t_obj.extraInfo = {
            svc_group: "test"
          }; //@"0.01"

          t_obj.goodNum = 1;
          t_obj.ratio = 10;
          t_obj.buyTitle = rechangeTab.Desc;
          t_obj.buyName = rechangeTab.Desc;
          t_obj.productDesc = rechangeTab.Desc;
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).pay(t_obj);
        }

        onOpenUrl() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).openURL("https://www.facebook.com/cjxd.re.tw/");
        }

        onShare() {
          console.log("js调用分享");
          let t_obj = {};
          t_obj.roleID = "roleid_test";
          t_obj.serverID = "7"; //sdk需要是逻辑服id

          t_obj.url = "";
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).share(t_obj, retData => {
            console.log("################ share " + JSON.stringify(retData));

            if (retData.code == 0) {// this.testLoopTask();
            }
          });
        }

        onComment() {
          console.log("js调用商店评分");
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).comment("{}", retData => {
            // console.log("##################### comment ret" + JSON.stringify(retData));
            console.log("商店评分============" + retData);

            if (retData.code == 0) {// MeControl.getInstance().setClintData(TypeClientData.REPUTATION, 1);
              // SceneViewReputation.getInstance().hideScene();
              // console.log("商店评分============回调")
            }
          });
        }

        onPostEvent() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).postEvent((_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
            error: Error()
          }), P8PostEventName) : P8PostEventName).test);
        }

        onKefu() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).openCustomService();
        }

        openActionWebView() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).openActionWebView("https://www.facebook.com/cjxd.re.tw/");
        }

        onShopInfo() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).getShopInfo();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a3c1d35d0beceb3b9016a3764e552e5cc56e8892.js.map
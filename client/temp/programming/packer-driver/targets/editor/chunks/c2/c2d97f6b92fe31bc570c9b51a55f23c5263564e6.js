System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, tab, RoleData, proto, Net, ShowTips, ChannelMgr, Func, P8PostEventName, OpenFunctionMgr, LangMgr, AdMgr, _crd;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "./role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfP8PostEventName(extras) {
    _reporterNs.report("P8PostEventName", "../../channel/ChannelDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../mgr/LangMgr", _context.meta, extras);
  }

  _export("AdMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      RoleData = _unresolved_3.RoleData;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      Net = _unresolved_4.Net;
    }, function (_unresolved_5) {
      ShowTips = _unresolved_5.ShowTips;
    }, function (_unresolved_6) {
      ChannelMgr = _unresolved_6.ChannelMgr;
    }, function (_unresolved_7) {
      Func = _unresolved_7.Func;
    }, function (_unresolved_8) {
      P8PostEventName = _unresolved_8.P8PostEventName;
    }, function (_unresolved_9) {
      OpenFunctionMgr = _unresolved_9.OpenFunctionMgr;
    }, function (_unresolved_10) {
      LangMgr = _unresolved_10.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "24cc5wDVt1N9KaQsOlzenTg", "AdMgr", undefined);

      __checkObsolete__(['_decorator', 'log']);

      _export("AdMgr", AdMgr = class AdMgr {
        constructor() {
          this._map = new Map();

          /** 是否可展示广告 */
          this.isCanAd = false;

          /** 是否已初始化sdk */
          this.isHasSdk = false;

          /** 广告播放完成 */
          this.adCompleteCb = void 0;
        }

        static get ins() {
          if (this.instance == null) {
            this.instance = new AdMgr();
          }

          return this.instance;
        }

        init() {
          const advData = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.adv.data;

          for (let i = 0; i < advData.length; i++) {
            this._map.set(advData[i].type, advData[i].count);
          }
        }
        /** 初始化广告sdk */


        initSdk() {
          if (this.isHasSdk) return;
          this.isHasSdk = true;
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).initRewardedAd({}, retData => {
            if (retData) {
              retData.code = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).checkInt(retData.code);

              if (retData.code == 0) {
                //用户应该被奖励
                this.adCompleteCb && this.adCompleteCb({
                  code: 0
                });
              } else if (retData.code == 1) {//广告初始化成功
              } else if (retData.code == 2) {
                //广告加载完毕
                this.isCanAd = true;
              }
            }
          });
        }

        showAD(callBack) {
          this.isCanAd = false;
          this.adCompleteCb = callBack;
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).showRewardedAd();
        }

        refreshData(data) {
          this._map.set(data.type, data.count);
        }
        /**
         * 播放视频广告
         * @param type 广告类型
         * @param callBack 成功回调函数
         *  @param isSendMsg 是否发送观看广告成功消息
         */


        playVideoAd(type, callBack, isSendMsg = false, failCallback = null) {
          //处理sdk播放逻辑 
          let maxCount = this.getAdCountMaxByType(type);

          if (maxCount > -1 && this.getAdCountByType(type) >= this.getAdCountMaxByType(type)) {
            //ShowTips("廣告次數不足");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_ad_1"));
            failCallback && failCallback();
            return;
          } //观看成功逻辑


          let success = () => {
            if (isSendMsg) {
              let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Msg_WatchAdReq();
              msg.type = type;
              (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                error: Error()
              }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Ptl.WatchAdReq, msg);
            }

            if (callBack) {
              callBack();
            }
          };

          if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_SkipAd)) {
            success();
            log("----------月卡跳过广告---------");
            return;
          }

          if (this.isCanAd) {
            (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).postEvent((_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
              error: Error()
            }), P8PostEventName) : P8PostEventName).ad_click);
            this.showAD(retData => {
              console.log("广告播放完成、失败", retData.code);

              if (retData.code == 0) {
                success(); //观看成功

                (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                  error: Error()
                }), ChannelMgr) : ChannelMgr).postEvent((_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
                  error: Error()
                }), P8PostEventName) : P8PostEventName).ad_Impression);
              } else {
                (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                  error: Error()
                }), ShowTips) : ShowTips)("ad error" + retData.code);
                failCallback && failCallback();
              }
            });
          } else {
            console.log("sdk广告加载未成功");
            failCallback && failCallback();
          }
        }
        /* 根据广告类型返回 最大的广告次数和剩余的广告次数 */


        getAdCountByType(type) {
          return this._map.get(type) ? this._map.get(type) : 0;
        }

        getAdCountMaxByType(type) {
          const AdTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().AdvertPosTableByAdType.getValue(type);
          return AdTab.AdvertCount;
        }

      });

      AdMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c2d97f6b92fe31bc570c9b51a55f23c5263564e6.js.map
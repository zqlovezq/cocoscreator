System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, log, AbsControl, proto, Net, EventMgr, PayData, tab, ItemData, UIMgr, ViewName, ActivityData, ActivityControl, RoleData, LoginData, ChannelMgr, Global, P8PostEventName, Fixed, CommonTipsPop, CommonTipsPopCloseType, LangMgr, _dec, _class, _class2, _crd, ccclass, property, PayControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayData(extras) {
    _reporterNs.report("PayData", "./PayData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../activity/ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityControl(extras) {
    _reporterNs.report("ActivityControl", "../activity/ActivityControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginData(extras) {
    _reporterNs.report("LoginData", "../login/LoginData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../../../Global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfP8PostEventName(extras) {
    _reporterNs.report("P8PostEventName", "../../../channel/ChannelDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFixed(extras) {
    _reporterNs.report("Fixed", "../../../framework/collision/Fixed", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPopCloseType(extras) {
    _reporterNs.report("CommonTipsPopCloseType", "../common/CommonTipsPop", _context.meta, extras);
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
      log = _cc.log;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      Net = _unresolved_3.Net;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      PayData = _unresolved_5.PayData;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      ItemData = _unresolved_7.ItemData;
    }, function (_unresolved_8) {
      UIMgr = _unresolved_8.UIMgr;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      ActivityData = _unresolved_10.ActivityData;
    }, function (_unresolved_11) {
      ActivityControl = _unresolved_11.ActivityControl;
    }, function (_unresolved_12) {
      RoleData = _unresolved_12.RoleData;
    }, function (_unresolved_13) {
      LoginData = _unresolved_13.LoginData;
    }, function (_unresolved_14) {
      ChannelMgr = _unresolved_14.ChannelMgr;
    }, function (_unresolved_15) {
      Global = _unresolved_15.Global;
    }, function (_unresolved_16) {
      P8PostEventName = _unresolved_16.P8PostEventName;
    }, function (_unresolved_17) {
      Fixed = _unresolved_17.default;
    }, function (_unresolved_18) {
      CommonTipsPop = _unresolved_18.CommonTipsPop;
      CommonTipsPopCloseType = _unresolved_18.CommonTipsPopCloseType;
    }, function (_unresolved_19) {
      LangMgr = _unresolved_19.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bce2fS3pB9Ou7NSZKqE2IHk", "PayControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * PayControl
       * zhudingchao
       * Wed Jun 26 2024 10:38:41 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/pay/PayControl.ts
       *
       */

      _export("PayControl", PayControl = (_dec = ccclass('PayControl'), _dec(_class = (_class2 = class PayControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor(...args) {
          super(...args);
          this.payCallBack = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new PayControl();
          }

          return this._instance;
        }

        purge() {}

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetPayInfoRsp, this.on_s2c_GetPayInfoRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.StartPayRsp, this.on_s2c_StartPayRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DeliverGoodsPush, this.on_s2c_DeliverGoodsPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.EndPayRsp, this.on_s2c_EndPayRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.PayByVoucherRsp, this.on_s2c_PayByVoucherRsp, this);
        }

        request() {
          this.requestGetPayInfo();
        }

        requestGetPayInfo() {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetPayInfoReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetPayInfoReq, msg);
        }

        requestPay(rechargeId, callback) {
          let voucherNum = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Voucher);
          let rechargeTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RechargeTableById.getValue(rechargeId);
          this.payCallBack = callback;
          let price = rechargeTable[(_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).channelTab.Currency];

          if (voucherNum >= price) {
            // ShowTips("弹出使用代金券界面");
            let tips = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_voucher_1", [price]);
            (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
              error: Error()
            }), CommonTipsPop) : CommonTipsPop).create(tips, closeType => {
              if (closeType == (_crd && CommonTipsPopCloseType === void 0 ? (_reportPossibleCrUseOfCommonTipsPopCloseType({
                error: Error()
              }), CommonTipsPopCloseType) : CommonTipsPopCloseType).confirm) {
                let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Msg_PayByVoucherReq();
                msg.rechargeId = rechargeId;
                (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                  error: Error()
                }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Ptl.PayByVoucherReq, msg);
              } else {
                console.log("cancel");
              }
            });
            return;
          }

          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_StartPayReq();
          msg.rechargeId = rechargeId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.StartPayReq, msg);
        }

        on_s2c_GetPayInfoRsp(msg) {
          (_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
            error: Error()
          }), PayData) : PayData).ins.payInfoMsg = msg;
        }

        on_s2c_DeliverGoodsPush(msg) {
          let rechargeTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RechargeTableById.getValue(msg.rechargeId);

          if (rechargeTable) {
            if (rechargeTable.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).GoodsType.GoodsType_FirstRecharge) {
              (_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
                error: Error()
              }), PayData) : PayData).ins.firstRechargeSucc(msg.rechargeId);
            } else if (rechargeTable.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).GoodsType.GoodsType_BreakEgg) {
              (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                error: Error()
              }), ActivityData) : ActivityData).ins.breakEggMsg = null;
            } else if (rechargeTable.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).GoodsType.GoodsType_MonthlyPass) {
              (_crd && ActivityControl === void 0 ? (_reportPossibleCrUseOfActivityControl({
                error: Error()
              }), ActivityControl) : ActivityControl).ins.requestGetMonthlyPassInfo();
            }

            let money = rechargeTable.PriceDollar;

            if (money == 99) {
              (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                error: Error()
              }), ChannelMgr) : ChannelMgr).postEvent((_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
                error: Error()
              }), P8PostEventName) : P8PostEventName).pay_0_99);
            } else if (money == 999) {
              (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                error: Error()
              }), ChannelMgr) : ChannelMgr).postEvent((_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
                error: Error()
              }), P8PostEventName) : P8PostEventName).pay_10);
            } else if (money == 4999) {
              (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                error: Error()
              }), ChannelMgr) : ChannelMgr).postEvent((_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
                error: Error()
              }), P8PostEventName) : P8PostEventName).pay_50);
            } else if (money == 9999) {
              (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                error: Error()
              }), ChannelMgr) : ChannelMgr).postEvent((_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
                error: Error()
              }), P8PostEventName) : P8PostEventName).pay_100);
            }
          }

          if (this.payCallBack) {
            this.payCallBack(msg);
            this.payCallBack = null;
          }

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: msg.rewards
          });
        }

        on_s2c_EndPayRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {}
        }

        on_s2c_StartPayRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            if ((_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).isDevChannel) {
              let sedMsg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Msg_EndPayReq();
              sedMsg.orderId = msg.orderId;
              (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                error: Error()
              }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Ptl.EndPayReq, sedMsg);
            } else {
              //SDK支付
              let t_obj = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.sdkRole();
              t_obj.sign = msg.mobile37Sign || "";
              t_obj.time = msg.mobile37SignTime || (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.getServerUtcTime();
              t_obj.onLineTime = "1";
              t_obj.objJson = msg.orderId;
              t_obj.orderId = msg.orderId;
              t_obj.gameOrderIdTst = (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
                error: Error()
              }), Global) : Global).isDebug ? 1 : 0; //@"0"是正式环境订单  @"1" 是测试环境订单

              let rechangeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().RechargeTableById.getValue(msg.rechargeId);
              console.log(msg.rechargeId);
              t_obj.productld = rechangeTab[(_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                error: Error()
              }), ChannelMgr) : ChannelMgr).channelTab.ProductType];
              t_obj.ptPrice = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                error: Error()
              }), ChannelMgr) : ChannelMgr).getSdkRechargePrice(rechangeTab);
              t_obj.rmb = (_crd && Fixed === void 0 ? (_reportPossibleCrUseOfFixed({
                error: Error()
              }), Fixed) : Fixed).toFixed((_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                error: Error()
              }), ChannelMgr) : ChannelMgr).getSdkRechargePrice(rechangeTab) * 100);
              t_obj.productDesc = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(rechangeTab.Desc);
              t_obj.extraInfo = {
                svc_group: (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                  error: Error()
                }), LoginData) : LoginData).ins.loginGroup
              }; //@"0.01"

              t_obj.extraInfo = JSON.stringify(t_obj.extraInfo);
              t_obj.ratio = 10;
              t_obj.goodNum = 1;
              t_obj.buyTitle = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(rechangeTab.Desc);
              t_obj.buyName = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(rechangeTab.Desc);
              t_obj.productDesc = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(rechangeTab.Desc);
              (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                error: Error()
              }), ChannelMgr) : ChannelMgr).pay(t_obj);
            }
          }
        }

        on_s2c_PayByVoucherRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            log("代金券充值 ===", msg);
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a62e0b895af1376bde2aef83b9b5b479b98b2ffe.js.map
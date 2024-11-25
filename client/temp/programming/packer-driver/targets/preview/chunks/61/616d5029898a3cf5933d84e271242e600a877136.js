System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, log, AbsControl, EventMgr, proto, ActivityData, Net, LocalEvent, ActivityRed, RedMgr, RedDotType, RoleData, TaskData, UIMgr, ViewName, _dec, _class, _class2, _crd, ccclass, property, ActivityControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "./ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityRed(extras) {
    _reporterNs.report("ActivityRed", "./ActivityRed", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskData(extras) {
    _reporterNs.report("TaskData", "../task/TaskData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
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
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      ActivityData = _unresolved_4.ActivityData;
    }, function (_unresolved_5) {
      Net = _unresolved_5.Net;
    }, function (_unresolved_6) {
      LocalEvent = _unresolved_6.LocalEvent;
    }, function (_unresolved_7) {
      ActivityRed = _unresolved_7.ActivityRed;
    }, function (_unresolved_8) {
      RedMgr = _unresolved_8.RedMgr;
    }, function (_unresolved_9) {
      RedDotType = _unresolved_9.RedDotType;
    }, function (_unresolved_10) {
      RoleData = _unresolved_10.RoleData;
    }, function (_unresolved_11) {
      TaskData = _unresolved_11.TaskData;
    }, function (_unresolved_12) {
      UIMgr = _unresolved_12.UIMgr;
    }, function (_unresolved_13) {
      ViewName = _unresolved_13.ViewName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "916c53DKhJOX6C0s524qJmc", "ActivityControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ActivityControl
       * zhudingchao
       * Wed Jun 19 2024 14:54:21 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/activity/ActivityControl.ts
       *
       */

      _export("ActivityControl", ActivityControl = (_dec = ccclass('ActivityControl'), _dec(_class = (_class2 = class ActivityControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new ActivityControl();
          }

          return this._instance;
        }

        purge() {}

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.LimitedRewardPush, this.on_s2c_LimitedRewardPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetLimitedRewardRsp, this.on_s2c_GetLimitedRewardRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DailyRewardPush, this.on_s2c_DailyRewardPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetDailyRewardRsp, this.on_s2c_GetDailyRewardRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.HeroCollectionPush, this.on_s2c_HeroCollectionPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetHeroCollectionRewardRsp, this.on_s2c_GetHeroCollectionRewardRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BreakEggPush, this.on_s2c_BreakEggPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetPrivilegeInfoRsp, this.on_s2c_GetMonthlyPassInfoRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceivePrivilegeDailyRewardsRsp, this.on_s2c_ReceiveMonthlyPassDailyRewardsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveMonthlyPassAdditionalRewardsRsp, this.on_s2c_ReceiveMonthlyPassAllBoughtRewardsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.VipLevelUpPush, this.on_s2c_VipLevelUpPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetVipInfoRsp, this.on_s2c_GetVipInfoRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveVipDailyGiftRsp, this.on_s2c_ReceiveVipDailyGiftRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyVipGiftRsp, this.on_s2c_BuyVipGiftRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ActivitiesPush, this.on_s2c_BuyVipGiftRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetActivityHeroGrowMapRsp, this.on_s2c_GetActivityHeroGrowMapRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetActivityGachaUpMapRsp, this.on_s2c_GetActivityGachaUpMapRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveActivityGachaUpTasksRewardsRsp, this.on_s2c_ReceiveActivityGachaUpTasksRewardsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetCumulativeRechargeMapRsp, this.on_s2c_GetCumulativeRechargeMapRsp, this);
          (_crd && ActivityRed === void 0 ? (_reportPossibleCrUseOfActivityRed({
            error: Error()
          }), ActivityRed) : ActivityRed).ins.init();
        }

        request() {
          this.requestGetMonthlyPassInfo();
          this.requesGetVipInfo();
          this.requestGetActivityHeroGrowInfo();
          this.requestGetActivityGachaUp();
          this.requesGetCumulativeRecharge();
        }

        requestLimitedReward(id) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetLimitedRewardReq();
          msg.id = id;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetLimitedRewardReq, msg);
        }

        requestGetDailyReward(id, day) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetDailyRewardReq();
          msg.id = id;
          msg.day = day;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetDailyRewardReq, msg);
        }
        /**
         * 请求抽卡up活动
         */


        requestReceiveActivityGachaUpTasksRewards(activityID) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ReceiveActivityGachaUpTasksRewardsReq();
          msg.activityId = activityID;
          msg.taskIds = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getAllUpCanReceiveTasks(activityID);
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveActivityGachaUpTasksRewardsReq, msg);
        }
        /**
        * 请求抽卡up活动
        */


        requestGetActivityGachaUp() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetActivityGachaUpMapReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetActivityGachaUpMapReq, msg);
        }
        /**
        * 请求养成活动信息
        */


        requestGetActivityHeroGrowInfo() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetActivityHeroGrowMapReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetActivityHeroGrowMapReq, msg);
        }
        /**
        * 请求领取累计充值奖励
        */


        requestReceiveCumulativeRechargeReward(rewardId) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ReceiveCumulativeRechargeRewardReq();
          msg.rewardId = rewardId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveCumulativeRechargeRewardReq, msg);
        }
        /**
         * 请求月卡信息
         */


        requestGetMonthlyPassInfo() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetPrivilegeInfoReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetPrivilegeInfoReq, msg);
        }

        requestGetHeroCollectionReward(id) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetHeroCollectionRewardReq();
          msg.id = id;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetHeroCollectionRewardReq, msg);
        }
        /**
         * 请求领取月卡每日奖励信息
         */


        requestReceiveMonthlyPassDailyRewards(type) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ReceivePrivilegeDailyRewardsReq();
          msg.type = type;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceivePrivilegeDailyRewardsReq, msg);
        }
        /**
          * 请求领取月卡加码奖励
          */


        requestReceiveMonthlyPassAllBoughtRewards() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ReceiveMonthlyPassAdditionalRewardsReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveMonthlyPassAdditionalRewardsReq, msg);
        }
        /**
         * 请求获取vip信息
         */


        requesGetVipInfo() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetVipInfoReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetVipInfoReq, msg);
        }
        /**
        * 请求领取Vip每日礼包
        */


        requesReceiveVipDailyGift() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ReceiveVipDailyGiftReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveVipDailyGiftReq, msg);
        }
        /**
        * 请求领取Vip每日礼包
        */


        requesBuyVipGift(vipLevel) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_BuyVipGiftReq();
          msg.vipLevel = vipLevel;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyVipGiftReq, msg);
        }
        /**
        * 获取累计充值活动信息
        */


        requesGetCumulativeRecharge() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetCumulativeRechargeMapReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetCumulativeRechargeMapReq, msg);
        }

        on_s2c_GetCumulativeRechargeMapRsp(msg) {
          (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.initActivityRecharge(msg);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Combine_Recharge);
        } // 限时奖励消息推送


        on_s2c_LimitedRewardPush(msg) {
          (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.limitedRewardMsg = msg;
          log("收到限制奖励推送==", msg);
        } // 限时奖励消息推送


        on_s2c_GetLimitedRewardRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.limitedRewardMsg = null;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).LimitedBenefits_Change);
          }
        } // 每日奖励推送


        on_s2c_DailyRewardPush(msg) {
          (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.addDailyRewardMsg(msg);
          log("签到奖励=======", msg);
        } // 领取每日奖励


        on_s2c_GetDailyRewardRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.getDailyRewardSucc(msg);
          }
        }
        /**舰队启航 */


        on_s2c_HeroCollectionPush(msg) {
          (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.heroCollectionMsg = msg;
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroRoad);
          log("舰队启航数据", msg);
        } // 领取舰队启航奖励


        on_s2c_GetHeroCollectionRewardRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.getHeroCollectionRewardSucc(msg.id);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).HeroRoad);
          }
        }
        /**砸金鸡活动 */


        on_s2c_BreakEggPush(msg) {
          (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.breakEggMsg = msg;
          log("砸金鸡活动数据", msg);
        }
        /**月卡信息 */


        on_s2c_GetMonthlyPassInfoRsp(msg) {
          (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.monthlyPassInfo = msg;
          log("月卡数据==", msg);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).MonthlyCard);
        } // 领取月卡每日奖励


        on_s2c_ReceiveMonthlyPassDailyRewardsRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            var info = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.monthlyPassInfo.PrivilegeMap;

            if (info[msg.type]) {
              info[msg.type].isDailyReceived = true;
            }

            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).MonthlyCard);
          }
        } // 领取月卡加码奖励


        on_s2c_ReceiveMonthlyPassAllBoughtRewardsRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.monthlyPassInfo.isReceivedMonthlyPassAddtional = true;
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).MonthlyCard);
          }
        } // vip等级提升


        on_s2c_VipLevelUpPush(msg) {
          if ((_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.vipMsg) {
            (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.vipMsg.vipLevel = msg.vipLevel;
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.vipLevel = msg.vipLevel;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).VipLevel_Change);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Vip_Buy);
          }
        } // vip信息返回


        on_s2c_GetVipInfoRsp(msg) {
          (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.vipMsg = msg;
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Vip);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Vip_Buy);
        } // vip每日礼包领取返回


        on_s2c_ReceiveVipDailyGiftRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.vipMsg.isDailyGiftReceived = true;
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Vip);
          }
        } // vip专属礼包购买返回


        on_s2c_BuyVipGiftRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.vipMsg.boughtVipGifts.push(msg.vipLevel);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Vip_Buy);
          }
        }

        on_s2c_ActivitiesPush(msg) {
          (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.initOpenActivityMap(msg.activities);
        } // 养成活动信息返回


        on_s2c_GetActivityHeroGrowMapRsp(msg) {
          (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.initActivityHeroGrow(msg);
        } // 抽卡up活动


        on_s2c_GetActivityGachaUpMapRsp(msg) {
          if (msg.activityGachaUpMap) {
            (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
              error: Error()
            }), TaskData) : TaskData).ins.initGachaTasks(msg);
          }
        } // 领取抽卡奖励


        on_s2c_ReceiveActivityGachaUpTasksRewardsRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            });
            (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
              error: Error()
            }), TaskData) : TaskData).ins.receiveGachaUpTaskRewardSucc(msg.taskIds);
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=616d5029898a3cf5933d84e271242e600a877136.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "client_protocol", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29", "__unresolved_30", "__unresolved_31", "__unresolved_32"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, js, log, AbsControl, Net, EventMgr, proto, RoleData, LocalEvent, HeroControl, EquipControl, EquipData, RareBookData, ItemData, MailControl, TaskControl, PrestigeControl, tab, ShowTips, LangMgr, PayControl, RedMgr, RedDotType, ActivityControl, FriendControl, SceneMgr, FengyunRankData, OpenFunctionMgr, ActivityData, LoginData, ChannelMgr, P8PostEventName, Func, GameplayControl, Http, SettingRedManager, RoleControl, _crd, ccclass, property;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroControl(extras) {
    _reporterNs.report("HeroControl", "../hero/HeroControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipControl(extras) {
    _reporterNs.report("EquipControl", "../equip/EquipControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "../equip/EquipData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "../rareBook/RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailControl(extras) {
    _reporterNs.report("MailControl", "../mail/MailControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskControl(extras) {
    _reporterNs.report("TaskControl", "../task/TaskControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrestigeControl(extras) {
    _reporterNs.report("PrestigeControl", "../prestige/PrestigeControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayControl(extras) {
    _reporterNs.report("PayControl", "../pay/PayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityControl(extras) {
    _reporterNs.report("ActivityControl", "../activity/ActivityControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendControl(extras) {
    _reporterNs.report("FriendControl", "../friends/FriendControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneMgr(extras) {
    _reporterNs.report("SceneMgr", "../../mgr/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFengyunRankData(extras) {
    _reporterNs.report("FengyunRankData", "../fengyunRanking/FengyunRankData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../activity/ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginData(extras) {
    _reporterNs.report("LoginData", "../login/LoginData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfP8PostEventName(extras) {
    _reporterNs.report("P8PostEventName", "../../../channel/ChannelDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayControl(extras) {
    _reporterNs.report("GameplayControl", "../jianghu/GameplayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttp(extras) {
    _reporterNs.report("Http", "../../net/Http", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingRedManager(extras) {
    _reporterNs.report("SettingRedManager", "./SettingRedManager", _context.meta, extras);
  }

  _export("RoleControl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      js = _cc.js;
      log = _cc.log;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      Net = _unresolved_3.Net;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_5) {
      RoleData = _unresolved_5.RoleData;
    }, function (_unresolved_6) {
      LocalEvent = _unresolved_6.LocalEvent;
    }, function (_unresolved_7) {
      HeroControl = _unresolved_7.HeroControl;
    }, function (_unresolved_8) {
      EquipControl = _unresolved_8.EquipControl;
    }, function (_unresolved_9) {
      EquipData = _unresolved_9.EquipData;
    }, function (_unresolved_10) {
      RareBookData = _unresolved_10.RareBookData;
    }, function (_unresolved_11) {
      ItemData = _unresolved_11.ItemData;
    }, function (_unresolved_12) {
      MailControl = _unresolved_12.MailControl;
    }, function (_unresolved_13) {
      TaskControl = _unresolved_13.TaskControl;
    }, function (_unresolved_14) {
      PrestigeControl = _unresolved_14.PrestigeControl;
    }, function (_unresolved_15) {
      tab = _unresolved_15.tab;
    }, function (_unresolved_16) {
      ShowTips = _unresolved_16.ShowTips;
    }, function (_unresolved_17) {
      LangMgr = _unresolved_17.LangMgr;
    }, function (_unresolved_18) {
      PayControl = _unresolved_18.PayControl;
    }, function (_unresolved_19) {
      RedMgr = _unresolved_19.RedMgr;
    }, function (_unresolved_20) {
      RedDotType = _unresolved_20.RedDotType;
    }, function (_unresolved_21) {
      ActivityControl = _unresolved_21.ActivityControl;
    }, function (_unresolved_22) {
      FriendControl = _unresolved_22.FriendControl;
    }, function (_unresolved_23) {
      SceneMgr = _unresolved_23.SceneMgr;
    }, function (_unresolved_24) {
      FengyunRankData = _unresolved_24.FengyunRankData;
    }, function (_unresolved_25) {
      OpenFunctionMgr = _unresolved_25.OpenFunctionMgr;
    }, function (_unresolved_26) {
      ActivityData = _unresolved_26.ActivityData;
    }, function (_unresolved_27) {
      LoginData = _unresolved_27.LoginData;
    }, function (_unresolved_28) {
      ChannelMgr = _unresolved_28.ChannelMgr;
    }, function (_unresolved_29) {
      P8PostEventName = _unresolved_29.P8PostEventName;
    }, function (_unresolved_30) {
      Func = _unresolved_30.Func;
    }, function (_unresolved_31) {
      GameplayControl = _unresolved_31.GameplayControl;
    }, function (_unresolved_32) {
      Http = _unresolved_32.default;
    }, function (_unresolved_33) {
      SettingRedManager = _unresolved_33.SettingRedManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d2242uMKnxNXLhi8s9bXXjc", "RoleControl", undefined);

      __checkObsolete__(['Node', '_decorator', 'js', 'log', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RoleControl", RoleControl = class RoleControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);
          this.noticeRed = false;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new RoleControl();
          }

          return this._instance;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SyncRolePush, this.on_s2c_SyncRolePush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetMainStageInfoRsp, this.on_s2c_GetMainStageInfoRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetStaminaInfoRsp, this.on_s2c_GetStaminaInfoRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyStaminaRsp, this.on_s2c_BuyStaminaRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyGoldRsp, this.on_s2c_BuyGoldRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UseRedeemCodeRsp, this.on_s2c_UseRedeemCodeRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.VipBonusPush, this.on_s2c_VipBonusPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetServerTimeRsp, this.on_s2c_GetServerTime, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).LocalEvent_Common_Net_ErrorCode, this.onNetCommonNetErrorCode, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).RedStamina, this.buyStaminaRedPoint, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).notice, this.red_Notice, this);
        } //----------------处理回调---------------------


        on_s2c_SyncRolePush(msg) {
          //只做保存数据
          this.requestGetServerTime();
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.setData(msg.role);
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.initServerTimer(msg.role.serverTime);

          if ((_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.isCreatRole) {
            (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).createRole((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.sdkRole());
          }

          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).intoServer((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.sdkRole());
          (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.initOpenActivityMap(msg.role.activities);
          (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.setOpenFunctionData((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.openFunctions); //获取基础数据 拿到英雄数据后再做场景跳转
          // ItemControl.ins.requestItems()

          (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.initData();
          (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
            error: Error()
          }), EquipControl) : EquipControl).ins.requestEquips();
          (_crd && HeroControl === void 0 ? (_reportPossibleCrUseOfHeroControl({
            error: Error()
          }), HeroControl) : HeroControl).ins.requestHeros();
          (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.initEquipData();
          (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.initBookData();
          (_crd && MailControl === void 0 ? (_reportPossibleCrUseOfMailControl({
            error: Error()
          }), MailControl) : MailControl).ins.requestGetMails();
          (_crd && TaskControl === void 0 ? (_reportPossibleCrUseOfTaskControl({
            error: Error()
          }), TaskControl) : TaskControl).ins.request();
          (_crd && PrestigeControl === void 0 ? (_reportPossibleCrUseOfPrestigeControl({
            error: Error()
          }), PrestigeControl) : PrestigeControl).ins.request();
          (_crd && PayControl === void 0 ? (_reportPossibleCrUseOfPayControl({
            error: Error()
          }), PayControl) : PayControl).ins.request();
          (_crd && ActivityControl === void 0 ? (_reportPossibleCrUseOfActivityControl({
            error: Error()
          }), ActivityControl) : ActivityControl).ins.request();
          (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
            error: Error()
          }), FriendControl) : FriendControl).ins.request();
          (_crd && FengyunRankData === void 0 ? (_reportPossibleCrUseOfFengyunRankData({
            error: Error()
          }), FengyunRankData) : FengyunRankData).ins.initMapData(msg.role.honorRollInfo);
          (_crd && GameplayControl === void 0 ? (_reportPossibleCrUseOfGameplayControl({
            error: Error()
          }), GameplayControl) : GameplayControl).ins.request();
          this.checkFighting();
          this.requestStaminaInfo();
          this.setVipPrivilege();

          if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.todayLoginTimes == 1) {
            var day = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getCreateTimeDay();

            if (day == 2) {
              (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                error: Error()
              }), ChannelMgr) : ChannelMgr).postEvent((_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
                error: Error()
              }), P8PostEventName) : P8PostEventName).day2_login);
            }
          }
        }
        /**
         * 请求获得体力相关信息
         */


        requestStaminaInfo() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetStaminaInfoReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetStaminaInfoReq, msg);
        }
        /**
        * 请求获得服务器时间
        */


        requestGetServerTime() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetServerTimeReq();
          msg.clientTime = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.serverTimer;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetServerTimeReq, msg);
        }
        /**
         * 请求购买体力
         */


        requestBuyStamina(type, num) {
          if (num === void 0) {
            num = 1;
          }

          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_BuyStaminaReq();
          msg.type = type;
          msg.num = num;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyStaminaReq, msg);
        }
        /** 
         * 请求购买金币 
         */


        requestBuyGold(type) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_BuyGoldReq();
          msg.type = type;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyGoldReq, msg);
        }
        /**
           * 请求使用兑换码
           */


        requestUseRedeemCode(code) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_UseRedeemCodeReq();
          msg.code = code;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UseRedeemCodeReq, msg);
        }

        updateNoticeRed() {
          var addr = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.loginServerTab.NoticeAddr;
          (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
            error: Error()
          }), Http) : Http).request({
            host: addr,
            method: "GET",
            reqParam: "",
            cb: responseJson => {
              // console.log(responseJson)
              if (responseJson && responseJson.length > 0) {
                var notices = responseJson;
                notices.sort((a, b) => {
                  return b.created_at - a.created_at;
                });
                var newNotice = notices[0];
                var lastTimer = Number((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                  error: Error()
                }), Func) : Func).getItem("notice_created_at"));

                if (lastTimer && lastTimer != 0) {
                  this.noticeRed = newNotice.created_at > lastTimer;
                } else {
                  this.noticeRed = true;
                } // callBack(this.noticeRed);


                (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
                  error: Error()
                }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
                  error: Error()
                }), RedDotType) : RedDotType).notice);
              }
            }
          });
        }

        checkFighting() {
          if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.fightingStageId) {
            if ((_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
              error: Error()
            }), SceneMgr) : SceneMgr).isFightScene()) {
              //身上有关卡id，还在战斗场景。
              console.warn("身上有关卡id，还在战斗场景。", (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.fightingStageId);
              return;
            }

            console.warn("在战斗中， 先清除战斗状态", (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.fightingStageId);
            var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_FinishStageReq();
            msg.result = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_FinishStageReq.Result.Quit;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.FinishStageReq, msg);
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.fightingStageId = 0;
          } else {
            //可能在战斗场景， 尝试退出
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).quitFight);
          }
        }
        /**
         * 错误码统一处理
         * @param pb 
         * @param ptl 
         */


        onNetCommonNetErrorCode(pb, ptl) {
          if (pb) {
            var errorCode = pb.error ? pb.error.code : 0;

            if (errorCode) {
              this.ShowErrorTips(errorCode, pb.error ? pb.error.message : "");

              if (errorCode == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).CommonErrorCode.Failed) {
                (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                  error: Error()
                }), Net) : Net).Disconnect();
              }
            }
          }
        }

        ShowErrorTips(errorCode, errMsg) {
          if (errMsg === void 0) {
            errMsg = "";
          }

          var key = js.formatStr("CommonErrorCode_%s", errorCode);
          var lab = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(key);

          if (key != lab) {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(key));
          }

          console.error("错误码：" + key, "server_err_msg：" + errMsg);
        } // 获取主线关卡信息


        on_s2c_GetMainStageInfoRsp(msg) {
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.mainStageInfo = msg;
          var newStageId = msg.clearedStageIds.length > 0 ? msg.clearedStageIds[msg.clearedStageIds.length - 1] : 0;

          if (newStageId > 0) {
            if (newStageId == 303) {
              var key = (_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
                error: Error()
              }), P8PostEventName) : P8PostEventName).dungeon_completed_3 + "_" + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.id;
              var isPost = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).getItem(key);

              if (!isPost) {
                (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                  error: Error()
                }), ChannelMgr) : ChannelMgr).postEvent((_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
                  error: Error()
                }), P8PostEventName) : P8PostEventName).dungeon_completed_3);
                (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                  error: Error()
                }), Func) : Func).setItem(key, true);
              }
            } else if (newStageId == 1004) {
              var _key = (_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
                error: Error()
              }), P8PostEventName) : P8PostEventName).dungeon_completed_10 + "_" + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.id;

              var _isPost = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).getItem(_key);

              if (!_isPost) {
                (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                  error: Error()
                }), ChannelMgr) : ChannelMgr).postEvent((_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
                  error: Error()
                }), P8PostEventName) : P8PostEventName).dungeon_completed_10);
                (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                  error: Error()
                }), Func) : Func).setItem(_key, true);
              }
            } else if (newStageId == 2005) {
              var _key2 = (_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
                error: Error()
              }), P8PostEventName) : P8PostEventName).dungeon_completed_20 + "_" + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.id;

              var _isPost2 = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).getItem(_key2);

              if (!_isPost2) {
                (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                  error: Error()
                }), ChannelMgr) : ChannelMgr).postEvent((_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
                  error: Error()
                }), P8PostEventName) : P8PostEventName).dungeon_completed_20);
                (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                  error: Error()
                }), Func) : Func).setItem(_key2, true);
              }
            }
          }
        } // 获取金币购买信息返回


        on_s2c_BuyGoldRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.refreshGoldHistory(msg.history);
          log("购买金币信息==", msg);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).GoldBuy);
        } // 获取体力信息返回


        on_s2c_GetStaminaInfoRsp(msg) {
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.staminaInfo = msg;
          log("体力信息==", msg);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).RedStamina);
        } // 请求购买体力返回


        on_s2c_BuyStaminaRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            if (msg.type) {
              (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.staminaInfo.remainBuyTimesMap[msg.type] = msg.remainBuyTimes;
            } else {
              (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.staminaInfo.remainBuyTimesMap[0] = msg.remainBuyTimes;
            }

            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).RedStamina);
          }
        } // 使用兑换码返回


        on_s2c_UseRedeemCodeRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {}
        } // vip特权推送


        on_s2c_VipBonusPush(msg) {
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.addPrivilege(msg.vipBonusMap);
        }

        on_s2c_GetServerTime(msg) {
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.initServerTimer(msg.serverTime);
        }
        /**
         * 购买体力红点
         * @returns 
         */


        buyStaminaRedPoint() {
          // 剩余广告买体力有次数
          var buyTimes = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.staminaInfo.remainBuyTimesMap[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BuyStaminaType.BuyStaminaType_WatchAdverts]; // 玩家体力不足

          var curStaminaCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(6);
          var maxStaminaCount = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().InitialStaminaMaxCount + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).VipBonus.VipBonus_StaminaLimit);
          var isStaminaEnough = curStaminaCount < maxStaminaCount; // 是否打开过界面

          var isCloseBuyPop = (_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
            error: Error()
          }), SettingRedManager) : SettingRedManager).ins.getSetting("RedStamina");
          return buyTimes > 0 && isStaminaEnough && !isCloseBuyPop;
        }

        red_Notice() {
          return this.noticeRed;
        }
        /* vip贵宾数据 */


        setVipPrivilege() {
          var vipBonusMap = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.vipBonusMap;
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.addPrivilege(vipBonusMap);
        }

      });

      RoleControl._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=74ce998f24040c3690c1f793c647183a0e2b42d2.js.map
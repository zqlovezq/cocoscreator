System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, RedMgr, RedDotType, ActivityData, tab, OpenFunctionMgr, _dec, _class, _class2, _crd, ccclass, property, ActivityRed;

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "./ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      RedMgr = _unresolved_2.RedMgr;
    }, function (_unresolved_3) {
      RedDotType = _unresolved_3.RedDotType;
    }, function (_unresolved_4) {
      ActivityData = _unresolved_4.ActivityData;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      OpenFunctionMgr = _unresolved_6.OpenFunctionMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "694a0e2TipP3K2K6+gyvNrD", "ActivityRed", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ActivityRed
       * zhudingchao
       * Fri Jun 28 2024 16:54:49 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/activity/ActivityRed.ts
       *
       */

      _export("ActivityRed", ActivityRed = (_dec = ccclass('ActivityRed'), _dec(_class = (_class2 = class ActivityRed {
        static get ins() {
          if (this.instance == null) {
            this.instance = new ActivityRed();
          }

          return this.instance;
        }

        init() {
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).NewPlayerSignIn, this.red_NewPlayerSignIn, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).SignIn, this.red_SignIn, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroRoad, this.red_HeroRoad, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).MonthlyCard, this.red_MonthlyCard, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Vip, this.red_Vip, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Vip_Buy, this.red_Vip_Buy, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Welfare_Open, this.red_wlfare_open, this);
        }

        red_wlfare_open() {
          return (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Welfare);
        }

        red_NewPlayerSignIn() {
          (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).VipBonusTable;
          let msg = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getDailyRewardMsgByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).DailyRewardType.DailyRewardType_NewServer);
          return msg && msg.activatedList.length > 0;
        }

        red_SignIn() {
          let msg = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getDailyRewardMsgByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).DailyRewardType.DailyRewardType_Daily);
          return msg && msg.activatedList.length > 0;
        }

        red_HeroRoad() {
          let msg = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.heroCollectionMsg;
          return msg && msg.activatedList.length > 0;
        }

        red_MonthlyCard() {
          if (!(_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_MonthlyPass)) {
            return false;
          }

          let msg = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.monthlyPassInfo;

          if (msg.PrivilegeMap && msg.PrivilegeMap[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PrivilegedType.PrivilegedType_MonthlyPass]) {
            if (!msg.PrivilegeMap[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PrivilegedType.PrivilegedType_MonthlyPass].isDailyReceived) {
              return true;
            }
          }

          if (msg.PrivilegeMap && msg.PrivilegeMap[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PrivilegedType.PrivilegedType_PremiumMonthlyPass]) {
            if (!msg.PrivilegeMap[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PrivilegedType.PrivilegedType_PremiumMonthlyPass].isDailyReceived) {
              return true;
            }
          }

          if (msg.isReceivedMonthlyPassAddtional) {
            return false;
          }

          if (msg.PrivilegeMap && msg.PrivilegeMap[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PrivilegedType.PrivilegedType_MonthlyPass] && msg.PrivilegeMap[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PrivilegedType.PrivilegedType_PremiumMonthlyPass]) {
            return true;
          }

          return false; // return msg&&msg.activatedList.length>0;
        }

        red_Vip() {
          if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Vip)) {
            let msg = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.vipMsg;
            return msg && !msg.isDailyGiftReceived;
          } else {
            return false;
          }
        }

        red_Vip_Buy() {
          if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Vip)) {
            let vipBonus = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().VipBonusTable;
            let vipLevel = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.vipMsg.vipLevel;
            let stateToChange = {};

            for (let key in vipBonus) {
              if (vipBonus[key].VipLv <= vipLevel) {
                let isBuy = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                  error: Error()
                }), ActivityData) : ActivityData).ins.vipMsg.boughtVipGifts.indexOf(vipBonus[key].VipLv) >= 0;
                stateToChange[vipBonus[key].VipLv + ""] = !isBuy;
              } else {
                stateToChange[vipBonus[key].VipLv + ""] = false;
              }
            }

            return stateToChange;
          } else {
            let vipBonus = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().VipBonusTable;
            let stateToChange = {};

            for (let key in vipBonus) {
              stateToChange[vipBonus[key].VipLv + ""] = false;
            }

            return stateToChange;
          }
        }

      }, _class2.instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=04b912d183cacb664a9330bdd991bd2191300e8b.js.map
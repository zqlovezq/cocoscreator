System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, EventMgr, LocalEvent, RedDotType, RedMgr, OpenFunctionMgr, ActivityOpenInfo, DEVELOPTYPE, PayData, TaskData, _dec, _class, _class2, _crd, ccclass, property, ActivityData;

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityOpenInfo(extras) {
    _reporterNs.report("ActivityOpenInfo", "./ActivityOpenInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMALLNAME(extras) {
    _reporterNs.report("MALLNAME", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDEVELOPTYPE(extras) {
    _reporterNs.report("DEVELOPTYPE", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayData(extras) {
    _reporterNs.report("PayData", "../pay/PayData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskData(extras) {
    _reporterNs.report("TaskData", "../task/TaskData", _context.meta, extras);
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
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      LocalEvent = _unresolved_4.LocalEvent;
    }, function (_unresolved_5) {
      RedDotType = _unresolved_5.RedDotType;
    }, function (_unresolved_6) {
      RedMgr = _unresolved_6.RedMgr;
    }, function (_unresolved_7) {
      OpenFunctionMgr = _unresolved_7.OpenFunctionMgr;
    }, function (_unresolved_8) {
      ActivityOpenInfo = _unresolved_8.ActivityOpenInfo;
    }, function (_unresolved_9) {
      DEVELOPTYPE = _unresolved_9.DEVELOPTYPE;
    }, function (_unresolved_10) {
      PayData = _unresolved_10.PayData;
    }, function (_unresolved_11) {
      TaskData = _unresolved_11.TaskData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8913E9v/FCPbdjold1Wzc0", "ActivityData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ActivityData
       * zhudingchao
       * Wed Jun 19 2024 14:53:46 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/activity/ActivityData.ts
       *
       */

      _export("ActivityData", ActivityData = (_dec = ccclass('ActivityData'), _dec(_class = (_class2 = class ActivityData {
        constructor() {
          this._limitedRewardMsg = void 0;
          this._dailyRewardMap = void 0;
          this._dailyRewardItemsMap = void 0;
          this._heroCollectionMsg = void 0;
          this._breakEggMsg = void 0;
          this._redPointMap = void 0;
          this._monthlyPassInfo = void 0;
          this._vipMsg = void 0;
          this._7GiftPackBuyState = new Map();
          this._heroGrowMap = new Map();
          this._heroUpArray = [];
          this._rechargeArray = [];
          this._rechargeMap = new Map();
          this._rechargeTabMap = new Map();

          /**活动开启数据map */
          this._openActMap = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new ActivityData();
          }

          return this._instance;
        }

        purge() {}

        set limitedRewardMsg(msg) {
          this._limitedRewardMsg = msg;
        }
        /**
         * 限时奖励消息
         */


        get limitedRewardMsg() {
          return this._limitedRewardMsg;
        }
        /**
         * 是否显示显示活动按钮
         * @returns 
         */


        isShowLimit() {
          if (!this.limitedRewardMsg) {
            return false;
          }

          return this.limitedRewardMsg.reward.itemId != 0 && this.limitedRewardMsg.reward.num != 0;
        }
        /**
         * 每日奖励数据map
         */


        get dailyRewardMap() {
          if (!this._dailyRewardMap) {
            this._dailyRewardMap = new Map();
          }

          return this._dailyRewardMap;
        }

        addDailyRewardMsg(msg) {
          this.dailyRewardMap.set(msg.id, msg);
          let tables = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().DailyRewardTable;
          let table = tables.find(a => a.Id == msg.id);
          msg["type"] = table ? table.Type : 0;

          if (table) {
            if (table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).DailyRewardType.DailyRewardType_NewServer) {
              (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
                error: Error()
              }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
                error: Error()
              }), RedDotType) : RedDotType).NewPlayerSignIn);
            } else if (table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).DailyRewardType.DailyRewardType_Daily) {
              (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
                error: Error()
              }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
                error: Error()
              }), RedDotType) : RedDotType).SignIn);
            }
          }
        }

        getDailyRewardSucc(msg) {
          this.addDailyRewardMsg(msg.data);
        }

        getDailyRewardMsgById(id) {
          return this.dailyRewardMap.get(id);
        }

        isOpenDailyAcivity(type) {
          let msg = this.getDailyRewardMsgByType(type);

          if (msg) {
            if (type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).DailyRewardType.DailyRewardType_NewServer) {
              return (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                error: Error()
              }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_NewServerSignIn);
            } else if (type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).DailyRewardType.DailyRewardType_Daily) {
              return (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                error: Error()
              }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_DailySignIn);
            }

            return true;
          } else {
            return false;
          }
        }

        get dailyRewardItemsMap() {
          if (!this._dailyRewardItemsMap) {
            this._dailyRewardItemsMap = new Map();
            let tabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().DailyRewardItemTable;

            for (let key in tabs) {
              let list = this._dailyRewardItemsMap.get(tabs[key].Id);

              if (!list) {
                list = [];

                this._dailyRewardItemsMap.set(tabs[key].Id, list);
              }

              list.push(tabs[key]);
            }
          }

          return this._dailyRewardItemsMap;
        }

        getDailyRewardMsgByType(type) {
          let msg = null;
          this.dailyRewardMap.forEach(value => {
            if (value["type"] == type) {
              msg = value;
              return msg;
            }
          });
          return msg;
        }

        getDailyRewrdItemsById(id) {
          return this.dailyRewardItemsMap.get(id);
        }
        /**舰队启航活动数据 */


        get heroCollectionMsg() {
          return this._heroCollectionMsg;
        }
        /**舰队启航活动数据 */


        set heroCollectionMsg(msg) {
          this._heroCollectionMsg = msg;
        }
        /**
         * 领取舰队启航奖励成功
         * @param id 
         */


        getHeroCollectionRewardSucc(id) {
          if (this.heroCollectionMsg) {
            this.heroCollectionMsg.rewardList.push(id);
            let index = this.heroCollectionMsg.activatedList.indexOf(id);

            if (index >= 0) {
              this.heroCollectionMsg.activatedList.splice(index, 1);
            }
          }
        }
        /**
         * 是否开启舰队启航活动
         */


        isOpenHeroCollectio() {
          return this.heroCollectionMsg ? true : false;
        }

        isHeroCollectioRedPoint() {
          return this.heroCollectionMsg && this.heroCollectionMsg.activatedList.length > 0;
        }
        /**砸金蛋活动数据 */


        get breakEggMsg() {
          return this._breakEggMsg;
        }

        set breakEggMsg(msg) {
          this._breakEggMsg = msg;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).BreakEgg_change);
        }
        /**
         * 是否开启砸金蛋活动
         * @returns 
         */


        isOpenBreakEgg() {
          if (this._breakEggMsg) {
            return true;
          }

          return false;
        }

        set monthlyPassInfo(msg) {
          this._monthlyPassInfo = msg;
        }
        /**
         * 月卡信息
         */


        get monthlyPassInfo() {
          return this._monthlyPassInfo;
        }

        get vipMsg() {
          return this._vipMsg;
        }

        set vipMsg(msg) {
          this._vipMsg = msg;
        }

        initOpenActivityMap(actMsg) {
          if (this._openActMap) {
            this._openActMap.clear();
          } else {
            this._openActMap = new Map();
          }

          this._heroUpArray = [];

          for (let key in actMsg) {
            let info = new (_crd && ActivityOpenInfo === void 0 ? (_reportPossibleCrUseOfActivityOpenInfo({
              error: Error()
            }), ActivityOpenInfo) : ActivityOpenInfo)();
            info.merge(actMsg[key]);

            this._openActMap.set(info.activityTable.Type, info);

            if (info.isOpen() && info.activityTable.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityGachaUp) {
              this._heroUpArray.push(info);
            }

            if (info.isOpen() && info.activityTable.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityCumulativeRecharge) {
              this._rechargeArray.push(info);
            }
          }

          if (this._heroUpArray.length > 1) {
            // 按照过期时间排序
            this._heroUpArray.sort((act1, act2) => {
              return act1.endTime - act2.endTime;
            });
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).openFunctions);
        }

        GachaUpIsOpen() {
          return this._heroUpArray.length > 0;
        } // 获取所有英雄up活动数据


        getAllUpData() {
          return this._heroUpArray;
        }

        getAllUpTasks(activityId) {
          for (let i = 0; i < this._heroUpArray.length; i++) {
            const activityInfo = this._heroUpArray[i];

            if (activityInfo.TabId === activityId) {
              const actTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GachaUpTableById.getValue(activityInfo.activityTable.Param1);
              return actTab.TaskIds;
            }
          }
        }

        getAllUpCanReceiveTasks(activityId) {
          const arr = [];
          const tasks = this.getAllUpTasks(activityId);

          for (let i = 0; i < tasks.length; i++) {
            const taskInfo = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
              error: Error()
            }), TaskData) : TaskData).ins.getGachaUpTaskInfo(tasks[i]);

            if (taskInfo.isCanReceived) {
              arr.push(taskInfo.id);
            }
          }

          return arr;
        } // 获取所有已经领取的taskId


        getAllUpGotTaskProgress(activityId) {
          const tasks = this.getAllUpTasks(activityId);
          const max = tasks.length;
          let cur = 0;

          for (let i = 0; i < tasks.length; i++) {
            const taskInfo = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
              error: Error()
            }), TaskData) : TaskData).ins.getGachaUpTaskInfo(tasks[i]);

            if (taskInfo.isReceived) {
              cur++;
            }
          }

          return cur / max;
        } // 获取所有的活动分组


        getAllActivityGroup() {
          const arr = [];

          this._openActMap.forEach((value, key) => {
            if (key === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityShowGroup && value.isOpen()) {
              arr.push(value);
            }
          });

          return arr;
        }

        getActivityIsOpenByOPName(opName) {
          if (this._openActMap.has(opName)) {
            return this._openActMap.get(opName).isOpen();
          } else {
            return true;
          }
        }
        /* 判断7日英雄武器礼包是否购买完 */


        refresh7GiftPackBuyState() {
          this._7GiftPackBuyState.clear();

          this._7GiftPackBuyState.set((_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).HERO, false);

          this._7GiftPackBuyState.set((_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).BOOK, false);

          for (let i = (_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).HERO; i <= (_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).BOOK; i++) {
            for (let k = 0; k < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().NewPlayerDailyGiftTable.length; k++) {
              const _giftTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().NewPlayerDailyGiftTable[k];

              if (i === _giftTab.Group) {
                if ((_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
                  error: Error()
                }), PayData) : PayData).ins.payInfoMsg.newPlayerDailyGiftInfo.boughtGoodsIds.indexOf(_giftTab.Id) === -1) {
                  this._7GiftPackBuyState.set(i, true);

                  break;
                }
              }
            }
          }

          console.log(this._7GiftPackBuyState);
        }

        get7GiftPackBuyState() {
          return this._7GiftPackBuyState;
        }
        /* 是否有可领取的萌新签到奖励 */


        getNewPlayerSignAwards() {
          const msg = ActivityData.ins.getDailyRewardMsgByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).DailyRewardType.DailyRewardType_NewServer);

          if (!msg) {
            return false;
          }

          const tabs = ActivityData.ins.getDailyRewrdItemsById(msg.id);

          for (let i = 0; i < tabs.length; i++) {
            let day = tabs[i].Index;
            let index = msg.activatedList.indexOf(day);

            if (index >= 0) {
              return true;
            }
          }

          return false;
        }

        initActivityHeroGrow(msg) {
          this._heroGrowMap.clear();

          for (let key in msg.activityHeroGrowMap) {
            const value = msg.activityHeroGrowMap[key];

            this._heroGrowMap.set(value.activityId, value);
          }
        }

        initActivityRecharge(msg) {
          this._rechargeMap.clear();

          for (let key in msg.cumulativeRechargeMap) {
            const value = msg.cumulativeRechargeMap[key];

            this._rechargeMap.set(value.activityId, value);
          }
        }

        getRechargeServerData(activityId) {
          return this._rechargeMap.get(activityId);
        }

        getHeroGrowData(activityId) {
          return this._heroGrowMap.get(activityId);
        }

        getRechargeData(activityId) {
          for (let i = 0; i < this._rechargeArray.length; i++) {
            if (activityId === this._rechargeArray[i].TabId) {
              return this._rechargeArray[i];
            }
          }
        }

        refreshHeroGrowData(activityId, star) {
          const heroGrowData = this.getHeroGrowData(activityId);
          heroGrowData.receivedFreeRewardStars.push(star);
        } // 获取当前养成计划数据列表


        getHeroGrowTabs(activityId, itemId) {
          const tabArr = [];
          const heroGrowData = this.getHeroGrowData(activityId);

          for (let i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ActivityHeroGrowTable.length; i++) {
            const tabData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ActivityHeroGrowTable[i];
            const heroId = tabData.HeroId;

            if (heroId === itemId) {
              tabArr.push(tabData);

              if (!heroGrowData.boughtNotFreeRewardTimesMap[tabData.HeroStar]) {
                heroGrowData.boughtNotFreeRewardTimesMap[tabData.HeroStar] = 0;
              }
            }
          }

          return tabArr;
        } // 通过mallId获取mallItem数据


        getMallItemTabsById(mallName) {
          const tabs = [];

          for (let k = 0; k < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MallItemTabe.length; k++) {
            const mallTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().MallItemTabe[k];

            if (mallTab.MallId === mallName) {
              tabs.push(mallTab);
            }
          }

          return tabs;
        } // 通过tabid获取所有的累充的表格数据


        getAllTabsByRechageId(tabId) {
          this._rechargeTabMap.clear();

          const tabs = [];

          for (let k = 0; k < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ActivityCumulativeRechargeTable.length; k++) {
            const rechargeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ActivityCumulativeRechargeTable[k];

            if (rechargeTab.ActivityId === tabId) {
              tabs.push(rechargeTab);

              this._rechargeTabMap.set(rechargeTab.IndexId, rechargeTab);
            }
          }

          return tabs;
        }

        getRechargeTabById(id) {
          return this._rechargeTabMap.get(id);
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b3bcdcfcf2761fa0198444a58637144d4bb0a4bb.js.map
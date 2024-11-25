System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, sp, Sprite, ViewPop, proto, Net, EventMgr, ShowTips, UIMgr, ViewName, AdMgr, tab, ItemData, createAnimation, GameUtil, setTextTime_2, BattleMainDataControl, ItemInfo, ItemPoolMgr, LangMgr, CommonItem, HeroTeamControl, HeroData, PatrolDataMgr, RoleData, LocalEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, PatrolPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdMgr(extras) {
    _reporterNs.report("AdMgr", "../../AdMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimation(extras) {
    _reporterNs.report("createAnimation", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime_(extras) {
    _reporterNs.report("setTextTime_2", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "../battle/BattleMainDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../../hero/HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../../hero/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPatrolDataMgr(extras) {
    _reporterNs.report("PatrolDataMgr", "./PatrolDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Label = _cc.Label;
      Node = _cc.Node;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      Net = _unresolved_3.Net;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      ShowTips = _unresolved_5.ShowTips;
      UIMgr = _unresolved_5.UIMgr;
    }, function (_unresolved_6) {
      ViewName = _unresolved_6.ViewName;
    }, function (_unresolved_7) {
      AdMgr = _unresolved_7.AdMgr;
    }, function (_unresolved_8) {
      tab = _unresolved_8.tab;
    }, function (_unresolved_9) {
      ItemData = _unresolved_9.ItemData;
    }, function (_unresolved_10) {
      createAnimation = _unresolved_10.createAnimation;
      GameUtil = _unresolved_10.GameUtil;
      setTextTime_2 = _unresolved_10.setTextTime_2;
    }, function (_unresolved_11) {
      BattleMainDataControl = _unresolved_11.BattleMainDataControl;
    }, function (_unresolved_12) {
      ItemInfo = _unresolved_12.ItemInfo;
    }, function (_unresolved_13) {
      ItemPoolMgr = _unresolved_13.ItemPoolMgr;
    }, function (_unresolved_14) {
      LangMgr = _unresolved_14.LangMgr;
    }, function (_unresolved_15) {
      CommonItem = _unresolved_15.CommonItem;
    }, function (_unresolved_16) {
      HeroTeamControl = _unresolved_16.HeroTeamControl;
    }, function (_unresolved_17) {
      HeroData = _unresolved_17.HeroData;
    }, function (_unresolved_18) {
      PatrolDataMgr = _unresolved_18.PatrolDataMgr;
    }, function (_unresolved_19) {
      RoleData = _unresolved_19.RoleData;
    }, function (_unresolved_20) {
      LocalEvent = _unresolved_20.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9345dhhNaJLwo0626jQADqO", "PatrolPop", undefined);
      /*
       * @Date: 2024-06-18 16:00:02
       * @LastEditors: wzq
       * @File:快速巡逻
       * @LastEditTime: 2024-11-22 15:53:18
       */


      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventTouch', 'Label', 'log', 'Node', 'sp', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PatrolPop", PatrolPop = (_dec = ccclass('PatrolPop'), _dec2 = property(Label), _dec3 = property(Button), _dec4 = property(Sprite), _dec5 = property(Button), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(Node), _dec(_class = (_class2 = class PatrolPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbl_ad_times", _descriptor, this);

          _initializerDefineProperty(this, "btn_ad_quick_patrol", _descriptor2, this);

          _initializerDefineProperty(this, "sp_ad_quick_patrol", _descriptor3, this);

          _initializerDefineProperty(this, "btn_quick_patrol", _descriptor4, this);

          _initializerDefineProperty(this, "sp_quick_patrol", _descriptor5, this);

          _initializerDefineProperty(this, "sp_power_icon", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_power_count", _descriptor7, this);

          _initializerDefineProperty(this, "lbl_patrol_time", _descriptor8, this);

          _initializerDefineProperty(this, "lbl_quick_time", _descriptor9, this);

          _initializerDefineProperty(this, "lbl_quick_time_max", _descriptor10, this);

          _initializerDefineProperty(this, "node_reward_layout", _descriptor11, this);

          _initializerDefineProperty(this, "node_revenue", _descriptor12, this);

          _initializerDefineProperty(this, "lbl_max_revenue", _descriptor13, this);

          _initializerDefineProperty(this, "node_no_revenue", _descriptor14, this);

          _initializerDefineProperty(this, "node_spine", _descriptor15, this);

          this.startPatrolData = null;
          //巡逻时间
          this.canClickGetBtn = false;
          //是否可以点击领取按钮
          this.commonItems = [];
          this.timesBeginTimes = [];
          this.InitialPatrolMaxTime = 0;
          this.QuickPatrolDailyCount = 0;
          this.StageId = 0;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceivePatrolRewardRsp, this.on_s2c_ReceivePatrolRewardRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveQuickPatrolRewardRsp, this.on_s2c_ReceiveQuickPatrolRewardRsp, this);
        }

        unRegister() {
          super.unRegister();
        }

        onShow() {
          // 获取巡逻信息
          this.startPatrolData = (_crd && PatrolDataMgr === void 0 ? (_reportPossibleCrUseOfPatrolDataMgr({
            error: Error()
          }), PatrolDataMgr) : PatrolDataMgr).ins.startPatrolData;
          this.InitialPatrolMaxTime = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().InitialPatrolMaxTime + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).VipBonus.VipBonus_PatrolIdleTime);
          this.QuickPatrolDailyCount = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().QuickPatrolDailyCount + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).VipBonus.VipBonus_QuickPatrolDailyCount);
          const stageClearIds = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getStageClearIds();

          if (stageClearIds.length > 0) {
            this.StageId = stageClearIds[stageClearIds.length - 1];
          }

          this.StaticView();
          this.AsyncView();
        }

        onDestroy() {
          super.onDestroy();
        }

        onDisable() {
          if (this.commonItems && this.commonItems.length > 0) {
            for (let i = 0; i < this.commonItems.length; i++) {
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.putCommonItem(this.commonItems[i]);
            }
          }
        }

        on_s2c_ReceivePatrolRewardRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return; // 领取巡逻奖励

          this.startPatrolData.startPatrolTime = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime();
          this.startPatrolData.lastReceiveBaseRewardsTimeMap = msg.lastReceiveBaseRewardsTimeMap;
          this.startPatrolData.lastReceiveExtraRewardsTimeMap = msg.lastReceiveExtraRewardsTimeMap;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: msg.rewards
          });
          this.AsyncView();
          this.canClickGetBtn = false;
          this.scheduleOnce(() => {
            this.canClickGetBtn = true;
          }, 60);
        }

        on_s2c_ReceiveQuickPatrolRewardRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return; // 显示快速巡逻奖励

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: msg.rewards
          });
          this.refreshQuickData();
        }

        StaticView() {
          // 快速巡逻消耗道具
          const quickItem = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().QuickPatrolUseItem;
          const quickItemId = quickItem[0];
          const quickItemNum = quickItem[1];
          const itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(quickItemId);
          this.sp_power_icon.setTexture(itemTab.Icon);
          this.lbl_power_count.string = "x" + quickItemNum;
          this.canClickGetBtn = true;

          if (this.StageId) {
            const patrolTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().PatrolTableByPveStageId.getValue(this.StageId);
            const itemIds = patrolTab.BaseItemIds.concat(patrolTab.ExtraItemIds[0]);
            const itemNums = patrolTab.BaseItemNum.concat(patrolTab.ExtraItemNum[0]);

            for (let i = 0; i < itemIds.length; i++) {
              const ItemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ItemTableById.getValue(itemIds[i]);
              const exp_node = this.node_revenue.children[i];
              const exp_sp = exp_node.getChildByName("icon").getComponent(Sprite);
              exp_sp.setTexture(ItemTab.Icon);
              const exp_lbl = exp_node.getChildByName("label").getComponent(Label);
              let num = 0;

              if (itemIds[i] === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).CurrencyType.CurrencyType_Gold) {
                num = Math.round(itemNums[i] * (1 + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).VipBonus.VipBonus_PatrolMoneyRatio) / 10000));
              } else if (itemIds[i] === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).CurrencyType.CurrencyType_Feed) {
                num = Math.round(itemNums[i] * (1 + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).VipBonus.VipBonus_PatrolFoodRatio) / 10000));
              } else {
                num = itemNums[i];
              }

              const maxCount = i === 3 ? num : num * 6;
              exp_lbl.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString("ui_patrol_2", [(_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                error: Error()
              }), GameUtil) : GameUtil).convertNumber(maxCount)]);
            }
          } else {
            this.node_no_revenue.active = true;
          }

          this.lbl_max_revenue.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_patrol_1", [this.InitialPatrolMaxTime / 3600]); // 生成几只小鸡move的动画

          const heros = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getTeam();

          for (let i = 0; i < this.node_spine.children.length; i++) {
            const item = this.node_spine.children[i];
            const spine = item.getComponent(sp.Skeleton);
            const heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(heros[i].heroId);

            if (heroInfo) {
              (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
                error: Error()
              }), createAnimation) : createAnimation)(spine.node, heroInfo.heroTable.Born + 2);
            }
          }

          if (this.commonItems && this.commonItems.length > 0) {
            for (let i = 0; i < this.commonItems.length; i++) {
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.putCommonItem(this.commonItems[i]);
            }
          }

          this.node_reward_layout.destroyAllChildren();
        } // 刷新广告次数+巡逻次数


        refreshQuickData() {
          // 广告次数
          const curAdTimes = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_QuickPatrol);
          const maxAdTimes = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountMaxByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_QuickPatrol);
          this.lbl_ad_times.string = maxAdTimes - curAdTimes + "/" + maxAdTimes;
          this.btn_ad_quick_patrol.interactable = maxAdTimes - curAdTimes > 0;
          this.sp_ad_quick_patrol.grayscale = maxAdTimes - curAdTimes <= 0; // 快速巡逻剩余次数
          // const curQuickMaxTimes = tab.getData().GetKeyValue_ConfigTable().QuickPatrolDailyCount;

          const curQuickTimes = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(10);
          const quickItem = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().QuickPatrolUseItem;
          const quickItemId = quickItem[0];
          const quickItemNum = quickItem[1];
          const havaItemCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(quickItemId);
          this.btn_quick_patrol.interactable = havaItemCount >= quickItemNum && curQuickTimes > 0;
          this.sp_quick_patrol.grayscale = havaItemCount < quickItemNum || curQuickTimes === 0; // 算道具
          //this.lbl_quick_time.string = String(curQuickMaxTimes - curQuickTimes);

          this.lbl_quick_time.string = String(curQuickTimes);
          this.lbl_quick_time_max.string = String(this.QuickPatrolDailyCount);
        }

        AsyncView() {
          this.refreshQuickData();
          this.timesBeginTimes = [];
          Object.keys(this.startPatrolData.lastReceiveBaseRewardsTimeMap).forEach(key => {
            this.timesBeginTimes.push(this.startPatrolData.lastReceiveBaseRewardsTimeMap[key]);
          });
          Object.keys(this.startPatrolData.lastReceiveExtraRewardsTimeMap).forEach(key => {
            this.timesBeginTimes.push(this.startPatrolData.lastReceiveExtraRewardsTimeMap[key]);
          });
          this.updatePatrolTimes();
          this.unschedule(this.updatePatrolTimes);
          this.schedule(this.updatePatrolTimes, 1);
        }

        updatePatrolTimes() {
          // 巡逻收益时间
          const curTime = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime();
          let timeCount = curTime - Number(this.startPatrolData.startPatrolTime);
          const maxTime = this.InitialPatrolMaxTime; // 新手没有收益

          if (this.startPatrolData.startPatrolTime === 0) {
            this.lbl_patrol_time.string = "00:00:00";
            this.unschedule(this.updatePatrolTimes);
            return;
          } // 已经达到最大收益


          if (timeCount > maxTime) {
            console.log(`已经打到最大巡逻收益`);
            timeCount = maxTime;
            this.unschedule(this.updatePatrolTimes);
          }

          this.lbl_patrol_time.string = (_crd && setTextTime_2 === void 0 ? (_reportPossibleCrUseOfsetTextTime_({
            error: Error()
          }), setTextTime_2) : setTextTime_2)(timeCount); // 基础奖励

          const patrolTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PatrolTableByPveStageId.getValue(this.StageId);

          if (patrolTab) {
            const itemIds = patrolTab.BaseItemIds.concat(patrolTab.ExtraItemIds);
            const itemCounts = patrolTab.BaseItemNum.concat(patrolTab.ExtraItemNum);
            const times = patrolTab.BaseTimes.concat(patrolTab.ExtraTimes); // 每个物品的单独计算的cd

            const timesBeginTimes = this.timesBeginTimes;
            let showNothing = true;

            for (let i = 0; i < itemIds.length; i++) {
              const base_timeCount = curTime - Number(timesBeginTimes[i]) > maxTime ? maxTime : curTime - Number(timesBeginTimes[i]);
              const base_time = times[i];
              const base_itemId = itemIds[i];
              let base_itemCount = itemCounts[i];

              if (base_itemId === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).CurrencyType.CurrencyType_Gold) {
                base_itemCount = Math.floor(base_itemCount * (1 + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).VipBonus.VipBonus_PatrolMoneyRatio) / 10000));
              } else if (patrolTab.BaseItemIds[i] === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).CurrencyType.CurrencyType_Feed) {
                base_itemCount = Math.floor(base_itemCount * (1 + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).VipBonus.VipBonus_PatrolFoodRatio) / 10000));
              }

              if (this.node_reward_layout.children[i]) {
                const item = this.node_reward_layout.children[i];
                const itemTs = item.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
                  error: Error()
                }), CommonItem) : CommonItem);
                const curItemCount = itemTs.getItemCount();

                if (base_time > base_timeCount) {
                  this.node_reward_layout.children[i].active = false;
                } else {
                  showNothing = false;
                  this.node_reward_layout.children[i].active = true;

                  if (Math.floor(base_timeCount / base_time) > curItemCount / base_time) {
                    itemTs.setShowNum(Math.floor(base_timeCount / base_time) * base_itemCount);
                  }
                }
              } else {
                if (base_time < base_timeCount) {
                  showNothing = false;
                  const base_info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                    error: Error()
                  }), ItemInfo) : ItemInfo)();
                  base_info.itemId = base_itemId;
                  base_info.num = base_itemCount * Math.floor(base_timeCount / base_time);
                  (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                    error: Error()
                  }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(base_info, this.node_reward_layout);
                }
              }
            }

            this.node_no_revenue.active = showNothing;
          }
        } // 点击快速巡逻


        clickQuickPatrol(event, type) {
          const stageClearIds = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getStageClearIds();

          if (stageClearIds.length === 0) {
            //ShowTips("至少通过一关");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_patrol_1"));
            return;
          }

          let sendMsg = function () {
            let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_ReceiveQuickPatrolRewardReq();
            msg.type = Number(type);
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.ReceiveQuickPatrolRewardReq, msg);
          };

          if (type === "1") {
            (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
              error: Error()
            }), AdMgr) : AdMgr).ins.playVideoAd((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AdType.AdType_QuickPatrol, () => {
              sendMsg();
            }, false);
          } else {
            sendMsg();
          }
        } // 点击领取奖励


        clickGetPatrolAward() {
          if (this.canClickGetBtn && !this.node_no_revenue.active) {
            let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_ReceivePatrolRewardReq();
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.ReceivePatrolRewardReq, msg);
          }
        }

        onClose() {
          super.onClose();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).LocalMsg_QueueUI_deleteUI);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_ad_times", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btn_ad_quick_patrol", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sp_ad_quick_patrol", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btn_quick_patrol", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sp_quick_patrol", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sp_power_icon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_power_count", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbl_patrol_time", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbl_quick_time", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_quick_time_max", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_reward_layout", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_revenue", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lbl_max_revenue", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_no_revenue", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_spine", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fa0983d46d445b52c9d53f39a5bd30c3e947bd76.js.map
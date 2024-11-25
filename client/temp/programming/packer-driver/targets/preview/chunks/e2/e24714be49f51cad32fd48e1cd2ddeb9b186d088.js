System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "client_protocol", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, Toggle, ViewPop, TRIALLAYER, TRIALTASK, tab, InfiniteList, RookieTaskItem, EventMgr, proto, UIMgr, ViewName, RookieTaskBarItem, RookieTaskMgr, TrialToggleBtn, setTextTime, TrialLayoutCell, HeroDataControl, TaskData, LocalEvent, RoleData, Net, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _crd, ccclass, property, RookieTaskPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTRIALLAYER(extras) {
    _reporterNs.report("TRIALLAYER", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTRIALTASK(extras) {
    _reporterNs.report("TRIALTASK", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRookieTaskItem(extras) {
    _reporterNs.report("RookieTaskItem", "./RookieTaskItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRookieTaskBarItem(extras) {
    _reporterNs.report("RookieTaskBarItem", "./RookieTaskBarItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRookieTaskMgr(extras) {
    _reporterNs.report("RookieTaskMgr", "./RookieTaskMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrialToggleBtn(extras) {
    _reporterNs.report("TrialToggleBtn", "./TrialToggleBtn", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrialLayoutCell(extras) {
    _reporterNs.report("TrialLayoutCell", "./TrialLayoutCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskData(extras) {
    _reporterNs.report("TaskData", "../../task/TaskData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      TRIALLAYER = _unresolved_3.TRIALLAYER;
      TRIALTASK = _unresolved_3.TRIALTASK;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      InfiniteList = _unresolved_5.default;
    }, function (_unresolved_6) {
      RookieTaskItem = _unresolved_6.RookieTaskItem;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_8) {
      UIMgr = _unresolved_8.UIMgr;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      RookieTaskBarItem = _unresolved_10.RookieTaskBarItem;
    }, function (_unresolved_11) {
      RookieTaskMgr = _unresolved_11.RookieTaskMgr;
    }, function (_unresolved_12) {
      TrialToggleBtn = _unresolved_12.TrialToggleBtn;
    }, function (_unresolved_13) {
      setTextTime = _unresolved_13.setTextTime;
    }, function (_unresolved_14) {
      TrialLayoutCell = _unresolved_14.TrialLayoutCell;
    }, function (_unresolved_15) {
      HeroDataControl = _unresolved_15.HeroDataControl;
    }, function (_unresolved_16) {
      TaskData = _unresolved_16.TaskData;
    }, function (_unresolved_17) {
      LocalEvent = _unresolved_17.LocalEvent;
    }, function (_unresolved_18) {
      RoleData = _unresolved_18.RoleData;
    }, function (_unresolved_19) {
      Net = _unresolved_19.Net;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa00bf9AYRIwZQAbwx8w11X", "RookieTaskPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Label', 'Node', 'Prefab', 'Toggle', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RookieTaskPop", RookieTaskPop = (_dec = ccclass('RookieTaskPop'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Label), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Node), _dec(_class = (_class2 = class RookieTaskPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_task_item", _descriptor, this);

          _initializerDefineProperty(this, "pfb_mall_item", _descriptor2, this);

          _initializerDefineProperty(this, "pfb_task_bar_item", _descriptor3, this);

          _initializerDefineProperty(this, "pfb_day_toggle", _descriptor4, this);

          _initializerDefineProperty(this, "list_view", _descriptor5, this);

          _initializerDefineProperty(this, "node_toggle_day", _descriptor6, this);

          _initializerDefineProperty(this, "node_toggle_view", _descriptor7, this);

          _initializerDefineProperty(this, "node_toggle_layer", _descriptor8, this);

          _initializerDefineProperty(this, "node_bar_content", _descriptor9, this);

          _initializerDefineProperty(this, "lbl_count_time", _descriptor10, this);

          _initializerDefineProperty(this, "lbl_score", _descriptor11, this);

          _initializerDefineProperty(this, "node_rookie", _descriptor12, this);

          _initializerDefineProperty(this, "node_elite", _descriptor13, this);

          _initializerDefineProperty(this, "node_toggle_elite", _descriptor14, this);

          _initializerDefineProperty(this, "node_toggle_rookie", _descriptor15, this);

          _initializerDefineProperty(this, "node_bg_rookie", _descriptor16, this);

          _initializerDefineProperty(this, "node_bg_elite", _descriptor17, this);

          _initializerDefineProperty(this, "lbl_score_elite", _descriptor18, this);

          _initializerDefineProperty(this, "red_node_rookie", _descriptor19, this);

          _initializerDefineProperty(this, "red_node_elite", _descriptor20, this);

          _initializerDefineProperty(this, "red_node_rookie_task1", _descriptor21, this);

          _initializerDefineProperty(this, "red_node_rookie_task2", _descriptor22, this);

          _initializerDefineProperty(this, "red_node_rookie_gift", _descriptor23, this);

          _initializerDefineProperty(this, "red_node_elite_task1", _descriptor24, this);

          _initializerDefineProperty(this, "red_node_elite_task2", _descriptor25, this);

          _initializerDefineProperty(this, "red_node_elite_gift", _descriptor26, this);

          _initializerDefineProperty(this, "red_node_day1", _descriptor27, this);

          _initializerDefineProperty(this, "red_node_day2", _descriptor28, this);

          _initializerDefineProperty(this, "red_node_day3", _descriptor29, this);

          _initializerDefineProperty(this, "red_node_day4", _descriptor30, this);

          _initializerDefineProperty(this, "red_node_day5", _descriptor31, this);

          _initializerDefineProperty(this, "red_node_day6", _descriptor32, this);

          _initializerDefineProperty(this, "red_node_day7", _descriptor33, this);

          _initializerDefineProperty(this, "_layer_type", _descriptor34, this);

          this._view_type = (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
            error: Error()
          }), TRIALTASK) : TRIALTASK).NONE;
          this._click_day = 0;
          this._cur_day = 0;
          this._countDown = 0;
          // private _mallMap: Map<number, tab.MallItemTabe[]> = new Map();
          this._curTrialToggleBtn = null;
          this._openName = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask;
          this._list = [];
        }

        getLayerType() {
          return this._layer_type;
        }

        onShow() {
          var trial_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetNewPlayerTrialMapReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetNewPlayerTrialMapReq, trial_msg);
        }

        on_s2c_GetNewPlayerTrialMapRsp(msg) {
          this.setOnshow();
        }

        setOnshow() {
          this._openName = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask;
          var trialInfo = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.getTrialTask(this._openName);

          if (trialInfo) {
            this._layer_type = (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
              error: Error()
            }), TRIALLAYER) : TRIALLAYER).ROOKIE;
          } else {
            this._openName = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2;
            this._layer_type = (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
              error: Error()
            }), TRIALLAYER) : TRIALLAYER).ELITE;
          }

          var openName1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask;
          var openName2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2;
          var data1 = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.getTrialTask(openName1);
          var data2 = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.getTrialTask(openName2);
          this.node_toggle_rookie.active = false;
          this.node_toggle_elite.active = false;

          if (data1) {
            this.node_toggle_rookie.active = true;
          }

          if (data2) {
            this.node_toggle_elite.active = true;
          }

          this.setAsyncView();
        }

        setAsyncView() {
          var trialInfo = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.getTrialTask(this._openName);
          this._view_type = (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
            error: Error()
          }), TRIALTASK) : TRIALTASK).TASK1;
          this._cur_day = trialInfo.unlockedDays;
          var costDay = this._cur_day - (this._layer_type - 1) * 7;
          this._click_day = costDay > 7 ? 7 : costDay;
          this.node_rookie.active = this._layer_type === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE;
          this.node_bg_rookie.active = this.node_rookie.active;
          this.node_elite.active = !this.node_rookie.active;
          this.node_toggle_elite.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.getTrialTask((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2) ? true : false;
          this.node_bg_elite.active = !this.node_rookie.active;
          this.node_toggle_view.getChildByName("Toggle" + this._view_type).getComponent(Toggle).isChecked = true;
          this.node_toggle_layer.getChildByName("Toggle" + this._layer_type).getComponent(Toggle).isChecked = true;
          this.createDayToggle();
          this.setView(true);
          this.beginCountDown();
        }

        setView(isInit) {
          this._list = this.getViewData();

          if (isInit) {
            this.list_view.Init({
              getCellNumber: this.getCellCount.bind(this),
              getCellSize: this.getCellHeight.bind(this),
              getCellIdentifer: this.getCellIdentifer.bind(this),
              getCellView: this.getCellView.bind(this),
              getCellData: this.GetCellData.bind(this)
            });
          } else {
            this.list_view.Reload(false, true);
          }

          this.setBarItem();
          (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.red_trialRed();
          this.refreshAllRed();
        } // 根据天数创建toggle


        createDayToggle() {
          for (var i = 1; i <= 7; i++) {
            var item = this.node_toggle_day.children[i - 1];
            item.name = String(i);
            var itemTs = item.getComponent(_crd && TrialToggleBtn === void 0 ? (_reportPossibleCrUseOfTrialToggleBtn({
              error: Error()
            }), TrialToggleBtn) : TrialToggleBtn);

            if (i === this._click_day) {
              this._curTrialToggleBtn = itemTs;
            }

            itemTs.initToggle(this, i === this._click_day, i > this._cur_day - (this._layer_type - 1) * 7, i);
          }
        } // 设置itembar


        setBarItem() {
          for (var i = 0; i < 6; i++) {
            var id = this._layer_type * 100 + (6 - i);
            var scoreTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ActivityNewPlayerTaskScoreTableById.getValue(id);
            var item = this.node_bar_content.children[i];
            item.name = String(scoreTab.Id);
            var itemTs = item.getComponent(_crd && RookieTaskBarItem === void 0 ? (_reportPossibleCrUseOfRookieTaskBarItem({
              error: Error()
            }), RookieTaskBarItem) : RookieTaskBarItem);
            itemTs.initData(scoreTab);
          }

          var trialData = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.getTrialTask(this._openName);
          this.lbl_score.string = String(trialData.score);
          this.lbl_score_elite.string = String(trialData.score);
        }
        /* 刷新积分数据 */


        refreshScore(socreId) {
          var newPlayerTaskTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ActivityNewPlayerTaskTableById.getValue(socreId);
          var newPlayertrial = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.getTrialTask(newPlayerTaskTab.Group);
          newPlayertrial.receivedScoreIds.push(socreId);
          var item = this.node_bar_content.getChildByName(String(socreId));
          var itemTs = item.getComponent(_crd && RookieTaskBarItem === void 0 ? (_reportPossibleCrUseOfRookieTaskBarItem({
            error: Error()
          }), RookieTaskBarItem) : RookieTaskBarItem);
          itemTs.gotItem();
        } // 领取奖励刷新view


        refreshView() {
          (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.red_trialRed();
          this.refreshAllRed();
          this.list_view.Refresh();
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {
          // 监听任务领取奖励
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveNewPlayerTrialTaskRewardsRsp, this.on_s2c_ReceiveNewPlayerTrialTaskRewardsRsp, this); // 购买固定商品

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyFixedShopCommodityRsp, this.on_s2c_BuyFixedShopCommodityRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveNewPlayerTrialScoreRewardsRsp, this.on_s2c_ReceiveNewPlayerTrialScoreRewardsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ChangedNewPlayerTrialScorePush, this.on_s2c_ChangedNewPlayerTrialScorePush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetNewPlayerTrialMapRsp, this.on_s2c_GetNewPlayerTrialMapRsp, this);
        } // 积分更新


        on_s2c_ChangedNewPlayerTrialScorePush(msg) {
          var newPlayertrial = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.getTrialTask(msg.newPlayerTrialId);
          newPlayertrial.score = msg.score;
          this.setBarItem();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).TrialRed);
        } // 购买固定商品


        on_s2c_BuyFixedShopCommodityRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.refreshView();
        } // 完成任务


        on_s2c_ReceiveNewPlayerTrialTaskRewardsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: msg.rewards
          });
          var taskData = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
            error: Error()
          }), TaskData) : TaskData).ins.getTrialTaskInfo(msg.taskId);
          taskData.isReceived = true;
          this._list = this.getViewData();
          this.refreshView();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).TrialRed);
        } // 领取积分奖励


        on_s2c_ReceiveNewPlayerTrialScoreRewardsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: msg.rewards
          });
          this.refreshScore(msg.scoreId);
          this.refreshAllRed();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).TrialRed);
        }

        getCellCount() {
          return this._list.length;
        }

        getCellHeight() {
          if (this._view_type !== (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
            error: Error()
          }), TRIALTASK) : TRIALTASK).GIFT) {
            return 120;
          } else {
            return 250;
          }
        }

        getCellIdentifer() {
          if (this._view_type !== (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
            error: Error()
          }), TRIALTASK) : TRIALTASK).GIFT) {
            return 'RookieTaskItem';
          } else {
            return 'TrialLayoutCell';
          }
        }

        getCellView() {
          if (this._view_type !== (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
            error: Error()
          }), TRIALTASK) : TRIALTASK).GIFT) {
            return instantiate(this.pfb_task_item).getComponent(_crd && RookieTaskItem === void 0 ? (_reportPossibleCrUseOfRookieTaskItem({
              error: Error()
            }), RookieTaskItem) : RookieTaskItem);
          } else {
            return instantiate(this.pfb_mall_item).getComponent(_crd && TrialLayoutCell === void 0 ? (_reportPossibleCrUseOfTrialLayoutCell({
              error: Error()
            }), TrialLayoutCell) : TrialLayoutCell);
          }
        }

        GetCellData(idx) {
          var ID = this._layer_type * 100 + this._click_day;
          return {
            data: this._list[idx],
            id: this._openName
          };
        } // 根据layer clickday viewType获取信息


        getViewData() {
          var ID = this._layer_type * 100 + this._click_day;
          var newPlayerData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ActivityNewPlayerTaskTableById.getValue(ID);

          if (this._view_type === (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
            error: Error()
          }), TRIALTASK) : TRIALTASK).TASK1 || this._view_type === (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
            error: Error()
          }), TRIALTASK) : TRIALTASK).TASK2) {
            var taskData = newPlayerData['TaskIds' + this._view_type];
            taskData.sort((taskId1, taskId2) => {
              var taskData1 = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
                error: Error()
              }), TaskData) : TaskData).ins.getTrialTaskInfo(taskId1);
              var taskData2 = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
                error: Error()
              }), TaskData) : TaskData).ins.getTrialTaskInfo(taskId2);
              return Number(taskData1.isReceived) - Number(taskData2.isReceived);
            });
            return taskData;
          } else if (this._view_type === (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
            error: Error()
          }), TRIALTASK) : TRIALTASK).GIFT) {
            var arr = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
              error: Error()
            }), RookieTaskMgr) : RookieTaskMgr).ins.getMallTabs(newPlayerData.MallId);
            var result = [];

            for (var i = 0; i < arr.length; i += 3) {
              result.push(arr.slice(i, i + 3));
            } // return this._mallMap.get(newPlayerData.MallId);


            return result;
          }
        } // 切换layer


        clickSwitchLayer(e, layer) {
          if (this._layer_type === Number(layer)) {
            return;
          }

          this._layer_type = Number(layer);
          this._openName = this._layer_type === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE ? (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask : (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2;
          this.setAsyncView();
        }

        beginCountDown() {
          var trialData = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.getTrialTask(this._openName);
          var now = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime();
          var endTime = Number(trialData.expireTime);
          this._countDown = endTime - now;
          this.updateTime();
          this.unschedule(this.updateTime);
          this.schedule(this.updateTime, 1);
        } // 切换天数


        clickSwitchDay(toggle, day) {
          this._curTrialToggleBtn.setSelect(false);

          this._curTrialToggleBtn = toggle;
          this._click_day = day;
          this.setView(false);
        } // 切换页签


        clickSwitchView(e, view) {
          if (this._view_type === Number(view)) {
            return;
          }

          this._view_type = Number(view);
          this.setView(false);
        }

        updateTime() {
          // 获取刷新周期
          this._countDown--;

          if (this._countDown <= 0) {
            this._countDown = 0;
            this.unschedule(this.updateTime);
          } else {
            this.lbl_count_time.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
              error: Error()
            }), setTextTime) : setTextTime)(this._countDown);
          }
        } // 点击预览


        clickShowHero() {
          if (this._layer_type === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE) {
            var data = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ActivityNewPlayerTaskScoreTableById.getValue(106);
            (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.refreshBookData(data.RewardId);
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).HeroBagView,
              data: {
                viewType: 2
              },
              zIndex: 300
            });
          } else {
            var _data = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ActivityNewPlayerTaskScoreTableById.getValue(206);

            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).ItemInfoPop,
              data: {
                itemId: _data.RewardId
              }
            });
          }
        }

        refreshAllRed() {
          this.red_node_rookie.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed((_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE) || (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.red_score_red((_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE);
          this.red_node_elite.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed((_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ELITE) || (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.red_score_red((_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ELITE);
          ;
          this.red_node_day1.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed(this._layer_type, 1);
          this.red_node_day2.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed(this._layer_type, 2);
          this.red_node_day3.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed(this._layer_type, 3);
          this.red_node_day4.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed(this._layer_type, 4);
          this.red_node_day5.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed(this._layer_type, 5);
          this.red_node_day6.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed(this._layer_type, 6);
          this.red_node_day7.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed(this._layer_type, 7);
          this.red_node_rookie_task1.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed(1, this._click_day, (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
            error: Error()
          }), TRIALTASK) : TRIALTASK).TASK1);
          this.red_node_rookie_task2.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed(1, this._click_day, (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
            error: Error()
          }), TRIALTASK) : TRIALTASK).TASK2);
          this.red_node_rookie_gift.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed(1, this._click_day, (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
            error: Error()
          }), TRIALTASK) : TRIALTASK).GIFT);
          this.red_node_elite_task1.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed(2, this._click_day, (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
            error: Error()
          }), TRIALTASK) : TRIALTASK).TASK1);
          this.red_node_elite_task2.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed(2, this._click_day, (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
            error: Error()
          }), TRIALTASK) : TRIALTASK).TASK2);
          this.red_node_elite_gift.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed(2, this._click_day, (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
            error: Error()
          }), TRIALTASK) : TRIALTASK).GIFT); // todo
          // EventMgr.emitLocal(LocalEvent.TrialRed)
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_task_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_mall_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pfb_task_bar_item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pfb_day_toggle", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "list_view", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_day", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_view", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_layer", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_bar_content", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_count_time", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lbl_score", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_rookie", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_elite", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_elite", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_rookie", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "node_bg_rookie", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "node_bg_elite", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "lbl_score_elite", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "red_node_rookie", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "red_node_elite", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "red_node_rookie_task1", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "red_node_rookie_task2", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "red_node_rookie_gift", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "red_node_elite_task1", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "red_node_elite_task2", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "red_node_elite_gift", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "red_node_day1", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "red_node_day2", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "red_node_day3", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "red_node_day4", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "red_node_day5", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "red_node_day6", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "red_node_day7", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "_layer_type", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).NONE;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e24714be49f51cad32fd48e1cd2ddeb9b186d088.js.map
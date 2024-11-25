System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "client_protocol", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, ProgressBar, Toggle, UITransform, tab, BattlePassDataMgr, InfiniteList, BattlePassChildToggleItem, BattlePassItemCell, TaskData, LangMgr, dailyBuyShop, setTextTime, PayControl, ItemData, ShowItemNotEnoughTips, ShowTips, proto, Net, RedMgr, RedDotType, ChannelMgr, RoleData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, BattlePassItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattlePassDataMgr(extras) {
    _reporterNs.report("BattlePassDataMgr", "./BattlePassDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattlePassChildToggleItem(extras) {
    _reporterNs.report("BattlePassChildToggleItem", "./BattlePassChildToggleItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattlePassItemCell(extras) {
    _reporterNs.report("BattlePassItemCell", "./BattlePassItemCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskData(extras) {
    _reporterNs.report("TaskData", "../../task/TaskData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdailyBuyShop(extras) {
    _reporterNs.report("dailyBuyShop", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayControl(extras) {
    _reporterNs.report("PayControl", "../../pay/PayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      Toggle = _cc.Toggle;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      BattlePassDataMgr = _unresolved_3.BattlePassDataMgr;
    }, function (_unresolved_4) {
      InfiniteList = _unresolved_4.default;
    }, function (_unresolved_5) {
      BattlePassChildToggleItem = _unresolved_5.BattlePassChildToggleItem;
    }, function (_unresolved_6) {
      BattlePassItemCell = _unresolved_6.BattlePassItemCell;
    }, function (_unresolved_7) {
      TaskData = _unresolved_7.TaskData;
    }, function (_unresolved_8) {
      LangMgr = _unresolved_8.LangMgr;
    }, function (_unresolved_9) {
      dailyBuyShop = _unresolved_9.dailyBuyShop;
      setTextTime = _unresolved_9.setTextTime;
    }, function (_unresolved_10) {
      PayControl = _unresolved_10.PayControl;
    }, function (_unresolved_11) {
      ItemData = _unresolved_11.ItemData;
    }, function (_unresolved_12) {
      ShowItemNotEnoughTips = _unresolved_12.ShowItemNotEnoughTips;
      ShowTips = _unresolved_12.ShowTips;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_13) {
      Net = _unresolved_13.Net;
    }, function (_unresolved_14) {
      RedMgr = _unresolved_14.RedMgr;
    }, function (_unresolved_15) {
      RedDotType = _unresolved_15.RedDotType;
    }, function (_unresolved_16) {
      ChannelMgr = _unresolved_16.ChannelMgr;
    }, function (_unresolved_17) {
      RoleData = _unresolved_17.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8072Sb5UNOXYFE820uIKpl", "BattlePassItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'log', 'Node', 'ProgressBar', 'Toggle', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattlePassItem", BattlePassItem = (_dec = ccclass('BattlePassItem'), _dec2 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec(_class = (_class2 = class BattlePassItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "list_view", _descriptor, this);

          _initializerDefineProperty(this, "node_toggle_child_content", _descriptor2, this);

          _initializerDefineProperty(this, "toggle_child_item", _descriptor3, this);

          _initializerDefineProperty(this, "cell_item", _descriptor4, this);

          _initializerDefineProperty(this, "item_battle_pass", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_price", _descriptor6, this);

          _initializerDefineProperty(this, "node_lv_progress", _descriptor7, this);

          _initializerDefineProperty(this, "node_time", _descriptor8, this);

          _initializerDefineProperty(this, "lbl_count_time", _descriptor9, this);

          _initializerDefineProperty(this, "node_advance_lock", _descriptor10, this);

          _initializerDefineProperty(this, "node_toggle", _descriptor11, this);

          _initializerDefineProperty(this, "node_buy", _descriptor12, this);

          this.battlePassData = [];
          this._curPassBattleId = 0;
          this._list = null;
          this._countDown = 0;
        }

        onShow(tabName, tabId) {
          // 根据tabNaem获取信息
          if (!tabId) {
            this.battlePassData = (_crd && BattlePassDataMgr === void 0 ? (_reportPossibleCrUseOfBattlePassDataMgr({
              error: Error()
            }), BattlePassDataMgr) : BattlePassDataMgr).ins.getDataByPassName(tabName);
            this._curPassBattleId = this.battlePassData[0].Id;
          } else {
            this.battlePassData = [(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BattlePassTableById.getValue(tabId)];
            this._curPassBattleId = tabId;
          } // 如果数组长度大于1则创建toggle


          this.item_battle_pass.addChild(this.cell_item);

          if (this.node_toggle) {
            this.node_toggle.active = this.battlePassData.length > 1;
          }

          if (this.battlePassData.length > 1) {
            //创建toggle
            this.createToggleItem();
          }

          this.initView(true);
        }

        initView(isInit) {
          this._list = this.groupListData();

          if (isInit) {
            this.list_view.getContent().getComponent(UITransform).setAnchorPoint(0, 0.5);
            this.list_view.Init({
              getCellNumber: this.getCellCount.bind(this),
              getCellSize: this.getCellWidth.bind(this),
              getCellIdentifer: this.getCellIdentifer.bind(this),
              getCellView: this.getCellView.bind(this),
              getCellData: this.GetCellData.bind(this)
            });
            this.list_view.node.on("scrolling", this.onScrolling, this);
          } else {
            this.list_view.Reload(false, true);
          }

          var idx = this.getAwardIndex();
          var count = Math.ceil(890 / 130);

          if (idx > this._list.TaskIds.length - count) {
            idx = this._list.TaskIds.length - count;
            this.item_battle_pass.active = false;
          } else {
            this.item_battle_pass.active = true;
          }

          var pos = this.list_view.GetScrollPosOfCell(idx);
          this.list_view.setContentPos(-pos.x + 65, -pos.x + 65, 0);
          this.showAsyncView();
        }

        groupListData() {
          var data = this.battlePassData;

          for (var i = 0; i < data.length; i++) {
            var _data = data[i];

            if (_data.Id === this._curPassBattleId) {
              return _data;
            }
          }
        } // 刷新toggle红点


        refreshToggleRed() {
          if (this.node_toggle_child_content && this.node_toggle_child_content.children.length > 0) {
            for (var i = 0; i < this.node_toggle_child_content.children.length; i++) {
              var item = this.node_toggle_child_content.children[i];
              var toggleItemTs = item.getComponent(_crd && BattlePassChildToggleItem === void 0 ? (_reportPossibleCrUseOfBattlePassChildToggleItem({
                error: Error()
              }), BattlePassChildToggleItem) : BattlePassChildToggleItem);
              toggleItemTs.refreshRed();
            }
          }
        } // 根据当前数据创建横向页签


        createToggleItem() {
          this.node_toggle_child_content.destroyAllChildren();
          var viewData = this.battlePassData;

          for (var i = 0; i < viewData.length; i++) {
            var toggleItem = instantiate(this.toggle_child_item);
            this.node_toggle_child_content.addChild(toggleItem);
            var toggleItemTs = toggleItem.getComponent(_crd && BattlePassChildToggleItem === void 0 ? (_reportPossibleCrUseOfBattlePassChildToggleItem({
              error: Error()
            }), BattlePassChildToggleItem) : BattlePassChildToggleItem);
            toggleItemTs.initData(viewData[i], this);

            if (i === 0) {
              toggleItem.getComponent(Toggle).isChecked = true;
            }
          }
        }

        switchView(id) {
          this._curPassBattleId = id;
          this.initView(false);
        } // 刷新界面


        refreshView() {
          this.list_view.Refresh();
          this.refreshToggleRed();
          this.item_battle_pass.children[0].getComponent(_crd && BattlePassItemCell === void 0 ? (_reportPossibleCrUseOfBattlePassItemCell({
            error: Error()
          }), BattlePassItemCell) : BattlePassItemCell).UpdateContent({
            taskId: this._list.TaskIds[this._list.TaskIds.length - 1],
            battleId: this._curPassBattleId,
            notSetY: true
          });
          var battlePassTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BattlePassTableById.getValue(this._curPassBattleId);

          if (battlePassTab.PassType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BattlePassType.BattlePassType_LoopBattlePass) {
            this.refreshProgress();
          }
        }

        getCellCount() {
          return this._list.TaskIds.length;
        }

        getCellWidth() {
          return 130;
        }

        getCellIdentifer() {
          return "BattlePassItemCell";
        }

        getCellView() {
          return instantiate(this.cell_item).getComponent(_crd && BattlePassItemCell === void 0 ? (_reportPossibleCrUseOfBattlePassItemCell({
            error: Error()
          }), BattlePassItemCell) : BattlePassItemCell);
        }

        GetCellData(idx) {
          return {
            taskId: this._list.TaskIds[idx],
            battleId: this._curPassBattleId
          };
        }

        onScrolling() {
          var offset = this.list_view.getScrollOffset();
          var x = offset.x;
          var movex = this.list_view.GetScrollPosOfCell(this._list.TaskIds.length - 2);
          this.item_battle_pass.active = !(-x + 805 >= movex.x);
        } // 获取当前可以领取奖励的index


        getAwardIndex() {
          var idx = 0;
          var battlePass = (_crd && BattlePassDataMgr === void 0 ? (_reportPossibleCrUseOfBattlePassDataMgr({
            error: Error()
          }), BattlePassDataMgr) : BattlePassDataMgr).ins.getBattlePassData(this._curPassBattleId);

          for (var i = 0; i < battlePass.tasks.length; i++) {
            var taskId = battlePass.tasks[i].id;
            var task = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
              error: Error()
            }), TaskData) : TaskData).ins.getBattlePassTaskInfo(taskId);

            if (task.isReceived) {
              idx = i;
            }
          }

          return idx;
        }

        showAsyncView() {
          this.item_battle_pass.children[0].getComponent(_crd && BattlePassItemCell === void 0 ? (_reportPossibleCrUseOfBattlePassItemCell({
            error: Error()
          }), BattlePassItemCell) : BattlePassItemCell).UpdateContent({
            taskId: this._list.TaskIds[this._list.TaskIds.length - 1],
            battleId: this._curPassBattleId,
            notSetY: true
          }); // 设置购买战令金额

          var battlePassTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BattlePassTableById.getValue(this._curPassBattleId);
          var RechargeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RechargeTableById.getValue(battlePassTab.RechargeId);
          var battlePass = (_crd && BattlePassDataMgr === void 0 ? (_reportPossibleCrUseOfBattlePassDataMgr({
            error: Error()
          }), BattlePassDataMgr) : BattlePassDataMgr).ins.getBattlePassData(this._curPassBattleId);
          this.node_buy.active = !battlePass.isBoughtAdvance;
          this.lbl_price.string = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).getSdkRechargeShowPrice(RechargeTab); // LangMgr.getCombineString("ui_commondesc_73", [RechargeTab.Price]);
          // 购买等级

          if (this.node_lv_progress) {
            this.node_lv_progress.active = battlePassTab.PassType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BattlePassType.BattlePassType_LoopBattlePass;
          }

          if (this.node_time) {
            this.node_time.active = false;
          }

          this.node_advance_lock.active = !battlePass.isBoughtAdvance;
          this.unschedule(this.updateTime);

          if (battlePassTab.PassType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BattlePassType.BattlePassType_LoopBattlePass) {
            // 周期战令 结束事件
            var now = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getServerUtcTime();
            var endTime = Number(battlePass.lastResetTime) + battlePassTab.PassValue * 24 * 3600;
            this._countDown = endTime - now;
            this.node_time.active = this._countDown > 0;
            this.updateTime();
            this.schedule(this.updateTime, 1);
            this.refreshProgress();
          }
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
        } // 购买战令


        onClickBuyBattlePass() {
          var battlePassTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BattlePassTableById.getValue(this._curPassBattleId);
          var self = this;
          (_crd && PayControl === void 0 ? (_reportPossibleCrUseOfPayControl({
            error: Error()
          }), PayControl) : PayControl).ins.requestPay(battlePassTab.RechargeId, () => {
            (_crd && BattlePassDataMgr === void 0 ? (_reportPossibleCrUseOfBattlePassDataMgr({
              error: Error()
            }), BattlePassDataMgr) : BattlePassDataMgr).ins.buyBattlePassData(this._curPassBattleId);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Battle_Pass);
            self.refreshView();
            this.node_buy.active = false;
          });
        }

        refreshProgress() {
          // 获取当前进度值
          var battlePass = (_crd && BattlePassDataMgr === void 0 ? (_reportPossibleCrUseOfBattlePassDataMgr({
            error: Error()
          }), BattlePassDataMgr) : BattlePassDataMgr).ins.getBattlePassData(this._curPassBattleId);
          var progress = 0;
          var lv = 0;
          var max = 0;
          var maxLv = 0;

          for (var i = 0; i < battlePass.tasks.length; i++) {
            var taskId = battlePass.tasks[i].id;
            var task = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
              error: Error()
            }), TaskData) : TaskData).ins.getBattlePassTaskInfo(taskId);
            var taskTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().TaskTableById.getValue(taskId);

            if (progress < task.progress) {
              progress = task.progress;
            }

            if (task.progress < taskTab.FinishParam1) {
              lv = i;
              break;
            }

            if (i === battlePass.tasks.length - 1 && task.progress >= taskTab.FinishParam1) {
              lv = i;
              maxLv = i + 1;
            }
          }

          if (lv > 0) {
            var tab1 = battlePass.tasks[lv].id;
            var tab2 = battlePass.tasks[lv - 1].id;
            var taskTab1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().TaskTableById.getValue(tab1);
            var taskTab2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().TaskTableById.getValue(tab2);
            max = taskTab1.FinishParam1 - taskTab2.FinishParam1;
            progress = progress - taskTab2.FinishParam1;
          } else {
            var _tab1 = battlePass.tasks[lv].id;

            var _taskTab1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().TaskTableById.getValue(_tab1);

            max = _taskTab1.FinishParam1; // progress = progress-_taskTab1.FinishParam1;
          }

          var lblLv = this.node_lv_progress.getChildByName("lv_txt").getComponent(Label);
          lblLv.string = maxLv ? String(maxLv) : String(lv);
          var progressBar = this.node_lv_progress.getChildByName("score_bar").getComponent(ProgressBar);
          progressBar.progress = progress / max;
        } // 购买战令等级


        onClickBuyBattlePassLv() {
          // 判断钻石是否够
          var battlePassTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BattlePassTableById.getValue(this._curPassBattleId);
          var costItemId = battlePassTab.BuyLvCostId;
          var costItemCount = battlePassTab.BuyLvCostNum;
          var haveCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(costItemId);

          if (haveCount < costItemCount) {
            (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
              error: Error()
            }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(costItemId);
            return;
          } // 判断是否达到最高级


          var lvLbl = this.node_lv_progress.getChildByName("lv_txt").getComponent(Label);

          if (Number(lvLbl.string) >= battlePassTab.TaskIds.length) {
            var tips = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_equip_18");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)(tips);
            return;
          }

          (_crd && dailyBuyShop === void 0 ? (_reportPossibleCrUseOfdailyBuyShop({
            error: Error()
          }), dailyBuyShop) : dailyBuyShop)(costItemId, costItemCount, -1, "Tips_common_buy", () => {
            var pass_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_BuyBattlePassLevelReq();
            pass_msg.id = this._curPassBattleId;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.BuyBattlePassLevelReq, pass_msg);
          }, battlePassTab.Id);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "list_view", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_child_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggle_child_item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cell_item", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "item_battle_pass", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_price", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_lv_progress", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_time", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbl_count_time", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_advance_lock", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_buy", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=103558176d6d3af4eb9c3e695fb23f702108e25c.js.map
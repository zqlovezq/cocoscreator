System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "client_protocol", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, RichText, ScrollView, Sprite, Vec2, ViewPop, ActivityData, createAnimation, setTextTime, RoleData, tab, TaskData, RecruitLimitItem, ItemData, HeroDataControl, ShowItemNotEnoughTips, ShowTips, UIMgr, LangMgr, proto, Net, EventMgr, ViewName, HeroData, RecruitType, RecruitLimitToggleItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, RecruitLimitView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../activity/ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityOpenInfo(extras) {
    _reporterNs.report("ActivityOpenInfo", "../activity/ActivityOpenInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimation(extras) {
    _reporterNs.report("createAnimation", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskData(extras) {
    _reporterNs.report("TaskData", "../task/TaskData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecruitLimitItem(extras) {
    _reporterNs.report("RecruitLimitItem", "./RecruitLimitItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../hero/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecruitType(extras) {
    _reporterNs.report("RecruitType", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecruitLimitToggleItem(extras) {
    _reporterNs.report("RecruitLimitToggleItem", "./RecruitLimitToggleItem", _context.meta, extras);
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
      RichText = _cc.RichText;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ActivityData = _unresolved_3.ActivityData;
    }, function (_unresolved_4) {
      createAnimation = _unresolved_4.createAnimation;
      setTextTime = _unresolved_4.setTextTime;
    }, function (_unresolved_5) {
      RoleData = _unresolved_5.RoleData;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      TaskData = _unresolved_7.TaskData;
    }, function (_unresolved_8) {
      RecruitLimitItem = _unresolved_8.RecruitLimitItem;
    }, function (_unresolved_9) {
      ItemData = _unresolved_9.ItemData;
    }, function (_unresolved_10) {
      HeroDataControl = _unresolved_10.HeroDataControl;
    }, function (_unresolved_11) {
      ShowItemNotEnoughTips = _unresolved_11.ShowItemNotEnoughTips;
      ShowTips = _unresolved_11.ShowTips;
      UIMgr = _unresolved_11.UIMgr;
    }, function (_unresolved_12) {
      LangMgr = _unresolved_12.LangMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_13) {
      Net = _unresolved_13.Net;
    }, function (_unresolved_14) {
      EventMgr = _unresolved_14.EventMgr;
    }, function (_unresolved_15) {
      ViewName = _unresolved_15.ViewName;
    }, function (_unresolved_16) {
      HeroData = _unresolved_16.HeroData;
    }, function (_unresolved_17) {
      RecruitType = _unresolved_17.RecruitType;
    }, function (_unresolved_18) {
      RecruitLimitToggleItem = _unresolved_18.RecruitLimitToggleItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eaaaaAxv5JErI3qn60A3Wf2", "RecruitLimitView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'RichText', 'ScrollView', 'Sprite', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RecruitLimitView", RecruitLimitView = (_dec = ccclass('RecruitLimitView'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(ScrollView), _dec7 = property(Label), _dec8 = property(Sprite), _dec9 = property(Sprite), _dec10 = property(RichText), _dec11 = property(RichText), _dec12 = property(Prefab), _dec13 = property(Node), _dec(_class = (_class2 = class RecruitLimitView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_spine", _descriptor, this);

          _initializerDefineProperty(this, "lbl_time", _descriptor2, this);

          _initializerDefineProperty(this, "pfb_item", _descriptor3, this);

          _initializerDefineProperty(this, "node_content", _descriptor4, this);

          _initializerDefineProperty(this, "scroll_view", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_progress_gacha", _descriptor6, this);

          _initializerDefineProperty(this, "sp_recruit_item_1", _descriptor7, this);

          _initializerDefineProperty(this, "sp_recruit_item_10", _descriptor8, this);

          _initializerDefineProperty(this, "lbl_tips", _descriptor9, this);

          _initializerDefineProperty(this, "lbl_tips1", _descriptor10, this);

          _initializerDefineProperty(this, "pfb_toggle_item", _descriptor11, this);

          _initializerDefineProperty(this, "node_toggle_content", _descriptor12, this);

          this.actInfos = [];
          this.curInfo = null;
          this.countDown = 0;
          this.actTab = null;
          this._isGacha = false;
          this._curGachaCount = 0;
          this._recruitHerosMap = new Map();
          this.curIndex = 0;
        }

        onShow() {
          this.setRecruitMap();
          this.actInfos = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getAllUpData();
          this.switchView(0);
          this.createToggle();
        }

        switchView(actIndex) {
          this.curIndex = actIndex;
          this.curInfo = this.actInfos[actIndex];
          this.countDown = Number(this.curInfo.endTime) - (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime();
          this.timeUpdate();
          this.unschedule(this.timeUpdate);
          this.schedule(this.timeUpdate, 1);
          this.actTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GachaUpTableById.getValue(this.curInfo.activityTable.Param1);
          (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
            error: Error()
          }), createAnimation) : createAnimation)(this.node_spine, this.actTab.AnimationId);
          this.createTaskList();
          var gachaTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GachaTableById.getValue(this.actTab.GachaIds[0]);
          var itemId = gachaTab.ItemId;
          var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(itemId);
          this.sp_recruit_item_1.setTexture(itemTab.Icon);
          this.sp_recruit_item_10.setTexture(itemTab.Icon);
          var heroId = Number(String(this.actTab.AnimationId).slice(0, 4));
          var heroItemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(heroId);
          this.lbl_tips1.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_recruit_9", [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(heroItemTab.Name)]);
          this.refreshTips();
        }
        /* 初始化map */


        setRecruitMap() {
          this._recruitHerosMap.clear();

          var heros = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getHeros();

          for (var i = 0; i < heros.length; i++) {
            var heroInfo = heros[i];
            var heroTab = heroInfo.heroTable;

            if (heroTab.Aptitude == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_SR) {
              if (this._recruitHerosMap.has(heroTab.Id)) {
                this._recruitHerosMap.set(heroTab.Id, this._recruitHerosMap.get(heroTab.Id) + 1);
              } else {
                this._recruitHerosMap.set(heroTab.Id, 1);
              }
            }
          }
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GachaRsp, this.on_s2c_GachaRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveActivityGachaUpTasksRewardsRsp, this.on_s2c_ReceiveActivityGachaUpTasksRewardsRsp, this);
        }

        unRegister() {
          super.unRegister();
        }

        timeUpdate() {
          this.countDown--;

          if (this.countDown <= 0) {
            this.unschedule(this.timeUpdate);
            this.onClose();
          } else {
            this.lbl_time.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
              error: Error()
            }), setTextTime) : setTextTime)(this.countDown);
          }
        } // 创建任务列表


        createTaskList() {
          this.node_content.destroyAllChildren();
          var taskIds = this.actTab.TaskIds;

          for (var i = taskIds.length - 1; i >= 0; i--) {
            var item = instantiate(this.pfb_item);
            this.node_content.addChild(item);
            item.name = String(taskIds[i]);
            var itemTs = item.getComponent(_crd && RecruitLimitItem === void 0 ? (_reportPossibleCrUseOfRecruitLimitItem({
              error: Error()
            }), RecruitLimitItem) : RecruitLimitItem);
            itemTs.initData(this.curInfo.TabId, taskIds[i]);
            var taskInfo = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
              error: Error()
            }), TaskData) : TaskData).ins.getGachaUpTaskInfo(taskIds[i]);

            if (!this._curGachaCount && i === taskIds.length - 1 && taskInfo.progress >= taskInfo.taskTable.FinishParam1) {
              this._curGachaCount = taskInfo.progress;
            }

            if (!this._curGachaCount && taskInfo.progress < taskInfo.taskTable.FinishParam1) {
              this._curGachaCount = taskInfo.progress;
            }
          }

          this.lbl_progress_gacha.string = String(this._curGachaCount);

          if (this._curGachaCount === 0) {
            this.scroll_view.scrollToTop();
          } else {
            var progress = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.getAllUpGotTaskProgress(this.curInfo.TabId);
            this.scroll_view.scrollTo(new Vec2(0, progress), 0.3);
          }
        } // 刷新tips


        refreshTips() {
          var gachaTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GachaTableById.getValue(this.actTab.GachaIds[0]);
          var totalCount = gachaTab.ShowCount;

          for (var i = 0; i < (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.drop.data.length; i++) {
            var data = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.drop.data[i];

            if (data.id == "up_100") {
              totalCount = totalCount - data.sum;
              break;
            }
          }

          this.lbl_tips.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_recruit_10", [totalCount]);
        }
        /* 十连抽 */


        gachaTen() {
          // 点击抽卡播放xuanzhuan结束后弹出抽卡展示界面
          if (this._isGacha) {
            return;
          }

          this.sendGacha(this.actTab.GachaIds[1]);
        }
        /* 单抽 */


        gachaOnce() {
          if (this._isGacha) {
            return;
          }

          this.sendGacha(this.actTab.GachaIds[0]);
        }

        sendGacha(id) {
          var self = this;
          var gachaTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GachaTableById.getValue(id);
          var count = gachaTab.ItemCount;
          var itemId = gachaTab.ItemId;
          var itemCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(itemId);

          if ((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getHeroBagFull(gachaTab.ItemCount)) {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_herobag_1"));
            return;
          }

          if (itemCount < count) {
            (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
              error: Error()
            }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(itemId);
            return;
          }

          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GachaReq();
          msg.id = id;
          msg.fromAdv = false;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GachaReq, msg);
        }

        on_s2c_GachaRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;

          if (msg.id % 100 === 1) {
            this._curGachaCount += 1;
          } else {
            this._curGachaCount += 10;
          }

          this.refreshTaskProgress();
          this.showGachaView(msg.rewards, msg.id);
          this.createTaskList();
          this.refreshTips();
        } // 刷新任务数据


        refreshTaskProgress() {
          var taskIds = this.actTab.TaskIds;

          for (var i = 0; i < taskIds.length; i++) {
            var taskInfo = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
              error: Error()
            }), TaskData) : TaskData).ins.getGachaUpTaskInfo(taskIds[i]);
            taskInfo.progress = this._curGachaCount;
          }
        }

        showGachaView(_rewards, _id) {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RecruitGetPop,
            data: {
              rewards: _rewards,
              id: _id,
              type: (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
                error: Error()
              }), RecruitType) : RecruitType).GaChaUp,
              map: this._recruitHerosMap
            }
          });
        }

        createToggle() {
          this.node_toggle_content.destroyAllChildren();

          if (this.actInfos.length > 1) {
            for (var i = 0; i < this.actInfos.length; i++) {
              var _key = this.actInfos[i];
              var item = null;
              var itemTs = null;
              item = instantiate(this.pfb_toggle_item);
              item.parent = this.node_toggle_content;
              item.name = String(_key);
              itemTs = item.getComponent(_crd && RecruitLimitToggleItem === void 0 ? (_reportPossibleCrUseOfRecruitLimitToggleItem({
                error: Error()
              }), RecruitLimitToggleItem) : RecruitLimitToggleItem);
              itemTs.setData(i, this);
            }
          }
        }

        onClickGacha() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.jumpLayer((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Module.Module_RecruitView);
        }

        on_s2c_ReceiveActivityGachaUpTasksRewardsRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            for (var i = 0; i < msg.taskIds.length; i++) {
              var item = this.node_content.getChildByName(String(msg.taskIds[i]));
              var itemTs = item.getComponent(_crd && RecruitLimitItem === void 0 ? (_reportPossibleCrUseOfRecruitLimitItem({
                error: Error()
              }), RecruitLimitItem) : RecruitLimitItem);
              itemTs.gotAward();
              var progress = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                error: Error()
              }), ActivityData) : ActivityData).ins.getAllUpGotTaskProgress(msg.activityId);
              this.scroll_view.scrollTo(new Vec2(0, progress), 0.3);
            }
          }
        }

        onClickLimitProbability() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RecruitLimitProbabilityPop1000
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_spine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_time", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scroll_view", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_progress_gacha", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sp_recruit_item_1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sp_recruit_item_10", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbl_tips", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_tips1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "pfb_toggle_item", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_content", [_dec13], {
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
//# sourceMappingURL=361ac999f7f1f88f697ce3deeda54e53108137e8.js.map
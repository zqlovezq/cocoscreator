System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "client_protocol", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, ProgressBar, ViewScreen, tab, LangMgr, GameUtil, setTextTime, FengyunRankingStageItem, proto, ItemPoolMgr, PlayerHeadItem, SimpleRoleInfo, FengyunRankData, TaskInfo, UIMgr, FengyunRankControl, ItemInfo, EventMgr, ViewName, RoleData, RedMgr, RedDotType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, FengyunRankingView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewScreen(extras) {
    _reporterNs.report("ViewScreen", "../../../framework/base/ViewScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFengyunRankingStageItem(extras) {
    _reporterNs.report("FengyunRankingStageItem", "./FengyunRankingStageItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerHeadItem(extras) {
    _reporterNs.report("PlayerHeadItem", "../common/PlayerHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleRoleInfo(extras) {
    _reporterNs.report("SimpleRoleInfo", "../friends/SimpleRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFengyunRankData(extras) {
    _reporterNs.report("FengyunRankData", "./FengyunRankData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskInfo(extras) {
    _reporterNs.report("TaskInfo", "../task/TaskInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFengyunRankControl(extras) {
    _reporterNs.report("FengyunRankControl", "./FengyunRankControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
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
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      ViewScreen = _unresolved_2.ViewScreen;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }, function (_unresolved_5) {
      GameUtil = _unresolved_5.GameUtil;
      setTextTime = _unresolved_5.setTextTime;
    }, function (_unresolved_6) {
      FengyunRankingStageItem = _unresolved_6.FengyunRankingStageItem;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_7) {
      ItemPoolMgr = _unresolved_7.ItemPoolMgr;
    }, function (_unresolved_8) {
      PlayerHeadItem = _unresolved_8.PlayerHeadItem;
    }, function (_unresolved_9) {
      SimpleRoleInfo = _unresolved_9.SimpleRoleInfo;
    }, function (_unresolved_10) {
      FengyunRankData = _unresolved_10.FengyunRankData;
    }, function (_unresolved_11) {
      TaskInfo = _unresolved_11.TaskInfo;
    }, function (_unresolved_12) {
      UIMgr = _unresolved_12.UIMgr;
    }, function (_unresolved_13) {
      FengyunRankControl = _unresolved_13.FengyunRankControl;
    }, function (_unresolved_14) {
      ItemInfo = _unresolved_14.ItemInfo;
    }, function (_unresolved_15) {
      EventMgr = _unresolved_15.EventMgr;
    }, function (_unresolved_16) {
      ViewName = _unresolved_16.ViewName;
    }, function (_unresolved_17) {
      RoleData = _unresolved_17.RoleData;
    }, function (_unresolved_18) {
      RedMgr = _unresolved_18.RedMgr;
    }, function (_unresolved_19) {
      RedDotType = _unresolved_19.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9bbdbCX079El6oLcPwtDs3g", "FengyunRankingView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * FengyunRankingView
       * zhudingchao
       * Wed Jul 17 2024 15:28:28 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/fengyunRanking/FengyunRankingView.ts
       *
       */

      _export("FengyunRankingView", FengyunRankingView = (_dec = ccclass('FengyunRankingView'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property([Node]), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Prefab), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(ProgressBar), _dec12 = property(Label), _dec13 = property([Node]), _dec14 = property(Node), _dec(_class = (_class2 = class FengyunRankingView extends (_crd && ViewScreen === void 0 ? (_reportPossibleCrUseOfViewScreen({
        error: Error()
      }), ViewScreen) : ViewScreen) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "titleLab", _descriptor, this);

          _initializerDefineProperty(this, "tiemNumLab", _descriptor2, this);

          _initializerDefineProperty(this, "rankNodes", _descriptor3, this);

          _initializerDefineProperty(this, "myRewaedNode", _descriptor4, this);

          _initializerDefineProperty(this, "myRankLab", _descriptor5, this);

          _initializerDefineProperty(this, "rankRewardNode", _descriptor6, this);

          _initializerDefineProperty(this, "rankRewardItemPrefab", _descriptor7, this);

          _initializerDefineProperty(this, "taskDecLab", _descriptor8, this);

          _initializerDefineProperty(this, "taskRewardNode", _descriptor9, this);

          _initializerDefineProperty(this, "taskBar", _descriptor10, this);

          _initializerDefineProperty(this, "taskNumLab", _descriptor11, this);

          _initializerDefineProperty(this, "taskBgNodes", _descriptor12, this);

          _initializerDefineProperty(this, "red_node", _descriptor13, this);

          this.rewardTab = void 0;
          this.rankMsg = void 0;
          this.taskIds = void 0;
          this.currTaskInfo = void 0;
          this.isAccount = void 0;
          this.lastEndTimer = void 0;

          this.lastTimerCallBack = () => {
            this.lastEndTimer--;

            if (this.lastEndTimer >= 0) {
              this.tiemNumLab.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
                error: Error()
              }), setTextTime) : setTextTime)(this.lastEndTimer);
            } else {
              //this.tiemNumLab.string="已结算"
              this.tiemNumLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("ui_commondesc_116");
              this.isAccount = false;
              this.unschedule(this.lastTimerCallBack);
              this.initTaskInfo();
            }
          };
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveHonorRollTasksRewardsRsp, this.on_s2c_ReceiveHonorRollTasksRewardsRsp, this);
        }

        onShow() {
          if (this.openData["rankMsg"] && this.openData["id"]) {
            let id = this.openData["id"];
            this.rankMsg = this.openData["rankMsg"];
            let table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ActivityRankTableById.getValue(id);
            this.titleLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(table.WordKey);
            this.rewardTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().RankRewardTableById.getValue(table.RankId);
            this.taskIds = table.TaskIds;
            this.lastEndTimer = this.rankMsg.settleTime - (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getServerUtcTime();

            if (this.lastEndTimer < 0) {
              this.isAccount = true; //this.tiemNumLab.string="已结算"

              this.tiemNumLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("ui_commondesc_116");
            } else {
              this.isAccount = false;
              this.tiemNumLab.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
                error: Error()
              }), setTextTime) : setTextTime)(this.lastEndTimer);
              this.schedule(this.lastTimerCallBack, 1);
            }

            this.initReward();
            this.initRank();
            this.initTaskInfo();
            this.refreshRed();
          }
        }

        initRank() {
          if (this.rankMsg.ranking >= 0) {
            this.myRankLab.string = "" + (this.rankMsg.ranking + 1);
          } else {
            this.myRankLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_rank_1");
          }

          let list = this.rankMsg.rankList;

          for (let i = 0; i < 3; i++) {
            if (list[i]) {
              this.setRankInfo(i, list[i]);
            } else {
              this.setRankInfo(i, null);
            }
          }
        }

        setRankInfo(index, msg) {
          let node = this.rankNodes[index];

          if (msg === null) {
            node.active = false;
            return;
          }

          let headItem = node.getChildByName("PlayerHeadItem");
          let nameLab = node.getChildByName("name_txt").getComponent(Label);
          let infoLab = node.getChildByName("info_txt").getComponent(Label);
          let not = node.getChildByName("nobody_txt");

          if (msg) {
            // let herad=new 
            let sinfo = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
              error: Error()
            }), SimpleRoleInfo) : SimpleRoleInfo)(msg.simple);
            headItem.getComponent(_crd && PlayerHeadItem === void 0 ? (_reportPossibleCrUseOfPlayerHeadItem({
              error: Error()
            }), PlayerHeadItem) : PlayerHeadItem).initHeadInfo({
              roleInfo: sinfo
            });
            not.active = false;
            nameLab.string = msg.simple.name;
            let table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().QuestLogTableByLevel.getValue(sinfo.reputation);

            if (table) {
              infoLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(table.Name);
            } else {
              infoLab.string = "";
            }
          } else {
            not.active = true;
            nameLab.node.active = false;
            headItem.active = false;
            infoLab.node.active = false;
          }
        }

        initReward() {
          let ranks = this.rewardTab.Ranking;
          let myRewards = [];

          for (let key in ranks) {
            if (ranks[key] != "") {
              let strs = ranks[key].split(";");
              let rewards = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                error: Error()
              }), GameUtil) : GameUtil).getRewardsByDropId(this.rewardTab.DropId[key]);
              let item = instantiate(this.rankRewardItemPrefab);
              item.parent = this.rankRewardNode;
              let min = Number(strs[0]);
              let max = Number(strs[1]);
              item.getComponent(_crd && FengyunRankingStageItem === void 0 ? (_reportPossibleCrUseOfFengyunRankingStageItem({
                error: Error()
              }), FengyunRankingStageItem) : FengyunRankingStageItem).initView(min, max, rewards);

              if (this.rankMsg.ranking > -1) {
                if (this.rankMsg.ranking + 1 <= min && this.rankMsg.ranking + 1 <= max) {
                  myRewards = rewards;
                }
              }
            }
          }

          this.myRewaedNode.removeAllChildren();

          for (let key in myRewards) {
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(myRewards[key], this.myRewaedNode);
          }
        }

        initTaskInfo() {
          let isAccount = this.isAccount;
          let msg = (_crd && FengyunRankData === void 0 ? (_reportPossibleCrUseOfFengyunRankData({
            error: Error()
          }), FengyunRankData) : FengyunRankData).ins.getHonorRollInfoByActId(101);
          let currTask = null;

          for (let key in this.taskIds) {
            let task = msg.tasks.find(a => a.id == this.taskIds[key]);

            if (task) {
              if (!task.isReceived && !currTask) {
                currTask = task;
              }
            }
          }

          for (let key in this.taskBgNodes) {
            this.taskBgNodes[key].active = false;
          }

          if (!currTask) {
            currTask = msg.tasks.find(a => a.id == this.taskIds[this.taskIds.length - 1]);
          }

          if (currTask) {
            let taskInfo = new (_crd && TaskInfo === void 0 ? (_reportPossibleCrUseOfTaskInfo({
              error: Error()
            }), TaskInfo) : TaskInfo)(currTask);

            if (isAccount) {
              this.taskBgNodes[3].active = true;
            } else {
              if (taskInfo.isReceived) {
                this.taskBgNodes[2].active = true;
              } else if (taskInfo.isCanReceived) {
                this.taskBgNodes[0].active = true;
              } else {
                this.taskBgNodes[1].active = true;
              }
            }

            this.taskDecLab.node.parent.active = true;
            this.taskDecLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(taskInfo.taskTable.Describe);

            if (taskInfo.progress >= taskInfo.taskTable.FinishParam1) {
              this.taskBar.progress = 1;
              this.taskNumLab.string = taskInfo.progress + "/" + taskInfo.progress;
            } else {
              this.taskBar.progress = taskInfo.progress / taskInfo.taskTable.FinishParam1;
              this.taskNumLab.string = taskInfo.progress + "/" + taskInfo.taskTable.FinishParam1;
            }

            this.currTaskInfo = taskInfo;
            this.taskRewardNode.removeAllChildren();

            for (let key in this.currTaskInfo.taskTable.RewardItemIds) {
              let info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                error: Error()
              }), ItemInfo) : ItemInfo)();
              info.initItemData(this.currTaskInfo.taskTable.RewardItemIds[key], this.currTaskInfo.taskTable.RewardItemNum[key]);
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(info, this.taskRewardNode);
            }
          } else {
            this.taskDecLab.node.parent.active = false;
          }
        }

        onClickReceived() {
          if (this.currTaskInfo && this.currTaskInfo.isCanReceived) {
            (_crd && FengyunRankControl === void 0 ? (_reportPossibleCrUseOfFengyunRankControl({
              error: Error()
            }), FengyunRankControl) : FengyunRankControl).ins.reqReceiveHonorRollTasksRewards(101, [this.currTaskInfo.id]);
          }
        }

        onClickGoto() {
          if (this.currTaskInfo && this.currTaskInfo.taskTable.JumpUI) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.jumpLayer(this.currTaskInfo.taskTable.JumpUI, this.currTaskInfo.taskTable.JumpParam[0]);
          }
        }

        on_s2c_ReceiveHonorRollTasksRewardsRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            if (msg.rewards && msg.rewards.length > 0) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).CongratulationPop,
                data: msg.rewards
              });
            }

            this.initTaskInfo();
            this.refreshRed();
          }
        }

        refreshRed() {
          this.red_node.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Feng_Yun_Rank, String(101), String(this.currTaskInfo.id));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tiemNumLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rankNodes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "myRewaedNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "myRankLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rankRewardNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rankRewardItemPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "taskDecLab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "taskRewardNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "taskBar", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "taskNumLab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "taskBgNodes", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "red_node", [_dec14], {
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
//# sourceMappingURL=1d44c24e676441bbb7c676820d9220b83288a5d7.js.map
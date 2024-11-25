System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, ScrollView, ViewPop, EventMgr, proto, TaskControl, TaskBoxItem, LocalEvent, TaskData, TaskCaseItem, tab, ItemData, UIMgr, ViewName, OpenFunctionMgr, TASKDAILY, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, TaskView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskControl(extras) {
    _reporterNs.report("TaskControl", "./TaskControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskBoxItem(extras) {
    _reporterNs.report("TaskBoxItem", "./TaskBoxItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskData(extras) {
    _reporterNs.report("TaskData", "./TaskData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskCaseItem(extras) {
    _reporterNs.report("TaskCaseItem", "./TaskCaseItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskInfo(extras) {
    _reporterNs.report("TaskInfo", "./TaskInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTASKDAILY(extras) {
    _reporterNs.report("TASKDAILY", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
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
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      TaskControl = _unresolved_4.TaskControl;
    }, function (_unresolved_5) {
      TaskBoxItem = _unresolved_5.TaskBoxItem;
    }, function (_unresolved_6) {
      LocalEvent = _unresolved_6.LocalEvent;
    }, function (_unresolved_7) {
      TaskData = _unresolved_7.TaskData;
    }, function (_unresolved_8) {
      TaskCaseItem = _unresolved_8.TaskCaseItem;
    }, function (_unresolved_9) {
      tab = _unresolved_9.tab;
    }, function (_unresolved_10) {
      ItemData = _unresolved_10.ItemData;
    }, function (_unresolved_11) {
      UIMgr = _unresolved_11.UIMgr;
    }, function (_unresolved_12) {
      ViewName = _unresolved_12.ViewName;
    }, function (_unresolved_13) {
      OpenFunctionMgr = _unresolved_13.OpenFunctionMgr;
    }, function (_unresolved_14) {
      TASKDAILY = _unresolved_14.TASKDAILY;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "604e7to5URAUZYE8MjRTZxB", "TaskView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'ScrollView']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * TaskView
       * zhudingchao
       * Tue Jun 04 2024 11:23:12 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/task/TaskView.ts
       *
       */

      _export("TaskView", TaskView = (_dec = ccclass('TaskView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property([_crd && TaskBoxItem === void 0 ? (_reportPossibleCrUseOfTaskBoxItem({
        error: Error()
      }), TaskBoxItem) : TaskBoxItem]), _dec10 = property(Prefab), _dec11 = property(ScrollView), _dec12 = property([Node]), _dec(_class = (_class2 = class TaskView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "taskNode", _descriptor, this);

          _initializerDefineProperty(this, "achieveNode", _descriptor2, this);

          _initializerDefineProperty(this, "taskContent", _descriptor3, this);

          _initializerDefineProperty(this, "achieveContent", _descriptor4, this);

          _initializerDefineProperty(this, "activeNumLab", _descriptor5, this);

          _initializerDefineProperty(this, "dayTaskNode", _descriptor6, this);

          _initializerDefineProperty(this, "weekTaskNode", _descriptor7, this);

          _initializerDefineProperty(this, "taskBoxItems", _descriptor8, this);

          _initializerDefineProperty(this, "taskCaseItemPrefab", _descriptor9, this);

          _initializerDefineProperty(this, "taskScrollView", _descriptor10, this);

          _initializerDefineProperty(this, "toggles", _descriptor11, this);

          this.currTag = (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
            error: Error()
          }), TASKDAILY) : TASKDAILY).DAILY;
          this.taskCaseItems = [];
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetDailyTasksRsp, this.on_s2c_GetDailyTasksRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveDailyTaskRewardRsp, this.on_s2c_ReceiveDailyTaskRewardRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveDailyActivityTaskRewardRsp, this.on_s2c_ReceiveDailyActivityTaskRewardRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetWeeklyTasksRsp, this.on_s2c_GetWeeklyTasksRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveWeeklyTaskRewardRsp, this.on_s2c_ReceiveWeeklyTaskRewardRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveWeeklyActivityTaskRewardRsp, this.on_s2c_ReceiveWeeklyActivityTaskRewardRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetAchievementTasksRsp, this.on_s2c_GetAchievementRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveAchievementTaskRewardRsp, this.on_s2c_ReceiveAchievementTaskRewardRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Item_Update, this.itemChange, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.TaskChangePush, this.on_s2c_TaskChangePush, this);
          (_crd && TaskControl === void 0 ? (_reportPossibleCrUseOfTaskControl({
            error: Error()
          }), TaskControl) : TaskControl).ins.request();
        }

        onShow() {
          if (!(_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_DailyTask)) {
            this.toggles[0].active = false;
          }

          if (!(_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_WeeklyTask)) {
            this.toggles[1].active = false;
          }

          if (!(_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_AchievementTask)) {
            this.toggles[2].active = false;
          }

          if (this.openData && this.openData["type"]) {
            this.currTag = this.openData["type"];
          }
        }

        initDailyTaskView() {
          if (!this.toggles[0].active) {
            return;
          }

          this.removeCaseItem();
          this.dayTaskNode.active = true;
          this.weekTaskNode.active = false;
          this.taskNode.active = true;
          this.achieveNode.active = false;
          var taskInfo = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
            error: Error()
          }), TaskData) : TaskData).ins.getDailyInfos();
          this.sortTaskList(taskInfo);

          for (var key in taskInfo) {
            var item = this.creatorCaseItem(Number(key));
            item.node.parent = this.taskContent;
            item.initData(taskInfo[key]);
          }

          this.updateBoxItem();
          this.taskScrollView.scrollToTop();
        }

        initWeekTaskView() {
          if (!this.toggles[1].active) {
            return;
          }

          this.removeCaseItem();
          this.dayTaskNode.active = false;
          this.weekTaskNode.active = true;
          this.taskNode.active = true;
          this.achieveNode.active = false;
          var taskInfo = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
            error: Error()
          }), TaskData) : TaskData).ins.getWeekInfos();
          this.sortTaskList(taskInfo);

          for (var key in taskInfo) {
            var item = this.creatorCaseItem(Number(key));
            item.node.parent = this.taskContent;
            item.initData(taskInfo[key]);
          }

          this.updateBoxItem();
          this.taskScrollView.scrollToTop();
        }

        initAchievement() {
          if (!this.toggles[2].active) {
            return;
          }

          this.removeCaseItem();
          this.taskNode.active = false;
          this.achieveNode.active = true;
          var taskInfo = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
            error: Error()
          }), TaskData) : TaskData).ins.getAchievementInfos();
          this.sortTaskList(taskInfo);

          for (var key in taskInfo) {
            var item = this.creatorCaseItem(Number(key));
            item.node.parent = this.achieveContent;
            item.initData(taskInfo[key]);
          }
        }

        updateBoxItem() {
          if (this.currTag == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
            error: Error()
          }), TASKDAILY) : TASKDAILY).DAILY) {
            var actives = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().DailyTaskRewardNeedCount;
            var dailyActiveNum = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).CurrencyType.CurrencyType_DailyActivity);
            this.activeNumLab.string = dailyActiveNum + "";

            for (var i = 0; i < actives.length; i++) {
              var lastValue = 0;
              var pro = 0;

              if (i > 0) {
                lastValue = actives[i - 1];
              }

              if (dailyActiveNum <= lastValue) {
                pro = 0;
              } else if (dailyActiveNum >= actives[i]) {
                pro = 1;
              } else {
                pro = (dailyActiveNum - lastValue) / (actives[i] - lastValue);
              }

              this.taskBoxItems[i].initView(1, i, pro, actives[i]);
            }
          } else if (this.currTag == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
            error: Error()
          }), TASKDAILY) : TASKDAILY).WEEK) {
            var _actives = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().WeeklyTaskBoxTable;
            var weekActiveNum = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).CurrencyType.CurrencyType_WeeklyActivity);
            this.activeNumLab.string = weekActiveNum + "";

            for (var _i = 0; _i < _actives.length; _i++) {
              var _lastValue = 0;
              var _pro = 0;

              if (_i > 0) {
                _lastValue = _actives[_i - 1].Id;
              }

              if (weekActiveNum <= _lastValue) {
                _pro = 0;
              } else if (weekActiveNum >= _actives[_i].Id) {
                _pro = 1;
              } else {
                _pro = (weekActiveNum - _lastValue) / (_actives[_i].Id - _lastValue);
              }

              this.taskBoxItems[_i].initView(2, _i, _pro, _actives[_i].Id);
            }
          }
        }

        sortTaskList(infos) {
          infos.sort((a, b) => {
            if (a.isReceived && b.isReceived) {
              return a.taskTabId - b.taskTabId;
            }

            if (a.isCanReceived && b.isCanReceived) {
              return a.taskTabId - b.taskTabId;
            }

            if (a.isCanReceived) {
              return -1;
            }

            if (b.isCanReceived) {
              return 1;
            }

            if (a.isReceived) {
              return 1;
            }

            if (b.isReceived) {
              return -1;
            }

            return a.taskTabId - b.taskTabId;
          });
        }

        removeCaseItem() {
          if (this.taskCaseItems) {
            for (var key in this.taskCaseItems) {
              this.taskCaseItems[key].node.removeFromParent();
            }
          }
        }

        creatorCaseItem(index) {
          if (!this.taskCaseItems[index]) {
            var node = instantiate(this.taskCaseItemPrefab);
            var com = node.getComponent(_crd && TaskCaseItem === void 0 ? (_reportPossibleCrUseOfTaskCaseItem({
              error: Error()
            }), TaskCaseItem) : TaskCaseItem);
            this.taskCaseItems.push(com);
          }

          return this.taskCaseItems[index];
        }

        onClickToggle(event, tag) {
          tag = Number(tag);

          if (this.currTag != tag) {
            this.currTag = tag;

            if (tag == 1) {
              this.initDailyTaskView();
            } else if (tag == 2) {
              this.initWeekTaskView();
            } else {
              this.initAchievement();
            }
          }
        }

        itemChange(itemIds) {}

        on_s2c_GetDailyTasksRsp(msg) {
          if (this.currTag == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
            error: Error()
          }), TASKDAILY) : TASKDAILY).DAILY) {
            this.initDailyTaskView();
          }
        }

        on_s2c_GetWeeklyTasksRsp(msg) {
          if (this.currTag == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
            error: Error()
          }), TASKDAILY) : TASKDAILY).WEEK) {
            this.initWeekTaskView();
          }
        }

        on_s2c_GetAchievementRsp(msg) {
          if (this.currTag == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
            error: Error()
          }), TASKDAILY) : TASKDAILY).ACHIEVEMENT) {
            this.initAchievement();
          }
        }

        on_s2c_ReceiveDailyTaskRewardRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            if (this.currTag == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
              error: Error()
            }), TASKDAILY) : TASKDAILY).DAILY) {
              this.initDailyTaskView();
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
        }

        on_s2c_ReceiveDailyActivityTaskRewardRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.updateBoxItem();
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            });
          }
        }

        on_s2c_ReceiveWeeklyTaskRewardRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            if (this.currTag == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
              error: Error()
            }), TASKDAILY) : TASKDAILY).WEEK) {
              this.initWeekTaskView();
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
        }

        on_s2c_ReceiveWeeklyActivityTaskRewardRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.updateBoxItem();
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            });
          }
        }

        on_s2c_ReceiveAchievementTaskRewardRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            if (this.currTag == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
              error: Error()
            }), TASKDAILY) : TASKDAILY).ACHIEVEMENT) {
              this.initAchievement();
            }
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

        on_s2c_TaskChangePush(msg) {
          if (this.currTag == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
            error: Error()
          }), TASKDAILY) : TASKDAILY).DAILY) {
            this.initDailyTaskView();
          } else if (this.currTag == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
            error: Error()
          }), TASKDAILY) : TASKDAILY).WEEK) {
            this.initWeekTaskView();
          } else if (this.currTag == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
            error: Error()
          }), TASKDAILY) : TASKDAILY).ACHIEVEMENT) {
            this.initAchievement();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "taskNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "achieveNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "taskContent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "achieveContent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "activeNumLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "dayTaskNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "weekTaskNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "taskBoxItems", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "taskCaseItemPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "taskScrollView", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "toggles", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6578f94859cf55e8c07b9787528177468cfb6b40.js.map
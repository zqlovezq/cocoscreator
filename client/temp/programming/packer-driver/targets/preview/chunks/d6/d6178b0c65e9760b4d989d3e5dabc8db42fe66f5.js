System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, TaskInfo, tab, ItemInfo, AssociationData, TaskData, _crd, ccclass, property;

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskInfo(extras) {
    _reporterNs.report("TaskInfo", "./TaskInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "../association/AssociationData", _context.meta, extras);
  }

  _export("TaskData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      TaskInfo = _unresolved_2.TaskInfo;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      ItemInfo = _unresolved_4.ItemInfo;
    }, function (_unresolved_5) {
      AssociationData = _unresolved_5.AssociationData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff175nUs3VCLrriSHCFrMPf", "TaskData", undefined);

      __checkObsolete__(['Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 任务数据 */

      _export("TaskData", TaskData = class TaskData {
        constructor() {
          this.dailyTasksMap = void 0;
          this.dailyReceivedIndexes = void 0;
          this.weekTasksMap = void 0;
          this.weekReceivedIndexes = void 0;
          this.achieveTasksMap = void 0;
          this.battlePassTasksMap = void 0;
          //战令任务
          this.TrialTasksMap = void 0;
          //试炼任务
          this.GuildTasksMap = void 0;
          //公会任务
          this.GachaTasksMap = void 0;
          //抽卡奖池up任务
          this.todayChapterId = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new TaskData();
          }

          return this._instance;
        }

        purge() {}

        initDailyTasks(msg) {
          if (this.dailyTasksMap) {
            this.dailyTasksMap.clear();
          } else {
            this.dailyTasksMap = new Map();
          }

          var tasks = msg.tasks;

          for (var key in tasks) {
            var info = new (_crd && TaskInfo === void 0 ? (_reportPossibleCrUseOfTaskInfo({
              error: Error()
            }), TaskInfo) : TaskInfo)();
            info.merge(tasks[key]);
            this.dailyTasksMap.set(info.id, info);
          }

          this.dailyReceivedIndexes = msg.ReceivedIndexes;
          this.todayChapterId = msg.TodayChapterId;
        }

        initWeekTasks(msg) {
          if (this.weekTasksMap) {
            this.weekTasksMap.clear();
          } else {
            this.weekTasksMap = new Map();
          }

          var tasks = msg.tasks;

          for (var key in tasks) {
            var info = new (_crd && TaskInfo === void 0 ? (_reportPossibleCrUseOfTaskInfo({
              error: Error()
            }), TaskInfo) : TaskInfo)();
            info.merge(tasks[key]);
            this.weekTasksMap.set(info.id, info);
          }

          this.weekReceivedIndexes = msg.ReceivedIndexes;
        }

        initAchieveTasks(msg) {
          if (this.achieveTasksMap) {
            this.achieveTasksMap.clear();
          } else {
            this.achieveTasksMap = new Map();
          }

          var tasks = msg.tasks;

          for (var key in tasks) {
            var info = new (_crd && TaskInfo === void 0 ? (_reportPossibleCrUseOfTaskInfo({
              error: Error()
            }), TaskInfo) : TaskInfo)();
            info.merge(tasks[key]);
            this.achieveTasksMap.set(info.id, info);
          }
        } // 初始化战令任务接口


        initBattlePassTasks(msg) {
          if (this.battlePassTasksMap) {
            this.battlePassTasksMap.clear();
          } else {
            this.battlePassTasksMap = new Map();
          }

          msg.forEach((val, key) => {
            var battlePassData = val;
            var tasks = battlePassData.tasks;

            for (var _key in tasks) {
              var info = new (_crd && TaskInfo === void 0 ? (_reportPossibleCrUseOfTaskInfo({
                error: Error()
              }), TaskInfo) : TaskInfo)();
              info.merge(tasks[_key]);
              this.battlePassTasksMap.set(info.id, info);
            }
          });
        } // 初始化试炼任务接口


        initTrialTasks(msg) {
          if (this.TrialTasksMap) {
            this.TrialTasksMap.clear();
          } else {
            this.TrialTasksMap = new Map();
          }

          msg.forEach((val, key) => {
            var trialData = val;
            var tasks = trialData.tasks;

            for (var _key2 in tasks) {
              var info = new (_crd && TaskInfo === void 0 ? (_reportPossibleCrUseOfTaskInfo({
                error: Error()
              }), TaskInfo) : TaskInfo)();
              info.merge(tasks[_key2]);
              this.TrialTasksMap.set(info.id, info);
            }
          });
        } // 初始化帮会任务接口


        initGuildTasks() {
          if (this.GuildTasksMap) {
            this.GuildTasksMap.clear();
          } else {
            this.GuildTasksMap = new Map();
          }

          var tasks = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionInfo().tasks;

          if (tasks) {
            for (var key in tasks) {
              var info = new (_crd && TaskInfo === void 0 ? (_reportPossibleCrUseOfTaskInfo({
                error: Error()
              }), TaskInfo) : TaskInfo)();
              info.merge(tasks[key]);
              this.GuildTasksMap.set(info.id, info);
            }
          }
        } // 初始化奖池up任务接口


        initGachaTasks(msg) {
          if (this.GachaTasksMap) {
            this.GachaTasksMap.clear();
          } else {
            this.GachaTasksMap = new Map();
          }

          var map = msg.activityGachaUpMap;

          if (map) {
            for (var key in map) {
              var tasks = map[key].tasks;

              for (var i = 0; i < tasks.length; i++) {
                var info = new (_crd && TaskInfo === void 0 ? (_reportPossibleCrUseOfTaskInfo({
                  error: Error()
                }), TaskInfo) : TaskInfo)();
                info.merge(tasks[i]);
                this.GachaTasksMap.set(info.id, info);
              }
            }
          }
        }

        updateTask(msg) {
          if (msg.addedTasks && msg.addedTasks.length > 0) {
            var tasks = msg.addedTasks;

            for (var key in tasks) {
              var info = new (_crd && TaskInfo === void 0 ? (_reportPossibleCrUseOfTaskInfo({
                error: Error()
              }), TaskInfo) : TaskInfo)();
              info.merge(tasks[key]);

              if (info.taskTable.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_DailyTask) {
                if (this.dailyTasksMap) {
                  this.dailyTasksMap.set(info.id, info);
                }
              } else if (info.taskTable.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_WeeklyTask) {
                if (this.weekTasksMap) {
                  this.weekTasksMap.set(info.id, info);
                }
              } else if (info.taskTable.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_AchievementTask) {
                if (this.achieveTasksMap) {
                  this.achieveTasksMap.set(info.id, info);
                }
              }
            }
          }

          if (msg.finishedTasks && msg.finishedTasks.length > 0) {
            var _tasks = msg.finishedTasks;

            for (var _key3 in _tasks) {
              var taskTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().TaskTableById.getValue(_tasks[_key3].taskTabId);
              var _info = null;

              if (taskTab.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_DailyTask) {
                if (this.dailyTasksMap) {
                  _info = this.dailyTasksMap.get(_tasks[_key3].id);
                }
              } else if (taskTab.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_WeeklyTask) {
                if (this.weekTasksMap) {
                  _info = this.weekTasksMap.get(_tasks[_key3].id);
                }
              } else if (taskTab.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_AchievementTask) {
                if (this.achieveTasksMap) {
                  _info = this.achieveTasksMap.get(_tasks[_key3].id);
                }
              } else if (taskTab.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_BattlePass) {
                if (this.battlePassTasksMap) {
                  _info = this.battlePassTasksMap.get(_tasks[_key3].id);
                }
              } else if (taskTab.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_ActivityNewPlayerTask) {
                if (this.TrialTasksMap) {
                  _info = this.TrialTasksMap.get(_tasks[_key3].id);
                }
              } else if (taskTab.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_GuildDailyTask) {
                if (this.GuildTasksMap) {
                  _info = this.GuildTasksMap.get(_tasks[_key3].id);
                }
              }

              if (_info) {
                _info.merge(_tasks[_key3]);
              }
            }
          }

          if (msg.removedTasks && msg.removedTasks.length > 0) {
            var _tasks2 = msg.removedTasks;

            for (var _key4 in _tasks2) {
              var _taskTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().TaskTableById.getValue(_tasks2[_key4].taskTabId);

              if (_taskTab.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_DailyTask) {
                if (this.dailyTasksMap) {
                  this.dailyTasksMap.delete(_tasks2[_key4].id);
                }
              } else if (_taskTab.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_WeeklyTask) {
                if (this.weekTasksMap) {
                  this.weekTasksMap.delete(_tasks2[_key4].id);
                }
              } else if (_taskTab.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_AchievementTask) {
                if (this.achieveTasksMap) {
                  this.achieveTasksMap.delete(_tasks2[_key4].id);
                }
              }
            }
          }
        }

        getDailyInfos() {
          if (!this.dailyTasksMap) {
            return null;
          }

          return Array.from(this.dailyTasksMap.values());
        }

        getWeekInfos() {
          if (!this.weekTasksMap) {
            return null;
          }

          return Array.from(this.weekTasksMap.values());
        }

        getAchievementInfos() {
          if (!this.achieveTasksMap) {
            return null;
          }

          return Array.from(this.achieveTasksMap.values());
        }

        getGuildInfos() {
          if (!this.GuildTasksMap) {
            return null;
          }

          return Array.from(this.GuildTasksMap.values());
        }
        /**
         * 获得是否领取每日活跃奖励
         * @param index 
         * @returns 
         */


        getIsGetDailyActiveReward(index) {
          return this.dailyReceivedIndexes.indexOf(index) >= 0;
        }

        receiveDailyTaskRewardSucc(ids) {
          for (var key in ids) {
            var info = this.dailyTasksMap.get(ids[key]);

            if (info) {
              info.isReceived = true;
            }
          }
        }

        receiveDailyActiveRewardSucc(ids) {
          this.dailyReceivedIndexes = this.dailyReceivedIndexes.concat(ids);
        }
        /**
         * 获得是否领取每日活跃奖励
         * @param index 
         * @returns 
         */


        getIsGetWeekActiveReward(index) {
          return this.weekReceivedIndexes.indexOf(index) >= 0;
        }

        getIsGetGuildActiveReward(index) {
          return (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionInfo().receivedActivityIndexes.indexOf(index) >= 0;
        }

        receiveWeekTaskRewardSucc(ids) {
          for (var key in ids) {
            var info = this.weekTasksMap.get(ids[key]);

            if (info) {
              info.isReceived = true;
            }
          }
        }

        receiveWeekActiveRewardSucc(ids) {
          this.weekReceivedIndexes = this.weekReceivedIndexes.concat(ids);
        }

        receiveAchieveTaskRewardSucc(ids) {
          for (var key in ids) {
            var info = this.achieveTasksMap.get(ids[key]);

            if (info) {
              info.isReceived = true;
            }
          }
        }

        getGuildActiveReward(index) {
          var mainChapter = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildLevelTableById.getValue((_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionSimpleInfo().level);
          var nums = mainChapter["TaskRewardNum" + (index + 1)];
          var ids = mainChapter["TaskBoxReward" + (index + 1)];
          var infos = [];

          for (var key in ids) {
            var item = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            item.initItemData(ids[key], nums[key]);
            infos.push(item);
          }

          return infos;
        }

        getDailyActiveReward(index) {
          var mainChapter = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MainChapterTableById.getValue(this.todayChapterId);
          var nums = mainChapter["DailyTaskNum" + (index + 1)];
          var ids = mainChapter["DailyTaskReward" + (index + 1)];
          var infos = [];

          for (var key in ids) {
            var item = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            item.initItemData(ids[key], nums[key]);
            infos.push(item);
          }

          return infos;
        }

        getWeekActiveReward(index) {
          var tableData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().WeeklyTaskBoxTable[index];
          var ids = tableData.BoxRewardItemIds;
          var nums = tableData.BoxRewardItemNum;
          var infos = [];

          for (var key in ids) {
            var item = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            item.initItemData(ids[key], nums[key]);
            infos.push(item);
          }

          return infos;
        }

        getBattlePassTaskInfo(taskid) {
          return this.battlePassTasksMap.get(taskid);
        }

        refreshBattlePassTaskInfo(tasks) {
          for (var i = 0; i < tasks.length; i++) {
            var info = this.battlePassTasksMap.get(tasks[i].id);

            if (info) {
              info.merge(tasks[i]);
            }
          }
        }

        getTrialTaskInfo(taskid) {
          if (this.TrialTasksMap.get(taskid)) {
            return this.TrialTasksMap.get(taskid);
          }

          var costomTask = new (_crd && TaskInfo === void 0 ? (_reportPossibleCrUseOfTaskInfo({
            error: Error()
          }), TaskInfo) : TaskInfo)();
          costomTask.id = taskid;
          costomTask.isReceived = false;
          costomTask.progress = 0;
          costomTask.taskTabId = taskid;
          costomTask.isUnLock = false;
          return costomTask;
        }

        getGuildTaskInfo(taskid) {
          if (this.GuildTasksMap.get(taskid)) {
            return this.GuildTasksMap.get(taskid);
          }

          var costomTask = new (_crd && TaskInfo === void 0 ? (_reportPossibleCrUseOfTaskInfo({
            error: Error()
          }), TaskInfo) : TaskInfo)();
          costomTask.id = taskid;
          costomTask.isReceived = false;
          costomTask.progress = 0;
          costomTask.taskTabId = taskid;
          costomTask.isUnLock = false;
          return costomTask;
        }

        receiveGuildTaskRewardSucc(ids) {
          for (var key in ids) {
            var info = this.GuildTasksMap.get(ids[key]);

            if (info) {
              info.isReceived = true;
            }
          }
        }

        receiveGuildActiveRewardSucc(ids) {
          if ((_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionInfo()) {
            for (var i = 0; i < ids.length; i++) {
              (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
                error: Error()
              }), AssociationData) : AssociationData).ins.getAssocitionInfo().receivedActivityIndexes.push(ids[i]);
            }
          }
        }

        getGachaUpTaskInfo(taskid) {
          if (this.GachaTasksMap.get(taskid)) {
            return this.GachaTasksMap.get(taskid);
          }
        }

        receiveGachaUpTaskRewardSucc(ids) {
          for (var key in ids) {
            var info = this.GachaTasksMap.get(ids[key]);

            if (info) {
              info.isReceived = true;
            }
          }
        }

      });

      TaskData._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d6178b0c65e9760b4d989d3e5dabc8db42fe66f5.js.map
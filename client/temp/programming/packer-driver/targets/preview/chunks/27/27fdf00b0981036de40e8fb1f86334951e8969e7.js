System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, TaskInfo, tab, EventMgr, LocalEvent, _dec, _class, _class2, _crd, ccclass, property, PrestigeData;

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskInfo(extras) {
    _reporterNs.report("TaskInfo", "../task/TaskInfo", _context.meta, extras);
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
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      LocalEvent = _unresolved_5.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "049b8ITcDVICaH5U8DJr1VP", "PrestigeData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * PrestigeData
       * zhudingchao
       * Thu Jun 06 2024 10:49:08 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/prestige/PrestigeData.ts
       *
       */

      _export("PrestigeData", PrestigeData = (_dec = ccclass('PrestigeData'), _dec(_class = (_class2 = class PrestigeData {
        constructor() {
          this.taskMap = void 0;
          this._level = 0;
          this._questLogTable = void 0;
          this.isInit = false;
          this._attrMap = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new PrestigeData();
          }

          return this._instance;
        }

        purge() {}

        initData(msg) {
          this.isInit = true;

          if (this.taskMap) {
            this.taskMap.clear();
          }

          this.taskMap = new Map();

          for (var key in msg.tasks) {
            var info = new (_crd && TaskInfo === void 0 ? (_reportPossibleCrUseOfTaskInfo({
              error: Error()
            }), TaskInfo) : TaskInfo)();
            info.merge(msg.tasks[key]);
            this.taskMap.set(info.taskTabId, info);
          }

          this.level = msg.level;
        }

        get level() {
          return this._level;
        }

        set level(lv) {
          if (this._level != lv) {
            this._level = lv;
            this._questLogTable = null;
            this.initAttrMap();
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).Prestige_Change);
          }
        }

        get questLogTable() {
          if (!this._questLogTable) {
            this._questLogTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().QuestLogTableByLevel.getValue(this.level);
          }

          return this._questLogTable;
        }

        getTaskInfoByTableId(taskTabId) {
          return this.taskMap.get(taskTabId);
        }

        getHomeShowTaskInfo() {
          if (!this.isInit) {
            return null;
          }

          var taskids = this.questLogTable.TaskIds;

          for (var key in taskids) {
            var info = this.getTaskInfoByTableId(taskids[key]);

            if (info && !info.isReceived) {
              return info;
            }
          }

          return this.getTaskInfoByTableId(taskids[0]);
        }

        receiveQuestLog(msg) {
          this.taskMap.forEach(value => {
            var index = msg.taskIds.indexOf(value.id);

            if (index >= 0) {
              value.isReceived = true;
            }
          });
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Prestige_Change);
        }

        updateTask(msg) {
          var isChange = false;

          if (msg.addedTasks && msg.addedTasks.length > 0) {
            var tasks = msg.addedTasks;

            for (var key in tasks) {
              var info = new (_crd && TaskInfo === void 0 ? (_reportPossibleCrUseOfTaskInfo({
                error: Error()
              }), TaskInfo) : TaskInfo)();
              info.merge(tasks[key]);

              if (info.taskTable.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_QuestLog) {
                if (this.taskMap) {
                  this.taskMap.set(info.taskTabId, info);
                }
              }
            }
          }

          if (msg.finishedTasks && msg.finishedTasks.length > 0) {
            var _tasks = msg.finishedTasks;

            for (var _key in _tasks) {
              var taskTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().TaskTableById.getValue(_tasks[_key].taskTabId);
              var _info = null;

              if (taskTab.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_QuestLog) {
                if (this.taskMap) {
                  _info = this.taskMap.get(_tasks[_key].taskTabId);
                }
              }

              if (_info) {
                _info.merge(_tasks[_key]);

                isChange = true;
              }
            }
          }

          if (msg.removedTasks && msg.removedTasks.length > 0) {
            var _tasks2 = msg.removedTasks;

            for (var _key2 in _tasks2) {
              var _taskTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().TaskTableById.getValue(_tasks2[_key2].taskTabId);

              if (_taskTab.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_QuestLog) {
                if (this.taskMap) {
                  this.taskMap.delete(_tasks2[_key2].taskTabId);
                }
              }
            }
          }

          if (isChange) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).Prestige_Change);
          }
        }

        getIsRedPoint() {
          var currTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().QuestLogTableByLevel.getValue(this.level); // 所有任务完成

          var maxLevel = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().QuestLogTable[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().QuestLogTable.length - 1].Level;

          if (this.level >= maxLevel) {
            return false;
          }

          var isCanLevel = true;

          if (currTable) {
            var taskIds = currTable.TaskIds;

            for (var key in taskIds) {
              var info = this.taskMap.get(taskIds[key]);

              if (info == null) {
                return false;
              }

              if (info && info.isCanReceived) {
                return true;
              }

              if (info && currTable.Level == PrestigeData.ins.level) {
                if (isCanLevel) {
                  isCanLevel = info.isReceived;
                }
              }
            }

            if (isCanLevel && currTable.Level == PrestigeData.ins.level) {
              return true;
            }
          }

          return false;
        }
        /**冒险日志属性加成map */


        get attrMap() {
          if (!this._attrMap) {
            this.initAttrMap();
          }

          return this._attrMap;
        }

        initAttrMap() {
          if (!this._attrMap) {
            this._attrMap = new Map();
          } else {
            this._attrMap.clear();
          }

          var attrTypes = this.questLogTable.QuestLogAttrType;

          for (var key in attrTypes) {
            // let table = tab.getData().EquipAttrTableById.getValue(this.baseAttr[key]);
            // let addValue=
            if (this._attrMap.has(attrTypes[key])) {
              var value = this._attrMap.get(attrTypes[key]);

              this._attrMap.set(attrTypes[key], value + this.questLogTable.QuestLogAttrValue[key]);
            } else {
              this._attrMap.set(attrTypes[key], this.questLogTable.QuestLogAttrValue[key]);
            }
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=27fdf00b0981036de40e8fb1f86334951e8969e7.js.map
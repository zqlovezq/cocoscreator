System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, TaskData, tab, RedMgr, RedDotType, _dec, _class, _class2, _crd, ccclass, property, BattlePassDataMgr;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskData(extras) {
    _reporterNs.report("TaskData", "../../task/TaskData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
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
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      TaskData = _unresolved_3.TaskData;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      RedMgr = _unresolved_5.RedMgr;
    }, function (_unresolved_6) {
      RedDotType = _unresolved_6.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ccdcfYLVRxJna5yKX+irG/o", "BattlePassDataMgr", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattlePassDataMgr", BattlePassDataMgr = (_dec = ccclass('BattlePassDataMgr'), _dec(_class = (_class2 = class BattlePassDataMgr extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);
          this._battleMap = new Map();
          this._battlePassMap = new Map();
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new BattlePassDataMgr();
          }

          return this._instance;
        }

        initPassBattle(msg) {
          this._battleMap.clear();

          this._battlePassMap.clear();

          var passMap = msg.battlePassMap;
          Object.keys(passMap).forEach(key => {
            if (passMap[key].tasks) {
              passMap[key].tasks.sort((task1, task2) => {
                return task1.id - task2.id;
              });
            }

            this._battleMap.set(Number(key), passMap[key]);
          }); // 将所有战令数据按照页签存储

          this._battleMap.forEach((val, key) => {
            var battlePassTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BattlePassTableById.getValue(key);

            if (battlePassTab) {
              var tabName = battlePassTab.BattlePassTab;

              if (tabName && battlePassTab.IsBattleBtn) {
                if (this._battlePassMap.has(tabName)) {
                  var arr = this._battlePassMap.get(tabName);

                  arr.push(battlePassTab);
                } else {
                  this._battlePassMap.set(tabName, [battlePassTab]);
                }
              }
            }
          });

          (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
            error: Error()
          }), TaskData) : TaskData).ins.initBattlePassTasks(this._battleMap);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Battle_Pass);
        }

        getBattleMap() {
          return this._battleMap;
        } // 更新tasks


        refreshTasks(id, tasks) {
          var allTasks = this._battleMap.get(id).tasks;

          for (var i = 0; i < tasks.length; i++) {
            for (var k = 0; k < allTasks.length; k++) {
              if (tasks[i].id === allTasks[k].id) {
                allTasks[k] = tasks[i];
              }
            }
          }
        } // 通过id直接获取数据


        getBattlePassData(id) {
          return this._battleMap.get(id);
        } // 通过id获取所有的可以领取的任务


        getAllReceiveTaskId(id) {
          var result = [];
          var battlePass = this.getBattlePassData(id);

          if (!battlePass) {
            return result;
          }

          for (var i = 0; i < battlePass.tasks.length; i++) {
            var taskid = battlePass.tasks[i].id;
            var taskInfo = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
              error: Error()
            }), TaskData) : TaskData).ins.getBattlePassTaskInfo(taskid);

            if (!battlePass.isBoughtAdvance) {
              if (taskInfo.isCanReceived) {
                result.push(taskid);
              }
            } else {
              if (!taskInfo.isAdvanceReceived && taskInfo.progress >= taskInfo.taskTable.FinishParam1) {
                result.push(taskid);
              }
            }
          }

          return result;
        } // 通过页签获取数据


        getDataByPassName(tabName) {
          return this._battlePassMap.get(tabName);
        }

        buyBattlePassData(id) {
          var passData = this.getBattlePassData(id);
          passData.isBoughtAdvance = true;
          return passData;
        } // 获取默认的页签name 并且有可领取的奖励


        getDefaultPassName() {
          var name = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BattlePassTab.BattlePassTab_WorldBossPass;
          var defaultName = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BattlePassTab.BattlePassTab_WorldBossPass;
          var changeView = false;

          this._battlePassMap.forEach((key, value) => {
            var result = [];

            for (var i = 0; i < key.length; i++) {
              var _result = this.getAllReceiveTaskId(key[i].Id);

              result = result.concat(_result);
            }

            if (result.length > 0 && name >= value) {
              name = value;
              changeView = true;
            }

            if (defaultName > value) {
              defaultName = value;
            }
          });

          return changeView ? name : defaultName;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cfa3d4983f3de53934599a053caae7cc25945883.js.map
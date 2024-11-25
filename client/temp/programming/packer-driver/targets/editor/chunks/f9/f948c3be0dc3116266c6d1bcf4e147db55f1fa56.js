System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, TaskData, tab, TRIALLAYER, TRIALTASK, MallDataMgr, _dec, _class, _class2, _crd, ccclass, property, RookieTaskMgr;

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

  function _reportPossibleCrUseOfTRIALLAYER(extras) {
    _reporterNs.report("TRIALLAYER", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTRIALTASK(extras) {
    _reporterNs.report("TRIALTASK", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallDataMgr(extras) {
    _reporterNs.report("MallDataMgr", "../../shop/MallDataMgr", _context.meta, extras);
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
      TRIALLAYER = _unresolved_5.TRIALLAYER;
      TRIALTASK = _unresolved_5.TRIALTASK;
    }, function (_unresolved_6) {
      MallDataMgr = _unresolved_6.MallDataMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "76357lt5KBO2r9QLcQRC/F5", "RookieTaskMgr", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RookieTaskMgr", RookieTaskMgr = (_dec = ccclass('RookieTaskMgr'), _dec(_class = (_class2 = class RookieTaskMgr extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor(...args) {
          super(...args);
          this._taskMap = new Map();
          this._mallMap = new Map();
          this.stateToChange = {};
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new RookieTaskMgr();
          }

          return this._instance;
        }

        initTask(msg) {
          const taskMap = msg.newPlayerTrialMap;
          Object.keys(taskMap).forEach(key => {
            this._taskMap.set(taskMap[key].id, taskMap[key]);
          }); // 初始化商品信息

          for (let i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ActivityNewPlayerTaskTable.length; i++) {
            const mallId = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ActivityNewPlayerTaskTable[i].MallId;

            this._mallMap.set(mallId, []);
          }

          for (let k = 0; k < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MallItemTabe.length; k++) {
            const itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().MallItemTabe[k];

            if (this._mallMap.has(itemTab.MallId)) {
              this._mallMap.get(itemTab.MallId).push(itemTab);
            }
          }

          (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
            error: Error()
          }), TaskData) : TaskData).ins.initTrialTasks(this._taskMap);
        }

        getMallTabs(id) {
          return this._mallMap.get(id);
        }

        getTrialTask(id) {
          return this._taskMap.get(id);
        } // 设置试炼红点数据
        // 检测id数据里面是否有可领取的数据


        handleTask(ID, view, day, layer) {
          const opName1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask;
          const opName2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2;
          let trialInfo1 = RookieTaskMgr.ins.getTrialTask(opName1);
          let trialInfo2 = RookieTaskMgr.ins.getTrialTask(opName2);
          let cur_day = -1;

          if (layer == (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE && trialInfo1) {
            cur_day = trialInfo1.unlockedDays;
          }

          if (layer == (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ELITE && trialInfo2) {
            cur_day = trialInfo2.unlockedDays;
          }

          const newPlayerData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ActivityNewPlayerTaskTableById.getValue(ID); // 未解锁返回false

          if (day > cur_day - (layer - 1) * 7) {
            return false;
          }

          if (view < (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
            error: Error()
          }), TRIALTASK) : TRIALTASK).GIFT) {
            const taskArr = newPlayerData['TaskIds' + view];

            for (let i = 0; i < taskArr.length; i++) {
              const taskData = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
                error: Error()
              }), TaskData) : TaskData).ins.getTrialTaskInfo(taskArr[i]);

              if (taskData && taskData.isCanReceived) {
                return true;
              }
            }

            return false;
          } else {
            const arr = this._mallMap.get(newPlayerData.MallId);

            const mallItemId = arr[0].Id;
            const maxCount = arr[0].LimitCount;
            const boughtCount = (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
              error: Error()
            }), MallDataMgr) : MallDataMgr).ins.getFixedShopData(newPlayerData.MallId).get(mallItemId);
            return boughtCount < maxCount;
          }
        }

        checkIsRed(layer, day, view) {
          var _this$stateToChange$l;

          const data = (_this$stateToChange$l = this.stateToChange[layer]) != null ? _this$stateToChange$l : {};
          let isRed = false;

          for (let i = 1; i <= 7; i++) {
            const obj = data[i];

            if (!obj) {
              continue;
            }

            if (view) {
              if (day === i) {
                isRed = obj[view];
                break;
              }
            } else {
              if (day) {
                if (day === i) {
                  isRed = obj[(_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
                    error: Error()
                  }), TRIALTASK) : TRIALTASK).TASK1] || obj[(_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
                    error: Error()
                  }), TRIALTASK) : TRIALTASK).TASK2] || obj[(_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
                    error: Error()
                  }), TRIALTASK) : TRIALTASK).GIFT];
                  break;
                }
              } else {
                if (obj[(_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
                  error: Error()
                }), TRIALTASK) : TRIALTASK).TASK1] || obj[(_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
                  error: Error()
                }), TRIALTASK) : TRIALTASK).TASK2] || obj[(_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
                  error: Error()
                }), TRIALTASK) : TRIALTASK).GIFT]) {
                  isRed = true;
                  break;
                }
              }
            }
          }

          return isRed;
        }

        red_trialRed() {
          for (let k = 1; k <= 2; k++) {
            this.stateToChange[k] = {};

            for (let i = 1; i <= 7; i++) {
              const obj = {};
              this.stateToChange[k][i] = obj;
              const ID = k * 100 + i;
              obj[(_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
                error: Error()
              }), TRIALTASK) : TRIALTASK).TASK1] = this.handleTask(ID, (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
                error: Error()
              }), TRIALTASK) : TRIALTASK).TASK1, i, k);
              obj[(_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
                error: Error()
              }), TRIALTASK) : TRIALTASK).TASK2] = this.handleTask(ID, (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
                error: Error()
              }), TRIALTASK) : TRIALTASK).TASK2, i, k);
              obj[(_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
                error: Error()
              }), TRIALTASK) : TRIALTASK).GIFT] = this.handleTask(ID, (_crd && TRIALTASK === void 0 ? (_reportPossibleCrUseOfTRIALTASK({
                error: Error()
              }), TRIALTASK) : TRIALTASK).GIFT, i, k);
            }
          }
        } // 是否有可领取的积分奖励


        red_score_red(type) {
          let isRed = false;
          const openName1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask;
          const openName2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2;
          let openName = -1;

          if (type === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE) {
            openName = openName1;
          } else if (type === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ELITE) {
            openName = openName2;
          }

          if (openName < 0) {
            return false;
          }

          const data = RookieTaskMgr.ins.getTrialTask(openName);

          if (!data) {
            return false;
          }

          for (let i = 0; i < 6; i++) {
            const id = type * 100 + (6 - i);
            const scoreTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ActivityNewPlayerTaskScoreTableById.getValue(id);
            const newPlayerTaskTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ActivityNewPlayerTaskTableById.getValue(scoreTab.Id);
            const newPlayertrial = this.getTrialTask(newPlayerTaskTab.Group);
            const socre = newPlayertrial.score;
            const receiveIds = newPlayertrial.receivedScoreIds;
            const isGot = receiveIds.indexOf(scoreTab.Id) > -1;
            isRed = !isGot && socre >= scoreTab.Score;

            if (isRed) {
              break;
            }
          }

          return isRed;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f948c3be0dc3116266c6d1bcf4e147db55f1fa56.js.map
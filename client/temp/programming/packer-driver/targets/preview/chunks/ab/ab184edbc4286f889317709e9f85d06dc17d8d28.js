System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, EventMgr, tab, LocalEvent, GuideController, guideTask, RoleData, _dec, _class, _crd, ErrCondNotSatisfied, ccclass, property, GuideTrigger;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "./GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfguideTask(extras) {
    _reporterNs.report("guideTask", "./GuideTask", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../model/role/RoleData", _context.meta, extras);
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
      log = _cc.log;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      LocalEvent = _unresolved_4.LocalEvent;
    }, function (_unresolved_5) {
      GuideController = _unresolved_5.GuideController;
    }, function (_unresolved_6) {
      guideTask = _unresolved_6.guideTask;
    }, function (_unresolved_7) {
      RoleData = _unresolved_7.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20ddb7BcM9FeYU1611L76pQ", "GuideTrigger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'log', 'Node']);

      // import { task_100 } from './tasks/task_100';
      ErrCondNotSatisfied = new Error("guide condition not satisfied");
      ({
        ccclass,
        property
      } = _decorator);

      _export("GuideTrigger", GuideTrigger = (_dec = ccclass('GuideTrigger'), _dec(_class = class GuideTrigger extends Component {
        constructor() {
          super(...arguments);
          this._guideRunning = false;
          this.guideTrunkData = void 0;
          this.guideBranchData = void 0;
        }

        removeListens() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);
        }

        setGuideRunning(bRunning) {
          this._guideRunning = bRunning;
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).CheckGuide, () => {
            this.checkGuide();
          }, this);
        }

        checkGuide() {
          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            return;
          }

          log('checkGuide...');

          if (this.guideTrunkData === undefined) {
            var allGuideData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GuideTable.slice();
            allGuideData.sort((data1, data2) => data1.Id - data2.Id);
            this.guideTrunkData = [];
            this.guideBranchData = []; //支线

            for (var data of allGuideData) {
              if (data.GuideType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).GuideType.GuideType_Trunk) {
                this.guideTrunkData.push(data);
              } // else{
              //     this.guideBranchData.push(data)
              // }

            }
          }

          this.runGuide(this.guideTrunkData, true, result => {
            this.guideEndCallBack(result);
          });
        }

        runGuide(guideArray, stopOnFailed, endCallback) {
          /* 是否新手引导完毕 */
          var bGuideOver = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.IsGuideFinished();

          if (this._guideRunning || bGuideOver) {
            if (bGuideOver && endCallback) endCallback();
            return;
          }

          this.setGuideRunning(true);
          this.ergodicGuide(guideArray, stopOnFailed, endCallback);
        }
        /* 遍历运行引导 */


        ergodicGuide(guideArray, stopOnFailed, endCallback) {
          async.eachSeries(guideArray, (guideData, next) => {
            log("guide checking :%s", guideData.ScriptName);

            try {
              var task = (_crd && guideTask === void 0 ? (_reportPossibleCrUseOfguideTask({
                error: Error()
              }), guideTask) : guideTask)[guideData.ScriptName];

              if (this.checkPass(task, guideData)) {
                //已经引导过了，或task.skip()返回true
                next();
              } else {
                // 检测条件
                if (this.checkCondition(task, guideData)) {
                  log("guide runing :%s", guideData.Id);

                  if (!this.checkGuideScene(guideData)) {
                    next(new Error("guide scene not satisfied"));
                    return;
                  }

                  if (guideData.Id !== undefined) {}

                  (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                    error: Error()
                  }), GuideController) : GuideController).ins.runningGuideData = guideData;
                  (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                    error: Error()
                  }), GuideController) : GuideController).ins.runTask(task, guideData.Id, error => {
                    if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                      error: Error()
                    }), GuideController) : GuideController).ins.runningGuideData) {
                      if (!error) {
                        log("guide finished :" + guideData.Id);

                        if (task.finish === undefined || task.finish === true) {
                          log("guide send to server :" + guideData.Id);
                          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                            error: Error()
                          }), RoleData) : RoleData).ins.setClientData("guideTrunk", String(guideData.Id));
                        }
                      }

                      (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                        error: Error()
                      }), GuideController) : GuideController).ins.runningGuideData = null;
                    }

                    if (stopOnFailed) {
                      next(error);
                    } else {
                      if (error instanceof Error) {
                        log(error.message);
                      } else {
                        log(error);
                      }

                      next();
                    }
                  });
                } else {
                  if (stopOnFailed) {
                    //不符合引导开启的条件,不再检查下一条
                    next(ErrCondNotSatisfied);
                  } else {
                    //检查下一条
                    next();
                  }
                }
              }
            } catch (error) {
              //发生异常
              (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                error: Error()
              }), GuideController) : GuideController).ins.runningGuideData = null;
              next(error);
            }
          }, err => {
            this.setGuideRunning(false);

            if (err) {
              if (err instanceof Error) {
                log(err.message);
              } else {
                log(err);
              }
            }

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).unTarget((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
              error: Error()
            }), GuideController) : GuideController).ins);

            if (endCallback) {
              if (!err || err === ErrCondNotSatisfied) {
                //正常结束
                endCallback(true);
              } else {
                //异常结束
                endCallback(false);
              }
            }
          });
        }

        guideEndCallBack(result) {
          if (result) {
            //检查支线引导
            this.runGuide(this.guideBranchData, false, () => {// Net.pushLoaclMessage(LOCAL_MESSAGE.EnablePageViewTouch, true)
            });
          } else {// Net.pushLoaclMessage(LOCAL_MESSAGE.EnablePageViewTouch, true)
          }
        }

        checkPass(task, guideData) {
          if (!!task.skip) {
            if (task.skip()) {
              //跳过
              return true;
            }
          }

          return this.isGuidePass(guideData.Id);
        }

        checkCondition(task, guideData) {
          if (task.condition !== undefined && !task.condition()) {
            return false;
          }

          return true;
        }

        isGuidePass(guideId) {
          var guideData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuideTableById.getValue(guideId);

          if (!guideData) {
            return false;
          }

          if (Number((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.clientData.guideTrunk) < guideId) {
            return false;
          }

          return true;
        }

        checkGuideScene(guideData) {
          if (!guideData) {
            return true;
          }

          return true; // let sceneName = guideData.Scene == tab.GuideScene.GuideScene_MainScene ? "MainScene" : "ChessFightScene";
          // return director.getScene().name === sceneName;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab184edbc4286f889317709e9f85d06dc17d8d28.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LocalEvent, FightData, FightEvent, RoguePop, EventMgr, Command, DisableGuideController, EnableGuideController, EnableTouchMask, IsInFightScene, IsInMainScene, WaitBoss, WaitEnterScene, WaitFightResLoad, WaitFightWin, WaitHideHeroPop, WaitHidePop, WaitJadeDrop, WaitShowMonster, WaitShowPop, heroInTeam, waitOnlyMainView, OpenFunctionMgr, tab, GuideController, ChannelMgr, RoleData, UIMgr, ViewName, _crd, guideTask;

  // 走分支路线
  function stepBranchGuide(taskId) {
    (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
      error: Error()
    }), GuideController) : GuideController).ins.clearTask();
    var task = guideTask["task_" + taskId];
    var guideData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
      error: Error()
    }), tab) : tab).getData().GuideTableById.getValue(taskId);
    (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
      error: Error()
    }), GuideController) : GuideController).ins.runTask(task, guideData.Id, error => {
      if (!error) {
        if (task.finish === undefined || task.finish === true) {}
      }

      (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
        error: Error()
      }), GuideController) : GuideController).ins.runningGuideData = null;
    });
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../fight/data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../fight/define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoguePop(extras) {
    _reporterNs.report("RoguePop", "../fight/view/rogue/RoguePop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommand(extras) {
    _reporterNs.report("Command", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDisableGuideController(extras) {
    _reporterNs.report("DisableGuideController", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnableGuideController(extras) {
    _reporterNs.report("EnableGuideController", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnableTouchMask(extras) {
    _reporterNs.report("EnableTouchMask", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIsInFightScene(extras) {
    _reporterNs.report("IsInFightScene", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIsInMainScene(extras) {
    _reporterNs.report("IsInMainScene", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaitBoss(extras) {
    _reporterNs.report("WaitBoss", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaitEnterScene(extras) {
    _reporterNs.report("WaitEnterScene", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaitFightResLoad(extras) {
    _reporterNs.report("WaitFightResLoad", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaitFightWin(extras) {
    _reporterNs.report("WaitFightWin", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaitHideHeroPop(extras) {
    _reporterNs.report("WaitHideHeroPop", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaitHidePop(extras) {
    _reporterNs.report("WaitHidePop", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaitJadeDrop(extras) {
    _reporterNs.report("WaitJadeDrop", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaitShowMonster(extras) {
    _reporterNs.report("WaitShowMonster", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaitShowPop(extras) {
    _reporterNs.report("WaitShowPop", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfheroInTeam(extras) {
    _reporterNs.report("heroInTeam", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfwaitOnlyMainView(extras) {
    _reporterNs.report("waitOnlyMainView", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "./GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../model/role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../define/ViewDefine", _context.meta, extras);
  }

  _export("stepBranchGuide", stepBranchGuide);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LocalEvent = _unresolved_2.LocalEvent;
    }, function (_unresolved_3) {
      FightData = _unresolved_3.FightData;
    }, function (_unresolved_4) {
      FightEvent = _unresolved_4.FightEvent;
    }, function (_unresolved_5) {
      RoguePop = _unresolved_5.RoguePop;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_unresolved_7) {
      Command = _unresolved_7.Command;
      DisableGuideController = _unresolved_7.DisableGuideController;
      EnableGuideController = _unresolved_7.EnableGuideController;
      EnableTouchMask = _unresolved_7.EnableTouchMask;
      IsInFightScene = _unresolved_7.IsInFightScene;
      IsInMainScene = _unresolved_7.IsInMainScene;
      WaitBoss = _unresolved_7.WaitBoss;
      WaitEnterScene = _unresolved_7.WaitEnterScene;
      WaitFightResLoad = _unresolved_7.WaitFightResLoad;
      WaitFightWin = _unresolved_7.WaitFightWin;
      WaitHideHeroPop = _unresolved_7.WaitHideHeroPop;
      WaitHidePop = _unresolved_7.WaitHidePop;
      WaitJadeDrop = _unresolved_7.WaitJadeDrop;
      WaitShowMonster = _unresolved_7.WaitShowMonster;
      WaitShowPop = _unresolved_7.WaitShowPop;
      heroInTeam = _unresolved_7.heroInTeam;
      waitOnlyMainView = _unresolved_7.waitOnlyMainView;
    }, function (_unresolved_8) {
      OpenFunctionMgr = _unresolved_8.OpenFunctionMgr;
    }, function (_unresolved_9) {
      tab = _unresolved_9.tab;
    }, function (_unresolved_10) {
      GuideController = _unresolved_10.GuideController;
    }, function (_unresolved_11) {
      ChannelMgr = _unresolved_11.ChannelMgr;
    }, function (_unresolved_12) {
      RoleData = _unresolved_12.RoleData;
    }, function (_unresolved_13) {
      UIMgr = _unresolved_13.UIMgr;
    }, function (_unresolved_14) {
      ViewName = _unresolved_14.ViewName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48628v1nbJHI6WiWrD/Z5+M", "GuideTask", undefined);

      _export("guideTask", guideTask = {
        JadeDrops: {
          1: [10061, 10081, 132],
          2: [10001, 10041, 10061],
          3: [10063, 10064, 10062],
          4: [10021, 10081, 10061],
          5: [10064, 133, 10063]
        },
        task_100: {
          name: '第1场战斗',
          debug: false,
          mask: false,
          condition: _crd && IsInFightScene === void 0 ? (_reportPossibleCrUseOfIsInFightScene({
            error: Error()
          }), IsInFightScene) : IsInFightScene,
          steps: [{
            onStart(callback) {
              (_crd && WaitEnterScene === void 0 ? (_reportPossibleCrUseOfWaitEnterScene({
                error: Error()
              }), WaitEnterScene) : WaitEnterScene)("FightScene", () => {
                (_crd && EnableGuideController === void 0 ? (_reportPossibleCrUseOfEnableGuideController({
                  error: Error()
                }), EnableGuideController) : EnableGuideController)();
                (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                  error: Error()
                }), FightData) : FightData).ins.pause = true;
                callback();
              });
            }

          }, {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).RunComic
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
                error: Error()
              }), FightEvent) : FightEvent).Fight_Start_Complete);
              cb();
            }

          }, {
            onStart(callback) {
              callback();
            },

            delayTime: 1,
            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_101"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.pause = false;
              cb();
            }

          }, {
            onStart(callback) {
              (_crd && WaitShowMonster === void 0 ? (_reportPossibleCrUseOfWaitShowMonster({
                error: Error()
              }), WaitShowMonster) : WaitShowMonster)().then(() => {
                (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                  error: Error()
                }), FightData) : FightData).ins.pause = true;
                callback();
                (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                  error: Error()
                }), EnableTouchMask) : EnableTouchMask)();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).DialogueNonmodal,
                args: "guide_desc_102"
              }, {
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).CircleClick,
                args: "FightRootView/rootNode/objects/Monster"
              }]
            },

            onEnd(cb) {
              (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.pause = false;
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, // 首次掉毛
          // 擊敗怪物有概率掉落羽毛，撿起它，它可以強化你的攻擊效果
          {
            onStart(callback) {
              (_crd && WaitJadeDrop === void 0 ? (_reportPossibleCrUseOfWaitJadeDrop({
                error: Error()
              }), WaitJadeDrop) : WaitJadeDrop)().then(() => {
                (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                  error: Error()
                }), FightData) : FightData).ins.pause = true;
                callback();
                (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                  error: Error()
                }), EnableTouchMask) : EnableTouchMask)();
              });
            },

            //
            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).DialogueNonmodal,
                args: "guide_desc_103"
              }, {
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).CircleClick,
                args: "FightRootView/rootNode/dropNode/dropNode"
              }]
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.pause = false;
              (_crd && RoguePop === void 0 ? (_reportPossibleCrUseOfRoguePop({
                error: Error()
              }), RoguePop) : RoguePop).create();
              cb();
            }

          }, {
            onStart(callback) {
              (_crd && WaitFightWin === void 0 ? (_reportPossibleCrUseOfWaitFightWin({
                error: Error()
              }), WaitFightWin) : WaitFightWin)().then(() => {
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_104"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).FightWinPop,
                data: (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                  error: Error()
                }), GuideController) : GuideController).ins.gerRewards()
              });
              cb();
              (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
                error: Error()
              }), DisableGuideController) : DisableGuideController)();
            }

          }]
        },
        task_200: {
          name: "点击升级",
          debug: false,
          mask: true,
          condition: _crd && IsInMainScene === void 0 ? (_reportPossibleCrUseOfIsInMainScene({
            error: Error()
          }), IsInMainScene) : IsInMainScene,
          steps: [{
            onStart(callback) {
              (_crd && WaitEnterScene === void 0 ? (_reportPossibleCrUseOfWaitEnterScene({
                error: Error()
              }), WaitEnterScene) : WaitEnterScene)('MainScene', () => {
                (_crd && EnableGuideController === void 0 ? (_reportPossibleCrUseOfEnableGuideController({
                  error: Error()
                }), EnableGuideController) : EnableGuideController)();
                callback();
              });
            }

          }, {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_201"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_202"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_203"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_204"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).Click,
                args: "Canvas/rootNode/uiNode/HomeMainView/right_node/bottom_node/function_layout/hero_btn/guideNode"
              }]
            },

            onEnd(cb) {
              cb();
            }

          }, {
            onStart(callback) {
              (_crd && WaitShowPop === void 0 ? (_reportPossibleCrUseOfWaitShowPop({
                error: Error()
              }), WaitShowPop) : WaitShowPop)().then(() => {
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HeroBagView/safearea_node/bag_node/herobag_scrollview/list_content/0/content/1401"
            },

            onEnd(cb) {
              cb();
            }

          }, // 点击详情
          {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HeroBagView/safearea_node/bag_node/details_btn"
            },

            onEnd(cb) {
              cb();
            }

          }, {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_205"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, // 点击升级
          {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).Click,
                args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/herodetail_node/levelup_node/levelup_btn"
              }]
            },

            onEnd(cb) {
              cb();
            }

          }, // 点击一键升级
          {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/herodetail_node/ascend_btn"
            },

            onEnd(cb) {
              cb();
            }

          }, // 点击返回
          {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HeroDetailView/close_node/close_btn"
            },

            onEnd(cb) {
              cb();
            }

          }, // 点击返回
          {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HeroBagView/close_node/close_btn"
            },

            onEnd(cb) {
              cb();
            }

          }, {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_206"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }]
        },
        task_300: {
          name: '第1场战斗',
          debug: false,
          mask: false,
          condition: _crd && IsInMainScene === void 0 ? (_reportPossibleCrUseOfIsInMainScene({
            error: Error()
          }), IsInMainScene) : IsInMainScene,
          steps: [{
            onStart(callback) {
              (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                error: Error()
              }), EnableTouchMask) : EnableTouchMask)();
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).Click,
                args: "Canvas/rootNode/uiNode/HomeMainView/right_node/play_node/HomeChapterItem/guideNode"
              }]
            },

            onEnd(cb) {
              cb();
            }

          }, {
            onStart(callback) {
              (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                error: Error()
              }), EnableTouchMask) : EnableTouchMask)();
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/BattleMainView/battle_btn"
            },

            onEnd(cb) {
              (_crd && WaitEnterScene === void 0 ? (_reportPossibleCrUseOfWaitEnterScene({
                error: Error()
              }), WaitEnterScene) : WaitEnterScene)("FightScene", () => {
                cb();
              });
            }

          }, {
            onStart(callback) {
              (_crd && WaitFightResLoad === void 0 ? (_reportPossibleCrUseOfWaitFightResLoad({
                error: Error()
              }), WaitFightResLoad) : WaitFightResLoad)().then(() => {
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                  error: Error()
                }), LocalEvent) : LocalEvent).HideDialogue);
                (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                  error: Error()
                }), FightData) : FightData).ins.pause = true;
                callback();
              });
            },

            onEnd(cb) {
              cb();
            }

          }, {
            onStart(callback) {
              callback();
            },

            delayTime: 1,
            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_301"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.pause = false;
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
                error: Error()
              }), FightEvent) : FightEvent).Fight_Start_Complete);
              cb();
            }

          }, // 选择队长
          {
            onStart(callback) {
              (_crd && WaitShowPop === void 0 ? (_reportPossibleCrUseOfWaitShowPop({
                error: Error()
              }), WaitShowPop) : WaitShowPop)().then(() => {
                (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                  error: Error()
                }), EnableTouchMask) : EnableTouchMask)();
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).DialogueNonmodal,
                args: "guide_desc_302"
              }, {
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).Click,
                args: "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem1"
              }]
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, // 出怪引导点击怪物
          {
            onStart(callback) {
              (_crd && WaitShowMonster === void 0 ? (_reportPossibleCrUseOfWaitShowMonster({
                error: Error()
              }), WaitShowMonster) : WaitShowMonster)().then(() => {
                (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                  error: Error()
                }), FightData) : FightData).ins.pause = true;
                callback();
                (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                  error: Error()
                }), EnableTouchMask) : EnableTouchMask)();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).DialogueNonmodal,
                args: "guide_desc_303"
              }, {
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).CircleClick,
                args: "FightRootView/rootNode/objects/Monster"
              }]
            },

            onEnd(cb) {
              (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.pause = false;
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, // 第一次掉毛
          {
            onStart(callback) {
              (_crd && WaitShowPop === void 0 ? (_reportPossibleCrUseOfWaitShowPop({
                error: Error()
              }), WaitShowPop) : WaitShowPop)().then(() => {
                (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                  error: Error()
                }), EnableTouchMask) : EnableTouchMask)();
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).DialogueNonmodal,
                args: "guide_desc_304"
              }, {
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).Click,
                args: "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem2"
              }]
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, // 你現在可以一次性射出兩發子彈！你的輸出翻倍了
          {
            onStart(callback) {
              (_crd && WaitHidePop === void 0 ? (_reportPossibleCrUseOfWaitHidePop({
                error: Error()
              }), WaitHidePop) : WaitHidePop)().then(() => {
                (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                  error: Error()
                }), FightData) : FightData).ins.pause = true;
                callback();
              });
            },

            //
            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_305"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.pause = false;
              cb();
            }

          }, // 第二次掉毛
          {
            onStart(callback) {
              (_crd && WaitShowPop === void 0 ? (_reportPossibleCrUseOfWaitShowPop({
                error: Error()
              }), WaitShowPop) : WaitShowPop)().then(() => {
                (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                  error: Error()
                }), EnableTouchMask) : EnableTouchMask)();
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).DialogueNonmodal,
                args: "guide_desc_306"
              }, {
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).Click,
                args: "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem2"
              }]
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, // 第三次掉毛
          {
            onStart(callback) {
              (_crd && WaitShowPop === void 0 ? (_reportPossibleCrUseOfWaitShowPop({
                error: Error()
              }), WaitShowPop) : WaitShowPop)().then(() => {
                (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                  error: Error()
                }), EnableTouchMask) : EnableTouchMask)();
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).DialogueNonmodal,
                args: "guide_desc_307"
              }, {
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).Click,
                args: "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem2"
              }]
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, // 第四次掉毛
          {
            onStart(callback) {
              (_crd && WaitShowPop === void 0 ? (_reportPossibleCrUseOfWaitShowPop({
                error: Error()
              }), WaitShowPop) : WaitShowPop)().then(() => {
                (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                  error: Error()
                }), EnableTouchMask) : EnableTouchMask)();
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem2"
            },

            onEnd(cb) {
              cb();
            }

          }, // 第五次掉毛
          {
            onStart(callback) {
              (_crd && WaitShowPop === void 0 ? (_reportPossibleCrUseOfWaitShowPop({
                error: Error()
              }), WaitShowPop) : WaitShowPop)().then(() => {
                (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                  error: Error()
                }), EnableTouchMask) : EnableTouchMask)();
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).DialogueNonmodal,
                args: "guide_desc_308"
              }, {
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).Click,
                args: "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem2"
              }]
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, // 第一次掉蛋
          {
            onStart(callback) {
              (_crd && WaitShowPop === void 0 ? (_reportPossibleCrUseOfWaitShowPop({
                error: Error()
              }), WaitShowPop) : WaitShowPop)().then(() => {
                (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                  error: Error()
                }), EnableTouchMask) : EnableTouchMask)();
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).DialogueNonmodal,
                args: "guide_desc_309"
              }, {
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).Click,
                args: "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem0"
              }]
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, // 第六次掉羽毛
          {
            onStart(callback) {
              (_crd && WaitShowPop === void 0 ? (_reportPossibleCrUseOfWaitShowPop({
                error: Error()
              }), WaitShowPop) : WaitShowPop)().then(() => {
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_310"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, // 等待boss
          {
            onStart(callback) {
              (_crd && WaitBoss === void 0 ? (_reportPossibleCrUseOfWaitBoss({
                error: Error()
              }), WaitBoss) : WaitBoss)().then(() => {
                (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                  error: Error()
                }), FightData) : FightData).ins.pause = true;
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_311"
            },

            onEnd(cb) {
              (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.pause = false;
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
              (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
                error: Error()
              }), DisableGuideController) : DisableGuideController)();
            }

          }]
        },
        task_400: {
          name: "引导抽卡",
          debug: false,
          mask: false,
          condition: _crd && IsInMainScene === void 0 ? (_reportPossibleCrUseOfIsInMainScene({
            error: Error()
          }), IsInMainScene) : IsInMainScene,
          steps: [{
            onStart(callback) {
              (_crd && WaitEnterScene === void 0 ? (_reportPossibleCrUseOfWaitEnterScene({
                error: Error()
              }), WaitEnterScene) : WaitEnterScene)("MainScene", () => {
                var isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                  error: Error()
                }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).OpenFunctionName.OpenFunctionName_GachaHero);

                if (isOpen) {
                  (_crd && EnableGuideController === void 0 ? (_reportPossibleCrUseOfEnableGuideController({
                    error: Error()
                  }), EnableGuideController) : EnableGuideController)();
                  callback();
                } else {
                  (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
                    error: Error()
                  }), DisableGuideController) : DisableGuideController)();
                }
              });
            }

          }, {
            onStart(callback) {
              (_crd && waitOnlyMainView === void 0 ? (_reportPossibleCrUseOfwaitOnlyMainView({
                error: Error()
              }), waitOnlyMainView) : waitOnlyMainView)().then(() => {
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_401"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, // 点击抽卡按钮
          {
            onStart(callback) {
              (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                error: Error()
              }), EnableTouchMask) : EnableTouchMask)();
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HomeMainView/right_node/play_node/draw_btn"
            },

            onEnd(cb) {
              cb();
            }

          }, {
            onStart(callback) {
              (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                error: Error()
              }), EnableTouchMask) : EnableTouchMask)();
              (_crd && WaitShowPop === void 0 ? (_reportPossibleCrUseOfWaitShowPop({
                error: Error()
              }), WaitShowPop) : WaitShowPop)().then(() => {
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).DialogueNonmodal,
                args: "guide_desc_402"
              }, {
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).Click,
                args: "Canvas/rootNode/uiNode/RecruitView/Recruit/RecruitBtn_node/recruit1_btn"
              }]
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                error: Error()
              }), GuideController) : GuideController).ins.canHideHeroPop = false;
              cb();
            }

          }, {
            onStart(callback) {
              (_crd && WaitShowPop === void 0 ? (_reportPossibleCrUseOfWaitShowPop({
                error: Error()
              }), WaitShowPop) : WaitShowPop)().then(() => {
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_403"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                error: Error()
              }), GuideController) : GuideController).ins.canHideHeroPop = true;
              cb();
            }

          }, {
            onStart(callback) {
              (_crd && WaitHideHeroPop === void 0 ? (_reportPossibleCrUseOfWaitHideHeroPop({
                error: Error()
              }), WaitHideHeroPop) : WaitHideHeroPop)().then(() => {
                (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                  error: Error()
                }), EnableTouchMask) : EnableTouchMask)();
                callback();
              });
            },

            delayTime: 1,
            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/RecruitGetPop/common_node/btn_node/close_btn"
            },

            onEnd(cb) {
              cb();
            }

          }, {
            onStart(callback) {
              (_crd && WaitHideHeroPop === void 0 ? (_reportPossibleCrUseOfWaitHideHeroPop({
                error: Error()
              }), WaitHideHeroPop) : WaitHideHeroPop)().then(() => {
                (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                  error: Error()
                }), EnableTouchMask) : EnableTouchMask)();
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/RecruitView/close_node/close_btn"
            },

            onEnd(cb) {
              cb();
            }

          }]
        },
        task_500: {
          name: "小鸡升级上阵",
          debug: false,
          mask: false,
          condition: _crd && IsInMainScene === void 0 ? (_reportPossibleCrUseOfIsInMainScene({
            error: Error()
          }), IsInMainScene) : IsInMainScene,
          steps: [// 点击英雄按钮
          {
            onStart(callback) {
              (_crd && waitOnlyMainView === void 0 ? (_reportPossibleCrUseOfwaitOnlyMainView({
                error: Error()
              }), waitOnlyMainView) : waitOnlyMainView)().then(() => {
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_501"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, // 点击英雄按钮
          {
            onStart(callback) {
              (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                error: Error()
              }), EnableTouchMask) : EnableTouchMask)();
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HomeMainView/right_node/bottom_node/function_layout/hero_btn/guideNode"
            },

            onEnd(cb) {
              cb();
            }

          }, // 点击量子先驱
          {
            onStart(callback) {
              (_crd && WaitShowPop === void 0 ? (_reportPossibleCrUseOfWaitShowPop({
                error: Error()
              }), WaitShowPop) : WaitShowPop)().then(() => {
                (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                  error: Error()
                }), EnableTouchMask) : EnableTouchMask)();
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HeroBagView/safearea_node/bag_node/herobag_scrollview/list_content/1/content/3401"
            },

            onEnd(cb) {
              cb();
            }

          }, // 上阵
          {
            onStart(callback) {
              (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                error: Error()
              }), EnableTouchMask) : EnableTouchMask)();
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HeroBagView/hero_node/HeroPaintingItem/bag_node/deploy_node"
            },

            onEnd(cb) {
              (_crd && heroInTeam === void 0 ? (_reportPossibleCrUseOfheroInTeam({
                error: Error()
              }), heroInTeam) : heroInTeam)().then(() => {
                cb();
              });
            }

          }, // 点击返回
          {
            onStart(callback) {
              (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                error: Error()
              }), EnableTouchMask) : EnableTouchMask)();
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HeroBagView/close_node/close_btn"
            },

            onEnd(cb) {
              cb();
            }

          }, {
            onStart(callback) {
              (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                error: Error()
              }), EnableTouchMask) : EnableTouchMask)();
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).Click,
                args: "Canvas/rootNode/uiNode/HomeMainView/right_node/play_node/HomeChapterItem/guideNode"
              }]
            },

            onEnd(cb) {
              cb();
            }

          }, {
            onStart(callback) {
              (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                error: Error()
              }), EnableTouchMask) : EnableTouchMask)();
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/BattleMainView/battle_btn"
            },

            onEnd(cb) {
              (_crd && WaitEnterScene === void 0 ? (_reportPossibleCrUseOfWaitEnterScene({
                error: Error()
              }), WaitEnterScene) : WaitEnterScene)("FightScene", () => {
                (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                  error: Error()
                }), ChannelMgr) : ChannelMgr).roleCompleteTutorial((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.sdkRole());
                (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
                  error: Error()
                }), DisableGuideController) : DisableGuideController)();
                cb();
              });
            }

          }]
        },
        task_301: {
          name: "第一关战斗失败",
          debug: false,
          condition: _crd && IsInFightScene === void 0 ? (_reportPossibleCrUseOfIsInFightScene({
            error: Error()
          }), IsInFightScene) : IsInFightScene,
          finish: true,
          mask: false,
          steps: [{
            onStart(callback) {
              (_crd && EnableGuideController === void 0 ? (_reportPossibleCrUseOfEnableGuideController({
                error: Error()
              }), EnableGuideController) : EnableGuideController)();
              (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                error: Error()
              }), GuideController) : GuideController).ins.node_jump.active = false;
              callback();
            }

          }, {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_351"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
                error: Error()
              }), DisableGuideController) : DisableGuideController)();
              cb();
            }

          }]
        },
        task_501: {
          name: "1-2软引导",
          debug: false,
          condition: _crd && IsInMainScene === void 0 ? (_reportPossibleCrUseOfIsInMainScene({
            error: Error()
          }), IsInMainScene) : IsInMainScene,
          mask: true,
          steps: [{
            onStart(callback) {
              (_crd && EnableGuideController === void 0 ? (_reportPossibleCrUseOfEnableGuideController({
                error: Error()
              }), EnableGuideController) : EnableGuideController)();
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).DialogueNonmodal,
                args: "guide_desc_502"
              }, {
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).Click,
                args: "Canvas/rootNode/uiNode/BattleMainView/battle_btn"
              }]
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
                error: Error()
              }), DisableGuideController) : DisableGuideController)();
              cb();
            }

          }]
        },
        task_502: {
          name: "1-3软引导",
          debug: false,
          condition: _crd && IsInFightScene === void 0 ? (_reportPossibleCrUseOfIsInFightScene({
            error: Error()
          }), IsInFightScene) : IsInFightScene,
          finish: true,
          mask: false,
          steps: [{
            onStart(callback) {
              (_crd && EnableGuideController === void 0 ? (_reportPossibleCrUseOfEnableGuideController({
                error: Error()
              }), EnableGuideController) : EnableGuideController)();
              (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.pause = true;
              (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                error: Error()
              }), GuideController) : GuideController).ins.node_jump.active = false;
              callback();
            }

          }, // 释放子弹
          {
            onStart(callback) {
              (_crd && EnableTouchMask === void 0 ? (_reportPossibleCrUseOfEnableTouchMask({
                error: Error()
              }), EnableTouchMask) : EnableTouchMask)();
              callback();
            },

            delayTime: 1,
            // 可恶，难道...一切...结束了么
            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_601"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, {
            onStart(callback) {
              callback();
            },

            //各位朋友，你们遇到麻烦了么？让我来帮你们吧
            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_602"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, {
            onStart(callback) {
              callback();
            },

            //太好了，有人来增援我们了！
            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_603"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              cb();
            }

          }, {
            onStart(callback) {
              callback();
            },

            //我的残存神力可以复活小鸡，加油冒险者大人，我们能赢。
            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Parallel,
              args: [{
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).DialogueNonmodal,
                args: "guide_desc_604"
              }, {
                cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                  error: Error()
                }), Command) : Command).ClickAnywhere,
                args: "CreateBullet"
              }]
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.pause = false;
              cb();
            }

          }, {
            onStart(callback) {
              (_crd && WaitFightWin === void 0 ? (_reportPossibleCrUseOfWaitFightWin({
                error: Error()
              }), WaitFightWin) : WaitFightWin)().then(() => {
                callback();
              });
            },

            // 多亏了辉夜姬小姐，总算是化险为夷了。
            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Dialogue,
              args: "guide_desc_605"
            },

            onEnd(cb) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).HideDialogue);
              (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
                error: Error()
              }), DisableGuideController) : DisableGuideController)();
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).FightWinPop,
                data: (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                  error: Error()
                }), GuideController) : GuideController).ins.gerRewards()
              });
              cb();
            }

          }]
        },
        // 装备引导
        task_503: {
          name: "装备引导1",
          debug: false,
          condition: _crd && IsInMainScene === void 0 ? (_reportPossibleCrUseOfIsInMainScene({
            error: Error()
          }), IsInMainScene) : IsInMainScene,
          mask: true,
          steps: [{
            onStart(callback) {
              (_crd && EnableGuideController === void 0 ? (_reportPossibleCrUseOfEnableGuideController({
                error: Error()
              }), EnableGuideController) : EnableGuideController)();
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/function_toggle/Toggle3"
            },

            onEnd(cb) {
              cb();
            }

          }, {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/equip_node/inteam_node/equip_btn"
            },

            onEnd(cb) {
              (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
                error: Error()
              }), DisableGuideController) : DisableGuideController)();
              cb();
            }

          }]
        },
        task_504: {
          name: "装备引导2",
          debug: false,
          condition: _crd && IsInMainScene === void 0 ? (_reportPossibleCrUseOfIsInMainScene({
            error: Error()
          }), IsInMainScene) : IsInMainScene,
          mask: true,
          steps: [{
            onStart(callback) {
              (_crd && EnableGuideController === void 0 ? (_reportPossibleCrUseOfEnableGuideController({
                error: Error()
              }), EnableGuideController) : EnableGuideController)();
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/equip_node/inteam_node/equip_btn"
            },

            onEnd(cb) {
              (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
                error: Error()
              }), DisableGuideController) : DisableGuideController)();
              cb();
            }

          }]
        },
        // 羽毛引导
        task_505: {
          name: "羽毛引导1",
          debug: false,
          condition: _crd && IsInMainScene === void 0 ? (_reportPossibleCrUseOfIsInMainScene({
            error: Error()
          }), IsInMainScene) : IsInMainScene,
          mask: true,
          steps: [{
            onStart(callback) {
              (_crd && EnableGuideController === void 0 ? (_reportPossibleCrUseOfEnableGuideController({
                error: Error()
              }), EnableGuideController) : EnableGuideController)();
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/function_toggle/Toggle3"
            },

            onEnd(cb) {
              cb();
            }

          }, {
            onStart(callback) {
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/equip_node/inteam_node/equipshow_node/specialequip_layout/HeroEquipSlotItem"
            },

            onEnd(cb) {
              cb();
            }

          }, {
            onStart(callback) {
              (_crd && WaitShowPop === void 0 ? (_reportPossibleCrUseOfWaitShowPop({
                error: Error()
              }), WaitShowPop) : WaitShowPop)().then(() => {
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/JadeSelectPop/ScrollView/view/content/item0/itemNode/equip_node"
            },

            onEnd(cb) {
              (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
                error: Error()
              }), DisableGuideController) : DisableGuideController)();
              cb();
            }

          }]
        },
        task_506: {
          name: "羽毛引导2",
          debug: false,
          condition: _crd && IsInMainScene === void 0 ? (_reportPossibleCrUseOfIsInMainScene({
            error: Error()
          }), IsInMainScene) : IsInMainScene,
          mask: true,
          steps: [{
            onStart(callback) {
              (_crd && EnableGuideController === void 0 ? (_reportPossibleCrUseOfEnableGuideController({
                error: Error()
              }), EnableGuideController) : EnableGuideController)();
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/equip_node/inteam_node/equipshow_node/specialequip_layout/HeroEquipSlotItem"
            },

            onEnd(cb) {
              (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
                error: Error()
              }), DisableGuideController) : DisableGuideController)();
              cb();
            }

          }, {
            onStart(callback) {
              (_crd && WaitShowPop === void 0 ? (_reportPossibleCrUseOfWaitShowPop({
                error: Error()
              }), WaitShowPop) : WaitShowPop)().then(() => {
                callback();
              });
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/JadeSelectPop/ScrollView/view/content/item0/itemNode/equip_node"
            },

            onEnd(cb) {
              (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
                error: Error()
              }), DisableGuideController) : DisableGuideController)();
              cb();
            }

          }]
        },
        task_507: {
          name: "2-1领取通关奖励",
          debug: false,
          condition: _crd && IsInMainScene === void 0 ? (_reportPossibleCrUseOfIsInMainScene({
            error: Error()
          }), IsInMainScene) : IsInMainScene,
          mask: false,
          steps: [{
            onStart(callback) {
              (_crd && EnableGuideController === void 0 ? (_reportPossibleCrUseOfEnableGuideController({
                error: Error()
              }), EnableGuideController) : EnableGuideController)();
              callback();
            },

            command: {
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).Click,
              args: "Canvas/rootNode/uiNode/BattleMainView/reward_node/reward_layout"
            },

            onEnd(cb) {
              (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
                error: Error()
              }), DisableGuideController) : DisableGuideController)();
              cb();
            }

          }]
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c3206334df6544e8cf2dcf6a5e5f3736ea43896d.js.map
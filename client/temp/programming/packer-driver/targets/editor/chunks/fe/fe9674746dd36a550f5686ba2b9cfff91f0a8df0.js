System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, director, instantiate, log, Node, Prefab, Animation, UITransform, v3, GuideController, FightScene, EventMgr, LocalEvent, LoadResAsync, FightEvent, GuideDialogue, MainScene, tab, PlayerControl, ComicControl, BulletControl, _dec, _class, _crd, ccclass, property, Command, GuideCommand;

  function IsInFightScene() {
    let scene = director.getScene();

    if (scene.name != "FightScene") {
      return false;
    } else {
      let rookie = scene.getComponentInChildren(_crd && FightScene === void 0 ? (_reportPossibleCrUseOfFightScene({
        error: Error()
      }), FightScene) : FightScene);

      if (rookie && rookie.enabled) {
        return true;
      }
    }

    return false;
  }

  function IsInMainScene() {
    let scene = director.getScene();

    if (scene.name != "MainScene") {
      return false;
    } else {
      let rookie = scene.getComponentInChildren(_crd && MainScene === void 0 ? (_reportPossibleCrUseOfMainScene({
        error: Error()
      }), MainScene) : MainScene);

      if (rookie && rookie.enabled) {
        return true;
      }
    }

    return false;
  }

  function EnableTouchMask() {
    (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
      error: Error()
    }), GuideController) : GuideController).ins.touchMask.active = true;
    (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
      error: Error()
    }), GuideController) : GuideController).ins.resetTouchMask();
  }

  function DisableTouchMask() {
    (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
      error: Error()
    }), GuideController) : GuideController).ins.touchMask.active = false;
  }

  function WaitEnterScene(sceneName, callback) {
    let scene = director.getScene();

    if (scene.name == sceneName) {
      callback();
    } else {
      WaitSceneLoaded(sceneName, callback);
    }
  }

  function WaitSceneLoaded(sceneName, callback) {
    let checkFunc = function (name) {
      if (sceneName == name) {
        (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
          error: Error()
        }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
          error: Error()
        }), LocalEvent) : LocalEvent).SceneLoaded, checkFunc, (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
          error: Error()
        }), GuideController) : GuideController).ins);
        callback();
      }
    };

    (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
      error: Error()
    }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
      error: Error()
    }), LocalEvent) : LocalEvent).SceneLoaded, checkFunc, (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
      error: Error()
    }), GuideController) : GuideController).ins);
  }

  function SkipCommand(step) {
    step.skip_cmd = true;
  } // 等待战斗资源加载完成


  function WaitFightResLoad() {
    return new Promise(resolve => {
      (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
        error: Error()
      }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
        error: Error()
      }), LocalEvent) : LocalEvent).FightResLoadComplete, finish => {
        resolve(finish);
      }, (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
        error: Error()
      }), GuideController) : GuideController).ins, true);
    });
  } // 等待弹窗打开


  function WaitShowPop() {
    (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
      error: Error()
    }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
      error: Error()
    }), LocalEvent) : LocalEvent).ShowPop);
    return new Promise(resolve => {
      (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
        error: Error()
      }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
        error: Error()
      }), LocalEvent) : LocalEvent).ShowPop, finish => {
        (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
          error: Error()
        }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
          error: Error()
        }), LocalEvent) : LocalEvent).ShowPop);
        resolve(finish);
      }, (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
        error: Error()
      }), GuideController) : GuideController).ins, true);
    });
  } // 等待弹窗关闭


  function WaitHidePop() {
    (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
      error: Error()
    }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
      error: Error()
    }), LocalEvent) : LocalEvent).hidePop);
    return new Promise(resolve => {
      (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
        error: Error()
      }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
        error: Error()
      }), LocalEvent) : LocalEvent).hidePop, finish => {
        (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
          error: Error()
        }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
          error: Error()
        }), LocalEvent) : LocalEvent).hidePop);
        resolve(finish);
      }, (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
        error: Error()
      }), GuideController) : GuideController).ins, true);
    });
  }

  function WaitHideHeroPop() {
    return new Promise(resolve => {
      (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
        error: Error()
      }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
        error: Error()
      }), LocalEvent) : LocalEvent).hideHeroPop, finish => {
        (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
          error: Error()
        }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
          error: Error()
        }), LocalEvent) : LocalEvent).hideHeroPop);
        resolve(finish);
      }, (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
        error: Error()
      }), GuideController) : GuideController).ins, true);
    });
  } // 等待出怪


  function WaitShowMonster() {
    return new Promise(resolve => {
      (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
        error: Error()
      }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
        error: Error()
      }), LocalEvent) : LocalEvent).ShowMonster, finish => {
        // 删除监听怪物出现事件
        (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
          error: Error()
        }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
          error: Error()
        }), LocalEvent) : LocalEvent).ShowMonster);
        resolve(finish);
        (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
          error: Error()
        }), GuideController) : GuideController).ins.showMonster = true;
      }, (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
        error: Error()
      }), GuideController) : GuideController).ins, true);
    });
  } // 羽毛掉落


  function WaitJadeDrop() {
    (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
      error: Error()
    }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
      error: Error()
    }), LocalEvent) : LocalEvent).JadeDrop);
    return new Promise(resolve => {
      (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
        error: Error()
      }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
        error: Error()
      }), LocalEvent) : LocalEvent).JadeDrop, finish => {
        (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
          error: Error()
        }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
          error: Error()
        }), LocalEvent) : LocalEvent).JadeDrop);
        resolve(finish);
      }, (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
        error: Error()
      }), GuideController) : GuideController).ins, true);
    });
  } // 等待小鸡复活


  function WaitHeroRevive() {
    return new Promise(resolve => {
      (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
        error: Error()
      }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
        error: Error()
      }), LocalEvent) : LocalEvent).ReviveHero, finish => {
        (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
          error: Error()
        }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
          error: Error()
        }), LocalEvent) : LocalEvent).ReviveHero);
        resolve(finish);
      }, (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
        error: Error()
      }), GuideController) : GuideController).ins, true);
    });
  } // 等待boss出现


  function WaitBoss() {
    return new Promise(resolve => {
      (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
        error: Error()
      }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
        error: Error()
      }), FightEvent) : FightEvent).Boss_Enter, finish => {
        resolve(finish);
      }, (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
        error: Error()
      }), GuideController) : GuideController).ins, true);
    });
  } // 等待英雄上阵


  function heroInTeam() {
    return new Promise(resolve => {
      (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
        error: Error()
      }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
        error: Error()
      }), LocalEvent) : LocalEvent).heroInTeam, finish => {
        (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
          error: Error()
        }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
          error: Error()
        }), LocalEvent) : LocalEvent).heroInTeam);
        resolve(finish);
      }, (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
        error: Error()
      }), GuideController) : GuideController).ins, true);
    });
  } // 等待战斗胜利


  function WaitFightWin() {
    (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
      error: Error()
    }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
      error: Error()
    }), LocalEvent) : LocalEvent).FightWin);
    return new Promise(resolve => {
      (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
        error: Error()
      }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
        error: Error()
      }), LocalEvent) : LocalEvent).FightWin, finish => {
        (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
          error: Error()
        }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
          error: Error()
        }), LocalEvent) : LocalEvent).FightWin);
        resolve(finish);
      }, (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
        error: Error()
      }), GuideController) : GuideController).ins, true);
    });
  } // 等待当前主界面只有一个mainView


  function waitOnlyMainView() {
    return new Promise(resolve => {
      (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
        error: Error()
      }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
        error: Error()
      }), LocalEvent) : LocalEvent).checkMainView, finish => {
        (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
          error: Error()
        }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
          error: Error()
        }), LocalEvent) : LocalEvent).checkMainView);
        resolve(finish);
      }, (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
        error: Error()
      }), GuideController) : GuideController).ins, true);
    });
  }

  function DisableGuideController() {
    (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
      error: Error()
    }), GuideController) : GuideController).ins.node.active = false;
  }

  function EnableGuideController() {
    (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
      error: Error()
    }), GuideController) : GuideController).ins.node.active = true;
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "./GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightScene(extras) {
    _reporterNs.report("FightScene", "../../scene/FightScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResAsync(extras) {
    _reporterNs.report("LoadResAsync", "../mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../fight/define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideDialogue(extras) {
    _reporterNs.report("GuideDialogue", "./GuideDialogue", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainScene(extras) {
    _reporterNs.report("MainScene", "../../scene/MainScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../fight/base/obj/role/role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComicControl(extras) {
    _reporterNs.report("ComicControl", "../../Common/script/ComicControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletTab(extras) {
    _reporterNs.report("BulletTab", "../fight/power/powerTab/BulletTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletControl(extras) {
    _reporterNs.report("BulletControl", "../fight/base/obj/bullet/BulletControl", _context.meta, extras);
  }

  _export({
    IsInFightScene: IsInFightScene,
    IsInMainScene: IsInMainScene,
    EnableTouchMask: EnableTouchMask,
    DisableTouchMask: DisableTouchMask,
    WaitEnterScene: WaitEnterScene,
    SkipCommand: SkipCommand,
    WaitFightResLoad: WaitFightResLoad,
    WaitShowPop: WaitShowPop,
    WaitHidePop: WaitHidePop,
    WaitHideHeroPop: WaitHideHeroPop,
    WaitShowMonster: WaitShowMonster,
    WaitJadeDrop: WaitJadeDrop,
    WaitHeroRevive: WaitHeroRevive,
    WaitBoss: WaitBoss,
    heroInTeam: heroInTeam,
    WaitFightWin: WaitFightWin,
    waitOnlyMainView: waitOnlyMainView,
    DisableGuideController: DisableGuideController,
    EnableGuideController: EnableGuideController
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      director = _cc.director;
      instantiate = _cc.instantiate;
      log = _cc.log;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Animation = _cc.Animation;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      GuideController = _unresolved_2.GuideController;
    }, function (_unresolved_3) {
      FightScene = _unresolved_3.FightScene;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      LocalEvent = _unresolved_5.LocalEvent;
    }, function (_unresolved_6) {
      LoadResAsync = _unresolved_6.LoadResAsync;
    }, function (_unresolved_7) {
      FightEvent = _unresolved_7.FightEvent;
    }, function (_unresolved_8) {
      GuideDialogue = _unresolved_8.GuideDialogue;
    }, function (_unresolved_9) {
      MainScene = _unresolved_9.MainScene;
    }, function (_unresolved_10) {
      tab = _unresolved_10.tab;
    }, function (_unresolved_11) {
      PlayerControl = _unresolved_11.PlayerControl;
    }, function (_unresolved_12) {
      ComicControl = _unresolved_12.ComicControl;
    }, function (_unresolved_13) {
      BulletControl = _unresolved_13.BulletControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30765fZjM5BEo2OCcY38gdf", "GuideCommand", undefined);

      __checkObsolete__(['_decorator', 'director', 'instantiate', 'log', 'Node', 'Prefab', 'Animation', 'error', 'UITransform', 'Layers', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Command", Command = /*#__PURE__*/function (Command) {
        Command[Command["None"] = 0] = "None";
        Command[Command["Click"] = 1] = "Click";
        Command[Command["ClickNoMask"] = 2] = "ClickNoMask";
        Command[Command["ClickAnywhere"] = 3] = "ClickAnywhere";
        Command[Command["Dialogue"] = 4] = "Dialogue";
        Command[Command["DialogueNonmodal"] = 5] = "DialogueNonmodal";
        Command[Command["Serial"] = 6] = "Serial";
        Command[Command["Parallel"] = 7] = "Parallel";
        Command[Command["Some"] = 8] = "Some";
        Command[Command["Custom"] = 9] = "Custom";
        Command[Command["ReportedEvent"] = 10] = "ReportedEvent";
        Command[Command["Anim"] = 11] = "Anim";
        Command[Command["CircleClick"] = 12] = "CircleClick";
        Command[Command["CircleClickNoClick"] = 13] = "CircleClickNoClick";
        Command[Command["ReviveHero"] = 14] = "ReviveHero";
        Command[Command["RunComic"] = 15] = "RunComic";
        return Command;
      }({}));

      _export("GuideCommand", GuideCommand = (_dec = ccclass('GuideCommand'), _dec(_class = class GuideCommand {
        static getFunc(cmd) {
          let cmdFunc;

          switch (cmd) {
            case Command.None:
              {
                cmdFunc = GuideCommand.none;
                break;
              }

            case Command.ClickAnywhere:
              {
                cmdFunc = GuideCommand.ClickAnywhere;
                break;
              }

            case Command.Click:
              {
                cmdFunc = GuideCommand.clickFunc(true, true, false);
                break;
              }

            case Command.ReviveHero:
              {
                cmdFunc = GuideCommand.ReviveHero();
                break;
              }

            case Command.CircleClick:
              {
                cmdFunc = GuideCommand.clickFunc(true, true, false, true, true);
                break;
              }

            case Command.CircleClickNoClick:
              {
                cmdFunc = GuideCommand.CircleClickNoClick();
                break;
              }

            case Command.Dialogue:
              {
                cmdFunc = GuideCommand.dialogueFunc(true);
                break;
              }

            case Command.DialogueNonmodal:
              {
                cmdFunc = GuideCommand.dialogueFunc(false);
                break;
              }

            case Command.Serial:
              {
                cmdFunc = GuideCommand.serial;
                break;
              }

            case Command.Parallel:
              {
                cmdFunc = GuideCommand.parallel;
                break;
              }

            case Command.Some:
              {
                cmdFunc = GuideCommand.some;
                break;
              }

            case Command.Anim:
              {
                cmdFunc = GuideCommand.Anim();
                break;
              }

            case Command.RunComic:
              {
                cmdFunc = GuideCommand.RunComic();
                break;
              }
          }

          return cmdFunc;
        }

        static none(guide, args, callback) {
          callback();
        }

        static ReviveHero() {
          return async function (guide, args, callback) {
            const roles = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
              error: Error()
            }), PlayerControl) : PlayerControl).ins.getRoles();

            for (let i = 0; i < roles.length; i++) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
                error: Error()
              }), FightEvent) : FightEvent).ReviveByItemid, roles[i].info.configTab.Id);
            }

            callback();
          };
        }

        static RunComic() {
          return async function (guide, args, callback) {
            const parentNode = guide.node.getChildByName('dialogudeNode');
            (_crd && ComicControl === void 0 ? (_reportPossibleCrUseOfComicControl({
              error: Error()
            }), ComicControl) : ComicControl).ins.addComic(1, parentNode, callback);
          };
        }

        static Anim() {
          return async function (guide, args, callback) {
            const parentNode = guide.node.getChildByName('dialogudeNode');
            let GuideShowNode = parentNode.getChildByName("GuideShow");

            if (!GuideShowNode) {
              let GuideShow = await (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
                error: Error()
              }), LoadResAsync) : LoadResAsync)('prefab/guide/GuideShow', Prefab);
              GuideShowNode = instantiate(GuideShow);
              GuideShowNode.name = "GuideShow";
              guide.node.active = true;
              parentNode.addChild(GuideShowNode);
            }

            const anim = GuideShowNode.getComponent(Animation);
            anim.play("guideShowAni");
            anim.on(Animation.EventType.FINISHED, e => {
              callback();
              anim.node.removeFromParent();
              anim.node.destroy();
            });
          };
        }

        static dialogueFunc(modal) {
          return async function (guide, args, callback) {
            const parentNode = guide.node.getChildByName('dialogudeNode');
            let dialogueNode = parentNode.getChildByName("GuideDialogue");

            if (!dialogueNode) {
              let dialoguePre = await (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
                error: Error()
              }), LoadResAsync) : LoadResAsync)('prefab/guide/GuideDialogue', Prefab);
              dialogueNode = instantiate(dialoguePre);
              dialogueNode.name = "GuideDialogue";
              guide.node.active = true;
              parentNode.addChild(dialogueNode);
            }

            let dialogue = dialogueNode.getComponent(_crd && GuideDialogue === void 0 ? (_reportPossibleCrUseOfGuideDialogue({
              error: Error()
            }), GuideDialogue) : GuideDialogue);

            if (modal) {
              dialogue.setDialogude(args, callback);
            } else {
              dialogue.setDialogude(args, null);
              callback();
            }
          };
        }

        static serial(guide, args, callback) {
          async.eachSeries(args, (command, cb) => {
            guide._processCommand(command.cmd, command.args, cb);
          }, error => {
            callback(error);
          });
        }

        static parallel(guide, args, callback) {
          async.each(args, (command, cb) => {
            guide._processCommand(command.cmd, command.args, cb);
          }, error => {
            callback(error);
          });
        }

        static some(guide, args, callback) {
          async.some(args, (command, cb) => {
            guide._processCommand(command.cmd, command.args, err => {
              cb(err, true);
            });
          }, (err, result) => {
            callback(err);
          });
        }

        static ClickAnywhere(guide, args, callback) {
          const guideNode = guide.node;
          guide.fingerToNode(guideNode, false, false);
          guide.TargetNode = guideNode;
          guideNode.once(Node.EventType.TOUCH_END, event => {
            if (args === "CreateBullet") {
              // 复活所有小鸡
              // const roles = PlayerControl.ins.getRoles();
              // for (let i = 0; i < roles.length; i++) {
              //     // const abs = roles[i].info.abs;
              //     const heroId = roles[i].info.configTab.Id;
              //     EventMgr.emitFight(FightEvent.ReviveByItemid, heroId);
              //     // if(abs.isDead){
              //     //     EventMgr.emitFight(FightEvent.ReviveByItemid, heroId);
              //     // }
              // }
              const pos = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GetKeyValue_ConfigTable().WanDaoLocation;
              let bulletTab = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
                error: Error()
              }), PlayerControl) : PlayerControl).ins.getLeader().info.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).PowerType.PowerType_BulletTable, 45);
              (_crd && BulletControl === void 0 ? (_reportPossibleCrUseOfBulletControl({
                error: Error()
              }), BulletControl) : BulletControl).ins.clickEmitBullet(bulletTab, (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
                error: Error()
              }), PlayerControl) : PlayerControl).ins.getLeader(), v3(pos[0], pos[1]));
            }

            guide.TargetNode = null;
            guideNode.targetOff(guideNode);
            callback();
          }, this, true);
        }

        static CircleClickNoClick() {
          return function (guide, args, callback) {
            guide.TargetNode = null; //定位节点

            guide.find(args, (node, error) => {
              if (error) {
                callback(error);
                return;
              } //手指动画


              guide.fingerToNode(node, true, true, true);
              callback();
            });
          };
        }

        static clickFunc(fingerActive, holeActive, clickAnyWhere, coercive = true, isCircle) {
          return function (guide, args, callback) {
            guide.TargetNode = null; //定位节点

            guide.find(args, (node, error) => {
              if (error) {
                callback(error);
                return;
              }

              let touchNode = clickAnyWhere ? guide.node : node; // guide.setFingerNodeOffsetX(0);
              //手指动画

              let scale = 0;

              if (args === "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem1" || args === "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem0") {
                scale = 0.9;
              }

              guide.fingerToNode(node, fingerActive, holeActive, isCircle, scale);
              guide.TargetNode = node;
              (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                error: Error()
              }), GuideController) : GuideController).ins.node_jump.active = true;
              touchNode.once(Node.EventType.TOUCH_END, event => {
                log('节点被点击');
                guide.TargetNode = null;
                node.targetOff(node);

                if (args === "FightRootView/rootNode/objects/Monster") {
                  const pos = node.getComponent(UITransform).convertToWorldSpaceAR(node.position);
                  (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
                    error: Error()
                  }), PlayerControl) : PlayerControl).ins.getLeader().sendClickSkill(pos);
                }

                (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                  error: Error()
                }), GuideController) : GuideController).ins.node_jump.active = false;
                callback();
              }, node, true);

              if (!coercive) {
                guide.touchMask.active = false;
              }
            });
          };
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fe9674746dd36a550f5686ba2b9cfff91f0a8df0.js.map
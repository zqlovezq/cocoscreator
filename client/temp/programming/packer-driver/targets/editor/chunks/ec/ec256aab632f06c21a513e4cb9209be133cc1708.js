System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Command, IsInChessFightScene, WaitEnterScene, EventMgr, LocalEvent, _crd, ccclass, property, task_100;

  function _reportPossibleCrUseOfCommand(extras) {
    _reporterNs.report("Command", "../GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIsInChessFightScene(extras) {
    _reporterNs.report("IsInChessFightScene", "../GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaitEnterScene(extras) {
    _reporterNs.report("WaitEnterScene", "../GuideCommand", _context.meta, extras);
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
      Command = _unresolved_2.Command;
      IsInChessFightScene = _unresolved_2.IsInChessFightScene;
      WaitEnterScene = _unresolved_2.WaitEnterScene;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      LocalEvent = _unresolved_4.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48ee69hzEVOIYwr0iYQT38a", "task_100", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("task_100", task_100 = {
        name: '第1场战斗',
        debug: false,
        condition: _crd && IsInChessFightScene === void 0 ? (_reportPossibleCrUseOfIsInChessFightScene({
          error: Error()
        }), IsInChessFightScene) : IsInChessFightScene,
        steps: [{
          // desc: 'step1',
          onStart(callback) {
            (_crd && WaitEnterScene === void 0 ? (_reportPossibleCrUseOfWaitEnterScene({
              error: Error()
            }), WaitEnterScene) : WaitEnterScene)("FightScene", () => {
              callback();
            });
          }

        }, {
          onStart(callback) {
            callback();
          },

          //desc: step1 '欢迎来到疯狂棋士，您可以在棋盘中点亮的范围内放置您的棋子',
          delayTime: 1.5,
          command: {
            cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
              error: Error()
            }), Command) : Command).Parallel,
            args: [{
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).DialogueNonmodal,
              args: 100
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

        }, {
          onStart(callback) {
            callback();
          },

          delayTime: 0.1,
          //desc: step13 '继续提升投弹棋子的等级',
          command: {
            cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
              error: Error()
            }), Command) : Command).Parallel,
            args: [{
              cmd: (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
                error: Error()
              }), Command) : Command).ChessMove,
              args: {
                step: 5,
                id: 111
              }
            }]
          },

          onEnd(cb) {
            cb();
          }

        }]
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec256aab632f06c21a513e4cb9209be133cc1708.js.map
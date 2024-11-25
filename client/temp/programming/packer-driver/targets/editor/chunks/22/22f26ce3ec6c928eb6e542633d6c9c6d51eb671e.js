System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, director, isValid, EventMgr, _crd, ccclass, property, EventType;

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetStateEvent(extras) {
    _reporterNs.report("NetStateEvent", "../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../fight/define/FightEvent", _context.meta, extras);
  }

  _export("EventMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      director = _cc.director;
      isValid = _cc.isValid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3ba8bWpsfJGlLRbenvtnXHe", "EventMgr", undefined);

      __checkObsolete__(['Node', '_decorator', 'director', 'isValid']);

      ({
        ccclass,
        property
      } = _decorator);

      EventType = /*#__PURE__*/function (EventType) {
        EventType["msg"] = "msg_";
        EventType["netState"] = "netState_";
        EventType["local"] = "local_";
        EventType["fight"] = "fight_";
        return EventType;
      }(EventType || {});

      _export("EventMgr", EventMgr = class EventMgr {
        static emitMsg(ptl, buffer) {
          director.emit(`${EventType.msg}${ptl}`, buffer, ptl);
        }

        static emitLocal(message, arg1, arg2, arg3, arg4, arg5) {
          director.emit(EventType.local + String(message), arg1, arg2, arg3, arg4, arg5);
        }

        static emitFight(message, arg1, arg2, arg3, arg4, arg5) {
          director.emit(EventType.fight + String(message), arg1, arg2, arg3, arg4, arg5);
        }

        static emitNetState(message, arg1, arg2, arg3, arg4, arg5) {
          director.emit(EventType.netState + String(message), arg1, arg2, arg3, arg4, arg5);
        }

        static onMsg(ptl, callback, target) {
          director.on(`${EventType.msg}${ptl}`, function (buffer, ptl) {
            if (!isValid(target)) {
              director.targetOff(target);
              return;
            }

            callback.call(target, buffer, ptl);
          }, target);
        }

        static onNetState(extraMsg, callback, target) {
          director.on(`${EventType.netState}${extraMsg}`, function (extraMsg) {
            if (!isValid(target)) {
              director.targetOff(target);
              return;
            }

            callback.call(target, extraMsg);
          }, target);
        }

        static onLocal(message, callback, target, once = false) {
          if (once) {
            director.once(`${EventType.local}${message}`, callback, target);
          } else {
            director.on(`${EventType.local}${message}`, callback, target);
          }
        }

        static onFight(message, callback, target, once = false) {
          if (once) {
            director.once(`${EventType.fight}${message}`, callback, target);
          } else {
            director.on(`${EventType.fight}${message}`, callback, target);
          }
        }

        static unTarget(target) {
          director.targetOff(target);
        }

        static unMsg(ptl, callback, target) {
          director.off(`${EventType.msg}${ptl}`, callback, target);
        }

        static unLocal(ptl, callback, target) {
          director.off(`${EventType.local}${ptl}`, callback, target);
        }

        static unFight(message, callback, target) {
          director.off(`${EventType.fight}${message}`, callback, target);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=22f26ce3ec6c928eb6e542633d6c9c6d51eb671e.js.map
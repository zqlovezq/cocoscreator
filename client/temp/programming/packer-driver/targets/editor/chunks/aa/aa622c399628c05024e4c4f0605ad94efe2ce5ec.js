System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, game, AbsControl, ColliderMgr, AbsObjType, EventMgr, FightEvent, _dec, _class, _class2, _crd, ccclass, property, FrameControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfColliderMgr(extras) {
    _reporterNs.report("ColliderMgr", "../../../../framework/collision/ColliderMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObj(extras) {
    _reporterNs.report("AbsObj", "../obj/AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../obj/AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../obj/bullet/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFightUpdate(extras) {
    _reporterNs.report("IFightUpdate", "../../define/FightDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      game = _cc.game;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      ColliderMgr = _unresolved_3.ColliderMgr;
    }, function (_unresolved_4) {
      AbsObjType = _unresolved_4.AbsObjType;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      FightEvent = _unresolved_6.FightEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19c46KVnW5MlYNDd/NqqOIO", "FrameControl", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Color', 'Component', 'game', 'instantiate', 'Label', 'Node', 'Prefab', 'Quat', 'Rect', 'sp', 'Sprite', 'tween', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FrameControl", FrameControl = (_dec = ccclass('FrameControl'), _dec(_class = (_class2 = class FrameControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new FrameControl();
          }

          return this._instance;
        }

        constructor() {
          super();
          this.allAbsObj = new Map();

          /** 根据唯一id记录 */
          this.absAllMap = new Map();

          /** 触碰间隔 */
          this.intervalColliderAbss = [];
          this.dtTime = 0;
        }

        init() {
          this.register();
          this.allAbsObj.clear();
          this.absAllMap.clear();
          this.intervalColliderAbss.length = 0;

          for (const key in _crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType) {
            if (typeof (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType)[key] == 'number') {
              this.allAbsObj.set(key, []);
            }
          }

          game.frameRate = 60;
          FrameControl.frameIndex = 0;
          FrameControl.sortIndex = 0;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Pause, this.onPause, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Time_Scale, this.onTime_Scale, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).deal_clear_bullet, this.onDeal_clear_bullet, this);
        }

        onPause(bo) {
          this.updatePause(bo);
        }

        onTime_Scale(time) {
          this.updateTimeScale(time);
        }

        onDeal_clear_bullet(abs) {
          //刷新下子弹来源死亡
          let objList = this.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).bullet);
          let len = objList.length;

          for (let index = 0; index < len; index++) {
            const v = objList[index];

            if (v.owner.objId == abs.objId) {
              v.onOwnerDeal();
            }
          }
        }

        addObj(abs) {
          let objList = this.getObjList(abs.objType);
          objList.push(abs);
          this.absAllMap.set(abs.objId, abs);

          if (abs.isCollisionInterval()) {
            this.intervalColliderAbss.push(abs);
          }
        }

        removeCollisionInterval(abs) {
          if (abs.isCollisionInterval()) {
            let objList = this.intervalColliderAbss;
            let len = objList.length;

            for (let index = 0; index < len; index++) {
              const v = objList[index];

              if (v == abs) {
                objList.splice(index, 1);
                return true;
              }
            }
          }
        }

        removeObj(abs) {
          let objList = this.getObjList(abs.objType);
          let len = objList.length;
          this.absAllMap.delete(abs.objId);
          this.removeCollisionInterval(abs);

          for (let index = 0; index < len; index++) {
            const v = objList[index];

            if (v == abs) {
              objList.splice(index, 1);
              return true;
            }
          }

          return false;
        }

        getObjList(objType) {
          return this.allAbsObj.get((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType)[objType]);
        }

        getObjById(objId) {
          return this.absAllMap.get(objId);
        }

        updateAllBound() {
          this.allAbsObj.forEach((list, k) => {
            let len = list.length;

            for (let index = 0; index < len; index++) {
              const v = list[index];
              v.initGraphics();
            }
          });
        }

        iFightUpdate(dt) {
          FrameControl.frameIndex++;
          this.updateFrame(dt);
          FrameControl.sortIndex++;

          if (FrameControl.sortIndex >= 60) {
            FrameControl.sortIndex = 0;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Sort_AbsRole);
          }
        }

        preCollider() {
          let objList = this.intervalColliderAbss;
          let len = objList.length;

          for (let index = 0; index < len; index++) {
            const v = objList[index];
            v && v.preCollider();
          }
        }

        lateCollider() {
          let objList = this.intervalColliderAbss;
          let len = objList.length;

          for (let index = 0; index < len; index++) {
            const v = objList[index];
            v && v.lateCollider();
          }
        }

        updateFrame(dt) {
          this.allAbsObj.forEach((v, k) => {
            this.absObjUpdateFrame(v, dt);
          });
        }

        absObjUpdateFrame(list, dt) {
          let len = list.length;

          for (let index = 0; index < len; index++) {
            const v = list[index];
            v && v.updateFrame(dt);
          }
        }

        updatePause(pause) {
          this.allAbsObj.forEach((list, k) => {
            let len = list.length;

            for (let index = 0; index < len; index++) {
              const v = list[index];

              if (v && v.avatar) {
                v.avatar.updatePause(pause);
              }
            }
          });
        }

        updateTimeScale(timeScale) {
          this.allAbsObj.forEach((list, k) => {
            let len = list.length;

            for (let index = 0; index < len; index++) {
              const v = list[index];

              if (v && v.avatar) {
                v.avatar.updateTimeScale();
              }
            }
          });
        }
        /** 根据指定类型获取是否全部死亡 */


        isAllDeadByObjType(absType) {
          let list = this.getObjList(absType);
          let len = list.length;

          for (let index = 0; index < len; index++) {
            const v = list[index];

            if (!v.isDead && v.isActive && !v.isDeadComplete) {
              return false;
            }
          }

          return true;
        }
        /** 回收全部对象 */


        recycleAll() {
          this.allAbsObj.forEach((v, k) => {
            let len = v.length;

            for (let index = 0; index < len; index++) {
              const v1 = v[index];
              !v1.isRecycle && v1.recycle();
            }
          });
          this.absAllMap.clear();
        }

        getHasLen() {
          let len = 0;
          this.allAbsObj.forEach((v, k) => {
            len += v.length;
          });
          console.log("getHasLen", len, (_crd && ColliderMgr === void 0 ? (_reportPossibleCrUseOfColliderMgr({
            error: Error()
          }), ColliderMgr) : ColliderMgr).inst.getBodyLen());
          return len;
        }

      }, _class2._instance = void 0, _class2.frameIndex = 0, _class2.sortIndex = 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa622c399628c05024e4c4f0605ad94efe2ce5ec.js.map
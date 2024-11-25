System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, Vec3, MathAngle, Avatar, EventMgr, FightEvent, tab, _dec, _class, _crd, ccclass, property, PvpObjType, tempPos, PvpObj;

  function _reportPossibleCrUseOfMathAngle(extras) {
    _reporterNs.report("MathAngle", "../../../../framework/collision/Maths", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAvatar(extras) {
    _reporterNs.report("Avatar", "../../animation/Avatar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      MathAngle = _unresolved_2.MathAngle;
    }, function (_unresolved_3) {
      Avatar = _unresolved_3.Avatar;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      FightEvent = _unresolved_5.FightEvent;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc5efLmhiZMTJ7RffxhRWdF", "PvpObj", undefined);

      __checkObsolete__(['_decorator', 'ccenum', 'Component', 'UITransform', 'v3', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 战斗对象类型 */

      _export("PvpObjType", PvpObjType = /*#__PURE__*/function (PvpObjType) {
        PvpObjType[PvpObjType["default"] = 0] = "default";
        PvpObjType[PvpObjType["role"] = 1] = "role";
        PvpObjType[PvpObjType["bullet"] = 2] = "bullet";
        return PvpObjType;
      }({}));

      tempPos = new Vec3();

      _export("PvpObj", PvpObj = (_dec = ccclass('PvpObj'), _dec(_class = class PvpObj extends Component {
        constructor() {
          super(...arguments);
          this.objId = 0;
          this.objType = PvpObjType.default;
          this.velocity = new Vec3();
          //当前速度
          this.voAngle = 0;
          //vo角度
          this.speed = 0;
          this.isRecycle = false;
          this.isDead = false;
          this.center = new Vec3();
          this.configTab = void 0;
          this.avatar = void 0;
          this._animationId = 0;
        }

        onLoad() {
          this.node.addComponent(UITransform);
        }
        /** 回收 */


        recycle() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Pvp_recycle, this);
        }

        reset() {
          this.avatar.recycle();
          this.avatar = null;
          this._animationId = 0;
          this.isDead = false;
          this.velocity.set(Vec3.ZERO);
          this.voAngle = 0;
          this.objId = 0;
          this.center.set(Vec3.ZERO);
        }

        setBounds(ids) {
          var bound = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BoundTableById.getValue(ids[0] || 1);

          if (bound.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BoundType.BoundType_Circle) {
            this.center.x = bound.Parameters[0];
            this.center.y = bound.Parameters[1];
          } else if (bound.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BoundType.BoundType_Rectangle) {
            this.center.x = bound.Parameters[0];
            this.center.y = bound.Parameters[1];
          }
        } //同步位置到body


        setPosition(position) {
          this.node.position = position;
        }

        setAngle(angle) {
          this.node.angle = angle;
        }

        addAngle(angle) {
          this.setAngle(this.node.angle + angle);
        } //同步缩放到body


        setScale(scale) {
          this.node.scale = scale;
        }

        getRotation() {
          return this.node.rotation;
        }

        getPosition() {
          return this.node.position;
        }

        getScale() {
          return this.node.scale;
        }

        traceDirection(tmpstartPos, tmptargetPos) {
          Vec3.subtract(tempPos, tmptargetPos, tmpstartPos);
          tempPos.normalize();
          this.setVelocity(tempPos);
        }

        init() {
          this.avatar = (_crd && Avatar === void 0 ? (_reportPossibleCrUseOfAvatar({
            error: Error()
          }), Avatar) : Avatar).create();
          this.node.addChild(this.avatar.node);
        }

        onDestroy() {
          this.unscheduleAllCallbacks();
        }

        getVoAngle() {
          return this.voAngle;
        }

        setVelocity(ve) {
          this.voAngle = (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
            error: Error()
          }), MathAngle) : MathAngle).directionToAngle(ve);
          ve.multiplyScalar(this.speed);
          this.velocity.set(ve);
        }

        setVelocityAngle(angle) {
          this.voAngle = angle;
          (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
            error: Error()
          }), MathAngle) : MathAngle).angleToDirection(angle, this.velocity);
          this.velocity.multiplyScalar(this.speed);
        }

        playAnim(animId, fb) {
          if (this._animationId == animId) {
            return;
          }

          this._animationId = animId;

          if (animId == 0) {
            fb && fb();
            return;
          }

          this.avatar.setCb(fb);
          this.avatar.setAnimationId(animId);
        }

        updateFrame(dt) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b7df88ef92e01a9c7eb7750ce43925d91af1e01.js.map
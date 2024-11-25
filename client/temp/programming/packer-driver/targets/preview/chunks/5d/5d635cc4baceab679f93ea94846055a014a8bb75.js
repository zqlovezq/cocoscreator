System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Quat, UITransform, Vec3, _decorator, CollisionObject, FightRootControl, StateMachine, tab, ShapeType, Avatar, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, tempPos, tempRot, AbsObjType, AbsObj;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCollisionObject(extras) {
    _reporterNs.report("CollisionObject", "../../../../framework/collision/CollisionObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./state/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "./state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsMove(extras) {
    _reporterNs.report("AbsMove", "../move/AbsMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShapeType(extras) {
    _reporterNs.report("ShapeType", "../../../../framework/collision/CollisionShape", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAvatar(extras) {
    _reporterNs.report("Avatar", "../../animation/Avatar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjInfo(extras) {
    _reporterNs.report("AbsObjInfo", "./AbsObjInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Quat = _cc.Quat;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CollisionObject = _unresolved_2.CollisionObject;
    }, function (_unresolved_3) {
      FightRootControl = _unresolved_3.FightRootControl;
    }, function (_unresolved_4) {
      StateMachine = _unresolved_4.StateMachine;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      ShapeType = _unresolved_6.ShapeType;
    }, function (_unresolved_7) {
      Avatar = _unresolved_7.Avatar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1ea60ZCPZDEIH7g6zb4Qi6", "AbsObj", undefined);

      __checkObsolete__(['Input', 'Layers', 'Node', 'PhysicsSystem', 'Prefab', 'Quat', 'UITransform', 'Vec3', '_decorator', 'sp', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3();
      tempRot = new Quat();
      /** 战斗对象类型 */

      _export("AbsObjType", AbsObjType = /*#__PURE__*/function (AbsObjType) {
        AbsObjType[AbsObjType["default"] = 0] = "default";
        AbsObjType[AbsObjType["role"] = 1] = "role";
        AbsObjType[AbsObjType["enemy"] = 2] = "enemy";
        AbsObjType[AbsObjType["bullet"] = 3] = "bullet";
        return AbsObjType;
      }({}));
      /**战斗对象 地图上 角色、怪物、子弹、掉落、障碍*/


      _export("AbsObj", AbsObj = (_dec = ccclass('AbsObj'), _dec2 = property({
        tooltip: '是否是预制体'
      }), _dec3 = property({
        tooltip: '是否使用预制体属性'
      }), _dec(_class = (_class2 = class AbsObj extends (_crd && CollisionObject === void 0 ? (_reportPossibleCrUseOfCollisionObject({
        error: Error()
      }), CollisionObject) : CollisionObject) {
        constructor() {
          super(...arguments);
          this.objType = AbsObjType.default;
          this.objId = 0;

          _initializerDefineProperty(this, "isPrefab", _descriptor, this);

          _initializerDefineProperty(this, "isPrefabProperty", _descriptor2, this);

          this._isActive = true;
          this.configId = 0;
          this._isDead = false;
          this.isDeadComplete = false;
          this.avatar = void 0;
          this._animationId = 0;

          /** 状态机 */
          this.stateMachine = void 0;

          /** 状态机对应的动画id */
          this.stateAnims = void 0;

          /** 最后伤害的角色 */
          this.endDamegeObj = null;
          this.move = void 0;
          this.info = void 0;

          /** 子对象数组 */
          this.childObj = [];
        }

        onLoad() {
          this.node.addComponent(UITransform);
        }

        getBodyId() {
          return this.body.id;
        }

        addChildObj(obj) {
          this.childObj.push(obj);
        }

        getObjTypeZh() {
          return AbsObjType[this.objType];
        }

        isMonster() {
          return this.objType == AbsObjType.enemy;
        }

        isRole() {
          return this.objType == AbsObjType.role;
        }
        /** 初始化状态机 */


        initMachine() {
          if (this.stateMachine == null) {
            this.stateMachine = new (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
              error: Error()
            }), StateMachine) : StateMachine)();
          }

          this.stateMachine.setAbs(this);
          this.stateMachine.run();
          this.avatar = (_crd && Avatar === void 0 ? (_reportPossibleCrUseOfAvatar({
            error: Error()
          }), Avatar) : Avatar).create();
          this.node.addChild(this.avatar.node);
          this.avatar.setCb(animName => {
            this.avatarPlayComplete(animName);
          });
        }

        setStateAnimId(state, animId) {
          this.stateAnims.set(state, animId);
        }

        changeState(sateType) {
          this.stateMachine.changeState(sateType);
        }

        isState(state) {
          return this.stateMachine.isState(state);
        }

        set animationId(id) {
          if (this._animationId == id) {
            return;
          }

          this._animationId = id;

          if (id == 0) {
            if (this.avatar) {
              this.avatar.reset();
            }

            return;
          }

          this.avatar.setAnimationId(id);
          this.avatarUpdate();
        }

        avatarUpdate() {}

        get animationId() {
          return this._animationId;
        }

        get isActive() {
          return this._isActive;
        }

        set isActive(bo) {
          if (this._isActive == bo) {
            return;
          }

          this._isActive = bo;
          this.setTrigger(this._isActive);
          this.updateActive();
        }

        get isDead() {
          return this._isDead;
        }

        set isDead(bo) {
          this._isDead = bo;
          this.isDeadComplete = false;
        }

        setTrigger(trigger) {
          super.setTrigger(trigger);
        }

        updateActive(bool) {}

        setObjInfo(_info) {
          this.info = _info;
          this.info.setAbs(this);
          this.isDead = false;
          this.stateAnims = new Map();
        }
        /** 回收 */


        recycle() {
          this.isDead = true;
          super.recycle();
        }

        reset() {
          this.avatar.recycle();
          this.info.recycle();
          this.info = null;
          this.avatar = null;
          this.animationId = 0;
          this.endDamegeObj = null;
          super.reset();
        }

        addAnimation(trackIndex, animName, loop) {// this.avatar.addAnimation(trackIndex, animName, loop)
        }

        setAnimation(trackIndex, animName, loop) {// if (this.avatar.animation == animName) {
          //     return
          // }
          // this.avatar.setAnimation(trackIndex, animName, loop)
        }

        avatarPlayComplete(animName) {
          this.stateMachine.avatarPlayComplete(animName);
        }

        updateFrame(dt) {
          this.info && this.info.updateFrame(dt);
          this.stateMachine.updateFrame(dt);
        }

        insertFrame() {
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.addObj(this);
        }

        removeFrame() {
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.removeObj(this);
        }

        onHitRole(defanseAbs) {// console.log(this.getObjTypeZh(), "onHitRole", defanseAbs.getObjTypeZh())
        }

        onDetectorToEnemy(abss) {}
        /** 移动完成 */


        onMoveComplete() {}

        setBounds(ids) {
          var bound = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BoundTableById.getValue(ids[0] || 1);

          if (bound.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BoundType.BoundType_Circle) {
            this.type = (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).Sphere;
            this.center.x = bound.Parameters[0];
            this.center.y = bound.Parameters[1];
            this.radius = bound.Parameters[2];
          } else if (bound.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BoundType.BoundType_Rectangle) {
            this.type = (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).Box;
            this.center.x = bound.Parameters[0];
            this.center.y = bound.Parameters[1];
            this.size.x = bound.Parameters[2];
            this.size.y = bound.Parameters[3];
          }
        }

        traceDirection(tmpstartPos, tmptargetPos) {
          Vec3.subtract(tempPos, tmptargetPos, tmpstartPos);
          tempPos.normalize();
          this.setVelocityAndRatio(tempPos, 1);
        }

        initGraphics() {
          if (!(_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.isBound) {
            if (this.bobyGraphics) {
              this.bobyGraphics.clear();
            }

            return;
          }

          if (this.isActive) {
            super.initGraphics();
          }
        }

        isCollisionInterval() {
          return false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isPrefabProperty", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5d635cc4baceab679f93ea94846055a014a8bb75.js.map
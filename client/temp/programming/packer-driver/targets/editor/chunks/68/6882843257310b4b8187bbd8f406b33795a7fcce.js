System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Mat3, Quat, Vec3, Dirty, CollisionBody, _crd;

  function _reportPossibleCrUseOfDirty(extras) {
    _reporterNs.report("Dirty", "./CollisionObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionObject(extras) {
    _reporterNs.report("CollisionObject", "./CollisionObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLine(extras) {
    _reporterNs.report("Line", "./Maths", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionArc(extras) {
    _reporterNs.report("CollisionArc", "./CollisionShape", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionShape(extras) {
    _reporterNs.report("CollisionShape", "./CollisionShape", _context.meta, extras);
  }

  _export("CollisionBody", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Mat3 = _cc.Mat3;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Dirty = _unresolved_2.Dirty;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35d5eaYM9dJwrqPskERJ5FA", "CollisionBody", undefined);

      __checkObsolete__(['Mat3', 'Quat', 'Vec3']);

      _export("CollisionBody", CollisionBody = class CollisionBody {
        constructor(obj) {
          this.id = 0;
          this.mask = 0;
          this.group = 0;
          this.shape = null;
          this.object = null;
          this.priority = 0;
          //脏区更新标记
          this.isDirty = 1 | 2 | 4;
          //缓存
          this.lower = 0;
          this.upper = 0;
          this.aabb = [0, 0, 0, 0, 0, 0];
          //状态
          this.isRemove = false;
          this.isRetrieve = true;
          this.isIdentity = true;
          this.inCollider = false;
          this.isIgnoreTrigger = false;
          //缓存
          this.raidus = 0;
          this.center = new Vec3();
          this.rotMat3 = new Mat3();
          this.halfSize = new Vec3();
          this.scale = new Vec3(1, 1, 1);
          this.arcPoint = new Vec3();
          //Agent
          this.isAgent = false;
          //Agent 开关
          this.maxNeighbors = 0;
          this.neighborDist = 0;
          //物体半径
          this.maxVelocity = 0;
          //最大速度
          this.newVelocity = new Vec3();
          this.prefVelocity = new Vec3();
          this.orcaLines = [];
          this.object = obj;
        }

        updateBound(isDirty = (_crd && Dirty === void 0 ? (_reportPossibleCrUseOfDirty({
          error: Error()
        }), Dirty) : Dirty).NON) {
          let object = this.object;
          isDirty |= object.hasChangeDirty();

          if (this.isAgent) {
            let v = object.velocity;
            this.newVelocity.x = v.x;
            this.newVelocity.y = v.y; // let pv = this.prefVelocity;
            // pv.x+= (v.x - pv.x)*0.75;
            // pv.y+= (v.y - pv.y)*0.75;
          }

          if (isDirty > 0) {
            let aabbChange = false;
            const shape = this.shape;

            if (isDirty & (_crd && Dirty === void 0 ? (_reportPossibleCrUseOfDirty({
              error: Error()
            }), Dirty) : Dirty).S) {
              aabbChange = true;
              let s = this.getScale();
              this.scale.x = s.x >= 0 ? s.x : -s.x;
              this.scale.y = s.y >= 0 ? s.y : -s.y;
              this.scale.z = s.z >= 0 ? s.z : -s.z;
            }

            if (isDirty & (_crd && Dirty === void 0 ? (_reportPossibleCrUseOfDirty({
              error: Error()
            }), Dirty) : Dirty).R) {
              //旋转更新aabb
              this.isIdentity = false;
              let rot = this.getRotation();
              this.rotMat3.fromQuat(rot); //计算缓存Mat3

              if (rot.equals(Quat.IDENTITY, 0.0001)) {
                this.isIdentity = true;
              }

              aabbChange = true;
            }

            if (aabbChange) shape.updateAABB(this.getScale(), this.getRotMat3(), this.isIdentity);
            const AABB = this.aabb; // world aabb

            const aabb = shape.aabb; //local aabb

            const p = this.getPosition(); //world postion

            AABB[0] = aabb[0] + p.x;
            AABB[1] = aabb[1] + p.y;
            AABB[2] = aabb[2] + p.z;
            AABB[3] = aabb[3] + p.x;
            AABB[4] = aabb[4] + p.y;
            AABB[5] = aabb[5] + p.z;
            this.isDirty = 1 | 2 | 4; //设置脏区标记

            return true;
          }

          return false;
        }

        clear() {
          this.shape = null;
          this.object = null;
          this.isRemove = false;
          this.inCollider = false;
          this.isIgnoreTrigger = false;
          this.orcaLines.length = 0;
        } //body 坐标统一使用世界数据进行计算


        getRotMat3() {
          return this.rotMat3;
        } //world rotate mat3


        getScale() {
          return this.object.node.worldScale;
        } // world scale 


        getPosition() {
          return this.object.node.worldPosition;
        } //wold position


        getRotation() {
          return this.object.node.worldRotation;
        } //world rotation


        getCenter() {
          if (this.isDirty & 1) {
            this.isDirty &= ~1;
            const aabb = this.aabb;
            const center = this.center;
            center.x = (aabb[0] + aabb[3]) * 0.5;
            center.y = (aabb[1] + aabb[4]) * 0.5;
            center.z = (aabb[2] + aabb[5]) * 0.5;
          }

          return this.center; //world center
        }

        getRaidus() {
          if (this.isDirty & 2) {
            this.isDirty &= ~2;
            const scale = this.scale;
            const raidus = this.shape.radius;
            this.raidus = Math.max(scale.x, scale.y, scale.z) * raidus;
          }

          return this.raidus; //world raidus
        }

        getHalfSize() {
          if (this.isDirty & 4) {
            this.isDirty &= ~4;
            const scale = this.scale;
            const size = this.shape.size;
            const halfSize = this.halfSize;
            halfSize.x = scale.x * size.x * 0.5;
            halfSize.y = scale.y * size.y * 0.5;
            halfSize.z = scale.z * size.z * 0.5;
          }

          return this.halfSize; //world halfsize
        }

        getArcAngle() {
          let newShape = this.shape;

          if (this.getScale().x >= 0) {
            this.arcPoint.x = this.object.node.angle;
            this.arcPoint.y = this.object.node.angle + newShape.angle;
          } else {
            //弧形翻转
            this.arcPoint.x = 180 - (this.object.node.angle + newShape.angle);
            this.arcPoint.y = 180 - this.object.node.angle;
          }

          return this.arcPoint;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6882843257310b4b8187bbd8f406b33795a7fcce.js.map
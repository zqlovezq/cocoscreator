System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, Intersection2D, obbIntersect, sphereAABBDistance, sphereOBBDistance, MathAngle, CollisionShape, CollisionBox, CollisionSphere, CollisionArc, ShapeTest, _crd, ShapeType, center, center1, center2, ShapeSupport;

  function shaereArc(a, b) {
    Vec3.subtract(center, b.getCenter(), a.getCenter());

    if (centerArc(center, b.getArcAngle())) {
      return true;
    }

    return isSegmentCircleIntersect(a, b, b.getArcAngle().x) || isSegmentCircleIntersect(a, b, b.getArcAngle().y);
  }

  function isSegmentCircleIntersect(a, b, angle) {
    var p1 = b.getCenter();
    var p2 = (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
      error: Error()
    }), MathAngle) : MathAngle).angleToDirection(angle);
    p2.multiplyScalar(b.getRaidus());
    p2.add(p1);
    return (_crd && Intersection2D === void 0 ? (_reportPossibleCrUseOfIntersection2D({
      error: Error()
    }), Intersection2D) : Intersection2D).polygonCircle([p1, p2], a.getCenter(), a.getRaidus());
  }

  function centerArc(center, arcAngle) {
    var targetAngle = (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
      error: Error()
    }), MathAngle) : MathAngle).directionToAngle(center) + 180; //弧形到圆角度

    return (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
      error: Error()
    }), MathAngle) : MathAngle).isAngleBetween(targetAngle, arcAngle.x, arcAngle.y);
  }

  function _reportPossibleCrUseOfIntersection2D(extras) {
    _reporterNs.report("Intersection2D", "./AILib", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobbIntersect(extras) {
    _reporterNs.report("obbIntersect", "./AILib", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsphereAABBDistance(extras) {
    _reporterNs.report("sphereAABBDistance", "./AILib", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsphereOBBDistance(extras) {
    _reporterNs.report("sphereOBBDistance", "./AILib", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionBody(extras) {
    _reporterNs.report("CollisionBody", "./CollisionBody", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathAngle(extras) {
    _reporterNs.report("MathAngle", "./Maths", _context.meta, extras);
  }

  _export({
    CollisionShape: void 0,
    CollisionBox: void 0,
    CollisionSphere: void 0,
    CollisionArc: void 0,
    ShapeTest: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Intersection2D = _unresolved_2.default;
      obbIntersect = _unresolved_2.obbIntersect;
      sphereAABBDistance = _unresolved_2.sphereAABBDistance;
      sphereOBBDistance = _unresolved_2.sphereOBBDistance;
    }, function (_unresolved_3) {
      MathAngle = _unresolved_3.MathAngle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83d94jbLnZF7oVs2WQ1jJK+", "CollisionShape", undefined);

      __checkObsolete__(['Mat3', 'Vec2', 'Vec3', 'v2', 'v3']);

      _export("ShapeType", ShapeType = /*#__PURE__*/function (ShapeType) {
        ShapeType[ShapeType["Box"] = 1] = "Box";
        ShapeType[ShapeType["Sphere"] = 2] = "Sphere";
        ShapeType[ShapeType["Arc"] = 4] = "Arc";
        return ShapeType;
      }({}));

      ;

      _export("CollisionShape", CollisionShape = class CollisionShape {
        constructor(center, type) {
          this.radius = 0;
          this.height = 0;
          this.type = ShapeType.Box;
          this.size = {
            x: 0,
            y: 0,
            z: 0
          };
          this.scale = {
            x: 1,
            y: 1,
            z: 1
          };
          this.center = {
            x: 0,
            y: 0,
            z: 0
          };
          this.aabb = [0, 0, 0, 0, 0, 0];
          this.type = type; // this.isDirty = true;

          this.center.x = center.x;
          this.center.y = center.y;
          this.center.z = center.z;
        }

        updateAABB(scale, world, isIdentity) {
          if (isIdentity === void 0) {
            isIdentity = true;
          }

          var size = this.size;
          var center = this.center;
          var sx = scale.x,
              sy = scale.y,
              sz = scale.z;
          var cx = center.x,
              cy = center.y,
              cz = center.z;
          var x = size.x * 0.5,
              y = size.y * 0.5,
              z = size.z * 0.5;
          var aabb = this.aabb;

          if (!isIdentity) {
            var uX = world.m00 * sx,
                uY = world.m01 * sx,
                uZ = world.m02 * sx;
            var vX = world.m03 * sy,
                vY = world.m04 * sy,
                vZ = world.m05 * sy;
            var wX = world.m06 * sz,
                wY = world.m07 * sz,
                wZ = world.m08 * sz; // 计算新的中心点

            var cX = uX * cx + vX * cy + wX * cz;
            var cY = uY * cx + vY * cy + wY * cz;
            var cZ = uZ * cx + vZ * cy + wZ * cz; // 计算新的包围盒宽度、高度和深度

            var absU = Math.abs(uX) * x + Math.abs(vX) * y + Math.abs(wX) * z;
            var absV = Math.abs(uY) * x + Math.abs(vY) * y + Math.abs(wY) * z;
            var absW = Math.abs(uZ) * x + Math.abs(vZ) * y + Math.abs(wZ) * z; // 计算新的最小和最大顶点

            aabb[0] = cX - absU, aabb[1] = cY - absV, aabb[2] = cZ - absW;
            aabb[3] = cX + absU, aabb[4] = cY + absV, aabb[5] = cZ + absW;
          } else {
            x = Math.abs(x * sx);
            y = Math.abs(y * sy);
            z = Math.abs(z * sz);
            aabb[0] = cx * sx - x;
            aabb[1] = cy * sy - y;
            aabb[2] = cz * sz - z;
            aabb[3] = cx * sx + x;
            aabb[4] = cy * sy + y;
            aabb[5] = cz * sz + z;
          }

          return aabb;
        }

      });

      _export("CollisionBox", CollisionBox = class CollisionBox extends CollisionShape {
        constructor(center, size) {
          super(center, ShapeType.Box);
          this.size.x = size.x;
          this.size.y = size.y;
          this.size.z = size.z;
        }

      });

      _export("CollisionSphere", CollisionSphere = class CollisionSphere extends CollisionShape {
        constructor(center, radius) {
          super(center, ShapeType.Sphere);
          this.radius = radius;
          this.size.x = radius * 2;
          this.size.y = radius * 2;
          this.size.z = radius * 2;
        }

      });

      _export("CollisionArc", CollisionArc = class CollisionArc extends CollisionShape {
        //指向
        constructor(center, radius, angle, heading) {
          super(center, ShapeType.Arc);
          this.angle = void 0;
          //开口角度
          this.heading = void 0;
          this.radius = radius;
          this.angle = angle;
          this.heading = heading;
          this.size.x = radius * 2;
          this.size.y = radius * 2;
          this.size.z = radius * 2;
        }

        getArcAngle() {
          return this.angle;
        }

      });

      center = new Vec3();
      center1 = new Vec3();
      center2 = new Vec3();

      _export("ShapeSupport", ShapeSupport = []);

      ShapeSupport[ShapeType.Box | ShapeType.Box] = function (a, b) {
        //a,b 没有旋转,已进行AABB处理 , 直接返回 true
        if (a.isIdentity && b.isIdentity) return true;
        return (_crd && obbIntersect === void 0 ? (_reportPossibleCrUseOfobbIntersect({
          error: Error()
        }), obbIntersect) : obbIntersect)(a.getCenter(), a.getHalfSize(), a.getRotMat3(), b.getCenter(), b.getHalfSize(), b.getRotMat3());
      };

      ShapeSupport[ShapeType.Box | ShapeType.Sphere] = function (a, b) {
        //a没有旋转当AABB处理 
        if (a.isIdentity) {
          // 转换到 aabb 坐标系下
          Vec3.subtract(center, b.getCenter(), a.getCenter());
          return (_crd && sphereAABBDistance === void 0 ? (_reportPossibleCrUseOfsphereAABBDistance({
            error: Error()
          }), sphereAABBDistance) : sphereAABBDistance)(center, b.getRaidus(), a.getHalfSize());
        }

        return (_crd && sphereOBBDistance === void 0 ? (_reportPossibleCrUseOfsphereOBBDistance({
          error: Error()
        }), sphereOBBDistance) : sphereOBBDistance)(b.getCenter(), b.getRaidus(), a.getCenter(), a.getRotation(), a.getHalfSize());
      };

      ShapeSupport[ShapeType.Sphere | ShapeType.Sphere] = function (a, b) {
        Vec3.subtract(center, b.getCenter(), a.getCenter());
        var lengthSqr = center.lengthSqr();
        var radii = a.getRaidus() + b.getRaidus();
        return lengthSqr <= radii * radii;
      };

      ShapeSupport[ShapeType.Box | ShapeType.Arc] = function (a, b) {
        //a没有旋转当AABB处理 
        if (a.isIdentity) {
          // 转换到 aabb 坐标系下
          Vec3.subtract(center, b.getCenter(), a.getCenter());

          if ((_crd && sphereAABBDistance === void 0 ? (_reportPossibleCrUseOfsphereAABBDistance({
            error: Error()
          }), sphereAABBDistance) : sphereAABBDistance)(center, b.getRaidus(), a.getHalfSize())) {
            //和圆重叠
            return centerArc(center, b.getArcAngle());
          }

          return false;
        }

        return (_crd && sphereOBBDistance === void 0 ? (_reportPossibleCrUseOfsphereOBBDistance({
          error: Error()
        }), sphereOBBDistance) : sphereOBBDistance)(b.getCenter(), b.getRaidus(), a.getCenter(), a.getRotation(), a.getHalfSize());
      };

      ShapeSupport[ShapeType.Sphere | ShapeType.Arc] = function (a, b) {
        if (ShapeSupport[ShapeType.Sphere | ShapeType.Sphere](a, b)) {
          //先算圆是否重叠
          return shaereArc(a, b);
        }

        return false;
      };

      ShapeSupport[ShapeType.Arc | ShapeType.Arc] = function (a, b) {
        //应该不需要实现
        return false;
      };

      _export("ShapeTest", ShapeTest = class ShapeTest {
        //a为矩形 or 圆形  ,b必定为圆形
        static test(a, b, raidus) {
          if (a.shape.type == ShapeType.Box) {
            //a没有旋转当AABB处理 
            if (a.isIdentity) {
              // 转换到 aabb 坐标系下
              Vec3.subtract(center, b.getCenter(), a.getCenter());
              return (_crd && sphereAABBDistance === void 0 ? (_reportPossibleCrUseOfsphereAABBDistance({
                error: Error()
              }), sphereAABBDistance) : sphereAABBDistance)(center, raidus, a.getHalfSize());
            }

            return (_crd && sphereOBBDistance === void 0 ? (_reportPossibleCrUseOfsphereOBBDistance({
              error: Error()
            }), sphereOBBDistance) : sphereOBBDistance)(b.getCenter(), raidus, a.getCenter(), a.getRotation(), a.getHalfSize());
          } else {
            Vec3.subtract(center, b.getCenter(), a.getCenter());
            var lengthSqr = center.lengthSqr();
            var radii = a.getRaidus() + raidus;
            return lengthSqr <= radii * radii;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a2ae96f472944b2219aa5de93a51363b92f3ebe7.js.map
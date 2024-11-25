System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec2, Vec3, Line, Vector2, RVOMath, MathAngle, _crd, tempPos;

  _export({
    Line: void 0,
    Vector2: void 0,
    RVOMath: void 0,
    MathAngle: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82bedpBhDZGm7EUB0uAnjUn", "Maths", undefined);

      __checkObsolete__(['Vec2', 'Vec3', 'misc', 'v2']);

      _export("Line", Line = class Line {
        constructor() {
          this.direction = void 0;
          this.point = void 0;
        }

      });

      _export("Vector2", Vector2 = class Vector2 {
        constructor(x = 0, y = 0) {
          this.x = void 0;
          this.y = void 0;
          this.x = x;
          this.y = y;
        }

        static multiply(vector1, vector2) {
          return vector1.x * vector2.x + vector1.y * vector2.y;
        }

        static multiply2(scalar, vector) {
          return new Vector2(vector.x * scalar, vector.y * scalar);
        }

        static division(vector, scalar) {
          if (scalar == 0) scalar = 1;
          return new Vector2(vector.x / scalar, vector.y / scalar);
        }

        static subtract(vector1, vector2) {
          return new Vector2(vector1.x - vector2.x, vector1.y - vector2.y);
        }

        static addition(vector1, vector2) {
          return new Vector2(vector1.x + vector2.x, vector1.y + vector2.y);
        }

        static squaredDistance(pointA, pointB) {
          let dx = pointB.x - pointA.x;
          let dy = pointB.y - pointA.y;
          return dx * dx + dy * dy;
        }

      });

      _export("RVOMath", RVOMath = class RVOMath {
        static abs(vector) {
          return this.sqrt(this.absSq(vector));
        }

        static absSq(vector) {
          return Vector2.multiply(vector, vector);
        }

        static normalize(vector) {
          return Vector2.division(vector, this.abs(vector));
        }

        static det(vector1, vector2) {
          return vector1.x * vector2.y - vector1.y * vector2.x;
        }

        static distSqPointLineSegment(vector1, vector2, vector3) {
          let r = Vector2.multiply(Vector2.subtract(vector3, vector1), Vector2.subtract(vector2, vector1)) / this.absSq(Vector2.subtract(vector2, vector1));

          if (r < 0) {
            return this.absSq(Vector2.subtract(vector3, vector1));
          }

          if (r > 1) {
            return this.absSq(Vector2.subtract(vector3, vector2));
          }

          return this.absSq(Vector2.subtract(vector3, Vector2.addition(vector1, Vector2.multiply2(r, Vector2.subtract(vector2, vector1)))));
        }

        static fabs(scalar) {
          return Math.abs(scalar);
        }

        static leftOf(a, b, c) {
          return this.det(Vector2.subtract(a, c), Vector2.subtract(b, a));
        }

        static sqr(scalar) {
          return scalar * scalar;
        }

        static sqrt(scalar) {
          return Math.sqrt(scalar);
        }

        static transfromFloat(value) {
          return Math.floor(value * 10) / 10;
        }

      });

      RVOMath.RVO_EPSILON = 0.00001;
      RVOMath.RVO_POSITIVEINFINITY = 10000000000000;
      tempPos = new Vec2();

      _export("MathAngle", MathAngle = class MathAngle {
        //角度转弧度
        static angleToRadian(angle) {
          return angle * Math.PI / 180;
        } //弧度转角度（0-360）


        static radianToAngle(radian) {
          let angle = Math.floor(radian / Math.PI * 180);
          angle = angle >= 0 ? angle : angle + 360;
          return angle;
        } //角度转方向


        static angleToDirection(angle, out) {
          return this.radianToDirection(this.angleToRadian(angle), out);
        } //弧度转方向


        static radianToDirection(radian, out) {
          let dire = out || new Vec3();
          dire.x = Math.cos(radian);
          dire.y = Math.sin(radian);
          return dire;
        } //b-a的角度


        static posToAngle(a, b) {
          let tmp = Vec2.subtract(tempPos, b, a);
          return this.directionToAngle(tmp);
        }

        static directionToAngle(direction) {
          return this.radianToAngle(Math.atan2(direction.y, direction.x)); // return Math.floor(misc.radiansToDegrees(Math.atan2(direction.y, direction.x)))
        }
        /** 位置旋转 */


        static rotatePoint(point, angle, out) {
          const radians = angle * Math.PI / 180;
          out.x = point.x * Math.cos(radians) - point.y * Math.sin(radians);
          out.y = point.x * Math.sin(radians) + point.y * Math.cos(radians);
          return out;
        }

        static isAngleBetween(target, a, b) {
          if (target == a || target == b) {
            return true;
          } // 确保所有角度都在0°到360°之间  


          target = (target + 360) % 360;
          a = (a + 360) % 360;
          b = (b + 360) % 360; // 如果b小于a，加上360直到b大于或等于a  

          if (b < a) {
            if (target < b) {
              target += 360;
            }

            b += 360;
          } // 现在b大于或等于a，检查目标角度是否在a和b之间  


          return target >= a && target <= b;
        }
        /**
         * 根据1个角度获取平均发散角度组    如：起始0，在30度分2个，（-15,15）
         * @param angle 角度
         * @param totalAngle 总角度
         * @param count 数量
         * @returns 
         */


        static getAverageEmitAnglesAngle(angle, totalAngle, count) {
          angle = (angle + 360) % 360;
          let range = totalAngle / (count - 1);
          let list = [];

          if (isNaN(range)) {
            list.push(angle);
            return list;
          }

          for (let index = 0; index < count; index++) {
            list.push((angle + index * range - totalAngle * 0.5) % 360);
          }

          return list;
        }
        /**
         * 基础角度累加
         * @param angle 角度
         * @param totalAngle 幅度
         * @param count 数量
         * @returns 
         */


        static getAverageEmitAnglesAngle1(angle, totalAngle, count) {
          angle = (angle + 360) % 360;
          let range = totalAngle / (count - 1);
          let list = [];

          if (isNaN(range)) {
            list.push(angle);
            return list;
          }

          for (let index = 0; index < count; index++) {
            list.push((index * range + angle) % 360);
          }

          return list;
        }
        /**
         * 根据1个角度获取平均发散角度组  正向剑
         * @param angle 角度
         * @param totalAngle 总角度
         * @param count 数量
         * @returns 
         */


        static getForwardDirection(angle, totalAngle, count) {
          angle = angle;
          let range = totalAngle / (count - 1);
          let list = [];

          if (isNaN(range)) {
            list.push(angle);
            return list;
          }

          for (let index = 0; index < count; index++) {
            list.push(angle + index * range - totalAngle * 0.5);
          }

          return list;
        }
        /**
        * 根据1个角度获取平均发散角度组    如：起始0，在30度分2个，（0,30）
        * @param angle 角度
        * @param totalAngle 总角度
        * @param count 数量
        * @returns 
        */


        static getAverageEmitAnglesAngle2(angle, totalAngle, count) {
          angle = (angle + 360) % 360;
          let range = totalAngle / (count - 1);
          let list = [];

          if (isNaN(range)) {
            list.push(angle);
            return list;
          }

          for (let index = 0; index < count; index++) {
            list.push((range * 0.5 + angle + index * range - totalAngle * 0.5) % 360);
          }

          return list;
        }

        rotatePoint(point, angle, out) {
          const radians = angle * Math.PI / 180;
          out.x = point.x * Math.cos(radians) - point.y * Math.sin(radians);
          out.y = point.x * Math.sin(radians) + point.y * Math.cos(radians);
          return out;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91fbce33a1f316f3a01dd4a7d2468dfa48ba75bf.js.map
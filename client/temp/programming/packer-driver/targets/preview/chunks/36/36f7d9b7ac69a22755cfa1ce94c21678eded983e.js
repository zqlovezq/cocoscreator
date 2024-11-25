System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Fixed, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c1125cWZa1ILrRyzdcisGi9", "Fixed", undefined);

      /**
       * 定点数，比decimal更轻量更快
       */
      __checkObsolete__(['Vec3']);

      _export("default", Fixed = class Fixed {
        constructor() {
          this.value = void 0;
        }

        valueOf() {
          return this.value;
        }

        toString() {
          return String(this.value);
        }
        /**
         * 链式调用
         * @example
         * const value = Fixed.value(10).add(20.123).mul(2).sqrt().value;
         */


        static value(value) {
          if (!Fixed.Chain) {
            Fixed.Chain = new Fixed();
          }

          Fixed.Chain.value = value;
          return Fixed.Chain;
        }
        /**
         * 保留n为小数，并四舍五入
         * @example
         * (2.335).toFixed(2)
         * Fixed.toFixed(2.335, 2)
         * @param {Number} num 浮点数
         * @param {Number} n 整数
         * @returns {Number}
         */


        static toFixed(num, n) {
          if (n === void 0) {
            n = 0;
          }

          if (n == 0) {
            return Math.round(num);
          } else {
            var m = Math.pow(10, n);
            return Math.round(num * (m * 10) / 10) / m;
          }
        }
        /**
         * 保留n为小数，并向下
         * @example
         * (2.335).toFixed(2)
         * Fixed.toFixed(2.335, 2)
         * @param {Number} num 浮点数
         * @param {Number} n 整数
         * @returns {Number}
         */


        static toFixedFloor(num, n) {
          if (n === void 0) {
            n = 0;
          }

          if (n == 0) {
            return Math.round(num);
          } else {
            var m = Math.pow(10, n);
            return Math.floor(num * (m * 10) / 10) / m;
          }
        }
        /**
         * 获得小数位数
         * @param {Number} num 浮点数
         * @returns {Number}
         */


        static mulToRatio(num) {
          return Math.floor(num * Fixed.Ratio);
        }
        /** 把vec3 xy转成定点数 */


        static vec3(v3) {
          v3.x = Fixed.toFixed(v3.x);
          v3.y = Fixed.toFixed(v3.y);
        }
        /**
         * 小数相加
         */


        add(num) {
          this.value = (Math.floor(this.value * Fixed.Ratio) + Math.floor(num * Fixed.Ratio)) / Fixed.Ratio;
          return this;
        }

        /**
         * 小数相减
         */
        sub(num) {
          this.value = (Math.floor(this.value * Fixed.Ratio) - Math.floor(num * Fixed.Ratio)) / Fixed.Ratio;
          return this;
        }

        /**
         * 小数相乘
         */
        mul(num) {
          this.value = Math.floor(this.value * Fixed.Ratio) * Math.floor(num * Fixed.Ratio) / Fixed.Ratio / Fixed.Ratio;
          return this;
        }

        /**
         * 小数相除
         */
        div(num) {
          this.value = Math.floor(this.value * Fixed.Ratio) / Math.floor(num * Fixed.Ratio);
          return this;
        }

        /**
         * 取余
         */
        rem(num) {
          var m = Math.pow(10, Math.max(Fixed.getDecimalPlace(this.value), Fixed.getDecimalPlace(num)));
          return Fixed.toFixed(this.value * m) % Fixed.toFixed(num * m) / m;
        }

        /**
         * 幂
         */
        pow(num) {
          this.value = Math.pow(Fixed.toFixed(this.value, Fixed.Decimals), Fixed.toFixed(this.value, num));
          return this;
        }

        /**
         * 开方
         */
        sqrt() {
          this.value = Math.sqrt(Fixed.toFixed(this.value, Fixed.Decimals));
          return this;
        }

        /**
         * 三角函数
         */
        sin(x) {
          this.value = Fixed.toFixed(Math.sin(x), Fixed.Decimals);
          return this;
        }

        cos(x) {
          this.value = Fixed.toFixed(Math.cos(x), Fixed.Decimals);
          return this;
        }

        tan(x) {
          this.value = Fixed.toFixed(Math.tan(x), Fixed.Decimals);
          return this;
        }

        asin(x) {
          this.value = Fixed.toFixed(Math.asin(x), Fixed.Decimals);
          return this;
        }

        acos(x) {
          this.value = Fixed.toFixed(Math.acos(x), Fixed.Decimals);
          return this;
        }

        atan(x) {
          this.value = Fixed.toFixed(Math.atan(x), Fixed.Decimals);
          return this;
        }

      });

      // 角度弧度常量
      Fixed.DEG = 57.29577951308232;
      Fixed.RAD = 0.017453292519943295;
      // 系统常量
      Fixed.PI = 3.141592653589793;
      Fixed.E = 2.718281828459045;
      Fixed.LN2 = 0.6931471805599453;
      Fixed.LN10 = 2.302585092994046;
      Fixed.LOG2E = 1.4426950408889634;
      Fixed.LOG10E = 0.4342944819032518;
      Fixed.SQRT1_2 = 0.7071067811865476;
      Fixed.SQRT2 = 1.4142135623730951;
      Fixed.Chain = null;
      // 缩放的比例
      Fixed.Ratio = 1000;
      // 保留小数的位数
      Fixed.Decimals = 3;

      Fixed.getDecimalPlace = function (num) {
        if (num && num !== Math.floor(num)) {
          for (var n = 1, m = 10, temp = 0; n < 20; n += 1, m *= 10) {
            temp = num * m;
            if (temp == Math.floor(temp)) return n;
          }

          return 20;
        } else {
          return 0;
        }
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=36f7d9b7ac69a22755cfa1ce94c21678eded983e.js.map
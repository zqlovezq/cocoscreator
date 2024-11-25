import { Vec3 } from "cc";

/**
 * 定点数，比decimal更轻量更快
 */
export default class Fixed {
    // 角度弧度常量
    public static DEG = 57.29577951308232;
    public static RAD = 0.017453292519943295;

    // 系统常量
    public static PI = 3.141592653589793;
    public static E = 2.718281828459045;
    public static LN2 = 0.6931471805599453;
    public static LN10 = 2.302585092994046;
    public static LOG2E = 1.4426950408889634;
    public static LOG10E = 0.4342944819032518;
    public static SQRT1_2 = 0.7071067811865476;
    public static SQRT2 = 1.4142135623730951;

    public static Chain: Fixed = null;
    // 缩放的比例
    public static Ratio = 1000;
    // 保留小数的位数
    public static Decimals = 3;

    public value: number;

    public valueOf() {
        return this.value;
    }

    public toString() {
        return String(this.value);
    }

    /**
     * 链式调用
     * @example
     * const value = Fixed.value(10).add(20.123).mul(2).sqrt().value;
     */
    public static value(value): Fixed {
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
    public static toFixed(num: number, n = 0) {
        if (n == 0) {
            return Math.round(num);
        } else {
            const m = Math.pow(10, n);
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
    public static toFixedFloor(num: number, n = 0) {
        if (n == 0) {
            return Math.round(num);
        } else {
            const m = Math.pow(10, n);
            return Math.floor(num * (m * 10) / 10) / m;
        }
    }

    /**
     * 获得小数位数
     * @param {Number} num 浮点数
     * @returns {Number}
     */
    public static getDecimalPlace = function (num) {
        if (num && num !== Math.floor(num)) {
            for (let n = 1, m = 10, temp = 0; n < 20; n += 1, m *= 10) {
                temp = num * m;
                if (temp == Math.floor(temp)) return n;
            }
            return 20;
        } else {
            return 0;
        }
    }


    public static mulToRatio(num: number) {
        return Math.floor(num * Fixed.Ratio)
    }


    /** 把vec3 xy转成定点数 */
    public static vec3(v3: Vec3) {
        v3.x = Fixed.toFixed(v3.x)
        v3.y = Fixed.toFixed(v3.y)
    }

    /**
     * 小数相加
     */
    public add(num: number): Fixed {
        this.value = (Math.floor(this.value * Fixed.Ratio) + Math.floor(num * Fixed.Ratio)) / Fixed.Ratio
        return this;
    };

    /**
     * 小数相减
     */
    public sub(num: number): Fixed {
        this.value = (Math.floor(this.value * Fixed.Ratio) - Math.floor(num * Fixed.Ratio)) / Fixed.Ratio
        return this;
    };

    /**
     * 小数相乘
     */
    public mul(num: number): Fixed {
        this.value = (Math.floor(this.value * Fixed.Ratio) * Math.floor(num * Fixed.Ratio)) / Fixed.Ratio / Fixed.Ratio;
        return this;
    };


    /**
     * 小数相除
     */
    public div(num: number): Fixed {
        this.value = (Math.floor(this.value * Fixed.Ratio) / Math.floor(num * Fixed.Ratio));
        return this;
    };

    /**
     * 取余
     */
    public rem(num: number): number {
        const m = Math.pow(10, Math.max(Fixed.getDecimalPlace(this.value), Fixed.getDecimalPlace(num)));
        return Fixed.toFixed(this.value * m) % Fixed.toFixed(num * m) / m;
    };

    /**
     * 幂
     */
    public pow(num: number): Fixed {
        this.value = Math.pow(Fixed.toFixed(this.value, Fixed.Decimals), Fixed.toFixed(this.value, num));
        return this;
    };

    /**
     * 开方
     */
    public sqrt(): Fixed {
        this.value = Math.sqrt(Fixed.toFixed(this.value, Fixed.Decimals));
        return this;
    };

    /**
     * 三角函数
     */
    public sin(x: number): Fixed {
        this.value = Fixed.toFixed(Math.sin(x), Fixed.Decimals);
        return this;
    };

    public cos(x: number): Fixed {
        this.value = Fixed.toFixed(Math.cos(x), Fixed.Decimals);
        return this;
    };

    public tan(x: number): Fixed {
        this.value = Fixed.toFixed(Math.tan(x), Fixed.Decimals);
        return this;
    };

    public asin(x: number): Fixed {
        this.value = Fixed.toFixed(Math.asin(x), Fixed.Decimals);
        return this;
    };

    public acos(x: number): Fixed {
        this.value = Fixed.toFixed(Math.acos(x), Fixed.Decimals);
        return this;
    };

    public atan(x: number): Fixed {
        this.value = Fixed.toFixed(Math.atan(x), Fixed.Decimals);
        return this;
    };
}
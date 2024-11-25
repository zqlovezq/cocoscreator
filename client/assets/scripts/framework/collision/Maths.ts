import { Vec2, Vec3, misc, v2 } from "cc";

export class Line {
    public direction: Vector2;
    public point: Vector2;
}

export class Vector2 {
    public x: number;
    public y: number;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    public static multiply(vector1: Vector2, vector2: Vector2) {
        return vector1.x * vector2.x + vector1.y * vector2.y;
    }


    public static multiply2(scalar: number, vector: Vector2) {
        return new Vector2(vector.x * scalar, vector.y * scalar);
    }


    public static division(vector: Vector2, scalar: number) {
        if (scalar == 0) scalar = 1;
        return new Vector2(vector.x / scalar, vector.y / scalar);
    }


    public static subtract(vector1: Vector2, vector2: Vector2) {
        return new Vector2(vector1.x - vector2.x, vector1.y - vector2.y)
    }


    public static addition(vector1: Vector2, vector2: Vector2) {
        return new Vector2(vector1.x + vector2.x, vector1.y + vector2.y);
    }
    public static squaredDistance(pointA: Vec3, pointB: Vec3) {
        let dx = pointB.x - pointA.x;
        let dy = pointB.y - pointA.y;
        return dx * dx + dy * dy;
    }
}


export class RVOMath {
    public static readonly RVO_EPSILON = 0.00001;
    public static readonly RVO_POSITIVEINFINITY = 10000000000000;

    public static abs(vector: Vector2) {
        return this.sqrt(this.absSq(vector));
    }

    public static absSq(vector: Vector2) {
        return Vector2.multiply(vector, vector);
    }

    public static normalize(vector: Vector2) {
        return Vector2.division(vector, this.abs(vector));
    }

    public static det(vector1: Vector2, vector2: Vector2) {
        return vector1.x * vector2.y - vector1.y * vector2.x;
    }

    public static distSqPointLineSegment(vector1: Vector2, vector2: Vector2, vector3: Vector2) {
        let r = Vector2.multiply(Vector2.subtract(vector3, vector1), Vector2.subtract(vector2, vector1)) / this.absSq(Vector2.subtract(vector2, vector1));
        if (r < 0) {
            return this.absSq(Vector2.subtract(vector3, vector1));
        }
        if (r > 1) {
            return this.absSq(Vector2.subtract(vector3, vector2));
        }
        return this.absSq(Vector2.subtract(vector3, Vector2.addition(vector1, Vector2.multiply2(r, Vector2.subtract(vector2, vector1)))));
    }

    public static fabs(scalar: number) {
        return Math.abs(scalar);
    }

    public static leftOf(a: Vector2, b: Vector2, c: Vector2) {
        return this.det(Vector2.subtract(a, c), Vector2.subtract(b, a));
    }

    public static sqr(scalar: number) {
        return scalar * scalar;
    }

    public static sqrt(scalar: number) {
        return Math.sqrt(scalar);
    }

    public static transfromFloat(value: number) {
        return Math.floor(value * 10) / 10;
    }
}

const tempPos = new Vec2();
export class MathAngle {
    //角度转弧度
    static angleToRadian(angle: number) {
        return angle * Math.PI / 180
    }

    //弧度转角度（0-360）
    static radianToAngle(radian: number) {
        let angle = Math.floor(radian / Math.PI * 180)
        angle = (angle >= 0 ? angle : angle + 360)
        return angle
    }

    //角度转方向
    static angleToDirection(angle: number, out?: Vec3) {
        return this.radianToDirection(this.angleToRadian(angle), out)
    }

    //弧度转方向
    static radianToDirection(radian: number, out?: Vec3) {
        let dire = out || new Vec3()
        dire.x = Math.cos(radian);
        dire.y = Math.sin(radian);
        return dire
    }


    //b-a的角度
    static posToAngle(a: Vec2 | Vec3, b: Vec2 | Vec3) {

        let tmp = Vec2.subtract(tempPos, b, a)
        return this.directionToAngle(tmp)
    }

    static directionToAngle(direction: Vec3 | Vec2) {
        return this.radianToAngle(Math.atan2(direction.y, direction.x))
        // return Math.floor(misc.radiansToDegrees(Math.atan2(direction.y, direction.x)))
    }

    /** 位置旋转 */
    static rotatePoint(point: Vec3, angle: number, out: Vec3): { x: number, y: number } {
        const radians = angle * Math.PI / 180;
        out.x = point.x * Math.cos(radians) - point.y * Math.sin(radians);
        out.y = point.x * Math.sin(radians) + point.y * Math.cos(radians);
        return out
    }


    static isAngleBetween(target: number, a: number, b: number): boolean {
        if (target == a || target == b) {
            return true
        }
        // 确保所有角度都在0°到360°之间  
        target = (target + 360) % 360;
        a = (a + 360) % 360;
        b = (b + 360) % 360;
        // 如果b小于a，加上360直到b大于或等于a  
        if (b < a) {
            if (target < b) {
                target += 360;
            }
            b += 360;
        }
        // 现在b大于或等于a，检查目标角度是否在a和b之间  
        return target >= a && target <= b;
    }

    /**
     * 根据1个角度获取平均发散角度组    如：起始0，在30度分2个，（-15,15）
     * @param angle 角度
     * @param totalAngle 总角度
     * @param count 数量
     * @returns 
     */
    static getAverageEmitAnglesAngle(angle: number, totalAngle: number, count: number) {
        angle = (angle + 360) % 360
        let range = totalAngle / (count - 1)
        let list = []
        if (isNaN(range)) {
            list.push(angle)
            return list
        }
        for (let index = 0; index < count; index++) {
            list.push((angle + (index) * range - totalAngle * 0.5) % 360)
        }
        return list
    }


    /**
     * 基础角度累加
     * @param angle 角度
     * @param totalAngle 幅度
     * @param count 数量
     * @returns 
     */
    static getAverageEmitAnglesAngle1(angle: number, totalAngle: number, count: number): number[] {
        angle = (angle + 360) % 360
        let range = totalAngle / (count - 1)

        let list = []
        if (isNaN(range)) {
            list.push(angle)
            return list
        }
        for (let index = 0; index < count; index++) {
            list.push(((index) * range + angle) % 360)
        }

        return list
    }

    /**
     * 根据1个角度获取平均发散角度组  正向剑
     * @param angle 角度
     * @param totalAngle 总角度
     * @param count 数量
     * @returns 
     */
    static getForwardDirection(angle: number, totalAngle: number, count: number) {
        angle = angle
        let range = totalAngle / (count - 1)
        let list = []
        if (isNaN(range)) {
            list.push(angle)
            return list
        }
        for (let index = 0; index < count; index++) {
            list.push((angle + (index) * range - totalAngle * 0.5))
        }
        return list
    }


    /**
    * 根据1个角度获取平均发散角度组    如：起始0，在30度分2个，（0,30）
    * @param angle 角度
    * @param totalAngle 总角度
    * @param count 数量
    * @returns 
    */
    static getAverageEmitAnglesAngle2(angle: number, totalAngle: number, count: number) {
        angle = (angle + 360) % 360
        let range = totalAngle / (count - 1)
        let list = []
        if (isNaN(range)) {
            list.push(angle)
            return list
        }
        for (let index = 0; index < count; index++) {
            list.push((range * 0.5 + angle + (index) * range - totalAngle * 0.5) % 360)
        }
        return list
    }

    rotatePoint(point: Vec3, angle: number, out: Vec3): { x: number, y: number } {
        const radians = angle * Math.PI / 180;
        out.x = point.x * Math.cos(radians) - point.y * Math.sin(radians);
        out.y = point.x * Math.sin(radians) + point.y * Math.cos(radians);
        return out
    }
}
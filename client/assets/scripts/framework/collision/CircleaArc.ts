import { v2 } from "cc";
import { MathAngle } from "./Maths";
import { CollisionBody } from "./CollisionBody";

export class CircleaArc {

    // static check() {
    //     let circle = { x: 101, y: 101, r: 100 }
    //     let arc = { x: 0, y: 0, r: 100, heading: 50, angle: 45 }

    //     let dir = MathAngle.angleToDirection(arc.heading)
    //     dir.multiplyScalar(arc.r);
    //     console.log(dir)

    //     let y = new CircleaArc()
    //     let a = y.IsCircleIntersectFan(circle.x, circle.y, circle.r,
    //         arc.x, arc.y, dir.x, dir.y, MathAngle.angleToRadian(arc.angle))

    //     console.log("是否相交", a)
    // }

    static check(a: CollisionBody, b: CollisionBody) {
        let dir = MathAngle.angleToDirection(b.getArcAngle().x)
        dir.multiplyScalar(b.getRaidus());


        let y = new CircleaArc()
        let bool = y.IsCircleIntersectFan(a.getCenter().x, a.getCenter().y, a.getRaidus(),
            b.getCenter().x, b.getCenter().y, dir.x, dir.y, MathAngle.angleToRadian(b.getArcAngle().y))


        // console.log("是否相交", bool)
        return bool
    }


    IsCircleIntersectFan(x: number, y: number, r: number, x1: number, y1: number, x2: number, y2: number, theta: number) {
        // 计算扇形正前方向量 v = p1p2
        let vx = x2 - x1;
        let vy = y2 - y1;

        // 计算扇形半径 R = v.length()
        let R = Math.sqrt(vx * vx + vy * vy);

        // 圆不与扇形圆相交，则圆与扇形必不相交
        if ((x - x1) * (x - x1) + (y - y1) * (y - y1) > (R + r) * (R + r))
            return false;
        // 根据夹角 theta/2 计算出旋转矩阵，并将向量v乘该旋转矩阵得出扇形两边的端点p3,p4
        let h = theta * 0.5;
        let c = Math.cos(h);
        let s = Math.sin(h);
        let x3 = x1 + (vx * c - vy * s);
        let y3 = y1 + (vx * s + vy * c);
        let x4 = x1 + (vx * c + vy * s);
        let y4 = y1 + (-vx * s + vy * c);

        // console.log("扩散", MathAngle.radianToAngle(theta), "中心", MathAngle.posToAngle(v2(x1, y1), v2(x2, y2)), "左", MathAngle.posToAngle(v2(x1, y1), v2(x3, y3)), "右", MathAngle.posToAngle(v2(x1, y1), v2(x4, y4)))
        // console.log(x, y, x1, y1, x2, y2, x3, y3, x4, y4)
        // 如果圆心在扇形两边夹角内，则必相交
        let d1 = this.EvaluatePointToLine(x, y, x1, y1, x3, y3);
        let d2 = this.EvaluatePointToLine(x, y, x4, y4, x1, y1);
        if (d1 >= 0 && d2 >= 0)
            return true;

        // 如果圆与任一边相交，则必相交
        if (this.IsCircleIntersectLineSeg(x, y, r, x1, y1, x3, y3))
            return true;
        if (this.IsCircleIntersectLineSeg(x, y, r, x1, y1, x4, y4))
            return true;

        return false;
    }
    // 判断点P(x, y)与有向直线P1P2的关系. 小于0表示点在直线左侧，等于0表示点在直线上，大于0表示点在直线右侧
    EvaluatePointToLine(x: number, y: number, x1: number, y1: number, x2: number, y2: number) {
        let a = y2 - y1;
        let b = x1 - x2;
        let c = x2 * y1 - x1 * y2;

        return a * x + b * y + c;
    }

    // 圆与线段碰撞检测
    // 圆心p(x, y), 半径r, 线段两端点p1(x1, y1)和p2(x2, y2)
    IsCircleIntersectLineSeg(x: number, y: number, r: number, x1: number, y1: number, x2: number, y2: number) {
        let vx1 = x - x1;
        let vy1 = y - y1;
        let vx2 = x2 - x1;
        let vy2 = y2 - y1;


        // len = v2.length()
        let len = Math.sqrt(vx2 * vx2 + vy2 * vy2);

        // v2.normalize()
        vx2 /= len;
        vy2 /= len;

        // u = v1.dot(v2)
        // u is the vector projection length of vector v1 onto vector v2.
        let u = vx1 * vx2 + vy1 * vy2;

        // determine the nearest point on the lineseg
        let x0 = 0;
        let y0 = 0;
        if (u <= 0) {
            // p is on the left of p1, so p1 is the nearest point on lineseg
            x0 = x1;
            y0 = y1;
        }
        else if (u >= len) {
            // p is on the right of p2, so p2 is the nearest point on lineseg
            x0 = x2;
            y0 = y2;
        }
        else {
            // p0 = p1 + v2 * u
            // note that v2 is already normalized.
            x0 = x1 + vx2 * u;
            y0 = y1 + vy2 * u;
        }

        return (x - x0) * (x - x0) + (y - y0) * (y - y0) <= r * r;
    }

}
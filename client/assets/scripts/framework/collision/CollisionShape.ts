import { Mat3, Vec2, Vec3, v2, v3 } from "cc";
import Intersection2D, { obbIntersect, sphereAABBDistance, sphereOBBDistance } from "./AILib";
import { CollisionBody } from "./CollisionBody";
import { MathAngle } from "./Maths";
import { CircleaArc } from "./CircleaArc";


export enum ShapeType {
    /** 矩形 */
    Box = 1,
    /** 圆形 */
    Sphere = 2,
    /** 弧形、扇形 */
    Arc = 4
};


export abstract class CollisionShape {

    radius = 0;
    height = 0;
    type = ShapeType.Box;
    size = { x: 0, y: 0, z: 0 };
    scale = { x: 1, y: 1, z: 1 };
    center = { x: 0, y: 0, z: 0 };
    aabb: Array<number> = [0, 0, 0, 0, 0, 0];

    constructor(center: Vec3, type: ShapeType) {
        this.type = type;
        // this.isDirty = true;
        this.center.x = center.x;
        this.center.y = center.y;
        this.center.z = center.z;
    }


    updateAABB(scale: Vec3, world: Mat3, isIdentity: boolean = true) {

        const size = this.size;
        const center = this.center;
        const sx = scale.x, sy = scale.y, sz = scale.z;
        const cx = center.x, cy = center.y, cz = center.z;
        let x = size.x * 0.5, y = size.y * 0.5, z = size.z * 0.5;

        const aabb = this.aabb;
        if (!isIdentity) {

            const uX = world.m00 * sx, uY = world.m01 * sx, uZ = world.m02 * sx;
            const vX = world.m03 * sy, vY = world.m04 * sy, vZ = world.m05 * sy;
            const wX = world.m06 * sz, wY = world.m07 * sz, wZ = world.m08 * sz;

            // 计算新的中心点
            const cX = uX * cx + vX * cy + wX * cz;
            const cY = uY * cx + vY * cy + wY * cz;
            const cZ = uZ * cx + vZ * cy + wZ * cz;

            // 计算新的包围盒宽度、高度和深度
            const absU = Math.abs(uX) * x + Math.abs(vX) * y + Math.abs(wX) * z;
            const absV = Math.abs(uY) * x + Math.abs(vY) * y + Math.abs(wY) * z;
            const absW = Math.abs(uZ) * x + Math.abs(vZ) * y + Math.abs(wZ) * z;

            // 计算新的最小和最大顶点
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
}

export class CollisionBox extends CollisionShape {

    constructor(center: Vec3, size: Vec3) {
        super(center, ShapeType.Box);

        this.size.x = size.x;
        this.size.y = size.y;
        this.size.z = size.z;
    }
}

export class CollisionSphere extends CollisionShape {
    constructor(center: Vec3, radius: number) {
        super(center, ShapeType.Sphere);
        this.radius = radius;

        this.size.x = radius * 2;
        this.size.y = radius * 2;
        this.size.z = radius * 2;
    }
}

export class CollisionArc extends CollisionShape {
    angle: number //开口角度
    heading: number //指向
    constructor(center: Vec3, radius: number, angle: number, heading: number) {
        super(center, ShapeType.Arc);
        this.radius = radius;

        this.angle = angle
        this.heading = heading

        this.size.x = radius * 2;
        this.size.y = radius * 2;
        this.size.z = radius * 2;
    }

    getArcAngle() {
        return this.angle
    }
}



const center = new Vec3();
const center1 = new Vec3();
const center2 = new Vec3();

export const ShapeSupport: Array<(a: CollisionBody, b: CollisionBody) => boolean> = [];

ShapeSupport[ShapeType.Box | ShapeType.Box] = function (a: CollisionBody, b: CollisionBody) {

    //a,b 没有旋转,已进行AABB处理 , 直接返回 true
    if (a.isIdentity && b.isIdentity) return true;

    return obbIntersect(a.getCenter(), a.getHalfSize(), a.getRotMat3(), b.getCenter(), b.getHalfSize(), b.getRotMat3());
}

ShapeSupport[ShapeType.Box | ShapeType.Sphere] = function (a: CollisionBody, b: CollisionBody) {

    //a没有旋转当AABB处理 
    if (a.isIdentity) {
        // 转换到 aabb 坐标系下
        Vec3.subtract(center, b.getCenter(), a.getCenter());
        return sphereAABBDistance(center, b.getRaidus(), a.getHalfSize());
    }

    return sphereOBBDistance(b.getCenter(), b.getRaidus(), a.getCenter(), a.getRotation(), a.getHalfSize());
}

ShapeSupport[ShapeType.Sphere | ShapeType.Sphere] = function (a: CollisionBody, b: CollisionBody) {

    Vec3.subtract(center, b.getCenter(), a.getCenter());
    let lengthSqr = center.lengthSqr();
    let radii = a.getRaidus() + b.getRaidus();

    return lengthSqr <= radii * radii;
}

ShapeSupport[ShapeType.Box | ShapeType.Arc] = function (a: CollisionBody, b: CollisionBody) {

    //a没有旋转当AABB处理 
    if (a.isIdentity) {
        // 转换到 aabb 坐标系下
        Vec3.subtract(center, b.getCenter(), a.getCenter());
        if (sphereAABBDistance(center, b.getRaidus(), a.getHalfSize())) {//和圆重叠
            return centerArc(center, b.getArcAngle())
        }
        return false
    }

    return sphereOBBDistance(b.getCenter(), b.getRaidus(), a.getCenter(), a.getRotation(), a.getHalfSize());
}


ShapeSupport[ShapeType.Sphere | ShapeType.Arc] = function (a: CollisionBody, b: CollisionBody) {
    if (ShapeSupport[ShapeType.Sphere | ShapeType.Sphere](a, b)) { //先算圆是否重叠
        return shaereArc(a, b)
    }
    return false
}


ShapeSupport[ShapeType.Arc | ShapeType.Arc] = function (a: CollisionBody, b: CollisionBody) {
    //应该不需要实现
    return false
}
function shaereArc(a: CollisionBody, b: CollisionBody) {
    Vec3.subtract(center, b.getCenter(), a.getCenter());
    if (centerArc(center, b.getArcAngle())) {
        return true
    }
    return isSegmentCircleIntersect(a, b, b.getArcAngle().x) || isSegmentCircleIntersect(a, b, b.getArcAngle().y)
}

function isSegmentCircleIntersect(a: CollisionBody, b: CollisionBody, angle: number): boolean {
    let p1 = b.getCenter()

    let p2 = MathAngle.angleToDirection(angle)
    p2.multiplyScalar(b.getRaidus())
    p2.add(p1)

    return Intersection2D.polygonCircle([p1, p2], a.getCenter(), a.getRaidus());
}

function centerArc(center: Vec3, arcAngle: Vec3) {
    let targetAngle = MathAngle.directionToAngle(center) + 180 //弧形到圆角度
    return MathAngle.isAngleBetween(targetAngle, arcAngle.x, arcAngle.y)
}

export class ShapeTest {
    //a为矩形 or 圆形  ,b必定为圆形
    static test(a: CollisionBody, b: CollisionBody, raidus: number) {
        if (a.shape.type == ShapeType.Box) {
            //a没有旋转当AABB处理 
            if (a.isIdentity) {
                // 转换到 aabb 坐标系下
                Vec3.subtract(center, b.getCenter(), a.getCenter());
                return sphereAABBDistance(center, raidus, a.getHalfSize());
            }
            return sphereOBBDistance(b.getCenter(), raidus, a.getCenter(), a.getRotation(), a.getHalfSize());
        } else {
            Vec3.subtract(center, b.getCenter(), a.getCenter());
            let lengthSqr = center.lengthSqr();
            let radii = a.getRaidus() + raidus

            return lengthSqr <= radii * radii;
        }
    }
}
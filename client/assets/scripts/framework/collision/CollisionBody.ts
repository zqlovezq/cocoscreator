import { Mat3, Quat, Vec3 } from "cc";
import { Dirty, CollisionObject } from "./CollisionObject";
import { Line } from "./Maths";
import { CollisionArc, CollisionShape } from "./CollisionShape";


export class CollisionBody {

    id: number = 0;
    mask: number = 0;
    group: number = 0;
    shape: CollisionShape = null;
    object: CollisionObject = null;
    priority: number = 0;

    //脏区更新标记
    isDirty: number = 1 | 2 | 4;

    //缓存
    lower: number = 0;
    upper: number = 0;
    aabb: Array<number> = [0, 0, 0, 0, 0, 0];

    //状态
    isRemove: boolean = false;
    isRetrieve: boolean = true;
    isIdentity: boolean = true;
    inCollider: boolean = false;
    isIgnoreTrigger: boolean = false

    //缓存
    raidus: number = 0;
    center: Vec3 = new Vec3();
    rotMat3: Mat3 = new Mat3();
    halfSize: Vec3 = new Vec3();
    scale: Vec3 = new Vec3(1, 1, 1);
    arcPoint: Vec3 = new Vec3();


    //Agent
    isAgent: boolean = false;  //Agent 开关
    maxNeighbors: number = 0;
    neighborDist: number = 0; //物体半径
    maxVelocity: number = 0;  //最大速度
    newVelocity: Vec3 = new Vec3();
    prefVelocity: Vec3 = new Vec3();
    orcaLines: Array<Line> = [];

    constructor(obj: CollisionObject) {
        this.object = obj;
    }


    updateBound(isDirty: Dirty = Dirty.NON) {

        let object = this.object;
        isDirty |= object.hasChangeDirty();

        if (this.isAgent) {

            let v = object.velocity;
            this.newVelocity.x = v.x;
            this.newVelocity.y = v.y;

            // let pv = this.prefVelocity;
            // pv.x+= (v.x - pv.x)*0.75;
            // pv.y+= (v.y - pv.y)*0.75;
        }

        if (isDirty > 0) {

            let aabbChange = false;
            const shape = this.shape;

            if (isDirty & Dirty.S) {
                aabbChange = true;
                let s = this.getScale();
                this.scale.x = (s.x >= 0 ? s.x : -s.x);
                this.scale.y = (s.y >= 0 ? s.y : -s.y);
                this.scale.z = (s.z >= 0 ? s.z : -s.z);
            }

            if (isDirty & Dirty.R) {
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

            const AABB = this.aabb;// world aabb
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
        this.isIgnoreTrigger = false
        this.orcaLines.length = 0;
    }


    //body 坐标统一使用世界数据进行计算
    getRotMat3() { return this.rotMat3; } //world rotate mat3
    getScale() { return this.object.node.worldScale; } // world scale 
    getPosition() { return this.object.node.worldPosition; } //wold position
    getRotation() { return this.object.node.worldRotation; } //world rotation




    getCenter() {

        if (this.isDirty & 1) {
            this.isDirty &= (~1);

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
            this.isDirty &= (~2);

            const scale = this.scale;
            const raidus = this.shape.radius;
            this.raidus = Math.max(scale.x, scale.y, scale.z) * raidus;

        }

        return this.raidus; //world raidus
    }

    getHalfSize() {

        if (this.isDirty & 4) {
            this.isDirty &= (~4);

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
        let newShape: CollisionArc = this.shape as CollisionArc;
        if (this.getScale().x >= 0) {
            this.arcPoint.x = this.object.node.angle
            this.arcPoint.y = this.object.node.angle + newShape.angle
        } else {//弧形翻转
            this.arcPoint.x = 180 - (this.object.node.angle + newShape.angle)
            this.arcPoint.y = 180 - this.object.node.angle
        }
        return this.arcPoint
    }

}

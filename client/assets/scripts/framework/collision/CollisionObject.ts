import { CCInteger, Color, Component, Graphics, Layers, Node, PhysicsSystem, Quat, Rect, Size, Sprite, TransformBit, Vec2, Vec3, _decorator, ccenum, v3 } from 'cc';
import { CollisionBody } from './CollisionBody';
import { ColliderMgr } from './ColliderMgr';
import { UITransform } from 'cc';
import { ShapeType, CollisionShape, CollisionBox, CollisionSphere, CollisionArc } from './CollisionShape';
import { Func } from '../../logic/utils/Func';
import { IFrame } from '../../logic/fight/base/frame/IFrame';
import { MathAngle } from './Maths';
import { CocosUtil } from '../../logic/utils/CocosUtil';
import Fixed from './Fixed';
import { IReset } from '../base/IAbs';
import { CollisionGroup } from '../../logic/fight/define/FightDefine';
const { ccclass, property } = _decorator;

export enum Trigger {
    default = 0,
    /** 碰撞 */
    enter = 1,
    /** 持续 */
    stay = 2,
    /** 离开 */
    exit = 3,
};


export enum Dirty {
    R = 1,
    T = 2,
    S = 4,
    RTS = 7,
    RS = R | S,
    NON = 0,
};

ccenum(ShapeType)
@ccclass('CollisionObject')
export class CollisionObject extends Component implements IFrame {

    @property({ group: "CollisionBody", tooltip: "碰撞开关" })
    trigger: boolean = false; //碰撞开关

    @property({ type: PhysicsSystem.PhysicsGroup, group: "CollisionBody" })
    group = PhysicsSystem.PhysicsGroup.DEFAULT; //碰撞分组

    @property({ type: ShapeType, group: "Shape" })
    type: ShapeType = ShapeType.Box; //相交形状类型

    @property({ group: "Shape" })
    center: Vec3 = new Vec3();  //偏移位置，是shape相对node节点的中心偏移

    @property({ group: "Shape", visible() { return this.type == ShapeType.Box; } })
    size: Vec3 = new Vec3(); //方块的长宽高

    @property({ group: "Shape", visible() { return this.type != ShapeType.Box; } })
    radius: number = 0; //半径，sphere 或者 capsule

    @property({ group: "Shape", visible() { return this.type == ShapeType.Arc; } })
    arcAngle: number = 0; //扇形开口角度
    @property({ group: "Shape", visible() { return this.type == ShapeType.Arc; } })
    arcHeading: number = 0; //扇形指向

    @property({ group: "Agent" })
    agent: boolean = false; //Agent开关

    @property({ type: CCInteger, group: "Agent", visible() { return this.agent; } })
    priority: number = 0; //Agent避让优先级,越大优先级越高

    @property({ group: "Agent", visible() { return this.agent; } })
    maxRadius: number = 0; //Agent碰撞半径,小于等于物体体积

    @property({ group: "Agent", visible() { return this.agent; } })
    maxVelocity: number = 0; //Agent最大速度,小于等于物体速度

    ignoreTrigger: boolean = false//忽略碰撞

    //常用变量
    speed: number = 0; //最大速度
    angle: number = 0; //旋转角度
    @property(Vec3)
    velocity: Vec3 = new Vec3(); //当前速度
    voAngle: number = 0 //vo角度
    voRatio: number = 1 //vo比例

    isDirty: Dirty = Dirty.RTS;
    shape: CollisionShape = null;
    body: CollisionBody = null;
    isRecycle: boolean = false
    bobyGraphics: Graphics

    onLoad() {

    }

    reset() {
        this.setIgnoreTrigger(false)
        this.velocity.x = 0
        this.velocity.y = 0
        this.voAngle = 0
        this.voRatio = 1
        this.body = null
    }

    setIgnoreTrigger(value: boolean) {
        this.ignoreTrigger = value
        if (this.body) {
            this.body.isIgnoreTrigger = this.ignoreTrigger
        }
    }

    isDestroy() {
        return this.isRecycle || (this.body && this.body.isRemove)
    }

    initBoby() {
        //创建碰撞形状
        switch (this.type) {
            case ShapeType.Box:
                this.shape = new CollisionBox(this.center, this.size);
                break;
            case ShapeType.Sphere:
                this.shape = new CollisionSphere(this.center, this.radius);
                break;
            case ShapeType.Arc:
                this.shape = new CollisionArc(this.center, this.radius, this.arcAngle, this.arcHeading);
                break
        }
        this.initGraphics()

        //创建碰撞body容器
        this.body = ColliderMgr.inst.create(this);


        this.body.shape = this.shape; //绑定碰撞形状
        this.body.group = this.group; //碰撞分组掩码
        this.body.isAgent = this.agent; // agent 检测开关
        this.body.priority = this.priority; // agent 避让优先级
        this.body.neighborDist = this.maxRadius; // agent 体积半径
        this.body.maxVelocity = this.maxVelocity; // agent 最大速度
        this.body.mask = PhysicsSystem.instance.collisionMatrix[this.group];

        //把body加入碰撞管理
        ColliderMgr.inst.insert(this.body);

        this.isDirty = Dirty.RTS;   //首次更新标记
    }


    /** 更新碰撞分组 */
    updateGroup(_group: CollisionGroup) {
        this.group = PhysicsSystem.PhysicsGroup[_group]
        if (this.body) {
            this.body.group = this.group
            this.body.mask = PhysicsSystem.instance.collisionMatrix[this.group];
        }
    }

    //同步位置到body
    setPosition(position: Vec3) {
        this.node.position = position;
        this.isDirty |= Dirty.T;
    }

    updatePostion() {
        this.isDirty |= Dirty.RTS;
    }

    //同步旋转到body
    setRotation(rotation: Quat) {
        this.node.rotation = rotation;
        this.isDirty |= Dirty.R;
    }

    setAngle(angle: number) {
        this.node.angle = angle
        this.isDirty |= Dirty.R;
    }

    addAngle(angle: number) {
        this.setAngle(this.node.angle + angle)
    }



    updateDirty() {
        this.isDirty |= Dirty.R;
    }

    //同步缩放到body
    setScale(scale: Vec3) {
        this.node.scale = scale;
        this.isDirty |= Dirty.S;
    }

    //设置瞄点，2D专用
    setAnchor(anchor: Vec2) {

        let c0 = this.center;
        let c1 = this.shape.center;
        let uts = this.node.getComponent(UITransform);
        if (uts) {
            uts.anchorPoint = anchor;

            let s = uts.contentSize;
            c1.x = (0.5 - anchor.x) * s.width + c0.x;
            c1.y = (0.5 - anchor.y) * s.height + c0.y;

            this.isDirty |= Dirty.T;
        }
    }

    getRotation() { return this.node.rotation; }
    getPosition() { return this.node.position; }
    getScale() { return this.node.scale; }

    //删除当前节点
    remove(retrieve: boolean = true) {

        //移除body, retrieve: 是否回收body ？
        ColliderMgr.inst.remove(this.body, retrieve);
        return this.node;
    }

    //重新添加到碰撞管理器
    insert() {
        //插入body, 强制更新body数据
        ColliderMgr.inst.insert(this.body, true);
    }

    setColor(color: Color) { }
    init() { }

    //trigger 回调 enter,stay exit
    //CollisionBody /Trigger
    onTrigger(b: any, trigger: any) {

        switch (trigger) {
            case Trigger.enter:
                //onTriggerEnter();
                break;
            case Trigger.stay:
                //onTriggerStay();
                break;
            case Trigger.exit:
                //onTriggerExit();
                break;
        }
    }

    hasChangeDirty() {
        let isDirty = this.isDirty
        let flag = this.node.hasChangedFlags;
        if (flag) {
            if (flag & TransformBit.POSITION) isDirty |= Dirty.T;
            if (flag & TransformBit.ROTATION) isDirty |= Dirty.R;
            if (flag & TransformBit.SCALE) isDirty |= Dirty.S;
        }

        this.isDirty = Dirty.NON;

        return isDirty;
    }

    onDestroy() {

        this.unscheduleAllCallbacks();
        this.shape = null;
        this.body = null;

    }

    /** 回收 */
    recycle() {
        this.setTrigger(false)
        this.remove(true)
    }

    setTrigger(trigger: boolean) {
        this.trigger = trigger
    }

    insertFrame() {

    }

    updateFrame(dt: number) {

    }

    removeFrame(): void {
    }

    lateUpdateFrame(): void {
    }

    getVoAngle(): number {
        return this.voAngle
    }

    getVoRatio(): number {
        return this.voRatio
    }

    setVelocityAndRatio(ve: Vec3, ratio: number) {
        this.voRatio = ratio
        this.setVelocity(ve)
    }

    setVelocity(ve: Vec3) {
        this.voAngle = MathAngle.directionToAngle(ve)
        ve.multiplyScalar(this.speed * this.voRatio)
        this.velocity.set(ve)
    }

    setVelocityAngle(angle: number) {
        this.voAngle = angle
        MathAngle.angleToDirection(angle, this.velocity)
        this.velocity.multiplyScalar(this.speed * this.voRatio)
    }

    velocityFlip() {
        this.velocity.x = -this.velocity.x
        this.velocity.y = -this.velocity.y
        this.setScale(new Vec3(-1 * this.getScale().x, this.getScale().y, this.getScale().z))
    }
    initGraphics() {
        //创建碰撞形状
        switch (this.type) {
            case ShapeType.Box:
                let rect = new Rect(this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y)
                // let rect = new Rect(this.center.x, this.center.y - this.size.y / 2, this.size.x, this.size.y)
                this.bobyGraphics = Func.drawRect(rect, this.node, Color.RED, this.node.layer, this.bobyGraphics)
                break;
            case ShapeType.Sphere:
                this.bobyGraphics = Func.drawCircle(this.radius, this.center, this.node, Color.RED, this.node.layer, this.bobyGraphics)
                break;
            case ShapeType.Arc:
                this.bobyGraphics = Func.drawArc(this.radius, this.arcAngle, 0, this.node, Color.RED, this.node.layer, this.bobyGraphics)
                this.setAngle(this.arcHeading)
                break
        }

        let def_node = this.node.getChildByName("def_node")
        if (def_node == null) {
            def_node = new Node("def_node")
            def_node.layer = Layers.Enum.DEFAULT
            this.node.addChild(def_node)
            let spr = def_node.addComponent(Sprite)
            spr.sizeMode = Sprite.SizeMode.CUSTOM
            spr.color = Color.BLACK
            spr.setTexture("textrue/bg_1")
            spr.getComponent(UITransform).setContentSize(new Size(50, 5))
        }
    }

    preCollider() {

    }
    lateCollider() {

    }
}


import { _decorator, Component, director, error, log, Mask, Node, Rect, Sprite, sys, UITransform, Vec3, view, Animation } from 'cc';
import { GuideTrigger } from './GuideTrigger';
import { tab } from '../../Table/table_gen';
import { EventMgr } from '../mgr/EventMgr';
import { LocalEvent } from '../define/LocalEvent';
import { DisableGuideController, DisableTouchMask, GuideCommand, IsInFightScene } from './GuideCommand';
import { Locator } from './Locator';
import { RoleData } from '../model/role/RoleData';
import { FightData } from '../fight/data/FightData';
import { CommonTipsPop } from '../model/common/CommonTipsPop';
import { LangMgr } from '../mgr/LangMgr';
import { BattleMainDataControl } from '../model/home/battle/BattleMainDataControl';
import { proto } from 'client_protocol';
import { FightEvent } from '../fight/define/FightEvent';
import { stepBranchGuide } from './GuideTask';
const { ccclass, property } = _decorator;

@ccclass('GuideController')
export class GuideController extends Component {
    @property(Node)
    touchMask: Node = null;
    @property(Node)
    left: Node = null;
    @property(Node)
    right: Node = null;
    @property(Node)
    top: Node = null;
    @property(Node)
    bottom: Node = null;

    @property(Mask)
    holeMask: Mask = null;
    @property(Node)
    finger: Node = null;
    @property(CommonTipsPop)
    CommonTipsPop: CommonTipsPop = null;
    @property(Node)
    node_jump: Node = null;
    @property(Node)
    node_create_bullet:Node = null;
    private _fingerRect: Rect;
    private _fingerNode: Node; //点击指向的节点
    public dropCount: number = 1;
    public showMonster: boolean = false;
    public blockButton:boolean = false;

    private JadeTimeCount: number = 0;
    private roleIdleTimeCount: number = 0;
    private roleIdleState: boolean = false;
    private rewards:proto.IItem[] = [];
    public canHideHeroPop:boolean = false;
    public setTimeOutCount:number = 0;

    private static _ins: GuideController;
    public static get ins() { return GuideController._ins }
    public static set ins(value: GuideController) {
        if (GuideController._ins) {
            if (!sys.isNative) {
                throw 'GuideController is already created';
            }
        }
        GuideController._ins = value;
        const nodeGuangQuan = new Node();
        nodeGuangQuan.name = "guideGQNode";
        value.node.addChild(nodeGuangQuan);
    }
    public static Release() {
        if (GuideController._ins) {
            const tri = GuideController._ins.getComponent(GuideTrigger);
            if (tri) {
                tri.removeListens();
            }
            if (GuideController._ins.TargetNode) {
                GuideController._ins.TargetNode.off(Node.EventType.TOUCH_END)
            }
            GuideController._ins.left.off(Node.EventType.TOUCH_END);
            GuideController._ins.right.off(Node.EventType.TOUCH_END);
            GuideController._ins.top.off(Node.EventType.TOUCH_END);
            GuideController._ins.bottom.off(Node.EventType.TOUCH_END);
            director.targetOff(GuideController._ins.node);
            director.removePersistRootNode(GuideController._ins.node);
            GuideController._ins.node.destroy();
            GuideController._ins = undefined;
        }
    }

    private _targetNode: Node;
    private _dispatchEvent: any;
    private _task: any = null;
    private _recordSteps: any[];

    public runningCB = null;   // 正在执行中的步骤的回调函数，用于跳过步骤使用
    public runningGuideData: tab.GuideTable = null; // 正在执行的强制引导数据

    get TargetNode() { return this._targetNode; }
    set TargetNode(node: Node) { this._targetNode = node; }
    /* 保存一下引导的结算奖励 */
    setRewards(rewards:proto.IItem[]){
        this.rewards = rewards
    }
    gerRewards(){
        return this.rewards;
    }
    /**
     * 是否正在进行新手引导
    */
    public isGuiding(): boolean {
        return this._task !== null
    }
    /* 是否在战斗中的新手引导 */
    public isInFightGuiding(): boolean {
        if (BattleMainDataControl.ins.getStageClearIds().length === 0 && (FightData.ins.stageId === 101||FightData.ins.stageId===1)&&!RoleData.ins.IsGuideFinished()) {
            return true;
        } else {
            return false;
        }
    }
    // 是否在进行某个新手引导
    public isGuidingTask(taskName: string): boolean {
        return this._task && this._task.file && this._task.file == taskName;
    }
    isDebug(): boolean {
        //return true;
        return this._task && this._task.debug
    }
    onLoad() {
        EventMgr.onLocal(LocalEvent.JadeDropFinger, this.beginCheckJade, this);
        EventMgr.onLocal(LocalEvent.roleIdleState, this.beginCheckRole, this);
        this.init();
    }
    registerGuildeSelectLeader(){
        EventMgr.unFight(FightEvent.Select_leader, this.onSelect_leader, this)
        EventMgr.onFight(FightEvent.Select_leader, this.onSelect_leader, this)
    }
    onSelect_leader(){
        console.log("cocos 选择队长");
        if(FightData.ins.stageId===103){
            clearTimeout(this.setTimeOutCount);
            this.setTimeOutCount = setTimeout(() => {
                stepBranchGuide(502);
            }, 30000)
        }
    }
    init() {
        this.node.getComponent(UITransform).setContentSize(view.getVisibleSize());
        this.dropCount = 1;
        this.TargetNode = null;

        this.finger.active = false;
        this._fingerNode = undefined;
        this._fingerRect = undefined;
        this.showMonster = false;
        this.CommonTipsPop.node.active = false;
        this.touchMask.active = false;
        const pos = tab.getData().GetKeyValue_ConfigTable().WanDaoLocation;
        this.node_create_bullet.setPosition(new Vec3(pos[0],pos[1],0));

        this.resetTouchMask();
    }
    runTask(task: object, taskid: number, callback?: Function) {
        if (this._task) {
            return;
        }
        this._task = task;
        this.run(taskid, callback);
    }
    public clearTask() {
        this._task = null;
        const tri = GuideController._ins.getComponent(GuideTrigger);
        tri.setGuideRunning(false);
    }
    triggerTaskError(cb: Function) {
        if (this._task) {
            cb(new Error("Guide Cancelled"))
        }
    }
    protected run(taskid: number, callback?: Function) {
        if (!this._task) {
            return;
        }
        this.resetTouchMaskDebugColor();
        async.eachSeries(this._task.steps, (step: any, cb) => {
            EventMgr.onLocal(LocalEvent.CancelRunningGuide, this.triggerTaskError, this, true)
            step.skip_cmd = false;
            this._processStep(step, err => {
                if (this._task) {
                    if (taskid !== undefined && step.desc != undefined) {
                        log(`~~~~~ guide step complete ${taskid}_${step.desc}`)
                    }
                    EventMgr.unLocal(LocalEvent.CancelRunningGuide, this.triggerTaskError, this)
                    try {
                        cb(err)
                    } catch (error) {
                    }
                }
            });
        }, (error: Error | string) => {
            if (error) {
                if (error instanceof (Error)) {
                    log(`task [${this._task.name}] error: ${error.message}`);
                } else {
                    log(`task [${this._task.name}] error: ${error}`);
                }
            }
            else {
                log(`task [${this._task.name}] complete`);
            }
            this.clearTask();

            this.touchMask.active = false;
            if (this.finger) {
                this.finger.active = false;
                this._fingerNode = undefined;
                this._fingerRect = undefined;
            }
            if (callback) {
                callback(error);
            }
        });
    }


    protected resetTouchMaskDebugColor() {
        let isDebug = false;
        // this.left.getComponent(Sprite).enabled = isDebug;
        // this.right.getComponent(Sprite).enabled = isDebug;
        // this.top.getComponent(Sprite).enabled = isDebug;
        // this.bottom.getComponent(Sprite).enabled = isDebug;
    }

    _processStep(step, callback) {
        let realThis = this;
        realThis.touchMask.active = realThis._task.mask
        realThis.resetTouchMask();

        async.series({
            //任务开始
            stepStart: (cb) => {
                realThis.runningCB = cb;
                if (step.onStart) {
                    log(`step [${step.desc}] onStart`);
                    step.onStart.call(step, cb);
                } else {
                    cb();
                    realThis.runningCB = null;
                }
            },

            //任务指令
            stepCommand: (cb) => {
                if (step.skip_cmd) {
                    //跳过指令
                    cb();
                    return;
                }
                realThis.scheduleOnce(() => {
                    realThis._processStepCommand(step, cb);
                }, step.delayTime || 0);
            },

            //任务结束
            taskEnd: (cb) => {
                realThis.runningCB = cb;
                realThis.finger.active = false;
                realThis._fingerNode = undefined;
                realThis._fingerRect = undefined;
                if (step.onEnd) {
                    // realThis.log(`step [${step.desc}] onEnd`);
                    step.onEnd.call(step, cb);
                } else {
                    cb();
                    realThis.runningCB = null;
                }
            },
        }, (error) => {
            realThis.resetTouchMask()
            if (error) {
                log(`step [${step.desc}] error: ${error}`);
            }
            else {
                log(`step [${step.desc}] complete`);
            }
            callback(error);
        })
    }
    resetTouchMask() {
        this.left.setPosition(new Vec3(0, 0, 0))
        this.right.setPosition(new Vec3(0, 0, 0))
        this.top.setPosition(new Vec3(0, 0, 0))
        this.bottom.setPosition(new Vec3(0, 0, 0))
        this.holeMask.node.active = false;
        this.holeMask.enabled = false;
    }
    /**
     * 处理步骤指令
     * @param {*} step 
     * @param {*} cb 
     */
    protected _processStepCommand(step, cb) {
        log(`step [${step.desc}] begin`);

        if (!!!step.command) {
            //没有command
            cb()
            return;
        }

        if (Array.isArray(step.command)) {
            //并行执行command
            async.each(step.command, (command: any, callback) => {
                this._processCommand(command.cmd, command.args, callback)
            }, err => {
                if (err) {
                    error(`step [${step.desc}] failed! [${err}]`)
                }
                else {
                    log(`step [${step.desc}] complete`);
                }
                cb(err);
            });
        }
        else {
            this._processCommand(step.command.cmd, step.command.args, err => {
                log(`step [${step.desc}] complete`);
                cb(err)
            })
        }
    }
    _processCommand(cmd, args, cb) {
        this.runningCB = cb;
        let cmdFunc = GuideCommand.getFunc(cmd);
        if (cmdFunc) {
            cmdFunc(this, args, err => {
                this.runningCB = null;
                cb(err);
            });
        } else {
            this.runningCB = null;
            cb(new Error(`cmd [${cmd}] not exist`));
        }
    }
    find(value, cb: Function) {
        let root = director.getScene();
        Locator.locateNode(root, value, (error, node) => {
            if (error) {
                cb(null, error);//找不到， 回调错误
                return;
            }
            log('find succeed');
            cb(node);
        });
    }
    /**
     * 手指动画
     */
    fingerToNode(node, fingerActive: boolean = true, holeActive = true, isCircle?: boolean,isScale?:number) {
        this._fingerNode = node
        this.finger.active = fingerActive;
        this.holeMask.node.active = holeActive;
        this.holeMask.enabled = holeActive;
        if (isCircle) {
            this.holeMask.type = Mask.Type.GRAPHICS_ELLIPSE;
        } else {
            this.holeMask.type = Mask.Type.GRAPHICS_RECT;
        }
        this.focusToNode(node, isCircle,isScale);
    }
    private focusToNode(node: Node, isCircle: boolean,isScale:number) {
        //设置点击屏蔽遮罩
        let rect: Rect = this.GetBoundingBoxToWorld(node)
        if (this._fingerRect && this._fingerRect.equals(rect)) {
            //rect没有发生改变
            return
        }
        this._fingerRect = rect;

        if (this.finger.active) {
            this.finger.getComponent(Animation).play("guideFinger")
            this.finger.setPosition(this.finger.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(rect.center.x + 60, rect.center.y - 30, 0)));
        }

        let pos = this.touchMask.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(rect.center.x, rect.center.y, 0))
        if (this.holeMask.enabled) {
            this.setHoleMask(pos.x, pos.y, rect.width, rect.height, isCircle,isScale)
        }

        let xLength = rect.width / 2;
        let yLength = rect.height / 2;
        this.left.setPosition(new Vec3(pos.x - xLength, 0, 0))
        this.right.setPosition(new Vec3(pos.x + xLength, 0, 0))
        this.top.setPosition(new Vec3(0, pos.y + yLength, 0))
        this.bottom.setPosition(new Vec3(0, pos.y - yLength, 0))

        console.log(director.getScene());
    }
    setHoleMask(x: number, y: number, w: number, h: number, isCircle: boolean,isScale:number) {
        this.holeMask.enabled = true;
        if (isCircle) {
            this.holeMask.node.setPosition(new Vec3(x, y + 15, 0));
        } else {
            this.holeMask.node.setPosition(new Vec3(x, y, 0));
        }
        let _h = 0;
        let _w = 0;

        let scaleCount = 1.1;
        if(isScale){
            scaleCount = isScale;
        }
        if (IsInFightScene()) {
            _h = isCircle ? h : h * scaleCount;
            _w = isCircle ? w : w * scaleCount;
        } else {
            _h = h;
            _w = w;
        }
        this.holeMask.node.getComponent(UITransform).setContentSize(_w, _h)
    }
    /**
    * 返回节点在世界坐标系下的对齐轴向的包围盒（AABB）
    * 该边框不包含自身和已激活的子节点的世界边框。
    */
    GetBoundingBoxToWorld(node: Node): Rect {
        const transform: UITransform = node.getComponent(UITransform);
        if (node.parent) {
            return transform.getBoundingBoxToWorld()
        } else {
            return transform.getBoundingBox();
        }
    }
    JumpGuide() {
        this.CommonTipsPop.node.active = true;
        this.CommonTipsPop.setData(LangMgr.getLab("ui_guide_1"))
    }
    clickJumpGuide() {
        DisableGuideController();
        DisableTouchMask();
        RoleData.ins.setClientData("guideTrunk", String(500));
        RoleData.ins.setClientData("equipGuildOver","true");
        RoleData.ins.setClientData("jadeGuildOver","true");
        this.clearTask();
        if(GuideController.ins.dropCount>1){
            GuideController.ins.dropCount -= 1;
        }else{
            GuideController.ins.dropCount = 1;
        }
        if (IsInFightScene()) {
            FightData.ins.pause = false;
            // EventMgr.emitFight(FightEvent.ReviveByItemid, 1401);
            // EventMgr.emitFight(FightEvent.ReviveByItemid, 1101);
            // EventMgr.emitFight(FightEvent.ReviveByItemid, 1301);
            // EventMgr.emitFight(FightEvent.ReviveByItemid, 1201);
            // EventMgr.emitFight(FightEvent.ReviveByItemid, 1501);
        }
    }
    hideTips() {
        this.CommonTipsPop.node.active = false;
    }
    beginCheckRole(state: boolean) {
        if (state && this.roleIdleTimeCount === 0) {
            this.schedule(this.updateCheckRole, 1)
        } else {
            this.stopCheckRole()
        }
    }
    updateCheckRole() {
        if (FightData.ins.pause) {
            this.stopCheckRole();
            return;
        }
        if (!IsInFightScene()) {
            this.stopCheckRole();
            return;
        }
        if (this.JadeTimeCount >= 5) {
            this.stopCheckRole();
            return;
        }

        if (this.roleIdleTimeCount >= 3) {
            if (this.roleIdleTimeCount === 3) {
                if (!this.finger.active) {
                    this.searchFingerNode('FightRootView/rootNode/objects/Monster')
                }
            }
        } else {
            this.roleIdleTimeCount++;
        }
    }
    stopCheckRole() {
        this.roleIdleTimeCount = 0;
        if (this.finger.active && !this.touchMask.active && this.JadeTimeCount < 5) {
            this.finger.active = false;
            this._fingerNode = undefined;
            this._fingerRect = undefined;
        }
        this.unschedule(this.updateCheckRole);
    }
    // 开始每秒检测小手
    beginCheckJade() {
        if (this.JadeTimeCount === 0) {
            this.schedule(this.updateCheckJade, 1)
        }
    }
    updateCheckJade() {
        if (FightData.ins.pause) {
            this.stopCheckJade();
            return;
        }
        if (!IsInFightScene()) {
            this.stopCheckJade();
            return;
        }
        if (this.JadeTimeCount >= 5) {
            if (this.JadeTimeCount === 5) {
                if (!this.touchMask.active) {
                    this.searchFingerNode('FightRootView/rootNode/dropNode/dropNode')
                }
            }
        } else {
            this.JadeTimeCount++;
        }
    }
    // 停止检测小手
    stopCheckJade() {
        this.JadeTimeCount = 0;
        if (this.finger.active && !this.touchMask.active) {
            this.finger.active = false;
            this._fingerNode = undefined;
            this._fingerRect = undefined;
        }
        this.unschedule(this.updateCheckJade);
    }
    searchFingerNode(args: string) {
        this.find(args, (node: Node, error) => {
            if (error) {
                return;
            }
            this.fingerToNode(node, true, false, false)
        });
    }
    protected onDestroy(): void {
        EventMgr.unLocal(LocalEvent.JadeDropFinger);
        EventMgr.unLocal(LocalEvent.roleIdleState);
    }
}


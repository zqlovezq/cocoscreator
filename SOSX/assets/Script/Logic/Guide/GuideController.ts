import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { GuideCommand } from "./GuideCommand";
import GuideTrigger from "./GuideTrigger";
import { Locator } from "./Locator";

declare let require: any;
declare let window: Window & {
    kick_off: any;
}

const { ccclass, property } = cc._decorator;
@ccclass
export default class GuideController extends cc.Component {

    @property(cc.Prefab)
    FINGER_PREFAB: cc.Prefab = null;
    @property(cc.Prefab)
    prefabDialogue: cc.Prefab = null;
    @property(cc.Prefab)
    prefabFrameTips: cc.Prefab = null;

    @property(cc.Prefab)
    prefabExchangeTips: cc.Prefab = null;

    @property(cc.Node)
    touchMask: cc.Node = null;
    @property(cc.Node)
    left: cc.Node = null;
    @property(cc.Node)
    right: cc.Node = null;
    @property(cc.Node)
    top: cc.Node = null;
    @property(cc.Node)
    bottom: cc.Node = null;

    @property(cc.Label)
    recordText: cc.Label = null;

    @property(cc.Mask)
    holeMask: cc.Mask = null;

    @property(cc.Node)
    moveFinger: cc.Node = null;

    @property(cc.Node)
    debugNode: cc.Node = null;
    @property(cc.Node)
    lightMask:cc.Node = null;

    private static _Instance: GuideController;
    public static get Instance() { return GuideController._Instance; }
    public static set Instance(value: GuideController) {
        if (GuideController._Instance) {
            if (!cc.sys.isNative) {
                throw 'GuideController is already created'
            }
        }
        GuideController._Instance = value;
        let nodeGuangQuan = new cc.Node();
        nodeGuangQuan.name = "guideGQNode";
        value.node.addChild(nodeGuangQuan);
    }
    public static Release() {
        if (GuideController._Instance) {
            let tri = GuideController._Instance.getComponent(GuideTrigger);
            if (tri) {
                tri.removeListens();
            }
            if (GuideController._Instance.TargetNode) {
                GuideController._Instance.TargetNode.off(cc.Node.EventType.TOUCH_END);
            }
            GuideController._Instance.left.off(cc.Node.EventType.TOUCH_END);
            GuideController._Instance.right.off(cc.Node.EventType.TOUCH_END);
            GuideController._Instance.top.off(cc.Node.EventType.TOUCH_END);
            GuideController._Instance.bottom.off(cc.Node.EventType.TOUCH_END);
            cc.director.targetOff(GuideController._Instance.node);
            cc.game.removePersistRootNode(GuideController._Instance.node);
            GuideController._Instance.node.destroy();
            GuideController._Instance = undefined;
        }
    }

    private _targetNode: cc.Node;
    private _finger: cc.Node;
    private _fingerNode: cc.Node; //点击指向的节点
    private _fingerRect: cc.Rect;
    // private _tips: GuideTips;
    private _dispatchEvent: any;
    private _task: any = null;
    private _recordSteps: any[];
    private _audioId: number = -1;
    private _audioKey: number | string;
    private _offsetX: number = 0;

    public runningCB = null;   // 正在执行中的步骤的回调函数，用于跳过步骤使用
    public runningGuideData: tab.GuideTable = null; // 正在执行的强制引导数据

    get TargetNode() { return this._targetNode; }
    set TargetNode(node: cc.Node) { this._targetNode = node; }

    /**
     * 是否正在进行新手引导
     */
    public isGuiding(): boolean {
        return this._task !== null;
    }

    // 是否在进行某个新手引导
    public isGuidingTask(taskName: string): boolean {
        return this._task && this._task.file && this._task.file == taskName;
    }

    onLoad() {
        this.init();
    }

    onDestroy() {
        cc.director.targetOff(this);
    }

    init() {
        this.node.setContentSize(cc.winSize);

        this.TargetNode = null;
        this._finger = cc.instantiate(this.FINGER_PREFAB);
        this.node.addChild(this._finger)
        this._finger.active = false;
        this._fingerNode = undefined;
        this._fingerRect = undefined;
        this.moveFinger.active = false;
        // this.schedule(this.updateFingerPos.bind(this))

        // PreLoadCsv(GuideTipsTableData.getFilename()).then(()=>{
        //     this._tips = cc.instantiate(this.TIPS_PREFAB).getComponent(GuideTips);
        //     this._tips.node.parent = this.node;
        //     this._tips.node.active = false;
        // })

        this.touchMask.active = false;
        this.resetTouchMask();

    }

    runTask(task: object, taskid: number, callback?: Function) {
        if (this._task) {
            return;
        }
        this._task = task;
        this.run(taskid, callback);
    }

    protected run(taskid: number, callback?: Function) {
        if (!this._task) {
            return;
        }
        this.resetTouchMaskDebugColor();
        async.eachSeries(this._task.steps, (step: any, cb) => {
            Net.listenLoaclMessage(LOCAL_MESSAGE.CancelRunningGuide, () => {
                if (this._task) {
                    cb(new Error("Guide Cancelled"))
                }
            }, this, true)
            step.skip_cmd = false;
            this._processStep(step, err => {
                if (this._task) {
                    if (taskid !== undefined && step.desc != undefined) {
                        cc.log(`~~~~~ guide step complete ${taskid}_${step.desc}`)
                        /* zhibo-S@20230410 for <删除打点> */
                        // Analytics.Instance.EventSuccess(CAEvtID.EventTracking, {
                        //     name: CAEvtName.GuideStep,
                        //     desc: `${taskid}_${step.desc}`,
                        // })
                        /* zhibo-E@20230410 for <删除打点> */
                    }
                    Net.unlistenLoaclMessage(LOCAL_MESSAGE.CancelRunningGuide)
                    try {
                        cb(err)
                    } catch (error) {
                    }
                }
            });
        }, (error: Error | string) => {
            if (error) {
                if (error instanceof (Error)) {
                    this.log(`task [${this._task.name}] error: ${error.message}`);
                } else {
                    this.log(`task [${this._task.name}] error: ${error}`);
                }
            }
            else {
                this.log(`task [${this._task.name}] complete`);
            }
            this._task = null;

            this.touchMask.active = false;
            if (this._finger) {
                this._finger.active = false;
                this._fingerNode = undefined;
                this._fingerRect = undefined;
            }

            if (callback) {
                callback(error);
            }
        });
    }

    _processStep(step, callback) {
        let realThis = this;
        realThis.touchMask.active = realThis._task.mask || true;
        realThis.resetTouchMask();

        async.series({
            //任务开始
            stepStart: (cb) => {
                realThis.runningCB = cb;
                if (step.onStart) {
                    realThis.log(`step [${step.desc}] onStart`);
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
                realThis._finger.active = false;
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
                realThis.log(`step [${step.desc}] error: ${error}`);
            }
            else {
                realThis.log(`step [${step.desc}] complete`);
            }
            callback(error);
        })
    }

    /**
     * 手指动画
     */
    fingerToNode(node, fingerActive: boolean = true, holeActive = true) {
        if (!this._finger) {
            return;
        }
        this._fingerNode = node
        this._finger.active = fingerActive;
        this.holeMask.node.active = holeActive;
        this.holeMask.enabled = holeActive;
        this.updateFingerPos();
    }

    public setFingerNodeOffsetX(val: number) {
        this._offsetX = val;
    }

    private updateFingerPos() {
        if (this._fingerNode) {
            if (cc.isValid(this._fingerNode)) {
                this.focusToNode(this._fingerNode)
            }
            else {
                this._fingerNode = undefined;
                this._fingerRect = undefined;
            }
        }
    }

    private focusToNode(node: cc.Node) {
        //设置点击屏蔽遮罩
        let rect: cc.Rect = this.GetBoundingBoxToWorld(node)
        if (this._fingerRect && this._fingerRect.equals(rect)) {
            //rect没有发生改变
            return
        }
        this._fingerRect = rect;

        if (this._finger.active) {
            this._finger.setPosition(this._finger.parent.convertToNodeSpaceAR(rect.center));
            //引导上阵和升级卡牌需要特殊处理，手指稍微有点偏下
            if (node.name === "ChangeTeamGuideSrc" ||
                node.name === "ChangeTeamGuideDst" ||
                node.name === "CardLvUpTarget") {
                this._finger.y += 30;
            }

            if (this._offsetX != 0) {
                this._finger.x -= this._offsetX;
            }
        }

        let pos = this.touchMask.convertToNodeSpaceAR(rect.center)
        if (this.holeMask.enabled) {
            this.setHoleMask(pos.x, pos.y, rect.width, rect.height)
        }

        let xLength = rect.width / 2;
        let yLength = rect.height / 2;
        this.left.x = pos.x - xLength;
        this.right.x = pos.x + xLength;
        this.top.y = pos.y + yLength;
        this.bottom.y = pos.y - yLength;
    }
    isDebug(): boolean {
        //return true;
        return this._task && this._task.debug
    }

    log(text) {
        if (this.isDebug()) {
            cc.log(text);
        }
    }
    error(text) {
        if (this.isDebug()) {
            cc.error(text);
        }
    }

    /**
     * 处理步骤指令
     * @param {*} step 
     * @param {*} cb 
     */
    protected _processStepCommand(step, cb) {
        this.log(`step [${step.desc}] begin`);

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
                    cc.error(`step [${step.desc}] failed! [${err}]`)
                }
                else {
                    this.log(`step [${step.desc}] complete`);
                }
                cb(err);
            });
        }
        else {
            this._processCommand(step.command.cmd, step.command.args, err => {
                this.log(`step [${step.desc}] complete`);
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
        let root = cc.director.getScene();
        Locator.locateNode(root, value, (error, node) => {
            if (error) {
                cb(null, error);//找不到， 回调错误
                return;
            }
            this.log('find succeed');
            cb(node);
        });
    }

    /**
     * 获取节点全路径
     * @param {*} node 
     */
    getNodeFullPath(node) {
        let array = [];
        let temp = node;
        do {
            array.unshift(temp.name);
            temp = temp.parent;
        } while (temp && temp.name !== 'Canvas')
        return array.join('/');
    }

    /**
     * 是否为引导层节点
     * @param {*} node 
     */
    protected isGuideNode(node) {
        let result = false;
        let temp = node;
        do {
            if (temp === this.node) {
                result = true;
                break;
            }
        } while (temp = temp.parent)

        return result;
    }

    onRecordClick() {
        if (this._task) {
            cc.log(`任务引导中，不能录制`);
            return;
        }

        if (this._dispatchEvent) {
            //停止录制
            this.recordText.string = '录制'
            cc.Node.prototype.dispatchEvent = this._dispatchEvent;
            this._dispatchEvent = null;
            cc.log('生成任务：', JSON.stringify(this._recordSteps));
        }
        else {
            this.recordText.string = '停止'

            //缓存引擎原生触摸派发函数
            this._dispatchEvent = cc.Node.prototype.dispatchEvent;
            this._recordSteps = [];

            let self = this;
            let time = Date.now();
            //Hook节点事件派发函数
            cc.Node.prototype.dispatchEvent = function (event) {
                //执行引擎原生触摸派发函数
                self._dispatchEvent.call(this, event);
                //过滤掉引导节点上的事件，
                if (self.isGuideNode(this)) {
                    return;
                }
                //仅缓存对节点的TouchEnd操作
                if (event.type === cc.Node.EventType.TOUCH_END) {
                    let now = Date.now();
                    let delay = (now - time) / 1000;
                    time = now;
                    let args = self.getNodeFullPath(this);
                    self._recordSteps.push({
                        desc: `点击${args}`,
                        command: { cmd: 'finger', args },
                        delay,
                    });
                }
            }
        }
    }

    resetTouchMask() {
        this.left.x = 0;
        this.right.x = 0;
        this.top.y = 0;
        this.bottom.y = 0;
        this.holeMask.node.active = false;
        this.holeMask.enabled = false;
    }

    protected resetTouchMaskDebugColor() {
        let isDebug = this.isDebug();
        this.left.getComponent(cc.Sprite).enabled = isDebug;
        this.right.getComponent(cc.Sprite).enabled = isDebug;
        this.top.getComponent(cc.Sprite).enabled = isDebug;
        this.bottom.getComponent(cc.Sprite).enabled = isDebug;
    }

    public MoveFinger(positions: cc.Vec2[], moveSpeed: number = 200) {
        if (positions.length < 2) {
            return;
        }
        this.moveFinger.active = true;
        this.moveFinger.stopAllActions();
        let _start = this.moveFinger.parent.convertToNodeSpaceAR(positions[0]);
        let _end = this.moveFinger.parent.convertToNodeSpaceAR(positions[1]);
        this.moveFinger.setPosition(_start)

        let moveActions = [];
        // for (let i = 0; i < positions.length; ++i) {
            let duration = positions[1].sub(positions[0]).mag() / moveSpeed;
            moveActions.push(cc.moveTo(duration, _end));
        // }
        moveActions.push(cc.delayTime(1));
        // moveActions.push(cc.callFunc(()=>{
        //     this.moveFinger.setPosition(positions[0])
        // }))
        // let reverseActions = [];
        // for (let i = positions.length - 2; i >= 0; --i) {
        //     let duration = positions[i].sub(positions[i + 1]).mag() / moveSpeed;
        //     reverseActions.push(cc.moveTo(duration, positions[i]))
        // }

        // let allActions = moveActions.concat(reverseActions);
        this.moveFinger.runAction(cc.repeatForever(cc.sequence(cc.moveTo(duration, _end),cc.callFunc(()=>{
            this.moveFinger.setPosition(_start)
        }))));
    }

    public StopMoveFinger() {
        this.moveFinger.stopAllActions();
        this.moveFinger.active = false;
    }

    public onDisconnectClick() {
        Net.Disconnect()
    }
    // 红色框
    showFrameTips(node: cc.Node | cc.Rect, offset?: cc.Vec2) {
        let tips: cc.Node = cc.instantiate(this.prefabFrameTips)
        this.node.addChild(tips)

        if (node instanceof cc.Node) {
            let worldPos = node.convertToWorldSpaceAR(cc.Vec2.ZERO)
            let pos = this.node.convertToNodeSpaceAR(worldPos)
            if (offset) {
                pos.x += offset.x;
                pos.y += offset.y;
            }
            tips.setPosition(pos)

            let rect = node.getBoundingBoxToWorld()
            tips.setContentSize(rect.width, rect.height)
            // this.setHoleMask(worldPos.x, worldPos.y, len, len)
        } else {
            let rect: cc.Rect = node;
            tips.setPosition(rect.origin)
            tips.setContentSize(rect.width, rect.height)
        }
    }

    showExchangeTips(node: cc.Node | cc.Rect, offset?: cc.Vec2) {
        let tips: cc.Node = cc.instantiate(this.prefabExchangeTips)
        this.node.addChild(tips)

        if (node instanceof cc.Node) {
            let worldPos = node.convertToWorldSpaceAR(cc.Vec2.ZERO)
            let pos = this.node.convertToNodeSpaceAR(worldPos)
            if (offset) {
                pos.x += offset.x;
                pos.y += offset.y;
            }
            tips.setPosition(pos)

            let rect = node.getBoundingBoxToWorld()
            tips.setContentSize(rect.width, rect.height)
        } else {
            let rect: cc.Rect = node;
            tips.setPosition(rect.origin)
            tips.setContentSize(rect.width, rect.height)
        }
    }

    showDownArrowTip(node: cc.Node | cc.Rect, offset?: cc.Vec2) {

    }

    /* 显示怪物行进路线tips
     */
    showWalkPathTips(bVisible: boolean) {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyGuideWalkPath, bVisible);
    }

    /* 显示传送提示
     */
    showTransferArrowTips(bVisible: boolean) {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyGuideTransferArrow, bVisible);
    }

    showRectTips(x: number, y: number, w: number, h: number, color: cc.Color = cc.Color.RED, lineWidth: number = 2) {
        let graphics = new cc.Node().addComponent(cc.Graphics)
        graphics.strokeColor = color;
        graphics.lineWidth = lineWidth
        graphics.fillColor = color;
        graphics.rect(x, y, w, h)
        graphics.stroke()

        this.node.addChild(graphics.node)
    }

    setTouchRect(x: number, y: number, w: number, h: number) {
        this.resetTouchMask()
        this.left.x = x;
        this.right.x = x + w;
        this.top.y = y + h;
        this.bottom.y = y;
    }

    setHoleMask(x: number, y: number, w: number, h: number) {
        this.holeMask.enabled = true;
        this.holeMask.node.x = x;
        this.holeMask.node.y = y;
        this.holeMask.node.width = w;
        this.holeMask.node.height = h;
    }

    /**
     * 返回节点在世界坐标系下的对齐轴向的包围盒（AABB）
     * 该边框不包含自身和已激活的子节点的世界边框。
     */
    GetBoundingBoxToWorld(node): cc.Rect {
        if (node._parent) {
            node._parent._updateWorldMatrix();
            // return this._getBoundingBoxTo();

            let width = node._contentSize.width;
            let height = node._contentSize.height;
            let rect = cc.rect(
                -node._anchorPoint.x * width,
                -node._anchorPoint.y * height,
                width,
                height);

            node._calculWorldMatrix();
            rect.transformMat4(rect, node._worldMatrix);
            return rect;
        }
        else {
            return node.getBoundingBox();
        }
    }

    CancelGuide() {
        cc.log("try to cancel guide...")
        Net.pushLoaclMessage(LOCAL_MESSAGE.CancelRunningGuide)
        Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
        Net.pushLoaclMessage(LOCAL_MESSAGE.HideFrameTips)
        this.clearAllRectTips()
    }

    CancelGuideOnSceneChanged() {
        Net.listenLoaclMessage(LOCAL_MESSAGE.SceneLoaded, () => {
            this.CancelGuide()
        }, this, true)
    }

    clearAllRectTips() {
        let graphicsArray = this.node.getComponentsInChildren(cc.Graphics)
        for (let graphics of graphicsArray) {
            graphics.node.destroy()
        }
    }

    ReportEvent(args: string) {
        /* zhibo-S@20230410 for <删除打点> */
        // Analytics.Instance.EventSuccess(CAEvtID.EventTracking, {
        //     name: CAEvtName.GuideStep,
        //     desc: args,
        // });
        /* zhibo-E@20230410 for <删除打点> */
    }
}

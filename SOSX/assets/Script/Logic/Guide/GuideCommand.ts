import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import ChessFightScene from "../Fight/ChessFightScene";
import MainScene from "../Main/MainScene";
import { LoadResAsync } from "../Utils/GameUtils";
import Dialogue from "./Dialogue";
import GuideController from "./GuideController";

export enum Command {
    None = 0, //什么都不做，只用于延时
    Click,
    ClickNoMask, //同Click，只是没有黑色半透明遮罩
    ClickAnywhere,
    ClickNoncoercive, //非强制点击
    ClickAppearFinger, //点击完手指消失
    ClickCardInfo, //点击查看卡牌详情
    Dialogue,
    DialogueNonmodal, //非模态对话
    Serial, //串行命令
    Parallel, //并行命令
    Some, //任意一个命令完成就算完成了
    FrameTips, //红框提示
    ExchangeTips, //交换位置提示
    DownArrowTips, //向下指示箭头
    RectTips, //矩形框提示
    WalkPathTips, //行走路线提示
    TransferArrowTips, //传送箭头提示
    Custom,
    ReportedEvent, //上报埋点事件
    LightChess, //点亮棋盘
    ChessMove, //棋子移动
    NewClick,//新的点击事件
}

interface DialogueParam {
    id: number | number[];
    autoHide?: boolean;
}

interface RectTipsParam {
    rect: cc.Rect;
    lineWidth: number;
    color: cc.Color;
}

function isDialogueParam(param: any): param is DialogueParam {
    return param.id !== undefined; //&& param.autoHide !== undefined;
}

export function WaitEnterScene(sceneName: string, callback: Function) {
    let scene = cc.director.getScene();
    if (scene.name == sceneName) {
        callback()
    } else {
        WaitSceneLoaded(sceneName, callback)
    }
}

export function WaitPopLayer(url, callback: Function) {
    let checkFunc = function (name: string) {
        if (url == name) {
            Net.unlistenLoaclMessage(LOCAL_MESSAGE.PopLayer, checkFunc, GuideController.Instance)
            callback();
        }
    }
    Net.listenLoaclMessage(LOCAL_MESSAGE.PopLayer, checkFunc, GuideController.Instance)
}

function WaitSceneLoaded(sceneName: string, callback: Function) {
    let checkFunc = function (name: string) {
        if (sceneName == name) {
            Net.unlistenLoaclMessage(LOCAL_MESSAGE.SceneLoaded, checkFunc, GuideController.Instance)
            callback();
        }
    }
    Net.listenLoaclMessage(LOCAL_MESSAGE.SceneLoaded, checkFunc, GuideController.Instance)
}
export function WaitCombatDone(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
        Net.listenLoaclMessage(LOCAL_MESSAGE.COMBAT_DONE, (finish: boolean) => {
            resolve(finish)
        }, GuideController.Instance, true)
    })
}
export function WaitConstructing(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
        Net.listenLoaclMessage(LOCAL_MESSAGE.CONSTRUCTING, (finish: boolean) => {
            resolve(finish)
        }, GuideController.Instance, true)
    })
}
export function WaitLocalMsg(localMsg: LOCAL_MESSAGE, once = true): Promise<any> {
    return new Promise<any>(resolve => {
        Net.listenLoaclMessage(localMsg, param => {
            resolve(param)
        }, GuideController.Instance, once)
    })
}

export function GetChessFight(): ChessFightScene {
    let root = cc.director.getScene().getChildByName('Canvas');
    if (root) {
        return root.getComponent(ChessFightScene);
    }
    return null;
}
export function GetMainScene(): MainScene {
    let root = cc.director.getScene().getChildByName('Canvas');
    if (root) {
        return root.getComponent(MainScene);
    }
    return null;
}
export function SkipCommand(step: any) {
    step.skip_cmd = true;
}

export function EnableTouchMask() {
    GuideController.Instance.touchMask.active = true;
    GuideController.Instance.resetTouchMask();
}

export function DisableTouchMask() {
    GuideController.Instance.touchMask.active = false;
}
export function DisableGuideController() {
    GuideController.Instance.node.active = false;
}
// export function GetTowerUpgradeInfo(type:HeroType): TowerInfoItems {
//     return Role.self().RoleTowerInfo.get(type)
// }


export class GuideCommand {

    public static getFunc(cmd: Command): Function {
        let cmdFunc: Function;
        switch (cmd) {
            case Command.None: {
                cmdFunc = GuideCommand.none;
                break
            }
            case Command.Click: {
                cmdFunc = GuideCommand.clickFunc(true, true);
                break;
            }

            case Command.ClickCardInfo: {
                cmdFunc = GuideCommand.clickCardInfoFunc(true, true);
                break;
            }

            case Command.ClickNoMask: {
                cmdFunc = GuideCommand.clickFunc(true, false);
                break;
            }
            case Command.ClickAnywhere: {
                cmdFunc = GuideCommand.clickAnyWhere;
                break;
            }

            case Command.ClickAppearFinger: {
                cmdFunc = GuideCommand.clickAppearFinger(true, true);
                break;
            }

            case Command.Dialogue: {
                cmdFunc = GuideCommand.dialogueFunc(true);
                break;
            }
            case Command.DialogueNonmodal: {
                cmdFunc = GuideCommand.dialogueFunc(false);
                break;
            }
            case Command.Serial: {
                cmdFunc = GuideCommand.serial;
                break;
            }
            case Command.Parallel: {
                cmdFunc = GuideCommand.parallel;
                break;
            }
            case Command.Some: {
                cmdFunc = GuideCommand.some;
                break;
            }
            case Command.FrameTips: {
                cmdFunc = GuideCommand.frameTipsFunc();
                break;
            }

            case Command.ExchangeTips: {
                cmdFunc = GuideCommand.exchangeTipsFunc();
                break;
            }

            case Command.DownArrowTips: {
                cmdFunc = GuideCommand.downArrowTipsFunc();
                break;
            }

            case Command.RectTips: {
                cmdFunc = GuideCommand.rectTips;
                break;
            }

            case Command.WalkPathTips: {
                cmdFunc = GuideCommand.walkPathTipsFunc();
                break;
            }

            case Command.TransferArrowTips: {
                cmdFunc = GuideCommand.transferArrowTipsFunc();
                break;
            }

            case Command.Custom: {
                cmdFunc = GuideCommand.custom;
                break;
            }
            case Command.ClickNoncoercive: {
                cmdFunc = GuideCommand.clickFunc(true, false, false);
                break;
            }

            case Command.ReportedEvent: {
                cmdFunc = GuideCommand.reportedEvent();
                break;
            }
            case Command.LightChess: {
                cmdFunc = GuideCommand.LightChessFunc();
                break;
            }
            case Command.ChessMove: {
                cmdFunc = GuideCommand.ChessMoveFunc();
                break;
            }
            case Command.NewClick: {
                cmdFunc = GuideCommand.newClickFunc();
                break;
            }
        }
        return cmdFunc;
    }
    protected static ChessMoveFunc() {
        return function (guide: GuideController, args: any, callback: Function) {
            guide.TargetNode = null;
            let fightScene = GetChessFight();
            fightScene.setFightGuideStep(args, callback);
        }
    }
    protected static newClickFunc(){
        return function (guide: GuideController, args: any, callback: Function) {
            guide.TargetNode = null;
            guide.node.active = false;
            let mainScene = GetMainScene();
            mainScene.setMainGuideStep(args,callback);
        }
    }
    protected static clickFunc(fingerActive: boolean, holeActive: boolean, coercive = true) {
        return function (guide: GuideController, args: string, callback: Function) {
            guide.TargetNode = null;
            //定位节点
            guide.find(args, (node: cc.Node, error) => {
                if (error) {
                    callback(error);
                    return;
                }
                guide.setFingerNodeOffsetX(0);
                //手指动画
                guide.fingerToNode(node, fingerActive, holeActive);
                guide.TargetNode = node;

                node.once(cc.Node.EventType.TOUCH_END, (event) => {
                    cc.log('节点被点击');
                    guide.TargetNode = null;
                    node.targetOff(node);
                    callback();
                }, node, true);

                if (!coercive) {
                    guide.touchMask.active = false;
                }
            });
        }
    }

    protected static clickCardInfoFunc(fingerActive: boolean, coercive = true) {
        return function (guide: GuideController, args: string, callback: Function) {
            guide.TargetNode = null;
            //定位节点
            guide.find(args, (node: cc.Node, error) => {
                if (error) {
                    callback(error);
                    return;
                }

                //手指动画
                guide.setFingerNodeOffsetX(node.width / 2 - 10);
                guide.fingerToNode(node, fingerActive, false);
                guide.TargetNode = node;

                node.once(cc.Node.EventType.TOUCH_END, (event) => {
                    cc.log('节点被点击');
                    guide.TargetNode = null;
                    node.targetOff(node);
                    callback();
                }, node, true);

                if (!coercive) {
                    guide.touchMask.active = false;
                }
            });
        }
    }

    protected static clickAppearFinger(fingerActive: boolean, holeActive: boolean, coercive = true) {
        return function (guide: GuideController, args: string, callback: Function) {
            guide.TargetNode = null;
            //定位节点
            guide.find(args, (node: cc.Node, error) => {
                if (error) {
                    callback(error);
                    return;
                }

                //手指动画
                guide.fingerToNode(node, fingerActive, holeActive);
                guide.TargetNode = node;
                guide.touchMask.active = false;
                let tmpNode = new cc.Node;
                tmpNode.setContentSize(cc.view.getDesignResolutionSize());
                tmpNode.setAnchorPoint(cc.Vec2.ZERO)
                cc.director.getScene().addChild(tmpNode, 99999);

                tmpNode.once(cc.Node.EventType.TOUCH_END, (event) => {
                    tmpNode.destroy();
                    guide.TargetNode = null;
                    callback();
                }, node, true);
            });
        }
    }

    static clickAnyWhere(guide: GuideController, args, callback: Function) {
        let node = new cc.Node;
        node.setContentSize(cc.view.getDesignResolutionSize());
        node.setAnchorPoint(cc.Vec2.ZERO)
        cc.director.getScene().addChild(node, 99999);

        node.once(cc.Node.EventType.TOUCH_END, (event) => {
            node.destroy();
            callback();
        }, node);

        if (args && args == "1") {
            guide.left.x = 0;
            guide.right.x = 0;
            guide.top.y = 0;
            guide.bottom.y = 0;
            // guide.holeMask.node.active = true;
            guide.holeMask.enabled = false;
            guide.touchMask.active = true;
        }
    }
    static LightChessFunc() {
        return function (guide: GuideController, args: string, callback: Function) {
            guide.TargetNode = null;
            guide.lightMask.active = true;
            guide.node.once(cc.Node.EventType.TOUCH_END, (event) => {
                guide.node.targetOff(guide.node);
                guide.lightMask.active = false;
                callback();
            }, guide.node, true);
        }
    }
    //对话
    static dialogueFunc(modal: boolean) {
        return async function (guide: GuideController, args: number | number[] | DialogueParam, callback?: Function) {
            // guide.holeMask.node.active = true;
            let dialogueNode = guide.node.getChildByName("GuideDialogue")
            if (!dialogueNode) {
                let dialoguePre = await LoadResAsync('prefab/Dialogue', cc.Prefab)
                dialogueNode = cc.instantiate(dialoguePre)
                dialogueNode.name = "GuideDialogue";
                guide.node.active = true;
                guide.node.addChild(dialogueNode, 10000)
            }
            let dialogue: Dialogue = dialogueNode.getComponent(Dialogue)
            dialogue.Modal = modal;
            dialogue.AutoHide = modal; //默认模态自动关闭，非模态不自动关闭

            let id: number | number[]
            if (isDialogueParam(args)) {
                id = args.id
                if (args.autoHide !== undefined) {
                    dialogue.AutoHide = args.autoHide;
                }
            } else {
                id = args
            }
            if (Array.isArray(id)) {
                dialogue.showByArray(id, callback)
            } else if (typeof id === "number") {
                dialogue.showByID(id, callback)
            } else {
                cc.error(`unknown type of id: ${id}`)
            }
        }
    }

    static serial(guide: GuideController, args: object[], callback: Function) {
        async.eachSeries(args, (command: any, cb) => {
            guide._processCommand(command.cmd, command.args, cb);
        }, (error) => {
            callback(error)
        })
    }

    static parallel(guide: GuideController, args: object[], callback: Function) {
        async.each(args, (command: any, cb) => {
            guide._processCommand(command.cmd, command.args, cb);
        }, (error) => {
            callback(error)
        })
    }

    static some(guide: GuideController, args: object[], callback: Function) {
        async.some(args, (command: any, cb) => {
            guide._processCommand(command.cmd, command.args, err => {
                cb(err, true)
            });
        }, (err, result) => {
            callback(err)
        })
    }

    static frameTipsFunc() {
        return function (guide: GuideController, args: string | cc.Rect, callback: Function) {
            if (typeof args === "string") {
                guide.find(args, (node: cc.Node, error) => {
                    if (error) {
                        callback(error);
                        return;
                    }

                    if (args === "bottomHeart") {
                        guide.showFrameTips(node, cc.v2(-10, 0));
                    } else if (args === "node_skill_layout") {
                        guide.showFrameTips(node, cc.v2(0, -20));
                    } else {
                        guide.showFrameTips(node)
                    }
                    callback();
                });
            } else {
                guide.showFrameTips(args)
                callback();
            }
        }
    }

    /* 交换位置提示
     */
    static exchangeTipsFunc() {
        return function (guide: GuideController, args: string | cc.Rect, callback: Function) {
            if (typeof args === "string") {
                guide.find(args, (node: cc.Node, error) => {
                    if (error) {
                        callback(error);
                        return;
                    }

                    guide.showExchangeTips(node, cc.v2(0, 40))
                    callback();
                });
            }
        }
    }

    /* 向下箭头提示
     */
    static downArrowTipsFunc() {
        return function (guide: GuideController, args: string | cc.Rect, callback: Function) {
            if (typeof args === "string") {
                guide.find(args, (node: cc.Node, error) => {
                    if (error) {
                        callback(error);
                        return;
                    }

                    guide.showDownArrowTip(node, cc.v2(0, 40))
                    callback();
                });
            }
        }
    }

    /* 怪物行进路线提示
     */
    static walkPathTipsFunc() {
        return function (guide: GuideController, args: string | cc.Rect, callback: Function) {
            if (typeof args === "boolean") {
                guide.showWalkPathTips(args);
                callback();
            } else {
                cc.error("引导参数有误!");
            }
        }
    }

    /* 传送箭头提示
     */
    static transferArrowTipsFunc() {
        return function (guide: GuideController, args: string | cc.Rect, callback: Function) {
            if (typeof args === "boolean") {
                guide.showTransferArrowTips(args);
                callback();
            } else {
                cc.error("引导参数有误!");
            }
        }
    }

    static rectTips(guide: GuideController, args: RectTipsParam, callback: Function) {
        guide.showRectTips(args.rect.x, args.rect.y, args.rect.width, args.rect.height, args.color, args.lineWidth)
        callback()
    }

    static none(guide: GuideController, args, callback: Function) {
        callback();
    }

    static custom(guide: GuideController, args, callback: Function) {
        if (args && typeof (args) == 'function') {
            args(callback);
        } else {
            callback();
        }
    }

    /* 上报埋点事件
     */
    protected static reportedEvent() {
        return async function (guide: GuideController, args: string, callback?: Function) {
            callback();
        }
    }
};

export function IsInChessFightScene() {
    let scene = cc.director.getScene()
    if (scene.name != "ChessFightScene") {
        return false;
    } else {
        let rookie = scene.getComponentInChildren(ChessFightScene)
        if (rookie && rookie.enabled) {
            return true;
        }
    }
    return false;
}

export function SkipIfNotScene(sceneName: string): Function {
    return function () {
        let scene = cc.director.getScene()
        if (scene.name == sceneName) {
            return false;
        }
        return true;
    }
}

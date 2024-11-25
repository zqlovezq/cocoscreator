import { _decorator, director, instantiate, log, Node, Prefab, Animation, error, UITransform, Layers, v3 } from 'cc';
import { GuideController } from './GuideController';
import { FightScene } from '../../scene/FightScene';
import { EventMgr } from '../mgr/EventMgr';
import { LocalEvent } from '../define/LocalEvent';
import { LoadResAsync } from '../mgr/ResMgr';
import { FightEvent } from '../fight/define/FightEvent';
import { GuideDialogue } from './GuideDialogue';
import { MainScene } from '../../scene/MainScene';
import { tab } from '../../Table/table_gen';
import { PlayerControl } from '../fight/base/obj/role/role/PlayerControl';
import { ComicControl } from '../../Common/script/ComicControl';
import { BulletTab } from '../fight/power/powerTab/BulletTab';
import { BuffControl } from '../fight/base/buff/BuffControl';
import { BulletControl } from '../fight/base/obj/bullet/BulletControl';
import { RoleData } from '../model/role/RoleData';
import { UIMgr } from '../mgr/UIMgr';
import { ViewName } from '../define/ViewDefine';
const { ccclass, property } = _decorator;
interface DialogueParam {
    id: number | number[];
    autoHide?: boolean;
}
export enum Command {
    None = 0, //什么都不做，只用于延时
    Click,
    ClickNoMask, //同Click，只是没有黑色半透明遮罩
    ClickAnywhere,
    Dialogue,
    DialogueNonmodal, //非模态对话
    Serial, //串行命令
    Parallel, //并行命令
    Some, //任意一个命令完成就算完成了
    Custom,
    ReportedEvent, //上报埋点事件
    Anim,          //开场动画
    CircleClick,    //圆形点击
    CircleClickNoClick,//只是单独的圆形遮罩
    ReviveHero, //  复活小鸡
    RunComic,    // 漫画
}
@ccclass('GuideCommand')
export class GuideCommand {
    public static getFunc(cmd: Command): Function {
        let cmdFunc: Function;
        switch (cmd) {
            case Command.None: {
                cmdFunc = GuideCommand.none;
                break
            }
            case Command.ClickAnywhere: {
                cmdFunc = GuideCommand.ClickAnywhere;
                break;
            }
            case Command.Click: {
                cmdFunc = GuideCommand.clickFunc(true, true, false);
                break;
            }
            case Command.ReviveHero: {
                cmdFunc = GuideCommand.ReviveHero();
                break;
            }
            case Command.CircleClick: {
                cmdFunc = GuideCommand.clickFunc(true, true, false, true, true);
                break;
            }
            case Command.CircleClickNoClick: {
                cmdFunc = GuideCommand.CircleClickNoClick();
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
            case Command.Anim: {
                cmdFunc = GuideCommand.Anim();
                break;
            }
            case Command.RunComic: {
                cmdFunc = GuideCommand.RunComic();
                break;
            }
        }
        return cmdFunc;
    }
    static none(guide: GuideController, args, callback: Function) {
        callback();
    }
    static ReviveHero() {
        return async function (guide: GuideController, args: number[], callback?: Function) {
            const roles = PlayerControl.ins.getRoles();
            for (let i = 0; i < roles.length; i++) {
                EventMgr.emitFight(FightEvent.ReviveByItemid, roles[i].info.configTab.Id);
            }
            callback();
        }
    }
    static RunComic() {
        return async function (guide: GuideController, args: number | number[] | DialogueParam, callback?: Function) {
            const parentNode = guide.node.getChildByName('dialogudeNode')
            ComicControl.ins.addComic(1, parentNode, callback);
        }
    }
    static Anim() {
        return async function (guide: GuideController, args: number | number[] | DialogueParam, callback?: Function) {
            const parentNode = guide.node.getChildByName('dialogudeNode')
            let GuideShowNode = parentNode.getChildByName("GuideShow")
            if (!GuideShowNode) {
                let GuideShow = await LoadResAsync('prefab/guide/GuideShow', Prefab)
                GuideShowNode = instantiate(GuideShow)
                GuideShowNode.name = "GuideShow";
                guide.node.active = true;
                parentNode.addChild(GuideShowNode)
            }
            const anim = GuideShowNode.getComponent(Animation);
            anim.play("guideShowAni");
            anim.on(Animation.EventType.FINISHED, e => {
                callback();
                anim.node.removeFromParent();
                anim.node.destroy();
            })
        }
    }
    static dialogueFunc(modal: boolean) {
        return async function (guide: GuideController, args: string, callback?: Function) {
            const parentNode = guide.node.getChildByName('dialogudeNode')
            let dialogueNode = parentNode.getChildByName("GuideDialogue")
            if (!dialogueNode) {
                let dialoguePre = await LoadResAsync('prefab/guide/GuideDialogue', Prefab)
                dialogueNode = instantiate(dialoguePre)
                dialogueNode.name = "GuideDialogue";
                guide.node.active = true;
                parentNode.addChild(dialogueNode)
            }
            let dialogue: GuideDialogue = dialogueNode.getComponent(GuideDialogue);
            if (modal) {
                dialogue.setDialogude(args, callback);
            } else {
                dialogue.setDialogude(args, null);
                callback();
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
    static ClickAnywhere(guide: GuideController, args, callback: Function) {
        const guideNode = guide.node;
        guide.fingerToNode(guideNode, false, false);
        guide.TargetNode = guideNode;
        guideNode.once(Node.EventType.TOUCH_END, (event) => {
            if (args === "CreateBullet") {
                // 复活所有小鸡
                // const roles = PlayerControl.ins.getRoles();
                // for (let i = 0; i < roles.length; i++) {
                //     // const abs = roles[i].info.abs;
                //     const heroId = roles[i].info.configTab.Id;
                //     EventMgr.emitFight(FightEvent.ReviveByItemid, heroId);
                //     // if(abs.isDead){
                //     //     EventMgr.emitFight(FightEvent.ReviveByItemid, heroId);
                //     // }
                // }
                const pos = tab.getData().GetKeyValue_ConfigTable().WanDaoLocation;
                let bulletTab = PlayerControl.ins.getLeader().info.skillPowers.createTypeAnyId(tab.PowerType.PowerType_BulletTable, 45) as BulletTab
                BulletControl.ins.clickEmitBullet(bulletTab, PlayerControl.ins.getLeader(), v3(pos[0], pos[1]))
            }
            guide.TargetNode = null;
            guideNode.targetOff(guideNode);
            callback();
        }, this, true);
    }
    protected static CircleClickNoClick() {
        return function (guide: GuideController, args: string, callback: Function) {
            guide.TargetNode = null;
            //定位节点
            guide.find(args, (node: Node, error) => {
                if (error) {
                    callback(error);
                    return;
                }
                //手指动画
                guide.fingerToNode(node, true, true, true);
                callback();
            });
        }
    }
    protected static clickFunc(fingerActive: boolean, holeActive: boolean, clickAnyWhere: boolean, coercive = true, isCircle?: boolean) {
        return function (guide: GuideController, args: string, callback: Function) {
            guide.TargetNode = null;
            //定位节点
            guide.find(args, (node: Node, error) => {
                if (error) {
                    callback(error);
                    return;
                }
                let touchNode = clickAnyWhere ? guide.node : node;
                // guide.setFingerNodeOffsetX(0);
                //手指动画
                let scale = 0;
                if (args === "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem1" || args === "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem0") {
                    scale = 0.9;
                }
                guide.fingerToNode(node, fingerActive, holeActive, isCircle, scale);
                guide.TargetNode = node;
                GuideController.ins.node_jump.active = true;
                touchNode.once(Node.EventType.TOUCH_END, (event) => {
                    log('节点被点击');
                    guide.TargetNode = null;
                    node.targetOff(node);
                    if (args === "FightRootView/rootNode/objects/Monster") {
                        const pos = node.getComponent(UITransform).convertToWorldSpaceAR(node.position)
                        PlayerControl.ins.getLeader().sendClickSkill(pos)
                    }
                    GuideController.ins.node_jump.active = false;
                    callback();
                }, node, true);
                if (!coercive) {
                    guide.touchMask.active = false;
                }
            });
        }
    }
}
export function IsInFightScene() {
    let scene = director.getScene()
    if (scene.name != "FightScene") {
        return false;
    } else {
        let rookie = scene.getComponentInChildren(FightScene)
        if (rookie && rookie.enabled) {
            return true;
        }
    }
    return false;
}
export function IsInMainScene() {
    let scene = director.getScene()
    if (scene.name != "MainScene") {
        return false;
    } else {
        let rookie = scene.getComponentInChildren(MainScene)
        if (rookie && rookie.enabled) {
            return true;
        }
    }
    return false;
}
export function EnableTouchMask() {
    GuideController.ins.touchMask.active = true;
    GuideController.ins.resetTouchMask();
}
export function DisableTouchMask() {
    GuideController.ins.touchMask.active = false;
}
export function WaitEnterScene(sceneName: string, callback: Function) {
    let scene = director.getScene();
    if (scene.name == sceneName) {
        callback()
    } else {
        WaitSceneLoaded(sceneName, callback)
    }
}
function WaitSceneLoaded(sceneName: string, callback: Function) {
    let checkFunc = function (name: string) {
        if (sceneName == name) {
            EventMgr.unLocal(LocalEvent.SceneLoaded, checkFunc, GuideController.ins)
            callback();
        }
    }
    EventMgr.onLocal(LocalEvent.SceneLoaded, checkFunc, GuideController.ins)
}
export function SkipCommand(step: any) {
    step.skip_cmd = true;
}
// 等待战斗资源加载完成
export function WaitFightResLoad(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
        EventMgr.onLocal(LocalEvent.FightResLoadComplete, (finish: boolean) => {
            resolve(finish)
        }, GuideController.ins, true)
    })
}
// 等待弹窗打开
export function WaitShowPop(): Promise<boolean> {
    EventMgr.unLocal(LocalEvent.ShowPop);
    return new Promise<boolean>(resolve => {
        EventMgr.onLocal(LocalEvent.ShowPop, (finish: boolean) => {
            EventMgr.unLocal(LocalEvent.ShowPop);
            resolve(finish)
        }, GuideController.ins, true)
    })
}
// 等待弹窗关闭
export function WaitHidePop(): Promise<boolean> {
    EventMgr.unLocal(LocalEvent.hidePop);
    return new Promise<boolean>(resolve => {
        EventMgr.onLocal(LocalEvent.hidePop, (finish: boolean) => {
            EventMgr.unLocal(LocalEvent.hidePop);
            resolve(finish)
        }, GuideController.ins, true)
    })
}
export function WaitHideHeroPop(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
        EventMgr.onLocal(LocalEvent.hideHeroPop, (finish: boolean) => {
            EventMgr.unLocal(LocalEvent.hideHeroPop);
            resolve(finish)
        }, GuideController.ins, true)
    })
}
// 等待出怪
export function WaitShowMonster(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
        EventMgr.onLocal(LocalEvent.ShowMonster, (finish: boolean) => {
            // 删除监听怪物出现事件
            EventMgr.unLocal(LocalEvent.ShowMonster);
            resolve(finish)
            GuideController.ins.showMonster = true;
        }, GuideController.ins, true)
    })
}
// 羽毛掉落
export function WaitJadeDrop(): Promise<boolean> {
    EventMgr.unLocal(LocalEvent.JadeDrop);
    return new Promise<boolean>(resolve => {
        EventMgr.onLocal(LocalEvent.JadeDrop, (finish: boolean) => {
            EventMgr.unLocal(LocalEvent.JadeDrop);
            resolve(finish)
        }, GuideController.ins, true)
    })
}
// 等待小鸡复活
export function WaitHeroRevive(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
        EventMgr.onLocal(LocalEvent.ReviveHero, (finish: boolean) => {
            EventMgr.unLocal(LocalEvent.ReviveHero);
            resolve(finish)
        }, GuideController.ins, true)
    })
}
// 等待boss出现
export function WaitBoss(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
        EventMgr.onFight(FightEvent.Boss_Enter, (finish: boolean) => {
            resolve(finish)
        }, GuideController.ins, true)
    })
}
// 等待英雄上阵
export function heroInTeam(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
        EventMgr.onLocal(LocalEvent.heroInTeam, (finish: boolean) => {
            EventMgr.unLocal(LocalEvent.heroInTeam);
            resolve(finish)
        }, GuideController.ins, true)
    })
}
// 等待战斗胜利
export function WaitFightWin(): Promise<boolean> {
    EventMgr.unLocal(LocalEvent.FightWin);
    return new Promise<boolean>(resolve => {
        EventMgr.onLocal(LocalEvent.FightWin, (finish: boolean) => {
            EventMgr.unLocal(LocalEvent.FightWin);
            resolve(finish)
        }, GuideController.ins, true)
    })
}
// 等待当前主界面只有一个mainView
export function waitOnlyMainView(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
        EventMgr.onLocal(LocalEvent.checkMainView, (finish: boolean) => {
            EventMgr.unLocal(LocalEvent.checkMainView);
            resolve(finish)
        }, GuideController.ins, true)
    })
}
export function DisableGuideController() {
    GuideController.ins.node.active = false;
}
export function EnableGuideController() {
    GuideController.ins.node.active = true;
}

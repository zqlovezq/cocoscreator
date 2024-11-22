// condition: IsInRookiePvP,

import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import Role from "../../Common/Role";
import { Command, DisableTouchMask, WaitLocalMsg, WaitPopLayer } from "../GuideCommand";
import GuideController from "../GuideController";

export const task = {
    name: '天赋引导',
    debug: false,
    // finish: false,
    condition: function() {
        if(Role.Instance.RoleData.level < 2) {
            return false;
        }

        let scene = cc.director.getScene()
        if(scene.name == "MainScene") {
            return true;
        }
        return false;
    },
    steps: [
        {
            //等待卡牌详情界面关闭
            onStart(callback) {
                let popName = "prefab_CardDetail"
                let node = cc.director.getScene().getChildByName(popName);
                if(node) {
                    this.skip_cmd = true
                    DisableTouchMask()
                    WaitLocalMsg(LOCAL_MESSAGE.DestroyPopLayer).then(name=>{
                        if(name == popName) {
                            //等待界面关闭
                            callback()
                        } else {
                            callback(`not the right poplayer: ${name}`)
                        }
                    })
                } else {
                    callback()
                }
            },
            command: { cmd: Command.Click, args: "toggleDeck" },
        },
        {
            desc: '对话',
            command: { cmd: Command.Dialogue, args: 600 },
        },
        {
            desc: '点击天赋入口',
            command: { cmd: Command.Click, args: "btn_learn_skill" },
            onEnd(callback) {
                WaitPopLayer("prefab_Talent", callback)
            }
        },
        {
            desc: '卡组说明',
            delayTime: 0.5,
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.Dialogue, args: { id: 601, autoHide: false } },
                { cmd: Command.FrameTips, args: "guideTeam" },
            ]},
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideFrameTips)
                cb();
            },
        },
        {
            desc: '等级说明',
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.Dialogue, args: 602 },
                { cmd: Command.FrameTips, args: "guideExp" },
            ]},
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideFrameTips)
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_EnableTalentScroll, false)
                cb();
            },
        },
        {
            desc: '点击天赋加点',
            delayTime: 0.2,
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.DialogueNonmodal, args: { id: 603, autoHide: false } },
                { cmd: Command.Click, args: "Node02/TalentCell/bt_click" },
            ]},
            onEnd(cb) {
                cb();
            },
        },
        {
            desc: '点击天赋说明',
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.DialogueNonmodal, args: 604 },
                { cmd: Command.Click, args: "Node02/TalentCell/bt_detail" },
            ]},
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_EnableTalentScroll, true)
                cb();
            },
        },
    ],
}
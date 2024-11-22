/*
 * @Descripttion: 
 */

import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import Role from "../../Common/Role";
import { Command, DisableTouchMask, SkipIfNotScene, WaitLocalMsg, WaitPopLayer } from "../GuideCommand";

export const task = {
    name: '上阵',
    debug:false,
    finish:false,
    skip: function () {
        let scene = cc.director.getScene()
        if(scene.name == "MainScene") {
            if(Role.Instance.RoleData.items.length >= 6) {
                if(!Role.Instance.IsPassGuideBranch(10004)){
                    Net.pushLoaclMessage(LOCAL_MESSAGE.GuideEnablePageViewEvent, false)
                }
                
                //有可上阵的卡牌
                return false;
            }
        }
        return true;
    },
    steps: [
        {
            desc: '点击英雄界面入口',
            delayTime: 0.2,
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.DialogueNonmodal, args: [701] },
                { cmd: Command.Click, args: "toggleDeck" },
            ]},
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                cb();
            }
        },

        {
            desc: '点击拉克头像',
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.DialogueNonmodal, args: [702] },
                { cmd: Command.Click, args: "ChangeTeamGuideSrc" },
            ]},
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                cb();
            }
        },
        {
            desc: '点击使用按钮',
            onStart(callback) {
                WaitPopLayer("prefab_CardDetail", callback)
            },
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.DialogueNonmodal, args: [703] },
                { cmd: Command.Click, args: "btn_use" },
            ]},
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                cb();
            }
        },
        
        {
            desc: '点击替换艾比',
            command: { cmd: Command.Parallel, args: [
                //{ cmd: Command.DialogueNonmodal, args: [704] },
                { cmd: Command.Click, args: "ChangeTeamGuideDst" },
            ]},
            onEnd(cb) {
                Role.Instance.FinishGuide(10004, true)
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                cb();
            }
        },
        {
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.DialogueNonmodal, args: [705] },
                { cmd: Command.Click, args: "toggleBattle" },
            ]},
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                cb();
            }
        },

        {
            desc: '点击战斗界面入口',
            onStart(callback) {
                DisableTouchMask();
                callback();
            },
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.DialogueNonmodal, args: [707] },
                { cmd: Command.ClickAppearFinger, args: "btnFight" },
            ]},
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.GuideEnablePageViewEvent, true)
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                cb();
            }
        },
    ],
}
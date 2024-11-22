import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import Role from "../../Common/Role";
//import PullCardResult from "../../PullCard/PullCardResult";
import { Command, DisableTouchMask, EnableTouchMask, SkipIfNotScene, WaitLocalMsg, WaitPopLayer } from "../GuideCommand";

export const task = {
    name: '升级卡牌引导',
    debug:false,
    skip: SkipIfNotScene("MainScene"),
    steps: [
        // {
        //     //检测宝箱开启界面是否关闭了
        //     delayTime: 1,
        //     command: { cmd: Command.None, args: "" },
        //     onEnd(cb) {
        //         let scene = cc.director.getScene();
        //         if(!scene.getComponentInChildren(PullCardResult)) {
        //             cb()
        //         } else {
        //             DisableTouchMask()
        //             WaitLocalMsg(LOCAL_MESSAGE.DestroyPopLayer).then(name=>{
        //                 if(name == "prefab_PullCardResult") {
        //                     EnableTouchMask()
        //                     cb()
        //                 }
        //             })
        //         }
        //     }
        // },
        /*{
            desc: '点击卡库',
            delayTime: 0.2,
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.DialogueNonmodal, args: [370] },
                { cmd: Command.Click, args: "toggleDeck" },
            ]},
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                cb();
            }
        },*/

        {
            desc: '升级说明引导',
            onStart(callback) {
                DisableTouchMask();
                WaitLocalMsg(LOCAL_MESSAGE.LocalMsg_ResetDeckLayer).then(node=>{
                    callback();
                })
            },
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.Dialogue, args: [370] },
            ]},
            onEnd(cb) {
                //Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                cb();
            }
        },
        {
            //检测哪些卡牌可以升级
            desc: '点击可升级英雄',
            onStart(callback) {
                WaitLocalMsg(LOCAL_MESSAGE.CanCardLvUp).then(node=>{
                    if(node) {
                        node.name = "CardLvUpTarget";
                        Net.pushLoaclMessage(LOCAL_MESSAGE.GuideEnablePageViewEvent, false)
                        callback();
                    } else {
                        callback("No Card Can LvUp")
                    }
                })
                Net.pushLoaclMessage(LOCAL_MESSAGE.CheckCardLvUp)
                Net.pushLoaclMessage(LOCAL_MESSAGE.CanCardLvUp, null)
            },
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.DialogueNonmodal, args: [371] },
                { cmd: Command.Click, args: "CardLvUpTarget" },
            ]},
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                cb();
            }
        },
        {
            //点击升级按钮
            desc: '点击升级',
            onStart(callback) {
                WaitPopLayer("prefab_CardDetail", callback)
            },
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.DialogueNonmodal, args: [372] },
                { cmd: Command.Click, args: "btn_uplv" },
            ]},
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                Role.Instance.FinishGuide(10007, true)
                cb();
            }
        },
        {
            desc: '点击任意位置关闭引导',
            delayTime: 0.5,
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.Dialogue, args: [706] },
                //{ cmd: Command.Click, args: "btn_back" },
            ]},

            onEnd(cb) {
                //Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                Net.pushLoaclMessage(LOCAL_MESSAGE.GuideEnablePageViewEvent, true)
                cb();
            }
        },
        // {
        //     delayTime: 0.5,
        //     command: { cmd: Command.Click, args: "btn_back" },
        // },
    ],
}
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { CaiHongData } from "../../../sdk/rainbow/CaiHongData";
import { Command, DisableGuideController, DisableTouchMask, IsInChessFightScene, WaitCombatDone, WaitConstructing, WaitEnterScene } from "../GuideCommand";

export const task = {
    name: '第1场战斗',
    debug: false,
    condition: IsInChessFightScene,
    steps: [
        {
            // desc: 'step1',
            onStart(callback) {
                WaitEnterScene("ChessFightScene", () => {
                    callback()
                })
            },
        },
        {
            //desc: step1 '欢迎来到疯狂棋士，您可以在棋盘中点亮的范围内放置您的棋子',
            delayTime: 1.5,
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: 100 },
                    { cmd: Command.LightChess }
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue);
                CaiHongData.guide_complete("100","step1","101");
                cb();
            }
        },
        {
            //desc: step2 '每次会在您的棋盒中随机2颗棋子，请选择一颗放入棋盘',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: 101 },
                    { cmd: Command.Click, args: "UI_node/bottom_node/cardnum_node/guide_step_2" }
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                CaiHongData.guide_complete("100","step2","102");
                cb();
            }
        },
        {
            onStart(callback) {
                DisableTouchMask();
                callback()
            },
            delayTime: 0.1,
            //desc: step3 '请将投弹棋子棋子拖动放至指定位置1',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.ChessMove, args: { step: 1, id: 102 } },
                ]
            },
            onEnd(cb) {
                CaiHongData.guide_complete("100","step3","103");
                cb();
            },
        },

        {
            //desc: step4 '放置好的棋子，无法移动，也无法改变，请谨慎选择',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: 103 },
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                CaiHongData.guide_complete("100","step4","104");
                cb();
            }
        },

        {
            //desc: step5 '放置完成后，会重新刷新两颗棋子，请继续放置棋子',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: 105 },
                    { cmd: Command.Click, args: "UI_node/bottom_node/cardnum_node/guide_step_2" }
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                CaiHongData.guide_complete("100","step5","105");
                cb();
            }
        },

        {
            onStart(callback) {
                DisableTouchMask();
                callback()
            },
            delayTime: 0.1,
            //desc: step6 '请将投弹棋子棋子拖动放至指定位置1',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.ChessMove, args: { step: 2, id: 106 } },
                ]
            },
            onEnd(cb) {
                CaiHongData.guide_complete("100","step6","106");
                cb();
            },
        },
        {
            onStart(callback) {
                DisableTouchMask();
                callback()
            },
            delayTime: 0.1,
            //desc: step7 '请将投弹棋子棋子拖动放至指定位置1',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.ChessMove, args: { step: 3, id: 107 } },
                ]
            },
            onEnd(cb) {
                CaiHongData.guide_complete("100","step7","107");
                cb();
                DisableGuideController();
            },
        },
        {
            // desc:step8 '当没有可以战斗的棋子，或者战斗时间结束时，棋盘上剩余棋子多的一方，为本回合胜利者',
            onStart(callback) {
                WaitCombatDone().then(() => {
                    callback()
                })
            },
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: 108 },
                    { cmd: Command.Click, args: "UI_node/bottom_node/cardnum_node/guide_step_8" },
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                Net.pushLoaclMessage(LOCAL_MESSAGE.GUIDE_MAIN, 10)
                CaiHongData.guide_complete("100","step8","108");
                cb();
            },
        },
        {
            // desc:step9 '获胜的一方，将消耗对手一格体力值，将对手的体力值消耗完毕，将赢得本场对弈',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: 109 },
                    { cmd: Command.Click, args: "UI_node/bottom_node/cardnum_node/guide_step_9" },
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                CaiHongData.guide_complete("100","step9","109");
                cb();
            },
        },
        {
            // desc:step10 '将相同的棋子放在一起，可以提高合成等级，提升棋子的能力，我们来尝试提升投弹棋子的等级,
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: 110 },
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                CaiHongData.guide_complete("100","step10","110");
                cb();
            },
        },
        {
            onStart(callback) {
                DisableTouchMask();
                callback()
            },
            delayTime: 0.1,
            //desc: step11 '把棋子摆放到指定位置后',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.ChessMove, args: { step: 4, id: 116 } },
                ]
            },
            onEnd(cb) {
                CaiHongData.guide_complete("100","step11","111");
                cb();
            },
        },
        {
            onStart(callback) {
                DisableTouchMask();
                callback()
            },
            delayTime: 0.1,
            //desc: step12 '继续提升投弹棋子的等级',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.ChessMove, args: { step: 5, id: 111 } },
                ]
            },
            onEnd(cb) {
                CaiHongData.guide_complete("100","step12","112");
                cb();
            },
        },
        {
            onStart(callback) {
                DisableTouchMask();
                callback()
            },
            delayTime: 0.1,
            //desc: step13 '继续提升投弹棋子的等级',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.ChessMove, args: { step: 5, id: 111 } },
                ]
            },
            onEnd(cb) {
                CaiHongData.guide_complete("100","step13","113");
                cb();
            },
        },
        {
            //desc: step14 '每个棋子都有自己的攻击范围，点击棋盘中的棋子可以查看攻击范围',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: 112 },
                    { cmd: Command.ClickNoMask, args: "Chessboard/map_node/map_layout/other_node7/4_6" },
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                CaiHongData.guide_complete("100","step14","114");
                cb();
            },
        },
        {
            //desc: step15 '剑棋子虽然攻击力高，但是攻击范围窄',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: 113 },
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                CaiHongData.guide_complete("100","step15","115");
                cb();
            },
        },
        {
            //desc: step16 '不同棋子攻击范围各不相同，点击弓箭手查看攻击范围',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: 117 },
                    { cmd: Command.ClickNoMask, args: "Chessboard/map_node/map_layout/me_node11/6_6" },
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                CaiHongData.guide_complete("100","step16","116");
                cb();
            },
        },
        {
            //desc: step17 '利用射程差距，可以做到最基础的棋子克制，从而获得优势。',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: 114 },
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                Net.pushLoaclMessage(LOCAL_MESSAGE.GUIDE_MAIN, 0);
                DisableGuideController();
                CaiHongData.guide_complete("100","step17","117");
                cb();
            },
        },
        {
            onStart(callback) {
                WaitConstructing().then(() => {
                    callback()
                })
            },
            //desc: step18 '尝试通过自己摆放棋子来赢得本场对弈吧',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: 115 },
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                CaiHongData.guide_complete("100","step18","118");
                cb();
            },
        }
    ]
}
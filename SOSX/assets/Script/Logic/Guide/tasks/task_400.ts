/*
 * @Descripttion: 主场景 开启宝箱引导
 */
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import {Net} from "../../../Protocol/Net";
import { CaiHongData } from "../../../sdk/rainbow/CaiHongData";
import { Command, WaitEnterScene} from "../GuideCommand";

export const task = {
    name: '上阵棋子',
    debug:false,
    steps: [
        {
            onStart(callback) {
                WaitEnterScene("MainScene", () => {
                    callback()
                })
            },
        },
        {
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.NewClick, args: {step:5,rect:{x:520,y:80,width:160,height:160},id: 208,mask:true}},
                ]
            },
            onEnd(cb) {
                CaiHongData.guide_complete("400","step1","401");
                cb();
            }
        },
        {
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.NewClick, args: {step:6,rect:{x:100,y:750,width:160,height:220},id: 209,mask:true}},
                ]
            },
            onEnd(cb) {
                CaiHongData.guide_complete("400","step2","402");
                cb();
            }
        },
        {
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.NewClick, args: {step:7,rect:{x:473,y:442,width:216,height:90},id: 210,mask:false}},
                ]
            },
            onEnd(cb) {
                CaiHongData.guide_complete("400","step3","403");
                cb();
            }
        },
        {
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.NewClick, args: {step:8,rect:{x:225,y:1090,width:140,height:140},id: 211,mask:true}},
                ]
            },
            onEnd(cb) {
                CaiHongData.guide_complete("400","step4","404");
                cb();
            }
        },
        {
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.NewClick, args: {step:9,rect:{x:360,y:80,width:160,height:160},id: 212,mask:true}},
                ]
            },
            onEnd(cb) {
                CaiHongData.guide_complete("400","step5","405");
                cb();
            }
        },
        {
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: 213 },
                ]
            },
            onEnd(cb) {
                console.log("引导结束");
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                CaiHongData.guide_complete("400","step6","406");
                cb();
            }
        },
    ],
}
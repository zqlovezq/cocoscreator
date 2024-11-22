/*
 * @Descripttion: 主场景 开启宝箱引导
 */
import { CaiHongData } from "../../../sdk/rainbow/CaiHongData";
import { Command, WaitEnterScene} from "../GuideCommand";

export const task = {
    name: '天梯领奖',
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
            //desc: step1 '现在正式开启你的成长之路吧，你的每次胜利都会获得奖励',
            delayTime:0.5,
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.NewClick, args: {step:1,rect:{x:360,y:925,width:188,height:188},id: 205,mask:true}},
                ]
            },
            onEnd(cb) {
                CaiHongData.guide_complete("200","step1","201");
                cb();
            }
        },
        {
            //desc: step2 '点击领取的第一份奖励',
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.NewClick, args: {step:2,rect:{x:360,y:250,width:720,height:263},id: 206,mask:true}},
                ]
            },
            onEnd(cb) {
                CaiHongData.guide_complete("200","step2","202");
                cb();
            }
        },

    ],
}
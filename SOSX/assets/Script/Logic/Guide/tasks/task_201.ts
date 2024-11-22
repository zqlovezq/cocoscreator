/*
 * @Descripttion: 主场景 开启宝箱支线
 */
import { Command} from "../GuideCommand";

export const task = {
    name: '领取奖励',
    debug:false,
    steps: [
        {
            onStart(callback) {
                callback()
            },
        },
        {
            //desc: step3 '恭喜你获得了一颗新的棋子，每颗棋子都有独特的能力',
            delayTime:0.1,
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.NewClick, args: {step:3,rect:{x:360,y:300,width:216,height:90},id: 207,mask:false}},
                ]
            },
            onEnd(cb) {
                cb();
            }
        },
        {
            //desc: step4 '强制点击关闭按钮',
            delayTime:0.1,
            command: {
                cmd: Command.Parallel, args: [
                    { cmd: Command.NewClick, args: {step:4,rect:{x:80,y:60,width:100,height:100},mask:true}},
                ]
            },
            onEnd(cb) {
                cb();
            }
        },
    ],
}
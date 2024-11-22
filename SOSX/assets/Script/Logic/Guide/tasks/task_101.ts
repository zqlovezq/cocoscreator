/*
 * @Descripttion: 
 */
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { Command, WaitEnterScene } from "../GuideCommand";

export const task = {
    name: '引导训练',
    debug: false,
    //finish: false,
    steps: [
        {
            onStart(callback) {
                WaitEnterScene("MainScene", callback)
            },
            //desc: '点击训练',
            command: { 
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: [200] },
                    { cmd: Command.Click, args: "btnGuideFight" },
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                cb();
            }
        },
    ],
}
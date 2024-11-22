/*
 * @Descripttion: 
 */

import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import Role from "../../Common/Role";
import { Command, DisableTouchMask, EnableTouchMask, WaitEnterScene } from "../GuideCommand";

export const task = {
    name: '引导点击对战，进入第三场战斗',
    debug:false,
	finish:false,
    //skip: SkipIfNotScene("MainScene"),
    steps: [
		{
			onStart(callback) {
				EnableTouchMask()
                WaitEnterScene("MainScene", callback)
            },
			
			desc: '点击对战按钮',
            command: { 
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: [373] },
                    { cmd: Command.Click, args: "btnFight" },
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                cb();
            }
           
		},
    ],
}
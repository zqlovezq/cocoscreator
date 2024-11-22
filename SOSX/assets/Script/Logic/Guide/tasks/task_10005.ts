import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import Role from "../../Common/Role";
import { Command, GuideCommand, SkipIfNotScene, WaitEnterScene } from "../GuideCommand";
import { GuideStep } from "../GuideConfig";
import GuideController from "../GuideController";

export const task = {
    name: '非强制引导训练',
    debug: false,
    finish: false,
    skip: function ():boolean {
        if(Role.Instance.RoleData.guideTrunk >= GuideStep.Fight_4) {
            return true
        }
        return SkipIfNotScene("MainScene")()
    },
    steps: [
        {
            onStart(callback) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.EnablePageViewTouch, true) //允许主界面滑动
                callback()
            },
            command: { cmd: Command.ClickNoncoercive, args: "btnGuideFight" },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.EnablePageViewTouch, false)
                cb();
            }
        },
    ],
}
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { Command, DisableTouchMask, WaitEnterScene, WaitLocalMsg } from "../GuideCommand";
import GuideController from "../GuideController";

export const task = {
    name: '领取训练奖励',
    debug: false,
    condition: function() {
        let scene = cc.director.getScene()
        if(scene.name == "MainScene") {
            return true;
        }
        return false;
    },
    steps: [
        {
            desc: '点击领取奖励',
            onStart(callback) {
                GuideController.Instance.CancelGuideOnSceneChanged()
                Net.pushLoaclMessage(LOCAL_MESSAGE.EnablePageViewTouch, true) 
                callback()
            },
            command: { cmd: Command.ClickNoncoercive, args: "btnGuideReward" },
        },
        {
            onStart(callback) {
                DisableTouchMask();
                WaitLocalMsg(LOCAL_MESSAGE.TakeGuideReward).then(()=>{
                    callback()
                })
            },
            onEnd(cb) {
                GuideController.Instance.scheduleOnce(()=>{
                    Net.pushLoaclMessage(LOCAL_MESSAGE.RefreshBattleLayerGuide)
                })
                cb();
            }
        },
    ],
}
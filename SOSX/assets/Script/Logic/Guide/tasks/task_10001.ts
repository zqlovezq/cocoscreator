/*
 * @Descripttion: 第二场战斗后的 开启宝箱引导
 */
import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { Command, SkipIfNotScene, WaitEnterScene, WaitLocalMsg, WaitPopLayer } from "../GuideCommand";

export const task = {
    name: '解锁宝箱',
    debug:false,
    skip: SkipIfNotScene("MainScene"),
    steps: [
        {
            onStart(callback) {
                //查看是否有可以解锁的宝箱
                Net.Send(proto.Ptl.GetRankPackageInfoReq, new proto.Msg_GetRankPackageInfoReq())
                WaitLocalMsg(LOCAL_MESSAGE.OnPackageInfo).then(msg=>{
                    if (msg && msg instanceof proto.Msg_GetRankPackageInfoRsp) {
                        if(!msg.rankBoxList || msg.rankBoxList.length == 0 || msg.rankBoxList[0].boxId < 0) {
                            callback("no box")
                            return
                        }
                    }
                    callback()
                })
            },
        },
        {
            desc: '点击宝箱',
            delayTime: 0.5,
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.DialogueNonmodal, args: [350] },
                { cmd: Command.Click, args: "timeboxsnode0/emptynode/background" },
                //{ cmd: Command.ReportedEvent, args: "10001_点击宝箱" },
            ]},
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                cb();
            }
        },
        {
            desc: '点击解锁按钮',
            onStart(callback) {
                WaitPopLayer("prefab_timeboxdetail", callback)
            },
            delayTime: 0.2,
            command: { 
                cmd: Command.Parallel, args: [
                    { cmd: Command.DialogueNonmodal, args: [351] },
                    { cmd: Command.Click, args: "openunlock" },
                ]
            },
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                cb();
            }
        },
    ],
}
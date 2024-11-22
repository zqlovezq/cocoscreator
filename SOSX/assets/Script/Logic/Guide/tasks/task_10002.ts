import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import Role from "../../Common/Role";
import { NodeLayerName } from "../../Main/MainScene";
import { Command, DisableTouchMask, EnableTouchMask, SkipCommand, SkipIfNotScene, WaitLocalMsg } from "../GuideCommand";
import GuideController from "../GuideController";

let waitingUnlockBox = false;

export const task = {
    name: '开启宝箱',
    debug:false,
    skip: SkipIfNotScene("MainScene"),
    steps: [
        {
            onStart(callback) {
                //查看是否有宝箱
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
            delayTime: 1, 
            command: { cmd:Command.None, args:""},
        },
        {
            //检测宝箱是否解锁完成了
            onStart(callback) {
                GuideController.Instance.CancelGuideOnSceneChanged()
                WaitLocalMsg(LOCAL_MESSAGE.RankBoxUnlocked, false).then(index=>{
                    waitingUnlockBox = false;
                    if(index == 0) {
                        callback()
                    } else {
                        callback("no unlocked")
                    }
                })
                waitingUnlockBox = true;
                Net.pushLoaclMessage(LOCAL_MESSAGE.CheckRankBoxUnlocked)
                GuideController.Instance.scheduleOnce(()=>{
                    if(waitingUnlockBox) {
                        Net.pushLoaclMessage(LOCAL_MESSAGE.RankBoxUnlocked, -1)
                    }
                }, 8)
            },
            onEnd(cb) {
                cb();
            }
        },
        {
            //检测当前是不是在BattleLayer
            onStart(callback) {
                Net.listenLoaclMessage(LOCAL_MESSAGE.MainScenePage, page=>{
                    if(page == NodeLayerName.BattleLayer) {
                        //如果已经在battlelayer了，不用再引导这一步
                        SkipCommand(this)
                    }
                    callback()
                }, GuideController.Instance, true)
                Net.pushLoaclMessage(LOCAL_MESSAGE.CheckMainScenePage)
            },
            command: { cmd: Command.Click, args: "toggleBattle" },
        },
        {
            desc: '点击宝箱',
            command: { cmd: Command.Parallel, args: [
                { cmd: Command.DialogueNonmodal, args: [360] },
                { cmd: Command.Click, args: "timeboxsnode0/emptynode/background" },
            ]},
            onEnd(cb) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.HideDialogue)
                cb();
            }
        },
        {
            onStart(callback) {
                //等待卡箱协议返回
                WaitLocalMsg(LOCAL_MESSAGE.RankBoxOpen).then(()=>{
                    Role.Instance.FinishGuide(10002, true)
                    DisableTouchMask()
                    callback()
                })
            },
            onEnd(cb) {
                WaitLocalMsg(LOCAL_MESSAGE.DestroyPopLayer).then(name=>{
                    if(name == "prefab_PullCardResult") { // TODO: zhibo+@20230404
                        //等待界面关闭
						GuideController.Instance.scheduleOnce(()=>{
							Net.pushLoaclMessage(LOCAL_MESSAGE.RefreshBattleLayerGuide)
						})

                        GuideController.Instance.ReportEvent("10002_点击关闭返回主界面");
                        cb()
                    }
                })
            }
        },
    ]
}
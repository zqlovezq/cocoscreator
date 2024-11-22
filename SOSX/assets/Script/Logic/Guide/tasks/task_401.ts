import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage"
import changeName from "../../Common/changeName"
import UnlockAccelerateEffect from "../../Common/UnlockAccelerateEffect"
import RankLevelPromote from "../../Season/RankLevelPromote"
import { showPopLayer } from "../../Utils/GameUtils"
import { Command, DisableTouchMask, WaitEnterScene, WaitLocalMsg } from "../GuideCommand"

export const task = {
    name: '起名字',
    debug: false,
    steps: [
        {
            onStart(callback) {
                WaitEnterScene("MainScene", callback)
            },
        },
        // {
        //     //检测是否弹出了RankLevelPromot
        //     delayTime: 0.1,
        //     onEnd(cb) {
        //         let scene = cc.director.getScene();
        //         if(!scene.getComponentInChildren(RankLevelPromote)) {
        //             cb()
        //         } else {
        //             DisableTouchMask()
        //             WaitLocalMsg(LOCAL_MESSAGE.DestroyPopLayer).then(name=>{
        //                 if(name == "prefab_RankLevelPromot") {
        //                     cb()
        //                 }
        //             })
        //         }
        //     }
        // },
        // {
        //     //检测是否弹出了RankLevelPromot
        //     delayTime: 0.1,
        //     onEnd(cb) {
        //         let scene = cc.director.getScene();
        //         if(!scene.getComponentInChildren(UnlockAccelerateEffect)) {
        //             cb()
        //         } else {
        //             DisableTouchMask()
        //             WaitLocalMsg(LOCAL_MESSAGE.DestroyPopLayer).then(name=>{
        //                 if(name == "prefab_UnlockAccelerateEffect") {
        //                     cb()
        //                 }
        //             })
        //         }
        //     }
        // },
        {
            desc: '对话',
            command: { cmd: Command.Dialogue, args: [420] },
        },
        {
            desc: '起名',
            onStart(callback) {
                showPopLayer("prefab/changeName").then(node=>{
                    let nameCom = node.getComponent(changeName)
                    nameCom.hideCloseBtn()
                    DisableTouchMask()
                    callback()
                })
            },
            onEnd(cb) {
                WaitLocalMsg(LOCAL_MESSAGE.DestroyPopLayer).then(name=>{
                    if(name == "prefab_changeName") {
                        cb()
                    }
                })
            }
        },
    ],
}
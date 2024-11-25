/**
 * 
 */

import { Component, Prefab, _decorator, Animation, director, instantiate, isValid, log, resources, Layers } from "cc";
import { LoadResAsync, ResMgr } from "../../logic/mgr/ResMgr";
import { tab } from "../../Table/table_gen";

const NODE_NAME = 'Waiting'
const PREFAB_URL = 'prefab/Waiting'
const { ccclass, property } = _decorator;

export enum WaitingTag {
    Login = "Login",
    PAY = "PAY"
}


@ccclass
export default class Waiting extends Component {
    protected static tagDict: tab.Dictionary<string, object> = new tab.Dictionary<string, object>()
    protected static toBeShown: boolean = false

    /* 显示等待界面
     * @param disconectDuration 超过这个时间会断线，传0表示不断线
     */
    public static async Show(tag: string, disconectDuration: number = 15, delay: number = 1) {
        Waiting.tagDict.setValue(tag, null)
        if (Waiting.getWaitingNode()) {
            return
        }

        Waiting.toBeShown = true;
        let res: Prefab = ResMgr.get(PREFAB_URL, Prefab)
        if (!res) {
            res = await LoadResAsync(PREFAB_URL, Prefab)
            if (!Waiting.toBeShown || Waiting.getWaitingNode()) {
                return
            }
        }
        if (res) {
            let waitingNode = instantiate(res);
            waitingNode.layer = Layers.Enum.UI_2D;
            let waiting = waitingNode.getComponent(Waiting)
            waitingNode.name = NODE_NAME;
            director.getScene().addChild(waitingNode);
            waiting.playAnim(delay)

            if (disconectDuration > 0) {
                waiting.scheduleOnce(() => {
                    if (isValid(waitingNode) && waitingNode.parent != null) {
                        //断线
                        log(`!!! Waiting Timeout !!!`)
                        Waiting.Disconnect()
                    }
                }, disconectDuration)
            }
            console.log(waitingNode);
        }
    }

    public static Disconnect() {
        // Net.Disconnect()
        // Waiting.Hide("", true)
    }

    /**
     * 显示等待界面，当收到指定协议时关闭
     * @param ptl 协议号
     */
    public static WaitPtl(ptl: number, disconectDuration: number = 15, delay: number = 1) {
        Waiting.Show(`waitptl_${ptl}`, disconectDuration, delay);
    }

    /**
     * 关闭等待界面
     * @param tag 与Show函数传入的tag一致才能关闭界面
     * @param force 无论tag值是什么，强制关闭等待界面
     */
    public static Hide(tag: string, force: boolean = false) {
        if (!Waiting.toBeShown) {
            return
        }

        if (force) {
            Waiting.tagDict.clear()
        } else {
            Waiting.tagDict.remove(tag)
            if (!Waiting.tagDict.isEmpty()) {
                return
            }
        }

        Waiting.toBeShown = false
        let watingNode = Waiting.getWaitingNode()
        if (watingNode) {
            watingNode.removeFromParent()
            watingNode.destroy()
        }
    }

    /*  */
    protected static getWaitingNode() {
        return director.getScene().getChildByName(NODE_NAME);
    }

    /*  */
    protected playAnim(delay: number) {
        let anim = this.node.getComponent(Animation);
        if (delay <= 0) {
            anim.play(anim.defaultClip.name)
        } else {
            anim.play();
        }
    }
}

/*  */
// Net.RecvCallback = function (ptl: number) {
//     Waiting.Hide(`waitptl_${ptl}`)
// }
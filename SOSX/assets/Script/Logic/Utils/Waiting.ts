/**
 * 
 */

import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { LoadResAsync } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;
const NODE_NAME = 'Waiting'
const PREFAB_URL = 'prefab/Waiting'

@ccclass
export default class Waiting extends cc.Component {
    protected static tagDict:tab.Dictionary<string, object> = new tab.Dictionary<string, object>()
    protected static toBeShown:boolean = false

    /* 显示等待界面
     * @param disconectDuration 超过这个时间会断线，传0表示不断线
     */
    public static async Show(tag:string, disconectDuration:number = 15, delay:number = 1) {
        Waiting.tagDict.setValue(tag, null)
        if(Waiting.getWaitingNode()) {
            return
        }

        Waiting.toBeShown = true;
        let res:cc.Prefab = cc.resources.get(PREFAB_URL, cc.Prefab)
        if(!res) {
            res = await LoadResAsync(PREFAB_URL, cc.Prefab)
            if (!Waiting.toBeShown || Waiting.getWaitingNode()) {
                return
            }
        }
        if(res) {
            let waitingNode:cc.Node = cc.instantiate(res);
            let waiting = waitingNode.addComponent(Waiting)
            waitingNode.name = NODE_NAME;
            cc.director.getScene().addChild(waitingNode, 9999);
            waiting.playAnim(delay)

            if(disconectDuration > 0) {
                waiting.scheduleOnce(()=>{
                    if(cc.isValid(waitingNode) && waitingNode.parent != null) {
                        //断线
                        cc.log(`!!! Waiting Timeout !!!`)
                        Net.Disconnect()
                        Waiting.Hide("", true)
                    }
                }, disconectDuration)
            }
        }
    }

    /**
     * 显示等待界面，当收到指定协议时关闭
     * @param ptl 协议号
     */
    public static WaitPtl(ptl:number, disconectDuration:number = 15, delay:number = 1) {
        Waiting.Show(`waitptl_${ptl}`, disconectDuration, delay);
    }
    
    /**
     * 关闭等待界面
     * @param tag 与Show函数传入的tag一致才能关闭界面
     * @param force 无论tag值是什么，强制关闭等待界面
     */
    public static Hide(tag:string, force:boolean = false) {
        if(!Waiting.toBeShown) {
            return
        }

        if(force) {
            Waiting.tagDict.clear()
        } else {
            Waiting.tagDict.remove(tag)
            if(!Waiting.tagDict.isEmpty()) {
                return
            }
        }

        Waiting.toBeShown = false
        let watingNode = Waiting.getWaitingNode()
        if(watingNode) {
            watingNode.removeFromParent()
            watingNode.destroy()
        }
    }

    /*  */
    protected static getWaitingNode(): cc.Node {
        return cc.director.getScene().getChildByName(NODE_NAME);
    }

    /*  */
    protected playAnim(delay:number) {
        let anim = this.node.getComponent(cc.Animation)
        
        if(delay <= 0) {
            let state = anim.getAnimationState(anim.defaultClip.name)
            anim.play(anim.defaultClip.name, state.duration)
        } else {
            let state = anim.play()
            state.speed = state.duration / delay
        }
    }
}

/*  */
Net.RecvCallback = function(ptl:number) {
    Waiting.Hide(`waitptl_${ptl}`)
}
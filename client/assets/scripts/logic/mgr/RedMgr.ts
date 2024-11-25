
/**
 * 红点管理类
 * 定义RedDotType枚举，RedMgr.add(RedData) 注册红点节点， 通过 refreshEvent 计算红点数据并同步UI
 */

import { Node, Sprite, UITransform, Vec2, macro, v3 } from "cc"
import { RedDotType } from "../red/RedDotType"

/**
 * 红点观察者结构
 */
export interface RedObserver {
    eventNames: any
    nodeParent: Node
    redNode: Node
}

export interface RedData {
    /**
     * 节点
     */
    node: Node
    /**
     * 红点事件
     */
    event: RedDotType
    /**
     * 事件结构子key 默认值all, 只要当前事件结构有一个为true， 就显示红点
     */
    child?: String
    /**
     * 事件结构子key 默认值all, 只要当前事件结构有一个为true， 就显示红点
     */
    child1?: String
    /**
     * 节点的一些属性（缩放、偏移（原始位置在节点右上角））
     */
    transform?: { redNode: Node, scale?: number, offset?: Vec2 }
}

/**
 * 红点事件,最高2层结构 引用 RedDotType
 */

/**
 * 红点管理
 */
export class RedMgr {
    private static instance: RedMgr = null;

    public static get ins() {
        if (this.instance == null) {
            this.instance = new RedMgr();
        }
        return this.instance;
    }

    observersNodes: RedObserver[] //一个红点对应N个事件
    states: any[] //事件对应的红点数据
    calculateFbs: any[] //红点计算函数
    private constructor() {
        this.observersNodes = []
        this.states = []
        this.calculateFbs = []
        for (const key in RedDotType) {
            this.states[RedDotType[key]] = {}
        }
    }

    registerCalculateFb(event: RedDotType, fb: Function, target: any) {
        this.calculateFbs[event] = { target: target, fb: fb }
    }

    /**
     * 刷新红点
     * @param event 事件名
     */
    static refreshEvent(event: RedDotType, state?: any) {
        var stateToChange = RedMgr.ins.states[event]
        //todo 红点结构最高2层 stateToChange = bool 、{key1:bool,key2:bool}
        let targetFb: any = RedMgr.ins.calculateFbs[event]
        if (targetFb) {
            stateToChange = targetFb.fb.call(targetFb.target, stateToChange);
        } else {
            console.error('未找到红点计算函数,请先注册计算函数,RedDotType:' + RedDotType[event])
        }

        if (state != undefined) {
            stateToChange = state
        }

        RedMgr.ins.states[event] = stateToChange
        RedMgr.ins.judge(event)
    }

    /**
     * 注册红点
     * @param args 
     */
    static add(args: RedData) {
        args.child = args.child || "all"

        var obs = RedMgr.ins.getHasObs(args.node)
        if (obs == null) {
            var redNode = args.transform.redNode || RedMgr.ins.getRedNode(args.node, args.transform)
            obs = { eventNames: {}, nodeParent: args.node, redNode: redNode }
            RedMgr.ins.observersNodes.push(obs)
        }
        obs.eventNames[args.event] = { child: args.child, isActive: false }
        RedMgr.ins.judge(args.event)
    }

    judge(event: RedDotType) {
        for (let index = 0; index < this.observersNodes.length; index++) {
            const v = this.observersNodes[index];
            if (!(v.redNode && v.redNode.isValid)) {
                continue;
            }
            if (v.eventNames[event]) {
                let toAdd = this.isRed(event, v.eventNames[event].child, v.eventNames[event].child2)


                v.eventNames[event].isActive = toAdd

                var isActive = false
                for (const key in v.eventNames) {
                    const v1 = v.eventNames[key];
                    if (v1.isActive) {
                        isActive = true
                    }
                }
                v.redNode.active = isActive
            }
        }
    }

    isRed(key: RedDotType, child: string = "all", child2: string = "all") {
        let eventState = this.states[key]
        var toAdd = false
        if (typeof eventState == "boolean") {
            toAdd = eventState
        } else {
            if (child == "all") {
                for (const key in eventState) {
                    if (eventState[key]) {
                        if (typeof (eventState[key]) == "object") {
                            for (const stateKey in eventState[key]) {
                                if (eventState[key][stateKey]) {
                                    toAdd = true
                                    break
                                }
                            }
                        } else {
                            toAdd = true
                            break
                        }
                    }
                }
            } else {
                if (eventState[child]) {
                    if (typeof (eventState[child]) == "object") {
                        if (child2 == "all") {
                            for (const key in eventState[child]) {
                                if (eventState[child][key]) {
                                    toAdd = true
                                    break
                                }
                            }
                        } else {
                            toAdd = eventState[child][child2]
                        }
                    } else {
                        toAdd = true
                    }
                }
            }
        }
        return toAdd
    }

    static remove(node: Node) {
        var self = RedMgr.ins
        for (let index = self.observersNodes.length - 1; index >= 0; index--) {
            const v = self.observersNodes[index];
            if (v.nodeParent == node) {
                self.observersNodes.splice(index, 1)
            }
        }
    }

    getHasObs(node: Node): RedObserver {
        for (let index = 0; index < this.observersNodes.length; index++) {
            const v = this.observersNodes[index];
            if (v.nodeParent == node) {
                return v
            }
        }
        return null
    }

    getRedNode(node: Node, transform: any) {
        var tmpNode = node.getChildByName("red_azhe")
        if (tmpNode == null) {
            tmpNode = new Node("red_azhe")
            let uitrans = tmpNode.addComponent(UITransform)
            uitrans.anchorX = uitrans.anchorY = 0.5

            var pos = v3()

            if (uitrans.anchorX == 0) {
                pos.x = uitrans.width
            } else {
                pos.x = uitrans.width / 2
            }

            if (uitrans.anchorY == 1) {
                pos.y = 0
            } else if (uitrans.anchorY == 0) {
                pos.y = uitrans.height
            } else {
                pos.y = uitrans.height / 2
            }

            if (transform.scale) {
                tmpNode.scale = transform.scale
            }
            if (transform.offset) {
                pos.x = pos.x + transform.offset.x
                pos.y = pos.y + transform.offset.y
            }
            tmpNode.position = pos
            let spr = tmpNode.addComponent(Sprite)
            if (transform.image) {
                spr.spriteFrame = transform.image
            } else {
                spr.setTexture("Chess/UI/Common/dot")
            }
            node.addChild(tmpNode)
        }
        return tmpNode
    }
}

import { _decorator, Tween, Vec3, Node, tween, v3 } from 'cc';
const { ccclass, property } = _decorator;

// //震屏
export interface ShakeActionData {
    delay?: number
    duration: number
}
// /**
// * 动作枚举
// */
export enum AcitonType {
    shake = 1 //震屏
}

@ccclass('ShakeAction')
export class ShakeAction {
    shakeTween: any
    shakeNowPos: Vec3
    shakeNode: Node
    timeoutHandler: number
    acs: ShakeActionData[]
    acIndex: number
    // /**
    // * 播放震屏
    // * @param acNode 动作节点
    // * @param acs 动作序列
    // */
    runActions(acNode: Node, acs: ShakeActionData[]) {
        this.shakeNode = acNode
        this.acs = acs
        this.runOne(0)
    }
    // /**
    // * 停止震屏
    // */
    stopAll() {
        this.stopShake()
        this.acs = null
    }
    playNext() {
        this.acIndex = this.acIndex + 1
        this.runOne(this.acIndex)
    }
    runOne(index: number) {
        if (this.acs == null) {
            return
        }
        this.acIndex = index
        var acData = this.acs[index]
        if (acData == null) {
            return
        }
        if (acData.delay) {
            tween(this.shakeNode)
                .delay(acData.delay)
                .call(()=>{
                    this.runAction(this.shakeNode, acData.duration)
                })
                .tag(-999)
                .start()
        } else {
            this.runAction(this.shakeNode, acData.duration)
        }
    }
    // /**
    // *
    // * @param acNode 动作节点
    // * @param duration 时间（秒）
    // */
    runAction(acNode: Node, duration: number, callback?: any) {
        this.stopShake()

        this.shakeNode = acNode
        this.shakeNowPos = new Vec3(acNode.position)
        
        this.shakeTween = tween(acNode).repeatForever(
            tween()
                .to(0.02, { position: v3(5, 7) })
                .to(0.02, { position: v3(-6, 7) })
                .to(0.02, { position: v3(-13, 3) })
                .to(0.02, { position: v3(3, -6) })
                .to(0.02, { position: v3(-5, 5) })
                .to(0.02, { position: v3(2, -8) })
                .to(0.02, { position: v3(-8, -10) })
                .to(0.02, { position: v3(3, 10) })
                .to(0.02, { position: v3(0, 0) })
        ).start()

        var time = new Date().getTime()

        tween(this.shakeNode)
        .delay(duration)
        .call(()=>{
            this.stopShake()
            this.playNext()
            callback && callback()
        })
        .tag(-999)
        .start()
    }
    stopShake() {
        if (this.shakeTween) {
            this.shakeTween.stop()
            this.shakeNode.position = this.shakeNowPos
            this.shakeTween = null
        }
        Tween.stopAllByTag(999)
    }

}

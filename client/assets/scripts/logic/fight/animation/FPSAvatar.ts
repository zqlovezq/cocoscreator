import { _decorator, Component, Layers, Node, Prefab, Sprite, SpriteFrame, UITransform, v3, Vec3, warn } from "cc";

const { ccclass, property } = _decorator;
const tempPos = new Vec3()
@ccclass('FPSAvatar')
export class FPSAvatar extends Component {
    private static poolUIs: FPSAvatar[] = []

    static get() {
        let fps = FPSAvatar.poolUIs.pop()
        if (fps == null) {
            let nn = new Node("FPSAvatar");
            nn.layer = Layers.Enum.DEFAULT
            fps = nn.addComponent(FPSAvatar)
        }
        return fps
    }

    static put(fps: FPSAvatar) {
        fps.node.removeFromParent()
        fps.reset()
        FPSAvatar.poolUIs.push(fps)
    }
    /** 销毁 */
    static destory() {
        for (let i = 0; i < FPSAvatar.poolUIs.length; i++) {
            FPSAvatar.poolUIs[i].node.destroy()
        }
        FPSAvatar.poolUIs.length = 0
    }

    spr: Sprite
    private _isPlay: boolean = false

    private sample: number = 0
    private nowIndex: number = 0
    private duration: number = 0
    private step: number = 0
    private isComplete: boolean = false
    private time: number = 0
    private totalTime: number = 0
    timeScale: number = 1
    iamges: SpriteFrame[] = []
    wrapMode: boolean = false
    public actionName: string = ""
    createWithSpriteFrames(spriteFrames: SpriteFrame[], sample: number) {
        this.iamges = spriteFrames
        this.sample = sample
        this.duration = spriteFrames.length / sample
        this.step = 1 / sample
        this.time = 0
        this.totalTime = 0
        this.updateNowSpr()
    }
    cb: Function
    setFb(fb: Function) {
        this.cb = fb
    }

    setSprite(sp: Sprite) {
        this.spr = sp
        this.spr.node.position = tempPos.set(0, 0, 0)
        this.spr.node.scale = tempPos.set(1, 1, 1)
        this.node.addChild(this.spr.node)
    }

    protected update(dt: number): void {
        if (!this._isPlay) return

        this.time += dt * this.timeScale
        this.totalTime += dt* this.timeScale
        if (this.time >= this.step) {
            this.time -= this.step
            this.addSelf()
        }
    }
    addSelf() {
        this.nowIndex += 1
        this.updateNowSpr()
    }

    updateNowSpr() {
        if (this.iamges == null) {
            return
        }
        if (this.nowIndex >= this.iamges.length) {
            if (!this.wrapMode) {
                this.playComplete()
                return
            }
            this.play(this.wrapMode)
            return
        }
        if (this.spr == null) {
            let nn = new Node("spr")
            nn.addComponent(UITransform)
            this.spr = nn.addComponent(Sprite)
            nn.layer = this.node.layer
            this.node.addChild(nn)
        }
        this.spr.spriteFrame = this.iamges[this.nowIndex]

    }

    get isPlay() {
        return this._isPlay
    }
    set isPlay(v) {
        this._isPlay = v
    }


    /** 暂停 */
    pause() {
        this.isPlay = false
    }
    /** 恢复 */
    resume() {
        this.isPlay = true
    }
    /** 播放 */
    play(isLoop: boolean) {
        this.wrapMode = isLoop
        this.resetTime()
        this.isComplete = false
        this.isPlay = true
        this.updateNowSpr()
    }

    /** 停止 */
    stop() {
        this.resetTime()
        this.isPlay = false
    }

    playComplete() {
        this.isComplete = true
        this._isPlay = false
        this.cb && this.cb()
    }


    recycle() {
        FPSAvatar.put(this)
    }

    resetTime() {
        this.time = 0
        this.nowIndex = 0
        this.totalTime = 0
        if (this.spr) {
            this.spr.spriteFrame = null
        }
    }
    reset() {
        this.resetTime()
        this.isComplete = false
        this.wrapMode = false
        this.iamges = null
        this.actionName = ""
        this.clearSprite()
    }

    clearSprite() {
        this.spr = null
    }

    hasImage() {
        return this.iamges && this.iamges.length > 0
    }

}
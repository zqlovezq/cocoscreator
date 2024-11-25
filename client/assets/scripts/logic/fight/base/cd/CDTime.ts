
export class CDTime {
    protected lifeTime: number = 0
    protected passTime: number = 0
    protected _valid: boolean = false
    protected cb: Function
    protected typeKey: string
    protected speed: number = 1
    isValid() {
        return this._valid
    }
    kill(){
        this.reset()
        this._valid = false
    }

    reset() {
        this._valid = true
        this.cb = null
        this.passTime = 0
        this.typeKey = ""
        this.speed = 1
    }
    setTypeKey(key: string) {
        this.typeKey = key
    }

    setLiftTime(time: number, fb: Function) {
        this.lifeTime = Math.max(time, 0)
        this.cb = fb
        this.passTime = 0
        this.speed = 1
    }

    setSpeed(speed: number) {
        this.speed = speed
    }

    updateFrame(dt: number) {
        if (!this._valid) {
            return
        }
        this.passTime = this.passTime + dt * this.speed
        if (this.passTime >= this.lifeTime) {
            this.onTimeComplete()
            return
        }
    }

    onTimeComplete() {
        this._valid = false
        this.cb && this.cb(this.typeKey)
    }

    getProgress() {
        return this.passTime / this.lifeTime
    }
}
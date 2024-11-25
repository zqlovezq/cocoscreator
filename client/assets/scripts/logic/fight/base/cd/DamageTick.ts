
export class DamageTick {
    protected lifeTime: number = 0
    protected passTime: number = 0
    protected _valid: boolean = false
    bulletSoleId:string = ""
    isValid() {
        return this._valid
    }

    reset() {
        this._valid = false
        this.lifeTime = 0
        this.passTime = 0
    }

    setLiftTime(time: number) {
        this.lifeTime = time
        this.passTime = 0
        this._valid = true
    }

    updateFrame(dt: number) {
        if (!this._valid) {
            return
        }
        this.passTime = this.passTime + dt
        if (this.passTime >= this.lifeTime) {
            this.onTimeComplete()
            return
        }
    }

    onTimeComplete() {
        this._valid = false
    }

}
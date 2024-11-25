import { Vec3, View, game, size, v2, view } from "cc";
import { CollisionObject } from "../../../../framework/collision/CollisionObject";
import { BuffTab } from "../../test/HeroTabData";
import { tab } from "../../../../Table/table_gen";

const tempPos = new Vec3();
export class AbsBuff {
    public lifeTime: number = 0
    public passTime: number = 0
    buffTab: BuffTab
    data: any

    _valid: boolean = false

    configId: number
    configTab: tab.BuffTable
    setConfigId(id: number) {
        this.configId = id
        this._valid = true
        this.passTime = 0
    }
    isValid() {
        return this._valid
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
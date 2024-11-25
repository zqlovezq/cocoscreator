import { _decorator, Component, Label, Node, tween, Animation } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { GameUtil } from '../../utils/GameUtil';
const { ccclass, property } = _decorator;

@ccclass('ForceUpPop')
export class ForceUpPop extends ViewPop {
    @property(Label)
    lab_add: Label = null;
    @property(Label)
    lbl_power: Label = null;
    @property(Animation)
    anim_force: Animation = null;
    private ForceObj = { value: 0 }
    private tweenAction = null;
    onShow(): void {
        if (!this.openData) {
            return;
        }
        this.node.active = true;
        this.ForceObj = {
            value: this.openData.power
        }
        this.anim_force.play();
        this.increaseBattlePower();
    }
    increaseBattlePower() {
        let duration1 = 0.6; // 前1秒
        let duration2 = 1.2; // 后0.6秒

        let initialPower = this.openData.power;
        let finalPower = this.openData.power + this.openData.addPower;

        let increaseAmount1 = this.openData.addPower * 0.9; // 提升90%的战斗力
        let increaseAmount2 = this.openData.addPower * 0.1; // 提升10%的战斗力
        // 第一个动作，1秒内提升90%的战斗力
        let action1 = tween().to(duration1, { value: initialPower + increaseAmount1 }, {
            progress: (start, end, current, ratio) => {
                const currentValue = start + ratio * (end - start);
                this.updateBattlePower(currentValue);
                return current;
            }
        });
        // // 第二个动作，0.6秒内提升剩余的10%的战斗力
        let action2 = tween().to(duration2, { value: finalPower }, {
            progress: (start, end, current, ratio) => {
                const currentValue = start + ratio * (end - start);
                this.updateBattlePower(currentValue);
                return current;
            }
        });

        // // 序列动作
        this.tweenAction = tween(this.ForceObj)
            .then(action1)
            .call(() => {
                this.ForceObj.value = initialPower + increaseAmount1
            })
            .then(action2)
            .delay(1)
            .call(() => {
                this.node.active = false;
            })
            .start();
    }
    updateBattlePower(value) {
        let finalPower = this.openData.power + this.openData.addPower;
        this.lbl_power.string = GameUtil.convertNumber(Math.floor(value));
        this.lab_add.string = GameUtil.convertNumber(Math.floor(finalPower - value));
    }
    protected update(dt: number): void {


    }
    protected onDestroy(): void {
        super.onDestroy()
        this.tweenAction.stop();
    }
    register(): void {

    }
    unRegister(): void {
        super.unRegister();
    }
}



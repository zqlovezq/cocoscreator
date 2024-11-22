/*
 * @Descripttion: 
 */

import { isValidObj, kZeroNumber } from "../Common/CommonInterface";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ImmFinishRainbowTaskEffect extends PopLayer {

    @property(cc.Node)
    node_spine: cc.Node = null;
    
    @property(cc.Label)
    lbl_star_lv: cc.Label = null;

    private _imm_finish_task_effect: sp.Skeleton = null;

    onLoad () {
        this._imm_finish_task_effect = this.node_spine.getComponent(sp.Skeleton);
    }

    public initData(starLv: number){
        this.lbl_star_lv.string = `${starLv}`;
        this.playAnimation();
    }

    private playAnimation(){
        if(isValidObj(this._imm_finish_task_effect)){
            this._imm_finish_task_effect.setAnimation(kZeroNumber, "idle1", false);
            this._imm_finish_task_effect.setCompleteListener(()=>{
                this._imm_finish_task_effect.setCompleteListener(null);
                this.setVisible(false);
            });
            
            this._imm_finish_task_effect.addAnimation(kZeroNumber, "idle1_2",   false);

            this.scheduleOnce(()=>{this.setVisible(false);}, 2.0);
        }
    }
}

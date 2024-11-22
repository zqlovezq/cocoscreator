/*
 * @Descripttion: 数字文本向上飘动通用预制件
 */

import { tab } from "../../Table/table_gen";
import { CreateSpine } from "../Utils/GameUtils";
import { kPlusSignString } from "./CommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class StarAndValueTip extends cc.Component {

    @property(cc.Node)
    node_spine_reward_star: cc.Node = null;

    @property(cc.Node)
    node_reward_ret: cc.Node = null;

    @property(cc.Label)
    lbl_reward_value_ret: cc.Label = null;

    /* 数字飘动动画
     * @param val  文本内容
     * @param spineId
     */
    public playWaveLabelTip(val: number | string, spineId: number){
        this.lbl_reward_value_ret.string      = `${kPlusSignString}${val}`;
        this.node_spine_reward_star.active    = true;
        this.lbl_reward_value_ret.node.active = true;
        this.node_spine_reward_star.removeAllChildren(true);

        let thisTemp = this;
        CreateSpine(spineId).then(skel=>{
            thisTemp.node_spine_reward_star.addChild(skel.node);
            skel.setAnimation(0, "idle", false);
            skel.setCompleteListener(()=>{
                skel.setCompleteListener(null);
                thisTemp.node_spine_reward_star.removeAllChildren(true);
                thisTemp.node_spine_reward_star.active = false;
            });

            let animNode = thisTemp.node_reward_ret.getComponent(cc.Animation);
            if(animNode){
                animNode.play("uplv_reward_ret");
            }
        });
    }
}

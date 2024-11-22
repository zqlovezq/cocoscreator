/**
 * 
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import Role from "../Common/Role";
import { getBoxIDAndCfg, getItemIconURL, showItemTips } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BoxIcon extends cc.Component {

    @property(cc.Sprite)
    boxIcon: cc.Sprite = null

    @property(cc.Label)
    boxfromname: cc.Label = null

    @property(cc.Label)
    boxname: cc.Label = null

    reward:proto.IRewardSimpleInfo

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_END, ()=>{
            showItemTips(this.reward, this.node)}, 
            this)
    }

    setView(reward:proto.IRewardSimpleInfo){
        this.reward = reward
        let iconObj = getItemIconURL(reward.rewardId, reward.rewardType);
       
        this.boxIcon.setTexture(iconObj.icon)
        this.boxIcon.node.scale = iconObj.scale
        this.boxfromname.node.active = true

        if(reward.rewardType == tab.RewardType.RewardType_BoxGroupType || reward.rewardType == tab.RewardType.RewardType_BoxType){
            this.boxIcon.node.scale = 0.5
        } else if(reward.rewardType == tab.RewardType.RewardType_BagSpeedUp) {
            this.boxIcon.node.scale = 1.7
            this.boxfromname.node.active = false
        }

        this.boxname.string = iconObj.name

        let str = tab.Data.TipsTableByKey.getValue("Arenatxt").Value || ""
        this.boxfromname.string = str + Role.Instance.RoleGrade.toString()
        
    }
}

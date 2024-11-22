/*
 *  周卡月卡奖励item
 */

import { isValidObj, kOneNumber, kZeroNumber } from "../../../Common/CommonInterface";
import { getItemIconURL } from "../../../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MonthWeekRewardItem extends cc.Component {

    @property(cc.Sprite)
    spr: cc.Sprite = null;

    @property(cc.Label)
    num_lab: cc.Label = null;

    setData(itemId: number,itemType: number = kZeroNumber,count: number = kOneNumber){
        let iconInfoObj = getItemIconURL(itemId, itemType);
        let bValidIcon = isValidObj(iconInfoObj.icon);
        if (bValidIcon){
            this.spr.setTexture(iconInfoObj.icon)
        }

        this.num_lab.string = count.toString()
    }
    
}

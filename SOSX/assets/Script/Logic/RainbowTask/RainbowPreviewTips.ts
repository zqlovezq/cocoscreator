/*
 * @Descripttion: 彩虹任务等级经验奖励预览预制件
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj} from "../Common/CommonInterface";
import { getItemIconURL, LoadResAsync } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RainbowPreviewTips extends cc.Component {

    @property(cc.Label)
    lbl_reward_cnt: cc.Label = null;

    @property(cc.Sprite)
    spr_reward_icon: cc.Sprite = null;

    @property(cc.Label)
    lbl_level: cc.Label = null;

    /*  */
    public initData(taskData: proto.IRainbowInfoData, starLv: number){
        this.setRewardCount(taskData.leftReward.rewardInfo.rewardCount);
        this.setRewardIcon(taskData.leftReward.rewardInfo.rewardId, 
                            taskData.leftReward.rewardInfo.rewardType);
        this.setRewardIdx(starLv);
    }

    /* 设置奖励数量
     */
    private setRewardCount(cnt: number){
        this.lbl_reward_cnt.string = `${cnt}`;
    }

    /* 设置奖励图标
     * @param rewardID    奖励物品ID
     * @param rewardType  奖励物品类型
     */
    private setRewardIcon(rewardID: number, rewardType: tab.RewardType){
        let iconPath = getItemIconURL(rewardID, rewardType);
        if(isValidObj(iconPath.icon)){
            this.loadIcon(iconPath.icon);
        }
    }

    /*  */
    private async loadIcon(icon: string){
        let sf = await LoadResAsync(icon, cc.SpriteFrame)
        if(sf) {
            this.spr_reward_icon.spriteFrame = sf;
        }
    }

    /* 设置奖励的序号
     */
    private setRewardIdx(idx: number){
        this.lbl_level.string = `${idx}`;
    }

    /*  */
    public onClickScroll(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyScrollLastRainbowTask);
    }
}

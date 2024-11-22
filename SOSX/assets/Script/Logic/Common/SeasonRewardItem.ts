/**
 *  
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { ShowTipsOfCustomString } from "../Utils/GameUtils";
import CommonItem from "./CommonItem";
import Role from "./Role";
import { ItemState } from "./SeasonRankCommonFunc";
import { isValidObj, kNegativeOneNumber, kZeroNumber } from "./CommonInterface";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SeasonRewardItem extends cc.Component {
    @property({ type: cc.Node })
    node_item_left: cc.Node = null;

    @property({ type: cc.Node })
    node_item_right: cc.Node = null;

    @property({ type: cc.Node })
    node_item_center: cc.Node = null;

    @property({ type: cc.Node })
    node_single: cc.Node = null;

    @property({ type: cc.Node })
    node_double: cc.Node = null;

    private _reward_score = 0;

    onLoad() {
    }

    start() {

    }

    public initData(itemId1: number,
        itemType1: number,
        itemCount1: number,
        itemId2: number = kZeroNumber,
        itemType2: number = kNegativeOneNumber,
        itemCount2: number = kZeroNumber) {
        this.node_single.active = (itemId2 == kZeroNumber);
        this.node_double.active = !this.node_single.active;

        if (itemId2 == kZeroNumber) {
            this.node_item_center.getComponent(CommonItem).initWithStaticId(itemId1, itemType1, itemCount1);
        } else {
            this.node_item_left.getComponent(CommonItem).showQualityEffect();
            this.node_item_left.getComponent(CommonItem).initWithStaticId(itemId1, itemType1, itemCount1);

            this.node_item_right.getComponent(CommonItem).showQualityEffect();
            this.node_item_right.getComponent(CommonItem).initWithStaticId(itemId2, itemType2, itemCount2);
        }
    }

    /* 设置奖励积分 */
    public setRewardScore(score: number) {
        this._reward_score = score;
        this.setRewardState();
    }

    /* 设置奖励状态【可领取、已领取】 */
    private setRewardState() {
        let rewardTab = tab.Data.RankScoreRewardTableByScore.getValue(this._reward_score);
        if (!isValidObj(rewardTab)) {
            return;
        }

        let score = Role.Instance.RoleData.rankData.maxScore;
        let state: ItemState = (score < rewardTab.Score) ?
            ItemState.LOCK :
            (Role.Instance.RoleData.rankData.gotSocreRewardId.includes(this._reward_score) ?
                ItemState.ALREADY_RECEIVE : ItemState.CAN_RECEIVE
            );

        this.node_item_center.active && this.node_item_center.getComponent(CommonItem).setState(state);
        this.node_item_left.active && this.node_item_left.getComponent(CommonItem).setState(state);
        this.node_item_right.active && this.node_item_right.getComponent(CommonItem).setState(state);
        // (ItemState.CAN_RECEIVE == state) && this.setRewardCallbackFunc(this.sendMsg.bind(this));
        (ItemState.ALREADY_RECEIVE == state) && this.setRewardCallbackFunc(null);
        (ItemState.LOCK == state) && this.setRewardCallbackFunc(this.flyTip.bind(this));
    }

    /* 设置奖励回调函数 */
    private setRewardCallbackFunc(callback: Function) {
        this.node_item_center.getComponent(CommonItem).setClickCallback(callback);
        this.node_item_left.getComponent(CommonItem).setClickCallback(callback);
        this.node_item_right.getComponent(CommonItem).setClickCallback(callback);
    }

    /* 发送领取奖励消息 */
    private sendMsg() {
        let msg = new proto.Msg_GetRankScoreRewardReq()
        msg.rewardId = this._reward_score;
        msg.itemIdx = kZeroNumber;
        Net.Send(proto.Ptl.GetRankScoreRewardReq, msg)
    }

    /* 飘字提示 */
    private flyTip() {
        let prefixStr = tab.Data.GetKeyValue_ConfigTable().ScoreReachTip;
        let suffixStr = tab.Data.GetKeyValue_ConfigTable().CanReciveTip;
        ShowTipsOfCustomString(`${prefixStr}${this._reward_score}${suffixStr}`);
    }
}

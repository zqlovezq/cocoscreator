
import { tab } from "../../Table/table_gen";
import SeasonRewardItem from "../Common/SeasonRewardItem";
import Role from "../Common/Role";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { kZeroNumber } from "../Common/CommonInterface";
import { ItemState } from "../Common/SeasonRankCommonFunc";
import { Net } from "../../Protocol/Net";
import { proto } from "../../Protocol/client_protocol";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIRankList extends InfiniteCell {
    @property(cc.Label)
    rankLabel: cc.Label = null;
    @property(cc.ProgressBar)
    private beforeBar: cc.ProgressBar = null;
    @property(cc.ProgressBar)
    private afterBar: cc.ProgressBar = null;
    @property(cc.Node)
    private myRankNode: cc.Node = null;
    @property(cc.Label)
    private myRankText: cc.Label = null;
    @property(cc.Node)
    private award: cc.Node = null;
    @property(cc.Node)
    private getBar: cc.Node = null; //可以领取
    @property(cc.Node)
    private gotBar: cc.Node = null; //已经领取
    @property(cc.Button)
    private get_btn: cc.Button = null;
    private curScore:number = 0;
    public get Award(){
        return this.award.getComponent(SeasonRewardItem);
    }

    UpdateContent(celldata) {
        this.initData(celldata);
    }

    public initData(rankLv: number) {
        this.myRankNode.active = false;
        this.gotBar.active = false;
        this.getBar.active = false;
        let totalScore = Role.Instance.RoleData.rankData.score;
        let data = tab.Data.RankScoreRewardTable[rankLv];
        let len = tab.Data.RankScoreRewardTable.length;
        let curScore = data.Score;
        this.curScore = curScore;
        let nextScore = rankLv <= len - 2 ? tab.Data.RankScoreRewardTable[rankLv + 1].Score : curScore;
        let lastScore = rankLv > 0 ? tab.Data.RankScoreRewardTable[rankLv - 1].Score : curScore;

        let upScore = data.Score + (nextScore - curScore) / 2;
        let downScore = data.Score - (curScore - lastScore) / 2

        this.rankLabel.string = data.Score + "";
        this.myRankText.string = totalScore + "";
        let beforeBarLen = this.beforeBar.totalLength;
        let afterBarLen = this.afterBar.totalLength;
        if (totalScore >= downScore) {
            if (totalScore >= upScore) {
                this.beforeBar.progress = 1;
                this.afterBar.progress = 1;
                if (rankLv === len - 1) {
                    this.myRankNode.active = true;
                    this.myRankNode.setPosition(0, beforeBarLen, 0);
                    this.afterBar.progress = 0;
                }
            } else if (totalScore >= curScore) {
                let average = (nextScore - curScore) / 2;
                this.beforeBar.progress = 1;
                this.afterBar.progress = (totalScore - curScore) / average;
                this.myRankNode.active = true;
                this.myRankNode.setPosition(0, (1 + this.afterBar.progress) * afterBarLen, 0)
            } else {
                let average = (curScore - lastScore) / 2;
                this.afterBar.progress = 0;
                this.beforeBar.progress = (totalScore - downScore) / average;
                this.myRankNode.active = true;
                this.myRankNode.setPosition(0, (this.beforeBar.progress) * beforeBarLen, 0)
            }
        } else {
            this.beforeBar.progress = 0;
            this.afterBar.progress = 0;
        }
        this.award.getComponent(SeasonRewardItem).initData(data.RewardID1, data.RewardType1, data.RewardCount1,
            data.RewardID2, data.RewardType2, data.RewardCount2);
        this.award.getComponent(SeasonRewardItem).setRewardScore(curScore);
        this.get_btn.node.active = false
        /* 如果当前积分curScore */
        if (Role.Instance.RoleData.rankData.maxScore < curScore) {
            this.getBar.active = false;
        } else {
            /* 如果总分数大于等于当前中间段 判断是否奖励领取了 */
            let state = this.getListState(curScore);
            if (state === ItemState.ALREADY_RECEIVE) {
                /* 奖励领取了 */
                this.gotBar.active = true;
            } else {
                this.getBar.active = true;
                this.get_btn.node.active = true
                this.get_btn.node.on("click", this.sendMsg, this);
            }
        }
    }

    /* 获取道具的领奖状态 */
    getListState(score: number) {
        let rewardTab = tab.Data.RankScoreRewardTableByScore.getValue(score);
        let _score = Role.Instance.RoleData.rankData.maxScore;
        let state: ItemState = (_score < rewardTab.Score) ?
            ItemState.LOCK :
            (Role.Instance.RoleData.rankData.gotSocreRewardId.includes(score) ?
                ItemState.ALREADY_RECEIVE : ItemState.CAN_RECEIVE
            );
        return state;
    }
    private sendMsg() {
        let msg = new proto.Msg_GetRankScoreRewardReq()
        msg.rewardId = this.curScore;
        msg.itemIdx = kZeroNumber;
        Net.Send(proto.Ptl.GetRankScoreRewardReq, msg)
    }
    public gotRank() {
        this.gotBar.active = true;
        this.getBar.active = false;
        this.get_btn.node.off("click",this.sendMsg, this);
        this.get_btn.node.active = false
    }
}

import PopLayer from "../Utils/PopLayer";
import { tab } from "../../Table/table_gen";
import Role from "../Common/Role";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import { Net } from "../../Protocol/Net";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { checkRewardIsEmotionOrBattleMap, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import UIRankList from "./UIRankList";
import UIRankListSp from "./UIRankListSp";
import { proto } from "../../Protocol/client_protocol";
import SeasonRewardItem from "../Common/SeasonRewardItem";
import { popRewardLayer_Ex, setTimeTXT } from "../Utils/GameUtils";
import GuideController from "../Guide/GuideController";
import SeasonFunc from "./SeasonFunc";
import CommonHelp from "../Common/CommonHelp";
const { ccclass, property } = cc._decorator;

@ccclass
export default class UIRank extends PopLayer {

    @property({ displayName: "scrollview_reward", type: InfiniteList })
    scrollview_reward: InfiniteList = null;

    @property(cc.Prefab)
    pfb__rank_list: cc.Prefab = null;

    @property(cc.Prefab)
    pfb__rank_sp_list: cc.Prefab = null;

    @property(cc.Button)
    btn_close: cc.Button = null;

    @property(cc.Label)
    season_name_txt: cc.Label = null;

    @property(cc.Label)
    season_time_txt: cc.Label = null;

    private _current_cell_offsetY: number = kZeroNumber; //当前所定位的单元格y偏移量

    onLoad() {
        this.btn_close.node.on("click", this.onClickClose, this);

        /* 领取赛季积分奖励 */
        Net.listenProtocol(proto.Ptl.GetRankScoreRewardRsp, async (buffer, ptl) => {
            let msg = proto.Msg_GetRankScoreRewardRsp.decode(buffer)
            cc.log("GetRankScoreRewardRsp (领取赛季积分奖励) msg: " + JSON.stringify(msg))
            if (null != msg) {
                if (msg.result == kZeroNumber) {
                    Role.Instance.RoleData.rankData.gotSocreRewardId.push(msg.rewardId);
                    /* 将rank节点转为获取状态 */
                    let idx = this.getIdxByScore(msg.rewardId);
                    let _idx = this.getRightCellIndex(idx);
                    let cell = this.scrollview_reward.findCellOfIdx(_idx);
                    //@ts-ignore
                    cell.gotRank();

                    /* 弹窗 奖励列表 */
                    //@ts-ignore
                    let award: SeasonRewardItem = cell.Award;
                    award.setRewardScore(msg.rewardId);
                    popRewardLayer_Ex(msg.rewards, () => {
                        if (msg.rewards.length > 0) {
                            checkRewardIsEmotionOrBattleMap(msg.rewards[kZeroNumber].rewardId, msg.rewards[kZeroNumber].rewardType);
                        }
                    });
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ReceiveSeasonReward);

                    if (GuideController.Instance.isGuiding()) {
                        Net.pushLoaclMessage(LOCAL_MESSAGE.GUIDE_MAIN, 2)
                    }
                }
            }
        }, this);

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewSeasonJustBeginning, (param) => {
            //切换进入新赛季
            this.hide()
        }, this);
    }
    start() {
        this.initData();
    }
    private initData() {
        this.scrollview_reward.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.getCellIdx.bind(this),
        });

        //重载scrollView数据
        this.scrollview_reward.Reload(true);

        // 滚动到当前段位位置
        if (GuideController.Instance.isGuiding()) {
            this.scheduleOnce(() => { this.scrollview_reward.scrollToBottom(0.5); }, 0.3);
        } else {
            this.onClickScrolling();
        }
        //绑定scrollView滚动事件
        this.scrollview_reward.node.on("scrolling", this.onScrollMove, this);
        this.scrollview_reward.node.on("scroll-ended", this.onScrollEnd, this);
        this.scrollview_reward.node.on("scroll-began", this.onScrollStart, this);

        this.resetSeason()

    }

    resetSeason() {
        if (Role.Instance.isSeason()) {
            let seasonTab = SeasonFunc.getNowTab()
            this.season_name_txt.string = seasonTab.Name
        }else{
            this.season_name_txt.node.parent.parent.active = false
            return
        }

        this.updateSeasonFunc = () => {
            this.updateSeasonTxt()
        }
        this.schedule(this.updateSeasonFunc, 1)
        this.updateSeasonFunc()
    }

    updateSeasonFunc
    updateSeasonTxt() {
        if (!Role.Instance.isSeason() || (Role.Instance.isSeason() && SeasonFunc.getSurplusTime() < -1)) {
            this.season_time_txt.string = "赛季已结束"
            this.unschedule(this.updateSeasonFunc)
            return
        }
        setTimeTXT(this.season_time_txt, SeasonFunc.getSurplusTime())
    }

    private onClickClose() {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_RereshMainPageSeasonRewardState, null);
        if (GuideController.Instance.isGuiding()) {
            Net.pushLoaclMessage(LOCAL_MESSAGE.GUIDE_MAIN, 4)
        }
        this.setVisible(false);
    }
    // protected update(dt: number): void {

    // }
    onDestroy() {

    }
    private getCellCount() {
        return tab.Data.RankScoreRewardTable.length;
    }
    private getCellHeight(idx: number) {
        return 263;
    }
    private getCellIdentifer(idx: number): string {
        idx = this.getRightCellIndex(idx);
        return this.getRightIdentifer(idx);
    }
    private getRightIdentifer(idx: number) {
        let data = tab.Data.RankScoreRewardTable[idx];
        if (data.RankIcon && data.RankName) {
            return "UIRankListSp";
        } else {
            return "UIRankList";;
        }
    }
    private getCellView(idx: number, identifer: string): InfiniteCell {
        let cell = null;
        switch (identifer) {
            case "UIRankListSp":
                cell = cc.instantiate(this.pfb__rank_sp_list).getComponent(UIRankListSp);
                break;
            case "UIRankList":
                cell = cc.instantiate(this.pfb__rank_list).getComponent(UIRankList);
                break;
            default:
                cell = cc.instantiate(this.pfb__rank_list).getComponent(UIRankList);
                break;
        }
        return cell;
    }
    private getRightCellIndex(idx: number) {
        return this.getCellCount() - kOneNumber - idx;
    }
    private getCellIdx(idx: number) {
        idx = this.getRightCellIndex(idx);
        return idx;
    }
    public onScrollMove() {
        let max = this.scrollview_reward.getMaxScrollOffset();
        let offset = this.scrollview_reward.getScrollOffset();
        if (GuideController.Instance.isGuiding()) {
            if (max.y - offset.y <= 5) {
                let scollview: cc.ScrollView = this.scrollview_reward.getContent().parent.getComponent(cc.ScrollView);
                scollview.enabled = false;
            }
        }
    }

    private onScrollStart() {
        // this._bTouchMoving = true;
        // this._bCanAdjust = true;
    }

    private onScrollEnd() {
        // if(this._current_cell_index < kOneNumber){
        //     return;
        // }
        // this.adjustScoreNodePos();
    }
    private onClickScrolling() {
        if (this.checkMinRankLevel()) {
            return;
        }
        let scoreIdx: number = this.getRankLevelToScore();
        let idx = this.getRightCellIndex(scoreIdx);
        let pos = this.scrollview_reward.GetScrollPosOfCell(idx);
        this._current_cell_offsetY = pos.y; //cc.log("单元格所在的offsetY: " +this._current_cell_offsetY);
        this.scheduleOnce(() => { this.scrollview_reward.scrollToOffset(pos, 0.3); }, 0.3);

    }
    private checkMinRankLevel() {
        let scoreIdx: number = this.getRankLevelToScore();
        let idx = this.getRightCellIndex(scoreIdx);
        if (scoreIdx < kOneNumber) {
            this.scrollview_reward.ScrollToCell(idx, 1);
            return true;
        }

        return false;
    }
    public getRankLevelToScore(): number {
        let idx = 0;
        let bMoreThanCompPre = false;
        let totalScore = Role.Instance.RoleData.rankData.score;
        for (let data of tab.Data.RankScoreRewardTable) {
            if (totalScore > data.Score) {
                idx++;
                bMoreThanCompPre = true;
            } else {
                if (!bMoreThanCompPre) {
                    return idx;
                }
            }
        }
        return idx > 2 ? idx + 2 : idx;
    }
    public getIdxByScore(score: number): number {
        let idx = 0;
        let bMoreThanCompPre = false;
        for (let data of tab.Data.RankScoreRewardTable) {
            if (score > data.Score) {
                idx++;
                bMoreThanCompPre = true;
            } else {
                if (!bMoreThanCompPre) {
                    return idx;
                }
            }
        }
        return idx;
    }


    onSeasonHelpClick() {
        CommonHelp.show("RankFightHelp")
    }
}

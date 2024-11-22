/*
 *  排行榜弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import SeasonFunc from "../Season/SeasonFunc";
import { setTimeTXT, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import SdkManager from "../Utils/SdkManager";
import ManagerRankingLevel from "./ManagerRankingLevel";
import RankingPvpTemplate from "./RankingPvpTemplate";
import RankingReward from "./RankingReward";

const { ccclass, property } = cc._decorator;

enum RankToggleType {
    rank = 1,
    reward = 2
}

@ccclass
export default class RankingListPopLayer1 extends PopLayer {

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(RankingPvpTemplate)
    node_pvp_template: RankingPvpTemplate = null;

    @property(cc.ScrollView)
    seasonreward_Scroll: cc.ScrollView = null

    @property(cc.Label)
    seasonOver_txt: cc.Label = null

    @property(cc.Prefab)
    rankingReward: cc.Prefab = null

    @property(cc.Toggle)
    rankToggle: cc.Toggle = null
    @property(cc.Toggle)
    rewardToggle: cc.Toggle = null

    /*  */
    onLoad() {
        this._initClickEvent();
        this._initNodeVisible();
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewSeasonJustBeginning, (param) => {
            //切换进入新赛季
            this.hide()
        }, this);
    }

    /*  */
    private _initNodeVisible() {
        this.node_pvp_template.node.active = false;
        this.seasonreward_Scroll.node.parent.active = false
    }

    /*  */
    onDestroy() {
        ManagerRankingLevel.getInstance().destroy();
    }

    /* 初始化所有点击事件 */
    private _initClickEvent() {
        this.btn_closed.node.on("click", () => { this.setVisible(false); }, this)
    }

    /*  */
    public initData() {

        this.onShowPvpRankClick()
    }

    viewType: RankToggleType
    changeSelectToggleType(type: RankToggleType) {
        this.node_pvp_template.node.active = type == RankToggleType.rank
        this.seasonreward_Scroll.node.parent.active = type == RankToggleType.reward
    }

    onShowPvpRankClick() {
        this.changeSelectToggleType(RankToggleType.rank)
    }

    onShowSeasonAwardClick() {
        if (!Role.Instance.isSeason()){
            this.rankToggle.isChecked = true
            ShowTips("NotFindSeason")
            return
        }
        this.changeSelectToggleType(RankToggleType.reward)
        this.loadReward()
    }

    updateSeasonTxt() {
        if (!Role.Instance.isSeason() || (Role.Instance.isSeason() && SeasonFunc.getSurplusTime() < -1)) {
            this.seasonOver_txt.string = "赛季已结束"
            this.unschedule(this.updateSeasonFunc)
            return
        }
        setTimeTXT(this.seasonOver_txt, SeasonFunc.getSurplusTime())
    }

    updateSeasonFunc
    loadReward() {
        if (this.seasonreward_Scroll.content.children.length > 0) {
            return
        }

        this.updateSeasonFunc = () => {
            this.updateSeasonTxt()
        }
        this.schedule(this.updateSeasonFunc, 1)
        this.updateSeasonFunc()




        let seasonConf: tab.RankFightTable = SeasonFunc.getNowTab()

        for (let index = 0; index < seasonConf.Ranking.length; index++) {
            const lv = seasonConf.Ranking[index];

            let start = lv
            let end = lv
            if (index != 0) {
                let lastLv = seasonConf.Ranking[index - 1]
                if (lastLv + 1 == lv) {
                    start = lv
                    end = lv
                } else {
                    start = lastLv + 1
                    end = lv
                }
            }

            let rewardIndex = (index + 1).toString()

            let item = cc.instantiate(this.rankingReward)
            this.seasonreward_Scroll.content.addChild(item)
            let sp = item.getComponent(RankingReward)
            sp.setRanking(start, end, seasonConf["RewardID" + rewardIndex], seasonConf["RewardType" + rewardIndex], seasonConf["RewardCount" + rewardIndex])
        }
    }
}

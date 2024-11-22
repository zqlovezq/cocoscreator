/*
 * @Descripttion: 赛季结束奖励
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kZeroNumber } from "../Common/CommonInterface";
import CommonItem from "../Common/CommonItem";
import Role from "../Common/Role";
import RankingReward from "../RankingList/RankingReward";
import Func from "../Utils/Func";
import { popRewardLayer_Ex } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import SeasonFunc from "./SeasonFunc";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SeasonGift extends PopLayer {

    @property(cc.Node)
    clickNode: cc.Node = null

    @property(cc.Node)
    youhuijuanSp: cc.Node = null

    @property(cc.Node)
    infoNode: cc.Node = null

    @property(cc.Label)
    score_txt: cc.Label = null

    @property(cc.Label)
    name_txt: cc.Label = null

    @property(cc.Node)
    itemParentNode: cc.Node = null

    @property(cc.Prefab)
    itemPrefab: cc.Prefab = null

    private _rewardReward: proto.Msg_SeasonRewardMsgRsp;

    onLoad() {
        this.clickNode.active = true
        this.infoNode.active = false
        this.name_txt.string = Role.Instance.Name
        /* 领取赛季结算奖励 */
        Net.listenProtocol(proto.Ptl.GetSeasonRewardRsp, (buffer: Uint8Array, ptl: number) => {
            let msg = proto.Msg_GetSeasonRewardRsp.decode(buffer);
            cc.log("SeasonOverRsp (领取赛季结算奖励) msg: " + JSON.stringify(msg));
            if (msg.Awards && msg.Awards.length) {
                popRewardLayer_Ex(msg.Awards, null, true)
            }
            this.hide()
        }, this);
    }

    public initData(rewardReward: proto.Msg_SeasonRewardMsgRsp) {
        this._rewardReward = rewardReward;
    }

    onSpineClick(sender) {
        sender.currentTarget.active = false
        Func.playSpine(this.youhuijuanSp, "idle02", false, () => {
            this.clickNode.active = false
            this.infoNode.active = true

            let anim = this.infoNode.getComponent(cc.Animation)
            anim.play(anim.getClips()[0].name)
            this.showAward()
        })
    }

    showAward() {
        let seasonConf: tab.RankFightTable = SeasonFunc.getNowTab(this._rewardReward.SeasonID)
        if (seasonConf) {
            let rewardIndex = -1
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
                if ((start == end && this._rewardReward.Ranking == start) || (start != end && this._rewardReward.Ranking >= start && this._rewardReward.Ranking <= end)) {
                    rewardIndex = (index + 1)
                }
            }
            if (rewardIndex != -1) {
                let RewardIDs = seasonConf["RewardID" + rewardIndex]
                for (let index = 0; index < RewardIDs.length; index++) {
                    const id = RewardIDs[index];
                    let item = cc.instantiate(this.itemPrefab)
                    this.itemParentNode.addChild(item)
                    let sp = item.getComponent(CommonItem)
                    sp.initWithStaticId(id, seasonConf["RewardType" + rewardIndex][index], seasonConf["RewardCount" + rewardIndex][index])
                }
            }
        }
    }

    onOkClick() {
        let msg = new proto.Msg_GetSeasonRewardReq();
        Net.Send(proto.Ptl.GetSeasonRewardReq, msg);
        // this.hide()
    }
}

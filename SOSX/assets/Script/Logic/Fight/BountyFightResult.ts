import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { CardNodeState } from "../Common/CommonInterface";
import Role from "../Common/Role";
import SmallPortrait from "../Common/SmallPortrait";
import { getCurScoreStage } from "../Utils/GameUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BountyFightResult extends cc.Component {
    @property(cc.Button)
    closeBtn: cc.Button = null;
    @property(cc.Node)
    winLayout: cc.Node = null;
    @property(cc.Node)
    loseLayout: cc.Node = null;
    private exitFunction: Function = null;
    onLoad() {
        console.log("BountyFightResult onLoad");
        this.closeBtn.node.on("click", this.onExit, this);
    }
    setData(data: proto.Msg_BountyRewardPush, callback: Function) {
        // this.cardInfo.getComponent(SmallPortrait).initWithStaticId(staticId, true, CardNodeState.CARD_NODE_STATE_NONE, cardLv);
        this.exitFunction = callback;
        // 将allData切割
        let winArr = data.allData.slice(0, 4);
        let loseArr = data.allData.slice(4, 8);
        // 处理胜利数组
        for (let i = 0; i < this.winLayout.children.length; i++) {
            let winNode = this.winLayout.children[i];
            this.setPlayer(winNode, winArr[i], i + 1);
        }
        for (let i = 0; i < this.loseLayout.children.length; i++) {
            let loseNode = this.loseLayout.children[i];
            this.setPlayer(loseNode, loseArr[i], i + 5);
        }
    }
    onExit() {
        this.node.active = false;
        if (this.exitFunction) {
            this.exitFunction();
        }
    }
    // BountyRank : number // 名次 
    // 	BountyRewardType : RewardType[] // 奖励类型 
    // 	RewardID : number[] // 奖励ID 
    // 	RewardCount : number[] // 奖励数量 
    setPlayer(player: cc.Node, data: proto.IBountyFightData, rankLevel: number) {
        // 判断是否是自己
        let meNode: cc.Node = player.getChildByName("me_node");
        let battleNode: cc.Node = player.getChildByName("battleing_node");
        let infoNode: cc.Node = player.getChildByName("info_node");
        let nameLbl: cc.Label = infoNode.getChildByName("namebg").getChildByName("myname_txt").getComponent(cc.Label);
        let rankImg: cc.Sprite = infoNode.getChildByName("namebg").getChildByName("myrank_img").getComponent(cc.Sprite);
        let smallPortraitParent: cc.Node = infoNode.getChildByName("node_layout_left");
        let diamondLbl: cc.Label = player.getChildByName("diamond_node").getChildByName("diamond_count").getComponent(cc.Label);
        let cfg = tab.Data.BountyRewardTableByBountyRank.getValue(rankLevel);
        diamondLbl.string = String(cfg.RewardCount[0]);
        meNode.active = data.roleId === Role.Instance.ID;
        battleNode.active = false;
        infoNode.active = !data.isCombating
        battleNode.active = data.isCombating;
        nameLbl.string = data.name;
        // diamondLbl.string = data.
        for (let i = 0; i < smallPortraitParent.children.length; i++) {
            let cardNode = smallPortraitParent.children[i]
            let cardData = data.deckData[i];
            cardNode.getComponent(SmallPortrait).initWithStaticId(cardData.staticId, false, CardNodeState.CARD_NODE_STATE_NONE, cardData.level);
        }
        let myRankData = getCurScoreStage(data.rankScore);
        rankImg.setTexture(myRankData.RankIcon);
    }
}

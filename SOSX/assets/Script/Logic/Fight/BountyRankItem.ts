import { proto } from "../../Protocol/client_protocol";
import { isValidObj } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { getCurScoreStage, LoadResAsync } from "../Utils/GameUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BountyRankItem extends cc.Component {
    @property(cc.Node)
    heartLayout: cc.Node = null;
    @property(cc.Label)
    itemName: cc.Label = null;
    @property(cc.Label)
    itemRank: cc.Label = null;
    @property(cc.Sprite)
    itemRankImg: cc.Sprite = null;
    @property([cc.Node])
    rankBg: cc.Node[] = [];
    @property(cc.Node)
    loseNode: cc.Node = null;
    @property(cc.Node)
    meNode:cc.Node = null;
    /*  */
    public setData(data: proto.IBountyFightData, rank: number) {
        for (let i = 0; i < this.heartLayout.children.length; i++) {
            let heart = this.heartLayout.children[i];
            let heartEmpty = heart.getChildByName("heartEmpty")
            heartEmpty.active = i >= data.hp;
        }
        this.heartLayout.active = data.hp > 0;
        this.loseNode.active = data.hp === 0;
        this.itemName.string = data.name;
        this.itemRank.string = String(rank);
        for (let i = 0; i < 3; i++) {
            this.rankBg[i].active = false;
        }
        if (rank <= 3) {
            this.rankBg[rank - 1].active = true;
        }
        let myRankData = getCurScoreStage(data.rankScore);
        this.itemRankImg.setTexture(myRankData.RankIcon);
        this.meNode.active = data.roleId===Role.Instance.ID;
        // 设置队伍阵容
        // let deckData = data.deckData;
    }
}

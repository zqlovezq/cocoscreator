import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { CardNodeState, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import SmallPortrait from "../Common/SmallPortrait";
import { TeamIndex } from "../DeckLayer/DeckLayer";
import PlayerCard from "../PlayerInfo/PlayerCard";
import Waiting from "../Utils/Waiting";
import { WaitingTag } from "../Utils/WaitingTag";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RankingTeamMembers extends cc.Component {
    @property(cc.Node)
    node_card_1: cc.Node = null;

    @property(cc.Node)
    node_card_2: cc.Node = null;

    @property(cc.Node)
    node_card_3: cc.Node = null;

    @property(cc.Node)
    node_card_4: cc.Node = null;

    @property(cc.Node)
    node_card_5: cc.Node = null;
    
    // @property({
	// 	tooltip: "是自己的阵容 还是其他玩家的阵容 0是自己的阵容 1是其他玩家的阵容"
	// })
	// public spacing = 0;

    private _teamMembersArry: SmallPortrait[] = [];
    onLoad() {
        this._teamMembersArry.push(this.node_card_1.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_2.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_3.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_4.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_5.getComponent(SmallPortrait));
    }
    start(){
        // this.initTeamMembers();
    }

    /* 初始化阵容成员数据 */
    public initTeam(cardInfos:Array<proto.IItemData>) {
        let membersCount = cardInfos.length;
        for (let i = kZeroNumber; i < this._teamMembersArry.length; ++i) {
            if (i < membersCount) {
                this._teamMembersArry[i].node.active = true;
                this._teamMembersArry[i].initWithStaticId(cardInfos[i].staticId,false,CardNodeState.CARD_NODE_STATE_OWN,cardInfos[i].level);
            }
        }
    }
    onDestroy() {
        this._teamMembersArry = [];
    }
}

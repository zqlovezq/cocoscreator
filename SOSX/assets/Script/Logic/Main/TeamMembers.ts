import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { CardNodeState, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import SmallPortrait from "../Common/SmallPortrait";
import { TeamIndex } from "../DeckLayer/DeckLayer";
import Waiting from "../Utils/Waiting";
import { WaitingTag } from "../Utils/WaitingTag";

const { ccclass, property } = cc._decorator;

@ccclass
export default class teamMembers extends cc.Component {
    @property(cc.Toggle)
    toggle_team_1: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_team_2: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_team_3: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_team_4: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_team_5: cc.Toggle = null;
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

    private _teamMembersArry: SmallPortrait[] = [];
    private _teamIndex: number = kZeroNumber;
    onLoad() {
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateItemData, (param: any) => {
            this.initTeam(this._teamIndex);
        }, this);
        this._teamMembersArry.push(this.node_card_1.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_2.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_3.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_4.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_5.getComponent(SmallPortrait));

        this.toggle_team_1.node.on("toggle", this.onSelectTeam1Click, this);
        this.toggle_team_2.node.on("toggle", this.onSelectTeam2Click, this);
        this.toggle_team_3.node.on("toggle", this.onSelectTeam3Click, this);
        this.toggle_team_4.node.on("toggle", this.onSelectTeam4Click, this);
        this.toggle_team_5.node.on("toggle", this.onSelectTeam5Click, this);
    }
    public refreshUITeam() {
        //监听切换阵容编号
        Net.unlistenProtocol(proto.Ptl.ChangeTeamIndexRsp);
        Net.listenProtocol(proto.Ptl.ChangeTeamIndexRsp, (buffer, ptl) => {
            Waiting.Hide(WaitingTag.ChangeTeamIndex)
            let msg = proto.Msg_ChangeTeamIndexRsp.decode(buffer);
            cc.log("ChangeTeamIndexRsp (切换阵容) msg: " + JSON.stringify(msg))
            switch (msg.result) {
                case proto.Msg_ChangeTeamIndexRsp.ErrorCode.Succeed:
                    Role.Instance.DeckIndex = this._teamIndex;
                    cc.log("cocos ChangeTeamIndexRsp Succeed TeamMember");
                    break;

                case proto.Msg_ChangeTeamIndexRsp.ErrorCode.TeamIndexError:

                    break;
            }
        }, this);
        this._teamIndex = Role.Instance.DeckIndex;
        this.initTeam(this._teamIndex);
        this.switchTeamIndex();
    }

    /* toggle点击事件 */
    private onSelectTeam1Click(node: cc.Toggle) {
        this.setTeamIdx(Number(TeamIndex.TEAM_INDEX_ONE));
        this.refreshCurrentTeamIdx();
    }

    private onSelectTeam2Click(node: cc.Toggle) {
        this.setTeamIdx(Number(TeamIndex.TEAM_INDEX_TWO));
        this.refreshCurrentTeamIdx();
    }

    private onSelectTeam3Click(node: cc.Toggle) {
        this.setTeamIdx(Number(TeamIndex.TEAM_INDEX_THREE));
        this.refreshCurrentTeamIdx();
    }

    private onSelectTeam4Click(node: cc.Toggle) {
        this.setTeamIdx(Number(TeamIndex.TEAM_INDEX_FOUR));
        this.refreshCurrentTeamIdx();
    }

    private onSelectTeam5Click(node: cc.Toggle) {
        this.setTeamIdx(Number(TeamIndex.TEAM_INDEX_FIVE));
        this.refreshCurrentTeamIdx();
    }
    public selectTeam(teamindex: number) {
        switch (teamindex) {
            case 0:
                this.toggle_team_1.check()
                this.onSelectTeam1Click(null)
                break;
            case 1:
                this.toggle_team_2.check()
                this.onSelectTeam2Click(null)
                break;
            case 2:
                this.toggle_team_3.check()
                this.onSelectTeam3Click(null)
                break;
            case 3:
                this.toggle_team_4.check()
                this.onSelectTeam4Click(null)

                break;
            case 4:
                this.toggle_team_5.check()
                this.onSelectTeam5Click(null)
                break;
            default:
                break;
        }
    }

    /* 设置当前阵容下标 */
    private setTeamIdx(index: number): boolean {
        if (index >= Role.Instance.RoleData.decks.length) {
            return false;
        }

        this._teamIndex = index;
        return true;
    }

    protected initTeam(index: number) {
        if (!this.setTeamIdx(index)) {
            return;
        }

        this.initTeamMembers();
    }

    public refreshTeam() {
        this.initTeamMembers();
    }
    private refreshCurrentTeamIdx() {
        this.refreshTeam();
        this.changeTeamIndexMsg();
    }
    private changeTeamIndexMsg() {
        let msg = new proto.Msg_ChangeTeamIndexReq();
        msg.deckIndex = this._teamIndex;
        Net.Send(proto.Ptl.ChangeTeamIndexReq, msg);
        Waiting.Show(WaitingTag.ChangeTeamIndex)
    }
    
    /* 初始化阵容成员数据 */
    private initTeamMembers() {
        let team: proto.IDeckData = Role.Instance.RoleData.decks[this._teamIndex];
        let membersCount = team.deckItems.length;
        for (let i = kZeroNumber; i < this._teamMembersArry.length; ++i) {
            if (i < membersCount) {
                this._teamMembersArry[i].node.active = true;
                this._teamMembersArry[i].initData(team.deckItems[i],false,
                    CardNodeState.CARD_NODE_STATE_IN_TEAM);
            }
        }
    }
    private switchTeamIndex() {
        this.toggle_team_1.isChecked = (TeamIndex.TEAM_INDEX_ONE === this._teamIndex);
        this.toggle_team_2.isChecked = (TeamIndex.TEAM_INDEX_TWO === this._teamIndex);
        this.toggle_team_3.isChecked = (TeamIndex.TEAM_INDEX_THREE === this._teamIndex);
        this.toggle_team_4.isChecked = (TeamIndex.TEAM_INDEX_FOUR === this._teamIndex);
        this.toggle_team_5.isChecked = (TeamIndex.TEAM_INDEX_FIVE === this._teamIndex);
    }
    onDestroy() {
        this._teamMembersArry = [];
    }
}

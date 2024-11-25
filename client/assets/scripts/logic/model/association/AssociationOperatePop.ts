import { _decorator, Component, EventTouch, Label, Node, NodeEventType } from 'cc';
import { proto } from 'client_protocol';
import { AssociationControl } from './AssociationControl';
import { tab } from '../../../Table/table_gen';
import { AssociationData } from './AssociationData';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

@ccclass('AssociationOperatePop')
export class AssociationOperatePop extends Component {
    @property(Node)
    btn_captain: Node = null;
    @property(Node)
    btn_sub: Node = null;
    @property(Node)
    btn_elite: Node = null;
    @property(Node)
    btn_revert: Node = null;//撤销职务
    @property(Node)
    btn_kick: Node = null;
    @property(Label)
    lbl_contribution: Label = null;
    private _data: proto.IGuildMember = null;
    setData(data: proto.IGuildMember) {
        this._data = data;
        this.btn_captain.active = true;
        this.btn_sub.active = false;
        this.btn_elite.active = false;
        this.btn_revert.active = true;
        this.btn_kick.active = true;

        this.lbl_contribution.string = String(data.contribution);
        const roleMemberData = AssociationData.ins.getMemberData(RoleData.ins.id);


        const subCount = AssociationData.ins.getJobInMemberCount(tab.GuildPosition.GuildPosition_VicePresident);
        const subMaxCount = tab.getData().GuildPositionTableByPosition.getValue(tab.GuildPosition.GuildPosition_VicePresident).MaxCount;

        const eliteCount = AssociationData.ins.getJobInMemberCount(tab.GuildPosition.GuildPosition_Elite);
        const eliteMaxCount = tab.getData().GuildPositionTableByPosition.getValue(tab.GuildPosition.GuildPosition_Elite).MaxCount;

        const kickCount = tab.getData().GuildPositionTableByPosition.getValue(roleMemberData.job).KickOut;

        this.btn_captain.active = data.job > tab.GuildPosition.GuildPosition_President && roleMemberData.job === tab.GuildPosition.GuildPosition_President
        this.btn_revert.active = data.job > roleMemberData.job && data.job !== tab.GuildPosition.GuildPosition_Member;
        this.btn_kick.active = data.job > roleMemberData.job && kickCount > 0 && roleMemberData.kickOutMemberCount < kickCount;
        this.btn_elite.active = data.job > roleMemberData.job && roleMemberData.job < tab.GuildPosition.GuildPosition_Elite && data.job !== tab.GuildPosition.GuildPosition_Elite && eliteCount < eliteMaxCount;
        this.btn_sub.active = data.job > roleMemberData.job && roleMemberData.job < tab.GuildPosition.GuildPosition_VicePresident && data.job !== tab.GuildPosition.GuildPosition_VicePresident && subCount < subMaxCount;
    }
    /* 设置职务 */
    setGuildJob(e: EventTouch, job: string) {
        this.node.active = false;
        AssociationControl.ins.reqSetGuildMemberJob(this._data.roleId, Number(job));
    }
    /* 踢出公会 */
    deleteGuildJob() {
        this.node.active = false;
        AssociationControl.ins.reqKickGuildMember(this._data.roleId);
    }
}



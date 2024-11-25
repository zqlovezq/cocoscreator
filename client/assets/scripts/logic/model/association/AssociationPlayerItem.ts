import { _decorator, Color, Component, EventTouch, Label, Node, NodeEventType } from 'cc';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { proto } from 'client_protocol';
import { SimpleRoleInfo } from '../friends/SimpleRoleInfo';
import { PlayerHeadItem } from '../common/PlayerHeadItem';
import { GameUtil, getTimeGuildTXT } from '../../utils/GameUtil';
import { AssociationData } from './AssociationData';
import { RoleData } from '../role/RoleData';
import { AssociationView } from './AssociationView';
import { AssociationMainView } from './AssociationMainView';
import { AssociationControl } from './AssociationControl';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { CommonTipsPop } from '../common/CommonTipsPop';
const { ccclass, property } = _decorator;

@ccclass('AssociationPlayerItem')
export class AssociationPlayerItem extends InfiniteCell {
    @property(PlayerHeadItem)
    palyerHerdItem: PlayerHeadItem = null;
    @property(Label)
    lbl_name: Label = null;
    @property(Label)
    lbl_power: Label = null;
    @property(Label)
    lbl_time: Label = null;
    @property(Node)
    node_exit: Node = null;
    @property(Node)
    node_leader: Node = null;
    @property(Node)
    node_accuse: Node = null;//弹劾按钮
    @property(Node)
    node_me: Node = null;
    @property(Node)
    node_president_img: Node = null;
    @property(Node)
    node_vicePresident_img: Node = null;
    @property(Node)
    node_elite_img: Node = null;
    @property(Node)
    node_member_img: Node = null;
    private _data: proto.IGuildMember = null;
    private _view: AssociationMainView = null;
    private _guildPositionTab: tab.GuildPositionTable = null;
    protected onLoad(): void {
        // this.node.on(NodeEventType.TOUCH_START,this.clickItem,this);
    }
    UpdateContent(data): void {
        this._data = data.data;
        this._view = data.view;
        let guildData: proto.SimpleGuild = null;
        if (data.guildData) {
            guildData = data.guildData;
            this._guildPositionTab = tab.getData().GuildPositionTableByPosition.getValue(this._data.job);
        } else {
            guildData = AssociationData.ins.getAssocitionSimpleInfo();
            const memberInfo = AssociationData.ins.getMemberData(RoleData.ins.id);
            if (memberInfo) {
                this._guildPositionTab = tab.getData().GuildPositionTableByPosition.getValue(memberInfo.job);
            }
        }

        const playerInfo = new SimpleRoleInfo();
        playerInfo.merge(this._data);

        this.palyerHerdItem.initHeadInfo({ roleInfo: playerInfo });
        this.palyerHerdItem.setCloseCallBack(() => {
            UIMgr.ins.show({ viewName: ViewName.CheckRoleInfoPop, data: { "roleId": this._data.roleId } })
        })

        this.lbl_name.string = this._data.name;
        this.lbl_power.string = GameUtil.convertNumber(this._data.powerScore);

        let offLineTime = -1;
        if(this._data.roleId !== RoleData.ins.id){
            offLineTime = AssociationData.ins.getMemberOffLineTime(this._data);
        }
        if (data.guildData) {
            this.node_leader.active = false;
            this.node_accuse.active = false;
            this.node_exit.active = false;
        } else {       
            const roleMemberData = AssociationData.ins.getMemberData(RoleData.ins.id);                           
            this.node_leader.active = this._data.roleId !== RoleData.ins.id &&//不是自己
                                      this._data.roleId !== guildData.leaderId && //不是会长   
                                      this._guildPositionTab && 
                                    //   this._guildPositionTab.Appoint&&//有任职能力
                                      roleMemberData.job<this._data.job;//自己的职位要大于列表职位
            this.node_accuse.active = this._data.roleId == guildData.leaderId && RoleData.ins.id !== guildData.leaderId && offLineTime > 86400 * 7;
            this.node_exit.active = (RoleData.ins.id === this._data.roleId && this._data.roleId !== guildData.leaderId && RoleData.ins.id !== guildData.leaderId) || AssociationData.ins.getMemberArr().length === 1;
        }
        if (offLineTime > 0) {
            //this.lbl_time.string = getTimeGuildTXT(offLineTime)+"前";
            this.lbl_time.string = LangMgr.getCombineString("ui_association_51", [getTimeGuildTXT(offLineTime)]);
            this.lbl_time.color = new Color().fromHEX("#F71315");
        } else {
            this.lbl_time.string = LangMgr.getLab("ui_association_2");
            this.lbl_time.color = new Color().fromHEX("#3A9830");
        }
        this.node_me.active = this._data.roleId === RoleData.ins.id;
        this.node_president_img.active = this._data.job === tab.GuildPosition.GuildPosition_President;
        this.node_vicePresident_img.active = this._data.job === tab.GuildPosition.GuildPosition_VicePresident;
        this.node_elite_img.active = this._data.job === tab.GuildPosition.GuildPosition_Elite;
        this.node_member_img.active = this._data.job === tab.GuildPosition.GuildPosition_Member;
    }
    clickSmallBtn(event: EventTouch, idx: string) {
        this._view.showSmallTips(event.target, this._data);
    }
    // 退出公会
    clickExit() {
        // 加一个确认弹窗
        const tipsStr = LangMgr.getLab("ui_association_69");
        CommonTipsPop.create(tipsStr, ((val) => {
            if (val) {
                AssociationControl.ins.reqQuitGuild();
            }
        }))
    }
    /* 弹劾会长 */
    reqImpeachGuildLeader() {
        AssociationControl.ins.reqImpeachGuildLeader();
    }
}



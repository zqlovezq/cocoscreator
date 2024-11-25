import { _decorator, Component, Label, Node, Sprite } from 'cc';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { AssociationControl } from './AssociationControl';
import { GameUtil, refreshFlagImg } from '../../utils/GameUtil';
import { AssociationData } from './AssociationData';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

@ccclass('AssociationApplyItem')
export class AssociationApplyItem extends InfiniteCell {
    @property(Label)
    lbl_level: Label = null;
    @property(Label)
    lbl_name: Label = null;
    @property(Label)
    lbl_person_count: Label = null;
    @property(Label)
    lbl_power_score: Label = null;
    @property(Node)
    node_not_check: Node = null;
    @property(Node)
    node_need_check: Node = null;
    @property(Sprite)
    sp_flag_img: Sprite = null;
    @property(Node)
    node_apply: Node = null;
    @property(Node)
    node_already_apply: Node = null;

    private guildData: proto.ISimpleGuild = null;
    UpdateContent(data: proto.ISimpleGuild ) {
        /* 
        * data:
        * areaId: 2
        * createTime: 1725331484
        * exp: 0
        * id: "66d6781cf48cdf9788e5540d"
        * leaderId: "668e23576fa96377e2bfa8ec"
        * level: 1
        * name: "还有谁"
        * notice: "今日无事发生"
        * powerScore: 0
        */
        this.node.name = data.id;
        this.guildData = data;
        this.lbl_level.string = "Lv." + data.level;
        this.lbl_name.string = data.name;
        // 当前等级最大的人数
        const lvData = tab.getData().GuildLevelTableById.getValue(data.level)
        const maxPersonCount = lvData.MaxCount;
        this.lbl_person_count.string = data.memberCount + "/" + maxPersonCount;
        this.lbl_power_score.string = GameUtil.convertNumber(data.powerScore);
        this.node_not_check.active = !data.needCheck;
        this.node_need_check.active = data.needCheck;
        // 显示旗帜
        refreshFlagImg(data.flagId,this.sp_flag_img);
        this.alreadyApply(AssociationData.ins.getGuildIsRequest(data.id));
    }
    /* 申请公会 */
    applyEnterGuild() {
        AssociationControl.ins.reqJoinGuild(this.guildData.id);
    }
    /* 显示已申请 */
    alreadyApply(isApply: boolean) {
        this.node_already_apply.active = isApply;
        this.node_apply.active = !isApply;
    }
    onClickGuild() {
        UIMgr.ins.show({ viewName: ViewName.AssociationMainPop, data: { "rankData": this.guildData } })
    }
}



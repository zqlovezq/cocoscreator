import { _decorator, Component, Label, labelAssembler, Node } from 'cc';
import { PlayerHeadItem } from '../common/PlayerHeadItem';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { ComponentBase } from '../../../framework/base/ComponentBase';
import { EventMgr } from '../../mgr/EventMgr';
import { HeroInfo } from '../hero/HeroInfo';
import { SimpleRoleInfo } from '../friends/SimpleRoleInfo';
import { RoleData } from '../role/RoleData';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
const { ccclass, property } = _decorator;

/**
 * 
 * FengyunBtnItem
 * zhudingchao
 * Wed Jul 17 2024 14:44:13 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/fengyunRanking/FengyunBtnItem.ts
 *
 */

@ccclass('FengyunBtnItem')
export class FengyunBtnItem extends ComponentBase {
    @property(PlayerHeadItem)
    headItem: PlayerHeadItem = null;
    @property(Label)
    nameLab: Label = null;
    @property(Label)
    rankNameLab: Label = null;
    @property(Node)
    stateNode: Node = null;
    @property(Node)
    node_red: Node = null;
    private table: tab.ActivityRankTable;
    private rankMsg: proto.Msg_GetRankRsp;
    register() {
        EventMgr.onMsg(proto.Ptl.GetRankRsp, this.on_s2c_GetRankRsp, this);
    }

    initView(table: tab.ActivityRankTable) {

        this.rankNameLab.string = LangMgr.getLab(table.WordKey);
        this.table = table;
        this.requestGetRank();
    }
    requestGetRank() {
        let msg = new proto.Msg_GetHeroRankReq();
        msg.rankId = this.table.RankId;
        Net.Send(proto.Ptl.GetRankReq, msg);

    }
    on_s2c_GetRankRsp(msg: proto.Msg_GetRankRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;

        if (msg.rankId == this.table.RankId) {
            this.rankMsg = msg;
            if (this.rankMsg.rankList && this.rankMsg.rankList.length > 0) {
                let role = this.rankMsg.rankList[0].simple;
                this.nameLab.string = role.name;
                this.headItem.node.active = true;
                let info = new SimpleRoleInfo(role);
                this.headItem.initHeadInfo({ roleInfo: info });
            } else {
                this.headItem.node.active = false;
                //this.nameLab.string="虚位以待"
                this.nameLab.string = LangMgr.getLab("ui_rank_7")
            }
            /* 刷新一下 */
            this.stateNode.active = RoleData.ins.getServerUtcTime() >= msg.settleTime;
        }
        this.refreshRed();

    }

    onClickBtn() {
        if (this.rankMsg) {
            UIMgr.ins.show({ "viewName": ViewName.FengyunRankingView, data: { "id": this.table.Id, "rankMsg": this.rankMsg } })
        }

    }
    refreshRed() {
        this.node_red.active = false;
        for (let i = 0; i < this.table.TaskIds.length; i++) {
            const taskId = this.table.TaskIds[i];
            const isRed = RedMgr.ins.isRed(RedDotType.Feng_Yun_Rank, String(101), String(taskId));
            if (isRed && !this.stateNode.active) {
                this.node_red.active = true;
                break
            }
        }
    }

}
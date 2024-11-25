import { _decorator, Component, instantiate, Label, Node, Prefab, Toggle } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { AssociationControl } from './AssociationControl';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import InfiniteList from '../../../Common/InfiniteList/InfiniteList';
import { AssociationApplyListItem } from './AssociationApplyListItem';
import { SettingsManager } from '../role/SettingsManager';
import { tab } from '../../../Table/table_gen';
import { AssociationData } from './AssociationData';
const { ccclass, property } = _decorator;

@ccclass('AssociationApplyListPop')
export class AssociationApplyListPop extends ViewPop {
    @property(InfiniteList)
    list_view: InfiniteList = null;
    @property(Prefab)
    pfb_item: Prefab = null;
    @property(Toggle)
    toggle_auto_enter: Toggle = null;//自动审批加入按钮
    @property(Label)
    lbl_members_count: Label = null;
    @property(Label)
    lbl_total_count: Label = null;
    @property(Node)
    node_no_body: Node = null;
    private _list: proto.IJoinGuildRequest[] = []
    private _clickToggle: boolean = false
    onShow(): void {
        this._clickToggle = false
        this.reqGetJoinGuildRequests();
        this.toggle_auto_enter.isChecked = !SettingsManager.ins.getSetting("needCheckAssociation");
        const memberInfo = AssociationData.ins.getGuildMembersCount();
        this.lbl_members_count.string = String(memberInfo.memberCount)
        this.lbl_total_count.string = String(memberInfo.totalCount);
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetJoinGuildRequestsRsp, this.on_s2c_GetJoinGuildRequestsRsp, this);
        EventMgr.onMsg(proto.Ptl.ProcessGuildApplyRsp, this.on_s2c_ProcessGuildApplyRsp, this);
        /* 全部拒绝申请 */
        EventMgr.onMsg(proto.Ptl.RejectAllGuildApplyRsp, this.on_s2c_RejectAllGuildApplyRsp, this);
    }
    unRegister(): void {
        super.unRegister();
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    reqGetJoinGuildRequests() {
        AssociationControl.ins.reqGetJoinGuildRequests(0);
    }
    on_s2c_RejectAllGuildApplyRsp(msg: proto.Msg_RejectAllGuildApplyRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this._list = [];
        this.initList();
    }
    on_s2c_GetJoinGuildRequestsRsp(msg: proto.Msg_GetJoinGuildRequestsRsp) {
        this._list = msg.requests
        this.initList();
    }
    initList(isRefresh?: boolean) {
        this.node_no_body.active = this._list.length === 0
        this.list_view.node.active = this._list.length > 0
        if (isRefresh) {
            this.list_view.Refresh();
        } else {
            this.list_view.Init({
                getCellNumber: this.getCellCount.bind(this),
                getCellSize: this.getCellHeight.bind(this),
                getCellIdentifer: this.getCellIdentifer.bind(this),
                getCellView: this.getCellView.bind(this),
                getCellData: this.GetCellData.bind(this),
            });
        }
    }
    getCellCount() {
        return this._list.length
    }
    getCellHeight(idx: number) {
        return 100
    }
    getCellIdentifer(idx: number) {
        return "AssociationApplyItem";
    }
    getCellView(idx: number, identifer: string) {
        let cell = instantiate(this.pfb_item).getComponent(AssociationApplyListItem);
        return cell;
    }
    GetCellData(idx: number) {
        return this._list[idx];
    }
    onClickEnter() {
        this._clickToggle = true;
    }
    onClickAllReject() {
        if (this._list.length > 0) {
            AssociationControl.ins.reqRejectAllGuildApply();
        }
    }
    onClickAutoEnterToggle() {
        if (this._clickToggle) {
            this._clickToggle = false;
            AssociationControl.ins.reqSetGuildNeedCheck(!this.toggle_auto_enter.isChecked);
        }
    }
    on_s2c_ProcessGuildApplyRsp(msg: proto.Msg_ProcessGuildApplyRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.reqGetJoinGuildRequests();
    }
}



import { _decorator, Component, Label, Node } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { proto } from 'client_protocol';
import { AWARD_STATE, JIANGHU_TYPE } from '../../../../Common/script/EnumTypeMgr';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { Net } from '../../../net/Net';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { LangMgr } from '../../../mgr/LangMgr';
import { GameplayViewDataMgr } from '../GameplayViewDataMgr';
import InfiniteCell from '../../../../Common/InfiniteList/InfiniteCell';
import { PowerDifficultyTag } from '../../home/PowerDifficultyTag';
import { RoleData } from '../../role/RoleData';
const { ccclass, property } = _decorator;

@ccclass('InstanceRewardPopItem')
export class InstanceRewardPopItem extends InfiniteCell {
    @property(Node)
    node_lock: Node = null;
    @property(Node)
    node_go: Node = null;
    @property(Node)
    node_receive: Node = null;
    @property(Node)
    node_got: Node = null;
    @property(Node)
    node_layout: Node = null;
    @property(Label)
    lbl_stage_id: Label = null;

    private _state: AWARD_STATE = AWARD_STATE.NONE;
    private _tabData: tab.PveClearStageTable = null;
    private view_type: JIANGHU_TYPE = JIANGHU_TYPE.NONE
    UpdateContent(data: any) {
        this._tabData = data.data;
        this.view_type = data.view;
        const exportData: proto.IExportStageInfo = data.exportData;
        this.node.name = String(this._tabData.StageId);
        if (exportData.receivedFirstRewardStageIds.indexOf(this._tabData.StageId) > -1) {
            this._state = AWARD_STATE.GOT;
        } else {
            if (GameplayViewDataMgr.ins.getCurSweepStageId(this.view_type) < this._tabData.StageId) {
                if (GameplayViewDataMgr.ins.curFightStageId === this._tabData.StageId) {
                    this._state = AWARD_STATE.GO;
                } else {
                    this._state = AWARD_STATE.LOCK;
                }
            } else {
                this._state = AWARD_STATE.RECEIVE;
            }
        }
        // 拿着stageID去pveStageTable找数据
        const pveStageTab = tab.getData().PveStageTableByStageId.getValue(this._tabData.StageId);
        this.lbl_stage_id.string = LangMgr.getCombineString("ui_instance_1", [LangMgr.getLab(pveStageTab.StageName)]);
        this.setAwardState(this._state);
        this.showAwardItem();

    }
    // 显示奖励
    showAwardItem() {
        this.node_layout.destroyAllChildren();
        for (let i = 0; i < this._tabData.ClearRewardItemIds.length; i++) {
            const itemId = this._tabData.ClearRewardItemIds[i];
            const itemCount = this._tabData.ClearRewardItemNum[i];
            if (itemId) {
                const itemInfo = new ItemInfo();
                itemInfo.itemId = itemId;
                itemInfo.num = itemCount;
                ItemPoolMgr.ins.createItem(itemInfo, this.node_layout);
            }
        }
    }
    setAwardState(state: AWARD_STATE) {
        this.node_lock.active = false;
        this.node_go.active = false;
        this.node_receive.active = false;
        this.node_got.active = false;
        switch (state) {
            case AWARD_STATE.GO:
                this.node_go.active = true;
                break;
            case AWARD_STATE.GOT:
                this.node_got.active = true;
                break;
            case AWARD_STATE.LOCK:
                this.node_lock.active = true;
                break;
            case AWARD_STATE.RECEIVE:
                this.node_receive.active = true;
                break;
            default:
                break;
        }
    }
    // 点击前往副本
    goStage() {
        let view_type = JIANGHU_TYPE.NONE
        if (this._tabData.StageId < 10200) {
            view_type = JIANGHU_TYPE.GoldStage
        } else {
            view_type = JIANGHU_TYPE.FeedStage
        }
        UIMgr.ins.hideView(ViewName.InstanceRewardPop);
        UIMgr.ins.show({ viewName: ViewName.InstanceZonesView, data: [view_type] })
    }
    // 点击领取奖励
    getAward() {
        let msg = new proto.Msg_ReceiveExploreStageFirstRewardReq();
        msg.stageId = this._tabData.StageId;
        Net.Send(proto.Ptl.ReceiveExploreStageFirstRewardReq, msg)
    }
}



import { _decorator, Component, error, EventTouch, instantiate, Node, Prefab, Toggle } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { BattlePassDataMgr } from './BattlePassDataMgr';
import { tab } from '../../../../Table/table_gen';
import { LoadResAsync } from '../../../mgr/ResMgr';
import { BattlePassItem } from './BattlePassItem';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { TaskData } from '../../task/TaskData';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
import { Net } from '../../../net/Net';
const { ccclass, property } = _decorator;

@ccclass('BattlePassView')
export class BattlePassView extends ViewPop {
    @property(Node)
    activityNode: Node = null;
    @property(Node)
    node_toggle_content: Node = null;
    private view_type: tab.BattlePassTab = tab.BattlePassTab.BattlePassTab_MainChapterPass;
    private currNode: Node = null;
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {
        // 购买战令等级
        EventMgr.onMsg(proto.Ptl.BuyBattlePassLevelRsp, this.on_s2c_BuyBattlePassLevelRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveBattlePassTaskRewardsRsp, this.on_s2c_ReceiveBattlePassTaskRewardsRsp, this);
        EventMgr.onMsg(proto.Ptl.GetBattlePassInfoMapRsp, this.on_s2c_GetBattlePassInfoMapRsp, this);
    }
    unRegister(): void {
        super.unRegister();
    }
    on_s2c_GetBattlePassInfoMapRsp(msg: proto.Msg_GetBattlePassInfoMapRsp){
        this.setOnshow();
    }
    onShow(): void {
        let pass_msg = new proto.Msg_GetBattlePassInfoMapReq();
        Net.Send(proto.Ptl.GetBattlePassInfoMapReq, pass_msg);
    }
    setOnshow() {
        // 默认章节基金
        RedMgr.refreshEvent(RedDotType.Battle_Pass);
        this.view_type = this.openData ? this.openData : BattlePassDataMgr.ins.getDefaultPassName();
        this.switchView(null, String(this.view_type))
        for (let i = 1; i <= 6; i++) {
            const toggleNode = this.node_toggle_content.getChildByName("toggle" + i);
            const data = BattlePassDataMgr.ins.getDataByPassName(i);
            toggleNode.active = data && data.length > 0;
            toggleNode.getComponent(Toggle).isChecked = i === this.view_type;
        }
    }
    async switchView(e: EventTouch, customValue: string) {
        let tabName = Number(customValue);
        if (e && this.view_type === tabName) {
            return;
        }
        if (this.currNode) {
            this.currNode.active = false;
        }
        this.view_type = tabName;

        let itemTs = null;
        if (this.activityNode.getChildByName(customValue)) {
            itemTs = this.activityNode.getChildByName(customValue).getComponent(BattlePassItem)
        }
        if (!itemTs) {
            let view = await this.createView(this.view_type);
            if (view) {
                const itemTs = view.getComponent(BattlePassItem);
                this.currNode = view;
                itemTs.onShow(this.view_type);
            }
        } else {
            itemTs.node.active = true;
            this.currNode = itemTs.node;
            itemTs.onShow(this.view_type);
        }
    }
    async createView(viewName: tab.BattlePassTab) {
        let viewTab = BattlePassDataMgr.ins.getDataByPassName(viewName)[0];
        if (viewTab && viewTab.PrefabUrl) {
            let pfb: Prefab = await LoadResAsync(viewTab.PrefabUrl, Prefab);
            let view = instantiate(pfb);
            view.name = String(viewName);
            view.parent = this.activityNode;
            return view;
        } else {
            error("view路径没有配置", viewName)
        }
        return null;
    }
    // 购买等级
    on_s2c_BuyBattlePassLevelRsp(msg: proto.Msg_BuyBattlePassLevelRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        RedMgr.refreshEvent(RedDotType.Battle_Pass);
        // 刷新一下progress
        const battlePass = BattlePassDataMgr.ins.getBattlePassData(msg.id);
        for (let i = 0; i < battlePass.tasks.length; i++) {
            const taskId = battlePass.tasks[i].id;
            const task = TaskData.ins.getBattlePassTaskInfo(taskId)
            const taskTab = tab.getData().TaskTableById.getValue(taskId);
            if (task.progress < taskTab.FinishParam1) {
                task.progress = msg.progress;
            }
        }
        this.currNode.getComponent(BattlePassItem).refreshView();
    }
    // 领奖
    on_s2c_ReceiveBattlePassTaskRewardsRsp(msg: proto.Msg_ReceiveBattlePassTaskRewardsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.currNode.getComponent(BattlePassItem).refreshView();
    }
}



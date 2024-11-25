import { _decorator, Component, Label, log, Node, ProgressBar, Sprite, Vec3 } from 'cc';
import InfiniteCell from '../../../../Common/InfiniteList/InfiniteCell';
import { ItemInfo } from '../../item/ItemInfo';
import { tab } from '../../../../Table/table_gen';
import { CommonItem } from '../../item/CommonItem';
import { proto } from 'client_protocol';
import { TaskData } from '../../task/TaskData';
import { BattlePassDataMgr } from './BattlePassDataMgr';
import { LangMgr } from '../../../mgr/LangMgr';
import { Net } from '../../../net/Net';
const { ccclass, property } = _decorator;

@ccclass('BattlePassItemCell')
export class BattlePassItemCell extends InfiniteCell {
    @property([CommonItem])
    items: CommonItem[] = [];
    @property(Node)
    node_mask: Node = null;
    @property(Label)
    lbl_name: Label = null;
    @property(Node)
    node_lock: Node = null;
    @property(ProgressBar)
    bar_progress: ProgressBar = null;
    @property(Node)
    node_lock_extra: Node = null;
    @property(Node)
    node_bg_1: Node = null;
    @property(Node)
    node_bg_2: Node = null;
    @property(Sprite)
    sp_gray: Sprite = null;

    @property(Node)
    node_got_1: Node = null;
    @property(Node)
    node_got_2: Node = null;
    @property(Node)
    node_got_3: Node = null;
    UpdateContent(data: any): void {
        const taskId = data.taskId;
        const passBattleId = data.battleId;

        const taskInfo = TaskData.ins.getBattlePassTaskInfo(taskId);
        const taskTab = tab.getData().TaskTableById.getValue(taskId);
        const battlePass = BattlePassDataMgr.ins.getBattlePassData(passBattleId);
        const rewards = taskTab.RewardItemIds.concat(taskTab.BattlePassRewardIds);
        const nums = taskTab.RewardItemNum.concat(taskTab.BattlePassRewardNum);
        this.node_bg_1.active = taskId % 2 == 1;
        this.node_bg_2.active = taskId % 2 == 0;
        this.bar_progress.node.active = true;
        this.node_lock.active = !battlePass.isBoughtAdvance;
        let finishParam = taskTab.FinishParam1;
        if (data.notSetY) {
            this.node.setPosition(new Vec3(0, 10, 0));
            this.node_bg_1.active = false;
            this.node_bg_2.active = false;
            this.bar_progress.node.active = false;
        } else {
            const pos = this.node.getPosition();
            this.node.setPosition(new Vec3(pos.x, 0, 0));
            this.node_mask.active = taskInfo.progress < finishParam;
            this.sp_gray.grayscale = taskInfo.progress < finishParam;
        }
        this.lbl_name.string = LangMgr.getLab(taskTab.Describe);
        this.bar_progress.progress = taskInfo.progress >= finishParam ? 1 : 0;
        this.node_got_1.active = false;
        this.node_got_2.active = false;
        this.node_got_3.active = false;
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            item.node.active = true;
            this.node_lock_extra.active = true;
            const award = new ItemInfo();
            award.itemId = rewards[i];
            award.num = nums[i];
            if (!award.itemId) {
                item.node.active = false;
                this.node_lock_extra.active = false;
                return;
            }
            item.initData(award);
            const node_can_get = item.node.parent.getChildByName("canget_node");
            node_can_get.active = false;
            if (i === 0) {
                this.node_got_1.active = taskInfo.isCanReceived;
            } else {
                node_can_get.active = battlePass.isBoughtAdvance && !taskInfo.isAdvanceReceived && taskInfo.progress >= finishParam;
                this["node_got_" + (i+1)].active = award.itemId && node_can_get.active;
            }
            if (taskInfo.isReceived && i == 0) {
                item.setSelectState(true);
            }
            if (taskInfo.isAdvanceReceived && i !== 0) {
                item.setSelectState(true);
            }
            item.setTouchCallBack(null);
            if (node_can_get.active) {
                item.setTouchCallBack(() => {
                    const result = BattlePassDataMgr.ins.getAllReceiveTaskId(passBattleId);
                    let pass_msg = new proto.Msg_ReceiveBattlePassTaskRewardsReq();
                    pass_msg.taskIds = result;
                    pass_msg.id = passBattleId;
                    log("cocos pass_msg =", pass_msg)
                    Net.Send(proto.Ptl.ReceiveBattlePassTaskRewardsReq, pass_msg);
                })
            }

        }
    }
}



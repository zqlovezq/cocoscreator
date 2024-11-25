import { _decorator, Component, instantiate, Label, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { AssociationData } from './AssociationData';
import { TaskCaseItem } from '../task/TaskCaseItem';
import { TaskData } from '../task/TaskData';
import { tab } from '../../../Table/table_gen';
import { ItemData } from '../item/ItemData';
import { TaskBoxItem } from '../task/TaskBoxItem';
import { TASKDAILY } from '../../../Common/script/EnumTypeMgr';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
const { ccclass, property } = _decorator;

@ccclass('AssociationTaskPop')
export class AssociationTaskPop extends ViewPop {
    @property(Prefab)
    pfb_item:Prefab = null;
    @property(Node)
    node_content:Node = null;
    @property([TaskBoxItem])
    taskBoxItems: Array<TaskBoxItem> = [];
    @property(Label)
    activeNumLab:Label = null;
    onShow(): void {
        this.asyncView();
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.ReceiveGuildDailyTasksRewardsRsp, this.on_s2c_ReceiveGuildDailyTasksRewardsRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveGuildTaskChestRewardsRsp, this.on_s2c_ReceiveGuildTaskChestRewardsRsp, this);
    }
    on_s2c_ReceiveGuildTaskChestRewardsRsp(msg: proto.Msg_ReceiveGuildTaskChestRewardsRsp){
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
            this.asyncView();
        }
    }
    unRegister(): void {
        super.unRegister()
    }
    asyncView(){
        // 获取所有的帮会任务
        this.node_content.destroyAllChildren();
        const tasks = AssociationData.ins.getAllTasksTab();
        for(let i=0;i<tasks.length;i++){
            const taskId = tasks[i].Id
            const taskInfo = TaskData.ins.getGuildTaskInfo(taskId);
            const item = instantiate(this.pfb_item);
            item.parent = this.node_content;
            let com = item.getComponent(TaskCaseItem);
            com.initData(taskInfo);
        }
        this.updateBoxItem();
    }
    updateBoxItem(){
        let actives = tab.getData().GetKeyValue_ConfigTable().GuildDailyTaskRewardNeedCount;
        const dailyActiveNum = AssociationData.ins.getAssocitionInfo().dailyFinishedTaskNumber;
        this.activeNumLab.string = dailyActiveNum + "";
        for (let i: number = 0; i < actives.length; i++) {
            let lastValue = 0;
            let pro = 0;
            if (i > 0) {
                lastValue = actives[i - 1];
            }
            if (dailyActiveNum <= lastValue) {
                pro = 0;
            } else if (dailyActiveNum >= actives[i]) {
                pro = 1;
            } else {
                pro = (dailyActiveNum - lastValue) / (actives[i] - lastValue);
            }
            this.taskBoxItems[i].initView(TASKDAILY.GUILD, i, pro, actives[i]);
        }
    }
    on_s2c_ReceiveGuildDailyTasksRewardsRsp(msg: proto.Msg_ReceiveGuildDailyTasksRewardsRsp){
        if (!msg.error||msg.error.code == proto.CommonErrorCode.Succeed) {
            AssociationData.ins.getAssocitionInfo().dailyFinishedTaskNumber++;
            this.asyncView();
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        }
    }
}



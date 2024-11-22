/*
 * @Descripttion: 格鲁特任务奖励节点
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { getQualityIconPath } from "../Activity/SevenSignIn/ManagerSevenSignInData";
import boxtips from "../Common/boxtips";
import { isValidObj, k255, kNoneString, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import ItemTips from "../Common/ItemTips";
import { getItemIconURL, LoadResAsync, showItemTips } from "../Utils/GameUtils";
import ManagerGroutTaskInfo from "./ManagerGroutTaskInfo";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GroutTaskRewardNode extends cc.Component {

    @property(cc.Node)
    node_can_receive: cc.Node = null;

    @property(cc.Sprite)
    spr_normal_bg: cc.Sprite = null;

    @property(cc.Node)
    node_item: cc.Node = null;

    @property(cc.Sprite)
    spr_item_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_frame: cc.Sprite = null;
    
    @property(cc.Sprite)
    spr_reward_icon: cc.Sprite = null;

    @property(cc.Label)
    lbl_reward_count: cc.Label = null;

    @property(cc.Sprite)
    spr_already_receive: cc.Sprite = null;

    @property(cc.Node)
    node_step_layout: cc.Node = null;

    @property(cc.Label)
    lbl_step: cc.Label = null;

    @property(cc.Label)
    lbl_receive_tip: cc.Label = null;

    private _current_step_val: number = kOneNumber;
    private _task_state: proto.TaskState;
    private _bStepReward: boolean = false;
    private _task_uuid: string;
    private _rewardType: tab.RewardType;
    private _rewardId: number;
    private _original_item_y: number;

    onLoad () {
        this.node_step_layout.opacity     = kZeroNumber;
        this.lbl_receive_tip.node.opacity = kZeroNumber;
        this._original_item_y = this.node_item.getPosition().y;

        //监听通知更新正在运行的任务
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateRunningGroutTask, (param: any)=>{
            if(!ManagerGroutTaskInfo.getInstance().getRunningTaskData()){
                return;
            }
            
            if(this._task_uuid === ManagerGroutTaskInfo.getInstance().getRunningTaskData().UUId){
                this._task_state = ManagerGroutTaskInfo.getInstance().getRunningTaskData().state;
                this.setRewardReceiveState();
            }
        }, this);
    }

    start () {}

    public initData(taskUUID: string, rewardData: proto.IRewardSimpleInfo, state: proto.TaskState, step: number, bStepReward: boolean){
        let iconObj = getItemIconURL(rewardData.rewardId, rewardData.rewardType);
        if(iconObj){
            this.spr_reward_icon.setTexture(iconObj.icon);
            this.spr_reward_icon.node.scale = iconObj.scale;
            this.setItemFrame(getQualityIconPath(rewardData.rewardId, rewardData.rewardType, false));
            this.setItemBG(getQualityIconPath(rewardData.rewardId, rewardData.rewardType, true));
        }

        this._task_uuid        = taskUUID;
        this._current_step_val = step;
        this._task_state       = state;
        this._bStepReward      = bStepReward;
        this._rewardType       = rewardData.rewardType;
        this._rewardId         = rewardData.rewardId;
        this.setRewardCount(rewardData.rewardCount);
        this.setCurrentStepVal();
        this.setRewardReceiveState();
    }

    /* 改变奖励状态
     */
    public changeRewardState(state: proto.TaskState){
        this._task_state = state;
        this.setRewardReceiveState();
    }

    /* 设置阶段值的可见性
     */
    public setNodeStepVisible(bVisible: boolean){
        this.node_step_layout.opacity = bVisible ? k255 : kZeroNumber;
    }

    /* 设置物品背景图
     */
     private async setItemBG(icon: string){
        if(!isValidObj(icon)){return;}
        let sf = await LoadResAsync(icon, cc.SpriteFrame);
        if(sf) {
            if(this.spr_item_bg){
                this.spr_item_bg.spriteFrame = sf;
            }
        }
    }

    /* 设置物品品质框
     */
    private async setItemFrame(icon: string){
        if(!isValidObj(icon)){return;}
        let sf = await LoadResAsync(icon, cc.SpriteFrame);
        if(sf) {
            if(this.spr_frame){
                this.spr_frame.spriteFrame = sf;
            }
        }
    }

    /* 设置奖励数量
     */
    private setRewardCount(count: number){
        if(count <= kOneNumber){
            this.lbl_reward_count.node.opacity = kZeroNumber;
            return;
        }

        this.lbl_reward_count.node.opacity = k255;
        this.lbl_reward_count.string       = `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${count}`;
    }
    
    /* 设置奖励接收状态
     */
    private setRewardReceiveState(){
        this.node_can_receive.active         = proto.TaskState.Reward     === this._task_state;
        this.spr_already_receive.node.active = proto.TaskState.HaveReward === this._task_state;
        this.lbl_receive_tip.node.opacity    = (this.node_can_receive.active && 
                                                kZeroNumber == this.node_step_layout.opacity) ? k255 : kZeroNumber;
        (kZeroNumber == this.node_step_layout.opacity && !this.node_can_receive.active) ? 
            this.node_item.setPosition(this.node_item.position.x, kZeroNumber) : 
            this.node_item.setPosition(this.node_item.position.x, this._original_item_y);
        //this.node_item.getComponent(cc.Button).interactable = !this.node_can_receive.active;
    }

    /* 设置当前阶段值
     */
    private setCurrentStepVal(){
        this.lbl_step.string = `${this._current_step_val}`;
    }

    /* 检测关掉boxTips
     */
    private checkClosedBoxTips(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
    }
    
    /* 点击领取按钮事件
     */
    public onClickReceiveReward(){
        if(this._bStepReward){
            let param      = new proto.Msg_ReceiveGroutTaskStepRewardReq();
            param.taskStep = this._current_step_val;
            Net.Send(proto.Ptl.ReceiveGroutTaskStepRewardReq, param);
            return;
        }

        let param      = new proto.Msg_ReceiveGroutTaskRewardReq();
        param.taskUUID = this._task_uuid;
        Net.Send(proto.Ptl.ReceiveGroutTaskRewardReq, param);
    }

    /* 点击弹出宝箱Tips
     */
    public onClickTips(){
        if(this.node_can_receive.active){
            this.onClickReceiveReward();
            return;
        }
        
        this.checkClosedBoxTips();
        switch(this._rewardType){
            case tab.RewardType.RewardType_BoxGroupType:
                boxtips.showTips(this._rewardId, this.node_item);
                break;

            case tab.RewardType.RewardType_BoxType:
                boxtips.showTips(kZeroNumber, this.node_item, this._rewardId);
                break;

            case tab.RewardType.RewardType_ItemType:
                let cfg = tab.Data.ItemTableByID.getValue(this._rewardId);
                ItemTips.show(this.node_item, cfg.ID,cfg.Desc);
                break;

            default:
                this.checkClosedBoxTips();
                break;
        }
    }
}

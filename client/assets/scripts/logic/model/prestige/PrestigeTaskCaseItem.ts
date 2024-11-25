import { _decorator, Component, Label, Node, ProgressBar } from 'cc';
import { ComponentBase } from '../../../framework/base/ComponentBase';
import { TaskInfo } from '../task/TaskInfo';
import { CommonItem } from '../item/CommonItem';
import { LangMgr } from '../../mgr/LangMgr';
import { ItemInfo } from '../item/ItemInfo';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { PrestigeControl } from './PrestigeControl';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
const { ccclass, property } = _decorator;

/**
 * 
 * PrestigeTaskCaseItem
 * zhudingchao
 * Thu Jun 06 2024 10:20:45 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/prestige/PrestigeTaskCaseItem.ts
 *
 */

@ccclass('PrestigeTaskCaseItem')
export class PrestigeTaskCaseItem extends ComponentBase {
    @property(Node)
    reachBtnNode: Node = null;
    @property(Node)
    gotoBtnNode: Node = null;
    @property(Label)
    describeLab: Label = null;
    @property(Node)
    itemNode: Node = null;
    @property(ProgressBar)
    proBar: ProgressBar = null;
    @property(Label)
    proLab: Label = null;
    @property(Node)
    notReachNode: Node = null;
    @property(Node)
    gotNode: Node = null;
    @property(Node)
    lockNode: Node = null;
    private taskInfo: TaskInfo;
    private comItem: CommonItem;

    register() {

    }
    initData(info: TaskInfo) {
        this.taskInfo = info;
        this.initView();

    }
    initView() {
        this.describeLab.string = LangMgr.getLab(this.taskInfo.taskTable.Describe);
        let total = this.taskInfo.taskTable.FinishParam1;
        let currNum = this.taskInfo.progress > total ? total : this.taskInfo.progress;
        this.proBar.progress = currNum / total;
        this.proLab.string = currNum + "/" + total;
        if (!this.taskInfo.isUnLock) {
            this.gotNode.active = false;
            this.notReachNode.active = false;
            this.reachBtnNode.active = false;
            this.gotoBtnNode.active = false;
            this.lockNode.active = true;
        }
        else if (this.taskInfo.isReceived) {
            this.gotNode.active = true;
            this.notReachNode.active = false;
            this.reachBtnNode.active = false;
            this.gotoBtnNode.active = false;
            this.lockNode.active = false;
        } else if (this.taskInfo.isCanReceived) {
            this.gotNode.active = false;
            this.notReachNode.active = false;
            this.reachBtnNode.active = true;
            this.gotoBtnNode.active = false;
            this.lockNode.active = false;
        } else {
            this.reachBtnNode.active = false;
            this.lockNode.active = false;
            this.gotNode.active = false;
            if (this.taskInfo.taskTable.JumpUI) {
                this.gotoBtnNode.active = true;
                this.notReachNode.active = false;
            } else {
                this.gotoBtnNode.active = false;
                this.notReachNode.active = true;
            }
        }
        let item = new ItemInfo();
        item.initItemData(this.taskInfo.taskTable.RewardItemIds[0], this.taskInfo.taskTable.RewardItemNum[0])
        if (!this.comItem) {
            let node = ItemPoolMgr.ins.createItem(item,this.itemNode);
            this.comItem = node.getComponent(CommonItem);
        } else {
            this.comItem.initData(item);
        }

    }
    onClickGotoBtn() {
        if(this.taskInfo.taskTable.JumpUI){
            UIMgr.ins.jumpLayer(this.taskInfo.taskTable.JumpUI,this.taskInfo.taskTable.JumpParam[0]);
            UIMgr.ins.hideView(ViewName.PrestigePop);
        }
    }
    onClickRaechBtn() {
        if (this.taskInfo.isCanReceived) {
            PrestigeControl.ins.requestReceiveQuestLog([this.taskInfo.id]);
        }

    }

}
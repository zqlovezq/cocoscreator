import { _decorator, Button, Component, instantiate, log, Node, Prefab, ScrollView, Sprite, UITransform, v2, Vec2, Vec3 } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { PrestigeControl } from './PrestigeControl';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { PrestigeData } from './PrestigeData';
import { tab } from '../../../Table/table_gen';
import { TaskInfo } from '../task/TaskInfo';
import { PrestigeTaskCaseItem } from './PrestigeTaskCaseItem';
import { PrestigeBarItem } from './PrestigeBarItem';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { PrestigeAttributeItem } from './PrestigeAttributeItem';
import { GuideController } from '../../guide/GuideController';
import { LocalEvent } from '../../define/LocalEvent';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * PrestigePop
 * zhudingchao
 * Thu Jun 06 2024 09:47:06 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/prestige/PrestigePop.ts
 *
 */

@ccclass('PrestigePop')
export class PrestigePop extends ViewPop {
    @property(Node)
    attributeNode: Node = null;
    @property(Node)
    rewardNode: Node = null;
    @property(ScrollView)
    titleScrollView: ScrollView = null;
    @property(Node)
    taskNode: Node = null;
    @property(Button)
    lvUpBtn: Button = null;
    @property(Prefab)
    titlePrefab: Prefab = null;
    @property(Prefab)
    attrPrefab: Prefab = null;
    @property(Prefab)
    taskPrefab: Prefab = null;
    @property(Prefab)
    rewardPrefab: Prefab = null;
    @property(Node)
    redLvUp:Node = null;
    private currLevel = 0;
    private taskItems: Array<PrestigeTaskCaseItem>;
    private titleItems: Array<PrestigeBarItem>;
    private attrItems:Array<PrestigeAttributeItem>;
    private currSelectItem: PrestigeBarItem;
    private currTable: tab.QuestLogTable;
    private scrollViewW: number = 0;
    private isCanUpLevel: boolean = false;
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetQuestLogsRsp, this.on_s2c_GetQuestLogsRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveQuestLogRewardRsp, this.on_s2c_ReceiveQuestLogRsp, this);
        EventMgr.onMsg(proto.Ptl.UpQuestLogLevelRsp, this.on_s2c_UpQuestLogLevelRsp, this);
        EventMgr.onMsg(proto.Ptl.TaskChangePush, this.on_s2c_TaskChangePush, this);
        PrestigeControl.ins.request();
    }
    onShow(): void {
        if(GuideController.ins.isGuiding()){
            EventMgr.emitLocal(LocalEvent.ShowPop);
        }
    }
    close(): void {
        super.close();
        if(GuideController.ins.isGuiding()){
            EventMgr.emitLocal(LocalEvent.checkMainView);
        }
    }
    initView() {
        // let task=this
        this.currLevel = PrestigeData.ins.level;
        this.scrollViewW = this.titleScrollView.getComponent(UITransform).contentSize.width / 2;
        this.updateTaskView();
        this.updateTilteView();
        this.currSelectItem = this.titleItems[2 + this.currLevel - 1];
        this.currSelectItem.setSelectState(true);
        this.initAttrView();
        this.scheduleOnce(() => {
            this.setScrollPos();
        })

    }
    initAttrView(){
        if(this.currTable){
                if(this.attrItems){
                    for(let key in this.attrItems){
                        this.attrItems[key].node.active=false;
                    }
                }
                let aTypes=this.currTable.QuestLogAttrType;
                for(let key in aTypes){
                    let type=aTypes[key];
                    if(type!=0){
                        let value=this.currTable.QuestLogAttrValue[key];
                        let item=this.getAttrItem(Number(key));
                        item.node.active=true;
                        item.initDate(type,value);
                    }
                  
                }
            
        }


    }
    updateTaskView() {
        this.currTable = tab.getData().QuestLogTableByLevel.getValue(this.currLevel);
        let level = PrestigeData.ins.level;
        let isCanLevel = true;
        if (this.currTable) {
            for (let key in this.currTable.TaskIds) {
                let info = PrestigeData.ins.getTaskInfoByTableId(this.currTable.TaskIds[key]);
                if (!info) {
                    info = new TaskInfo()
                    info.id = 0;
                    info.taskTabId = this.currTable.TaskIds[key];
                }
                info.isUnLock = this.currTable.Level <= level;
                if (this.currTable.Level < level) {
                    info.isReceived = true;
                    info.progress = info.taskTable.FinishParam1;
                }
                let item = this.getTaskItem(Number(key));
                item.initData(info);
                if (this.currTable.Level == level) {
                    if (isCanLevel) {
                        isCanLevel = info.isReceived;
                    }
                }
            }
        } else {
            isCanLevel = false;
        }
        this.isCanUpLevel = isCanLevel&&this.currTable.Level == level;
        this.redLvUp.active = this.isCanUpLevel;
        this.lvUpBtn.node.getComponent(Sprite).grayscale = !this.isCanUpLevel;
        const maxLevel = tab.getData().QuestLogTable[tab.getData().QuestLogTable.length-1].Level
        if(PrestigeData.ins.level>=maxLevel){
            this.lvUpBtn.node.getComponent(Sprite).grayscale =true;
            this.lvUpBtn.interactable = false;
            this.redLvUp.active = false;
        }
    }
    updateTilteView() {
        let tables = tab.getData().QuestLogTable;
        let level = PrestigeData.ins.level;
        let maxLevel = this.currTable.ShowLv;
        for (let i = 0; i < 2; i++) {
            let item = this.getTitleItem(i);
            item.initData(true, 1, null);
        }
        for (let i: number = 0; i < maxLevel; i++) {
            let item = this.getTitleItem(2 + i);
            let isUnLock = level >= tables[i].Level;
            let valeu = 0;
            if (level > tables[i].Level) {
                valeu = 1;
            } else if (level == tables[i].Level) {
                valeu = 0.5;
            }
            item.initData(isUnLock, valeu, tables[i]);
        }
        for (let i = maxLevel; i < maxLevel + 2; i++) {
            let item = this.getTitleItem(i + 2);
            item.initData(false, 0, null);
        }
    }

    private getTaskItem(index: number) {
        if (!this.taskItems) {
            this.taskItems = [];
        }
        if (!this.taskItems[index]) {
            let node = instantiate(this.taskPrefab);
            node.parent = this.taskNode;
            node.name = "PrestigeTaskCaseItem"+index;
            this.taskItems.push(node.getComponent(PrestigeTaskCaseItem));
        }
        return this.taskItems[index];
    }
    getTitleItem(index: number) {
        if (!this.titleItems) {
            this.titleItems = [];
        }
        if (!this.titleItems[index]) {
            let node = instantiate(this.titlePrefab);
            node.parent = this.titleScrollView.content;
            this.titleItems.push(node.getComponent(PrestigeBarItem));
            this.titleItems[index].setTouchCallBack(this.onTouchTitleItem);

        }
        return this.titleItems[index];
    }
    getAttrItem(index: number) {
        if (!this.attrItems) {
            this.attrItems = [];
        }
        if (!this.attrItems[index]) {
            let node = instantiate(this.attrPrefab);
            node.parent = this.attributeNode;
            this.attrItems.push(node.getComponent(PrestigeAttributeItem));
        }
        return this.attrItems[index];
    }
    onTouchTitleItem = (titleItem: PrestigeBarItem) => {
        if (this.currSelectItem != titleItem) {
            if (this.currSelectItem) {
                this.currSelectItem.setSelectState(false);
            }
            this.currSelectItem = titleItem;
            this.currSelectItem.setSelectState(true);
            // this.scheduleOnce(()=>{
            this.setScrollPos();
            // })
            this.currLevel = titleItem.table.Level;
            this.updateTaskView();
            this.initAttrView();

        }

    }
    setScrollPos() {
        let pos = this.currSelectItem.node.getPosition();
        this.titleScrollView.scrollToOffset(new Vec2(pos.x - this.scrollViewW, 0), 0.1);
    }

    on_s2c_GetQuestLogsRsp(msg: proto.Msg_GetQuestLogsRsp) {
        this.initView();
    }
    on_s2c_ReceiveQuestLogRsp(msg: proto.Msg_ReceiveQuestLogRewardRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.initView();
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        }
    }
    on_s2c_UpQuestLogLevelRsp(msg: proto.Msg_UpQuestLogLevelRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.initView();
        }
    }
    on_s2c_TaskChangePush(msg: proto.Msg_TaskChangePush) {
        this.updateTaskView();
        // TaskData.ins.updateTask(msg);
    }

    onClickUpLevel() {
        if (this.isCanUpLevel) {
            PrestigeControl.ins.requestUpQuestLogLevel();
        } else {
            //ShowTips("未达到晋升条件")
           ShowTips(LangMgr.getLab("Tips_prestige_1"))
        }

    }
}
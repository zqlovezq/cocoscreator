import { _decorator, Component, instantiate, Label, Node, Prefab } from 'cc';
import { ComponentBase } from '../../../../framework/base/ComponentBase';
import { HeroRoadItem } from './HeroRoadItem';
import { ShowTips, UIMgr } from '../../../mgr/UIMgr';
import { tab } from '../../../../Table/table_gen';
import { ActivityData } from '../ActivityData';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { ViewName } from '../../../define/ViewDefine';
import { RoleData } from '../../role/RoleData';
import { TimeUtil } from '../../../utils/TimeUtil';
import { LangMgr } from '../../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * HeroRoadView
 * zhudingchao
 * Mon Jun 24 2024 14:03:58 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/heroRoad/HeroRoadView.ts
 *
 */

@ccclass('HeroRoadView')
export class HeroRoadView extends ComponentBase {
    @property(Label)
    timeLab: Label = null;
    @property(Node)
    contentNode: Node = null;
    @property(Prefab)
    itemPrefab: Prefab = null;
    private items: Array<HeroRoadItem>;
    register(): void {
        EventMgr.onMsg(proto.Ptl.HeroCollectionPush, this.on_s2c_HeroCollectionPush, this)
        EventMgr.onMsg(proto.Ptl.GetHeroCollectionRewardRsp, this.on_s2c_GetHeroCollectionRewardRsp, this)
    }
    initView() {
        this.items = [];
        let msg = ActivityData.ins.heroCollectionMsg;
        let collectionDatas = msg.collectionData;
        let getProgress = (type: tab.HeroCollectionType) => {
            for (let key in collectionDatas) {
                if (collectionDatas[key].type == type) {
                    return collectionDatas[key].sum;
                }
            }
            return 0;
        }

        let tables = tab.getData().HeroCollectionTable;
        for (let key in tables) {
            let node = instantiate(this.itemPrefab);
            node.parent = this.contentNode;
            let com = node.getComponent(HeroRoadItem);
            this.items.push(com);
            let state = 0;
            let index = msg.rewardList.indexOf(tables[key].Id);
            if (index >= 0) {
                state = 2;
            } else {
                index = msg.activatedList.indexOf(tables[key].Id);
                if (index >= 0) {
                    state = 1;
                }
            }
            com.initView(tables[key], state, getProgress(tables[key].Type));
        }
        this.updateTimer(msg.closeTime);


        // for(let i:number=0;i<10;i++){
        //     let node=instantiate(this.itemPrefab);
        //     node.parent=this.contentNode;
        //     let com=node.getComponent(HeroRoadItem);
        //     this.items.push(com);
        // }

    }
    updateView() {
        let msg = ActivityData.ins.heroCollectionMsg;
        let collectionDatas = msg.collectionData;
        let getProgress = (type: tab.HeroCollectionType) => {
            for (let key in collectionDatas) {
                if (collectionDatas[key].type == type) {
                    return collectionDatas[key].sum;
                }
            }
            return 0;
        }
        for (let key in this.items) {
            let table = this.items[key].table;
            let state = 0;
            let index = msg.rewardList.indexOf(table.Id);
            if (index >= 0) {
                state = 2;
            } else {
                index = msg.activatedList.indexOf(table.Id);
                if (index >= 0) {
                    state = 1;
                }
            }
            this.items[key].updateView(state, getProgress(table.Type));
        }
        this.updateTimer(msg.closeTime);
    }
    updateTimer(closeTime:number){
        let lastTimer=Number(closeTime)-Math.floor(RoleData.ins.getServerUtcTime());
        if(lastTimer>0){
           let ret= TimeUtil.formaterWithOutSecond3(lastTimer);
           let day=ret.day?ret.day:0;
           let hours=ret.hours?ret.hours:0;
           this.timeLab.string=LangMgr.getCombineString("ui_commondesc_71",[day,hours])
        }else{
            this.timeLab.node.active=false;
        }

    }

    onClickHelp() {
        // ShowTips("弹出通用说明框")
        UIMgr.ins.show({viewName:ViewName.CommonHelpPop,data:{"content":"待策划配置"}});
    }
    /**舰队启航 */
    on_s2c_HeroCollectionPush(msg: proto.Msg_HeroCollectionPush) {
        this.updateView();
    }
    // 领取舰队启航奖励
    on_s2c_GetHeroCollectionRewardRsp(msg: proto.Msg_GetHeroCollectionRewardRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
            this.updateView();
        }
    }
}
import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { tab } from '../../../../Table/table_gen';
import { GameplayViewDataMgr } from '../GameplayViewDataMgr';
import { ClimbingTowerRewardItem } from './ClimbingTowerRewardItem';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
const { ccclass, property } = _decorator;

/**
 * 
 * ClimbingTowerRewardPop
 * zhudingchao
 * Fri Jul 12 2024 17:16:16 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/climbingTower/ClimbingTowerRewardPop.ts
 *
 */

@ccclass('ClimbingTowerRewardPop')
export class ClimbingTowerRewardPop extends ViewPop {
    @property(Node)
    contentNode: Node = null;
    @property(Prefab)
    itemPrefab: Prefab = null;
    private items: Array<ClimbingTowerRewardItem>;
    register(): void {
        EventMgr.onMsg(proto.Ptl.ReceiveClimbTowerClearStageRewardsRsp, this.on_s2c_ReceiveClimbTowerClearStageRewardsRsp, this);
    }
    onShow(): void {
        let msg = GameplayViewDataMgr.ins.climbTowerInfoMsg;
        let receives = msg.receivedFirstRewardStageIds;
        let passId = GameplayViewDataMgr.ins.getClimbTowerPassLevelId();
        let tables = tab.getData().PveClearStageTable;
        this.items = [];
        let index=0;
        for (let key in tables) {
            if (tables[key].StageType == tab.PveStageType.PveStageType_ClimbTower) {
                let t = tables[key];
                let state = 0;
                if (passId >=t.StageId) {
                    state = receives.indexOf(t.StageId) >= 0 ? 2 : 1
                }
                if(state!=2){
                    index=Number(key);
                    break;
                }
                // let item = instantiate(this.itemPrefab);
                // item.parent = this.contentNode;
                // let com = item.getComponent(ClimbingTowerRewardItem);
                // com.initView(t, state);
                // this.items.push(com);
            }
        }
        if(index+5>tables.length-1){
            index=tables.length-5;
        }
        for(let i=0;i<5;i++){
            let key=index+i;
            if (tables[key].StageType == tab.PveStageType.PveStageType_ClimbTower) {
                let t = tables[key];
                let state = 0;
                if (passId >=t.StageId) {
                    state = receives.indexOf(t.StageId) >= 0 ? 2 : 1
                }
                let item = instantiate(this.itemPrefab);
                item.parent = this.contentNode;
                let com = item.getComponent(ClimbingTowerRewardItem);
                com.initView(t, state);
                this.items.push(com);
            }
        }
    }
    updateView() {
        let msg = GameplayViewDataMgr.ins.climbTowerInfoMsg;
        let receives = msg.receivedFirstRewardStageIds;
        for (let key in this.items) {
            if (this.items[key].state == 1) {
                let state = receives.indexOf(this.items[key].table.StageId) >= 0 ? 2 : 1
                this.items[key].updateView(state);
            }
        }
    }

    on_s2c_ReceiveClimbTowerClearStageRewardsRsp(msg: proto.Msg_ReceiveClimbTowerClearStageRewardsRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.updateView();
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        }
    }
}
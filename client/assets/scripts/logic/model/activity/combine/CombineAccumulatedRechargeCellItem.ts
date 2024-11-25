import { _decorator, Component, Label, Node, ProgressBar } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { LangMgr } from '../../../mgr/LangMgr';
import { ActivityData } from '../ActivityData';
import { AWARD_STATE } from '../../../../Common/script/EnumTypeMgr';
import { proto } from 'client_protocol';
import { UIMgr } from '../../../mgr/UIMgr';
import { ActivityControl } from '../ActivityControl';
import { ButtonLock } from '../../../utils/GameUtil';
const { ccclass, property } = _decorator;

@ccclass('CombineAccumulatedRechargeCellItem')
export class CombineAccumulatedRechargeCellItem extends Component {
    @property(Node)
    node_reawrd: Node = null;
    @property(Label)
    lbl_target_amount: Label = null;
    @property(Label)
    lbl_progress_num: Label = null;
    @property(ProgressBar)
    bar_progress: ProgressBar = null;
    @property(Node)
    node_go: Node = null;
    @property(Node)
    node_receive: Node = null;
    @property(Node)
    node_got: Node = null;
    @property(Node)
    node_lock: Node = null;
    private _state: AWARD_STATE = AWARD_STATE.NONE;
    private _type: string = "";
    private _awardId: number = 0;
    initData(tab: tab.ActivityCumulativeRechargeTable, type: string) {
        // 显示奖励
        this._type = type;
        this._awardId = tab.IndexId;
        let maxValue = 0;
        if (type === "PriceDollar") {
            maxValue = tab[type] / 100
        } else {
            maxValue = tab[type]
        }
        this.lbl_target_amount.string = LangMgr.getCombineString("ui_accumulatedrecharge_1", [maxValue]);
        const serverData = ActivityData.ins.getRechargeServerData(tab.ActivityId);
        this.lbl_progress_num.string = serverData.payAmount + "/" + maxValue;
        this.bar_progress.progress = serverData.payAmount / maxValue > 1 ? 1 : serverData.payAmount / maxValue
        this.node_reawrd.destroyAllChildren();
        for (let i = 0; i < tab.RewardItemIds.length; i++) {
            const id = tab.RewardItemIds[i];
            const count = tab.RewardItemNum[i];
            const awardInfo = new ItemInfo();
            awardInfo.itemId = id;
            awardInfo.num = count;
            ItemPoolMgr.ins.createRewadItem(awardInfo, this.node_reawrd);
        }
        const state = this.getRewardState(serverData, tab);
        this.node_go.active = state === AWARD_STATE.GO;
        this.node_receive.active = state === AWARD_STATE.RECEIVE;
        this.node_got.active = state === AWARD_STATE.GOT;
        this.node_lock.active = state === AWARD_STATE.LOCK;
    }
    getRewardState(serverData: proto.CumulativeRecharge, tabData: tab.ActivityCumulativeRechargeTable): AWARD_STATE {
        // 根据当前的充值金额获取当前的档位
        let curTabGo = null;
        for (let i = 0; i < tab.getData().ActivityCumulativeRechargeTable.length; i++) {
            const _tab = tab.getData().ActivityCumulativeRechargeTable[i];
            if (_tab.ActivityId === serverData.activityId) {
                if (_tab[this._type] > serverData.payAmount) {
                    curTabGo = _tab;
                    break;
                } else {
                    if (i === tab.getData().ActivityCumulativeRechargeTable.length - 1) {
                        if (_tab[this._type] < serverData.payAmount) {
                            curTabGo = _tab;
                        }
                    }
                }
            }
        }

        if (serverData.payAmount >= tabData[this._type]) {
            // 已经领取
            if (serverData.receivedRewardIds.indexOf(tabData.IndexId) > -1) {
                return AWARD_STATE.GOT
            } else {
                return AWARD_STATE.RECEIVE
            }
        } else {
            if (tabData.IndexId === curTabGo.IndexId) {
                return AWARD_STATE.GO
            } else {
                return AWARD_STATE.LOCK
            }
        }
    }
    // 点击前往
    onClickGoBtn() {
        UIMgr.ins.hideView("CombineActivityMainView");
        UIMgr.ins.jumpLayer(tab.Module.Module_ActivityMainView);
    }
    // 领取奖励
    @ButtonLock(1, () => { })
    onClickReceive() {
        ActivityControl.ins.requestReceiveCumulativeRechargeReward(this._awardId)
    }
}



import { _decorator, Component, EventTouch, instantiate, Label, Node, Prefab } from 'cc';
import { CommonItem } from '../../item/CommonItem';
import { ItemInfo } from '../../item/ItemInfo';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { BattleMainDataControl } from './BattleMainDataControl';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { setTextTime_3 } from '../../../utils/GameUtil';
import { LevelRewardState } from '../../../../Common/script/EnumTypeMgr';
const { ccclass, property } = _decorator;
@ccclass('BattleMainRewardItem')
export class BattleMainRewardItem extends Component {
    @property(Prefab)
    pfb_common_item: Prefab = null;

    @property(Node)
    node_not_achieved: Node = null;
    @property(Node)
    node_got: Node = null;
    @property(Node)
    node_receive: Node = null;

    @property(Label)
    lbl_reward: Label = null;
    @property(Node)
    node_content:Node = null;

    private _rewardTabData: tab.ChapterFristRewardTable = null;
    private _curStageId: number = 0;
    private _state: LevelRewardState = LevelRewardState.None;
    private _idx: number;
    initData(index: number, stageId: number) {
        this.node_content.destroyAllChildren();
        this._rewardTabData = tab.getData().ChapterFristRewardTableById.getValue(stageId);
        this._idx = index;
        this._curStageId = BattleMainDataControl.ins.getCurFightStageId();
        this.lbl_reward.string = LangMgr.getCombineString("ui_battle_1", [setTextTime_3(this._rewardTabData.Time[index])]);
        this.setState();
    }
    setState() {
        this.node_content.destroyAllChildren();
        const rewardId = this._rewardTabData["RewardItemIds" + (this._idx + 1)];
        const rewardNum = this._rewardTabData["RewardItemNum" + (this._idx + 1)];
        const gotRewards = BattleMainDataControl.ins.getReceiveFirstRewardById(this._rewardTabData.Id, this._idx);
        let isGot = false;
        if (gotRewards) {
            isGot = true;
        }
        /* 如果当前的stageId大于当前id 则状态是 NotAchieved*/
        let state = LevelRewardState.None;
        if (this._rewardTabData.Id > this._curStageId) {
            state = LevelRewardState.NotAchieved
        } else if (this._rewardTabData.Id < this._curStageId) {
            // 判断是否领取
            if (isGot) {
                state = LevelRewardState.Got;
            } else {
                state = LevelRewardState.Receive;
            }
        } else {
            // 获取当前的时间
            const maxTime =BattleMainDataControl.ins.getCurMaxAliveSecond();
            const isPass = BattleMainDataControl.ins.getIsPasstStageByStageId(this._curStageId);
            if (maxTime < this._rewardTabData.Time[this._idx]) {
                state = LevelRewardState.NotAchieved
            } else {
                // 判断是否领取
                if (isGot) {
                    state = LevelRewardState.Got;
                } else {
                    if(this._idx===2){
                        if(isPass){
                            state = LevelRewardState.Receive;
                        }else{
                            state = LevelRewardState.NotAchieved;
                        }
                    }else{
                        state = LevelRewardState.Receive;
                    }
                }
            }
        }
        this._state = state;
        for(let i=0;i<rewardId.length;i++){
            const item_data = new ItemInfo();
            item_data.itemId = rewardId[i];
            item_data.num = rewardNum[i];
            let node = ItemPoolMgr.ins.createItem(item_data,this.node_content);
        }
        this.node_got.active = state === LevelRewardState.Got;
        this.node_receive.active = state === LevelRewardState.Receive;
        this.node_not_achieved.active = state === LevelRewardState.NotAchieved;
    }
    clickReceiveBtn(event: EventTouch, key: string) {
        if (this._state !== LevelRewardState.Receive) {
            return;
        }
        let msg = new proto.Msg_ReceiveMainFirstRewardReq();
        msg.indexes = BattleMainDataControl.ins.getAllIndex(this._rewardTabData.Id)
        msg.stageId = this._rewardTabData.Id;
        Net.Send(proto.Ptl.ReceiveMainFirstRewardReq, msg)
    }
}



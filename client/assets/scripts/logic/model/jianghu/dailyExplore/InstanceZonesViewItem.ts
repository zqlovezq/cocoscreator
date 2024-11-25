import { _decorator, Button, Component, Label, labelAssembler, Node, RichText, Sprite } from 'cc';
import InfiniteCell from '../../../../Common/InfiniteList/InfiniteCell';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { ConsumptionToPurchase, GameUtil, handleNumerText } from '../../../utils/GameUtil';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { JIANGHU_TYPE } from '../../../../Common/script/EnumTypeMgr';
import { GameplayViewDataMgr } from '../GameplayViewDataMgr';
import { ShowTips } from '../../../mgr/UIMgr';
import { PowerDifficultyTag } from '../../home/PowerDifficultyTag';
const { ccclass, property } = _decorator;

@ccclass('InstanceZonesViewItem')
export class InstanceZonesViewItem extends InfiniteCell {
    //@property(RichText)
    //lbl_level: RichText = null;
    @property(Label)
    lbl_level: Label = null;
    @property(Node)
    node_content: Node = null;
    @property(Node)
    node_sweep: Node = null;
    @property(Node)
    node_challenge: Node = null;
    @property(Node)
    node_lock: Node = null;
    @property(Node)
    node_pass: Node = null;
    @property(Node)
    node_sweep_buy:Node = null;
    @property(Label)
    node_sweep_buy_diamond:Label = null;
    @property(Label)
    lbl_recommend_power: Label = null;
    private _tabData: tab.PveStageTable = null;
    private _viewType: JIANGHU_TYPE = JIANGHU_TYPE.NONE;
    private _exportData: proto.IExportStageInfo = null;
    private _sweepInfo:any = null;
    UpdateContent(data): void {
        this._tabData = data.data;
        this._viewType = data.type;
        this._exportData = data.exportData;
        this._sweepInfo = GameplayViewDataMgr.ins.getSweepInfo(this._viewType);
        const sweep = this._exportData.clearedStageIds.indexOf(this._tabData.StageId) > -1;
        this.setSweepBtn();
        //this.lbl_level.string = LangMgr.getCombineString("ui_instance_2", [LangMgr.getLab(this._tabData.StageName)])
        this.lbl_level.string = LangMgr.getLab(this._tabData.StageName)
        // 显示是否可以扫荡 如果可以扫荡
        this.node_content.destroyAllChildren();
        this.node_pass.active = sweep && this._tabData.StageId !== GameplayViewDataMgr.ins.getCurSweepStageId(this._viewType);
        this.node_challenge.active = false;
        this.node_lock.active = false;
        if (sweep) {
            const sweepTab = tab.getData().PveSweepTableByStageId.getValue(this._tabData.StageId);
            for (let i = 0; i < sweepTab.SweepRewardItemIds.length; i++) {
                if (sweepTab.SweepRewardItemIds[i]) {
                    this.createItem(sweepTab.SweepRewardItemIds[i], sweepTab.SweepRewardItemNum[i])
                }
            }
        } else {
            if (this._tabData.StageId === GameplayViewDataMgr.ins.curFightStageId) {
                this.node_challenge.active = true;
                for (let i = 0; i < this._tabData.RewardItemId.length; i++) {
                    this.createItem(this._tabData.RewardItemId[i], this._tabData.RewardItemNum[i])
                }
                // 显示推荐战力
                this.lbl_recommend_power.string =GameUtil.convertNumber(this._tabData.RecommendFight);
            } else if (this._tabData.StageId > GameplayViewDataMgr.ins.curFightStageId) {
                for (let i = 0; i < this._tabData.RewardItemId.length; i++) {
                    this.createItem(this._tabData.RewardItemId[i], this._tabData.RewardItemNum[i])
                }
                this.node_lock.active = true;
            }
        }

        
        this.node.getComponent(PowerDifficultyTag) && this.node.getComponent(PowerDifficultyTag).setStageId(this._tabData.StageId)
    }
    // 如果当前item可以扫荡 设置扫荡按钮
    setSweepBtn(){
        const sweep = this._exportData.clearedStageIds.indexOf(this._tabData.StageId) > -1;
        this.node_sweep.active = sweep && this._tabData.StageId === GameplayViewDataMgr.ins.getCurSweepStageId(this._viewType)&&(this._sweepInfo.freeTimes>0||this._sweepInfo.buyTimes===0);
        this.node_sweep_buy.active = sweep && this._tabData.StageId === GameplayViewDataMgr.ins.getCurSweepStageId(this._viewType)&&this._sweepInfo.freeTimes==0&&this._sweepInfo.buyTimes>0;
        if(this.node_sweep_buy.active){
            const needDiamond = this._sweepInfo.diamondData[this._exportData.notFreeSweepTimes]?this._sweepInfo.diamondData[this._exportData.notFreeSweepTimes]:this._sweepInfo.diamondData[this._sweepInfo.diamondData.length-1]
            this.node_sweep_buy_diamond.string = LangMgr.getCombineString("ui_instance_3", [needDiamond]);
        }
        this.node_sweep.getChildByName("sweep_btn").getComponent(Sprite).grayscale = this._sweepInfo.freeTimes===0&&this._sweepInfo.buyTimes===0
        this.node_sweep.getChildByName("sweep_btn").getComponent(Button).interactable = !(this._sweepInfo.freeTimes===0&&this._sweepInfo.buyTimes===0)
    }
    createItem(itemId: number, num: number) {
        const itemInfo = new ItemInfo();
        itemInfo.itemId = itemId;
        itemInfo.num = num;
        ItemPoolMgr.ins.createItem(itemInfo, this.node_content);
    }
    // 挑战
    onClickChallenge() {
        let msg = new proto.Msg_StartStageReq();
        msg.stageId = this._tabData.StageId;
        Net.Send(proto.Ptl.StartStageReq, msg)
    }
    // 扫荡
    onClickSweep() {
        const canSweep = this.setSweepdata();
        if (canSweep) {
            this.sendMsg();
        }
    }
    sendMsg(){
        let msg = new proto.Msg_SweepExploreStageReq();
        msg.stageId = this._tabData.StageId;
        Net.Send(proto.Ptl.SweepExploreStageReq, msg)
    }
    // 如果是扫荡判断当前的数据 返回是否可以扫荡
    setSweepdata(): boolean {
        var self = this;
        const sweepInfo = this._sweepInfo;
        const needDiamond = this._sweepInfo.diamondData[this._exportData.notFreeSweepTimes]?this._sweepInfo.diamondData[this._exportData.notFreeSweepTimes]:this._sweepInfo.diamondData[this._sweepInfo.diamondData.length-1]
        let canUse = false;
        if (sweepInfo.freeTimes===0) {
            // 判断付费次数
            if (sweepInfo.buyTimes===0) {
                ShowTips(LangMgr.getLab('Tips_timeshortage'));
            } else {
                // 弹窗是否花费一定钻石购买次数
                ConsumptionToPurchase(1, needDiamond, "Tips_instance_1",()=>{
                    self.sendMsg();
                })
            }
        } else {
            canUse = true;
        }
        return canUse;
    }
}



import { _decorator, Component, EventTouch, instantiate, Node, Prefab, Toggle } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { AWARD_STATE, JIANGHU_TYPE } from '../../../../Common/script/EnumTypeMgr';
import { JadeDetailPop } from '../../jade/JadeDetailPop';
import { tab } from '../../../../Table/table_gen';
import { GameplayViewDataMgr } from '../GameplayViewDataMgr';
import { proto } from 'client_protocol';
import { InstanceRewardPopItem } from './InstanceRewardPopItem';
import { EventMgr } from '../../../mgr/EventMgr';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import InfiniteList from '../../../../Common/InfiniteList/InfiniteList';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
const { ccclass, property } = _decorator;

@ccclass('InstanceRewardPop')
export class InstanceRewardPop extends ViewPop {
    @property(InfiniteList)
    list_view: InfiniteList = null;
    @property(Prefab)
    pfb_item: Prefab = null;
    @property(Node)
    node_toggle: Node = null;
    private view_type: JIANGHU_TYPE = JIANGHU_TYPE.NONE
    private gold_tabs: tab.PveClearStageTable[] = [];
    private feed_tabs: tab.PveClearStageTable[] = [];
    private cur_tabs:tab.PveClearStageTable[] = [];
    private curExportInfo: proto.IExportStageInfo = null;
    register(): void {
        // 领取奖励 刷新item
        EventMgr.onMsg(proto.Ptl.ReceiveExploreStageFirstRewardRsp, this.on_s2c_ReceiveExploreStageFirstRewardRsp, this)
    }
    on_s2c_ReceiveExploreStageFirstRewardRsp(msg: proto.Msg_ReceiveExploreStageFirstRewardRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.curExportInfo.receivedFirstRewardStageIds.push(msg.stageId);
        RedMgr.refreshEvent(RedDotType.ChallengeDailyAward);
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        const content = this.list_view.getContent();
        const item = content.getChildByName(String(msg.stageId));
        const itemTs = item.getComponent(InstanceRewardPopItem);
        itemTs.setAwardState(AWARD_STATE.GOT);
        this.scrollToIndex();
    }
    clickChangeView(e: EventTouch, type: string) {
        if (this.view_type === Number(type)) {
            return;
        }
        this.view_type = Number(type);
        this.curExportInfo = GameplayViewDataMgr.ins.getExportInfo(this.view_type);
        GameplayViewDataMgr.ins.setCurFightStageId(this.view_type);
        this.setCurTabs();
        this.list_view.Reload(false, true);
        this.scrollToIndex();
    }
    onShow(): void {
        // 首通奖励数据
        this.view_type = this.openData;
        this.curExportInfo = GameplayViewDataMgr.ins.getExportInfo(this.view_type);
        for (let i = 0; i < tab.getData().PveClearStageTable.length; i++) {
            const dataTab = tab.getData().PveClearStageTable[i];
            if (dataTab.StageId < 10200) {
                this.gold_tabs.push(dataTab) 
            } else if (dataTab.StageId < 10300) {
                this.feed_tabs.push(dataTab);
            }
        }
        this.node_toggle.getChildByName("Toggle" + this.view_type).getComponent(Toggle).isChecked = true;
        this.setCurTabs();
        this.list_view.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });
        this.scrollToIndex();
    }
    setCurTabs(){
        if(this.view_type===JIANGHU_TYPE.GoldStage){
            this.cur_tabs = this.gold_tabs
        }else{
            this.cur_tabs = this.feed_tabs
        }
    }
    scrollToIndex() {
        // 自动滚动到当前的位置
        let index = 0;
        for(let i=0;i<this.cur_tabs.length;i++){
            const stageId = this.cur_tabs[i].StageId;
            if( this.curExportInfo.receivedFirstRewardStageIds.indexOf(stageId)===-1){
                index = i;
                break;
            }
       }
        // this.list_view.ScrollToCell(index-1);
        const pos = this.list_view.GetScrollPosOfCell(index-1);
        this.list_view.setContentPos(pos.y, 0,pos.y);
    }
    getCellCount() {
        return this.cur_tabs.length;
    }
    getCellHeight(idx: number) {
        return 160;
    }
    getCellIdentifer(idx: number) {
        return "InstanceRewardPopItem"
    }
    getCellView(idx: number, identifer: string) {
        return instantiate(this.pfb_item).getComponent(InstanceRewardPopItem);
    }
    GetCellData(idx: number) {
        return { data: this.cur_tabs[idx], exportData: this.curExportInfo,view:this.view_type};
    }
    protected onDestroy(): void {
        GameplayViewDataMgr.ins.setCurFightStageId(this.openData);
        super.onDestroy();
    }
}



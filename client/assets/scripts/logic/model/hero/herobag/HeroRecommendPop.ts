import { _decorator, Component, instantiate, Layout, Node, Prefab, ScrollView, Socket } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { tab } from '../../../../Table/table_gen';
import { HeroRecommendPopItem } from './HeroRecommendPopItem';
import { LocalEvent } from '../../../define/LocalEvent';
import { EventMgr } from '../../../mgr/EventMgr';
import { HeroDataControl } from './HeroDataControl';
import { proto } from 'client_protocol';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
const { ccclass, property } = _decorator;

@ccclass('HeroRecommendPop')
export class HeroRecommendPop extends ViewPop {
    // @property(InfiniteList)
    // list_view: InfiniteList = null;
    @property(Prefab)
    pfb_recommend_item: Prefab = null;
    @property(Node)
    node_content:Node = null;
    @property(ScrollView)
    scroll_view:ScrollView = null;

    private _recommendTableData: tab.RecommendTeamTable[] = [];
    register(): void {
        /* 当点击阵容推荐里面的英雄 */
        EventMgr.onLocal(LocalEvent.Click_Recommend_Hero, this.onClose, this);
        EventMgr.onMsg(proto.Ptl.ReceiveRecommendTeamRewardRsp, this.on_s2c_ReceiveRecommendTeamRewardRsp, this);
    }
   
    on_s2c_ReceiveRecommendTeamRewardRsp(msg:proto.Msg_ReceiveRecommendTeamRewardRsp){
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        let rewards = msg.rewards;
        // 展示奖励
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: rewards });
        let map = HeroDataControl.ins.getRecommendTeamIds();
        map.set(msg.recommendTeamId,true);
        RedMgr.refreshEvent(RedDotType.HeroRecommend);
        this.setView();
    }
    onShow(): void {
        this.setView();
    }
    /* 领取奖励之后刷新界面 */
    setView(){
        this._recommendTableData = this.getListData();
        for(let i=0;i<this._recommendTableData.length;i++){
            let data = this._recommendTableData[i];
            let item = null;
            if(this.node_content.children[i]){
                item = this.node_content.children[i]
            }else{
                item = instantiate(this.pfb_recommend_item);
                this.node_content.addChild(item);
            }
            let ts = item.getComponent(HeroRecommendPopItem);
            ts.UpdateContent({tabData:data,scrollView:this.scroll_view});
        }
        this.node_content.getComponent(Layout).updateLayout();
    }
    onDestroy(): void {
        super.onDestroy();
    }
    private getListData(){
        let arr1=[];
        let arr2=[];
        let map = HeroDataControl.ins.getRecommendTeamIds();
        for(let i=0;i<tab.getData().RecommendTeamTable.length;i++){
            let _tab = tab.getData().RecommendTeamTable[i];
            if(map.get(_tab.Id)){
                arr2.push(_tab);
            }else{
                arr1.push(_tab);
            }
            _tab["extend"] = 0;
        }
        return arr1.concat(arr2);
    }
}



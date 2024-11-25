/*
 * @Date: 2024-05-11 14:19:03
 * @LastEditors: wzq
 * @LastEditTime: 2024-11-22 14:52:22
 */

import { _decorator, Component, Label, Layout, Node, Prefab, ScrollView, Sprite, UITransform } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { HeroData } from '../HeroData';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { HeroItem } from '../../item/HeroItem';
import { HeroDataControl } from './HeroDataControl';
import { EventMgr } from '../../../mgr/EventMgr';
import { LocalEvent } from '../../../define/LocalEvent';
import { HeroInfo } from '../HeroInfo';
import { LangMgr } from '../../../mgr/LangMgr';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
const { ccclass, property } = _decorator;

@ccclass('HeroRecommendPopItem')
export class HeroRecommendPopItem extends Component {
    @property(Node)
    node_desc: Node = null;
    @property(Node)
    node_content: Node = null;
    @property(Node)
    node_arrow_up: Node = null;
    @property(Node)
    node_arrow_down: Node = null;
    @property(Node)
    node_got_award_img:Node = null;

    @property(Prefab)
    node_hero: Node = null;

    @property(Label)
    lbl_progress_now: Label = null;
    @property(Label)
    lbl_progress_total: Label = null;
    @property(Label)
    lbl_recommend_name: Label = null;
    @property(Label)
    lbl_recommend_desc: Label = null;

    @property(Sprite)
    sp_reward_icon_bg: Sprite = null;
    @property(Sprite)
    sp_reward_icon: Sprite = null;
    @property(Label)
    lbl_reward_count: Label = null;

    private _showDetail: boolean = false;
    private _haveCount: number = 0;
    private _tabData: tab.RecommendTeamTable = null;
    private _canRecive: boolean = false;
    private _parentScroll:ScrollView = null;
    UpdateContent(data: any): void {
        this._haveCount = 0;
        this._tabData = data.tabData;
        this._parentScroll = data.scrollView;
        this.node_desc.active = this._tabData["extend"] === 1;
        this.node_content.removeAllChildren();
        for (let i = 0; i < this._tabData.HeroIdList.length; i++) {
            let itemId = this._tabData.HeroIdList[i];
            this.createItem(itemId);

            const map = HeroDataControl.ins.getBookReceivedIds();
            const itemData = map.get(itemId);
            if (itemData) {
                this._haveCount++;
            }
        }
        this.lbl_progress_now.string = String(this._haveCount);
        this.lbl_progress_total.string = "/" + this._tabData.HeroIdList.length;
        this.lbl_recommend_name.string = LangMgr.getLab(this._tabData.Name);
        this.lbl_recommend_desc.string = LangMgr.getLab(this._tabData.Desc);
        /* 创建奖励 */
        let itemId = this._tabData.ItemId;
        let itemCount = this._tabData.ItemNum;
        let itemData = tab.getData().ItemTableById.getValue(itemId);
        this.sp_reward_icon.setTexture(itemData.Icon);
        this.lbl_reward_count.string = String(itemCount);
        let map = HeroDataControl.ins.getRecommendTeamIds();
        let countEnough = this._haveCount >= this._tabData.HeroIdList.length;
        let isGot =  map.get(this._tabData.Id)
        this._canRecive = countEnough&& !isGot;
        this.sp_reward_icon.grayscale = !countEnough;
        this.sp_reward_icon_bg.grayscale = !countEnough;
        this.node_got_award_img.active = isGot;

        this.node_arrow_up.active = this._tabData["extend"]===1;
        this.node_arrow_down.active = this._tabData["extend"]===0;
    }
    private showDetail() {
        let tabData = this._tabData
        if (!tabData["extend"]) {
            tabData["extend"] = 1;
        } else {
            tabData["extend"] = 0;
        }
        this.node_arrow_up.active = tabData["extend"]===1;
        this.node_arrow_down.active = tabData["extend"]===0;
        this.node_desc.active = this._tabData["extend"] === 1;
        this.node_desc.getComponent(Layout).updateLayout();
        this.node.getComponent(Layout).updateLayout();
        let offset = this._parentScroll.getScrollOffset();
        this.lbl_recommend_desc.updateRenderData();
        if(this._tabData["extend"] === 1){
            offset.y+=this.lbl_recommend_desc.node.getComponent(UITransform).contentSize.height;
        }else{
            offset.y-=this.lbl_recommend_desc.node.getComponent(UITransform).contentSize.height;
        }
        this._parentScroll.scrollToOffset(offset,1)
    }
    createItem(itemId: number) {
        let heroInfo = null;
        let heroTab = tab.getData().HeroTableById.getValue(itemId);
        if (!heroInfo) {
            heroInfo = new HeroInfo();
            heroInfo.itemId = itemId;
            heroInfo.id = 0;
            heroInfo.level = 1;
            heroInfo.star = heroTab.DefaultStar;
        }
        let item = null;
        if (heroInfo) {
            item = ItemPoolMgr.ins.createHeroItem(heroInfo,this.node_content);
            // item.parent = this.node_content;
        }
        if (item) {
            let ts = item.getComponent(HeroItem)
            ts.setLevel(0);
            ts.setSelect(false);
            ts.setGrayScale()
            ts.setHeroStar(heroTab.DefaultStar);
            ts.setTouchCallBack(() => {
                HeroDataControl.ins.refreshBookData(heroInfo.itemId);
                EventMgr.emitLocal(LocalEvent.Click_Recommend_Hero);
            })
        }
    }
    /* 领取奖励 */
    sendMsg(){
        if(!this._canRecive){
            return;
        }
        let msg = new proto.Msg_ReceiveRecommendTeamRewardReq ();
        msg.recommendTeamId = this._tabData.Id;
        Net.Send(proto.Ptl.ReceiveRecommendTeamRewardReq , msg)
    }
}



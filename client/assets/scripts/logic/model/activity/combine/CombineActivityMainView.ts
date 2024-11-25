import { _decorator, Component, error, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { ViewName } from '../../../define/ViewDefine';
import { tab } from '../../../../Table/table_gen';
import { CombineStarUpItem } from './CombineStarUpItem';
import { CombineToggleItem } from './CombineToggleItem';
import { createAnimation, setTextTime } from '../../../utils/GameUtil';
import { ActivityData } from '../ActivityData';
import { BattlePassItem } from '../battlePass/BattlePassItem';
import { HeroDataControl } from '../../hero/herobag/HeroDataControl';
import { LangMgr } from '../../../mgr/LangMgr';
import { UIMgr } from '../../../mgr/UIMgr';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { CombineGiftItem } from './CombineGiftItem';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
import { RoleData } from '../../role/RoleData';
import { CombineAccumulatedRechargeItem } from './CombineAccumulatedRechargeItem';
const { ccclass, property } = _decorator;

@ccclass('CombineActivityMainView')
export class CombineActivityMainView extends ViewPop {
    @property(Node)
    activityNode: Node = null;
    @property(Prefab)
    pfb_toggle_item: Prefab = null;
    @property(Prefab)
    pfb_hero_grow: Prefab = null;
    @property(Prefab)
    pfb_battle_pass:Prefab = null;
    @property(Prefab)
    pfb_up_mall:Prefab = null;
    @property(Prefab)
    pfb_recharge:Prefab = null;
    @property(Node)
    node_toggle_content: Node = null;
    @property(Node)
    node_spine: Node = null;
    @property(Node)
    node_quality:Node = null;
    @property(Label)
    lbl_hero_name:Label = null;
    @property(Label)
    lbl_class_desc:Label = null;
    @property(Sprite)
    sp_class:Sprite = null;
    @property(Label)
    lbl_time:Label = null;
    @property(Node)
    node_hero:Node = null;

    private currNode: Node = null;
    public curActivityId: number = 0;
    private showHeroId:number = 0;
    register(): void {
        EventMgr.onMsg(proto.Ptl.ReceiveBattlePassTaskRewardsRsp, this.on_s2c_ReceiveBattlePassTaskRewardsRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveActivityHeroGrowRewardRsp, this.on_s2c_ReceiveActivityHeroGrowRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.BuyFixedShopCommodityRsp, this.on_s2c_BuyFixedShopCommodityRsp, this);
    }
    unRegister(): void {
        super.unRegister();
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    onShow(): void {
        // 获取活动分组
        const groups = ActivityData.ins.getAllActivityGroup();
        for(let i=0;i<groups.length;i++){
            const info = groups[i]
            if(this.openData===info.TabId){
                let countDown = Number(info.endTime)-RoleData.ins.getServerUtcTime();
                const timeUpdate = (()=>{
                    countDown--;
                    if(countDown<=0){
                        this.unschedule(timeUpdate);
                        this.node.active = false;
                    }else{
                        this.lbl_time.string = setTextTime(countDown);
                    }
                })
                timeUpdate();
                this.unschedule(timeUpdate);
                this.schedule(timeUpdate, 1);
            }
        }
        const _tab = tab.getData().ActivityTableByActivityId.getValue(this.openData);
        this.curActivityId = _tab.ActivityIds[0];
        this.createToggle(_tab.ActivityIds);
        this.switchView(this.curActivityId);
    }
    switchView(activityId: number) {
        if (this.currNode) {
            this.currNode.active = false;
        }
        this.node_hero.active = true;
        this.curActivityId = activityId;
        const activityInfo = tab.getData().ActivityTableByActivityId.getValue(activityId);
        const view_type = activityInfo.Type;
        switch (view_type) {
            // 养成活动
            case tab.OpenFunctionName.OpenFunctionName_ActivityHeroGrow:
                if (!this["view" + activityId]) {
                    const hero_grow_layer = instantiate(this.pfb_hero_grow);
                    hero_grow_layer.parent = this.activityNode;
                    if (hero_grow_layer) {
                        this["view" + activityId] = hero_grow_layer.getComponent(CombineStarUpItem);
                        this.currNode = hero_grow_layer;
                        this["view" + activityId].onShow(activityId);
                    }
                } else {
                    this["view" + activityId].node.active = true;
                    this.currNode = this["view" + activityId].node;
                    this["view" + activityId].onShow(activityId);
                }
                const heroGrowData = ActivityData.ins.getHeroGrowData(activityId);
                const listData = ActivityData.ins.getHeroGrowTabs(activityId, heroGrowData.heroItemId);
                this.showHeroSpine(listData[0].AnimationId);
                break;
            // 登录战令
            case tab.OpenFunctionName.OpenFunctionName_BattlePassSignIn1:
                if (!this["view" + activityId]) {
                    const battleLayer = instantiate(this.pfb_battle_pass);
                    battleLayer.parent = this.activityNode;
                    if (battleLayer) {
                        this["view" + activityId] = battleLayer.getComponent(BattlePassItem);
                        this.currNode = battleLayer;
                        this["view" + activityId].onShow(null,activityInfo.Param1);
                    }
                } else {
                    this["view" + activityId].node.active = true;
                    this.currNode = this["view" + activityId].node;
                    this["view" + activityId].onShow(null,activityInfo.Param1);
                }
                const battleData =tab.getData().BattlePassTableById.getValue(activityInfo.Param1);
                this.showHeroSpine(battleData.AnimationId);
                break;
            case tab.OpenFunctionName.OpenFunctionName_ActivityMall:
                if (!this["view" + activityId]) {
                    const mallLayer = instantiate(this.pfb_up_mall);
                    mallLayer.parent = this.activityNode;
                    if (mallLayer) {
                        this["view" + activityId] = mallLayer.getComponent(CombineGiftItem);
                        this.currNode = mallLayer;
                        this["view" + activityId].onShow(activityInfo.Param1);
                    }
                } else {
                    this["view" + activityId].node.active = true;
                    this.currNode = this["view" + activityId].node;
                    this["view" + activityId].onShow(activityInfo.Param1);
                }
                const mallData =tab.getData().MallTableByMallId.getValue(activityInfo.Param1);
                this.showHeroSpine(mallData.AnimationId);
                break
            case tab.OpenFunctionName.OpenFunctionName_ActivityCumulativeRecharge:
                this.node_hero.active = false;
                if (!this["view" + activityId]) {
                    const rechargeLayer = instantiate(this.pfb_recharge);
                    rechargeLayer.parent = this.activityNode;
                    if (rechargeLayer) {
                        this["view" + activityId] = rechargeLayer.getComponent(CombineAccumulatedRechargeItem);
                        this.currNode = rechargeLayer;
                        this["view" + activityId].onShow(activityId);
                    }
                } else {
                    this["view" + activityId].node.active = true;
                    this.currNode = this["view" + activityId].node;
                    this["view" + activityId].onShow(activityId);
                }
                break;
            default:
                break;
        }
    }
    createToggle(tabList: number[]) {
        this.node_toggle_content.destroyAllChildren();
        for (let i = 0; i < tabList.length; i++) {
            const _key = tabList[i];
            let item = null;
            let itemTs: CombineToggleItem = null;
            item = instantiate(this.pfb_toggle_item);
            item.parent = this.node_toggle_content;
            item.name = String(_key);
            itemTs = item.getComponent(CombineToggleItem);
            itemTs.setData(_key, this);
            this["view" + _key] = null;
        }
    }
    // 展示spine动画
    showHeroSpine(animationId: number) {
        createAnimation(this.node_spine, animationId);
        const heroId = Number(String(animationId).slice(0,4));
        this.showHeroId = heroId;
        const heroTab = tab.getData().HeroTableById.getValue(heroId);
        const itemTab = tab.getData().ItemTableById.getValue(heroId);
        const heroClassTable = tab.getData().HeroClassTableByHeroClass.getValue(heroTab.Class);
        const heroAptitudeTab = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(heroTab.Aptitude);
        const itemQualityTab = HeroDataControl.ins.getItemQualityTableByStar(heroTab.DefaultStar);

        const sp_quality_star_bg = this.node_quality.getChildByName("quality2_img").getComponent(Sprite)
        const sp_quality = this.node_quality.getChildByName("quality_icon").getComponent(Sprite)
        const sp_quality_bg = this.node_quality.getChildByName("quality1_img").getComponent(Sprite);
        sp_quality_star_bg.setTexture(itemQualityTab.HeroBagGrowthQuality)
        sp_quality_bg.setTexture(itemQualityTab.HeroBagLevelQuality);
        sp_quality.setTexture(heroAptitudeTab.Icon);
        this.sp_class.setTexture(heroClassTable.Icon);
        this.lbl_hero_name.string = LangMgr.getLab(itemTab.Name);
        this.lbl_class_desc.string = LangMgr.getLab(heroTab.Speciality)
    }
    clickShowHero(){
        HeroDataControl.ins.refreshBookData(this.showHeroId);
        UIMgr.ins.show({ viewName: ViewName.HeroBagView, data: { viewType: 2 }, zIndex: 300 })
    }
    on_s2c_ReceiveBattlePassTaskRewardsRsp(msg: proto.Msg_ReceiveBattlePassTaskRewardsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.currNode.getComponent(BattlePassItem).refreshView();
        RedMgr.refreshEvent(RedDotType.Combine_Pass);
    }
    on_s2c_ReceiveActivityHeroGrowRewardRsp(msg:proto.Msg_ReceiveActivityHeroGrowRewardRsp){
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards})
            // 刷新一下数据
            ActivityData.ins.refreshHeroGrowData(msg.activityId,msg.star);
            this.currNode.getComponent(CombineStarUpItem).refreshView(); 
            RedMgr.refreshEvent(RedDotType.Combine_Grow);
        }
    }
    on_s2c_BuyFixedShopCommodityRsp(msg: proto.Msg_BuyFixedShopCommodityRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.currNode.getComponent(CombineGiftItem).refreshView();
        RedMgr.refreshEvent(RedDotType.Combine_Shop);
    }
    onClickGachaBtn(){
        UIMgr.ins.show({ viewName: ViewName.RecruitLimitView})
    }
}



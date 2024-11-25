/*
 * @Date: 2024-04-29 10:29:18
 * @LastEditors: wzq
 * @LastEditTime: 2024-11-14 14:47:55
 */

import { Prefab, _decorator, instantiate, Node, Button, EventTouch, Label, Toggle, Vec2, Sprite ,Animation, Color} from 'cc';
import { HeroBagLayoutCell } from './HeroBagLayoutCell';
import { HeroDataControl } from './HeroDataControl';
import { HeroBagPainting } from './HeroBagPainting';
import { ViewPop } from '../../../../framework/base/ViewPop';
import InfiniteList from '../../../../Common/InfiniteList/InfiniteList';
import { proto } from 'client_protocol';
import { EventMgr } from '../../../mgr/EventMgr';
import { LocalEvent } from '../../../define/LocalEvent';
import { HeroData } from '../HeroData';
import { Net } from '../../../net/Net';
import { ShowItemNotEnoughTips, ShowTips, UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { tab } from '../../../../Table/table_gen';
import { RoleData } from '../../role/RoleData';
import { HeroBookView } from './HeroBookView';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
import { HeroTeamControl } from '../HeroTeamControl';
import { HeroInfo } from '../HeroInfo';
import { Func } from '../../../utils/Func';
import { ItemData } from '../../item/ItemData';
import { CommonTipsPop } from '../../common/CommonTipsPop';
import { LangMgr } from '../../../mgr/LangMgr';
import { Long } from 'protobufjs';
import { GuideController } from '../../../guide/GuideController';
import { HeroRed } from './HeroRed';
const { ccclass, property } = _decorator;
enum VIEW_TYPE {
    HERO = 1,
    BOOK
}
interface refreshViewData {
    id: number | Long,
    red?: boolean,
    level?: number,
    isRefresh?: boolean
}
@ccclass('HeroBagView')
export class HeroBagView extends ViewPop {
    @property(Prefab)
    pfb_hero_item: Prefab = null;
    @property(Prefab)
    pfb_hero_painting: Prefab = null;

    @property(InfiniteList)
    list_heros: InfiniteList = null;

    @property(Node)
    node_hero_painting: Node = null;
    @property(Node)
    node_hero_bag: Node = null;
    @property(Node)
    node_hero_book: Node = null;
    @property(Node)
    node_vacation_taggle: Node = null;
    @property(Node)
    node_function_taggle: Node = null;
    @property(Node)
    node_red_up_star: Node = null;
    @property(Node)
    node_red_resolve: Node = null;
    @property(Node)
    node_red_Resonance: Node = null;
    @property(Node)
    node_red_hero: Node = null;
    @property(Node)
    node_red_book: Node = null;

    @property(Button)
    btn_detail: Button = null;

    @property(Label)
    lbl_cur_capacity_count: Label = null;
    @property(Label)
    lbl_max_capacity_count: Label = null;

    //雷达
    @property(Node)
    node_radar: Node = null;
    @property(Sprite)
    sp_img_radar: Sprite = null;
    @property(Animation)
    anim_radar: Animation = null;
    @property(Label)
    lbl_score_radar: Label = null;
    @property(Node)
    node_radar_txt:Node = null;

    private mClosedCallBack: Function = null;
    private _lineHeroCount = 3;
    private _bagVocationType = tab.HeroClass.HeroClass_Max;
    private _defaultView: VIEW_TYPE = VIEW_TYPE.HERO;
    private _list = []
    register(): void {
        /* 获取背包数据 */
        EventMgr.onMsg(proto.Ptl.GetHeroBagRsp, this.on_s2c_GetHeroBagRsp, this);
        /* 上阵英雄刷新背包列表 */
        EventMgr.onMsg(proto.Ptl.SetTeamSlotRsp, this.on_s2c_SetTeamSlotRsp, this);
        /* 遣散英雄 */
        EventMgr.onMsg(proto.Ptl.DisbandHeroesRsp, this.on_s2c_DisbandHeroesRsp, this);
        /* 一键升星 */
        EventMgr.onMsg(proto.Ptl.UpHeroStarOneClickRsp, this.on_s2c_UpHeroStarOneClickRsp, this);
        /* 重置英雄星级 */
        EventMgr.onMsg(proto.Ptl.ResetHeroStarRsp, this.on_s2c_ResetHeroStarRsp, this);
        /* 重置队伍栏位等级 */
        EventMgr.onMsg(proto.Ptl.ResetTeamSlotLevelRsp, this.on_s2c_ResetTeamSlotLevelRsp, this);
        /* 当前切换英雄的时候 */
        EventMgr.onLocal(LocalEvent.Hero_Change, this.showView, this);
        /* 当点击阵容推荐里面的英雄 */
        EventMgr.onLocal(LocalEvent.Click_Recommend_Hero, this.showBookHero, this);
        /* 升级英雄背包容量 */
        EventMgr.onMsg(proto.Ptl.UpHeroBagCapacityRsp, this.on_s2c_UpHeroBagCapacityRsp, this);
        /* 领取图签奖励 */
        EventMgr.onMsg(proto.Ptl.ReceiveHeroAlbumRewardRsp, this.on_s2c_ReceiveHeroAlbumRewardRsp, this);
        /* 英雄升星 */
        EventMgr.onMsg(proto.Ptl.UpHeroStarRsp, this.on_s2c_UpHeroStarRsp, this);
        this.btn_detail.node.on(Button.EventType.CLICK, this.showDetailView, this);
    }
    unRegister(): void {
        super.unRegister()
        HeroDataControl.ins.refreshBookData(0);
        HeroDataControl.ins.refreshBagData(0)
    }
    onShow() {
        // 刷新可替换英雄数据
        HeroDataControl.ins.setCanReplaceHeros();
        if (this.openData && this.openData.viewType) {
            this._defaultView = this.openData.viewType;
            this.node_function_taggle.children[0].active = false;
            this.node_function_taggle.children[1].getComponent(Toggle).isChecked = true;
        }
        this.showView(true);
        if (GuideController.ins.isGuiding()) {
            EventMgr.emitLocal(LocalEvent.ShowPop);
        }
    }
    on_s2c_GetHeroBagRsp(msg: proto.Msg_GetHeroBagRsp) {
        this.showView(true);
    }
    /* 英雄升星 */
    on_s2c_UpHeroStarRsp(msg: proto.Msg_UpHeroStarRsp) {
        /* 遣散奖励 */
        let heroInfo = HeroData.ins.getById(msg.heroId);
        // 展示奖励
        heroInfo.star = msg.star;
        heroInfo.refreshBaseAttrMap();
        let rewards: proto.Item[] = [{
            itemId: heroInfo.itemId,
            num: 1,
            extra: {
                heroStar: msg.star
            },
            transaction: []
        }]
        // UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: rewards })
        UIMgr.ins.show({ viewName: ViewName.StarUpPop, data: { "heroInfo": heroInfo } })
        this.refreshTeamInfo({
            id: 0,
            isRefresh: true
        });
    }
    /* 遣散英雄 */
    on_s2c_DisbandHeroesRsp(msg: proto.Msg_DisbandHeroesRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        UIMgr.ins.hideView(ViewName.HeroResolvePop);
        /* 遣散奖励 */
        let rewards = msg.rewards;
        // 展示奖励
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: rewards })
        this.refreshTeamInfo({
            id: 0,
            isRefresh: true
        });
    }
    /* 一键升星 */
    on_s2c_UpHeroStarOneClickRsp(msg: proto.Msg_UpHeroStarOneClickRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        // let rewards = msg.heroes;

        HeroData.ins.adds(msg.heroes as proto.Hero[]);
        UIMgr.ins.hideView(ViewName.HeroAutoAscendPop);
        let rewards: proto.Item[] = []
        for (let i = 0; i < msg.heroes.length; i++) {
            let hero = msg.heroes[i];
            let item = {
                itemId: hero.itemId,
                num: 1,
                extra: {
                    heroStar: hero.star
                },
                transaction: []
            }
            rewards.push(item);
        }
        UIMgr.ins.show({
            viewName: ViewName.CongratulationPop, data: rewards
        })
        this.refreshTeamInfo({
            id: 0,
            isRefresh: true
        });
        RedMgr.refreshEvent(RedDotType.HeroAutoAscend);
    }
    /* 升级背包容量 */
    on_s2c_UpHeroBagCapacityRsp(msg: proto.Msg_UpHeroBagCapacityRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        ShowTips(LangMgr.getLab('Tips_enlarge_success_1'));
        RoleData.ins.capacityLevel = msg.capacityLevel;
        this.showBagCapacity();
    }
    /* 上阵英雄 */
    on_s2c_SetTeamSlotRsp(msg: proto.Msg_SetTeamSlotRsp) {
        HeroDataControl.ins.refreshTeamBagData(msg.heroId);
        if (GuideController.ins.isGuiding()) {
            EventMgr.emitLocal(LocalEvent.heroInTeam);
        }
        this.refreshTeamInfo({
            id: Number(msg.heroId),
            isRefresh: true
        });
    }

    /* 重置英雄星级 */
    on_s2c_ResetHeroStarRsp(msg: proto.Msg_ResetHeroStarRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        let rewards = msg.rewards;
        UIMgr.ins.hideView(ViewName.HeroResetPop);
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: rewards })

        let heroInfo = HeroData.ins.getById(msg.heroId);
        heroInfo.finshedStarSteps = []
        heroInfo.star = msg.star;
        heroInfo.refreshBaseAttrMap();
        this.refreshTeamInfo({
            id: 0,
            isRefresh: true
        });
    }
    /* 重置队伍栏位等级 */
    on_s2c_ResetTeamSlotLevelRsp(msg: proto.Msg_ResetTeamSlotLevelRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        let rewards = msg.rewards;
        // 展示奖励
        UIMgr.ins.hideView(ViewName.HeroResetPop);
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: rewards })

        this.refreshTeamInfo({
            id: HeroTeamControl.ins.getHeroByClass(msg.heroClass).id,
            level: 1
        })
    }
    refreshTeamInfo(data: refreshViewData) {
        HeroTeamControl.ins.refreshTeam(data.id, data.level);
        if (data.isRefresh) {
            HeroDataControl.ins.setCanReplaceHeros();
            RedMgr.refreshEvent(RedDotType.HeroupStar);
            RedMgr.refreshEvent(RedDotType.HeroupLevel);
            RedMgr.refreshEvent(RedDotType.HeroResonanceLevel);
            RedMgr.refreshEvent(RedDotType.HeroresonanceStar);
        }
        this.showAllHeros(data.isRefresh ? data.isRefresh : false);
        this.showHeroPainting();
        this.refreshRed();
        this.showBagCapacity();
    }
    showView(isInit: boolean) {
        this.showAllHeros(isInit);
        this.showBagCapacity();
        this.showHeroPainting();
        this.refreshRed();
    }
    /* 刷新红点 */
    refreshRed() {
        const heroInfo = HeroData.ins.getById(HeroDataControl.ins.heroId)
        this.node_red_Resonance.active = RedMgr.ins.isRed(RedDotType.HeroupStar, String(heroInfo.id)) || RedMgr.ins.isRed(RedDotType.HeroupLevel, String(heroInfo.id)) || HeroRed.ins.checkWearEquip(heroInfo)
        if (this._defaultView === VIEW_TYPE.HERO) {
            this.node_red_hero.active = false
            this.node_red_book.active = RedMgr.ins.isRed(RedDotType.HeroBook);
        } else {
            this.node_red_hero.active = RedMgr.ins.isRed(RedDotType.HeroupStar) || RedMgr.ins.isRed(RedDotType.HeroupLevel);
            this.node_red_book.active = false;
        }
    }
    setCloseCallBack(closeFunc: Function) {
        this.mClosedCallBack = closeFunc;
    }

    onDestroy() {
        super.onDestroy();
        this.unRegister();
        if (this.mClosedCallBack && typeof this.mClosedCallBack == 'function') {
            this.mClosedCallBack();
            this.mClosedCallBack = null;
        }
    }
    /* 显示背包容量 */
    showBagCapacity() {
        this.lbl_cur_capacity_count.string = String(HeroData.ins.getHeros().length);
        /* 最大容量 */
        let heroBagExpansion = tab.getData().GetKeyValue_ConfigTable().HeroBagExpansion;//100钻石升10格子
        this.lbl_max_capacity_count.string = String(tab.getData().GetKeyValue_ConfigTable().HeroBagNum + heroBagExpansion[2] * RoleData.ins.capacityLevel + RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_HeroBagAddCount));
    }
    /* 显示所有英雄 */
    showAllHeros(isInit: boolean) {
        this.node_hero_bag.active = this._defaultView === VIEW_TYPE.HERO;
        this.node_hero_book.active = this._defaultView === VIEW_TYPE.BOOK;
        if (this._defaultView === VIEW_TYPE.HERO) {
            HeroDataControl.ins.refreshBookData(0);
            this._list = this.groupHeroList();
            if (isInit) {
                this.list_heros.Init({
                    getCellNumber: this.getCellCount.bind(this),
                    getCellSize: this.getCellHeight.bind(this),
                    getCellIdentifer: this.getCellIdentifer.bind(this),
                    getCellView: this.getCellView.bind(this),
                    getCellData: this.GetCellData.bind(this),
                });
                this.list_heros.scrollToOffset(new Vec2(0, 0), 1, true)
            } else {
                this.list_heros.Refresh();
            }
        } else {
            let bookTs = this.node_hero_book.getComponent(HeroBookView);
            bookTs.showAllHeros(this._bagVocationType, isInit);
        }
    }
    getCellCount() {
        return this._list.length;
    }
    getCellHeight() {
        return 185;
    }
    getCellIdentifer() {
        return "HeroBagLayoutCell";
    }
    getCellView() {
        return instantiate(this.pfb_hero_item).getComponent(HeroBagLayoutCell);
    }
    GetCellData(idx: number) {
        return this._list[idx]
    }

    /* 将英雄数据分组 */
    groupHeroList() {
        const result = [];
        let heroInfo = HeroData.ins.getById(HeroDataControl.ins.heroId);
        if (heroInfo) {
            let classType = heroInfo.heroTable.Class;
            if (this._bagVocationType !== tab.HeroClass.HeroClass_Max) {
                this._bagVocationType = classType;
            }
            this.node_vacation_taggle.getChildByName("Toggle" + this._bagVocationType).getComponent(Toggle).isChecked = true;
            let heroList = HeroDataControl.ins.getHeroListByVocation(this._bagVocationType, true);
            for (let i = 0; i < heroList.length; i += this._lineHeroCount) {
                result.push(heroList.slice(i, i + this._lineHeroCount));
            }
        }

        return result;
    }
    hideBagView() {
        this.onClose();
    }
    /* 点击展示英雄详情 */
    showDetailView() {
        // this.onClose();
        UIMgr.ins.show({ viewName: ViewName.HeroDetailView })
    }
    /* 显示英雄立绘信息 */
    showHeroPainting() {
        /* 加载资源 */
        let paintingNode = null;
        if (this.node_hero_painting.children.length === 0) {
            paintingNode = instantiate(this.pfb_hero_painting);
            paintingNode.parent = this.node_hero_painting;
        } else {
            paintingNode = this.node_hero_painting.children[0];
        }
        let ts = paintingNode.getComponent(HeroBagPainting);
        if (this._defaultView === VIEW_TYPE.HERO) {
            ts.initData();
        } else {
            ts.initBook();
        }
        // 显示雷达图
        this.showRadarData();
    }
    showRadarData() {
        let tabData: tab.HeroTable = null;
        this.node_radar.active = false;
        if (this._defaultView === VIEW_TYPE.HERO) {
            const heroInfo = HeroData.ins.getById(HeroDataControl.ins.heroId);
            tabData = heroInfo.heroTable;
        } else if (this._defaultView === VIEW_TYPE.BOOK) {
            const itemId = HeroDataControl.ins.bookId;
            tabData = tab.getData().HeroTableById.getValue(itemId);
        }
        if (tabData.RadarChart) {
            this.node_radar.active = true;
            this.sp_img_radar.setTexture(tabData.RadarChart);
            this.lbl_score_radar.string = LangMgr.getCombineString("ui_hero_59", [tabData.HeroScore]);
            for(let i=0;i<this.node_radar_txt.children.length;i++){
                const txt:Label = this.node_radar_txt.children[i].getComponent(Label);
                if(tabData.RadarHighlight.indexOf(i+1)>-1){
                    txt.color =  new Color().fromHEX(tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
                }else{
                    txt.color = new Color().fromHEX("#31B6D9");
                }
            }
            this.anim_radar.play("RadarShow");
        }
    }
    /* 点击一键升星 */
    clickAllStarUp() {
        UIMgr.ins.show({ viewName: ViewName.HeroAutoAscendPop })
    }
    /* 点击升级英雄背包 */
    clickUpHeroBagCount() {
        /* 点击打开弹窗 确定发送 */
        const heroBagExpansion = tab.getData().GetKeyValue_ConfigTable().HeroBagExpansion;
        const itemId = heroBagExpansion[0];
        const itemCount = heroBagExpansion[1];
        const bagCount = heroBagExpansion[2];
        const curHavaCount = ItemData.ins.getCount(itemId);
        const tipsStr = LangMgr.getCombineString("Tips_enlarge_1", [itemCount, bagCount]);
        CommonTipsPop.create(tipsStr, ((val) => {
            if (val) {
                if (curHavaCount < itemCount) {
                    ShowItemNotEnoughTips(itemId);
                } else {
                    let msg = new proto.Msg_UpHeroBagCapacityReq()
                    Net.Send(proto.Ptl.UpHeroBagCapacityReq, msg)
                }
            }
        }))
    }
    switchListView(event: EventTouch, ViewType: string) {
        if (this._defaultView === Number(ViewType)) {
            return;
        }
        this._defaultView = Number(ViewType);
        this._bagVocationType = tab.HeroClass.HeroClass_Max;
        this.node_vacation_taggle.children[0].getComponent(Toggle).isChecked = true;
        this.switchVocation(null, String(this._bagVocationType));
    }
    /* 根据职业刷新界面 */
    switchVocation(event: EventTouch, vocationType: string) {
        this._bagVocationType = Number(vocationType);
        if (this._defaultView === VIEW_TYPE.HERO) {
            let heroList = HeroDataControl.ins.getHeroListByVocation(this._bagVocationType, true);
            HeroDataControl.ins.refreshBagData(heroList[0]);
            this.showView(true);
        } else {
            if (this._bagVocationType === tab.HeroClass.HeroClass_Max) {
                let awardMap = HeroDataControl.ins.getBookReceivedIds();
                let itemId = 0;
                awardMap.forEach((value, key) => {
                    if (!value.isReceived && !itemId) {
                        itemId = key
                    }
                })
                if (itemId) {
                    HeroDataControl.ins.refreshBookData(itemId);
                } else {
                    let heroList = HeroDataControl.ins.getBookHeroListByVocation(this._bagVocationType, true);
                    HeroDataControl.ins.refreshBookData(heroList[0]);
                }
            } else {
                let heroList = HeroDataControl.ins.getBookHeroListByVocation(this._bagVocationType, true);
                HeroDataControl.ins.refreshBookData(heroList[0]);
            }
            HeroDataControl.ins.refreshBagData(0);
            this.showView(true);
        }
    }
    showBookHero() {
        this.node_function_taggle.children[1].getComponent(Toggle).isChecked = true;
        this._defaultView = VIEW_TYPE.BOOK
        this._bagVocationType = tab.HeroClass.HeroClass_Max;
        this.node_vacation_taggle.children[0].getComponent(Toggle).isChecked = true;
        HeroDataControl.ins.refreshBookData(HeroDataControl.ins.bookId);
        HeroDataControl.ins.refreshBagData(0);
        this.showView(true);
    }
    /* 点击阵容推荐 */
    clickShowRecommendView() {
        UIMgr.ins.show({ viewName: ViewName.HeroRecommendPop })
    }
    /* 点击遣散 */
    clickShowHeroResolvePop() {
        UIMgr.ins.show({ viewName: ViewName.HeroResolvePop })
    }
    /* 点击共鸣 */
    clickShowHeroResonancePop() {
        UIMgr.ins.show({ viewName: ViewName.HeroResonancePop })
    }
    /* 领取图签奖励 */
    on_s2c_ReceiveHeroAlbumRewardRsp(msg: proto.Msg_ReceiveHeroAlbumRewardRsp) {
        let rewards = msg.rewards;
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: rewards, zIndex: 300 })
        let map = HeroDataControl.ins.getBookReceivedIds();
        map.set(msg.heroItemId, {
            id: msg.heroItemId,
            isReceived: true
        });
        let bookTs = this.node_hero_book.getComponent(HeroBookView);
        bookTs.refreshBookByItemId(msg.heroItemId);
        RedMgr.refreshEvent(RedDotType.HeroBook);
    }
}


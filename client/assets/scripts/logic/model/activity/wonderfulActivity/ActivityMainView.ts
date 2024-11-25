import { _decorator, Component, error, EventTouch, instantiate, Node, Prefab, Toggle } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { ACTIVITY_GIFT_VIEW, MALLNAME } from '../../../../Common/script/EnumTypeMgr';
import { ViewName } from '../../../define/ViewDefine';
import { ClientView } from '../../../mgr/ClientView';
import { LoadResAsync } from '../../../mgr/ResMgr';
import { CycleGiftView } from './CycleGiftView';
import { ChapterGiftView } from './ChapterGiftView';
import { tab } from '../../../../Table/table_gen';
import { BattleMainDataControl } from '../../home/battle/BattleMainDataControl';
import { OpenFunctionMgr } from '../../../../Common/component/OpenFunctionMgr';
import { MallDataMgr } from '../../shop/MallDataMgr';
import { Func } from '../../../utils/Func';
import { NewHandGiftView } from './NewHandGiftView';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { EventMgr } from '../../../mgr/EventMgr';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
const { ccclass, property } = _decorator;

@ccclass('ActivityMainView')
export class ActivityMainView extends ViewPop {
    @property(Node)
    activityNode: Node = null;
    @property(Toggle)
    toggle_chapter: Toggle = null;
    @property(Toggle)
    toggle_Cycle: Toggle = null;
    @property(Toggle)
    toggle_NewPlayerMall: Toggle = null;
    @property(Toggle)
    toggle_NewPlayerMall2: Toggle = null;
    @property(Node)
    node_red_chapter: Node = null;
    @property(Node)
    node_red_NewPlayerMall: Node = null;
    @property(Node)
    node_red_NewPlayerMall2: Node = null;
    @property(Node)
    node_toggle_NewPlayerMall: Node = null;
    @property(Node)
    node_toggle_NewPlayerMall2: Node = null;
    @property(Node)
    node_activity_red:Node = null;

    @property(Prefab)
    pfb_cycle:Prefab = null;//周期礼包
    @property(Prefab)
    pfb_chapter:Prefab = null;//章节礼包
    @property(Prefab)
    pfb_mall:Prefab = null;//新手商场

    private cycle_view: CycleGiftView = null;
    private chapter_view: ChapterGiftView = null;
    private hand_view: NewHandGiftView = null;
    private hand_view2: NewHandGiftView = null;
    private view_type: ACTIVITY_GIFT_VIEW = ACTIVITY_GIFT_VIEW.NONE;
    private currNode: Node = null;
    private chapterMap: Map<MALLNAME, tab.MallItemTabe> = new Map();

    onShow(): void {
        // 获取固定商店信息
        let fixed_msg = new proto.Msg_GetFixedShopInfoMapReq();
        Net.Send(proto.Ptl.GetFixedShopInfoMapReq, fixed_msg);
    }

    initView() {
        this.view_type = this.openData?this.openData[0]:ACTIVITY_GIFT_VIEW.NONE;
        console.log(MallDataMgr.ins.getFixedShopExpireTime(MALLNAME.NewPlayerMall))
        this.node_toggle_NewPlayerMall.active = MallDataMgr.ins.getFixedShopExpireTime(MALLNAME.NewPlayerMall) > 0
        this.node_toggle_NewPlayerMall2.active = MallDataMgr.ins.getFixedShopExpireTime(MALLNAME.NewPlayerMall2) > 0
        this.toggle_Cycle.node.active = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_SpecialGiftDaily);

        if (this.node_toggle_NewPlayerMall.active){
            this.view_type = ACTIVITY_GIFT_VIEW.NewPlayerMall;
            this.toggle_NewPlayerMall.isChecked = true;
        }else if (this.node_toggle_NewPlayerMall2.active){
            this.view_type = ACTIVITY_GIFT_VIEW.NewPlayerMall2;
            this.toggle_NewPlayerMall2.isChecked = true;
        }else if (this.toggle_Cycle.node.active ){
            this.view_type = ACTIVITY_GIFT_VIEW.CYCLE;
            this.toggle_Cycle.isChecked = true;
        }else{
            this.view_type = ACTIVITY_GIFT_VIEW.CHAPTER;
            this.toggle_chapter.isChecked = true;
        }

        // if (this.view_type == ACTIVITY_GIFT_VIEW.NONE) {
        //     console.error("没有显示的页签")
        //     this.view_type = ACTIVITY_GIFT_VIEW.CYCLE;
        // }
        this.setChapterMap();
        this.switchView();
        this.refreshHandGiftRed();
        this.updateCycleActivityRed();
        // this.toggle_Cycle.isChecked = true
    }

    setChapterMap() {
        // 获取当前的章节
        this.chapterMap.clear();
        const ChapterId = BattleMainDataControl.ins.getPassChapterId();
        if (ChapterId === 0) {
            return;
        }
        for (let i = 0; i < tab.getData().MallTable.length; i++) {
            const _mallTab = tab.getData().MallTable[i];
            const _mallId = _mallTab.MallId;
            if (_mallTab.MallType == tab.MallType.MallType_MainChapterGift) {
                // 章节礼包
                for (let k = 0; k < tab.getData().MallItemTabe.length; k++) {
                    const mallTab = tab.getData().MallItemTabe[k];
                    if (mallTab.MallId === _mallId) {
                        // 判定开启条件
                        if (mallTab.OpenFunction) {
                            const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(mallTab.OpenFunction);
                            if (!isOpen) {
                                continue;
                            }
                        }
                        // 获取MainChapterGiftTable数据
                        const ChapterGiftTab = tab.getData().MainChapterGiftTableByMallId.getValue(mallTab.MallId);
                        // 是否达到通关条件
                        if (ChapterGiftTab.MainChapterId <= ChapterId) {
                            // 是否购买了
                            const boughtCount = MallDataMgr.ins.getFixedShopData(mallTab.MallId).get(mallTab.Id);
                            if (boughtCount === 0) {
                                this.chapterMap.set(mallTab.Id, mallTab);
                            }
                        }
                    }
                }
            }
        }
        this.toggle_chapter.node.active = this.chapterMap.size > 0;
        this.refreshChapterRed();
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    register(): void {
        /* 商店固定信息 */
        EventMgr.onMsg(proto.Ptl.GetFixedShopInfoMapRsp, this.on_s2c_GetFixedShopInfoMapRsp, this);
        EventMgr.onMsg(proto.Ptl.AdvWatchDataPush, this.updateCycleActivityRed, this);
    }
    on_s2c_GetFixedShopInfoMapRsp(msg: proto.Msg_GetFixedShopInfoMapRsp) {
        this.initView()
    }
    unRegister(): void {
        super.unRegister();
    }
    clickSwitchView(e: EventTouch, view: string) {
        this.view_type = Number(view);
        this.switchView();
    }
    async switchView() {
        if (this.currNode) {
            this.currNode.active = false;
        }
        switch (this.view_type) {
            case ACTIVITY_GIFT_VIEW.CYCLE:
                if (!this.cycle_view) {
                    const _cycle_view = instantiate(this.pfb_cycle);
                    _cycle_view.parent = this.activityNode;
                    if (_cycle_view) {
                        this.cycle_view = _cycle_view.getComponent(CycleGiftView);
                        this.currNode = _cycle_view;
                        this.cycle_view.onShow(this.openData);
                    }
                } else {
                    this.cycle_view.node.active = true;
                    this.currNode = this.cycle_view.node;
                    this.cycle_view.onShow(this.openData);
                }
                break;
            case ACTIVITY_GIFT_VIEW.CHAPTER:
                // 章节礼包
                if (!this.chapter_view) {
                    const _chapter_view =instantiate(this.pfb_chapter);
                    _chapter_view.parent = this.activityNode;
                    if (_chapter_view) {
                        this.chapter_view = _chapter_view.getComponent(ChapterGiftView);
                        this.currNode = _chapter_view;
                        this.chapter_view.onShow(this.chapterMap);
                    }
                } else {
                    this.chapter_view.node.active = true;
                    this.currNode = this.chapter_view.node;
                    this.chapter_view.onShow();
                }
                break
            case ACTIVITY_GIFT_VIEW.NewPlayerMall:
                // 新手商城
                if (!this.hand_view) {
                    const _hand_view = instantiate(this.pfb_mall);
                    _hand_view.parent = this.activityNode;
                    if (_hand_view) {
                        this.hand_view = _hand_view.getComponent(NewHandGiftView);
                        this.currNode = _hand_view;
                        this.hand_view.onShow(MALLNAME.NewPlayerMall);
                    }
                } else {
                    this.hand_view.node.active = true;
                    this.currNode = this.hand_view.node;
                    this.hand_view.onShow(MALLNAME.NewPlayerMall);
                }
                break
            case ACTIVITY_GIFT_VIEW.NewPlayerMall2:
                // 精英商城
                if (!this.hand_view2) {
                    const _hand_view2 = instantiate(this.pfb_mall);
                    _hand_view2.parent = this.activityNode;
                    if (_hand_view2) {
                        this.hand_view2 = _hand_view2.getComponent(NewHandGiftView);
                        this.currNode = _hand_view2;
                        this.hand_view2.onShow(MALLNAME.NewPlayerMall2);
                    }
                } else {
                    this.hand_view2.node.active = true;
                    this.currNode = this.hand_view2.node;
                    this.hand_view2.onShow(MALLNAME.NewPlayerMall2);
                }
            default:
                break;
        }
    }
    // async createView(viewName: ViewName) {
    //     let viewTab = ClientView.ins.getViewTab(viewName);
    //     if (viewTab) {
    //         let pfb: Prefab = await LoadResAsync(viewTab.Path, Prefab)
    //         let view = instantiate(pfb);
    //         view.parent = this.activityNode;
    //         return view;
    //     } else {
    //         error("view路径没有配置", viewName)
    //     }
    //     return null;
    // }
    // 章节礼包红点
    refreshChapterRed() {
        let isRed = false;
        this.chapterMap.forEach((val, key) => {
            const local = Boolean(Func.getItem("chapter_gift_" + key));
            if (!local && !isRed) {
                isRed = true;
            }
        })
        this.node_red_chapter.active = isRed;
    }
    // 新手礼包 精英礼包红点
    refreshHandGiftRed() {
        // 新手礼包
        const newBoughtCount = MallDataMgr.ins.getFixedShopData(MALLNAME.NewPlayerMall).get(7001);
        const newBoughtCount2 = MallDataMgr.ins.getFixedShopData(MALLNAME.NewPlayerMall2).get(7101);
        const mallItemTab = tab.getData().MallItemTabeById.getValue(7001);
        const mallItemTab2 = tab.getData().MallItemTabeById.getValue(7101);
        this.node_red_NewPlayerMall.active = newBoughtCount < mallItemTab.LimitCount;
        this.node_red_NewPlayerMall2.active = newBoughtCount2 < mallItemTab2.LimitCount;
    }
    // 日礼包 周礼包 月礼包红点
    updateCycleActivityRed(){
        const dailyRed = RedMgr.ins.isRed(RedDotType.GachaAds, "11");
        const weekRed = RedMgr.ins.isRed(RedDotType.GachaAds, "12");
        const MonthRed = RedMgr.ins.isRed(RedDotType.GachaAds, "13");
        this.node_activity_red.active = dailyRed||weekRed||MonthRed
    }
}



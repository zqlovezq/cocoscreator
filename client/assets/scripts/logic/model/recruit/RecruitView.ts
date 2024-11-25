import { _decorator, Button, Component, EventTouch, Label, Node, RichText, sp, Sprite, Toggle } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { Func } from '../../utils/Func';
import { ViewName } from '../../define/ViewDefine';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { EventMgr } from '../../mgr/EventMgr';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
import { LangMgr } from '../../mgr/LangMgr';
import { HeroData } from '../hero/HeroData';
import { ItemData } from '../item/ItemData';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { gachaReplace, setTextTime } from '../../utils/GameUtil';
import { AdMgr } from '../AdMgr';
import { RoleData } from '../role/RoleData';
import { RecruitType } from '../../../Common/script/EnumTypeMgr';
import { SettingRedManager } from '../role/SettingRedManager';
import { GuideController } from '../../guide/GuideController';
import { LocalEvent } from '../../define/LocalEvent';
import { ActivityData } from '../activity/ActivityData';
const { ccclass, property } = _decorator;
@ccclass('RecruitView')
export class RecruitView extends ViewPop {
    @property(Node)
    node_senior: Node = null;
    @property(Node)
    node_vocation: Node = null;
    @property(Node)
    node_friend: Node = null;

    @property(RichText)
    lbl_tips: RichText = null;

    @property(Node)
    node_toggle_type: Node = null;
    @property(Node)
    node_toggle_vacation: Node = null;
    @property(Label)
    lbl_senior_voucher: Label = null;
    @property(Label)
    lbl_hero_voucher: Label = null;
    @property(sp.Skeleton)
    spine_draw_1: sp.Skeleton = null;
    @property(sp.Skeleton)
    spine_draw_2: sp.Skeleton = null;
    @property(sp.Skeleton)
    spine_draw_3: sp.Skeleton = null;

    @property(Label)
    lbl_adv_friend_time: Label = null;
    @property(Node)
    node_adv_friend_btn: Node = null;

    @property(Label)
    lbl_adv_senior_time: Label = null;
    @property(Node)
    node_adv_senior_btn: Node = null;
    @property(Node)
    node_limit: Node = null;
    @property(Label)
    lbl_time:Label = null;

    public _recruitHerosMap: Map<number, number> = new Map();
    private _curRecruitType: RecruitType = RecruitType.None;//当前抽卡类型
    private _recruitItemSource: number = 0;
    private _isGacha: boolean = false
    private _newHero: number = 0;
    private countDown:number = 0;
    /* 初始化map */
    setRecruitMap() {
        this._recruitHerosMap.clear();
        const heros = HeroData.ins.getHeros();
        for (let i = 0; i < heros.length; i++) {
            const heroInfo = heros[i];
            const heroTab = heroInfo.heroTable;
            if (heroTab.Aptitude == tab.HeroAptitude.HeroAptitude_SR) {
                if (this._recruitHerosMap.has(heroTab.Id)) {
                    this._recruitHerosMap.set(heroTab.Id, this._recruitHerosMap.get(heroTab.Id) + 1)
                } else {
                    this._recruitHerosMap.set(heroTab.Id, 1);
                }
            }
        }
    }
    register(): void {
        /* 获取背包数据 */
        EventMgr.onMsg(proto.Ptl.GachaRsp, this.on_s2c_GachaRsp, this);
        EventMgr.onLocal(LocalEvent.showNewOver, this.autoShowHeroAnim, this)
        EventMgr.onLocal(LocalEvent.hidePop, this.hidePop, this)
    }
    unRegister(): void {
        super.unRegister()
    }
    on_s2c_GachaRsp(msg: proto.Msg_GachaRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        if (msg.id === 100) {
            this._newHero = msg.rewards[0].itemId;
            this.showNewHeroPop();
        } else {
            this.showGachaView(msg.rewards, msg.id)
        }
        if (!GuideController.ins.isGuiding()) {
            this._isGacha = false;
        }
        this.unClickToggle();
        this.asyncView();
        // 刷新红点

        RedMgr.refreshEvent(RedDotType.HeroGacha); //保底抽
        RedMgr.refreshEvent(RedDotType.GachaAds); //广告
    }
    hidePop() {
        if (GuideController.ins.isGuiding()) {
            this._isGacha = false;
        }
    }
    onShow(): void {
        // 默认进来高级扭蛋
        if (GuideController.ins.isGuiding()) {
            EventMgr.emitLocal(LocalEvent.ShowPop);
        }
        this.setRecruitMap();
        this._curRecruitType = RecruitType.Senior;
        if (this.openData) {
            this._curRecruitType = this.openData;
        }
        const node_toggle: Toggle = this.node_toggle_type.getChildByName("Toggle" + this._curRecruitType).getComponent(Toggle);
        node_toggle.isChecked = true;
        this.showTypeNode();
        this.node_limit.active = ActivityData.ins.GachaUpIsOpen();
        if(this.node_limit.active){
            UIMgr.ins.hideView("RecruitLimitView");
            const actInfo = ActivityData.ins.getAllUpData()[0];
            this.countDown = Number(actInfo.endTime) - RoleData.ins.getServerUtcTime();
            this.timeUpdate();
            this.unschedule(this.timeUpdate);
            this.schedule(this.timeUpdate, 1);
        }
    }
    timeUpdate(){
        this.countDown--;
        if(this.countDown<=0){
            this.unschedule(this.timeUpdate);
            this.node_limit.active = false;
        }else{
            this.lbl_time.string = setTextTime(this.countDown);
        }
    }
    protected onDestroy(): void {
        super.onDestroy();
        this.unRegister();
    }
    switchRecruitType(event: EventTouch, type: string) {
        this._curRecruitType = Number(type);
        this.showTypeNode();
    }
    showTypeNode() {
        this.node_senior.active = this._curRecruitType === RecruitType.Senior;
        this.node_vocation.active = this._curRecruitType === RecruitType.Vocation;
        this.node_friend.active = this._curRecruitType === RecruitType.Friend;
        if (this._curRecruitType === RecruitType.Vocation) {
            // 默认为射手 是否本地存储职业 没有则设置为默认
            if (Func.getItem("recruit_vacation")) {
                this.changeItemSource(null, Func.getItem("recruit_vacation"))
            } else {
                this.changeItemSource(null, String(210))
            }
        } else {
            this.asyncView();
            this.changeItemSource(null, "");
        }
    }
    /* 界面动态信息更新*/
    asyncView() {
        const seniorVoucher = ItemData.ins.getCount(51);
        // 英雄凭证
        const heroVoucher = ItemData.ins.getCount(81);
        this.lbl_senior_voucher.string = seniorVoucher + "/" + 1000
        this.lbl_hero_voucher.string = heroVoucher + "/" + 1000;
        const type_friend = tab.AdType.AdType_Gacha301;
        const friend_adv_cur_count = AdMgr.ins.getAdCountByType(type_friend);
        const friend_adv_max_count = AdMgr.ins.getAdCountMaxByType(type_friend);
        this.lbl_adv_friend_time.string = (friend_adv_max_count - friend_adv_cur_count) + "/" + friend_adv_max_count;
        if (AdMgr.ins.getAdCountByType(type_friend) >= AdMgr.ins.getAdCountMaxByType(type_friend)) {
            this.node_adv_friend_btn.getComponent(Sprite).grayscale = true;
            this.node_adv_friend_btn.getComponent(Button).interactable = false;
        }

        const type_senior = tab.AdType.AdType_Gacha101;
        const senior_adv_cur_count = AdMgr.ins.getAdCountByType(type_senior);
        const senior_adv_max_count = AdMgr.ins.getAdCountMaxByType(type_senior);
        this.lbl_adv_senior_time.string = (senior_adv_max_count - senior_adv_cur_count) + "/" + senior_adv_max_count
        if (AdMgr.ins.getAdCountByType(type_senior) >= AdMgr.ins.getAdCountMaxByType(type_senior)) {
            this.node_adv_senior_btn.getComponent(Sprite).grayscale = true;
            this.node_adv_senior_btn.getComponent(Button).interactable = false;
        }
        // 同步一下

        let totalCount = 10;
        for (let i = 0; i < RoleData.ins.drop.data.length; i++) {
            const data = RoleData.ins.drop.data[i];
            if (data.id == "r_17") {
                totalCount = totalCount - data.sum;
                break;
            }
        }
        this.lbl_tips.string = LangMgr.getCombineString("ui_recruit_2", [totalCount]);
    }
    changeItemSource(event: EventTouch, type: string) {
        if (this._curRecruitType === RecruitType.Senior) {
            this._recruitItemSource = 100
        } else if (this._curRecruitType === RecruitType.Friend) {
            this._recruitItemSource = 300;
        } else if (this._curRecruitType === RecruitType.Vocation) {
            // 职业
            if (type) {
                this._recruitItemSource = Number(type);
                Func.setItem("recruit_vacation", type);
                const vocation_toggle = this.node_toggle_vacation.getChildByName("Toggle" + (this._recruitItemSource - 190) / 10).getComponent(Toggle);
                vocation_toggle.isChecked = true;
            }
        }
    }

    /* 十连抽 */
    private gachaTen() {
        // 点击抽卡播放xuanzhuan结束后弹出抽卡展示界面
        if (this._isGacha) {
            return
        }
        this.sendGacha(this._recruitItemSource + 2);
    }

    /* 单抽 */
    private gachaOnce() {
        if (this._isGacha) {
            return
        }
        this.sendGacha(this._recruitItemSource + 1);
    }
    /* 高级广告抽 */
    sendSeniorAdvWatch() {
        const type = tab.AdType.AdType_Gacha101;
        if (AdMgr.ins.getAdCountByType(type) >= AdMgr.ins.getAdCountMaxByType(type)) {
            return
        }
        AdMgr.ins.playVideoAd(tab.AdType.AdType_Gacha101, () => {
            this.sendGacha(101, true);
        }, false)
    }
    /* 好友广告抽 */
    sendFriendAdvWatch() {
        const type = tab.AdType.AdType_Gacha301;
        if (AdMgr.ins.getAdCountByType(type) >= AdMgr.ins.getAdCountMaxByType(type)) {
            return
        }

        AdMgr.ins.playVideoAd(tab.AdType.AdType_Gacha301, () => {
            this.sendGacha(301, true);
        }, false)
    }
    sendGacha(id: number, isAdv: boolean = false) {
        const self = this;
        const gachaTab = tab.getData().GachaTableById.getValue(id);
        const count = gachaTab.ItemCount;
        const itemId = gachaTab.ItemId;
        const itemCount = ItemData.ins.getCount(itemId);
        if (HeroDataControl.ins.getHeroBagFull(gachaTab.ItemCount)) {
            ShowTips(LangMgr.getLab("Tips_herobag_1"))
            return
        }
        const sendMsg = (() => {
            self._isGacha = true;
            self.unClickToggle();
            self["spine_draw_" + self._curRecruitType].setAnimation(0, "xuanzhuan", false);
            self["spine_draw_" + self._curRecruitType].setCompleteListener((listener) => {
                if (listener.animation.name === "xuanzhuan") {
                    let msg = new proto.Msg_GachaReq();
                    msg.id = id;
                    msg.fromAdv = isAdv;
                    Net.Send(proto.Ptl.GachaReq, msg);
                }
            })
        })
        if (!isAdv && itemCount < count) {
            let canSendMsg = gachaReplace(id, this._curRecruitType, sendMsg);
            if (!canSendMsg) {
                return;
            }
        }
        sendMsg();
    }
    /* 显示抽卡界面 */
    showGachaView(_rewards: proto.IItem[], _id: number) {
        UIMgr.ins.show({
            viewName: ViewName.RecruitGetPop, data: {
                rewards: _rewards,
                id: _id,
                type: this._curRecruitType,
                map: this._recruitHerosMap
            }
        });
    }
    /* 显示概率公示界面 */
    showGachaProbabilityView(event: EventTouch, type: string) {
        if (this._curRecruitType == RecruitType.Senior) {
            UIMgr.ins.show({ viewName: ViewName.RecruitProbabilityPop })
        } else if (this._curRecruitType == RecruitType.Friend) {
            UIMgr.ins.show({ viewName: ViewName.RecruitFriendProbabilityPop })
        } else if (this._curRecruitType == RecruitType.Vocation) {
            UIMgr.ins.show({ viewName: ViewName.RecruitProProbabilityPop, data: { "heroClass": this._recruitItemSource } })
        }
        // UIMgr.ins.show({
        //     viewName: ViewName.RecruitProbabilityPop, data: {
        //         type: this._curRecruitType,
        //         recruit: this._recruitItemSource
        //     }
        // });
    }
    /* 显示保底抽界面 */
    showGuaranteeView(event: EventTouch, type: string) {
        UIMgr.ins.show({
            viewName: ViewName.RecruitGuaranteePop
        });
    }
    // 如果当前是新英雄
    showNewHeroPop() {
        UIMgr.ins.show({
            viewName: ViewName.NewHeroPop, data: {
                itemId: this._newHero
            }
        })
    }
    autoShowHeroAnim() {
        if (this._newHero > 0) {
            const heroTab = tab.getData().HeroTableById.getValue(this._newHero);
            let rewards: proto.Item[] = [{
                itemId: this._newHero,
                num: 1,
                extra: {
                    heroStar: heroTab.DefaultStar
                },
                transaction: []
            }]
            UIMgr.ins.show({
                viewName: ViewName.CongratulationPop, data: rewards
            });
            this._newHero = -1;
        }
    }
    /* 将toggle失效 */
    unClickToggle() {
        for (let i = 1; i <= 3; i++) {
            const node_toggle: Toggle = this.node_toggle_type.getChildByName("Toggle" + i).getComponent(Toggle);
            node_toggle.interactable = !this._isGacha
        }
    }
    /* 点击前往职业兑换界面 */
    onClickGoVocationShop() {
        UIMgr.ins.show({
            viewName: ViewName.MallMainView, data: tab.MallTab.MallTab_Tab3
        });
    }

    onClose(): void {
        super.onClose();
        if (!SettingRedManager.ins.getSetting("GachaAds")) {
            SettingRedManager.ins.setSetting("GachaAds", true);
        }
        if (!SettingRedManager.ins.getSetting("TenGacha")) {
            SettingRedManager.ins.setSetting("TenGacha", true);
        }
        if (GuideController.ins.isGuiding()) {
            EventMgr.emitLocal(LocalEvent.checkMainView);
        }
    }
    clickLimitBtn(){
        this.onClose();
        UIMgr.ins.show({ viewName: ViewName.RecruitLimitView})
    }
}



import { _decorator, Button, instantiate, Label, Layers, log, Node, ProgressBar, RichText, Size, sp, Sprite, SpriteFrame, SpriteRenderer, Tween, tween, UITransform, Vec3, view } from 'cc';
import { ViewScreen } from '../../../framework/base/ViewScreen';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { RoleData } from '../role/RoleData';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { PlayerHeadItem } from '../common/PlayerHeadItem';
import { ResourceItem } from '../common/ResourceItem';
import { BattleMainDataControl } from './battle/BattleMainDataControl';
import { tab } from '../../../Table/table_gen';
import { createAnimation, GameUtil, setTextTime, setTextTime_3 } from '../../utils/GameUtil';
import { LangMgr } from '../../mgr/LangMgr';
import { ItemData } from '../item/ItemData';
import { proto } from 'client_protocol';
import { PrestigeData } from '../prestige/PrestigeData';
import { ChatData } from '../chat/ChatData';
import { ActivityData } from '../activity/ActivityData';
import { HeroData } from '../hero/HeroData';
import { HeroTeamControl } from '../hero/HeroTeamControl';
import { PayData } from '../pay/PayData';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
import { PatrolDataMgr } from './Patrol/PatrolDataMgr';
import { Net } from '../../net/Net';
import { RedDotType } from '../../red/RedDotType';
import { RedMgr } from '../../mgr/RedMgr';
import { RookieTaskMgr } from '../activity/rookieTask/RookieTaskMgr';
import { FengyunRankData } from '../fengyunRanking/FengyunRankData';
import { GuideController } from '../../guide/GuideController';
import { DisableGuideController, EnableGuideController } from '../../guide/GuideCommand';
import { ChannelMgr } from '../../../channel/ChannelMgr';
import { Global } from '../../../Global';
import { RoleControl } from '../role/RoleControl';
import { MallDataMgr } from '../shop/MallDataMgr';
import { MALLNAME, DEVELOPTYPE, TRIALLAYER } from '../../../Common/script/EnumTypeMgr';
import { BattlePassDataMgr } from '../activity/battlePass/BattlePassDataMgr';
import { AssociationControl } from '../association/AssociationControl';
import RedComp from '../../../Common/component/RedComp';
import RedEventComp from '../../../Common/component/RedEventComp';
import { ActivityOpenInfo } from '../activity/ActivityOpenInfo';
import { ForceUpPop } from '../item/ForceUpPop';
import { SignInGiftData } from '../activity/signGift/SignInGiftData';
import { FightData } from '../../fight/data/FightData';
const { ccclass, property } = _decorator;

@ccclass('HomeMainView')
export class HomeMainView extends ViewScreen {

    @property(Label)
    forceLab: Label = null;

    @property(Label)
    nameLab: Label = null;

    @property(Label)
    titleImg: Label = null;
    @property(Label)
    vipImg: Label = null;
    @property(Label)
    lbl_level: Label = null;
    @property(Label)
    lbl_vip_level: Label = null;
    @property(Label)
    lbl_power_score: Label = null;
    @property(Label)
    lbl_chapter_name: Label = null;
    @property(Label)
    lbl_max_alive_second: Label = null;
    @property(Sprite)
    lbl_chapter_icon: Sprite = null;
    @property(Label)
    lbl_chapter_num: Label = null;
    @property(Label)
    lbl_revive_num: Label = null;

    @property(ProgressBar)
    expBar: ProgressBar = null;
    @property(PlayerHeadItem)
    palyerHeadItem: PlayerHeadItem = null;
    @property(ResourceItem)
    resourceItem: ResourceItem = null;

    @property(Label)
    prestigeNameLab: Label = null;
    @property(Label)
    prestigeTotalLab: Label = null;
    @property(Label)
    prestigeNowLab: Label = null

    @property(Node)
    chatNode: Node = null;
    @property(Label)
    channelLab: Label = null;
    @property(Node)
    chatWorldNode: Node = null;
    @property(Node)
    chatNotNode: Node = null;
    @property(Label)
    chatNameLab: Label = null;
    @property(Label)
    chatContentLab: Label = null
    @property(Node)
    chatSystemNode: Node = null;
    @property(RichText)
    chatSystemRichTxt: RichText = null;

    @property(Node)
    limitBtnNode: Node = null;
    @property(Node)
    node_spines: Node = null;
    @property(Node)
    firstRechargeBtnNode: Node = null;

    @property(Node)
    breakEggNode: Node = null;
    @property(Label)
    breakEggNumLab: Label = null;
    @property(Node)
    breakEggNumNode: Node = null;

    @property(Node)
    node_battle_pass: Node = null;
    @property(Node)
    node_patrol_red: Node = null;
    @property(Node)
    node_rookie_task_btn: Node = null;
    @property(Node)
    node_red_trial: Node = null;
    @property(Node)
    honorRankNode: Node = null;
    @property(Node)
    node_day_gift_btn: Node = null;
    @property(Node)
    node_finger: Node = null;
    @property(Node)
    node_activity_red: Node = null;
    @property(Node)
    node_activity_group: Node = null;

    @property(Sprite)
    sp_activity_combine: Sprite = null;
    @property(Node)
    node_signing_gift: Node = null;

    private PatrolTime: number = 0;
    private checkGuide = true;

    @property(Node)
    event_scroll: Node = null

    protected onLoad(): void {
        super.onLoad()
        this.event_scroll.active = !Global.isReview
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.ItemChangePush, this.on_s2c_ItemChangePush, this)
        EventMgr.onMsg(proto.Ptl.RoleLevelUpPush, this.on_s2c_RoleLevelUpPush, this);
        EventMgr.onMsg(proto.Ptl.UpdateRolePowerScore, this.on_s2c_UpdateRolePowerScore, this);
        EventMgr.onMsg(proto.Ptl.UpdateHeroPowerScore, this.on_s2c_Msg_UpdateHeroPowerScore, this);
        EventMgr.onMsg(proto.Ptl.GetBattlePassInfoMapRsp, this.on_s2c_GetBattlePassInfoMapRsp, this);
        EventMgr.onLocal(LocalEvent.Prestige_Change, this.updatePrestige, this)
        EventMgr.onLocal(LocalEvent.ChatMessage_Change, this.updateChatMessage, this)
        EventMgr.onLocal(LocalEvent.LimitedBenefits_Change, this.updateLimitReward, this)
        EventMgr.onLocal(LocalEvent.FirstRecharge_Chang, this.updateFirstRecharge, this)
        EventMgr.onLocal(LocalEvent.BreakEgg_change, this.updateBreakEgg, this)
        EventMgr.onLocal(LocalEvent.VipLevel_Change, this.updateVip, this)
        EventMgr.onLocal(LocalEvent.hidePop, this.checkMainView, this)
        EventMgr.onMsg(proto.Ptl.GetPatrolInfoRsp, this.on_s2c_GetPatrolInfoRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceivePatrolRewardRsp, this.on_s2c_ReceivePatrolRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.ChangeRoleNameRsp, this.on_s2c_ChangeRoleName, this);

        EventMgr.onLocal(LocalEvent.TrialRed, this.updateTrialRed, this)
        EventMgr.onLocal(LocalEvent.checkOpenFuncPop, this.checkOpenFuncPop, this)
        EventMgr.onMsg(proto.Ptl.LimitedRewardPush, this.updateLimitReward, this)
        EventMgr.onMsg(proto.Ptl.SetTeamSlotRsp, this.on_s2c_SetTeamSlotRsp, this);
        RoleControl.ins.requestGetServerTime();


        // 精彩活动红点
        EventMgr.onMsg(proto.Ptl.BuyFixedShopCommodityRsp, this.on_s2c_BuyFixedShopCommodityRsp, this);
        EventMgr.onMsg(proto.Ptl.AdvWatchDataPush, this.updateActivityRed, this);
        EventMgr.onLocal(LocalEvent.openFuncRed, this.updateActivityRed, this)
    }
    on_s2c_ChangeRoleName(msg: proto.Msg_ChangeRoleNameRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            RoleData.ins.changeNameTimes++;
            RoleData.ins.name = msg.name;
            this.updatePlayerName();
        }
    }
    /* 上阵英雄 */
    on_s2c_SetTeamSlotRsp(msg: proto.Msg_SetTeamSlotRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.updateHeroSpine(Number(msg.heroId));
    }
    on_s2c_UpdateRolePowerScore(msg: proto.Msg_UpdateRolePowerScore) {
        // 战力提升
        if (msg.powerScore > RoleData.ins.powerScore) {
            UIMgr.ins.show({
                viewName: ViewName.ForceUpPop, data: {
                    power: RoleData.ins.powerScore,
                    addPower: msg.powerScore - RoleData.ins.powerScore
                }
            })
        }
        RoleData.ins.powerScore = msg.powerScore;
        this.updateForce();
    }
    on_s2c_Msg_UpdateHeroPowerScore(msg: proto.Msg_UpdateHeroPowerScore) {
        const heroInfo = HeroData.ins.getById(msg.heroId);
        if (heroInfo) {
            heroInfo.powerScore = msg.powerScore;
        }

    }
    on_s2c_RoleLevelUpPush(msg: proto.Msg_RoleLevelUpPush) {
        RoleData.ins.oldLevel = msg.level;
        // 播放小鸡升级动画
        this.updateLevel();
        //----武器装备槽位根据等级解锁 需要刷新红点-------
        RedMgr.refreshEvent(RedDotType.BooK_Equip);
    }
    on_s2c_ItemChangePush(msg: proto.Msg_ItemChangePush) {
        if (msg.updatedItems) {
            for (let i = 0; i < msg.updatedItems.length; i++) {
                const item = msg.updatedItems[i];
                if (item.itemId === 3) {
                    this.updateExpBar();
                }
                if (item.itemId === 202) {
                    this.lbl_revive_num.string = String(ItemData.ins.getCount(202))
                }
            }
        }
    }
    protected start(): void {
        if (BattleMainDataControl.ins.getStageClearIds().length === 0 && RoleData.ins.curClearStageId === 101) {
            EnableGuideController();
            GuideController.ins.showMonster = false;
            GuideController.ins.dropCount = 1;
            GuideController.ins.node_jump.active = false;
            EventMgr.unLocal(LocalEvent.JadeDrop);
            GuideController.ins.clearTask();
        }

        if (!RoleData.ins.IsGuideFinished() && this.checkGuide) {
            GuideController.ins.clearTask();
            RoleData.ins.setGuideStep();
            EventMgr.emitLocal(LocalEvent.CheckGuide);
            this.checkGuide = false;
        } else {
            DisableGuideController();
        }
        clearTimeout(GuideController.ins.setTimeOutCount);
        // 刷新一下武器礼包状态
        ActivityData.ins.refresh7GiftPackBuyState();
        this.initView();
        RoleControl.ins.updateNoticeRed();
    }
    initView() {
        this.updatePlayerName();
        this.updateChapterData();
        this.updateForce();
        this.updateLevel();
        this.updateVip();
        this.updateExpBar();
        this.updatePrestige();
        this.updateChatMessage();
        this.updateLimitReward();
        this.updateHeroSpine();
        this.updateFirstRecharge();
        this.updateBreakEgg();
        this.updatePatrolData();
        this.updateTrial();
        this.jumpToChallenge();
        this.updateGiftBtn();
        this.refreshRed();
        this.updateActivityRed();
        this.showFinger();
        this.refreshActivityGroup();
        // log("数字1000===="+GameUtil.convertNumber(1000));
        // log("数字10000===="+GameUtil.convertNumber(10000));
        // log("数字100003===="+GameUtil.convertNumber(100003));
        // log("数字101003===="+GameUtil.convertNumber(101003)+"======",GameUtil.convertNumber(101003,true));
        // log("数字101503===="+GameUtil.convertNumber(101503)+"======",GameUtil.convertNumber(101503,true));
        // log("数字10150333222===="+GameUtil.convertNumber(10150333222)+"======",GameUtil.convertNumber(10150333222,true));
        // log("数字18150333222===="+GameUtil.convertNumber(18150333222)+"======",GameUtil.convertNumber(18150333222,true));
        this.updateHonorRank();
    }

    onClickFight() {
        // SceneMgr.ins.enterFight()
    }

    onClickMatch() {

    }

    onClickTest() {
        UIMgr.ins.show({ viewName: ViewName.AzheGmPop })
    }

    /**刷新体力 */
    updatePower() {

    }


    /**
     * 刷新玩家名称
     */
    updatePlayerName() {
        this.nameLab.string = RoleData.ins.name;
    }
    /**
     * 刷新头像信息
     */
    updateHeadInfo() {

    }
    /**刷新玩家等级 */
    updateLevel() {
        if (RoleData.ins.oldLevel && RoleData.ins.oldLevel > RoleData.ins.level) {
            RoleData.ins.level = RoleData.ins.oldLevel;
            RoleData.ins.oldLevel = 0;
            this.scheduleOnce(() => {
                UIMgr.ins.show({ viewName: ViewName.PlayerLvUpPop, data: RoleData.ins.level })
            })
            ChannelMgr.roleLevelUp(RoleData.ins.sdkRole())
        } else {
            this.checkOpenFuncPop();
        }
        this.lbl_level.string = String(RoleData.ins.level);
    }
    /**刷新经验条 */
    updateExpBar() {
        // 当前等级
        const playerLv = RoleData.ins.level;
        const PlayerLvTab = tab.getData().PlayerLvTableByPlayerLv.getValue(playerLv);
        const curExpMax = PlayerLvTab.Exp;
        const ExpCount = ItemData.ins.getCount(3);
        let ExpBarMother = 0;
        let ExpBarChild = 0
        if (playerLv > 1) {
            const lasExpMax = tab.getData().PlayerLvTableByPlayerLv.getValue(playerLv - 1).Exp;
            ExpBarMother = curExpMax - lasExpMax;
            ExpBarChild = ExpCount - lasExpMax
        } else {
            ExpBarMother = curExpMax;
            ExpBarChild = ExpCount
        }
        this.expBar.progress = ExpBarChild / ExpBarMother
    }
    updateVip() {
        this.lbl_vip_level.string = String(RoleData.ins.vipLevel);
    }
    updateForce() {
        this.lbl_power_score.string = GameUtil.convertNumber(RoleData.ins.powerScore);
    }
    /* 玩家章节信息 */
    updateChapterData() {
        const curChapterId = BattleMainDataControl.ins.getChapterId();
        const chapterData = tab.getData().MainChapterTableById.getValue(curChapterId);
        this.lbl_chapter_icon.setTexture(chapterData.Icon);
        this.lbl_max_alive_second.string = setTextTime_3(BattleMainDataControl.ins.getCurMaxAliveSecond());
        this.lbl_chapter_name.string = LangMgr.getLab(chapterData.Name);
        this.lbl_chapter_num.string = String(curChapterId);
        this.lbl_revive_num.string = String(ItemData.ins.getCount(202))
    }
    updatePrestige() {
        let taskInfo = PrestigeData.ins.getHomeShowTaskInfo();
        if (taskInfo) {
            this.prestigeNameLab.string = LangMgr.getLab(taskInfo.taskTable.Describe);
            this.prestigeTotalLab.string = taskInfo.taskTable.FinishParam1 + "";
            this.prestigeNowLab.string = taskInfo.progress + "";
        }
    }
    updateChatMessage() {
        let info = ChatData.ins.newMessageInfo;
        if (info) {
            this.chatNode.active = true;
            this.chatNotNode.active = false;
            let type = ChatData.ins.getChanneTypeById(Number(info.channelId));

            if (type == proto.ChatChannelType.World) {
                this.chatWorldNode.active = true;
                this.chatSystemNode.active = false;
                this.chatNameLab.string = info.sender.name;
                this.chatContentLab.string = info.normal;
                //this.channelLab.string="世界";
                this.channelLab.string = LangMgr.getLab("ui_commondesc_74");
            } else {
                this.chatWorldNode.active = false;
                this.chatSystemNode.active = true;
                this.chatSystemRichTxt.string = info.systemContent;
                //this.channelLab.string="系统";
                this.channelLab.string = LangMgr.getLab("ui_commondesc_75");
            }
        } else {
            this.chatNode.active = false;
            this.chatNotNode.active = true;
        }
    }
    updateLimitReward() {
        this.limitBtnNode.active = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_LimitBenifit);
    }
    onClickChat() {
        let info = ChatData.ins.newMessageInfo;
        if (info) {
            let type = ChatData.ins.getChanneTypeById(Number(info.channelId));
            UIMgr.ins.show({ viewName: ViewName.ChatPop, data: { "channelType": type } })
        } else {
            UIMgr.ins.show({ viewName: ViewName.ChatPop })
        }
    }
    protected onDestroy(): void {
        if (UIMgr.ins.getView("ForceUpPop")) {
            UIMgr.ins.getView("ForceUpPop").getComponent(ForceUpPop).onClose();
        }
        EventMgr.unTarget(this);
    }
    /* 更新队伍上阵 */
    updateHeroSpine(heroId?: number) {
        if (heroId) {
            // 判断英雄职业 替换spine
            const _heroInfo = HeroData.ins.getById(heroId);
            const _heroClass = HeroData.ins.getById(heroId).heroTable.Class;
            const _spine = this.node_spines.getChildByName("spine" + _heroClass).getComponent(sp.Skeleton)
            createAnimation(_spine.node, _heroInfo.heroTable.Idle)
        } else {
            const teamInfo = HeroTeamControl.ins.getTeam();
            for (let i = 1; i <= teamInfo.length; i++) {
                const heroId = teamInfo[i - 1].heroId;
                const heroInfo = HeroData.ins.getById(heroId);
                const spine = this.node_spines.getChildByName("spine" + i).getComponent(sp.Skeleton);
                createAnimation(spine.node, heroInfo.heroTable.Idle)
            }
        }
    }

    updateFirstRecharge() {
        RedMgr.refreshEvent(RedDotType.First_Recharge);
        this.firstRechargeBtnNode.active = PayData.ins.isShowFirstRecharge() && OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_FirstRecharge);
        if (this.firstRechargeBtnNode.active) {
            let table = PayData.ins.getFirstRechargeTable();
            if (table) {
                this.firstRechargeBtnNode.getComponent(Sprite).setTexture(table.ButtonIcon);
                createAnimation(this.firstRechargeBtnNode.getChildByName("spine"), table.IconAnimationId)
            }
        }
    }
    /**刷新砸金鸡活动 */
    updateBreakEgg() {
        if (ActivityData.ins.isOpenBreakEgg() && OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_CrazyChicken)) {
            let msg = ActivityData.ins.breakEggMsg;
            this.breakEggNode.active = true;
            let table = tab.getData().BreakEggTableById.getValue(msg.id)
            if (msg.score >= table.MaxScore) {
                this.breakEggNumNode.active = true;
                this.breakEggNumLab.string = table.MaxScore + "";
            } else {
                this.breakEggNumNode.active = false;
            }

        } else {
            this.breakEggNode.active = false;
        }

    }
    /* 战令信息 */
    on_s2c_GetBattlePassInfoMapRsp(msg: proto.Msg_GetBattlePassInfoMapRsp) {
        if (BattlePassDataMgr.ins.getBattleMap().size > 0) {
            this.node_battle_pass.active = true;
        } else {
            this.node_battle_pass.active = false;
        }
    }
    onClickVipBtn() {
        if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Vip)) {
            UIMgr.ins.show({ viewName: ViewName.WelfareActivityMainView, data: { "type": tab.OpenFunctionName.OpenFunctionName_Vip } })
        }
    }
    updatePatrolData() {
        RedMgr.refreshEvent(RedDotType.ChapterAward);
        let msg = new proto.Msg_GetPatrolInfoReq();
        Net.Send(proto.Ptl.GetPatrolInfoReq, msg);
    }
    on_s2c_ReceivePatrolRewardRsp(msg: proto.Msg_ReceivePatrolRewardRsp) {
        let startPatrolData: proto.Msg_GetPatrolInfoRsp = new proto.Msg_GetPatrolInfoRsp();
        startPatrolData.startPatrolTime = RoleData.ins.getServerUtcTime()
        startPatrolData.lastReceiveBaseRewardsTimeMap = msg.lastReceiveBaseRewardsTimeMap;
        startPatrolData.lastReceiveExtraRewardsTimeMap = msg.lastReceiveExtraRewardsTimeMap;
        this.on_s2c_GetPatrolInfoRsp(startPatrolData);
    }
    on_s2c_GetPatrolInfoRsp(msg: proto.Msg_GetPatrolInfoRsp) {
        let canCheck = false
        if (!PatrolDataMgr.ins.startPatrolData) {
            canCheck = true;
        }
        PatrolDataMgr.ins.initData(msg);
        this.PatrolTime = RoleData.ins.getServerUtcTime() - Number(msg.startPatrolTime);
        this.node_patrol_red.active = this.PatrolTime >= tab.getData().GetKeyValue_ConfigTable().PatrolTipsTime;
        this.unschedule(this.updatePatrolTime)
        this.schedule(this.updatePatrolTime, 600);
        if (canCheck) {
            this.checkAutoPop();
        }
    }
    updatePatrolTime() {
        this.PatrolTime += 600;
        this.node_patrol_red.active = this.PatrolTime >= tab.getData().GetKeyValue_ConfigTable().PatrolTipsTime;
    }
    updateTrial() {
        const allTrial = this.node_rookie_task_btn.getChildByName("common_img");
        const rookieTrial = this.node_rookie_task_btn.getChildByName("newhand_img");
        const advanceTrial = this.node_rookie_task_btn.getChildByName("advanced_img");
        allTrial.active = false;
        rookieTrial.active = false;
        advanceTrial.active = false;
        const openName1 = tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask;
        const openName2 = tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2;
        const data1 = RookieTaskMgr.ins.getTrialTask(openName1);
        const data2 = RookieTaskMgr.ins.getTrialTask(openName2);
        if (data1 && data2) {
            allTrial.active = true;
        } else {
            if (data1) {
                rookieTrial.active = true;
            }
            if (data2) {
                advanceTrial.active = true;
            }
        }
        this.node_rookie_task_btn.active = rookieTrial.active || advanceTrial.active || allTrial.active
        this.updateTrialRed();
    }
    // 刷新试炼红点
    updateTrialRed() {
        RookieTaskMgr.ins.red_trialRed();
        const red1 = RookieTaskMgr.ins.red_score_red(TRIALLAYER.ROOKIE);
        const red2 = RookieTaskMgr.ins.red_score_red(TRIALLAYER.ELITE);
        this.node_red_trial.active = RookieTaskMgr.ins.checkIsRed(TRIALLAYER.ROOKIE) || RookieTaskMgr.ins.checkIsRed(TRIALLAYER.ELITE) || red1 || red2;
    }
    jumpToChallenge() {
        if (RoleData.ins.curClearStageId&&RoleData.ins.IsGuideFinished()) {
            const jumpName = tab.getData().PveStageTableByStageId.getValue(RoleData.ins.curClearStageId);
            if (jumpName.StageType === tab.PveStageType.PveStageType_FeedStage || jumpName.StageType === tab.PveStageType.PveStageType_GoldStage) {
                UIMgr.ins.show({ viewName: ViewName.InstanceZonesView, data: [jumpName.StageType] })
            } else if (jumpName.StageType === tab.PveStageType.PveStageType_ClimbTower) {
                UIMgr.ins.show({ viewName: ViewName.ClimbingTowerMainView })
            } else if (jumpName.StageType === tab.PveStageType.PveStageType_WorldBoss) {
                UIMgr.ins.show({ viewName: ViewName.TopWarView })
            } else if (jumpName.StageType === tab.PveStageType.PveStageType_DailyChallenge) {
                UIMgr.ins.show({ viewName: ViewName.EveryDayChallengeView })
            } else if (jumpName.StageType === tab.PveStageType.PveStageType_GuildBoss) {
                UIMgr.ins.show({ viewName: ViewName.AssociationView, data: jumpName.StageType })
            } else if (jumpName.StageType === tab.PveStageType.PveStageType_PVPBattle) {
                UIMgr.ins.show({ viewName: ViewName.FincaFightView })
            } 
            // else if (jumpName.StageType === tab.PveStageType.PveStageType_MainChapter) {
            //     if(BattleMainDataControl.ins.getStageClearIds().length>=4){
            //         UIMgr.ins.show({ viewName: ViewName.BattleMainView, data: 1 })
            //     }
            // } 
            else if (jumpName.StageType === tab.PveStageType.PveStageType_EliteChapter) {
                UIMgr.ins.show({ viewName: ViewName.BattleMainView, data: 2 })
            }
        }
        // 是否显示漫画
        RoleData.ins.curClearStageId = 0;
    }
    updateHonorRank() {
        let isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_ActivityRank);
        this.honorRankNode.active = isOpen && FengyunRankData.ins.isOpenActivity(101);
    }
    checkOpenFuncPop() {
        let list = OpenFunctionMgr.ins.waitPopOpenName;
        if (list.length === 0) {

            // EventMgr.emitLocal(LocalEvent.hidePop);

            this.scheduleOnce(() => {
                EventMgr.emitLocal(LocalEvent.hidePop);
            })
        }
        if (list.length > 0) {
            let name = list.shift();
            this.scheduleOnce(() => {
                UIMgr.ins.show({ viewName: ViewName.FunctionUnlockPop, data: { "functionName": name } })
            })
        }
    }
    updateGiftBtn() {
        RedMgr.refreshEvent(RedDotType.Seven_Gift_Pack);
        const nowDay = Math.floor((RoleData.ins.getServerUtcTime() - Number(RoleData.ins.createTime)) / 86400) + 1;
        const heroNode = this.node_day_gift_btn.getChildByName("hero_img");
        const weaponNode = this.node_day_gift_btn.getChildByName("weapon_img");
        weaponNode.active = nowDay > 7;
        heroNode.active = !weaponNode.active;
        const Map = ActivityData.ins.get7GiftPackBuyState();
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Hero7GiftPack);
        this.node_day_gift_btn.active = (Map.get(DEVELOPTYPE.HERO) || Map.get(DEVELOPTYPE.BOOK)) && isOpen;

        this.node_signing_gift.active = !SignInGiftData.ins.checkActivityEnd();
    }
    // 显示小手
    showFinger() {
        if (RoleData.ins.clientData.failTimes === "true") {
            this.node_finger.active = true;
        } else {
            this.node_finger.active = false;
        }
    }
    checkMainView() {
        console.log("cocos 当前的uiNode = ", UIMgr.ins.uiNode.children.length);
        if (UIMgr.ins.uiNode.children.length === 1) {
            if (!RoleData.ins.IsGuideFinished()) {
                EventMgr.emitLocal(LocalEvent.checkMainView);
            }
            // 如果首冲功能开启 且没有弹出过 弹出首冲按钮
            const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_FirstRecharge);
            const openFirstRecharge = Boolean(Number(RoleData.ins.clientData.openFirstRecharge));
            if (isOpen && !openFirstRecharge && RoleData.ins.IsGuideFinished()) {
                UIMgr.ins.jumpLayer(tab.Module.Module_FirstRechargePop);
            }
        }
    }
    // 刷新红点数据
    refreshRed() {
        RedMgr.refreshEvent(RedDotType.Feng_Yun_Rank);
        RedMgr.refreshEvent(RedDotType.Guild_Skill);
        // 获取已经申请的公会信息
        AssociationControl.ins.reqGetJoinGuildRequests(0);
        RedMgr.refreshEvent(RedDotType.Guild_Sign);
        RedMgr.refreshEvent(RedDotType.Guild_Activity);
    }

    on_s2c_BuyFixedShopCommodityRsp(msg: proto.Msg_BuyFixedShopCommodityRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        const mallName = tab.getData().MallItemTabeById.getValue(msg.commodityId).MallId
        MallDataMgr.ins.getFixedShopData(mallName).set(msg.commodityId, msg.boughtCount);
        if (mallName == MALLNAME.NewPlayerMall || mallName == MALLNAME.NewPlayerMall2) {
            this.updateActivityRed();
        }
    }
    /* 刷新一下精彩活动礼包 */
    updateActivityRed() {
        const dailyRed = RedMgr.ins.isRed(RedDotType.GachaAds, "11");
        const weekRed = RedMgr.ins.isRed(RedDotType.GachaAds, "12");
        const MonthRed = RedMgr.ins.isRed(RedDotType.GachaAds, "13");
        // 精英新手的免费礼包
        const newBoughtCount = MallDataMgr.ins.getFixedShopData(MALLNAME.NewPlayerMall).get(7001);
        const newBoughtCount2 = MallDataMgr.ins.getFixedShopData(MALLNAME.NewPlayerMall2).get(7101);
        const mallItemTab = tab.getData().MallItemTabeById.getValue(7001);
        const mallItemTab2 = tab.getData().MallItemTabeById.getValue(7101);
        const red_NewPlayerMall = newBoughtCount < mallItemTab.LimitCount && MallDataMgr.ins.getFixedShopExpireTime(MALLNAME.NewPlayerMall) > 0;
        const red_NewPlayerMall2 = newBoughtCount2 < mallItemTab2.LimitCount && MallDataMgr.ins.getFixedShopExpireTime(MALLNAME.NewPlayerMall2) > 0;
        this.node_activity_red.active = dailyRed || weekRed || MonthRed || red_NewPlayerMall || red_NewPlayerMall2;
    }
    checkAutoPop() {
        if (!GuideController.ins.isGuiding()) {
            EventMgr.emitLocal(LocalEvent.LocalMsg_QueueUI_check);
        }
    }
    // 刷新活动组按钮
    refreshActivityGroup() {
        const groups = ActivityData.ins.getAllActivityGroup();
        if (groups.length <= 0) {
            this.node_activity_group.active = false;
            return;
        }
        const content = this.node_activity_group.parent;
        for (let i = content.children.length - 1; i >= 0; i--) {
            let ch = content.children[i];
            if (ch.name === "ActivityGroup") {
                ch.removeFromParent();
                ch.destroy();
                ch = null;
            }
        }
        for (let i = 0; i < groups.length; i++) {
            const info = groups[i];
            const tabData = info.activityTable;
            let btnNode: Node = null;
            if (i === 0) {
                // 设置groupBtn
                btnNode = this.node_activity_group
            } else {
                btnNode = instantiate(this.node_activity_group);
                btnNode.name = "ActivityGroup";
                content.addChild(btnNode);
            }

            // 增加红点
            const redDot = btnNode.getChildByName("redDot")
            let com = redDot.addComponent(RedComp);
            com.redNode = redDot;
            let evet1 = new RedEventComp();
            evet1.event = RedDotType.Combine_Pass;
            evet1.child = String(info.TabId);
            com.types.push(evet1);

            let evet2 = new RedEventComp();
            evet2.event = RedDotType.Combine_Grow;
            evet2.child = String(info.TabId);
            com.types.push(evet2);

            let evet3 = new RedEventComp();
            evet3.event = RedDotType.Combine_Shop;
            evet3.child = String(info.TabId);
            com.types.push(evet3);

            let evet4 = new RedEventComp();
            evet4.event = RedDotType.Combine_Recharge;
            evet4.child = String(info.TabId);
            com.types.push(evet4);

            com.addRed();

            btnNode.active = info.isOpen();
            if (info.isOpen()) {
                const sp = btnNode.getComponent(Sprite);
                sp.setTexture(tabData.ButtonIconUrl);
                const btn: Button = btnNode.getComponent(Button);
                btn.node.on(Button.EventType.CLICK, (() => {
                    UIMgr.ins.show({ viewName: ViewName.CombineActivityMainView, data: info.TabId })
                }), this);
                // 显示倒计时
                let countDown = Number(info.endTime) - RoleData.ins.getServerUtcTime();
                const timeUpdate = (() => {
                    countDown--;
                    if (countDown <= 0) {
                        btnNode.active = false;
                        this.unschedule(timeUpdate);
                    } else {
                        btnNode.getChildByName("time_txt").getComponent(Label).string = setTextTime(countDown);
                    }
                })
                timeUpdate();
                this.unschedule(timeUpdate);
                this.schedule(timeUpdate, 1);
            }
        }
        const gachaUpData = ActivityData.ins.getAllUpData()
        if (gachaUpData.length > 0) {
            const upActInfo: ActivityOpenInfo = ActivityData.ins.getAllUpData()[0];
            const gachaUpTab = tab.getData().GachaUpTableById.getValue(upActInfo.activityTable.Param1);
            this.sp_activity_combine.setTexture(gachaUpTab.IconUrl);
        }

        RedMgr.refreshEvent(RedDotType.Combine_Pass);
        RedMgr.refreshEvent(RedDotType.Combine_Grow);
        RedMgr.refreshEvent(RedDotType.Combine_Shop);
    }
    onClickGachaBtn() {
        if (ActivityData.ins.GachaUpIsOpen() && RoleData.ins.IsGuideFinished()) {
            UIMgr.ins.show({ viewName: ViewName.RecruitLimitView })
        } else {
            UIMgr.ins.jumpLayer(tab.Module.Module_RecruitView);
        }
    }
}


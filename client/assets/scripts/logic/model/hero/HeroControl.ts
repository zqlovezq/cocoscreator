import { Node, _decorator, js, primitives, sys } from "cc";
import { AbsControl } from "../../../framework/base/IAbs";
import { proto } from "client_protocol";
import { tab } from "../../../Table/table_gen";
import { Net } from "../../net/Net";
import { EventMgr } from "../../mgr/EventMgr";
import { HeroData } from "./HeroData";
import { LocalEvent } from "../../define/LocalEvent";
import { RoleData } from "../role/RoleData";
import { HeroTeamControl } from "./HeroTeamControl";
import { HeroDataControl } from "./herobag/HeroDataControl";
import { HeroRed } from "./herobag/HeroRed";
import { BattleMainDataControl } from "../home/battle/BattleMainDataControl";
import { OpenFunctionMgr } from "../../../Common/component/OpenFunctionMgr";
import { AdMgr } from "../AdMgr";
import { UIMgr } from "../../mgr/UIMgr";
import { ViewName } from "../../define/ViewDefine";
import { MallDataMgr } from "../shop/MallDataMgr";
import { BattlePassDataMgr } from "../activity/battlePass/BattlePassDataMgr";
import { RookieTaskMgr } from "../activity/rookieTask/RookieTaskMgr";
import { SettingsManager } from "../role/SettingsManager";
import { RedMgr } from "../../mgr/RedMgr";
import { RedDotType } from "../../red/RedDotType";
import { GameplayViewDataMgr } from "../jianghu/GameplayViewDataMgr";
import { FengyunRankControl } from "../fengyunRanking/FengyunRankControl";
import { AssociationData } from "../association/AssociationData";
import { SettingRedManager } from "../role/SettingRedManager";
import { SignInGiftData } from "../activity/signGift/SignInGiftData";
import { GuideController } from "../../guide/GuideController";
import { ComicControl } from "../../../Common/script/ComicControl";
import MainSceneQueueUI from "../../utils/MainSceneQueueUI";
import { TaskData } from "../task/TaskData";
import { FincaFightData } from "../fincaFight/FincaFightData";
import { BattleMainEliteControl } from "../home/battle/BattleMainEliteControl";

const { ccclass, property } = _decorator;

/** 英雄 */
export class HeroControl extends AbsControl {

    private static _instance: HeroControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new HeroControl();
        }
        return this._instance;
    }

    register(): void {
        // EventMgr.onMsg(proto.Ptl.GetHeroesRsp, this.on_s2c_GetHeroesReq, this);
        /* 获取背包数据 */
        EventMgr.onMsg(proto.Ptl.GetHeroBagRsp, this.on_s2c_GetHeroBagRsp, this);

        EventMgr.onMsg(proto.Ptl.UpdateHeroPowerScore, this.on_s2c_Msg_UpdateHeroPowerScore, this)
        /* 获取关卡数据 */
        EventMgr.onMsg(proto.Ptl.GetMainStageInfoRsp, this.on_s2c_GetMainStageInfoRsp, this);
        /* 抽卡数据 */
        EventMgr.onMsg(proto.Ptl.UpdateDropSum, this.on_s2c_UpdateDropSum, this);
        /* 获取功能开发数据 */
        EventMgr.onMsg(proto.Ptl.GetOpenFunctionsRsp, this.on_s2c_GetOpenFunctionsRsp, this);
        /* 开放功能变更推送 */
        EventMgr.onMsg(proto.Ptl.OpenFunctionChangePush, this.on_s2c_OpenFunctionChangePush, this);
        /* 广告推送数据 */
        EventMgr.onMsg(proto.Ptl.AdvWatchDataPush, this.on_s2c_AdvWatchDataPush, this);
        /* 查看玩家数据 */
        // EventMgr.onMsg(proto.Ptl.GetSimpleRoleRsp, this.on_s2c_GetSimpleRoleRsp, this);
        /* 商店每日信息 */
        EventMgr.onMsg(proto.Ptl.GetDailyShopInfoRsp, this.on_s2c_GetDailyShopInfoRsp, this);
        /* 商店固定信息 */
        EventMgr.onMsg(proto.Ptl.GetFixedShopInfoMapRsp, this.on_s2c_GetFixedShopInfoMapRsp, this);
        /* 战令信息 */
        EventMgr.onMsg(proto.Ptl.GetBattlePassInfoMapRsp, this.on_s2c_GetBattlePassInfoMapRsp, this);
        /* 试炼信息 */
        EventMgr.onMsg(proto.Ptl.GetNewPlayerTrialMapRsp, this.on_s2c_GetNewPlayerTrialMapRsp, this);
        /* 等级刷新 */
        EventMgr.onMsg(proto.Ptl.RoleLevelUpPush, this.on_s2c_RoleLevelUpPush, this);
        /* 刷新图签信息 */
        EventMgr.onMsg(proto.Ptl.UnlockedHeroAlbumPush, this.on_s2c_UnlockedHeroAlbumPush, this);
        /* 探险任务 */
        EventMgr.onMsg(proto.Ptl.GetExploreStageInfoMapRsp, this.on_s2c_GetExploreStageInfoMapRsp, this);
        /* 设置客户端数据 */
        EventMgr.onMsg(proto.Ptl.SetClientDataRsp, this.on_s2c_SetClientDataRsp, this);
        /* 新英雄绘卷数据 */
        EventMgr.onMsg(proto.Ptl.ChangedScrollPaintingPush, this.on_s2c_ChangedScrollPaintingPush, this);
        /* 公会数据 */
        EventMgr.onMsg(proto.Ptl.GuildBossDataPush, this.on_s2c_GuildBossDataPush, this);
        EventMgr.onMsg(proto.Ptl.GetGuildInfoRsp, this.on_s2c_GetGuildInfoRsp, this);
        EventMgr.onMsg(proto.Ptl.GetJoinGuildRequestsRsp, this.on_s2c_GetJoinGuildRequestsRsp, this);
        // NewDayPush 跨天跨天通知
        EventMgr.onMsg(proto.Ptl.NewDayPush, this.on_s2c_NewDayPush, this);
        /* 签到数据 */
        EventMgr.onMsg(proto.Ptl.GetSignInGiftInfoRsp, this.on_s2c_GetSignInGiftInfoRsp, this);
        // 监听一下主场景加载完成
        EventMgr.onLocal(LocalEvent.SceneLoaded, this.SceneLoadFunc, this)
        // 战令购买
        EventMgr.onMsg(proto.Ptl.ReceiveBattlePassTaskRewardsRsp, this.on_s2c_ReceiveBattlePassTaskRewardsRsp, this);
        // 获取庄园战信息
        EventMgr.onMsg(proto.Ptl.GetFincaBattleInfoRsp, this.on_s2c_GetFincaBattleInfoRsp, this);
    }

    requestHeros() {

        // let msg = new proto.Msg_GetHeroesReq()
        // Net.Send(proto.Ptl.GetHeroesReq, msg)

        // 功能开启信息
        let func_msg = new proto.Msg_GetOpenFunctionsReq()
        Net.Send(proto.Ptl.GetOpenFunctionsReq, func_msg)
        // 关卡信息
        let stage_msg = new proto.Msg_GetMainStageInfoReq()
        Net.Send(proto.Ptl.GetMainStageInfoReq, stage_msg)
        // 精英关卡信息
        let elite_msg = new proto. Msg_GetEliteStageInfoReq();
        Net.Send(proto.Ptl.GetEliteStageInfoReq, elite_msg);
        // 背包信息
        let bag_msg = new proto.Msg_GetHeroBagReq()
        Net.Send(proto.Ptl.GetHeroBagReq, bag_msg)
        // 获取每日商店信息
        let daily_msg = new proto.Msg_GetDailyShopInfoReq();
        Net.Send(proto.Ptl.GetDailyShopInfoReq, daily_msg);
        // 获取固定商店信息
        let fixed_msg = new proto.Msg_GetFixedShopInfoMapReq();
        Net.Send(proto.Ptl.GetFixedShopInfoMapReq, fixed_msg);
        // 获取战令信息
        let pass_msg = new proto.Msg_GetBattlePassInfoMapReq();
        Net.Send(proto.Ptl.GetBattlePassInfoMapReq, pass_msg);
        // 获取试炼任务信息
        let trial_msg = new proto.Msg_GetNewPlayerTrialMapReq();
        Net.Send(proto.Ptl.GetNewPlayerTrialMapReq, trial_msg);
        // 探险任务
        let explore_msg = new proto.Msg_GetExploreStageInfoMapReq();
        Net.Send(proto.Ptl.GetExploreStageInfoMapReq, explore_msg);
        // 签到数据
        let sign_msg = new proto.Msg_GetSignInGiftInfoReq();
        Net.Send(proto.Ptl.GetSignInGiftInfoReq, sign_msg);
        // 提前获取风云榜信息
        FengyunRankControl.ins.reqGetHonorRollMap();
        // 获取公会信息 公会如果开放获取公会信息
        const isGuildOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Association);
        if (isGuildOpen) {
            let guild_msg = new proto.Msg_GetGuildInfoReq();
            Net.Send(proto.Ptl.GetGuildInfoReq, guild_msg);
        }
        // 获取竞技场信息
        let finca_msg = new proto.Msg_GetFincaBattleInfoReq();
        Net.Send(proto.Ptl.GetFincaBattleInfoReq, finca_msg);
    }

    on_s2c_GetHeroBagRsp(msg: proto.Msg_GetHeroBagRsp) {
        /* 初始化team数据 */
        HeroTeamControl.ins.initTeam(msg.teamSlots, msg.levelResonance, msg.starResonance);
        HeroData.ins.purge()
        HeroData.ins.adds(msg.heroes as proto.Hero[])
        // 背包容量等级
        RoleData.ins.capacityLevel = msg.capacityLevel;

        HeroDataControl.ins.initData(msg.heroAlbumMap, msg.receivedRecommendTeamIds);

        /* 广告 */
        AdMgr.ins.init();
        /* 红点 */
        HeroRed.ins.init();
        // 设置
        SettingsManager.ins.loadSettings();
        // 初始化红点弹窗提示
        SettingRedManager.ins.loadSettings();
        // 初始化自动弹窗
        MainSceneQueueUI.init()
        EventMgr.emitLocal(LocalEvent.LoginProcessComplete)
    }
    on_s2c_Msg_UpdateHeroPowerScore(msg: proto.Msg_UpdateHeroPowerScore) {
        let heroInfo = HeroData.ins.getById(msg.heroId);
        if (heroInfo) {
            heroInfo.powerScore = msg.powerScore;
        }

    }
    on_s2c_GetMainStageInfoRsp(msg: proto.Msg_GetMainStageInfoRsp) {
        BattleMainDataControl.ins.initData(msg);
    }
    on_s2c_GetOpenFunctionsRsp(msg: proto.Msg_GetOpenFunctionsRsp) {
        OpenFunctionMgr.ins.setOpenFunctionData(msg.openFunctions);
    }
    // 刷新抽卡剩余次数
    on_s2c_UpdateDropSum(msg: proto.Msg_UpdateDropSum) {
        console.log(msg);
        const dropData = msg.data[0];
        let _roleDropData: proto.IDropSumData = null;
        for (let i = 0; i < RoleData.ins.drop.data.length; i++) {
            const data: proto.IDropSumData = RoleData.ins.drop.data[i];
            if (data.id === dropData.id) {
                _roleDropData = data;
            }
        }
        if (_roleDropData) {
            _roleDropData.sum = dropData.sum;
        } else {
            RoleData.ins.drop.data.push(dropData);
        }
    }
    on_s2c_OpenFunctionChangePush(msg: proto.Msg_OpenFunctionChangePush) {
        // 开放功能推送
        OpenFunctionMgr.ins.pushOpenFunctionData(msg.openFunctions);
    }
    on_s2c_AdvWatchDataPush(msg: proto.Msg_AdvWatchDataPush) {
        // 广告光看次数推送
        AdMgr.ins.refreshData(msg.data);
        RedMgr.refreshEvent(RedDotType.GachaAds);
    }
    // // 查看玩家信息
    // on_s2c_GetSimpleRoleRsp(msg: proto.Msg_GetSimpleRoleRsp) {
    //     UIMgr.ins.show({ viewName: ViewName.CheckRoleInfoPop, data: { data: msg.role } })
    // }
    on_s2c_GetDailyShopInfoRsp(msg: proto.Msg_GetDailyShopInfoRsp) {
        MallDataMgr.ins.initDailyShop(msg);
    }
    on_s2c_GetFixedShopInfoMapRsp(msg: proto.Msg_GetFixedShopInfoMapRsp) {
        MallDataMgr.ins.initFixedShop(msg);
        EventMgr.emitLocal(LocalEvent.openFuncRed);
    }
    on_s2c_GetBattlePassInfoMapRsp(msg: proto.Msg_GetBattlePassInfoMapRsp) {
        BattlePassDataMgr.ins.initPassBattle(msg);
    }
    on_s2c_GetNewPlayerTrialMapRsp(msg: proto.Msg_GetNewPlayerTrialMapRsp) {
        RookieTaskMgr.ins.initTask(msg);
    }
    on_s2c_RoleLevelUpPush(msg: proto.Msg_RoleLevelUpPush) {
        RoleData.ins.oldLevel = msg.level;
        RoleData.ins.addLevelUpAward(msg.rewards);
    }
    on_s2c_UnlockedHeroAlbumPush(msg: proto.Msg_UnlockedHeroAlbumPush) {
        HeroDataControl.ins.refreshHeroAlbumIds(msg.heroItemId);
    }
    on_s2c_GetExploreStageInfoMapRsp(msg: proto.Msg_GetExploreStageInfoMapRsp) {
        GameplayViewDataMgr.ins.initData(msg.stageInfoMap);
    }
    on_s2c_SetClientDataRsp(msg: proto.Msg_SetClientDataRsp) {

    }
    on_s2c_ChangedScrollPaintingPush(msg: proto.Msg_ChangedScrollPaintingPush) {
        if (RoleData.ins.paintings.length > 0) {
            let refresh = false;
            for (let i = 0; i < RoleData.ins.paintings.length; i++) {
                const painting = RoleData.ins.paintings[i];
                if (painting.heroItemId === msg.painting.heroItemId) {
                    refresh = true;
                    painting.unlockStar = msg.painting.unlockStar;
                }
            }
            if (!refresh) {
                RoleData.ins.paintings.push(msg.painting);
            }
        } else {
            RoleData.ins.paintings.push(msg.painting);
        }
        // 刷新数据
        HeroDataControl.ins.updatePaintings();
        // 刷新红点
        RedMgr.refreshEvent(RedDotType.HeroPainting);
    }
    on_s2c_GetGuildInfoRsp(msg: proto.Msg_GetGuildInfoRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        AssociationData.ins.initAssociationData(msg)
    }
    on_s2c_GetJoinGuildRequestsRsp(msg: proto.Msg_GetJoinGuildRequestsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        RoleData.ins.guildRequests = msg.requests;
        RedMgr.refreshEvent(RedDotType.Guild_Apply);
    }
    on_s2c_GuildBossDataPush(msg: proto.Msg_GuildBossDataPush) {
        AssociationData.ins.GuildBossMsg = msg;
    }
    on_s2c_NewDayPush(msg: proto.Msg_NewDayPush) {
        if (msg.time) {
            // 刷新需要跨天的红点
            if (RoleData.ins.staminaInfo) {
                SettingRedManager.ins.resetLoadSetting();
            }
        }
    }
    on_s2c_GetSignInGiftInfoRsp(msg: proto.Msg_GetSignInGiftInfoRsp) {
        SignInGiftData.ins.initSignInGift(msg);
    }
    SceneLoadFunc(sceneName: string) {
        if (!GuideController.ins.isGuiding() && sceneName == "MainScene") {
            const achieveCondition = ComicControl.ins.getComicCondition(RoleData.ins.curClearStageId);
            if (achieveCondition && RoleData.ins.curClearStageId && (!RoleData.ins.clientData.Comic || Number(RoleData.ins.clientData.Comic) < RoleData.ins.curClearStageId)) {
                ComicControl.ins.addComic(achieveCondition, UIMgr.ins.uiNode);
                RoleData.ins.setClientData("Comic", ""+RoleData.ins.curClearStageId);
            }
        }
    }
    on_s2c_ReceiveBattlePassTaskRewardsRsp(msg: proto.Msg_ReceiveBattlePassTaskRewardsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards });
        BattlePassDataMgr.ins.refreshTasks(msg.id, msg.tasks);
        // 更新任务
        TaskData.ins.refreshBattlePassTaskInfo(msg.tasks);
        RedMgr.refreshEvent(RedDotType.Battle_Pass);
    }
    on_s2c_GetFincaBattleInfoRsp(msg: proto.Msg_GetFincaBattleInfoRsp){
        FincaFightData.ins.initData(msg)
    }
}
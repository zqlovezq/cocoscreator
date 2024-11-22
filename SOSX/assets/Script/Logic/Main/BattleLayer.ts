/**
 *  对战模式页面
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import {
    checkFunctionIsOpen,
    CheckFunctionIsOpenWithTip,
    checkRechargeInterfaceIsOpen, checkSeasonLevel, getFunctionOpenStringByType, IEveryDayDiscountsGiftBagData, isValidObj,
    k255, kFiveNumber, kNegativeOneNumber, kNoneString, kOneNumber, kThreeNumber, kTwoNumber, kZeroNumber
} from "../Common/CommonInterface";
import GetItem from "../Common/GetItem";
import Role from "../Common/Role";
import RankScoreRewardClass, {
    checkCanUnlockAccelerate, checkHaveRewardCanReceive,
    checkIconPathIsValid, refreshUnlockAccelerateTimes
} from "../Common/SeasonRankCommonFunc";
import { FightLoader } from "../Fight/FightLoader";
import SeasonPage from "../Season/SeasonPage";
import RankLevelPromote from "../Season/RankLevelPromote";
import {
    AmendmentEventLocation, CreateSpine, flyGold, getBoxIDAndCfg, getCurScoreStage, getItemIconURL, getLocalData,
    GetPopLayer, getServerUtcTime, LoadResAsync, popRewardLayer_Ex, selectCardBySelf, setTextTime_3,
    setTimeTXT, showPopLayer, showPopLayerV2, showPopLayerV3, ShowTips, ShowTipsOfCustomString
} from "../Utils/GameUtils";

import timeboxsnode from "./timeboxsnode";
import SeasonOver from "../Season/SeasonOver";
import noticesnode from "../Notices/noticesnode";
import UnlockAccelerateEffect from "../Common/UnlockAccelerateEffect";
import Waiting from "../Utils/Waiting";
import { WaitingTag } from "../Utils/WaitingTag";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import MainsceneBossBox from "../BossBox/MainsceneBossBox";
import PveLauncher from "../Fight/PveLauncher";
import BossBoxLayer from "../BossBox/BossBoxLayer";
import { checkStringIsValid } from "../Alliance/AllianceCommonInterface";
import { RequestPvePathType, SignRequestPvEPath } from "../Chat/ChatCellCommonFunc";
import ExchangeCode from "../Common/ExchangeCode";
import MailBoxPopLayer from "../MailBox/MailBoxPopLayer";
import RankingListPopLayer from "../RankingList/RankingListPopLayer";
import RedDotManager, { IMessageResult, RedDotType } from "../Common/ReddotManager";
import BattleLog from "../BattleLog/BattleLog";
import ManagerRainbowTask from "../RainbowTask/ManagerRainbowTask";
import RainbowTaskLayer from "../RainbowTask/RainbowTaskLayer";
import GuideController from "../Guide/GuideController";
import { ManagerSevenSignInData } from "../Activity/SevenSignIn/ManagerSevenSignInData";
import SevenSignInMainPage from "../Activity/SevenSignIn/SevenSignInMainPage";
import ManagerGroutTaskInfo from "../GroutTask/ManagerGroutTaskInfo";
import GroutTaskLayer from "../GroutTask/GroutTaskLayer";
import NoticePopLayer from "../Notices/NoticePopLayer";
import ManagerNotice from "../Notices/ManagerNotice";
import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import MainMessage from "../Common/MainMessage";
import AlliancePositionChange from "../Alliance/AlliancePositionChange";
import ActivityController from "../Activity/Activity/ActivityController";
import { GuideStep } from "../Guide/GuideConfig";
import InviteFriendEveryDay from "../InviteFriend/InviteFriendEveryDay";
import OneYuanToBuy from "../Activity/OneYuanToBuy/OneYuanToBuy";
import DiscountsGiftBag from "../Activity/DiscountsGiftBag/DiscountsGiftBag";
import NewPlayerBagGiftPage from "../NewPlayerGiftBag/NewPlayerBagGiftPage";
import HeroLoadManager from "../HeroLoad/HeroLoadManager";
import QuestionnaireSurveyLayer from "../QuestionnaireSurvey/QuestionnaireSurveyLayer";
import ManagerQuestion from "../QuestionnaireSurvey/ManagerQuestion";
import ManagerDoubleEnergy from "./ManagerDoubleEnergy";
import DoubleEnergyTipsPop from "./DoubleEnergyTipsPop";
import { ManagerSpringFestivalData } from "../Activity/SpringFestival/ManagerSpringFestivalData";
import SpringFestivalPage from "../Activity/SpringFestival/SpringFestivalPage";
import OverBagGiftLayer, { toggleclickflaglocal_key } from "../Activity/OverBagGift/OverBagGiftLayer";
import ManagerPrivateChatMsg from "../Chat/ManagerPrivateChatMsg";
import ChatMainPage from "../Chat/ChatMainPage";
import ManagerLocalChatMsg from "../Chat/ManagerLocalChatMsg";
import { ResetChatInfo } from "../Chat/ChatCommonInterface";
import LuckySupply, { LuckySupply_key } from "../LuckySupply/LuckySupply";
import UIRank from "../Season/UIRank";
import GrowFund from "../Activity/Activity/GrowFund";
import DrawLayer from "../Activity/Draw/DrawLayer";
import LoginData from "../Login/LoginData";
import RankingListPopLayer1 from "../RankingList/RankingListPopLayer1";
import UIGameModelFightOther from "../match/UIGameModelFightOther";
import SdkManager from "../Utils/SdkManager";
import SeasonResult from "../Season/SeasonResult";
import PassportLayer from "../passport/PassportLayer";
import PassportFunc from "../passport/PassportFunc";
import SeasonGift from "../Season/SeasonGift";
import BountyFightPop from "../Fight/BountyFightPop";
import WeekBox from "../WeekBox/WeekBox";
import ActivityLayer from "../Activity/Activity/ActivityLayer";
import FirstRechargeLayer from "../Activity/firstRecharge/FirstRechargeLayer";
import PopLayer from "../Utils/PopLayer";
// import SpringFestivalPage from "../Activity/SpringFestival/SpringFestivalPage";
// import { ManagerSpringFestivalData } from "../Activity/SpringFestival/ManagerSpringFestivalData";
const { ccclass, property } = cc._decorator;

export const OverBagGiftLayer_key = "OverBagGiftLayer_key"

@ccclass
export default class BattleLayer extends cc.Component {

    @property(cc.Node)
    bossBoss: cc.Node = null

    @property(cc.Prefab)
    pre_PointsReward: cc.Prefab = null;

    @property(cc.Prefab)
    pre_UIRank: cc.Prefab = null;

    @property(cc.Prefab)
    pre_DrawLayer: cc.Prefab = null;

    @property(cc.ProgressBar)
    progress_season_reward: cc.ProgressBar = null;

    @property(cc.Sprite)
    spr_max_score_bar: cc.Sprite = null;

    @property(cc.Sprite)
    spr_rank_reward_icon: cc.Sprite = null;

    @property(cc.Node)
    node_season: cc.Node = null;

    @property(cc.Node)
    node_rank_reward: cc.Node = null;

    @property(cc.Sprite)
    spr_rank_reward_bubble: cc.Sprite = null;

    @property(cc.Sprite)
    s_hezuoBoxDi: cc.Sprite = null;

    @property(cc.Label)
    roleLvLb: cc.Label = null

    @property({ displayName: "玩家名字", type: cc.Label })
    l_name: cc.Label = null;

    @property({ displayName: "战斗模式", type: cc.Node })
    bt_fight: cc.Node = null;

    @property(cc.Node)
    player_info: cc.Node = null;

    @property({ displayName: "奖杯收集特效", type: sp.Skeleton })
    sk_cup: sp.Skeleton = null;

    @property(cc.Node)
    task_node: cc.Node = null; /* "任务"按键 */

    @property(cc.Node)
    task_reddot: cc.Node = null; /* "任务"按键 */

    // @property(cc.Node)
    // node_rank_level_spine: cc.Node = null;

    @property(cc.Node)
    OverBagGiftNode: cc.Node = null

    @property(cc.Node)
    OverBagGiftReddot: cc.Node = null

    @property(cc.Label)
    OverBagGiftTimeLeft: cc.Label = null

    @property(cc.Sprite)
    spr_special_reward_icon: cc.Sprite = null;

    @property(cc.Label)
    lbl_special_rank_lv: cc.Label = null;

    @property(cc.Node)
    node_task_display: cc.Node = null;

    @property(cc.Button)
    morebutton: cc.Button = null

    @property(cc.Node)
    gametipsnode: cc.Node = null

    @property(cc.Node)
    nonGuideNode: cc.Node = null

    @property(cc.Sprite)
    spr_player_head: cc.Sprite = null;

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Button)
    btn_ranking_list: cc.Button = null;

    @property(cc.Node)
    spr_new_mail_reddot: cc.Node = null;

    @property(cc.Node)
    spr_new_mail_reddot_inner: cc.Node = null;

    @property(cc.Node)
    node_receive_reward: cc.Node = null;

    @property(cc.Sprite)
    spr_receive_reward_icon: cc.Sprite = null;

    @property(cc.Label)
    lbl_reward_cnt: cc.Label = null;

    @property(cc.Node)
    spr_reward_tip: cc.Node = null;

    @property(cc.Node)
    node_bounty_btn: cc.Node = null;

    @property(cc.Node)
    node_seven_signIn: cc.Node = null;

    @property(cc.Node)
    node_newplayer_giftbag: cc.Node = null;

    @property(cc.Node)
    spr_seven_signIn_reddot: cc.Node = null;

    @property(cc.Button)
    btn_seven_signIn: cc.Button = null;

    @property(cc.Sprite)
    spr_accelerate_bg: cc.Sprite = null;

    @property(cc.Label)
    lbl_accelerate_time: cc.Label = null;

    @property(cc.Node)
    node_notice_red_tip: cc.Node = null;

    @property(cc.Node)
    node_double_energy_effect: cc.Node = null;

    @property(cc.Sprite)
    spr_normal_energy: cc.Sprite = null;

    @property(cc.Sprite)
    spr_double_energy: cc.Sprite = null;

    @property(cc.Sprite)
    lbl_cur_rank_lv: cc.Sprite = null;

    @property(cc.Button)
    btn_grow_fund: cc.Button = null; /* 基金-超值豪礼 */

    @property(cc.Button)
    btn_ten: cc.Button = null; /* 十连抽 */

    @property(cc.Button)
    btn_lucky_supply: cc.Button = null; /* 幸运补给 */

    @property(cc.Button)
    btn_week_box: cc.Button = null; /* 广告周宝箱 */

    @property(cc.Button)
    btn_first_charge: cc.Button = null;

    @property(cc.Button)
    btn_victory_box: cc.Button = null; /* 胜利宝箱 */

    @property(cc.Node)
    spr_ten_box_reddot: cc.Node = null;

    @property(cc.Node)
    spr_GrowFund_reddot: cc.Node = null;

    @property(cc.Label)
    lbl_week_box_cnt: cc.Label = null;
    @property(cc.Node)
    node_week_box_red: cc.Node = null;

    @property(cc.Button)
    passport_btn: cc.Button = null;


    protected taskGiftTimeLeft: number = kZeroNumber;
    private _bFirst: boolean = false;
    bplayidle2: boolean = false;

    private _oldRankLevel: number = kZeroNumber;
    private _originalRankIconSize: cc.Size;
    private _originalMaxbarSize: cc.Size;
    private _original_progressbar_width: number;
    private _originalReceiveIconSize: cc.Size;
    private _current_rainbow_task_star_lv: number = kZeroNumber;
    private _pvp_effect: sp.Skeleton = null;
    private _pve_effect: sp.Skeleton = null;

    public static bOnlyPveAwardReddot: boolean = false;

    //一元购活动相关数据
    private _oneYuan2BuyOverTimes: number = kZeroNumber;
    private _oneYuan2BuyRewardList: proto.IRewardSimpleInfo[] = [];
    private _bBuyOneYuan2Buy: boolean = false;

    //特惠礼包活动相关数据
    private _discountsGiftBagData: IEveryDayDiscountsGiftBagData = null;
    private _bCrossDay: boolean = false;

    public static boxSpeedUPReddot: boolean = true
    boxSpeedUPData: proto.Msg_LookADAddBoxSpeedUpTimeInfoRsp = null;

    minlefttime: number;
    overBagGiftInfo: proto.IMsg_OverBagGiftRsp = null;

    private luckySupplyRemaindTimes: number = 0;
    public static openWeekBox: boolean = false;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickClosedDoubleEnergyTip, this, true);
        this.node_newplayer_giftbag.active = false;
        this.spr_new_mail_reddot_inner.active = false;
        this.spr_new_mail_reddot.active = false;
        this.node_receive_reward.active = false;
        this.spr_accelerate_bg.node.active = false;
        this.node_notice_red_tip.active = false;
        this.node_double_energy_effect.active = false;
        this.spr_double_energy.node.opacity = kZeroNumber;

        this._original_progressbar_width = this.spr_max_score_bar.node.getContentSize().width;

        // if(CC_PREVIEW) {
        //     this.gmNode.active = true;
        // }
        this._originalRankIconSize = this.spr_rank_reward_icon.node.getContentSize();
        this._originalMaxbarSize = this.spr_max_score_bar.node.getContentSize();
        this._originalReceiveIconSize = this.spr_receive_reward_icon.node.getContentSize();

        // this.bossBoss.active = Role.Instance.RoleGrade > 0 && Role.Instance.seasonID > 0

        this.btn_seven_signIn.node.on("click", this.onClickSevenSignIn, this);
        this.btn_grow_fund.node.on("click", this.onClickGrowFund, this);
        this.btn_ten.node.on("click", this.onClickTen, this)

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true);

        this.player_info.on(cc.Node.EventType.TOUCH_END, () => {
            if (!Role.Instance.IsGuideFinished()) {
                ShowTips("FunctionClosedTip");
                return;
            }
            showPopLayerV2("prefab/PlayerInfo", PlayerInfo).then(playerInfo => {
                playerInfo.initData(Role.Instance.RoleData.id);
            });
        }, this);

        this.gametipsnode.active = false /*  */
        // 先展示
        this.roleLvLb.string = `${Role.Instance.RoleCup - Role.Instance.AddCup}`;

        //断线重连重新请求一些信息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_Reconnect, (param) => {
            this.reqSomeInfo()
            this.checkSeasonIsOver()

        }, this);

        /* 更换看板娘(应该废弃了) */
        Net.listenProtocol(proto.Ptl.ChangeIndexCardRsp, async (buffer, ptl) => {
            let msg = proto.Msg_ChangeIndexCardRsp.decode(buffer)
            cc.log("ChangeIndexCardRsp (更换看板娘(应该废弃了)) msg: " + JSON.stringify(msg));
            if (msg != null) {
                if (msg.result == 0) {
                    Role.Instance.RoleData.indexCard = msg.indexCardId;
                    ShowTips("SetKanbanNiang");
                }
            }
        }, this);

        /* 领取合作宝箱奖励 */
        Net.listenProtocol(proto.Ptl.GetCooperateBoxRewardRsp, async (buffer, ptl) => {
            let msg = proto.Msg_GetCooperateBoxRewardRsp.decode(buffer)
            cc.log("GetCooperateBoxRewardRsp (领取合作宝箱奖励) msg: " + JSON.stringify(msg));
            if (msg != null) {
                if (msg.result == 0) {
                    let getItemInfo = await showPopLayerV2("prefab/getItem", GetItem);
                    getItemInfo.setItemData(msg.rewards);
                }
            }
        }, this);

        /* 打开积分奖励界面 */
        Net.listenProtocol(proto.Ptl.OpenRankRewardRsp, async (buffer, ptl) => {
            let msg = proto.Msg_OpenRankRewardRsp.decode(buffer)
            cc.log("OpenRankRewardRsp (打开积分奖励界面) msg: " + JSON.stringify(msg));
            if (msg != null) {
                Role.Instance.RoleData.rankData = msg.rankData;
                Role.Instance.isDemonPass = msg.isDemonPass;
                Role.Instance.RoleCup = Role.Instance.RoleData.rankData.score;
                // Role.Instance.RoleData.rankData.fightId = msg.fightId
                this.checkRainbowTaskIsOpen();
                this.checkUnlockAccelerateVisible();
                this.refreshBuffTime()
                this.refreshRankDisplay();
                (msg.fightId == kZeroNumber) && this.checkRankLevelChange();
                this.setRankRewardIcon();
                this.updateRankIcon()
                this.setProgressBarPosition();
                this.checkActivityIsOpen();/* 检查活动是否开启了 */
                this.checkTaskNode();   /* 检查任务是否开启了 */
                this.checkVictoryBox(); /* 检查胜利宝箱是否开启了 */
                this.checkPassport();//检查通行证
                this.checkWeekBox()
                // this.bossBoss.active = Role.Instance.RoleGrade > 0 && Role.Instance.seasonID > 0
                if (msg.rankData.oldMaxScore != kZeroNumber) { //msg.fightId != kZeroNumber && 
                    let rankLv = RankScoreRewardClass.getInstance().getRankLevelToScore(Role.Instance.RoleData.rankData.score);
                    Role.Instance.setOldRankLevel(rankLv);
                    this.roleLvLb.string = `${Role.Instance.RoleCup}`;
                    PassportFunc.sortOutData(true)
                    //重新请求下通行证数据
                    let param3 = new proto.Msg_BossBoxInfoReq()
                    Net.Send(proto.Ptl.BossBoxInfoReq, param3)

                    //赛季结算
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewSeasonJustBeginning)
                }
                //新手引导完成才弹
                if (Role.Instance.IsGuideFinished() && !GuideController.Instance.isGuiding()) {
                    //检测登录弹窗
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_QueueUI_check, this)

                }
            }
        }, this)

        /* 获取竞技场背包信息 */
        Net.listenProtocol(proto.Ptl.GetRankPackageInfoRsp, function (buffer, ptl) {
            let msg = proto.Msg_GetRankPackageInfoRsp.decode(buffer)
            cc.log("GetRankPackageInfoRsp (获取竞技场背包信息) msg: " + JSON.stringify(msg));
            if (msg != null) {
                let yueyueindex: number = -1;
                let unlockingindex: number = -1;
                for (let i = 0; i < msg.rankBoxList.length; i++) {
                    if (msg.rankBoxList[i].boxId > 0 && msg.rankBoxList[i].state == proto.RankBoxData.BoxState.Unlocking) {
                        unlockingindex = i;
                    }
                    else if (msg.rankBoxList[i].boxId > 0 && msg.rankBoxList[i].state == proto.RankBoxData.BoxState.Reserve) {
                        yueyueindex = i;
                    }
                }
                Net.pushLoaclMessage(LOCAL_MESSAGE.OnPackageInfo, msg) //用于新手引导
            }
        }, this)

        this.l_name.string = Role.Instance.Name;

        /* 改名 */
        Net.listenProtocol(proto.Ptl.ChangeNameRsp, (buffer, ptl) => {
            let msg = proto.Msg_ChangeNameRsp.decode(buffer);
            cc.log("ChangeNameRsp (改名) msg: " + JSON.stringify(msg));
            if (msg != null) {
                if (msg.result == 0) {
                    Role.Instance.RoleData.name = msg.name;
                    this.l_name.string = Role.Instance.RoleData.name;
                }
            }
        }, this);

        /* 幸运补给 */
        Net.listenProtocol(proto.Ptl.LuckySupplyRsp, (buffer, ptl) => {
            let msg = proto.Msg_LuckySupplyRsp.decode(buffer);
            cc.log("LuckySupplyRsp (幸运补给) msg: " + JSON.stringify(msg));
            this.btn_lucky_supply.node.active = false
            if (msg != null) {
                if (checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_LuckySupply) == false) {
                    console.log("幸运补给未解锁-")
                    return
                }
                this.btn_lucky_supply.node.active = true
                this.setLuckySupplyRemaindTimes(msg.LeftTimes)
                this.checkLuckySupply()
            }
        }, this)

        /* 幸运补给 */
        Net.listenProtocol(proto.Ptl.LuckySupplyGetAwardRsp, (buffer, ptl) => {
            let msg = proto.Msg_LuckySupplyRsp.decode(buffer);
            cc.log("LuckySupplyGetAwardRsp (幸运补给奖励) msg: " + JSON.stringify(msg));
            if (msg != null) {
                this.setLuckySupplyRemaindTimes(msg.LeftTimes - 1)
            }
        }, this)


        //获取任务信息
        Net.listenProtocol(proto.Ptl.TaskInfoRsp, (buffer, ptl) => {
            let msg = proto.Msg_TaskInfoRsp.decode(buffer);
            cc.log("TaskInfoRsp (获取任务信息) msg: " + JSON.stringify(msg));
            if (msg != null) {
                Role.Instance.taskData = msg
                this.setTaskBoxView()

            }
        }, this);

        /* 分享信息 */
        Net.listenProtocol(proto.Ptl.SharedGameRsp, (buffer, ptl) => {
            let msg = proto.Msg_SharedGameRsp.decode(buffer);
            cc.log("SharedGameRsp (分享信息) msg: " + JSON.stringify(msg));
            if (msg != null) {
                Role.Instance.sharedData = msg
            }
        }, this)

        //每日好友分享
        Net.listenProtocol(proto.Ptl.DailyShareInviteRsp, (buffer, ptl) => {
            let msg = proto.Msg_DailyShareInviteRsp.decode(buffer);
            cc.log("DailyShareInviteRsp (每日分享邀请信息) msg: " + JSON.stringify(msg));
            if (msg != null) {
                Role.Instance.everyDaySharedData = msg
                this.setSharedEveryDayTaskView()
            }
        }, this)

        //每日好友红点信息推送
        Net.listenProtocol(proto.Ptl.PushDailyShareInviteTips, (buffer, ptl) => {
            let msg = proto.Msg_PushDailyShareInviteTips.decode(buffer);
            cc.log("PushDailyShareInviteTips (每日分享邀请红点提示) msg: " + JSON.stringify(msg));
            if (msg != null) {
                console.log("msgmsg--->friend invite result" + msg.bHave)

                // this.setSharedEveryDayTaskReddotVisible(msg.bHave === true)
            }
        }, this)

        Net.listenLoaclMessage(LOCAL_MESSAGE.HideInviteReddot, (param: any) => {
            // this.setSharedEveryDayTaskReddotVisible(false)
        }, this)

        //监听限时活动信息
        Net.listenProtocol(proto.Ptl.LimitActivityRsp, (buffer, ptl) => {
            let msg = proto.Msg_LimitActivityRsp.decode(buffer);
            cc.log("LimitActivityRsp (限时活动) msg: " + JSON.stringify(msg));
            if (msg != null) {
                ActivityController.getInstance().activityData = msg.openingActivities;
                Net.pushLoaclMessage(LOCAL_MESSAGE.Activity_DataReached)
                this.checkActivityIsOpen();
            }
        }, this)

        //活动变更
        Net.listenLoaclMessage(LOCAL_MESSAGE.Activity_NewActivityOpen, (param) => {
            this.checkActivityIsOpen()
        }, this)

        this.setPlayerHead(Role.Instance.head)
        //微信信息变更
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateWechatUserInfo, (param) => {
            this.l_name.string = Role.Instance.Name
            this.setPlayerHead(Role.Instance.head)
        }, this)


        //刷新限时活动红点
        Net.listenLoaclMessage(LOCAL_MESSAGE.Activity_RefreshReddotVisible, (param) => {
            this.checkActivityRedDot()
        }, this)

        /* 购买恶魔通行证 */
        Net.listenProtocol(proto.Ptl.BuyDemonPassRsp, function (buffer, ptl) {
            let msg = proto.Msg_BuyDemonPassRsp.decode(buffer)
            cc.log("BuyDemonPassRsp (购买恶魔通行证) msg: " + JSON.stringify(msg));
        }, this)

        //看广告宝箱加速
        Net.listenProtocol(proto.Ptl.LookADAddBoxSpeedUpTimeInfoRsp, (buffer, ptl) => {
            let msg = proto.Msg_LookADAddBoxSpeedUpTimeInfoRsp.decode(buffer);
            cc.log("LookADAddBoxSpeedUpTimeInfoRsp (看广告增加宝箱加速时间信息) msg: " + JSON.stringify(msg));
            if (msg != null) {
                this.boxSpeedUPData = msg
            }
        }, this)

        // Net.listenProtocol(proto.Ptl.LookADAddBoxSpeedUpTimeRsp, (buffer, ptl)=>{
        //     let msg = proto.Msg_LookADAddBoxSpeedUpTimeRsp.decode(buffer);
        //     if(msg != null)
        //     {
        //         this.boxSpeedUPData.times = msg.times
        //         this.refreshBoxSpeedUPReddot()
        //     }
        // },this)

        //获得宝箱加速时间奖励
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_RefreshBoxSpeedUpTimeLeft, (param) => {

        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_TaskBoxGetAward, (param) => {
            this.setTaskBoxView()
        }, this);

        //监听刷新赛季奖励状态消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_RereshMainPageSeasonRewardState, (param: any) => {
            this.setRankRewardIcon();
            this.setProgressBarPosition();
        }, this);

        //检测赛季是否重新开始
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_RereshSeasonInfo, (param: any) => {
            this.checkSeasonIsOver();
        }, this);

        //监听解锁加速背包消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_CheckUnlockAccelerateBag, (param: any) => {
            this.checkUnlockAccelerateBag();
        }, this);

        /*  */
        this.refreshGuideNode();
        Net.listenLoaclMessage(LOCAL_MESSAGE.RefreshBattleLayerGuide, () => {
            this.refreshGuideNode();
        }, this)

        //监听领取奖励消息
        // Net.listenProtocol(proto.Ptl.GuideTakeRewardRsp, (buffer, ptl) => {
        //     Waiting.Hide(WaitingTag.RookieReward);
        //     let msg = proto.Msg_GuideTakeRewardRsp.decode(buffer)
        //     cc.log("GuideTakeRewardRsp (GuideTakeRewardRsp) msg: " + JSON.stringify(msg));
        //     if (msg && msg.result == proto.CommonErrorCode.Succeed) {
        //         popRewardLayer_Ex(msg.rewards, () => {
        //             Net.pushLoaclMessage(LOCAL_MESSAGE.TakeGuideReward)
        //         });
        //         this.checkSevenSignInEntry();
        //         this.checkGroutTask();
        //         //this.checkAutoPopNotice();
        //     }
        // }, this);

        /*  */
        Net.listenProtocol(proto.Ptl.GetPveStatusRsp, buffer => {
            Waiting.Hide(WaitingTag.GetPveStatus.toString());
            let msg = proto.Msg_GetPveStatusRsp.decode(buffer)
            cc.log("GetPveStatusRsp (获取pve状态(次数、奖励等)) msg: " + JSON.stringify(msg));
            if (msg) {
                let bred: boolean = false
                // for(let clearReward of tab.Data.PveClearRewardTable) {
                //     if(msg.maxWave >= clearReward.Wave) {
                //         bred = true
                //         break
                //     }
                // }
                bred = bred || msg.dailyStatus == proto.PveDailyStatus.Complete
            }
        }, this);

        /* 领取PVE日常奖励 */
        Net.listenProtocol(proto.Ptl.GetPveDailyRewardRsp, buffer => {
            let rsp = proto.Msg_GetPveDailyRewardRsp.decode(buffer)
            cc.log("GetPveDailyRewardRsp (领取PVE日常奖励) msg: " + JSON.stringify(rsp));
            if (rsp) {

            }
        }, this);

        /* 通行证 */
        Net.listenProtocol(proto.Ptl.BossBoxInfoRsp, function (buffer, ptl) {
            let msg = proto.Msg_BossBoxInfoRsp.decode(buffer)
            if (msg != null) {
                this.checkPassport()
                this.refreshBossBoxNode();
            }
        }, this);

        //监听更新主界面联盟名称消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateMainPageAllianceName, (param: any) => {
            this.setAllianceName();
        }, this);

        //监听更新联盟基本信息消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateAllianceBaseInfo, (param: any) => {
            this.setAllianceName();
        }, this);

        /* GM：加杯数 */
        Net.listenProtocol(proto.Ptl.GmAddCupRsp, buffer => {
            let msg = proto.Msg_GmAddCupRsp.decode(buffer)
            cc.log("GmAddCupRsp (GM：加杯数) msg: " + JSON.stringify(msg));
            if (msg) {
                Role.Instance.RoleCup = msg.cup;
                this.refreshBuffTime()
                this.refreshRankDisplay();
                this.checkRankLevelChange();
                this.setRankRewardIcon();
                this.setProgressBarPosition();
                this.updateRankIcon()
            }
        }, this);

        /*  */
        this.btn_ranking_list.node.on("click", () => {
            //SdkManager.Instance.AuthorizeWxFriend();
            showPopLayerV2("prefab/RankingListPopLayer1", RankingListPopLayer1, false).then(tipLayer => {
                tipLayer.initData();
            });
            //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.ClickRankingList); /* 上报打点数据 */ /* zhibo-@20230410 for <删除打点> */
        }, this);

        //监听新邮件提示
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyNewMail, (param) => {
            let retData = (param as IMessageResult);
            let bHaveNewMail = isValidObj(retData) ? retData.bVisible : false;
            this.spr_new_mail_reddot.active = bHaveNewMail;
            this.spr_new_mail_reddot_inner.active = bHaveNewMail;
        }, this);

        //监听获取彩虹任务列表
        Net.listenProtocol(proto.Ptl.RainbowTaskListRsp, buffer => {
            let msg = proto.Msg_RainbowTaskListRsp.decode(buffer);
            cc.log("RainbowTaskListRsp (彩虹任务列表) msg: " + JSON.stringify(msg));
            if (msg) {
                ManagerRainbowTask.getInstance().saveCanFreeRefreshTask(msg.bFreeRefreshTask);
                ManagerRainbowTask.getInstance().saveLeftWatchAdCount(msg.leftAdCount);
                ManagerRainbowTask.getInstance().saveUpLvTask(msg.bCanUpLv);
                ManagerRainbowTask.getInstance().saveTaskOverUTC(msg.overUTC);
                showPopLayerV2("prefab/RainbowTaskLayer", RainbowTaskLayer).then(tipLayer => {
                    tipLayer.initData(msg.taskList);
                });
            }
        }, this);

        //新手礼包
        Net.listenProtocol(proto.Ptl.NewPlayerGiftBagRsp, function (buffer, ptl) {
            let msg = proto.Msg_NewPlayerGiftBagRsp.decode(buffer)
            cc.log("NewPlayerGiftBagRsp (新手礼包) msg: " + JSON.stringify(msg));
            if (msg != null) {
                if (msg.result == proto.Msg_NewPlayerGiftBagRsp.ErrorCode.Succeed) {
                    let bfinish: boolean = true
                    for (let info of msg.bagGifts) {
                        bfinish = bfinish && info.buyTimes >= info.maxBuyTimes
                    }
                    // this.node_newplayer_giftbag.active = checkRechargeInterfaceIsOpen() && checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RookieGiftBag) && (msg.endUTC > getServerUtcTime()) && (bfinish == false)
                    if (!Role.Instance.IsGuideFinished()) {
                        return   //新手引导期间不再主动弹出
                    }
                    if (this.node_newplayer_giftbag.active && getLocalData("newplayergiftbag" + Role.Instance.ID, "") == "") {
                        //活动开启后第一次主动弹出
                        cc.sys.localStorage.setItem("newplayergiftbag" + Role.Instance.ID, "newpaler1")
                        this.onClickNewplayerGiftBag()
                    }
                } else {
                    this.node_newplayer_giftbag.active = false
                }
            }
        }, this)

        //监听彩虹任务的推送消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRainbowTaskProgress, (param: any) => {
            let rainbowTaskData = (param as proto.IRainbowTaskPushData);
            if (rainbowTaskData) {
                this.updateRainbowProgress(rainbowTaskData);
            }
        }, this);

        //监听任务刷新广播消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRefreshRainbowTask, (param: any) => {
            let rainbowTaskData = (param as proto.IRainbowTaskPushData);
            if (rainbowTaskData && rainbowTaskData.taskStarLv == this._current_rainbow_task_star_lv) {
                this.updateRainbowProgress(rainbowTaskData);
            }
        }, this);

        //监听彩虹任务小红点消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_RefreshRainbowRedDot, (param: any) => {
            let bVisible = (param as boolean);
        }, this);

        //监听七日签到登录小红点
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateSevenSignInActivityRedDot, (param: any) => {
            this.checkSevenSignInRedDot();
        }, this);

        //检测七日签到登录活动是否结束
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_CheckSevenSignInIsOver, (param: any) => {
            this.checkSevenSignInEntry();
        }, this);

        //监听通知更新正在进行的格古特任务消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateRunningGroutTask, (param: any) => {
            this.updateGroutTaskProgress();
        }, this);

        //监听通知刷新格古特阶段任务消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRefreshGroutStepTask, (param: any) => {
            this.checkGroutTask();
        }, this);

        //监听通知检测公告红点消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCheckNoticeRedTip, (param: any) => {
            this.checkNoticeRedTip();
        }, this);

        //监听一元购活动信息消息
        Net.listenProtocol(proto.Ptl.GetOneYuanToBuyInfoRsp, buffer => {
            let msg = proto.Msg_GetOneYuanToBuyInfoRsp.decode(buffer);
            cc.log("GetOneYuanToBuyInfoRsp (一元购活动信息) msg: " + JSON.stringify(msg))
            if (msg) {
                this._oneYuan2BuyOverTimes = msg.overTimes;
                this._oneYuan2BuyRewardList = msg.rewardList;
                this._bBuyOneYuan2Buy = msg.buy;

                let bAutoPop = tab.Data.GetKeyValue_ConfigTable().AutoPopOneYuanToBuy;
                if (bAutoPop) {
                    let key = `one_yuan_2_buy_${Role.Instance.ID}`;
                }
            }
        }, this);

        //监听特惠礼包活动信息消息
        Net.listenProtocol(proto.Ptl.GetDiscountsGiftBagInfoRsp, buffer => {
            let msg = proto.Msg_GetDiscountsGiftBagInfoRsp.decode(buffer);
            cc.log("GetDiscountsGiftBagInfoRsp (特惠礼包活动信息) msg: " + JSON.stringify(msg))
            if (msg) {
                this._discountsGiftBagData = {
                    overTimes: msg.overTimes,
                    bBought: msg.bBought,
                    rechargeID: msg.rechargeID,
                    rewardList: msg.rewardList,
                    discountsNum: msg.discountsNum
                };
            }
        }, this);

        //监听英雄之路
        Net.listenProtocol(proto.Ptl.HeroLoadTaskListRsp, buffer => {
            let msg = proto.Msg_HeroLoadTaskListRsp.decode(buffer);
            cc.log("HeroLoadTaskListRsp (获取英雄之路任务列表) msg: " + JSON.stringify(msg))
            if (msg) {
                HeroLoadManager.getInstance().data = msg
                let endutc = HeroLoadManager.getInstance().data.endUTC
                let left = HeroLoadManager.getInstance().data.endUTC - getServerUtcTime()
                this.checkHeroLoadTimeLeft()
            }
        }, this);

        //英雄之路红点 和 倒计时 检测
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyHeroLoadReddot, (param: any) => {
            this.checkHeroLoadTimeLeft()

        }, this);

        //监听通知关闭一元购入口消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedOneYuan2Buy, (param: any) => {
            this.searchDiscountsGiftBagInfo();
        }, this);

        //监听通知关闭特惠礼包入口消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedDiscountsGiftBag, (param: any) => {
        }, this);

        //监听跨天消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewDay, (param) => {
            this.searchDiscountsGiftBagInfo(true);
            this.searchSpringFestival();
            //充值超值礼包的小红点标记
            let cfgs = tab.Data.OverBagGiftTable
            if (cfgs && cfgs.length > 0) {
                for (let i = 0; i < cfgs.length; i++) {
                    let ele = cfgs[i]
                    cc.sys.localStorage.setItem(String(ele.ID) + toggleclickflaglocal_key + Role.Instance.ID, "")
                }
            }
            cc.sys.localStorage.setItem(OverBagGiftLayer_key + Role.Instance.ID, "")
            cc.sys.localStorage.setItem(LuckySupply_key + Role.Instance.ID, "")
            this.requestOverBagGiftInfo()
        }, this);

        //监听问卷调查信息
        Net.listenProtocol(proto.Ptl.GetQuestionRsp, buffer => {
            let msg = proto.Msg_GetQuestionRsp.decode(buffer);
            cc.log("GetQuestionRsp(获取问卷调查信息) msg: " + JSON.stringify(msg))
            if (msg) {
                let bOver = msg.overUTC - getServerUtcTime() <= kZeroNumber;
                let bStart = msg.startUTC <= getServerUtcTime();
                ManagerQuestion.getInstance().saveOverUTCTimes(msg.overUTC);
            }
        }, this);

        //监听能量双倍信息
        Net.listenProtocol(proto.Ptl.SearchDoubleEnergyInfoRsp, buffer => {
            let msg = proto.Msg_SearchDoubleEnergyInfoRsp.decode(buffer);
            cc.log("SearchDoubleEnergyInfoRsp (查询能量双倍活动信息) msg: " + JSON.stringify(msg))
            if (msg) {
                let bOver = msg.overUTC - getServerUtcTime() <= kZeroNumber;
                let bStart = msg.startUTC <= getServerUtcTime();
                cc.log("##########能量双倍结束时间： ########" + msg.overUTC);
                //this.node_double_energy_effect.active = this.node_double_energy.active;
                ManagerDoubleEnergy.getInstance().setData(msg.startUTC, msg.overUTC);
                this.setDoubleEnergy();
            }
        }, this);

        //超值礼包信息
        Net.listenProtocol(proto.Ptl.OverBagGiftRsp, function (buffer, ptl) {
            let msg = proto.Msg_OverBagGiftRsp.decode(buffer)
            cc.log("OverBagGiftRsp (购买超值礼包) msg: " + JSON.stringify(msg))
            if (msg != null) {
                this.setOverBagGiftNode(msg)
                let info = OverBagGiftLayer.pushOverBagGift
                if (info) {
                    showPopLayer("prefab/OverBagGiftLayer")
                }
            }
        }, this)

        //购买礼包
        Net.listenProtocol(proto.Ptl.BuyOverBagGiftRsp, function (buffer, ptl) {
            let msg = proto.Msg_BuyOverBagGiftRsp.decode(buffer)
            cc.log("BuyOverBagGiftRsp (购买超值礼包) msg: " + JSON.stringify(msg))
            if (msg != null) {
                if (msg.result == proto.Msg_BuyOverBagGiftRsp.ErrorCode.Succeed) {

                }
            }
        }, this)

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.PushOverBagGift, (param: any) => {
            let info = OverBagGiftLayer.pushOverBagGift
            if (info) {
                showPopLayer("prefab/OverBagGiftLayer")
            }
        }, this)

        //超值礼包购买完成隐藏按钮
        Net.listenLoaclMessage(LOCAL_MESSAGE.OverBagGiftLayer_Hide, (param: any) => {
            this.OverBagGiftNode.active = false;
        }, this);

        //监听通知关闭问卷小红点消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedQuestionRedDot, (param: any) => {

        }, this);

        //监听通知关闭问卷入口消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedQuestionEntry, (param: any) => {

        }, this);

        //检测春节签到登录活动是否结束
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_CheckSpringFestivalSignInIsOver, (param: any) => {
            this.checkSpringFestivalSignInEntry();
        }, this);

        //监听查询春节签到活动消息
        Net.listenProtocol(proto.Ptl.SearchSpringFestivalInfoRsp, buffer => {
            let msg = proto.Msg_SearchSpringFestivalInfoRsp.decode(buffer);
            cc.log("SearchSpringFestivalInfoRsp (获取春节签到活动信息) msg: " + JSON.stringify(msg))
            if (msg) {
                ManagerSpringFestivalData.getInstance().saveInfo(msg.rewardInfoList, msg.startTime, msg.overTime, msg.curLoginDay);
                this.checkSpringFestivalSignInEntry();
                //Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRefreshSpringFestivalPage);
            }
        }, this);

        //监听私聊新消息红点
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdatePrivateRedTip, (param: any) => {
            let bVisible = ManagerPrivateChatMsg.getInstance().findPrivateObjRedTip();
        }, this);
        //监听获取聊天CD时间消息
        Net.listenProtocol(proto.Ptl.GetChatCdRsp, buffer => {
            let msg = proto.Msg_GetChatCdRsp.decode(buffer);
            cc.log("GetChatCdRsp (获取世界频道的聊天CD时间) msg: " + JSON.stringify(msg))
            if (msg) {
                ManagerLocalChatMsg.ChatCD = msg.cd;
            }
        }, this);

        //
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateTenConsecutiveBoxRedDot, (param: any) => {
            this.checkTenConsecutiveBox();
        }, this);

        /* 取周宝箱信息 */
        Net.listenProtocol(proto.Ptl.WeeklyAdBoxInfoRsp, async (buffer, ptl) => {
            let msg = proto.Msg_WeeklyAdBoxInfoRsp.decode(buffer);
            // 需不需要主动打开周宝箱
            if (msg) {
                if (BattleLayer.openWeekBox) {
                    showPopLayerV2("prefab/WeekBox", WeekBox).then(layer => {
                        layer.setWeekLayer(msg);
                        this.updateWeekBoxLabel(msg.AdWatchedCount);
                    });
                } else {
                    // 刷新一下外面的广告次数
                    this.updateWeekBoxLabel(msg.AdWatchedCount);
                }
                this.updateWeekBoxRed(msg);
            }
        }, this);
        /* 首冲信息 */
        Net.listenProtocol(proto.Ptl.GetFirstRechargeGiftRsp, async (buffer, ptl) => {
            let msg = proto.Msg_GetFirstRechargeGiftRsp.decode(buffer);
            if (msg && msg.result === proto.CommonErrorCode.Succeed) {
                if (msg.boughtTimes.length >= 3) {
                    this.btn_first_charge.node.active = false;
                } else {
                    if (this.isOpenFirstPay) {
                        showPopLayerV2("prefab/FirstRechargeLayer", FirstRechargeLayer).then(layer => {
                            layer.isQueue = true
                            layer.setLayerInfo(msg.boughtTimes);
                        })
                    }
                    this.isOpenFirstPay = false

                }
            }
        }, this);

        //检测下有没有新邮件
        RedDotManager.getInstance().CheckRedDot(RedDotType.NewMail);

        //彩虹任务相关检测
        this.checkRainbowTaskIsOpen();
        this.updateRainbowProgress(Role.Instance.RoleData.runningRainbowTask);

        //检测七日签到登录活动状态
        this.checkSevenSignInEntry();

        //查询春节签到活动信息
        this.searchSpringFestival();

        //检测格古特任务
        this.checkGroutTask();

        //检测要不要弹联盟首领被替换弹框
        this.checkPopAllianceLeaderReplace();

        //检测上报排行榜数据
        this.checkReportRankingData();

        //查询一元购活动消息
        this.searchOneYuan2BuyInfo();

        //查询问卷调查信息
        this.searchQuestionInfo();

        //查询能量双倍活动信息
        this.searchDoubleEnergyInfo();

        //启动刷新主界面聊天消息机制
        this.startRefreshChatMsg();

        //获取聊天CD时间
        this.requestChatCD();
        // 检测十连是否有宝箱领取
        this.checkTenConsecutiveBox();

        /* 检测周宝箱是否开启 */
        this.checkWeekBox(true);

        /* 检测首冲是否开启 */
        this.checkFirstCharge();

        /* 检测赏金赛是否开启 */
        this.checkBountyIsOpen();

        /* 赛季结束 */
        Net.listenProtocol(proto.Ptl.SeasonOverRsp, (buffer: Uint8Array, ptl: number) => {
            let msg = proto.Msg_SeasonOverRsp.decode(buffer);
            cc.log("SeasonOverRsp (赛季结束) msg: " + JSON.stringify(msg));
            this.checkSeasonIsOver()
        }, this);

        /* 赛季重置 */
        Net.listenProtocol(proto.Ptl.SeasonResetRsp, (buffer: Uint8Array, ptl: number) => {
            let msg = proto.Msg_SeasonResetRsp.decode(buffer);
            cc.log("SeasonOverRsp (赛季重置) msg: " + JSON.stringify(msg));
            this._seasonResetRsp = msg
        }, this);

        /* 通知领取赛季结算奖励 */
        Net.listenProtocol(proto.Ptl.SeasonRewardMsgRsp, (buffer: Uint8Array, ptl: number) => {
            let msg = proto.Msg_SeasonRewardMsgRsp.decode(buffer);
            cc.log("SeasonOverRsp (通知领取赛季结算奖励) msg: " + JSON.stringify(msg));
            this._seasonRewardMsgRsp = msg

        }, this);

        this.checkPassport()

        /* 检测通行证状态以及红点 */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_CheckPassportRed, (param) => {
            this.checkPassport()
        }, this);
    }

    checkPassport() {
        this.passport_btn.node.active = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_BossBox) && Role.Instance.isSeason()

        this.passport_btn.node.getChildByName("dot").active = PassportFunc.checkRed()
    }

    _seasonResetRsp: proto.Msg_SeasonResetRsp
    _seasonRewardMsgRsp: proto.Msg_SeasonRewardMsgRsp

    checkTenConsecutiveBox() {
        // box1
        let bBox1 = false;
        let bBox2 = false;
        if (Role.Instance.RoleData.gachaOpenCount >= tab.Data.GetKeyValue_ConfigTable().GachaBoxCount1) {
            bBox1 = (proto.GachaOpenType.Box1 & Role.Instance.RoleData.gachaOpenStatus) === 0;
        }
        if (Role.Instance.RoleData.gachaOpenCount >= tab.Data.GetKeyValue_ConfigTable().GachaBoxCount2) {
            bBox2 = (proto.GachaOpenType.Box2 & Role.Instance.RoleData.gachaOpenStatus) === 0;
        }
        this.spr_ten_box_reddot.active = bBox1 || bBox2;
    }
    onClickHeroLoad() {
        showPopLayer("prefab/HeroLoadLayer")
    }

    onClickGrowFund() {
        // let cfg = tab.Data.LimitActivityTableByID.getValue(1);
        // showPopLayerV2(cfg.ActPrefab, GrowFund, false).then(growfund => {

        // })

        showPopLayerV2("prefab/Activity/ActivityLayer", ActivityLayer, false).then(layer => {
            layer.initData(tab.LimitActivityID.LimitActivityID_GrowFund)
        })
    }
    onClickTen() {
        showPopLayerV2(this.pre_DrawLayer, DrawLayer, false).then(drawLayer => {

        })
    }
    heroLoadCountDown() {
        let left = HeroLoadManager.getInstance().data.endUTC - getServerUtcTime()
        if (left < 0) {
            this.unschedule(this.heroLoadCountDown)
            return
        }

        left = left < 0 ? 0 : left
    }

    checkHeroLoadTimeLeft() {
        let left = HeroLoadManager.getInstance().data.endUTC - getServerUtcTime()
    }

    refreshBossBoxNode() {
        let bossbox: MainsceneBossBox = this.bossBoss.getComponent(MainsceneBossBox)
        if (bossbox) {
            // if(bossbox.initBossBoxInfo() == false) {
            //     this.bossBoss.active = false;
            // } else {
            //     this.bossBoss.active = true
            // }
        }
    }

    refreshGuideNode() {
        //如果还未完成新手引导，则需要显示新手引导节点
        //if(Role.Instance.IsGuideFinished()) {

        //通过第二场战斗后领取完宝箱奖励的支线引导就开启  modify
        //通过第二场战斗后就开启【11月23号修改】

        /* 20230310 wzq 去掉新手引导 */
        this.nonGuideNode.active = true;

        // if(Role.Instance.RoleData.guideTrunk >= GuideStep.Fight_2){
        //     this.guideNode.active = false;
        //     this.nonGuideNode.active = true;
        //     this.setLiHui(Role.Instance.RoleData.indexCard);
        //     this.onLihui()
        // } else {
        //     this.guideNode.active = true;
        //     this.nonGuideNode.active = false;
        //     let guideRewardStep = Role.Instance.GetGuideRewardStep()
        //     this.lblGuideProgress.string = `${guideRewardStep} / 4`
        //     this.guideProgressBar.progress = guideRewardStep / 4;
        //     if(guideRewardStep < 4) {
        //         this.guideFightNode.active = true
        //         this.guideRewardNode.active = false
        //     } else {
        //         this.guideFightNode.active = false
        //         this.guideRewardNode.active = true
        //     }
        // }
    }
    clubBtnFunc: any
    onTouchBegan(event, captureListeners) {
        if (this.clubBtnFunc) {
            this.unschedule(this.clubBtnFunc)
            this.clubBtnFunc = null
        }
        let pos: cc.Vec2 = AmendmentEventLocation(event.getLocation())

        // pos.y -= (cc.winSize.height - cc.view.getDesignResolutionSize().height)/2
        let boxingbox = this.morebutton.node.getBoundingBoxToWorld()
        let nodebox = this.gametipsnode.getBoundingBoxToWorld()
        if (boxingbox.contains(pos)) {
            if (this.gametipsnode.active == false) {
                this.gametipsnode.active = true
                let ani = this.gametipsnode.getComponent(cc.Animation)
                if (ani) {
                    ani.play("battlelayertipsanim")
                }
                if (SdkManager.Instance.clubBtn == null) {
                    this.scheduleOnce(this.clubBtnFunc = () => {
                        SdkManager.Instance.createGameClubButton(this.gametipsnode.getChildByName("New Layout").getChildByName("wechatcircle_btn"), () => {
                            this.gametipsnode.active = false
                            this.gametipsnodeVisible(false)
                        })
                    }, 0.2)
                } else {
                    SdkManager.Instance.clubButtonVisible(true)
                }
            } else {
                this.gametipsnodeVisible(false)
            }
        } else if (nodebox.contains(pos)) {

        } else {
            if (this.gametipsnode.active) {
                this.gametipsnodeVisible(false)
            }
        }
    }


    gametipsnodeVisible(visible: boolean) {
        this.gametipsnode.active = visible
        SdkManager.Instance.clubButtonVisible(false)
    }

    //赛季新闻
    onSeaonbtn() {
        ShowTips("FunctionClosedTip");
    }

    //说明
    onDocbtn() {
        showPopLayerV2("prefab/NoticePopLayer", NoticePopLayer);
        this.gametipsnode.active = false
    }

    //邮件
    onMailbtn() {
        //ShowTips("FunctionClosedTip");
        showPopLayerV2("prefab/MailBoxPopLayer", MailBoxPopLayer).then(tipLayer => {
            tipLayer.initData();
        });
    }

    //战斗记录
    onFightlogbtn() {
        showPopLayer("prefab/BattleLog")
    }

    //设置
    onSettingbtn() {
        showPopLayer("prefab/SettingNode")
    }

    //怪物信息
    onEnemyInfobtn() {
        showPopLayer("prefab/EnemyInfo")
    }

    //隐私协议
    onPrivateProtocolbtn() {
        showPopLayer("prefab/PrivateProtocol")
    }

    //用户协议
    onUserInfoProtocolbtn() {
        showPopLayer("prefab/PrivateProtocolUsers")
    }

    /*  */
    reqSomeInfo() {
        //竞技场宝箱
        let param = new proto.Msg_GetRankPackageInfoReq()
        Net.Send(proto.Ptl.GetRankPackageInfoReq, param)

        //任务信息
        let param2 = new proto.Msg_TaskInfoReq()
        Net.Send(proto.Ptl.TaskInfoReq, param2)

        //首领宝箱
        let param3 = new proto.Msg_BossBoxInfoReq()
        Net.Send(proto.Ptl.BossBoxInfoReq, param3)

        //新手礼包
        if (checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RookieGiftBag)) {
            let param4 = new proto.Msg_NewPlayerGiftBagReq()
            Net.Send(proto.Ptl.NewPlayerGiftBagReq, param4)
        }

        //好友分享信息
        //let param4 = new proto.Msg_SharedGameReq()
        //Net.Send(proto.Ptl.SharedGameReq, param4)
        this.requestLimitActivityInfo();

        //合作模式小红点
        BattleLayer.bOnlyPveAwardReddot = true
        Net.Send(proto.Ptl.GetPveStatusReq, new proto.Msg_GetPveStatusReq())

        //每日好友分享信息
        let param6 = new proto.Msg_DailyShareInviteReq()
        Net.Send(proto.Ptl.DailyShareInviteReq, param6)

        //看广告宝箱加速
        let param7 = new proto.Msg_LookADAddBoxSpeedUpTimeInfoReq()
        Net.Send(proto.Ptl.LookADAddBoxSpeedUpTimeInfoReq, param7)

        //英雄之路
        let param8 = new proto.Msg_HeroLoadTaskListReq()
        Net.Send(proto.Ptl.HeroLoadTaskListReq, param8)

        //每日补给
        Net.Send(proto.Ptl.LuckySupplyReq, new proto.Msg_LuckySupplyReq())
        //请求超值礼包信息
        this.requestOverBagGiftInfo()
    }

    /*  */
    requestOverBagGiftInfo() {
        //请求超值礼包信息
        let param9 = new proto.Msg_OverBagGiftReq()
        Net.Send(proto.Ptl.OverBagGiftReq, param9)
    }

    /*  */
    onTask() {
        showPopLayer("prefab/TaskDetailLayer", true, true, false)

    }

    //刷新背包加速buff
    refreshBuffTime() {
        this.unschedule(this.accBagTimeBuff)
        if (getServerUtcTime() < Role.Instance.RoleData.rankData.buffEndUTC) {
            this.schedule(this.accBagTimeBuff, 1)
        }
    }

    /*  */
    accBagTimeBuff(dt) {
        let left = Role.Instance.RoleData.rankData.buffEndUTC - getServerUtcTime()
        if (left <= 0) {
            //背包加速时间结束,重新请求背包信息
            let param = new proto.Msg_GetRankPackageInfoReq()
            Net.Send(proto.Ptl.GetRankPackageInfoReq, param)
        }
    }

    /*  */
    setSharedEveryDayTaskView() {
        let msg = Role.Instance.everyDaySharedData
        if (!msg) {
            return
        }
    }

    /*  */
    onSharedFriendsClick() {
        showPopLayer("prefab/InviteFriends")
    }

    /*  */
    onSharedFriendsEveryDayClick() {
        showPopLayerV2("prefab/InviteFriendsEveryDay", InviteFriendEveryDay)
    }

    /* 检查活动是否可见 */
    checkActivityIsOpen() {
        this.btn_grow_fund.node.active = ActivityController.getInstance().isUnlockAny();
        this.checkActivityRedDot()
    }

    //设置任务图标的相关信息
    setTaskBoxView() {
        let rednum = Role.Instance.bTaskReddot()
        this.task_reddot.active = rednum > 0
        if (!Role.Instance.taskData) {
            return
        }

        let info = getBoxIDAndCfg(Role.Instance.taskData.boxGroupId)

        this.unschedule(this.taskGiftCountDown)

        //每日礼物倒计时倒计时领奖开始计时，用来刷新小红点
        let taskgift = Role.Instance.taskData.dailyGifts
        for (let i = 0; i < taskgift.length; i++) {
            if (taskgift[i].state == proto.TaskState.Open && taskgift[i].leftSec > 0) {
                this.taskGiftTimeLeft = taskgift[i].leftSec
                this.schedule(this.taskGiftCountDown, 1)
                break
            }
        }
    }

    /*  */
    taskGiftCountDown(dt) {
        if (this.taskGiftTimeLeft <= -1) {
            //如果有每日礼物的倒计时结束后，重新请求下任务信息
            let param = new proto.Msg_TaskInfoReq()
            Net.Send(proto.Ptl.TaskInfoReq, param)
            this.unschedule(this.taskGiftCountDown);
            return;
        }

        this.taskGiftTimeLeft--
    }

    /*  */
    onBoxSpeedUPClick() {
        showPopLayer("prefab/BoxSpeedUp")
    }

    //超值礼包
    setOverBagGiftNode(info: proto.IMsg_OverBagGiftRsp) {
        this.OverBagGiftNode.active = checkRechargeInterfaceIsOpen() && info.bagGifts.length > 0
        if (this.OverBagGiftNode.active == false) {
            return
        }

        this.overBagGiftInfo = info

        let getstr = getLocalData(OverBagGiftLayer_key + Role.Instance.ID, "")
        let time = parseInt(getstr)
        if (time > 0) {
            //判断有没有跨天
            let day = new Date(time);
            let day2 = new Date(getServerUtcTime())
            if (day.getDay() != day2.getDay()) {
                this.OverBagGiftReddot.active = true
            } else {
                this.OverBagGiftReddot.active = false
            }
        } else {
            this.OverBagGiftReddot.active = true
        }


        let minlefttime = this.overBagGiftInfo.bagGifts[0].endUTC
        for (let i = 1; i < this.overBagGiftInfo.bagGifts.length; i++) {
            if (this.overBagGiftInfo.bagGifts[i].endUTC < minlefttime) {
                minlefttime = this.overBagGiftInfo.bagGifts[i].endUTC
            }
        }

        this.minlefttime = minlefttime

        let left = this.minlefttime - getServerUtcTime()
        this.OverBagGiftTimeLeft.node.active = left > 0

        if (this.OverBagGiftTimeLeft.node.active) {
            setTextTime_3(this.OverBagGiftTimeLeft, left)
            this.unschedule(this.OverBagGiftCountDown)
            this.schedule(this.OverBagGiftCountDown, 1)
        }
    }

    /*  */
    onOverBagGiftClick() {
        showPopLayer("prefab/OverBagGiftLayer")
        cc.sys.localStorage.setItem(OverBagGiftLayer_key + Role.Instance.ID, String(getServerUtcTime()))
    }

    /*  */
    OverBagGiftCountDown(dt) {
        let left = this.minlefttime - getServerUtcTime()
        if (left <= 0) {
            this.OverBagGiftTimeLeft.node.active = false
            this.requestOverBagGiftInfo()

            this.unschedule(this.OverBagGiftCountDown)
            return
        }

        setTextTime_3(this.OverBagGiftTimeLeft, left)
    }

    onEnable() {

    }

    getVictoryBoxInfo() {
        let msg = new proto.Msg_VictoryBoxInfoReq()
        Net.Send(proto.Ptl.VictoryBoxInfoReq, msg)
    }

    /* */
    start() {
        this.node_task_display.active = Role.Instance.RoleGrade >= kOneNumber;
        this.checkTaskNode();

        this.initRankBoxInfo();
        this.initRewardData();
        this.reqSomeInfo();
        this.setAllianceName();
        this.getVictoryBoxInfo();

        /***********************此处只是临时用于联盟申请小红点逻辑  后面小红点统一处理要删掉 ************************/
        let selfAllianceUUID = Role.Instance.RoleData.allianceData.allianceID;
        let bValidUUID = checkStringIsValid(selfAllianceUUID);
        if (bValidUUID) {
            let msg = new proto.Msg_QueryAllianceInfoReq();
            msg.allianceID = selfAllianceUUID;
            Net.Send(proto.Ptl.QueryAllianceInfoReq, msg);
        }
        /**************************************************************************************************************/
        this.playPvpAndPveEffect();

        //this.checkUnlockAccelerateVisible();
        this.checkAutoPopNotice();

        this.checkOverBagGift()

        BattleLayer.checkPushSelectCardBySelf()

        this.updateRankIcon();

        this.checkSeasonIsOver();
    }

    checkLuckySupply() {
        if (checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_LuckySupply) == false) {
            return false
        }
        if (this.luckySupplyRemaindTimes == 0) {
            return false
        }


        let open: boolean = false
        let historyOpenFlag = String(getLocalData(LuckySupply_key + Role.Instance.ID, ""))
        let time = parseInt(historyOpenFlag)
        if (time > 0) {
            //判断有没有跨天
            let day = new Date(time * 1000);
            let day2 = new Date(getServerUtcTime() * 1000)
            if (day.getDay() != day2.getDay()) {
                open = true
            } else {
                open = false
            }
        } else {
            open = true
        }
        return open
        // if (open) {
        //     this.onLuckySupplyClicked()
        // }
    }

    public static checkPushSelectCardBySelf() {
        let times = MainMessage.Instance.PushSelectCardBySelfTimeLeft
        if (times > 0) {
            selectCardBySelf()
        }
    }

    checkOverBagGift() {

    }

    onDestroy() {
        this.unschedule(this.refreshUnlockAccelerateTimes);
        this.unschedule(this.refreshDoubleEnergy);
        this.unschedule(this.refreshWorldMsg);
        this.unschedule(this.clubBtnFunc);
        SdkManager.Instance.clubButtonVisible(false)
        ResetChatInfo();
    }

    public onClickChangeName() {
        //暂时不允许随便改名，只有新手引导里面可以改
        // showPopLayer("prefab/changeName");
    }

    /* 设置玩家头像 */
    private async setPlayerHead(remoteUrl: string) {
        if (!checkStringIsValid(remoteUrl)) { return; }

        ManagerNotice.getInstance().downloadImg(remoteUrl, this.spr_player_head);
        // let sf = await LoadResAsync(remoteUrl, cc.SpriteFrame);
        // if (sf) {
        //     if (this.spr_player_head) {
        //         this.spr_player_head.spriteFrame = sf;
        //     }
        // }
    }

    /* TODO: 感觉没有了 */
    public onClickHeZuoBox() {
        let msg = new proto.Msg_GetCooperateBoxRewardReq();
        Net.Send(proto.Ptl.GetCooperateBoxRewardReq, msg);
    }

    public onClickOpenSeasonPage() {
        // if(!Role.Instance.IsOpenSeasonPage()){
        //     return;
        // }
        // showPopLayerV2(this.pre_PointsReward, SeasonPage, false);
        if (GuideController.Instance.isGuiding()) {
            Net.pushLoaclMessage(LOCAL_MESSAGE.GUIDE_MAIN, 1)
        }
        showPopLayerV2(this.pre_UIRank, UIRank, false);
        //上报打点数据
        //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.ClickSeasonWindow); /* zhibo-@20230410 for <删除打点> */
    }

    /* 刷新赛季积分数据 */
    private refreshRankDisplay() {
        this.roleLvLb.string = `${Role.Instance.RoleCup}`;
        this.initRankBoxInfo();
    }

    /* 检查赛季是否已经结束 */
    private checkSeasonIsOver() {
        this._seasonResetRsp = null
        this._seasonRewardMsgRsp = null

        let msg = new proto.Msg_OpenRankRewardReq();
        Net.Send(proto.Ptl.OpenRankRewardReq, msg);
    }

    /* 检查是否解锁加锁背包弹窗 */
    private checkUnlockAccelerateBag() {
        checkCanUnlockAccelerate() && this.popUnlockAccelerateFrame();
    }

    /* 解锁加锁背包弹窗 */
    private popUnlockAccelerateFrame() {
        showPopLayerV2("prefab/UnlockAccelerateEffect", UnlockAccelerateEffect).then(tipLayer => {
            if (tipLayer) {

                tipLayer.initData(0);
            }
        });
    }

    protected async initRankBoxInfo() {
        let curRankLevel = Role.Instance.RoleGrade;
        this.setRankLevelBg(curRankLevel);
        //this.setProgressBarPosition();
        //this.setRankRewardIcon();
        //this.checkRankLevelChange();
    }
    private async updateRankIcon() {
        let score = Role.Instance.RoleData.rankData.score
        let data = getCurScoreStage(score);
        if (!isValidObj(data.RankIcon) || !isValidObj(data.RankIcon)) { return; }

        let sf = await LoadResAsync(data.RankIcon, cc.SpriteFrame);
        if (score != Role.Instance.RoleData.rankData.score) {
            return
        }
        if (sf) {
            if (this.lbl_cur_rank_lv) {
                this.lbl_cur_rank_lv.spriteFrame = sf;
            }
        }
    }

    /* 设置赛季奖励背景
     * @param rankLv  赛季段位
     */
    private setRankLevelBg(rankLv: number) {
        // this.commonSetRankBgOrBgSpine(rankLv, this.spr_rank_lv_bg, this.node_rank_level_spine);
    }

    /* 设置赛季奖励背景图或者spine通用接口
     * @param rankLv     赛季段位
     * @param sprBg      背景spr
     * @param nodeSpine  背景spine节点
     * @param bSmallIcon 是不是小图标
     */
    private async commonSetRankBgOrBgSpine(rankLv: number, sprBg: cc.Sprite, nodeSpine: cc.Node = null, bSmallIcon: boolean = false) {
        let rankGradeTab = tab.Data.RankGradeTableByGrade.getValue(rankLv);
        if (isValidObj(rankGradeTab)) {

            //是主界面奖励的话，统一用小图标表示奖励
            if (bSmallIcon) {
                // isValidObj(sprBg) && (sprBg.node.active = true);
                // let sf = await LoadResAsync(rankGradeTab.MainRewardIcon, cc.SpriteFrame);
                // if (sf) {
                //     if (isValidObj(sprBg)) {
                //         sprBg.spriteFrame = sf;
                //     }
                // }
                return;
            }

            /*isValidObj(sprBg)     && (sprBg.node.active = tab.RankFightType.RankFightType_Low   == rankGradeTab.Type);
            isValidObj(nodeSpine) && (nodeSpine.active  = tab.RankFightType.RankFightType_Hight == rankGradeTab.Type);*/

            isValidObj(sprBg) && (sprBg.node.active = true);

            /*if(tab.RankFightType.RankFightType_Hight == rankGradeTab.Type){ //排位赛
                if(!isValidObj(nodeSpine)){
                    return;
                }

                nodeSpine.removeAllChildren(true);
                CreateSpine(rankGradeTab.SpineId).then(skel=>{
                    nodeSpine.addChild(skel.node);
                    skel.setAnimation(0, "walk_0", true);
                });
                
            }else if(tab.RankFightType.RankFightType_Low == rankGradeTab.Type)*/{ //竞技场
                // if (!checkIconPathIsValid(rankGradeTab.Icon)) {
                //     return;
                // }
                // let sf = await LoadResAsync(rankGradeTab.Icon, cc.SpriteFrame);
                // if (sf) {
                //     if (isValidObj(sprBg)) {
                //         sprBg.spriteFrame = sf;
                //     }
                // }
            }
        }
    }

    /* 设置赛季奖励ICON
     */
    private setRankRewardIcon() {
        let bHaveRewardReceive = kOneNumber == checkHaveRewardCanReceive()[kZeroNumber];
        this.node_rank_reward.active = !bHaveRewardReceive;
        this.node_receive_reward.active = bHaveRewardReceive;
        this.spr_reward_tip.active = bHaveRewardReceive;

        if (bHaveRewardReceive) {
            this.setNewVersionRewardIcon();
            this.lbl_reward_cnt.string = `${checkHaveRewardCanReceive()[kThreeNumber]}`
            return;
        }

        this.setOldVersionRewardIcon();
    }

    /* 设置旧版本的赛季奖励ICON
     */
    private setOldVersionRewardIcon() {
        //掉段了(或者当前段位已经没有可领取的奖励)显示下一级竞技场的徽章或者spine 
        let historyRankLevel = RankScoreRewardClass.getInstance().getRankLevelToScore(Role.Instance.RoleData.rankData.maxScore);
        let itemData = RankScoreRewardClass.getInstance().getRankRewardItemData();
        let oldRankLv = Role.Instance.getOldRankLevel();
        if (oldRankLv < historyRankLevel &&
            kNegativeOneNumber == itemData[kZeroNumber].itemID) { /* 表示段位降了(并且当前段位已经没有可领取的奖励)，要特殊处理 */
            let rankGradeTab = tab.Data.RankGradeTableByGrade.getValue(oldRankLv + kOneNumber);
            if (isValidObj(rankGradeTab)) {
                //这块 如果下一级类型是竞技场就要显示下一级竞技场的徽章和等级，
                //如果下一级是类型是排位赛，则要显示配置的小图标
                //this.spr_rank_reward_icon.node.active    = rankGradeTab.Type == tab.RankFightType.RankFightType_Hight;
                //this.spr_special_reward_icon.node.active = rankGradeTab.Type == tab.RankFightType.RankFightType_Low;
                /************** 暂且所有都用文本和徽章 *******************/
                this.spr_rank_reward_icon.node.active = false;
                this.spr_special_reward_icon.node.active = true;
                /****************************************************** */
                switch (rankGradeTab.Type) {
                    case tab.RankFightType.RankFightType_Low:
                        this.lbl_special_rank_lv.string = `${oldRankLv + kOneNumber}`;
                        this.commonSetRankBgOrBgSpine(oldRankLv + kOneNumber, this.spr_special_reward_icon, null, true);
                        break;

                    case tab.RankFightType.RankFightType_Hight:
                        this.lbl_special_rank_lv.string = `${oldRankLv + kOneNumber}`; //当前没有赛季spine，所以统一用赛季等级，后期有动画记得注掉，开启下面的
                        this.commonSetRankBgOrBgSpine(oldRankLv + kOneNumber, this.spr_special_reward_icon, null, true);
                        break;
                }
            }

            this.spr_rank_reward_icon.node.setContentSize(this._originalRankIconSize);
            return;
        }


        let itemID = itemData[kZeroNumber].itemID;
        let itemType = itemData[kZeroNumber].itemType;
        this.setRewardIconInterface(itemID, itemType, this.spr_rank_reward_icon, false);
    }

    /* 设置新版本的赛季奖励ICON
     */
    private setNewVersionRewardIcon() {
        let itemData = RankScoreRewardClass.getInstance().getRankRewardItemData();
        let itemID = itemData[kZeroNumber].itemID;
        let itemType = itemData[kZeroNumber].itemType;
        this.setRewardIconInterface(itemID, itemType, this.spr_receive_reward_icon, true);
    }

    /* 设置赛季将近ICON接口
     */
    private setRewardIconInterface(itemID: number, itemType: number, sprIcon: cc.Sprite, bReceiveReward: boolean) {
        let iconObj = getItemIconURL(itemID, itemType);
        if (iconObj && isValidObj(iconObj.icon)) {
            this.setSeasonRewardIcon(sprIcon, iconObj.icon, bReceiveReward);
            return;
        }
        /*
        if(tab.RewardType.RewardType_ItemType == itemType){// 奖励Item类型是道具 
            this.setRankRewardIconFromItemTab(itemID, sprIcon, bReceiveReward);
            return;
        }
        if(tab.RewardType.RewardType_BoxType == itemType){ // 奖励Item类型是宝箱
            let boxData = tab.Data.BoxTableByBoxID.getValue(itemID);
            if(isValidObj(boxData)){
                this.setRankRewardIconFromBoxTab(boxData.ItemIcon, sprIcon, bReceiveReward);
                return;
            }
        }
        if(tab.RewardType.RewardType_BoxGroupType == itemType){ // 奖励Item类型是宝箱组 
            let boxData = getBoxIDAndCfg(itemID);
            if(isValidObj(boxData) && isValidObj(boxData.boxCfg)){
                this.setRankRewardIconFromBoxTab(boxData.boxCfg.ItemIcon, sprIcon, bReceiveReward);
                return;
            }   
        }*/
        !bReceiveReward && (this.node_rank_reward.active = false);
    }

    /* 设置赛季奖励ICON
     */
    private async setSeasonRewardIcon(sprIcon: cc.Sprite, iconURL: string, bReceiveReward: boolean) {
        !bReceiveReward && (this.node_rank_reward.active = true);
        let sf = await LoadResAsync(iconURL, cc.SpriteFrame);
        if (sf) {
            if (sprIcon) {
                sprIcon.spriteFrame = sf;
                sprIcon.node.setContentSize(!bReceiveReward ? this._originalRankIconSize : this._originalReceiveIconSize);
            }
        }
    }

    /* 设置赛季奖励ICON
     */
    /*
    private async setRankRewardIconFromItemTab(itemID: number, sprIcon: cc.Sprite, bReceiveReward: boolean){
        let itemTabData = tab.Data.ItemTableByID.getValue(itemID as number);
        if(isValidObj(itemTabData)){
            !bReceiveReward && (this.node_rank_reward.active = true);
            let sf = await LoadResAsync(itemTabData.Icon, cc.SpriteFrame);
            if(sf) {
                if(sprIcon){
                    sprIcon.spriteFrame = sf;
                    sprIcon.node.setContentSize(!bReceiveReward ? this._originalRankIconSize : this._originalReceiveIconSize);
                }
            }
        }
    }
    */

    /* 设置赛季奖励ICON
     */
    /*
    private async setRankRewardIconFromBoxTab(iconURL: string, sprIcon: cc.Sprite, bReceiveReward: boolean){
        !bReceiveReward && (this.node_rank_reward.active = true);
        let sf = await LoadResAsync(iconURL, cc.SpriteFrame);
        if(sf) {
            if(sprIcon){
                sprIcon.spriteFrame = sf;
                sprIcon.node.setContentSize(!bReceiveReward ? this._originalRankIconSize : this._originalReceiveIconSize);
            }
        }
    }
    */

    /* 设置赛季进度条位置
     */
    private setProgressBarPosition() {
        let rankInfo = Role.Instance.RoleData.rankData;
        let curRankLevel = Role.Instance.RoleGrade;//Role.Instance.getRoleRankLv();
        let curRankScore = RankScoreRewardClass.getInstance().getRankStartScoreToLevel(curRankLevel);
        let nextRankScore = RankScoreRewardClass.getInstance().getRankStartScoreToLevel(curRankLevel + kOneNumber);
        let progressWidth = this._original_progressbar_width;//this.progress_season_reward.node.getContentSize().width;
        let diffSizeW = Math.abs(this.progress_season_reward.node.getContentSize().width - progressWidth) / kTwoNumber - kFiveNumber;
        let progressPosX = this.progress_season_reward.node.position.x + diffSizeW;
        let halfProgressWidth = progressWidth / kTwoNumber;

        if (kNegativeOneNumber != nextRankScore &&
            kNegativeOneNumber != curRankScore) {
            //当前积分进度条
            let denominator = nextRankScore - curRankScore; /* 分母：达到下级竞技场所需积分 - 当前竞技场等级所需积分 */
            let numerator = rankInfo.score - curRankScore; /* 当前积分 - 当前竞技场等级所需积分 */
            numerator = (numerator < kZeroNumber) ? kZeroNumber : numerator;
            this.progress_season_reward.progress = numerator / denominator;

            //最高分进度条
            numerator = rankInfo.maxScore - curRankScore;
            numerator = (numerator < kZeroNumber) ? kZeroNumber : numerator; /* 最高积分 - 当前竞技场等级所需积分 */

            let displayWidth = (numerator / denominator) * this._originalMaxbarSize.width;
            displayWidth = displayWidth > progressWidth ? progressWidth : displayWidth;
            this.spr_max_score_bar.node.setContentSize(displayWidth, this._originalMaxbarSize.height);

            //奖励小泡泡位置
            let bHaveRewardReceive = kOneNumber == checkHaveRewardCanReceive(true)[kZeroNumber];
            let historyScore = Role.Instance.RoleData.rankData.maxScore;
            let historyRankLevel = RankScoreRewardClass.getInstance().getRankLevelToScore(historyScore);
            let nextRewardScore = RankScoreRewardClass.getInstance().getNextRewardScore(curRankLevel);
            let oldRankLv = Role.Instance.getOldRankLevel();

            this.playCanRecieveSeasonRewardAni(bHaveRewardReceive);

            if (oldRankLv < historyRankLevel ||
                bHaveRewardReceive ||
                nextRewardScore == kNegativeOneNumber) { /* 表示段位降了 或者 当前积分有可领取奖励 或者该段位已经没有可领取的奖励了*/
                this.node_rank_reward.setPosition(progressPosX + halfProgressWidth, this.node_rank_reward.position.y);
                return;
            }

            /* 达到下次领取奖励所需积分或下级竞技场所需积分 - 当前竞技场等级所需积分 */
            //看能不能取到该等级的下个奖励积分，没有了，就用下级竞技场所需积分
            if (nextRewardScore != kNegativeOneNumber) {
                numerator = nextRewardScore - curRankScore;
            } else {
                numerator = RankScoreRewardClass.getInstance().getRankScoreCompSelfScore() - curRankScore;
            }
            numerator = (numerator < kZeroNumber) ? kZeroNumber : numerator;
            let progressVal = (numerator / denominator) * this._originalMaxbarSize.width;//this.progress_season_reward.progress * originalSize.width;
            let x = progressPosX + progressVal - progressWidth / kTwoNumber;
            this.node_rank_reward.setPosition(x, this.node_rank_reward.position.y);
        } else {
            this.progress_season_reward.progress = kOneNumber;
            this.node_rank_reward.setPosition(progressPosX + halfProgressWidth, this.node_rank_reward.position.y);
        }
    }

    /* 检测游戏过程中段位有无改变
     */
    private checkRankLevelChange() {
        /* wzq20230320 检测一下段位的变化 暂时先删掉 */
        // let curRankLevel = RankScoreRewardClass.getInstance().getRankLevelToScore(Role.Instance.RoleData.rankData.score);
        // let oldRankLv = Role.Instance.getOldRankLevel();
        // if (curRankLevel != oldRankLv) {
        //     if (Role.Instance.IsGuideFinished() && !GuideController.Instance.isGuiding()) {
        //         this.playRankLevelChangeAnim(curRankLevel > oldRankLv, curRankLevel);
        //     }
        //     Role.Instance.setOldRankLevel(curRankLevel);
        // }
    }

    /* 播放赛季段位改变的动画
     */
    private playRankLevelChangeAnim(bPromote: boolean, rankLv: number) {
        showPopLayerV2("prefab/RankLevelPromote", RankLevelPromote, false).then(tipLayer => {
            if (null == tipLayer) {
                throw "RankLevelPromote is NULL";
            }
            tipLayer.playRankLevelChangeAnim(bPromote, rankLv);
        });
    }

    /* 播放赛季可领取动画
     */
    private playCanRecieveSeasonRewardAni(bPlay: boolean) {
        //this.spr_rank_reward_bubble.node.active = bPlay;
        if (bPlay) {
            let aniNode = this.spr_rank_reward_bubble.getComponent(cc.Animation);
            if (aniNode) {
                aniNode.play("timeboxbubblebreath01");
            }
        }
    }

    enterFight() {
        // if(!Role.Instance.IsGuideFinished()){
        //     this.enterRookieFight();
        //     return;
        // }
        // FightLoader.Instance.MatchPvP();
        /* 20230315 wzq 修改 */
        showPopLayerV2("prefab/UIGameModelFightOther", UIGameModelFightOther, false).then(nodeFightOther => {
            // nodeDetail.setCardData(item.rewardId, CardNodeState.CARD_NODE_STATE_UNOWN, 1);
        });
    }
    // 赏金赛
    enterBountyFight() {
        let isOpen = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_BountyGame);
        if (isOpen) {
            showPopLayerV2("prefab/UIGameModelFightGold", BountyFightPop).then(layer => {

            });
        } else {
            let str = getFunctionOpenStringByType(tab.OpenFunctionName.OpenFunctionName_BountyGame);
            ShowTips(str)
        }

    }
    enterRookieFight() {
        FightLoader.Instance.StartPvPGuide();
    }

    enterCooperationFight() {
        let bOpenPveFight = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_CooperationModel);
        if (!bOpenPveFight) {
            ShowTips("CooperationFightOpenTip");
            return;
        }
        // let launcherNode = GetPopLayer("prefab/PveLauncher")
        // if(launcherNode && launcherNode.getComponent(PveLauncher)) {
        //     launcherNode.getComponent(PveLauncher).setData(msg)
        // } else {
        //     showPopLayerV2("prefab/PveLauncher", PveLauncher).then(launcher=>{
        //         launcher.setData(msg)
        //     })
        // }
        SignRequestPvEPath.getInstance().setPvePath(RequestPvePathType.NORMAL_FIGHT, kNegativeOneNumber);
        showPopLayerV2("prefab/PveLauncher", PveLauncher)
    }

    takeRookieReward() {
        // Net.Send(proto.Ptl.GuideTakeRewardReq, new proto.Msg_GuideTakeRewardReq())
        Waiting.Show(WaitingTag.RookieReward)
    }

    onDisable() {
        this.sk_cup.node.active = false;
        let node_flash_effect = this.bt_fight.getChildByName("sk_flash_light");
        if (node_flash_effect) {
            node_flash_effect.active = false;
        }

        let node_cup_effect = this.bt_fight.getChildByName("sk_cup_light");
        if (node_cup_effect) {
            node_cup_effect.active = false;
        }
        this.unscheduleAllCallbacks();
    }

    initRewardData() {
        let curnode: cc.Node = null
        Role.Instance.FightType == Number(proto.FightType.PvP) && (curnode = this.bt_fight)
        Role.Instance.FightType = -1
        if (curnode == null) {
            return
        }

        if (Role.Instance.AddShanDian > 0) {
            // 按钮特效
            let node_flash_effect = curnode.getChildByName("sk_flash_light");
            if (node_flash_effect) {
                let sklen = node_flash_effect.getComponent(sp.Skeleton);
                if (sklen) {
                    sklen.setAnimation(0, "idle", false);
                }
            }

            // 收集特效
            let bossbox = this.bossBoss.getComponent(MainsceneBossBox)
            if (bossbox) {
                bossbox.playFlash()
            }

            this.scheduleOnce(() => {
                let bossbox = this.bossBoss.getComponent(MainsceneBossBox)
                if (bossbox) {
                    bossbox.playScaleAct()
                }
            }, 0.8);
        }

        if (Role.Instance.addGold > 0) {
            // flyGold(this.btnMode.convertToWorldSpaceAR(cc.Vec2.ZERO))
            Role.Instance.addGold = 0;
        }

        // if (Role.Instance.AddCup != 0) {
        //     this.scheduleOnce(() => {
        //         // 按钮特效
        //         let node_cup_effect = curnode.getChildByName("sk_cup_light");
        //         if (node_cup_effect) {
        //             let sklen = node_cup_effect.getComponent(sp.Skeleton);
        //             if (sklen) {
        //                 sklen.setAnimation(0, "idle", false);
        //             }
        //         }

        //         // 收集特效
        //         let spSkel = this.sk_cup;
        //         if (spSkel) {
        //             spSkel.setAnimation(0, "idle", false);
        //             spSkel.setCompleteListener(() => {
        //                 Role.Instance.AddCup = 0;
        //                 // 先展示原来的
        //                 this.roleLvLb.string = `${Role.Instance.RoleCup}`;
        //             });
        //         }

        //         this.scheduleOnce(() => {
        //             this.player_info.runAction(cc.sequence(cc.scaleTo(0.15, 1.5, 1.5), cc.scaleTo(0.4, 1, 1)));
        //         }, 1.2);
        //     }, 2.5);
        // }
    }

    /* 设置联盟名称
     */
    private setAllianceName() {
        if (!checkStringIsValid(Role.Instance.RoleData.allianceData.allianceID)) {
            this.lbl_alliance_name.string = tab.Data.GetKeyValue_ConfigTable().NotHaveAllianceTip;
            return;
        }
        this.lbl_alliance_name.string = Role.Instance.RoleData.allianceData.allianceName;
    }

    onGmChangeCup(ev, delta: string) {
        let req = new proto.Msg_GmAddCupReq()
        req.delta = parseInt(delta);
        Net.Send(proto.Ptl.GmAddCupReq, req)
    }

    public onClickExchangeCode() {
        showPopLayerV2("prefab/ExchangeCode", ExchangeCode).then(layer => {
        });
    }

    /* 请求彩虹任务列表 */
    private requestRainbowTaskList() {
        let param = new proto.Msg_RainbowTaskListReq()
        Net.Send(proto.Ptl.RainbowTaskListReq, param);
    }

    /* 检测彩虹任务开启否 */
    private checkRainbowTaskIsOpen() {
        let historySeasonScore = Role.Instance.RoleData.rankData.historyMaxScore;
        let seasonLv = RankScoreRewardClass.getInstance().getRankLevelToScore(historySeasonScore);
    }

    /* 更新彩虹任务进度 */
    private updateRainbowProgress(rainbowTaskData: proto.IRainbowTaskPushData) {
        let taskID = isValidObj(rainbowTaskData) ? rainbowTaskData.data.taskId : kNegativeOneNumber;
        let taskDataTab = tab.Data.RainbowTaskTableByID.getValue(taskID);
        if (isValidObj(taskDataTab)) {
            let bFinish = taskDataTab.FinishCondition <= rainbowTaskData.data.score;
            let bRainbowTaskOver = ManagerRainbowTask.getInstance().getRainbowFinishOverState();
            this.setTaskProgress(rainbowTaskData.data.score, taskDataTab.FinishCondition);
        }

        this._current_rainbow_task_star_lv = rainbowTaskData && rainbowTaskData.taskStarLv;
    }

    /* 设置彩虹任务进度 */
    private setTaskProgress(curProg: number, totalProg: number) {
        curProg = curProg > totalProg ? totalProg : curProg;
        // this.lbl_prog_value.string     = `${curProg}/${totalProg}`;
    }

    /* 打开彩虹任务 */
    private onClickOpenRainbowTask() {
        this.requestRainbowTaskList();
    }

    /* 检测七日签到登录入口是否开启 */
    public checkSevenSignInEntry() {
        let bOpen = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_SevenSignIn) &&
            ManagerSevenSignInData.getInstance().checkEntryIsOpen();
        bOpen && this.checkSevenSignInRedDot();
        this.node_seven_signIn.active = bOpen;
        return bOpen
    }
    /* 检测赏金赛是够开启 */
    private checkBountyIsOpen() {
        let open = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_BountyGame);
        this.node_bounty_btn.getChildByName("lock_node").active = !open;
    }
    /* 检测七日签到登录小红点 */
    public checkSevenSignInRedDot() {
        let bTip = ManagerSevenSignInData.getInstance().checkIsHaveCanReceiveReward();
        this.spr_seven_signIn_reddot.active = bTip;
        return bTip
    }

    public onClickSevenSignIn(sender, isQueue: boolean) {
        showPopLayerV2("prefab/7DayLoginLayer", SevenSignInMainPage).then(sevenSignIn => {
            sevenSignIn.isQueue = isQueue
            sevenSignIn.initData();
        });
    }

    /* 播放对战按钮特效 */
    private playPvpAndPveEffect() {
        if (isValidObj(this._pvp_effect)) {
            this._pvp_effect.setAnimation(kZeroNumber, "duizhan_idle1", true);
            this._pvp_effect.addAnimation(kZeroNumber, "duizhan_idle2", true);
        }

        let bOpenPveFight = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_CooperationModel);

        if (bOpenPveFight && isValidObj(this._pve_effect)) {
            this._pve_effect.setAnimation(kZeroNumber, "hezuo_idle1", true);
            this._pve_effect.addAnimation(kZeroNumber, "hezuo_idle2", true);
        }
    }

    /* 更新任务节点可见性 */
    private checkTaskNode() {
        this.task_node.active = checkSeasonLevel(tab.Data.GetKeyValue_ConfigTable().OpenTaskRankLv)
    }

    /* 更新“胜利宝箱”可见性 */
    private checkVictoryBox() {
        //this.btn_victory_box.node.active = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_WinBoxAd);
    }

    /* 更新“广告周宝箱”可见性 */
    private checkWeekBox(isGetMsg: boolean = false) {
        let isOpen = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_AdSevenDay);
        this.btn_week_box.node.active = isOpen
        if (isOpen && isGetMsg) {
            BattleLayer.openWeekBox = false;
            let msg = new proto.Msg_WeeklyAdBoxInfoReq();
            Net.Send(proto.Ptl.WeeklyAdBoxInfoReq, msg);
        }
    }
    /* 更新“首冲礼包”可见性 */
    private checkFirstCharge() {
        let isOpen = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_FirstRechargeGift);
        this.btn_first_charge.node.active = isOpen;
        let msg = new proto.Msg_GetFirstRechargeGiftReq();
        Net.Send(proto.Ptl.GetFirstRechargeGiftReq, msg);
    }
    isOpenFirstPay: boolean = false
    /* 点击首冲按钮 */
    public clickFirstCharge() {
        console.log("点击首冲按钮");
        this.isOpenFirstPay = true
        let msg = new proto.Msg_GetFirstRechargeGiftReq();
        Net.Send(proto.Ptl.GetFirstRechargeGiftReq, msg);
    }
    /* 检测格古特任务 */
    private checkGroutTask() {
        this.checkGroutTaskIsOpen();
        this.updateGroutTaskProgress();
        this.setGroutStepRewardIcon();
    }

    /* 检测格古特任务开启否 */
    private checkGroutTaskIsOpen() {

    }

    /* 更新格古特任务进度 */
    private updateGroutTaskProgress() {
        if (!ManagerGroutTaskInfo.getInstance().getRunningTaskData()) {
            cc.log("新手任务是空");
            return;
        }

        let taskData = ManagerGroutTaskInfo.getInstance().getRunningTaskData();
        let taskID = isValidObj(taskData) ? taskData.taskId : kNegativeOneNumber;
        let taskDataTab = tab.Data.GroutTaskTableByID.getValue(taskID);
        if (isValidObj(taskDataTab)) {
            let bFinish = taskDataTab.FinishCondition <= taskData.score;
            this.setGroutTaskProgress(taskData.score, taskDataTab.FinishCondition);
        }
    }

    /* 设置格古特任务进度 */
    private setGroutTaskProgress(curProg: number, totalProg: number) {
        curProg = curProg > totalProg ? totalProg : curProg;
    }

    /* 设置彩虹任务进度 */
    private async setGroutStepRewardIcon() {
        let step = ManagerGroutTaskInfo.getInstance().getTaskStep();
        let groutStepTab = tab.Data.GroutStepTableByStep.getValue(step);
        if (isValidObj(groutStepTab)) {
            let iconObj = getItemIconURL(groutStepTab.RewardID, groutStepTab.RewardType, 0.3);
            if (!isValidObj(iconObj.icon)) { return; }
            let sf = await LoadResAsync(iconObj.icon, cc.SpriteFrame);
        }
    }

    /*  */
    public onClickOpenGroutTask() {
        showPopLayerV2("prefab/GroutTaskLayer", GroutTaskLayer, false).then(layer => {

        });
    }

    /*  */
    public onClickNewplayerGiftBag() {
        if (checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RookieGiftBag) == false) {
            ShowTips("FunctionClosedTip")
            return
        }
        /*  */
        showPopLayerV2("prefab/NewPlayerBagGiftPage", NewPlayerBagGiftPage, false).then((value: NewPlayerBagGiftPage) => {
            if (value) {
                value.setCloseCallBack(() => {
                    let param = new proto.Msg_NewPlayerGiftBagReq()
                    Net.Send(proto.Ptl.NewPlayerGiftBagReq, param)
                })
            }
        })
    }

    /*  */
    public onClickAccelerate() {
        ShowTips("AccelerateUnlockBoxTip");
    }

    /* 设置解锁加锁效果 */
    private refreshUnlockAccelerateTimes() {
        refreshUnlockAccelerateTimes(this.lbl_accelerate_time, this.spr_accelerate_bg.node.active);
    }

    /* 检测解锁加速模块是否可见 */
    private checkUnlockAccelerateVisible() {
        let bVisible = checkCanUnlockAccelerate(true);
        let bOpenFunc = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_MainPageUnlockBox);

        // this.spr_accelerate_bg.node.active = bOpenFunc && bVisible;
        this.spr_accelerate_bg.node.active = false   //与其他功能冲突，暂时屏蔽
        if (this.spr_accelerate_bg.node.active) {
            this.unschedule(this.refreshUnlockAccelerateTimes);
            this.refreshUnlockAccelerateTimes();
            this.schedule(this.refreshUnlockAccelerateTimes, kOneNumber);
        }
    }

    /* 检测是否自动弹出公告框 */
    private checkAutoPopNotice() {
        /*
        this.checkNoticeRedTip();
        if(!Role.Instance.IsGuideFinished() || GuideController.Instance.isGuiding()
            || SdkManager.Instance.IsReviewMLWY()){
            return;
        }
        let bFirstLogin = ManagerNotice.getInstance().getFirstLogin();
        let bAutoPop    = ManagerNotice.getInstance().getAutoPopFlag();
        bFirstLogin && bAutoPop && showPopLayerV2("prefab/NoticePopLayer",NoticePopLayer);
        */
    }

    /* 检测公告红点可见性 */
    private checkNoticeRedTip() {
        //this.node_notice_red_tip.active = ManagerNotice.getInstance().getRedDotVisible();
    }

    /*  检测是否弹出联盟首领被替换框框 */
    private checkPopAllianceLeaderReplace() {
        MainMessage.Instance.getPopAllianceLeaderReplace() && showPopLayerV2("prefab/AlliancePositionChange", AlliancePositionChange);
    }

    private checkReportedOfKey(rankKey: string) {
        let key = `${Role.Instance.RoleData.id}_${rankKey}`;
        let localData = cc.sys.localStorage.getItem(key, false);
        let bReported = !isValidObj(localData) ? false : (localData === "true");
        return bReported;
    }

    /* 检测下排行数据有没有上传过 */
    private checkReportRankingData() {
        if (cc.sys.platform !== cc.sys.WECHAT_GAME) {
            return;
        }

        if (!this.checkReportedOfKey("pvp_rank")) {
            SdkManager.Instance.ReportedScore2WeChat(Role.Instance.RoleData.rankData.score,
                getServerUtcTime(),
                Role.Instance.RoleData.name,
                "pvpRanking");
        }

        if (!this.checkReportedOfKey("_pve_rank")) {
            SdkManager.Instance.ReportedScore2WeChat(Role.Instance.RoleData.maxWaveNum, getServerUtcTime(), Role.Instance.RoleData.name, "pveRanking");
        }

        if (kOneNumber == tab.Data.GetKeyValue_ConfigTable().WeChatRankSchemeIdx) {
            SdkManager.Instance.PostSubContextMsg("pvpRanking");
            SdkManager.Instance.PostSubContextMsg("pveRanking");
        }
    }

    /* 查询一元购活动信息 */
    private searchOneYuan2BuyInfo() {
        if (!Role.Instance.IsGuideFinished() ||
            !checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_OneYuanToBuy) ||
            !checkRechargeInterfaceIsOpen()) {
            return;
        }
        let param = new proto.Msg_GetOneYuanToBuyInfoReq();
        Net.Send(proto.Ptl.GetOneYuanToBuyInfoReq, param);
    }

    /* 点击打开一元购界面 */
    public onClickOneYuan2Buy() {
        showPopLayerV2("prefab/OneYuanToBuy", OneYuanToBuy).then(layer => {
            layer.initData(this._bBuyOneYuan2Buy, this._oneYuan2BuyOverTimes, this._oneYuan2BuyRewardList);
        });
    }

    /* 查询特惠礼包活动信息 */
    private searchDiscountsGiftBagInfo(bCrossDay: boolean = false) {
        this._bCrossDay = bCrossDay;
        if (!Role.Instance.IsGuideFinished() ||
            !checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_EveryDayDiscountsGiftBag) ||
            !checkRechargeInterfaceIsOpen()) {
            return;
        }
        let param = new proto.Msg_GetDiscountsGiftBagInfoReq();
        Net.Send(proto.Ptl.GetDiscountsGiftBagInfoReq, param);
    }

    /* 点击打开特惠礼包活动界面 */
    public onClickDiscountsGiftBag() {
        showPopLayerV2("prefab/DiscountsGiftBag", DiscountsGiftBag).then(layer => {
            layer.initData(this._discountsGiftBagData);
        });
    }

    /* 获取限时活动信息数据 */
    private requestLimitActivityInfo() {
        let param5 = new proto.Msg_LimitActivityReq();
        Net.Send(proto.Ptl.LimitActivityReq, param5);
    }

    /* 查询问卷调查信息 */
    private searchQuestionInfo() {
        if (!checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_QuestionnaireSurvey)) {
            return;
        }
        let param = new proto.Msg_GetQuestionReq();
        Net.Send(proto.Ptl.GetQuestionReq, param);
    }

    private onClickQuestion() {
        showPopLayerV2("prefab/QuestionnaireSurveyLayer", QuestionnaireSurveyLayer).then(tipLayer => {
            if (tipLayer) {
                tipLayer.initData();
            }
        });
    }

    /* 查询能量双倍活动信息 */
    private searchDoubleEnergyInfo() {
        if (!checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_DoubleEnergy)) {
            return;
        }
        let param = new proto.Msg_SearchDoubleEnergyInfoReq();
        Net.Send(proto.Ptl.SearchDoubleEnergyInfoReq, param);
    }

    /* 设置能量双倍标志的可见性 */
    private setDoubleEnergyVisible() {
        //this.node_double_energy_effect.active = bVisible;
    }

    /* Description: 设置能量双倍活动 */
    private setDoubleEnergy() {
        this.setDoubleEnergyVisible();
    }

    /* 刷新能量双倍活动倒计时 */
    private refreshDoubleEnergy() {
        let leftTimes = ManagerDoubleEnergy.getInstance().getOverUTC() - getServerUtcTime();
        if (leftTimes <= kZeroNumber) {
            this.setDoubleEnergyVisible();
            this.unschedule(this.refreshDoubleEnergy);
            return;
        }
    }

    public onClickDoubleEnergy() { }

    private onClickClosedDoubleEnergyTip() { }

    /* 查询春节签到活动信息 */
    private searchSpringFestival() {
        if (!checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_SpringFestivalSignIn)) {
            return;
        }
        let param = new proto.Msg_SearchSpringFestivalInfoReq();
        Net.Send(proto.Ptl.SearchSpringFestivalInfoReq, param);
    }

    /* 检测春节签到登录入口是否开启 */
    private checkSpringFestivalSignInEntry() {
        let bOpen = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_SpringFestivalSignIn) &&
            ManagerSpringFestivalData.getInstance().checkEntryIsOpen();
        bOpen && this.checkSpringFestivalSignInRedDot();
    }

    /* 检测春节签到登录小红点 */
    private checkSpringFestivalSignInRedDot() {
        let bTip = ManagerSpringFestivalData.getInstance().checkIsHaveCanReceiveReward();
    }

    /*  */
    public onClickSpringFestivalSignIn() {
        showPopLayerV2("prefab/SpringFestivalPage", SpringFestivalPage).then(layer => {

        });
    }

    /* 打开聊天界面 */
    public onClickOpenChatPage() {
        showPopLayerV2("prefab/ChatMainPage", ChatMainPage).then(layer => {
            layer.initData(proto.ChatChannelType.WorldChannel);
        });
    }

    /* 启动刷新聊天信息 */
    private startRefreshChatMsg() {
        this.refreshWorldMsg();
        this.schedule(this.refreshWorldMsg, kOneNumber);
        this.checkChatRedTip();
    }

    /* 检测聊天红点 */
    private checkChatRedTip() { }

    /* 刷新世界聊天信息 */
    private refreshWorldMsg() {
        let msg = ManagerLocalChatMsg.getInstance().getLastWorldMsg();
        if (!msg) {
            return;
        }
        let msgTab = tab.Data.ChatBreviaryTableByMsgType.getValue(msg.msgType);
        if (isValidObj(msgTab)) {
            return;
        }
        if (proto.GlobalMessageType.MemberNormalTxtMsg == msg.msgType) {
        }
    }

    /* 获取聊天CD时间 */
    private requestChatCD() {
        let param = new proto.Msg_GetChatCdReq();
        Net.Send(proto.Ptl.GetChatCdReq, param);
    }

    /* 幸运补给 点击 */
    public onLuckySupplyClicked(sender, isQueue: boolean) {
        cc.log("BattleLayer.ts : onLuckySupplyClicked()")
        // if (!checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_LuckySupply)) {
        //     return
        // }
        //, cc.macro.MAX_ZINDEX - 200 不知道之前为什么， 要设置一个大的zindex,会引起其他界面现实在此界面下边，先注释掉。 
        showPopLayer("prefab/LuckySupply", true, true, true, true, false, true).then(nodeLucky => {
            nodeLucky.getComponent(LuckySupply).isQueue = isQueue
            nodeLucky.getComponent(LuckySupply).setData({ LeftTimes: this.luckySupplyRemaindTimes })
        })
    }

    /* 设置"幸运补给"剩余次数 */
    setLuckySupplyRemaindTimes(cnt: number) {
        this.luckySupplyRemaindTimes = cnt;
        this.btn_lucky_supply.node.active = (this.luckySupplyRemaindTimes > 0)
    }

    private onWeekBoxClicked() {
        // showPopLayer("prefab/WeekBox", true, true, true, true, false, true)

        // 向服务器发送获取广告周宝箱
        BattleLayer.openWeekBox = true;
        let msg = new proto.Msg_WeeklyAdBoxInfoReq();
        Net.Send(proto.Ptl.WeeklyAdBoxInfoReq, msg);
    }

    /* 检测成长基金红点 （活动）*/
    private checkActivityRedDot() {
        this.spr_GrowFund_reddot.active = ActivityController.getInstance().activityHasRed()
    }

    onVictoryBoxClicked(sender, isQueue: boolean) {
        cc.log("onVictoryBoxClicked() called")
        showPopLayer("prefab/WinAdvertise").then((newNode) => {
            let layer = newNode.getComponent(PopLayer)
            layer.isQueue = isQueue
        })
    }

    /* 更新主页面上"广告周宝箱"上的数字 */
    updateWeekBoxLabel(AdWatchedCount: number[]) {
        let cnt = 0
        for (let i = 0; i < AdWatchedCount.length; ++i) {
            cnt += AdWatchedCount[i]
        }
        this.lbl_week_box_cnt.string = `${cnt > 10 ? 10 : cnt}/${10}`
    }
    /*  */
    updateWeekBoxRed(msg: proto.IMsg_WeeklyAdBoxInfoRsp) {
        // 广告周宝箱有可领取项目时，如果有可领取的奖励的时候显示红点;
        this.node_week_box_red.active = false
        let cnt = 0
        for (let i = 0; i < msg.AdWatchedCount.length; ++i) {
            cnt += msg.AdWatchedCount[i]
        }
        for (let i = 0; i < msg.RewardList.length; i++) {
            let cfg = tab.Data.AdSevenDayTableByID.getValue(msg.BoxID);
            if (msg.UnlockCount === i) {
                if (msg.AcquireList.indexOf(msg.RewardList[i]) === -1) {
                    if (cnt >= cfg.DemandCount) {
                        // 显示红点
                        this.node_week_box_red.active = true
                    }
                }
            } else if (msg.UnlockCount > i) {
                if (msg.AcquireList.indexOf(msg.RewardList[i]) === -1) {
                    //显示红点
                    this.node_week_box_red.active = true
                }
            }
        }
    }

    onClickPassport() {

        let retVal = CheckFunctionIsOpenWithTip(tab.OpenFunctionName.OpenFunctionName_BossBox);
        let bArrive = retVal.bArrive;
        let tips = retVal.tip;
        if (!bArrive) {
            ShowTipsOfCustomString(tips);
            return
        }

        showPopLayerV2("prefab/Passport/PassportLayer", PassportLayer, false).then(layer => {

        });
    }

    onClickOpenSeason() {
        if (this._seasonResetRsp != null) {//赛季重置数据
            showPopLayerV2("prefab/Season/SeasonResult", SeasonResult, false).then(layer => {
                layer.isQueue = true
                layer.initData(this._seasonResetRsp, this._seasonRewardMsgRsp)
                this._seasonResetRsp = null
            });
        } else if (this._seasonRewardMsgRsp != null) {//赛季结算奖励
            showPopLayerV2("prefab/Season/SeasonGift", SeasonGift, false).then(layer => {
                layer.isQueue = true
                layer.initData(this._seasonRewardMsgRsp)
                this._seasonRewardMsgRsp = null
            });
        }
    }

    onClickOpenMonthWeekCardTips() {
        showPopLayerV2("prefab/Activity/MonthWeekCardTips", PopLayer).then((layer) => {
            layer.isQueue = true
        })
    }

}


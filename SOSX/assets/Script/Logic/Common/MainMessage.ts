/**
 */

import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import OverBagGiftLayer from "../Activity/OverBagGift/OverBagGiftLayer";
import { ManagerSevenSignInData } from "../Activity/SevenSignIn/ManagerSevenSignInData";
import { clearSelfAllianceInfo, DefaultEnterPageType, FightFromWhichLayer, setRoleAllianceData2 } from "../Alliance/AllianceCommonInterface";
import AllianceJoinMsgManager from "../Alliance/AllianceJoinMsgManager";
import ManagerAllianceInnerMsg from "../Alliance/ManagerAllianceInnerMsg";
import { sortChatMsgList } from "../Chat/ChatCommonInterface";
import ManagerChatFightMsg, { cleanFightInvitationData, wrapFightInfo, wrapFightInvitationInfo } from "../Chat/ManagerChatFightMsg";
import ManagerLocalChatMsg from "../Chat/ManagerLocalChatMsg";
import ManagerPrivateChatMsg from "../Chat/ManagerPrivateChatMsg";
import ManagerNewFriend from "../Friend/ManagerNewFriend";
import ManagerGroutTaskInfo from "../GroutTask/ManagerGroutTaskInfo";
import LoginData from "../Login/LoginData";
import PreventIndulge from "../Login/PreventIndulgeNode";
import BattleLayer from "../Main/BattleLayer";
import MainScene from "../Main/MainScene";
import ManagerNotice from "../Notices/ManagerNotice";
import ManagerQuestion from "../QuestionnaireSurvey/ManagerQuestion";
import ManagerRainbowTask from "../RainbowTask/ManagerRainbowTask";
import { TaskType } from "../Task/PushTaskTip";
import {isWechat, popRewardLayer_Ex, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import { CardNodeState, isValidObj, kNegativeOneNumber, kZeroNumber } from "./CommonInterface";
import ManagerNewCardRedDot from "./ManagerNewCardRedDot";
import ManagerShareType from "./ManagerShareType";
import { Native2JsInterface } from "./Native2JsInterface";
import RedDotManager, { RedDotType } from "./ReddotManager";
import Role from "./Role";
import CardDetail from "../Main/CardDetail";
import {FightLoader } from "../Fight/FightLoader";
import { CaiHongData } from "../../sdk/rainbow/CaiHongData";
import FightMsgManager from "../Fight/FightMsgManager";
import UIGameModelFriendCreateRoom from "../match/UIGameModelFriendCreateRoom";
import SdkManager from "../Utils/SdkManager";
import PassportMsg from "../passport/PassportController";
import SeasonGift from "../Season/SeasonGift";
import SeasonResult from "../Season/SeasonResult";
import MonthWeekCardTips from "../Activity/Activity/MonthAndWeekCard/MonthWeekCardTips";
import ActivityController from "../Activity/Activity/ActivityController";
import MainSceneQueueUI from "../Utils/MainSceneQueueUI";

/*  */
export default class MainMessage {
    private _rechargeType: tab.RechargeGoodsType;
    private _bPopAllianceLeaderReplaceMsg: boolean = false;
    private _bSortChatMsg: boolean = false;
    private _rechargeID: number;
    private _orderID: string;
    protected static _initCreatePromise: Promise<any> = null;

    protected static _ins: MainMessage = null;

    static get Instance(): MainMessage {
        if (!MainMessage._ins) {
            MainMessage._ins = new MainMessage();
        }
        return MainMessage._ins;
    }

    public PushSelectCardBySelfTimeLeft: number = 0

    private listenFlas:boolean = false //消息注册标记

    // public initCreatePromise(){
    //     MainMessage._initCreatePromise = FightMsgManager.Instance.waitingMatchFight(proto.FightType.WorldChannelPvP);
    // }

    public init() {
        if (this.listenFlas){
            return
        }

        MainSceneQueueUI.init()

        PassportMsg.Instance.listenProtocolEvent()
        this.listenFlas = true
        this._bSortChatMsg = false;
        //加载本地存储的聊天消息
        ManagerLocalChatMsg.getInstance().loadLocalMsg();
        //加载本地联盟内部消息
        ManagerAllianceInnerMsg.getInstance().loadLocalMsg();
        //加载本地私聊消息
        ManagerPrivateChatMsg.getInstance().loadLocalMsg();
        //初始化公告
        ManagerNotice.getInstance().init();
        //加载问卷调查红点tip
        ManagerQuestion.getInstance().loadQuestionRedDotTip();

        //卡牌选择推送
        Net.listenProtocol(proto.Ptl.PushSelectCardBySelfRsp, function (buffer, ptl) {
            let msg = proto.Msg_PushSelectCardBySelfRsp.decode(buffer)
            cc.log("PushSelectCardBySelfRsp (卡牌选择推送) : msg " + JSON.stringify(msg));
            if (msg != null) {
                this.PushSelectCardBySelfTimeLeft = msg.leftTimes
            }
        }, this)

        //超值礼包信息推送
        Net.listenProtocol(proto.Ptl.PushOverBagGift, function (buffer, ptl) {
            let msg = proto.Msg_PushOverBagGift.decode(buffer)
            cc.log("PushOverBagGift (超值礼包信息推送) : msg " + JSON.stringify(msg));
            if (msg != null) {
                OverBagGiftLayer.pushOverBagGift = msg;
                Net.pushLoaclMessage(LOCAL_MESSAGE.PushOverBagGift)
            }
        }, this)

        /* 同步道具数据 */
        Net.listenProtocol(proto.Ptl.UpdateItemData, (buffer, ptl) => {
            let msg = proto.Msg_UpdateItemData.decode(buffer);
            cc.log("MainMessage.ts : UpdateItemData(同步道具数据): msg: "+JSON.stringify(msg));
            if (msg != null) {
                //看看有木有新的卡牌获得
                for (let item of msg.updateItems) {
                    let cardTabData = tab.Data.CardTableByID.getValue(item.staticId);
                    if (isValidObj(cardTabData)) {
                        //在阵容上就排除
                        let teams: proto.IDeckData = Role.Instance.RoleData.decks[Role.Instance.DeckIndex];
                        let idx = teams.deckItems.findIndex(tmpObj => tmpObj === item.id);
                        if (idx != kNegativeOneNumber) {
                            break;
                        }

                        let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(item.staticId);
                        let bNewCard = !isValidObj(cardInfo);
                        bNewCard && ManagerNewCardRedDot.getInstance().signCardState(item.staticId, bNewCard);
                    }
                }

                /* zhibo-S@20230421 for <策划说效果不好，又去掉了> */
                /* zhibo+S@20230420 for <只要获得了金卡，就弹出来一个详情页面> */
                // for (let item of msg.updateItems){
                //     let cardTabData = tab.Data.ItemTableByID.getValue(item.staticId);
                //     cc.log("staticId: " + item.staticId +", Quality: " + cardTabData.Quality)
                //     /* zhibo+@20230420 TODO: 遗留了一个问题，因为PopLayer是全局唯一个，所以第二个弹出来的会干掉第一个，这个等有空再搞吧 */
                //     if(cardTabData.Quality >= tab.ItemQuality.ItemQuality_Golden){
                //         showPopLayerV2("prefab/CardDetail", CardDetail, false).then(nodeDetail => {
                //             nodeDetail.setCardData(item.staticId, CardNodeState.CARD_NODE_STATE_OWN);
                //         });
                //     }
                // }
                /* zhibo+E@20230420 for <只要获得了金卡，就弹出来一个详情页面> */
                /* zhibo-E@20230421 for <策划说效果不好，又去掉了> */
                Role.Instance.RoleItemAtrr.updataItem(msg.updateItems);
            }
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateItemData, null);
        }, this);

        /* 同步角色金币 */
        Net.listenProtocol(proto.Ptl.SyncRoleGold, (buffer, ptl) => {
            let msg = proto.Msg_SyncRoleGold.decode(buffer);
            cc.log("SyncRoleGold (同步角色金币) : msg " + JSON.stringify(msg));
            if (msg != null) {
                Role.Instance.RoleData.gold = msg.gold;
            }
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateGold, null);
        }, this);

        /* 同步用户钻石 */
        Net.listenProtocol(proto.Ptl.SyncRoleDiamond, (buffer, ptl) => {
            let msg = proto.Msg_SyncRoleDiamond.decode(buffer);
            cc.log("SyncRoleDiamond (同步用户钻石) msg: " + JSON.stringify(msg));
            if (msg != null) {
                Role.Instance.RoleData.diamond = msg.diamond;
            }
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_updateDiamond, null);
        }, this);

        //角色的经验和等级
        Net.listenProtocol(proto.Ptl.SyncRoleExpAndLevel, (buffer, ptl) => {
            let msg = proto.Msg_SyncRoleExpAndLevel.decode(buffer);
            cc.log("SyncRoleExpAndLevel (角色的经验和等级) msg: " + JSON.stringify(msg));
            if (msg != null) {
                Role.Instance.RoleData.exp = msg.exp;
                Role.Instance.RoleData.level = msg.level;
            }
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateRoleExpAndLevel, null);
        }, this);


        /* 移除物品信息 */
        Net.listenProtocol(proto.Ptl.RemoveItemData, (buffer, ptl) => {
            let msg = proto.Msg_RemoveItemData.decode(buffer);
            cc.log("RemoveItemData (移除物品信息) msg: " + JSON.stringify(msg));
            if (msg != null) {
                Role.Instance.RoleItemAtrr.removeItem(msg.removeItemUuids);
            }
        }, this);

        /* 改变卡组 */
        Net.listenProtocol(proto.Ptl.ChangeDecksRsp, (buffer, ptl) => {
            let msg = proto.Msg_ChangeDecksRsp.decode(buffer)
            cc.log("ChangeDecksRsp (改变卡组) msg: " + JSON.stringify(msg));
            if (msg != null) {
                if (msg.result == proto.CommonErrorCode.Succeed) {
                    Role.Instance.RoleData.decks[msg.deckIndex].deckItems = msg.deckItems;
                    MainScene.Instance.refreshDeckLayer();
                }
            }
        }, this)

        /* 对时 */
        Net.listenProtocol(proto.Ptl.CheckServerUTCTime, function (buffer, ptl) {
            let msg = proto.Msg_CheckServerUTCTime.decode(buffer)
            cc.log("CheckServerUTCTime (对时) msg: " + JSON.stringify(msg));
            if (msg != null) {
                Role.Instance.makeClientToServerTimeOffset(msg.serverUTC);
            }
        }, this);

        /* 防沉迷 */
        Net.listenProtocol(proto.Ptl.PushPreventIndulge, function (buffer, ptl) {
            let msg = proto.Msg_PushPreventIndulge.decode(buffer)
            cc.log("PushPreventIndulge (防沉迷) msg: " + JSON.stringify(msg));
            if (msg != null) {
                switch (msg.type) {
                    case proto.Msg_PushPreventIndulge.PreventIndulgeType.PayNotAdult:
                        ShowTips("PreventIndulgeTypePayNotAdult")
                        break;
                    case proto.Msg_PushPreventIndulge.PreventIndulgeType.SpecialTime:
                    case proto.Msg_PushPreventIndulge.PreventIndulgeType.KickingOffLine:
                        PreventIndulge.bPreventIndulge = true
                        break;
                    default:
                        break;
                }
            }
        }, this);

        //跨天协议
        Net.listenProtocol(proto.Ptl.PushDailyRefresh, function (buffer, ptl) {
            let msg = proto.Msg_PushDailyRefresh.decode(buffer)
            cc.log("PushDailyRefresh (跨天协议) msg: " + JSON.stringify(msg));
            if (msg != null) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewDay, null);
            }
        }, this)

        /* 推送任务信息 */
        Net.listenProtocol(proto.Ptl.TaskPushTaskInfo, function (buffer, ptl) {
            let msg = proto.Msg_TaskPushTaskInfo.decode(buffer)
            cc.log("TaskPushTaskInfo (推送任务信息) msg: " + JSON.stringify(msg));
            if (msg != null) {
                let taskmap: Map<number, proto.ITaskData> = new Map<number, proto.ITaskData>()
                for (let i = 0; i < msg.tasks.length; i++) {
                    taskmap.set(msg.tasks[i].taskId, msg.tasks[i])
                }

                for (let [key, value] of Array.from(taskmap.entries())) {
                    //MainScene.taskPush.push(value)
                    MainScene.pushTask(value)
                }

                //更新task数据
                if (Role.Instance.taskData) {
                    let tasks = Role.Instance.taskData.dailyTasks
                    for (let [key, value] of taskmap.entries()) {
                        for (let j = 0; j < tasks.length; j++) {
                            if (value.taskId == tasks[j].taskId) {
                                Role.Instance.taskData.dailyTasks[j] = value
                                break
                            }
                        }
                    }
                }

                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShowTaskTips)
                //更新任务红点
                let battlelayer: BattleLayer = cc.director.getScene().getComponentInChildren(BattleLayer)
                if (battlelayer) {
                    battlelayer.setTaskBoxView()
                }
            }
        }, this)

        //实时推送彩虹任务的更新
        Net.listenProtocol(proto.Ptl.PushRainbowTaskUpdate, function (buffer, ptl) {
            let msg = proto.Msg_PushRainbowTaskUpdate.decode(buffer)
            cc.log("PushRainbowTaskUpdate (实时推送彩虹任务的更新) msg: " + JSON.stringify(msg));
            if (msg) {
                Role.Instance.RoleData.runningRainbowTask = msg.data;
                ManagerRainbowTask.getInstance().savePushRainbowTaskData(msg.data);
                MainScene.taskTypeList.push(TaskType.RAINBOW_TASK_TYPE);
                MainScene.sortTaskTypeList();
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRainbowTaskProgress, msg.data);
            }
        }, this);

        //监听推送彩虹任务轮换刷新消息
        Net.listenProtocol(proto.Ptl.PushRainbowTaskExpireRefresh, function (buffer, ptl) {
            let msg = proto.Msg_PushRainbowTaskExpireRefresh.decode(buffer)
            cc.log("PushRainbowTaskExpireRefresh (监听推送彩虹任务轮换刷新消息) msg: " + JSON.stringify(msg));
            if (msg) {
                //MainScene.taskPush.push(msg.runningTaskData);
                Role.Instance.RoleData.runningRainbowTask = { data: msg.runningTaskData, taskStarLv: kZeroNumber };
                ManagerRainbowTask.getInstance().savePushRainbowTaskData({ data: msg.runningTaskData, taskStarLv: kZeroNumber });
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRainbowTaskProgress, msg.runningTaskData);
            }
        }, this);

        //监听彩虹任务小红点【用于所有任务奖励都领完了，客户端无法判断小红点显示与否的】
        Net.listenProtocol(proto.Ptl.PushRainbowTaskRedDotStatus, function (buffer, ptl) {
            let msg = proto.Msg_PushRainbowTaskRedDotStatus.decode(buffer)
            cc.log("PushRainbowTaskRedDotStatus (推送彩虹任务红点状态) msg: " + JSON.stringify(msg));
            if (msg) {
                ManagerRainbowTask.getInstance().saveRainbowTaskOverState(msg.bHave);
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_RefreshRainbowRedDot, msg.bHave);
            }
        }, this);

        //监听加入联盟推送消息
        Net.listenProtocol(proto.Ptl.PushJoinOrExpelAllianceMsg, (buffer, ptl) => {
            let msg = proto.Msg_PushJoinOrExpelAllianceMsg.decode(buffer);
            cc.log("PushJoinOrExpelAllianceMsg (推送加入联盟或被踢出联盟的消息) msg: " + JSON.stringify(msg));
            if (msg) {
                AllianceJoinMsgManager.getInstance().saveMsg(msg.iconIdx, msg.name, msg.type);
            }
        }, this);

        //联盟数据同步推送
        Net.listenProtocol(proto.Ptl.SyncRoleAllianceData, (buffer, ptl) => {
            let msg = proto.Msg_SyncRoleAllianceData.decode(buffer);
            cc.log("SyncRoleAllianceData (同步个人联盟信息) msg: " + JSON.stringify(msg));
            if (msg) {
                setRoleAllianceData2(msg.allianceData);
            }
        }, this);

        //监听全局推送的支援消息
        Net.listenProtocol(proto.Ptl.PushSupportInfo, (buffer, ptl) => {
            let msg = proto.Msg_PushSupportInfo.decode(buffer);
            cc.log("PushSupportInfo (推送联盟支援信息) msg: " + JSON.stringify(msg));
            if (msg) {
                //请求人是自己才做处理
                if (msg.applicantID === Role.Instance.RoleData.id) {
                    MainScene.allianceSupportPushMsgList.push({
                        donorName: msg.donorName,
                        cardID: msg.cardID,
                        curGainSupportCnt: msg.curGainSupportCnt
                    });
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyDealSupportPushMsg);
                }
            }
        }, this);

        //监听联盟被踢消息
        Net.listenProtocol(proto.Ptl.PushAllianceExpelMember, (buffer, ptl) => {
            let msg = proto.Msg_PushAllianceExpelMember.decode(buffer);
            cc.log("PushAllianceExpelMember (推送成员被联盟驱逐) msg: " + JSON.stringify(msg));
            if (msg) {
                clearSelfAllianceInfo();
                FightFromWhichLayer.getInstance().DefaultEnterPageState = DefaultEnterPageType.FightType;
                RedDotManager.getInstance().CleanAllianceRedTip();
            }
        }, this);

        //监听推送联盟中战斗邀请消息
        Net.listenProtocol(proto.Ptl.PushAllianceFightInvite, (buffer, ptl) => {
            let msg = proto.Msg_PushAllianceFightInvite.decode(buffer);
            cc.log("PushAllianceFightInvite (推送联盟战斗邀请) msg: " + JSON.stringify(msg));
            if (!msg) {
                return;
            }
            if (msg.fightInvite.playerInfo.roleID === Role.Instance.RoleData.id) { /* 自己创建的房间 */
                Role.setRoomData(msg.fightInvite?.roomID, msg.fightInvite?.type, msg.fightInvite?.startTime) /* 玩家记录下自己创建的房间的信息 */
                showPopLayerV2("prefab/UIGameModelFriendCreateRoom", UIGameModelFriendCreateRoom, false).then(nodeDetail => {
                    nodeDetail.setRoom(msg);
                });
                return;
            }
            ManagerChatFightMsg.getInstance().insertFightInvitationRoomID(msg.fightInvite.roomID);
            wrapFightInvitationInfo(msg.fightInvite, msg.channel);
            RedDotManager.getInstance().UpdateRedDot(RedDotType.NewFightInvitation, true, msg.fightInvite.type);
        }, this);

        // //监听接受战斗邀请响应
        // Net.listenProtocol(proto.Ptl.AllianceFightAcceptRsp, (buffer, ptl) => {
        //     let msg = proto.Msg_AllianceFightAcceptRsp.decode(buffer);
        //     console.log("AllianceFightAcceptRsp (联盟战斗接受) msg: " + JSON.stringify(msg));
        //     if (msg && msg.result === proto.Msg_AllianceFightAcceptRsp.ErrorCode.Succeed) {
        //         SdkManager.Instance.resetInviteRoomID(); // 清理掉SDK中的
        //         //FightLoader.Instance.WaitingMatchChatFight(msg.type); /* 这句有问题，会导致前端一直转圈 */
        //         return;
        //     }
        //     SdkManager.Instance.resetInviteRoomID(); // 清理掉SDK中的
        //     ManagerChatFightMsg.getInstance().removeFightInvitationMsg(msg.roomID, msg.channel);
        // }, this);

        /* zhibo+S@20230529 for <新建一个协议，不再调用联盟相关的协议> */
        /* 监听“加入房间”响应 */
        Net.listenProtocol(proto.Ptl.JoinPrivateRoomRsp, (buffer, ptl) => {
            let msg = proto.Msg_JoinPrivateRoomRsp.decode(buffer);
            console.log("Msg_JoinPrivateRoomRsp (监听“加入房间”响应) msg: " + JSON.stringify(msg));
            if (msg && msg.Result === proto.Msg_JoinPrivateRoomRsp.ErrorCode.Succeed) {
                SdkManager.Instance.resetInviteRoomID(); // 清理掉SDK中的
                //FightLoader.Instance.WaitingMatchChatFight(msg.type); /* 这句有问题，会导致前端一直转圈 */
                //ManagerChatFightMsg.getInstance().removeFightInvitationMsg(msg.roomID, msg.channel);
                MainMessage._initCreatePromise = FightMsgManager.Instance.waitingMatchFight(proto.FightType.WorldChannelPvP);
                //cleanFightInvitationData(msg.fightStart.roomID, msg.fightStart.type, msg.channel);
                //wrapFightInfo(msg.fightStart, msg.channel);
                //this.checkCanUpdateNewMsg(true);
                setTimeout(() => {
                    FightLoader.Instance.LoadFightScene("ChessFightScene", MainMessage._initCreatePromise, proto.FightType.WorldChannelPvP);
                }, 0.5);
                return;
            }
            SdkManager.Instance.resetInviteRoomID(); // 清理掉SDK中的
        }, this);
        /* zhibo+E@20230529 for <新建一个协议，不再调用联盟相关的协议> */

        //监听推送联盟中战斗开始消息
        Net.listenProtocolUnique(proto.Ptl.PushAllianceFightStart, (buffer, ptl) => {
            let msg = proto.Msg_PushAllianceFightStart.decode(buffer);
            cc.log("PushAllianceFightStart (推送联盟战斗开始) msg: " + JSON.stringify(msg));
            if (!msg) {
                return;
            }
            SdkManager.Instance.resetInviteRoomID(); // 清理掉SDK中的
            MainMessage._initCreatePromise = FightMsgManager.Instance.waitingMatchFight(proto.FightType.WorldChannelPvP);
            cleanFightInvitationData(msg.fightStart.roomID, msg.fightStart.type, msg.channel);
            wrapFightInfo(msg.fightStart, msg.channel);
            this.checkCanUpdateNewMsg(true);
            setTimeout(() => {
                FightLoader.Instance.LoadFightScene("ChessFightScene", MainMessage._initCreatePromise, proto.FightType.WorldChannelPvP);
            }, 0.5);
        }, this);

        //监听推送联盟中战斗结束消息
        Net.listenProtocol(proto.Ptl.PushAllianceFightEnd, (buffer, ptl) => {
            let msg = proto.Msg_PushAllianceFightEnd.decode(buffer);
            cc.log("PushAllianceFightEnd (推送联盟战斗结束) msg: " + JSON.stringify(msg));
            if (!msg) {
                return;
            }
            wrapFightInfo(msg.fightEnd, msg.channel);
            this.checkCanUpdateNewMsg(true);
        }, this);

        //监听玩家上线时同步最近的联盟中战斗数据
        Net.listenProtocol(proto.Ptl.PushRecentlyAllianceFightInfo, (buffer, ptl) => {
            let msg = proto.Msg_PushRecentlyAllianceFightInfo.decode(buffer);
            cc.log("PushRecentlyAllianceFightInfo (推送联盟最近的战斗数据) msg: " + JSON.stringify(msg));
            if (!msg) {
                return;
            }

            let oldMsgCount = ManagerLocalChatMsg.getInstance().getLocalMsgCache(proto.ChatChannelType.AllianceChannel).length;
            for (let data of msg.fightData) {
                wrapFightInfo(data, proto.ChatChannelType.AllianceChannel);
            }

            for (let data of msg.fightInvite) {
                wrapFightInvitationInfo(data, proto.ChatChannelType.AllianceChannel);
            }

            let bNewMsg = ManagerLocalChatMsg.getInstance().getLocalMsgCache(proto.ChatChannelType.AllianceChannel).length > oldMsgCount;
            this.checkCanUpdateNewMsg(bNewMsg);
        }, this);

        //监听联盟战斗邀请取消消息
        Net.listenProtocol(proto.Ptl.PushCancelAllianceFightInvite, (buffer, ptl) => {
            let msg = proto.Msg_PushCancelAllianceFightInvite.decode(buffer);
            cc.log("PushCancelAllianceFightInvite (推送取消联盟战斗邀请) msg: " + JSON.stringify(msg));
            if (!msg) {
                return;
            }
            cleanFightInvitationData(msg.roomID, msg.type, msg.channel);
        }, this);

        //监听推送联盟中有无新申请加入信息
        Net.listenProtocol(proto.Ptl.PushAllianceApplyMessage, (buffer, ptl) => {
            let msg = proto.Msg_PushAllianceApplyMessage.decode(buffer);
            cc.log("PushAllianceApplyMessage (推送联盟申请消息变化) msg: " + JSON.stringify(msg));
            if (!msg) {
                return;
            }
            RedDotManager.getInstance().UpdateRedDot(RedDotType.AllianceApplyInfo, msg.haveMessage);
        }, this);

        //监听聊天信息
        Net.listenProtocol(proto.Ptl.AllianceMsgPush, (buffer, ptl) => {
            let msg = proto.Msg_AllianceMsgPush.decode(buffer);
            cc.log("AllianceMsgPush (联盟内部消息推送) msg: " + JSON.stringify(msg));
            if (msg) {
                this.checkCanUpdateNewMsg(true);
            }
        }, this);

        //监听推送联盟首领7日不上线被替换的消息
        Net.listenProtocol(proto.Ptl.PushAllianceLeaderChange, (buffer, ptl) => {
            let msg = proto.Msg_PushAllianceLeaderChange.decode(buffer);
            cc.log("PushAllianceLeaderChange (推送联盟首领7日不上线被替换消息) msg: " + JSON.stringify(msg));
            if (!msg) {
                return;
            }
            this._bPopAllianceLeaderReplaceMsg = true;
        }, this);


        //监听新邮件消息
        Net.listenProtocol(proto.Ptl.PushNewMailTip, (buffer, ptl) => {
            let msg = proto.Msg_PushNewMailTip.decode(buffer);
            cc.log("PushNewMailTip (推送有新邮件提示) msg: " + JSON.stringify(msg));
            if (msg) {
                RedDotManager.getInstance().UpdateRedDot(RedDotType.NewMail, msg.bNewMail);
            }
        }, this);

        //监听推送好友战斗邀请消息
        Net.listenProtocol(proto.Ptl.PushInvitationFriendFight, (buffer, ptl) => {
            let msg = proto.Msg_PushInvitationFriendFight.decode(buffer);
            cc.log("PushInvitationFriendFight (推送好友战斗邀请) msg: " + JSON.stringify(msg));
            if (msg) {
                if (null === MainScene.current_friend_fight_invitation) {
                    MainScene.friendFightInvitationPushMsgList.push(msg.fightInvitation);
                    MainScene.current_friend_fight_invitation = msg.fightInvitation;
                    RedDotManager.getInstance().UpdateRedDot(RedDotType.NewFightInvitation, true, msg.fightInvitation.type);
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyNewFriendFightInvitation);
                }
            }
        }, this);

        //监听推送新好友申请消息
        Net.listenProtocol(proto.Ptl.PushNewFriendApplyInfo, (buffer, ptl) => {
            let msg = proto.Msg_PushNewFriendApplyInfo.decode(buffer);
            cc.log("PushNewFriendApplyInfo (推送新好友申请) msg: " + JSON.stringify(msg));
            if (msg) {
                RedDotManager.getInstance().UpdateRedDot(RedDotType.NewFriendApply, msg.bNewFriendApply);
            }
        }, this);

        //监听添加好友消息
        Net.listenProtocol(proto.Ptl.AddFriendRsp, (buffer, ptl) => {
            let msg = proto.Msg_AddFriendRsp.decode(buffer);
            cc.log("AddFriendRsp (添加好友) msg: " + JSON.stringify(msg));
            if (msg && msg.result === proto.Msg_AddFriendRsp.ErrorCode.Succeed) {
                ShowTips("AddFriendSuccess");
                return;
            }
            proto.Msg_AddFriendRsp.ErrorCode.ReachUpperLimit === msg.result && ShowTips("FriendCountMaxLimit");
            proto.Msg_AddFriendRsp.ErrorCode.RoleInexistence === msg.result && ShowTips("FriendInexistence");
            proto.Msg_AddFriendRsp.ErrorCode.AlreadyFriend === msg.result && ShowTips("AlreadyIsFriend");
        }, this);

        //监听接受战斗邀请响应
        Net.listenProtocol(proto.Ptl.InvitationFriendFightRsp, (buffer, ptl) => {
            let msg = proto.Msg_InvitationFriendFightRsp.decode(buffer);
            cc.log("InvitationFriendFightRsp (邀请好友战斗) msg: " + JSON.stringify(msg));
            if (!msg) {
                return;
            }

            if (proto.Msg_InvitationFriendFightRsp.ErrorCode.RefuseInvite === msg.result) {
                // console.log("zhibo+@20230522 Msg_CancelMatchFightReq(1)")
                // let param = new proto.Msg_CancelMatchFightReq();
                // Net.Send(proto.Ptl.CancelMatchFightReq, param);
                // cc.log("发送取消匹配协议");
            }
        }, this);

        //监听好友战斗邀请取消推送消息
        Net.listenProtocol(proto.Ptl.PushCancelFriendFight, (buffer, ptl) => {
            let msg = proto.Msg_PushCancelFriendFight.decode(buffer);
            cc.log("PushCancelFriendFight (推送好友战斗取消) msg: " + JSON.stringify(msg));
            if (msg) {
                //取消的战斗房间号与当前的房间号一样才正在从客户端取消
                if (MainScene.current_friend_fight_invitation && (msg.roomID === MainScene.current_friend_fight_invitation.roomID)) {
                    RedDotManager.getInstance().UpdateRedDot(RedDotType.NewFightInvitation, false, MainScene.current_friend_fight_invitation.type);
                    (MainScene.current_friend_fight_invitation = null);
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCleanFriendFightInvitation);
                }
            }
        }, this);

        //监听同意好友申请消息
        Net.listenProtocol(proto.Ptl.OperatorFriendApplyRsp, (buffer, ptl) => {
            let msg = proto.Msg_OperatorFriendApplyRsp.decode(buffer);
            cc.log("OperatorFriendApplyRsp (操作好友申请) msg: " + JSON.stringify(msg));
            if (msg && msg.result == proto.Msg_OperatorFriendApplyRsp.ErrorCode.Succeed && msg.bAgree) {
                ManagerNewFriend.getInstance().insertNewFriend(msg.newFriendInfo.baseInfo.roleID);
                return;
            }
        }, this);

        //监听好友变更消息
        Net.listenProtocol(proto.Ptl.ChangeFriendInfo, (buffer, ptl) => {
            let msg = proto.Msg_ChangeFriendInfo.decode(buffer);
            cc.log("ChangeFriendInfo (变更好友消息[添加和删除都要处理]) msg: " + JSON.stringify(msg));
            if (msg) {
                !msg.bDelete && ManagerNewFriend.getInstance().insertNewFriend(msg.friendInfo.baseInfo.roleID);
            }
        }, this);

        //监听回到游戏事件
        cc.game.on(cc.game.EVENT_SHOW, () => {
            cc.log("EVENT_SHOW 进入游戏");
            CaiHongData.login()
            CaiHongData.role_login()
            if(isWechat()){
                SdkManager.Instance.getWXLaunchOptionsSync();
                let rid = SdkManager.Instance.getInviteRoomID()
                console.log("MainScene.ts : onLoad() + 3 roomID: " + rid);
                if( 0 != rid){
                    console.log("MainScene.ts : onLoad() + 4")
                    // //TODO: 直接加入房间
                    // MainMessage._initCreatePromise = FightMsgManager.Instance.waitingMatchFight(proto.FightType.WorldChannelPvP);
                    // let msg = new proto.Msg_AllianceFightAcceptReq();
                    // msg.type = proto.FightType.WorldChannelPvP;
                    // msg.roomID = Number(rid);
                    // msg.channel =proto.ChatChannelType.WorldChannel;
                    // Net.Send(proto.Ptl.AllianceFightAcceptReq, msg);
                }
            }
        }, this)

        //监听退出游戏事件
        cc.game.on(cc.game.EVENT_HIDE, function () {
            cc.log("EVENT_HIDE： 退出游戏");
            //聊天消息要保存在本地： 游戏过程中的聊天数据都常驻内存中，退出游戏进行IO写操作
            ManagerLocalChatMsg.getInstance().destroy();
            ManagerChatFightMsg.getInstance().destroyAllData();
            ManagerPrivateChatMsg.getInstance().destroy();
            ManagerNotice.getInstance().destroy();
            Native2JsInterface.getInstance().destroy();
            CaiHongData.logout()
            CaiHongData.role_logout()
            SdkManager.Instance.setInviteRoomID(0);
        });

        //封解时间
        Net.listenProtocol(proto.Ptl.PushPveForbidInfo, function (buffer, ptl) {
            let msg = proto.Msg_PushPveForbidInfo.decode(buffer)
            cc.log("PushPveForbidInfo (推送封禁信息) msg: " + JSON.stringify(msg));
            if (msg != null) {
                Role.Instance.beReportedEndUTC = msg.unsealUTC
            }
        }, this);

        //监听七日签到登录活动消息推送
        Net.listenProtocol(proto.Ptl.PushSevenDaySignInData, (buffer, ptl) => {
            let msg = proto.Msg_PushSevenDaySignInData.decode(buffer);
            cc.log("PushSevenDaySignInData (登录后推送七日登录活动数据) msg: " + JSON.stringify(msg));
            if (msg) {
                ManagerSevenSignInData.getInstance().saveSevenSignInInfo(msg.actDataList,
                    msg.startTime,
                    msg.overTimes,
                    msg.curLoginDay);
            }
        }, this);

        //监听格古特任务推送消息
        Net.listenProtocol(proto.Ptl.PushGroutTaskUpate, (buffer, ptl) => {
            let msg = proto.Msg_PushGroutTaskUpate.decode(buffer);
            cc.log("PushGroutTaskUpate (实时推送格古特任务的更新) msg: " + JSON.stringify(msg));
            if (msg) {
                ManagerGroutTaskInfo.getInstance().saveTaskData(msg.taskData, msg.currentStep, msg.bLoginPush, msg.bFinish);
                let bValid = !msg.bLoginPush && (msg.taskData ? msg.taskData.score > kZeroNumber : false);
                bValid && MainScene.taskTypeList.push(TaskType.GROUT_TASK_TYPE);
                bValid && MainScene.sortTaskTypeList();
                bValid && Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyGroutTaskUpdate);
            }
        }, this);


        /************************************** 支付相关开始 *************************************************/
        //支付预处理
        Net.listenProtocol(proto.Ptl.PayStartRsp, (buffer, ptl) => {
            let msg = proto.Msg_PayStartRsp.decode(buffer);
            cc.log("MainMessage.ts : PayStartRsp(支付预处理) msg: " + JSON.stringify(msg))
            if (msg && proto.Msg_PayStartRsp.ErrorCode.Ok === msg.errCode) {
                let rechargeTabData = tab.Data.RechargeTableByID.getValue(msg.rechargeID);
                if (isValidObj(rechargeTabData)) {
                    this._rechargeType = rechargeTabData.GoodsType;
                    this._rechargeID = msg.rechargeID;
                }

                this._orderID = msg.orderID;

                switch (SdkManager.Instance.getChannelType()) {
                    case tab.ChannelType.ChannelType_None:
                        let endReq = new proto.Msg_PayEndReq()
                        endReq.orderID = msg.orderID;
                        endReq.rechargeID = msg.rechargeID;
                        endReq.dev = true; /* 表示开发环境 */
                        Net.Send(proto.Ptl.PayEndReq, endReq)
                        break;
                    default:
                        SdkManager.Instance.Pay(msg.rechargeID,
                            msg.orderID,
                            Role.Instance.RoleData.uid,
                            Role.Instance.RoleData.name,
                            Role.Instance.RoleData.level,
                            LoginData.Instance.loginGroup,
                            LoginData.Instance.loginName,
                            () => {
                                let endReq = new proto.Msg_PayEndReq()
                                endReq.orderID = msg.orderID;
                                endReq.rechargeID = msg.rechargeID;
                                endReq.dev = false;
                                Net.Send(proto.Ptl.PayEndReq, endReq)
                            }
                        );
                        break;
                }
                return;
            }

            proto.Msg_PayStartRsp.ErrorCode.Pending === msg.errCode && ShowTips("PayOrderPending");
            //proto.Msg_PayStartRsp.ErrorCode.Limited   === msg.errCode && ShowTips("PayOrderLimited");
            proto.Msg_PayStartRsp.ErrorCode.Limited === msg.errCode && ShowTips("UnableToBuy");
            proto.Msg_PayStartRsp.ErrorCode.Forbidden === msg.errCode && ShowTips("ForbiddenPayOfAccount");
            proto.Msg_PayStartRsp.ErrorCode.Other === msg.errCode && ShowTips("PayOtherError");

            //如果是一元购不能购买，通知关闭入口
            const OneYuanRechargeID = 4002;
            if (msg.rechargeID == OneYuanRechargeID) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedOneYuan2Buy);
            }
        }, this);

        //正式支付协议返回
        Net.listenProtocol(proto.Ptl.PayEndRsp, (buffer, ptl) => {
            let msg = proto.Msg_PayEndRsp.decode(buffer);
            cc.log("MainMessage.ts : PayEndRsp(正式支付) msg: " + JSON.stringify(msg))
            if (msg) {
                if (this._rechargeType === tab.RechargeGoodsType.RechargeGoodsType_ShopDiamond) {
                    //上报打点数据
                    //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.RechargeDiamond);/* zhibo-@20230410 for <删除打点> */
                    //上报腾讯优选支付事件
                    Native2JsInterface.getInstance().reportedPayEvent(this._rechargeID);
                }
            }
        }, this);

        //微信支付预支付
        Net.listenProtocol(proto.Ptl.PrePayWechatRsp, (buffer, ptl) => {
            let msg = proto.Msg_PrePayWechatRsp.decode(buffer);
            cc.log("PrePayWechatRsp (微信支付预支付返回) msg: " + JSON.stringify(msg));
            if (msg && msg.type == proto.GamePublishChannelType.TencentYouLiangHui) {
                let self = this;
                Native2JsInterface.getInstance().pullWxPay(msg.prepayID, msg.timestamp, msg.noncestr, msg.sign, () => {
                    let endReq = new proto.Msg_PayEndReq()
                    endReq.orderID = self._orderID;
                    endReq.rechargeID = self._rechargeID;
                    endReq.dev = false;
                    Net.Send(proto.Ptl.PayEndReq, endReq);
                });
            }
        }, this);

        /************************************** 支付相关结束 *************************************************/

        //登录推送当日分享类型有无分享过
        Net.listenProtocol(proto.Ptl.PushSharedOfToday, (buffer, ptl) => {
            let msg = proto.Msg_PushSharedOfToday.decode(buffer);
            cc.log("PushSharedOfToday (登录推送分享类型) msg: " + JSON.stringify(msg));
            if (msg) {
                //ManagerShareType.getInstance().initShareTypeData(msg.sharedList);
                ManagerShareType.getInstance().initShareCountData(msg.sharedList);
            }
        }, this);

        //分享领取奖励协议
        Net.listenProtocol(proto.Ptl.AfterSharedRewardRsp, (buffer, ptl) => {
            let msg = proto.Msg_AfterSharedRewardRsp.decode(buffer);
            cc.log("AfterSharedRewardRsp (抽卡、pvp、pve等分享给予奖励消息) msg: " + JSON.stringify(msg));
            if (msg && msg.result === proto.Msg_AfterSharedRewardRsp.ErrorCode.Succeed) {
                popRewardLayer_Ex(msg.reward, null);
                //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.ClickShareFirst);/* zhibo-@20230410 for <删除打点> */
                ManagerShareType.getInstance().initShareCountData(msg.sharedList);
                return;
            }

            proto.Msg_AfterSharedRewardRsp.ErrorCode.AlreadyReceivedReward === msg.result && ShowTips("AleadyGet");
            proto.Msg_AfterSharedRewardRsp.ErrorCode.NoneFirstWinOfToday === msg.result && ShowTips("NotFirstWindOfToday");

        }, this);

        /*  */
        cc.director.on("scope.userInfo", function () {
            this.sendWechatName()
        }, this);


        //监听聊天信息推送消息
        //监听消息推送
        Net.listenProtocol(proto.Ptl.ChatMsgPush, (buffer, ptl) => {
            let msg = proto.Msg_ChatMsgPush.decode(buffer);
            cc.log("ChatMsgPush (聊天内部消息推送) msg: " + JSON.stringify(msg));
            if (msg) {
                for (let data of msg.msg) {
                    if (msg.channel != proto.ChatChannelType.PrivateChannel) {
                        ManagerLocalChatMsg.getInstance().pushChatMsg(data, msg.channel, true, this._bSortChatMsg);
                    } else {
                        ManagerPrivateChatMsg.getInstance().pushChatMsg(data, true, this._bSortChatMsg);
                    }
                }

                if (!this._bSortChatMsg) {
                    sortChatMsgList(ManagerLocalChatMsg.getInstance().getLocalMsgCache(proto.ChatChannelType.WorldChannel),
                        proto.ChatChannelType.WorldChannel);

                    sortChatMsgList(ManagerLocalChatMsg.getInstance().getLocalMsgCache(proto.ChatChannelType.AllianceChannel),
                        proto.ChatChannelType.AllianceChannel);

                    ManagerPrivateChatMsg.getInstance().sortAllPrivateChatMsg();
                    this._bSortChatMsg = true;
                }

                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateChatViewList, true);
            }
        }, this);

        /* 获取胜利宝箱信息 */
        Net.listenProtocol(proto.Ptl.VictoryBoxInfoRsp, (buffer:Uint8Array, ptl:number)=>{
            let msg = proto.Msg_VictoryBoxInfoRsp.decode(buffer);
            cc.log("VictoryBoxInfoRsp (获取胜利宝箱信息) msg: " + JSON.stringify(msg));
            if(msg){
                /* 给用户设置次数 */
                Role.Instance.VictoryBoxRewardCnt = msg.RewardCount;
                Role.Instance.VictoryBoxRefuseCnt = msg.RefuseCount;
            }
        }, this);

        /* 胜利宝箱拒绝信息 */
        Net.listenProtocol(proto.Ptl.VictoryBoxRefuseRsp, (buffer:Uint8Array, ptl:number)=>{
            let msg = proto.Msg_VictoryBoxRefuseRsp.decode(buffer);
            cc.log("VictoryBoxRefuseRsp (胜利宝箱拒绝信息) msg: " + JSON.stringify(msg));
            if(msg){
                /* 给用户设置次数 */
                Role.Instance.VictoryBoxRewardCnt = msg.RewardCount;
                Role.Instance.VictoryBoxRefuseCnt = msg.RefuseCount;
            }
        }, this);

        /* 创建私有房间消息 */
        Net.listenProtocol(proto.Ptl.CretePrivateRoomRsp, (buffer:Uint8Array, ptl:number)=>{
            let msg = proto.Msg_CretePrivateRoomRsp.decode(buffer);
            cc.log("CreteRoomRsp (创建房间消息) msg: " + JSON.stringify(msg));
            if (!msg) {
                return;
            }
            if (msg.roleId === Role.Instance.RoleData.id) { /* 自己创建的房间 */
                Role.setRoomData(msg.roomID) /* 玩家记录下自己创建的房间的信息 */
                showPopLayerV2("prefab/UIGameModelFriendCreateRoom", UIGameModelFriendCreateRoom, false).then(nodeDetail => {
                    nodeDetail.setRoom(msg);
                });
                return;
            }
            //ManagerChatFightMsg.getInstance().insertFightInvitationRoomID(msg.fightInvite.roomID);
            //wrapFightInvitationInfo(msg.fightInvite, msg.channel);
            //RedDotManager.getInstance().UpdateRedDot(RedDotType.NewFightInvitation, true, msg.fightInvite.type);
        }, this);
    }

    sendWechatName(){
        if (SdkManager.Instance.isWechat()){
            SdkManager.Instance.getWechatName().then(info => {
                if (info.nickName == "" || info.avatarUrl == ""){
                    return
                }
    
                LoginData.Instance.wechatNickname = info.nickName;
                LoginData.Instance.wechatAvatarUrl = info.avatarUrl;
    
                let rsp = new proto.Msg_SetWechatUserInfo()
                rsp.wechatNickname = info.nickName;
                rsp.wechatAvatarUrl = info.avatarUrl;
                Net.Send(proto.Ptl.SetWechatUserInfo, rsp)
    
                Role.Instance.setWegameInfo(info)
            })
        }
        
    }

    /* 检测是否更新为新聊天消息 */
    private checkCanUpdateNewMsg(bNewMsg: boolean) {
        /*if(MainScene && MainScene.Instance){
            bNewMsg = !MainScene.Instance.checkCurrentIsAlliancePage();
        }
        RedDotManager.getInstance().UpdateRedDot(RedDotType.NewChatMsg, bNewMsg);*/
    }

    /*  */
    public setPopAllianceLeaderReplace(bPop: boolean) {
        this._bPopAllianceLeaderReplaceMsg = bPop;
    }

    /*  */
    public getPopAllianceLeaderReplace() {
        return this._bPopAllianceLeaderReplaceMsg;
    }

    static set isComeFromUIWin(b:boolean){
        
        MainScene.isComeFromUIWin = b;
    }
    static get isComeFromUIWin(){
        return MainScene.isComeFromUIWin;
    }

}

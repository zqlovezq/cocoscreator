
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { checkRedDotOfApplyList, checkRedDotOfCanSupport, checkStringIsValid, DefaultEnterPageType, FightFromWhichLayer, IPushGlobalSupportInfo, setRoleAllianceData } from "../Alliance/AllianceCommonInterface";
import AllianceJoinMsgManager from "../Alliance/AllianceJoinMsgManager";
import PushAllianceSupportInfo from "../Alliance/PushAllianceSupportInfo";
import PushAllianceTip from "../Alliance/PushAllianceTip";
import ChallengeDeck from "../Challenge/ChallengeDeck";
import { kOneNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import PushFriendFightInvitation from "../Common/PushFriendFightInvitation";
import RedDotManager, { RedDotType } from "../Common/ReddotManager";
import Role from "../Common/Role";
import DeckLayer from "../DeckLayer/DeckLayer";
import ManagerGroutTaskInfo from "../GroutTask/ManagerGroutTaskInfo";
import GuideController from "../Guide/GuideController";
import LoginData from "../Login/LoginData";
import ManagerRainbowTask from "../RainbowTask/ManagerRainbowTask";
import PushTaskTip, { TaskType } from "../Task/PushTaskTip";
import {showPopLayerV2, showPopLayer, getServerUtcTime, LoadResAsync, ShowTips } from "../Utils/GameUtils";
import { PlaySound } from "../Utils/Sound";
import NavigationButton from "./NavigationButton";
import teamMembers from "./TeamMembers";
import { checkFunctionIsOpen } from "../Common/CommonInterface";
import MainMessage from "../Common/MainMessage";
import SdkManager from "../Utils/SdkManager";

const { ccclass, property } = cc._decorator;

enum NodeZInder {
    Hide,
    Bg,
    Show,
}

export enum NodeLayerName {
    ShopLayer = "ShopLayer",
    DeckLayer = "DeckLayer",
    BattleLayer = "BattleLayer",
    Alliance = "AllianceLayer",
    ChallengLayer = "ChallengeLayer",
}

@ccclass
export default class MainScene extends cc.Component {

    @property(cc.Prefab)
    scrollNoticeNode: cc.Prefab = null

    @property(cc.Node)
    navigationNode: cc.Node = null;

    protected navigation: NavigationButton = null;

    @property(cc.Node)
    layerContainer: cc.Node = null;

    @property(cc.Node)
    nodeDeck: cc.Node = null;

    @property(cc.Node)
    nodeBattle: cc.Node = null;

    @property(cc.Node)
    nodeShop: cc.Node = null;

    @property(cc.Node)
    nodeAlliance: cc.Node = null;

    @property(cc.Node)
    nodeChallenge: cc.Node = null

    @property(cc.Node)
    roleinfo: cc.Node = null;

    @property(cc.Node)
    nodeBg: cc.Node = null;

    @property(cc.Node)
    pushtasktipsnode: cc.Node = null

    @property(cc.Node)
    cuspage_view_node: cc.Node = null

    private cuspage_view = null

    @property(cc.Node)
    shopnodetemp: cc.Node = null;

    @property(cc.Node)
    node_alliance_temp: cc.Node = null;

    @property(cc.Node)
    node_push_join_alliance: cc.Node = null;

    @property(cc.Node)
    node_push_alliance_support: cc.Node = null;

    @property(cc.Node)
    node_lighting_effect: cc.Node = null;

    @property(cc.Node)
    node_push_friend_fight: cc.Node = null;

    @property(cc.Node)
    SynUpdateTeam: cc.Node = null;

    @property(cc.Node)
    guideAnim: cc.Node = null;
    
    @property(cc.RichText)
    guide_txt: cc.RichText = null;

    private guideCb: Function = null;
    private navibtnPos: number = null

    protected layerMap: tab.Dictionary<NodeLayerName, cc.Node> = new tab.Dictionary<NodeLayerName, cc.Node>();
    protected taskAnifinish: boolean = true
    protected bjumpBattle: boolean = true;
    private _bInitEnterPage: boolean = true;

    public static scrollNotice: cc.Node = null
    public static isFromUIWin: boolean = false; /* 是否是从"胜利结算"页面跳转过来的,为了处理胜利宝箱而添加的一个静态变量 */
    private static taskPush: proto.ITaskData[] = []

    public static allianceSupportPushMsgList: IPushGlobalSupportInfo[] = [];
    public static friendFightInvitationPushMsgList: proto.IFriendFightInvitationData[] = [];
    public static current_friend_fight_invitation: proto.IFriendFightInvitationData = null;
    private _default_enterpage_map: Map<DefaultEnterPageType, Function> = new Map<DefaultEnterPageType, Function>();
    public static taskTypeList: TaskType[] = [];

    protected static _ins: MainScene = null;

    static get Instance(): MainScene {
        return MainScene._ins;
    }

    static set isComeFromUIWin(b:boolean){
        MainScene.isFromUIWin = b;
    }
    static get isComeFromUIWin(){
        return MainScene.isFromUIWin;
    }

    /* 去重：同类型的任务，只保留最后一个(zhibo+S@20230421) */
    public static pushTask(t: proto.ITaskData) {
        let findRet = false; /*  */
        let arr = MainScene.taskPush;

        for (let i = 0; i < arr.length; i++) {
            if (t.taskId === arr[i].taskId) {
                findRet = true; // 找到了
                arr[i] = t; // 直接替换
                break;
            }
        }

        if (!findRet) { /* 没找到,就直接插入 */
            MainScene.taskPush.push(t)
        }
    }

    /* 给任务类型列表排序【普通 > 格古特 > 彩虹】*/
    static sortTaskTypeList() {
        if (!MainScene.taskTypeList || MainScene.taskTypeList.length < kTwoNumber) {
            return;
        }

        MainScene.taskTypeList.sort((data1: TaskType, data2: TaskType): number => {
            return Number(data1) - Number(data2);
        });
    }

    getRoleInfo(): cc.Node {
        return this.roleinfo
    }

    getBattleNode(): cc.Node {
        return this.nodeBattle;
    }

    /* 取得底部卡库按钮节点 */
    getBottomNodeOfDeck() {
        if (this.navigation) {
            return this.navigation.getDeckToggleNode();
        }
        return null;
    }

    /*  */
    onTouchStart() {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_HideRoleInfoResourcesTips, null)
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
    }

    /* showShopLayer */
    public showShopLayer() {
        this.showNodeLayer(NodeLayerName.ShopLayer)
    }

    /*  */
    onLoad() {
        console.log("MainScene.ts : onLoad()")
        MainScene._ins = this;
        this.cuspage_view = this.cuspage_view_node.getComponent("NestableScrollView_Outer");

        this.node_lighting_effect.active = true;

        this.navibtnPos = this.navigationNode.zIndex

        this.pushtasktipsnode.removeFromParent(false)
        let pos = this.pushtasktipsnode.getPosition()
        cc.director.getScene().addChild(this.pushtasktipsnode, cc.macro.MAX_ZINDEX - 100)
        this.pushtasktipsnode.setPosition(pos)

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, true)
        this.layerMap.setValue(NodeLayerName.DeckLayer, this.nodeDeck);
        this.layerMap.setValue(NodeLayerName.BattleLayer, this.nodeBattle);
        this.layerMap.setValue(NodeLayerName.ShopLayer, this.nodeShop);
        this.layerMap.setValue(NodeLayerName.Alliance, this.nodeAlliance);
        this.layerMap.setValue(NodeLayerName.ChallengLayer, this.nodeChallenge)
        this.navigation = this.navigationNode.getComponentInChildren(NavigationButton);

        Net.listenLoaclMessage(LOCAL_MESSAGE.GUIDE_MAIN, (step: number) => {
            if(step!==0){
                this.guideAnim.active = false;
                if(this.guideCb){
                    this.guideCb()
                }
            }
        }, this)

        this.navigation.setBattleCallback(() => {
            this.showNodeLayer(NodeLayerName.BattleLayer);
            /* 同步更新一下Team */
            let teamTs = this.SynUpdateTeam.getComponent(teamMembers);
            teamTs.refreshUITeam();
        });

        this.navigation.setDeckCallback(() => {
            this.showNodeLayer(NodeLayerName.DeckLayer);
            let teamTs = this.nodeDeck.getComponent(DeckLayer);
            teamTs.refreshUITeam();
        })

        this.navigation.setShopCallback(() => {
            this.showNodeLayer(NodeLayerName.ShopLayer)
        });

        this.navigation.setAllianceCallback(() => {
            this.showNodeLayer(NodeLayerName.Alliance);
        });

        this.navigation.setChanllengeCallback(() => {
            this.showNodeLayer(NodeLayerName.ChallengLayer)
        })

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShowNavigationNode, (show) => {
            this.navigationNode.zIndex = show ? 999 : -99
        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_InitDeckLayer, (param: any) => {
            this.scheduleOnce(() => {
                if (this.layerMap.getValue(NodeLayerName.DeckLayer).active == false) {
                    this.layerMap.getValue(NodeLayerName.DeckLayer).active = true;
                }
            }, 1);
        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShowTaskTips, (param) => {
            if (this.taskAnifinish) {
                this.showTaskTips()
            }
        }, this);

        //监听彩虹任务的推送消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRainbowTaskProgress, (param: any) => {
            if (this.taskAnifinish) {
                this.showTaskTips(TaskType.RAINBOW_TASK_TYPE);
            }
        }, this);

        //监听格古特任务的推送消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyGroutTaskUpdate, (param: any) => {
            if (this.taskAnifinish) {
                this.showTaskTips(TaskType.GROUT_TASK_TYPE);
            }
        }, this);

        //监听处理联盟支援推送消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyDealSupportPushMsg, (param) => {
            this.dealAllianceSupportPushMsg();
        }, this);

        //监听新的好友战斗邀请消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyNewFriendFightInvitation, (param) => {
            this.disposeFriendFightInvitationPushMsg();
        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.EnablePageViewTouch, param => {
            this.cuspage_view.setTouchEnabled(param)
        }, this)

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.GuideEnablePageViewEvent, param => {
            this.cuspage_view.setTouchEnabled(param)
            this.cuspage_view.setHorMoveEnabled(param)
        }, this)

        //监听加入联盟消息
        Net.listenProtocol(proto.Ptl.JoinAllianceRsp, (buffer, ptl) => {
            let msg = proto.Msg_JoinAllianceRsp.decode(buffer);
            if (msg) {
                if (msg.result === proto.Msg_JoinAllianceRsp.ErrorCode.Succeed) {
                    Role.Instance.RoleData.allianceData.PostRank = tab.AlliancePositionType.AlliancePositionType_Member;
                    setRoleAllianceData(msg.allianceInfo.baseInfo);
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateMainPageAllianceName);
                }
            }
        }, this);

        //监听加入联盟推送消息
        Net.listenProtocol(proto.Ptl.PushJoinOrExpelAllianceMsg, (buffer, ptl) => {
            let msg = proto.Msg_PushJoinOrExpelAllianceMsg.decode(buffer);
            if (msg) {
                let layerTip = this.node_push_join_alliance.getComponent(PushAllianceTip);
                if (layerTip) {
                    layerTip.setView(msg.iconIdx, msg.name, msg.type);
                    //layerTip.setCallback(()=>{this.showTaskTips()})
                }
            }
        }, this);

        //监听联盟被踢消息
        Net.listenProtocol(proto.Ptl.PushAllianceExpelMember, (buffer, ptl) => {
            let msg = proto.Msg_PushAllianceExpelMember.decode(buffer);
            if (msg) {
                ShowTips("BeExpelAllianceTip");
            }
        }, this);

        /* 复制阵容 */
        Net.listenProtocol(proto.Ptl.CopyDeckRsp, function (buffer, ptl) {
            let msg = proto.Msg_CopyDeckRsp.decode(buffer)
            if (msg != null) {
                if (msg.result == proto.Msg_CopyDeckRsp.ErrorCode.Succeed) {
                    ShowTips("CopyTeamSuccess");
                    let deckindex = msg.deckIndex
                    // Role.Instance.RoleData.decks[deckindex].lord = Role.Instance.RoleItemAtrr.getItemByStaticID(msg.lordData.staticId).id
                    // Role.Instance.RoleData.decks[deckindex].talent = msg.talent
                    for (let i = 0; i < msg.DeckData.length; i++) {
                        Role.Instance.RoleData.decks[deckindex].deckItems[i] = Role.Instance.RoleItemAtrr.getItemByStaticID(msg.DeckData[i].staticId).id
                    }

                    //通知服务器切换阵容
                    let msg1 = new proto.Msg_ChangeTeamIndexReq();
                    msg1.deckIndex = msg.deckIndex
                    Net.Send(proto.Ptl.ChangeTeamIndexReq, msg1);

                    Role.Instance.DeckIndex = msg.deckIndex
                    this.nodeDeck.getComponent(DeckLayer).selectTeam(msg.deckIndex);
                    this.SynUpdateTeam.getComponent(teamMembers).selectTeam(msg.deckIndex);
                }
            }
        }, this)

        /* 初始化默认进入页面的映射 */
        this._default_enterpage_map.set(DefaultEnterPageType.FightType, () => {
            this.navigation.onClickBattle(false);
        });

        this._default_enterpage_map.set(DefaultEnterPageType.ChallengeType, () => {
            this.navigation.onClickActivity();
        });

        this._default_enterpage_map.set(DefaultEnterPageType.HeroType, () => {
            this.navigation.checkDeck();
        });

        this._default_enterpage_map.set(DefaultEnterPageType.ShopType, () => {
            this.navigation.onClickShop();
        });

        this._default_enterpage_map.set(DefaultEnterPageType.SocialType, () => {
            this.navigation.checkAlliance();
        });

        this.cuspage_view.node.on("scrolling", () => {
            if (!Role.Instance.IsGuideFinished()) { return; }
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCleanWatchTime);
            this.checkPageVisible()
        }, this);

        this.cuspage_view.node.on("scroll-ended", () => {
            this.checkPageVisible()
        }, this);

        /***********************此处只是临时用于联盟申请小红点逻辑  后面小红点统一处理要删掉 ************************/
        //监听联盟查询信息
        Net.listenProtocol(proto.Ptl.QueryAllianceInfoRsp, (buffer, ptl) => {
            let msg = proto.Msg_QueryAllianceInfoRsp.decode(buffer);
            if (msg) {
                if (msg.result === proto.CommonErrorCode.Succeed) {
                    checkRedDotOfApplyList(msg.allianceInfo.applyInfo.length);
                }
            }
        }, this);

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_ResumeDeckLayerDefault, (param: any) => {
            this.checkPageVisible();
        }, this);
        /**************************************************************************************************************/

        //监听联盟请求支援CD改变消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateAllianceSupportCD, (param: any) => {
            this.startScheduleOfAllianceSupport();
        }, this);

        //检测下有木有新的联盟战斗邀请
        RedDotManager.getInstance().CheckRedDot(RedDotType.NewFightInvitation);
        //检测下有木有新联盟内部消息
        RedDotManager.getInstance().CheckRedDot(RedDotType.NewAllianceInnerMsg);
        //检测新好友申请
        //RedDotManager.getInstance().CheckRedDot(RedDotType.NewFriendApply);
        this.startScheduleOfAllianceSupport();

        //魅灵物语审核时修改一下界面
        if (SdkManager.Instance.IsReviewMLWY()) {
            let spBg = this.nodeBg.getChildByName("spBg");
            if (spBg) {
                spBg.removeComponent(cc.Sprite);
                LoadResAsync("UI/zjm_beijing_linshi", cc.SpriteFrame).then(sf => {
                    if (cc.isValid(spBg)) {
                        let sp = spBg.addComponent(cc.Sprite)
                        sp.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                        sp.spriteFrame = sf
                    }
                })
            }
        }

        /* zhibo+S @20230426 for <检查是否需要弹出"胜利宝箱"> */
        // if(MainScene.isComeFromUIWin){
        //     /* 1. 检查开启条件: OpenFunctionLimitTable 表中 OpenFunctionName_WinBoxAd :胜利宝箱开启条件 */
        //     let bOpenVictoryBox = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_WinBoxAd);
        //     if (bOpenVictoryBox){
        //         /* 今天领取的次数还没有达到阈值 */
        //         let maxTimes = tab.Data.AdvertPosTableByAdvertPos.getValue(tab.AdvertPosType.AdvertPosType_WinBoxAdCount).EveryDayAdvertCount /* 配置每天可以领取的最大次数 */
        //         let roleCnt  = Role.Instance.VictoryBoxRewardCnt; /* 玩家今天领取的次数 */
        //         if(roleCnt < maxTimes) {
        //             /* 检查玩家今天连续拒绝的次数 < 配置中的次数 弹出胜利宝箱页面 */
        //             let a = Role.Instance.VictoryBoxRefuseCnt;/* zhibo+@20230504 TODO: 感觉这个地方每天0点的时候没有刷新啊 */
        //             let b = tab.Data.GetKeyValue_ConfigTable().WinBoxAdCloseCount;
        //             if(a<b){ // 测试新删除它
        //                 showPopLayer("prefab/WinAdvertise")
        //             }
        //         }
        //     }
        //     MainScene.isComeFromUIWin = false; /* 检查完一定要重置为false */
        // }
        /* zhibo+E @20230426 for <检查是否需要弹出"胜利宝箱"> */

        /* 重连的时候检查一下是否有RoomID，因为分享后，被分享的人有可能出于断线状态 */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_Reconnect, (param: any) => {
            this.checkIsHaveRoom()
        }, this);
        /* 重连的时候检查一下是否有RoomID，因为分享后，被分享的人有可能出于断线状态 */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_HotStartup, (param: any) => {
            //MainMessage.Instance.initCreatePromise();
            this.scheduleOnce(() => {
                this.checkIsHaveRoom()
            },0.5);
        }, this);

        this.checkIsHaveRoom();
    }

    private checkIsHaveRoom(){
        /* TODO:暂时放在这里，应该有一堆检查之类的东西 */
        console.log("MainScene.ts : checkIsHaveRoom() + 1")
        if(Role.Instance.IsGuideFinished()){
            console.log("MainScene.ts : checkIsHaveRoom() + 2")
            let rid = SdkManager.Instance.getInviteRoomID()
            console.log("MainScene.ts : checkIsHaveRoom() + 3 roomID: " + rid)
            if( 0!=rid){
                // showPopLayerV2("prefab/UIGameModelFriendJoinRoom", UIGameModelFriendJoinRoom, false).then(nodeFightOther => {
                //     nodeFightOther.setDetails({"roomID":rid})
                // });
                console.log("MainScene.ts : onLoad() + 4")
                //TODO: 直接加入房间
                //this._initCreatePromise = FightMsgManager.Instance.waitingMatchFight(proto.FightType.WorldChannelPvP);
                let msg = new proto.Msg_JoinPrivateRoomReq();
                msg.type = proto.FightType.WorldChannelPvP;
                msg.roomID = Number(rid);
                //msg.channel =proto.ChatChannelType.WorldChannel;
                console.log("MainScene.ts : onLoad() + 5")
                Net.Send(proto.Ptl.JoinPrivateRoomReq, msg);
            }
        }
    }

    /* 启动查询联盟有无可请求支援定时器 */
    private startScheduleOfAllianceSupport() {
        let startTime = Role.Instance.RoleData.donateData.nextCardRequestTime - getServerUtcTime();
        if (startTime < kZeroNumber) {
            //checkRedDotOfCanSupport();
            return;
        }

        RedDotManager.getInstance().UpdateRedDot(RedDotType.AllianceSupport, startTime <= kZeroNumber);
        this.unschedule(this.checkAllianceRedDot);
        this.schedule(this.checkAllianceRedDot, startTime);
    }

    /* 检测联盟红点 */
    private checkAllianceRedDot() {
        if (!Role.Instance.RoleData.donateData ||
            RedDotManager.getInstance().GetRedDotVisible(RedDotType.AllianceSupport)) { return; }

        let diffValue = Role.Instance.RoleData.donateData.nextCardRequestTime - getServerUtcTime();
        if (diffValue <= kZeroNumber && checkStringIsValid(Role.Instance.RoleData.allianceData.allianceID)) {
            RedDotManager.getInstance().UpdateRedDot(RedDotType.AllianceSupport, true);
        }
    }

    /* 检测有无格古特任务 */
    private checkHavePushGroutTaskData() {
        let data = ManagerGroutTaskInfo.getInstance().getPushData();
        if (data) {
            this.setVisibleTaskTip(data, TaskType.GROUT_TASK_TYPE, () => { this.checkLeftTaskTypeList() });
            ManagerGroutTaskInfo.getInstance().cleanPushData();
        }
    }

    /* 检测有无彩虹任务 */
    private checkHaveRainbowTaskData() {
        let taskData = ManagerRainbowTask.getInstance().getPushRainbowTaskData();
        if (taskData) {
            this.setVisibleTaskTip(taskData.data, TaskType.RAINBOW_TASK_TYPE, () => { this.checkLeftTaskTypeList() });
            ManagerRainbowTask.getInstance().cleanPushRainbowTaskData();
        }
    }

    /* 检测剩余的任务类型列表 */
    private checkLeftTaskTypeList() {
        if (kZeroNumber == MainScene.taskTypeList.length) {
            this.taskAnifinish = true;
            return;
        }

        let leftTaskType = MainScene.taskTypeList.shift();
        leftTaskType === TaskType.GROUT_TASK_TYPE && this.checkHavePushGroutTaskData();
        leftTaskType === TaskType.RAINBOW_TASK_TYPE && this.checkHaveRainbowTaskData();
    }

    /* 显示任务推送提醒 */
    private setVisibleTaskTip(taskData: proto.ITaskData, taskType: TaskType, cb: Function) {
        let taskTips = this.pushtasktipsnode.getComponent(PushTaskTip);
        if (taskTips) {
            taskTips.setView(taskData, taskType);
            taskTips.setCallback(cb);
        }
    }

    /*  */
    showTaskTips(taskType: TaskType = TaskType.NORMAL_TASK_TYPE) {
        if (kZeroNumber == MainScene.taskPush.length) {
            //this.taskAnifinish = true;
            this.checkLeftTaskTypeList();
            return;
        }
        this.taskAnifinish = false;
        let taskInfo = MainScene.taskPush.shift();
        this.setVisibleTaskTip(taskInfo, TaskType.NORMAL_TASK_TYPE, () => { this.showTaskTips(); });
    }

    /*  */
    public refreshDeckLayer() {
        this.nodeDeck.getComponent(DeckLayer).refreshTeam();
    }

    /*  */
    protected showNodeLayer(type: NodeLayerName) {
        if (type == NodeLayerName.BattleLayer && this.bjumpBattle) {
            if (this._bInitEnterPage) {
                this.cuspage_view.jumpToPageByNameWithoutAction(type);
                this.checkPageVisible();
            } else {
                this.cuspage_view.jumpToPageByName(type, 0);
            }
            this.bjumpBattle = false;
        } else {
            if (this._bInitEnterPage) {
                this.cuspage_view.jumpToPageByNameWithoutAction(type);
                this.checkPageVisible();
                return;
            }
            this.cuspage_view.jumpToPageByName(type)
        }
        this._bInitEnterPage = false;
    }

    /*  */
    pagechange() {
        let pageName = this.cuspage_view.getCurrentPageName();
        switch (pageName) {
            case NodeLayerName.ShopLayer:
                this.navigation.checkShop();
                break;
            case NodeLayerName.DeckLayer:
                this.navigation.checkDeck();
                break;
            case NodeLayerName.BattleLayer:
                this.navigation.checkBattle();
                break;

            case NodeLayerName.Alliance:
                this.navigation.checkAlliance();
                break;

            case NodeLayerName.ChallengLayer:
                this.navigation.checkChallenge();

            default:
                break;
        }
    }

    /*  */
    start() {
        PlaySound("BGM_Main")
        this.bjumpBattle = true

        /*  */
        this.scheduleOnce(() => {
            if (!GuideController.Instance.isGuiding() && Role.Instance.IsGuideFinished()) {
                //检测说明的版本,如果当前正在进行新手引导则不弹出说明
                //在定时器里检测是为了防止先弹出界面后才进行新手引导检测
                let docversion = cc.sys.localStorage.getItem("docversion" + LoginData.Instance.uid.toString())
                let configdocver = tab.Data.GetKeyValue_ConfigTable().noticeversion
                if (!docversion || configdocver.localeCompare(docversion) != 0) {
                    cc.sys.localStorage.setItem("docversion" + LoginData.Instance.uid.toString(), configdocver)
                    //showPopLayerV2("prefab/noticesnode",noticesnode)            
                }
            }
        }, 0.1)

        /*  */
        if (Role.Instance.RoleGrade < kOneNumber) {
            let idx = this.cuspage_view.getPageIdxByName(NodeLayerName.ShopLayer)
            if (idx >= 0) {
                let shopnode = this.cuspage_view.getPages()[idx];
                this.cuspage_view.removePageAtIndex(idx)
                this.shopnodetemp.addChild(shopnode)
            }

            idx = this.cuspage_view.getPageIdxByName(NodeLayerName.Alliance);
            if (idx >= 0) {
                let allianceNode = this.cuspage_view.getPages()[idx];
                this.cuspage_view.removePageAtIndex(idx);
                this.node_alliance_temp.addChild(allianceNode);
            }
        } else if (Role.Instance.RoleGrade > kOneNumber) { //如果shoplayer被移走了那么在竞技场等级改变之后，要把它重新移回来
            if (this.shopnodetemp.childrenCount > 0) {
                let shopnode = this.shopnodetemp.children[0]
                shopnode.removeFromParent(false)
                this.cuspage_view.insertPage(shopnode, 0)
            }

            if (this.node_alliance_temp.childrenCount > 0) {
                let allianceNode = this.node_alliance_temp.children[0];
                allianceNode.removeFromParent(false);
                this.cuspage_view.insertPage(allianceNode, 0);
            }
        }

        // 如果不在下一帧里面，会导致卡组界面部分卡牌缩略图无法显示，引擎bug？
        // this.scheduleOnce(()=>{
        //    this.navigation.onClickBattle(false);  //ui里面已经check 了 
        // }, 0.01)
        this._default_enterpage_map.get(FightFromWhichLayer.getInstance().DefaultEnterPageState)();

        this.scheduleOnce(() => {
            if (this.taskAnifinish) {
                this.showTaskTips()
            }
        }, 1)

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.CheckMainScenePage, () => {
            Net.pushLoaclMessage(LOCAL_MESSAGE.MainScenePage, this.cuspage_view.getCurrentPageName())
        }, this);

        this.updateAllianceJoinOrExpelMsg();
        this.updateAllianceSupportPushMsg();
        this.updateFriendFightInvitationPushMsg();
        this.checkPageVisible()

        //请求滚动公告的信息
        if (MainScene.scrollNotice == null) {
            let scrollnotice = cc.instantiate(this.scrollNoticeNode)
            if (scrollnotice) {
                MainScene.scrollNotice = scrollnotice
                cc.director.getScene().addChild(scrollnotice)
                cc.game.addPersistRootNode(scrollnotice)
                scrollnotice.zIndex = cc.macro.MAX_ZINDEX - 100;
                let param = new proto.Msg_ScrollNoticeReq
                Net.Send(proto.Ptl.ScrollNoticeReq, param)
            }
        } else {
            let wid: cc.Widget = MainScene.scrollNotice.getComponent(cc.Widget)
            if (wid) {
                wid.top = 4
            }
        }
    }

    public selectCard(uuid: string) {
        this.nodeDeck.getComponent(DeckLayer).onSelectCard(uuid);
    }

    /* 设置pageview能不能滚动 */
    public setPageViewScroll(bCanScroll: boolean) {
        this.cuspage_view.setTouchEnabled(bCanScroll);
    }

    public setHorMoveEnabled(bHorScroll: boolean) {
        this.cuspage_view.setHorMoveEnabled(bHorScroll)
    }

    onDestroy() {
        MainScene._ins = null;
    }

    /* 更新加入或者驱逐联盟消息 */
    private updateAllianceJoinOrExpelMsg() {
        let data = AllianceJoinMsgManager.getInstance().getMsg();
        if (data) {
            let layerTip = this.node_push_join_alliance.getComponent(PushAllianceTip);
            if (layerTip) {
                layerTip.setView(data.allianceIconIdx, data.allianceName, data.msgType);
                layerTip.setCallback(() => { this.updateAllianceJoinOrExpelMsg() });
            }
        }
    }

    /* 处理全联盟支援推送消息 */
    private dealAllianceSupportPushMsg() {
        if (MainScene.allianceSupportPushMsgList.length == kZeroNumber) {
            return;
        }

        let info = MainScene.allianceSupportPushMsgList.shift();
        let layerTip = this.node_push_alliance_support.getComponent(PushAllianceSupportInfo);
        if (layerTip) {
            layerTip.setView(info.donorName, info.cardID, info.curGainSupportCnt);
            layerTip.setCallback(() => { this.dealAllianceSupportPushMsg() });
        }
    }

    /* 更新全联盟支援推送消息 */
    private updateAllianceSupportPushMsg() {
        this.scheduleOnce(() => {
            this.dealAllianceSupportPushMsg();
        }, 1);
    }

    /* 检测当前是不是在联盟界面 */
    public checkCurrentIsAlliancePage() {
        return this.navigation.checkCurrentIsAlliancePage();
    }

    /* 更新好友战斗邀请推送消息 */
    private updateFriendFightInvitationPushMsg() {
        this.scheduleOnce(() => {
            this.disposeFriendFightInvitationPushMsg();
        }, 1);
    }

    /* 处理好友邀请赛推送消息*/
    private disposeFriendFightInvitationPushMsg() {
        if (MainScene.friendFightInvitationPushMsgList.length == kZeroNumber) {
            return;
        }

        let info = MainScene.friendFightInvitationPushMsgList.shift();
        let layerTip = this.node_push_friend_fight.getComponent(PushFriendFightInvitation);
        if (layerTip) {
            layerTip.setView(info);
            layerTip.setCallback(() => { this.disposeFriendFightInvitationPushMsg() });
        }
    }

    /*  */
    checkPageVisible() {
        //计算各个page的位置，屏幕外的配置不渲染，用以降低drawcall
        let pages = this.cuspage_view.getPages()
        for (let page of pages) {
            let pos = page.convertToWorldSpaceAR(cc.Vec2.ZERO)
            let left = pos.x - page.width / 2
            let right = pos.x + page.width / 2
            if (left > 635 || right < 5) {
                //在屏幕外
                page.opacity = 0;
            } else {
                page.opacity = 255;
            }
        }
    }
    public setMainGuideStep(args: any, cb: Function) {
        this.guideCb = cb;
        this.guideAnim.active = true;
        this.guideAnim.zIndex = 99999;
        let arrow = this.guideAnim.getChildByName("GuideArrow");
        arrow.getChildByName("guide_click").getComponent(cc.Animation).play();
        /* 设置文本 */
        if (args.id) {
            this.guide_txt.node.parent.active = true;
            let dialogueData = tab.Data.GuideDialogueTableByDialogueID.getValue(args.id)
            this.guide_txt.string = dialogueData.Content;
            this.guide_txt.node.parent.y = dialogueData.YOffset;
        }else{
            this.guide_txt.node.parent.active = false;
        }
        /* 设置点击的区域 不可点击的区域不可点击 */
        let rect = args.rect;
        let touchMask: cc.Node = this.guideAnim.getChildByName("touchmask");
        if (rect) {
            arrow.setPosition(rect.x+20, rect.y-73);
            let left = touchMask.getChildByName("left");
            let right = touchMask.getChildByName("right");
            let top = touchMask.getChildByName("top");
            let bottom = touchMask.getChildByName("bottom");
            let xLength = rect.width / 2;
            let yLength = rect.height / 2;
            left.x = rect.x - xLength;
            right.x = rect.x + xLength;
            top.y = rect.y + yLength;
            bottom.y = rect.y - yLength;

            /* 是否需要遮罩 */
            let holeMask: cc.Mask = touchMask.getChildByName("holeMask").getComponent(cc.Mask);
            if (args.mask) {
                holeMask.node.active = true;
                holeMask.enabled = true;
                holeMask.node.x = rect.x;
                holeMask.node.y = rect.y;
                holeMask.node.width = rect.width;
                holeMask.node.height = rect.height;
            }else{
                holeMask.node.active = false;
                holeMask.enabled = false;
            }
        }
    }
}

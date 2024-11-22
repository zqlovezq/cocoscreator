/**
 *  战斗的Scene
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import Effect, { EffectAutoRemove } from "../Common/Effect";
import LoadingPrefab from "../Loading/LoadingPrefab";
import { ClearSpinePool, getCurScoreStage, getRes, handleRichText, LoadScene, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import Bullet from "./Bullet";
import Chessboard, { TotalColumns, TotalRows } from "./Chessboard";
import { FightZIndex, getZIndexWithPos } from "./Config";
import FightMsgManager from "./FightMsgManager";
import FightPortrait from "./FightPortrait";
import { FightStatus } from "./FightStatus";
import Surrender from "./Surrender";
import Tower from "./Tower";
import { LoadResAsync } from "../Utils/GameUtils";
import { CardNodeState, isValidObj } from "../Common/CommonInterface";
import Role from "../Common/Role";
import SmallPortrait from "../Common/SmallPortrait";
import ChessFightMgr from './ChessFightMgr'
import Sound from "../Utils/Sound";
import FightWin from "./FightWin";
import FightLose from "./FightLose";
import FightEmojiSelector from "./FightEmojiSelector";
import EmojiPlayer from "../Common/EmojiPlayer";
import GuideController from "../Guide/GuideController";
import MainScene from "../Main/MainScene";
import LoadingBountyPrefab from "../Loading/LoadingBountyPrefab";
import LoadingScene from "../Loading/LoadingScene";
import BountyRankLayer from "./BountyRankLayer";
import BountyFightResult from "./BountyFightResult";
import BountyFightWin from "./BountyFightWin";
import BountyFightLose from "./BountyFightLose";

const { ccclass, property } = cc._decorator;
const MaxPlayerHp = 5;
const guideMaxPlayerHp = 3;
@ccclass
export default class ChessFightScene extends cc.Component {

    @property([FightPortrait])
    nextCards: FightPortrait[] = []; /* 玩家可以选择的牌 */

    @property([FightPortrait])
    myCards: FightPortrait[] = []; /*  */

    @property([FightPortrait])
    ohterCards: FightPortrait[] = []; /*  */

    @property(cc.Prefab)
    prefabFightEnd: cc.Prefab = null; /*  */

    @property(cc.Prefab)
    prefabFightWin: cc.Prefab = null;

    @property(cc.Prefab)
    prefabFightLose: cc.Prefab = null;

    @property(cc.Prefab)
    prefabBountyFightWin: cc.Prefab = null;

    @property(cc.Prefab)
    prefabBountyFightLose: cc.Prefab = null;
    @property(cc.Prefab)
    prefabBountyFightResult: cc.Prefab = null;

    @property(cc.Label)
    myName: cc.Label = null; /*  */

    @property(cc.Label)
    otherName: cc.Label = null; /*  */
    @property(cc.Node)
    myHeartLayout: cc.Node = null;

    @property(cc.Node)
    otherHeartLayout: cc.Node = null;

    @property(cc.Label)
    lblMyHeart: cc.Label = null; /*  */

    @property(cc.Label)
    lblOtherHeart: cc.Label = null; /*  */

    @property(cc.Label)
    leftPoint: cc.Label = null; /*  */

    @property(cc.Label)
    myTowerCount: cc.Label = null; /*  */

    @property(cc.Label)
    otherTowerCount: cc.Label = null; /*  */

    @property(cc.Node)
    vsNode: cc.Node = null; /*  */

    @property(cc.Label)
    lblRound: cc.Label = null; /*  */

    @property(cc.Label)
    lblPhase: cc.Label = null; /*  */

    @property(cc.ProgressBar)
    timeBar: cc.ProgressBar = null; /*  */

    @property(cc.Label)
    lblTime: cc.Label = null; /*  */

    @property(cc.Animation)
    roundStartAnim: cc.Animation = null; /*  */

    @property(cc.Animation)
    battleStartAnim: cc.Animation = null; /*  */

    @property(cc.Animation)
    roundWinAnim: cc.Animation = null; /*  */

    @property(cc.Animation)
    roundLoseAnim: cc.Animation = null; /*  */

    @property(cc.Animation)
    roundDrawAnim: cc.Animation = null; /*  */

    @property(cc.Animation)
    warringAnim: cc.Animation = null; /*  */

    @property(cc.Animation)
    remindAnim: cc.Animation = null; /*  */

    @property(cc.Label)
    roundLabel: cc.Label = null; /*  */

    @property(cc.Sprite)
    myRankImg: cc.Sprite = null; /*  */

    @property(cc.Sprite)
    otherRankImg: cc.Sprite = null; /*  */

    @property(SmallPortrait)
    cardInfo: SmallPortrait = null; /*  */

    @property(cc.RichText)
    cardInfoDesc: cc.RichText = null; /*  */

    @property(cc.Label)
    cardInfoName: cc.Label = null; /*  */

    @property(cc.Animation)
    cardInfoAnim: cc.Animation = null; /*  */

    @property(FightEmojiSelector)
    emojiSelector: FightEmojiSelector = null;

    @property(cc.Vec2)
    myEmojiPos: cc.Vec2 = cc.v2();

    @property(cc.Vec2)
    enemyEmojiPos: cc.Vec2 = cc.v2();

    @property(cc.Animation)
    guideAnim: cc.Animation = null;

    @property(cc.RichText)
    guide_txt: cc.RichText = null;

    @property(cc.Button)
    giveUpBtn: cc.Button = null;
    @property(cc.Button)
    emotionBtn: cc.Button = null;
    @property(cc.Button)
    bountyRankBtn: cc.Button = null;
    @property(cc.Node)
    bountyRankLayer: cc.Node = null;
    @property(cc.Node)
    bountyResultNode: cc.Node = null;
    @property(cc.Node)
    waitNode: cc.Node = null;
    public BountyRankLayerTs: BountyRankLayer = null;
    private BountyResultLayer: cc.Node = null;

    chessboard: Chessboard = null; /* 棋盘 */

    protected status: FightStatus = FightStatus.Running; /*  */
    protected scr_surrender: Surrender = null; /*  */
    protected m_currentRound = 0; /*  */
    // protected selectedCardIdx = -1; /*  */
    private isResetHp: boolean = false;
    private _selectedCardIdx = -1
    public get selectedCardIdx(): number {
        return this._selectedCardIdx;
    }
    public set selectedCardIdx(value: number) {
        this._selectedCardIdx = value;
        if (Role.Instance.RoleData.guideTrunk > 0) {
            if (this._selectedCardIdx === -1) {
                // 间隔BuildHandTipsTime时间之后触发
                this.unschedule(this.triggerRemindAnim);
                this.scheduleOnce(this.triggerRemindAnim, tab.Data.GetKeyValue_ConfigTable().BuildHandTipsTime);
            } else {
                this.unschedule(this.triggerRemindAnim);
            }
        }
    }
    //protected movingAvatar: sp.Skeleton = null;
    protected movingAvatar: cc.Sprite = null; /*  */
    protected isCreatingMoving = false; /*  */

    public myHp = MaxPlayerHp; /*  */
    public otherHp = MaxPlayerHp; /*  */

    private bShowCardInfo: boolean = false; /*  */

    private fightMgr: ChessFightMgr = new ChessFightMgr(this) /*  */
    private towersUp: Tower[] = [];

    protected bEmojiSilent: boolean = false; /* 是否显示表情 */
    protected checkGuide = true;
    private guideStep: number = 0;
    private guideCb: Function = null;
    private myHeart: cc.Node[] = [];
    private otherHeart: cc.Node[] = [];
    private leftConstructCount: number = 0;
    public round2fight: boolean = false;
    public fightType: proto.FightType = proto.FightType.PvP;
    private showBountyRankLayer = false;
    /*  */
    get PlayerTag() {
        return FightMsgManager.Instance.PlayerTag
    }

    /*  */
    get currentRound() {
        return this.m_currentRound
    }
    set currentRound(value: number) {
        this.m_currentRound = value;
    }
    onLoad() {
        //设置卡组显示
        this.fightType = FightMsgManager.Instance.ChessFightType;
        if (this.fightType !== proto.FightType.Bounty) {
            this.setChessFightInfo()
        } else {
            // 监听赏金赛排名变化
            Net.unlistenProtocol(proto.FightPtl.BountyAllFightDataPush)
            /*  */
            Net.listenProtocol(proto.FightPtl.BountyAllFightDataPush, (buffer, ptl) => {
                let msg = proto.Msg_BountyAllFightDataPush.decode(buffer)
                if (msg) {
                    FightMsgManager.Instance.allFightData = msg.allData;
                    this.setBountyInfo(msg.allData, false)
                }
            }, this)
        }
        //监听微信信息变更
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateWechatUserInfo, (param) => {
            if (FightMsgManager.Instance.myFightData.roleId == Role.Instance.ID) {
                FightMsgManager.Instance.myFightData.name = param.nickName
                this.myName.string = FightMsgManager.Instance.myFightData.name
            }
        }, this)

        // 隐藏表情面板
        this.emojiSelector.seFightScene(this)
        this.emojiSelector.node.active = false;
        //监听禁言消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateSilentState, (param: any) => {
            this.bEmojiSilent = (param as boolean);
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel.bind(this), this);

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_FightReady, () => {
            this.ready()
        }, this, true);
        Net.listenLoaclMessage(LOCAL_MESSAGE.RecvFightEnd, msg => {
            this.fightEnd(msg);
        }, this)
        Net.listenLoaclMessage(LOCAL_MESSAGE.RecvBountyFightEnd, msg => {
            this.bountyFightEnd(msg);
        }, this)
        if (this.checkGuide) {
            Net.pushLoaclMessage(LOCAL_MESSAGE.CheckGuide)
            this.checkGuide = false;
        }
        // 如果当前是新手引导的话 giveUp按钮隐藏
        if (Role.Instance.RoleData.guideTrunk === 0) {
            this.giveUpBtn.node.active = false;
            this.emotionBtn.node.active = false;
            this.myHp = guideMaxPlayerHp;
            this.otherHp = guideMaxPlayerHp;
        }
        if (this.fightType === proto.FightType.Bounty) {
            this.giveUpBtn.node.active = true;
            this.emotionBtn.node.active = true;
            this.myHp = guideMaxPlayerHp;
            this.otherHp = guideMaxPlayerHp;
        }
        // 如果当前是赏金赛
        this.setBountyInfo(FightMsgManager.Instance.allFightData, true);
        this.setHeart();
        Net.listenLoaclMessage(LOCAL_MESSAGE.GUIDE_MAIN, (step: number) => {
            if (step === 0) {
                this.round2fight = true;
                this.fightMgr.doCombat(0);
            }
            if (step === 10) {
                this.fightMgr.doCombatDone(true);
            }
        }, this)
    }
    public setChessFightInfo() {
        let myDeck = FightMsgManager.Instance.myFightData.deckData;
        let myRankData = getCurScoreStage(FightMsgManager.Instance.myFightData.rankScore);
        this.myRankImg.setTexture(myRankData.RankIcon)
        for (let i = 0; i < this.myCards.length; i++) {
            if (i < myDeck.length) {
                this.myCards[i].setCardData(myDeck[i].staticId, i);
            }
        }
        /* 对手的牌 */
        let otherDeck = FightMsgManager.Instance.otherFightData.deckData;
        let otherRankData = getCurScoreStage(FightMsgManager.Instance.otherFightData.rankScore);
        this.otherRankImg.setTexture(otherRankData.RankIcon)
        for (let i = 0; i < this.ohterCards.length; i++) {
            if (i < otherDeck.length) {
                this.ohterCards[i].setCardData(otherDeck[i].staticId, i, false);
            }
        }

        //玩家名字
        this.myName.string = FightMsgManager.Instance.myFightData.name;
        this.otherName.string = FightMsgManager.Instance.otherFightData.name;
    }
    private setBountyInfo(data: proto.IBountyFightData[], init: boolean) {
        if (this.fightType === proto.FightType.Bounty) {
            if (init) {
                this.bountyRankBtn.node.active = true;
                //获取ShangJinRankNode
                let rankPrefab: cc.Prefab = getRes("prefab/ShangJinRankNode", cc.Prefab);
                let rankNode: cc.Node = cc.instantiate(rankPrefab);
                this.BountyRankLayerTs = rankNode.getComponent(BountyRankLayer);
                this.bountyRankLayer.addChild(rankNode);
                // test 20230601 wzq
                this.BountyRankLayerTs.refreshBountyData(data);

                let BountyResult = cc.instantiate(this.prefabBountyFightResult);
                this.bountyResultNode.addChild(BountyResult);
                this.BountyResultLayer = BountyResult;
                BountyResult.active = false;

                this.bountyRankBtn.node.getChildByName("txt").getComponent(cc.Label).string = String(this.getMyFightRank() + 1)
            } else {
                this.BountyRankLayerTs.refreshBountyData(data);
                this.bountyRankBtn.node.getChildByName("txt").getComponent(cc.Label).string = String(this.getMyFightRank() + 1)
            }
        }
    }
    // 获取玩家自己的排名
    private getMyFightRank(): number {
        for (let i = 0; i < FightMsgManager.Instance.allFightData.length; i++) {
            let data = FightMsgManager.Instance.allFightData[i];
            if (data.roleId === Role.Instance.RoleData.id) {
                return i;
            }
        }
    }
    /* 触发提醒动画 */
    private triggerRemindAnim() {
        if (this.status != FightStatus.Running) {
            return;
        }
        if (this.fightMgr.isConstructionPhase && this.leftConstructCount > 0) {
            this.remindAnim.node.active = true;
            this.remindAnim.play();
            this.remindAnim.on((cc.Animation.EventType.FINISHED), event => {
                if (this.selectedCardIdx < 0) {
                    this.selectedCardIdx = -1;
                }
                this.remindAnim.node.active = false;
            }, this)
        }
    }
    public getIsConstructionPhase(): boolean {
        return this.fightMgr.isConstructionPhase;
    }
    setHeart() {
        for (let i = this.myHeartLayout.childrenCount - 1; i >= 0; i--) {
            let node = this.myHeartLayout.children[i];
            if (i >= 5 - this.myHp) {
                node.active = true;
                this.myHeart.push(node.getChildByName("heart"));
            } else {
                node.active = false;
            }
        }
        for (let i = 0; i < this.otherHeartLayout.childrenCount; i++) {
            let node = this.otherHeartLayout.children[i];
            if (i >= 5 - this.otherHp) {
                node.active = true;
                this.otherHeart.push(node.getChildByName("heart"));
            } else {
                node.active = false;
            }
        }
        if (this.myHp === guideMaxPlayerHp) {
            let myLayout = this.myHeartLayout.getComponent(cc.Layout);
            let otherLayout = this.otherHeartLayout.getComponent(cc.Layout);
            myLayout.spacingX = this.myHeart[0].width * (2 / 3);
            otherLayout.spacingX = this.otherHeart[0].width * (2 / 3);
        }
    }
    onDestroy() {
        ClearSpinePool();
        cc.director.getScheduler().setTimeScale(1);
    }

    /*  */
    ready() {
        //初始化棋盘
        this.chessboard = this.node.getComponentInChildren(Chessboard);
        if (this.fightType !== proto.FightType.Bounty) {
            this.chessboard.init(FightMsgManager.Instance.PlayerTag != 0, this);
        }
        this.fightMgr.onReady()

        if (FightMsgManager.Instance.isReconnect) {
            //重连进来的
            this.fightMgr.requestSnapshot()
        } else {
            //正常进来的，进入建造阶段
            this.fightMgr.enterConstructionPhase(FightMsgManager.Instance.construtionPhase)
        }

        //监听协议
        this.listenProtocol();

        cc.game.on(cc.game.EVENT_SHOW, () => {
            this.fightMgr.requestSnapshot()
        }, this)
    }

    /*  */
    listenProtocol() {
        Net.listenLoaclMessage(LOCAL_MESSAGE.ConstructionPhase, (msg: proto.IMsg_ConstructionPhase) => {
            this.fightMgr.enterConstructionPhase(msg);
        }, this);
        // 请求快照
        Net.listenLoaclMessage(LOCAL_MESSAGE.RequestSnapshot, () => {
            this.fightMgr.requestSnapshot()
        }, this);

        //建塔阶段
        Net.listenProtocol(proto.FightPtl.FightBuildRsp, buffer => {
            let msg = proto.Msg_FightBuildRsp.decode(buffer);
            this.fightMgr.buildTower(msg);
            if (msg.result === proto.CommonErrorCode.Succeed) {
                if (GuideController.Instance.isGuiding()) {
                    this.guideAnim.node.active = false;
                    this.guideCb();
                }
            }
        }, this)

        //战斗阶段
        Net.listenProtocol(proto.FightPtl.CombatPhase, buffer => {
            let msg = proto.Msg_CombatPhase.decode(buffer);
            this.fightMgr.enterCombatPhase(msg)
        }, this)

        //监听塔死亡
        Net.listenLoaclMessage(LOCAL_MESSAGE.TowerDie, () => {
            this.refreshTowerCount();
        }, this)

        //战斗快照
        Net.listenProtocol(proto.FightPtl.FightSnapshotRsp, buffer => {
            let msg = proto.Msg_FightSnapshotRsp.decode(buffer)
            this.fightMgr.resetBySnapshot(msg)
        }, this)

        /* 客户端发送表情 */
        Net.listenProtocol(proto.FightPtl.FightEmojiSync, buffer => {
            let rsp = proto.Msg_FightEmojiSync.decode(buffer)
            if (rsp) {
                this.PlayEmoji(rsp.emojiID, false)
            }
        }, this)
    }

    // 遍历棋盘找到所有的强筋鱼人并给其加上buff
    public showFishManBuff() {
        let fishManCardId = 42004;
        let buff_layer = 0;
        let fishManTowers = [];

        let oppo_buff_layer = 0;
        let oppo_fishManTowers = [];
        for (let i = 0; i < TotalRows; i++) {
            for (let j = 0; j < TotalColumns; j++) {
                let tower = this.chessboard.towerMatrix[i][j];
                if (tower && tower.CardId === fishManCardId && tower.isAlive()) {
                    if (tower.PlayerTag === this.PlayerTag) {
                        buff_layer += tower.Level;
                        fishManTowers.push(tower);
                    } else {
                        oppo_buff_layer += tower.Level;
                        oppo_fishManTowers.push(tower);
                    }
                }
            }
        }
        for (let i = 0; i < fishManTowers.length; i++) {
            let tower: Tower = fishManTowers[i];
            tower.showFishManLabel(buff_layer);
        }
        for (let i = 0; i < oppo_fishManTowers.length; i++) {
            let tower: Tower = oppo_fishManTowers[i];
            tower.showFishManLabel(oppo_buff_layer);
        }
    }

    // 播放战斗完毕动画
    playCombatAnim(loseTag: number) {
        if (loseTag < 0) {
            /* 播放平局动画 */
            this.roundDrawAnim.node.active = true;
            this.roundDrawAnim.play();
            return
        }

        // 扣血
        this.reducePlayerHp(loseTag);
        if (loseTag == this.PlayerTag) {
            /* 失败动画 */
            this.roundLoseAnim.node.active = true;
            this.roundLoseAnim.play();
        } else {
            /* 胜利动画 */
            this.roundWinAnim.node.active = true;
            this.roundWinAnim.play();
        }
    }

    /* 设置计时条 */
    setCountdown(leftDt: number, maxDt: number) {
        this.lblTime.string = `${Math.ceil(leftDt)}s`;
        this.timeBar.progress = leftDt / maxDt;
    }

    /* 开始倒计时 */
    startCountdown(leftDt: number, maxDt: number) {
        let timeLeftDelay = leftDt - Math.floor(leftDt);
        let timeTipsCount = Math.floor(leftDt)

        this.lblTime.string = `${Math.ceil(leftDt)}s`;

        let progress = leftDt / maxDt;
        cc.Tween.stopAllByTarget(this.timeBar);
        return cc.tween(this.timeBar)
            .set({ progress: progress })
            .parallel(
                cc.tween().to(leftDt, { progress: 0 }),
                cc.tween()
                    .delay(timeLeftDelay)
                    .repeat(timeTipsCount,
                        cc.tween()
                            .call(() => {
                                this.lblTime.string = `${--timeTipsCount}s`;
                            })
                            .delay(1)
                    )
            )
            .start();
    }

    /*  */
    setRound(round: number, playAnim: boolean) {
        this.currentRound = round;
        this.lblRound.string = `第${this.currentRound}回合`;
        this.lblPhase.string = "准备阶段";
        this.roundLabel.string = this.currentRound + "";
        if (playAnim) {
            this.roundStartAnim.node.active = true;
            this.roundStartAnim.play();
        }
    }

    /*  */
    reducePlayerHp(playerTag: number) {
        if (playerTag == this.PlayerTag) { /* 失败 */
            this.reducePlayerHpAnim(true, this.myHp);
            this.myHp--;
        } else { /* 成功 */
            this.reducePlayerHpAnim(false, this.otherHp);
            this.otherHp--;
        }
        this.refreshHp();
    }
    // 执行掉血spine
    reducePlayerHpAnim(isMe: boolean, index: number) {
        let heart = isMe ? this.myHeart[index - 1] : this.otherHeart[index - 1];
        let subHeartSpine = null;
        try {
            subHeartSpine = heart.parent.getChildByName("sub_heart").getComponent(sp.Skeleton);
        } catch (error) {
            debugger;
        }
        // let subHeartSpine = heart.parent.getChildByName("sub_heart").getComponent(sp.Skeleton);
        subHeartSpine.node.active = true;
        subHeartSpine.setAnimation(0, "idle", false);
        subHeartSpine.setCompleteListener(() => {
            subHeartSpine.node.active = false;
        })
    }
    // 重置血量
    resetHp(heartList: number[], addHp: boolean, isMe?: boolean) {
        if(this.fightType!==proto.FightType.Bounty){
            for (let i = 0; i < heartList.length; i++) {
                if (i == this.PlayerTag) {
                    this.myHp = heartList[i];
                    if (addHp && isMe) {
                        this.myHp += 1;
                    }
                } else {
                    this.otherHp = heartList[i];
                    if (addHp && !isMe) {
                        this.otherHp += 1;
                    }
                }
            }
            this.refreshHp();
        }
    }

    /*  */
    refreshHp() {
        for (let i = 0; i < this.myHeart.length; ++i) {
            this.myHeart[i].active = i < this.myHp;
        }
        for (let i = 0; i < this.otherHeart.length; ++i) {
            this.otherHeart[i].active = i < this.otherHp;
        }

        this.lblMyHeart.string = this.myHp.toString();
        this.lblOtherHeart.string = this.otherHp.toString();
    }

    /*  */
    setLeftConstructCount(leftCount: number) {
        this.leftConstructCount = leftCount;
        this.leftPoint.string = `${leftCount}`;
        if (leftCount > 0) {
            this.vsNode.active = false;
            this.myTowerCount.node.active = false;
            this.otherTowerCount.node.active = false;

            this.leftPoint.node.parent.active = true;
        } else {
            this.vsNode.active = true;
            this.myTowerCount.node.active = true;
            this.otherTowerCount.node.active = true;
            this.myTowerCount.string = "0";
            this.otherTowerCount.string = "0";
            this.leftPoint.node.parent.active = false;
        }
    }

    /* 显示我和对手的下张牌 */
    showNextCards(nextCards: number[]) {
        if (!nextCards) {
            nextCards = [];
        }

        for (let i = 0; i < this.nextCards.length; i++) {
            if (i < nextCards.length) {
                this.nextCards[i].node.active = true;
                this.nextCards[i].setCardData(nextCards[i], i);
            } else {
                this.nextCards[i].node.active = false;
            }
        }
    }

    /* 清理下张牌面板 */
    clearNextCards() {
        for (let i = 0; i < this.nextCards.length; i++) {
            this.nextCards[i].node.active = false;
        }
    }

    /*  */
    refreshTowerCount() {
        let myCount = 0;
        let otherCount = 0;
        for (let i = 0; i < TotalRows; i++) {
            for (let j = 0; j < TotalColumns; j++) {
                let tower = this.chessboard.towerMatrix[i][j];
                if (tower && tower.isAlive()) {
                    if (tower.PlayerTag == this.PlayerTag) {
                        myCount++;
                    } else {
                        otherCount++;
                    }
                }
            }
        }
        this.myTowerCount.string = myCount.toString();
        this.otherTowerCount.string = otherCount.toString();
    }

    /*  */
    protected onTouchStart(event: cc.Event.EventTouch) {
        if (this.status != FightStatus.Running) {
            return;
        }
        this.chessboard.hideRange();
        if (this.selectedCardIdx < 0) {
            for (let card of this.nextCards) {
                if (!card.node.active) {
                    continue;
                }
                if (card.node.parent.getBoundingBoxToWorld().contains(event.getLocation())) {
                    this.selectedCardIdx = card.Index;
                    let id = this.nextCards[this.selectedCardIdx].ID;
                    let tabData = Role.Instance.RoleItemAtrr.getItemByStaticID(id);
                    this.showCardInfo(id, tabData.level, 1);
                    this.towersUp = this.getTowersByStaticID(id);
                    this.showTowersUp();
                    // cc.log(`touch card idx: ${card.Index}`);
                    return;
                }
            }

            let grid = this.chessboard.getGridByWorldPos(event.getLocation());
            if (grid) {
                let tower = this.chessboard.towerMatrix[grid.row][grid.column];
                if (tower && tower.Table && tower.isAlive()) {
                    this.showCardInfo(tower.CardId, tower.cardLv, tower.Level);
                    let skillList = tower.Table.SkillList;
                    for (let i = 0; i < skillList.length; i++) {
                        let skill: tab.SkillTable = tab.Data.SkillTableByID.getValue(skillList[i]);
                        //显示攻击范围
                        if (skill.Preview == tab.PreviewType.PreviewType_Attack) {
                            this.chessboard.showAttackRange(grid.row, grid.column, skill.Range + tower.GetAttackRangeExtra());
                        } else if (skill.Preview == tab.PreviewType.PreviewType_Skill) {
                            this.chessboard.showSkillRange(grid.row, grid.column, skill.Range);
                        } else {

                        }
                    }
                    // let skill = tab.Data.SkillTableByID.getValue()
                    // //显示攻击范围
                    // if (tower.Table.Preview == tab.PreviewType.PreviewType_Attack) {
                    //     this.chessboard.showAttackRange(grid.row, grid.column, tower.Table.Range);
                    // } else {
                    //     if (tower.Table.SkillList.length > 0) {
                    //         let skilTbl = tab.Data.SkillTableByID.getValue(tower.Table.SkillList[0]);
                    //         if (skilTbl) {
                    //             this.chessboard.showSkillRange(grid.row, grid.column, skilTbl.Range);
                    //         }
                    //     }
                    // }
                } else {
                    if (this.bShowCardInfo) {
                        /* 隐藏cardInfo */
                        this.bShowCardInfo = false;
                        this.cardInfoAnim.play("ChessDetail2");
                    }
                }
            } else {
                if (this.bShowCardInfo) {
                    /* 隐藏cardInfo */
                    this.bShowCardInfo = false;
                    this.cardInfoAnim.play("ChessDetail2");
                }
            }
        }
    }

    /* 创建棋子的Image */
    public CreateAvatarNode(cardId: number): cc.Sprite {
        // let data = tab.Data.ItemTableByID.getValue(cardId)
        // if (data) {
        //     let sf = await LoadResAsync(data.Icon, cc.SpriteFrame)
        //     if (sf) {
        //         var n = new cc.Node().addComponent(cc.Sprite);
        //         n.node.anchorY = 0;
        //         n.spriteFrame = sf;
        //         n.node.setScale(0.7);
        //     }
        // } else {
        //     cc.error("CreateAvatarNode() Error cardId: " + cardId)
        // }
        // return n
        let n = null;
        let data = tab.Data.ItemTableByID.getValue(cardId)
        if (data) {
            let sf: cc.SpriteFrame = getRes(data.Icon, cc.SpriteFrame)
            let bg: cc.SpriteFrame = getRes(data.ChessBgBlue, cc.SpriteFrame)
            if (sf) {
                n = new cc.Node().addComponent(cc.Sprite);
                n.node.anchorY = 0;
                n.spriteFrame = bg;
                n.sizeMode = cc.Sprite.SizeMode.RAW
                n.trim = false;
                n.node.setScale(0.75);
                this.node.addChild(n.node);

                let icon = new cc.Node().addComponent(cc.Sprite);
                icon.node.anchorY = 0;
                icon.spriteFrame = sf;
                icon.sizeMode = cc.Sprite.SizeMode.RAW;
                icon.trim = false;
                icon.node.y = 0;
                icon.node.name = "head"
                icon.node.scale = 0.8;
                n.node.addChild(icon.node);
            } else {
                cc.error("CreateAvatarNode() Error cardId: " + cardId)
            }
        }
        return n
    }

    /*  */
    protected async onTouchMove(event: cc.Event.EventTouch) {
        if (this.selectedCardIdx < 0) {
            return;
        }

        if (!this.movingAvatar && !this.isCreatingMoving) {
            this.nextCards[this.selectedCardIdx].node.active = false;
            let id = this.nextCards[this.selectedCardIdx].ID;
            let cardTD = tab.Data.CardTableByID.getValue(id);
            if (cardTD) {
                this.isCreatingMoving = true;
                //this.movingAvatar = await CreateSpine(cardTD.SpineID); /* TODO: zhibo- for <delete spine> */
                this.movingAvatar = this.CreateAvatarNode(id);
                //this.movingAvatar.setAnimation(0, "idle_0", true);
                this.isCreatingMoving = false;

                //this.movingAvatar.node.setScale(-this.movingAvatar.node.scaleX, this.movingAvatar.node.scaleY);
            }
        }

        if (this.movingAvatar) {
            if (!this.bShowCardInfo) {
                let id = this.nextCards[this.selectedCardIdx].ID;
                let tabData = Role.Instance.RoleItemAtrr.getItemByStaticID(id);
                this.showCardInfo(this.nextCards[this.selectedCardIdx].ID, tabData.level, 1);
            }
            let pos: cc.Vec2;
            let grid = this.chessboard.getGridByWorldPos(event.getLocation());
            if (grid && grid.playerTag == FightMsgManager.Instance.PlayerTag) {
                // cc.log(`move to grid: ${grid.row},${grid.column}`);
                //移动到棋盘格子上
                pos = grid.pos;
                //显示攻击范围
                let cardTbl = tab.Data.CardTableByID.getValue(this.nextCards[this.selectedCardIdx].ID);

                let skillList = cardTbl.SkillList;
                for (let i = 0; i < skillList.length; i++) {
                    let skill: tab.SkillTable = tab.Data.SkillTableByID.getValue(skillList[i]);
                    // //显示攻击范围
                    // if (skill.Preview == tab.PreviewType.PreviewType_Attack) {
                    //     this.chessboard.showAttackRange(grid.row, grid.column, skill.Range);
                    // } else {
                    //     this.chessboard.showSkillRange(grid.row, grid.column, skill.Range);
                    // }
                    if (skill.Preview == tab.PreviewType.PreviewType_Attack) {
                        this.chessboard.showAttackRange(grid.row, grid.column, skill.Range);
                    } else if (skill.Preview == tab.PreviewType.PreviewType_Skill) {
                        this.chessboard.showSkillRange(grid.row, grid.column, skill.Range);
                    } else {

                    }
                }
                // if (cardTbl) {
                //     if (cardTbl.Preview == tab.PreviewType.PreviewType_Attack) {
                //         this.chessboard.showAttackRange(grid.row, grid.column, cardTbl.Range);
                //     } else {
                //         if (cardTbl.SkillList.length > 0) {
                //             let skilTbl = tab.Data.SkillTableByID.getValue(cardTbl.SkillList[0]);
                //             if (skilTbl) {
                //                 this.chessboard.showSkillRange(grid.row, grid.column, skilTbl.Range);
                //             }
                //         }
                //     }
                // }

            } else {
                pos = this.node.convertToNodeSpaceAR(event.getLocation());
                this.chessboard.hideRange();
            }
            this.movingAvatar.node.setPosition(pos.x, pos.y - 25);
        }
    }

    /*  */
    protected onTouchEnd(event: cc.Event.EventTouch) {
        if (this.selectedCardIdx < 0) {
            return;
        }

        let grid = this.chessboard.getGridByWorldPos(event.getLocation());
        if (grid && grid.playerTag == FightMsgManager.Instance.PlayerTag) {
            cc.log(`build to grid: ${grid.row},${grid.column}`);
            Net.Send(proto.FightPtl.FightBuildReq, new proto.Msg_FightBuildReq({
                cardIndex: this.selectedCardIdx,
                row: grid.row,
                column: grid.column
            }));
            this.clearNextCards();
            Sound.Instance.Play("BuildChess");
        }

        this.clearSelect();
    }
    public setFightGuideStep(args: any, cb: Function) {
        this.guideStep = args.step;
        this.guideCb = cb;
        this.guideAnim.node.active = true;
        this.guideAnim.play("guide_finger_" + args.step);
        /* 设置文本 */
        if (args.id) {
            let dialogueData = tab.Data.GuideDialogueTableByDialogueID.getValue(args.id)
            this.guide_txt.string = dialogueData.Content;
        }
    }
    /*  */
    protected onTouchCancel(event: cc.Event.EventTouch) {
        this.clearSelect();
    }

    /*  */
    protected clearSelect() {
        this.hideTowersUp();
        if (this.selectedCardIdx >= 0) {
            this.nextCards[this.selectedCardIdx].node.active = this.fightMgr.isConstructionPhase ? true : false;
        }
        this.selectedCardIdx = -1;
        this.isCreatingMoving = false;
        if (this.movingAvatar) {
            if (this.bShowCardInfo) {
                /* 隐藏cardInfo */
                this.bShowCardInfo = false;
                this.cardInfoAnim.play("ChessDetail2");
            }
            this.movingAvatar.node.destroy();
            this.movingAvatar = null;
        }
        this.chessboard.hideRange();
    }
    private showTowersUp() {
        for (let i = 0; i < this.towersUp.length; i++) {
            let tower = this.towersUp[i];
            if (cc.isValid(tower)) {
                tower.showUp();
            }
        }
    }
    private hideTowersUp() {
        for (let i = 0; i < this.towersUp.length; i++) {
            let tower = this.towersUp[i];
            if (cc.isValid(tower)) {
                tower.hideUp();
            }
        }
        this.towersUp = []
    }
    /*  */
    async onSurrenderClick() {
        //this.closedEnemyCardInfoPage();
        this.waitNode.active = false;
        // 停止所有的计时器
        this.unscheduleAllCallbacks();
        this.scr_surrender = await showPopLayerV2("prefab/Surrender", Surrender);
        this.scr_surrender.node.zIndex = cc.macro.MAX_ZINDEX - 999
        this.scr_surrender.setCloseCallBack(() => {
            let thisTmp = this;
            thisTmp.scr_surrender = null;
        });
    }
    onBountyRankClick() {
        let anim = this.bountyRankLayer.getComponent(cc.Animation);
        if (!this.showBountyRankLayer) {
            this.showBountyRankLayer = true
            anim.play("ShangJinRankOut");
        } else {
            this.showBountyRankLayer = false
            anim.play("ShangJinRankBack");
        }
    }
    /* 普通战斗结束 */
    public fightEnd(data: proto.IMsg_FightEnd) {
        if (this.status == FightStatus.End) {
            //已经结束了
            return;
        }
        cc.director.getScheduler().setTimeScale(1);
        // 有投降框，先消除
        if (null != this.scr_surrender) {
            this.scr_surrender.setVisible(false);
            this.scr_surrender = null;
        }

        this.status = FightStatus.End;
        this.showFightEnd(data);
    }
    /* 普通战斗结束 */
    async showFightEnd(data: proto.IMsg_FightEnd) {
        /* 根据战斗结果弹出 胜利还是失败 */
        let fightEnd = null;
        if (this.fightType !== proto.FightType.Bounty) {
            if (data.isWin) {
                fightEnd = await showPopLayerV2(this.prefabFightWin, FightWin, false)
            } else {
                fightEnd = await showPopLayerV2(this.prefabFightLose, FightLose, false)
            }
        } else {
            if (data.isWin) {
                fightEnd = await showPopLayerV2(this.prefabBountyFightWin, BountyFightWin, false)
            } else {
                fightEnd = await showPopLayerV2(this.prefabBountyFightLose, BountyFightLose, false)
            }
        }
        fightEnd.setFightEndData(data, (b: boolean) => {
            MainScene.isComeFromUIWin = b;
            this.onExit()
        })

        // Net.pushLoaclMessage(LOCAL_MESSAGE.FightEnd, data.isWin)
        if (data.isSurrender && data.isWin) {
            ShowTips("FightWinBySurrender")
        }
    }
    /* 赏金赛战斗结束 */
    public bountyFightEnd(data: proto.Msg_BountyRewardPush) {
        if (this.status == FightStatus.End) {
            //已经结束了
            return;
        }
        cc.director.getScheduler().setTimeScale(1);
        // 有投降框，先消除
        this.waitNode.active = false;
        if (null != this.scr_surrender) {
            this.scr_surrender.setVisible(false);
            this.scr_surrender = null;
        }
        this.status = FightStatus.End;
        if (this.fightType !== proto.FightType.Bounty) {
            this.showBountyFightEnd(data);
        } else {
            this.BountyResultLayer.active = true;
            let BountyResultLayerTS = this.BountyResultLayer.getComponent(BountyFightResult);
            BountyResultLayerTS.setData(data, () => {
                this.showBountyFightEnd(data);
            })
        }
    }
    /* 赏金赛战斗结束 */
    async showBountyFightEnd(data: proto.Msg_BountyRewardPush) {
        let fightEnd = null;
        if (data.isWin) {
            fightEnd = await showPopLayerV2(this.prefabBountyFightWin, BountyFightWin, false)
        } else {
            fightEnd = await showPopLayerV2(this.prefabBountyFightLose, BountyFightLose, false)
        }
        fightEnd.setFightEndData(data, (b: boolean) => {
            MainScene.isComeFromUIWin = b;
            this.onExit()
        })
    }
    /*  */
    onExit() {
        LoadScene('LoadingScene', (error, scene: cc.Scene) => {
            let loadingTs = scene.children[0].getComponent(LoadingScene);
            let loading = null;
            loadingTs.setLoading(false);
            loading = scene.getComponentInChildren(LoadingPrefab)
            loading.loadRes('MainScene', async () => {
            }, async () => {
                loading.enterScene('MainScene');
            }, false);
        });
    }

    /*  */
    oneStep(data: proto.ICombatData) {
        switch (data.ev) {
            case proto.CombatEvent.Attack: /* 攻击 */
                this.onEvtAttack(data.attack)
                break
            case proto.CombatEvent.Cure: /* 恢复 */
                this.OnEvtCure(data.cure)
                break
            // case proto.CombatEvtNum.CheckBuff: /* 检查BUFF */
            //     this.onEvtCheckBuff(evtData.checkBuff);
            //     break;
            case proto.CombatEvent.AddBuffer: /* 增加BUFF */
                this.onEvtAddBuff(data.addBuffer)
                break
            case proto.CombatEvent.RemoveBuffer:
                this.onEvtRemoveBuff(data.removeBuffer)
                break
            case proto.CombatEvent.Shield:  // 护盾
                this.onEvtShield(data.shield);
                break
            case proto.CombatEvent.Revive:  // 复活
                this.onEvtRevive(data.revive);
                break
            case proto.CombatEvent.Dead:    // 死亡
                this.onEvtDead(data.dead)
                break
            case proto.CombatEvent.Move:    // 棋子移动
                this.onEvtMove(data.move)
                break
            case proto.CombatEvent.Hp:      // 同步Hp
                this.onEvtHp(data.hp)
                break
            case proto.CombatEvent.Transform: // 变身
                this.onEvtTransform(data.transform)
                break
        }
    }

    /* 攻击 */
    onEvtAttack(data: proto.ICombatEventAttack) {
        let srcTower = this.getTowerByInstanceID(data.towerId);
        if (!srcTower) {
            cc.error(`onEvtAttack error: srcTower is null, towerId: ${data.towerId}`);
            return;
        }
        srcTower.onAttack(data.skillID, data.damages);
    }
    /* 护盾 */
    onEvtShield(data: proto.ICombatEventShield) {
        let srcTower = this.getTowerByInstanceID(data.towerID);
        if (!srcTower) {
            cc.error(`onEvtCure error: srcTower is null, towerId: ${data.towerID}`);
            return;
        }
        srcTower.Shield(data.shield);
    }

    /* 复活 */
    onEvtRevive(data: proto.ICombatEventRevive) {
        let srcTower = this.getTowerByInstanceID(data.towerID);
        let targetTower = this.getTowerByInstanceID(data.targetID);
        if (!srcTower) {
            cc.error(`onEvtCure error: srcTower is null, towerId: ${data.towerID}`);
            return;
        }
        if (!targetTower) {
            cc.error(`onEvtCure error: targetTower is null, towerId: ${data.targetID}`);
            return;
        }
        //if (targetTower.isDie) {
        targetTower.reviveTower(data);
        if (targetTower.CardId === 42004) {
            this.showFishManBuff();
        }
        this.refreshTowerCount();
        // 增加受击特效
        let bullet = Bullet.create(data.skillID, [], this, srcTower)
        bullet.node.zIndex = FightZIndex.Bullet;
        this.chessboard.bulletNode.addChild(bullet.node)
        bullet.run(srcTower.node.getPosition());
        //}
    }

    /* 死亡 */
    onEvtDead(data: proto.ICombatEventDead) {
        let tower = this.getTowerByInstanceID(data.towerID);
        if (tower == null) {
            cc.error(`onEvtDead error: srcTower is null, towerId: ${data.towerID}`);
            return
        }
        tower.die(true);
    }

    /* 棋子移动 */
    onEvtMove(data: proto.ICombatEventMove) {
        let tower = this.getTowerByInstanceID(data.towerID);
        if (tower == null) {
            cc.error(`onEvtMove error: srcTower is null, towerId: ${data.towerID}`);
            return
        }
        // 将棋子移出原来位置
        let originPos = tower.node.getPosition()
        let originRow = tower.row
        let originCol = tower.column
        this.chessboard.towerMatrix[originRow][originCol] = tower.nextTower
        // 将棋子移入新位置
        tower.nextTower = this.chessboard.towerMatrix[data.row][data.column]
        this.chessboard.towerMatrix[data.row][data.column] = tower
        tower.row = data.row
        tower.column = data.column
        // 移动棋子显示位置
        let grid = this.chessboard.gridMatrix[data.row][data.column];
        tower.node.setPosition(grid.pos);
        tower.node.zIndex = -grid.pos.y;

        let skillData = tab.Data.SkillTableByID.getValue(data.skillID);
        if (skillData) {
            let cb = () => {
                tower.incEffectCount(-1)
            }
            if (skillData.BulletEffectID != 0) {
                tower.incEffectCount(1)
                this.addEffect(skillData.BulletEffectID, originPos, null, cb)
            }

            if (skillData.HitEffectID != 0) {
                tower.incEffectCount(1)
                this.addEffect(skillData.HitEffectID, grid.pos, null, cb)
            }
        }
    }

    /* 同步Hp */
    onEvtHp(data: proto.ICombatEventHp) {
        let tower = this.getTowerByInstanceID(data.towerID);
        if (tower == null) {
            cc.error(`onEvtMove error: srcTower is null, towerId: ${data.towerID}`);
            return
        }
        tower.SetHp(data.hp, data.maxHp)
    }

    /* 更换棋子 */
    onEvtTransform(data: proto.ICombatEventTransform) {
        let tower = this.getTowerByInstanceID(data.towerID);
        if (tower == null) {
            cc.error(`onEvtMove error: srcTower is null, towerId: ${data.towerID}`);
            return
        }
        this.chessboard.rebuildTower(tower, data)
    }

    /*  */
    OnEvtCure(data: proto.ICombatEventCure) {
        let srcTower = this.getTowerByInstanceID(data.towerId);
        if (!srcTower) {
            cc.error(`onEvtCure error: srcTower is null, towerId: ${data.towerId}`);
            return;
        }
        srcTower.Cure(data.hp)
    }

    /*  */
    onEvtAddBuff(data: proto.ICombatEventAddBuffer) {
        let tower = this.getTowerByInstanceID(data.towerID);
        if (!tower) {
            cc.error(`onEvtAddBuff error: srcTower is null, towerId: ${data.towerID}`);
            return;
        }
        tower.AddBuff(data.bufferID, data.index, data.layer)
    }

    /*  */
    onEvtRemoveBuff(data: proto.ICombatEventRemoveBuffer) {
        let tower = this.getTowerByInstanceID(data.towerID);
        if (!tower) {
            cc.error(`onEvtRemoveBuff error: srcTower is null, towerId: ${data.towerID}`);
            return;
        }
        tower.RemoveBuff(data.index)
    }
    /**
     * 
     * @param instanceID 
     * @returns 
     */
    getTowersByStaticID(staticId: number): Tower[] {
        let towerArr = [];
        for (let i = 0; i < TotalRows; i++) {
            for (let j = 0; j < TotalColumns; j++) {
                let tower = this.chessboard.towerMatrix[i][j];
                if (tower && tower.Level < 7 && tower.PlayerTag == this.PlayerTag) {
                    if (tower.CardId == staticId) {
                        towerArr.push(tower);
                    } else {
                        let cardConfig = tab.Data.CardTableByID.getValue(tower.CardId)
                        if (cardConfig && cardConfig.TransformID == staticId) {
                            towerArr.push(tower);
                        }
                    }
                }
            }
        }
        return towerArr;
    }
    /*  */
    getTowerByInstanceID(instanceID: number): Tower | undefined {
        for (let i = 0; i < TotalRows; i++) {
            for (let j = 0; j < TotalColumns; j++) {
                let tower = this.chessboard.towerMatrix[i][j];
                if (tower && tower.InstanceId == instanceID) {
                    return tower;
                }
            }
        }
        return;
    }

    /*  */
    addBullet(tower: Tower, srcPos: cc.Vec2, damages: proto.IDamageData[]/*, buffs: proto.IBuffData[]*/, skillID: number): Bullet {
        if (!cc.isValid(tower)) { return null; }
        let bullet = Bullet.create(skillID, damages, this, tower)
        bullet.node.zIndex = FightZIndex.Bullet;
        this.chessboard.bulletNode.addChild(bullet.node)
        bullet.run(srcPos);
        return bullet
    }

    /*  */
    addEffect(effectId: number, pos: cc.Vec2, zIndex?: number, cb?: Function): Effect {
        let effect = Effect.create(effectId, e => {
            EffectAutoRemove(e)
            if (cb) {
                cb(effectId)
            }
        })
        effect.node.setPosition(pos)
        if (zIndex == null) {
            if (effect.node.zIndex < 0) {
                zIndex = getZIndexWithPos(FightZIndex.Floor, pos)
            } else {
                zIndex = getZIndexWithPos(FightZIndex.Effect, pos)
            }
        }
        // this.groundNode.addChild(effect.node, zIndex)
        if (zIndex > FightZIndex.Floor) {
            this.chessboard.effectNode.addChild(effect.node)
        } else {
            this.chessboard.undergroundNode.addChild(effect.node)
        }

        return effect;
    }

    /*  */
    showCardInfo(staticId: number, cardLv: number, CompoundLv: number) {
        this.bShowCardInfo = true;
        let cardTab: tab.CardTable = tab.Data.CardTableByID.getValue(staticId);
        this.cardInfo.getComponent(SmallPortrait).initWithStaticId(staticId, true, CardNodeState.CARD_NODE_STATE_NONE, cardLv);
        // this.cardInfoName.string = cardTab.Name;
        this.cardInfoAnim.play();
        handleRichText(staticId, cardLv, CompoundLv, this.cardInfoDesc);
    }

    onClickEmoji() {
        this.emojiSelector.node.active = true;
    }

    PlayEmoji(emojiID: number, isBottom: boolean) {
        if (this.bEmojiSilent && !isBottom) {
            return;
        }

        let nodeName;
        let pos: cc.Vec2
        let zindex = 0;
        if (isBottom) {
            nodeName = "MyEmojiPlayer";
            pos = this.myEmojiPos//new cc.Vec2(120, 200)
            zindex = 1;

            let req = new proto.Msg_FightEmoji()
            req.emojiID = emojiID;
            Net.Send(proto.FightPtl.FightEmoji, req)
        } else {
            nodeName = "OtherEmojiPlayer";
            pos = this.enemyEmojiPos//new cc.Vec2(470, 770)
        }
        EmojiPlayer.play(emojiID).then(player => {
            if (cc.isValid(this.node) && player) {
                player.node.name = nodeName
                let oldNode = cc.director.getScene().getChildByName(nodeName)
                if (oldNode) {
                    oldNode.destroy()
                }

                player.node.setPosition(pos)
                cc.director.getScene().addChild(player.node, zindex)
            }
        })
    }
}

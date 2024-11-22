/**
 *  战场战斗管理
 */

import { tab } from "../../Table/table_gen";
import { proto } from "../../Protocol/client_protocol";

import Waiting from "../Utils/Waiting";
import { WaitingTag } from "../Utils/WaitingTag";
import ChessFightScene from './ChessFightScene'
import FightMsgManager from "./FightMsgManager";
import { Net } from "../../Protocol/Net";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import GuideController from "../Guide/GuideController";
import LoadingPrefab from "../Loading/LoadingPrefab";
import Role from "../Common/Role";

/*  */
enum ChessFightStatus {
    WAITTING,       // 等待
    CONSTRUCTING,   // 建设阶段
    COMBAT,         // 战斗准备
    COMBATTING,     // 开始战斗阶段
    COMBAT_WAIT,    // 等待战斗特效播放完毕
    COMBAT_DONE,    // 结束战斗
    SNAPSHOT,       // 战斗快照获取阶段
}

export default
    class ChessFightMgr {
    private m_fightScene: ChessFightScene = null // 战斗场景组件
    private m_status: ChessFightStatus = ChessFightStatus.WAITTING // 场景当前状态

    private m_tweenCountdown: cc.Tween<cc.ProgressBar> = null // 当前计时器动画
    private m_loseTag: number = 0; // 失败方标记
    private m_combatData: proto.ICombatData[] = [] // 战斗数据

    get combatData(): proto.ICombatData[] {
        return this.m_combatData
    }

    get isConstructionPhase(): boolean {
        return this.m_status == ChessFightStatus.CONSTRUCTING
    }
    constructor(scene: ChessFightScene) {
        this.m_fightScene = scene
    }

    // 场景准备就绪
    onReady() {
        this.switchStatus(ChessFightStatus.WAITTING)
    }
    syncFightData(data: any, setAllData: boolean) {
        setAllData ? (data as proto.Msg_FightSnapshotRsp) : (data as proto.IMsg_ConstructionPhase);
        if (this.m_fightScene.chessboard.towerMatrix && this.m_fightScene.chessboard.gridMatrix) {
            this.m_fightScene.chessboard.clearAllTowers();
        }
        FightMsgManager.Instance.PlayerTag = data.playerTag;
        FightMsgManager.Instance.otherFightData = data.opponentData;
        if (setAllData) {
            FightMsgManager.Instance.allFightData = data.allData;
        }
        //自己的信息
        for (let i = 0; i < FightMsgManager.Instance.allFightData.length; i++) {
            let data: proto.IBountyFightData = FightMsgManager.Instance.allFightData[i];
            if (data.roleId === Role.Instance.RoleData.id) {
                FightMsgManager.Instance.myFightData = data;
            }
        }
        // 初始化棋盘
        this.m_fightScene.chessboard.init(FightMsgManager.Instance.PlayerTag != 0, this.m_fightScene);
        // 设置战斗双方数据switchStatus
        this.m_fightScene.setChessFightInfo();
        //类型断言
        this.m_fightScene.myHp = (FightMsgManager.Instance.myFightData as proto.IBountyFightData).hp;
        this.m_fightScene.otherHp = (FightMsgManager.Instance.otherFightData as proto.IBountyFightData).hp;
        this.m_fightScene.refreshHp();
        this.m_fightScene.waitNode.active = false;
    }
    // 进入建造阶段
    enterConstructionPhase(msg: proto.IMsg_ConstructionPhase, elapsed = 0) {
        if (msg == null) {
            return
        }
        FightMsgManager.Instance.construtionPhase = null
        let MaxConstructSec = 0;
        if (this.m_fightScene.fightType !== proto.FightType.Bounty) {
            MaxConstructSec = tab.Data.GetKeyValue_ConfigTable().ConstructionTime
        } else {
            // 当前阶段tag可能发生变化 重新初始化棋盘
            // 换棋盘之前clear棋盘
            MaxConstructSec = 30;
            // 同步一下战斗信息
            this.syncFightData(msg, false);
        }
        this.m_fightScene.selectedCardIdx = -1;
        this.m_fightScene.warringAnim.node.active = false;
        this.switchStatus(ChessFightStatus.CONSTRUCTING)
        if (GuideController.Instance.isGuiding()) {
            this.m_fightScene.setCountdown(25, 25);
            if (msg.round === 3) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.CONSTRUCTING, true)
            }
        }
        cc.log(`ConstructionPhase: ${msg.round}`)
        cc.director.getScheduler().setTimeScale(1)

        this.m_fightScene.chessboard.resetTower(msg.towers)
        this.doConstructCombat(msg.combatData)
        this.m_fightScene.chessboard.setEnemyTowerColor(cc.Color.GRAY)
        this.m_fightScene.chessboard.setAllHpBarActive(false)

        // 设置回合文字并执行开始字样动画
        this.m_fightScene.setRound(msg.round, elapsed == 0)
        // 重置进度条
        this.m_fightScene.setLeftConstructCount(msg.leftCount);
        this.m_fightScene.showNextCards(msg.nextCards)
        // 显示鱼人buff
        this.m_fightScene.showFishManBuff();
        // 等待开始字样播放完毕后再开启进度条
        // 引导阶段没有20秒 直接放棋子 放完之后直接开始战斗
        if (!(GuideController.Instance.isGuiding() && msg.round < 3)) {
            this.m_fightScene.setCountdown(MaxConstructSec - elapsed, MaxConstructSec);
            let timeoutSec = MaxConstructSec - elapsed
            if (elapsed == 0) {
                this.m_fightScene.scheduleOnce(() => {
                    this.m_tweenCountdown = this.m_fightScene.startCountdown(MaxConstructSec - elapsed, MaxConstructSec);
                }, tab.Data.GetKeyValue_ConfigTable().StartFightWaitSec)
                timeoutSec += tab.Data.GetKeyValue_ConfigTable().StartFightWaitSec
            } else {
                this.m_tweenCountdown = this.m_fightScene.startCountdown(MaxConstructSec - elapsed, MaxConstructSec);
            }

            if (timeoutSec) {
                this.m_fightScene.scheduleOnce(() => {
                    FightMsgManager.Instance.sendClientConstructionEnd()
                }, timeoutSec);
            }
        }
    }
    // 进入战斗阶段
    enterCombatPhase(msg: proto.IMsg_CombatPhase, elapsed = 0) {
        this.switchStatus(ChessFightStatus.COMBAT)
        cc.log(`onCombatPhase!`)

        if (elapsed == 0) {
            this.m_fightScene.battleStartAnim.node.active = true
            this.m_fightScene.battleStartAnim.play()
        }

        this.m_fightScene.clearNextCards();
        this.m_fightScene.setLeftConstructCount(0);
        this.m_fightScene.chessboard.resetTower(msg.towers)
        this.m_fightScene.chessboard.setEnemyTowerColor(cc.Color.WHITE)
        this.m_fightScene.chessboard.setAllHpBarActive(true)

        this.m_fightScene.lblPhase.string = "战斗阶段"
        this.m_fightScene.refreshTowerCount()
        // 保存战斗数据
        this.m_combatData = msg.data
        this.m_loseTag = msg.loseTag

        // 重置进度条
        let MaxCombatSec = tab.Data.GetKeyValue_ConfigTable().CombatTime
        // 显示鱼人buff
        this.m_fightScene.showFishManBuff();

        // 战斗前先播放Buffer特效
        for (let data of this.combatData) {
            if (data.timestamp > elapsed) {
                break
            }
            if (data.ev == proto.CombatEvent.AddBuffer) {
                this.m_fightScene.oneStep(data);
            }
        }

        if (this.m_fightScene.currentRound === 2 && GuideController.Instance.isGuiding() && !this.m_fightScene.round2fight) {
            // cc.log("范围引导没有完成")
        } else {
            this.m_fightScene.setCountdown(MaxCombatSec - elapsed, MaxCombatSec);
            if (elapsed == 0) {
                this.m_fightScene.scheduleOnce(() => {
                    this.doCombat(elapsed)
                }, tab.Data.GetKeyValue_ConfigTable().StartFightWaitSec);
            } else {
                this.doCombat(elapsed)
            }
        }
    }

    // 请求战斗快照
    requestSnapshot() {
        FightMsgManager.Instance.requestSnapshot()
        Waiting.Show(WaitingTag.Snapshot, 0, 0)
        this.switchStatus(ChessFightStatus.SNAPSHOT)
    }

    // 获得战斗快照
    resetBySnapshot(rsp: proto.Msg_FightSnapshotRsp) {
        if (rsp == null) {
            return
        }
        if (this.m_status != ChessFightStatus.SNAPSHOT) {
            cc.log("build failed: not snapshot phase")
            return
        }
        if (rsp.result != proto.CommonErrorCode.Succeed) {
            Waiting.Hide(WaitingTag.Snapshot, true);  /* zhibo+ @20230519 for <requestSnapshot() 里面掉起了Waiting().Show，这里必须关闭，否则就是一直在转圈> */
            return
        }
        // 删除塔
        if (FightMsgManager.Instance.ChessFightType === proto.FightType.Bounty) {
            if (rsp.isCombatPhase) {
                this.syncFightData(rsp, true);
            }else{
                if (this.m_fightScene.chessboard.towerMatrix && this.m_fightScene.chessboard.gridMatrix) {
                    this.m_fightScene.chessboard.clearAllTowers();
                }
                FightMsgManager.Instance.allFightData = rsp.allData;
            }
            this.m_fightScene.BountyRankLayerTs.refreshBountyData(FightMsgManager.Instance.allFightData);
        }
        if (rsp.isCombatPhase) {
            if (rsp.loseTag >= 0) {
                this.m_fightScene.resetHp(rsp.playerHeart, true, rsp.loseTag === this.m_fightScene.PlayerTag);
            } else {
                this.m_fightScene.resetHp(rsp.playerHeart, false);
            }
            this.m_fightScene.setRound(rsp.round, false);
            // 进入战斗阶段
            this.enterCombatPhase({
                data: rsp.combatData,
                towers: rsp.towers,
                loseTag: rsp.loseTag,
            }, rsp.elpased)
        } else {
            if (FightMsgManager.Instance.ChessFightType !== proto.FightType.Bounty) {
                this.m_fightScene.resetHp(rsp.playerHeart, false);
                this.enterConstructionPhase({
                    round: rsp.round,
                    nextCards: rsp.nextCards,
                    leftCount: rsp.leftCount,
                    towers: rsp.towers,
                    combatData: rsp.combatData,
                }, rsp.elpased)
            } else {
                this.enterConstructionPhase({
                    round: rsp.round,
                    nextCards: rsp.nextCards,
                    leftCount: rsp.leftCount,
                    towers: rsp.towers,
                    combatData: rsp.combatData,
                    opponentData: rsp.opponentData,
                    playerTag: rsp.playerTag,
                },rsp.elpased)
            }
        }
    }

    // 建塔
    buildTower(msg: proto.Msg_FightBuildRsp) {
        if (msg == null) {
            return
        }
        if (this.m_status != ChessFightStatus.CONSTRUCTING) {
            cc.log("build failed: not construct phase")
            this.m_fightScene.clearNextCards()
            return
        }
        if (msg.result != proto.CommonErrorCode.Succeed) {
            cc.error("build failed!")
            this.m_fightScene.showNextCards(msg.nextCards);
            return
        }
        this.m_fightScene.chessboard.buildTower(msg.towerData.cardID,
            msg.towerData.towerLv,
            msg.towerData.instanceID,
            msg.towerData.row,
            msg.towerData.column,
            msg.towerData.playerTag,
            msg.towerData.maxHp,
            msg.towerData.cardLv);
        this.doConstructCombat(msg.combatData);
        this.m_fightScene.showFishManBuff();
        this.m_fightScene.setLeftConstructCount(msg.leftCount);
        this.m_fightScene.showNextCards(msg.nextCards);
    }

    /****************************************************************/
    // 退出状态处理
    /****************************************************************/
    // 切换状态
    private switchStatus(status: ChessFightStatus) {
        // 结束原始状态
        switch (this.m_status) {
            case ChessFightStatus.CONSTRUCTING:
                this.exitConstructionPhase()
                break

            case ChessFightStatus.COMBAT:
                this.exitCombatPhase()
                break

            case ChessFightStatus.COMBATTING:
                this.exitCombattingPhase()
                break

            case ChessFightStatus.COMBAT_WAIT:
                this.exitCombatWaitPhase()
                break

            case ChessFightStatus.SNAPSHOT:
                this.exitSnapshot()
                break
        }
        this.m_status = status
    }

    // 退出建设阶段
    private exitConstructionPhase() {
        this.m_fightScene.unscheduleAllCallbacks();
        if (this.m_tweenCountdown != null) {
            this.m_tweenCountdown.stop()
            this.m_tweenCountdown = null
        }
    }

    // 退出战斗阶段
    private exitCombatPhase() {
        this.m_fightScene.unscheduleAllCallbacks();
    }

    // 退出战斗阶段
    private exitCombattingPhase() {
        this.m_fightScene.unscheduleAllCallbacks();
        cc.director.getScheduler().setTimeScale(1);
        if (this.m_tweenCountdown != null) {
            this.m_tweenCountdown.stop()
            //@ts-ignore
            this.m_tweenCountdown._finalAction._speedMethod = false
            //@ts-ignore
            this.m_tweenCountdown._finalAction._speed = 1
            this.m_tweenCountdown = null
        }
    }

    // 退出等待战斗特效播放完毕
    private exitCombatWaitPhase() {
        this.m_fightScene.unscheduleAllCallbacks();
    }

    // 退出请求战斗快照状态
    private exitSnapshot() {
        Waiting.Hide(WaitingTag.Snapshot, true)
    }

    /****************************************************************/
    // 建设数据处理
    /****************************************************************/
    public doConstructCombat(combatData: proto.ICombatData[]) {
        if (!combatData) { return }
        // 移除全部Buffer
        this.m_fightScene.chessboard.removeAllBuffer()
        for (let data of combatData) {
            if (data.ev == proto.CombatEvent.AddBuffer) {
                this.m_fightScene.onEvtAddBuff(data.addBuffer)
            }
        }
    }

    /****************************************************************/
    // 战斗数据处理
    /****************************************************************/
    // 进入战斗阶段
    public doCombat(elapsed = 0) {
        if (!this.combatData || this.combatData.length == 0) {
            this.doCombatWait()
            return;
        }

        this.switchStatus(ChessFightStatus.COMBATTING)

        // 总战斗时常
        let MaxCombatSec = tab.Data.GetKeyValue_ConfigTable().CombatTime
        // 修正两倍速时间
        let CombatAccelerateTime = tab.Data.GetKeyValue_ConfigTable().CombatAccelerateTime
        if (elapsed > CombatAccelerateTime) {
            elapsed = CombatAccelerateTime + (elapsed - CombatAccelerateTime) * 2;
        }

        for (let data of this.combatData) {
            if (data.timestamp <= elapsed) {
                // 由于添加Buffer事件提前执行，此处需要胡略Buffer添加事件
                if (data.ev != proto.CombatEvent.AddBuffer) {
                    this.m_fightScene.oneStep(data);
                }
            } else {
                this.m_fightScene.scheduleOnce(() => {
                    if (!cc.isValid(this.m_fightScene)) {
                        return;
                    }
                    this.m_fightScene.oneStep(data);
                }, data.timestamp - elapsed);
            }
        }

        //开始倒计时
        this.m_tweenCountdown = this.m_fightScene.startCountdown(MaxCombatSec - elapsed, MaxCombatSec);
        //加速
        this.m_fightScene.scheduleOnce(() => {
            if (!cc.isValid(this.m_fightScene)) {
                return;
            }
            this.m_fightScene.warringAnim.node.active = true;
            this.m_fightScene.warringAnim.play();
            cc.director.getScheduler().setTimeScale(2);
            //@ts-ignore
            this.m_tweenCountdown._finalAction._speedMethod = true
            //@ts-ignore
            this.m_tweenCountdown._finalAction._speed = 0.5
        }, CombatAccelerateTime - elapsed);
        // 等待结束战斗
        this.m_fightScene.scheduleOnce(() => {
            this.doCombatWait()
        }, this.combatData[this.combatData.length - 1].timestamp - elapsed);
    }

    // 等待战斗特效播放完毕
    private doCombatWait() {
        // 战斗结束
        this.m_fightScene.warringAnim.node.active = false;
        this.switchStatus(ChessFightStatus.COMBAT_WAIT)
        let waitSec = 0
        let cb = (dt) => {
            waitSec += dt
            if (waitSec < tab.Data.GetKeyValue_ConfigTable().EndFightWatchSec && this.m_fightScene.chessboard.IsPlayingnAttackEffect()) {
                return
            }
            this.m_fightScene.unschedule(cb);
            this.doCombatDone()
        }
        this.m_fightScene.schedule(cb, 0.25)
    }

    // 结束战斗
    public doCombatDone(stepOver?: boolean) {
        if (GuideController.Instance.isGuiding() && !stepOver && this.m_fightScene.currentRound === 1) {
            Net.pushLoaclMessage(LOCAL_MESSAGE.COMBAT_DONE, true)
        } else {
            this.switchStatus(ChessFightStatus.COMBAT_DONE)
            this.m_fightScene.playCombatAnim(this.m_loseTag)
            this.m_fightScene.scheduleOnce(() => {
                if(this.m_status===ChessFightStatus.COMBAT_DONE){
                    if(this.m_fightScene.fightType===proto.FightType.Bounty){
                        this.m_fightScene.waitNode.active = true;
                    }
                    FightMsgManager.Instance.sendClientCombatEnd()
                }
            }, tab.Data.GetKeyValue_ConfigTable().EndFightWaitSec);
        }
    }
}
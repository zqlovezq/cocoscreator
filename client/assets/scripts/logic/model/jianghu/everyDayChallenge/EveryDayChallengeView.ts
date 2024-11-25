import { _decorator, Button, Component, Label, Node, RichText, Sprite } from 'cc';
import { ViewScreen } from '../../../../framework/base/ViewScreen';
import { EveryDayChallengeBoxItem } from './EveryDayChallengeBoxItem';
import { tab } from '../../../../Table/table_gen';
import { GameUtil, getTimeUntilNextDay, handleNumerText, setTextTime } from '../../../utils/GameUtil';
import { LangMgr } from '../../../mgr/LangMgr';
import { GameplayViewDataMgr } from '../GameplayViewDataMgr';
import { ShowTips, UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { OpenFunctionMgr } from '../../../../Common/component/OpenFunctionMgr';
import { RoleData } from '../../role/RoleData';
import { TimeUtil } from '../../../utils/TimeUtil';
import { GameplayControl } from '../GameplayControl';
import { BattleMainDataControl } from '../../home/battle/BattleMainDataControl';
import { ItemData } from '../../item/ItemData';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { AdMgr } from '../../AdMgr';
import { EventMgr } from '../../../mgr/EventMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * EveryDayChallengeView
 * zhudingchao
 * Wed Jul 10 2024 10:50:32 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/everyDayChallenge/EveryDayChallengeView.ts
 *
 */

@ccclass('EveryDayChallengeView')
export class EveryDayChallengeView extends ViewScreen {
    @property(Label)
    timerLab: Label = null;
    @property(RichText)
    difficutyLab: RichText = null;
    @property(Label)
    cdTimerLab: Label = null;
    @property(Node)
    downNode: Node = null;
    @property(Label)
    scoreLab: Label = null;
    @property([Node])
    eventNodes: Array<Node> = [];
    @property(Node)
    battleBtnNode: Node = null;
    @property(Node)
    sweepBtnNode: Node = null;
    @property(Node)
    timesBtnNode: Node = null;
    @property(Node)
    maxScoreNode: Node = null;
    @property(Label)
    maxScoreLab: Label = null;
    @property([EveryDayChallengeBoxItem])
    boxItems: Array<EveryDayChallengeBoxItem> = [];
    @property(Label)
    resnumLab: Label = null;

    private endTimer: number = 0;
    private difficulty: number = 1;
    private table: tab.DailyChallengeLevelTable;
    private totalScore: number;

    register(): void {
        EventMgr.onMsg(proto.Ptl.DailyChallengeDataPush, this.on_s2c_DailyChallengeDataPush, this);
        EventMgr.onMsg(proto.Ptl.DailyChallengeLevelRsp, this.on_s2c_DailyChallengeLevelRsp, this);
        EventMgr.onMsg(proto.Ptl.DailyChallengeRewardRsp, this.on_s2c_DailyChallengeRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.DailyChallengeSweepRsp, this.on_s2c_DailyChallengeSweepRsp, this);
        EventMgr.onMsg(proto.Ptl.DailyChallengeWatchAdvRsp, this.on_s2c_DailyChallengeWatchAdvRsp, this);

    }
    onShow(): void {
        this.initView();

    }
    initView() {
        this.difficulty = GameplayViewDataMgr.ins.dailyChallengeDataMsg.level;
        this.table = tab.getData().DailyChallengeLevelTableByLevel.getValue(this.difficulty);
        this.totalScore = GameplayViewDataMgr.ins.dailyChallengeDataMsg.score;
        //this.difficutyLab.string = this.difficulty + "";
        this.difficutyLab.string = LangMgr.getCombineString("ui_everyday_2", [this.difficulty]);
        this.initBoxItem();
        this.initEndTimer();
        this.initEventView();
        this.updateBtnState();
        this.initDownBtn();
    }
    initEndTimer() {
        this.unschedule(this.updateTimer)
        this.endTimer = getTimeUntilNextDay();
        this.timerLab.string = setTextTime(this.endTimer);
        this.schedule(this.updateTimer, 1)
    }
    updateTimer = () => {
        this.endTimer--;
        if (this.endTimer >= 0) {
            this.timerLab.string = setTextTime(this.endTimer);
        } else {
            this.unschedule(this.updateTimer)
        }
    }
    initBoxItem() {

        let currScore = this.totalScore;
        this.scoreLab.string = currScore + "";
        let receivedScore = GameplayViewDataMgr.ins.dailyChallengeDataMsg.receivedScore;

        let requires = this.table.Require;
        for (let i: number = 0; i < requires.length; i++) {
            let dropId = this.table.DropId[i];
            this.boxItems[i].initView(i == 0 ? 0 : requires[i - 1], requires[i], currScore, dropId, requires[i] <= receivedScore)
        }

    }
    initEventView() {
        // let buffId = 1;
        // let buffTable = tab.getData().DailyChallengeBuffTableById.getValue(buffId);
        let pveBuffIds = GameplayViewDataMgr.ins.dailyChallengeBuffs;
        for (let key in pveBuffIds) {
            let pveBuffTable = tab.getData().PveStageBuffTableById.getValue(pveBuffIds[key]);
            let node = this.eventNodes[key];
            let sprite = node.getChildByName("icon").getComponent(Sprite);
            sprite.setTexture(pveBuffTable.ShowIcon);
            node.getChildByName("boxscore_txt").getComponent(Label).string = LangMgr.getLab(pveBuffTable.Show);
        }
    }
    initDownBtn() {
        if (this.table.IsEasier) {
            this.downNode.active = true;
            let cd = Number(GameplayViewDataMgr.ins.dailyChallengeDataMsg.cd);
            if (cd > 0) {
                this.setCdTimerLab(cd - RoleData.ins.getServerUtcTime())
                this.downNode.getComponent(Sprite).grayscale = true;
                this.downNode.getComponent(Button).enabled = false;
            } else {
                this.downNode.getComponent(Sprite).grayscale = false;
                this.downNode.getComponent(Button).enabled = true;
            }
        } else {
            this.downNode.active = false;
        }

    }

    setCdTimerLab(downCdTimer: number) {
        let data = TimeUtil.formaterWithOutSecond3(downCdTimer);
        let str = "";
        if (data["day"] > 0) {
            str += data["day"] + LangMgr.getLab("Tips_common_day")
        }
        if (data['hours'] > 0) {
            str += data["hours"] + LangMgr.getLab("Tips_common_hour")
        }
        if (data['minutes'] > 0) {
            str += data["minutes"] + LangMgr.getLab("Tips_common_minute")
        }
        this.cdTimerLab.string = str;
    }
    updateBtnState() {
        let maxNum = tab.getData().GetKeyValue_ConfigTable().DailyChallengeCount;
        let totalNum = GameplayViewDataMgr.ins.dailyChallengeDataMsg.challengeCount;
        if (totalNum >= maxNum) {
            this.battleBtnNode.active = false;
            this.sweepBtnNode.active = false;
            this.timesBtnNode.active = false;
            this.maxScoreNode.active = false;
        } else {
            this.maxScoreNode.active = false;
            this.sweepBtnNode.active = false;
            let lastTimer = GameplayViewDataMgr.ins.dailyChallengeDataMsg.challengeTotalCount - GameplayViewDataMgr.ins.dailyChallengeDataMsg.challengeCount;
            this.battleBtnNode.active = lastTimer > 0;
            this.timesBtnNode.active = lastTimer == 0;
            if (lastTimer > 0) {
                let pveTab = tab.getData().PveStageTableByStageId.getValue(this.table.StageId);
                this.resnumLab.string = pveTab.CostItemNum[0] + ""
            }
            let maxScore = GameplayViewDataMgr.ins.dailyChallengeDataMsg.maxScore;
            if (maxScore > 0 && lastTimer > 0) {
                let isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_DailyChallengeSweepAll);
                if (isOpen) {
                    this.sweepBtnNode.active = true;
                    this.maxScoreNode.active = true;
                    this.maxScoreLab.string = handleNumerText(maxScore);
                } else {
                    this.sweepBtnNode.active = false;
                    this.maxScoreNode.active = false;
                }
            }else{
                // this.maxScoreNode.active = true;
            }

        }


    }


    onHelpBtn() {
        UIMgr.ins.show({ viewName: ViewName.EveryDayChallengeHelpPop })
    }

    onClickDown() {
        if (this.table.IsEasier) {
            let cd = Number(GameplayViewDataMgr.ins.dailyChallengeDataMsg.cd);
            if (cd <= 0) {
                GameplayControl.ins.requestDailyChallengeLevel(this.table.Level - 1);
            }
        }
    }
    onClickUpBtn() {
        let nextTable = tab.getData().DailyChallengeLevelTableByLevel.getValue(this.table.Level + 1);
        if (nextTable) {
            if (BattleMainDataControl.ins.getIsPasstStageByStageId(nextTable.MainStageLimit)) {
                GameplayControl.ins.requestDailyChallengeLevel(nextTable.Level);
            } else {
                let chapter = tab.getData().PveStageTableByStageId.getValue(nextTable.MainStageLimit);
                if (chapter) {
                    ShowTips(LangMgr.getCombineString("Tips_dailychallengeunlockdifficulty", [LangMgr.getLab(chapter.StageName)]));
                }
            }
        } else {
            ShowTips(LangMgr.getLab("Tips_dailychallenge_1"))
            //ShowTips("已达到当前最高难度")

        }





    }
    onChallengeBtn() {
        let pveTab = tab.getData().PveStageTableByStageId.getValue(this.table.StageId);
        let num = pveTab.CostItemNum[0];
        let id = ItemData.ins.isItemsEnoughByList([tab.CurrencyType.CurrencyType_Stamina], [num]);
        if (id <= 0) {
            let msg = new proto.Msg_StartStageReq();
            msg.stageId = this.table.StageId;
            Net.Send(proto.Ptl.StartStageReq, msg)
        } else {
            ShowTips(LangMgr.getLab("Tips_dailychallenge_2"))
            //ShowTips("体力不足");
            UIMgr.ins.show({ viewName: ViewName.ResourceBuyPop, data: { "itemId": tab.CurrencyType.CurrencyType_Stamina } })
        }

    }
    onClickSweepBtn() {
        let pveTab = tab.getData().PveStageTableByStageId.getValue(this.table.StageId);
        let num = pveTab.CostItemNum[0];
        let id = ItemData.ins.isItemsEnoughByList([tab.CurrencyType.CurrencyType_Stamina], [num]);
        if (id <= 0) {
            GameplayControl.ins.requestDailyChallengeSweep();
        } else {
            ShowTips(LangMgr.getLab("Tips_dailychallenge_2"))
            //ShowTips("体力不足");
            UIMgr.ins.show({ viewName: ViewName.ResourceBuyPop, data: { "itemId": tab.CurrencyType.CurrencyType_Stamina } })
        }
    }
    onClikcAddTimeBtn() {
        AdMgr.ins.playVideoAd(tab.AdType.AdType_DailyChallenge, () => {
            GameplayControl.ins.requestDailyChallengeWatchAdv();
        })
    }
    on_s2c_DailyChallengeDataPush(msg: proto.Msg_DailyChallengeDataPush) {
        this.initView();
    }
    on_s2c_DailyChallengeLevelRsp(msg: proto.Msg_DailyChallengeLevelRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.initView();
        }
    }

    on_s2c_DailyChallengeRewardRsp(msg: proto.Msg_DailyChallengeRewardRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.initBoxItem();
            if(msg.rewards&&msg.rewards.length>0){
                UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
            }
           
        }
    }
    on_s2c_DailyChallengeSweepRsp(msg: proto.Msg_DailyChallengeSweepRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.initView();
        }
    }
    on_s2c_DailyChallengeWatchAdvRsp(msg: proto.Msg_DailyChallengeWatchAdvRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.updateBtnState();

        }
    }
    onClikhideView() {
        this.onClose();
        UIMgr.ins.show({ viewName: ViewName.GameplayView })
    }

}
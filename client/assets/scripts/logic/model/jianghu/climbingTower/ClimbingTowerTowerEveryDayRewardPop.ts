import { _decorator, Component, Label, Node } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { ClimbingTowerTowerEveryDayRewardItem } from './ClimbingTowerTowerEveryDayRewardItem';
import { GameplayViewDataMgr } from '../GameplayViewDataMgr';
import { GameplayControl } from '../GameplayControl';
import { proto } from 'client_protocol';
import { EventMgr } from '../../../mgr/EventMgr';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import {getTimeUntilNextDay, setTextTime } from '../../../utils/GameUtil';
import { LangMgr } from '../../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * ClimbingTowerTowerEveryDayRewardPop
 * zhudingchao
 * Thu Jul 11 2024 17:13:54 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/climbingTower/ClimbingTowerTowerEveryDayRewardPop.ts
 *
 */

@ccclass('ClimbingTowerTowerEveryDayRewardPop')
export class ClimbingTowerTowerEveryDayRewardPop extends ViewPop {
   @property(Label)
   canReceivedLab: Label = null;
   @property(Node)
   receivedNode: Node = null;
   @property(Node)
   reachNode: Node = null;
   @property(Label)
   timerLab: Label = null;
   @property([ClimbingTowerTowerEveryDayRewardItem])
   items: Array<ClimbingTowerTowerEveryDayRewardItem> = []
   private currStateId: number;
   register(): void {
      EventMgr.onMsg(proto.Ptl.ReceiveClimbTowerDailyRewardsRsp, this.on_s2c_ReceiveClimbTowerDailyRewardsRsp, this);
   }
   onShow(): void {
      let msg = GameplayViewDataMgr.ins.climbTowerInfoMsg;
      if (msg.clearedStageIds.length == 0) {
         this.items[0].initView(null, false);
         this.items[1].initView(30101, true);
         this.currStateId = 0;
      } else {
         let id = msg.clearedStageIds[msg.clearedStageIds.length - 1]
         this.items[0].initView(id, false);
         this.items[1].initView(id + 1, true);
         this.currStateId = id;
      }
      if (msg.isReceivedDailyRewards) {
         this.timerLab.node.active = true;
      } else {
         this.timerLab.node.active = false;
      }
      this.updateBtn();



   }
   updateBtn() {
      let msg = GameplayViewDataMgr.ins.climbTowerInfoMsg;
      if (msg.isReceivedDailyRewards) {
         this.timerLab.node.active = true;
         this.initEndTimer();
      } else {
         this.timerLab.node.active = false;
      }
      if (msg.clearedStageIds.length == 0) {
         this.reachNode.active = false;
         this.receivedNode.active = false;
      } else {
         this.reachNode.active = !msg.isReceivedDailyRewards;
         this.receivedNode.active = msg.isReceivedDailyRewards;
      }

   }
   endTimer: number;
   initEndTimer() {
      this.unschedule(this.updateTimer)
      this.endTimer = getTimeUntilNextDay();
      //let tips = "{0}後可再次領取"
      this.timerLab.string = LangMgr.getCombineString("ui_climbingtower_13", [setTextTime(this.endTimer)]);
      this.schedule(this.updateTimer, 1)
   }
   updateTimer = () => {
      this.endTimer--;
      if (this.endTimer >= 0) {
         //let tips = "{0}後可再次領取"
         this.timerLab.string = LangMgr.getCombineString("ui_climbingtower_13", [setTextTime(this.endTimer)]);
      } else {
         this.unschedule(this.updateTimer)
      }
   }

   onClickReachBtn() {
      if (this.currStateId > 0) {
         GameplayControl.ins.requestReceiveClimbTowerDailyRewards();
      }

   }
   on_s2c_ReceiveClimbTowerDailyRewardsRsp(msg: proto.Msg_ReceiveClimbTowerDailyRewardsRsp) {
      if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
         this.updateBtn();
         UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
      }
   }
}
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, tab, BattleMainDataControl, _dec, _class, _class2, _crd, ccclass, property, BattleMainEliteData;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "./BattleMainDataControl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      BattleMainDataControl = _unresolved_4.BattleMainDataControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7a0bftbopdFgp6Qp5gEndCw", "BattleMainEliteData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleMainEliteData", BattleMainEliteData = (_dec = ccclass('BattleMainEliteData'), _dec(_class = (_class2 = class BattleMainEliteData extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor(...args) {
          super(...args);
          this.eliteStageInfo = null;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new BattleMainEliteData();
          }

          return this._instance;
        }

        initData(msg) {
          this.eliteStageInfo = msg;
        }
        /* 获取已经通关的关卡id列表 */


        getStageClearIds() {
          if (!this.eliteStageInfo) {
            return [];
          }

          return this.eliteStageInfo.clearedStageIds;
        }
        /* 获取最新的一个通关id */


        getLastStageId() {
          if (!this.eliteStageInfo) {
            return 100101;
          }

          if (this.eliteStageInfo.clearedStageIds.length === 0) {
            return 100101;
          }

          return this.eliteStageInfo.clearedStageIds[this.eliteStageInfo.clearedStageIds.length - 1];
        }
        /**
        * 当前关卡是否已经通关
        * @param id 
        */


        getIsPasstStageByStageId(id) {
          let clearIds = this.getStageClearIds();

          if (clearIds.length == 0) {
            return false;
          } else {
            return clearIds.indexOf(id) >= 0;
          }
        }
        /* 获取当前正在战斗的id */


        getCurFightStageId() {
          // return this._stageInfo.fightingMainStageId;
          const clearIds = this.getStageClearIds();

          if (clearIds.length === 0) {
            return 100101;
          }

          const lastPveStageTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(clearIds[clearIds.length - 1]);
          const curPveStageId = lastPveStageTab.NextLevelId ? lastPveStageTab.NextLevelId : lastPveStageTab.StageId;
          return curPveStageId;
        }
        /* 获取玩家通关的的章节Id*/


        getPassChapterId() {
          const clearIds = this.getStageClearIds();

          if (clearIds.length === 0) {
            return 100101;
          }

          let stageId = clearIds[clearIds.length - 1];
          const nextStageId = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(stageId).NextLevelId - 100000;
          const caleStageId = stageId - 100000;

          if (Math.floor(nextStageId / 100) > Math.floor(caleStageId / 100)) {
            return Math.floor(caleStageId / 100);
          } else {
            return Math.floor(caleStageId / 100) - 1;
          }
        }
        /* 获取玩家最新的章节 */


        getChapterId(id) {
          let stageId = id ? id : this.getCurFightStageId();
          return Math.floor((stageId - 100000) / 100);
        }
        /* 已领取的首通奖励列表 */


        getReceiveFirstRewardIds() {
          return this.eliteStageInfo.receivedFirstRewardStageIds;
        }
        /* 添加首通奖励 */


        addReceiveFirstRewardId(stageId) {
          this.eliteStageInfo.receivedFirstRewardStageIds.push(stageId);
        }

        getReceiveFirstRewardById(id) {
          for (let i = 0; i < this.eliteStageInfo.receivedFirstRewardStageIds.length; i++) {
            const stageId = this.eliteStageInfo.receivedFirstRewardStageIds[i];

            if (stageId == id) {
              return stageId;
            }
          }

          return null;
        }
        /* 当前关卡的最大存活时间 */


        getCurMaxAliveSecond(id) {
          // 是否完全通过
          const stageId = id ? id : this.getCurFightStageId();
          let clearIds = this.getStageClearIds();
          let maxAliveSecond = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(stageId).Time;

          if (clearIds.indexOf(stageId) > -1) {
            return maxAliveSecond;
          } else {
            return this.eliteStageInfo.currentStageMaxAliveSeconds;
          }
        }
        /* 已经通关的存活时间 */


        getClearedStageAliveSecond(levelId) {
          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(levelId).Time;
        }
        /* 当前关卡是否解锁 */


        getStageIsLock(id) {
          if (id === 1) {
            return false;
          } // 当前的章节id要小于普通关卡的章节id


          const passNormalStage = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getPassChapterId();
          const isPassAll = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.isAllStageClear();

          if (isPassAll && this.getPassChapterId() === 34) {
            return false;
          }

          if (passNormalStage < id) {
            return true;
          }

          const clearIds = this.getStageClearIds();
          const lastPveStageTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(clearIds[clearIds.length - 1]);

          if (!lastPveStageTab) {
            return true;
          }

          const curPveStageId = lastPveStageTab.NextLevelId ? lastPveStageTab.NextLevelId : lastPveStageTab.StageId;
          let levelArr = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MainChapterTableById.getValue(id).EliteStageIds;

          for (let i = 0; i < levelArr.length; i++) {
            let stageId = levelArr[i];

            if (curPveStageId >= stageId) {
              return false;
            }
          }

          return true;
        }
        /* 返回还没有领取奖励的stageId */


        getReceiveStageId() {
          // 通关副本
          const lastId = this.getLastStageId();
          const rewardIds = this.eliteStageInfo.receivedFirstRewardStageIds;

          if (rewardIds.length === 0) {
            return 100101;
          }

          const lastRewardId = rewardIds[rewardIds.length - 1];

          if (lastRewardId < lastId) {
            return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().PveStageTableByStageId.getValue(lastRewardId).NextLevelId;
          } else if (lastRewardId === lastId) {
            return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().PveStageTableByStageId.getValue(lastRewardId).NextLevelId;
          }
        }
        /* 获取当前主线列表最大关卡 */


        getMaxPveMainStage() {
          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(3505);
        }
        /* 获取当前通关了多少章节 总共可以打多少章节 */


        getChapterCount() {
          let chapterId = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getPassChapterId();
          const isPassAll = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.isAllStageClear();

          if (isPassAll) {
            chapterId++;
          }

          const clearIds = this.getStageClearIds();
          let maxCount = 0;

          for (let i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MainChapterTable.length; i++) {
            const _tab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().MainChapterTable[i];
            const _id = _tab.Id;

            if (_id <= chapterId) {
              maxCount += _tab.EliteStageIds.length;
            }
          }

          return {
            curCount: clearIds.length,
            maxCount: maxCount
          };
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=801ffab3af1a2bff5ffc3f78ca40df26bd056369.js.map
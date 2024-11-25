System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, tab, RedMgr, RedDotType, LevelRewardState, BattleMainDataControl, _crd, ccclass, property;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelRewardState(extras) {
    _reporterNs.report("LevelRewardState", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  _export("BattleMainDataControl", void 0);

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
      RedMgr = _unresolved_4.RedMgr;
    }, function (_unresolved_5) {
      RedDotType = _unresolved_5.RedDotType;
    }, function (_unresolved_6) {
      LevelRewardState = _unresolved_6.LevelRewardState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21549OtUmBGs6uvroMPPXud", "BattleMainDataControl", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 英雄 */

      _export("BattleMainDataControl", BattleMainDataControl = class BattleMainDataControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);
          this.stageInfo = null;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new BattleMainDataControl();
          }

          return this._instance;
        }

        initData(data) {
          this.stageInfo = data;
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).StageFirstReward, this.setStageRed, this);
          this.refreshHeroRedData();
        }

        setStageRed() {
          return this.getReceiveStageId() > 0;
        }
        /* 刷新英雄红点数据 */


        refreshHeroRedData() {
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).StageFirstReward);
        }
        /* 获取已经通关的关卡id列表 */


        getStageClearIds() {
          if (!this.stageInfo) {
            return [];
          }

          return this.stageInfo.clearedStageIds;
        }
        /* 获取最新的一个通关id */


        getLastStageId() {
          if (!this.stageInfo) {
            return 101;
          }

          if (this.stageInfo.clearedStageIds.length === 0) {
            return 101;
          }

          return this.stageInfo.clearedStageIds[this.stageInfo.clearedStageIds.length - 1];
        }
        /**
         * 当前关卡是否已经通关
         * @param id 
         */


        getIsPasstStageByStageId(id) {
          var clearIds = this.getStageClearIds();

          if (clearIds.length == 0) {
            return false;
          } else {
            return clearIds.indexOf(id) >= 0;
          }
        }
        /* 获取当前正在战斗的id */


        getCurFightStageId() {
          // return this._stageInfo.fightingMainStageId;
          var clearIds = this.getStageClearIds();

          if (clearIds.length === 0) {
            return 101;
          }

          var lastPveStageTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(clearIds[clearIds.length - 1]);
          var curPveStageId = lastPveStageTab.NextLevelId ? lastPveStageTab.NextLevelId : lastPveStageTab.StageId;
          return curPveStageId;
        }
        /* 获取玩家通关的的章节Id*/


        getPassChapterId() {
          var clearIds = this.getStageClearIds();

          if (clearIds.length === 0) {
            return 0;
          }

          var stageId = clearIds[clearIds.length - 1];
          var nextStageId = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(stageId).NextLevelId;

          if (Math.floor(nextStageId / 100) > Math.floor(stageId / 100)) {
            return Math.floor(stageId / 100);
          } else {
            return Math.floor(stageId / 100) - 1;
          }
        }
        /* 获取玩家最新的章节 */


        getChapterId(id) {
          var stageId = id ? id : this.getCurFightStageId();
          return Math.floor(stageId / 100);
        }
        /* 已领取的首通奖励列表 */


        getReceiveFirstRewardIds() {
          return this.stageInfo.receivedMainFirstRewardIds;
        }
        /* 添加首通奖励 */


        addReceiveFirstRewardId(_stageId, _indexs) {
          var objArr = [];

          for (var i = 0; i < _indexs.length; i++) {
            var obj = {
              stageId: _stageId,
              index: _indexs[i]
            };
            objArr.push(obj);
          }

          this.stageInfo.receivedMainFirstRewardIds = this.stageInfo.receivedMainFirstRewardIds.concat(objArr);
        }

        getReceiveFirstRewardById(id, idx) {
          for (var i = 0; i < this.stageInfo.receivedMainFirstRewardIds.length; i++) {
            var data = this.stageInfo.receivedMainFirstRewardIds[i];

            if (data.stageId == id && idx == data.index) {
              return data;
            }
          }

          return null;
        }
        /* 当前关卡的最大存活时间 */


        getCurMaxAliveSecond(id) {
          // 是否完全通过
          var stageId = id ? id : this.getCurFightStageId();
          var clearIds = this.getStageClearIds();
          var maxAliveSecond = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(stageId).Time;

          if (clearIds.indexOf(stageId) > -1) {
            return maxAliveSecond;
          } else {
            return this.stageInfo.currentMainStageMaxAliveSeconds;
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
          }

          var clearIds = this.getStageClearIds();
          var lastPveStageTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(clearIds[clearIds.length - 1]);

          if (!lastPveStageTab) {
            return true;
          }

          var curPveStageId = lastPveStageTab.NextLevelId ? lastPveStageTab.NextLevelId : lastPveStageTab.StageId;
          var levelArr = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MainChapterTableById.getValue(id).StageIds;

          for (var i = 0; i < levelArr.length; i++) {
            var stageId = levelArr[i];

            if (curPveStageId >= stageId) {
              return false;
            }
          }

          return true;
        }
        /* 返回还没有领取奖励的stageId */


        getReceiveStageId() {
          var rewardId = 0;
          var stageId = this.getCurFightStageId();
          var ChapterFirstTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ChapterFristRewardTable;

          for (var i = 0; i < ChapterFirstTab.length; i++) {
            if (rewardId) {
              break;
            }

            var id = ChapterFirstTab[i].Id;

            if (id > stageId) {
              break;
            } else if (id < stageId) {
              // 通关的列表 判断是否全部领取了奖励
              for (var k = 0; k < 3; k++) {
                var isGot = this.getReceiveFirstRewardById(id, k);

                if (isGot) {
                  continue;
                } else {
                  rewardId = id;
                  break;
                }
              }
            } else {
              // 判断当前的最大通关时间内 是否有奖励可以领 但是没有领
              var maxTime = this.getCurMaxAliveSecond();
              var rewardTabData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ChapterFristRewardTableById.getValue(stageId);

              for (var j = 0; j < 3; j++) {
                if (rewardTabData.Time[j] > maxTime) {
                  continue;
                } else {
                  var _isGot = this.getReceiveFirstRewardById(id, j);

                  if (_isGot) {
                    continue;
                  } else {
                    var isPass = this.getIsPasstStageByStageId(stageId);

                    if (j === 2) {
                      if (isPass) {
                        rewardId = stageId;
                      }
                    } else {
                      rewardId = stageId;
                    }

                    break;
                  }
                }
              }
            }
          }

          return rewardId;
        } // 获取当前列表可以领取奖励的所有idexs


        getAllIndex(stageId) {
          var result = [];
          var curStageId = this.getCurFightStageId();
          var rewardTabData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ChapterFristRewardTableById.getValue(stageId);

          for (var i = 0; i < rewardTabData.Time.length; i++) {
            var gotRewards = this.getReceiveFirstRewardById(rewardTabData.Id, i);
            var isGot = false;

            if (gotRewards) {
              isGot = true;
            }

            var state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
              error: Error()
            }), LevelRewardState) : LevelRewardState).None;

            if (rewardTabData.Id > curStageId) {
              state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
                error: Error()
              }), LevelRewardState) : LevelRewardState).NotAchieved;
            } else if (rewardTabData.Id < curStageId) {
              // 判断是否领取
              if (isGot) {
                state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
                  error: Error()
                }), LevelRewardState) : LevelRewardState).Got;
              } else {
                state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
                  error: Error()
                }), LevelRewardState) : LevelRewardState).Receive;
              }
            } else {
              // 获取当前的时间
              var maxTime = this.getCurMaxAliveSecond();

              if (maxTime < rewardTabData.Time[i]) {
                state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
                  error: Error()
                }), LevelRewardState) : LevelRewardState).NotAchieved;
              } else {
                // 判断是否领取
                if (isGot) {
                  state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
                    error: Error()
                  }), LevelRewardState) : LevelRewardState).Got;
                } else {
                  // state = LevelRewardState.Receive;
                  if (i == rewardTabData.Time.length - 1) {
                    // 是否通关
                    if (this.getIsPasstStageByStageId(stageId)) {
                      state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
                        error: Error()
                      }), LevelRewardState) : LevelRewardState).Receive;
                    } else {
                      state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
                        error: Error()
                      }), LevelRewardState) : LevelRewardState).NotAchieved;
                    }
                  } else {
                    state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
                      error: Error()
                    }), LevelRewardState) : LevelRewardState).Receive;
                  }
                }
              }
            }

            if (state === (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
              error: Error()
            }), LevelRewardState) : LevelRewardState).Receive) {
              result.push(i);
            }
          }

          return result;
        }
        /* 获取当前主线列表最大关卡 */


        getMaxPveMainStage() {
          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(3505);
        }
        /* 当前是否主线全部通关 */


        isAllStageClear() {
          var clearIds = this.getStageClearIds();
          return clearIds.indexOf(3505) > -1;
        }

      });

      BattleMainDataControl._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=807cb3d525d55e96bc7d354187c281ae9d128f88.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, proto, JIANGHU_TYPE, tab, RoleData, _dec, _class, _class2, _crd, ccclass, property, GameplayViewDataMgr;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJIANGHU_TYPE(extras) {
    _reporterNs.report("JIANGHU_TYPE", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
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
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      JIANGHU_TYPE = _unresolved_3.JIANGHU_TYPE;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      RoleData = _unresolved_5.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae4cdrQIaBF9pjh0CM6has0", "GameplayViewDataMgr", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameplayViewDataMgr", GameplayViewDataMgr = (_dec = ccclass('GameplayDataMgr'), _dec(_class = (_class2 = class GameplayViewDataMgr extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);
          this.curFightStageId = 0;
          this.ExportMap = new Map();
          this.StageTabMap = new Map();
          this._WorldBossMsg = void 0;
          this._DailyChallengeDataMsg = void 0;
          this._DailyChallengeBuffs = void 0;
          this._ClimbTowerInfoMsg = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new GameplayViewDataMgr();
          }

          return this._instance;
        }

        initData(dataMap) {
          this.ExportMap.clear();
          this.StageTabMap.clear();
          Object.keys(_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).forEach(key => {
            var _key = Number(key);

            if (!isNaN(_key) && _key !== (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
              error: Error()
            }), JIANGHU_TYPE) : JIANGHU_TYPE).NONE) {
              if (dataMap[_key]) {
                this.ExportMap.set(_key, dataMap[key]);
              } else {
                var exportData = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).ExportStageInfo();
                exportData.clearedStageIds = [];
                exportData.receivedFirstRewardStageIds = [];
                this.ExportMap.set(_key, exportData);
              }

              var arr = [];

              for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().PveStageTable.length; i++) {
                var stageTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().PveStageTable[i];

                if (stageTab.StageType == _key) {
                  arr.push(stageTab);
                }
              }

              this.StageTabMap.set(_key, arr);
            }
          });
        }

        getStageTab(id) {
          return this.StageTabMap.get(id);
        } // 获取探险数据


        getExportInfo(id) {
          return this.ExportMap.get(id);
        } // 设置当前关卡id


        setCurFightStageId(id) {
          var ids = this.ExportMap.get(id).clearedStageIds;

          if (ids.length == 0) {
            this.curFightStageId = this.StageTabMap.get(id)[0].StageId;
          } else {
            if (this.StageTabMap.get(id)[ids.length - 1].NextLevelId) {
              this.curFightStageId = this.StageTabMap.get(id)[ids.length - 1].NextLevelId;
            } else {
              this.curFightStageId = this.getStageTab(id)[this.getStageTab(id).length - 1].StageId;
            }
          }
        }

        getCurSweepStageId(id) {
          var maxStageId = this.getStageTab(id)[this.getStageTab(id).length - 1].StageId;
          var ids = this.ExportMap.get(id).clearedStageIds;

          if (this.curFightStageId < maxStageId) {
            return this.curFightStageId - 1;
          } else {
            var sweep = ids.indexOf(this.curFightStageId) > -1;

            if (sweep) {
              return this.curFightStageId;
            } else {
              return this.curFightStageId - 1;
            }
          }
        } // 增加探险通关数据


        addExportInfo(id, clearedId) {
          var _this$ExportMap$get$c;

          var ids = (_this$ExportMap$get$c = this.ExportMap.get(Number(id)).clearedStageIds) != null ? _this$ExportMap$get$c : [];

          if (ids.indexOf(clearedId) > -1) {
            return;
          } else {
            ids.push(clearedId);
          }
        }
        /* 处理一下扫荡信息 */


        getSweepInfo(view_type) {
          var curExportInfo = this.getExportInfo(view_type);
          var freeTimes = 0;
          var buyTimes = 0;
          var diamondData = [];
          var haveFreeTimes = 0;
          var haveBuyTimes = 0;

          if (view_type === (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).GoldStage) {
            // 免费次数为
            freeTimes = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().GoldStageSweepFreeCount;
            buyTimes = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().GoldStageSweepBuyCount + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).VipBonus.VipBonus_DailyStageBuySweepCount);
            diamondData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().GoldStageSweepBuyCost;
          } else {
            freeTimes = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().FeedStageSweepFreeCount;
            buyTimes = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().FeedStageSweepBuyCount + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).VipBonus.VipBonus_DailyStageBuySweepCount);
            ;
            diamondData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().FeedStageSweepBuyCost;
          }

          haveFreeTimes = freeTimes - curExportInfo.freeSweepTimes;
          haveBuyTimes = buyTimes - curExportInfo.notFreeSweepTimes;
          return {
            maxFreeTimes: freeTimes,
            maxBuyTimes: buyTimes,
            buyTimes: haveBuyTimes,
            freeTimes: haveFreeTimes,
            diamondData: diamondData
          };
        }

        get worldBossMsg() {
          return this._WorldBossMsg;
        }

        set worldBossMsg(msg) {
          this._WorldBossMsg = msg;
        }
        /**每日挑战数据 */


        get dailyChallengeDataMsg() {
          if (!this._DailyChallengeDataMsg) {
            this._DailyChallengeDataMsg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).DailyChallengeData();
            this._DailyChallengeDataMsg.level = 1;
            this._DailyChallengeDataMsg.cd = -1;
            this._DailyChallengeDataMsg.challengeCount = 0;
            this._DailyChallengeDataMsg.challengeTotalCount = 0;
            this._DailyChallengeDataMsg.receivedScore = 0;
          }

          return this._DailyChallengeDataMsg;
        }

        set dailyChallengeDataMsg(msg) {
          if (!msg) {
            msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).DailyChallengeData();
            msg.level = 1;
            msg.cd = -1;
            msg.challengeCount = 0;
            msg.challengeTotalCount = 0;
            msg.receivedScore = 0;
          }

          if (!msg.cd) {
            msg.cd = 0;
          }

          if (!msg.level) {
            msg.level = 1;
          }

          if (!msg.challengeCount) {
            msg.challengeCount = 0;
          }

          if (!msg.maxScore) {
            msg.maxScore = 0;
          }

          if (!msg.receivedScore) {
            msg.receivedScore = 0;
          }

          if (!msg.challengeTotalCount) {
            msg.challengeTotalCount = 0;
          }

          this._DailyChallengeDataMsg = msg;
        }

        set dailyChallengeBuffs(buffs) {
          this._DailyChallengeBuffs = buffs;
        }

        get dailyChallengeBuffs() {
          return this._DailyChallengeBuffs;
        }
        /**
         * 爬塔信息
         */


        get climbTowerInfoMsg() {
          return this._ClimbTowerInfoMsg;
        }

        set climbTowerInfoMsg(msg) {
          if (!msg.defeatTimes) {
            msg.defeatTimes = 0;
          }

          this._ClimbTowerInfoMsg = msg;
        }
        /**获取精英挑战通关id */


        getClimbTowerPassLevelId() {
          var passId = this.climbTowerInfoMsg.clearedStageIds.length == 0 ? 0 : this.climbTowerInfoMsg.clearedStageIds[this.climbTowerInfoMsg.clearedStageIds.length - 1];
          return passId;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a31899e86e8ed93fffb6738c7c58ba8e665ebc24.js.map
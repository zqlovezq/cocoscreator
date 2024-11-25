System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "client_protocol", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, RichText, Sprite, ViewScreen, EveryDayChallengeBoxItem, tab, getTimeUntilNextDay, handleNumerText, setTextTime, LangMgr, GameplayViewDataMgr, ShowTips, UIMgr, ViewName, OpenFunctionMgr, RoleData, TimeUtil, GameplayControl, BattleMainDataControl, ItemData, proto, Net, AdMgr, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, EveryDayChallengeView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewScreen(extras) {
    _reporterNs.report("ViewScreen", "../../../../framework/base/ViewScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEveryDayChallengeBoxItem(extras) {
    _reporterNs.report("EveryDayChallengeBoxItem", "./EveryDayChallengeBoxItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetTimeUntilNextDay(extras) {
    _reporterNs.report("getTimeUntilNextDay", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhandleNumerText(extras) {
    _reporterNs.report("handleNumerText", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayViewDataMgr(extras) {
    _reporterNs.report("GameplayViewDataMgr", "../GameplayViewDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeUtil(extras) {
    _reporterNs.report("TimeUtil", "../../../utils/TimeUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayControl(extras) {
    _reporterNs.report("GameplayControl", "../GameplayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "../../home/battle/BattleMainDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdMgr(extras) {
    _reporterNs.report("AdMgr", "../../AdMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Label = _cc.Label;
      Node = _cc.Node;
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewScreen = _unresolved_2.ViewScreen;
    }, function (_unresolved_3) {
      EveryDayChallengeBoxItem = _unresolved_3.EveryDayChallengeBoxItem;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      getTimeUntilNextDay = _unresolved_5.getTimeUntilNextDay;
      handleNumerText = _unresolved_5.handleNumerText;
      setTextTime = _unresolved_5.setTextTime;
    }, function (_unresolved_6) {
      LangMgr = _unresolved_6.LangMgr;
    }, function (_unresolved_7) {
      GameplayViewDataMgr = _unresolved_7.GameplayViewDataMgr;
    }, function (_unresolved_8) {
      ShowTips = _unresolved_8.ShowTips;
      UIMgr = _unresolved_8.UIMgr;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      OpenFunctionMgr = _unresolved_10.OpenFunctionMgr;
    }, function (_unresolved_11) {
      RoleData = _unresolved_11.RoleData;
    }, function (_unresolved_12) {
      TimeUtil = _unresolved_12.TimeUtil;
    }, function (_unresolved_13) {
      GameplayControl = _unresolved_13.GameplayControl;
    }, function (_unresolved_14) {
      BattleMainDataControl = _unresolved_14.BattleMainDataControl;
    }, function (_unresolved_15) {
      ItemData = _unresolved_15.ItemData;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_16) {
      Net = _unresolved_16.Net;
    }, function (_unresolved_17) {
      AdMgr = _unresolved_17.AdMgr;
    }, function (_unresolved_18) {
      EventMgr = _unresolved_18.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de2aeAdh6xIIZEBxbxbgrOJ", "EveryDayChallengeView", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'RichText', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * EveryDayChallengeView
       * zhudingchao
       * Wed Jul 10 2024 10:50:32 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/jianghu/everyDayChallenge/EveryDayChallengeView.ts
       *
       */

      _export("EveryDayChallengeView", EveryDayChallengeView = (_dec = ccclass('EveryDayChallengeView'), _dec2 = property(Label), _dec3 = property(RichText), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property([Node]), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property([_crd && EveryDayChallengeBoxItem === void 0 ? (_reportPossibleCrUseOfEveryDayChallengeBoxItem({
        error: Error()
      }), EveryDayChallengeBoxItem) : EveryDayChallengeBoxItem]), _dec14 = property(Label), _dec(_class = (_class2 = class EveryDayChallengeView extends (_crd && ViewScreen === void 0 ? (_reportPossibleCrUseOfViewScreen({
        error: Error()
      }), ViewScreen) : ViewScreen) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "timerLab", _descriptor, this);

          _initializerDefineProperty(this, "difficutyLab", _descriptor2, this);

          _initializerDefineProperty(this, "cdTimerLab", _descriptor3, this);

          _initializerDefineProperty(this, "downNode", _descriptor4, this);

          _initializerDefineProperty(this, "scoreLab", _descriptor5, this);

          _initializerDefineProperty(this, "eventNodes", _descriptor6, this);

          _initializerDefineProperty(this, "battleBtnNode", _descriptor7, this);

          _initializerDefineProperty(this, "sweepBtnNode", _descriptor8, this);

          _initializerDefineProperty(this, "timesBtnNode", _descriptor9, this);

          _initializerDefineProperty(this, "maxScoreNode", _descriptor10, this);

          _initializerDefineProperty(this, "maxScoreLab", _descriptor11, this);

          _initializerDefineProperty(this, "boxItems", _descriptor12, this);

          _initializerDefineProperty(this, "resnumLab", _descriptor13, this);

          this.endTimer = 0;
          this.difficulty = 1;
          this.table = void 0;
          this.totalScore = void 0;

          this.updateTimer = () => {
            this.endTimer--;

            if (this.endTimer >= 0) {
              this.timerLab.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
                error: Error()
              }), setTextTime) : setTextTime)(this.endTimer);
            } else {
              this.unschedule(this.updateTimer);
            }
          };
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DailyChallengeDataPush, this.on_s2c_DailyChallengeDataPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DailyChallengeLevelRsp, this.on_s2c_DailyChallengeLevelRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DailyChallengeRewardRsp, this.on_s2c_DailyChallengeRewardRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DailyChallengeSweepRsp, this.on_s2c_DailyChallengeSweepRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DailyChallengeWatchAdvRsp, this.on_s2c_DailyChallengeWatchAdvRsp, this);
        }

        onShow() {
          this.initView();
        }

        initView() {
          this.difficulty = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.dailyChallengeDataMsg.level;
          this.table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().DailyChallengeLevelTableByLevel.getValue(this.difficulty);
          this.totalScore = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.dailyChallengeDataMsg.score; //this.difficutyLab.string = this.difficulty + "";

          this.difficutyLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_everyday_2", [this.difficulty]);
          this.initBoxItem();
          this.initEndTimer();
          this.initEventView();
          this.updateBtnState();
          this.initDownBtn();
        }

        initEndTimer() {
          this.unschedule(this.updateTimer);
          this.endTimer = (_crd && getTimeUntilNextDay === void 0 ? (_reportPossibleCrUseOfgetTimeUntilNextDay({
            error: Error()
          }), getTimeUntilNextDay) : getTimeUntilNextDay)();
          this.timerLab.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
            error: Error()
          }), setTextTime) : setTextTime)(this.endTimer);
          this.schedule(this.updateTimer, 1);
        }

        initBoxItem() {
          let currScore = this.totalScore;
          this.scoreLab.string = currScore + "";
          let receivedScore = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.dailyChallengeDataMsg.receivedScore;
          let requires = this.table.Require;

          for (let i = 0; i < requires.length; i++) {
            let dropId = this.table.DropId[i];
            this.boxItems[i].initView(i == 0 ? 0 : requires[i - 1], requires[i], currScore, dropId, requires[i] <= receivedScore);
          }
        }

        initEventView() {
          // let buffId = 1;
          // let buffTable = tab.getData().DailyChallengeBuffTableById.getValue(buffId);
          let pveBuffIds = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.dailyChallengeBuffs;

          for (let key in pveBuffIds) {
            let pveBuffTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().PveStageBuffTableById.getValue(pveBuffIds[key]);
            let node = this.eventNodes[key];
            let sprite = node.getChildByName("icon").getComponent(Sprite);
            sprite.setTexture(pveBuffTable.ShowIcon);
            node.getChildByName("boxscore_txt").getComponent(Label).string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(pveBuffTable.Show);
          }
        }

        initDownBtn() {
          if (this.table.IsEasier) {
            this.downNode.active = true;
            let cd = Number((_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
              error: Error()
            }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.dailyChallengeDataMsg.cd);

            if (cd > 0) {
              this.setCdTimerLab(cd - (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.getServerUtcTime());
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

        setCdTimerLab(downCdTimer) {
          let data = (_crd && TimeUtil === void 0 ? (_reportPossibleCrUseOfTimeUtil({
            error: Error()
          }), TimeUtil) : TimeUtil).formaterWithOutSecond3(downCdTimer);
          let str = "";

          if (data["day"] > 0) {
            str += data["day"] + (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_common_day");
          }

          if (data['hours'] > 0) {
            str += data["hours"] + (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_common_hour");
          }

          if (data['minutes'] > 0) {
            str += data["minutes"] + (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_common_minute");
          }

          this.cdTimerLab.string = str;
        }

        updateBtnState() {
          let maxNum = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().DailyChallengeCount;
          let totalNum = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.dailyChallengeDataMsg.challengeCount;

          if (totalNum >= maxNum) {
            this.battleBtnNode.active = false;
            this.sweepBtnNode.active = false;
            this.timesBtnNode.active = false;
            this.maxScoreNode.active = false;
          } else {
            this.maxScoreNode.active = false;
            this.sweepBtnNode.active = false;
            let lastTimer = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
              error: Error()
            }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.dailyChallengeDataMsg.challengeTotalCount - (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
              error: Error()
            }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.dailyChallengeDataMsg.challengeCount;
            this.battleBtnNode.active = lastTimer > 0;
            this.timesBtnNode.active = lastTimer == 0;

            if (lastTimer > 0) {
              let pveTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().PveStageTableByStageId.getValue(this.table.StageId);
              this.resnumLab.string = pveTab.CostItemNum[0] + "";
            }

            let maxScore = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
              error: Error()
            }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.dailyChallengeDataMsg.maxScore;

            if (maxScore > 0 && lastTimer > 0) {
              let isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                error: Error()
              }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_DailyChallengeSweepAll);

              if (isOpen) {
                this.sweepBtnNode.active = true;
                this.maxScoreNode.active = true;
                this.maxScoreLab.string = (_crd && handleNumerText === void 0 ? (_reportPossibleCrUseOfhandleNumerText({
                  error: Error()
                }), handleNumerText) : handleNumerText)(maxScore);
              } else {
                this.sweepBtnNode.active = false;
                this.maxScoreNode.active = false;
              }
            } else {// this.maxScoreNode.active = true;
            }
          }
        }

        onHelpBtn() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).EveryDayChallengeHelpPop
          });
        }

        onClickDown() {
          if (this.table.IsEasier) {
            let cd = Number((_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
              error: Error()
            }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.dailyChallengeDataMsg.cd);

            if (cd <= 0) {
              (_crd && GameplayControl === void 0 ? (_reportPossibleCrUseOfGameplayControl({
                error: Error()
              }), GameplayControl) : GameplayControl).ins.requestDailyChallengeLevel(this.table.Level - 1);
            }
          }
        }

        onClickUpBtn() {
          let nextTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().DailyChallengeLevelTableByLevel.getValue(this.table.Level + 1);

          if (nextTable) {
            if ((_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
              error: Error()
            }), BattleMainDataControl) : BattleMainDataControl).ins.getIsPasstStageByStageId(nextTable.MainStageLimit)) {
              (_crd && GameplayControl === void 0 ? (_reportPossibleCrUseOfGameplayControl({
                error: Error()
              }), GameplayControl) : GameplayControl).ins.requestDailyChallengeLevel(nextTable.Level);
            } else {
              let chapter = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().PveStageTableByStageId.getValue(nextTable.MainStageLimit);

              if (chapter) {
                (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                  error: Error()
                }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getCombineString("Tips_dailychallengeunlockdifficulty", [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getLab(chapter.StageName)]));
              }
            }
          } else {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_dailychallenge_1")); //ShowTips("已达到当前最高难度")
          }
        }

        onChallengeBtn() {
          let pveTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(this.table.StageId);
          let num = pveTab.CostItemNum[0];
          let id = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.isItemsEnoughByList([(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Stamina], [num]);

          if (id <= 0) {
            let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_StartStageReq();
            msg.stageId = this.table.StageId;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.StartStageReq, msg);
          } else {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_dailychallenge_2")); //ShowTips("体力不足");

            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).ResourceBuyPop,
              data: {
                "itemId": (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).CurrencyType.CurrencyType_Stamina
              }
            });
          }
        }

        onClickSweepBtn() {
          let pveTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(this.table.StageId);
          let num = pveTab.CostItemNum[0];
          let id = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.isItemsEnoughByList([(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Stamina], [num]);

          if (id <= 0) {
            (_crd && GameplayControl === void 0 ? (_reportPossibleCrUseOfGameplayControl({
              error: Error()
            }), GameplayControl) : GameplayControl).ins.requestDailyChallengeSweep();
          } else {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_dailychallenge_2")); //ShowTips("体力不足");

            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).ResourceBuyPop,
              data: {
                "itemId": (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).CurrencyType.CurrencyType_Stamina
              }
            });
          }
        }

        onClikcAddTimeBtn() {
          (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.playVideoAd((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_DailyChallenge, () => {
            (_crd && GameplayControl === void 0 ? (_reportPossibleCrUseOfGameplayControl({
              error: Error()
            }), GameplayControl) : GameplayControl).ins.requestDailyChallengeWatchAdv();
          });
        }

        on_s2c_DailyChallengeDataPush(msg) {
          this.initView();
        }

        on_s2c_DailyChallengeLevelRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.initView();
          }
        }

        on_s2c_DailyChallengeRewardRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.initBoxItem();

            if (msg.rewards && msg.rewards.length > 0) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).CongratulationPop,
                data: msg.rewards
              });
            }
          }
        }

        on_s2c_DailyChallengeSweepRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.initView();
          }
        }

        on_s2c_DailyChallengeWatchAdvRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.updateBtnState();
          }
        }

        onClikhideView() {
          this.onClose();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).GameplayView
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "timerLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "difficutyLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cdTimerLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "downNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scoreLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "eventNodes", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "battleBtnNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sweepBtnNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "timesBtnNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "maxScoreNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "maxScoreLab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "boxItems", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "resnumLab", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e19b34ef6ca2de4ff6503ee17975e90b67b617a.js.map
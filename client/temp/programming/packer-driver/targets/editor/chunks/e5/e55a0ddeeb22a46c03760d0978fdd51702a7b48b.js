System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "client_protocol", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, ScrollView, ViewScreen, ShowTips, UIMgr, ViewName, tab, TopWarDamageItem, TopWarBossSkillItem, proto, Net, EventMgr, TopWarPlayRankHeadiItem, SimpleRoleInfo, RoleData, GameplayViewDataMgr, GameUtil, getTimeUntilNextDay, setTextTime, GameplayControl, OpenFunctionMgr, CommonTipsPop, CommonTipsPopCloseType, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, TopWarView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewScreen(extras) {
    _reporterNs.report("ViewScreen", "../../../../framework/base/ViewScreen", _context.meta, extras);
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

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTopWarDamageItem(extras) {
    _reporterNs.report("TopWarDamageItem", "./TopWarDamageItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTopWarBossSkillItem(extras) {
    _reporterNs.report("TopWarBossSkillItem", "./topWarBossSkillItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTopWarPlayRankHeadiItem(extras) {
    _reporterNs.report("TopWarPlayRankHeadiItem", "./TopWarPlayRankHeadiItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleRoleInfo(extras) {
    _reporterNs.report("SimpleRoleInfo", "../../friends/SimpleRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayViewDataMgr(extras) {
    _reporterNs.report("GameplayViewDataMgr", "../GameplayViewDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetTimeUntilNextDay(extras) {
    _reporterNs.report("getTimeUntilNextDay", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayControl(extras) {
    _reporterNs.report("GameplayControl", "../GameplayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPopCloseType(extras) {
    _reporterNs.report("CommonTipsPopCloseType", "../../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      ViewScreen = _unresolved_2.ViewScreen;
    }, function (_unresolved_3) {
      ShowTips = _unresolved_3.ShowTips;
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      ViewName = _unresolved_4.ViewName;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      TopWarDamageItem = _unresolved_6.TopWarDamageItem;
    }, function (_unresolved_7) {
      TopWarBossSkillItem = _unresolved_7.TopWarBossSkillItem;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_8) {
      Net = _unresolved_8.Net;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
    }, function (_unresolved_10) {
      TopWarPlayRankHeadiItem = _unresolved_10.TopWarPlayRankHeadiItem;
    }, function (_unresolved_11) {
      SimpleRoleInfo = _unresolved_11.SimpleRoleInfo;
    }, function (_unresolved_12) {
      RoleData = _unresolved_12.RoleData;
    }, function (_unresolved_13) {
      GameplayViewDataMgr = _unresolved_13.GameplayViewDataMgr;
    }, function (_unresolved_14) {
      GameUtil = _unresolved_14.GameUtil;
      getTimeUntilNextDay = _unresolved_14.getTimeUntilNextDay;
      setTextTime = _unresolved_14.setTextTime;
    }, function (_unresolved_15) {
      GameplayControl = _unresolved_15.GameplayControl;
    }, function (_unresolved_16) {
      OpenFunctionMgr = _unresolved_16.OpenFunctionMgr;
    }, function (_unresolved_17) {
      CommonTipsPop = _unresolved_17.CommonTipsPop;
      CommonTipsPopCloseType = _unresolved_17.CommonTipsPopCloseType;
    }, function (_unresolved_18) {
      LangMgr = _unresolved_18.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8749EWbYpCqJuS6+Iys6OW", "TopWarView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'error', 'instantiate', 'Label', 'Node', 'Prefab', 'ScrollView']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * TopWarView
       * zhudingchao
       * Fri Jul 05 2024 11:05:11 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/jianghu/topWar/TopWarView.ts
       *
       */

      _export("TopWarView", TopWarView = (_dec = ccclass('TopWarView'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(ScrollView), _dec5 = property([Node]), _dec6 = property(_crd && TopWarPlayRankHeadiItem === void 0 ? (_reportPossibleCrUseOfTopWarPlayRankHeadiItem({
        error: Error()
      }), TopWarPlayRankHeadiItem) : TopWarPlayRankHeadiItem), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Prefab), _dec13 = property(Prefab), _dec(_class = (_class2 = class TopWarView extends (_crd && ViewScreen === void 0 ? (_reportPossibleCrUseOfViewScreen({
        error: Error()
      }), ViewScreen) : ViewScreen) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "timerLab", _descriptor, this);

          _initializerDefineProperty(this, "skillLayout", _descriptor2, this);

          _initializerDefineProperty(this, "damageScroll", _descriptor3, this);

          _initializerDefineProperty(this, "rankHerads", _descriptor4, this);

          _initializerDefineProperty(this, "myHerdItem", _descriptor5, this);

          _initializerDefineProperty(this, "notRankNode", _descriptor6, this);

          _initializerDefineProperty(this, "totalDamageLab", _descriptor7, this);

          _initializerDefineProperty(this, "maxDamageLab", _descriptor8, this);

          _initializerDefineProperty(this, "sweepBtnNode", _descriptor9, this);

          _initializerDefineProperty(this, "lastChallengeNum", _descriptor10, this);

          _initializerDefineProperty(this, "damageItemPrefab", _descriptor11, this);

          _initializerDefineProperty(this, "skillPrefab", _descriptor12, this);

          this.damageItems = void 0;
          this.rankMsg = void 0;
          this.endTimer = void 0;

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
          }), proto) : proto).Ptl.GetRankRsp, this.on_s2c_GetRankRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.WorldBossDataPush, this.on_s2c_WorldBossDataPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.WorldBossSweepRsp, this.on_s2c_WorldBossSweepRsp, this);
        }

        requestGetRank() {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetHeroRankReq();
          msg.rankId = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).RankType.RankType_WorldBoss;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetRankReq, msg);
        }

        onShow() {
          this.requestGetRank();
          this.initDamageReward();
          this.initSkills();
          this.initMyRank();
          this.initEndTimer();
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

        initSkills() {
          let skillIds = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().WorldBossShowSkillIds;

          for (let key in skillIds) {
            let item = instantiate(this.skillPrefab);
            item.parent = this.skillLayout;
            item.getComponent(_crd && TopWarBossSkillItem === void 0 ? (_reportPossibleCrUseOfTopWarBossSkillItem({
              error: Error()
            }), TopWarBossSkillItem) : TopWarBossSkillItem).initSkillId(skillIds[key]);
          }
        }

        initDamageReward() {
          this.damageItems = [];
          let currScore = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.worldBossMsg.maxScore;
          let tables = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().WorldBossRewardTable;
          let len = tables.length;

          for (let i = len - 1; i >= 0; i--) {
            let item = instantiate(this.damageItemPrefab);
            item.parent = this.damageScroll.content;
            let com = item.getComponent(_crd && TopWarDamageItem === void 0 ? (_reportPossibleCrUseOfTopWarDamageItem({
              error: Error()
            }), TopWarDamageItem) : TopWarDamageItem);
            let lastScore = i == 0 ? 0 : tables[i - 1].Damage;
            com.initView(tables[i], lastScore, currScore);
            this.damageItems.push(com);
          }
        }

        initMyRank() {
          // error("头像功能没有做")
          let msg = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.worldBossMsg;

          if (msg.ranking > -1) {
            this.myHerdItem.rankLab.node.active = true;
            this.myHerdItem.setRankLab(msg.ranking + 1);
            this.notRankNode.active = false;
          } else {
            this.myHerdItem.rankLab.node.active = false;
            this.notRankNode.active = true;
          }

          this.myHerdItem.initView({
            headFrame: (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.avatarInfo.headFrame,
            headIcon: (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.avatarInfo.headIcon
          });
          this.myHerdItem.myNode.active = true;
          this.totalDamageLab.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(msg.totalScore);
          this.maxDamageLab.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(msg.maxScore);
          let freeCount = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().WorldBossDailyCount;
          let num = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.worldBossMsg.challengeCount;
          let buyNum = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().WorldBossDailyBuyCount;

          if (num < freeCount) {
            this.lastChallengeNum.string = "" + buyNum;
          } else {
            this.lastChallengeNum.string = "" + (freeCount + buyNum - num);
          }

          this.sweepBtnNode.active = msg.totalScore > 0 && (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_WorldBossSweepAll); // let herodInfo=RoleData.ins.
        }

        updateDamageReward() {
          let currScore = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.worldBossMsg.maxScore;

          for (let key in this.damageItems) {
            this.damageItems[key].updateView(currScore);
          }
        }

        onClickChallenge() {
          let callBack = () => {
            let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_StartStageReq();
            msg.stageId = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().WorldBossStageId;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.StartStageReq, msg);
          };

          this.buyChallenge(callBack);
        }

        buyChallenge(callBack) {
          let freeCount = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().WorldBossDailyCount;
          let num = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.worldBossMsg.challengeCount;

          if (num < freeCount) {
            callBack();
          } else {
            let buyNum = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().WorldBossDailyBuyCount;
            let totalNum = buyNum + freeCount;

            if (num < totalNum) {
              let isPrivilege = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                error: Error()
              }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_WorldBossFreeBuyCount); //弹窗购买框

              let tips = "";
              let spend = 0;

              if (isPrivilege) {
                //tips="特权购买免费次数提示\n今日剩余购买次数"+(totalNum-num);
                tips = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getCombineString("Tips_worldboss_2", [totalNum - num]);
              } else {
                let buySpends = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().GetKeyValue_ConfigTable().WorldBossDailyBuyCostDiamonds;
                let currBuyNum = buyNum - (totalNum - num);

                if (buySpends.length - 1 >= currBuyNum) {
                  // if(currBuyNum<0){
                  //     spend=buySpends[0];
                  // }else{
                  spend = buySpends[currBuyNum]; //}
                } else {
                  spend = buySpends[buySpends.length - 1];
                } //tips="是否花费"+spend+"钻石购买一次挑战次数 \n今日剩余购买次数"+(totalNum-num);


                tips = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getCombineString("Tips_worldboss_1", [spend, totalNum - num]);
              }

              (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
                error: Error()
              }), CommonTipsPop) : CommonTipsPop).create(tips, closeType => {
                if (closeType == (_crd && CommonTipsPopCloseType === void 0 ? (_reportPossibleCrUseOfCommonTipsPopCloseType({
                  error: Error()
                }), CommonTipsPopCloseType) : CommonTipsPopCloseType).confirm) {
                  // console.log("ok")
                  if (isPrivilege) {
                    callBack();
                  } else {
                    if (spend <= (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                      error: Error()
                    }), RoleData) : RoleData).ins.diamond) {
                      callBack();
                    } else {
                      //ShowTips("钻石不足")
                      (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                        error: Error()
                      }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                        error: Error()
                      }), LangMgr) : LangMgr).getLab("ui_worldboss_6"));
                    }
                  }
                } else {
                  console.log("cancel");
                }
              });
            } else {
              //ShowTips("今日挑战次数已用完")
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("ui_worldboss_8"));
            }
          }
        }

        onClickSweep() {
          if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_WorldBossSweepAll)) {
            this.buyChallenge(() => {
              (_crd && GameplayControl === void 0 ? (_reportPossibleCrUseOfGameplayControl({
                error: Error()
              }), GameplayControl) : GameplayControl).ins.requestWorldBossSweep();
            });
          } else {
            (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.showFunctionTips((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_WorldBossSweepAll);
          }
        }

        onClickRewardRank() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).TopWarRankRewardPop
          });
        }

        onClickRank() {}

        on_s2c_GetRankRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.rankMsg = msg;
          /*排行榜数据返回 */
          // this._rankId = msg.rankId;
          // this._ranking = msg.ranking;
          // this._selfSimple = msg.selfSimple;

          for (let key in this.rankHerads) {
            this.rankHerads[key].getChildByName("notRank_node").active = true;
            this.rankHerads[key].getChildByName("PlayRankHeadiItem").active = false;
            ;
            this.rankHerads[key].getChildByName("playname_txt").active = false;
          } // let top_player_list = msg.rankList;
          // if (msg.rankList.length > 0) {
          //     top_player_list = msg.rankList.splice(0, 3);
          // }


          let top_player_list = [];

          for (let i = 0; i < msg.rankList.length; i++) {
            if (i < 3) {
              top_player_list.push(msg.rankList[i]);
            }
          }

          if (top_player_list.length > 0) {
            for (let key in top_player_list) {
              let node = this.rankHerads[key];
              node.getChildByName("notRank_node").active = false;
              node.getChildByName("PlayRankHeadiItem").active = true;
              let headItem = node.getChildByName("PlayRankHeadiItem").getComponent(_crd && TopWarPlayRankHeadiItem === void 0 ? (_reportPossibleCrUseOfTopWarPlayRankHeadiItem({
                error: Error()
              }), TopWarPlayRankHeadiItem) : TopWarPlayRankHeadiItem);
              let info = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
                error: Error()
              }), SimpleRoleInfo) : SimpleRoleInfo)();
              info.merge(top_player_list[key].simple);
              headItem.initView(info);
              headItem.setRankLab(Number(key) + 1);
              let nameLab = node.getChildByName("playname_txt").getComponent(Label);
              nameLab.node.active = true;
              nameLab.string = top_player_list[key].simple.name;
            }
          } // this.initStaticView();
          // this.createTopItem();

        }

        on_s2c_WorldBossDataPush(msg) {
          this.updateDamageReward();
          this.initMyRank();
          this.requestGetRank();
        }

        on_s2c_WorldBossSweepRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.updateDamageReward();
            this.initMyRank();
            this.requestGetRank();
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "skillLayout", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damageScroll", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rankHerads", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "myHerdItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "notRankNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "totalDamageLab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "maxDamageLab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sweepBtnNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lastChallengeNum", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "damageItemPrefab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "skillPrefab", [_dec13], {
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
//# sourceMappingURL=e55a0ddeeb22a46c03760d0978fdd51702a7b48b.js.map
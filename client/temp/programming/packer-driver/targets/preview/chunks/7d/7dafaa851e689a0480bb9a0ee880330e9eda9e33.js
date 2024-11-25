System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, ViewPop, proto, Net, tab, AssociationControl, EventMgr, SimpleRoleInfo, TopWarPlayRankHeadiItem, AssociationData, createAnimation, GameUtil, getTimeUntilNextDay, setTextTime, RoleData, TopWarBossSkillItem, LangMgr, CommonTipsPop, CommonTipsPopCloseType, ShowTips, UIMgr, ViewName, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, AssociationBossView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationControl(extras) {
    _reporterNs.report("AssociationControl", "./AssociationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleRoleInfo(extras) {
    _reporterNs.report("SimpleRoleInfo", "../friends/SimpleRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTopWarPlayRankHeadiItem(extras) {
    _reporterNs.report("TopWarPlayRankHeadiItem", "../jianghu/topWar/TopWarPlayRankHeadiItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimation(extras) {
    _reporterNs.report("createAnimation", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetTimeUntilNextDay(extras) {
    _reporterNs.report("getTimeUntilNextDay", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTopWarBossSkillItem(extras) {
    _reporterNs.report("TopWarBossSkillItem", "../jianghu/topWar/topWarBossSkillItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPopCloseType(extras) {
    _reporterNs.report("CommonTipsPopCloseType", "../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      Net = _unresolved_3.Net;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      AssociationControl = _unresolved_5.AssociationControl;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_unresolved_7) {
      SimpleRoleInfo = _unresolved_7.SimpleRoleInfo;
    }, function (_unresolved_8) {
      TopWarPlayRankHeadiItem = _unresolved_8.TopWarPlayRankHeadiItem;
    }, function (_unresolved_9) {
      AssociationData = _unresolved_9.AssociationData;
    }, function (_unresolved_10) {
      createAnimation = _unresolved_10.createAnimation;
      GameUtil = _unresolved_10.GameUtil;
      getTimeUntilNextDay = _unresolved_10.getTimeUntilNextDay;
      setTextTime = _unresolved_10.setTextTime;
    }, function (_unresolved_11) {
      RoleData = _unresolved_11.RoleData;
    }, function (_unresolved_12) {
      TopWarBossSkillItem = _unresolved_12.TopWarBossSkillItem;
    }, function (_unresolved_13) {
      LangMgr = _unresolved_13.LangMgr;
    }, function (_unresolved_14) {
      CommonTipsPop = _unresolved_14.CommonTipsPop;
      CommonTipsPopCloseType = _unresolved_14.CommonTipsPopCloseType;
    }, function (_unresolved_15) {
      ShowTips = _unresolved_15.ShowTips;
      UIMgr = _unresolved_15.UIMgr;
    }, function (_unresolved_16) {
      ViewName = _unresolved_16.ViewName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3989ecBZ5BM3oFC2EMfnlNw", "AssociationBossView", undefined);
      /*
       * @Date: 2024-09-18 14:50:45
       * @LastEditors: wzq
       * @pragram:公会boss
       * @LastEditTime: 2024-11-05 10:09:21
       */


      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationBossView", AssociationBossView = (_dec = ccclass('AssociationBossView'), _dec2 = property([Node]), _dec3 = property(_crd && TopWarPlayRankHeadiItem === void 0 ? (_reportPossibleCrUseOfTopWarPlayRankHeadiItem({
        error: Error()
      }), TopWarPlayRankHeadiItem) : TopWarPlayRankHeadiItem), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = class AssociationBossView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "rankHerads", _descriptor, this);

          _initializerDefineProperty(this, "myHerdItem", _descriptor2, this);

          _initializerDefineProperty(this, "totalDamageLab", _descriptor3, this);

          _initializerDefineProperty(this, "lastChallengeNum", _descriptor4, this);

          _initializerDefineProperty(this, "sweepBtnNode", _descriptor5, this);

          _initializerDefineProperty(this, "skillPrefab", _descriptor6, this);

          _initializerDefineProperty(this, "skillLayout", _descriptor7, this);

          _initializerDefineProperty(this, "timerLab", _descriptor8, this);

          _initializerDefineProperty(this, "node_player", _descriptor9, this);

          _initializerDefineProperty(this, "node_not_rank_self", _descriptor10, this);

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

        onShow() {
          (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
            error: Error()
          }), AssociationControl) : AssociationControl).ins.reqGetGuildBossRank();
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetGuildBossRankRsp, this.on_s2c_GetGuildBossRankRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GuildBossDataPush, this.on_s2c_GuildBossDataPush, this);
        }

        on_s2c_GuildBossDataPush(msg) {
          (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.refreshSelfRoleRankScore(msg.maxScore);
          this.initMyRank();
        }

        unRegister() {
          super.unRegister();
        }

        on_s2c_GetGuildBossRankRsp(msg) {
          this.initSkills();
          this.initMyRank();
          this.initEndTimer();
          this.setGuildHerosSpine();
          this.rankMsg = msg.roleRank;

          for (var key in this.rankHerads) {
            this.rankHerads[key].getChildByName("notRank_node").active = true;
            this.rankHerads[key].getChildByName("PlayRankHeadiItem").active = false;
            ;
            this.rankHerads[key].getChildByName("playname_txt").active = false;
          }

          var top_player_list = [];

          for (var i = 0; i < this.rankMsg.length; i++) {
            if (i < 3) {
              top_player_list.push(this.rankMsg[i]);
            }
          }

          if (top_player_list.length > 0) {
            for (var _key in top_player_list) {
              var node = this.rankHerads[_key];
              node.getChildByName("notRank_node").active = false;
              node.getChildByName("PlayRankHeadiItem").active = true;
              var headItem = node.getChildByName("PlayRankHeadiItem").getComponent(_crd && TopWarPlayRankHeadiItem === void 0 ? (_reportPossibleCrUseOfTopWarPlayRankHeadiItem({
                error: Error()
              }), TopWarPlayRankHeadiItem) : TopWarPlayRankHeadiItem);
              var info = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
                error: Error()
              }), SimpleRoleInfo) : SimpleRoleInfo)();
              info.merge(top_player_list[_key].simple);
              headItem.initView({
                roleInfo: info
              });
              headItem.setRankLab(Number(_key) + 1);
              var nameLab = node.getChildByName("playname_txt").getComponent(Label);
              nameLab.node.active = true;
              nameLab.string = top_player_list[_key].simple.name;
            }
          }
        }

        initMyRank() {
          // error("头像功能没有做")
          var selfSimple = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getSelfRoleRankInfo(); // const ranking = AssociationData.ins.getSelfRoleRankCount();

          var _ranking = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getRoleRankSelfRanking();

          this.myHerdItem.setRankLab(_ranking);
          this.myHerdItem.initView({
            headFrame: (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.avatarInfo.headFrame,
            headIcon: (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.avatarInfo.headIcon
          });
          this.myHerdItem.myNode.active = true;

          if (selfSimple) {
            this.totalDamageLab.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertNumber(selfSimple.score);
          }

          this.node_not_rank_self.active = _ranking === -1;
          var freeCount = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().GuildBossDailyCount;
          var num = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.GuildBossMsg.challengeCount;
          var buyNum = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().GuildBossDailyBuyCount;

          if (num < freeCount) {
            this.lastChallengeNum.string = "" + buyNum;
          } else {
            this.lastChallengeNum.string = "" + (freeCount + buyNum - num);
          }

          this.sweepBtnNode.active = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.GuildBossMsg.maxScore > 0 && (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).GuildOFName.GuildOFName_GuildBoss); // let herodInfo=RoleData.ins.
        }

        initSkills() {
          var skillIds = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().GuildBossShowSkillIds;

          for (var key in skillIds) {
            var item = instantiate(this.skillPrefab);
            item.parent = this.skillLayout;
            item.getComponent(_crd && TopWarBossSkillItem === void 0 ? (_reportPossibleCrUseOfTopWarBossSkillItem({
              error: Error()
            }), TopWarBossSkillItem) : TopWarBossSkillItem).initSkillId(skillIds[key]);
          }
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

        onClickChallenge() {
          var isOpen = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).GuildOFName.GuildOFName_GuildBoss);

          if (isOpen) {
            var callBack = () => {
              var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Msg_StartStageReq();
              msg.stageId = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
                error: Error()
              }), AssociationData) : AssociationData).ins.GuildBossMsg.stageId;
              (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                error: Error()
              }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Ptl.StartStageReq, msg);
            };

            this.buyChallenge(callBack);
          } else {
            (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.showFunctionTips((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).GuildOFName.GuildOFName_GuildBoss);
          }
        }

        buyChallenge(callBack) {
          var freeCount = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().GuildBossDailyCount;
          var num = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.GuildBossMsg.challengeCount;

          if (num < freeCount) {
            callBack();
          } else {
            var buyNum = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().GuildBossDailyBuyCount;
            var totalNum = buyNum + freeCount;

            if (num < totalNum) {
              var isPrivilege = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
                error: Error()
              }), AssociationData) : AssociationData).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).GuildOFName.GuildOFName_GuildBoss); //弹窗购买框

              var tips = "";
              var spend = 0;

              if (isPrivilege) {
                //tips="特权购买免费次数提示\n今日剩余购买次数"+(totalNum-num);
                tips = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getCombineString("Tips_worldboss_2", [totalNum - num]);
              } else {
                var buySpends = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().GetKeyValue_ConfigTable().GuildBossDailyBuyCostDiamonds;
                var currBuyNum = buyNum - (totalNum - num);

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
          if ((_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).GuildOFName.GuildOFName_GuildBoss)) {
            this.buyChallenge(() => {
              (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
                error: Error()
              }), AssociationControl) : AssociationControl).ins.reqQuickSweepBoss();
            });
          } else {
            (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.showFunctionTips((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).GuildOFName.GuildOFName_GuildBoss);
          }
        } // 获取公会中战斗力最强的英雄id


        setGuildHerosSpine() {
          var membersArr = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getGuildMemberArr();

          for (var i = 1; i <= 15; i++) {
            var player = this.node_player.getChildByName("player" + i);

            if (membersArr[i - 1]) {
              var lbl = player.getChildByName("name_txt").getComponent(Label);
              lbl.string = membersArr[i - 1].name;
              player.active = true;

              if (membersArr[i - 1].highestHeroItemId) {
                var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().HeroTableById.getValue(membersArr[i - 1].highestHeroItemId);
                (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
                  error: Error()
                }), createAnimation) : createAnimation)(player, heroTab.Idle);
              }
            } else {
              player.active = false;
            }
          }
        }

        showAllRank() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).AssociationRankPop
          });
        }

        showAwards(e, type) {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).AssociationRankRewardPop,
            data: type
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rankHerads", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "myHerdItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "totalDamageLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lastChallengeNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sweepBtnNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "skillPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "skillLayout", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "timerLab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_player", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_not_rank_self", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7dafaa851e689a0480bb9a0ee880330e9eda9e33.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "client_protocol", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, ViewScreen, ClimbingTowerTowerItem, ClimbingTowerBuffInfoItem, EventMgr, proto, GameplayControl, tab, GameplayViewDataMgr, LangMgr, ItemInfo, ItemPoolMgr, RoleData, ShowTips, UIMgr, ViewName, Net, GameUtil, Func, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, ClimbingTowerMainView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewScreen(extras) {
    _reporterNs.report("ViewScreen", "../../../../framework/base/ViewScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClimbingTowerTowerItem(extras) {
    _reporterNs.report("ClimbingTowerTowerItem", "./ClimbingTowerTowerItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClimbingTowerBuffInfoItem(extras) {
    _reporterNs.report("ClimbingTowerBuffInfoItem", "./ClimbingTowerBuffInfoItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayControl(extras) {
    _reporterNs.report("GameplayControl", "../GameplayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayViewDataMgr(extras) {
    _reporterNs.report("GameplayViewDataMgr", "../GameplayViewDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
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

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../../utils/Func", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewScreen = _unresolved_2.ViewScreen;
    }, function (_unresolved_3) {
      ClimbingTowerTowerItem = _unresolved_3.ClimbingTowerTowerItem;
    }, function (_unresolved_4) {
      ClimbingTowerBuffInfoItem = _unresolved_4.ClimbingTowerBuffInfoItem;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_6) {
      GameplayControl = _unresolved_6.GameplayControl;
    }, function (_unresolved_7) {
      tab = _unresolved_7.tab;
    }, function (_unresolved_8) {
      GameplayViewDataMgr = _unresolved_8.GameplayViewDataMgr;
    }, function (_unresolved_9) {
      LangMgr = _unresolved_9.LangMgr;
    }, function (_unresolved_10) {
      ItemInfo = _unresolved_10.ItemInfo;
    }, function (_unresolved_11) {
      ItemPoolMgr = _unresolved_11.ItemPoolMgr;
    }, function (_unresolved_12) {
      RoleData = _unresolved_12.RoleData;
    }, function (_unresolved_13) {
      ShowTips = _unresolved_13.ShowTips;
      UIMgr = _unresolved_13.UIMgr;
    }, function (_unresolved_14) {
      ViewName = _unresolved_14.ViewName;
    }, function (_unresolved_15) {
      Net = _unresolved_15.Net;
    }, function (_unresolved_16) {
      GameUtil = _unresolved_16.GameUtil;
    }, function (_unresolved_17) {
      Func = _unresolved_17.Func;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "925c2SIdl5AJaaBv5RH3jhk", "ClimbingTowerMainView", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventTouch', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ClimbingTowerMainView
       * zhudingchao
       * Thu Jul 11 2024 14:26:32 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/jianghu/climbingTower/ClimbingTowerMainView.ts
       *
       */

      _export("ClimbingTowerMainView", ClimbingTowerMainView = (_dec = ccclass('ClimbingTowerMainView'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property([Node]), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property([_crd && ClimbingTowerTowerItem === void 0 ? (_reportPossibleCrUseOfClimbingTowerTowerItem({
        error: Error()
      }), ClimbingTowerTowerItem) : ClimbingTowerTowerItem]), _dec12 = property([_crd && ClimbingTowerBuffInfoItem === void 0 ? (_reportPossibleCrUseOfClimbingTowerBuffInfoItem({
        error: Error()
      }), ClimbingTowerBuffInfoItem) : ClimbingTowerBuffInfoItem]), _dec13 = property(Node), _dec14 = property(Node), _dec(_class = (_class2 = class ClimbingTowerMainView extends (_crd && ViewScreen === void 0 ? (_reportPossibleCrUseOfViewScreen({
        error: Error()
      }), ViewScreen) : ViewScreen) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nameLab", _descriptor, this);

          _initializerDefineProperty(this, "layersLab", _descriptor2, this);

          _initializerDefineProperty(this, "recommendNode", _descriptor3, this);

          _initializerDefineProperty(this, "rewardNode", _descriptor4, this);

          _initializerDefineProperty(this, "saoDangBtnNode", _descriptor5, this);

          _initializerDefineProperty(this, "tioazhanBtnNode", _descriptor6, this);

          _initializerDefineProperty(this, "jingyingBtnNode", _descriptor7, this);

          _initializerDefineProperty(this, "stageRewardLab1", _descriptor8, this);

          _initializerDefineProperty(this, "stageRewardLab2", _descriptor9, this);

          _initializerDefineProperty(this, "climbingTowerTowerItem", _descriptor10, this);

          _initializerDefineProperty(this, "buffInfoItems", _descriptor11, this);

          _initializerDefineProperty(this, "stateRewadNode", _descriptor12, this);

          _initializerDefineProperty(this, "node_guild", _descriptor13, this);

          this.currStateId = void 0;
          this.isMax = false;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetClimbTowerInfoRsp, this.on_s2c_GetClimbTowerInfoRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.QuickFinishClimbTowerStageRsp, this.on_s2c_QuickFinishClimbTowerStageRsp, this);
        }

        onShow() {
          (_crd && GameplayControl === void 0 ? (_reportPossibleCrUseOfGameplayControl({
            error: Error()
          }), GameplayControl) : GameplayControl).ins.requestGetClimbTowerInfo();
          var showGuild = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("openClimbingTower");

          if (!showGuild) {
            this.node_guild.active = true;
            (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).setItem("openClimbingTower", "1");
          } else {
            this.node_guild.active = false;
          }
        }

        hideGuild() {
          this.node_guild.active = false;
        }

        initView() {
          var msg = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.climbTowerInfoMsg;
          this.currStateId = msg.clearedStageIds.length == 0 ? 30101 : msg.clearedStageIds[msg.clearedStageIds.length - 1] + 1;
          var table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ClimbTowerTableByStageId.getValue(this.currStateId);
          var isMax = false;

          if (!table) {
            this.currStateId = this.currStateId - 1;
            table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ClimbTowerTableByStageId.getValue(this.currStateId);
            isMax = true;
          }

          this.isMax = isMax;

          if (table) {
            this.layersLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_climbingtower_2", [table.Floor]);
            var buffs = table.SkillShow;

            for (var key in buffs) {
              var buffTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().PveStageBuffTableById.getValue(buffs[key]);

              if (buffTab) {
                this.buffInfoItems[key].buffIcon.setTexture(buffTab.ShowIcon);
                this.buffInfoItems[key].buffInfoLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getLab(buffTab.Show);
              }
            }

            this.rewardNode.removeAllChildren();
            var pveTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().PveStageTableByStageId.getValue(table.StageId);

            for (var _key in pveTable.RewardItemId) {
              var itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                error: Error()
              }), ItemInfo) : ItemInfo)();
              itemInfo.initItemData(pveTable.RewardItemId[_key], pveTable.RewardItemNum[_key]);
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(itemInfo, this.rewardNode);
            }

            var recFight = pveTable.RecommendFight;

            var setLastTimer = node => {
              var total = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GetKeyValue_ConfigTable().ClimbTowerDefeatCount;
              var last = total - msg.defeatTimes;
              node.getChildByName("num_node").getChildByName("num_label").getComponent(Label).string = last + "/" + total;
            };

            if (!table.CrushedValue) {
              //精英挑战
              this.recommendNode[0].active = false;
              this.recommendNode[1].active = false;
              this.recommendNode[2].active = true;
              this.recommendNode[2].getChildByName("cenum_txt").getComponent(Label).string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                error: Error()
              }), GameUtil) : GameUtil).convertNumber(recFight) + "";
              this.jingyingBtnNode.active = true;
              this.saoDangBtnNode.active = false;
              this.tioazhanBtnNode.active = false; // setLastTimer(this.jingyingBtnNode);
            } else {
              var currFight = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.powerScore;
              var isRolling = currFight >= recFight * table.CrushedValue / 10000;

              if (isRolling) {
                //碾压
                this.recommendNode[0].active = true;
                this.recommendNode[1].active = false;
                this.recommendNode[2].active = false;
                this.recommendNode[0].getChildByName("cenum_txt").getComponent(Label).string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                  error: Error()
                }), GameUtil) : GameUtil).convertNumber(recFight) + "";
                this.saoDangBtnNode.active = true;
                this.jingyingBtnNode.active = false;
                this.tioazhanBtnNode.active = false; // setLastTimer(this.saoDangBtnNode);
              } else {
                //挑战
                this.recommendNode[0].active = false;
                this.recommendNode[1].active = true;
                this.recommendNode[2].active = false;
                this.recommendNode[1].getChildByName("cenum_txt").getComponent(Label).string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                  error: Error()
                }), GameUtil) : GameUtil).convertNumber(recFight) + "";
                this.tioazhanBtnNode.active = true;
                this.jingyingBtnNode.active = false;
                this.saoDangBtnNode.active = false; // setLastTimer(this.tioazhanBtnNode);
              }
            }

            if (this.isMax) {
              this.jingyingBtnNode.getComponent(Sprite).grayscale = true;
              ;
              this.saoDangBtnNode.getComponent(Sprite).grayscale = true;
              ;
              this.tioazhanBtnNode.getComponent(Sprite).grayscale = true;
              ;
            }
          } else {//已通关
          }

          this.initTowerItem();
          this.initStateRewad();
        }

        initTowerItem() {
          var msg = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.climbTowerInfoMsg;
          var currStateId = this.currStateId;
          var ids = [];

          if (msg.clearedStageIds.length == 0) {
            ids = [currStateId, currStateId + 1, currStateId + 2];
          } else {
            ids = [currStateId - 1, currStateId, currStateId + 1];
          }

          for (var key in ids) {
            var state = 2;

            if (ids[key] == currStateId) {
              state = 1;
            } else {
              if (msg.clearedStageIds.indexOf(ids[key]) >= 0) {
                state = 0;
              }
            }

            var table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ClimbTowerTableByStageId.getValue(ids[key]);
            this.climbingTowerTowerItem[key].initView(state, table);
          }
        }

        initStateRewad() {
          var tables = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveClearStageTable;
          var currStateTab = null;

          for (var key in tables) {
            if (tables[key].StageType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PveStageType.PveStageType_ClimbTower) {
              if (this.isMax) {
                currStateTab = tables[key];
              } else {
                if (this.currStateId <= tables[key].StageId) {
                  currStateTab = tables[key];
                  break;
                }
              }
            }
          }

          this.stateRewadNode.removeAllChildren();

          if (currStateTab) {
            var itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            itemInfo.initItemData(currStateTab.ClearRewardItemIds[0], currStateTab.ClearRewardItemNum[0]);
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(itemInfo, this.stateRewadNode);
            var level = currStateTab.StageId - this.currStateId;

            if (level == 0) {
              this.stageRewardLab2.node.active = true;
              this.stageRewardLab1.node.active = false;
            } else {
              this.stageRewardLab2.node.active = false;
              this.stageRewardLab1.node.active = true;

              if (this.isMax) {
                this.stageRewardLab1.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getCombineString("ui_climbingtower_1", [0]);
              } else {
                this.stageRewardLab1.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getCombineString("ui_climbingtower_1", [(level + 1) * 10]);
              }
            }
          } else {//满级
          }
        }

        onClickRewardBtn() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).ClimbingTowerTowerEveryDayRewardPop
          });
        }

        onClickStateRewardBtn() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).ClimbingTowerRewardPop
          });
        }
        /**点击挑战 */


        onClickChallenge() {
          if (!this.isMax) {
            var total = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().ClimbTowerDefeatCount;
            var last = total - (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
              error: Error()
            }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.climbTowerInfoMsg.defeatTimes;

            if (last > 0) {
              var table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ClimbTowerTableByStageId.getValue(this.currStateId);
              var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Msg_StartStageReq();
              msg.stageId = table.StageId;
              (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                error: Error()
              }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Ptl.StartStageReq, msg);
            } else {
              //ShowTips("次数不足")
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("Tips_timeshortage"));
            }
          }
        }
        /**点击碾压 */


        onClickRolling() {
          if (!this.isMax) {
            (_crd && GameplayControl === void 0 ? (_reportPossibleCrUseOfGameplayControl({
              error: Error()
            }), GameplayControl) : GameplayControl).ins.requestQuickFinishClimbTowerStage(this.currStateId);
          }
        }

        on_s2c_GetClimbTowerInfoRsp(msg) {
          this.initView();
        } // on_s2c_ReceiveClimbTowerDailyRewardsRsp(msg: proto.Msg_ReceiveClimbTowerDailyRewardsRsp) {
        //     if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
        //     }
        // }


        on_s2c_QuickFinishClimbTowerStageRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.initView();

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

        onClickTips(event) {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CommonBlackTipsPop,
            data: {
              "scaleX": -1,
              "worldPos": event.target.worldPosition,
              "WordTableKey": "Tips_help_ClimbingTowerMainView"
            }
          });
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "layersLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "recommendNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rewardNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "saoDangBtnNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tioazhanBtnNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "jingyingBtnNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "stageRewardLab1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "stageRewardLab2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "climbingTowerTowerItem", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "buffInfoItems", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "stateRewadNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_guild", [_dec14], {
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
//# sourceMappingURL=0b35e811ae506e52cd9a3940299f536ba3bb2d72.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, ViewPop, proto, ItemInfo, ItemPoolMgr, CommonItem, FightRootControl, tab, LangMgr, DamageStatisticsData, AdMgr, Net, EventMgr, UIMgr, ViewName, RoleData, GameplayViewDataMgr, OpenFunctionMgr, FightData, FincaFightData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, FightWinPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../model/item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../model/item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../../model/item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageStatisticsData(extras) {
    _reporterNs.report("DamageStatisticsData", "../base/damage/DamageStatisticsData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdMgr(extras) {
    _reporterNs.report("AdMgr", "../../model/AdMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../model/role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayViewDataMgr(extras) {
    _reporterNs.report("GameplayViewDataMgr", "../../model/jianghu/GameplayViewDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightData(extras) {
    _reporterNs.report("FincaFightData", "../../model/fincaFight/FincaFightData", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      ItemInfo = _unresolved_3.ItemInfo;
    }, function (_unresolved_4) {
      ItemPoolMgr = _unresolved_4.ItemPoolMgr;
    }, function (_unresolved_5) {
      CommonItem = _unresolved_5.CommonItem;
    }, function (_unresolved_6) {
      FightRootControl = _unresolved_6.FightRootControl;
    }, function (_unresolved_7) {
      tab = _unresolved_7.tab;
    }, function (_unresolved_8) {
      LangMgr = _unresolved_8.LangMgr;
    }, function (_unresolved_9) {
      DamageStatisticsData = _unresolved_9.DamageStatisticsData;
    }, function (_unresolved_10) {
      AdMgr = _unresolved_10.AdMgr;
    }, function (_unresolved_11) {
      Net = _unresolved_11.Net;
    }, function (_unresolved_12) {
      EventMgr = _unresolved_12.EventMgr;
    }, function (_unresolved_13) {
      UIMgr = _unresolved_13.UIMgr;
    }, function (_unresolved_14) {
      ViewName = _unresolved_14.ViewName;
    }, function (_unresolved_15) {
      RoleData = _unresolved_15.RoleData;
    }, function (_unresolved_16) {
      GameplayViewDataMgr = _unresolved_16.GameplayViewDataMgr;
    }, function (_unresolved_17) {
      OpenFunctionMgr = _unresolved_17.OpenFunctionMgr;
    }, function (_unresolved_18) {
      FightData = _unresolved_18.FightData;
    }, function (_unresolved_19) {
      FincaFightData = _unresolved_19.FincaFightData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb9a1OLEwlCgJ0UwbDLF4C+", "FightWinPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightWinPop", FightWinPop = (_dec = ccclass('FightWinPop'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Label), _dec(_class = (_class2 = class FightWinPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_content", _descriptor, this);

          _initializerDefineProperty(this, "lbl_name", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_skill_count", _descriptor3, this);

          _initializerDefineProperty(this, "node_double", _descriptor4, this);

          _initializerDefineProperty(this, "lbl_ad_times", _descriptor5, this);

          _initializerDefineProperty(this, "damage_Node", _descriptor6, this);

          _initializerDefineProperty(this, "fincaFight_result", _descriptor7, this);

          this.awards = [];
        }

        onLoad() {
          super.onLoad();

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isPvp) {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.curClearStageId = 60001;
            this.lbl_skill_count.node.parent.active = false;
            this.node_double.active = false;
            this.damage_Node.active = false;
          }
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveMainStageDoubleRewardsRsp, this.on_s2c_ReceiveMainStageDoubleRewardsRsp, this);
        }

        on_s2c_ReceiveMainStageDoubleRewardsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return; // 领取双倍奖励

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: msg.rewards
          });
        }

        unRegister() {
          super.unRegister();
        }

        onShow() {
          // 创建奖励
          this.awards = this.openData;

          for (var i = 0; i < this.awards.length; i++) {
            var award = this.awards[i];
            this.createCommonItem(award);
          } // 设置关卡名称


          var pveTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageId);

          if (pveTab.StageType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PveStageType.PveStageType_FeedStage || pveTab.StageType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PveStageType.PveStageType_GoldStage) {
            (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
              error: Error()
            }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.addExportInfo(pveTab.StageType, (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.curClearStageId);
          } // this.lbl_name.string = LangMgr.getLab(chapterData.Name);


          this.lbl_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(pveTab.StageName); // 击杀怪物数量

          this.lbl_skill_count.string = String((_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
            error: Error()
          }), DamageStatisticsData) : DamageStatisticsData).ins.totalKill); // 设置广告次数

          var adTimes = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_MainChapterReward);
          var maxTimes = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountMaxByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_MainChapterReward);
          var isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_WinResultDoubleReward);
          this.node_double.active = maxTimes > adTimes && isOpen && pveTab.StageType != (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PveStageType.PveStageType_PVPBattle;

          if (pveTab.StageType !== (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PveStageType.PveStageType_MainChapter) {
            this.node_double.active = false;
          }

          this.lbl_ad_times.string = "(" + (maxTimes - adTimes) + "/" + maxTimes + ")";

          if (pveTab.StageType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PveStageType.PveStageType_PVPBattle) {
            this.fincaFight_result.node.active = true;
            this.fincaFight_result.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_fincafight_13", [(_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.getChangeScoreStr((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.fincaBattleFightRsp.newScore)]);
          }
        }

        onDestroy() {
          super.onDestroy();
        }

        createCommonItem(data) {
          var info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          info.itemId = data.itemId;
          info.num = data.num;
          var itemItem = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(info, this.node_content);
          var itemTs = itemItem.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
            error: Error()
          }), CommonItem) : CommonItem);
          itemTs.setTouchCallBack(() => {});
        } // 点击确定返回主页


        clickGoHomeBtn() {
          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isPvp) {
            (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.pvpEnd();
            return;
          }

          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.enterMain();
        } // 点击领取广告奖励


        clickAd() {
          this.node_double.active = false;
          (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.playVideoAd((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_MainChapterReward, () => {
            var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_ReceiveMainStageDoubleRewardsReq();
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.ReceiveMainStageDoubleRewardsReq, msg);
          });
        } // 点击战斗伤害详情


        clickDamageDetail(event) {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).FightDamageRankPop,
            data: {
              event: event
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_name", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_skill_count", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_double", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_ad_times", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "damage_Node", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "fincaFight_result", [_dec8], {
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
//# sourceMappingURL=70521c860367e923bc8376ac8a8861061d9782f1.js.map
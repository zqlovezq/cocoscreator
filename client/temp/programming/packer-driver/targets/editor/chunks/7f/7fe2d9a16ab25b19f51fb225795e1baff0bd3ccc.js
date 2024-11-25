System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, ViewPop, BattleMainDataControl, tab, LangMgr, DamageStatisticsData, ItemInfo, ItemPoolMgr, CommonItem, FightRootControl, setTextTime_3, WaveTimeControl, RoleData, UIMgr, ViewName, stepBranchGuide, FightData, FincaFightData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, FightLosePop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "../../model/home/battle/BattleMainDataControl", _context.meta, extras);
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

  function _reportPossibleCrUseOfsetTextTime_(extras) {
    _reporterNs.report("setTextTime_3", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaveTimeControl(extras) {
    _reporterNs.report("WaveTimeControl", "../wave/WaveTimeControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../model/role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstepBranchGuide(extras) {
    _reporterNs.report("stepBranchGuide", "../../guide/GuideTask", _context.meta, extras);
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
    }, function (_unresolved_3) {
      BattleMainDataControl = _unresolved_3.BattleMainDataControl;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      LangMgr = _unresolved_5.LangMgr;
    }, function (_unresolved_6) {
      DamageStatisticsData = _unresolved_6.DamageStatisticsData;
    }, function (_unresolved_7) {
      ItemInfo = _unresolved_7.ItemInfo;
    }, function (_unresolved_8) {
      ItemPoolMgr = _unresolved_8.ItemPoolMgr;
    }, function (_unresolved_9) {
      CommonItem = _unresolved_9.CommonItem;
    }, function (_unresolved_10) {
      FightRootControl = _unresolved_10.FightRootControl;
    }, function (_unresolved_11) {
      setTextTime_3 = _unresolved_11.setTextTime_3;
    }, function (_unresolved_12) {
      WaveTimeControl = _unresolved_12.WaveTimeControl;
    }, function (_unresolved_13) {
      RoleData = _unresolved_13.RoleData;
    }, function (_unresolved_14) {
      UIMgr = _unresolved_14.UIMgr;
    }, function (_unresolved_15) {
      ViewName = _unresolved_15.ViewName;
    }, function (_unresolved_16) {
      stepBranchGuide = _unresolved_16.stepBranchGuide;
    }, function (_unresolved_17) {
      FightData = _unresolved_17.FightData;
    }, function (_unresolved_18) {
      FincaFightData = _unresolved_18.FincaFightData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc4deCbsmBHI6aOd2jJ10EM", "FightLosePop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightLosePop", FightLosePop = (_dec = ccclass('FightLosePop'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec(_class = (_class2 = class FightLosePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "node_content", _descriptor, this);

          _initializerDefineProperty(this, "lbl_name", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_skill_count", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_max_alive_second", _descriptor4, this);

          _initializerDefineProperty(this, "lbl_alive_second", _descriptor5, this);

          _initializerDefineProperty(this, "damage_Node", _descriptor6, this);

          _initializerDefineProperty(this, "great_node", _descriptor7, this);

          _initializerDefineProperty(this, "fincaFight_result", _descriptor8, this);

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
            this.great_node.active = false;
            this.damage_Node.active = false;
          }
        }

        register() {}

        unRegister() {
          super.unRegister();
        }

        onShow() {
          // 创建奖励
          this.awards = this.openData;

          for (let i = 0; i < this.awards.length; i++) {
            const award = this.awards[i];
            this.createCommonItem(award);
          } // 设置关卡名称
          // this.lbl_name.string = LangMgr.getLab(chapterData.Name);


          const pveTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageId);
          this.lbl_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(pveTab.StageName); // 击杀怪物数量

          this.lbl_skill_count.string = String((_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
            error: Error()
          }), DamageStatisticsData) : DamageStatisticsData).ins.totalKill); // 最大存活时间

          if (pveTab.StageType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PveStageType.PveStageType_MainChapter) {
            this.lbl_max_alive_second.string = (_crd && setTextTime_3 === void 0 ? (_reportPossibleCrUseOfsetTextTime_({
              error: Error()
            }), setTextTime_3) : setTextTime_3)((_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
              error: Error()
            }), BattleMainDataControl) : BattleMainDataControl).ins.getCurMaxAliveSecond((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.curClearStageId));
          } else {
            this.lbl_max_alive_second.string = (_crd && setTextTime_3 === void 0 ? (_reportPossibleCrUseOfsetTextTime_({
              error: Error()
            }), setTextTime_3) : setTextTime_3)((_crd && WaveTimeControl === void 0 ? (_reportPossibleCrUseOfWaveTimeControl({
              error: Error()
            }), WaveTimeControl) : WaveTimeControl).ins.nowTotalTime);
          } // 当前的时间


          this.lbl_alive_second.string = (_crd && setTextTime_3 === void 0 ? (_reportPossibleCrUseOfsetTextTime_({
            error: Error()
          }), setTextTime_3) : setTextTime_3)((_crd && WaveTimeControl === void 0 ? (_reportPossibleCrUseOfWaveTimeControl({
            error: Error()
          }), WaveTimeControl) : WaveTimeControl).ins.nowTotalTime);

          if (pveTab.StageType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PveStageType.PveStageType_PVPBattle) {
            this.lbl_alive_second.string = ""; //setTextTime_3(Math.floor(PvpControl.ins.time/1000));

            this.fincaFight_result.node.active = true;
            this.fincaFight_result.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_fincafight_13", [(_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.getChangeScoreStr((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.fincaBattleFightRsp.newScore)]);
          } // 如果当前处于新手引导阶段


          if ((_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getStageClearIds().length === 0 && (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.curClearStageId === 101) {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.setClientData("guideTrunk", String(200));
            (_crd && stepBranchGuide === void 0 ? (_reportPossibleCrUseOfstepBranchGuide({
              error: Error()
            }), stepBranchGuide) : stepBranchGuide)(301);
          }
        }

        onDestroy() {
          super.onDestroy();
        }

        createCommonItem(data) {
          const info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          info.itemId = data.itemId;
          info.num = data.num;
          const itemItem = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(info, this.node_content);
          const itemTs = itemItem.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
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
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_name", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_skill_count", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_max_alive_second", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_alive_second", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "damage_Node", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "great_node", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "fincaFight_result", [_dec9], {
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
//# sourceMappingURL=7fe2d9a16ab25b19f51fb225795e1baff0bd3ccc.js.map
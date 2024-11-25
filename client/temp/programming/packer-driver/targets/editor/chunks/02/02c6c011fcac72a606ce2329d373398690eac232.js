System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, Toggle, ViewPop, tab, LangMgr, GameUtil, AssociationData, AssociationRankRewardItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, AssociationRankRewardPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationRankRewardItem(extras) {
    _reporterNs.report("AssociationRankRewardItem", "./AssociationRankRewardItem", _context.meta, extras);
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
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }, function (_unresolved_5) {
      GameUtil = _unresolved_5.GameUtil;
    }, function (_unresolved_6) {
      AssociationData = _unresolved_6.AssociationData;
    }, function (_unresolved_7) {
      AssociationRankRewardItem = _unresolved_7.AssociationRankRewardItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0ff43+t0zdKgqO2HCKBUubt", "AssociationRankRewardPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Label', 'Node', 'Prefab', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationRankRewardPop", AssociationRankRewardPop = (_dec = ccclass('AssociationRankRewardPop'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Prefab), _dec7 = property(Toggle), _dec8 = property(Toggle), _dec9 = property(Toggle), _dec(_class = (_class2 = class AssociationRankRewardPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "contentNode", _descriptor, this);

          _initializerDefineProperty(this, "myRankLab", _descriptor2, this);

          _initializerDefineProperty(this, "myRankGuildLab", _descriptor3, this);

          _initializerDefineProperty(this, "myScoreLab", _descriptor4, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor5, this);

          _initializerDefineProperty(this, "toggle_16", _descriptor6, this);

          _initializerDefineProperty(this, "toggle_15", _descriptor7, this);

          _initializerDefineProperty(this, "toggle_17", _descriptor8, this);

          this.view_type = 0;
        }

        onShow() {
          // 个人16 公会15 17伤害奖励
          this.view_type = this.openData ? this.openData : 16;
          this["toggle_" + this.view_type].isChecked = true;
          this.switchView(null, String(this.view_type));
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {}

        unRegister() {
          super.unRegister();
        }

        switchView(e, type) {
          if (e && Number(type) === this.view_type) {
            return;
          }

          this.view_type = Number(type);

          if (this.view_type < 17) {
            this.showRoleRank(this.view_type);
          } else {
            this.showScoreDrop();
          }
        }

        showRoleRank(rankId) {
          this.contentNode.destroyAllChildren();
          let tables = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RankRewardTableById.getValue(rankId);
          let ranks = tables.Ranking;

          for (let key in ranks) {
            let str = ranks[key].split(";");

            if (Number(str[0]) && Number(str[1])) {
              let item = instantiate(this.itemPrefab);
              item.parent = this.contentNode;
              let rewards = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                error: Error()
              }), GameUtil) : GameUtil).getRewardsByDropId(tables.DropId[key]);
              item.getComponent(_crd && AssociationRankRewardItem === void 0 ? (_reportPossibleCrUseOfAssociationRankRewardItem({
                error: Error()
              }), AssociationRankRewardItem) : AssociationRankRewardItem).initView(Number(str[0]), Number(str[1]), rewards);
            }
          }

          let rank = rankId === 16 ? (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getSelfRoleRankCount() : (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getSelfGuildRankCount();
          this.myRankLab.node.parent.active = false;
          this.myRankGuildLab.node.parent.active = false;
          this.myScoreLab.node.parent.active = false;

          if (rankId === 16) {
            this.myRankLab.node.parent.active = true;
            this.myRankLab.string = rank > 0 ? rank + "" : (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_worldboss_5");
          } else {
            this.myRankGuildLab.node.parent.active = true;
            this.myRankGuildLab.string = rank > 0 ? rank + "" : (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_worldboss_5");
          }
        }

        showScoreDrop() {
          this.contentNode.destroyAllChildren();
          this.myRankLab.node.parent.active = false;
          this.myRankGuildLab.node.parent.active = false;
          this.myScoreLab.node.parent.active = true;
          let tables = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildBossPointTable;
          let lastScore = 0;

          for (let i = 0; i < tables.length - 1; i++) {
            const _tab = tables[i];
            let item = instantiate(this.itemPrefab);
            item.parent = this.contentNode;
            let rewards = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).getRewardsByDropId(_tab.DropId); //计算分数 (10000*10000-3000*10000)/25000+3000

            let score = 0;

            if (i === 0) {
              score = _tab.Damage;
              lastScore = score;
            } else {
              const lastTab = tables[i - 1];
              score = lastScore + (_tab.Damage - lastTab.Damage) * 10000 / _tab.PointRaito;
              lastScore = score;
            }

            item.getComponent(_crd && AssociationRankRewardItem === void 0 ? (_reportPossibleCrUseOfAssociationRankRewardItem({
              error: Error()
            }), AssociationRankRewardItem) : AssociationRankRewardItem).initView(0, score, rewards);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "myRankLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "myRankGuildLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "myScoreLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "toggle_16", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "toggle_15", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "toggle_17", [_dec9], {
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
//# sourceMappingURL=02c6c011fcac72a606ce2329d373398690eac232.js.map
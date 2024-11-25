System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, ViewPop, GameUtil, FincaFightRankRewardItem, FincaFightData, LangMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, FincaFightRankRewardPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightRankRewardItem(extras) {
    _reporterNs.report("FincaFightRankRewardItem", "./FincaFightRankRewardItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightData(extras) {
    _reporterNs.report("FincaFightData", "./FincaFightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
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
    }, function (_unresolved_3) {
      GameUtil = _unresolved_3.GameUtil;
    }, function (_unresolved_4) {
      FincaFightRankRewardItem = _unresolved_4.FincaFightRankRewardItem;
    }, function (_unresolved_5) {
      FincaFightData = _unresolved_5.FincaFightData;
    }, function (_unresolved_6) {
      LangMgr = _unresolved_6.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3816S99H9NFYeUxVf1bc3c", "FincaFightRankRewardPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FincaFightRankRewardPop", FincaFightRankRewardPop = (_dec = ccclass('FincaFightRankRewardPop'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = class FincaFightRankRewardPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_item", _descriptor, this);

          _initializerDefineProperty(this, "contentNode", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_my_rank", _descriptor3, this);

          this.view_type = 0;
        }

        onShow() {
          this.view_type = 1;
          this.showRoleRank();
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
          this.showRoleRank();
        }

        showRoleRank() {
          var rankStr = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.FincaRanking > -1 ? (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.FincaRanking : (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_rank_1");
          this.lbl_my_rank.string = rankStr;
          this.contentNode.destroyAllChildren();
          var rewardsInfo = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getRewards(this.view_type, false);

          for (var key in rewardsInfo.Rankings) {
            var str = rewardsInfo.Rankings[key].split(";");

            if (Number(str[0]) && Number(str[1])) {
              var item = instantiate(this.pfb_item);
              item.parent = this.contentNode;
              var rewards = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                error: Error()
              }), GameUtil) : GameUtil).getRewardsByDropId(rewardsInfo.DropId[key]);
              item.getComponent(_crd && FincaFightRankRewardItem === void 0 ? (_reportPossibleCrUseOfFincaFightRankRewardItem({
                error: Error()
              }), FincaFightRankRewardItem) : FincaFightRankRewardItem).initView(Number(str[0]), Number(str[1]), rewards);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_my_rank", [_dec4], {
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
//# sourceMappingURL=40fb276d7ac1477c89398cefa9d9ba7142cdbb4e.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, ItemPoolMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, FengyunRankingStageItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ItemPoolMgr = _unresolved_2.ItemPoolMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25646vYp4tDR4AoPKtgX0ry", "FengyunRankingStageItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * FengyunRankingStageItem
       * zhudingchao
       * Wed Jul 17 2024 15:58:56 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/fengyunRanking/FengyunRankingStageItem.ts
       *
       */

      _export("FengyunRankingStageItem", FengyunRankingStageItem = (_dec = ccclass('FengyunRankingStageItem'), _dec2 = property([Node]), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = class FengyunRankingStageItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "rankNodes", _descriptor, this);

          _initializerDefineProperty(this, "rewardNode", _descriptor2, this);

          _initializerDefineProperty(this, "rankLab", _descriptor3, this);
        }

        initView(minRank, maxRank, rewards) {
          if (minRank != maxRank) {
            this.rankNodes[3].active = true;
            this.rankLab.string = minRank + "-" + maxRank;
          } else {
            this.rankNodes[minRank - 1].active = true;
          }

          this.rewardNode.removeAllChildren();

          for (let key in rewards) {
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(rewards[key], this.rewardNode);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rankNodes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rewardNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rankLab", [_dec4], {
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
//# sourceMappingURL=9f224dc5db95ee120d98ad22bc91393f4ae6d6bb.js.map
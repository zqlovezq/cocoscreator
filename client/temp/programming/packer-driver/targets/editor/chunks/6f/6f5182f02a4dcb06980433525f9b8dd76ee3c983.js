System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, tween, Vec3, ViewPop, tab, BattleMainRewardItem, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, BattleMainRewardPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainRewardItem(extras) {
    _reporterNs.report("BattleMainRewardItem", "./BattleMainRewardItem", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      BattleMainRewardItem = _unresolved_4.BattleMainRewardItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c386Pbkv5KlKg10Q3ob5cG", "BattleMainRewardPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleMainRewardPop", BattleMainRewardPop = (_dec = ccclass('BattleMainRewardPop'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = class BattleMainRewardPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pfb_reward_item", _descriptor, this);

          _initializerDefineProperty(this, "node_content", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_chapter_stage", _descriptor3, this);

          this._rewardTabData = null;
          this._curStageId = 0;
          this._selfData = null;
        }

        register() {}

        onShow() {
          this.node_content.destroyAllChildren();
          /* 当前进行个关卡 */

          this._curStageId = this.openData.Id;
          this._selfData = this.openData.ins;

          const _chapterData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MainChapterTableById.getValue(this.openData.chapterId);

          let idx = 0;

          for (let i = 0; i < _chapterData.StageIds.length; i++) {
            if (_chapterData.StageIds[i] == this._curStageId) {
              idx = i + 1;
              break;
            }
          }

          this.lbl_chapter_stage.string = this.openData.chapterId + "-" + idx;
          this._rewardTabData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ChapterFristRewardTableById.getValue(this._curStageId);

          for (let i = 0; i < this._rewardTabData.Time.length; i++) {
            this.createItem(i);
          }
        }

        onDestroy() {
          super.onDestroy();
        }

        createItem(index) {
          let item = this.node_content.children[index];

          if (!item) {
            item = instantiate(this.pfb_reward_item);
            item.parent = this.node_content;
          }

          const itemTs = item.getComponent(_crd && BattleMainRewardItem === void 0 ? (_reportPossibleCrUseOfBattleMainRewardItem({
            error: Error()
          }), BattleMainRewardItem) : BattleMainRewardItem);
          itemTs.initData(index, this.openData.Id);
          item.setPosition(new Vec3(750, -70 - 150 * index, 0));
          tween(item).delay(0.2 * index).to(0.2, {
            position: new Vec3(0, -70 - 150 * index, 0)
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_reward_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_chapter_stage", [_dec4], {
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
//# sourceMappingURL=6f5182f02a4dcb06980433525f9b8dd76ee3c983.js.map
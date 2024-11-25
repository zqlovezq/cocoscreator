System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, Sprite, ViewPop, RareBookSmallItem, tab, LangMgr, RareBookLevelPreviewPopItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, RareBookLevelPreviewPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookSmallItem(extras) {
    _reporterNs.report("RareBookSmallItem", "./RareBookSmallItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "./RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookLevelPreviewPopItem(extras) {
    _reporterNs.report("RareBookLevelPreviewPopItem", "./RareBookLevelPreviewPopItem", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      RareBookSmallItem = _unresolved_3.RareBookSmallItem;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      LangMgr = _unresolved_5.LangMgr;
    }, function (_unresolved_6) {
      RareBookLevelPreviewPopItem = _unresolved_6.RareBookLevelPreviewPopItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c56f69jt4xDwahgTgeTOdoh", "RareBookLevelPreviewPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookLevelPreviewPop
       * zhudingchao
       * Mon May 27 2024 20:06:27 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookLevelPreviewPop.ts
       *
       */

      _export("RareBookLevelPreviewPop", RareBookLevelPreviewPop = (_dec = ccclass('RareBookLevelPreviewPop'), _dec2 = property(_crd && RareBookSmallItem === void 0 ? (_reportPossibleCrUseOfRareBookSmallItem({
        error: Error()
      }), RareBookSmallItem) : RareBookSmallItem), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property(Prefab), _dec(_class = (_class2 = class RareBookLevelPreviewPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bookItem", _descriptor, this);

          _initializerDefineProperty(this, "nameLab", _descriptor2, this);

          _initializerDefineProperty(this, "vocationSpr", _descriptor3, this);

          _initializerDefineProperty(this, "contentNode", _descriptor4, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor5, this);

          this.currInfo = void 0;
        }

        register() {}

        onShow() {
          this.currInfo = this.openData["bookInfo"];

          if (this.currInfo) {
            this.initView();
          }
        }

        initView() {
          this.bookItem.initView(this.currInfo, false);
          let heroclass = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(this.currInfo.bookTable.Class);
          this.vocationSpr.setTexture(heroclass.Icon);
          this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.currInfo.itemTable.Name);
          let allStarTabls = [];
          let tabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BookStarTable;

          for (let key in tabs) {
            if (tabs[key].BookId == this.currInfo.itemId) {
              allStarTabls.push(tabs[key]);
            }
          }

          let level = this.currInfo.isLock ? this.currInfo.star : 0;

          for (let key in allStarTabls) {
            if (allStarTabls[key].Description && allStarTabls[key].Description != "") {
              let item = instantiate(this.itemPrefab);
              item.parent = this.contentNode;
              item.getComponent(_crd && RareBookLevelPreviewPopItem === void 0 ? (_reportPossibleCrUseOfRareBookLevelPreviewPopItem({
                error: Error()
              }), RareBookLevelPreviewPopItem) : RareBookLevelPreviewPopItem).initData(allStarTabls[key], allStarTabls[key].Level <= level);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bookItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "vocationSpr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec5], {
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a5c7b25299cd9c29406c61593849de7e290b8ae6.js.map
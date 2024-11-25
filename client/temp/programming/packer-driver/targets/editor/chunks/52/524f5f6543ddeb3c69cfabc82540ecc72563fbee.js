System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, ProgressBar, Sprite, HeroStar, LangMgr, tab, ItemData, ComponentBase, EventMgr, LocalEvent, GameUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _crd, ccclass, property, RareBookItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../hero/HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "./RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
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
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      HeroStar = _unresolved_2.HeroStar;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      ItemData = _unresolved_5.ItemData;
    }, function (_unresolved_6) {
      ComponentBase = _unresolved_6.ComponentBase;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }, function (_unresolved_8) {
      LocalEvent = _unresolved_8.LocalEvent;
    }, function (_unresolved_9) {
      GameUtil = _unresolved_9.GameUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "454b1vecspBb6/LcbzI6Htl", "RareBookItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ProgressBar', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookItem
       * zhudingchao
       * Wed May 22 2024 11:30:22 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookItem.ts
       *
       */

      _export("RareBookItem", RareBookItem = (_dec = ccclass('RareBookItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Sprite), _dec9 = property(Sprite), _dec10 = property(Sprite), _dec11 = property(Sprite), _dec12 = property(Label), _dec13 = property(Node), _dec14 = property(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
        error: Error()
      }), HeroStar) : HeroStar), _dec15 = property(Node), _dec16 = property(Label), _dec17 = property(Node), _dec18 = property(Label), _dec19 = property(Node), _dec20 = property(Label), _dec21 = property(ProgressBar), _dec(_class = (_class2 = class RareBookItem extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "emptyNode", _descriptor, this);

          _initializerDefineProperty(this, "bigLockNode", _descriptor2, this);

          _initializerDefineProperty(this, "lockNode", _descriptor3, this);

          _initializerDefineProperty(this, "rareBookNode", _descriptor4, this);

          _initializerDefineProperty(this, "bookSpr", _descriptor5, this);

          _initializerDefineProperty(this, "bookNameLab", _descriptor6, this);

          _initializerDefineProperty(this, "qualitySpr", _descriptor7, this);

          _initializerDefineProperty(this, "qualityBgSpr", _descriptor8, this);

          _initializerDefineProperty(this, "bookPlaystyleSpr", _descriptor9, this);

          _initializerDefineProperty(this, "vocationTypeSpr", _descriptor10, this);

          _initializerDefineProperty(this, "levelLv", _descriptor11, this);

          _initializerDefineProperty(this, "equipNode", _descriptor12, this);

          _initializerDefineProperty(this, "starItem", _descriptor13, this);

          _initializerDefineProperty(this, "fragmentNode", _descriptor14, this);

          _initializerDefineProperty(this, "fragmentNumLab", _descriptor15, this);

          _initializerDefineProperty(this, "scoreNode", _descriptor16, this);

          _initializerDefineProperty(this, "scoreLab", _descriptor17, this);

          _initializerDefineProperty(this, "redDotNode", _descriptor18, this);

          _initializerDefineProperty(this, "unlockLab", _descriptor19, this);

          _initializerDefineProperty(this, "fragmentBar", _descriptor20, this);

          this.info = void 0;
          this.touchCallBack = void 0;
          this.isShowFragment = void 0;
          this.isShowScore = void 0;
          this.isShowRed = void 0;
        }

        start() {}

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).updateBookRedPoint, this.updateRed, this);
        }

        initData(info, isTouch = true, callBack = null, isShowFragment = true, isShowScore = false, isShowRed = false) {
          this.info = info;
          this.isShowFragment = isShowFragment;
          this.bigLockNode.active = false;
          this.isShowScore = isShowScore;
          this.isShowRed = isShowRed;

          if (this.info) {
            // this.lockNode.active=false;
            this.rareBookNode.active = true;
            this.emptyNode.active = false;
            this.bookNameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(this.info.itemTable.Name);
            this.bookSpr.setTexture(this.info.itemTable.Icon);
            let atpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(this.info.bookTable.Aptitude);
            this.qualitySpr.setTexture(atpTab.Icon);
            this.qualityBgSpr.setTexture(atpTab.BookBg);
            let heroclass = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(this.info.bookTable.Class);
            this.vocationTypeSpr.setTexture(heroclass.Icon);
            this.bookPlaystyleSpr.node.active = this.info.bookTable.PlaystyleName != "";

            if (this.info.bookTable.PlaystyleName != "") {
              this.bookPlaystyleSpr.setTexture(this.info.bookTable.PlaystyleName);
            } // this.bookPlaystyleLab.string = LangMgr.getLab(tab.Playstyle[this.info.bookTable.PlaystyleName]);


            this.equipNode.active = this.info.isWear;
            this.updateView(); // this.qualityFrameSpr.setTexture()
          } else {
            this.rareBookNode.active = false;
            this.emptyNode.active = true;
          }

          if (isTouch) {// this.addTouchEvent();
          }

          this.touchCallBack = callBack;
          this.redDotNode.active = this.isShowRed && this.info.isRedPoint;
        }

        initLockView(tips) {
          this.bigLockNode.active = true;
          this.emptyNode.active = false;
          this.rareBookNode.active = false;
          this.unlockLab.string = tips;
        }

        initEmptyView() {
          this.bigLockNode.active = false;
          this.emptyNode.active = true;
          this.rareBookNode.active = false;
        }

        updateView() {
          if (this.info.isLock) {
            this.starItem.showStar(this.info.star);
            this.starItem.node.active = true;
            this.fragmentNode.active = false;

            if (this.info.level > 0) {
              this.levelLv.node.active = true;
              this.levelLv.string = "+" + this.info.level;
            } else {
              this.levelLv.node.active = false;
            }

            this.lockNode.active = false;
            this.scoreNode.active = this.isShowScore;
            this.scoreLab.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertNumber(this.info.powerScore) + "";
          } else {
            this.scoreNode.active = false;
            this.starItem.node.active = false;

            if (this.isShowFragment) {
              this.fragmentNode.active = true;
              let table = this.info.fragmentTable;
              let curr = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                error: Error()
              }), ItemData) : ItemData).ins.getCount(table.Id);
              this.fragmentNumLab.string = curr + "/" + table.Count;
              this.fragmentBar.progress = curr / table.Count;
            } else {
              this.fragmentNode.active = false;
            }

            this.levelLv.node.active = false;
            this.lockNode.active = false;
            this.lockNode.active = true;
          }

          this.redDotNode.active = this.isShowRed && this.info.isRedPoint;
        }

        onClickItem() {
          if (this.touchCallBack) {
            this.touchCallBack(this.info); // if (this.isShowRed && this.info.isRedPoint) {
            //     // this.info.isRedPoint = false;
            //     // this.redDotNode.active = this.info.isRedPoint;
            // }
          }
        }

        updateRed() {
          if (this.isShowRed) {
            this.redDotNode.active = this.info.isRedPoint;
          }
        }

        onDisable() {
          this.starItem.onDisable();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "emptyNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bigLockNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lockNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rareBookNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bookSpr", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bookNameLab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "qualitySpr", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "qualityBgSpr", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bookPlaystyleSpr", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "vocationTypeSpr", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "levelLv", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "equipNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "starItem", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "fragmentNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "fragmentNumLab", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "scoreNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "scoreLab", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "redDotNode", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "unlockLab", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "fragmentBar", [_dec21], {
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
//# sourceMappingURL=524f5f6543ddeb3c69cfabc82540ecc72563fbee.js.map
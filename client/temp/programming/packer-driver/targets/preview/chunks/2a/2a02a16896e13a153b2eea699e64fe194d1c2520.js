System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, Sprite, HeroStar, tab, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, RareBookSmallItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../hero/HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "./RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      HeroStar = _unresolved_2.HeroStar;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd04aitDKlLSZg5CnVxfLCj", "RareBookSmallItem", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookSmallItem
       * zhudingchao
       * Fri May 24 2024 16:13:40 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookSmallItem.ts
       *
       */

      _export("RareBookSmallItem", RareBookSmallItem = (_dec = ccclass('RareBookSmallItem'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Label), _dec9 = property(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
        error: Error()
      }), HeroStar) : HeroStar), _dec10 = property(Button), _dec(_class = (_class2 = class RareBookSmallItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bookSpr", _descriptor, this);

          _initializerDefineProperty(this, "qualitySpr", _descriptor2, this);

          _initializerDefineProperty(this, "qualityBgSpr", _descriptor3, this);

          _initializerDefineProperty(this, "qualityframeSpr", _descriptor4, this);

          _initializerDefineProperty(this, "booktypeImg", _descriptor5, this);

          _initializerDefineProperty(this, "vocationTypeSpr", _descriptor6, this);

          _initializerDefineProperty(this, "levelLv", _descriptor7, this);

          _initializerDefineProperty(this, "starItem", _descriptor8, this);

          _initializerDefineProperty(this, "button", _descriptor9, this);

          this.touchCallBack = void 0;
          this.info = void 0;
        }

        initView(info, isTouch, touchCallBack, isPreView) {
          if (isTouch === void 0) {
            isTouch = false;
          }

          if (touchCallBack === void 0) {
            touchCallBack = null;
          }

          if (isPreView === void 0) {
            isPreView = false;
          }

          this.info = info;
          this.button.enabled = isTouch;
          this.touchCallBack = touchCallBack; // this.bookNameLab.string = LangMgr.getLab(this.info.itemTable.Name);

          this.bookSpr.setTexture(this.info.itemTable.Icon);
          var atpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(this.info.bookTable.Aptitude);
          this.qualitySpr.setTexture(atpTab.Icon);
          this.qualityBgSpr.setTexture(atpTab.BookBgSmall);
          var heroclass = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(this.info.bookTable.Class);
          this.vocationTypeSpr.setTexture(heroclass.Icon);
          var qualitytab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemQualityTableByQuality.getValue(this.info.itemTable.Quality);
          this.qualityframeSpr.setTexture(qualitytab.HeroStarBg);
          this.booktypeImg.node.active = this.info.bookTable.PlaystyleName != "";

          if (this.info.bookTable.PlaystyleName != "") {
            this.booktypeImg.setTexture(this.info.bookTable.PlaystyleName);
          } // this.bookPlaystyleLab.node.active = this.info.bookTable.PlaystyleName != tab.Playstyle.Playstyle_None;
          // this.bookPlaystyleLab.string = LangMgr.getLab(tab.Playstyle[this.info.bookTable.PlaystyleName]);


          if (!isPreView) {
            this.starItem.showStar(this.info.star);

            if (this.info.level > 0) {
              this.levelLv.node.active = true;
              this.levelLv.string = "+" + this.info.level;
            } else {
              this.levelLv.node.active = false;
            }
          } else {
            this.levelLv.node.active = false;
            this.starItem.node.active = false;
          }
        }

        onClickItem() {
          if (this.touchCallBack) {
            this.touchCallBack(this.info);
          }
        }

        onDisable() {
          this.starItem.onDisable();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bookSpr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "qualitySpr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "qualityBgSpr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "qualityframeSpr", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "booktypeImg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "vocationTypeSpr", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "levelLv", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "starItem", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec10], {
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
//# sourceMappingURL=2a02a16896e13a153b2eea699e64fe194d1c2520.js.map
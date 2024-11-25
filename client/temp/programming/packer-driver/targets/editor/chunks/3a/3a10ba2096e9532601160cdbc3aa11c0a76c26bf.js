System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, log, Node, Sprite, HeroStar, HeroData, tab, HeroDataControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, FincaBagItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../hero/HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../hero/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      log = _cc.log;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      HeroStar = _unresolved_2.HeroStar;
    }, function (_unresolved_3) {
      HeroData = _unresolved_3.HeroData;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      HeroDataControl = _unresolved_5.HeroDataControl;
    }],
    execute: function () {
      _crd = true;

      __checkObsolete__(['_decorator', 'Component', 'Label', 'log', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FincaBagItem", FincaBagItem = (_dec = ccclass('FincaBagItem'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Node), _dec8 = property(Label), _dec(_class = (_class2 = class FincaBagItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sp_hero", _descriptor, this);

          //英雄头像
          _initializerDefineProperty(this, "sp_vocation", _descriptor2, this);

          //职业
          _initializerDefineProperty(this, "sp_quality", _descriptor3, this);

          //品质
          _initializerDefineProperty(this, "sp_quality_bg", _descriptor4, this);

          //品质框
          _initializerDefineProperty(this, "sp_quality_star_bg", _descriptor5, this);

          //装备星级职业底
          _initializerDefineProperty(this, "node_star", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_level", _descriptor7, this);

          this.touchCallBack = void 0;
          this.heroInfo = void 0;
        }

        UpdateContent(data) {
          this.node.name = String(data.itemId);
          let itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(data.itemId);
          let heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(data.itemId);
          let heroClassTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(heroTab.Class);
          let heroAptitudeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(heroTab.Aptitude);
          /* 获取品质 */

          let itemQualityTab = null;
          this.heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(data.id);
          let level = this.heroInfo.getHeroLevel();
          let maxLevel = this.heroInfo.heroStarUpTable.MaxLevel;

          if (maxLevel < this.heroInfo.getHeroLevel()) {
            level = maxLevel;
          }

          this.lbl_level.string = String(level);
          let star = this.heroInfo.star;
          itemQualityTab = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getItemQualityTableByStar(star);
          this.sp_quality_bg.setTexture(itemQualityTab.HeroBagQuality);
          this.sp_quality_star_bg.setTexture(itemQualityTab.HeroStarBg);
          this.sp_vocation.setTexture(heroClassTable.Icon);
          this.sp_hero.setTexture(itemTab.Icon);
          this.sp_quality.setTexture(heroAptitudeTab.Icon);
          this.node_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).showStar(data.star);
        }

        setTouchCallBack(callBack) {
          this.touchCallBack = callBack;
        }

        onTouchItem() {
          if (this.touchCallBack) {
            this.touchCallBack();
          } else {
            log("点击了item");
          }
        }

        onDisable() {
          this.node_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).onDisable();
        }

        onDestroy() {
          this.node.targetOff(this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sp_hero", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sp_vocation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality_star_bg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_star", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_level", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;
    }
  };
});
//# sourceMappingURL=3a10ba2096e9532601160cdbc3aa11c0a76c26bf.js.map
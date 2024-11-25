System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, ViewPop, RareBookSmallItem, HeroStar, RareBookData, LangMgr, RareBookStarUpItem, HeroSkillItem, tab, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, StarUpPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookSmallItem(extras) {
    _reporterNs.report("RareBookSmallItem", "./RareBookSmallItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../hero/HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "./RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "./RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookStarUpItem(extras) {
    _reporterNs.report("RareBookStarUpItem", "./RareBookStarUpItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroSkillItem(extras) {
    _reporterNs.report("HeroSkillItem", "../hero/herobag/HeroSkillItem", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      RareBookSmallItem = _unresolved_3.RareBookSmallItem;
    }, function (_unresolved_4) {
      HeroStar = _unresolved_4.HeroStar;
    }, function (_unresolved_5) {
      RareBookData = _unresolved_5.RareBookData;
    }, function (_unresolved_6) {
      LangMgr = _unresolved_6.LangMgr;
    }, function (_unresolved_7) {
      RareBookStarUpItem = _unresolved_7.RareBookStarUpItem;
    }, function (_unresolved_8) {
      HeroSkillItem = _unresolved_8.HeroSkillItem;
    }, function (_unresolved_9) {
      tab = _unresolved_9.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6eaf1ieyE9BpLwiqNl95LNp", "StarUpPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * StarUpPop
       * zhudingchao
       * Fri May 31 2024 10:34:45 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/StarUpPop.ts
       *
       */

      _export("StarUpPop", StarUpPop = (_dec = ccclass('StarUpPop'), _dec2 = property(Node), _dec3 = property(_crd && RareBookSmallItem === void 0 ? (_reportPossibleCrUseOfRareBookSmallItem({
        error: Error()
      }), RareBookSmallItem) : RareBookSmallItem), _dec4 = property(Label), _dec5 = property(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
        error: Error()
      }), HeroStar) : HeroStar), _dec6 = property(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
        error: Error()
      }), HeroStar) : HeroStar), _dec7 = property(Prefab), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(_crd && HeroSkillItem === void 0 ? (_reportPossibleCrUseOfHeroSkillItem({
        error: Error()
      }), HeroSkillItem) : HeroSkillItem), _dec11 = property(_crd && HeroSkillItem === void 0 ? (_reportPossibleCrUseOfHeroSkillItem({
        error: Error()
      }), HeroSkillItem) : HeroSkillItem), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(Node), _dec(_class = (_class2 = class StarUpPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "attributeLayout", _descriptor, this);

          _initializerDefineProperty(this, "rareBookSmallItem", _descriptor2, this);

          _initializerDefineProperty(this, "effectLab", _descriptor3, this);

          _initializerDefineProperty(this, "lastStar", _descriptor4, this);

          _initializerDefineProperty(this, "currStar", _descriptor5, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor6, this);

          _initializerDefineProperty(this, "node_rare_book", _descriptor7, this);

          _initializerDefineProperty(this, "node_hero", _descriptor8, this);

          _initializerDefineProperty(this, "hero_skill_item", _descriptor9, this);

          _initializerDefineProperty(this, "hero_skill_item1", _descriptor10, this);

          _initializerDefineProperty(this, "lbl_desc", _descriptor11, this);

          _initializerDefineProperty(this, "lbl_last_level", _descriptor12, this);

          _initializerDefineProperty(this, "lbl_next_level", _descriptor13, this);

          _initializerDefineProperty(this, "node_star_up", _descriptor14, this);

          _initializerDefineProperty(this, "node_awake_up", _descriptor15, this);

          this.info = void 0;
          this.heroInfo = void 0;
        }

        register() {}

        onShow() {
          this.info = this.openData["bookInfo"];
          this.heroInfo = this.openData["heroInfo"];

          if (this.info) {
            this.initBook();
          }

          if (this.heroInfo) {
            this.initHero();
          }
        }

        initBook() {
          this.node_hero.active = false;
          this.node_rare_book.active = true;
          this.node_awake_up.active = false;
          this.rareBookSmallItem.initView(this.info, false);
          var lastTab = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBoolStarTable(this.info.itemId, this.info.star - 1);
          this.effectLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.info.bookStarTable.Description);
          this.lastStar.showStar(this.info.star - 1);
          this.currStar.showStar(this.info.star);
          var attrMap = this.info.attrMap;
          var ratio = this.info.levelRatio;
          var lastAttrMap = this.info.getAttrMapByLevelRatio(ratio, lastTab.AttrType, lastTab.AttrValue);
          attrMap.forEach((value, key) => {
            var item = instantiate(this.itemPrefab);
            item.parent = this.attributeLayout;
            item.getComponent(_crd && RareBookStarUpItem === void 0 ? (_reportPossibleCrUseOfRareBookStarUpItem({
              error: Error()
            }), RareBookStarUpItem) : RareBookStarUpItem).initView(key, lastAttrMap.get(key), value); // item.initView(key, value, nextAttrMap.get(key));
            // index++;
          });
        }

        initHero() {
          this.node_hero.active = true;
          this.node_rare_book.active = false;
          this.lastStar.showStar(this.heroInfo.star - 1);
          this.currStar.showStar(this.heroInfo.star);
          var starUpTab = this.heroInfo.heroStarUpTable;
          var itemList = [this.hero_skill_item, this.hero_skill_item1];
          itemList.forEach((item, index) => {
            item.node.parent.active = false;
          });

          for (var index = 0; index < starUpTab.DescType.length; index++) {
            var _type = starUpTab.DescType[index];
            var item = itemList[index];
            item.node.parent.active = true;
            item.initData(_type, this.heroInfo);
            item.node.parent.getChildByPath("show_node/Label").getComponent(Label).string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(starUpTab.StarName[index]);
            item.node.parent.getChildByPath("show_node/effect_txt").getComponent(Label).string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(starUpTab.StarDesc[index]);
          } // this.hero_skill_item.initData(starUpTab.DescType[starUpTab.HeroStar], this.heroInfo);
          // this.lbl_desc.string = LangMgr.getLab(starUpTab.StarDesc[starUpTab.HeroStar]);


          var lastStarUpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroStarUpTableById.getValue(starUpTab.Id - 1);
          this.lbl_last_level.string = String(lastStarUpTab.MaxLevel);
          this.lbl_next_level.string = String(starUpTab.MaxLevel);
          this.node_awake_up.active = starUpTab.DescType[0] === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroStarDescType.HeroStarDescType_Third;
          this.node_star_up.active = starUpTab.DescType[0] === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroStarDescType.HeroStarDescType_Second;
        }

        onDisable() {
          this.lastStar.onDisable();
          this.currStar.onDisable();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "attributeLayout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rareBookSmallItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "effectLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lastStar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "currStar", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_rare_book", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_hero", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "hero_skill_item", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "hero_skill_item1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lbl_desc", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lbl_last_level", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lbl_next_level", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_star_up", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_awake_up", [_dec16], {
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
//# sourceMappingURL=98092906b5ba7b933cbff10fb212f3da8fdbdf4b.js.map
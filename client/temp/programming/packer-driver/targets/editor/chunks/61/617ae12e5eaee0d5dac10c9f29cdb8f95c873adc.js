System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, sp, Sprite, ViewPop, HeroStar, tab, LangMgr, HeroSkillItem, HeroInfo, HeroDataControl, ViewName, UIMgr, createAnimation, GameUtil, ItemPoolMgr, EquipInfo, RareBookInfo, RareBookSmallItem, EquipmentItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _crd, ccclass, property, CheckRoleInfoHeroPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../hero/HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroSkillItem(extras) {
    _reporterNs.report("HeroSkillItem", "../hero/herobag/HeroSkillItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimation(extras) {
    _reporterNs.report("createAnimation", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "../equip/EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "../rareBook/RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookSmallItem(extras) {
    _reporterNs.report("RareBookSmallItem", "../rareBook/RareBookSmallItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipmentItem(extras) {
    _reporterNs.report("EquipmentItem", "../item/EquipmentItem", _context.meta, extras);
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
      sp = _cc.sp;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      HeroStar = _unresolved_3.HeroStar;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      LangMgr = _unresolved_5.LangMgr;
    }, function (_unresolved_6) {
      HeroSkillItem = _unresolved_6.HeroSkillItem;
    }, function (_unresolved_7) {
      HeroInfo = _unresolved_7.HeroInfo;
    }, function (_unresolved_8) {
      HeroDataControl = _unresolved_8.HeroDataControl;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      UIMgr = _unresolved_10.UIMgr;
    }, function (_unresolved_11) {
      createAnimation = _unresolved_11.createAnimation;
      GameUtil = _unresolved_11.GameUtil;
    }, function (_unresolved_12) {
      ItemPoolMgr = _unresolved_12.ItemPoolMgr;
    }, function (_unresolved_13) {
      EquipInfo = _unresolved_13.EquipInfo;
    }, function (_unresolved_14) {
      RareBookInfo = _unresolved_14.RareBookInfo;
    }, function (_unresolved_15) {
      RareBookSmallItem = _unresolved_15.RareBookSmallItem;
    }, function (_unresolved_16) {
      EquipmentItem = _unresolved_16.EquipmentItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5a24xKRUxLNqn0+q4VAEIM", "CheckRoleInfoHeroPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'sp', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CheckRoleInfoHeroPop", CheckRoleInfoHeroPop = (_dec = ccclass('CheckRoleInfoHeroPop'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Prefab), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(sp.Skeleton), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Prefab), _dec(_class = (_class2 = class CheckRoleInfoHeroPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "node_star", _descriptor, this);

          _initializerDefineProperty(this, "lbl_power", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_hero_name", _descriptor3, this);

          _initializerDefineProperty(this, "sp_vocation", _descriptor4, this);

          _initializerDefineProperty(this, "sp_quality", _descriptor5, this);

          _initializerDefineProperty(this, "sp_quality2_img", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_speciality", _descriptor7, this);

          _initializerDefineProperty(this, "node_skill_layout", _descriptor8, this);

          _initializerDefineProperty(this, "pfb_skill_item", _descriptor9, this);

          _initializerDefineProperty(this, "lbl_attr_atk", _descriptor10, this);

          _initializerDefineProperty(this, "lbl_attr_hp", _descriptor11, this);

          _initializerDefineProperty(this, "lbl_attr_def", _descriptor12, this);

          _initializerDefineProperty(this, "ske_hero", _descriptor13, this);

          _initializerDefineProperty(this, "node_equip_content_1", _descriptor14, this);

          _initializerDefineProperty(this, "node_equip_content_2", _descriptor15, this);

          _initializerDefineProperty(this, "node_book_content", _descriptor16, this);

          _initializerDefineProperty(this, "pfb_small_book", _descriptor17, this);

          this.heroData = null;
          this._heroAllAttr = new Map();
          this.equipComItems = void 0;
        }

        onShow() {
          this.heroData = this.openData.heroData;
          this.showAttrData();
          this.showAttrSkill();
          this.showAttrSimple();
          this.updateEquipSlot();
          this.updateBook();
        } // 设置基本信息


        showAttrData() {
          const itemId = this.heroData.itemId;
          let itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(itemId);
          let heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(itemId);
          let heroClassTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(heroTab.Class);
          let heroAptitudeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(heroTab.Aptitude);
          let itemQualityTab = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getItemQualityTableByStar(this.heroData.star); // 星级

          this.node_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).showStar(this.heroData.star); // 显示战斗力

          this.lbl_power.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(this.heroData.powerScore); // 英雄名称

          this.lbl_hero_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemTab.Name); // 职业

          this.sp_vocation.setTexture(heroClassTab.Icon); // 品质

          this.sp_quality.setTexture(heroAptitudeTab.Icon);
          this.sp_quality2_img.setTexture(itemQualityTab.HeroBagGrowthQuality); // 职业描述

          this.lbl_speciality.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(heroTab.Speciality);
          (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
            error: Error()
          }), createAnimation) : createAnimation)(this.ske_hero.node, heroTab.Idle);
        }
        /* 显示技能 */


        showAttrSkill() {
          const itemId = this.heroData.itemId;
          const heroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
            error: Error()
          }), HeroInfo) : HeroInfo)();
          heroInfo.star = this.heroData.star;
          heroInfo.itemId = itemId;
          heroInfo.level = this.heroData.level;
          heroInfo.id = 0;
          let heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(itemId); // 技能

          this.node_skill_layout.destroyAllChildren();
          let skillMap = heroInfo.getHeroSkillMap();

          for (let i = 1; i <= 3; i++) {
            let iconUrl = heroTab["SkillIcon" + i];

            if (iconUrl) {
              let skillData = skillMap.get(i);

              if (skillData) {
                let skill_item = instantiate(this.pfb_skill_item);
                let ts = skill_item.getComponent(_crd && HeroSkillItem === void 0 ? (_reportPossibleCrUseOfHeroSkillItem({
                  error: Error()
                }), HeroSkillItem) : HeroSkillItem);
                ts.initData(i, heroInfo);
                skill_item.parent = this.node_skill_layout;
              }
            }
          }
        }
        /* 显示简单属性 */


        showAttrSimple() {
          this._heroAllAttr.clear();

          for (let i = 0; i < this.heroData.attrList.length; i++) {
            const attr = this.heroData.attrList[i];

            this._heroAllAttr.set(attr.type, Number(attr.value));
          }

          this.lbl_attr_atk.string = String(this._heroAllAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Attack));
          this.lbl_attr_hp.string = String(this._heroAllAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Hp));
          this.lbl_attr_def.string = String(this._heroAllAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Defence));
        }
        /* 显示装备 */


        updateEquipSlot() {
          if (this.equipComItems) {
            for (let key in this.equipComItems) {
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.putEquipItem(this.equipComItems[key]);
            }
          }

          this.equipComItems = [];
          let equals = this.heroData.equipList;

          for (let key in equals) {
            if (equals[key]) {
              const equal = equals[key];

              const _EquipInfo = new (_crd && EquipInfo === void 0 ? (_reportPossibleCrUseOfEquipInfo({
                error: Error()
              }), EquipInfo) : EquipInfo)();

              _EquipInfo.itemId = equal.itemId;
              _EquipInfo.score = equal.powerScore;
              let node = null;

              if (equal.itemId >= 18012 && equal.itemId <= 18014) {
                // 羽毛
                node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                  error: Error()
                }), ItemPoolMgr) : ItemPoolMgr).ins.createEquipItem(_EquipInfo, this.node_equip_content_2);
              } else {
                node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                  error: Error()
                }), ItemPoolMgr) : ItemPoolMgr).ins.createEquipItem(_EquipInfo, this.node_equip_content_1);
              }

              const itemTs = node.getComponent(_crd && EquipmentItem === void 0 ? (_reportPossibleCrUseOfEquipmentItem({
                error: Error()
              }), EquipmentItem) : EquipmentItem);
              itemTs.setLv(equal.enhanceLv, equal.refineLv);
              this.equipComItems.push(node);
            }
          }
        }
        /* 显示秘籍 */


        updateBook() {
          for (let i = 0; i < this.heroData.bookList.length; i++) {
            const bookData = this.heroData.bookList[i];
            const bookInfo = new (_crd && RareBookInfo === void 0 ? (_reportPossibleCrUseOfRareBookInfo({
              error: Error()
            }), RareBookInfo) : RareBookInfo)();
            bookInfo.itemId = bookData.itemId;
            bookInfo.level = bookData.level;
            bookInfo.star = bookData.star;
            bookInfo.powerScore = bookData.powerScore;
            const item = instantiate(this.pfb_small_book);
            item.parent = this.node_book_content;
            const itemTs = item.getComponent(_crd && RareBookSmallItem === void 0 ? (_reportPossibleCrUseOfRareBookSmallItem({
              error: Error()
            }), RareBookSmallItem) : RareBookSmallItem);
            itemTs.initView(bookInfo, true, () => {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).RareBookInfoItemPop,
                data: {
                  "bookInfo": bookInfo
                }
              });
            });
          }
        }
        /* 点击显示所有属性 */


        clickShowAllAttr() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).HeroAttrPop,
            data: {
              "attrMap": this._heroAllAttr
            }
          });
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {}

        unRegister() {
          super.unRegister();
        }

        onDisable() {
          if (this.equipComItems) {
            for (let key in this.equipComItems) {
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.putEquipItem(this.equipComItems[key]);
            }
          }

          this.node_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).onDisable();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_star", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_power", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_hero_name", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sp_vocation", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality2_img", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_speciality", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_skill_layout", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "pfb_skill_item", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_attr_atk", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lbl_attr_hp", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lbl_attr_def", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "ske_hero", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_equip_content_1", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_equip_content_2", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "node_book_content", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "pfb_small_book", [_dec18], {
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
//# sourceMappingURL=617ae12e5eaee0d5dac10c9f29cdb8f95c873adc.js.map
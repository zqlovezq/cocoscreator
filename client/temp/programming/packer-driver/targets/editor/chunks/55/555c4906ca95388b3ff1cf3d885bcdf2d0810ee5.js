System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Prefab, RichText, tab, ItemPoolMgr, LangMgr, HeroInfo, HeroItem, WeaponItem, UIMgr, ViewName, RecruitType, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, RecruitProbabilityItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponItem(extras) {
    _reporterNs.report("WeaponItem", "../common/WeaponItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecruitType(extras) {
    _reporterNs.report("RecruitType", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      RichText = _cc.RichText;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      ItemPoolMgr = _unresolved_3.ItemPoolMgr;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }, function (_unresolved_5) {
      HeroInfo = _unresolved_5.HeroInfo;
    }, function (_unresolved_6) {
      HeroItem = _unresolved_6.HeroItem;
    }, function (_unresolved_7) {
      WeaponItem = _unresolved_7.WeaponItem;
    }, function (_unresolved_8) {
      UIMgr = _unresolved_8.UIMgr;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      RecruitType = _unresolved_10.RecruitType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c6eds+EVNIRY612lF+zlx+", "RecruitProbabilityItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'RichText', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RecruitProbabilityItem", RecruitProbabilityItem = (_dec = ccclass('RecruitProbabilityItem'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(RichText), _dec(_class = (_class2 = class RecruitProbabilityItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pfb_hero_item", _descriptor, this);

          _initializerDefineProperty(this, "pfb_rare_book", _descriptor2, this);

          _initializerDefineProperty(this, "node_content", _descriptor3, this);

          _initializerDefineProperty(this, "rich_text_aptitude", _descriptor4, this);

          this._heroAptitudeTable = null;
        }

        onLoad() {}

        setHeroData(dataArr, Aptitude, type, extra) {
          this._heroAptitudeTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(Aptitude);
          let TipsStr = "";
          let TipsStrArr = [];

          if (type == (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).Senior) {
            TipsStr = "Tips_recruit_";
            this.rich_text_aptitude.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(TipsStr + Aptitude);
          } else if (type == (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).Friend) {
            TipsStr = "Tips_recruit_friend_";
            this.rich_text_aptitude.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(TipsStr + Aptitude);
          } else if (type == (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).SeniorGuarantee) {
            TipsStr = "Tips_recruit_must_1";
            this.rich_text_aptitude.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(TipsStr);
          } else if (type === (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).Book) {
            TipsStr = "Tips_bookprob_";
            this.rich_text_aptitude.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(TipsStr + Aptitude);
          } else if (type === (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).BookGuarantee) {
            TipsStr = "Tips_bookprob_must_1";
            this.rich_text_aptitude.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(TipsStr);
          } else {
            TipsStr = extra;
            let heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroTableById.getValue(dataArr[0]);

            let _heroClass = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroClass[heroTab.Class]);

            this.rich_text_aptitude.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString(TipsStr, [_heroClass]);
          }

          this.node_content.destroyAllChildren();

          if (extra) {
            if (extra == "Tips_recruit_hero_5") {
              // 5星英雄
              for (let i = 0; i < dataArr.length; i++) {
                let heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().HeroTableById.getValue(dataArr[i]);

                if (heroTab.Aptitude < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).HeroAptitude.HeroAptitude_SR) {
                  continue;
                }

                this.createHero(dataArr[i]);
              }
            } else if (extra == "Tips_recruit_heropiece_5") {
              // 5星英雄碎片
              for (let i = 0; i < dataArr.length; i++) {
                let heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().HeroTableById.getValue(dataArr[i]);

                if (heroTab.Aptitude < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).HeroAptitude.HeroAptitude_SR) {
                  continue;
                }

                this.createHeroPiece(dataArr[i], 50);
              }
            } else {
              // 4星英雄
              for (let i = 0; i < dataArr.length; i++) {
                let heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().HeroTableById.getValue(dataArr[i]);

                if (heroTab.Aptitude !== (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).HeroAptitude.HeroAptitude_R) {
                  continue;
                }

                this.createHero(dataArr[i]);
              }
            }
          } else {
            if (type === (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
              error: Error()
            }), RecruitType) : RecruitType).Book || type === (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
              error: Error()
            }), RecruitType) : RecruitType).BookGuarantee) {
              for (let i = 0; i < dataArr.length; i++) {
                this.createBook(dataArr[i]);
              }
            } else {
              for (let i = 0; i < dataArr.length; i++) {
                this.createHero(dataArr[i]);
              }
            }
          }
        }

        createBook(itemId) {
          const _bookItem = instantiate(this.pfb_rare_book);

          _bookItem.parent = this.node_content;

          const itemTs = _bookItem.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
            error: Error()
          }), WeaponItem) : WeaponItem);

          itemTs.initBookItemId(itemId, true, true, false, () => {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).RareBookInfoItemPop,
              data: {
                "bookInfo": itemTs.info
              }
            });
          });
        }

        createHero(_itemId) {
          const heroId = _itemId;
          const heroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
            error: Error()
          }), HeroInfo) : HeroInfo)();
          const heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(heroId);
          heroInfo.id = 0;
          heroInfo.itemId = heroId;
          heroInfo.star = heroTab.DefaultStar;
          const heroItem = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createHeroItem(heroInfo, this.node_content);
          const heroItemTs = heroItem.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
            error: Error()
          }), HeroItem) : HeroItem);
          heroItemTs.setHeroProbablity();
        }

        createHeroPiece(_itemId, count) {
          const _heroItem = instantiate(this.pfb_hero_item);

          _heroItem.parent = this.node_content;

          const itemTs = _heroItem.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
            error: Error()
          }), HeroItem) : HeroItem);

          const heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(_itemId);
          const heroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
            error: Error()
          }), HeroInfo) : HeroInfo)();
          heroInfo.itemId = _itemId;
          heroInfo.star = heroTab.DefaultStar;
          itemTs.UpdateContent(heroInfo);
          itemTs.setSelect(false);
          itemTs.setLevel(0);
          itemTs.setPiece(count);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_hero_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_rare_book", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rich_text_aptitude", [_dec5], {
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
//# sourceMappingURL=555c4906ca95388b3ff1cf3d885bcdf2d0810ee5.js.map
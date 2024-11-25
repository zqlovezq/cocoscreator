System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, RichText, Sprite, HeroStar, LangMgr, tab, HeroTeamControl, HeroData, RogueControl, RareBookData, FightMsgControl, FightData, IsInFightScene, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, WeaponInfoItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../hero/HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "../rareBook/RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueInfo(extras) {
    _reporterNs.report("RogueInfo", "../../fight/view/rogue/RogueInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../hero/HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../hero/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueControl(extras) {
    _reporterNs.report("RogueControl", "../../fight/view/rogue/RogueControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "../rareBook/RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMsgControl(extras) {
    _reporterNs.report("FightMsgControl", "../../fight/FightMsgControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../fight/data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIsInFightScene(extras) {
    _reporterNs.report("IsInFightScene", "../../guide/GuideCommand", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      HeroStar = _unresolved_2.HeroStar;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      HeroTeamControl = _unresolved_5.HeroTeamControl;
    }, function (_unresolved_6) {
      HeroData = _unresolved_6.HeroData;
    }, function (_unresolved_7) {
      RogueControl = _unresolved_7.RogueControl;
    }, function (_unresolved_8) {
      RareBookData = _unresolved_8.RareBookData;
    }, function (_unresolved_9) {
      FightMsgControl = _unresolved_9.FightMsgControl;
    }, function (_unresolved_10) {
      FightData = _unresolved_10.FightData;
    }, function (_unresolved_11) {
      IsInFightScene = _unresolved_11.IsInFightScene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fe3cpL/T1F2r6/pQIibOms", "WeaponInfoItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'log', 'Node', 'RichText', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * WeaponInfoItem
       * zhudingchao
       * Mon May 27 2024 14:34:23 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/common/WeaponInfoItem.ts
       *
       */

      _export("WeaponInfoItem", WeaponInfoItem = (_dec = ccclass('WeaponInfoItem'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
        error: Error()
      }), HeroStar) : HeroStar), _dec6 = property(RichText), _dec7 = property(Node), _dec8 = property(Sprite), _dec9 = property(Sprite), _dec10 = property(Sprite), _dec11 = property(Node), _dec12 = property(Node), _dec(_class = (_class2 = class WeaponInfoItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bgSpr", _descriptor, this);

          _initializerDefineProperty(this, "infoSpr", _descriptor2, this);

          _initializerDefineProperty(this, "nameLab", _descriptor3, this);

          _initializerDefineProperty(this, "heroStar", _descriptor4, this);

          _initializerDefineProperty(this, "detailsRichText", _descriptor5, this);

          _initializerDefineProperty(this, "proNode", _descriptor6, this);

          _initializerDefineProperty(this, "proSpr", _descriptor7, this);

          _initializerDefineProperty(this, "bookPlaysSpr", _descriptor8, this);

          _initializerDefineProperty(this, "sp_recommend_icon", _descriptor9, this);

          _initializerDefineProperty(this, "node_heros_content", _descriptor10, this);

          _initializerDefineProperty(this, "node_recommand", _descriptor11, this);

          this.info = void 0;
          this.rogueInfo = void 0;
        }

        initData(bookInfo, rogueInfo) {
          this.info = bookInfo;
          this.rogueInfo = rogueInfo;
          this.initView();

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageId === 1 && (_crd && IsInFightScene === void 0 ? (_reportPossibleCrUseOfIsInFightScene({
            error: Error()
          }), IsInFightScene) : IsInFightScene)()) {
            this.node_recommand.active = false;
          }
        }

        initView() {
          this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.info.itemTable.Name);
          this.infoSpr.setTexture(this.info.itemTable.Icon);
          let atpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(this.info.bookTable.Aptitude);
          this.bgSpr.setTexture(atpTab.BookTitle);
          let heroclass = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(this.info.bookTable.Class);
          this.bookPlaysSpr.node.active = this.info.bookTable.PlaystyleName != "";

          if (this.info.bookTable.PlaystyleName != "") {
            this.bookPlaysSpr.setTexture(this.info.bookTable.PlaystyleName);
          }

          this.proSpr.setTexture(heroclass.Icon);
          this.detailsRichText.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.info.bookStarTable.BookDescription);

          if ((_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.isTest) {
            return;
          }

          if (this.rogueInfo) {
            const BookDictionary = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getBookDicTabByHeroClass(this.info.bookTable.Class);

            if (this.info.bookTable.Id === BookDictionary.PhaseOneBook) {
              this.createHeroIcon([]);
            } else {
              const heroIds = this.caleRecommendHeros(this.rogueInfo);
              this.createHeroIcon(heroIds);
            }
          } else {
            // 通过bookid
            let Heros = [];
            const buildArr = this.getExtraIds(this.info.bookTable);

            for (let j = 0; j < buildArr.length; j++) {
              if (Heros.indexOf(buildArr[j]) === -1) {
                Heros.push(buildArr[j]);
              }
            }

            this.createHeroIcon(Heros);
          }
        }

        createHeroIcon(heroIds) {
          this.node_heros_content.parent.active = heroIds.length > 0;
          this.node_heros_content.parent.getChildByName("pro_node").active = false;
          this.node_heros_content.destroyAllChildren();

          if (heroIds.length > 0) {
            for (let i = 0; i < heroIds.length; i++) {
              const icon = instantiate(this.sp_recommend_icon.node);
              this.node_heros_content.addChild(icon);
              icon.active = true;
              const iconPath = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroTableById.getValue(heroIds[i]).WeaponHead;
              icon.getComponent(Sprite).setTexture(iconPath);
            }
          }
        }

        setShowStar(b) {
          if (b) {
            this.heroStar.node.active = true;
            this.heroStar.showStar(this.info.star);
          } else {
            this.heroStar.node.active = false;
          }
        } // 根据肉鸽id推荐英雄


        caleRecommendHeros(rogueInfo) {
          if (rogueInfo == null) {
            return [];
          }

          if (!rogueInfo.heroItemId) {
            const validList = (_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
              error: Error()
            }), RogueControl) : RogueControl).ins.validList;
            const rogueInfos = [rogueInfo];

            for (let i = 0; i < validList.length; i++) {
              const _rogueInfo = validList[i];

              if (_rogueInfo.Id === rogueInfo.Id) {
                continue;
              }

              if (_rogueInfo.rogueTab.Condition === rogueInfo.rogueTab.Id) {
                rogueInfos.push(_rogueInfo);
              }
            }

            const heroItemIds = this.getHeroIdsByRougeInfos(rogueInfos);
            return heroItemIds;
          } else {
            return [];
          }
        } // 通过关联的肉鸽Ids返回所有的英雄id


        getHeroIdsByRougeInfos(rogueInfos) {
          let Heros = [];

          for (let k = 0; k < rogueInfos.length; k++) {
            const bookID = rogueInfos[k].rogueTab.BookId;
            const bookTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BookTableById.getValue(bookID);

            if (bookTab.Builds !== (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Builds.Builds_Core && bookTab.Builds !== (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Builds.Builds_Skill && bookTab.Builds !== (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Builds.Builds_None) {
              const buildArr = this.getTeamIdBuilds(bookTab.Builds);

              for (let j = 0; j < buildArr.length; j++) {
                if (Heros.indexOf(buildArr[j]) === -1) {
                  Heros.push(buildArr[j]);
                }
              }
            }
          } // log("cocos 推荐英雄的流派ids为=", Heros);


          for (let i = 0; i < rogueInfos.length; i++) {
            const rogueInfo = rogueInfos[i];
            const bookTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BookTableById.getValue(rogueInfo.rogueTab.BookId);

            if (bookTab.Builds === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Builds.Builds_Core || bookTab.Builds === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Builds.Builds_Skill) {
              const heroInfo = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
                error: Error()
              }), HeroTeamControl) : HeroTeamControl).ins.getHeroByClass(Number(bookTab.Class));

              if (Heros.indexOf(heroInfo.itemId) === -1) {
                // log("cocos 推荐英雄的itemId为=", heroInfo.itemId);
                Heros.push(heroInfo.itemId);
              }
            }
          }

          return Heros;
        }

        getTeamIdBuilds(buildId) {
          const buildsHeros = [];
          const teams = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getTeam();

          for (let i = 0; i < teams.length; i++) {
            const heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(teams[i].heroId);
            const builds = heroInfo.heroTable.Builds;

            if (builds.indexOf(buildId) > -1) {
              buildsHeros.push(heroInfo.itemId);
            }
          }

          return buildsHeros;
        } // 是否存在二阶今借到秘籍Id


        getExtraIds(bookTab) {
          let Heros = [];
          const BookDictionary = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookDicTabByHeroClass(bookTab.Class);

          const _buildArr = this.getTeamIdBuilds(bookTab.Builds);

          const heroInfo = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getHeroByClass(Number(bookTab.Class));

          if (Heros.indexOf(heroInfo.itemId) === -1 && (bookTab.Builds === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Builds.Builds_Core || bookTab.Builds === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Builds.Builds_Skill)) {
            Heros.push(heroInfo.itemId);
          }

          for (let i = 0; i < _buildArr.length; i++) {
            if (Heros.indexOf(_buildArr[i]) === -1) {
              Heros.push(_buildArr[i]);
            }
          }

          if (bookTab.Id === BookDictionary.PhaseOneBook) {
            return []; // for (let k = 0; k < BookDictionary.PhaseTwoBook.length; k++) {
            //     const bookID = BookDictionary.PhaseTwoBook[k];
            //     const bookTab = tab.getData().BookTableById.getValue(bookID);
            //     const heroInfo = HeroTeamControl.ins.getHeroByClass(Number(bookTab.Class))
            //     if (Heros.indexOf(heroInfo.itemId) === -1 && (bookTab.Builds === tab.Builds.Builds_Core || bookTab.Builds === tab.Builds.Builds_Skill)) {
            //         Heros.push(heroInfo.itemId)
            //     }
            //     if (bookTab.Builds !== tab.Builds.Builds_Core && bookTab.Builds !== tab.Builds.Builds_Skill && bookTab.Builds !== tab.Builds.Builds_None) {
            //         const buildArr = this.getTeamIdBuilds(bookTab.Builds);
            //         for (let j = 0; j < buildArr.length; j++) {
            //             if (Heros.indexOf(buildArr[j]) === -1) {
            //                 Heros.push(buildArr[j]);
            //             }
            //         }
            //     }
            // }
          }

          return Heros;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgSpr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "infoSpr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "heroStar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "detailsRichText", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "proNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "proSpr", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bookPlaysSpr", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sp_recommend_icon", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_heros_content", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_recommand", [_dec12], {
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
//# sourceMappingURL=dc5e9121b9baabde6e39570c567ca3ec35ee43a9.js.map
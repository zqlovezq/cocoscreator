System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, RichText, Sprite, tab, LangMgr, HeroItem, HeroInfo, UIMgr, ViewName, RANKING_TYPE, PlayerHeadItem, SimpleRoleInfo, GameUtil, getTimeTXT, refreshFlagImg, HeroStar, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _crd, ccclass, property, RankTopItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRANKING_TYPE(extras) {
    _reporterNs.report("RANKING_TYPE", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerHeadItem(extras) {
    _reporterNs.report("PlayerHeadItem", "../common/PlayerHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleRoleInfo(extras) {
    _reporterNs.report("SimpleRoleInfo", "../friends/SimpleRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetTimeTXT(extras) {
    _reporterNs.report("getTimeTXT", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrefreshFlagImg(extras) {
    _reporterNs.report("refreshFlagImg", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../hero/HeroStar", _context.meta, extras);
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
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      HeroItem = _unresolved_4.HeroItem;
    }, function (_unresolved_5) {
      HeroInfo = _unresolved_5.HeroInfo;
    }, function (_unresolved_6) {
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      ViewName = _unresolved_7.ViewName;
    }, function (_unresolved_8) {
      RANKING_TYPE = _unresolved_8.RANKING_TYPE;
    }, function (_unresolved_9) {
      PlayerHeadItem = _unresolved_9.PlayerHeadItem;
    }, function (_unresolved_10) {
      SimpleRoleInfo = _unresolved_10.SimpleRoleInfo;
    }, function (_unresolved_11) {
      GameUtil = _unresolved_11.GameUtil;
      getTimeTXT = _unresolved_11.getTimeTXT;
      refreshFlagImg = _unresolved_11.refreshFlagImg;
    }, function (_unresolved_12) {
      HeroStar = _unresolved_12.HeroStar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1919zHsv5E1KY+cAqEqTHR", "RankTopItem", undefined);
      /*
       * @Date: 2024-06-12 17:43:32
       * @LastEditors: wzq
       * @LastEditTime: 2024-10-30 16:33:28
       */


      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'RichText', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankTopItem", RankTopItem = (_dec = ccclass('RankTopItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
        error: Error()
      }), HeroItem) : HeroItem), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(_crd && PlayerHeadItem === void 0 ? (_reportPossibleCrUseOfPlayerHeadItem({
        error: Error()
      }), PlayerHeadItem) : PlayerHeadItem), _dec14 = property(Node), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(RichText), _dec18 = property(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
        error: Error()
      }), HeroStar) : HeroStar), _dec19 = property(Sprite), _dec20 = property(Label), _dec21 = property(Label), _dec(_class = (_class2 = class RankTopItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_player", _descriptor, this);

          _initializerDefineProperty(this, "node_hero", _descriptor2, this);

          _initializerDefineProperty(this, "node_association", _descriptor3, this);

          _initializerDefineProperty(this, "node_no_rank", _descriptor4, this);

          _initializerDefineProperty(this, "node_server_txt", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_power_score", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_hero_Name", _descriptor7, this);

          _initializerDefineProperty(this, "lbl_player_Name", _descriptor8, this);

          _initializerDefineProperty(this, "hero_item", _descriptor9, this);

          _initializerDefineProperty(this, "lbl_player_node_name", _descriptor10, this);

          _initializerDefineProperty(this, "lbl_player_node_force", _descriptor11, this);

          _initializerDefineProperty(this, "palyerHerdItem", _descriptor12, this);

          _initializerDefineProperty(this, "lbl_player_node_chapter", _descriptor13, this);

          _initializerDefineProperty(this, "lbl_player_node_level", _descriptor14, this);

          _initializerDefineProperty(this, "lbl_player_node_damage", _descriptor15, this);

          _initializerDefineProperty(this, "lbl_plaer_node_reputation", _descriptor16, this);

          _initializerDefineProperty(this, "Node_StarItem", _descriptor17, this);

          _initializerDefineProperty(this, "sp_guild_flag", _descriptor18, this);

          _initializerDefineProperty(this, "lbl_guild_name", _descriptor19, this);

          _initializerDefineProperty(this, "lbl_guild_force", _descriptor20, this);

          this._heroData = null;
          this._playerData = null;
          this._guildData = null;
          this._rankType = (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).NONE;
        }

        initHeroData(data) {
          if (data) {
            this.node_no_rank.active = false;
            this._heroData = data;
            this.node_player.active = false;
            this.node_association.active = false;
            this.node_hero.active = true;
            this.createHeroData();
          } else {
            this.node_hero.active = false;
            this.node_association.active = false;
            this.node_player.active = false;
            this.node_server_txt.active = false;
            this.node_no_rank.active = true;
          }
        }

        initHeroPlayerData(data, rankType) {
          this._rankType = rankType;

          if (data) {
            this.node_player.active = true;
            this.node_hero.active = false;
            this.node_no_rank.active = false;
            this.node_association.active = false;
            this._playerData = data;
            this.createPlayerData();
          } else {
            this.node_hero.active = false;
            this.node_association.active = false;
            this.node_player.active = false;
            this.node_server_txt.active = false;
            this.node_no_rank.active = true;
          }
        }

        initGuildData(data) {
          if (data) {
            this.node_no_rank.active = false;
            this._guildData = data;
            this.node_player.active = false;
            this.node_hero.active = false;
            this.node_association.active = true;
            this.createGuildData();
          } else {
            this.node_hero.active = false;
            this.node_association.active = false;
            this.node_player.active = false;
            this.node_server_txt.active = false;
            this.node_no_rank.active = true;
          }
        } // 如果是英雄


        createHeroData() {
          // 头像
          this.node_association.active = false;
          this.node_server_txt.active = false;
          var itemId = this._heroData.itemId;
          var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(itemId);
          var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(itemId); // 显示战斗力
          //this.lbl_power_score.string = String(this._heroData.powerScore);

          this.lbl_power_score.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_commondesc_43") + (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(this._heroData.powerScore);
          this.lbl_hero_Name.string = "[ " + (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemTab.Name) + " ]";
          this.lbl_player_Name.string = this._heroData.roleName;
          var heroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
            error: Error()
          }), HeroInfo) : HeroInfo)();
          heroInfo.itemId = itemId;
          heroInfo.star = this._heroData.star;
          heroInfo.id = 0;
          heroInfo.level = this._heroData.level;
          this.hero_item.UpdateContent(heroInfo);
          this.hero_item.setTouchCallBack(() => {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CheckRoleInfoHeroPop,
              data: {
                heroData: this._heroData
              }
            });
          });
        } // 如果是玩家


        createPlayerData() {
          this.lbl_player_node_force.node.active = false;
          this.lbl_player_node_damage.node.active = false;
          this.lbl_player_node_level.node.active = false;
          this.lbl_player_node_chapter.active = false;
          var rankData = this._playerData;

          if (rankData.score) {
            // 用关卡通关时间和关卡Id拼接得分202000540
            // score := int64(stageId)*1000000 + int64(alive)%1000000
            var chapterInfo = Math.floor(rankData.score / 1000000);
            var times = rankData.score % 1000000;
            var level_txt = this.lbl_player_node_chapter.getChildByName("level_txt").getComponent(Label);
            var time_txt = this.lbl_player_node_chapter.getChildByName("time_txt").getComponent(Label);
            time_txt.string = (_crd && getTimeTXT === void 0 ? (_reportPossibleCrUseOfgetTimeTXT({
              error: Error()
            }), getTimeTXT) : getTimeTXT)(times);
            level_txt.string = Math.floor(chapterInfo / 100) + "-" + chapterInfo % 100;
          } // 玩家名字


          this.lbl_player_node_name.string = rankData.simple.name;
          var playerInfo = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
            error: Error()
          }), SimpleRoleInfo) : SimpleRoleInfo)();
          playerInfo.merge(rankData.simple);
          this.palyerHerdItem.initHeadInfo({
            roleInfo: playerInfo
          });
          this.palyerHerdItem.setCloseCallBack(() => {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CheckRoleInfoPop,
              data: {
                "rankData": playerInfo
              }
            });
          });

          if (this._rankType === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).LEVEL) {
            // 等级榜
            this.lbl_player_node_level.node.active = true; //this.lbl_player_node_level.string = String(rankData.simple.level);

            this.lbl_player_node_level.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_heroresonancepop_3", [String(rankData.simple.level)]);
          } else if (this._rankType === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).POWER) {
            this.lbl_player_node_force.node.active = true; //this.lbl_player_node_force.string = String(rankData.simple.powerScore);

            this.lbl_player_node_force.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_commondesc_43") + (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertNumber(rankData.simple.powerScore);
          } else if (this._rankType === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).CHAPTER) {
            this.lbl_player_node_chapter.active = true;
          } else if (this._rankType === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).Fight) {
            this.lbl_player_node_force.node.active = true;
            this.lbl_player_node_force.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_fincafight_13", [String(this._playerData.score)]);
          }

          var table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().QuestLogTableByLevel.getValue(rankData.simple.reputation);

          if (table) {
            this.lbl_plaer_node_reputation.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(table.Name);
          } else {
            this.lbl_plaer_node_reputation.node.active = false;
          }
        }

        createGuildData() {
          (_crd && refreshFlagImg === void 0 ? (_reportPossibleCrUseOfrefreshFlagImg({
            error: Error()
          }), refreshFlagImg) : refreshFlagImg)(this._guildData ? this._guildData.flagId : 0, this.sp_guild_flag);
          this.lbl_guild_name.string = this._guildData ? this._guildData.name : "";
          this.lbl_guild_force.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(this._guildData.powerScore);
        }

        onClickGuild() {
          if (this._guildData.id) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).AssociationMainPop,
              data: {
                "rankData": this._guildData
              }
            });
          }
        }

        onDisable() {
          this.Node_StarItem.onDisable();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_hero", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_association", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_no_rank", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_server_txt", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_power_score", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_hero_Name", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbl_player_Name", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "hero_item", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_player_node_name", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lbl_player_node_force", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "palyerHerdItem", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lbl_player_node_chapter", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "lbl_player_node_level", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "lbl_player_node_damage", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "lbl_plaer_node_reputation", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Node_StarItem", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "sp_guild_flag", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "lbl_guild_name", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "lbl_guild_force", [_dec21], {
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
//# sourceMappingURL=1d967523eadbaee7bcfa9249688300cd1ee3d734.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, RichText, tab, LangMgr, HeroInfo, ViewName, UIMgr, HeroItem, PlayerHeadItem, RANKING_TYPE, SimpleRoleInfo, getTimeTXT, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, RankMyRankItem;

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

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerHeadItem(extras) {
    _reporterNs.report("PlayerHeadItem", "../common/PlayerHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRANKING_TYPE(extras) {
    _reporterNs.report("RANKING_TYPE", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleRoleInfo(extras) {
    _reporterNs.report("SimpleRoleInfo", "../friends/SimpleRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetTimeTXT(extras) {
    _reporterNs.report("getTimeTXT", "../../utils/GameUtil", _context.meta, extras);
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
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      HeroInfo = _unresolved_4.HeroInfo;
    }, function (_unresolved_5) {
      ViewName = _unresolved_5.ViewName;
    }, function (_unresolved_6) {
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      HeroItem = _unresolved_7.HeroItem;
    }, function (_unresolved_8) {
      PlayerHeadItem = _unresolved_8.PlayerHeadItem;
    }, function (_unresolved_9) {
      RANKING_TYPE = _unresolved_9.RANKING_TYPE;
    }, function (_unresolved_10) {
      SimpleRoleInfo = _unresolved_10.SimpleRoleInfo;
    }, function (_unresolved_11) {
      getTimeTXT = _unresolved_11.getTimeTXT;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "877e2+Is7VEVa4Racs4On/f", "RankMyRankItem", undefined);
      /*
       * @Date: 2024-06-12 17:41:34
       * @LastEditors: wzq
       * @LastEditTime: 2024-06-21 17:38:01
       */


      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'RichText']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankMyRankItem", RankMyRankItem = (_dec = ccclass('RankMyRankItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
        error: Error()
      }), HeroItem) : HeroItem), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(_crd && PlayerHeadItem === void 0 ? (_reportPossibleCrUseOfPlayerHeadItem({
        error: Error()
      }), PlayerHeadItem) : PlayerHeadItem), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(RichText), _dec14 = property(Node), _dec15 = property(Node), _dec(_class = (_class2 = class RankMyRankItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbl_rank", _descriptor, this);

          _initializerDefineProperty(this, "lbl_power_score", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_hero_Name", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_player_Name", _descriptor4, this);

          _initializerDefineProperty(this, "hero_item", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_player_node_name", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_player_node_force", _descriptor7, this);

          _initializerDefineProperty(this, "palyerHerdItem", _descriptor8, this);

          _initializerDefineProperty(this, "lbl_player_node_chapter", _descriptor9, this);

          _initializerDefineProperty(this, "lbl_player_node_level", _descriptor10, this);

          _initializerDefineProperty(this, "lbl_player_node_damage", _descriptor11, this);

          _initializerDefineProperty(this, "lbl_player_node_reputation", _descriptor12, this);

          _initializerDefineProperty(this, "node_player", _descriptor13, this);

          _initializerDefineProperty(this, "node_hero", _descriptor14, this);

          this._rank_data = null;
          this._rank_index = 0;
          this._rankType = (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).NONE;
        }

        UpdateContent(data) {
          console.log(data);
          this._rank_index = data.index;
          this._rankType = data.rankType;
          this._rank_data = data.rankData;
          this.node_hero.active = this._rankType === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).HERO;
          this.node_player.active = this._rankType !== (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).HERO;

          if (this._rankType === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).HERO) {
            this.setRankHeroData();
          } else {
            this.setRankPlayerData();
          }
        } // 设置基本信息


        setRankHeroData() {
          const rankData = this._rank_data;
          this.lbl_rank.string = String(this._rank_index + 4);
          const itemId = rankData.itemId;
          const itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(itemId);
          const heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(itemId); // 显示战斗力

          this.lbl_power_score.string = String(rankData.powerScore);
          this.lbl_hero_Name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).ins.getLab(itemTab.Name);
          this.lbl_player_Name.string = rankData.roleName;
          const heroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
            error: Error()
          }), HeroInfo) : HeroInfo)();
          heroInfo.itemId = itemId;
          heroInfo.star = rankData.star;
          heroInfo.id = 0;
          heroInfo.level = rankData.level;
          this.hero_item.UpdateContent(heroInfo);
          this.hero_item.setTouchCallBack(() => {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CheckRoleInfoHeroPop,
              data: {
                heroData: this._rank_data
              }
            });
          });
        }

        setRankPlayerData() {
          this.lbl_player_node_force.node.active = false;
          this.lbl_player_node_damage.node.active = false;
          this.lbl_player_node_level.node.active = false;
          this.lbl_player_node_chapter.active = false;
          const rankData = this._rank_data;
          this.lbl_rank.string = String(this._rank_index + 4);

          if (rankData.score) {
            // 用关卡通关时间和关卡Id拼接得分
            // score := int64(stageId)*1000000 + int64(alive)%1000000
            const chapterInfo = Math.floor(rankData.score / 1000000);
            const times = rankData.score % 1000000;
            const level_txt = this.lbl_player_node_chapter.getChildByName("level_txt").getComponent(Label);
            const time_txt = this.lbl_player_node_chapter.getChildByName("time_txt").getComponent(Label);
            time_txt.string = (_crd && getTimeTXT === void 0 ? (_reportPossibleCrUseOfgetTimeTXT({
              error: Error()
            }), getTimeTXT) : getTimeTXT)(times);
            level_txt.string = Math.floor(chapterInfo / 100) + "-" + chapterInfo % 100;
          } // 玩家名字


          this.lbl_player_node_name.string = rankData.simple.name;
          const playerInfo = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
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
            this.lbl_player_node_level.node.active = true;
            this.lbl_player_node_level.string = String(rankData.simple.level);
          } else if (this._rankType === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).POWER) {
            this.lbl_player_node_force.node.active = true;
            this.lbl_player_node_force.string = String(rankData.simple.powerScore);
          } else if (this._rankType === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).CHAPTER) {
            this.lbl_player_node_chapter.active = true;
          }

          let table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().QuestLogTableByLevel.getValue(rankData.simple.reputation);

          if (table) {
            this.lbl_player_node_reputation.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).ins.getLab(table.Name);
          } else {
            this.lbl_player_node_reputation.node.active = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_rank", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_power_score", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_hero_Name", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_player_Name", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "hero_item", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_player_node_name", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_player_node_force", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "palyerHerdItem", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbl_player_node_chapter", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_player_node_level", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lbl_player_node_damage", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lbl_player_node_reputation", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_player", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_hero", [_dec15], {
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
//# sourceMappingURL=a60950fb2262adb58b177356373bf6c5e79d19a5.js.map
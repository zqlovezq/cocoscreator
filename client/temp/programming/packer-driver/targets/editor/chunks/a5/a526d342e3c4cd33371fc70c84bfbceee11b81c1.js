System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, RichText, Sprite, InfiniteCell, tab, LangMgr, HeroInfo, ViewName, ShowTips, UIMgr, HeroItem, PlayerHeadItem, RANKING_TYPE, SimpleRoleInfo, GameUtil, refreshFlagImg, setTextTime, HeroStar, RoleData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _crd, ccclass, property, RankBottomItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

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

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrefreshFlagImg(extras) {
    _reporterNs.report("refreshFlagImg", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../hero/HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
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
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }, function (_unresolved_5) {
      HeroInfo = _unresolved_5.HeroInfo;
    }, function (_unresolved_6) {
      ViewName = _unresolved_6.ViewName;
    }, function (_unresolved_7) {
      ShowTips = _unresolved_7.ShowTips;
      UIMgr = _unresolved_7.UIMgr;
    }, function (_unresolved_8) {
      HeroItem = _unresolved_8.HeroItem;
    }, function (_unresolved_9) {
      PlayerHeadItem = _unresolved_9.PlayerHeadItem;
    }, function (_unresolved_10) {
      RANKING_TYPE = _unresolved_10.RANKING_TYPE;
    }, function (_unresolved_11) {
      SimpleRoleInfo = _unresolved_11.SimpleRoleInfo;
    }, function (_unresolved_12) {
      GameUtil = _unresolved_12.GameUtil;
      refreshFlagImg = _unresolved_12.refreshFlagImg;
      setTextTime = _unresolved_12.setTextTime;
    }, function (_unresolved_13) {
      HeroStar = _unresolved_13.HeroStar;
    }, function (_unresolved_14) {
      RoleData = _unresolved_14.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87ebfe2QpZNM5ieeLnJiBfE", "RankBottomItem", undefined);
      /*
       * @Date: 2024-06-12 17:41:34
       * @LastEditors: wzq
       * @LastEditTime: 2024-11-22 15:09:11
       */


      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'RichText', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankBottomItem", RankBottomItem = (_dec = ccclass('RankBottomItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
        error: Error()
      }), HeroItem) : HeroItem), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(_crd && PlayerHeadItem === void 0 ? (_reportPossibleCrUseOfPlayerHeadItem({
        error: Error()
      }), PlayerHeadItem) : PlayerHeadItem), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(RichText), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
        error: Error()
      }), HeroStar) : HeroStar), _dec18 = property(Sprite), _dec19 = property(Label), _dec20 = property(Label), _dec(_class = (_class2 = class RankBottomItem extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
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

          _initializerDefineProperty(this, "node_guild", _descriptor15, this);

          _initializerDefineProperty(this, "Node_StarItem", _descriptor16, this);

          _initializerDefineProperty(this, "sp_guild_flag", _descriptor17, this);

          _initializerDefineProperty(this, "lbl_guild_name", _descriptor18, this);

          _initializerDefineProperty(this, "lbl_guild_force", _descriptor19, this);

          this._rank_data = null;
          this._rank_index = 0;
          this._rankType = (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).NONE;
          this._isMySelf = false;
        }

        UpdateContent(data) {
          this._rank_index = data.index;
          this._rankType = data.rankType;
          this._rank_data = data.rankData;
          this._isMySelf = data.isSelf;
          this.node_hero.active = this._rankType === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).HERO;
          this.node_guild.active = this._rankType === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).GUILD;
          this.node_player.active = this._rankType !== (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).HERO && this._rankType !== (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).GUILD;

          if (this._rankType === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).HERO) {
            this.setRankHeroData();
          } else if (this._rankType === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).GUILD) {
            this.setRankGuildData();
          } else {
            this.setRankPlayerData();
          }
        } // 设置公会排行信息


        setRankGuildData() {
          const rankData = this._rank_data;
          this.lbl_guild_name.string = "";
          this.lbl_guild_force.string = "0";
          this.lbl_rank.string = "0";

          if (rankData) {
            this.lbl_rank.string = String(this._rank_index + 4);
            (_crd && refreshFlagImg === void 0 ? (_reportPossibleCrUseOfrefreshFlagImg({
              error: Error()
            }), refreshFlagImg) : refreshFlagImg)(rankData.flagId, this.sp_guild_flag);
            this.lbl_guild_name.string = rankData.name;
            this.lbl_guild_force.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertNumber(rankData.powerScore);
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
          //this.lbl_power_score.string = String(rankData.powerScore);

          this.lbl_power_score.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_commondesc_43") + (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(rankData.powerScore);
          this.lbl_hero_Name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemTab.Name);
          this.lbl_player_Name.string = rankData.roleName;
          this.hero_item.setTouchCallBack(() => {
            if (this._isMySelf) {
              //ShowTips("您戳到自己了哦");
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("Tips_rank_1"));
            } else {
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
            }
          });
          const heroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
            error: Error()
          }), HeroInfo) : HeroInfo)();
          heroInfo.itemId = itemId;
          heroInfo.star = rankData.star;
          heroInfo.id = 0;
          heroInfo.level = rankData.level;
          this.hero_item.UpdateContent(heroInfo);
        }

        setRankPlayerData() {
          this.lbl_player_node_force.node.active = false;
          this.lbl_player_node_damage.node.active = false;
          this.lbl_player_node_level.node.active = false;
          this.lbl_player_node_chapter.active = false;
          const rankData = this._rank_data;
          this.lbl_rank.string = String(this._rank_index + 4);
          this.lbl_player_node_name.string = "";

          if (rankData) {
            if (rankData.score) {
              const chapterInfo = Math.floor(Number(rankData.score) / 1000000);
              const times = Number(rankData.score) % 1000000;
              const level_txt = this.lbl_player_node_chapter.getChildByName("level_txt").getComponent(Label);
              const time_txt = this.lbl_player_node_chapter.getChildByName("time_txt").getComponent(Label);
              time_txt.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
                error: Error()
              }), setTextTime) : setTextTime)(times);
              level_txt.string = Math.floor(chapterInfo / 100) + "-" + chapterInfo % 100;

              if (this._rankType === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
                error: Error()
              }), RANKING_TYPE) : RANKING_TYPE).BOSS) {
                this.lbl_player_node_damage.node.active = true;
                this.lbl_player_node_damage.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                  error: Error()
                }), GameUtil) : GameUtil).convertNumber(rankData.score);
              }
            }

            if (rankData.simple) {
              this.lbl_player_node_name.string = rankData.simple.name; // 玩家名字

              const playerInfo = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
                error: Error()
              }), SimpleRoleInfo) : SimpleRoleInfo)();

              if (this._isMySelf) {
                rankData.simple.level = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.level;
              }

              playerInfo.merge(rankData.simple);
              this.palyerHerdItem.initHeadInfo({
                roleInfo: playerInfo
              });
              this.palyerHerdItem.setCloseCallBack(() => {
                if (this._isMySelf) {
                  //ShowTips("您戳到自己了哦");
                  (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                    error: Error()
                  }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                    error: Error()
                  }), LangMgr) : LangMgr).getLab("Tips_rank_1"));
                } else {
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
                }
              });

              if (this._rankType === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
                error: Error()
              }), RANKING_TYPE) : RANKING_TYPE).LEVEL) {
                // 等级榜
                this.lbl_player_node_level.node.active = true;
                this.lbl_player_node_level.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getCombineString("ui_heroresonancepop_3", [String(rankData.simple.level)]);
              } else if (this._rankType === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
                error: Error()
              }), RANKING_TYPE) : RANKING_TYPE).POWER) {
                this.lbl_player_node_force.node.active = true;
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
                }), LangMgr) : LangMgr).getCombineString("ui_fincafight_13", [String(rankData.score)]);
              }

              let table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().QuestLogTableByLevel.getValue(rankData.simple.reputation);

              if (table) {
                this.lbl_player_node_reputation.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getLab(table.Name);
              } else {
                this.lbl_player_node_reputation.node.active = false;
              }
            }
          }
        }

        setPlayerMyRank(idx) {
          this.lbl_rank.string = String(idx);

          if (idx > 0 && idx <= 3) {
            this.node.getChildByName("rank_node").active = false;
            this.node.getChildByName("myno1").active = idx === 1;
            this.node.getChildByName("myno2").active = idx === 2;
            this.node.getChildByName("myno3").active = idx === 3;
          } else if (idx > 3) {
            this.node.getChildByName("rank_node").active = true;
          } else {
            //this.lbl_rank.string = "未上榜"
            this.lbl_rank.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_rank_1");
          }
        }

        onDisable() {
          if (this.Node_StarItem && this.Node_StarItem.isValid) {
            this.Node_StarItem.onDisable();
          }
        }

        onClickGuild() {
          const rankData = this._rank_data;

          if (rankData.id) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).AssociationMainPop,
              data: {
                "rankData": rankData
              }
            });
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
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_guild", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_StarItem", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "sp_guild_flag", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "lbl_guild_name", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "lbl_guild_force", [_dec20], {
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
//# sourceMappingURL=a526d342e3c4cd33371fc70c84bfbceee11b81c1.js.map
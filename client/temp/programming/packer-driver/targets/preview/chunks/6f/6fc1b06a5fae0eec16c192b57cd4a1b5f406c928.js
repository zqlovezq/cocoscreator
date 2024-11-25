System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, instantiate, Label, Node, Prefab, Sprite, Toggle, ViewPop, proto, Net, HeroDataControl, HeroBagItem, HeroTeamControl, HeroData, ItemPoolMgr, ItemInfo, tab, HeroInfo, CommonItem, HeroItem, ShowTips, ItemData, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, VIEW_TYPE, HeroResetPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "./HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroBagItem(extras) {
    _reporterNs.report("HeroBagItem", "./HeroBagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      Net = _unresolved_3.Net;
    }, function (_unresolved_4) {
      HeroDataControl = _unresolved_4.HeroDataControl;
    }, function (_unresolved_5) {
      HeroBagItem = _unresolved_5.HeroBagItem;
    }, function (_unresolved_6) {
      HeroTeamControl = _unresolved_6.HeroTeamControl;
    }, function (_unresolved_7) {
      HeroData = _unresolved_7.HeroData;
    }, function (_unresolved_8) {
      ItemPoolMgr = _unresolved_8.ItemPoolMgr;
    }, function (_unresolved_9) {
      ItemInfo = _unresolved_9.ItemInfo;
    }, function (_unresolved_10) {
      tab = _unresolved_10.tab;
    }, function (_unresolved_11) {
      HeroInfo = _unresolved_11.HeroInfo;
    }, function (_unresolved_12) {
      CommonItem = _unresolved_12.CommonItem;
    }, function (_unresolved_13) {
      HeroItem = _unresolved_13.HeroItem;
    }, function (_unresolved_14) {
      ShowTips = _unresolved_14.ShowTips;
    }, function (_unresolved_15) {
      ItemData = _unresolved_15.ItemData;
    }, function (_unresolved_16) {
      LangMgr = _unresolved_16.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da2dfLOuY5FJp+QynPJ0cIZ", "HeroResetPop", undefined);
      /*
       * @Date: 2024-05-14 09:50:32
       * @LastEditors: wzq
       * @LastEditTime: 2024-11-22 15:49:37
       */


      __checkObsolete__(['_decorator', 'Button', 'EventTouch', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      VIEW_TYPE = /*#__PURE__*/function (VIEW_TYPE) {
        VIEW_TYPE[VIEW_TYPE["LEVEL"] = 1] = "LEVEL";
        VIEW_TYPE[VIEW_TYPE["STAR"] = 2] = "STAR";
        return VIEW_TYPE;
      }(VIEW_TYPE || {});

      _export("HeroResetPop", HeroResetPop = (_dec = ccclass('HeroResetPop'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Toggle), _dec12 = property(Toggle), _dec13 = property(Button), _dec14 = property(Node), _dec15 = property(Sprite), _dec16 = property(Label), _dec(_class = (_class2 = class HeroResetPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_level_reset", _descriptor, this);

          _initializerDefineProperty(this, "node_star_reset", _descriptor2, this);

          _initializerDefineProperty(this, "node_level_title", _descriptor3, this);

          _initializerDefineProperty(this, "node_star_title", _descriptor4, this);

          _initializerDefineProperty(this, "node_material", _descriptor5, this);

          _initializerDefineProperty(this, "node_hero", _descriptor6, this);

          _initializerDefineProperty(this, "node_material_content", _descriptor7, this);

          _initializerDefineProperty(this, "pfb_item", _descriptor8, this);

          _initializerDefineProperty(this, "pfb_material", _descriptor9, this);

          _initializerDefineProperty(this, "toggle_level", _descriptor10, this);

          _initializerDefineProperty(this, "toggle_star", _descriptor11, this);

          _initializerDefineProperty(this, "btn_reset", _descriptor12, this);

          _initializerDefineProperty(this, "node_res_node", _descriptor13, this);

          _initializerDefineProperty(this, "node_res_sp", _descriptor14, this);

          _initializerDefineProperty(this, "node_res_lbl", _descriptor15, this);

          this._heroId = 0;
          this._view_type = VIEW_TYPE.LEVEL;
        }

        register() {}

        onShow() {
          this._view_type = VIEW_TYPE.LEVEL;
          this._heroId = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.heroId;
          var node = instantiate(this.pfb_item);
          var itemTs = node.getComponent(_crd && HeroBagItem === void 0 ? (_reportPossibleCrUseOfHeroBagItem({
            error: Error()
          }), HeroBagItem) : HeroBagItem);
          itemTs.UpdateContent((_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(this._heroId));
          itemTs.setRed(false);
          node.parent = this.node_hero;
          this.switchView(null, String(this._view_type));
          this.toggle_level.isChecked = true;
        }

        switchView(e, type) {
          var view_type = Number(type);
          this._view_type = view_type;
          /* 是否在队伍中 */

          var inTeam = Boolean((_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(this._heroId));
          this.node_star_reset.active = !inTeam && view_type === VIEW_TYPE.STAR;
          this.node_level_reset.active = !inTeam && view_type === VIEW_TYPE.LEVEL;
          this.node_level_title.active = view_type === VIEW_TYPE.LEVEL;
          this.node_star_title.active = view_type === VIEW_TYPE.STAR;
          this.node_res_node.active = view_type === VIEW_TYPE.STAR;
          this.node_material.active = !inTeam;
          this.node_material_content.destroyAllChildren();
          var heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(this._heroId);

          switch (view_type) {
            case VIEW_TYPE.LEVEL:
              /* 显示英雄等级重置之后的材料 */
              var showBtn = inTeam && heroInfo.getHeroLevel() > 1;
              this.btn_reset.node.active = showBtn;

              if (inTeam) {
                this.node_material.active = true;
                this.toggle_level.isChecked = true;
                var materiaLevellMap = heroInfo.getMaterialByLevel(1, heroInfo.getHeroLevel()).map;
                materiaLevellMap.forEach((value, itemId) => {
                  /* 创建材料 */
                  var itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                    error: Error()
                  }), ItemInfo) : ItemInfo)();
                  itemInfo.itemId = itemId;
                  itemInfo.num = value;
                  var node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                    error: Error()
                  }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(itemInfo, this.node_material_content);
                });
              }

              break;

            case VIEW_TYPE.STAR:
              /* 6星以上才可以重置 */
              this.toggle_star.isChecked = true;
              var star = heroInfo.star;
              this.node_star_reset.active = false;
              this.node_material.active = false;

              var _showBtn = star >= 6;

              this.btn_reset.node.active = _showBtn;

              if (star < 6) {
                this.node_star_reset.active = true;
                this.node_material.active = false;
              } else {
                this.node_material.active = true; // 显示星级重置之后的材料

                this.node_res_node.active = heroInfo.heroStarUpTable.ResetCostItem > 0;

                if (heroInfo.heroStarUpTable.ResetCostItem) {
                  var resetItemData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).getData().ItemTableById.getValue(heroInfo.heroStarUpTable.ResetCostItem);
                  this.node_res_sp.setTexture(resetItemData.Icon);
                  var itemInfo = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                    error: Error()
                  }), ItemData) : ItemData).ins.getByItemId(heroInfo.heroStarUpTable.ResetCostItem);
                  this.node_res_lbl.string = (itemInfo ? itemInfo.num : 0) + "/" + heroInfo.heroStarUpTable.ResetCostNum;
                }

                var materialStarMap = heroInfo.getMaterialByStar();
                materialStarMap.forEach((value, id) => {
                  /* 创建材料 */

                  /* 判断是否是英雄 */
                  var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).getData().ItemTableById.getValue(id);

                  if (itemTab) {
                    var _itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                      error: Error()
                    }), ItemInfo) : ItemInfo)();

                    _itemInfo.itemId = id;
                    _itemInfo.num = value;
                    var node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                      error: Error()
                    }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(_itemInfo, this.node_material_content);
                    var commonTs = node.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
                      error: Error()
                    }), CommonItem) : CommonItem);
                    /* 蛋仔星级 */
                    // let commonCostTab = tab.getData().HeroCommonCostTableById.getValue(id);
                    // commonTs.setStar(commonCostTab.HeroStar);
                  } else {
                    var StarUpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                      error: Error()
                    }), tab) : tab).getData().HeroStarUpTableById.getValue(id);
                    heroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
                      error: Error()
                    }), HeroInfo) : HeroInfo)();
                    heroInfo.itemId = StarUpTab.HeroId;
                    heroInfo.id = 0;
                    heroInfo.star = StarUpTab.HeroStar;
                    heroInfo.level = 1;
                    var item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                      error: Error()
                    }), ItemPoolMgr) : ItemPoolMgr).ins.createHeroItem(heroInfo, this.node_material_content);
                    var heroTs = item.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
                      error: Error()
                    }), HeroItem) : HeroItem);
                    heroTs.setLevel(value);
                    heroTs.setSelect(false);
                  }
                });
              }

              break;

            default:
              break;
          }
        }

        sendMsg() {
          if (this._view_type === VIEW_TYPE.LEVEL) {
            var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_ResetTeamSlotLevelReq();
            msg.heroClass = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(this._heroId).heroTable.Class;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.ResetTeamSlotLevelReq, msg);
          } else {
            /* 重置需要消耗道具 */
            this._heroId = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.heroId;
            var starUpTab = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(this._heroId).heroStarUpTable;
            var materialItem = starUpTab.ResetCostItem;
            var MaterialNum = starUpTab.ResetCostNum;
            var ItemTabData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(materialItem);

            if (materialItem && (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(materialItem) < MaterialNum) {
              //let str = `重置需要消耗的材料为 ${LangMgr.getLab(ItemTabData.Name)} 当前拥有的数量不足`
              //ShowTips(str);
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString("Tips_itemshortage", [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(ItemTabData.Name)]));
              return;
            }

            var _msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_ResetHeroStarReq();

            _msg.heroId = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.heroId;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.ResetHeroStarReq, _msg);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_level_reset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_star_reset", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_level_title", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_star_title", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_material", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_hero", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_material_content", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "pfb_material", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "toggle_level", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "toggle_star", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btn_reset", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_res_node", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_res_sp", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_res_lbl", [_dec16], {
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
//# sourceMappingURL=6fc1b06a5fae0eec16c192b57cd4a1b5f406c928.js.map
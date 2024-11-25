System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "client_protocol", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, Sprite, ViewPop, HeroMaterialItem, Func, tab, HeroData, HeroDataControl, proto, Net, ItemData, LangMgr, EventMgr, LocalEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, HeroStarSpecialPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroMaterialItem(extras) {
    _reporterNs.report("HeroMaterialItem", "./HeroMaterialItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmaterialHeros(extras) {
    _reporterNs.report("materialHeros", "../HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "./HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      HeroMaterialItem = _unresolved_3.HeroMaterialItem;
    }, function (_unresolved_4) {
      Func = _unresolved_4.Func;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      HeroData = _unresolved_6.HeroData;
    }, function (_unresolved_7) {
      HeroDataControl = _unresolved_7.HeroDataControl;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_8) {
      Net = _unresolved_8.Net;
    }, function (_unresolved_9) {
      ItemData = _unresolved_9.ItemData;
    }, function (_unresolved_10) {
      LangMgr = _unresolved_10.LangMgr;
    }, function (_unresolved_11) {
      EventMgr = _unresolved_11.EventMgr;
    }, function (_unresolved_12) {
      LocalEvent = _unresolved_12.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e6e7Zyx1JDLK0A1GzYtVb6", "HeroStarSpecialPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'RichText', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroStarSpecialPop", HeroStarSpecialPop = (_dec = ccclass('HeroStarSpecialPop'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = (_class2 = class HeroStarSpecialPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);
          this._step = 0;

          _initializerDefineProperty(this, "pfb_hero_material", _descriptor, this);

          _initializerDefineProperty(this, "node_stuff_star_layout", _descriptor2, this);

          _initializerDefineProperty(this, "node_show", _descriptor3, this);

          _initializerDefineProperty(this, "sp_item", _descriptor4, this);

          _initializerDefineProperty(this, "lbl_item", _descriptor5, this);

          _initializerDefineProperty(this, "rich_text_attr", _descriptor6, this);

          this._heroInfo = null;
          this._herosMaterialMap = new Map();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Hero_Material_Select, this.refeshMaterial, this);
        }

        refeshMaterial(data) {
          if (data) {
            this._heroInfo.setHerosMaterialById(data[0], data[1], data[2], data[3] ? data[3] : null);
          }

          this.initData();
        }

        onShow() {
          this._step = this.openData.stepId;
          this._heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.heroId);
          this._herosMaterialMap = this._heroInfo.setHerosMaterialMap(this._step);
          this.initData();
        }

        onDestroy() {
          super.onDestroy();
        }

        initData() {
          this.node_stuff_star_layout.destroyAllChildren();
          let starTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroStarStepTableById.getValue(this._step);
          this.node_show.active = this._heroInfo.finshedStarSteps.indexOf(this._step) === -1;
          this.rich_text_attr.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(starTab.StepDesc);

          if (this.node_show.active) {
            for (let i = 0; i < starTab.HeroStarUpType.length; i++) {
              let type = starTab.HeroStarUpType[i];
              let item = instantiate(this.pfb_hero_material);
              item.name = "item" + type;
              item.parent = this.node_stuff_star_layout;
              (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).cocosNodeZIndex(item, type);
              item.active = true;
              let itemTs = item.getComponent(_crd && HeroMaterialItem === void 0 ? (_reportPossibleCrUseOfHeroMaterialItem({
                error: Error()
              }), HeroMaterialItem) : HeroMaterialItem);
              let heroClass = this._heroInfo.heroClassTable.HeroClass;

              if (type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroStarUpType.HeroStarUpType_AnyHero) {
                heroClass = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).HeroClass.HeroClass_Any;
              }

              itemTs.setMaterial(type, heroClass, this._step);
            }
            /* 升级所需的材料 */


            let itemIds = starTab.CostItemId;
            let counts = starTab.CostItemNum;
            this.sp_item.node.parent.active = itemIds.length > 0;

            for (let k = 0; k < itemIds.length; k++) {
              let _ItemData = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                error: Error()
              }), ItemData) : ItemData).ins.getByItemId(itemIds[k]);

              let itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ItemTableById.getValue(itemIds[k]);

              if (_ItemData && _ItemData.num) {
                this.lbl_item.string = _ItemData.num + " / " + counts[k];
              } else {
                this.lbl_item.string = 0 + " / " + counts[k];
              }

              this.sp_item.setTexture(itemTab.Icon);
            }
          }
        }
        /* 进阶 */


        clickHeroStarStepUp() {
          let MaterialEnough = this._heroInfo.checkStarUpMaterialEnough(this._step);

          if (!MaterialEnough) {
            console.log("cocos 材料不足");
            return;
          }

          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_FinishHeroStarStepReq();

          const map = this._heroInfo.getHerosMaterialMap();

          let starTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroStarStepTableById.getValue(this._step);
          let upStarCosts = [];

          for (let i = 0; i < starTab.HeroStarUpType.length; i++) {
            let _type = starTab.HeroStarUpType[i];
            let _count = starTab.CostHeroNum[i];

            if (this._heroInfo.getHerosMaterialMapCount(_type) < _count) {
              console.log(`cocos type=${_type} 需要的数量为${_count} 当前的数量为${this._heroInfo.getHerosMaterialMapCount(_type)}`);
              return;
            }

            let obj = {
              costType: _type,
              costHeroIds: [],
              costItems: []
            };
            upStarCosts.push(obj);
          }

          map.forEach((value, key) => {
            let heroCost = null;

            for (let i = 0; i < upStarCosts.length; i++) {
              if (value.type === upStarCosts[i].costType) {
                heroCost = upStarCosts[i];
              }
            }

            let costHeroIds = heroCost.costHeroIds;
            let costItems = heroCost.costItems;

            if (value.itemId) {
              if (costItems.length > 0) {
                let hasItemIndex = -1;

                for (let i = 0; i < costItems.length; i++) {
                  if (costItems[i].itemId === value.itemId) {
                    hasItemIndex = i;
                  }
                }

                if (hasItemIndex >= 0) {
                  costItems[hasItemIndex].num++;
                } else {
                  costItems.push({
                    itemId: value.itemId,
                    num: 1
                  });
                }
              } else {
                costItems.push({
                  itemId: value.itemId,
                  num: 1
                });
              }
            } else {
              costHeroIds.push(key);
            }
          });
          msg.stepId = this._step;
          msg.heroId = this._heroInfo.id;
          msg.upStarCosts = upStarCosts;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FinishHeroStarStepReq, msg);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_hero_material", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_stuff_star_layout", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_show", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sp_item", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_item", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rich_text_attr", [_dec7], {
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
//# sourceMappingURL=2fd23706d9212999cab9d8b5a30b426f8850ffa5.js.map
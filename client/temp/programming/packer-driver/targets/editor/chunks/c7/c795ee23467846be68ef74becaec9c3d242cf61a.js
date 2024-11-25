System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Label, Node, Prefab, ViewPop, ItemPoolMgr, HeroData, HeroDataControl, HeroItem, EventMgr, LocalEvent, ItemInfo, CommonItem, tab, LangMgr, CommonTipsPop, checkSameDay, RecruitType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, HeroMaterialPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "./HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcheckSameDay(extras) {
    _reporterNs.report("checkSameDay", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecruitType(extras) {
    _reporterNs.report("RecruitType", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ItemPoolMgr = _unresolved_3.ItemPoolMgr;
    }, function (_unresolved_4) {
      HeroData = _unresolved_4.HeroData;
    }, function (_unresolved_5) {
      HeroDataControl = _unresolved_5.HeroDataControl;
    }, function (_unresolved_6) {
      HeroItem = _unresolved_6.HeroItem;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }, function (_unresolved_8) {
      LocalEvent = _unresolved_8.LocalEvent;
    }, function (_unresolved_9) {
      ItemInfo = _unresolved_9.ItemInfo;
    }, function (_unresolved_10) {
      CommonItem = _unresolved_10.CommonItem;
    }, function (_unresolved_11) {
      tab = _unresolved_11.tab;
    }, function (_unresolved_12) {
      LangMgr = _unresolved_12.LangMgr;
    }, function (_unresolved_13) {
      CommonTipsPop = _unresolved_13.CommonTipsPop;
    }, function (_unresolved_14) {
      checkSameDay = _unresolved_14.checkSameDay;
    }, function (_unresolved_15) {
      RecruitType = _unresolved_15.RecruitType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e2f9cw14JGBp9AWrXrMqid", "HeroMaterialPop", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Label', 'log', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroMaterialPop", HeroMaterialPop = (_dec = ccclass('HeroMaterialPop'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = (_class2 = class HeroMaterialPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pfb_hero_item", _descriptor, this);

          _initializerDefineProperty(this, "pfb_common_item", _descriptor2, this);

          _initializerDefineProperty(this, "node_content", _descriptor3, this);

          _initializerDefineProperty(this, "node_empty", _descriptor4, this);

          _initializerDefineProperty(this, "node_select", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_choice_num", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_total_num", _descriptor7, this);

          this._heroList = [];
          this._selectCount = 0;
          this._needCount = 0;
          this._needStar = 0;
        }

        register() {}

        onShow() {
          this.node_content.destroyAllChildren();
          let mainHeroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.heroId);
          this.node_content.destroyAllChildren();
          let HeroMap = mainHeroInfo.getHerosByType(this.openData.type, this.openData.stepId, mainHeroInfo.getHerosMaterialMap());
          this.node_empty.active = HeroMap.map.size === 0;
          this.node_select.active = HeroMap.map.size > 0;
          this._selectCount = mainHeroInfo.getHerosMaterialMapCount(this.openData.type);
          this._needCount = HeroMap.needCount;
          const vocationArr = [];
          const AnyArr = [];
          const heroArr = [];
          HeroMap.map.forEach((value, key) => {
            const commonTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroCommonCostTableById.getValue(key - value);

            if (commonTab) {
              if (commonTab.HeroClass === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Any) {
                AnyArr.push({
                  itemId: key,
                  star: HeroMap.star,
                  count: value
                });
              } else {
                vocationArr.push({
                  itemId: key,
                  star: HeroMap.star,
                  count: value
                });
              }
            } else {
              heroArr.push(value.id);
            }
          });

          if (heroArr.length > 0) {
            heroArr.sort((id1, id2) => {
              const heroInfo1 = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
                error: Error()
              }), HeroData) : HeroData).ins.getById(id1);
              const heroInfo2 = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
                error: Error()
              }), HeroData) : HeroData).ins.getById(id2);
              const heroTab1 = heroInfo1.heroTable;
              const heroTab2 = heroInfo2.heroTable;
              const itemTab1 = heroInfo1.itemTable;
              const itemTab2 = heroInfo2.itemTable;

              if (heroTab1.Aptitude != heroTab2.Aptitude) {
                return heroTab1.Aptitude - heroTab2.Aptitude;
              } else {
                return itemTab1.Sort - itemTab2.Sort;
              }
            });
          }

          const totalArr = vocationArr.concat(AnyArr.concat(heroArr));

          for (let i = 0; i < totalArr.length; i++) {
            const data = totalArr[i];

            if (typeof data === "object") {
              this.createCommonItem(data.itemId, data.star, data.count);
            } else {
              this.createHeroItem(data);
            }
          } // totalArr.forEach((value, key) => {
          //     if (typeof value == "object") {
          //         this.createHeroItem(value.id);
          //     } else {
          //         this.createCommonItem(key, HeroMap.star, value);
          //     }
          // });


          this.refreshLbl();
        }

        refreshLbl() {
          this.lbl_choice_num.string = String(this._selectCount);
          this.lbl_total_num.string = String(this._needCount);

          if (this._selectCount >= this._needCount) {
            this.lbl_choice_num.color = new Color().fromHEX("#455183");
          } else {
            this.lbl_choice_num.color = new Color().fromHEX((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
          }
        }

        onDestroy() {
          super.onDestroy();
        }

        createHeroItem(id) {
          var self = this;
          const type = this.openData.type;
          let heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(id);
          let mainHeroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.heroId);
          let isSelect = Boolean(mainHeroInfo.getHerosMaterialById(id));
          let item = null;

          if (heroInfo) {
            item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createHeroItem(heroInfo, this.node_content);
          }

          if (item) {
            let ts = item.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
              error: Error()
            }), HeroItem) : HeroItem);
            ts.UpdateContent(heroInfo);
            ts.setSelect(isSelect);
            ts.setTouchCallBack(() => {
              /* 如果当前的item在别的type中已经存在 则返回 */
              let select = ts.getSelect();

              let cb = function () {
                let obj = mainHeroInfo.getHerosMaterialById(id);

                if (obj && obj.type !== type) {
                  return;
                }

                if (!select) {
                  self._selectCount++;
                } else {
                  self._selectCount--;
                }

                if (self._selectCount > self._needCount) {
                  self._selectCount--;
                  return;
                }

                ts.setSelect(!select);
                self.refreshLbl();
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                  error: Error()
                }), LocalEvent) : LocalEvent).Hero_Material_Select, [ts.getSelect(), id, type]);
              };

              if (select) {
                cb();
                return;
              }

              if (!(_crd && checkSameDay === void 0 ? (_reportPossibleCrUseOfcheckSameDay({
                error: Error()
              }), checkSameDay) : checkSameDay)((_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
                error: Error()
              }), RecruitType) : RecruitType).ChoiceSSR) && heroInfo.heroTable.Aptitude === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroAptitude.HeroAptitude_SSR && self._selectCount < self._needCount) {
                const tipsStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getLab("Tips_risingstar_1");
                (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
                  error: Error()
                }), CommonTipsPop) : CommonTipsPop).create(tipsStr, val => {
                  if (val) {
                    cb();
                  }
                }, {
                  gacha: (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
                    error: Error()
                  }), RecruitType) : RecruitType).ChoiceSSR
                });
              } else {
                cb();
              }
            });
          }
        }

        createCommonItem(itemId, star, count) {
          const type = this.openData.type;
          let mainHeroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.heroId);
          let isSelect = Boolean(mainHeroInfo.getHerosMaterialById(itemId));
          let data = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          data.itemId = itemId - count;
          data.num = 1;
          let item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(data, this.node_content);
          let ts = item.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
            error: Error()
          }), CommonItem) : CommonItem);
          ts.setSelectState(isSelect);
          ts.setStar(star);
          ts.setTouchCallBack(() => {
            /* 如果当前的item在别的type中已经存在 则返回 */
            let obj = mainHeroInfo.getHerosMaterialById(itemId);

            if (obj && obj.type !== type) {
              return;
            }

            let select = ts.getSelect();

            if (!select) {
              this._selectCount++;
            } else {
              this._selectCount--;
            }

            if (this._selectCount > this._needCount) {
              this._selectCount--;
              return;
            }

            ts.setSelectState(!select);
            this.refreshLbl();
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).Hero_Material_Select, [ts.getSelect(), itemId, type, data.itemId]);
          });
        }

        canclePop() {
          let mainHeroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.heroId);
          mainHeroInfo.setHerosMaterialMap(this.openData.stepId);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Hero_Material_Select);
          this.onClose();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_hero_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_common_item", [_dec3], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_empty", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_select", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_choice_num", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_total_num", [_dec8], {
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
//# sourceMappingURL=c795ee23467846be68ef74becaec9c3d242cf61a.js.map
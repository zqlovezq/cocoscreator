System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Component, Label, log, Node, Sprite, v3, ItemPoolMgr, UIMgr, tab, ViewName, HeroStar, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, EquipmentItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "./ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "../equip/EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
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
      Button = _cc.Button;
      Color = _cc.Color;
      Component = _cc.Component;
      Label = _cc.Label;
      log = _cc.log;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      ItemPoolMgr = _unresolved_2.ItemPoolMgr;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      ViewName = _unresolved_5.ViewName;
    }, function (_unresolved_6) {
      HeroStar = _unresolved_6.HeroStar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70859Z+yRFMeLtHjl9cBL45", "EquipmentItem", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'color', 'Component', 'Label', 'labelAssembler', 'log', 'Node', 'Sprite', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * EquipmentItem
       * zhudingchao
       * Mon May 20 2024 16:08:27 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/item/EquipmentItem.ts
       *
       */

      _export("EquipmentItem", EquipmentItem = (_dec = ccclass('EquipmentItem'), _dec2 = property(Button), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
        error: Error()
      }), HeroStar) : HeroStar), _dec8 = property(Sprite), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Sprite), _dec(_class = (_class2 = class EquipmentItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "button", _descriptor, this);

          _initializerDefineProperty(this, "qualityImg", _descriptor2, this);

          _initializerDefineProperty(this, "iconImg", _descriptor3, this);

          _initializerDefineProperty(this, "selectNode", _descriptor4, this);

          _initializerDefineProperty(this, "strengthenLvLab", _descriptor5, this);

          _initializerDefineProperty(this, "heroStar", _descriptor6, this);

          _initializerDefineProperty(this, "proSpr", _descriptor7, this);

          _initializerDefineProperty(this, "forgeNode", _descriptor8, this);

          _initializerDefineProperty(this, "forgeLab", _descriptor9, this);

          _initializerDefineProperty(this, "starbgNode", _descriptor10, this);

          this.data = void 0;
          this.touchCallBack = void 0;
          this.isTouch = true;
          this.isSelectState = false;
        }

        initData(data, isTouch) {
          if (isTouch === void 0) {
            isTouch = true;
          }

          this.data = data;
          this.isTouch = isTouch;
          this.initView();
          this.touchCallBack = null;

          if (this.button) {
            this.button.enabled = this.isTouch;
          }
        } // initId(id: number, num: number) {
        //     let info = new ItemInfo();
        //     info.itemId = id
        //     info.num = num;
        //     this.initData(info)
        // }


        start() {
          this.button.enabled = this.isTouch;
        }

        initView() {
          var itemTab = this.data.itemTable;
          this.qualityImg.setTexture("textrue/quality/qualityBg_" + itemTab.Quality);
          this.iconImg.setTexture(itemTab.Icon);
          this.setSelectState(false);

          if (this.equipInfo.type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipType.EquipType_Feather) {
            this.heroStar.node.active = false;
            this.forgeNode.active = false;
            this.strengthenLvLab.node.active = false;
            this.proSpr.node.active = false;
            this.starbgNode.node.active = false;
          } else {
            this.proSpr.node.active = true;
            this.heroStar.node.active = true;
            this.starbgNode.node.active = true;
            this.heroStar.showStar(this.data.equipTable.EquipStar);
            var h = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(this.equipInfo.equipTable.Class);
            this.proSpr.setTexture(h.Icon);
            var itemquality = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemQualityTableByQuality.getValue(this.equipInfo.quality);
            this.starbgNode.setTexture(itemquality.HeroStarBg);

            if (this.equipInfo.isWear) {
              if (this.equipInfo.enhanceLv > 0) {
                this.strengthenLvLab.node.active = true;
                this.strengthenLvLab.string = "+" + this.equipInfo.slotInfo.enhanceLv;

                if (this.equipInfo.enhanceLv < this.equipInfo.slotInfo.enhanceLv) {
                  this.strengthenLvLab.color = new Color().fromHEX("#C11212");
                } else {
                  this.strengthenLvLab.color = new Color().fromHEX("#FFFFFF");
                }
              } else {
                this.strengthenLvLab.node.active = false;
              }

              if (this.equipInfo.refineLv > 0) {
                this.forgeNode.active = true;
                this.forgeLab.string = "+" + this.equipInfo.refineLv;

                if (this.equipInfo.refineLv < this.equipInfo.slotInfo.refineLv) {
                  this.forgeLab.color = new Color().fromHEX("#C11212");
                } else {
                  this.forgeLab.color = new Color().fromHEX("#FFFFFF");
                }
              } else {
                this.forgeNode.active = false;
              }
            } else {
              this.forgeNode.active = false;
              this.strengthenLvLab.node.active = false;
            }
          } // if (itemTab.Type == tab.ItemType.ItemType_Equip) {
          //     this.numLab.node.active = false;
          // } else {
          //     let itemData = <ItemInfo>this.data;
          //     this.numLab.string = itemData.num + "";
          // }
          // this.addTouchEvent();
          // this.setSelectState(false);

        }

        setLv(EnhanceLv, refineLv) {
          this.strengthenLvLab.node.active = EnhanceLv > 0;
          this.forgeNode.active = refineLv > 0;
          this.strengthenLvLab.string = "+" + EnhanceLv;
          this.forgeLab.string = "+" + refineLv;
        }

        setTouchCallBack(callBack) {
          this.touchCallBack = callBack;
        }

        setIsTouchItem(b) {
          this.isTouch = b;

          if (this.button) {
            this.button.enabled = b;
          }
        }

        onTouchItem() {
          if (!this.isTouch) {
            return;
          }

          if (this.touchCallBack) {
            this.touchCallBack(this);
          } else {
            log("点击了item");
            var type = this.data.itemTable.BagType;

            if (type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Equip) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).EquipmentDetailPop,
                data: this.data
              });
            } else if (type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Jade) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).JadeDetailPop,
                data: this.data
              });
            }
          }
        }
        /**设置选择状态 */


        setSelectState(b) {
          this.isSelectState = b;
          this.selectNode.active = b;
        }

        onDisable() {
          this.heroStar.onDisable();
        }

        onDestroy() {
          this.node.targetOff(this);
          log("item onDestroy");
        }

        putItem() {
          (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.putEquipItem(this.node);
        }

        get equipInfo() {
          return this.data;
        }

        unuse() {
          this.node.targetOff(this);
          this.touchCallBack = null;
          this.isTouch = true;
          this.data = null;
          log("item onDisable");
          this.node.setPosition(v3(0, 0));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "qualityImg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconImg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "selectNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "strengthenLvLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "heroStar", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "proSpr", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "forgeNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "forgeLab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "starbgNode", [_dec11], {
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
//# sourceMappingURL=8b911f67356cfffffab8b08c3c3062048635755d.js.map
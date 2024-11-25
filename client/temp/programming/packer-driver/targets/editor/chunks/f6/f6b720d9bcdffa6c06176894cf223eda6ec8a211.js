System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Component, Label, log, Node, ProgressBar, Sprite, v3, ItemInfo, EquipInfo, tab, ItemPoolMgr, UIMgr, ViewName, HeroStar, GameUtil, HeroDataControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, CommonItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "./ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "../equip/EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "./ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../hero/HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../hero/herobag/HeroDataControl", _context.meta, extras);
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
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      ItemInfo = _unresolved_2.ItemInfo;
    }, function (_unresolved_3) {
      EquipInfo = _unresolved_3.EquipInfo;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      ItemPoolMgr = _unresolved_5.ItemPoolMgr;
    }, function (_unresolved_6) {
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      ViewName = _unresolved_7.ViewName;
    }, function (_unresolved_8) {
      HeroStar = _unresolved_8.HeroStar;
    }, function (_unresolved_9) {
      GameUtil = _unresolved_9.GameUtil;
    }, function (_unresolved_10) {
      HeroDataControl = _unresolved_10.HeroDataControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ede8aF04s5M26TWvMuKPHA+", "CommonItem", undefined);

      __checkObsolete__(['_decorator', 'Button', 'color', 'Color', 'Component', 'Label', 'log', 'Node', 'ProgressBar', 'Sprite', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CommonItem", CommonItem = (_dec = ccclass('CommonItem'), _dec2 = property(Button), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(Sprite), _dec14 = property(Sprite), _dec15 = property(Sprite), _dec(_class = (_class2 = class CommonItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "button", _descriptor, this);

          _initializerDefineProperty(this, "qualityImg", _descriptor2, this);

          _initializerDefineProperty(this, "iconImg", _descriptor3, this);

          _initializerDefineProperty(this, "starNode", _descriptor4, this);

          _initializerDefineProperty(this, "numLab", _descriptor5, this);

          _initializerDefineProperty(this, "selectNode", _descriptor6, this);

          _initializerDefineProperty(this, "consumeNode", _descriptor7, this);

          _initializerDefineProperty(this, "haveLab", _descriptor8, this);

          _initializerDefineProperty(this, "needLab", _descriptor9, this);

          _initializerDefineProperty(this, "consumeLab", _descriptor10, this);

          _initializerDefineProperty(this, "pieceNode", _descriptor11, this);

          _initializerDefineProperty(this, "sp_LT", _descriptor12, this);

          _initializerDefineProperty(this, "sp_LB", _descriptor13, this);

          _initializerDefineProperty(this, "sp_RT", _descriptor14, this);

          this.data = void 0;
          this.touchCallBack = void 0;
          this.isTouch = true;
          this.isSelectState = false;
          this.isConsume = false;
        }

        initData(data, isTouch = true, isConsume = false) {
          this.data = data;
          this.isTouch = isTouch;
          this.node.getChildByName("redDot").active = false;
          this.isConsume = isConsume;
          this.initView();
          this.touchCallBack = null;

          if (this.button) {
            this.button.enabled = this.isTouch;
          }
        }

        initId(id, num) {
          let info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          info.itemId = id;
          info.num = num;
          this.initData(info);
        }

        start() {
          this.button.enabled = this.isTouch;
        }

        initView() {
          this.pieceNode.active = false;
          let itemTab = this.data.itemTable;
          this.qualityImg.setTexture("textrue/quality/qualityBg_" + itemTab.Quality);
          this.iconImg.setTexture(itemTab.Icon);
          this.setExtraPic();
          this.selectNode.active = false;
          this.starNode.active = false;

          if (itemTab.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ItemType.ItemType_Equip || this.isConsume) {
            this.numLab.node.active = false;
          } else {
            let itemData = this.data;
            this.numLab.node.active = Number(itemData.num) > 0;
            this.numLab.string = "x" + (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertNumber(itemData.num) + "";

            if (itemTab.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Piece) {
              this.setPiece();
            }
          } // this.addTouchEvent();


          this.setSelectState(false);
          this.consumeNode.active = this.isConsume;

          if (this.isConsume) {
            let itemData = this.data;
            this.needLab.node.active = true;
            this.consumeLab.node.active = true;
            this.haveLab.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertNumber(itemData.num) + "";
            this.needLab.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertNumber(itemData.needNum, true) + "";

            if (Number(itemData.num) >= Number(itemData.needNum)) {
              this.haveLab.color = new Color().fromHEX((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtGreen);
            } else {
              this.haveLab.color = new Color().fromHEX((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
            }
          }
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

        addTouchEvent() {
          this.node.on(Node.EventType.TOUCH_END, this.onTouchItem, this);
        }

        onTouchItem() {
          if (!this.isTouch) {
            return;
          }

          if (this.touchCallBack) {
            this.touchCallBack(this);
          } else {
            log("点击了item==", this.data.itemId);
            let type = this.data.itemTable.BagType;

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
              const info = new (_crd && EquipInfo === void 0 ? (_reportPossibleCrUseOfEquipInfo({
                error: Error()
              }), EquipInfo) : EquipInfo)();
              info.itemId = this.data.itemId;
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).JadeDetailPop,
                data: info
              });
            } else if (type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Fragment || type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Goods || type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Consumable) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).ItemInfoPop,
                data: {
                  itemId: this.data.itemId
                }
              });
            } else if (type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_None) {
              const isHero = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroTableById.getValue(this.data.itemId) ? true : false;

              if (isHero) {
                (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                  error: Error()
                }), HeroDataControl) : HeroDataControl).ins.refreshBookData(this.data.itemId);
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.show({
                  viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).HeroBagView,
                  data: {
                    viewType: 2
                  },
                  zIndex: 300
                });
              } else {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.show({
                  viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).CommonBlackTipsPop,
                  data: {
                    "worldPos": this.node.worldPosition,
                    "WordTableKey": this.data.itemTable.Desc
                  }
                });
              }
            }
          }
        }
        /**设置选择状态 */


        setSelectState(b) {
          this.isSelectState = b;
          this.selectNode.active = b;
        }

        getSelect() {
          return this.isSelectState;
        }

        onDestroy() {
          this.node.targetOff(this);
        }

        putCommonItem() {
          (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.putCommonItem(this.node);
        }

        setShowNum(num) {
          this.numLab.string = "x" + (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(num) + "";
        }

        getItemCount() {
          return Number(this.numLab.string);
        }

        get equipInfo() {
          return this.data;
        }

        unuse() {
          this.node.targetOff(this);
          this.touchCallBack = null;
          this.isTouch = true;
          this.data = null;
          this.isSelectState = false;
          this.node.setPosition(v3(0, 0));
        }

        setStar(star) {
          this.starNode.active = true;
          this.starNode.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).showStar(star);
        }

        setPiece() {
          const _isBag = this.judgeIsBagView();

          const itemInfo = this.data;
          const quality = itemInfo.itemTable.Quality;
          const num = Number(itemInfo.num);
          this.pieceNode.active = true;
          let max = quality <= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ItemQuality.ItemQuality_Purple ? 30 : 50;
          let bar = this.pieceNode.getChildByName("piece_bar").getComponent(ProgressBar);
          bar.node.active = _isBag;
          bar.progress = num / max;
          let num_txt = bar.node.getChildByName("num_txt").getComponent(Label);
          num_txt.string = num + "/" + max;
        }

        judgeIsBagView() {
          const BagPop = (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.getView('BagPop');

          if (BagPop) {
            return true;
          }

          return false;
        }
        /**隐身消耗数量分母 */


        hideConsumeFenMu() {
          this.needLab.node.active = false;
          this.consumeLab.node.active = false;
        }
        /* 设置左上图表 */


        setExtraPic() {
          const itemTab = this.data.itemTable;
          const LT = itemTab.MarkTopLeft;
          const LB = itemTab.MarkBottomLeft;
          const RT = itemTab.MarkTopRight;
          this.sp_LT.setTexture(LT);
          this.sp_LB.setTexture(LB);
          this.sp_RT.setTexture(RT);
        }

        onDisable() {
          this.starNode.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).onDisable();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "qualityImg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconImg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "starNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "numLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "selectNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "consumeNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "haveLab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "needLab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "consumeLab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "pieceNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sp_LT", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "sp_LB", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "sp_RT", [_dec15], {
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
//# sourceMappingURL=f6b720d9bcdffa6c06176894cf223eda6ec8a211.js.map
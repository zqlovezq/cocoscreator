System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, log, Node, Sprite, tab, HeroStar, HeroDataControl, UIMgr, ViewName, RoleData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, ccclass, property, HeroItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../hero/HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
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
      Component = _cc.Component;
      Label = _cc.Label;
      log = _cc.log;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      HeroStar = _unresolved_3.HeroStar;
    }, function (_unresolved_4) {
      HeroDataControl = _unresolved_4.HeroDataControl;
    }, function (_unresolved_5) {
      UIMgr = _unresolved_5.UIMgr;
    }, function (_unresolved_6) {
      ViewName = _unresolved_6.ViewName;
    }, function (_unresolved_7) {
      RoleData = _unresolved_7.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e86f42F2VdJTYbTP4uxdq78", "HeroItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Label', 'log', 'Node', 'ProgressBar', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroItem", HeroItem = (_dec = ccclass('HeroItem'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Sprite), _dec13 = property(Sprite), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec(_class = (_class2 = class HeroItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "qualityImg", _descriptor, this);

          _initializerDefineProperty(this, "iconImg", _descriptor2, this);

          _initializerDefineProperty(this, "sp_sign", _descriptor3, this);

          //品质 优良精卓
          _initializerDefineProperty(this, "sp_vocation", _descriptor4, this);

          //职业
          _initializerDefineProperty(this, "sp_quality", _descriptor5, this);

          //品质
          _initializerDefineProperty(this, "starNode", _descriptor6, this);

          _initializerDefineProperty(this, "node_select", _descriptor7, this);

          _initializerDefineProperty(this, "numLab", _descriptor8, this);

          _initializerDefineProperty(this, "notNode", _descriptor9, this);

          _initializerDefineProperty(this, "itemNode", _descriptor10, this);

          _initializerDefineProperty(this, "sp_quality_bg", _descriptor11, this);

          //品质框
          _initializerDefineProperty(this, "sp_quality_star_bg", _descriptor12, this);

          //装备星级职业底
          _initializerDefineProperty(this, "heronumLab", _descriptor13, this);

          _initializerDefineProperty(this, "node_piece", _descriptor14, this);

          _initializerDefineProperty(this, "node_common", _descriptor15, this);

          _initializerDefineProperty(this, "node_auto_disband", _descriptor16, this);

          this.data = void 0;
          this.heroInfo = void 0;
          this.touchCallBack = void 0;
          this.isSelect = void 0;
        }

        setLevel(lv) {
          this.numLab.string = String(lv);
          this.numLab.node.active = lv !== 0;
        }

        setSelect(select) {
          this.isSelect = select;
          this.node_select.active = select;
        }

        setHeroProbablity() {
          this.node_select.active = false;
          this.iconImg.grayscale = false;
          this.sp_sign.node.active = true;
          this.starNode.active = true;
          this.numLab.node.active = false; //this.numLab.string = "x1";
        }

        getSelect() {
          return this.isSelect;
        }
        /* 是否显示SRR品质 */


        setHeroActive(srr) {
          this.sp_sign.node.active = srr; // this.starNode.active = star;
          // this.numLab.node.active = !star;
        }

        UpdateContent(data) {
          this.data = data;
          this.initView();
        }

        initView() {
          if (this.data) {
            this.node_piece.active = false;
            this.node_common.active = true;
            this.notNode.active = false;
            this.itemNode.active = true;
            this.heronumLab.node.active = false;
            this.starNode.active = true;
            this.numLab.node.active = true;
            this.heroInfo = this.data;
            var data = this.data;
            var itemTab = this.data.itemTable;
            var itemQualityTab = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getItemQualityTableByStar(this.heroInfo.star);
            var heroClassTab = data.heroClassTable;
            var heroAptitudeTab = data.heroAptitudeTable; // setTexture

            this.qualityImg.setTexture("textrue/quality/qualityBg_" + itemTab.Quality);
            this.iconImg.setTexture(itemTab.Icon);
            this.sp_vocation.setTexture(heroClassTab.Icon);
            this.sp_sign.setTexture(heroAptitudeTab.Icon);
            this.sp_quality_bg.setTexture(itemQualityTab.QualityFrame);
            this.sp_quality_star_bg.setTexture(itemQualityTab.HeroStarBg); // if (!itemData) {
            //     this.iconImg.grayscale = true;
            // } else {
            //     this.iconImg.grayscale = false;
            // }
            // Label

            var level = 0;

            if (this.data.level) {
              level = this.data.level;
            } else {
              level = data.getHeroLevel();
              var maxLevel = data.heroStarUpTable.MaxLevel;

              if (maxLevel < data.getHeroLevel()) {
                level = maxLevel;
              }
            }

            this.numLab.string = level ? String(level) : ""; // 星级

            this.starNode.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
              error: Error()
            }), HeroStar) : HeroStar).showStar(this.heroInfo.star);
            this.setSelect(false);
          } else {
            this.notNode.active = true;
            this.itemNode.active = false;
          }

          this.addTouchEvent();
        }

        setGrayScale() {
          var map = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getBookReceivedIds();
          var itemData = map.get(this.data.itemId);

          if (!itemData) {
            this.iconImg.grayscale = true;
          } else {
            this.iconImg.grayscale = false;
          }
        }

        setTouchCallBack(callBack) {
          this.touchCallBack = callBack;
        }

        addTouchEvent() {
          this.node.on(Node.EventType.TOUCH_END, this.onTouchItem, this);
        }

        showHeroNum(num) {
          this.heronumLab.node.active = true;
          this.heronumLab.string = "x" + num + "";
        }

        onTouchItem() {
          if (this.touchCallBack) {
            this.touchCallBack();
          } else {
            log("点击了item");
            var itemTab = this.data.itemTable;

            if (itemTab.Type !== (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Equip) {
              (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                error: Error()
              }), HeroDataControl) : HeroDataControl).ins.refreshBookData(itemTab.Id);
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
            }
          }
        }

        onDisable() {
          // this.node.targetOff(this);
          // ItemPoolMgr.ins.putHeroItem(this.node);
          this.starNode.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).onDisable();
        }

        onDestroy() {
          this.node.targetOff(this);
        }

        setPiece(num) {
          this.node_piece.active = true;
          this.node_common.active = false;
          this.node_piece.getChildByName("piece_bar").active = false;
          this.showHeroNum(num);
          this.setLevel(0);
        }

        setAutoDisband(isN) {
          this.node_auto_disband.active = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.autoDisband && isN;
        }

        setHeroStar(star) {
          this.starNode.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).showStar(star);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "qualityImg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconImg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sp_sign", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sp_vocation", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "starNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_select", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "numLab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "notNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "itemNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality_bg", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality_star_bg", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "heronumLab", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_piece", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_common", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "node_auto_disband", [_dec17], {
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
//# sourceMappingURL=870f33f6aae2959cdd60d8937035be50b6bd74bf.js.map
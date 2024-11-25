System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, sp, Sprite, HeroDataControl, tab, HeroStar, UIMgr, ViewName, LangMgr, createAnimation, setGraySpine, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, itemState, PaintingHeroItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../hero/HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimation(extras) {
    _reporterNs.report("createAnimation", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetGraySpine(extras) {
    _reporterNs.report("setGraySpine", "../../utils/GameUtil", _context.meta, extras);
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
      sp = _cc.sp;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      HeroDataControl = _unresolved_2.HeroDataControl;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      HeroStar = _unresolved_4.HeroStar;
    }, function (_unresolved_5) {
      UIMgr = _unresolved_5.UIMgr;
    }, function (_unresolved_6) {
      ViewName = _unresolved_6.ViewName;
    }, function (_unresolved_7) {
      LangMgr = _unresolved_7.LangMgr;
    }, function (_unresolved_8) {
      createAnimation = _unresolved_8.createAnimation;
      setGraySpine = _unresolved_8.setGraySpine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "698bdiWipBC5rvUWF2N1Nh3", "PaintingHeroItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'log', 'Node', 'sp', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      itemState = /*#__PURE__*/function (itemState) {
        itemState[itemState["NOACTIVE"] = 1] = "NOACTIVE";
        itemState[itemState["ACTIVE"] = 2] = "ACTIVE";
        itemState[itemState["ACTIVE_UP"] = 3] = "ACTIVE_UP";
        return itemState;
      }(itemState || {});

      _export("PaintingHeroItem", PaintingHeroItem = (_dec = ccclass('PaintingHeroItem'), _dec2 = property(Node), _dec3 = property(Sprite), _dec4 = property(sp.Skeleton), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Sprite), _dec(_class = (_class2 = class PaintingHeroItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_star", _descriptor, this);

          _initializerDefineProperty(this, "sp_vocation", _descriptor2, this);

          _initializerDefineProperty(this, "ske_hero", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_name", _descriptor4, this);

          _initializerDefineProperty(this, "node_star_up", _descriptor5, this);

          _initializerDefineProperty(this, "sp_name_bg", _descriptor6, this);

          this._heroId = 0;
          this._state = itemState.NOACTIVE;
        }

        initData(itemId, isFirstActive) {
          this._heroId = itemId;
          var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(this._heroId);
          var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(itemId);
          var activeStar = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.paintingActive.get(this._heroId);
          var heroClassTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(heroTab.Class);
          this.sp_vocation.setTexture(heroClassTable.Icon);

          if (activeStar) {
            this.node_star.active = true;
            this.node_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
              error: Error()
            }), HeroStar) : HeroStar).showStar(activeStar);
          } else {
            this.node_star.active = false;
          }

          this.lbl_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemTab.Name);

          if (activeStar) {
            var maxStar = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getMaxPaintingStar(itemId);

            if (maxStar && maxStar <= activeStar) {
              // 当前不可提升等级
              this._state = itemState.ACTIVE;
            } else {
              this._state = itemState.ACTIVE_UP;
            }

            if (!isFirstActive) {
              (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
                error: Error()
              }), createAnimation) : createAnimation)(this.ske_hero.node, heroTab.Idle);
              (_crd && setGraySpine === void 0 ? (_reportPossibleCrUseOfsetGraySpine({
                error: Error()
              }), setGraySpine) : setGraySpine)(this.ske_hero, false);
            }
          } else {
            // 未激活
            // this.sp_icon.grayscale = true;
            var _maxStar = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getMaxPaintingStar(itemId);

            if (_maxStar) {
              this._state = itemState.ACTIVE_UP;
            } else {
              this._state = itemState.NOACTIVE;
            }

            if (!isFirstActive) {
              (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
                error: Error()
              }), createAnimation) : createAnimation)(this.ske_hero.node, heroTab.Idle, 0);
              (_crd && setGraySpine === void 0 ? (_reportPossibleCrUseOfsetGraySpine({
                error: Error()
              }), setGraySpine) : setGraySpine)(this.ske_hero, true);
            }
          }

          this.node_star_up.active = this._state === itemState.ACTIVE_UP; // 根据状态创建spine

          this.sp_name_bg.grayscale = this._state === itemState.NOACTIVE;

          if (isFirstActive) {
            (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
              error: Error()
            }), createAnimation) : createAnimation)(this.ske_hero.node, heroTab.Born, heroTab.Idle);
            (_crd && setGraySpine === void 0 ? (_reportPossibleCrUseOfsetGraySpine({
              error: Error()
            }), setGraySpine) : setGraySpine)(this.ske_hero, false);
          }
        } // 点击升级绘卷星级


        clickPaintingUp() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).PaintingLvupPop,
            data: {
              heroId: this._heroId
            }
          });
        }

        onDisable() {
          this.node_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).onDisable();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_star", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sp_vocation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ske_hero", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_name", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_star_up", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sp_name_bg", [_dec7], {
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
//# sourceMappingURL=a17e93ac822c032d985c4642dde2fce82c5f8939.js.map
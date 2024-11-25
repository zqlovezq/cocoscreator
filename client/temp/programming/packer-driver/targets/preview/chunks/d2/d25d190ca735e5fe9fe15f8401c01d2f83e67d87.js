System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, log, Node, Sprite, HeroStar, tab, HeroDataControl, FincaFightData, ShowTips, LangMgr, EventMgr, LocalEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, FincaBagItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../hero/HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightData(extras) {
    _reporterNs.report("FincaFightData", "./FincaFightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
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
      HeroStar = _unresolved_2.HeroStar;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      HeroDataControl = _unresolved_4.HeroDataControl;
    }, function (_unresolved_5) {
      FincaFightData = _unresolved_5.FincaFightData;
    }, function (_unresolved_6) {
      ShowTips = _unresolved_6.ShowTips;
    }, function (_unresolved_7) {
      LangMgr = _unresolved_7.LangMgr;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }, function (_unresolved_9) {
      LocalEvent = _unresolved_9.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c8cfMuvedCzZl1LgUaQ5FB", "FincaBagItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'log', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FincaBagItem", FincaBagItem = (_dec = ccclass('FincaBagItem'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = (_class2 = class FincaBagItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sp_hero", _descriptor, this);

          //英雄头像
          _initializerDefineProperty(this, "sp_vocation", _descriptor2, this);

          //职业
          _initializerDefineProperty(this, "sp_quality", _descriptor3, this);

          //品质
          _initializerDefineProperty(this, "sp_quality_bg", _descriptor4, this);

          //品质框
          _initializerDefineProperty(this, "sp_quality_star_bg", _descriptor5, this);

          //装备星级职业底
          _initializerDefineProperty(this, "node_star", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_level", _descriptor7, this);

          _initializerDefineProperty(this, "node_select", _descriptor8, this);

          _initializerDefineProperty(this, "node_select_1", _descriptor9, this);

          this.touchCallBack = void 0;
          this.heroInfo = void 0;
        }

        UpdateContent(data) {
          this.heroInfo = data;
          this.node.name = String(data.id);
          var itemTab = this.heroInfo.itemTable;
          var heroTab = this.heroInfo.heroTable;
          var heroClassTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(heroTab.Class);
          var heroAptitudeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(heroTab.Aptitude);
          /* 获取品质 */

          var itemQualityTab = null;
          var level = this.heroInfo.getHeroLevel();
          var maxLevel = this.heroInfo.heroStarUpTable.MaxLevel;

          if (maxLevel < this.heroInfo.getHeroLevel()) {
            level = maxLevel;
          }

          this.lbl_level.string = String(level);
          var star = this.heroInfo.star;
          itemQualityTab = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getItemQualityTableByStar(star);
          this.sp_quality_bg.setTexture(itemQualityTab.HeroBagQuality);
          this.sp_quality_star_bg.setTexture(itemQualityTab.HeroStarBg);
          this.sp_vocation.setTexture(heroClassTable.Icon);
          this.sp_hero.setTexture(itemTab.Icon);
          this.sp_quality.setTexture(heroAptitudeTab.Icon);
          this.node_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).showStar(data.star);
          var inTeam = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getHeroInTeam(this.heroInfo.id);
          this.node_select.active = inTeam > -1;
          this.setSelectCircle(this.heroInfo.id === (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.curSelectHero);
        }

        setSelectCircle(isShow) {
          this.node_select_1.active = isShow;
        }

        setTouchCallBack(callBack) {
          this.touchCallBack = callBack;
        }

        onTouchItem() {
          if (this.touchCallBack) {
            this.touchCallBack();
          } else {
            log("点击了item");
            this.changeSelect();
            (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.curSelectHero = this.heroInfo.id;
            var index = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.HeroToggleIndex;
            var teamIndex = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.getHeroInTeam(this.heroInfo.id); // 点击的英雄是否在队伍中

            if (teamIndex > -1) {
              (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
                error: Error()
              }), FincaFightData) : FincaFightData).ins.heroIds[teamIndex] = 0;
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).Finca_Team_Change, teamIndex + 1);
            } else {
              // 判断不在队伍中的英雄是否可以替换
              var canReplace = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
                error: Error()
              }), FincaFightData) : FincaFightData).ins.checkReplaceHero(this.heroInfo.id);

              if (canReplace) {
                (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
                  error: Error()
                }), FincaFightData) : FincaFightData).ins.heroIds[index - 1] = this.heroInfo.id;
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                  error: Error()
                }), LocalEvent) : LocalEvent).Finca_Team_Change, index);
              } else {
                (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                  error: Error()
                }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getLab("Tips_finca_4"));
              }
            }

            console.log((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.heroIds);
          }
        }

        onDisable() {
          this.node_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).onDisable();
        }

        onDestroy() {
          this.node.targetOff(this);
        } // 替换选择状态


        changeSelect() {
          var node = this.node.parent.getChildByName(String((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.curSelectHero));

          if (node && node.isValid) {
            var itemTs = node.getComponent(FincaBagItem);

            if (itemTs && itemTs.isValid) {
              itemTs.setSelectCircle(false);
            }
          }

          this.setSelectCircle(true);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sp_hero", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality_star_bg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_star", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_level", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_select", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_select_1", [_dec10], {
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
//# sourceMappingURL=d25d190ca735e5fe9fe15f8401c01d2f83e67d87.js.map
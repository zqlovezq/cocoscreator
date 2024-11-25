System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, sp, Animation, Sprite, Label, AnimationComponent, Vec3, ViewPop, HeroInfo, tab, HeroSkillItem, createAnimation, LangMgr, GuideController, EventMgr, LocalEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, NewHeroPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroSkillItem(extras) {
    _reporterNs.report("HeroSkillItem", "../hero/herobag/HeroSkillItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimation(extras) {
    _reporterNs.report("createAnimation", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../../guide/GuideController", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      sp = _cc.sp;
      Animation = _cc.Animation;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      AnimationComponent = _cc.AnimationComponent;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      HeroInfo = _unresolved_3.HeroInfo;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      HeroSkillItem = _unresolved_5.HeroSkillItem;
    }, function (_unresolved_6) {
      createAnimation = _unresolved_6.createAnimation;
    }, function (_unresolved_7) {
      LangMgr = _unresolved_7.LangMgr;
    }, function (_unresolved_8) {
      GuideController = _unresolved_8.GuideController;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
    }, function (_unresolved_10) {
      LocalEvent = _unresolved_10.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05fb7BIt/xMILCrhdHQFIZm", "NewHeroPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'sp', 'Animation', 'Sprite', 'Label', 'AnimationComponent', 'animation', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NewHeroPop", NewHeroPop = (_dec = ccclass('NewHeroPop'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(sp.Skeleton), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = (_class2 = class NewHeroPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_skill_item", _descriptor, this);

          _initializerDefineProperty(this, "node_skill_layout", _descriptor2, this);

          _initializerDefineProperty(this, "ske_hero", _descriptor3, this);

          _initializerDefineProperty(this, "sp_vocation", _descriptor4, this);

          //职业
          _initializerDefineProperty(this, "sp_quality", _descriptor5, this);

          //品质
          _initializerDefineProperty(this, "lbl_hero_name", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_speciality", _descriptor7, this);

          // @property(Node)
          // node_new:Node = null
          // @property(Node)
          // node_rare:Node = null
          this.itemId = 0;
          this._heroInfo = null;
          this.mClosedCallBack = null;
        }

        register() {}

        unRegister() {
          super.unRegister();
        }

        onShow() {
          this.itemId = this.openData.itemId;
          var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(this.itemId);
          var heroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
            error: Error()
          }), HeroInfo) : HeroInfo)();
          heroInfo.itemId = this.itemId;
          heroInfo.id = 0;
          heroInfo.star = heroTab.DefaultStar;
          this._heroInfo = heroInfo;
          this.showBaseInfo();
          this.showSkillItem();
        }

        setCloseCallBack(closeFunc) {
          this.mClosedCallBack = closeFunc;
        }

        onClose() {
          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
              error: Error()
            }), GuideController) : GuideController).ins.canHideHeroPop) {
              super.onClose();
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).hideHeroPop);
            }
          } else {
            super.onClose();
          }
        }

        onDestroy() {
          super.onDestroy();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).showNewOver);

          if (this.mClosedCallBack && typeof this.mClosedCallBack == 'function') {
            this.mClosedCallBack();
            this.mClosedCallBack = null;
          }
        } // 创建技能


        showSkillItem() {
          var heroTab = this._heroInfo.heroTable;
          this.node_skill_layout.destroyAllChildren();

          var skillMap = this._heroInfo.getHeroSkillMap();

          for (var i = 1; i <= 3; i++) {
            var iconUrl = heroTab["SkillIcon" + i];

            if (iconUrl) {
              var skillData = skillMap.get(i);

              if (skillData) {
                var skill_item = instantiate(this.pfb_skill_item);
                var ts = skill_item.getComponent(_crd && HeroSkillItem === void 0 ? (_reportPossibleCrUseOfHeroSkillItem({
                  error: Error()
                }), HeroSkillItem) : HeroSkillItem);
                ts.initData(i, this._heroInfo);
                skill_item.parent = this.node_skill_layout;
              }
            }
          }
        } // 创建职业
        // 基本信息


        showBaseInfo() {
          var anim = this.getComponent(Animation);
          this.ske_hero.node.setPosition(new Vec3(-400, -180, 0));
          (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
            error: Error()
          }), createAnimation) : createAnimation)(this.ske_hero.node, this._heroInfo.heroTable.Born);
          this.ske_hero.setCompleteListener(listener => {
            if (listener.animation.name === "action_born") {
              this.ske_hero.addAnimation(0, "action_move", true);
              anim.play("NewHeroWalk");
              anim.on(AnimationComponent.EventType.FINISHED, this.walkFinish, this);
            }
          });
          var itemId = this.itemId;
          var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(itemId);
          var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(itemId);
          var heroClassTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(heroTab.Class);
          var heroAptitudeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(heroTab.Aptitude);
          this.sp_vocation.setTexture(heroClassTab.Icon);
          this.sp_quality.setTexture(heroAptitudeTab.Icon);
          /* 英雄名称 */

          this.lbl_hero_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemTab.Name);
          /* 技能 */

          this.lbl_speciality.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(heroTab.Speciality);
        }

        walkFinish(type, state) {
          var anim = this.getComponent(Animation);
          console.log("播放完成-----");
          var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(this.itemId);

          if (state.name === "NewHeroNew" || state.name === "NewHeroRare") {
            anim.play("NewHeroIdle");
          } else if (state.name === "NewHeroWalk") {
            this.ske_hero.clearAnimation();
            this.ske_hero.setAnimation(0, "action_idle", true);

            if (heroTab.Aptitude === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_SSR) {
              anim.play("NewHeroRare");
            } else if (heroTab.Aptitude === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_SR) {
              anim.play("NewHeroNew");
            }
          }

          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            this.scheduleOnce(() => {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).ShowPop);
            }, 3.2);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_skill_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_skill_layout", [_dec3], {
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_hero_name", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_speciality", [_dec8], {
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
//# sourceMappingURL=2eb26e4d936aa5f7ad38f961dc5277537ce807de.js.map
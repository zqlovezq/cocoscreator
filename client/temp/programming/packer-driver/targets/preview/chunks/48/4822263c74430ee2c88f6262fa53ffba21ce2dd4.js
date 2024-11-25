System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, Sprite, ViewPop, tab, HeroSkillPopItem, LangMgr, HeroSkillItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, HeroSkillPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroSkillPopItem(extras) {
    _reporterNs.report("HeroSkillPopItem", "./HeroSkillPopItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroSkillItem(extras) {
    _reporterNs.report("HeroSkillItem", "./HeroSkillItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../HeroInfo", _context.meta, extras);
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
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      HeroSkillPopItem = _unresolved_4.HeroSkillPopItem;
    }, function (_unresolved_5) {
      LangMgr = _unresolved_5.LangMgr;
    }, function (_unresolved_6) {
      HeroSkillItem = _unresolved_6.HeroSkillItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12314SMRHBJca6G3UfHVyTp", "HeroSkillPop", undefined);
      /*
       * @Date: 2024-05-14 15:09:51
       * @LastEditors: wzq
       * @LastEditTime: 2024-06-11 16:28:42
       */


      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroSkillPop", HeroSkillPop = (_dec = ccclass('HeroSkillPop'), _dec2 = property(Prefab), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(_crd && HeroSkillItem === void 0 ? (_reportPossibleCrUseOfHeroSkillItem({
        error: Error()
      }), HeroSkillItem) : HeroSkillItem), _dec14 = property(_crd && HeroSkillItem === void 0 ? (_reportPossibleCrUseOfHeroSkillItem({
        error: Error()
      }), HeroSkillItem) : HeroSkillItem), _dec(_class = (_class2 = class HeroSkillPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_skill_item", _descriptor, this);

          // @property(Sprite)
          // sp_long_icon:Sprite = null;
          _initializerDefineProperty(this, "lbl_long_skill_name", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_long_skill_type", _descriptor3, this);

          // @property(Sprite)
          // sp_short_icon:Sprite = null;
          _initializerDefineProperty(this, "sp_short_bg", _descriptor4, this);

          _initializerDefineProperty(this, "sp_long_bg", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_short_skill_name", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_short_skill_type", _descriptor7, this);

          _initializerDefineProperty(this, "node_short_content", _descriptor8, this);

          _initializerDefineProperty(this, "node_long_content", _descriptor9, this);

          _initializerDefineProperty(this, "node_short", _descriptor10, this);

          _initializerDefineProperty(this, "node_long", _descriptor11, this);

          _initializerDefineProperty(this, "hero_short_skill_item", _descriptor12, this);

          _initializerDefineProperty(this, "hero_long_skill_item", _descriptor13, this);

          this._type = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroStarDescType.HeroStarDescType_None;
          this._heroInfo = null;
        }

        register() {}

        onShow() {
          this._type = this.openData.type;
          this._heroInfo = this.openData.heroInfo;

          var _skillData = this._heroInfo.getHeroSkillMap().get(this._type);

          var _skillIcon = this._heroInfo["SkillIcon" + this._type];
          var _bgIcon = this._heroInfo.heroAptitudeTable.SkillBg;
          var isShort = this._type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroStarDescType.HeroStarDescType_First;
          var parentNode = isShort ? this.node_short_content : this.node_long_content;
          this.node_short.active = isShort;
          this.node_long.active = !isShort;

          var idx = _skillData[0].DescType.indexOf(this._type);

          if (isShort) {
            this.hero_short_skill_item.initData(this._type, this._heroInfo);
            this.sp_short_bg.setTexture(_bgIcon);
            this.lbl_short_skill_type.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroStarDescType[this._type]);
            this.lbl_short_skill_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(_skillData[0].StarName[idx]).split("·")[0];
          } else {
            this.hero_long_skill_item.initData(this._type, this._heroInfo);
            this.sp_long_bg.setTexture(_bgIcon);
            this.lbl_long_skill_type.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroStarDescType[this._type]);
            this.lbl_long_skill_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(_skillData[0].StarName[idx]).split("·")[0];
          }

          parentNode.removeAllChildren();

          for (var i = 0; i < _skillData.length; i++) {
            var item = instantiate(this.pfb_skill_item);
            var ts = item.getComponent(_crd && HeroSkillPopItem === void 0 ? (_reportPossibleCrUseOfHeroSkillPopItem({
              error: Error()
            }), HeroSkillPopItem) : HeroSkillPopItem);
            idx = _skillData[i].DescType.indexOf(this._type);
            ts.setData(_skillData[i], this._heroInfo, idx);
            item.parent = parentNode;
          }

          this.hero_short_skill_item.setSkillImgActive(false);
          this.hero_long_skill_item.setSkillImgActive(false);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_skill_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_long_skill_name", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_long_skill_type", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sp_short_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sp_long_bg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_short_skill_name", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_short_skill_type", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_short_content", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_long_content", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_short", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_long", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "hero_short_skill_item", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "hero_long_skill_item", [_dec14], {
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
//# sourceMappingURL=4822263c74430ee2c88f6262fa53ffba21ce2dd4.js.map
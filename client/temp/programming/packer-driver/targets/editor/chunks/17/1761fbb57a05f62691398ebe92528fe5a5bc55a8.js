System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, Sprite, tab, LoadResAsync, LangMgr, RogueBaseItem, PlayerControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, RogueHeroItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRogueInfo(extras) {
    _reporterNs.report("RogueInfo", "./RogueInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResAsync(extras) {
    _reporterNs.report("LoadResAsync", "../../../mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueBaseItem(extras) {
    _reporterNs.report("RogueBaseItem", "./RogueBaseItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../../base/obj/role/role/PlayerControl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      LoadResAsync = _unresolved_3.LoadResAsync;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }, function (_unresolved_5) {
      RogueBaseItem = _unresolved_5.RogueBaseItem;
    }, function (_unresolved_6) {
      PlayerControl = _unresolved_6.PlayerControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "329973GoHVGUrx2rHDbzkXN", "RogueHeroItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'sp', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RogueHeroItem", RogueHeroItem = (_dec = ccclass('RogueHeroItem'), _dec2 = property(sp.Skeleton), _dec3 = property(Sprite), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = (_class2 = class RogueHeroItem extends (_crd && RogueBaseItem === void 0 ? (_reportPossibleCrUseOfRogueBaseItem({
        error: Error()
      }), RogueBaseItem) : RogueBaseItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "hero_spine", _descriptor, this);

          _initializerDefineProperty(this, "pro_img", _descriptor2, this);

          _initializerDefineProperty(this, "pronames", _descriptor3, this);

          _initializerDefineProperty(this, "heroname_txt", _descriptor4, this);

          _initializerDefineProperty(this, "speciality_txt", _descriptor5, this);
        }

        setData(info) {
          super.setData(info);
          let role = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getRole(this.rogueInfo.heroItemId);

          if (role) {
            let upLv = role.info.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_RogueLevel);

            if (upLv) {
              this.rogueInfo.isHeroLevel = true;
              this.rogueInfo.level = this.rogueInfo.rogueTab.Level + upLv;
              role.info.attrData.clearAttrByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_RogueLevel);
            }
          }

          let heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(info.heroItemId);
          let itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(info.heroItemId);
          this.heroname_txt.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemTab.Name);
          this.speciality_txt.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(heroTab.Speciality);
          let heroClassTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(heroTab.Class);

          for (let index = 0; index < this.pronames.children.length; index++) {
            const element = this.pronames.children[index];
            element.active = false;
          }

          const proNode = this.pronames.getChildByName("pro" + heroTab.Class);
          proNode.active = true;
          this.pro_img.setTexture(heroClassTab.Icon);
          this.setAnimId(heroTab.Idle);
        }

        async setAnimId(animId) {
          let tempTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().AnimationTableById.getValue(animId);
          let spData = await (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
            error: Error()
          }), LoadResAsync) : LoadResAsync)(tempTab.Path, sp.SkeletonData);
          this.hero_spine.skeletonData = spData;
          this.hero_spine.setAnimation(0, tempTab.AnimationName, true);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hero_spine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pro_img", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pronames", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "heroname_txt", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "speciality_txt", [_dec6], {
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
//# sourceMappingURL=1761fbb57a05f62691398ebe92528fe5a5bc55a8.js.map
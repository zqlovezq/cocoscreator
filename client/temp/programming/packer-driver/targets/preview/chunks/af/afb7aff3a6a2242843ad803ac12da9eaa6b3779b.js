System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, RichText, Sprite, tab, LangMgr, RogueControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, RogueWeaponHeroItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRogueInfo(extras) {
    _reporterNs.report("RogueInfo", "./RogueInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoguePop(extras) {
    _reporterNs.report("RoguePop", "./RoguePop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueControl(extras) {
    _reporterNs.report("RogueControl", "./RogueControl", _context.meta, extras);
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
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      RogueControl = _unresolved_4.RogueControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b02cQ2lhdLx4yGz4LpOXcD", "RogueWeaponHeroItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'RichText', 'sp', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RogueWeaponHeroItem", RogueWeaponHeroItem = (_dec = ccclass('RogueWeaponHeroItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(RichText), _dec6 = property(Sprite), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = class RogueWeaponHeroItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "heroname_txt", _descriptor, this);

          _initializerDefineProperty(this, "lvv_txt", _descriptor2, this);

          _initializerDefineProperty(this, "next_lv_txt", _descriptor3, this);

          _initializerDefineProperty(this, "descRich", _descriptor4, this);

          _initializerDefineProperty(this, "head", _descriptor5, this);

          _initializerDefineProperty(this, "probg_node", _descriptor6, this);

          _initializerDefineProperty(this, "lv_layout", _descriptor7, this);

          _initializerDefineProperty(this, "awaken_node", _descriptor8, this);

          this.owner = void 0;
          this.rogueInfo = void 0;
        }

        setData(info) {
          this.rogueInfo = info;
          var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(info.heroItemId);
          this.heroname_txt.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemTab.Name) + (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_heroresonancepop_3", [info.rogueTab.Level]);
          this.head.setTexture(itemTab.Icon);
          this.lvv_txt.string = (info.rogueTab.Level - 1).toString();
          this.next_lv_txt.string = info.rogueTab.Level.toString();
          var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(info.heroItemId);

          for (var index = 0; index < this.probg_node.children.length; index++) {
            var element = this.probg_node.children[index];
            element.active = false;
          }

          this.probg_node.getChildByName("pro" + heroTab.Class).active = true;
          this.descRich.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(info.rogueTab.Description);
          var heroClassTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(heroTab.Class);
          var maxLevel = this.getMaxSkillLevel(info);

          for (var i = 0; i < this.lv_layout.children.length; i++) {
            var lvNode = this.lv_layout.children[i];

            var _index = i + 1;

            var pro_img = lvNode.getChildByName("pro_img").getComponent(Sprite);
            var select_img = lvNode.getChildByName("select_img");
            var select_pro_img = select_img.getChildByName("pro_img").getComponent(Sprite);
            var bg = lvNode.getChildByName("bg");
            select_img.active = _index === info.rogueTab.Level;
            bg.active = _index <= info.rogueTab.Level && !select_img.active;
            pro_img.setTexture(heroClassTable.Icon);
            select_pro_img.setTexture(heroClassTable.Icon);
            lvNode.active = _index <= maxLevel;
          }

          this.awaken_node.active = info.rogueTab.Level >= 6;
        } // 获取最大重数


        getMaxSkillLevel(rogueInfo) {
          var level = 0;
          var validList = (_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
            error: Error()
          }), RogueControl) : RogueControl).ins.validList;
          var rogueInfos = [rogueInfo];

          for (var i = 0; i < validList.length; i++) {
            var _rogueInfo = validList[i];

            if (_rogueInfo.Id === rogueInfo.Id) {
              continue;
            }

            if (_rogueInfo.heroItemId === rogueInfo.heroItemId) {
              rogueInfos.push(_rogueInfo);
            }
          }

          for (var k = 0; k < rogueInfos.length; k++) {
            var _rogueInfo2 = rogueInfos[k];

            if (_rogueInfo2.rogueTab.Level > level) {
              level = _rogueInfo2.rogueTab.Level;
            }
          }

          return level;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "heroname_txt", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lvv_txt", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "next_lv_txt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "descRich", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "head", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "probg_node", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lv_layout", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "awaken_node", [_dec9], {
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
//# sourceMappingURL=afb7aff3a6a2242843ad803ac12da9eaa6b3779b.js.map
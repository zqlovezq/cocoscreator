System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, Node, Sprite, tab, EventMgr, FightEvent, UIMgr, ViewName, HeroInfo, HeroDataControl, HeroStar, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, FightRoleTeamItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroFightInfo(extras) {
    _reporterNs.report("HeroFightInfo", "../../data/HeroFightInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../../../model/hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../../../model/hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../../../model/hero/HeroStar", _context.meta, extras);
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
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      FightEvent = _unresolved_4.FightEvent;
    }, function (_unresolved_5) {
      UIMgr = _unresolved_5.UIMgr;
    }, function (_unresolved_6) {
      ViewName = _unresolved_6.ViewName;
    }, function (_unresolved_7) {
      HeroInfo = _unresolved_7.HeroInfo;
    }, function (_unresolved_8) {
      HeroDataControl = _unresolved_8.HeroDataControl;
    }, function (_unresolved_9) {
      HeroStar = _unresolved_9.HeroStar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1e1dTaWrtDiLg+aCQVhx8l", "FightRoleTeamItem", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'Label', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightRoleTeamItem", FightRoleTeamItem = (_dec = ccclass('FightRoleTeamItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property(Sprite), _dec8 = property(Node), _dec9 = property(Button), _dec10 = property(Sprite), _dec11 = property(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
        error: Error()
      }), HeroStar) : HeroStar), _dec(_class = (_class2 = class FightRoleTeamItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "baseNode", _descriptor, this);

          _initializerDefineProperty(this, "blackNode", _descriptor2, this);

          _initializerDefineProperty(this, "qualityImg", _descriptor3, this);

          _initializerDefineProperty(this, "iconImg", _descriptor4, this);

          _initializerDefineProperty(this, "lv_txt", _descriptor5, this);

          _initializerDefineProperty(this, "sp_vocation", _descriptor6, this);

          //职业
          _initializerDefineProperty(this, "leader", _descriptor7, this);

          //职业
          _initializerDefineProperty(this, "btn", _descriptor8, this);

          _initializerDefineProperty(this, "starbgImg", _descriptor9, this);

          _initializerDefineProperty(this, "heroStar", _descriptor10, this);

          this.info = null;
          this.callback = void 0;
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Role_Level_Up, this.onLevelUp, this);
        }

        onLevelUp(heroItemId, lastLv, lv) {
          if (this.info == null) {
            return;
          }

          if (this.info.itemId != heroItemId) {
            return;
          }

          this.lv_txt.string = this.info.level.toString();
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);
        }

        setCallback(fb) {
          this.callback = fb;
        }

        setData(info, isTouch = false) {
          this.info = info;
          this.btn.enabled = isTouch;

          if (info == null) {
            this.blackNode.active = true;
            this.baseNode.active = !this.blackNode.active;
            return;
          }

          this.blackNode.active = false;
          this.baseNode.active = !this.blackNode.active;
          let itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(info.itemId);
          let heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(info.itemId);
          let heroClassTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(heroTab.Class);
          this.sp_vocation.setTexture(heroClassTab.Icon);
          this.iconImg.setTexture(itemTab.Icon); // this.qualityImg.setTexture("textrue/quality/qualityBg_" + itemTab.Quality);

          this.lv_txt.string = info.level.toString();
          this.leader.active = info.intoIndex == 1;
          let itemQualityTab = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getItemQualityTableByStar(info.star);
          this.starbgImg.setTexture(itemQualityTab.HeroStarBg);
          this.qualityImg.setTexture(itemQualityTab.QualityFrame);
          this.heroStar.showStar(info.star);
        }

        onClickItem() {
          if (this.callback) {
            return this.callback(this.info);
            return;
          }

          let heroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
            error: Error()
          }), HeroInfo) : HeroInfo)();
          heroInfo.id = this.info.id;
          heroInfo.itemId = this.info.itemId;
          heroInfo.level = this.info.level;
          heroInfo.star = this.info.star;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).HeroSkillPop,
            data: {
              type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroStarDescType.HeroStarDescType_First,
              heroInfo: heroInfo
            },
            zIndex: 300
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "baseNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blackNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "qualityImg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconImg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lv_txt", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sp_vocation", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "leader", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "starbgImg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "heroStar", [_dec11], {
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
//# sourceMappingURL=cec1fd45411846ed22b69b3e7e5dc8ae5f56c0da.js.map
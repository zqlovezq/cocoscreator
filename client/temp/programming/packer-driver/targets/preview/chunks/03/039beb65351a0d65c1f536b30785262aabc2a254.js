System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, FightRoleTeamItem, PlayerControl, ViewName, UIMgr, HeroDataControl, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, FightRoleTeam;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFightRoleTeamItem(extras) {
    _reporterNs.report("FightRoleTeamItem", "./FightRoleTeamItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../../base/obj/role/role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroFightInfo(extras) {
    _reporterNs.report("HeroFightInfo", "../../data/HeroFightInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../../../model/hero/herobag/HeroDataControl", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      FightRoleTeamItem = _unresolved_2.FightRoleTeamItem;
    }, function (_unresolved_3) {
      PlayerControl = _unresolved_3.PlayerControl;
    }, function (_unresolved_4) {
      ViewName = _unresolved_4.ViewName;
    }, function (_unresolved_5) {
      UIMgr = _unresolved_5.UIMgr;
    }, function (_unresolved_6) {
      HeroDataControl = _unresolved_6.HeroDataControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a4b8VJt8ZBUawrxErX5vJ6", "FightRoleTeam", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightRoleTeam", FightRoleTeam = (_dec = ccclass('FightRoleTeam'), _dec2 = property(Node), _dec(_class = (_class2 = class FightRoleTeam extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "team_layout", _descriptor, this);

          this.items = [];
        }

        onLoad() {
          for (var index = 0; index < this.team_layout.children.length; index++) {
            var v = this.team_layout.children[index];
            this.items.push(v.getComponent(_crd && FightRoleTeamItem === void 0 ? (_reportPossibleCrUseOfFightRoleTeamItem({
              error: Error()
            }), FightRoleTeamItem) : FightRoleTeamItem));
          }
        }

        refresh(isTouch) {
          if (isTouch === void 0) {
            isTouch = false;
          }

          var list = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getIntoHeros();

          for (var index = 0; index < this.items.length; index++) {
            var head = this.items[index];
            var role = list[index];
            head.setData(role, isTouch);
          }
        }

        setHeros(heros, isTouch) {
          if (isTouch === void 0) {
            isTouch = false;
          }

          for (var index = 0; index < this.items.length; index++) {
            var head = this.items[index];
            var role = heros[index];
            head.setData(role, isTouch);
            head.setCallback(hero => {
              (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                error: Error()
              }), HeroDataControl) : HeroDataControl).ins.refreshBookData(hero.itemId);
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
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "team_layout", [_dec2], {
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
//# sourceMappingURL=039beb65351a0d65c1f536b30785262aabc2a254.js.map
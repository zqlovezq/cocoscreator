System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, FightWeaponTeamItem, RogueControl, FincaFightData, tab, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, FightWeaponTeam;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFightWeaponTeamItem(extras) {
    _reporterNs.report("FightWeaponTeamItem", "./FightWeaponTeamItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueControl(extras) {
    _reporterNs.report("RogueControl", "../rogue/RogueControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightData(extras) {
    _reporterNs.report("FincaFightData", "../../../model/fincaFight/FincaFightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
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
      FightWeaponTeamItem = _unresolved_2.FightWeaponTeamItem;
    }, function (_unresolved_3) {
      RogueControl = _unresolved_3.RogueControl;
    }, function (_unresolved_4) {
      FincaFightData = _unresolved_4.FincaFightData;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5fd18uUoTxDWIZjOikCLVE6", "FightWeaponTeam", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightWeaponTeam", FightWeaponTeam = (_dec = ccclass('FightWeaponTeam'), _dec2 = property(Node), _dec(_class = (_class2 = class FightWeaponTeam extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "team_layout", _descriptor, this);

          this.items = [];
          this.books = [];
        }

        onLoad() {
          for (var index = 0; index < this.team_layout.children.length; index++) {
            var v = this.team_layout.children[index];
            this.items.push(v.getComponent(_crd && FightWeaponTeamItem === void 0 ? (_reportPossibleCrUseOfFightWeaponTeamItem({
              error: Error()
            }), FightWeaponTeamItem) : FightWeaponTeamItem));
          }
        }

        refresh(isTouch) {
          if (isTouch === void 0) {
            isTouch = false;
          }

          var list = (_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
            error: Error()
          }), RogueControl) : RogueControl).ins.getSelectWeapon();

          for (var index = 0; index < this.items.length; index++) {
            var head = this.items[index];
            var role = list[index];
            head.setData(role, isTouch);
          }
        }

        setBooks(books, prestigeLevel) {
          this.books = books;

          var _fincaFightTeamTab = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getTeamTab(prestigeLevel || 1);

          for (var index = 0; index < this.items.length; index++) {
            var head = this.items[index];
            var bookId = this.books[index];
            head.setBookId(_fincaFightTeamTab.UnlockWeapon > index ? bookId || 0 : -1);
          }
        }

        activeBookIndex(index) {
          this.items[index] && this.items[index].activeBook();
        }

        setRogueIds(rogues) {
          for (var index = 0; index < this.items.length; index++) {
            var head = this.items[index];
            var rogueId = rogues[index];
            var rogueTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().RogueTableById.getValue(rogueId);
            head.setBookId(rogueTab ? rogueTab.BookId : 0);
            head.btn.enabled = true;
            head.cdBar.progress = 0;
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
//# sourceMappingURL=d8d04e4d503757a43f48912ba1f5bf1e0369d5c8.js.map
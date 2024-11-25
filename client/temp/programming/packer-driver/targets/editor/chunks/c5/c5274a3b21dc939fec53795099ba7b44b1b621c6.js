System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, WeaponItem, LocalEvent, EventMgr, FincaFightData, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, FincaFightStageWeaponItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWeaponItem(extras) {
    _reporterNs.report("WeaponItem", "../common/WeaponItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "../rareBook/RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightData(extras) {
    _reporterNs.report("FincaFightData", "./FincaFightData", _context.meta, extras);
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
      WeaponItem = _unresolved_2.WeaponItem;
    }, function (_unresolved_3) {
      LocalEvent = _unresolved_3.LocalEvent;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      FincaFightData = _unresolved_5.FincaFightData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02b0a8wUp1Ih7/69cTTbF+V", "FincaFightStageWeaponItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FincaFightStageWeaponItem", FincaFightStageWeaponItem = (_dec = ccclass('FincaFightStageWeaponItem'), _dec2 = property(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
        error: Error()
      }), WeaponItem) : WeaponItem), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class FincaFightStageWeaponItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "item_weapon", _descriptor, this);

          _initializerDefineProperty(this, "node_select_1", _descriptor2, this);

          _initializerDefineProperty(this, "node_select", _descriptor3, this);

          this.bookInfo = null;
        }

        initData(info) {
          this.bookInfo = info; // info.isLock = true;

          this.node.name = String(this.bookInfo.itemId);
          this.item_weapon.initData(info, true, false, false, this.onTouchItem.bind(this));
          const inTeam = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getBookInTeam(this.bookInfo.itemId);
          this.node_select.active = inTeam > -1;
          this.setSelectCircle(this.bookInfo.itemId === (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.curSelectBook);
        }

        onTouchItem() {
          this.changeSelect();
          (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.curSelectBook = this.bookInfo.itemId;
          const index = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.BookToggleIndex;
          const teamIndex = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getBookInTeam(this.bookInfo.itemId); // 点击的英雄是否在队伍中

          if (teamIndex > -1) {
            (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.bookIds[teamIndex] = 0;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).Finca_Book_Change, teamIndex + 1);
          } else {
            // 判断不在队伍中的英雄是否可以替换
            (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.bookIds[index - 1] = this.bookInfo.itemId;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).Finca_Book_Change, index);
          }

          console.log((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.bookIds);
        }

        onDestroy() {
          this.node.targetOff(this);
        }

        changeSelect() {
          const node = this.node.parent.getChildByName(String((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.curSelectBook));

          if (node && node.isValid) {
            const itemTs = node.getComponent(FincaFightStageWeaponItem);

            if (itemTs && itemTs.isValid) {
              itemTs.setSelectCircle(false);
            }
          }

          this.setSelectCircle(true);
        }

        setSelectCircle(isShow) {
          this.node_select_1.active = isShow;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "item_weapon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_select_1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_select", [_dec4], {
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
//# sourceMappingURL=c5274a3b21dc939fec53795099ba7b44b1b621c6.js.map
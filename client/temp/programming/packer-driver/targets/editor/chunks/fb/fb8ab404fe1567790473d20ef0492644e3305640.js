System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, ProgressBar, tab, WeaponInfoItem, RareBookData, WeaponItem, ViewPop, OpenFunctionMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, WeaponPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponInfoItem(extras) {
    _reporterNs.report("WeaponInfoItem", "../common/WeaponInfoItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "../rareBook/RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponItem(extras) {
    _reporterNs.report("WeaponItem", "../common/WeaponItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
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
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      WeaponInfoItem = _unresolved_3.WeaponInfoItem;
    }, function (_unresolved_4) {
      RareBookData = _unresolved_4.RareBookData;
    }, function (_unresolved_5) {
      WeaponItem = _unresolved_5.WeaponItem;
    }, function (_unresolved_6) {
      ViewPop = _unresolved_6.ViewPop;
    }, function (_unresolved_7) {
      OpenFunctionMgr = _unresolved_7.OpenFunctionMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "102de1+705JvpcdgO8nEF0F", "WeaponPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Node', 'Prefab', 'ProgressBar', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * WeaponPop
       * zhudingchao
       * Tue May 28 2024 15:38:56 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/weapon/WeaponPop.ts
       *
       */

      _export("WeaponPop", WeaponPop = (_dec = ccclass('WeaponPop'), _dec2 = property([Node]), _dec3 = property([Node]), _dec4 = property([Node]), _dec5 = property(ProgressBar), _dec6 = property(_crd && WeaponInfoItem === void 0 ? (_reportPossibleCrUseOfWeaponInfoItem({
        error: Error()
      }), WeaponInfoItem) : WeaponInfoItem), _dec7 = property(Node), _dec8 = property(Prefab), _dec(_class = (_class2 = class WeaponPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "toggles1", _descriptor, this);

          _initializerDefineProperty(this, "toggles2", _descriptor2, this);

          _initializerDefineProperty(this, "toggles3", _descriptor3, this);

          _initializerDefineProperty(this, "proBar", _descriptor4, this);

          _initializerDefineProperty(this, "WeaponInfoItem", _descriptor5, this);

          _initializerDefineProperty(this, "defaultToggleNode", _descriptor6, this);

          _initializerDefineProperty(this, "weaponItemPrefab", _descriptor7, this);

          this.currTag = 1;
          this.boosDicTabs = void 0;
          this.currWeaponItem = void 0;
          this.currNode = void 0;

          this.onTocchItem = weapon => {
            const isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_RareBook);
            let atpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(weapon.info.bookTable.Aptitude);

            if (!isOpen && atpTab.HeroAptitude === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_SR) {
              this.currWeaponItem.setSelect(false);
              (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                error: Error()
              }), OpenFunctionMgr) : OpenFunctionMgr).ins.showFunctionTips((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_RareBook);
              this.currWeaponItem = weapon;
            } else {
              if (this.currWeaponItem != weapon) {
                this.currWeaponItem.setSelect(false);
                weapon.setSelect(true);

                if (weapon.redPointNode) {
                  weapon.redPointNode.active = false;
                  weapon.info.tujianRedPoint = false;
                }

                this.currWeaponItem = weapon;
                this.updateWeaponInfoItem();
              }
            }
          };
        }

        register() {}

        onShow() {
          this.boosDicTabs = new Map();
          let tabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BookDictionary;

          for (let key in tabs) {
            let bookId = tabs[key].PhaseOneBook;
            let heroClass = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getBookInfoByItemId(bookId).bookTable.Class;
            this.boosDicTabs.set(heroClass, tabs[key]);
          }

          this.initView();
          this.currNode = this.defaultToggleNode;
          this.currNode.getChildByName("redNode").active = false;
        }

        initView() {
          let currTab = this.boosDicTabs.get(this.currTag);
          this.updateItem(this.toggles1[0], currTab.PhaseOneBook, false);

          for (let key in currTab.PhaseTwoBook) {
            this.updateItem(this.toggles2[key], currTab.PhaseTwoBook[key], false);
          }

          let allLock = true;

          for (let key in currTab.PhaseThreeBook) {
            let isLock = this.updateItem(this.toggles3[key], currTab.PhaseThreeBook[key], true, true);

            if (allLock) {
              allLock = isLock;
            }
          }

          this.proBar.progress = allLock ? 1 : 0.5;
          this.currWeaponItem = this.toggles1[0].children[0].getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
            error: Error()
          }), WeaponItem) : WeaponItem);
          this.currWeaponItem.setSelect(true);
          this.updateWeaponInfoItem();
        }

        updateItem(item, bookId, isShowLock, isShowRedPoint = false) {
          let weaponItem = null;

          if (item.children.length == 0) {
            weaponItem = instantiate(this.weaponItemPrefab);
            weaponItem.parent = item;
          } else {
            weaponItem = item.children[0];
          }

          let bookInfo = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookInfoByItemId(bookId);
          let com = weaponItem.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
            error: Error()
          }), WeaponItem) : WeaponItem);
          com.initData(bookInfo, true, true, isShowLock, this.onTocchItem);
          com.setNotOpen();

          if (isShowRedPoint && bookInfo.tujianRedPoint) {
            com.redPointNode.active = true;
          } else {
            com.redPointNode.active = false;
          }

          return bookInfo.isLock;
        }

        updateWeaponInfoItem() {
          this.WeaponInfoItem.initData(this.currWeaponItem.info);
          this.WeaponInfoItem.setShowStar(this.currWeaponItem.info.bookTable.Aptitude == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroAptitude.HeroAptitude_SR);
        }

        onClickProToggle(event, tag) {
          tag = Number(tag);

          if (tag != this.currTag) {
            this.currTag = tag;
            this.initView();

            if (this.currNode) {
              this.currNode.getChildByName("redNode").active = true;
            }

            event.target.getChildByName("redNode").active = false;
            this.currNode = event.target;
          } // tab.HeroClass

        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggles1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toggles2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggles3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "proBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "WeaponInfoItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "defaultToggleNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "weaponItemPrefab", [_dec8], {
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
//# sourceMappingURL=fb8ab404fe1567790473d20ef0492644e3305640.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, Node, Sprite, LangMgr, tab, RareBookData, OpenFunctionMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, WeaponItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "../rareBook/RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "../rareBook/RareBookData", _context.meta, extras);
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
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      LangMgr = _unresolved_2.LangMgr;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      RareBookData = _unresolved_4.RareBookData;
    }, function (_unresolved_5) {
      OpenFunctionMgr = _unresolved_5.OpenFunctionMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "678a0vih3xKVJrh7LQBM4Kz", "WeaponItem", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * WeaponItem
       * zhudingchao
       * Tue May 28 2024 14:38:31 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/common/WeaponItem.ts
       *
       */

      _export("WeaponItem", WeaponItem = (_dec = ccclass('WeaponItem'), _dec2 = property(Button), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = class WeaponItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "button", _descriptor, this);

          _initializerDefineProperty(this, "qualitybgSpr", _descriptor2, this);

          _initializerDefineProperty(this, "iconSpr", _descriptor3, this);

          _initializerDefineProperty(this, "signSpr", _descriptor4, this);

          _initializerDefineProperty(this, "nameNode", _descriptor5, this);

          _initializerDefineProperty(this, "nameLab", _descriptor6, this);

          _initializerDefineProperty(this, "unlockNode", _descriptor7, this);

          _initializerDefineProperty(this, "selectNode", _descriptor8, this);

          _initializerDefineProperty(this, "redPointNode", _descriptor9, this);

          _initializerDefineProperty(this, "nodeNotOpen", _descriptor10, this);

          this.info = void 0;
          this.touchCallBack = void 0;
        }

        initData(info, isTouch = true, isShowName = true, isShowLock = false, touchCallBack = null) {
          this.info = info;

          if (this.button) {
            this.button.enabled = isTouch;
          }

          this.nameNode.active = isShowName;
          this.selectNode.active = false;
          this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.info.itemTable.Name);
          this.iconSpr.setTexture(this.info.itemTable.Icon);
          this.signSpr.node.active = this.info.bookTable.PlaystyleName != "";

          if (this.info.bookTable.PlaystyleName != "") {
            this.signSpr.setTexture(this.info.bookTable.PlaystyleName);
          }

          let atpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(this.info.bookTable.Aptitude);
          this.qualitybgSpr.setTexture(atpTab.BookBgSmall); // this.qualitySpr.setTexture(atpTab.Icon);
          // this.qualityBgSpr.setTexture(atpTab.BookBgSmall);
          // this.qualitybgSpr.setTexture("textrue/quality/qualityBg_" + info.itemTable.Quality);

          if (isShowLock) {
            this.unlockNode.active = !info.isLock;
          } else {
            this.unlockNode.active = false;
          }

          this.touchCallBack = touchCallBack;
        }

        initBookItemId(bookId, isTouch = true, isShowName = true, isShowLock = false, touchCallBack = null) {
          let info = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookInfoByItemId(bookId);
          this.initData(info, isTouch, isShowName, isShowLock, touchCallBack);
        }

        setSelect(b) {
          this.selectNode.active = b;
        }

        onClickItem() {
          if (this.touchCallBack) {
            this.touchCallBack(this);
          }
        }

        setNotOpen() {
          const isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_RareBook);
          let atpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(this.info.bookTable.Aptitude);

          if (this.button) {
            if (!isOpen && atpTab.HeroAptitude === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_SR) {
              this.nodeNotOpen.active = true;
              this.button.node.active = false;
            } else {
              this.nodeNotOpen.active = false;
              this.button.node.active = true;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "qualitybgSpr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconSpr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "signSpr", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nameNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "unlockNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "selectNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "redPointNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeNotOpen", [_dec11], {
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
//# sourceMappingURL=fc2803e15de000af70bc6aef39bea2528914c4f3.js.map
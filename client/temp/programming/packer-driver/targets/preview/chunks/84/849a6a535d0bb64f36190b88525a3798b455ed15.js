System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, RichText, ViewPop, LangMgr, tab, ShowTips, UIMgr, ViewName, RareBookData, RareBookControl, RareBookSmallItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, RareBookEquipPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "./RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "./RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookControl(extras) {
    _reporterNs.report("RareBookControl", "./RareBookControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookSmallItem(extras) {
    _reporterNs.report("RareBookSmallItem", "./RareBookSmallItem", _context.meta, extras);
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
      RichText = _cc.RichText;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      ShowTips = _unresolved_5.ShowTips;
      UIMgr = _unresolved_5.UIMgr;
    }, function (_unresolved_6) {
      ViewName = _unresolved_6.ViewName;
    }, function (_unresolved_7) {
      RareBookData = _unresolved_7.RareBookData;
    }, function (_unresolved_8) {
      RareBookControl = _unresolved_8.RareBookControl;
    }, function (_unresolved_9) {
      RareBookSmallItem = _unresolved_9.RareBookSmallItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "189adlak+pHVouaIRLC0nJm", "RareBookEquipPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'RichText']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookEquipPop
       * zhudingchao
       * Tue May 28 2024 14:52:13 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookEquipPop.ts
       *
       */

      _export("RareBookEquipPop", RareBookEquipPop = (_dec = ccclass('RareBookEquipPop'), _dec2 = property(_crd && RareBookSmallItem === void 0 ? (_reportPossibleCrUseOfRareBookSmallItem({
        error: Error()
      }), RareBookSmallItem) : RareBookSmallItem), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(RichText), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = class RareBookEquipPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "weaponItem", _descriptor, this);

          _initializerDefineProperty(this, "nameLab", _descriptor2, this);

          _initializerDefineProperty(this, "rarebooklevelLab", _descriptor3, this);

          _initializerDefineProperty(this, "descRichText", _descriptor4, this);

          _initializerDefineProperty(this, "developNode", _descriptor5, this);

          _initializerDefineProperty(this, "cancelNode", _descriptor6, this);

          _initializerDefineProperty(this, "notcancelNode", _descriptor7, this);

          this.info = void 0;
        }

        register() {}

        onShow() {
          this.info = this.openData["bookInfo"];

          if (this.info) {
            this.initView();
          }
        }

        initView() {
          this.weaponItem.initView(this.info, false, null, false);
          this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.info.itemTable.Name);
          var str = "";

          if (this.info.bookTable.Aptitude == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroAptitude.HeroAptitude_N) {
            str = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_rarebook_20", [1]);
          } else if (this.info.bookTable.Aptitude == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroAptitude.HeroAptitude_R) {
            str = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_rarebook_20", [2]);
          } else if (this.info.bookTable.Aptitude == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroAptitude.HeroAptitude_SR) {
            str = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_rarebook_20", [3]);
          }

          this.rarebooklevelLab.string = str;
          this.descRichText.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.info.bookStarTable.BookDescription);

          if (this.info.isWear) {
            this.notcancelNode.active = false;
            this.cancelNode.active = true;
          } else {
            this.notcancelNode.active = true;
            this.cancelNode.active = false;
          }
        }

        onClickDevelop() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RareBookDetailView,
            data: {
              "currInfo": this.info
            }
          });
          this.onClose();
        }

        onClickCancel() {
          (_crd && RareBookControl === void 0 ? (_reportPossibleCrUseOfRareBookControl({
            error: Error()
          }), RareBookControl) : RareBookControl).ins.requestDropBook(this.info.id);
          this.onClose();
        }

        onClickNotCancel() {
          var slots = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookSlotsByHeroClass(this.info.bookTable.Class);
          var isHavePos = false;

          for (var key in slots) {
            if (!slots[key].bookInfo && slots[key].isLock) {
              isHavePos = true;
              break;
            }
          }

          if (isHavePos) {
            (_crd && RareBookControl === void 0 ? (_reportPossibleCrUseOfRareBookControl({
              error: Error()
            }), RareBookControl) : RareBookControl).ins.requestTakeBook(this.info.id);
            this.onClose();
          } else {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_rarebook_3"));
            this.onClose();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "weaponItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rarebooklevelLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "descRichText", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "developNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "cancelNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "notcancelNode", [_dec8], {
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
//# sourceMappingURL=849a6a535d0bb64f36190b88525a3798b455ed15.js.map
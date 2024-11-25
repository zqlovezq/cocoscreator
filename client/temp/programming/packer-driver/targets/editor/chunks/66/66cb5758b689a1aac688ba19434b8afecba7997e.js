System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, Prefab, RareBookSmallItem, UIMgr, ViewName, tab, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, RareBookRewardPreviewPopItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "./RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookSmallItem(extras) {
    _reporterNs.report("RareBookSmallItem", "./RareBookSmallItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      RareBookSmallItem = _unresolved_2.RareBookSmallItem;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      ViewName = _unresolved_4.ViewName;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      LangMgr = _unresolved_6.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57baaww1y1D769TRNdkK4D7", "RareBookRewardPreviewPopItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookRewardPreviewPopItem
       * zhudingchao
       * Mon May 27 2024 21:04:59 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookRewardPreviewPopItem.ts
       *
       */

      _export("RareBookRewardPreviewPopItem", RareBookRewardPreviewPopItem = (_dec = ccclass('RareBookRewardPreviewPopItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Prefab), _dec(_class = (_class2 = class RareBookRewardPreviewPopItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "quality1", _descriptor, this);

          _initializerDefineProperty(this, "quality2", _descriptor2, this);

          _initializerDefineProperty(this, "quality3", _descriptor3, this);

          _initializerDefineProperty(this, "probabilityLab", _descriptor4, this);

          _initializerDefineProperty(this, "rarebookLayout", _descriptor5, this);

          _initializerDefineProperty(this, "smallBoolItemPrefab", _descriptor6, this);
        }

        initData(quality, infos) {
          for (let key in infos) {
            let item = instantiate(this.smallBoolItemPrefab);
            item.parent = this.rarebookLayout;
            let com = item.getComponent(_crd && RareBookSmallItem === void 0 ? (_reportPossibleCrUseOfRareBookSmallItem({
              error: Error()
            }), RareBookSmallItem) : RareBookSmallItem);
            com.initView(infos[key], true, this.onTouchItem);
          }

          let str = "";

          if (quality == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroAptitude.HeroAptitude_N) {
            this.quality1.active = true;
            this.quality2.active = false;
            this.quality3.active = false;
            str = "ui_book_probability_n";
          } else if (quality == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroAptitude.HeroAptitude_R) {
            this.quality1.active = false;
            this.quality2.active = true;
            this.quality3.active = false;
            str = "ui_book_probability_r";
          } else if (quality == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroAptitude.HeroAptitude_SR) {
            this.quality1.active = false;
            this.quality2.active = false;
            this.quality3.active = true;
            str = "ui_book_probability_sr";
          }

          this.probabilityLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(str);
        }

        onTouchItem(info) {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
            error: Error()
          }), ViewName) : ViewName).RareBookRewardPreviewPop);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RareBookDetailView,
            data: {
              "currInfo": info
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "quality1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "quality2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "quality3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "probabilityLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rarebookLayout", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "smallBoolItemPrefab", [_dec7], {
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
//# sourceMappingURL=66cb5758b689a1aac688ba19434b8afecba7997e.js.map
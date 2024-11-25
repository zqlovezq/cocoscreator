System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, Component, error, Node, tab, UIMgr, ViewName, HeroDataControl, RareBookData, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, CommonJumpByItemId;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "../rareBook/RareBookData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      error = _cc.error;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      ViewName = _unresolved_4.ViewName;
    }, function (_unresolved_5) {
      HeroDataControl = _unresolved_5.HeroDataControl;
    }, function (_unresolved_6) {
      RareBookData = _unresolved_6.RareBookData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96959zdAR1OIrZ1BPQMI2t/", "CommonJumpByItemId", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'error', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ComminJumpByItemId
       * zhudingchao
       * Mon Jul 22 2024 19:35:46 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/common/CommonJumpByItemId.ts
       *
       */

      _export("CommonJumpByItemId", CommonJumpByItemId = (_dec = ccclass('CommonJumpByItemId'), _dec2 = property(CCInteger), _dec(_class = (_class2 = class CommonJumpByItemId extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemId", _descriptor, this);

          this.onTouchItem = () => {
            let itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(this.itemId);

            if (itemTab) {
              if (itemTab.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ItemType.ItemType_Hero) {
                (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                  error: Error()
                }), HeroDataControl) : HeroDataControl).ins.refreshBookData(itemTab.Id);
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
              } else if (itemTab.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ItemType.ItemType_Piece) {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.show({
                  viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).ItemInfoPop,
                  data: {
                    itemId: this.itemId
                  }
                });
              } else if (itemTab.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ItemType.ItemType_Book) {
                let info = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
                  error: Error()
                }), RareBookData) : RareBookData).ins.getBookInfoByItemId(this.itemId);
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.show({
                  viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).RareBookInfoItemPop,
                  data: {
                    "bookInfo": info
                  }
                });
              }
            } else {
              error("itemId错误-----", this.itemId);
            }
          };
        }

        onLoad() {
          this.addTouchEvent();
        }

        addTouchEvent() {
          this.node.on(Node.EventType.TOUCH_END, this.onTouchItem, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7434b1e79d5d26d03c69e7529e52cbc3af732867.js.map
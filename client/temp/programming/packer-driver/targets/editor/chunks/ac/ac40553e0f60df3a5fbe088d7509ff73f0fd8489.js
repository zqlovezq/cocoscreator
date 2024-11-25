System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, ViewPop, RareBookData, LangMgr, RareBookItem, tab, RareBookGroupAttributeITitleItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, RareBookGroupPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "./RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookItem(extras) {
    _reporterNs.report("RareBookItem", "./RareBookItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookGroupAttributeITitleItem(extras) {
    _reporterNs.report("RareBookGroupAttributeITitleItem", "./RareBookGroupAttributeITitleItem", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      RareBookData = _unresolved_3.RareBookData;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }, function (_unresolved_5) {
      RareBookItem = _unresolved_5.RareBookItem;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      RareBookGroupAttributeITitleItem = _unresolved_7.RareBookGroupAttributeITitleItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "59e49FnX9tOj6DkfUIbhAbr", "RareBookGroupPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookGroupPop
       * zhudingchao
       * Mon May 27 2024 19:23:28 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookGroupPop.ts
       *
       */

      _export("RareBookGroupPop", RareBookGroupPop = (_dec = ccclass('RareBookGroupPop'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec(_class = (_class2 = class RareBookGroupPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nameLab", _descriptor, this);

          _initializerDefineProperty(this, "rarebookLayout", _descriptor2, this);

          _initializerDefineProperty(this, "attrNode", _descriptor3, this);

          _initializerDefineProperty(this, "rareBookItemPrefab", _descriptor4, this);

          _initializerDefineProperty(this, "titleItemPrefab", _descriptor5, this);

          this.currItemId = void 0;
        }

        register() {}

        onShow() {
          this.currItemId = this.openData["itemId"];

          if (this.currItemId) {
            this.initView();
          }
        }

        initView() {
          let stab = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getSerieTableByBookId(this.currItemId);

          if (stab) {
            let newgroupTabs = [];
            let groupTabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BookSeriesTable;

            for (let key in groupTabs) {
              if (groupTabs[key].GroupId == stab.GroupId) {
                newgroupTabs.push(groupTabs[key]);
              }
            }

            this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(stab.Name);
            let bookInfos = [];
            let starMap = new Map();

            for (let key in stab.BookId) {
              let info = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
                error: Error()
              }), RareBookData) : RareBookData).ins.getBookInfoByItemId(stab.BookId[key]);
              bookInfos.push(info);
              let item = instantiate(this.rareBookItemPrefab);
              item.parent = this.rarebookLayout;
              let com = item.getComponent(_crd && RareBookItem === void 0 ? (_reportPossibleCrUseOfRareBookItem({
                error: Error()
              }), RareBookItem) : RareBookItem);
              com.initData(info, false);

              if (info.isLock) {
                for (let k2 in newgroupTabs) {
                  let starlevel = newgroupTabs[k2].Level;

                  if (info.level >= starlevel) {
                    if (starMap.has(starlevel)) {
                      starMap.set(starlevel, starMap.get(starlevel) + 1);
                    } else {
                      starMap.set(starlevel, 1);
                    }
                  } // if(starMap.has(gr))

                }
              }
            } // this. groupTabs: tab.BookGroupTable[]


            let total = bookInfos.length;

            for (let key in newgroupTabs) {
              let level = groupTabs[key].Level;
              let num = starMap.has(level) ? starMap.get(level) : 0;
              let item = instantiate(this.titleItemPrefab);
              item.parent = this.attrNode;
              let com = item.getComponent(_crd && RareBookGroupAttributeITitleItem === void 0 ? (_reportPossibleCrUseOfRareBookGroupAttributeITitleItem({
                error: Error()
              }), RareBookGroupAttributeITitleItem) : RareBookGroupAttributeITitleItem);
              com.initData(newgroupTabs[key], num, total);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rarebookLayout", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "attrNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rareBookItemPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "titleItemPrefab", [_dec6], {
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
//# sourceMappingURL=ac40553e0f60df3a5fbe088d7509ff73f0fd8489.js.map
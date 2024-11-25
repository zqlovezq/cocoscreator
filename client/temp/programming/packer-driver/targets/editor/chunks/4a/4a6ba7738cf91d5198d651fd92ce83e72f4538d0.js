System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, Prefab, sp, LangMgr, RareBookData, RareBookItem, RareBookGroupAttributeITitleItem, UIMgr, ViewName, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, RareBookGroupItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "./RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookItem(extras) {
    _reporterNs.report("RareBookItem", "./RareBookItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookGroupAttributeITitleItem(extras) {
    _reporterNs.report("RareBookGroupAttributeITitleItem", "./RareBookGroupAttributeITitleItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "./RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
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
      sp = _cc.sp;
    }, function (_unresolved_2) {
      LangMgr = _unresolved_2.LangMgr;
    }, function (_unresolved_3) {
      RareBookData = _unresolved_3.RareBookData;
    }, function (_unresolved_4) {
      RareBookItem = _unresolved_4.RareBookItem;
    }, function (_unresolved_5) {
      RareBookGroupAttributeITitleItem = _unresolved_5.RareBookGroupAttributeITitleItem;
    }, function (_unresolved_6) {
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      ViewName = _unresolved_7.ViewName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67796K3wYJMTbotBBMyRXsH", "RareBookGroupItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Gradient', 'instantiate', 'Label', 'Node', 'Prefab', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookGroupItem
       * zhudingchao
       * Mon May 27 2024 16:34:29 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookGroupItem.ts
       *
       */

      _export("RareBookGroupItem", RareBookGroupItem = (_dec = ccclass('RareBookGroupItem'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(sp.Skeleton), _dec(_class = (_class2 = class RareBookGroupItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "rarebookLayout", _descriptor, this);

          _initializerDefineProperty(this, "rareBookItemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "titleItemPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "attributeNode", _descriptor4, this);

          _initializerDefineProperty(this, "nameLab", _descriptor5, this);

          _initializerDefineProperty(this, "redPoint", _descriptor6, this);

          _initializerDefineProperty(this, "animSp", _descriptor7, this);

          this.bookInfos = void 0;
          this.groupTabs = void 0;
          this.rareBookItems = void 0;
          this.attrItems = void 0;
          this.groupId = void 0;

          this.onTouchItem = info => {
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
          };
        }

        initData(groupTabs) {
          let table = groupTabs[0];
          this.groupId = table.GroupId;
          this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(table.Name);
          let bookInfos = [];
          this.rareBookItems = [];
          this.attrItems = []; // let starMap: Map<number, number> = new Map();

          for (let key in table.BookId) {
            let info = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getBookInfoByItemId(table.BookId[key]);
            bookInfos.push(info);
            let item = instantiate(this.rareBookItemPrefab);
            item.parent = this.rarebookLayout;
            let com = item.getComponent(_crd && RareBookItem === void 0 ? (_reportPossibleCrUseOfRareBookItem({
              error: Error()
            }), RareBookItem) : RareBookItem);
            com.initData(info, true, this.onTouchItem, false);
            this.rareBookItems.push(com);
          }

          this.bookInfos = bookInfos;
          this.groupTabs = groupTabs;
          let total = bookInfos.length;

          for (let key in groupTabs) {
            let info = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getSerieInfoById(groupTabs[key].Id);
            let num = info ? info.count : 0;
            let item = instantiate(this.titleItemPrefab);
            item.parent = this.attributeNode;
            let com = item.getComponent(_crd && RareBookGroupAttributeITitleItem === void 0 ? (_reportPossibleCrUseOfRareBookGroupAttributeITitleItem({
              error: Error()
            }), RareBookGroupAttributeITitleItem) : RareBookGroupAttributeITitleItem);
            com.initData(groupTabs[key], num, total);
            this.attrItems.push(com);
          }

          this.animSp.node.active = false;
          this.redPoint.active = false;
        }

        updateView() {
          for (let key in this.rareBookItems) {
            this.rareBookItems[key].updateView();
          }

          let total = this.rareBookItems.length;

          for (let key in this.groupTabs) {
            let info = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getSerieInfoById(this.groupTabs[key].Id);
            let num = info ? info.count : 0;
            let item = this.attrItems[key];
            item.updateView(num, total);
          }
        }

        playAnim() {
          this.animSp.node.active = true; // this.redPoint.active=true;

          this.animSp.setAnimation(0, "idle", false);
          this.animSp.setCompleteListener(trackEntry => {
            if (trackEntry.loop) {
              return;
            }

            this.animSp.node.active = false;
            this.redPoint.active = false;
          }); // this.scheduleOnce(()=>{
          // },1)
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rarebookLayout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rareBookItemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "titleItemPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "attributeNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "redPoint", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "animSp", [_dec8], {
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
//# sourceMappingURL=4a6ba7738cf91d5198d651fd92ce83e72f4538d0.js.map
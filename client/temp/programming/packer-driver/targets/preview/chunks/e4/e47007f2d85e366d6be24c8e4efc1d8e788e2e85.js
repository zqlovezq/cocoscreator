System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, Sprite, RareBookItem, RareBookData, LangMgr, tab, UIMgr, ViewName, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, RareBookEquipNode;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRareBookItem(extras) {
    _reporterNs.report("RareBookItem", "./RareBookItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "./RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "./RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      RareBookItem = _unresolved_2.RareBookItem;
    }, function (_unresolved_3) {
      RareBookData = _unresolved_3.RareBookData;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      ViewName = _unresolved_7.ViewName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9c643JswfdF6ZdtPLxZxtD/", "RareBookEquipNode", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookEquipNode
       * zhudingchao
       * Tue May 28 2024 19:44:51 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookEquipNode.ts
       *
       */

      _export("RareBookEquipNode", RareBookEquipNode = (_dec = ccclass('RareBookEquipNode'), _dec2 = property([_crd && RareBookItem === void 0 ? (_reportPossibleCrUseOfRareBookItem({
        error: Error()
      }), RareBookItem) : RareBookItem]), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Label), _dec(_class = (_class2 = class RareBookEquipNode extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bookItems", _descriptor, this);

          _initializerDefineProperty(this, "contentNode", _descriptor2, this);

          _initializerDefineProperty(this, "baseBookIcon", _descriptor3, this);

          _initializerDefineProperty(this, "baseVocationIcon", _descriptor4, this);

          _initializerDefineProperty(this, "baseBookName", _descriptor5, this);

          this.bookItemPrefab = void 0;
          this.currTag = 1;
          this.canBookItems = [];
          this.currTargetNode = void 0;

          this.onTouchItem = info => {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).RareBookEquipPop,
              data: {
                "bookInfo": info
              }
            });
          };
        }

        initView(prefb) {
          if (prefb === void 0) {
            prefb = null;
          }

          if (prefb) {
            this.bookItemPrefab = prefb;
          }

          var canList = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getCanBookInfosByHeroClass(this.currTag);
          var slots = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookSlotsByHeroClass(this.currTag);

          for (var key in slots) {
            var item = this.bookItems[key];

            if (slots[key].bookInfo) {
              item.initData(slots[key].bookInfo, true, this.onTouchItem, false);
            } else {
              if (!slots[key].isLock) {
                var tips = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getCombineString("ui_rarebook_2", [slots[key].bookSlotTable.UnlockArgs]);
                item.initLockView(tips);
              } else {
                item.initEmptyView();
              }
            }
          }

          for (var _key in this.canBookItems) {
            this.canBookItems[_key].node.active = false;
          }

          for (var _key2 in canList) {
            var _item = this.canBookItems[_key2];

            if (!_item) {
              var node = instantiate(this.bookItemPrefab);
              node.parent = this.contentNode;
              _item = node.getComponent(_crd && RareBookItem === void 0 ? (_reportPossibleCrUseOfRareBookItem({
                error: Error()
              }), RareBookItem) : RareBookItem);
              this.canBookItems.push(_item);
            }

            _item.node.active = true;

            _item.initData(canList[_key2], true, this.onTouchItem, false);
          }

          var baseInfo = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBaseBookInfoByHeroClass(this.currTag);
          this.baseBookName.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(baseInfo.itemTable.Name);
          this.baseBookIcon.setTexture(baseInfo.itemTable.Icon);
          var heroclass = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(this.currTag);
          this.baseVocationIcon.setTexture(heroclass.Icon);
        }

        onClickToggle(event, tag) {
          tag = Number(tag);

          if (this.currTag != tag) {
            this.currTag = tag;

            if (this.currTargetNode) {
              this.currTargetNode.getChildByName("redNode").active = true;
            }

            event.target.getChildByName("redNode").active = false;
            this.currTargetNode = event.target;
            this.initView(null);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bookItems", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "baseBookIcon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "baseVocationIcon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "baseBookName", [_dec6], {
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
//# sourceMappingURL=e47007f2d85e366d6be24c8e4efc1d8e788e2e85.js.map
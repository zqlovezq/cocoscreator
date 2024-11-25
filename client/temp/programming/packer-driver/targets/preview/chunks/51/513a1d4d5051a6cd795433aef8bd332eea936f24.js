System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Prefab, Node, HeroBagItem, InfiniteCell, HeroDataControl, EventMgr, LocalEvent, HeroData, HeroInfo, tab, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, HeroBagLayoutCell;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHeroBagItem(extras) {
    _reporterNs.report("HeroBagItem", "./HeroBagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "./HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../HeroInfo", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      HeroBagItem = _unresolved_2.HeroBagItem;
    }, function (_unresolved_3) {
      InfiniteCell = _unresolved_3.default;
    }, function (_unresolved_4) {
      HeroDataControl = _unresolved_4.HeroDataControl;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      LocalEvent = _unresolved_6.LocalEvent;
    }, function (_unresolved_7) {
      HeroData = _unresolved_7.HeroData;
    }, function (_unresolved_8) {
      HeroInfo = _unresolved_8.HeroInfo;
    }, function (_unresolved_9) {
      tab = _unresolved_9.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca152kJTRlDrZ2t1pO+rDYT", "HeroBagLayoutCell", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Prefab', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroBagLayoutCell", HeroBagLayoutCell = (_dec = ccclass('HeroBagLayoutCell'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = class HeroBagLayoutCell extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_cell_item", _descriptor, this);

          _initializerDefineProperty(this, "node_content", _descriptor2, this);
        }

        UpdateContent(data) {
          var _this = this;

          this.node_content.removeAllChildren();

          var _loop = function _loop() {
            var node = instantiate(_this.pfb_cell_item);
            node.parent = _this.node_content;
            var itemTs = node.getComponent(_crd && HeroBagItem === void 0 ? (_reportPossibleCrUseOfHeroBagItem({
              error: Error()
            }), HeroBagItem) : HeroBagItem);
            var id = data[i];
            var heroInfo = null;

            if (!(_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.bookId) {
              heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
                error: Error()
              }), HeroData) : HeroData).ins.getById(id);
            } else {
              heroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
                error: Error()
              }), HeroInfo) : HeroInfo)();
              var itemId = id;
              var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroTableById.getValue(itemId);
              heroInfo.itemId = itemId;
              heroInfo.id = 0;
              heroInfo.star = heroTab.DefaultStar;
            }

            itemTs.UpdateContent(heroInfo);
            itemTs.setTouchCallBack(() => {
              if (!(_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                error: Error()
              }), HeroDataControl) : HeroDataControl).ins.bookId) {
                if ((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                  error: Error()
                }), HeroDataControl) : HeroDataControl).ins.heroId !== id) {
                  (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                    error: Error()
                  }), HeroDataControl) : HeroDataControl).ins.refreshBagData(id);
                  (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                    error: Error()
                  }), LocalEvent) : LocalEvent).Hero_Change, false);
                }
              } else {
                if ((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                  error: Error()
                }), HeroDataControl) : HeroDataControl).ins.bookId !== id) {
                  (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                    error: Error()
                  }), HeroDataControl) : HeroDataControl).ins.refreshBookData(id);
                  (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                    error: Error()
                  }), LocalEvent) : LocalEvent).Hero_Change, false);
                }
              }
            });
          };

          for (var i = 0; i < data.length; i++) {
            _loop();
          }
        }

        updateBookCell(itemId) {
          var node = this.node_content.getChildByName(String(itemId));
          var itemTs = node.getComponent(_crd && HeroBagItem === void 0 ? (_reportPossibleCrUseOfHeroBagItem({
            error: Error()
          }), HeroBagItem) : HeroBagItem);
          var heroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
            error: Error()
          }), HeroInfo) : HeroInfo)();
          var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(itemId);
          heroInfo.itemId = itemId;
          heroInfo.id = 0;
          heroInfo.star = heroTab.DefaultStar;
          itemTs.UpdateContent(heroInfo);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_cell_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec3], {
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
//# sourceMappingURL=513a1d4d5051a6cd795433aef8bd332eea936f24.js.map
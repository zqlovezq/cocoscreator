System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Prefab, UITransform, InfiniteList, tab, HeroDataControl, HeroBagLayoutCell, HeroBookLayoutQuality, EventMgr, LocalEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, HeroBookView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "./HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroBagLayoutCell(extras) {
    _reporterNs.report("HeroBagLayoutCell", "./HeroBagLayoutCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroBookLayoutQuality(extras) {
    _reporterNs.report("HeroBookLayoutQuality", "./HeroBookLayoutQuality", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      InfiniteList = _unresolved_2.default;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      HeroDataControl = _unresolved_4.HeroDataControl;
    }, function (_unresolved_5) {
      HeroBagLayoutCell = _unresolved_5.HeroBagLayoutCell;
    }, function (_unresolved_6) {
      HeroBookLayoutQuality = _unresolved_6.HeroBookLayoutQuality;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }, function (_unresolved_8) {
      LocalEvent = _unresolved_8.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b4a02QhkzVHhqzK+UWN8MEx", "HeroBookView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'UITransform', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroBookView", HeroBookView = (_dec = ccclass('HeroBookView'), _dec2 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = (_class2 = class HeroBookView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "list_all_heros", _descriptor, this);

          _initializerDefineProperty(this, "pfb_hero_item", _descriptor2, this);

          _initializerDefineProperty(this, "pfb_hero_quality", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_cur_count", _descriptor4, this);

          _initializerDefineProperty(this, "lbl_totle_count", _descriptor5, this);

          this._lineHeroCount = 3;
          this._list = [];
          this._type = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Max;
          this._bookIndex = 0;
        }

        onLoad() {}

        showAllHeros(type, isInit) {
          this._bookIndex = 0;
          this._type = type;
          this._list = this.groupHeroList(type);
          this.getBookIndex();
          this.lbl_cur_count.string = String((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getBookActiveHeroCount());
          this.lbl_totle_count.string = String((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTable.length);

          if (isInit) {
            this.list_all_heros.Init({
              getCellNumber: this.getCellCount.bind(this),
              getCellSize: this.getCellHeight.bind(this),
              getCellIdentifer: this.getCellIdentifer.bind(this),
              getCellView: this.getCellView.bind(this),
              getCellData: this.GetCellData.bind(this)
            });
            this.list_all_heros.Reload(true);

            if (this._bookIndex >= 1) {
              var pos = this.list_all_heros.GetScrollPosOfCell(this._bookIndex);
              var maxY = this.list_all_heros.getContent().getComponent(UITransform).height - 435;
              var max_y = pos.y > maxY ? maxY : pos.y;
              this.list_all_heros.setContentPos(max_y, 0, max_y);
            }
          } else {
            this.list_all_heros.Refresh();
          }
        }

        getBookIndex() {
          for (var i = 0; i < this._list.length; i++) {
            var list = this._list[i];

            if (list.length > 0) {
              for (var k = 0; k < list.length; k++) {
                if (list[k] === (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                  error: Error()
                }), HeroDataControl) : HeroDataControl).ins.bookId) {
                  this._bookIndex = i;
                  return;
                }
              }
            }
          }
        }

        getCellCount() {
          return this._list.length;
        }

        getCellHeight(idx) {
          var data = this._list[idx];

          if (data.length) {
            return 185;
          } else {
            return 40;
          }
        }

        getCellIdentifer(idx) {
          var data = this._list[idx];

          if (data.length) {
            return "HeroBagLayoutCell";
          } else {
            return "HeroBookLayoutQuality";
          }
        }

        getCellView(idx, identifer) {
          var cell = null;

          switch (identifer) {
            case "HeroBagLayoutCell":
              cell = instantiate(this.pfb_hero_item).getComponent(_crd && HeroBagLayoutCell === void 0 ? (_reportPossibleCrUseOfHeroBagLayoutCell({
                error: Error()
              }), HeroBagLayoutCell) : HeroBagLayoutCell);
              break;

            case "HeroBookLayoutQuality":
              cell = instantiate(this.pfb_hero_quality).getComponent(_crd && HeroBookLayoutQuality === void 0 ? (_reportPossibleCrUseOfHeroBookLayoutQuality({
                error: Error()
              }), HeroBookLayoutQuality) : HeroBookLayoutQuality);
              break;

            default:
              break;
          }

          return cell;
        }

        GetCellData(idx) {
          return this._list[idx];
        }
        /* 将英雄数据分组 */


        groupHeroList(type) {
          var result = [];
          var bookList = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getBookHeroListByVocation(type, false);
          /* 将heroList 按照品质分类 */

          var bookHeroList = [[]];
          var quality = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroAptitude.HeroAptitude_SSR;
          var idx = 0;

          for (var i = 0; i < bookList.length; i++) {
            var itemId = bookList[i];
            var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroTableById.getValue(itemId);

            if (heroTab.Aptitude !== quality) {
              quality = heroTab.Aptitude;
              idx += 1;
              bookHeroList[idx] = [];
            }

            bookHeroList[idx].push(bookList[i]);
          }

          for (var k = 0; k < bookHeroList.length; k++) {
            var _itemId = bookHeroList[k][0];

            var _heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroTableById.getValue(_itemId);

            var _quality = _heroTab.Aptitude;
            result.push(_quality);

            for (var j = 0; j < bookHeroList[k].length; j += this._lineHeroCount) {
              result.push(bookHeroList[k].slice(j, j + this._lineHeroCount));
            }
          }

          return result;
        }
        /* 刷新列表中的元素 */


        refreshBookByItemId(itemId) {
          var bookList = this.groupHeroList(this._type);
          var index = 0;

          for (var i = 0; i < bookList.length; i++) {
            var data = bookList[i];

            if (data.length === 0) {
              continue;
            }

            for (var j = 0; j < data.length; j++) {
              var _itemId = data[j];

              if (_itemId === itemId) {
                index = i;
              }
            }
          }

          var layout = this.list_all_heros.findCellOfIdx(index);
          var ts = layout.getComponent(_crd && HeroBagLayoutCell === void 0 ? (_reportPossibleCrUseOfHeroBagLayoutCell({
            error: Error()
          }), HeroBagLayoutCell) : HeroBagLayoutCell);
          ts.updateBookCell(itemId);
          this.lbl_cur_count.string = String((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getBookActiveHeroCount());
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.refreshBookData(itemId);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Hero_Change, false);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "list_all_heros", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_hero_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pfb_hero_quality", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_cur_count", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_totle_count", [_dec6], {
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
//# sourceMappingURL=86c7bc4465d8888e7d031d42098bfc17a98a2512.js.map
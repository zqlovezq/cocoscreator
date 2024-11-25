System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Toggle, HeroInfo, HeroData, HeroItem, EventMgr, LocalEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, HeroAutoAscendPopItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../../item/HeroItem", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      HeroInfo = _unresolved_2.HeroInfo;
    }, function (_unresolved_3) {
      HeroData = _unresolved_3.HeroData;
    }, function (_unresolved_4) {
      HeroItem = _unresolved_4.HeroItem;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      LocalEvent = _unresolved_6.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "545a6eTLwJHhZ2+WnhfZ/ku", "HeroAutoAscendPopItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'log', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroAutoAscendPopItem", HeroAutoAscendPopItem = (_dec = ccclass('HeroAutoAscendPopItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Toggle), _dec(_class = (_class2 = class HeroAutoAscendPopItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_next", _descriptor, this);

          _initializerDefineProperty(this, "node_need", _descriptor2, this);

          _initializerDefineProperty(this, "node_material", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_material_count", _descriptor4, this);

          _initializerDefineProperty(this, "toggle_select", _descriptor5, this);

          this._isCheck = true;
          this._heroId = 0;
        }

        initData(materialArr, heroId) {
          this._isCheck = true;
          this.toggle_select.isChecked = true;
          /* 初始化要升星的heroid */

          this._heroId = heroId;
          var heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(heroId);
          var materialHeroInfo = materialArr[0];
          var nextHeroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
            error: Error()
          }), HeroInfo) : HeroInfo)();
          nextHeroInfo.itemId = heroInfo.itemId;
          nextHeroInfo.id = 0;
          nextHeroInfo.level = heroInfo.getHeroLevel();
          nextHeroInfo.star = heroInfo.star + 1;
          var lv = heroInfo.getHeroLevel();
          this.lbl_material_count.string = "x" + materialArr.length;
          this.createItem(heroInfo, this.node_need);
          this.createItem(materialHeroInfo, this.node_material, 0);
          this.createItem(nextHeroInfo, this.node_next, lv);
        }

        createItem(heroInfo, node, lv) {
          var item = node.children[0];
          var ts = item.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
            error: Error()
          }), HeroItem) : HeroItem);
          ts.UpdateContent(heroInfo);
          ts.setSelect(false);
          ts.setLevel(0);
        }

        clickSelect() {
          this._isCheck = !this._isCheck;
          this.toggle_select.isChecked = this._isCheck;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Delete_Star_Up_Hero, this._heroId, !this._isCheck);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_next", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_need", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_material", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_material_count", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "toggle_select", [_dec6], {
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
//# sourceMappingURL=6deac0e94b12ae655349fecbf1d3932136379f25.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, ScrollView, tween, Vec3, ViewPop, tab, CongratulationItem, EventMgr, LocalEvent, GuideController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CongratulationPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCongratulationItem(extras) {
    _reporterNs.report("CongratulationItem", "./CongratulationItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../../guide/GuideController", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      CongratulationItem = _unresolved_4.CongratulationItem;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      LocalEvent = _unresolved_6.LocalEvent;
    }, function (_unresolved_7) {
      GuideController = _unresolved_7.GuideController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46462zWZzFIeKPVDsZw7QNC", "CongratulationPop", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Node', 'Prefab', 'ScrollView', 'tween', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CongratulationPop", CongratulationPop = (_dec = ccclass('CongratulationPop'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(ScrollView), _dec(_class = (_class2 = class CongratulationPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "node_content", _descriptor, this);

          /*  */
          _initializerDefineProperty(this, "pfb_item", _descriptor2, this);

          _initializerDefineProperty(this, "scroll_view", _descriptor3, this);

          this.mClosedCallBack = null;
          this._awardrMap = new Map();
          this._rewards = [];
          this._list = [];
          this._lineHeroCount = 6;
          this._itemCount = 0;
        }

        register() {}

        onShow() {
          this._rewards = [];

          for (let i = 0; i < this.openData.length; i++) {
            if (this.openData[i].itemId && this.openData[i].num) {
              this._rewards.push(this.openData[i]);
            }
          }

          this._rewards.sort((item1, item2) => {
            let itemTab1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(item1.itemId);
            let itemTab2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(item2.itemId);
            return itemTab2.Sort - itemTab1.Sort;
          });

          this._list = this.getRewardList();

          if (this._list.length > 2) {
            this.node_content.setPosition(new Vec3(0, this.node_content.getPosition().y + 75, 0));
          }

          this.initData();
        }

        async initData() {
          this._awardrMap.clear();

          this.node_content.destroyAllChildren();
          const num = this._list.length;
          this._itemCount = 0;
          this.createItem(this._itemCount);

          if (num > 1) {
            this.schedule(this.popAnim, 1.5, num - 2);
          }
        }

        popAnim() {
          this._itemCount++;
          const posY = this.node_content.getPosition().y;
          tween(this.node_content).to(0.5, {
            position: new Vec3(this.node_content.getPosition().x, posY + 150, 0)
          }).start();
          this.createItem(this._itemCount);
        }

        createItem(count) {
          const item = instantiate(this.pfb_item);
          item.parent = this.node_content;
          const itemTs = item.getComponent(_crd && CongratulationItem === void 0 ? (_reportPossibleCrUseOfCongratulationItem({
            error: Error()
          }), CongratulationItem) : CongratulationItem);
          itemTs.setData(this._list[count]);
        }

        setCloseCallBack(closeFunc) {
          this.mClosedCallBack = closeFunc;
        }

        onDisable() {
          this.unschedule(this.popAnim);
        }

        onDestroy() {
          super.onDestroy();

          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).hidePop);
          }

          if (this.mClosedCallBack && typeof this.mClosedCallBack == 'function') {
            this.mClosedCallBack();
            this.mClosedCallBack = null;
          }
        }
        /* 将数据6个分组 */


        getRewardList() {
          const result = [];

          for (let i = 0; i < this._rewards.length; i += this._lineHeroCount) {
            result.push(this._rewards.slice(i, i + this._lineHeroCount));
          }

          return result;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scroll_view", [_dec4], {
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
//# sourceMappingURL=ae59a452eb4c2678d08f0f89932eab377cf5ba7e.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "client_protocol", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Layout, Node, Prefab, ScrollView, ViewPop, tab, HeroRecommendPopItem, LocalEvent, EventMgr, HeroDataControl, proto, UIMgr, ViewName, RedMgr, RedDotType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, HeroRecommendPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroRecommendPopItem(extras) {
    _reporterNs.report("HeroRecommendPopItem", "./HeroRecommendPopItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "./HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
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
      Layout = _cc.Layout;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      HeroRecommendPopItem = _unresolved_4.HeroRecommendPopItem;
    }, function (_unresolved_5) {
      LocalEvent = _unresolved_5.LocalEvent;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_unresolved_7) {
      HeroDataControl = _unresolved_7.HeroDataControl;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_8) {
      UIMgr = _unresolved_8.UIMgr;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      RedMgr = _unresolved_10.RedMgr;
    }, function (_unresolved_11) {
      RedDotType = _unresolved_11.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf237UGTC5I1I1/8H3VnCHK", "HeroRecommendPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Layout', 'Node', 'Prefab', 'ScrollView', 'Socket']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroRecommendPop", HeroRecommendPop = (_dec = ccclass('HeroRecommendPop'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(ScrollView), _dec(_class = (_class2 = class HeroRecommendPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          // @property(InfiniteList)
          // list_view: InfiniteList = null;
          _initializerDefineProperty(this, "pfb_recommend_item", _descriptor, this);

          _initializerDefineProperty(this, "node_content", _descriptor2, this);

          _initializerDefineProperty(this, "scroll_view", _descriptor3, this);

          this._recommendTableData = [];
        }

        register() {
          /* 当点击阵容推荐里面的英雄 */
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Click_Recommend_Hero, this.onClose, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveRecommendTeamRewardRsp, this.on_s2c_ReceiveRecommendTeamRewardRsp, this);
        }

        on_s2c_ReceiveRecommendTeamRewardRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          var rewards = msg.rewards; // 展示奖励

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: rewards
          });
          var map = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getRecommendTeamIds();
          map.set(msg.recommendTeamId, true);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroRecommend);
          this.setView();
        }

        onShow() {
          this.setView();
        }
        /* 领取奖励之后刷新界面 */


        setView() {
          this._recommendTableData = this.getListData();

          for (var i = 0; i < this._recommendTableData.length; i++) {
            var data = this._recommendTableData[i];
            var item = null;

            if (this.node_content.children[i]) {
              item = this.node_content.children[i];
            } else {
              item = instantiate(this.pfb_recommend_item);
              this.node_content.addChild(item);
            }

            var ts = item.getComponent(_crd && HeroRecommendPopItem === void 0 ? (_reportPossibleCrUseOfHeroRecommendPopItem({
              error: Error()
            }), HeroRecommendPopItem) : HeroRecommendPopItem);
            ts.UpdateContent({
              tabData: data,
              scrollView: this.scroll_view
            });
          }

          this.node_content.getComponent(Layout).updateLayout();
        }

        onDestroy() {
          super.onDestroy();
        }

        getListData() {
          var arr1 = [];
          var arr2 = [];
          var map = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getRecommendTeamIds();

          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RecommendTeamTable.length; i++) {
            var _tab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().RecommendTeamTable[i];

            if (map.get(_tab.Id)) {
              arr2.push(_tab);
            } else {
              arr1.push(_tab);
            }

            _tab["extend"] = 0;
          }

          return arr1.concat(arr2);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_recommend_item", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scroll_view", [_dec4], {
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
//# sourceMappingURL=d56a0fe4748500dc9b15a28606e9e53c7f95ae7b.js.map
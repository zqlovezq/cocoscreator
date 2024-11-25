System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "client_protocol", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, ViewPop, tab, HeroDataControl, PaintingHeroItem, EventMgr, proto, UIMgr, ViewName, RedMgr, RedDotType, HeroTeamControl, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, PaintingView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPaintingHeroItem(extras) {
    _reporterNs.report("PaintingHeroItem", "./PaintingHeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../hero/HeroTeamControl", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      HeroDataControl = _unresolved_4.HeroDataControl;
    }, function (_unresolved_5) {
      PaintingHeroItem = _unresolved_5.PaintingHeroItem;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_7) {
      UIMgr = _unresolved_7.UIMgr;
    }, function (_unresolved_8) {
      ViewName = _unresolved_8.ViewName;
    }, function (_unresolved_9) {
      RedMgr = _unresolved_9.RedMgr;
    }, function (_unresolved_10) {
      RedDotType = _unresolved_10.RedDotType;
    }, function (_unresolved_11) {
      HeroTeamControl = _unresolved_11.HeroTeamControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56643Oh30xEH4ez4+7zraH/", "PaintingView", undefined);
      /*
       * @Date: 2024-05-24 10:51:28
       * @Func:绘卷界面
       * @LastEditors: wzq
       * @LastEditTime: 2024-08-05 18:52:22
       * @Data Structure 只有SR跟SRR的会有绘卷功能
       */


      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PaintingView", PaintingView = (_dec = ccclass('PaintingView'), _dec2 = property(Node), _dec3 = property(Prefab), _dec(_class = (_class2 = class PaintingView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "node_content", _descriptor, this);

          _initializerDefineProperty(this, "pfb_item", _descriptor2, this);

          this._heroClass = null;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpgradeScrollPaintingStarRsp, this.on_s2c_UpgradeScrollPaintingStarRsp, this);
        }

        on_s2c_UpgradeScrollPaintingStarRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.paintingActive.set(msg.heroItemId, msg.star);

          if (msg.star > 5) {
            const addAttr = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getPaintingAttrGap(msg.heroItemId, msg.star);
            (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.addPaintingAttr(msg.heroItemId, msg.star, addAttr);
          } else {
            (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.addPaintingAttr(msg.heroItemId, msg.star);
          }

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroPainting);
          let firstActive = msg.star === 5;

          if (firstActive) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).PaintingLvupPop);
          }

          this.refreshListByVocation(this._heroClass, firstActive, msg.heroItemId);
        }

        onShow() {
          // 上来默认是猎手
          this._heroClass = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Assassin;
          this.refreshListByVocation(this._heroClass);
        }

        refreshListByVocation(heroClass, isActive, heroId) {
          let list = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getPaintingListByVocation(heroClass);

          for (let i = 0; i < list.length; i++) {
            const itemId = list[i];
            let item = this.node_content.children[i];

            if (!item) {
              item = instantiate(this.pfb_item);
              item.parent = this.node_content;
            }

            item.active = true;
            const itemTs = item.getComponent(_crd && PaintingHeroItem === void 0 ? (_reportPossibleCrUseOfPaintingHeroItem({
              error: Error()
            }), PaintingHeroItem) : PaintingHeroItem);

            if (isActive && heroId === itemId) {
              itemTs.initData(itemId, isActive);
            } else {
              itemTs.initData(itemId);
            }
          }

          if (this.node_content.children.length > list.length) {
            for (let j = list.length; j < this.node_content.children.length; j++) {
              let node = this.node_content.children[j];
              node.active = false;
            }
          }
        } // 点击切换页签


        clickChangeList(event, type) {
          this._heroClass = Number(type);
          this.refreshListByVocation(this._heroClass);
        } // 点击获取绘卷属性


        clickGetPaintingAttr() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).PaintingAttributePop
          });
        }

        onDestroy() {
          super.onDestroy();
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=de65dc6643320c767cd4dd1292bf93920a33c467.js.map
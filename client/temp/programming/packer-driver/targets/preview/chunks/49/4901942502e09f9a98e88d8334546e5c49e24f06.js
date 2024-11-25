System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, RichText, sp, ViewPop, proto, Net, tab, ItemData, ShowItemNotEnoughTips, UIMgr, ViewName, LangMgr, OpenFunctionMgr, RecruitType, EventMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, RecruitGuaranteePop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecruitType(extras) {
    _reporterNs.report("RecruitType", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      RichText = _cc.RichText;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      Net = _unresolved_3.Net;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      ItemData = _unresolved_5.ItemData;
    }, function (_unresolved_6) {
      ShowItemNotEnoughTips = _unresolved_6.ShowItemNotEnoughTips;
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      ViewName = _unresolved_7.ViewName;
    }, function (_unresolved_8) {
      LangMgr = _unresolved_8.LangMgr;
    }, function (_unresolved_9) {
      OpenFunctionMgr = _unresolved_9.OpenFunctionMgr;
    }, function (_unresolved_10) {
      RecruitType = _unresolved_10.RecruitType;
    }, function (_unresolved_11) {
      EventMgr = _unresolved_11.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb1dcEH241CAa0Op8gioIwr", "RecruitGuaranteePop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Label', 'Node', 'RichText', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RecruitGuaranteePop", RecruitGuaranteePop = (_dec = ccclass('RecruitGuaranteePop'), _dec2 = property(Label), _dec3 = property(RichText), _dec4 = property(sp.Skeleton), _dec(_class = (_class2 = class RecruitGuaranteePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbl_cur_count", _descriptor, this);

          _initializerDefineProperty(this, "rich_txt_recruit", _descriptor2, this);

          _initializerDefineProperty(this, "spine_draw", _descriptor3, this);

          this.gachaData = null;
        }

        onShow() {
          var self = this; // 当前的gacha数据为

          this.gachaData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GachaTableById.getValue(100); // 需要消耗的数量

          var needCount = this.gachaData.ItemCount; // 当前道具数量

          var curCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(51);
          this.lbl_cur_count.string = curCount + "/" + needCount; // 解锁条件

          var openTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().OpenFunctionTableByName.getValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_GachaHeroSSR);
          this.rich_txt_recruit.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_recruit_3", [needCount]);
          this.schedule(this.randomAction, 2);
        }

        on_s2c_GachaRsp() {
          var needCount = this.gachaData.ItemCount; // 当前道具数量

          var curCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(51);
          this.lbl_cur_count.string = curCount + "/" + needCount;
        }

        randomAction() {
          var spineAction = this.getRandomValue();
          this.spine_draw.setAnimation(0, spineAction, false);
        }

        getRandomValue() {
          var randomNumber = Math.random(); // 生成一个 [0, 1) 之间的随机数

          if (randomNumber < 0.5) {
            return "idle"; // 50%的概率返回1
          } else {
            return "xuanzhuan"; // 50%的概率返回2
          }
        }

        onDisable() {
          this.unschedule(this.randomAction);
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GachaRsp, this.on_s2c_GachaRsp, this);
        }

        unRegister() {
          super.unRegister();
        }
        /* 点击招募 */


        clickGacha() {
          // 是否解锁
          var isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_GachaHeroSSR);

          if (!isOpen) {
            (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.showFunctionTips((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_GachaHeroSSR);
            return;
          } // 先判断是否道具足够


          var needCount = this.gachaData.ItemCount;
          var curCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(51);

          if (curCount < needCount) {
            // 道具不足
            (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
              error: Error()
            }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(51);
            return;
          }

          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GachaReq();
          msg.id = this.gachaData.Id;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GachaReq, msg);
        }
        /* 显示概率公示界面 */


        showGachaProbabilityView(event, type) {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RecruitMustProbabilityPop,
            data: {
              type: (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
                error: Error()
              }), RecruitType) : RecruitType).SeniorGuarantee,
              recruit: 100
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_cur_count", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rich_txt_recruit", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spine_draw", [_dec4], {
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
//# sourceMappingURL=4901942502e09f9a98e88d8334546e5c49e24f06.js.map
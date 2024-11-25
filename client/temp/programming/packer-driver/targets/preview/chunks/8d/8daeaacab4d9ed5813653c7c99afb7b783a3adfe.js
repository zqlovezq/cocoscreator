System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, ProgressBar, Sprite, ViewPop, ActivityData, tab, LangMgr, PayControl, ShowTips, ChannelMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, CrazyChickenPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayControl(extras) {
    _reporterNs.report("PayControl", "../../pay/PayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../../channel/ChannelMgr", _context.meta, extras);
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
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ActivityData = _unresolved_3.ActivityData;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      LangMgr = _unresolved_5.LangMgr;
    }, function (_unresolved_6) {
      PayControl = _unresolved_6.PayControl;
    }, function (_unresolved_7) {
      ShowTips = _unresolved_7.ShowTips;
    }, function (_unresolved_8) {
      ChannelMgr = _unresolved_8.ChannelMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7d6a1isFetFkZ74mh+QhN6j", "CrazyChickenPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ProgressBar', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * CrazyChickenPop
       * zhudingchao
       * Wed Jun 19 2024 16:38:41 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/activity/crazyChicken/CrazyChickenPop.ts
       *
       */

      _export("CrazyChickenPop", CrazyChickenPop = (_dec = ccclass('CrazyChickenPop'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Sprite), _dec(_class = (_class2 = class CrazyChickenPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "proBar", _descriptor, this);

          _initializerDefineProperty(this, "proLab", _descriptor2, this);

          _initializerDefineProperty(this, "leftNumLab", _descriptor3, this);

          _initializerDefineProperty(this, "rightNumLab", _descriptor4, this);

          _initializerDefineProperty(this, "priceLab", _descriptor5, this);

          _initializerDefineProperty(this, "buyBtnSpr", _descriptor6, this);

          this.rechargeId = 0;
          this.isCanBuy = false;
        }

        register() {}

        onShow() {
          this.initView();
        }

        initView() {
          var msg = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.breakEggMsg;
          var table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BreakEggTableById.getValue(msg.id);
          this.rightNumLab.string = table.MaxScore + "";
          this.leftNumLab.string = "0";

          if (msg.score >= table.MaxScore) {
            this.proBar.progress = 1;
            this.isCanBuy = true;
            this.proLab.string = table.MaxScore + "";
          } else {
            this.proBar.progress = msg.score / table.MaxScore;
            this.proLab.string = msg.score + "";
            this.isCanBuy = false;
          }

          this.buyBtnSpr.grayscale = !this.isCanBuy;
          var rechargeTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RechargeTableById.getValue(table.RechargeId);
          this.priceLab.string = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).getSdkRechargeShowPrice(rechargeTable); //LangMgr.getCombineString("ui_commondesc_73",[rechargeTable.Price]);

          this.rechargeId = table.RechargeId;
        }

        onClickBuy() {
          if (!this.isCanBuy) {
            //ShowTips("进度不足，进度满后可正常购买")
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_crazychicken_1"));
            return;
          }

          if (this.rechargeId > 0) {
            (_crd && PayControl === void 0 ? (_reportPossibleCrUseOfPayControl({
              error: Error()
            }), PayControl) : PayControl).ins.requestPay(this.rechargeId, () => {
              this.onClose();
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "proBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "proLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "leftNumLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rightNumLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "priceLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "buyBtnSpr", [_dec7], {
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
//# sourceMappingURL=8daeaacab4d9ed5813653c7c99afb7b783a3adfe.js.map
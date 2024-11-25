System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, ViewPop, tab, RoleData, ItemData, RoleControl, ShowTips, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, EnergyAccumulatePop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleControl(extras) {
    _reporterNs.report("RoleControl", "../role/RoleControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      RoleData = _unresolved_4.RoleData;
    }, function (_unresolved_5) {
      ItemData = _unresolved_5.ItemData;
    }, function (_unresolved_6) {
      RoleControl = _unresolved_6.RoleControl;
    }, function (_unresolved_7) {
      ShowTips = _unresolved_7.ShowTips;
    }, function (_unresolved_8) {
      LangMgr = _unresolved_8.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe97bloQvhDCJs1FDKR5pJp", "EnergyAccumulatePop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * EnergyAccumulatePop
       * zhudingchao
       * Wed Jun 19 2024 10:47:39 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/common/EnergyAccumulatePop.ts
       *
       */

      _export("EnergyAccumulatePop", EnergyAccumulatePop = (_dec = ccclass('EnergyAccumulatePop'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Sprite), _dec(_class = (_class2 = class EnergyAccumulatePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "contentNode", _descriptor, this);

          _initializerDefineProperty(this, "lastTimeLab", _descriptor2, this);

          _initializerDefineProperty(this, "numLab", _descriptor3, this);

          _initializerDefineProperty(this, "costSpr", _descriptor4, this);

          _initializerDefineProperty(this, "costLab", _descriptor5, this);

          _initializerDefineProperty(this, "buyNumLab", _descriptor6, this);

          _initializerDefineProperty(this, "iconSpr", _descriptor7, this);

          this.currLastNum = 0;
          this.currBuyNum = void 0;
          this.table = void 0;
        }

        register() {}

        onShow() {
          // if (this.openData && this.openData["worldPos"]) {
          //     this.contentNode.setWorldPosition(this.openData["worldPos"]);
          // }
          this.initView();
        }

        initView() {
          this.currBuyNum = Number(this.numLab.string);
          let table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BuyStaminaTableByType.getValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BuyStaminaType.BuyStaminaType_BuyMissStamina);

          if (table) {
            let total = table.MaxCount;
            let currNum = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.staminaInfo.remainBuyTimesMap[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BuyStaminaType.BuyStaminaType_BuyMissStamina];

            if (currNum > total) {
              currNum = total;
            }

            this.currLastNum = currNum;
            this.lastTimeLab.string = currNum + "/" + total;
            let costItem = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(table.CostItemId);
            this.costSpr.setTexture(costItem.Icon);
            this.costLab.string = table.CostItemNum * this.currBuyNum + "";
            this.buyNumLab.string = table.GetItemNum[0] * this.currBuyNum + "";
            this.table = table; // this.iconSpr.setTexture(table.ShowIcon);
          }
        }

        updateNum() {
          this.numLab.string = this.currBuyNum + "";
          this.costLab.string = this.table.CostItemNum * this.currBuyNum + "";
          this.buyNumLab.string = this.table.GetItemNum[0] * this.currBuyNum + "";
        }

        onClickMinusBtn() {
          if (this.currBuyNum > 1) {
            this.currBuyNum--;
            this.updateNum();
          }
        }

        onClickPlusBtn() {
          if (this.currBuyNum < this.currLastNum) {
            this.currBuyNum++;
            this.updateNum();
          }
        }

        onClickMaxBtn() {
          if (this.currLastNum <= 0) {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_stamina_1"));
            return;
          }

          if (this.currBuyNum != this.currLastNum) {
            this.currBuyNum = this.currLastNum;
            this.updateNum();
          }
        }

        onClickBuyBtn() {
          if (this.currLastNum <= 0) {
            //ShowTips("没有购买次数");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_stamina_1"));
            return;
          }

          let id = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.isItemsEnoughByList([this.table.CostItemId], [this.table.CostItemNum * this.currBuyNum]);

          if (id <= 0) {
            (_crd && RoleControl === void 0 ? (_reportPossibleCrUseOfRoleControl({
              error: Error()
            }), RoleControl) : RoleControl).ins.requestBuyStamina((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BuyStaminaType.BuyStaminaType_BuyMissStamina, this.currBuyNum);
            this.onClose();
          } else {
            let itemtab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(id); //ShowTips(LangMgr.getLab(itemtab.Name) + "不足");

            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("Tips_itemshortage", [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(itemtab.Name)]));
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lastTimeLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "numLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "costSpr", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "costLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "buyNumLab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconSpr", [_dec8], {
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
//# sourceMappingURL=04cb7e378d6a2c5c3e675728773cba25c1d2aa6f.js.map
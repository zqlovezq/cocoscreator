System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "client_protocol", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, ViewPop, ItemInfo, RareBookData, tab, ItemPoolMgr, ShowTips, UIMgr, RareBookControl, EventMgr, proto, ViewName, CommonItem, LangMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RareBookExchangePop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "./RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookControl(extras) {
    _reporterNs.report("RareBookControl", "./RareBookControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../item/CommonItem", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ItemInfo = _unresolved_3.ItemInfo;
    }, function (_unresolved_4) {
      RareBookData = _unresolved_4.RareBookData;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      ItemPoolMgr = _unresolved_6.ItemPoolMgr;
    }, function (_unresolved_7) {
      ShowTips = _unresolved_7.ShowTips;
      UIMgr = _unresolved_7.UIMgr;
    }, function (_unresolved_8) {
      RareBookControl = _unresolved_8.RareBookControl;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_10) {
      ViewName = _unresolved_10.ViewName;
    }, function (_unresolved_11) {
      CommonItem = _unresolved_11.CommonItem;
    }, function (_unresolved_12) {
      LangMgr = _unresolved_12.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3de4deVXqJDq4GUufm7FvD9", "RareBookExchangePop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookExchangePop
       * zhudingchao
       * Tue May 28 2024 10:49:45 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookExchangePop.ts
       *
       */

      _export("RareBookExchangePop", RareBookExchangePop = (_dec = ccclass('RareBookExchangePop'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class RareBookExchangePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "exchangeNode", _descriptor, this);

          _initializerDefineProperty(this, "rewardNode", _descriptor2, this);

          this.canExchangItems = void 0;
          this.itemNodes = void 0;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BookFragmentSwitchRsp, this.on_s2c_BookFragmentSwitchRsp, this);
        }

        onShow() {
          this.canExchangItems = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getExchangBookFragments();
          this.itemNodes = [];
          this.initView();
        }

        initView() {
          let rewards = [];

          for (let key in this.canExchangItems) {
            let item = this.canExchangItems[key];
            let bookfraTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BookFragmentTableById.getValue(item.itemId);
            let rwdIds = bookfraTab.MaterialIdList;
            let t = Math.floor(item.num / bookfraTab.BaseAmount);

            if (t >= 1) {
              for (let k in rwdIds) {
                let num = bookfraTab.MaterialCountList[k] * t;
                let info = rewards.find(a => a.itemId == rwdIds[k]);

                if (info) {
                  info.num = info.num + num;
                } else {
                  info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                    error: Error()
                  }), ItemInfo) : ItemInfo)();
                  info.initItemData(rwdIds[k], num);
                  rewards.push(info);
                }
              }

              let itemNode = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(item, this.exchangeNode);
              this.itemNodes.push(itemNode);
              itemNode.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
                error: Error()
              }), CommonItem) : CommonItem).setShowNum(t * bookfraTab.BaseAmount);
            }
          }

          for (let key in rewards) {
            let itemNode = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(rewards[key], this.rewardNode);
            this.itemNodes.push(itemNode);
          }
        }

        exchangeSucc() {
          this.removeItem();
        }

        removeItem() {
          for (let key in this.itemNodes) {
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.putCommonItem(this.itemNodes[key]);
          }

          this.itemNodes = [];
        }

        onDisable() {
          this.removeItem();
        }

        onDestroy() {
          super.onDestroy();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);
        }

        onClickConfirm() {
          if (this.itemNodes.length == 0) {
            //ShowTips("没有可兑换的残卷");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_rarebook_2"));
          } else {
            (_crd && RareBookControl === void 0 ? (_reportPossibleCrUseOfRareBookControl({
              error: Error()
            }), RareBookControl) : RareBookControl).ins.requestBookFragmentSwitch();
          }
        }

        on_s2c_BookFragmentSwitchRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.exchangeSucc();
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            }); // RareBookData.ins.updateBook(msg.book as proto.BookData)
          }
        }

        onClickHelp() {//ShowTips("通用提示界面")
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "exchangeNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rewardNode", [_dec3], {
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
//# sourceMappingURL=cf7c8b0d42cdd1d3919f48061d4c7463d993481f.js.map
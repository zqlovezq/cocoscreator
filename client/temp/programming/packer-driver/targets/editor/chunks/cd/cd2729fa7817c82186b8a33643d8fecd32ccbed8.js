System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "client_protocol", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, ViewPop, tab, EventMgr, proto, UIMgr, ViewName, OpenFunctionMgr, HandbookItem, RedMgr, RedDotType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, statusPriority, HandbookPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
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

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHandbookItem(extras) {
    _reporterNs.report("HandbookItem", "./HandbookItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
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
      EventMgr = _unresolved_4.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_5) {
      UIMgr = _unresolved_5.UIMgr;
    }, function (_unresolved_6) {
      ViewName = _unresolved_6.ViewName;
    }, function (_unresolved_7) {
      OpenFunctionMgr = _unresolved_7.OpenFunctionMgr;
    }, function (_unresolved_8) {
      HandbookItem = _unresolved_8.HandbookItem;
    }, function (_unresolved_9) {
      RedMgr = _unresolved_9.RedMgr;
    }, function (_unresolved_10) {
      RedDotType = _unresolved_10.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c2b5XG4hpGmKq8yePmmLL/", "HandbookPop", undefined);
      /*
       * @Date: 2024-06-11 09:37:28
       * @LastEditors: wzq
       * @program:江湖指南
       * @LastEditTime: 2024-07-24 10:46:09
       */


      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);
      statusPriority = {
        '可领取': 1,
        '未开启': 2,
        '开发中': 3,
        '已领取': 4,
        'NONE': 5
      };

      _export("HandbookPop", HandbookPop = (_dec = ccclass('HandbookPop'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = class HandbookPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pfb_item", _descriptor, this);

          _initializerDefineProperty(this, "node_content", _descriptor2, this);
        }

        onShow() {
          this.node_content.destroyAllChildren();
          const tabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().OpenFunctionTable;
          const showTabs = [];

          for (let i = 0; i < tabs.length; i++) {
            const openTab = tabs[i];

            if (openTab.ShowType === 0) {
              continue;
            }

            showTabs.push(openTab);
          }

          const newList = this.sortList(showTabs);
          console.log(newList);

          for (let k = 0; k < newList.length; k++) {
            const openTab = newList[k];
            const item = instantiate(this.pfb_item);
            item.parent = this.node_content;
            const itemTs = item.getComponent(_crd && HandbookItem === void 0 ? (_reportPossibleCrUseOfHandbookItem({
              error: Error()
            }), HandbookItem) : HandbookItem);
            itemTs.initData(openTab);
          }
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {
          // 获取奖励刷新列表
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveOpenFunctionRewardRsp, this.on_s2c_ReceiveOpenFunctionRewardRsp, this);
        }

        unRegister() {
          super.unRegister();
        }

        on_s2c_ReceiveOpenFunctionRewardRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: msg.rewards
          });
          (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.changeOpenFunctionDataByName(msg.name);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Hand_book);
          this.onShow();
        } // 列表排序规则 可领取 未开启 开发中 已领取


        sortList(list) {
          for (let i = 0; i < list.length; i++) {
            let listItem = list[i];
            const funcData = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.getOpenFunctionData(listItem.Name);

            if (!funcData.isReceivedRewards && funcData.isOpen && listItem.ShowType === 1) {
              listItem["status"] = "可领取";
              continue;
            }

            if (!funcData.isOpen && listItem.ShowType === 1) {
              listItem["status"] = "未开启";
              continue;
            }

            if (listItem.ShowType === 2) {
              listItem["status"] = "开发中";
              continue;
            }

            if (funcData.isReceivedRewards) {
              listItem["status"] = "已领取";
              continue;
            }

            listItem["status"] = "NONE";
          }

          list.sort((a, b) => {
            return statusPriority[a['status']] - statusPriority[b['status']];
          });
          return list;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec3], {
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
//# sourceMappingURL=cd2729fa7817c82186b8a33643d8fecd32ccbed8.js.map
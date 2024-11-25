System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "client_protocol", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, error, instantiate, Node, Prefab, Toggle, ViewPop, BattlePassDataMgr, tab, LoadResAsync, BattlePassItem, EventMgr, proto, TaskData, RedMgr, RedDotType, Net, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, BattlePassView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattlePassDataMgr(extras) {
    _reporterNs.report("BattlePassDataMgr", "./BattlePassDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResAsync(extras) {
    _reporterNs.report("LoadResAsync", "../../../mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattlePassItem(extras) {
    _reporterNs.report("BattlePassItem", "./BattlePassItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskData(extras) {
    _reporterNs.report("TaskData", "../../task/TaskData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      error = _cc.error;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      BattlePassDataMgr = _unresolved_3.BattlePassDataMgr;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      LoadResAsync = _unresolved_5.LoadResAsync;
    }, function (_unresolved_6) {
      BattlePassItem = _unresolved_6.BattlePassItem;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_8) {
      TaskData = _unresolved_8.TaskData;
    }, function (_unresolved_9) {
      RedMgr = _unresolved_9.RedMgr;
    }, function (_unresolved_10) {
      RedDotType = _unresolved_10.RedDotType;
    }, function (_unresolved_11) {
      Net = _unresolved_11.Net;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bdad2UyzHZPWpZ8tSwbia+c", "BattlePassView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'error', 'EventTouch', 'instantiate', 'Node', 'Prefab', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattlePassView", BattlePassView = (_dec = ccclass('BattlePassView'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class BattlePassView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "activityNode", _descriptor, this);

          _initializerDefineProperty(this, "node_toggle_content", _descriptor2, this);

          this.view_type = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BattlePassTab.BattlePassTab_MainChapterPass;
          this.currNode = null;
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {
          // 购买战令等级
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyBattlePassLevelRsp, this.on_s2c_BuyBattlePassLevelRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveBattlePassTaskRewardsRsp, this.on_s2c_ReceiveBattlePassTaskRewardsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetBattlePassInfoMapRsp, this.on_s2c_GetBattlePassInfoMapRsp, this);
        }

        unRegister() {
          super.unRegister();
        }

        on_s2c_GetBattlePassInfoMapRsp(msg) {
          this.setOnshow();
        }

        onShow() {
          let pass_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetBattlePassInfoMapReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetBattlePassInfoMapReq, pass_msg);
        }

        setOnshow() {
          // 默认章节基金
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Battle_Pass);
          this.view_type = this.openData ? this.openData : (_crd && BattlePassDataMgr === void 0 ? (_reportPossibleCrUseOfBattlePassDataMgr({
            error: Error()
          }), BattlePassDataMgr) : BattlePassDataMgr).ins.getDefaultPassName();
          this.switchView(null, String(this.view_type));

          for (let i = 1; i <= 6; i++) {
            const toggleNode = this.node_toggle_content.getChildByName("toggle" + i);
            const data = (_crd && BattlePassDataMgr === void 0 ? (_reportPossibleCrUseOfBattlePassDataMgr({
              error: Error()
            }), BattlePassDataMgr) : BattlePassDataMgr).ins.getDataByPassName(i);
            toggleNode.active = data && data.length > 0;
            toggleNode.getComponent(Toggle).isChecked = i === this.view_type;
          }
        }

        async switchView(e, customValue) {
          let tabName = Number(customValue);

          if (e && this.view_type === tabName) {
            return;
          }

          if (this.currNode) {
            this.currNode.active = false;
          }

          this.view_type = tabName;
          let itemTs = null;

          if (this.activityNode.getChildByName(customValue)) {
            itemTs = this.activityNode.getChildByName(customValue).getComponent(_crd && BattlePassItem === void 0 ? (_reportPossibleCrUseOfBattlePassItem({
              error: Error()
            }), BattlePassItem) : BattlePassItem);
          }

          if (!itemTs) {
            let view = await this.createView(this.view_type);

            if (view) {
              const itemTs = view.getComponent(_crd && BattlePassItem === void 0 ? (_reportPossibleCrUseOfBattlePassItem({
                error: Error()
              }), BattlePassItem) : BattlePassItem);
              this.currNode = view;
              itemTs.onShow(this.view_type);
            }
          } else {
            itemTs.node.active = true;
            this.currNode = itemTs.node;
            itemTs.onShow(this.view_type);
          }
        }

        async createView(viewName) {
          let viewTab = (_crd && BattlePassDataMgr === void 0 ? (_reportPossibleCrUseOfBattlePassDataMgr({
            error: Error()
          }), BattlePassDataMgr) : BattlePassDataMgr).ins.getDataByPassName(viewName)[0];

          if (viewTab && viewTab.PrefabUrl) {
            let pfb = await (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
              error: Error()
            }), LoadResAsync) : LoadResAsync)(viewTab.PrefabUrl, Prefab);
            let view = instantiate(pfb);
            view.name = String(viewName);
            view.parent = this.activityNode;
            return view;
          } else {
            error("view路径没有配置", viewName);
          }

          return null;
        } // 购买等级


        on_s2c_BuyBattlePassLevelRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Battle_Pass); // 刷新一下progress

          const battlePass = (_crd && BattlePassDataMgr === void 0 ? (_reportPossibleCrUseOfBattlePassDataMgr({
            error: Error()
          }), BattlePassDataMgr) : BattlePassDataMgr).ins.getBattlePassData(msg.id);

          for (let i = 0; i < battlePass.tasks.length; i++) {
            const taskId = battlePass.tasks[i].id;
            const task = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
              error: Error()
            }), TaskData) : TaskData).ins.getBattlePassTaskInfo(taskId);
            const taskTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().TaskTableById.getValue(taskId);

            if (task.progress < taskTab.FinishParam1) {
              task.progress = msg.progress;
            }
          }

          this.currNode.getComponent(_crd && BattlePassItem === void 0 ? (_reportPossibleCrUseOfBattlePassItem({
            error: Error()
          }), BattlePassItem) : BattlePassItem).refreshView();
        } // 领奖


        on_s2c_ReceiveBattlePassTaskRewardsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.currNode.getComponent(_crd && BattlePassItem === void 0 ? (_reportPossibleCrUseOfBattlePassItem({
            error: Error()
          }), BattlePassItem) : BattlePassItem).refreshView();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "activityNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_content", [_dec3], {
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
//# sourceMappingURL=a60d2ff26c96be9e149f2a4b278056e13905058e.js.map
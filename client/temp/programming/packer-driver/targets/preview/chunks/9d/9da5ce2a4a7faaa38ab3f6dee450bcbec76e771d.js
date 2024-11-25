System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "client_protocol", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, Toggle, ViewPop, AssociationControl, EventMgr, proto, InfiniteList, AssociationApplyListItem, SettingsManager, AssociationData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, AssociationApplyListPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationControl(extras) {
    _reporterNs.report("AssociationControl", "./AssociationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationApplyListItem(extras) {
    _reporterNs.report("AssociationApplyListItem", "./AssociationApplyListItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingsManager(extras) {
    _reporterNs.report("SettingsManager", "../role/SettingsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      AssociationControl = _unresolved_3.AssociationControl;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_5) {
      InfiniteList = _unresolved_5.default;
    }, function (_unresolved_6) {
      AssociationApplyListItem = _unresolved_6.AssociationApplyListItem;
    }, function (_unresolved_7) {
      SettingsManager = _unresolved_7.SettingsManager;
    }, function (_unresolved_8) {
      AssociationData = _unresolved_8.AssociationData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d45770mHR9DPJ2GVCDCZa0x", "AssociationApplyListPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationApplyListPop", AssociationApplyListPop = (_dec = ccclass('AssociationApplyListPop'), _dec2 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec3 = property(Prefab), _dec4 = property(Toggle), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec(_class = (_class2 = class AssociationApplyListPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "list_view", _descriptor, this);

          _initializerDefineProperty(this, "pfb_item", _descriptor2, this);

          _initializerDefineProperty(this, "toggle_auto_enter", _descriptor3, this);

          //自动审批加入按钮
          _initializerDefineProperty(this, "lbl_members_count", _descriptor4, this);

          _initializerDefineProperty(this, "lbl_total_count", _descriptor5, this);

          _initializerDefineProperty(this, "node_no_body", _descriptor6, this);

          this._list = [];
          this._clickToggle = false;
        }

        onShow() {
          this._clickToggle = false;
          this.reqGetJoinGuildRequests();
          this.toggle_auto_enter.isChecked = !(_crd && SettingsManager === void 0 ? (_reportPossibleCrUseOfSettingsManager({
            error: Error()
          }), SettingsManager) : SettingsManager).ins.getSetting("needCheckAssociation");
          var memberInfo = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getGuildMembersCount();
          this.lbl_members_count.string = String(memberInfo.memberCount);
          this.lbl_total_count.string = String(memberInfo.totalCount);
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetJoinGuildRequestsRsp, this.on_s2c_GetJoinGuildRequestsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ProcessGuildApplyRsp, this.on_s2c_ProcessGuildApplyRsp, this);
          /* 全部拒绝申请 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RejectAllGuildApplyRsp, this.on_s2c_RejectAllGuildApplyRsp, this);
        }

        unRegister() {
          super.unRegister();
        }

        onDestroy() {
          super.onDestroy();
        }

        reqGetJoinGuildRequests() {
          (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
            error: Error()
          }), AssociationControl) : AssociationControl).ins.reqGetJoinGuildRequests(0);
        }

        on_s2c_RejectAllGuildApplyRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this._list = [];
          this.initList();
        }

        on_s2c_GetJoinGuildRequestsRsp(msg) {
          this._list = msg.requests;
          this.initList();
        }

        initList(isRefresh) {
          this.node_no_body.active = this._list.length === 0;
          this.list_view.node.active = this._list.length > 0;

          if (isRefresh) {
            this.list_view.Refresh();
          } else {
            this.list_view.Init({
              getCellNumber: this.getCellCount.bind(this),
              getCellSize: this.getCellHeight.bind(this),
              getCellIdentifer: this.getCellIdentifer.bind(this),
              getCellView: this.getCellView.bind(this),
              getCellData: this.GetCellData.bind(this)
            });
          }
        }

        getCellCount() {
          return this._list.length;
        }

        getCellHeight(idx) {
          return 100;
        }

        getCellIdentifer(idx) {
          return "AssociationApplyItem";
        }

        getCellView(idx, identifer) {
          var cell = instantiate(this.pfb_item).getComponent(_crd && AssociationApplyListItem === void 0 ? (_reportPossibleCrUseOfAssociationApplyListItem({
            error: Error()
          }), AssociationApplyListItem) : AssociationApplyListItem);
          return cell;
        }

        GetCellData(idx) {
          return this._list[idx];
        }

        onClickEnter() {
          this._clickToggle = true;
        }

        onClickAllReject() {
          if (this._list.length > 0) {
            (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
              error: Error()
            }), AssociationControl) : AssociationControl).ins.reqRejectAllGuildApply();
          }
        }

        onClickAutoEnterToggle() {
          if (this._clickToggle) {
            this._clickToggle = false;
            (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
              error: Error()
            }), AssociationControl) : AssociationControl).ins.reqSetGuildNeedCheck(!this.toggle_auto_enter.isChecked);
          }
        }

        on_s2c_ProcessGuildApplyRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.reqGetJoinGuildRequests();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "list_view", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggle_auto_enter", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_members_count", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_total_count", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_no_body", [_dec7], {
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
//# sourceMappingURL=9da5ce2a4a7faaa38ab3f6dee450bcbec76e771d.js.map
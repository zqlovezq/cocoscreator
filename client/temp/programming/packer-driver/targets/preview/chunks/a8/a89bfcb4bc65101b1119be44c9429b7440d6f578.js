System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "client_protocol", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, ViewPop, ASSOCIATION, AssociationMainView, AssociationApplyView, AssociationData, proto, Net, EventMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, AssociationView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfASSOCIATION(extras) {
    _reporterNs.report("ASSOCIATION", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationMainView(extras) {
    _reporterNs.report("AssociationMainView", "./AssociationMainView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationApplyView(extras) {
    _reporterNs.report("AssociationApplyView", "./AssociationApplyView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ASSOCIATION = _unresolved_3.ASSOCIATION;
    }, function (_unresolved_4) {
      AssociationMainView = _unresolved_4.AssociationMainView;
    }, function (_unresolved_5) {
      AssociationApplyView = _unresolved_5.AssociationApplyView;
    }, function (_unresolved_6) {
      AssociationData = _unresolved_6.AssociationData;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_7) {
      Net = _unresolved_7.Net;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c817WkYjxOZZy0vxnfJzyj", "AssociationView", undefined);
      /*
       * @Date: 2024-08-28 10:44:28
       * @LastEditors: wzq
       * @LastEditTime: 2024-11-01 14:37:52
       */


      __checkObsolete__(['_decorator', 'Component', 'error', 'instantiate', 'log', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationView", AssociationView = (_dec = ccclass('AssociationView'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class AssociationView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "assocition_main_view", _descriptor, this);

          _initializerDefineProperty(this, "assocition_apply_view", _descriptor2, this);

          this.currNode = null;
          this.view_type = (_crd && ASSOCIATION === void 0 ? (_reportPossibleCrUseOfASSOCIATION({
            error: Error()
          }), ASSOCIATION) : ASSOCIATION).NONE;
        }

        register() {
          /* 公会数据 */
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetGuildInfoRsp, this.on_s2c_GetGuildInfoRsp, this);
          /* 创建公会 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.JoinGuildRequestReplyPush, this.on_s2c_JoinGuildRequestReplyPush, this); // 被踢出公会

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.KickedOutGuildPush, this.on_s2c_KickedOutGuildPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GuildMemberChangedPush, this.on_s2c_GuildMemberChangedPush, this);
        }

        on_s2c_GuildMemberChangedPush(msg) {
          this.refreshGuildData();
        }

        unRegister() {
          super.unRegister();
        }

        onDestroy() {
          super.onDestroy();
        }

        on_s2c_KickedOutGuildPush(msg) {
          if (msg.guildId) {
            (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.subGuildRequests(msg.guildId);
            this.refreshGuildData();
          }
        }

        on_s2c_JoinGuildRequestReplyPush(msg) {
          if (msg.guildId && msg.agree) {
            (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.subGuildRequests(msg.guildId);
          }
        }

        on_s2c_GetGuildInfoRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.switchView();
        }

        onShow() {
          this.refreshGuildData();
        } // 刷新公会信息


        refreshGuildData() {
          var guild_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetGuildInfoReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetGuildInfoReq, guild_msg);
        }

        switchView() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.currNode) {
              _this.currNode.active = false;
            }

            _this.view_type = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getInGuild() ? (_crd && ASSOCIATION === void 0 ? (_reportPossibleCrUseOfASSOCIATION({
              error: Error()
            }), ASSOCIATION) : ASSOCIATION).INASSOCIATION : (_crd && ASSOCIATION === void 0 ? (_reportPossibleCrUseOfASSOCIATION({
              error: Error()
            }), ASSOCIATION) : ASSOCIATION).NONE;

            switch (_this.view_type) {
              case (_crd && ASSOCIATION === void 0 ? (_reportPossibleCrUseOfASSOCIATION({
                error: Error()
              }), ASSOCIATION) : ASSOCIATION).NONE:
                _this.assocition_apply_view.active = true;
                _this.currNode = _this.assocition_apply_view;

                _this.assocition_apply_view.getComponent(_crd && AssociationApplyView === void 0 ? (_reportPossibleCrUseOfAssociationApplyView({
                  error: Error()
                }), AssociationApplyView) : AssociationApplyView).onShow();

                break;

              case (_crd && ASSOCIATION === void 0 ? (_reportPossibleCrUseOfASSOCIATION({
                error: Error()
              }), ASSOCIATION) : ASSOCIATION).INASSOCIATION:
                _this.assocition_main_view.active = true;
                _this.currNode = _this.assocition_main_view;

                if (_this.openData) {
                  _this.assocition_main_view.getComponent(_crd && AssociationMainView === void 0 ? (_reportPossibleCrUseOfAssociationMainView({
                    error: Error()
                  }), AssociationMainView) : AssociationMainView).onShow(_this.openData);

                  _this.openData = null;
                } else {
                  _this.assocition_main_view.getComponent(_crd && AssociationMainView === void 0 ? (_reportPossibleCrUseOfAssociationMainView({
                    error: Error()
                  }), AssociationMainView) : AssociationMainView).onShow(null);
                }

                break;

              default:
                break;
            }
          })();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "assocition_main_view", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "assocition_apply_view", [_dec3], {
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
//# sourceMappingURL=a89bfcb4bc65101b1119be44c9429b7440d6f578.js.map
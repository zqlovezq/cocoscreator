System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "client_protocol", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, instantiate, Label, Prefab, Sprite, ComponentBase, ShowTips, UIMgr, ViewName, InfiniteList, AssociationApplyItem, EventMgr, proto, AssociationControl, AssociationView, RoleData, AssociationData, LangMgr, tab, Net, ButtonLock, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, AssociationApplyView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationApplyItem(extras) {
    _reporterNs.report("AssociationApplyItem", "./AssociationApplyItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationControl(extras) {
    _reporterNs.report("AssociationControl", "./AssociationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationView(extras) {
    _reporterNs.report("AssociationView", "./AssociationView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonLock(extras) {
    _reporterNs.report("ButtonLock", "../../utils/GameUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      ShowTips = _unresolved_3.ShowTips;
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      ViewName = _unresolved_4.ViewName;
    }, function (_unresolved_5) {
      InfiniteList = _unresolved_5.default;
    }, function (_unresolved_6) {
      AssociationApplyItem = _unresolved_6.AssociationApplyItem;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_8) {
      AssociationControl = _unresolved_8.AssociationControl;
    }, function (_unresolved_9) {
      AssociationView = _unresolved_9.AssociationView;
    }, function (_unresolved_10) {
      RoleData = _unresolved_10.RoleData;
    }, function (_unresolved_11) {
      AssociationData = _unresolved_11.AssociationData;
    }, function (_unresolved_12) {
      LangMgr = _unresolved_12.LangMgr;
    }, function (_unresolved_13) {
      tab = _unresolved_13.tab;
    }, function (_unresolved_14) {
      Net = _unresolved_14.Net;
    }, function (_unresolved_15) {
      ButtonLock = _unresolved_15.ButtonLock;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb92aDtFAlA6rkDqmFKaZow", "AssociationApplyView", undefined);
      /*
       * @Date: 2024-08-28 11:39:23
       * @LastEditors: wzq
       * @LastEditTime: 2024-10-30 14:55:06
       */


      __checkObsolete__(['_decorator', 'Button', 'Component', 'instantiate', 'Label', 'log', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationApplyView", AssociationApplyView = (_dec = ccclass('AssociationApplyView'), _dec2 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec3 = property(Prefab), _dec4 = property(Label), _dec5 = property(Button), _dec6 = (_crd && ButtonLock === void 0 ? (_reportPossibleCrUseOfButtonLock({
        error: Error()
      }), ButtonLock) : ButtonLock)(1, () => {}), _dec(_class = (_class2 = class AssociationApplyView extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "list_view", _descriptor, this);

          _initializerDefineProperty(this, "pfb_item", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_time", _descriptor3, this);

          _initializerDefineProperty(this, "btn_one_click", _descriptor4, this);

          this._list = [];
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetRecommendGuildsRsp, this.on_s2c_GetRecommendGuildsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ApplyJoinGuildRsp, this.on_s2c_ApplyJoinGuildRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ApplyJoinGuildOneClickRsp, this.on_s2c_ApplyJoinGuildOneClickRsp, this);
        }

        unRegister() {
          super.unRegister();
        }

        onDestroy() {
          super.onDestroy();
        }

        onShow() {
          this.reqGetRecommendGuilds();
        }

        reqGetRecommendGuilds() {
          (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
            error: Error()
          }), AssociationControl) : AssociationControl).ins.reqGetRecommendGuilds();
        } // 创建鸡舍


        createAssociation() {
          // 打开创建鸡舍界面
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).AssociationCreatePop
          });
        }

        getCellCount() {
          return this._list.length;
        }

        getCellHeight(idx) {
          return 81;
        }

        getCellIdentifer(idx) {
          return "AssociationApplyItem";
        }

        getCellView(idx, identifer) {
          let cell = instantiate(this.pfb_item).getComponent(_crd && AssociationApplyItem === void 0 ? (_reportPossibleCrUseOfAssociationApplyItem({
            error: Error()
          }), AssociationApplyItem) : AssociationApplyItem);
          return cell;
        }

        GetCellData(idx) {
          return this._list[idx];
        }

        initList(isRefresh) {
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
            this.btn_one_click.interactable = true;
            this.btn_one_click.node.getComponent(Sprite).grayscale = false;
          }

          const curTime = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime();

          if ((_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionInfo() && curTime < (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionInfo().notAllowJoinTime) {
            this.lbl_time.node.active = true;
            this.lbl_time.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("Tips_association_4", [(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().GuildJoinCd / 60]);
          } else {
            this.lbl_time.node.active = false;
          }
        }

        on_s2c_GetRecommendGuildsRsp(msg) {
          this._list = msg.guilds;

          for (let i = 0; i < msg.guilds.length; i++) {
            const guild = msg.guilds[i];

            if ((_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getGuildIsRequest(guild.id)) {
              (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
                error: Error()
              }), AssociationData) : AssociationData).ins.subGuildRequests(guild.id);
            }
          }

          this.initList();
        }

        onClose() {
          const view = (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.getView("AssociationView").getComponent(_crd && AssociationView === void 0 ? (_reportPossibleCrUseOfAssociationView({
            error: Error()
          }), AssociationView) : AssociationView);
          view.onClose();
        }

        on_s2c_ApplyJoinGuildRsp(msg) {
          this.initList(true);
        } // 一键申请公会


        oneClickApplyJoinGuild() {
          const curTime = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime();

          if ((_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionInfo() && curTime < (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionInfo().notAllowJoinTime) {
            const str = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("Tips_association_4", [(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().GuildJoinCd / 60]);
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)(str);
            return;
          }

          const guilds = [];

          for (let i = 0; i < this._list.length; i++) {
            if (!(_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getGuildIsRequest(this._list[i].id)) {
              guilds.push(this._list[i].id);
            }
          }

          if (guilds.length > 0) {
            this.btn_one_click.interactable = false;
            this.btn_one_click.node.getComponent(Sprite).grayscale = true;
            let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_ApplyJoinGuildOneClickReq();
            msg.guildIds = guilds;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.ApplyJoinGuildOneClickReq, msg);
          }
        }

        on_s2c_ApplyJoinGuildOneClickRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.initList(true);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "list_view", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_time", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btn_one_click", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "oneClickApplyJoinGuild", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "oneClickApplyJoinGuild"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d77cd8bb708fecada646e6d393fb8030f8c04f80.js.map
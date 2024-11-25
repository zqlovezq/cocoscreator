System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Label, Node, InfiniteCell, SimpleRoleInfo, PlayerHeadItem, GameUtil, getTimeGuildTXT, AssociationData, RoleData, AssociationControl, tab, LangMgr, UIMgr, ViewName, CommonTipsPop, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, AssociationPlayerItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleRoleInfo(extras) {
    _reporterNs.report("SimpleRoleInfo", "../friends/SimpleRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerHeadItem(extras) {
    _reporterNs.report("PlayerHeadItem", "../common/PlayerHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetTimeGuildTXT(extras) {
    _reporterNs.report("getTimeGuildTXT", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationMainView(extras) {
    _reporterNs.report("AssociationMainView", "./AssociationMainView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationControl(extras) {
    _reporterNs.report("AssociationControl", "./AssociationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../common/CommonTipsPop", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }, function (_unresolved_3) {
      SimpleRoleInfo = _unresolved_3.SimpleRoleInfo;
    }, function (_unresolved_4) {
      PlayerHeadItem = _unresolved_4.PlayerHeadItem;
    }, function (_unresolved_5) {
      GameUtil = _unresolved_5.GameUtil;
      getTimeGuildTXT = _unresolved_5.getTimeGuildTXT;
    }, function (_unresolved_6) {
      AssociationData = _unresolved_6.AssociationData;
    }, function (_unresolved_7) {
      RoleData = _unresolved_7.RoleData;
    }, function (_unresolved_8) {
      AssociationControl = _unresolved_8.AssociationControl;
    }, function (_unresolved_9) {
      tab = _unresolved_9.tab;
    }, function (_unresolved_10) {
      LangMgr = _unresolved_10.LangMgr;
    }, function (_unresolved_11) {
      UIMgr = _unresolved_11.UIMgr;
    }, function (_unresolved_12) {
      ViewName = _unresolved_12.ViewName;
    }, function (_unresolved_13) {
      CommonTipsPop = _unresolved_13.CommonTipsPop;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "313dfKft69ABKqzlpo6jd98", "AssociationPlayerItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'EventTouch', 'Label', 'Node', 'NodeEventType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationPlayerItem", AssociationPlayerItem = (_dec = ccclass('AssociationPlayerItem'), _dec2 = property(_crd && PlayerHeadItem === void 0 ? (_reportPossibleCrUseOfPlayerHeadItem({
        error: Error()
      }), PlayerHeadItem) : PlayerHeadItem), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec(_class = (_class2 = class AssociationPlayerItem extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "palyerHerdItem", _descriptor, this);

          _initializerDefineProperty(this, "lbl_name", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_power", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_time", _descriptor4, this);

          _initializerDefineProperty(this, "node_exit", _descriptor5, this);

          _initializerDefineProperty(this, "node_leader", _descriptor6, this);

          _initializerDefineProperty(this, "node_accuse", _descriptor7, this);

          //弹劾按钮
          _initializerDefineProperty(this, "node_me", _descriptor8, this);

          _initializerDefineProperty(this, "node_president_img", _descriptor9, this);

          _initializerDefineProperty(this, "node_vicePresident_img", _descriptor10, this);

          _initializerDefineProperty(this, "node_elite_img", _descriptor11, this);

          _initializerDefineProperty(this, "node_member_img", _descriptor12, this);

          this._data = null;
          this._view = null;
          this._guildPositionTab = null;
        }

        onLoad() {// this.node.on(NodeEventType.TOUCH_START,this.clickItem,this);
        }

        UpdateContent(data) {
          this._data = data.data;
          this._view = data.view;
          let guildData = null;

          if (data.guildData) {
            guildData = data.guildData;
            this._guildPositionTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GuildPositionTableByPosition.getValue(this._data.job);
          } else {
            guildData = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getAssocitionSimpleInfo();
            const memberInfo = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getMemberData((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.id);

            if (memberInfo) {
              this._guildPositionTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GuildPositionTableByPosition.getValue(memberInfo.job);
            }
          }

          const playerInfo = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
            error: Error()
          }), SimpleRoleInfo) : SimpleRoleInfo)();
          playerInfo.merge(this._data);
          this.palyerHerdItem.initHeadInfo({
            roleInfo: playerInfo
          });
          this.palyerHerdItem.setCloseCallBack(() => {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CheckRoleInfoPop,
              data: {
                "roleId": this._data.roleId
              }
            });
          });
          this.lbl_name.string = this._data.name;
          this.lbl_power.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(this._data.powerScore);
          let offLineTime = -1;

          if (this._data.roleId !== (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.id) {
            offLineTime = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getMemberOffLineTime(this._data);
          }

          if (data.guildData) {
            this.node_leader.active = false;
            this.node_accuse.active = false;
            this.node_exit.active = false;
          } else {
            const roleMemberData = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getMemberData((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.id);
            this.node_leader.active = this._data.roleId !== (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.id && //不是自己
            this._data.roleId !== guildData.leaderId && //不是会长   
            this._guildPositionTab && //   this._guildPositionTab.Appoint&&//有任职能力
            roleMemberData.job < this._data.job; //自己的职位要大于列表职位

            this.node_accuse.active = this._data.roleId == guildData.leaderId && (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.id !== guildData.leaderId && offLineTime > 86400 * 7;
            this.node_exit.active = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.id === this._data.roleId && this._data.roleId !== guildData.leaderId && (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.id !== guildData.leaderId || (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getMemberArr().length === 1;
          }

          if (offLineTime > 0) {
            //this.lbl_time.string = getTimeGuildTXT(offLineTime)+"前";
            this.lbl_time.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_association_51", [(_crd && getTimeGuildTXT === void 0 ? (_reportPossibleCrUseOfgetTimeGuildTXT({
              error: Error()
            }), getTimeGuildTXT) : getTimeGuildTXT)(offLineTime)]);
            this.lbl_time.color = new Color().fromHEX("#F71315");
          } else {
            this.lbl_time.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_association_2");
            this.lbl_time.color = new Color().fromHEX("#3A9830");
          }

          this.node_me.active = this._data.roleId === (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.id;
          this.node_president_img.active = this._data.job === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).GuildPosition.GuildPosition_President;
          this.node_vicePresident_img.active = this._data.job === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).GuildPosition.GuildPosition_VicePresident;
          this.node_elite_img.active = this._data.job === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).GuildPosition.GuildPosition_Elite;
          this.node_member_img.active = this._data.job === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).GuildPosition.GuildPosition_Member;
        }

        clickSmallBtn(event, idx) {
          this._view.showSmallTips(event.target, this._data);
        } // 退出公会


        clickExit() {
          // 加一个确认弹窗
          const tipsStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_association_69");
          (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
            error: Error()
          }), CommonTipsPop) : CommonTipsPop).create(tipsStr, val => {
            if (val) {
              (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
                error: Error()
              }), AssociationControl) : AssociationControl).ins.reqQuitGuild();
            }
          });
        }
        /* 弹劾会长 */


        reqImpeachGuildLeader() {
          (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
            error: Error()
          }), AssociationControl) : AssociationControl).ins.reqImpeachGuildLeader();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "palyerHerdItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_name", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_power", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_time", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_exit", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_leader", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_accuse", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_me", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_president_img", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_vicePresident_img", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_elite_img", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_member_img", [_dec13], {
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
//# sourceMappingURL=28dd38dfb67ebaf1cd30f13bffe2bd538c6aad44.js.map
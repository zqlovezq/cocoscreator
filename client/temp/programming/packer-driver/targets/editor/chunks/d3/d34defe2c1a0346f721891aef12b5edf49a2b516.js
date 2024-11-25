System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EditBox, Node, Sprite, Toggle, ViewPop, AssociationControl, ASSOCIATIONPOP, SettingsManager, ItemData, ShowItemNotEnoughTips, ShowTips, UIMgr, tab, ViewName, AssociationData, RoleData, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, AssociationInfoPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationControl(extras) {
    _reporterNs.report("AssociationControl", "./AssociationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfASSOCIATIONPOP(extras) {
    _reporterNs.report("ASSOCIATIONPOP", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingsManager(extras) {
    _reporterNs.report("SettingsManager", "../role/SettingsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
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
      EditBox = _cc.EditBox;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      AssociationControl = _unresolved_3.AssociationControl;
    }, function (_unresolved_4) {
      ASSOCIATIONPOP = _unresolved_4.ASSOCIATIONPOP;
    }, function (_unresolved_5) {
      SettingsManager = _unresolved_5.SettingsManager;
    }, function (_unresolved_6) {
      ItemData = _unresolved_6.ItemData;
    }, function (_unresolved_7) {
      ShowItemNotEnoughTips = _unresolved_7.ShowItemNotEnoughTips;
      ShowTips = _unresolved_7.ShowTips;
      UIMgr = _unresolved_7.UIMgr;
    }, function (_unresolved_8) {
      tab = _unresolved_8.tab;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      AssociationData = _unresolved_10.AssociationData;
    }, function (_unresolved_11) {
      RoleData = _unresolved_11.RoleData;
    }, function (_unresolved_12) {
      LangMgr = _unresolved_12.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19b47QxZ1ZD3I7o9fEHRVXa", "AssociationInfoPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'EventTouch', 'Node', 'Sprite', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationInfoPop", AssociationInfoPop = (_dec = ccclass('AssociationInfoPop'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Toggle), _dec7 = property(EditBox), _dec8 = property(EditBox), _dec9 = property(EditBox), _dec10 = property(EditBox), _dec11 = property(Sprite), _dec(_class = (_class2 = class AssociationInfoPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "node_create", _descriptor, this);

          //创建鸡舍节点
          _initializerDefineProperty(this, "node_notice", _descriptor2, this);

          //修改公告鸡舍节点
          _initializerDefineProperty(this, "node_change_info", _descriptor3, this);

          //修改信息鸡舍节点
          _initializerDefineProperty(this, "node_donate", _descriptor4, this);

          //捐献鸡舍节点
          _initializerDefineProperty(this, "toggle_auto_enter", _descriptor5, this);

          //自动审批加入按钮
          _initializerDefineProperty(this, "edit_box_create_name", _descriptor6, this);

          //创建公会的名字
          _initializerDefineProperty(this, "edit_box_create_notice", _descriptor7, this);

          //创建公会的公告
          _initializerDefineProperty(this, "edit_box_change_notice", _descriptor8, this);

          //更改公会的公告
          _initializerDefineProperty(this, "edit_box_change_name", _descriptor9, this);

          //更改公会的公告
          _initializerDefineProperty(this, "sp_flag_img", _descriptor10, this);

          this.view_type = (_crd && ASSOCIATIONPOP === void 0 ? (_reportPossibleCrUseOfASSOCIATIONPOP({
            error: Error()
          }), ASSOCIATIONPOP) : ASSOCIATIONPOP).NONE;
          this.curSelectFlagId = 0;
          this._clickToggle = false;
        }

        onShow() {
          this.view_type = this.openData.view;
          this.showView();
        }

        register() {}

        unRegister() {
          super.unRegister();
        }

        onDestroy() {
          super.onDestroy();
        }

        showView() {
          this.node_create.active = this.view_type === (_crd && ASSOCIATIONPOP === void 0 ? (_reportPossibleCrUseOfASSOCIATIONPOP({
            error: Error()
          }), ASSOCIATIONPOP) : ASSOCIATIONPOP).CREATE;
          this.node_notice.active = this.view_type === (_crd && ASSOCIATIONPOP === void 0 ? (_reportPossibleCrUseOfASSOCIATIONPOP({
            error: Error()
          }), ASSOCIATIONPOP) : ASSOCIATIONPOP).NOTICE;
          this.node_change_info.active = this.view_type === (_crd && ASSOCIATIONPOP === void 0 ? (_reportPossibleCrUseOfASSOCIATIONPOP({
            error: Error()
          }), ASSOCIATIONPOP) : ASSOCIATIONPOP).CHANGE;
          this.node_donate.active = this.view_type === (_crd && ASSOCIATIONPOP === void 0 ? (_reportPossibleCrUseOfASSOCIATIONPOP({
            error: Error()
          }), ASSOCIATIONPOP) : ASSOCIATIONPOP).DONATE;

          switch (this.view_type) {
            case (_crd && ASSOCIATIONPOP === void 0 ? (_reportPossibleCrUseOfASSOCIATIONPOP({
              error: Error()
            }), ASSOCIATIONPOP) : ASSOCIATIONPOP).CREATE:
              this.toggle_auto_enter.isChecked = !(_crd && SettingsManager === void 0 ? (_reportPossibleCrUseOfSettingsManager({
                error: Error()
              }), SettingsManager) : SettingsManager).ins.getSetting("needCheckAssociation");
              break;

            case (_crd && ASSOCIATIONPOP === void 0 ? (_reportPossibleCrUseOfASSOCIATIONPOP({
              error: Error()
            }), ASSOCIATIONPOP) : ASSOCIATIONPOP).CHANGE:
              this.curSelectFlagId = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
                error: Error()
              }), AssociationData) : AssociationData).ins.getAssocitionSimpleInfo().flagId ? (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
                error: Error()
              }), AssociationData) : AssociationData).ins.getAssocitionSimpleInfo().flagId : 1;
              this.refreshFlagId();
              break;

            default:
              break;
          }
        }
        /* 创建公会 */


        reqCreateGuild() {
          // 钻石不足
          const DiamondCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getByItemId(1).num;

          if (DiamondCount < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().CreateGuildCostDiamond) {
            (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
              error: Error()
            }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(1);
            return;
          }

          if (this.edit_box_create_name.string.length === 0) {
            console.log("公会名字不能为空");
            return;
          } // 当前时间不足


          const curTime = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime();

          if ((_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionInfo() && curTime < (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionInfo().notAllowJoinTime) {
            console.log("创建公会cd未结束");
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

          this.onClose();
          (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
            error: Error()
          }), AssociationControl) : AssociationControl).ins.reqCreateGuild(this.edit_box_create_name.string, 0, this.edit_box_create_notice.string, this.toggle_auto_enter.isChecked);
        }

        onClickEnter() {
          this._clickToggle = true;
        }

        onClickAutoEnterToggle() {
          if (this._clickToggle) {
            this._clickToggle = false;
          }
        }
        /* 更改公告 */


        onClickChangeNotice() {
          if (this.edit_box_change_notice.string.length === 0) {
            console.log("更改公告不能为空");
            return;
          }

          (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
            error: Error()
          }), AssociationControl) : AssociationControl).ins.reqSetGuildNotice(this.edit_box_change_notice.string);
        }
        /* 更换旗帜跟公会名字 */


        onClickChangeInfo() {
          const DiamondCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getByItemId(1).num;

          if (DiamondCount < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().GuildChangeNameCost) {
            (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
              error: Error()
            }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(1);
            return;
          }

          if (this.edit_box_change_name.string.length === 0) {
            console.log("更改信息名字不能为空");
            return;
          }

          (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
            error: Error()
          }), AssociationControl) : AssociationControl).ins.reqSetGuildNameAndFlag(this.edit_box_change_name.string, this.curSelectFlagId);
        }
        /* 点击更换旗帜 */


        onClickChangeFlagId() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).AssociationChangeFlagPop
          });
        }

        refreshFlagId() {
          const flagtab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildFlagTableById.getValue(this.curSelectFlagId);
          this.sp_flag_img.setTexture(flagtab.IconUrl);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_create", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_notice", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_change_info", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_donate", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "toggle_auto_enter", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "edit_box_create_name", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "edit_box_create_notice", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "edit_box_change_notice", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "edit_box_change_name", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sp_flag_img", [_dec11], {
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
//# sourceMappingURL=d34defe2c1a0346f721891aef12b5edf49a2b516.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, js, Label, Node, EventMgr, FightEvent, FightUITeamSkillItem, FightRoleTeamItem, FightData, ShowTips, UIMgr, tab, ItemData, FightMsgControl, AdMgr, FightRootControl, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, FightUITeamItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleInfo(extras) {
    _reporterNs.report("RoleInfo", "../../base/obj/role/role/RoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightUITeamSkillItem(extras) {
    _reporterNs.report("FightUITeamSkillItem", "./FightUITeamSkillItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRoleTeamItem(extras) {
    _reporterNs.report("FightRoleTeamItem", "./FightRoleTeamItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRole(extras) {
    _reporterNs.report("Role", "../../base/obj/role/role/Role", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../../../model/item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMsgControl(extras) {
    _reporterNs.report("FightMsgControl", "../../FightMsgControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdMgr(extras) {
    _reporterNs.report("AdMgr", "../../../model/AdMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      js = _cc.js;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
    }, function (_unresolved_3) {
      FightEvent = _unresolved_3.FightEvent;
    }, function (_unresolved_4) {
      FightUITeamSkillItem = _unresolved_4.FightUITeamSkillItem;
    }, function (_unresolved_5) {
      FightRoleTeamItem = _unresolved_5.FightRoleTeamItem;
    }, function (_unresolved_6) {
      FightData = _unresolved_6.FightData;
    }, function (_unresolved_7) {
      ShowTips = _unresolved_7.ShowTips;
      UIMgr = _unresolved_7.UIMgr;
    }, function (_unresolved_8) {
      tab = _unresolved_8.tab;
    }, function (_unresolved_9) {
      ItemData = _unresolved_9.ItemData;
    }, function (_unresolved_10) {
      FightMsgControl = _unresolved_10.FightMsgControl;
    }, function (_unresolved_11) {
      AdMgr = _unresolved_11.AdMgr;
    }, function (_unresolved_12) {
      FightRootControl = _unresolved_12.FightRootControl;
    }, function (_unresolved_13) {
      LangMgr = _unresolved_13.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "707fdurCRRA5bx9scRSH3mH", "FightUITeamItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'js', 'Label', 'Node', 'Texture2D']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 角色头像（FightUI节点显示的) */

      _export("FightUITeamItem", FightUITeamItem = (_dec = ccclass('FightUITeamItem'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(_crd && FightRoleTeamItem === void 0 ? (_reportPossibleCrUseOfFightRoleTeamItem({
        error: Error()
      }), FightRoleTeamItem) : FightRoleTeamItem), _dec5 = property(Node), _dec6 = property(_crd && FightUITeamSkillItem === void 0 ? (_reportPossibleCrUseOfFightUITeamSkillItem({
        error: Error()
      }), FightUITeamSkillItem) : FightUITeamSkillItem), _dec7 = property(_crd && FightUITeamSkillItem === void 0 ? (_reportPossibleCrUseOfFightUITeamSkillItem({
        error: Error()
      }), FightUITeamSkillItem) : FightUITeamSkillItem), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec(_class = (_class2 = class FightUITeamItem extends Component {
        constructor() {
          super(...arguments);
          this.roleInfo = null;

          _initializerDefineProperty(this, "deadNode", _descriptor, this);

          _initializerDefineProperty(this, "deadLab", _descriptor2, this);

          _initializerDefineProperty(this, "item", _descriptor3, this);

          _initializerDefineProperty(this, "skillNode", _descriptor4, this);

          _initializerDefineProperty(this, "skill1", _descriptor5, this);

          _initializerDefineProperty(this, "skill2", _descriptor6, this);

          _initializerDefineProperty(this, "resurgenceBtnNode", _descriptor7, this);

          _initializerDefineProperty(this, "adBtnNode", _descriptor8, this);

          _initializerDefineProperty(this, "reviceContLab", _descriptor9, this);
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Role_Dead, this.onFight_Role_Dead, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Initiative_Revive, this.onFight_Role_Revive, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Role_Add_Weapon_SkillGroup, this.onRole_Add_Weapon_SkillGroup, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Role_change_SkillGroup, this.onRole_change_SkillGroup, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Change_Revice_Count, this.updateReviveShow, this);
          this.setDeadActive(false);
        }

        setDeadActive(isshow) {
          this.deadNode.active = isshow;
          this.skillNode.active = !isshow;
          this.updateReviveShow();
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);
        }

        setRoleInfo(info) {
          this.roleInfo = info;
          this.skill1.node.active = false;
          this.skill2.node.active = false;
          this.item.setData(info.heroFightInfo);
          this.skill1.setSkill(info.normalGroup);
          this.node.active = true;

          if (info.weaponeGroup) {
            this.onRole_Add_Weapon_SkillGroup(this.roleInfo);
          }
        }

        onFight_Role_Dead(info) {
          if (this.roleInfo == info) {
            this.deadLab.string = js.formatStr("%s/%s", (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.reviceCount, (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.maxReviceCount());
            this.setDeadActive(true);
          }
        }

        onFight_Role_Revive(role) {
          if (this.roleInfo == (role && role.info)) {
            this.setDeadActive(false);
          }
        }

        onClickRevive() {
          if ((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.isExitIng) {
            return;
          }

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.reviceCount < (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.maxReviceCount()) {
            console.log("复活"); // tab.CurrencyType

            var count = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).CurrencyType.CurrencyType_ReviveCurrency);

            if (count >= 1) {
              this.showReviveCurrency();
            } else {
              //ShowTips('复活币不足');
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("Tips_revive_1"));
            }
          } else {
            //ShowTips('复活次数不足');
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_revive_2"));
          }
        }
        /**观看广告复活 */


        onClickADRevive() {
          if ((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.isExitIng) {
            return;
          }

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.maxReviceCount() - (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.reviceCount > 1 && (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_ReviveCurrency) >= 1) {
            //弹窗
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: "ReviveTipsPop",
              data: {
                callback: type => {
                  if (type == 1) {
                    //广告
                    this.showAdRevive();
                  } else if (type == 2) {
                    //复活币
                    this.showReviveCurrency();
                  }
                }
              }
            });
          } else {
            this.showAdRevive();
          }
        }

        showReviveCurrency() {
          (_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.requestReviveOnStage(() => {
            if ((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.isExitIng) {
              return;
            }

            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.addReviceCount();
            this.roleInfo.abs.onRevive();
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Fight_Initiative_Revive, this.roleInfo.abs);
          });
        }

        showAdRevive() {
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.pause = true;
          (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.playVideoAd((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_FightReviveByAdvert, () => {
            if ((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.isExitIng) {
              return;
            }

            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.pause = false;
            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.addReviceCount(true);
            this.roleInfo.abs.onRevive();
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Fight_Initiative_Revive, this.roleInfo.abs);
          }, true, () => {
            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.pause = false;
          });
        }

        onRole_Add_Weapon_SkillGroup(info) {
          if (this.roleInfo != info) {
            return;
          }

          this.skill2.setSkill(this.roleInfo.weaponeGroup);
        }

        onRole_change_SkillGroup(info) {
          if (this.roleInfo != info) {
            return;
          }

          this.skill1.setSkill(this.roleInfo.normalGroup);
        }

        updateReviveShow() {
          if (this.deadNode.active) {
            if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.advertReviceCount >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().FightReviveCountByAd) {
              this.resurgenceBtnNode.active = true;
              this.adBtnNode.active = false;
              var maxCout = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.maxReviceCount();
              this.reviceContLab.string = maxCout - (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.reviceCount + "/" + maxCout;
            } else {
              this.resurgenceBtnNode.active = false;
              this.adBtnNode.active = true;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "deadNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "deadLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "skillNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "skill1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "skill2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "resurgenceBtnNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "adBtnNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "reviceContLab", [_dec10], {
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
//# sourceMappingURL=be6a63339f827a49a5dc1dbd7d436afbd604ecd9.js.map
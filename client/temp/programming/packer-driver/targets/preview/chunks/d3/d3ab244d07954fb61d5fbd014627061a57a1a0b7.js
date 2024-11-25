System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Sprite, PlayerHeadItem, SimpleRoleInfo, UIMgr, ViewName, ButtonLock, GameUtil, LangMgr, FincaFightControl, tab, RoleData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, FincaFightItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerHeadItem(extras) {
    _reporterNs.report("PlayerHeadItem", "../common/PlayerHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleRoleInfo(extras) {
    _reporterNs.report("SimpleRoleInfo", "../friends/SimpleRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonLock(extras) {
    _reporterNs.report("ButtonLock", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightControl(extras) {
    _reporterNs.report("FincaFightControl", "./FincaFightControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      PlayerHeadItem = _unresolved_2.PlayerHeadItem;
    }, function (_unresolved_3) {
      SimpleRoleInfo = _unresolved_3.SimpleRoleInfo;
    }, function (_unresolved_4) {
      UIMgr = _unresolved_4.UIMgr;
    }, function (_unresolved_5) {
      ViewName = _unresolved_5.ViewName;
    }, function (_unresolved_6) {
      ButtonLock = _unresolved_6.ButtonLock;
      GameUtil = _unresolved_6.GameUtil;
    }, function (_unresolved_7) {
      LangMgr = _unresolved_7.LangMgr;
    }, function (_unresolved_8) {
      FincaFightControl = _unresolved_8.FincaFightControl;
    }, function (_unresolved_9) {
      tab = _unresolved_9.tab;
    }, function (_unresolved_10) {
      RoleData = _unresolved_10.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "400a2ib0XpBrLyjXdg1h9y5", "FincaFightItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FincaFightItem", FincaFightItem = (_dec = ccclass('FincaFightItem'), _dec2 = property(_crd && PlayerHeadItem === void 0 ? (_reportPossibleCrUseOfPlayerHeadItem({
        error: Error()
      }), PlayerHeadItem) : PlayerHeadItem), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Sprite), _dec8 = property(Node), _dec9 = (_crd && ButtonLock === void 0 ? (_reportPossibleCrUseOfButtonLock({
        error: Error()
      }), ButtonLock) : ButtonLock)(1, () => {}), _dec(_class = (_class2 = class FincaFightItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "palyerHerdItem", _descriptor, this);

          _initializerDefineProperty(this, "lbl_name", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_force", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_score", _descriptor4, this);

          _initializerDefineProperty(this, "lbl_lv", _descriptor5, this);

          _initializerDefineProperty(this, "sp_head", _descriptor6, this);

          _initializerDefineProperty(this, "node_sweep", _descriptor7, this);

          this.roleId = "";
        }

        setData(data) {
          this.roleId = data.roleId;

          if (this.roleId.indexOf("r_") > -1) {
            // 当前是机器人 SimpleRoleInfo
            var robotId = Number(this.roleId.replace("r_", ""));
            var tabInfo = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().RobotTableById.getValue(robotId);
            this.palyerHerdItem.setCloseCallBack(() => {});
            this.lbl_lv.string = String(tabInfo.PlayerLevel);
            var itemHeadTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(tabInfo.Head);
            this.sp_head.setTexture(itemHeadTab.Icon);
            this.lbl_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(tabInfo.Name);
            this.lbl_score.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_fincafight_13", [data.score]);
            this.lbl_force.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertNumber(data.powerScore);
          } else {
            var playerInfo = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
              error: Error()
            }), SimpleRoleInfo) : SimpleRoleInfo)();
            playerInfo.merge(data.simpleRole);
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
                  "roleId": data.roleId
                }
              });
            });
            this.lbl_name.string = data.simpleRole.name;
            this.lbl_force.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertNumber(data.powerScore);
            this.lbl_score.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_fincafight_13", [data.score]);
          } // 是否显示扫荡按钮


          this.node_sweep.active = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.powerScore >= data.powerScore * (1 + (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().FincaFightBattleSkip / 10000);
        } // 竞技场攻击


        onClickFight(event, isSweep) {
          (_crd && FincaFightControl === void 0 ? (_reportPossibleCrUseOfFincaFightControl({
            error: Error()
          }), FincaFightControl) : FincaFightControl).ins.reqFincaBattleFight(this.roleId, Boolean(Number(isSweep)));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "palyerHerdItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_name", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_force", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_score", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_lv", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sp_head", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_sweep", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "onClickFight", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "onClickFight"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d3ab244d07954fb61d5fbd014627061a57a1a0b7.js.map
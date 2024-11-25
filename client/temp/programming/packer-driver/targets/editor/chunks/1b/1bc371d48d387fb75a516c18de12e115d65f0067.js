System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "client_protocol", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Label, Node, Sprite, ItemInfo, ItemPoolMgr, CommonItem, proto, Net, OpenFunctionMgr, LangMgr, RoleData, BattleMainDataControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, HandbookItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "../home/battle/BattleMainDataControl", _context.meta, extras);
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
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ItemInfo = _unresolved_2.ItemInfo;
    }, function (_unresolved_3) {
      ItemPoolMgr = _unresolved_3.ItemPoolMgr;
    }, function (_unresolved_4) {
      CommonItem = _unresolved_4.CommonItem;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_5) {
      Net = _unresolved_5.Net;
    }, function (_unresolved_6) {
      OpenFunctionMgr = _unresolved_6.OpenFunctionMgr;
    }, function (_unresolved_7) {
      LangMgr = _unresolved_7.LangMgr;
    }, function (_unresolved_8) {
      RoleData = _unresolved_8.RoleData;
    }, function (_unresolved_9) {
      BattleMainDataControl = _unresolved_9.BattleMainDataControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae6d18bUzVMNpeTFEvNTO8R", "HandbookItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HandbookItem", HandbookItem = (_dec = ccclass('HandbookItem'), _dec2 = property(Sprite), _dec3 = property([_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
        error: Error()
      }), CommonItem) : CommonItem]), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Node), _dec(_class = (_class2 = class HandbookItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "openIcon", _descriptor, this);

          _initializerDefineProperty(this, "commonItems", _descriptor2, this);

          _initializerDefineProperty(this, "node_finish", _descriptor3, this);

          _initializerDefineProperty(this, "node_waiting", _descriptor4, this);

          _initializerDefineProperty(this, "node_got", _descriptor5, this);

          _initializerDefineProperty(this, "node_lock", _descriptor6, this);

          _initializerDefineProperty(this, "node_get", _descriptor7, this);

          _initializerDefineProperty(this, "lbl_condition_txt1", _descriptor8, this);

          _initializerDefineProperty(this, "lbl_condition_txt2", _descriptor9, this);

          _initializerDefineProperty(this, "lbl_condition_txt3", _descriptor10, this);

          _initializerDefineProperty(this, "node_content", _descriptor11, this);

          this._openTab = null;
        }

        initData(_tab) {
          this._openTab = _tab;
          this.openIcon.setTexture(_tab.Icon);
          const showType = _tab.ShowType;
          this.node_waiting.active = showType === 2;
          this.node_finish.active = showType === 1;
          this.node_content.destroyAllChildren(); // 显示奖励

          for (let i = 0; i < _tab.RewardItemId.length; i++) {
            const itemId = _tab.RewardItemId[i];
            const itemCount = _tab.RewardItemNum[i];
            const info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            info.itemId = itemId;
            info.num = itemCount;
            const itemItem = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(info, this.node_content);
            const itemTs = itemItem.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
              error: Error()
            }), CommonItem) : CommonItem);
            itemTs.initData(info);
          } // 是否已经领取奖励


          const funcData = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.getOpenFunctionData(_tab.Name);

          for (let k = 1; k <= 3; k++) {
            const lbl = this["lbl_condition_txt" + k];
            lbl.string = "";
          }

          if (!funcData.isOpen) {
            this.node_lock.active = true; // 如果没有开放显示开放条件ui_handbook_

            /* 1：主線關卡到達{0}|2：玩家等級達到{0}級|3：創角時間達到{0}天 */

            if (_tab.BattleLv) {
              this.lbl_condition_txt1.node.active = true;
              this.lbl_condition_txt1.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString("ui_handbook_1", [_tab.BattleLv]);
              const ids = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
                error: Error()
              }), BattleMainDataControl) : BattleMainDataControl).ins.getStageClearIds();

              if (ids.indexOf(_tab.BattleLv) > -1) {
                this.lbl_condition_txt1.color = new Color().fromHEX("#47FA1E");
              } else {
                this.lbl_condition_txt1.color = new Color().fromHEX("#95AAC2");
              }
            } else {
              this.lbl_condition_txt1.node.active = false;
              this.lbl_condition_txt1.string = "";
            }

            if (_tab.PlayerLv) {
              this.lbl_condition_txt2.node.active = true;
              this.lbl_condition_txt2.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString("ui_handbook_2", [_tab.PlayerLv]);

              if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.level >= _tab.PlayerLv) {
                this.lbl_condition_txt2.color = new Color().fromHEX("#47FA1E");
              } else {
                this.lbl_condition_txt2.color = new Color().fromHEX("#95AAC2");
              }
            } else {
              this.lbl_condition_txt2.node.active = false;
              this.lbl_condition_txt2.string = "";
            }

            if (_tab.CreateDay) {
              this.lbl_condition_txt3.node.active = true;
              this.lbl_condition_txt3.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString("ui_handbook_3", [_tab.CreateDay]);
              const newDate = new Date((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.createTime * 1000);
              const tomorrow = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
              const times = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.getServerUtcTime() - tomorrow.getTime() / 1000;
              let nowDay = 1;

              if (times > 0) {
                nowDay = Math.ceil(((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.getServerUtcTime() - tomorrow.getTime() / 1000) / 86400) + 1;
              }

              if (nowDay >= _tab.CreateDay) {
                this.lbl_condition_txt3.color = new Color().fromHEX("#47FA1E");
              } else {
                this.lbl_condition_txt3.color = new Color().fromHEX("#95AAC2");
              }
            } else {
              this.lbl_condition_txt3.node.active = false;
              this.lbl_condition_txt3.string = "";
            }

            console.log(this.lbl_condition_txt1.string, this.lbl_condition_txt2.string, this.lbl_condition_txt3.string);
            this.node_get.active = false;
          } else {
            this.node_got.active = funcData.isReceivedRewards;
            this.node_get.active = !funcData.isReceivedRewards;
          }

          console.log(this.lbl_condition_txt1.string, this.lbl_condition_txt2.string, this.lbl_condition_txt3.string);
        } // 领取奖励


        sendMsg() {
          const funcData = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.getOpenFunctionData(this._openTab.Name);

          if (funcData.isOpen && !funcData.isReceivedRewards) {
            let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_ReceiveOpenFunctionRewardReq();
            msg.name = this._openTab.Name;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.ReceiveOpenFunctionRewardReq, msg);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "openIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "commonItems", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_finish", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_waiting", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_got", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_lock", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_get", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbl_condition_txt1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbl_condition_txt2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_condition_txt3", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec12], {
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
//# sourceMappingURL=1bc371d48d387fb75a516c18de12e115d65f0067.js.map
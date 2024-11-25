System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Prefab, ItemInfo, proto, Net, BattleMainDataControl, tab, LangMgr, ItemPoolMgr, setTextTime_3, LevelRewardState, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, BattleMainRewardItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "./BattleMainDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime_(extras) {
    _reporterNs.report("setTextTime_3", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelRewardState(extras) {
    _reporterNs.report("LevelRewardState", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
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
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ItemInfo = _unresolved_2.ItemInfo;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      Net = _unresolved_3.Net;
    }, function (_unresolved_4) {
      BattleMainDataControl = _unresolved_4.BattleMainDataControl;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      LangMgr = _unresolved_6.LangMgr;
    }, function (_unresolved_7) {
      ItemPoolMgr = _unresolved_7.ItemPoolMgr;
    }, function (_unresolved_8) {
      setTextTime_3 = _unresolved_8.setTextTime_3;
    }, function (_unresolved_9) {
      LevelRewardState = _unresolved_9.LevelRewardState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b46a3i10ChHGZh9+4Ee19QT", "BattleMainRewardItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleMainRewardItem", BattleMainRewardItem = (_dec = ccclass('BattleMainRewardItem'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec(_class = (_class2 = class BattleMainRewardItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pfb_common_item", _descriptor, this);

          _initializerDefineProperty(this, "node_not_achieved", _descriptor2, this);

          _initializerDefineProperty(this, "node_got", _descriptor3, this);

          _initializerDefineProperty(this, "node_receive", _descriptor4, this);

          _initializerDefineProperty(this, "lbl_reward", _descriptor5, this);

          _initializerDefineProperty(this, "node_content", _descriptor6, this);

          this._rewardTabData = null;
          this._curStageId = 0;
          this._state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
            error: Error()
          }), LevelRewardState) : LevelRewardState).None;
          this._idx = void 0;
        }

        initData(index, stageId) {
          this.node_content.destroyAllChildren();
          this._rewardTabData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ChapterFristRewardTableById.getValue(stageId);
          this._idx = index;
          this._curStageId = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getCurFightStageId();
          this.lbl_reward.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_battle_1", [(_crd && setTextTime_3 === void 0 ? (_reportPossibleCrUseOfsetTextTime_({
            error: Error()
          }), setTextTime_3) : setTextTime_3)(this._rewardTabData.Time[index])]);
          this.setState();
        }

        setState() {
          this.node_content.destroyAllChildren();
          const rewardId = this._rewardTabData["RewardItemIds" + (this._idx + 1)];
          const rewardNum = this._rewardTabData["RewardItemNum" + (this._idx + 1)];
          const gotRewards = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getReceiveFirstRewardById(this._rewardTabData.Id, this._idx);
          let isGot = false;

          if (gotRewards) {
            isGot = true;
          }
          /* 如果当前的stageId大于当前id 则状态是 NotAchieved*/


          let state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
            error: Error()
          }), LevelRewardState) : LevelRewardState).None;

          if (this._rewardTabData.Id > this._curStageId) {
            state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
              error: Error()
            }), LevelRewardState) : LevelRewardState).NotAchieved;
          } else if (this._rewardTabData.Id < this._curStageId) {
            // 判断是否领取
            if (isGot) {
              state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
                error: Error()
              }), LevelRewardState) : LevelRewardState).Got;
            } else {
              state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
                error: Error()
              }), LevelRewardState) : LevelRewardState).Receive;
            }
          } else {
            // 获取当前的时间
            const maxTime = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
              error: Error()
            }), BattleMainDataControl) : BattleMainDataControl).ins.getCurMaxAliveSecond();
            const isPass = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
              error: Error()
            }), BattleMainDataControl) : BattleMainDataControl).ins.getIsPasstStageByStageId(this._curStageId);

            if (maxTime < this._rewardTabData.Time[this._idx]) {
              state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
                error: Error()
              }), LevelRewardState) : LevelRewardState).NotAchieved;
            } else {
              // 判断是否领取
              if (isGot) {
                state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
                  error: Error()
                }), LevelRewardState) : LevelRewardState).Got;
              } else {
                if (this._idx === 2) {
                  if (isPass) {
                    state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
                      error: Error()
                    }), LevelRewardState) : LevelRewardState).Receive;
                  } else {
                    state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
                      error: Error()
                    }), LevelRewardState) : LevelRewardState).NotAchieved;
                  }
                } else {
                  state = (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
                    error: Error()
                  }), LevelRewardState) : LevelRewardState).Receive;
                }
              }
            }
          }

          this._state = state;

          for (let i = 0; i < rewardId.length; i++) {
            const item_data = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            item_data.itemId = rewardId[i];
            item_data.num = rewardNum[i];
            let node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(item_data, this.node_content);
          }

          this.node_got.active = state === (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
            error: Error()
          }), LevelRewardState) : LevelRewardState).Got;
          this.node_receive.active = state === (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
            error: Error()
          }), LevelRewardState) : LevelRewardState).Receive;
          this.node_not_achieved.active = state === (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
            error: Error()
          }), LevelRewardState) : LevelRewardState).NotAchieved;
        }

        clickReceiveBtn(event, key) {
          if (this._state !== (_crd && LevelRewardState === void 0 ? (_reportPossibleCrUseOfLevelRewardState({
            error: Error()
          }), LevelRewardState) : LevelRewardState).Receive) {
            return;
          }

          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ReceiveMainFirstRewardReq();
          msg.indexes = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getAllIndex(this._rewardTabData.Id);
          msg.stageId = this._rewardTabData.Id;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveMainFirstRewardReq, msg);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_common_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_not_achieved", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_got", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_receive", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_reward", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec7], {
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
//# sourceMappingURL=bcfc5638628e20a5e19afad473cb8b0c3b10efd2.js.map
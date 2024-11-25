System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, tab, proto, AWARD_STATE, JIANGHU_TYPE, UIMgr, ViewName, Net, ItemInfo, ItemPoolMgr, LangMgr, GameplayViewDataMgr, InfiniteCell, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, InstanceRewardPopItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAWARD_STATE(extras) {
    _reporterNs.report("AWARD_STATE", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJIANGHU_TYPE(extras) {
    _reporterNs.report("JIANGHU_TYPE", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayViewDataMgr(extras) {
    _reporterNs.report("GameplayViewDataMgr", "../GameplayViewDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      AWARD_STATE = _unresolved_3.AWARD_STATE;
      JIANGHU_TYPE = _unresolved_3.JIANGHU_TYPE;
    }, function (_unresolved_4) {
      UIMgr = _unresolved_4.UIMgr;
    }, function (_unresolved_5) {
      ViewName = _unresolved_5.ViewName;
    }, function (_unresolved_6) {
      Net = _unresolved_6.Net;
    }, function (_unresolved_7) {
      ItemInfo = _unresolved_7.ItemInfo;
    }, function (_unresolved_8) {
      ItemPoolMgr = _unresolved_8.ItemPoolMgr;
    }, function (_unresolved_9) {
      LangMgr = _unresolved_9.LangMgr;
    }, function (_unresolved_10) {
      GameplayViewDataMgr = _unresolved_10.GameplayViewDataMgr;
    }, function (_unresolved_11) {
      InfiniteCell = _unresolved_11.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "440f1PlCZ1MP4CljndMMcdE", "InstanceRewardPopItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InstanceRewardPopItem", InstanceRewardPopItem = (_dec = ccclass('InstanceRewardPopItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec(_class = (_class2 = class InstanceRewardPopItem extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_lock", _descriptor, this);

          _initializerDefineProperty(this, "node_go", _descriptor2, this);

          _initializerDefineProperty(this, "node_receive", _descriptor3, this);

          _initializerDefineProperty(this, "node_got", _descriptor4, this);

          _initializerDefineProperty(this, "node_layout", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_stage_id", _descriptor6, this);

          this._state = (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
            error: Error()
          }), AWARD_STATE) : AWARD_STATE).NONE;
          this._tabData = null;
          this.view_type = (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).NONE;
        }

        UpdateContent(data) {
          this._tabData = data.data;
          this.view_type = data.view;
          var exportData = data.exportData;
          this.node.name = String(this._tabData.StageId);

          if (exportData.receivedFirstRewardStageIds.indexOf(this._tabData.StageId) > -1) {
            this._state = (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
              error: Error()
            }), AWARD_STATE) : AWARD_STATE).GOT;
          } else {
            if ((_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
              error: Error()
            }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getCurSweepStageId(this.view_type) < this._tabData.StageId) {
              if ((_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
                error: Error()
              }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.curFightStageId === this._tabData.StageId) {
                this._state = (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
                  error: Error()
                }), AWARD_STATE) : AWARD_STATE).GO;
              } else {
                this._state = (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
                  error: Error()
                }), AWARD_STATE) : AWARD_STATE).LOCK;
              }
            } else {
              this._state = (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
                error: Error()
              }), AWARD_STATE) : AWARD_STATE).RECEIVE;
            }
          } // 拿着stageID去pveStageTable找数据


          var pveStageTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(this._tabData.StageId);
          this.lbl_stage_id.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_instance_1", [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(pveStageTab.StageName)]);
          this.setAwardState(this._state);
          this.showAwardItem();
        } // 显示奖励


        showAwardItem() {
          this.node_layout.destroyAllChildren();

          for (var i = 0; i < this._tabData.ClearRewardItemIds.length; i++) {
            var itemId = this._tabData.ClearRewardItemIds[i];
            var itemCount = this._tabData.ClearRewardItemNum[i];

            if (itemId) {
              var itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                error: Error()
              }), ItemInfo) : ItemInfo)();
              itemInfo.itemId = itemId;
              itemInfo.num = itemCount;
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(itemInfo, this.node_layout);
            }
          }
        }

        setAwardState(state) {
          this.node_lock.active = false;
          this.node_go.active = false;
          this.node_receive.active = false;
          this.node_got.active = false;

          switch (state) {
            case (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
              error: Error()
            }), AWARD_STATE) : AWARD_STATE).GO:
              this.node_go.active = true;
              break;

            case (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
              error: Error()
            }), AWARD_STATE) : AWARD_STATE).GOT:
              this.node_got.active = true;
              break;

            case (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
              error: Error()
            }), AWARD_STATE) : AWARD_STATE).LOCK:
              this.node_lock.active = true;
              break;

            case (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
              error: Error()
            }), AWARD_STATE) : AWARD_STATE).RECEIVE:
              this.node_receive.active = true;
              break;

            default:
              break;
          }
        } // 点击前往副本


        goStage() {
          var view_type = (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).NONE;

          if (this._tabData.StageId < 10200) {
            view_type = (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
              error: Error()
            }), JIANGHU_TYPE) : JIANGHU_TYPE).GoldStage;
          } else {
            view_type = (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
              error: Error()
            }), JIANGHU_TYPE) : JIANGHU_TYPE).FeedStage;
          }

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
            error: Error()
          }), ViewName) : ViewName).InstanceRewardPop);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).InstanceZonesView,
            data: [view_type]
          });
        } // 点击领取奖励


        getAward() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ReceiveExploreStageFirstRewardReq();
          msg.stageId = this._tabData.StageId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveExploreStageFirstRewardReq, msg);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_lock", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_go", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_receive", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_got", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_layout", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_stage_id", [_dec7], {
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
//# sourceMappingURL=26dad7d884c378fb82c1d6540bb7efa4b736fb39.js.map
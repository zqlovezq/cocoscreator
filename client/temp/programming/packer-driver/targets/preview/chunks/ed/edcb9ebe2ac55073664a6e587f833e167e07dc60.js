System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "client_protocol", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, Sprite, InfiniteCell, tab, LangMgr, ItemInfo, ItemPoolMgr, ConsumptionToPurchase, GameUtil, proto, Net, JIANGHU_TYPE, GameplayViewDataMgr, ShowTips, PowerDifficultyTag, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, InstanceZonesViewItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConsumptionToPurchase(extras) {
    _reporterNs.report("ConsumptionToPurchase", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJIANGHU_TYPE(extras) {
    _reporterNs.report("JIANGHU_TYPE", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayViewDataMgr(extras) {
    _reporterNs.report("GameplayViewDataMgr", "../GameplayViewDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerDifficultyTag(extras) {
    _reporterNs.report("PowerDifficultyTag", "../../home/PowerDifficultyTag", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }, function (_unresolved_5) {
      ItemInfo = _unresolved_5.ItemInfo;
    }, function (_unresolved_6) {
      ItemPoolMgr = _unresolved_6.ItemPoolMgr;
    }, function (_unresolved_7) {
      ConsumptionToPurchase = _unresolved_7.ConsumptionToPurchase;
      GameUtil = _unresolved_7.GameUtil;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_8) {
      Net = _unresolved_8.Net;
    }, function (_unresolved_9) {
      JIANGHU_TYPE = _unresolved_9.JIANGHU_TYPE;
    }, function (_unresolved_10) {
      GameplayViewDataMgr = _unresolved_10.GameplayViewDataMgr;
    }, function (_unresolved_11) {
      ShowTips = _unresolved_11.ShowTips;
    }, function (_unresolved_12) {
      PowerDifficultyTag = _unresolved_12.PowerDifficultyTag;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be2e8EPOXxI376S04R/5fKG", "InstanceZonesViewItem", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'labelAssembler', 'Node', 'RichText', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InstanceZonesViewItem", InstanceZonesViewItem = (_dec = ccclass('InstanceZonesViewItem'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Label), _dec(_class = (_class2 = class InstanceZonesViewItem extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor() {
          super(...arguments);

          //@property(RichText)
          //lbl_level: RichText = null;
          _initializerDefineProperty(this, "lbl_level", _descriptor, this);

          _initializerDefineProperty(this, "node_content", _descriptor2, this);

          _initializerDefineProperty(this, "node_sweep", _descriptor3, this);

          _initializerDefineProperty(this, "node_challenge", _descriptor4, this);

          _initializerDefineProperty(this, "node_lock", _descriptor5, this);

          _initializerDefineProperty(this, "node_pass", _descriptor6, this);

          _initializerDefineProperty(this, "node_sweep_buy", _descriptor7, this);

          _initializerDefineProperty(this, "node_sweep_buy_diamond", _descriptor8, this);

          _initializerDefineProperty(this, "lbl_recommend_power", _descriptor9, this);

          this._tabData = null;
          this._viewType = (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).NONE;
          this._exportData = null;
          this._sweepInfo = null;
        }

        UpdateContent(data) {
          this._tabData = data.data;
          this._viewType = data.type;
          this._exportData = data.exportData;
          this._sweepInfo = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getSweepInfo(this._viewType);
          var sweep = this._exportData.clearedStageIds.indexOf(this._tabData.StageId) > -1;
          this.setSweepBtn(); //this.lbl_level.string = LangMgr.getCombineString("ui_instance_2", [LangMgr.getLab(this._tabData.StageName)])

          this.lbl_level.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this._tabData.StageName); // 显示是否可以扫荡 如果可以扫荡

          this.node_content.destroyAllChildren();
          this.node_pass.active = sweep && this._tabData.StageId !== (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getCurSweepStageId(this._viewType);
          this.node_challenge.active = false;
          this.node_lock.active = false;

          if (sweep) {
            var sweepTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().PveSweepTableByStageId.getValue(this._tabData.StageId);

            for (var i = 0; i < sweepTab.SweepRewardItemIds.length; i++) {
              if (sweepTab.SweepRewardItemIds[i]) {
                this.createItem(sweepTab.SweepRewardItemIds[i], sweepTab.SweepRewardItemNum[i]);
              }
            }
          } else {
            if (this._tabData.StageId === (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
              error: Error()
            }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.curFightStageId) {
              this.node_challenge.active = true;

              for (var _i = 0; _i < this._tabData.RewardItemId.length; _i++) {
                this.createItem(this._tabData.RewardItemId[_i], this._tabData.RewardItemNum[_i]);
              } // 显示推荐战力


              this.lbl_recommend_power.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                error: Error()
              }), GameUtil) : GameUtil).convertNumber(this._tabData.RecommendFight);
            } else if (this._tabData.StageId > (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
              error: Error()
            }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.curFightStageId) {
              for (var _i2 = 0; _i2 < this._tabData.RewardItemId.length; _i2++) {
                this.createItem(this._tabData.RewardItemId[_i2], this._tabData.RewardItemNum[_i2]);
              }

              this.node_lock.active = true;
            }
          }

          this.node.getComponent(_crd && PowerDifficultyTag === void 0 ? (_reportPossibleCrUseOfPowerDifficultyTag({
            error: Error()
          }), PowerDifficultyTag) : PowerDifficultyTag) && this.node.getComponent(_crd && PowerDifficultyTag === void 0 ? (_reportPossibleCrUseOfPowerDifficultyTag({
            error: Error()
          }), PowerDifficultyTag) : PowerDifficultyTag).setStageId(this._tabData.StageId);
        } // 如果当前item可以扫荡 设置扫荡按钮


        setSweepBtn() {
          var sweep = this._exportData.clearedStageIds.indexOf(this._tabData.StageId) > -1;
          this.node_sweep.active = sweep && this._tabData.StageId === (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getCurSweepStageId(this._viewType) && (this._sweepInfo.freeTimes > 0 || this._sweepInfo.buyTimes === 0);
          this.node_sweep_buy.active = sweep && this._tabData.StageId === (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getCurSweepStageId(this._viewType) && this._sweepInfo.freeTimes == 0 && this._sweepInfo.buyTimes > 0;

          if (this.node_sweep_buy.active) {
            var needDiamond = this._sweepInfo.diamondData[this._exportData.notFreeSweepTimes] ? this._sweepInfo.diamondData[this._exportData.notFreeSweepTimes] : this._sweepInfo.diamondData[this._sweepInfo.diamondData.length - 1];
            this.node_sweep_buy_diamond.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_instance_3", [needDiamond]);
          }

          this.node_sweep.getChildByName("sweep_btn").getComponent(Sprite).grayscale = this._sweepInfo.freeTimes === 0 && this._sweepInfo.buyTimes === 0;
          this.node_sweep.getChildByName("sweep_btn").getComponent(Button).interactable = !(this._sweepInfo.freeTimes === 0 && this._sweepInfo.buyTimes === 0);
        }

        createItem(itemId, num) {
          var itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          itemInfo.itemId = itemId;
          itemInfo.num = num;
          (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(itemInfo, this.node_content);
        } // 挑战


        onClickChallenge() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_StartStageReq();
          msg.stageId = this._tabData.StageId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.StartStageReq, msg);
        } // 扫荡


        onClickSweep() {
          var canSweep = this.setSweepdata();

          if (canSweep) {
            this.sendMsg();
          }
        }

        sendMsg() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_SweepExploreStageReq();
          msg.stageId = this._tabData.StageId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SweepExploreStageReq, msg);
        } // 如果是扫荡判断当前的数据 返回是否可以扫荡


        setSweepdata() {
          var self = this;
          var sweepInfo = this._sweepInfo;
          var needDiamond = this._sweepInfo.diamondData[this._exportData.notFreeSweepTimes] ? this._sweepInfo.diamondData[this._exportData.notFreeSweepTimes] : this._sweepInfo.diamondData[this._sweepInfo.diamondData.length - 1];
          var canUse = false;

          if (sweepInfo.freeTimes === 0) {
            // 判断付费次数
            if (sweepInfo.buyTimes === 0) {
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab('Tips_timeshortage'));
            } else {
              // 弹窗是否花费一定钻石购买次数
              (_crd && ConsumptionToPurchase === void 0 ? (_reportPossibleCrUseOfConsumptionToPurchase({
                error: Error()
              }), ConsumptionToPurchase) : ConsumptionToPurchase)(1, needDiamond, "Tips_instance_1", () => {
                self.sendMsg();
              });
            }
          } else {
            canUse = true;
          }

          return canUse;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_level", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_sweep", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_challenge", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_lock", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_pass", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_sweep_buy", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_sweep_buy_diamond", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbl_recommend_power", [_dec10], {
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
//# sourceMappingURL=edcb9ebe2ac55073664a6e587f833e167e07dc60.js.map
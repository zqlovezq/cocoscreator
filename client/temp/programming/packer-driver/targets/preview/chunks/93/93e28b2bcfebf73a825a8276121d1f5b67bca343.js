System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "client_protocol", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, Toggle, ViewPop, AWARD_STATE, JIANGHU_TYPE, tab, GameplayViewDataMgr, proto, InstanceRewardPopItem, EventMgr, UIMgr, ViewName, InfiniteList, RedMgr, RedDotType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, InstanceRewardPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAWARD_STATE(extras) {
    _reporterNs.report("AWARD_STATE", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJIANGHU_TYPE(extras) {
    _reporterNs.report("JIANGHU_TYPE", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayViewDataMgr(extras) {
    _reporterNs.report("GameplayViewDataMgr", "../GameplayViewDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInstanceRewardPopItem(extras) {
    _reporterNs.report("InstanceRewardPopItem", "./InstanceRewardPopItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      AWARD_STATE = _unresolved_3.AWARD_STATE;
      JIANGHU_TYPE = _unresolved_3.JIANGHU_TYPE;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      GameplayViewDataMgr = _unresolved_5.GameplayViewDataMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_6) {
      InstanceRewardPopItem = _unresolved_6.InstanceRewardPopItem;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }, function (_unresolved_8) {
      UIMgr = _unresolved_8.UIMgr;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      InfiniteList = _unresolved_10.default;
    }, function (_unresolved_11) {
      RedMgr = _unresolved_11.RedMgr;
    }, function (_unresolved_12) {
      RedDotType = _unresolved_12.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5a8a8h/85CZJ54a3nslej2", "InstanceRewardPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Node', 'Prefab', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InstanceRewardPop", InstanceRewardPop = (_dec = ccclass('InstanceRewardPop'), _dec2 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = (_class2 = class InstanceRewardPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "list_view", _descriptor, this);

          _initializerDefineProperty(this, "pfb_item", _descriptor2, this);

          _initializerDefineProperty(this, "node_toggle", _descriptor3, this);

          this.view_type = (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).NONE;
          this.gold_tabs = [];
          this.feed_tabs = [];
          this.cur_tabs = [];
          this.curExportInfo = null;
        }

        register() {
          // 领取奖励 刷新item
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveExploreStageFirstRewardRsp, this.on_s2c_ReceiveExploreStageFirstRewardRsp, this);
        }

        on_s2c_ReceiveExploreStageFirstRewardRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.curExportInfo.receivedFirstRewardStageIds.push(msg.stageId);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).ChallengeDailyAward);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: msg.rewards
          });
          var content = this.list_view.getContent();
          var item = content.getChildByName(String(msg.stageId));
          var itemTs = item.getComponent(_crd && InstanceRewardPopItem === void 0 ? (_reportPossibleCrUseOfInstanceRewardPopItem({
            error: Error()
          }), InstanceRewardPopItem) : InstanceRewardPopItem);
          itemTs.setAwardState((_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
            error: Error()
          }), AWARD_STATE) : AWARD_STATE).GOT);
          this.scrollToIndex();
        }

        clickChangeView(e, type) {
          if (this.view_type === Number(type)) {
            return;
          }

          this.view_type = Number(type);
          this.curExportInfo = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getExportInfo(this.view_type);
          (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.setCurFightStageId(this.view_type);
          this.setCurTabs();
          this.list_view.Reload(false, true);
          this.scrollToIndex();
        }

        onShow() {
          // 首通奖励数据
          this.view_type = this.openData;
          this.curExportInfo = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getExportInfo(this.view_type);

          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveClearStageTable.length; i++) {
            var dataTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().PveClearStageTable[i];

            if (dataTab.StageId < 10200) {
              this.gold_tabs.push(dataTab);
            } else if (dataTab.StageId < 10300) {
              this.feed_tabs.push(dataTab);
            }
          }

          this.node_toggle.getChildByName("Toggle" + this.view_type).getComponent(Toggle).isChecked = true;
          this.setCurTabs();
          this.list_view.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this)
          });
          this.scrollToIndex();
        }

        setCurTabs() {
          if (this.view_type === (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).GoldStage) {
            this.cur_tabs = this.gold_tabs;
          } else {
            this.cur_tabs = this.feed_tabs;
          }
        }

        scrollToIndex() {
          // 自动滚动到当前的位置
          var index = 0;

          for (var i = 0; i < this.cur_tabs.length; i++) {
            var stageId = this.cur_tabs[i].StageId;

            if (this.curExportInfo.receivedFirstRewardStageIds.indexOf(stageId) === -1) {
              index = i;
              break;
            }
          } // this.list_view.ScrollToCell(index-1);


          var pos = this.list_view.GetScrollPosOfCell(index - 1);
          this.list_view.setContentPos(pos.y, 0, pos.y);
        }

        getCellCount() {
          return this.cur_tabs.length;
        }

        getCellHeight(idx) {
          return 160;
        }

        getCellIdentifer(idx) {
          return "InstanceRewardPopItem";
        }

        getCellView(idx, identifer) {
          return instantiate(this.pfb_item).getComponent(_crd && InstanceRewardPopItem === void 0 ? (_reportPossibleCrUseOfInstanceRewardPopItem({
            error: Error()
          }), InstanceRewardPopItem) : InstanceRewardPopItem);
        }

        GetCellData(idx) {
          return {
            data: this.cur_tabs[idx],
            exportData: this.curExportInfo,
            view: this.view_type
          };
        }

        onDestroy() {
          (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.setCurFightStageId(this.openData);
          super.onDestroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "list_view", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle", [_dec4], {
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
//# sourceMappingURL=93e28b2bcfebf73a825a8276121d1f5b67bca343.js.map
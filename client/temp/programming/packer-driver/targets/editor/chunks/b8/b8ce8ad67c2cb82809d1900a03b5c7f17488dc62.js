System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "client_protocol", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, ComponentBase, HeroRoadItem, UIMgr, tab, ActivityData, EventMgr, proto, ViewName, RoleData, TimeUtil, LangMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, HeroRoadView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroRoadItem(extras) {
    _reporterNs.report("HeroRoadItem", "./HeroRoadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeUtil(extras) {
    _reporterNs.report("TimeUtil", "../../../utils/TimeUtil", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      HeroRoadItem = _unresolved_3.HeroRoadItem;
    }, function (_unresolved_4) {
      UIMgr = _unresolved_4.UIMgr;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      ActivityData = _unresolved_6.ActivityData;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_8) {
      ViewName = _unresolved_8.ViewName;
    }, function (_unresolved_9) {
      RoleData = _unresolved_9.RoleData;
    }, function (_unresolved_10) {
      TimeUtil = _unresolved_10.TimeUtil;
    }, function (_unresolved_11) {
      LangMgr = _unresolved_11.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "776beEIkOVLpa7Tk8WQMC1F", "HeroRoadView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * HeroRoadView
       * zhudingchao
       * Mon Jun 24 2024 14:03:58 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/activity/heroRoad/HeroRoadView.ts
       *
       */

      _export("HeroRoadView", HeroRoadView = (_dec = ccclass('HeroRoadView'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = (_class2 = class HeroRoadView extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "timeLab", _descriptor, this);

          _initializerDefineProperty(this, "contentNode", _descriptor2, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor3, this);

          this.items = void 0;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.HeroCollectionPush, this.on_s2c_HeroCollectionPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetHeroCollectionRewardRsp, this.on_s2c_GetHeroCollectionRewardRsp, this);
        }

        initView() {
          this.items = [];
          let msg = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.heroCollectionMsg;
          let collectionDatas = msg.collectionData;

          let getProgress = type => {
            for (let key in collectionDatas) {
              if (collectionDatas[key].type == type) {
                return collectionDatas[key].sum;
              }
            }

            return 0;
          };

          let tables = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroCollectionTable;

          for (let key in tables) {
            let node = instantiate(this.itemPrefab);
            node.parent = this.contentNode;
            let com = node.getComponent(_crd && HeroRoadItem === void 0 ? (_reportPossibleCrUseOfHeroRoadItem({
              error: Error()
            }), HeroRoadItem) : HeroRoadItem);
            this.items.push(com);
            let state = 0;
            let index = msg.rewardList.indexOf(tables[key].Id);

            if (index >= 0) {
              state = 2;
            } else {
              index = msg.activatedList.indexOf(tables[key].Id);

              if (index >= 0) {
                state = 1;
              }
            }

            com.initView(tables[key], state, getProgress(tables[key].Type));
          }

          this.updateTimer(msg.closeTime); // for(let i:number=0;i<10;i++){
          //     let node=instantiate(this.itemPrefab);
          //     node.parent=this.contentNode;
          //     let com=node.getComponent(HeroRoadItem);
          //     this.items.push(com);
          // }
        }

        updateView() {
          let msg = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.heroCollectionMsg;
          let collectionDatas = msg.collectionData;

          let getProgress = type => {
            for (let key in collectionDatas) {
              if (collectionDatas[key].type == type) {
                return collectionDatas[key].sum;
              }
            }

            return 0;
          };

          for (let key in this.items) {
            let table = this.items[key].table;
            let state = 0;
            let index = msg.rewardList.indexOf(table.Id);

            if (index >= 0) {
              state = 2;
            } else {
              index = msg.activatedList.indexOf(table.Id);

              if (index >= 0) {
                state = 1;
              }
            }

            this.items[key].updateView(state, getProgress(table.Type));
          }

          this.updateTimer(msg.closeTime);
        }

        updateTimer(closeTime) {
          let lastTimer = Number(closeTime) - Math.floor((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime());

          if (lastTimer > 0) {
            let ret = (_crd && TimeUtil === void 0 ? (_reportPossibleCrUseOfTimeUtil({
              error: Error()
            }), TimeUtil) : TimeUtil).formaterWithOutSecond3(lastTimer);
            let day = ret.day ? ret.day : 0;
            let hours = ret.hours ? ret.hours : 0;
            this.timeLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_commondesc_71", [day, hours]);
          } else {
            this.timeLab.node.active = false;
          }
        }

        onClickHelp() {
          // ShowTips("弹出通用说明框")
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CommonHelpPop,
            data: {
              "content": "待策划配置"
            }
          });
        }
        /**舰队启航 */


        on_s2c_HeroCollectionPush(msg) {
          this.updateView();
        } // 领取舰队启航奖励


        on_s2c_GetHeroCollectionRewardRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            });
            this.updateView();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "timeLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec4], {
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
//# sourceMappingURL=b8ce8ad67c2cb82809d1900a03b5c7f17488dc62.js.map
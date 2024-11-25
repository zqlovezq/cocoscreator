System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "client_protocol", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, Sprite, ViewPop, ViewName, tab, CombineStarUpItem, CombineToggleItem, createAnimation, setTextTime, ActivityData, BattlePassItem, HeroDataControl, LangMgr, UIMgr, EventMgr, proto, CombineGiftItem, RedMgr, RedDotType, RoleData, CombineAccumulatedRechargeItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, CombineActivityMainView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCombineStarUpItem(extras) {
    _reporterNs.report("CombineStarUpItem", "./CombineStarUpItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCombineToggleItem(extras) {
    _reporterNs.report("CombineToggleItem", "./CombineToggleItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimation(extras) {
    _reporterNs.report("createAnimation", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattlePassItem(extras) {
    _reporterNs.report("BattlePassItem", "../battlePass/BattlePassItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCombineGiftItem(extras) {
    _reporterNs.report("CombineGiftItem", "./CombineGiftItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCombineAccumulatedRechargeItem(extras) {
    _reporterNs.report("CombineAccumulatedRechargeItem", "./CombineAccumulatedRechargeItem", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ViewName = _unresolved_3.ViewName;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      CombineStarUpItem = _unresolved_5.CombineStarUpItem;
    }, function (_unresolved_6) {
      CombineToggleItem = _unresolved_6.CombineToggleItem;
    }, function (_unresolved_7) {
      createAnimation = _unresolved_7.createAnimation;
      setTextTime = _unresolved_7.setTextTime;
    }, function (_unresolved_8) {
      ActivityData = _unresolved_8.ActivityData;
    }, function (_unresolved_9) {
      BattlePassItem = _unresolved_9.BattlePassItem;
    }, function (_unresolved_10) {
      HeroDataControl = _unresolved_10.HeroDataControl;
    }, function (_unresolved_11) {
      LangMgr = _unresolved_11.LangMgr;
    }, function (_unresolved_12) {
      UIMgr = _unresolved_12.UIMgr;
    }, function (_unresolved_13) {
      EventMgr = _unresolved_13.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_14) {
      CombineGiftItem = _unresolved_14.CombineGiftItem;
    }, function (_unresolved_15) {
      RedMgr = _unresolved_15.RedMgr;
    }, function (_unresolved_16) {
      RedDotType = _unresolved_16.RedDotType;
    }, function (_unresolved_17) {
      RoleData = _unresolved_17.RoleData;
    }, function (_unresolved_18) {
      CombineAccumulatedRechargeItem = _unresolved_18.CombineAccumulatedRechargeItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61ed2SAPyZC9LJFCZC1UySK", "CombineActivityMainView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'error', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CombineActivityMainView", CombineActivityMainView = (_dec = ccclass('CombineActivityMainView'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Sprite), _dec14 = property(Label), _dec15 = property(Node), _dec(_class = (_class2 = class CombineActivityMainView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "activityNode", _descriptor, this);

          _initializerDefineProperty(this, "pfb_toggle_item", _descriptor2, this);

          _initializerDefineProperty(this, "pfb_hero_grow", _descriptor3, this);

          _initializerDefineProperty(this, "pfb_battle_pass", _descriptor4, this);

          _initializerDefineProperty(this, "pfb_up_mall", _descriptor5, this);

          _initializerDefineProperty(this, "pfb_recharge", _descriptor6, this);

          _initializerDefineProperty(this, "node_toggle_content", _descriptor7, this);

          _initializerDefineProperty(this, "node_spine", _descriptor8, this);

          _initializerDefineProperty(this, "node_quality", _descriptor9, this);

          _initializerDefineProperty(this, "lbl_hero_name", _descriptor10, this);

          _initializerDefineProperty(this, "lbl_class_desc", _descriptor11, this);

          _initializerDefineProperty(this, "sp_class", _descriptor12, this);

          _initializerDefineProperty(this, "lbl_time", _descriptor13, this);

          _initializerDefineProperty(this, "node_hero", _descriptor14, this);

          this.currNode = null;
          this.curActivityId = 0;
          this.showHeroId = 0;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveBattlePassTaskRewardsRsp, this.on_s2c_ReceiveBattlePassTaskRewardsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveActivityHeroGrowRewardRsp, this.on_s2c_ReceiveActivityHeroGrowRewardRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyFixedShopCommodityRsp, this.on_s2c_BuyFixedShopCommodityRsp, this);
        }

        unRegister() {
          super.unRegister();
        }

        onDestroy() {
          super.onDestroy();
        }

        onShow() {
          // 获取活动分组
          const groups = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getAllActivityGroup();

          for (let i = 0; i < groups.length; i++) {
            const info = groups[i];

            if (this.openData === info.TabId) {
              let countDown = Number(info.endTime) - (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.getServerUtcTime();

              const timeUpdate = () => {
                countDown--;

                if (countDown <= 0) {
                  this.unschedule(timeUpdate);
                  this.node.active = false;
                } else {
                  this.lbl_time.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
                    error: Error()
                  }), setTextTime) : setTextTime)(countDown);
                }
              };

              timeUpdate();
              this.unschedule(timeUpdate);
              this.schedule(timeUpdate, 1);
            }
          }

          const _tab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ActivityTableByActivityId.getValue(this.openData);

          this.curActivityId = _tab.ActivityIds[0];
          this.createToggle(_tab.ActivityIds);
          this.switchView(this.curActivityId);
        }

        switchView(activityId) {
          if (this.currNode) {
            this.currNode.active = false;
          }

          this.node_hero.active = true;
          this.curActivityId = activityId;
          const activityInfo = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ActivityTableByActivityId.getValue(activityId);
          const view_type = activityInfo.Type;

          switch (view_type) {
            // 养成活动
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityHeroGrow:
              if (!this["view" + activityId]) {
                const hero_grow_layer = instantiate(this.pfb_hero_grow);
                hero_grow_layer.parent = this.activityNode;

                if (hero_grow_layer) {
                  this["view" + activityId] = hero_grow_layer.getComponent(_crd && CombineStarUpItem === void 0 ? (_reportPossibleCrUseOfCombineStarUpItem({
                    error: Error()
                  }), CombineStarUpItem) : CombineStarUpItem);
                  this.currNode = hero_grow_layer;
                  this["view" + activityId].onShow(activityId);
                }
              } else {
                this["view" + activityId].node.active = true;
                this.currNode = this["view" + activityId].node;
                this["view" + activityId].onShow(activityId);
              }

              const heroGrowData = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                error: Error()
              }), ActivityData) : ActivityData).ins.getHeroGrowData(activityId);
              const listData = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                error: Error()
              }), ActivityData) : ActivityData).ins.getHeroGrowTabs(activityId, heroGrowData.heroItemId);
              this.showHeroSpine(listData[0].AnimationId);
              break;
            // 登录战令

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_BattlePassSignIn1:
              if (!this["view" + activityId]) {
                const battleLayer = instantiate(this.pfb_battle_pass);
                battleLayer.parent = this.activityNode;

                if (battleLayer) {
                  this["view" + activityId] = battleLayer.getComponent(_crd && BattlePassItem === void 0 ? (_reportPossibleCrUseOfBattlePassItem({
                    error: Error()
                  }), BattlePassItem) : BattlePassItem);
                  this.currNode = battleLayer;
                  this["view" + activityId].onShow(null, activityInfo.Param1);
                }
              } else {
                this["view" + activityId].node.active = true;
                this.currNode = this["view" + activityId].node;
                this["view" + activityId].onShow(null, activityInfo.Param1);
              }

              const battleData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().BattlePassTableById.getValue(activityInfo.Param1);
              this.showHeroSpine(battleData.AnimationId);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityMall:
              if (!this["view" + activityId]) {
                const mallLayer = instantiate(this.pfb_up_mall);
                mallLayer.parent = this.activityNode;

                if (mallLayer) {
                  this["view" + activityId] = mallLayer.getComponent(_crd && CombineGiftItem === void 0 ? (_reportPossibleCrUseOfCombineGiftItem({
                    error: Error()
                  }), CombineGiftItem) : CombineGiftItem);
                  this.currNode = mallLayer;
                  this["view" + activityId].onShow(activityInfo.Param1);
                }
              } else {
                this["view" + activityId].node.active = true;
                this.currNode = this["view" + activityId].node;
                this["view" + activityId].onShow(activityInfo.Param1);
              }

              const mallData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().MallTableByMallId.getValue(activityInfo.Param1);
              this.showHeroSpine(mallData.AnimationId);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityCumulativeRecharge:
              this.node_hero.active = false;

              if (!this["view" + activityId]) {
                const rechargeLayer = instantiate(this.pfb_recharge);
                rechargeLayer.parent = this.activityNode;

                if (rechargeLayer) {
                  this["view" + activityId] = rechargeLayer.getComponent(_crd && CombineAccumulatedRechargeItem === void 0 ? (_reportPossibleCrUseOfCombineAccumulatedRechargeItem({
                    error: Error()
                  }), CombineAccumulatedRechargeItem) : CombineAccumulatedRechargeItem);
                  this.currNode = rechargeLayer;
                  this["view" + activityId].onShow(activityId);
                }
              } else {
                this["view" + activityId].node.active = true;
                this.currNode = this["view" + activityId].node;
                this["view" + activityId].onShow(activityId);
              }

              break;

            default:
              break;
          }
        }

        createToggle(tabList) {
          this.node_toggle_content.destroyAllChildren();

          for (let i = 0; i < tabList.length; i++) {
            const _key = tabList[i];
            let item = null;
            let itemTs = null;
            item = instantiate(this.pfb_toggle_item);
            item.parent = this.node_toggle_content;
            item.name = String(_key);
            itemTs = item.getComponent(_crd && CombineToggleItem === void 0 ? (_reportPossibleCrUseOfCombineToggleItem({
              error: Error()
            }), CombineToggleItem) : CombineToggleItem);
            itemTs.setData(_key, this);
            this["view" + _key] = null;
          }
        } // 展示spine动画


        showHeroSpine(animationId) {
          (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
            error: Error()
          }), createAnimation) : createAnimation)(this.node_spine, animationId);
          const heroId = Number(String(animationId).slice(0, 4));
          this.showHeroId = heroId;
          const heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(heroId);
          const itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(heroId);
          const heroClassTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(heroTab.Class);
          const heroAptitudeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(heroTab.Aptitude);
          const itemQualityTab = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getItemQualityTableByStar(heroTab.DefaultStar);
          const sp_quality_star_bg = this.node_quality.getChildByName("quality2_img").getComponent(Sprite);
          const sp_quality = this.node_quality.getChildByName("quality_icon").getComponent(Sprite);
          const sp_quality_bg = this.node_quality.getChildByName("quality1_img").getComponent(Sprite);
          sp_quality_star_bg.setTexture(itemQualityTab.HeroBagGrowthQuality);
          sp_quality_bg.setTexture(itemQualityTab.HeroBagLevelQuality);
          sp_quality.setTexture(heroAptitudeTab.Icon);
          this.sp_class.setTexture(heroClassTable.Icon);
          this.lbl_hero_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemTab.Name);
          this.lbl_class_desc.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(heroTab.Speciality);
        }

        clickShowHero() {
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.refreshBookData(this.showHeroId);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).HeroBagView,
            data: {
              viewType: 2
            },
            zIndex: 300
          });
        }

        on_s2c_ReceiveBattlePassTaskRewardsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.currNode.getComponent(_crd && BattlePassItem === void 0 ? (_reportPossibleCrUseOfBattlePassItem({
            error: Error()
          }), BattlePassItem) : BattlePassItem).refreshView();
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Combine_Pass);
        }

        on_s2c_ReceiveActivityHeroGrowRewardRsp(msg) {
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
            }); // 刷新一下数据

            (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.refreshHeroGrowData(msg.activityId, msg.star);
            this.currNode.getComponent(_crd && CombineStarUpItem === void 0 ? (_reportPossibleCrUseOfCombineStarUpItem({
              error: Error()
            }), CombineStarUpItem) : CombineStarUpItem).refreshView();
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Combine_Grow);
          }
        }

        on_s2c_BuyFixedShopCommodityRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.currNode.getComponent(_crd && CombineGiftItem === void 0 ? (_reportPossibleCrUseOfCombineGiftItem({
            error: Error()
          }), CombineGiftItem) : CombineGiftItem).refreshView();
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Combine_Shop);
        }

        onClickGachaBtn() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RecruitLimitView
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "activityNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_toggle_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pfb_hero_grow", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pfb_battle_pass", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pfb_up_mall", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pfb_recharge", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_content", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_spine", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_quality", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_hero_name", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lbl_class_desc", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sp_class", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lbl_time", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_hero", [_dec15], {
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
//# sourceMappingURL=7583728b250ead1a8b600dbac6b885e2030da290.js.map
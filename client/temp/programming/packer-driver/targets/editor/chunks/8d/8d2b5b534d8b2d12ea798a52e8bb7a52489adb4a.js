System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "client_protocol", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, _decorator, instantiate, Node, Button, Label, Toggle, Vec2, Sprite, Animation, Color, HeroBagLayoutCell, HeroDataControl, HeroBagPainting, ViewPop, InfiniteList, proto, EventMgr, LocalEvent, HeroData, Net, ShowItemNotEnoughTips, ShowTips, UIMgr, ViewName, tab, RoleData, HeroBookView, RedMgr, RedDotType, HeroTeamControl, ItemData, CommonTipsPop, LangMgr, GuideController, HeroRed, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _crd, ccclass, property, VIEW_TYPE, HeroBagView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHeroBagLayoutCell(extras) {
    _reporterNs.report("HeroBagLayoutCell", "./HeroBagLayoutCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "./HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroBagPainting(extras) {
    _reporterNs.report("HeroBagPainting", "./HeroBagPainting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroBookView(extras) {
    _reporterNs.report("HeroBookView", "./HeroBookView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLong(extras) {
    _reporterNs.report("Long", "protobufjs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../../../guide/GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroRed(extras) {
    _reporterNs.report("HeroRed", "./HeroRed", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Button = _cc.Button;
      Label = _cc.Label;
      Toggle = _cc.Toggle;
      Vec2 = _cc.Vec2;
      Sprite = _cc.Sprite;
      Animation = _cc.Animation;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      HeroBagLayoutCell = _unresolved_2.HeroBagLayoutCell;
    }, function (_unresolved_3) {
      HeroDataControl = _unresolved_3.HeroDataControl;
    }, function (_unresolved_4) {
      HeroBagPainting = _unresolved_4.HeroBagPainting;
    }, function (_unresolved_5) {
      ViewPop = _unresolved_5.ViewPop;
    }, function (_unresolved_6) {
      InfiniteList = _unresolved_6.default;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }, function (_unresolved_8) {
      LocalEvent = _unresolved_8.LocalEvent;
    }, function (_unresolved_9) {
      HeroData = _unresolved_9.HeroData;
    }, function (_unresolved_10) {
      Net = _unresolved_10.Net;
    }, function (_unresolved_11) {
      ShowItemNotEnoughTips = _unresolved_11.ShowItemNotEnoughTips;
      ShowTips = _unresolved_11.ShowTips;
      UIMgr = _unresolved_11.UIMgr;
    }, function (_unresolved_12) {
      ViewName = _unresolved_12.ViewName;
    }, function (_unresolved_13) {
      tab = _unresolved_13.tab;
    }, function (_unresolved_14) {
      RoleData = _unresolved_14.RoleData;
    }, function (_unresolved_15) {
      HeroBookView = _unresolved_15.HeroBookView;
    }, function (_unresolved_16) {
      RedMgr = _unresolved_16.RedMgr;
    }, function (_unresolved_17) {
      RedDotType = _unresolved_17.RedDotType;
    }, function (_unresolved_18) {
      HeroTeamControl = _unresolved_18.HeroTeamControl;
    }, function (_unresolved_19) {
      ItemData = _unresolved_19.ItemData;
    }, function (_unresolved_20) {
      CommonTipsPop = _unresolved_20.CommonTipsPop;
    }, function (_unresolved_21) {
      LangMgr = _unresolved_21.LangMgr;
    }, function (_unresolved_22) {
      GuideController = _unresolved_22.GuideController;
    }, function (_unresolved_23) {
      HeroRed = _unresolved_23.HeroRed;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00f59HpaHhF25ra5lYiKBES", "HeroBagView", undefined);
      /*
       * @Date: 2024-04-29 10:29:18
       * @LastEditors: wzq
       * @LastEditTime: 2024-11-14 14:47:55
       */


      __checkObsolete__(['Prefab', '_decorator', 'instantiate', 'Node', 'Button', 'EventTouch', 'Label', 'Toggle', 'Vec2', 'Sprite', 'Animation', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);

      VIEW_TYPE = /*#__PURE__*/function (VIEW_TYPE) {
        VIEW_TYPE[VIEW_TYPE["HERO"] = 1] = "HERO";
        VIEW_TYPE[VIEW_TYPE["BOOK"] = 2] = "BOOK";
        return VIEW_TYPE;
      }(VIEW_TYPE || {});

      _export("HeroBagView", HeroBagView = (_dec = ccclass('HeroBagView'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Button), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Node), _dec19 = property(Sprite), _dec20 = property(Animation), _dec21 = property(Label), _dec22 = property(Node), _dec(_class = (_class2 = class HeroBagView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pfb_hero_item", _descriptor, this);

          _initializerDefineProperty(this, "pfb_hero_painting", _descriptor2, this);

          _initializerDefineProperty(this, "list_heros", _descriptor3, this);

          _initializerDefineProperty(this, "node_hero_painting", _descriptor4, this);

          _initializerDefineProperty(this, "node_hero_bag", _descriptor5, this);

          _initializerDefineProperty(this, "node_hero_book", _descriptor6, this);

          _initializerDefineProperty(this, "node_vacation_taggle", _descriptor7, this);

          _initializerDefineProperty(this, "node_function_taggle", _descriptor8, this);

          _initializerDefineProperty(this, "node_red_up_star", _descriptor9, this);

          _initializerDefineProperty(this, "node_red_resolve", _descriptor10, this);

          _initializerDefineProperty(this, "node_red_Resonance", _descriptor11, this);

          _initializerDefineProperty(this, "node_red_hero", _descriptor12, this);

          _initializerDefineProperty(this, "node_red_book", _descriptor13, this);

          _initializerDefineProperty(this, "btn_detail", _descriptor14, this);

          _initializerDefineProperty(this, "lbl_cur_capacity_count", _descriptor15, this);

          _initializerDefineProperty(this, "lbl_max_capacity_count", _descriptor16, this);

          //雷达
          _initializerDefineProperty(this, "node_radar", _descriptor17, this);

          _initializerDefineProperty(this, "sp_img_radar", _descriptor18, this);

          _initializerDefineProperty(this, "anim_radar", _descriptor19, this);

          _initializerDefineProperty(this, "lbl_score_radar", _descriptor20, this);

          _initializerDefineProperty(this, "node_radar_txt", _descriptor21, this);

          this.mClosedCallBack = null;
          this._lineHeroCount = 3;
          this._bagVocationType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Max;
          this._defaultView = VIEW_TYPE.HERO;
          this._list = [];
        }

        register() {
          /* 获取背包数据 */
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetHeroBagRsp, this.on_s2c_GetHeroBagRsp, this);
          /* 上阵英雄刷新背包列表 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetTeamSlotRsp, this.on_s2c_SetTeamSlotRsp, this);
          /* 遣散英雄 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DisbandHeroesRsp, this.on_s2c_DisbandHeroesRsp, this);
          /* 一键升星 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpHeroStarOneClickRsp, this.on_s2c_UpHeroStarOneClickRsp, this);
          /* 重置英雄星级 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ResetHeroStarRsp, this.on_s2c_ResetHeroStarRsp, this);
          /* 重置队伍栏位等级 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ResetTeamSlotLevelRsp, this.on_s2c_ResetTeamSlotLevelRsp, this);
          /* 当前切换英雄的时候 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Hero_Change, this.showView, this);
          /* 当点击阵容推荐里面的英雄 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Click_Recommend_Hero, this.showBookHero, this);
          /* 升级英雄背包容量 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpHeroBagCapacityRsp, this.on_s2c_UpHeroBagCapacityRsp, this);
          /* 领取图签奖励 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveHeroAlbumRewardRsp, this.on_s2c_ReceiveHeroAlbumRewardRsp, this);
          /* 英雄升星 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpHeroStarRsp, this.on_s2c_UpHeroStarRsp, this);
          this.btn_detail.node.on(Button.EventType.CLICK, this.showDetailView, this);
        }

        unRegister() {
          super.unRegister();
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.refreshBookData(0);
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.refreshBagData(0);
        }

        onShow() {
          // 刷新可替换英雄数据
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.setCanReplaceHeros();

          if (this.openData && this.openData.viewType) {
            this._defaultView = this.openData.viewType;
            this.node_function_taggle.children[0].active = false;
            this.node_function_taggle.children[1].getComponent(Toggle).isChecked = true;
          }

          this.showView(true);

          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).ShowPop);
          }
        }

        on_s2c_GetHeroBagRsp(msg) {
          this.showView(true);
        }
        /* 英雄升星 */


        on_s2c_UpHeroStarRsp(msg) {
          /* 遣散奖励 */
          let heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(msg.heroId); // 展示奖励

          heroInfo.star = msg.star;
          heroInfo.refreshBaseAttrMap();
          let rewards = [{
            itemId: heroInfo.itemId,
            num: 1,
            extra: {
              heroStar: msg.star
            },
            transaction: []
          }]; // UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: rewards })

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).StarUpPop,
            data: {
              "heroInfo": heroInfo
            }
          });
          this.refreshTeamInfo({
            id: 0,
            isRefresh: true
          });
        }
        /* 遣散英雄 */


        on_s2c_DisbandHeroesRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
            error: Error()
          }), ViewName) : ViewName).HeroResolvePop);
          /* 遣散奖励 */

          let rewards = msg.rewards; // 展示奖励

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: rewards
          });
          this.refreshTeamInfo({
            id: 0,
            isRefresh: true
          });
        }
        /* 一键升星 */


        on_s2c_UpHeroStarOneClickRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return; // let rewards = msg.heroes;

          (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.adds(msg.heroes);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
            error: Error()
          }), ViewName) : ViewName).HeroAutoAscendPop);
          let rewards = [];

          for (let i = 0; i < msg.heroes.length; i++) {
            let hero = msg.heroes[i];
            let item = {
              itemId: hero.itemId,
              num: 1,
              extra: {
                heroStar: hero.star
              },
              transaction: []
            };
            rewards.push(item);
          }

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: rewards
          });
          this.refreshTeamInfo({
            id: 0,
            isRefresh: true
          });
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroAutoAscend);
        }
        /* 升级背包容量 */


        on_s2c_UpHeroBagCapacityRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
            error: Error()
          }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab('Tips_enlarge_success_1'));
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.capacityLevel = msg.capacityLevel;
          this.showBagCapacity();
        }
        /* 上阵英雄 */


        on_s2c_SetTeamSlotRsp(msg) {
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.refreshTeamBagData(msg.heroId);

          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).heroInTeam);
          }

          this.refreshTeamInfo({
            id: Number(msg.heroId),
            isRefresh: true
          });
        }
        /* 重置英雄星级 */


        on_s2c_ResetHeroStarRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          let rewards = msg.rewards;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
            error: Error()
          }), ViewName) : ViewName).HeroResetPop);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: rewards
          });
          let heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(msg.heroId);
          heroInfo.finshedStarSteps = [];
          heroInfo.star = msg.star;
          heroInfo.refreshBaseAttrMap();
          this.refreshTeamInfo({
            id: 0,
            isRefresh: true
          });
        }
        /* 重置队伍栏位等级 */


        on_s2c_ResetTeamSlotLevelRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          let rewards = msg.rewards; // 展示奖励

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
            error: Error()
          }), ViewName) : ViewName).HeroResetPop);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: rewards
          });
          this.refreshTeamInfo({
            id: (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getHeroByClass(msg.heroClass).id,
            level: 1
          });
        }

        refreshTeamInfo(data) {
          (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.refreshTeam(data.id, data.level);

          if (data.isRefresh) {
            (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.setCanReplaceHeros();
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).HeroupStar);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).HeroupLevel);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).HeroResonanceLevel);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).HeroresonanceStar);
          }

          this.showAllHeros(data.isRefresh ? data.isRefresh : false);
          this.showHeroPainting();
          this.refreshRed();
          this.showBagCapacity();
        }

        showView(isInit) {
          this.showAllHeros(isInit);
          this.showBagCapacity();
          this.showHeroPainting();
          this.refreshRed();
        }
        /* 刷新红点 */


        refreshRed() {
          const heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.heroId);
          this.node_red_Resonance.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroupStar, String(heroInfo.id)) || (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroupLevel, String(heroInfo.id)) || (_crd && HeroRed === void 0 ? (_reportPossibleCrUseOfHeroRed({
            error: Error()
          }), HeroRed) : HeroRed).ins.checkWearEquip(heroInfo);

          if (this._defaultView === VIEW_TYPE.HERO) {
            this.node_red_hero.active = false;
            this.node_red_book.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).HeroBook);
          } else {
            this.node_red_hero.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).HeroupStar) || (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).HeroupLevel);
            this.node_red_book.active = false;
          }
        }

        setCloseCallBack(closeFunc) {
          this.mClosedCallBack = closeFunc;
        }

        onDestroy() {
          super.onDestroy();
          this.unRegister();

          if (this.mClosedCallBack && typeof this.mClosedCallBack == 'function') {
            this.mClosedCallBack();
            this.mClosedCallBack = null;
          }
        }
        /* 显示背包容量 */


        showBagCapacity() {
          this.lbl_cur_capacity_count.string = String((_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getHeros().length);
          /* 最大容量 */

          let heroBagExpansion = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().HeroBagExpansion; //100钻石升10格子

          this.lbl_max_capacity_count.string = String((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().HeroBagNum + heroBagExpansion[2] * (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.capacityLevel + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).VipBonus.VipBonus_HeroBagAddCount));
        }
        /* 显示所有英雄 */


        showAllHeros(isInit) {
          this.node_hero_bag.active = this._defaultView === VIEW_TYPE.HERO;
          this.node_hero_book.active = this._defaultView === VIEW_TYPE.BOOK;

          if (this._defaultView === VIEW_TYPE.HERO) {
            (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.refreshBookData(0);
            this._list = this.groupHeroList();

            if (isInit) {
              this.list_heros.Init({
                getCellNumber: this.getCellCount.bind(this),
                getCellSize: this.getCellHeight.bind(this),
                getCellIdentifer: this.getCellIdentifer.bind(this),
                getCellView: this.getCellView.bind(this),
                getCellData: this.GetCellData.bind(this)
              });
              this.list_heros.scrollToOffset(new Vec2(0, 0), 1, true);
            } else {
              this.list_heros.Refresh();
            }
          } else {
            let bookTs = this.node_hero_book.getComponent(_crd && HeroBookView === void 0 ? (_reportPossibleCrUseOfHeroBookView({
              error: Error()
            }), HeroBookView) : HeroBookView);
            bookTs.showAllHeros(this._bagVocationType, isInit);
          }
        }

        getCellCount() {
          return this._list.length;
        }

        getCellHeight() {
          return 185;
        }

        getCellIdentifer() {
          return "HeroBagLayoutCell";
        }

        getCellView() {
          return instantiate(this.pfb_hero_item).getComponent(_crd && HeroBagLayoutCell === void 0 ? (_reportPossibleCrUseOfHeroBagLayoutCell({
            error: Error()
          }), HeroBagLayoutCell) : HeroBagLayoutCell);
        }

        GetCellData(idx) {
          return this._list[idx];
        }
        /* 将英雄数据分组 */


        groupHeroList() {
          const result = [];
          let heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.heroId);

          if (heroInfo) {
            let classType = heroInfo.heroTable.Class;

            if (this._bagVocationType !== (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroClass.HeroClass_Max) {
              this._bagVocationType = classType;
            }

            this.node_vacation_taggle.getChildByName("Toggle" + this._bagVocationType).getComponent(Toggle).isChecked = true;
            let heroList = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getHeroListByVocation(this._bagVocationType, true);

            for (let i = 0; i < heroList.length; i += this._lineHeroCount) {
              result.push(heroList.slice(i, i + this._lineHeroCount));
            }
          }

          return result;
        }

        hideBagView() {
          this.onClose();
        }
        /* 点击展示英雄详情 */


        showDetailView() {
          // this.onClose();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).HeroDetailView
          });
        }
        /* 显示英雄立绘信息 */


        showHeroPainting() {
          /* 加载资源 */
          let paintingNode = null;

          if (this.node_hero_painting.children.length === 0) {
            paintingNode = instantiate(this.pfb_hero_painting);
            paintingNode.parent = this.node_hero_painting;
          } else {
            paintingNode = this.node_hero_painting.children[0];
          }

          let ts = paintingNode.getComponent(_crd && HeroBagPainting === void 0 ? (_reportPossibleCrUseOfHeroBagPainting({
            error: Error()
          }), HeroBagPainting) : HeroBagPainting);

          if (this._defaultView === VIEW_TYPE.HERO) {
            ts.initData();
          } else {
            ts.initBook();
          } // 显示雷达图


          this.showRadarData();
        }

        showRadarData() {
          let tabData = null;
          this.node_radar.active = false;

          if (this._defaultView === VIEW_TYPE.HERO) {
            const heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.heroId);
            tabData = heroInfo.heroTable;
          } else if (this._defaultView === VIEW_TYPE.BOOK) {
            const itemId = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.bookId;
            tabData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroTableById.getValue(itemId);
          }

          if (tabData.RadarChart) {
            this.node_radar.active = true;
            this.sp_img_radar.setTexture(tabData.RadarChart);
            this.lbl_score_radar.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_hero_59", [tabData.HeroScore]);

            for (let i = 0; i < this.node_radar_txt.children.length; i++) {
              const txt = this.node_radar_txt.children[i].getComponent(Label);

              if (tabData.RadarHighlight.indexOf(i + 1) > -1) {
                txt.color = new Color().fromHEX((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
              } else {
                txt.color = new Color().fromHEX("#31B6D9");
              }
            }

            this.anim_radar.play("RadarShow");
          }
        }
        /* 点击一键升星 */


        clickAllStarUp() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).HeroAutoAscendPop
          });
        }
        /* 点击升级英雄背包 */


        clickUpHeroBagCount() {
          /* 点击打开弹窗 确定发送 */
          const heroBagExpansion = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().HeroBagExpansion;
          const itemId = heroBagExpansion[0];
          const itemCount = heroBagExpansion[1];
          const bagCount = heroBagExpansion[2];
          const curHavaCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(itemId);
          const tipsStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("Tips_enlarge_1", [itemCount, bagCount]);
          (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
            error: Error()
          }), CommonTipsPop) : CommonTipsPop).create(tipsStr, val => {
            if (val) {
              if (curHavaCount < itemCount) {
                (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
                  error: Error()
                }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(itemId);
              } else {
                let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Msg_UpHeroBagCapacityReq();
                (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                  error: Error()
                }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Ptl.UpHeroBagCapacityReq, msg);
              }
            }
          });
        }

        switchListView(event, ViewType) {
          if (this._defaultView === Number(ViewType)) {
            return;
          }

          this._defaultView = Number(ViewType);
          this._bagVocationType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Max;
          this.node_vacation_taggle.children[0].getComponent(Toggle).isChecked = true;
          this.switchVocation(null, String(this._bagVocationType));
        }
        /* 根据职业刷新界面 */


        switchVocation(event, vocationType) {
          this._bagVocationType = Number(vocationType);

          if (this._defaultView === VIEW_TYPE.HERO) {
            let heroList = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getHeroListByVocation(this._bagVocationType, true);
            (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.refreshBagData(heroList[0]);
            this.showView(true);
          } else {
            if (this._bagVocationType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroClass.HeroClass_Max) {
              let awardMap = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                error: Error()
              }), HeroDataControl) : HeroDataControl).ins.getBookReceivedIds();
              let itemId = 0;
              awardMap.forEach((value, key) => {
                if (!value.isReceived && !itemId) {
                  itemId = key;
                }
              });

              if (itemId) {
                (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                  error: Error()
                }), HeroDataControl) : HeroDataControl).ins.refreshBookData(itemId);
              } else {
                let heroList = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                  error: Error()
                }), HeroDataControl) : HeroDataControl).ins.getBookHeroListByVocation(this._bagVocationType, true);
                (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                  error: Error()
                }), HeroDataControl) : HeroDataControl).ins.refreshBookData(heroList[0]);
              }
            } else {
              let heroList = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                error: Error()
              }), HeroDataControl) : HeroDataControl).ins.getBookHeroListByVocation(this._bagVocationType, true);
              (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                error: Error()
              }), HeroDataControl) : HeroDataControl).ins.refreshBookData(heroList[0]);
            }

            (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.refreshBagData(0);
            this.showView(true);
          }
        }

        showBookHero() {
          this.node_function_taggle.children[1].getComponent(Toggle).isChecked = true;
          this._defaultView = VIEW_TYPE.BOOK;
          this._bagVocationType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Max;
          this.node_vacation_taggle.children[0].getComponent(Toggle).isChecked = true;
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.refreshBookData((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.bookId);
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.refreshBagData(0);
          this.showView(true);
        }
        /* 点击阵容推荐 */


        clickShowRecommendView() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).HeroRecommendPop
          });
        }
        /* 点击遣散 */


        clickShowHeroResolvePop() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).HeroResolvePop
          });
        }
        /* 点击共鸣 */


        clickShowHeroResonancePop() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).HeroResonancePop
          });
        }
        /* 领取图签奖励 */


        on_s2c_ReceiveHeroAlbumRewardRsp(msg) {
          let rewards = msg.rewards;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: rewards,
            zIndex: 300
          });
          let map = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getBookReceivedIds();
          map.set(msg.heroItemId, {
            id: msg.heroItemId,
            isReceived: true
          });
          let bookTs = this.node_hero_book.getComponent(_crd && HeroBookView === void 0 ? (_reportPossibleCrUseOfHeroBookView({
            error: Error()
          }), HeroBookView) : HeroBookView);
          bookTs.refreshBookByItemId(msg.heroItemId);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroBook);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_hero_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_hero_painting", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "list_heros", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_hero_painting", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_hero_bag", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_hero_book", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_vacation_taggle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_function_taggle", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_red_up_star", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_red_resolve", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_red_Resonance", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_red_hero", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_red_book", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "btn_detail", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "lbl_cur_capacity_count", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "lbl_max_capacity_count", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "node_radar", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "sp_img_radar", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "anim_radar", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "lbl_score_radar", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "node_radar_txt", [_dec22], {
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
//# sourceMappingURL=8d2b5b534d8b2d12ea798a52e8bb7a52489adb4a.js.map
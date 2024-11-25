System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "client_protocol", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, RichText, sp, Sprite, Toggle, ViewPop, tab, Func, ViewName, ShowTips, UIMgr, proto, Net, EventMgr, HeroDataControl, LangMgr, HeroData, ItemData, RedMgr, RedDotType, gachaReplace, setTextTime, AdMgr, RoleData, RecruitType, SettingRedManager, GuideController, LocalEvent, ActivityData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _crd, ccclass, property, RecruitView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../hero/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgachaReplace(extras) {
    _reporterNs.report("gachaReplace", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdMgr(extras) {
    _reporterNs.report("AdMgr", "../AdMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecruitType(extras) {
    _reporterNs.report("RecruitType", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingRedManager(extras) {
    _reporterNs.report("SettingRedManager", "../role/SettingRedManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../../guide/GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../activity/ActivityData", _context.meta, extras);
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
      RichText = _cc.RichText;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      Func = _unresolved_4.Func;
    }, function (_unresolved_5) {
      ViewName = _unresolved_5.ViewName;
    }, function (_unresolved_6) {
      ShowTips = _unresolved_6.ShowTips;
      UIMgr = _unresolved_6.UIMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_7) {
      Net = _unresolved_7.Net;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }, function (_unresolved_9) {
      HeroDataControl = _unresolved_9.HeroDataControl;
    }, function (_unresolved_10) {
      LangMgr = _unresolved_10.LangMgr;
    }, function (_unresolved_11) {
      HeroData = _unresolved_11.HeroData;
    }, function (_unresolved_12) {
      ItemData = _unresolved_12.ItemData;
    }, function (_unresolved_13) {
      RedMgr = _unresolved_13.RedMgr;
    }, function (_unresolved_14) {
      RedDotType = _unresolved_14.RedDotType;
    }, function (_unresolved_15) {
      gachaReplace = _unresolved_15.gachaReplace;
      setTextTime = _unresolved_15.setTextTime;
    }, function (_unresolved_16) {
      AdMgr = _unresolved_16.AdMgr;
    }, function (_unresolved_17) {
      RoleData = _unresolved_17.RoleData;
    }, function (_unresolved_18) {
      RecruitType = _unresolved_18.RecruitType;
    }, function (_unresolved_19) {
      SettingRedManager = _unresolved_19.SettingRedManager;
    }, function (_unresolved_20) {
      GuideController = _unresolved_20.GuideController;
    }, function (_unresolved_21) {
      LocalEvent = _unresolved_21.LocalEvent;
    }, function (_unresolved_22) {
      ActivityData = _unresolved_22.ActivityData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8a83rmY5ZLErFEcBHfLEBu", "RecruitView", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventTouch', 'Label', 'Node', 'RichText', 'sp', 'Sprite', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RecruitView", RecruitView = (_dec = ccclass('RecruitView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(RichText), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(sp.Skeleton), _dec11 = property(sp.Skeleton), _dec12 = property(sp.Skeleton), _dec13 = property(Label), _dec14 = property(Node), _dec15 = property(Label), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Label), _dec(_class = (_class2 = class RecruitView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_senior", _descriptor, this);

          _initializerDefineProperty(this, "node_vocation", _descriptor2, this);

          _initializerDefineProperty(this, "node_friend", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_tips", _descriptor4, this);

          _initializerDefineProperty(this, "node_toggle_type", _descriptor5, this);

          _initializerDefineProperty(this, "node_toggle_vacation", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_senior_voucher", _descriptor7, this);

          _initializerDefineProperty(this, "lbl_hero_voucher", _descriptor8, this);

          _initializerDefineProperty(this, "spine_draw_1", _descriptor9, this);

          _initializerDefineProperty(this, "spine_draw_2", _descriptor10, this);

          _initializerDefineProperty(this, "spine_draw_3", _descriptor11, this);

          _initializerDefineProperty(this, "lbl_adv_friend_time", _descriptor12, this);

          _initializerDefineProperty(this, "node_adv_friend_btn", _descriptor13, this);

          _initializerDefineProperty(this, "lbl_adv_senior_time", _descriptor14, this);

          _initializerDefineProperty(this, "node_adv_senior_btn", _descriptor15, this);

          _initializerDefineProperty(this, "node_limit", _descriptor16, this);

          _initializerDefineProperty(this, "lbl_time", _descriptor17, this);

          this._recruitHerosMap = new Map();
          this._curRecruitType = (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).None;
          //当前抽卡类型
          this._recruitItemSource = 0;
          this._isGacha = false;
          this._newHero = 0;
          this.countDown = 0;
        }

        /* 初始化map */
        setRecruitMap() {
          this._recruitHerosMap.clear();

          var heros = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getHeros();

          for (var i = 0; i < heros.length; i++) {
            var heroInfo = heros[i];
            var heroTab = heroInfo.heroTable;

            if (heroTab.Aptitude == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_SR) {
              if (this._recruitHerosMap.has(heroTab.Id)) {
                this._recruitHerosMap.set(heroTab.Id, this._recruitHerosMap.get(heroTab.Id) + 1);
              } else {
                this._recruitHerosMap.set(heroTab.Id, 1);
              }
            }
          }
        }

        register() {
          /* 获取背包数据 */
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GachaRsp, this.on_s2c_GachaRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).showNewOver, this.autoShowHeroAnim, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).hidePop, this.hidePop, this);
        }

        unRegister() {
          super.unRegister();
        }

        on_s2c_GachaRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;

          if (msg.id === 100) {
            this._newHero = msg.rewards[0].itemId;
            this.showNewHeroPop();
          } else {
            this.showGachaView(msg.rewards, msg.id);
          }

          if (!(_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            this._isGacha = false;
          }

          this.unClickToggle();
          this.asyncView(); // 刷新红点

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroGacha); //保底抽

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).GachaAds); //广告
        }

        hidePop() {
          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            this._isGacha = false;
          }
        }

        onShow() {
          // 默认进来高级扭蛋
          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).ShowPop);
          }

          this.setRecruitMap();
          this._curRecruitType = (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).Senior;

          if (this.openData) {
            this._curRecruitType = this.openData;
          }

          var node_toggle = this.node_toggle_type.getChildByName("Toggle" + this._curRecruitType).getComponent(Toggle);
          node_toggle.isChecked = true;
          this.showTypeNode();
          this.node_limit.active = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.GachaUpIsOpen();

          if (this.node_limit.active) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.hideView("RecruitLimitView");
            var actInfo = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.getAllUpData()[0];
            this.countDown = Number(actInfo.endTime) - (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getServerUtcTime();
            this.timeUpdate();
            this.unschedule(this.timeUpdate);
            this.schedule(this.timeUpdate, 1);
          }
        }

        timeUpdate() {
          this.countDown--;

          if (this.countDown <= 0) {
            this.unschedule(this.timeUpdate);
            this.node_limit.active = false;
          } else {
            this.lbl_time.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
              error: Error()
            }), setTextTime) : setTextTime)(this.countDown);
          }
        }

        onDestroy() {
          super.onDestroy();
          this.unRegister();
        }

        switchRecruitType(event, type) {
          this._curRecruitType = Number(type);
          this.showTypeNode();
        }

        showTypeNode() {
          this.node_senior.active = this._curRecruitType === (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).Senior;
          this.node_vocation.active = this._curRecruitType === (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).Vocation;
          this.node_friend.active = this._curRecruitType === (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).Friend;

          if (this._curRecruitType === (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).Vocation) {
            // 默认为射手 是否本地存储职业 没有则设置为默认
            if ((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).getItem("recruit_vacation")) {
              this.changeItemSource(null, (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).getItem("recruit_vacation"));
            } else {
              this.changeItemSource(null, String(210));
            }
          } else {
            this.asyncView();
            this.changeItemSource(null, "");
          }
        }
        /* 界面动态信息更新*/


        asyncView() {
          var seniorVoucher = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(51); // 英雄凭证

          var heroVoucher = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(81);
          this.lbl_senior_voucher.string = seniorVoucher + "/" + 1000;
          this.lbl_hero_voucher.string = heroVoucher + "/" + 1000;
          var type_friend = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_Gacha301;
          var friend_adv_cur_count = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountByType(type_friend);
          var friend_adv_max_count = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountMaxByType(type_friend);
          this.lbl_adv_friend_time.string = friend_adv_max_count - friend_adv_cur_count + "/" + friend_adv_max_count;

          if ((_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountByType(type_friend) >= (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountMaxByType(type_friend)) {
            this.node_adv_friend_btn.getComponent(Sprite).grayscale = true;
            this.node_adv_friend_btn.getComponent(Button).interactable = false;
          }

          var type_senior = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_Gacha101;
          var senior_adv_cur_count = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountByType(type_senior);
          var senior_adv_max_count = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountMaxByType(type_senior);
          this.lbl_adv_senior_time.string = senior_adv_max_count - senior_adv_cur_count + "/" + senior_adv_max_count;

          if ((_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountByType(type_senior) >= (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountMaxByType(type_senior)) {
            this.node_adv_senior_btn.getComponent(Sprite).grayscale = true;
            this.node_adv_senior_btn.getComponent(Button).interactable = false;
          } // 同步一下


          var totalCount = 10;

          for (var i = 0; i < (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.drop.data.length; i++) {
            var data = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.drop.data[i];

            if (data.id == "r_17") {
              totalCount = totalCount - data.sum;
              break;
            }
          }

          this.lbl_tips.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_recruit_2", [totalCount]);
        }

        changeItemSource(event, type) {
          if (this._curRecruitType === (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).Senior) {
            this._recruitItemSource = 100;
          } else if (this._curRecruitType === (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).Friend) {
            this._recruitItemSource = 300;
          } else if (this._curRecruitType === (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).Vocation) {
            // 职业
            if (type) {
              this._recruitItemSource = Number(type);
              (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).setItem("recruit_vacation", type);
              var vocation_toggle = this.node_toggle_vacation.getChildByName("Toggle" + (this._recruitItemSource - 190) / 10).getComponent(Toggle);
              vocation_toggle.isChecked = true;
            }
          }
        }
        /* 十连抽 */


        gachaTen() {
          // 点击抽卡播放xuanzhuan结束后弹出抽卡展示界面
          if (this._isGacha) {
            return;
          }

          this.sendGacha(this._recruitItemSource + 2);
        }
        /* 单抽 */


        gachaOnce() {
          if (this._isGacha) {
            return;
          }

          this.sendGacha(this._recruitItemSource + 1);
        }
        /* 高级广告抽 */


        sendSeniorAdvWatch() {
          var type = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_Gacha101;

          if ((_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountByType(type) >= (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountMaxByType(type)) {
            return;
          }

          (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.playVideoAd((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_Gacha101, () => {
            this.sendGacha(101, true);
          }, false);
        }
        /* 好友广告抽 */


        sendFriendAdvWatch() {
          var type = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_Gacha301;

          if ((_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountByType(type) >= (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountMaxByType(type)) {
            return;
          }

          (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.playVideoAd((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_Gacha301, () => {
            this.sendGacha(301, true);
          }, false);
        }

        sendGacha(id, isAdv) {
          if (isAdv === void 0) {
            isAdv = false;
          }

          var self = this;
          var gachaTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GachaTableById.getValue(id);
          var count = gachaTab.ItemCount;
          var itemId = gachaTab.ItemId;
          var itemCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(itemId);

          if ((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getHeroBagFull(gachaTab.ItemCount)) {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_herobag_1"));
            return;
          }

          var sendMsg = () => {
            self._isGacha = true;
            self.unClickToggle();

            self["spine_draw_" + self._curRecruitType].setAnimation(0, "xuanzhuan", false);

            self["spine_draw_" + self._curRecruitType].setCompleteListener(listener => {
              if (listener.animation.name === "xuanzhuan") {
                var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Msg_GachaReq();
                msg.id = id;
                msg.fromAdv = isAdv;
                (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                  error: Error()
                }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Ptl.GachaReq, msg);
              }
            });
          };

          if (!isAdv && itemCount < count) {
            var canSendMsg = (_crd && gachaReplace === void 0 ? (_reportPossibleCrUseOfgachaReplace({
              error: Error()
            }), gachaReplace) : gachaReplace)(id, this._curRecruitType, sendMsg);

            if (!canSendMsg) {
              return;
            }
          }

          sendMsg();
        }
        /* 显示抽卡界面 */


        showGachaView(_rewards, _id) {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RecruitGetPop,
            data: {
              rewards: _rewards,
              id: _id,
              type: this._curRecruitType,
              map: this._recruitHerosMap
            }
          });
        }
        /* 显示概率公示界面 */


        showGachaProbabilityView(event, type) {
          if (this._curRecruitType == (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).Senior) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).RecruitProbabilityPop
            });
          } else if (this._curRecruitType == (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).Friend) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).RecruitFriendProbabilityPop
            });
          } else if (this._curRecruitType == (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).Vocation) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).RecruitProProbabilityPop,
              data: {
                "heroClass": this._recruitItemSource
              }
            });
          } // UIMgr.ins.show({
          //     viewName: ViewName.RecruitProbabilityPop, data: {
          //         type: this._curRecruitType,
          //         recruit: this._recruitItemSource
          //     }
          // });

        }
        /* 显示保底抽界面 */


        showGuaranteeView(event, type) {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RecruitGuaranteePop
          });
        } // 如果当前是新英雄


        showNewHeroPop() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).NewHeroPop,
            data: {
              itemId: this._newHero
            }
          });
        }

        autoShowHeroAnim() {
          if (this._newHero > 0) {
            var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroTableById.getValue(this._newHero);
            var rewards = [{
              itemId: this._newHero,
              num: 1,
              extra: {
                heroStar: heroTab.DefaultStar
              },
              transaction: []
            }];
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: rewards
            });
            this._newHero = -1;
          }
        }
        /* 将toggle失效 */


        unClickToggle() {
          for (var i = 1; i <= 3; i++) {
            var node_toggle = this.node_toggle_type.getChildByName("Toggle" + i).getComponent(Toggle);
            node_toggle.interactable = !this._isGacha;
          }
        }
        /* 点击前往职业兑换界面 */


        onClickGoVocationShop() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).MallMainView,
            data: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).MallTab.MallTab_Tab3
          });
        }

        onClose() {
          super.onClose();

          if (!(_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
            error: Error()
          }), SettingRedManager) : SettingRedManager).ins.getSetting("GachaAds")) {
            (_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
              error: Error()
            }), SettingRedManager) : SettingRedManager).ins.setSetting("GachaAds", true);
          }

          if (!(_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
            error: Error()
          }), SettingRedManager) : SettingRedManager).ins.getSetting("TenGacha")) {
            (_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
              error: Error()
            }), SettingRedManager) : SettingRedManager).ins.setSetting("TenGacha", true);
          }

          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).checkMainView);
          }
        }

        clickLimitBtn() {
          this.onClose();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RecruitLimitView
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_senior", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_vocation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_friend", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_tips", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_type", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_vacation", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_senior_voucher", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbl_hero_voucher", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spine_draw_1", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "spine_draw_2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "spine_draw_3", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lbl_adv_friend_time", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_adv_friend_btn", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "lbl_adv_senior_time", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_adv_senior_btn", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "node_limit", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "lbl_time", [_dec18], {
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
//# sourceMappingURL=65147ecf6753f87681ec8c73f4a18e3ec42579ae.js.map
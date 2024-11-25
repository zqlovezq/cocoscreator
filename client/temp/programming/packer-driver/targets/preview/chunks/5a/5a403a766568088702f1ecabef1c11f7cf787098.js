System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Prefab, Animation, instantiate, Sprite, Label, ViewPop, tab, proto, HeroItem, HeroInfo, CommonItem, ItemInfo, ShowTips, UIMgr, ViewName, Net, HeroDataControl, WeaponItem, ItemData, gachaReplace, RecruitType, RoleData, LangMgr, GuideController, EventMgr, LocalEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, RecruitGetPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponItem(extras) {
    _reporterNs.report("WeaponItem", "../common/WeaponItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgachaReplace(extras) {
    _reporterNs.report("gachaReplace", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecruitType(extras) {
    _reporterNs.report("RecruitType", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../../guide/GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Animation = _cc.Animation;
      instantiate = _cc.instantiate;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      HeroItem = _unresolved_4.HeroItem;
    }, function (_unresolved_5) {
      HeroInfo = _unresolved_5.HeroInfo;
    }, function (_unresolved_6) {
      CommonItem = _unresolved_6.CommonItem;
    }, function (_unresolved_7) {
      ItemInfo = _unresolved_7.ItemInfo;
    }, function (_unresolved_8) {
      ShowTips = _unresolved_8.ShowTips;
      UIMgr = _unresolved_8.UIMgr;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      Net = _unresolved_10.Net;
    }, function (_unresolved_11) {
      HeroDataControl = _unresolved_11.HeroDataControl;
    }, function (_unresolved_12) {
      WeaponItem = _unresolved_12.WeaponItem;
    }, function (_unresolved_13) {
      ItemData = _unresolved_13.ItemData;
    }, function (_unresolved_14) {
      gachaReplace = _unresolved_14.gachaReplace;
    }, function (_unresolved_15) {
      RecruitType = _unresolved_15.RecruitType;
    }, function (_unresolved_16) {
      RoleData = _unresolved_16.RoleData;
    }, function (_unresolved_17) {
      LangMgr = _unresolved_17.LangMgr;
    }, function (_unresolved_18) {
      GuideController = _unresolved_18.GuideController;
    }, function (_unresolved_19) {
      EventMgr = _unresolved_19.EventMgr;
    }, function (_unresolved_20) {
      LocalEvent = _unresolved_20.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ee925RSWAhIta25yuhMWbaE", "RecruitGetPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Animation', 'instantiate', 'AnimationComponent', 'Sprite', 'Label', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RecruitGetPop", RecruitGetPop = (_dec = ccclass('RecruitGetPop'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Sprite), _dec9 = property(Label), _dec10 = property(Sprite), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property([Node]), _dec15 = property(Node), _dec(_class = (_class2 = class RecruitGetPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_common_item", _descriptor, this);

          _initializerDefineProperty(this, "pfb_hero_item", _descriptor2, this);

          _initializerDefineProperty(this, "pfb_new_hero", _descriptor3, this);

          _initializerDefineProperty(this, "pfb_rare_book", _descriptor4, this);

          _initializerDefineProperty(this, "node_item1", _descriptor5, this);

          _initializerDefineProperty(this, "node_item10", _descriptor6, this);

          _initializerDefineProperty(this, "sp_extra_item", _descriptor7, this);

          _initializerDefineProperty(this, "lbl_extra_count", _descriptor8, this);

          _initializerDefineProperty(this, "sp_extra_item_1", _descriptor9, this);

          _initializerDefineProperty(this, "lbl_extra_count_1", _descriptor10, this);

          _initializerDefineProperty(this, "node_extra", _descriptor11, this);

          _initializerDefineProperty(this, "node_get_item", _descriptor12, this);

          _initializerDefineProperty(this, "node_types", _descriptor13, this);

          _initializerDefineProperty(this, "node_limit", _descriptor14, this);

          this._rewards = [];
          this._showNum = 0;
          this._gachaNum = 0;
          this._gachaId = 0;
          this._curStage = null;
          this._herosMap = new Map();
          this._curRecruitType = (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).None;
        }

        unRegister() {
          super.unRegister();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).showNewOver, this.autoShowHeroAnim, this);
        }

        onShow() {
          this._rewards = this.openData.rewards;
          this._gachaId = this.openData.id;
          this._herosMap = this.openData.map;
          this._curRecruitType = this.openData.type;
          this.node_limit.active = false;

          for (var i = 0; i < this.node_types.length; i++) {
            this.node_types[i].active = false;
          }

          if (this._curRecruitType === (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).GaChaUp) {
            this._curStage = this.node_limit;
          } else {
            this._curStage = this.node_types[this._curRecruitType - 1];
          }

          this._curStage.active = true;
          var gachaTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GachaTableById.getValue(this._gachaId); // 消耗道具数量

          this._gachaNum = gachaTab.ItemCount;

          if (this._gachaNum === 1000) {
            this._gachaNum = 1;
          }

          this._curStage.getChildByName("btn_node").getChildByName("recruit1_btn").active = this._gachaNum === 1;
          this._curStage.getChildByName("btn_node").getChildByName("recruit10_btn").active = this._gachaNum === 10;
          this._showNum = 0;
          this.node_extra.active = false;
          var configRecycle = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().HeroRecycleReward;
          var extraId = 0;
          var extraCount = 0;
          var extraId1 = configRecycle[0];
          var extraCount1 = 0;

          for (var _i = this._rewards.length - 1; _i >= 0; _i--) {
            var reward = this._rewards[_i];

            if (reward.itemId === 51 || reward.itemId === 81 || reward.itemId === 82) {
              if (!extraId) {
                extraId = reward.itemId;
                extraCount = Number(reward.num);
              }

              this._rewards.splice(_i, 1);
            } else {
              var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroTableById.getValue(reward.itemId);

              if (heroTab) {
                var aptitude = heroTab.Aptitude;

                if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.autoDisband && aptitude === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).HeroAptitude.HeroAptitude_N) {
                  extraCount1 += configRecycle[1];
                }
              }
            }
          }

          var extraTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(extraId);
          var extraTab1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(extraId1);
          this.sp_extra_item_1.node.parent.active = extraCount1 > 0;
          this.sp_extra_item.node.parent.active = extraCount > 0;
          this.node_get_item.active = extraCount > 0 && extraCount1 > 0;

          if (extraTab) {
            this.sp_extra_item.setTexture(extraTab.Icon);
            this.lbl_extra_count.string = String(extraCount * this._gachaNum);
          }

          if (extraTab1) {
            this.sp_extra_item_1.setTexture(extraTab1.Icon);
            this.lbl_extra_count_1.string = String(extraCount1);
          }

          this.unschedule(this.addItem);
          this.schedule(this.addItem, 0.15, this._gachaNum - 1);
        }

        addItem() {
          if (!this._rewards[this._showNum]) {
            return;
          }

          var reward = this._rewards[this._showNum];
          var itemId = reward.itemId;
          var itemCount = Number(reward.num);
          var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(itemId);
          var children = this["node_item" + this._gachaNum].children; // for(let i=0;i<children.length;i++){

          var item = children[this._showNum];
          item.destroyAllChildren();
          item.getComponent(Animation).play();

          if (itemTab.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ItemType.ItemType_Hero) {
            this.createHero(item, itemId, 0);
          } else if (itemTab.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ItemType.ItemType_Material || itemTab.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ItemType.ItemType_Piece) {
            if (itemId > 6100 && itemId < 10000) {
              this.createHero(item, itemId - 4000, itemCount);
            } else {
              this.createItem(item, itemId, itemCount);
            }
          } else if (itemTab.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ItemType.ItemType_Book) {
            this.createBook(item, itemId);
          }

          this._showNum++;

          if (this._showNum >= this._gachaNum) {
            this.node_extra.active = true;
            this.unschedule(this.addItem);
          }
        }

        createHero(item, itemId, itemCount) {
          var _heroItem = instantiate(this.pfb_hero_item);

          _heroItem.parent = item;

          var itemTs = _heroItem.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
            error: Error()
          }), HeroItem) : HeroItem);

          var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(itemId);
          var heroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
            error: Error()
          }), HeroInfo) : HeroInfo)();
          heroInfo.itemId = itemId;
          heroInfo.star = heroTab.DefaultStar;
          itemTs.UpdateContent(heroInfo);
          itemTs.setSelect(false);
          itemTs.setLevel(0);
          itemTs.setAutoDisband(heroInfo.heroTable.Aptitude === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroAptitude.HeroAptitude_N);

          if (itemCount) {
            itemTs.setPiece(itemCount);
          } else {
            if (heroTab.Aptitude === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_SSR) {
              this.showNewHeroPop(itemId);
            } else if (heroTab.Aptitude === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_SR) {
              // 判断是否是首次
              if ((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                error: Error()
              }), HeroDataControl) : HeroDataControl).ins.getNewSRHero(itemId)) {
                this.showNewHeroPop(itemId);
                (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                  error: Error()
                }), HeroDataControl) : HeroDataControl).ins.deleteNewSRHero(itemId);
              }
            }
          }
        }

        createItem(item, itemId, itemCount) {
          var _commonItem = instantiate(this.pfb_common_item);

          _commonItem.parent = item;

          var itemTs = _commonItem.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
            error: Error()
          }), CommonItem) : CommonItem);

          var itemData = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          itemData.itemId = itemId;
          itemData.num = Number(itemCount);
          itemTs.initData(itemData);
        }

        createBook(item, itemId) {
          var _bookItem = instantiate(this.pfb_rare_book);

          _bookItem.parent = item;

          var itemTs = _bookItem.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
            error: Error()
          }), WeaponItem) : WeaponItem);

          itemTs.initBookItemId(itemId, true, true, false, () => {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).RareBookInfoItemPop,
              data: {
                "bookInfo": itemTs.info
              }
            });
          });
          var bookTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BookTableById.getValue(itemId);

          if (bookTab.Aptitude === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroAptitude.HeroAptitude_SR) {
            // 显示弹窗
            this.showNewBookPop(itemId);
          } else if (bookTab.Aptitude === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroAptitude.HeroAptitude_R) {
            if (!this._herosMap.get(itemId)) {
              this._herosMap.set(itemId, true);

              this.showNewBookPop(itemId);
            }
          }
        }

        clearHeros() {
          this._showNum = 0;
          this.unschedule(this.addItem);

          if (this._gachaNum === 1) {
            this.node_item1.getChildByName("item1").destroyAllChildren();
          } else {
            for (var i = 1; i <= 10; i++) {
              this.node_item10.getChildByName("item" + i).destroyAllChildren();
            }
          }
        } // 如果当前是新秘籍


        showNewBookPop(itemId) {
          var self = this;
          this.unschedule(this.addItem);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RareBookGetPop,
            data: {
              itemId: itemId
            }
          });
        } // 如果当前是新英雄


        showNewHeroPop(itemId) {
          var self = this;
          this.unschedule(this.addItem);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).NewHeroPop,
            data: {
              itemId: itemId
            }
          });
        }
        /* 继续播放动画 */


        autoShowHeroAnim() {
          var children = this["node_item" + this._gachaNum].children;
          var item = children[this._showNum - 1];
          item.getComponent(Animation).play();
          this.scheduleOnce(() => {
            this.schedule(this.addItem, 0.15, this._gachaNum - this._showNum - 1);
          }, 0.15);
        }

        sendGacha() {
          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            return;
          }

          var slef = this;

          if (this._showNum !== this._gachaNum) {
            return;
          }

          if (this._curRecruitType != (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).Book && this._curRecruitType != (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
            error: Error()
          }), RecruitType) : RecruitType).BookGuarantee) {
            if ((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getHeroBagFull(this._gachaNum)) {
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("Tips_herobag_1"));
              return;
            }
          }

          var gachaTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GachaTableById.getValue(this._gachaId);
          var count = gachaTab.ItemCount;
          var itemId = gachaTab.ItemId;
          var itemCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(itemId);

          var sendMsg = () => {
            slef.clearHeros();
            var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_GachaReq();
            msg.id = slef._gachaId;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.GachaReq, msg);
          };

          if (itemCount < count) {
            var canSendMsg = (_crd && gachaReplace === void 0 ? (_reportPossibleCrUseOfgachaReplace({
              error: Error()
            }), gachaReplace) : gachaReplace)(this._gachaId, this._curRecruitType, sendMsg);

            if (!canSendMsg) {
              return;
            }
          }

          sendMsg();
        }

        onDestroy() {
          super.onDestroy();

          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).hideHeroPop);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_common_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_hero_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pfb_new_hero", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pfb_rare_book", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_item1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_item10", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sp_extra_item", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbl_extra_count", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sp_extra_item_1", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_extra_count_1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_extra", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_get_item", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_types", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_limit", [_dec15], {
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
//# sourceMappingURL=5a403a766568088702f1ecabef1c11f7cf787098.js.map
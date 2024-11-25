System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "client_protocol", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, ProgressBar, ScrollView, Sprite, UITransform, Vec2, ComponentBase, tab, VipLvBtnItem, LangMgr, ItemInfo, ItemPoolMgr, VipPrivilegeItem, ItemData, ActivityControl, ActivityData, ShowTips, UIMgr, EventMgr, proto, ViewName, OpenFunctionMgr, LocalEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _crd, ccclass, property, VipPrivilegeView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVipLvBtnItem(extras) {
    _reporterNs.report("VipLvBtnItem", "./VipLvBtnItem", _context.meta, extras);
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

  function _reportPossibleCrUseOfVipPrivilegeItem(extras) {
    _reporterNs.report("VipPrivilegeItem", "./VipPrivilegeItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityControl(extras) {
    _reporterNs.report("ActivityControl", "../ActivityControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
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
      ProgressBar = _cc.ProgressBar;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      VipLvBtnItem = _unresolved_4.VipLvBtnItem;
    }, function (_unresolved_5) {
      LangMgr = _unresolved_5.LangMgr;
    }, function (_unresolved_6) {
      ItemInfo = _unresolved_6.ItemInfo;
    }, function (_unresolved_7) {
      ItemPoolMgr = _unresolved_7.ItemPoolMgr;
    }, function (_unresolved_8) {
      VipPrivilegeItem = _unresolved_8.VipPrivilegeItem;
    }, function (_unresolved_9) {
      ItemData = _unresolved_9.ItemData;
    }, function (_unresolved_10) {
      ActivityControl = _unresolved_10.ActivityControl;
    }, function (_unresolved_11) {
      ActivityData = _unresolved_11.ActivityData;
    }, function (_unresolved_12) {
      ShowTips = _unresolved_12.ShowTips;
      UIMgr = _unresolved_12.UIMgr;
    }, function (_unresolved_13) {
      EventMgr = _unresolved_13.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_14) {
      ViewName = _unresolved_14.ViewName;
    }, function (_unresolved_15) {
      OpenFunctionMgr = _unresolved_15.OpenFunctionMgr;
    }, function (_unresolved_16) {
      LocalEvent = _unresolved_16.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "399efOopixJcrpE+eCpdl0h", "VipPrivilegeView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'ForwardFlow', 'instantiate', 'Label', 'labelAssembler', 'log', 'Node', 'Prefab', 'ProgressBar', 'ScrollView', 'Sprite', 'UITransform', 'v2', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * VipPrivilegeView
       * zhudingchao
       * Mon Jul 01 2024 15:20:18 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/activity/vip/VipPrivilegeView.ts
       *
       */

      _export("VipPrivilegeView", VipPrivilegeView = (_dec = ccclass('VipPrivilegeView'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(ScrollView), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Sprite), _dec10 = property(Sprite), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(ScrollView), _dec16 = property(ProgressBar), _dec17 = property(Label), _dec18 = property(UITransform), _dec19 = property(Prefab), _dec20 = property(Prefab), _dec21 = property(Node), _dec22 = property(Node), _dec(_class = (_class2 = class VipPrivilegeView extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "giftSpr", _descriptor, this);

          _initializerDefineProperty(this, "giftLab", _descriptor2, this);

          _initializerDefineProperty(this, "tipsLab", _descriptor3, this);

          _initializerDefineProperty(this, "privilegetitleLab1", _descriptor4, this);

          _initializerDefineProperty(this, "privilegeScrollView", _descriptor5, this);

          _initializerDefineProperty(this, "privilegetitleLab2", _descriptor6, this);

          _initializerDefineProperty(this, "rewardNode", _descriptor7, this);

          _initializerDefineProperty(this, "priceIcon1", _descriptor8, this);

          _initializerDefineProperty(this, "priceIcon2", _descriptor9, this);

          _initializerDefineProperty(this, "priceLab1", _descriptor10, this);

          _initializerDefineProperty(this, "priceLab2", _descriptor11, this);

          _initializerDefineProperty(this, "buyBtnNode", _descriptor12, this);

          _initializerDefineProperty(this, "purchasedBtnNode", _descriptor13, this);

          _initializerDefineProperty(this, "vipBtnScrollview", _descriptor14, this);

          _initializerDefineProperty(this, "vipProgress", _descriptor15, this);

          _initializerDefineProperty(this, "progressLabel", _descriptor16, this);

          _initializerDefineProperty(this, "deleteLine", _descriptor17, this);

          _initializerDefineProperty(this, "vipBtnPrefab", _descriptor18, this);

          _initializerDefineProperty(this, "privilegePrefab", _descriptor19, this);

          _initializerDefineProperty(this, "lightNode", _descriptor20, this);

          _initializerDefineProperty(this, "arrowNode", _descriptor21, this);

          this.vipLevel = void 0;
          this.currBtnItem = void 0;
          this.currVipLevel = void 0;
          this.privilegeItems = void 0;
          this.vipBonusTabMap = void 0;
          this.maxVipLevel = 0;
          this.isCanBuy = false;

          // onClickHelpBtn(event:EventTouch) {
          //     // log("---------------------");
          //     UIMgr.ins.show({ viewName: ViewName.CommonBlackTipsPop,data:{"worldPos":event.target.worldPosition,"WordTableKey":"策划配置" }});
          // }
          this.onClickItem = item => {
            if (item != this.currBtnItem) {
              this.currBtnItem.setSelectState(false);
              item.setSelectState(true);
              this.currBtnItem = item;
              this.initCurrVipView();
            }
          };
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.VipLevelUpPush, this.on_s2c_VipLevelUpPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveVipDailyGiftRsp, this.on_s2c_ReceiveVipDailyGiftRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyVipGiftRsp, this.on_s2c_BuyVipGiftRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Item_Update, this.updateResourceNum, this);
        }

        initView() {
          this.vipLevel = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.vipMsg.vipLevel;
          this.currVipLevel = this.vipLevel;
          this.privilegeItems = [];
          this.vipBonusTabMap = new Map();
          let vipBonus = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().VipBonusTable;

          for (let key in vipBonus) {
            let list = this.vipBonusTabMap.get(vipBonus[key].VipLv);

            if (!list) {
              list = [];
              this.vipBonusTabMap.set(vipBonus[key].VipLv, list);
            }

            list.push(vipBonus[key]);

            if (vipBonus[key].VipLv > this.maxVipLevel) {
              this.maxVipLevel = vipBonus[key].VipLv;
            }
          }

          this.initVipBtn();
          this.initCurrVipView();
          this.initGiftView();
          this.initProgress();
        }

        initVipBtn() {
          this.currBtnItem = null;
          this.vipBtnScrollview.content.removeAllChildren();
          let vipTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().VipTableByVipLv.getValue(this.vipLevel);
          let showLevel = vipTable.ShowVipLv;
          let tables = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().VipTable;
          let len = tables.length - 1;

          for (let i = len; i >= 0; i--) {
            if (tables[i].VipLv <= showLevel) {
              let node = instantiate(this.vipBtnPrefab);
              node.parent = this.vipBtnScrollview.content;
              node.getComponent(_crd && VipLvBtnItem === void 0 ? (_reportPossibleCrUseOfVipLvBtnItem({
                error: Error()
              }), VipLvBtnItem) : VipLvBtnItem).initView(tables[i], this.onClickItem);

              if (tables[i].VipLv == this.currVipLevel) {
                this.currBtnItem = node.getComponent(_crd && VipLvBtnItem === void 0 ? (_reportPossibleCrUseOfVipLvBtnItem({
                  error: Error()
                }), VipLvBtnItem) : VipLvBtnItem);
              }
            }
          }

          if (this.currBtnItem) {
            this.currBtnItem.setSelectState(true);
          }

          this.scheduleOnce(() => {
            this.setScrollPos();
          });
        }

        setScrollPos() {
          let pos = this.currBtnItem.node.getPosition();
          let w = this.vipBtnScrollview.getComponent(UITransform).contentSize.width;
          this.vipBtnScrollview.scrollToOffset(new Vec2(pos.x - w + 220, 0), 0.1); //  this.vipBtnScrollview.scrollTo(v2(pos.x-w-110,pos.y))
        }

        initCurrVipView() {
          let currTable = this.currBtnItem.vipTable;
          this.privilegetitleLab1.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_vip_2", [currTable.VipLv]);
          this.privilegetitleLab2.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_vip_3", [currTable.VipLv]);
          this.rewardNode.removeAllChildren();

          for (let key in currTable.VipRewardIds) {
            let itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            itemInfo.initItemData(currTable.VipRewardIds[key], currTable.VipRewardNum[key]);
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(itemInfo, this.rewardNode);
          }

          let item = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(currTable.VipCostItemIds);
          this.priceIcon1.setTexture(item.Icon);
          this.priceIcon2.setTexture(item.Icon);
          this.priceLab1.string = currTable.VipCostItemNum + "";
          this.priceLab2.string = currTable.ShowCost + ""; // this.scheduleOnce(()=>{
          // })
          // this.priceLab2.isUnderline = true;
          // this.priceLab2.underlineHeight = 0;

          for (let key in this.privilegeItems) {
            this.privilegeItems[key].node.active = false;
          }

          let lastBonus = [];

          if (currTable.VipLv > 0) {
            lastBonus = this.vipBonusTabMap.get(currTable.VipLv - 1);
          }

          let currBonus = this.vipBonusTabMap.get(currTable.VipLv);

          for (let key in currBonus) {
            let item = this.creatorPrivilegeItem(Number(key));
            item.node.active = true;
            let bouns = currBonus[key];
            let tips = "";

            if (bouns.VipBonus == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).VipBonus.VipBonus_OpenFunction) {
              tips = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).VipBonus[bouns.VipBonus] + "_" + bouns.AddValue);
            } else if (bouns.VipBonus == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).VipBonus.VipBonus_PatrolIdleTime) {
              let value = Math.floor(bouns.AddValue / 360) / 10;
              tips = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).VipBonus[bouns.VipBonus], [value]);
            } else if (bouns.VipBonus == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).VipBonus.VipBonus_PatrolMoneyRatio || bouns.VipBonus == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).VipBonus.VipBonus_PatrolFoodRatio) {
              let value = Math.floor(bouns.AddValue / 100);
              tips = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).VipBonus[bouns.VipBonus], [value]);
            } else {
              tips = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).VipBonus[bouns.VipBonus], [bouns.AddValue]);
            }

            item.richtex.string = tips;

            if (currTable.VipLv == 0) {
              item.upNode.active = false;
              item.newNode.active = false;
            } else {
              let findTab = lastBonus.find(a => a.VipBonus == bouns.VipBonus);

              if (findTab) {
                if (bouns.VipBonus == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).VipBonus.VipBonus_OpenFunction) {
                  if (findTab.AddValue != bouns.AddValue) {
                    item.upNode.active = false;
                    item.newNode.active = true;
                  } else {
                    item.upNode.active = false;
                    item.newNode.active = false;
                  }
                } else {
                  if (findTab.AddValue < bouns.AddValue) {
                    item.upNode.active = true;
                    item.newNode.active = false;
                  } else {
                    item.upNode.active = false;
                    item.newNode.active = false;
                  }
                }
              } else {
                item.upNode.active = false;
                item.newNode.active = true;
              }
            }
          }

          this.scheduleOnce(() => {
            this.deleteLine.width = this.priceLab2.getComponent(UITransform).width + 5;
            this.privilegeScrollView.scrollToTop();
          });
          this.updateBuyState();
        }

        updateBuyState() {
          let currTable = this.currBtnItem.vipTable;
          this.isCanBuy = false;

          if (currTable.VipLv > this.vipLevel) {
            this.buyBtnNode.active = true;
            this.buyBtnNode.getComponent(Sprite).grayscale = true;
            this.purchasedBtnNode.active = false;
            this.buyBtnNode.getChildByName("reddot").active = false;
          } else {
            let isBuy = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.vipMsg.boughtVipGifts.indexOf(currTable.VipLv) >= 0;

            if (isBuy) {
              this.purchasedBtnNode.active = true;
              this.buyBtnNode.active = false;
            } else {
              this.isCanBuy = true;
              this.buyBtnNode.active = true;
              this.buyBtnNode.getComponent(Sprite).grayscale = false;
              this.buyBtnNode.getChildByName("reddot").active = true;
              this.purchasedBtnNode.active = false;
            }
          }
        }

        initGiftView() {
          this.giftLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_vip_4", [this.vipLevel]);
          this.giftSpr.grayscale = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.vipMsg.isDailyGiftReceived;
          this.lightNode.active = !(_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.vipMsg.isDailyGiftReceived;
          this.arrowNode.active = !(_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.vipMsg.isDailyGiftReceived;
        }

        initProgress() {
          let vipTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().VipTableByVipLv.getValue(this.vipLevel);
          let lastVipTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().VipTableByVipLv.getValue(this.vipLevel - 1);
          let lastVipExp = lastVipTable ? lastVipTable.VipExp : 0;
          let VipExp = vipTable.VipExp - lastVipExp;

          if (this.vipLevel >= this.maxVipLevel) {
            //this.tipsLab.string = "已达到最大等级";
            this.tipsLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_vip_7");
            this.progressLabel.string = VipExp + "/" + VipExp;
            this.progressLabel.node.active = false;
            this.vipProgress.progress = 1;
          } else {
            this.progressLabel.node.active = true;
            let currScore = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).CurrencyType.CurrencyType_VipExp);
            let score = vipTable.VipExp - currScore;
            let score2 = currScore - lastVipExp;
            this.tipsLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_vip_5", [score, this.vipLevel + 1]);
            this.progressLabel.string = score2 + "/" + VipExp;
            this.vipProgress.progress = score2 / VipExp;
          }
        }

        creatorPrivilegeItem(index) {
          if (!this.privilegeItems) {
            this.privilegeItems = [];
          }

          if (!this.privilegeItems[index]) {
            let item = instantiate(this.privilegePrefab);
            item.parent = this.privilegeScrollView.content;
            let com = item.getComponent(_crd && VipPrivilegeItem === void 0 ? (_reportPossibleCrUseOfVipPrivilegeItem({
              error: Error()
            }), VipPrivilegeItem) : VipPrivilegeItem);
            this.privilegeItems.push(com);
          }

          return this.privilegeItems[index];
        }

        updateView() {
          if ((_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.vipMsg.vipLevel != this.vipLevel) {
            this.initView();
          } else {
            this.initProgress();
          }
        }

        onClickBuyBtn() {
          if (this.isCanBuy) {
            let currTable = this.currBtnItem.vipTable;

            if (currTable) {
              let id = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                error: Error()
              }), ItemData) : ItemData).ins.isItemsEnoughByList([currTable.VipCostItemIds], [currTable.VipCostItemNum]);

              if (id <= 0) {
                (_crd && ActivityControl === void 0 ? (_reportPossibleCrUseOfActivityControl({
                  error: Error()
                }), ActivityControl) : ActivityControl).ins.requesBuyVipGift(currTable.VipLv);
              } else {
                let itemtab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().ItemTableById.getValue(id); //ShowTips(LangMgr.getLab(itemtab.Name) + "不足");

                (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                  error: Error()
                }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getCombineString("Tips_itemshortage", [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getLab(itemtab.Name)]));
              }
            }
          } else {
            //ShowTips("未达到vip等级");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_vip_1"));
          }
        }

        onClickReceiveGift() {
          if (!(_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.vipMsg.isDailyGiftReceived) {
            (_crd && ActivityControl === void 0 ? (_reportPossibleCrUseOfActivityControl({
              error: Error()
            }), ActivityControl) : ActivityControl).ins.requesReceiveVipDailyGift();
          }
        }

        onClickGetVipExp() {
          if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_DailyShop)) {
            // UIMgr.ins.show({viewName:ViewName.MallMainView,data:tab.MallTab.MallTab_Tab5});
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.hideView("WelfareActivityMainView");
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.jumpLayer((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Module.Module_ActivityMainView);
          } else {
            // OpenFunctionMgr.ins.showFunctionTips(tab.OpenFunctionName.OpenFunctionName_DailyShop);
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).DiamondBuyPop
            });
          } // ShowTips("前往获取vip积分")

        } // vip等级提升


        on_s2c_VipLevelUpPush(msg) {
          this.initView();
        } // vip每日礼包领取返回


        on_s2c_ReceiveVipDailyGiftRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.initGiftView();
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            });
          }
        } // vip专属礼包购买返回


        on_s2c_BuyVipGiftRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.updateBuyState();
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            });
          }
        }
        /**
        * 刷新资源显示数量
        */


        updateResourceNum(itemIds) {
          if (itemIds.indexOf((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_VipExp) > -1) {
            this.initProgress(); // this.numLab.string = ItemData.ins.getCount(this.itemId) + ""
            // let item = ItemData.ins.getByItemId(this.itemId);
            // if (item) {
            //     let num = item.num;
            //     this.numLab.string = num + "";
            // } else {
            //     this.numLab.string = "0";
            // }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "giftSpr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "giftLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tipsLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "privilegetitleLab1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "privilegeScrollView", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "privilegetitleLab2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rewardNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "priceIcon1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "priceIcon2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "priceLab1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "priceLab2", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "buyBtnNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "purchasedBtnNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "vipBtnScrollview", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "vipProgress", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "deleteLine", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "vipBtnPrefab", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "privilegePrefab", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "lightNode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "arrowNode", [_dec22], {
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
//# sourceMappingURL=84e501181b6ebc2141b7205dc037c5823debb669.js.map
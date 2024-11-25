System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "client_protocol", "__unresolved_18", "__unresolved_19"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, error, instantiate, Label, Node, Prefab, RichText, Toggle, ViewBase, RareBookItem, tab, RareBookData, LangMgr, RareBookAttributeItem, CommonItem, ShowItemNotEnoughTips, ShowTips, UIMgr, RareBookSmallItem, ConsumeResourceItem, ItemPoolMgr, ItemInfo, ItemData, HeroStar, ViewName, WeaponItem, EventMgr, proto, RareBookControl, LocalEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _crd, ccclass, property, RareBookDetailView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewBase(extras) {
    _reporterNs.report("ViewBase", "../../../framework/base/ViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookItem(extras) {
    _reporterNs.report("RareBookItem", "./RareBookItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "./RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "./RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookAttributeItem(extras) {
    _reporterNs.report("RareBookAttributeItem", "./RareBookAttributeItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookSmallItem(extras) {
    _reporterNs.report("RareBookSmallItem", "./RareBookSmallItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConsumeResourceItem(extras) {
    _reporterNs.report("ConsumeResourceItem", "../common/ConsumeResourceItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../hero/HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponItem(extras) {
    _reporterNs.report("WeaponItem", "../common/WeaponItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookControl(extras) {
    _reporterNs.report("RareBookControl", "./RareBookControl", _context.meta, extras);
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
      Button = _cc.Button;
      Color = _cc.Color;
      error = _cc.error;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      RichText = _cc.RichText;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewBase = _unresolved_2.ViewBase;
    }, function (_unresolved_3) {
      RareBookItem = _unresolved_3.RareBookItem;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      RareBookData = _unresolved_5.RareBookData;
    }, function (_unresolved_6) {
      LangMgr = _unresolved_6.LangMgr;
    }, function (_unresolved_7) {
      RareBookAttributeItem = _unresolved_7.RareBookAttributeItem;
    }, function (_unresolved_8) {
      CommonItem = _unresolved_8.CommonItem;
    }, function (_unresolved_9) {
      ShowItemNotEnoughTips = _unresolved_9.ShowItemNotEnoughTips;
      ShowTips = _unresolved_9.ShowTips;
      UIMgr = _unresolved_9.UIMgr;
    }, function (_unresolved_10) {
      RareBookSmallItem = _unresolved_10.RareBookSmallItem;
    }, function (_unresolved_11) {
      ConsumeResourceItem = _unresolved_11.ConsumeResourceItem;
    }, function (_unresolved_12) {
      ItemPoolMgr = _unresolved_12.ItemPoolMgr;
    }, function (_unresolved_13) {
      ItemInfo = _unresolved_13.ItemInfo;
    }, function (_unresolved_14) {
      ItemData = _unresolved_14.ItemData;
    }, function (_unresolved_15) {
      HeroStar = _unresolved_15.HeroStar;
    }, function (_unresolved_16) {
      ViewName = _unresolved_16.ViewName;
    }, function (_unresolved_17) {
      WeaponItem = _unresolved_17.WeaponItem;
    }, function (_unresolved_18) {
      EventMgr = _unresolved_18.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_19) {
      RareBookControl = _unresolved_19.RareBookControl;
    }, function (_unresolved_20) {
      LocalEvent = _unresolved_20.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e828e3ifGpLwLoi9wmyPG7Z", "RareBookDetailView", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'error', 'instantiate', 'Label', 'log', 'Node', 'Prefab', 'RichText', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookDetailView
       * zhudingchao
       * Thu May 23 2024 15:50:18 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookDetailView.ts
       *
       */

      _export("RareBookDetailView", RareBookDetailView = (_dec = ccclass('RareBookDetailView'), _dec2 = property(_crd && RareBookItem === void 0 ? (_reportPossibleCrUseOfRareBookItem({
        error: Error()
      }), RareBookItem) : RareBookItem), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property([_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
        error: Error()
      }), WeaponItem) : WeaponItem]), _dec7 = property(RichText), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Prefab), _dec12 = property(Node), _dec13 = property(_crd && RareBookSmallItem === void 0 ? (_reportPossibleCrUseOfRareBookSmallItem({
        error: Error()
      }), RareBookSmallItem) : RareBookSmallItem), _dec14 = property(_crd && RareBookSmallItem === void 0 ? (_reportPossibleCrUseOfRareBookSmallItem({
        error: Error()
      }), RareBookSmallItem) : RareBookSmallItem), _dec15 = property(RichText), _dec16 = property(Label), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(_crd && ConsumeResourceItem === void 0 ? (_reportPossibleCrUseOfConsumeResourceItem({
        error: Error()
      }), ConsumeResourceItem) : ConsumeResourceItem), _dec23 = property(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
        error: Error()
      }), HeroStar) : HeroStar), _dec24 = property(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
        error: Error()
      }), HeroStar) : HeroStar), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Label), _dec31 = property(Label), _dec32 = property(Node), _dec33 = property(Toggle), _dec34 = property(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
        error: Error()
      }), HeroStar) : HeroStar), _dec35 = property([Node]), _dec(_class = (_class2 = class RareBookDetailView extends (_crd && ViewBase === void 0 ? (_reportPossibleCrUseOfViewBase({
        error: Error()
      }), ViewBase) : ViewBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bookItem", _descriptor, this);

          // @property(Node)
          // grouppopBtnNode: Node = null;
          _initializerDefineProperty(this, "vocationLab", _descriptor2, this);

          _initializerDefineProperty(this, "attributeNode", _descriptor3, this);

          _initializerDefineProperty(this, "arrowNode", _descriptor4, this);

          _initializerDefineProperty(this, "comItems", _descriptor5, this);

          _initializerDefineProperty(this, "describeRichtext", _descriptor6, this);

          _initializerDefineProperty(this, "detailNode", _descriptor7, this);

          _initializerDefineProperty(this, "studyNode", _descriptor8, this);

          _initializerDefineProperty(this, "comprehendNode", _descriptor9, this);

          _initializerDefineProperty(this, "attrItemPrefab", _descriptor10, this);

          _initializerDefineProperty(this, "gotoBtnNode", _descriptor11, this);

          _initializerDefineProperty(this, "bookSmallItem", _descriptor12, this);

          _initializerDefineProperty(this, "bookSmallItem2", _descriptor13, this);

          _initializerDefineProperty(this, "describeRichtext2", _descriptor14, this);

          _initializerDefineProperty(this, "describeRichtext3", _descriptor15, this);

          _initializerDefineProperty(this, "studyLevelUpNode", _descriptor16, this);

          _initializerDefineProperty(this, "studyMaxLevelNode", _descriptor17, this);

          _initializerDefineProperty(this, "studyLimitLevelNode", _descriptor18, this);

          _initializerDefineProperty(this, "stuffLayout", _descriptor19, this);

          _initializerDefineProperty(this, "stuffLayout2", _descriptor20, this);

          _initializerDefineProperty(this, "consumeResourceItem", _descriptor21, this);

          _initializerDefineProperty(this, "nowStar", _descriptor22, this);

          _initializerDefineProperty(this, "nextStar", _descriptor23, this);

          _initializerDefineProperty(this, "nowStarNode", _descriptor24, this);

          _initializerDefineProperty(this, "nextStarNode", _descriptor25, this);

          _initializerDefineProperty(this, "starArrowNode", _descriptor26, this);

          _initializerDefineProperty(this, "comprehendLevelUpNode", _descriptor27, this);

          _initializerDefineProperty(this, "comprehendMaxLevelNode", _descriptor28, this);

          _initializerDefineProperty(this, "comprehendNeedLab", _descriptor29, this);

          _initializerDefineProperty(this, "comprehendHaveLab", _descriptor30, this);

          _initializerDefineProperty(this, "activateBtnNode", _descriptor31, this);

          _initializerDefineProperty(this, "toggle", _descriptor32, this);

          _initializerDefineProperty(this, "starItem", _descriptor33, this);

          _initializerDefineProperty(this, "redPoints", _descriptor34, this);

          this.bookInfos = void 0;
          this.currIndex = 0;
          this.currBookInfo = void 0;
          this.currTag = 1;
          this.attrItems = [];
          this.studyComItems = void 0;
          this.comprehendItems = void 0;
          this.nextLevelTable = void 0;
          this.nextStarTable = void 0;
        }

        // private isGrouppop:boolean=false;  //是否是融汇
        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.CombineBookFragmentRsp, this.on_s2c_CombineBookFragmentRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpgradeBookLevelRsp, this.on_s2c_UpgradeBookLevelRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpgradeBookStarRsp, this.on_s2c_UpgradeBookStarRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).JumpLayerSuceess, this.onJumpLayerSuceess, this);
        }

        onJumpLayerSuceess(opName) {
          if (opName == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Module.Module_RareBookView) {
            this.onClose();
          }
        }

        onShow() {
          if (this.openData["bookInfos"]) {
            this.bookInfos = this.openData["bookInfos"];
          } else {
            let infos = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getBookInfos(true); //排序-------------

            this.bookInfos = infos;
          }

          if (this.openData["index"]) {
            this.currIndex = this.openData["index"];
          }

          if (this.openData["currInfo"]) {
            this.currBookInfo = this.openData["currInfo"];
          }

          if (!this.bookInfos) {
            error("打开view数据错误");
            return;
          }

          if (this.currBookInfo) {
            this.currIndex = this.bookInfos.indexOf(this.currBookInfo);
          }

          this.initView();
        }

        initView() {
          this.currBookInfo = this.bookInfos[this.currIndex];

          if (!this.currBookInfo.isLock && this.currTag != 1) {
            this.currTag = 1;
            this.toggle.isChecked = true;
          }

          if (this.currBookInfo.isLock && this.currBookInfo.firstLookRed) {
            this.currBookInfo.isRedPoint = false;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).updateBookRedPoint);
          }

          this.initBaseView();
          let v = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass[this.currBookInfo.bookTable.Class]);
          this.vocationLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_rarebook_1", [v]);
          this.setViewShowStage();
          this.updateRed(); // if (this.currTag == 1) {
          //     this.initDetailView();
          // }else if(this.currTag==2){
          //     this.initStudyView();
          // }else if(this.currTag==3){
          //     this.initComprehendView();
          // }
        }

        initBaseView() {
          this.bookItem.initData(this.currBookInfo, false, null, true, true); // let stab = RareBookData.ins.getSerieTableByBookId(this.currBookInfo.itemId);
          // if (stab) {
          //     this.grouppopBtnNode.active = true;
          // } else {
          //     this.grouppopBtnNode.active = false;
          // }
        }

        setViewShowStage() {
          if (this.currTag == 1) {
            this.initDetailView();
          } else if (this.currTag == 2) {
            this.initStudyView();
          } else if (this.currTag == 3) {
            this.initComprehendView();
          }
        }

        initDetailView() {
          this.detailNode.active = true;
          this.studyNode.active = false;
          this.comprehendNode.active = false;
          let attrMap = this.currBookInfo.attrMap;
          let index = 0;
          this.hideArrtItem();
          attrMap.forEach((value, key) => {
            let item = this.creatorItem(index);
            item.initView(key, value);
            index++;
          });
          let advanceId = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookAdvanceId(this.currBookInfo.itemId);

          if (advanceId) {
            this.arrowNode.active = true;
            this.comItems[0].node.active = true;
            this.comItems[0].initBookItemId(advanceId, true, true, false, this.onTouchWeaponItem);
            this.comItems[1].node.active = true;
            this.comItems[1].initData(this.currBookInfo, true, true, false, this.onTouchWeaponItem);
          } else {
            this.comItems[0].node.active = true;
            this.comItems[0].initData(this.currBookInfo, true, true, false, this.onTouchWeaponItem);
            this.comItems[1].node.active = false;
            this.arrowNode.active = false;
          }

          this.describeRichtext.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.currBookInfo.bookStarTable.BookDescription);
          this.updateBtnState();
          this.starItem.showStar(this.currBookInfo.star); // this.gotoBtnNode.active = !this.currBookInfo.isLock;
        }

        initStudyView() {
          this.studyLevelUpNode.getChildByName("broke_btn").getComponent(Button).interactable = true;
          this.detailNode.active = false;
          this.studyNode.active = true;
          this.comprehendNode.active = false;

          if (!this.studyComItems) {
            this.studyComItems = [];
          }

          this.bookSmallItem.initView(this.currBookInfo, true);
          this.describeRichtext2.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.currBookInfo.bookStarTable.BookDescription);

          if (!this.currBookInfo.isLevelLimit()) {
            this.studyLevelUpNode.active = true;
            this.studyMaxLevelNode.active = false;
            this.studyLimitLevelNode.active = false;
            let nextLevel = this.currBookInfo.level + 1;
            let nextLavelTable = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getBookLevelTable(this.currBookInfo.bookTable.Aptitude, this.currBookInfo.bookTable.Class, nextLevel);
            this.nextLevelTable = nextLavelTable;

            if (nextLavelTable) {
              let attrMap = this.currBookInfo.attrMap;
              let nextAttrMap = this.currBookInfo.getAttrMapByLevelRatio(nextLavelTable.Ratio);
              let index = 0;
              this.hideArrtItem();
              attrMap.forEach((value, key) => {
                let item = this.creatorItem(index);
                item.initView(key, value, nextAttrMap.get(key));
                index++;
              });
              index = 0;

              for (let key in nextLavelTable.MaterialIdList) {
                let id = nextLavelTable.MaterialIdList[key];
                let num = nextLavelTable.MaterialCountList[key];
                let info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                  error: Error()
                }), ItemInfo) : ItemInfo)();
                let currNum = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                  error: Error()
                }), ItemData) : ItemData).ins.getCount(id);
                info.initItemData(id, currNum);

                if (info.itemTable.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).ItemType.ItemType_Currency) {
                  this.consumeResourceItem.initData(id, num);
                } else {
                  info.needNum = num;

                  if (!this.studyComItems[index]) {
                    let item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                      error: Error()
                    }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(info, this.stuffLayout, true, true);
                    this.studyComItems.push(item.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
                      error: Error()
                    }), CommonItem) : CommonItem));
                  } else {
                    this.studyComItems[index].initData(info, true, true);
                  }

                  index++;
                }
              }
            } else {
              let attrMap = this.currBookInfo.attrMap;
              let index = 0;
              this.hideArrtItem();
              attrMap.forEach((value, key) => {
                let item = this.creatorItem(index);
                item.initView(key, value, -1);
                index++;
              }); //满级状态

              this.studyLevelUpNode.active = false;
              this.studyMaxLevelNode.active = false;
              this.studyLimitLevelNode.active = true;
            }
          } else {
            let attrMap = this.currBookInfo.attrMap;
            let index = 0;
            this.hideArrtItem();
            attrMap.forEach((value, key) => {
              let item = this.creatorItem(index);
              item.initView(key, value, -1);
              index++;
            }); //等级上限

            this.nextLevelTable = null;
            this.studyLevelUpNode.active = false;
            this.studyMaxLevelNode.active = true;
            this.studyLimitLevelNode.active = false;
          }
        }

        updateBtnState() {
          if (this.currBookInfo.isLock) {
            this.gotoBtnNode.active = false;
            this.activateBtnNode.active = false;
          } else {
            if (this.currBookInfo.isCanActivate()) {
              this.activateBtnNode.active = true;
              this.gotoBtnNode.active = false;
            } else {
              this.gotoBtnNode.active = true;
              this.activateBtnNode.active = false;
            }
          }
        }

        initComprehendView() {
          this.detailNode.active = false;
          this.studyNode.active = false;
          this.comprehendNode.active = true;

          if (!this.comprehendItems) {
            this.comprehendItems = [];
          }

          this.bookSmallItem2.initView(this.currBookInfo, true);

          if (!this.currBookInfo.isMaxStar()) {
            let nextStar = this.currBookInfo.star + 1;
            let nextStarTable = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getBoolStarTable(this.currBookInfo.itemId, nextStar);

            if (nextStarTable) {
              this.comprehendLevelUpNode.active = true;
              this.comprehendMaxLevelNode.active = false;
              this.nextStarNode.active = true;
              this.starArrowNode.active = true;
              this.nowStar.showStar(this.currBookInfo.star);
              this.nextStar.showStar(nextStar);
              let attrMap = this.currBookInfo.attrMap;
              let ratio = this.currBookInfo.bookLevelTable ? this.currBookInfo.bookLevelTable.Ratio : 0;
              let nextAttrMap = this.currBookInfo.getAttrMapByLevelRatio(ratio, nextStarTable.AttrType, nextStarTable.AttrValue);
              let index = 0;
              this.hideArrtItem();
              attrMap.forEach((value, key) => {
                let item = this.creatorItem(index);
                item.initView(key, value, nextAttrMap.get(key));
                index++;
              });

              for (let key in this.comprehendItems) {
                this.comprehendItems[key].node.active = false;
              }

              index = 0;
              let totoal = 0;
              let isConsumeOther = this.currBookInfo.itemTable.Quality >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GetKeyValue_ConfigTable().BookStarUniversalMaterialQuality; // for (let key in nextStarTable.MaterialIdList) {

              let id = this.currBookInfo.bookStarTable.MaterialIdList[index];
              let num = this.currBookInfo.bookStarTable.MaterialCountList[index];
              let info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                error: Error()
              }), ItemInfo) : ItemInfo)();
              let currNum = Number((_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                error: Error()
              }), ItemData) : ItemData).ins.getCount(id));
              info.initItemData(id, currNum);

              if (!this.comprehendItems[index]) {
                let item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                  error: Error()
                }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(info, this.stuffLayout2);
                item.parent = this.stuffLayout2;
                this.comprehendItems.push(item.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
                  error: Error()
                }), CommonItem) : CommonItem));
              } else {
                this.comprehendItems[index].node.active = true; // this.comprehendItems[index].initData(info, true,true);
              }

              if (currNum > num) {
                info.needNum = num;
                info.num = num;
              } else {
                if (isConsumeOther) {
                  info.needNum = currNum;
                  info.num = currNum;
                } else {
                  info.needNum = num;
                  info.num = currNum;
                }
              }

              this.comprehendItems[index].initData(info, true, true);
              this.comprehendItems[index].hideConsumeFenMu();
              totoal += currNum; // if(this.currBookInfo.)

              this.describeRichtext3.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(nextStarTable.Description);

              if (this.currBookInfo.itemTable.Quality >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GetKeyValue_ConfigTable().BookStarUniversalMaterialQuality && totoal < num) {
                index++;
                let itemId = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().GetKeyValue_ConfigTable().BookStarUniversalMaterial;
                let info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                  error: Error()
                }), ItemInfo) : ItemInfo)();
                let currNum2 = Number((_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                  error: Error()
                }), ItemData) : ItemData).ins.getCount(itemId));
                info.initItemData(itemId, currNum2);

                if (!this.comprehendItems[index]) {
                  let item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                    error: Error()
                  }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(info, this.stuffLayout2, true);
                  item.parent = this.stuffLayout2;
                  this.comprehendItems.push(item.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
                    error: Error()
                  }), CommonItem) : CommonItem));
                } else {
                  this.comprehendItems[index].node.active = true;
                }

                info.needNum = num - currNum;

                if (info.needNum <= currNum2) {
                  info.num = info.needNum;
                } else {
                  info.num = currNum2;
                }

                this.comprehendItems[index].initData(info, true, true);
                this.comprehendItems[index].hideConsumeFenMu();
                totoal += currNum2;
              }

              this.comprehendHaveLab.string = totoal + "";
              this.comprehendNeedLab.string = num + "";
              let cStr = "";

              if (totoal >= num) {
                cStr = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtGreen;
              } else {
                cStr = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtRed;
              }

              this.comprehendHaveLab.color = new Color().fromHEX(cStr); // index++;
              // }
            }

            this.nextStarTable = nextStarTable;
          } else {
            this.nowStar.showStar(this.currBookInfo.star);
            this.nextStarNode.active = false;
            this.starArrowNode.active = false;
            this.comprehendLevelUpNode.active = false;
            this.comprehendMaxLevelNode.active = true;
            this.describeRichtext3.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(this.currBookInfo.bookStarTable.Description); //满级状态

            this.nextStarTable = null;
            let attrMap = this.currBookInfo.attrMap;
            let index = 0;
            this.hideArrtItem();
            attrMap.forEach((value, key) => {
              let item = this.creatorItem(index);
              item.initView(key, value, -1);
              index++;
            });
          }
        }

        hideArrtItem() {
          for (let key in this.attrItems) {
            this.attrItems[key].node.active = false;
          }
        }

        creatorItem(index) {
          if (!this.attrItems[index]) {
            let node = instantiate(this.attrItemPrefab);
            node.parent = this.attributeNode;
            this.attrItems.push(node.getComponent(_crd && RareBookAttributeItem === void 0 ? (_reportPossibleCrUseOfRareBookAttributeItem({
              error: Error()
            }), RareBookAttributeItem) : RareBookAttributeItem));
          }

          this.attrItems[index].node.active = true;
          return this.attrItems[index];
        }

        onClickToggle(event, tag) {
          tag = Number(tag);

          if (this.currBookInfo.isLock) {
            if (this.currTag != tag) {
              this.currTag = tag;
              this.setViewShowStage();
            }
          } else {
            if (tag != 1) {
              this.scheduleOnce(() => {
                this.toggle.isChecked = true;
              });
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("Tips_rarebook_1")); //ShowTips("获得后解锁")
            }
          }
        }

        onClickLeft() {
          this.currIndex--;

          if (this.currIndex < 0) {
            this.currIndex = this.bookInfos.length - 1;
          }

          this.initView();
        }

        onClickRight() {
          this.currIndex++;

          if (this.currIndex >= this.bookInfos.length) {
            this.currIndex = 0;
          }

          this.initView();
        }

        onClickGroppop() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RareBookGroupPop,
            data: {
              "itemId": this.currBookInfo.itemId
            }
          });
        }

        onClickPreView() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RareBookLevelPreviewPop,
            data: {
              "bookInfo": this.currBookInfo
            }
          });
        }

        onClickGotoBtn() {
          //ShowTips("前往寻经");
          (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
            error: Error()
          }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_rarebook_11"));
        }
        /**
         * 点击升星
         */


        onClickUpStar() {
          if (this.currBookInfo.bookStarTable && !this.currBookInfo.isMaxStar()) {
            let id = this.currBookInfo.bookStarTable.MaterialIdList[0];
            let needNum = this.currBookInfo.bookStarTable.MaterialCountList[0];
            let currNum = Number((_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(id));

            if (this.currBookInfo.itemTable.Quality >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().BookStarUniversalMaterialQuality) {
              let itemId = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GetKeyValue_ConfigTable().BookStarUniversalMaterial;
              let currNum2 = Number((_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                error: Error()
              }), ItemData) : ItemData).ins.getCount(itemId));
              currNum += currNum2;
            }

            if (needNum <= currNum) {
              (_crd && RareBookControl === void 0 ? (_reportPossibleCrUseOfRareBookControl({
                error: Error()
              }), RareBookControl) : RareBookControl).ins.requestUpgradeBookStar(this.currBookInfo.id);
            } else {
              (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
                error: Error()
              }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(id);
            }
          }
        }

        onClickStudy() {
          if (this.nextLevelTable) {
            let itemid = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.isItemsEnoughByList(this.nextLevelTable.MaterialIdList, this.nextLevelTable.MaterialCountList);

            if (itemid > 0) {
              if (itemid === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).CurrencyType.CurrencyType_Gold) {
                (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
                  error: Error()
                }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).CurrencyType.CurrencyType_Gold);
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.show({
                  viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).ResourceBuyPop,
                  data: {
                    "itemId": (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                      error: Error()
                    }), tab) : tab).CurrencyType.CurrencyType_Gold
                  }
                });
              } else {
                (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
                  error: Error()
                }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(itemid);
              }

              return;
            }

            this.studyLevelUpNode.getChildByName("broke_btn").getComponent(Button).interactable = false;
            (_crd && RareBookControl === void 0 ? (_reportPossibleCrUseOfRareBookControl({
              error: Error()
            }), RareBookControl) : RareBookControl).ins.requestUpgradeBookLevel(this.currBookInfo.id);
          }
        }

        onTouchWeaponItem(item) {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RareBookInfoItemPop,
            data: {
              "bookInfo": item.info
            }
          });
        }

        onClickActivate() {
          (_crd && RareBookControl === void 0 ? (_reportPossibleCrUseOfRareBookControl({
            error: Error()
          }), RareBookControl) : RareBookControl).ins.requestCombineBookFragment(this.currBookInfo.fragmentTable.Id);
        }

        updateBookItemView() {
          this.bookItem.updateView();
        }

        on_s2c_CombineBookFragmentRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            // if(this.currBookInfo.id==msg.bookId){
            this.updateBookItemView();
            this.updateBtnState();
            this.updateRed(); // }
          }
        }

        on_s2c_UpgradeBookLevelRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return; // if(msg.error.code==proto.CommonErrorCode.Succeed){

          this.updateBookItemView();
          this.initStudyView();
          this.updateRed(); // }
        }

        on_s2c_UpgradeBookStarRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return; // if(msg.error.code==proto.CommonErrorCode.Succeed){

          this.updateBookItemView();
          this.initComprehendView();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).StarUpPop,
            data: {
              "bookInfo": this.currBookInfo
            }
          });
          this.updateRed(); // }
        } // protected onDestroy(): void {
        //     super.onDestroy();
        //     EventMgr.unTarget(this);
        // }


        updateRed() {
          // let isCanActivate=this.currBookInfo.isCanActivate();
          this.redPoints[0].active = false;
          let isCanLevel = this.currBookInfo.isLock && this.currBookInfo.isCanStudy;
          let isCanStar = this.currBookInfo.isLock && this.currBookInfo.isCanUpStar;
          this.redPoints[1].active = isCanLevel;
          this.redPoints[2].active = isCanStar;
          this.redPoints[3].active = isCanLevel;
          this.redPoints[4].active = isCanStar;
        }

        onDisable() {
          this.starItem.onDisable();
          this.nextStar.onDisable();
          this.nowStar.onDisable();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bookItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "vocationLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "attributeNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "arrowNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "comItems", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "describeRichtext", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "detailNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "studyNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "comprehendNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "attrItemPrefab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "gotoBtnNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bookSmallItem", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bookSmallItem2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "describeRichtext2", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "describeRichtext3", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "studyLevelUpNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "studyMaxLevelNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "studyLimitLevelNode", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "stuffLayout", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "stuffLayout2", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "consumeResourceItem", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "nowStar", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "nextStar", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "nowStarNode", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "nextStarNode", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "starArrowNode", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "comprehendLevelUpNode", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "comprehendMaxLevelNode", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "comprehendNeedLab", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "comprehendHaveLab", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "activateBtnNode", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "toggle", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "starItem", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "redPoints", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53bbf260a52aa110036cc27755de61b02c5cb861.js.map
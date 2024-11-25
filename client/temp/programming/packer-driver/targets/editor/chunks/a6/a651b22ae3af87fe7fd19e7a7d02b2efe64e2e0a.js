System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, log, Node, Prefab, Sprite, ViewPop, ItemPoolMgr, LangMgr, tab, UIMgr, ViewName, EquipControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, EquipmentDetailPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "./EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipControl(extras) {
    _reporterNs.report("EquipControl", "./EquipControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipAttrInfo(extras) {
    _reporterNs.report("EquipAttrInfo", "./EquipAttrInfo", _context.meta, extras);
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
      log = _cc.log;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ItemPoolMgr = _unresolved_3.ItemPoolMgr;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      ViewName = _unresolved_7.ViewName;
    }, function (_unresolved_8) {
      EquipControl = _unresolved_8.EquipControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0da7bxvxm5FJ4ozPogyeiqv", "EquipmentDetailPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'labelAssembler', 'log', 'Node', 'Prefab', 'SpringJoint2D', 'Sprite', 'UI', 'View', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EquipmentDetailPop", EquipmentDetailPop = (_dec = ccclass('EquipmentDetailPop'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Sprite), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Prefab), _dec(_class = (_class2 = class EquipmentDetailPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemNode", _descriptor, this);

          _initializerDefineProperty(this, "nameLab", _descriptor2, this);

          _initializerDefineProperty(this, "typeLab", _descriptor3, this);

          _initializerDefineProperty(this, "scoreLab", _descriptor4, this);

          _initializerDefineProperty(this, "baseAttrNode", _descriptor5, this);

          _initializerDefineProperty(this, "addAttrNode", _descriptor6, this);

          _initializerDefineProperty(this, "additionNode", _descriptor7, this);

          _initializerDefineProperty(this, "desLab", _descriptor8, this);

          _initializerDefineProperty(this, "sp_bg", _descriptor9, this);

          _initializerDefineProperty(this, "resolveBtn", _descriptor10, this);

          _initializerDefineProperty(this, "equipBtn", _descriptor11, this);

          _initializerDefineProperty(this, "exchangeBtn", _descriptor12, this);

          _initializerDefineProperty(this, "growthBtn", _descriptor13, this);

          _initializerDefineProperty(this, "detailItemPrefab", _descriptor14, this);

          this.euqipInfo = null;
        }

        register() {}

        onLoad() {}

        start() {
          this.initData();
          this.initView();
        }

        initData() {
          this.euqipInfo = this.openData;
        }

        initView() {
          let item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createEquipItem(this.euqipInfo, this.itemNode, false); // item.getComponent(CommonItem).setIsTouchItem(false);

          this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.euqipInfo.itemTable.Name);
          this.typeLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.euqipInfo.getEquipTypeNameKey());
          this.scoreLab.string = this.euqipInfo.score + "";
          this.desLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.euqipInfo.itemTable.Desc);
          const quality = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(Number(this.euqipInfo.itemTable.Quality - 1));

          if (quality && quality.SkillBg) {
            this.sp_bg.setTexture(quality.SkillBg);
          }

          this.initAttrItme();
          this.equipBtn.active = !this.euqipInfo.isWear;
          this.growthBtn.active = this.euqipInfo.isWear;
          this.resolveBtn.active = !this.euqipInfo.isWear;
          this.exchangeBtn.active = this.euqipInfo.isWear;
        }

        initAttrItme() {
          let baseAttr = this.euqipInfo.baseAttrInfos;
          let enhanceLv = this.euqipInfo.isWear ? this.euqipInfo.enhanceLv : 0;
          let refineLv = this.euqipInfo.isWear ? this.euqipInfo.refineLv : 0; // let equipAttrInfo=this.euqipInfo.isWear?

          for (let key in baseAttr) {
            let addNum = baseAttr[key].getAddValueByLevel(enhanceLv);
            let item = this.createAttrItem(baseAttr[key], addNum);
            item.parent = this.baseAttrNode;
          }

          let addAttr = this.euqipInfo.extraAttrInfos;
          this.additionNode.active = addAttr.length > 0;

          for (let key in addAttr) {
            let addNum = addAttr[key].getAddValueByLevel(refineLv);
            let item = this.createAttrItem(addAttr[key], addNum);
            item.parent = this.addAttrNode;
          }
        }

        createAttrItem(attr, addNum = 0) {
          // let table=tab.getData().EquipAttrTableById.getValue(attrId);
          let item = instantiate(this.detailItemPrefab);
          item.getChildByName("name_txt").getComponent(Label).string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType[attr.attrTable.AttrType]);
          item.getChildByName("now_txt").getComponent(Label).string = attr.attrTable.Base + (addNum > 0 ? "(+" + addNum + ")" : "");
          return item;
        }

        onClickEquip() {
          if ((_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.getView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
            error: Error()
          }), ViewName) : ViewName).EquipmentView)) {
            log("穿戴-------------");
            (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
              error: Error()
            }), EquipControl) : EquipControl).ins.reqChangEquips(this.euqipInfo.equipTable.Class, [this.euqipInfo.id]);
          } else {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).BagPop);
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).EquipmentView,
              data: {
                "type": 3,
                "equipInfo": this.euqipInfo
              }
            });
          }

          this.onClose();
        }

        onClickResolve() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
            error: Error()
          }), ViewName) : ViewName).BagPop);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).EquipResolvePop
          });
          this.onClose();
        }

        onClickExchange() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).EquipmentView,
            data: {
              "type": 3,
              "equipInfo": this.euqipInfo
            }
          });
          this.onClose();
        }

        onClickGrowth() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).EquipmentView,
            data: {
              "type": 1,
              "equipInfo": this.euqipInfo
            }
          });
          this.onClose();
        }

        onDisable() {// ItemPoolMgr.ins.putCommonItem( this.itemNode.children[0])
        }

        onDestroy() {
          super.onDestroy(); // ItemPoolMgr.ins.putEquipItem( this.itemNode.children[0])
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "typeLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scoreLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "baseAttrNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "addAttrNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "additionNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "desLab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sp_bg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "resolveBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "equipBtn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "exchangeBtn", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "growthBtn", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "detailItemPrefab", [_dec15], {
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
//# sourceMappingURL=a651b22ae3af87fe7fd19e7a7d02b2efe64e2e0a.js.map
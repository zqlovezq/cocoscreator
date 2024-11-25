System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "client_protocol", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, RichText, Sprite, ToggleContainer, ViewPop, JadeRecastItem, ItemPoolMgr, ShowItemNotEnoughTips, ShowTips, UIMgr, ViewName, tab, EquipData, ItemData, EquipControl, EventMgr, proto, LangMgr, JadeSkillItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, ccclass, property, JadeRecastPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJadeRecastItem(extras) {
    _reporterNs.report("JadeRecastItem", "./JadeRecastItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "../equip/EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "../equip/EquipData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipControl(extras) {
    _reporterNs.report("EquipControl", "../equip/EquipControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJadeSkillItem(extras) {
    _reporterNs.report("JadeSkillItem", "./JadeSkillItem", _context.meta, extras);
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
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
      ToggleContainer = _cc.ToggleContainer;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      JadeRecastItem = _unresolved_3.JadeRecastItem;
    }, function (_unresolved_4) {
      ItemPoolMgr = _unresolved_4.ItemPoolMgr;
    }, function (_unresolved_5) {
      ShowItemNotEnoughTips = _unresolved_5.ShowItemNotEnoughTips;
      ShowTips = _unresolved_5.ShowTips;
      UIMgr = _unresolved_5.UIMgr;
    }, function (_unresolved_6) {
      ViewName = _unresolved_6.ViewName;
    }, function (_unresolved_7) {
      tab = _unresolved_7.tab;
    }, function (_unresolved_8) {
      EquipData = _unresolved_8.EquipData;
    }, function (_unresolved_9) {
      ItemData = _unresolved_9.ItemData;
    }, function (_unresolved_10) {
      EquipControl = _unresolved_10.EquipControl;
    }, function (_unresolved_11) {
      EventMgr = _unresolved_11.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_12) {
      LangMgr = _unresolved_12.LangMgr;
    }, function (_unresolved_13) {
      JadeSkillItem = _unresolved_13.JadeSkillItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b4a0/x2WdDXLcbAueazBAS", "JadeRecastPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'RichText', 'Sprite', 'Toggle', 'ToggleContainer']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JadeRecastPop", JadeRecastPop = (_dec = ccclass('JadeRecastPop'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(RichText), _dec9 = property(Sprite), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(_crd && JadeRecastItem === void 0 ? (_reportPossibleCrUseOfJadeRecastItem({
        error: Error()
      }), JadeRecastItem) : JadeRecastItem), _dec13 = property(_crd && JadeRecastItem === void 0 ? (_reportPossibleCrUseOfJadeRecastItem({
        error: Error()
      }), JadeRecastItem) : JadeRecastItem), _dec14 = property(_crd && JadeRecastItem === void 0 ? (_reportPossibleCrUseOfJadeRecastItem({
        error: Error()
      }), JadeRecastItem) : JadeRecastItem), _dec15 = property(Node), _dec16 = property(Prefab), _dec17 = property(ToggleContainer), _dec(_class = (_class2 = class JadeRecastPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemNode", _descriptor, this);

          _initializerDefineProperty(this, "beforeNode", _descriptor2, this);

          _initializerDefineProperty(this, "afterNode", _descriptor3, this);

          _initializerDefineProperty(this, "resIcon", _descriptor4, this);

          _initializerDefineProperty(this, "resHaveLab", _descriptor5, this);

          _initializerDefineProperty(this, "resNeedLab", _descriptor6, this);

          _initializerDefineProperty(this, "luckyLab", _descriptor7, this);

          _initializerDefineProperty(this, "resIcon2", _descriptor8, this);

          _initializerDefineProperty(this, "resHaveLab2", _descriptor9, this);

          _initializerDefineProperty(this, "resNeedLab2", _descriptor10, this);

          _initializerDefineProperty(this, "recastItem1", _descriptor11, this);

          _initializerDefineProperty(this, "recastItem2", _descriptor12, this);

          _initializerDefineProperty(this, "recastItem3", _descriptor13, this);

          _initializerDefineProperty(this, "currSkillNode", _descriptor14, this);

          _initializerDefineProperty(this, "skillItemPrefab", _descriptor15, this);

          _initializerDefineProperty(this, "toggleGroup", _descriptor16, this);

          this.equipInfo = void 0;
          this.upgardeTab = void 0;
          this.selectTag = 1;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FeatherRecastRsp, this.on_s2c_FeatherRecastRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FeatherRecastConfirmRsp, this.on_s2c_FeatherRecastConfirmRsp, this);
        }

        start() {
          this.equipInfo = this.openData;
          this.initView();
        }

        initView() {
          let item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(this.equipInfo, this.itemNode, false); // item.getComponent(CommonItem).setIsTouchItem(false);

          this.upgardeTab = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquipUpgradeTab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipUpgradeType.EquipUpgradeType_Recast, this.equipInfo.quality);

          if (this.equipInfo.newSkillList1.length > 0) {
            for (let key in this.toggleGroup.toggleItems) {
              this.toggleGroup.toggleItems[key].isChecked = false;
            }

            this.afterNode.active = true;
            this.beforeNode.active = false;

            if (this.equipInfo.newSkillList2.length > 0) {
              this.recastItem2.initData(this.equipInfo.newSkillList1, true);
              this.recastItem3.initData(this.equipInfo.newSkillList2, true);
            } else {
              this.recastItem2.initData(this.equipInfo.skillList, true);
              this.recastItem3.initData(this.equipInfo.newSkillList1, true);
            }

            let resItem = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(this.upgardeTab.Materials[0]);
            this.resIcon2.setTexture(resItem.Icon);
            this.resHaveLab2.string = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(resItem.Id) + "";
            this.resNeedLab2.string = this.upgardeTab.Materials[1] + "";
            let currSkills = this.equipInfo.skillList;
            this.currSkillNode.removeAllChildren();

            for (let key in currSkills) {
              let item = instantiate(this.skillItemPrefab);
              item.parent = this.currSkillNode;
              item.getComponent(_crd && JadeSkillItem === void 0 ? (_reportPossibleCrUseOfJadeSkillItem({
                error: Error()
              }), JadeSkillItem) : JadeSkillItem).initSkillId(currSkills[key]);
            }
          } else {
            this.afterNode.active = false;
            this.beforeNode.active = true;
            this.recastItem1.initData(this.equipInfo.skillList, false);
            let resItem = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(this.upgardeTab.Materials[0]);
            this.resIcon.setTexture(resItem.Icon);
            this.resHaveLab.string = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(resItem.Id) + "";
            this.resNeedLab.string = this.upgardeTab.Materials[1] + "";
          }

          let str = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_jade_1", [this.equipInfo.luckRecastRCount]);
          this.luckyLab.string = str + "";
        }

        onClickRecastBtn() {
          let resItem = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(this.upgardeTab.Materials[0]);

          if ((_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(resItem.Id) >= this.upgardeTab.Materials[1]) {
            (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
              error: Error()
            }), EquipControl) : EquipControl).ins.reqFeatherRecast(this.equipInfo.id);
          } else {
            //ShowTips(LangMgr.getLab(resItem.Name)+"不足")
            // ShowTips(LangMgr.getCombineString("Tips_itemshortage", [LangMgr.getLab(resItem.Name)]))
            this.onClose();
            (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
              error: Error()
            }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(resItem.Id);
          } // EquipControl.ins.reqFeatherRecast(this.equipInfo.id);

        }

        onClickSkillPreview() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).JadeSkillPreviewPop
          });
        }

        onClickHelp() {}

        onClickSaveBtn() {
          let tag = -1;

          for (let key in this.toggleGroup.toggleItems) {
            // this.toggleGroup.toggleItems[key].isChecked=false;
            if (this.toggleGroup.toggleItems[key].isChecked) {
              tag = Number(key) + 1;
            }
          }

          if (tag < 0) {
            //ShowTips("请选择后在保存")
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_jade_2"));
            return;
          }

          let r;

          if (tag == 1) {
            r = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_FeatherRecastConfirmReq.ConfirmResult.Left;
          } else {
            r = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_FeatherRecastConfirmReq.ConfirmResult.Right;
          }

          (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
            error: Error()
          }), EquipControl) : EquipControl).ins.reqFeatherRecastConfirmReq(this.equipInfo.id, r);
        }

        onClickContinuebBtn() {
          let resItem = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(this.upgardeTab.Materials[0]);

          if ((_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(resItem.Id) >= this.upgardeTab.Materials[1]) {
            (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
              error: Error()
            }), EquipControl) : EquipControl).ins.reqFeatherRecast(this.equipInfo.id);
          } else {
            //ShowTips(LangMgr.getLab(resItem.Name)+"不足")
            // ShowTips(LangMgr.getCombineString("Tips_itemshortage", [LangMgr.getLab(resItem.Name)]))
            this.onClose();
            (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
              error: Error()
            }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(resItem.Id);
          }
        }

        onClickTogger(event, type) {
          this.selectTag = Number(type);
        }
        /**
         * 羽毛重铸
         * @param msg 
         */


        on_s2c_FeatherRecastRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.initView();
          } // EquipData.ins.updateEquipMasterData(msg.heroClass,msg.masterData);

        }
        /**
        * 羽毛重铸
        * @param msg 
        */


        on_s2c_FeatherRecastConfirmRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.initView();
          } // EquipData.ins.updateEquipMasterData(msg.heroClass,msg.masterData);

        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "beforeNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "afterNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "resIcon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "resHaveLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "resNeedLab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "luckyLab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "resIcon2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "resHaveLab2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "resNeedLab2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "recastItem1", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "recastItem2", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "recastItem3", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "currSkillNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "skillItemPrefab", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "toggleGroup", [_dec17], {
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
//# sourceMappingURL=a21f501a80014966beebdc3760193466a56e3bde.js.map
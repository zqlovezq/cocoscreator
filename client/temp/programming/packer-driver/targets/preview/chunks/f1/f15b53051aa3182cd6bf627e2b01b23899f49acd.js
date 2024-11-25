System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, instantiate, Label, Node, Prefab, HeroAttrItem, EquipData, tab, UIMgr, ViewName, EquipControl, HeroEquipSlotItem, LangMgr, RedMgr, RedDotType, RoleData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, HeroDetailEquipItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHeroAttrItem(extras) {
    _reporterNs.report("HeroAttrItem", "./HeroAttrItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "../../equip/EquipData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipContainerInfo(extras) {
    _reporterNs.report("EquipContainerInfo", "../../equip/EquipContainerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipControl(extras) {
    _reporterNs.report("EquipControl", "../../equip/EquipControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroEquipSlotItem(extras) {
    _reporterNs.report("HeroEquipSlotItem", "./HeroEquipSlotItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      HeroAttrItem = _unresolved_2.HeroAttrItem;
    }, function (_unresolved_3) {
      EquipData = _unresolved_3.EquipData;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      UIMgr = _unresolved_5.UIMgr;
    }, function (_unresolved_6) {
      ViewName = _unresolved_6.ViewName;
    }, function (_unresolved_7) {
      EquipControl = _unresolved_7.EquipControl;
    }, function (_unresolved_8) {
      HeroEquipSlotItem = _unresolved_8.HeroEquipSlotItem;
    }, function (_unresolved_9) {
      LangMgr = _unresolved_9.LangMgr;
    }, function (_unresolved_10) {
      RedMgr = _unresolved_10.RedMgr;
    }, function (_unresolved_11) {
      RedDotType = _unresolved_11.RedDotType;
    }, function (_unresolved_12) {
      RoleData = _unresolved_12.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "24782C0t/RBg6V3ahIPVOeX", "HeroDetailEquipItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroDetailEquipItem", HeroDetailEquipItem = (_dec = ccclass('HeroDetailEquipItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(Node), _dec9 = property([_crd && HeroEquipSlotItem === void 0 ? (_reportPossibleCrUseOfHeroEquipSlotItem({
        error: Error()
      }), HeroEquipSlotItem) : HeroEquipSlotItem]), _dec10 = property([Node]), _dec(_class = (_class2 = class HeroDetailEquipItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "inteamNode", _descriptor, this);

          _initializerDefineProperty(this, "notinteamNode", _descriptor2, this);

          _initializerDefineProperty(this, "equipNode", _descriptor3, this);

          _initializerDefineProperty(this, "specialEquipNode", _descriptor4, this);

          _initializerDefineProperty(this, "equipAttrNode", _descriptor5, this);

          _initializerDefineProperty(this, "attrItemPrefab", _descriptor6, this);

          _initializerDefineProperty(this, "node_equip_red", _descriptor7, this);

          _initializerDefineProperty(this, "equipItems", _descriptor8, this);

          _initializerDefineProperty(this, "masterNodes", _descriptor9, this);

          // public specialEquipItems:Array<HeroItem>;
          this.equipAttrItems = void 0;
          this.heroClass = void 0;
          this.currContainerInfo = void 0;
        }

        onLoad() {
          this.equipAttrItems = [];
        }

        start() {}

        initView(heroClass, isTeam) {
          this.heroClass = heroClass;

          if (isTeam) {
            this.inteamNode.active = true;
            this.notinteamNode.active = false;
            this.currContainerInfo = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
              error: Error()
            }), EquipData) : EquipData).ins.getEquipContainerDataByHeroClass(this.heroClass);
            this.initEquipItem();
            this.updateAttrs();
            this.updateMaster();
            this.node_equip_red.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Wear_Equip, String(this.heroClass));
          } else {
            this.inteamNode.active = false;
            this.notinteamNode.active = true;
          }
        }

        initEquipItem() {
          var datas = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getWearEquipInfosByHeroClass(this.heroClass); // EquipType_Gloves = 1, // 手套 
          // EquipType_Clothing = 2, // 衣服 
          // EquipType_Cloak = 3, // 披风 
          // EquipType_Hat = 4, // 帽子 
          // let types=[tab.EquipType.EquipType_Gloves,tab.EquipType.EquipType_Clothing,tab.EquipType.EquipType_Cloak,tab.EquipType.EquipType_Hat]
          // for(let key in types){
          //     let data=datas[types[key]];
          //     if(!this.equipItems[key]){
          //         let node=ItemPoolMgr.ins.createHeroOrEquip(data);
          //         node.parent=this.equipNode;
          //         this.equipItems.push(node.getComponent(HeroItem));
          //     }
          //     this.equipItems[key].UpdateContent(data);
          // }

          for (var i = 0; i < this.equipItems.length; i++) {
            this.equipItems[i].initData(this.heroClass, i + 1, datas[i + 1]);
          }
        }

        updateAttrs() {
          for (var key in this.equipAttrItems) {
            this.equipAttrItems[key].node.active = false;
          }

          var conts = this.currContainerInfo;
          var totalMaps = conts.totalAttrMap;
          var index = 0;
          totalMaps.forEach((value, key) => {
            var table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroAttrClientTableByType.getValue(key);

            if (table && table.IsBase) {
              if (!this.equipAttrItems[index]) {
                var node = instantiate(this.attrItemPrefab);
                node.parent = this.equipAttrNode;
                this.equipAttrItems.push(node.getComponent(_crd && HeroAttrItem === void 0 ? (_reportPossibleCrUseOfHeroAttrItem({
                  error: Error()
                }), HeroAttrItem) : HeroAttrItem));
              }

              this.equipAttrItems[index].node.active = true;
              this.equipAttrItems[index].initView(key, value, table.Icon);
              index++;
            }
          });
        }

        updateMaster() {
          var qLv = this.currContainerInfo.masteInfo.qualityMasterLevel;
          var eLv = this.currContainerInfo.masteInfo.enhanceMasterLevel;
          var rLv = this.currContainerInfo.masteInfo.refineMasterLevel;
          this.initMasterItem(0, qLv);
          this.initMasterItem(1, eLv);
          this.initMasterItem(2, rLv); // if(qLv>0){
          //     this.qualityMasterLvLab.string=qLv+"";
          // }else{
          //     this.qualityMasterLvLab.string="未激活";
          // }
          // if(eLv>0){
          //     this.strengthenMasterLvLab.string=eLv+"";
          // }else{
          //     this.strengthenMasterLvLab.string="未激活";
          // }
          // if(rLv>0){
          //     this.forgeMasterLvLab.string=rLv+"";
          // }else{
          //     this.forgeMasterLvLab.string="未激活";
          // }
        }

        initMasterItem(index, level) {
          var item = this.masterNodes[index];
          var nameLab = item.getChildByName("txt").getComponent(Label);
          var lvLab = item.getChildByName("lv_txt").getComponent(Label);
          var lock_txt = item.getChildByName("lock_txt");

          if (level > 0) {
            lvLab.node.active = true;
            lvLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_heroresonancepop_3", [level]);
            nameLab.color = new Color(255, 255, 255, 255); // lvLab.color= new Color(3, 226, 242, 255)

            lock_txt.active = false;
          } else {
            lvLab.node.active = false;
            lock_txt.active = true;
            nameLab.color = new Color(133, 147, 189, 255); // lvLab.color= new Color(255, 255, 255, 255)
          }
        }

        onClickOneWear() {
          var isEquipGuide = Boolean((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.clientData.equipGuildOver);

          if (!isEquipGuide) {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.setClientData("equipGuildOver", "true");
          }

          (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
            error: Error()
          }), EquipControl) : EquipControl).ins.reqOnekeyEquips(this.heroClass);
        }

        onClickStrengthen() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).EquipmentView,
            data: {
              "type": 1,
              "heroClass": this.heroClass
            }
          });
        }

        onClickMaster() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).EquipMasterPop,
            data: {
              "heroClass": this.heroClass,
              "type": 1
            }
          });
        }

        onClickAttrTip() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).HeroAttrPop,
            data: {
              "attrMap": this.currContainerInfo.totalAttrMap
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "inteamNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "notinteamNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "equipNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "specialEquipNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "equipAttrNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "attrItemPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_equip_red", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "equipItems", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "masterNodes", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f15b53051aa3182cd6bf627e2b01b23899f49acd.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "client_protocol", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, Sprite, ViewPop, ItemPoolMgr, LangMgr, tab, ShowTips, UIMgr, ViewName, JadeSkillItem, EventMgr, proto, EquipControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, ccclass, property, JadeDetailPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "../equip/EquipInfo", _context.meta, extras);
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

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJadeSkillItem(extras) {
    _reporterNs.report("JadeSkillItem", "./JadeSkillItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipControl(extras) {
    _reporterNs.report("EquipControl", "../equip/EquipControl", _context.meta, extras);
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
      ItemPoolMgr = _unresolved_3.ItemPoolMgr;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      ShowTips = _unresolved_6.ShowTips;
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      ViewName = _unresolved_7.ViewName;
    }, function (_unresolved_8) {
      JadeSkillItem = _unresolved_8.JadeSkillItem;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_10) {
      EquipControl = _unresolved_10.EquipControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67ab1OlP7dBvax0ZS7NMRV+", "JadeDetailPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JadeDetailPop", JadeDetailPop = (_dec = ccclass('JadeDetailPop'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Prefab), _dec12 = property(Prefab), _dec13 = property(Sprite), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec(_class = (_class2 = class JadeDetailPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemNode", _descriptor, this);

          _initializerDefineProperty(this, "nameLab", _descriptor2, this);

          _initializerDefineProperty(this, "typeLab", _descriptor3, this);

          _initializerDefineProperty(this, "scoreLab", _descriptor4, this);

          _initializerDefineProperty(this, "baseAttrNode", _descriptor5, this);

          _initializerDefineProperty(this, "skillNode", _descriptor6, this);

          _initializerDefineProperty(this, "desLab", _descriptor7, this);

          _initializerDefineProperty(this, "decomposeBtn", _descriptor8, this);

          _initializerDefineProperty(this, "exchangeBtn", _descriptor9, this);

          _initializerDefineProperty(this, "detailItemPrefab", _descriptor10, this);

          _initializerDefineProperty(this, "skillItemPrefab", _descriptor11, this);

          _initializerDefineProperty(this, "lockSpr", _descriptor12, this);

          _initializerDefineProperty(this, "yuMaoBiaoTiDiNode", _descriptor13, this);

          _initializerDefineProperty(this, "yuMaoBiaoTiDiNode1", _descriptor14, this);

          _initializerDefineProperty(this, "tipsNode", _descriptor15, this);

          _initializerDefineProperty(this, "btnNode", _descriptor16, this);

          this.euqipInfo = void 0;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.LockEquipRsp, this.on_s2c_LockEquipRsp, this);
        }

        start() {
          this.initData();
          this.initView();
        }

        initData() {
          this.euqipInfo = this.openData;
        }

        initView() {
          var item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(this.euqipInfo, this.itemNode, false); // item.getComponent(CommonItem).setIsTouchItem(false);

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
          this.initAttrItme();
          this.exchangeBtn.active = this.euqipInfo.isWear;
          this.decomposeBtn.active = !this.euqipInfo.isWear;
          this.initSkillItem();
          this.updateLockState(); // this.equipBtn.active=!this.euqipInfo.isWear;
          // this.growthBtn.active=this.euqipInfo.isWear;
          // this.resolveBtn.active=!this.euqipInfo.isWear;
          // this.exchangeBtn.active=this.euqipInfo.isWear;
        }

        updateLockState() {
          var lockStr = "unlock";

          if (this.euqipInfo.locked) {
            lockStr = "lock";
          }

          this.lockSpr.setTexture("textrue/common/button/" + lockStr);
        }

        initAttrItme() {
          var baseAttr = this.euqipInfo.baseAttr;

          if (baseAttr.length > 0) {
            for (var key in baseAttr) {
              var item = this.createAttrItem(baseAttr[key]);
              item.parent = this.baseAttrNode;
            }

            this.yuMaoBiaoTiDiNode.active = true;
            this.yuMaoBiaoTiDiNode1.active = false;
            this.btnNode.active = true;
            this.lockSpr.node.active = true;
          } else {
            this.yuMaoBiaoTiDiNode.active = false;
            this.yuMaoBiaoTiDiNode1.active = true;
            this.btnNode.active = false;
            this.lockSpr.node.active = false;
            var bast = this.euqipInfo.equipTable.BaseAttrGroupId;
            var table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().EquipAttrGroupTableById.getValue(bast);
            var atts = table.List.split("|");

            for (var _key in atts) {
              var str = atts[_key].split(";");

              var _item = this.createAttrItem(Number(str[0]));

              _item.parent = this.baseAttrNode;
            }
          }
        }

        initSkillItem() {
          var skills = this.euqipInfo.skillList;
          this.skillNode.active = skills.length > 0;

          if (skills.length > 0) {
            for (var key in skills) {
              var item = instantiate(this.skillItemPrefab);
              item.parent = this.skillNode;
              item.getComponent(_crd && JadeSkillItem === void 0 ? (_reportPossibleCrUseOfJadeSkillItem({
                error: Error()
              }), JadeSkillItem) : JadeSkillItem).initSkillId(skills[key]);
            }
          }

          this.tipsNode.active = skills.length == 0;
        }

        createAttrItem(attrId) {
          var table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().EquipAttrTableById.getValue(attrId);
          var item = instantiate(this.detailItemPrefab);
          item.getChildByName("name_txt").getComponent(Label).string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType[table.AttrType]);
          item.getChildByName("now_txt").getComponent(Label).string = table.Base + "";
          return item;
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
          // this.onClose();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).JadeSelectPop,
            data: {
              "heroClass": this.euqipInfo.heroClass
            }
          });
          this.onClose();
        }

        onClickGrowth() {
          if (this.euqipInfo.locked) {
            //ShowTips("锁住的状态下不能重铸");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_jade_1"));
            return;
          }

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).JadeRecastPop,
            data: this.euqipInfo
          });
          this.onClose();
        }

        onClickLock() {
          // if (this.euqipInfo.locked) {
          (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
            error: Error()
          }), EquipControl) : EquipControl).ins.reqLockEquip(this.euqipInfo.id, !this.euqipInfo.locked); //}
        }

        on_s2c_LockEquipRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.updateLockState();
          }
        }

        onDestroy() {
          super.onDestroy();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "typeLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scoreLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "baseAttrNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "skillNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "desLab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "decomposeBtn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "exchangeBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "detailItemPrefab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "skillItemPrefab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lockSpr", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "yuMaoBiaoTiDiNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "yuMaoBiaoTiDiNode1", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "tipsNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "btnNode", [_dec17], {
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
//# sourceMappingURL=7f26a091286c7843565745f901f677bf6cf2f645.js.map
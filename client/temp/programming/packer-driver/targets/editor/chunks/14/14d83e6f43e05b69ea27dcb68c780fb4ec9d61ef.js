System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "client_protocol", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, ViewPop, ItemPoolMgr, HeroItem, HeroTeamControl, HeroData, HeroStar, HeroAttrItem, tab, proto, Net, RedMgr, RedDotType, EventMgr, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, ccclass, property, VIEW_TYPE, HeroResonancePop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroAttrItem(extras) {
    _reporterNs.report("HeroAttrItem", "./HeroAttrItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ItemPoolMgr = _unresolved_3.ItemPoolMgr;
    }, function (_unresolved_4) {
      HeroItem = _unresolved_4.HeroItem;
    }, function (_unresolved_5) {
      HeroTeamControl = _unresolved_5.HeroTeamControl;
    }, function (_unresolved_6) {
      HeroData = _unresolved_6.HeroData;
    }, function (_unresolved_7) {
      HeroStar = _unresolved_7.HeroStar;
    }, function (_unresolved_8) {
      HeroAttrItem = _unresolved_8.HeroAttrItem;
    }, function (_unresolved_9) {
      tab = _unresolved_9.tab;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_10) {
      Net = _unresolved_10.Net;
    }, function (_unresolved_11) {
      RedMgr = _unresolved_11.RedMgr;
    }, function (_unresolved_12) {
      RedDotType = _unresolved_12.RedDotType;
    }, function (_unresolved_13) {
      EventMgr = _unresolved_13.EventMgr;
    }, function (_unresolved_14) {
      LangMgr = _unresolved_14.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3d512xb5YtEw7RSOaKS/Qrj", "HeroResonancePop", undefined);
      /*
       * @Date: 2024-05-14 17:48:33
       * @LastEditors: wzq
       * @等级|星级共鸣
       * @LastEditTime: 2024-08-12 10:08:35
       */


      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      VIEW_TYPE = /*#__PURE__*/function (VIEW_TYPE) {
        VIEW_TYPE[VIEW_TYPE["LEVEL"] = 1] = "LEVEL";
        VIEW_TYPE[VIEW_TYPE["STAR"] = 2] = "STAR";
        return VIEW_TYPE;
      }(VIEW_TYPE || {});

      _export("HeroResonancePop", HeroResonancePop = (_dec = ccclass('HeroResonancePop'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Prefab), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
        error: Error()
      }), HeroStar) : HeroStar), _dec17 = property(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
        error: Error()
      }), HeroStar) : HeroStar), _dec(_class = (_class2 = class HeroResonancePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "node_level", _descriptor, this);

          _initializerDefineProperty(this, "node_star", _descriptor2, this);

          _initializerDefineProperty(this, "node_heros", _descriptor3, this);

          _initializerDefineProperty(this, "node_attr_layout", _descriptor4, this);

          _initializerDefineProperty(this, "node_red_level", _descriptor5, this);

          _initializerDefineProperty(this, "node_red_star", _descriptor6, this);

          _initializerDefineProperty(this, "node_red_btn", _descriptor7, this);

          _initializerDefineProperty(this, "node_no_attr", _descriptor8, this);

          _initializerDefineProperty(this, "lbl_resonance_level", _descriptor9, this);

          _initializerDefineProperty(this, "lbl_resonance_value", _descriptor10, this);

          //共鸣之力12级
          _initializerDefineProperty(this, "lbl_resonance_value_next", _descriptor11, this);

          //共鸣等级达到12级激活共鸣之力5级
          _initializerDefineProperty(this, "pfb_attr_item", _descriptor12, this);

          _initializerDefineProperty(this, "node_lv_up_btn", _descriptor13, this);

          _initializerDefineProperty(this, "node_star_resonace_layout", _descriptor14, this);

          _initializerDefineProperty(this, "HeroStar_cur_resonance_star", _descriptor15, this);

          _initializerDefineProperty(this, "HeroStar_next_resonance_star", _descriptor16, this);

          this._view_type = VIEW_TYPE.LEVEL;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpLevelResonanceRsp, this.on_s2c_UpLevelResonanceRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpStarResonanceRsp, this.on_s2c_UpStarResonanceRsp, this);
        }
        /* 等级共鸣 */


        on_s2c_UpLevelResonanceRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.setTeamResonanceLevel(msg.levelResonance);
          /* 更新等级共鸣红点 */

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroResonanceLevel);
          this.switchView(null, String(this._view_type));
        }
        /* 星级共鸣 */


        on_s2c_UpStarResonanceRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.setTeamResonanceStar(msg.starResonance);
          /* 更新等级共鸣红点 */

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroresonanceStar);
          this.switchView(null, String(this._view_type));
        }

        onShow() {
          this._view_type = VIEW_TYPE.LEVEL;
          /* 开始默认是等级 */

          this.switchView(null, String(this._view_type));
        }

        switchView(e, type) {
          let view_type = Number(type);
          this._view_type = view_type;
          this.node_level.active = view_type === VIEW_TYPE.LEVEL;
          this.node_star.active = view_type === VIEW_TYPE.STAR;
          let parentNode = this.node_heros;

          for (let i = 0; i < 5; i++) {
            let node = parentNode.children[i];
            let heroClass = Number(node.name);
            let teamSlot = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getClassTeamData(heroClass);
            let heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(teamSlot.heroId);
            this.createItem(heroInfo, parentNode.children[i], view_type == VIEW_TYPE.LEVEL);
          }

          this.HeroStar_cur_resonance_star.showStar((_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getMinTeamStar());
          let startab = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getResonanceStarTab();

          if (startab.NeedStar) {
            this.HeroStar_next_resonance_star.showStar(startab.NeedStar);
          }

          this.node_red_level.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroResonanceLevel);
          this.node_red_star.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroresonanceStar);

          if (view_type == VIEW_TYPE.LEVEL) {
            this.showLevelView();
            this.node_red_btn.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).HeroResonanceLevel);
          } else {
            this.showStarView();
            this.node_red_btn.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).HeroresonanceStar);
          }
        }

        showLevelView() {
          // this.node_attr_layout.destroyAllChildren();
          this.node_lv_up_btn.active = true;
          let Leveltab = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getResonanceLevelTab();

          if (Leveltab.NeedLv === 0) {
            this.node_lv_up_btn.active = false;
            this.lbl_resonance_value_next.node.active = false;
          }

          this.node_no_attr.active = Leveltab.Id === 0;
          this.node_attr_layout.active = Leveltab.Id > 0;

          for (let i = 0; i < Leveltab.AttrTypes.length; i++) {
            let type = Leveltab.AttrTypes[i];
            let value = Leveltab.AttrValue[i];

            if (value === 0) {
              continue;
            }

            let node = this.node_attr_layout.children[i];

            if (!node) {
              node = instantiate(this.pfb_attr_item);
              node.parent = this.node_attr_layout;
            }

            let ts = node.getComponent(_crd && HeroAttrItem === void 0 ? (_reportPossibleCrUseOfHeroAttrItem({
              error: Error()
            }), HeroAttrItem) : HeroAttrItem);
            ts.initView(type, value);
          }

          this.lbl_resonance_level.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_heroresonancepop_3", [(_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getMinTeamLevel()]);
          this.lbl_resonance_value.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_heroresonancepop_1", [Leveltab.Id]);

          if (Leveltab.NeedLv) {
            let nextLeveltab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroLevelResonanceTable[Leveltab.Id + 1];
            this.lbl_resonance_value_next.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_heroresonancepop_2", [Leveltab.NeedLv, nextLeveltab.Id]);
          }
        }

        showStarView() {
          this.node_lv_up_btn.active = true;
          let startab = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getResonanceStarTab();

          if (startab.NeedStar === 0) {
            this.node_lv_up_btn.active = false;
            this.node_star_resonace_layout.active = false;
          }

          this.node_no_attr.active = startab.Id === 0;
          this.node_attr_layout.active = startab.Id > 0;

          for (let i = 0; i < startab.AttrTypes.length; i++) {
            let type = startab.AttrTypes[i];
            let value = startab.AttrValue[i];

            if (value === 0) {
              continue;
            }

            let node = this.node_attr_layout.children[i];

            if (!node) {
              node = instantiate(this.pfb_attr_item);
              node.parent = this.node_attr_layout;
            }

            let ts = node.getComponent(_crd && HeroAttrItem === void 0 ? (_reportPossibleCrUseOfHeroAttrItem({
              error: Error()
            }), HeroAttrItem) : HeroAttrItem);
            ts.initView(type, value);
          }

          this.lbl_resonance_value.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_heroresonancepop_1", [startab.Id]);
        }

        createItem(heroInfo, node, isLevel) {
          let item = null;

          if (node.children[0]) {
            item = node.children[0];
          } else {
            item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createHeroItem(heroInfo, node); // item.parent = node;
          }

          let ts = item.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
            error: Error()
          }), HeroItem) : HeroItem);
          ts.UpdateContent(heroInfo); // ts.setHeroActive(false, !isLevel);

          ts.setHeroActive(false);
        }
        /* 点击共鸣升级 */


        clickUp() {
          if (this._view_type == VIEW_TYPE.LEVEL) {
            if ((_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getMinTeamLevel() >= (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getResonanceLevelTab().NeedLv) {
              let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Msg_UpLevelResonanceReq();
              (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                error: Error()
              }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Ptl.UpLevelResonanceReq, msg);
            }
          } else {
            if ((_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getMinTeamStar() >= (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getResonanceStarTab().NeedStar) {
              let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Msg_UpStarResonanceReq();
              (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                error: Error()
              }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Ptl.UpStarResonanceReq, msg);
            }
          }
        }

        onDisable() {
          this.HeroStar_next_resonance_star.onDisable();
          this.HeroStar_cur_resonance_star.onDisable();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_level", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_star", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_heros", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_attr_layout", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_red_level", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_red_star", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_red_btn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_no_attr", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbl_resonance_level", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_resonance_value", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lbl_resonance_value_next", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "pfb_attr_item", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_lv_up_btn", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_star_resonace_layout", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "HeroStar_cur_resonance_star", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "HeroStar_next_resonance_star", [_dec17], {
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
//# sourceMappingURL=14d83e6f43e05b69ea27dcb68c780fb4ec9d61ef.js.map
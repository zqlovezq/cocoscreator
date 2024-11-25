System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "client_protocol", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, sp, Sprite, ViewPop, tab, DrugScrollItem, RoleData, HeroTeamControl, proto, Net, ItemData, EventMgr, ShowTips, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, DrugView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDrugScrollItem(extras) {
    _reporterNs.report("DrugScrollItem", "./DrugScrollItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../hero/HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
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
      sp = _cc.sp;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      DrugScrollItem = _unresolved_4.DrugScrollItem;
    }, function (_unresolved_5) {
      RoleData = _unresolved_5.RoleData;
    }, function (_unresolved_6) {
      HeroTeamControl = _unresolved_6.HeroTeamControl;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_7) {
      Net = _unresolved_7.Net;
    }, function (_unresolved_8) {
      ItemData = _unresolved_8.ItemData;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
    }, function (_unresolved_10) {
      ShowTips = _unresolved_10.ShowTips;
    }, function (_unresolved_11) {
      LangMgr = _unresolved_11.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a45519DH0lH7abg8gMHtvgA", "DrugView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'sp', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DrugView", DrugView = (_dec = ccclass('DrugView'), _dec2 = property(sp.Skeleton), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class DrugView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spine_hero", _descriptor, this);

          _initializerDefineProperty(this, "node_content", _descriptor2, this);

          _initializerDefineProperty(this, "pfb_item", _descriptor3, this);

          _initializerDefineProperty(this, "node_attr", _descriptor4, this);

          _initializerDefineProperty(this, "node_nothing", _descriptor5, this);

          this.elixirArrData = [];
        }

        onShow() {
          // 设置丹药列表
          const playLevel = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.level;
          this.node_content.destroyAllChildren();

          for (let i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ElixirTable.length; i++) {
            const elixirTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ElixirTable[i];
            const item = instantiate(this.pfb_item);
            item.parent = this.node_content;
            const itemTs = item.getComponent(_crd && DrugScrollItem === void 0 ? (_reportPossibleCrUseOfDrugScrollItem({
              error: Error()
            }), DrugScrollItem) : DrugScrollItem);
            itemTs.setData(elixirTab);
            const usedItemCount = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getElixirCountById(elixirTab.Id);
            const elixirId = elixirTab.Id;
            const elixirCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(elixirId);
            let maxCount = 0;

            for (let k = elixirTab.PlayerLv.length - 1; k >= 0; k--) {
              const level = elixirTab.PlayerLv[k];

              if (playLevel > level) {
                maxCount = elixirTab.MaxCount[k + 1] ? elixirTab.MaxCount[k + 1] : elixirTab.MaxCount[k];
                break;
              }
            }

            let useCount = 0;

            if (usedItemCount + elixirCount > maxCount) {
              useCount = maxCount - usedItemCount > 0 ? maxCount - usedItemCount : 0;
            } else {
              useCount = elixirCount;
            }

            if (elixirCount > 0) {
              let obj = {
                id: elixirId,
                count: useCount
              };

              if (useCount > 0) {
                this.elixirArrData.push(obj);
              }
            }
          }

          const attrDatas = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getElixirAttr();
          this.node_nothing.active = attrDatas.size === 0;
          this.node_attr.active = attrDatas.size !== 0;

          if (attrDatas.size !== 0) {
            this.node_attr.active = true;
            const children = this.node_attr.children;

            for (let k = 0; k < children.length; k++) {
              const attrItem = children[k];
              attrItem.active = false;
            }

            let count = 0;

            for (const [key, value] of attrDatas.entries()) {
              console.log(`entries: ${key}: ${value}`);
              const attrItem = children[count];
              attrItem.active = true;
              const attrType = key;
              const iconPath = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroAttrClientTableByType.getValue(attrType).Icon;
              const icon_img = attrItem.getChildByName("icon_img").getComponent(Sprite);
              icon_img.setTexture(iconPath);
              const num_txt = attrItem.getChildByName("num_txt").getComponent(Label);
              num_txt.string = String(value);
              count++;
            }
          }

          let spineAction = this.getRandomValue();
          this.spine_hero.setAnimation(0, spineAction, false);
          this.spine_hero.setCompleteListener(listener => {
            let spineAction = this.getRandomValue();
            this.spine_hero.setAnimation(0, spineAction, false);
          });
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UseElixirRsp, this.on_s2c_UseElixirRsp, this);
        }

        on_s2c_UseElixirRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.elixir.data = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.elixir.data.concat(msg.data);
          (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.initElixirData();
          this.elixirArrData = [];
          this.onShow();
        }

        unRegister() {
          super.unRegister();
        }

        onDestroy() {
          super.onDestroy();
        }

        clickAutoUse() {
          if (this.elixirArrData.length > 0) {
            let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_UseElixirReq();
            msg.items = this.elixirArrData;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.UseElixirReq, msg);
          } else {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_drug_1"));
          }
        }

        getRandomValue() {
          const randomNumber = Math.random(); // 生成一个 [0, 1) 之间的随机数

          if (randomNumber < 0.5) {
            return "action_attack3"; // 50%的概率返回1
          } else {
            return "action_move"; // 50%的概率返回2
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine_hero", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_attr", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_nothing", [_dec6], {
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
//# sourceMappingURL=9df41e68cc394cbb880a779d14ce9f27b817d632.js.map
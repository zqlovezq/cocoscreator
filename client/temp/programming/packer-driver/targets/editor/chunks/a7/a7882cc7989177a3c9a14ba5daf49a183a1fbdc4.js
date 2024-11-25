System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Prefab, Toggle, proto, Net, ViewPop, HeroDataControl, ItemPoolMgr, HeroItem, tab, ItemInfo, RoleData, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, HeroResolvePop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "./HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
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
      Toggle = _cc.Toggle;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_2) {
      Net = _unresolved_2.Net;
    }, function (_unresolved_3) {
      ViewPop = _unresolved_3.ViewPop;
    }, function (_unresolved_4) {
      HeroDataControl = _unresolved_4.HeroDataControl;
    }, function (_unresolved_5) {
      ItemPoolMgr = _unresolved_5.ItemPoolMgr;
    }, function (_unresolved_6) {
      HeroItem = _unresolved_6.HeroItem;
    }, function (_unresolved_7) {
      tab = _unresolved_7.tab;
    }, function (_unresolved_8) {
      ItemInfo = _unresolved_8.ItemInfo;
    }, function (_unresolved_9) {
      RoleData = _unresolved_9.RoleData;
    }, function (_unresolved_10) {
      EventMgr = _unresolved_10.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "778ecTup69FbbutwY6TYgxU", "HeroResolvePop", undefined);
      /*
       * @Date: 2024-05-07 15:03:58
       * @LastEditors: wzq
       * @LastEditTime: 2024-11-14 17:29:31
       */


      __checkObsolete__(['_decorator', 'Node', 'Prefab', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroResolvePop", HeroResolvePop = (_dec = ccclass('HeroResolvePop'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Toggle), _dec7 = property(Node), _dec(_class = (_class2 = class HeroResolvePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pfb_hero_item", _descriptor, this);

          _initializerDefineProperty(this, "pfb_material_item", _descriptor2, this);

          _initializerDefineProperty(this, "node_content", _descriptor3, this);

          _initializerDefineProperty(this, "node_resolve_content", _descriptor4, this);

          _initializerDefineProperty(this, "toggle_auto", _descriptor5, this);

          _initializerDefineProperty(this, "node_toggle_label", _descriptor6, this);

          this._ResolveHeros = new Map();
          this._totalNum = 0;
          this._isCheck = true;
          this._canClick = true;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetAutoDisbandRsp, this.on_s2c_SetAutoDisbandRsp, this);
        }

        onShow() {
          /* 获取可以遣散的所有英雄 */
          this._canClick = true;
          this._isCheck = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.autoDisband;
          this.toggle_auto.isChecked = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.autoDisband;
          this.node_toggle_label.active = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.autoDisband;
          let herosMap = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getAllResolveHeros();
          this._totalNum = herosMap.size;
          this.node_content.destroyAllChildren();
          herosMap.forEach((value, key) => {
            let heroInfo = value;
            let item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createHeroItem(heroInfo, this.node_content); // item.parent = this.node_content;

            let ts = item.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
              error: Error()
            }), HeroItem) : HeroItem);
            ts.UpdateContent(heroInfo);
            ts.setTouchCallBack(() => {
              if (this._ResolveHeros.get(Number(heroInfo.id))) {
                this._ResolveHeros.delete(Number(heroInfo.id));
              } else {
                this._ResolveHeros.set(Number(heroInfo.id), heroInfo);
              }

              this.setAllHerosSelect();
            });
          });
          this.setAllHerosSelect();
        }
        /* 遣散英雄 */


        sendMsg() {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_DisbandHeroesReq();
          const heroIds = [];

          this._ResolveHeros.forEach((value, key) => {
            heroIds.push(key);
          });

          if (heroIds.length === 0) {
            return;
          }

          msg.heroIds = heroIds;
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.refreshBagData(0);
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DisbandHeroesReq, msg);
        }
        /* 一键选择所有遣散的英雄 */


        clickAllResolve() {
          if (this._ResolveHeros.size >= this._totalNum) {
            this._ResolveHeros.clear();
          } else {
            this._ResolveHeros = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getAllResolveHeros();
          }

          this.setAllHerosSelect();
        }

        setAllHerosSelect() {
          this.node_resolve_content.removeAllChildren();

          for (let i = 0; i < this.node_content.children.length; i++) {
            let item = this.node_content.children[i];
            let ts = item.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
              error: Error()
            }), HeroItem) : HeroItem);

            let heroInfo = this._ResolveHeros.get(Number(ts.heroInfo.id));

            ts.setSelect(heroInfo ? true : false);
          }

          let data = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          let item = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().HeroRecycleReward;
          data.itemId = item[0];
          data.num = item[1] * this._ResolveHeros.size;
          let node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(data, this.node_resolve_content);
          node.active = data.num > 0;
        }
        /* 点击自动遣散 */


        clickAutoResolve() {
          if (this._canClick) {
            this._canClick = false;
            let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_SetAutoDisbandReq();
            msg.autoDisband = !(_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.autoDisband;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.SetAutoDisbandReq, msg);
          }
        }

        on_s2c_SetAutoDisbandRsp(msg) {
          this._canClick = true;
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.autoDisband = msg.autoDisband;
          this._isCheck = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.autoDisband;
          this.toggle_auto.isChecked = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.autoDisband;
          this.node_toggle_label.active = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.autoDisband;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_hero_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_material_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_resolve_content", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "toggle_auto", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_label", [_dec7], {
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
//# sourceMappingURL=a7882cc7989177a3c9a14ba5daf49a183a1fbdc4.js.map
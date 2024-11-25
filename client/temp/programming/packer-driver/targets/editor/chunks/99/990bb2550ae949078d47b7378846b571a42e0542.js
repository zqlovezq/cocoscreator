System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "client_protocol", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, log, Node, Sprite, ItemData, EventMgr, LocalEvent, ItemInfo, tab, UIMgr, ViewName, RoleData, GameUtil, setTextTime_3, proto, ComponentBase, RedComp, RedEventComp, RedDotType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, ResourceItemNode;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
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

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime_(extras) {
    _reporterNs.report("setTextTime_3", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedComp(extras) {
    _reporterNs.report("RedComp", "../../../Common/component/RedComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedEventComp(extras) {
    _reporterNs.report("RedEventComp", "../../../Common/component/RedEventComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      log = _cc.log;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ItemData = _unresolved_2.ItemData;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      LocalEvent = _unresolved_4.LocalEvent;
    }, function (_unresolved_5) {
      ItemInfo = _unresolved_5.ItemInfo;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      UIMgr = _unresolved_7.UIMgr;
    }, function (_unresolved_8) {
      ViewName = _unresolved_8.ViewName;
    }, function (_unresolved_9) {
      RoleData = _unresolved_9.RoleData;
    }, function (_unresolved_10) {
      GameUtil = _unresolved_10.GameUtil;
      setTextTime_3 = _unresolved_10.setTextTime_3;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_11) {
      ComponentBase = _unresolved_11.ComponentBase;
    }, function (_unresolved_12) {
      RedComp = _unresolved_12.default;
    }, function (_unresolved_13) {
      RedEventComp = _unresolved_13.default;
    }, function (_unresolved_14) {
      RedDotType = _unresolved_14.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f2e94dRCKNFfqDxyFSsOAyj", "ResourceItemNode", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'log', 'Node', 'SpringJoint2D', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ResourceItemNode", ResourceItemNode = (_dec = ccclass('ResourceItemNode'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class ResourceItemNode extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "iconSpr", _descriptor, this);

          _initializerDefineProperty(this, "numLab", _descriptor2, this);

          _initializerDefineProperty(this, "redPoint", _descriptor3, this);

          _initializerDefineProperty(this, "timerLab", _descriptor4, this);

          _initializerDefineProperty(this, "add_node", _descriptor5, this);

          _initializerDefineProperty(this, "click_item_node", _descriptor6, this);

          this.itemId = 0;
          this.itemInfo = void 0;
          this.lastTimer = 0;
          this.staminaTotalTimer = 0;

          this.staminaTimerCallBack = () => {
            // let total = 120+RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_StaminaLimit);
            this.lastTimer = Math.floor(Number((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.staminaInfo.lastRecoverTime) + this.staminaTotalTimer - (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getServerUtcTime());

            if (this.lastTimer >= 0) {
              let str = (_crd && setTextTime_3 === void 0 ? (_reportPossibleCrUseOfsetTextTime_({
                error: Error()
              }), setTextTime_3) : setTextTime_3)(this.lastTimer);
              this.timerLab.string = str;
            } else {
              log("lasttimer===", this.lastTimer);
              this.unschedule(this.staminaTimerCallBack);
            }
          };
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Item_Update, this.updateResourceNum, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.VipBonusPush, this.setShowNumLab, this);
        }

        initItemId(itemId) {
          this.itemId = itemId;

          if (this.itemId > 0) {
            // this.updateResourceNum();
            this.initView();
          }

          if (this.itemId == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Stamina) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.BuyStaminaRsp, this.updateStaminaTimer, this);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.GetStaminaInfoRsp, this.updateStaminaTimer, this);
            let com = this.node.addComponent(_crd && RedComp === void 0 ? (_reportPossibleCrUseOfRedComp({
              error: Error()
            }), RedComp) : RedComp);
            com.redNode = this.redPoint;
            let evet = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();
            evet.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).RedStamina; // evet.child = String(tab.AdType.AdType_BuyStamina)

            com.types.push(evet);
            com.addRed();
          } else if (this.itemId == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Gold) {
            let com = this.node.addComponent(_crd && RedComp === void 0 ? (_reportPossibleCrUseOfRedComp({
              error: Error()
            }), RedComp) : RedComp);
            com.redNode = this.redPoint;
            let evet = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();
            evet.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).GoldBuy; // evet.child = String(tab.AdType.AdType_BuyGold)

            com.types.push(evet);
            com.addRed();
          }
        }

        start() {}

        initView() {
          let itemInfo = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getByItemId(this.itemId);

          if (!itemInfo) {
            itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            itemInfo.initItemData(this.itemId, 0);
          }

          this.itemInfo = itemInfo;
          this.iconSpr.setTexture(itemInfo.itemTable.Icon);
          this.setShowNumLab();

          if (itemInfo.itemId == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Stamina) {
            this.updateStaminaTimer();
          } else {
            this.timerLab.node.active = false;
          }

          const jumpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemClientJumpTableByItemId.getValue(this.itemId);
          this.add_node.active = jumpTab ? true : false;
          this.click_item_node.active = jumpTab ? true : false;
        }

        updateStaminaTimer() {
          this.unschedule(this.staminaTimerCallBack);

          if (Number(this.itemInfo.num) >= (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.staminaInfo.maxStamina) {
            this.timerLab.node.active = false;
          } else {
            this.timerLab.node.active = true; // let total = tab.getData().GetKeyValue_ConfigTable().StaminaResumeTime+RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_StaminaLimit);

            this.staminaTotalTimer = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().StaminaResumeTime + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).VipBonus.VipBonus_StaminaLimit);
            this.lastTimer = Math.floor(Number((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.staminaInfo.lastRecoverTime) + this.staminaTotalTimer - (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getServerUtcTime()); // log("lasttimer===",this.lastTimer)

            if (this.lastTimer > 0) {
              let str = (_crd && setTextTime_3 === void 0 ? (_reportPossibleCrUseOfsetTextTime_({
                error: Error()
              }), setTextTime_3) : setTextTime_3)(this.lastTimer);
              this.timerLab.string = str;
              this.schedule(this.staminaTimerCallBack, 1);
            } else {
              this.timerLab.string = "00:00";
            }
          }
        }

        setShowNumLab() {
          let num = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(this.itemId);

          if (this.itemId == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Stamina) {
            this.numLab.string = num + "/" + ((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().InitialStaminaMaxCount + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).VipBonus.VipBonus_StaminaLimit));
          } else {
            this.numLab.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertNumber(num) + "";
          }
        }
        /**
         * 刷新资源显示数量
         */


        updateResourceNum(itemIds) {
          if (itemIds.indexOf(this.itemId) > -1) {
            this.setShowNumLab(); // this.numLab.string = ItemData.ins.getCount(this.itemId) + ""
            // let item = ItemData.ins.getByItemId(this.itemId);
            // if (item) {
            //     let num = item.num;
            //     this.numLab.string = num + "";
            // } else {
            //     this.numLab.string = "0";
            // }
          }
        }

        onClickItem() {
          log("点击item===============");

          if (this.itemId == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Stamina) {
            // UIMgr.ins.cu
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).ResourceBuyPop,
              data: {
                "itemId": this.itemId
              }
            });
          } else if (this.itemId === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Diamond) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).DiamondBuyPop
            });
          } else if (this.itemId == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Gold) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).ResourceBuyPop,
              data: {
                "itemId": this.itemId
              }
            });
          } else if (this.itemId == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Friendship) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).FriendPop
            });
          } else if (this.itemId == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_FincaFightTicket) {
            const jumpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemClientJumpTableByItemId.getValue(this.itemId);
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).ItemBuyPop,
              data: {
                name: jumpTab.JumpParam[0]
              }
            });
          }
        }

        onDestroy() {
          super.onDestroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconSpr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "numLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "redPoint", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "timerLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "add_node", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "click_item_node", [_dec7], {
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
//# sourceMappingURL=990bb2550ae949078d47b7378846b571a42e0542.js.map
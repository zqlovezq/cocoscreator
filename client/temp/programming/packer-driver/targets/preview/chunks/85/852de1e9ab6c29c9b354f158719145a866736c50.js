System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "client_protocol", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, log, Node, ViewPop, CommonItem, EquipData, ItemPoolMgr, ItemInfo, GameUtil, EventMgr, proto, EquipControl, tab, UIMgr, ViewName, EquipmentItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, EquipResolvePop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "./EquipData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "./EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipControl(extras) {
    _reporterNs.report("EquipControl", "./EquipControl", _context.meta, extras);
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

  function _reportPossibleCrUseOfEquipmentItem(extras) {
    _reporterNs.report("EquipmentItem", "../item/EquipmentItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      log = _cc.log;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      CommonItem = _unresolved_3.CommonItem;
    }, function (_unresolved_4) {
      EquipData = _unresolved_4.EquipData;
    }, function (_unresolved_5) {
      ItemPoolMgr = _unresolved_5.ItemPoolMgr;
    }, function (_unresolved_6) {
      ItemInfo = _unresolved_6.ItemInfo;
    }, function (_unresolved_7) {
      GameUtil = _unresolved_7.GameUtil;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_9) {
      EquipControl = _unresolved_9.EquipControl;
    }, function (_unresolved_10) {
      tab = _unresolved_10.tab;
    }, function (_unresolved_11) {
      UIMgr = _unresolved_11.UIMgr;
    }, function (_unresolved_12) {
      ViewName = _unresolved_12.ViewName;
    }, function (_unresolved_13) {
      EquipmentItem = _unresolved_13.EquipmentItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f11e7nooXpDIq7UzgvJ5MDf", "EquipResolvePop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node', 'TangentWeightMode']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EquipResolvePop", EquipResolvePop = (_dec = ccclass('EquipResolvePop'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class EquipResolvePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "equipNode", _descriptor, this);

          _initializerDefineProperty(this, "jadeNode", _descriptor2, this);

          _initializerDefineProperty(this, "positionNode", _descriptor3, this);

          _initializerDefineProperty(this, "qualityNode", _descriptor4, this);

          _initializerDefineProperty(this, "contentNode", _descriptor5, this);

          _initializerDefineProperty(this, "resolveContentNode", _descriptor6, this);

          this.currEquipItem = void 0;
          this.currSelectEquips = void 0;
          this.currResolveItems = void 0;
          this.currPostion = 0;
          this.currQuality = 0;
          this.currTag = 1;
        }

        register() {
          this.currSelectEquips = [];
          this.currEquipItem = [];
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DecomposeEquipRsp, this.on_s2c_DecomposeEquipRsp, this);
        }

        start() {
          if (this.openData && this.openData["tag"]) {
            this.currTag = this.openData["tag"];
          }

          this.initView();
        }

        initView() {
          if (this.currTag == 1) {
            this.initEquipItem();
            this.equipNode.active = true;
            this.jadeNode.active = false;
          } else {
            this.equipNode.active = false;
            this.jadeNode.active = true;
            this.initJadeItem();
          }
        }

        initEquipItem() {
          this.clearResolveItem();
          this.removeComItem();
          this.currSelectEquips = [];
          var allEquips = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquips();
          var currEquips = [];

          for (var value of allEquips) {
            if (!value.isWear && value.itemTable.BagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Equip) {
              if (this.currPostion == 0 || this.currPostion == value.equipTable.Type) {
                if (this.currQuality == 0 || value.quality <= this.currQuality) {
                  currEquips.push(value);
                }
              }
            }
          }

          currEquips.sort((a, b) => {
            return a.quality - b.quality;
          });

          for (var key in currEquips) {
            var node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createEquipItem(currEquips[key], this.contentNode);
            var com = node.getComponent(_crd && EquipmentItem === void 0 ? (_reportPossibleCrUseOfEquipmentItem({
              error: Error()
            }), EquipmentItem) : EquipmentItem);
            com.setTouchCallBack(this.onTouchItem.bind(this));
            this.currEquipItem.push(com);
          }
        }

        initJadeItem() {
          this.clearResolveItem();
          this.removeComItem();
          this.currSelectEquips = [];
          var allEquips = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquips();
          var currEquips = [];

          for (var value of allEquips) {
            if (!value.isWear && value.itemTable.BagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Jade && !value.locked) {
              {
                if (this.currQuality == 0 || value.quality == this.currQuality) {
                  currEquips.push(value);
                }
              }
            }
          }

          currEquips.sort((a, b) => {
            return a.quality - b.quality;
          });

          for (var key in currEquips) {
            var node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createEquipItem(currEquips[key], this.contentNode);
            var com = node.getComponent(_crd && EquipmentItem === void 0 ? (_reportPossibleCrUseOfEquipmentItem({
              error: Error()
            }), EquipmentItem) : EquipmentItem);
            com.setTouchCallBack(this.onTouchItem.bind(this));
            this.currEquipItem.push(com);
          }
        }

        onTouchItem(comItem) {
          var b = !comItem.isSelectState;
          comItem.setSelectState(b);

          if (b) {
            this.currSelectEquips.push(comItem.equipInfo);
          } else {
            var index = this.currSelectEquips.indexOf(comItem.equipInfo);

            if (index >= 0) {
              this.currSelectEquips.splice(index, 1);
            }
          }

          this.updateResolveItems();
        }

        onClickPosition(event, type) {
          var position = Number(type);

          if (this.currPostion != position) {
            this.currPostion = position;
            this.initEquipItem();
          }

          this.positionNode.active = false;
        }

        onClickQuality(event, type) {
          var quality = Number(type);

          if (this.currQuality != quality) {
            this.currQuality = quality;
            this.initEquipItem();
          }

          this.qualityNode.active = false;
        }

        onClickPositionBtn() {
          this.positionNode.active = !this.positionNode.active;
        }

        onClickQualityBtn() {
          this.qualityNode.active = !this.qualityNode.active;
        }

        onClickOneSelect() {
          this.currSelectEquips = [];

          for (var key in this.currEquipItem) {
            this.currEquipItem[key].setSelectState(true);
            this.currSelectEquips.push(this.currEquipItem[key].equipInfo);
          }

          this.updateResolveItems();
        }

        onClickResolve() {
          var ids = [];

          for (var key in this.currSelectEquips) {
            ids.push(this.currSelectEquips[key].id);
          }

          if (ids.length > 0) {
            (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
              error: Error()
            }), EquipControl) : EquipControl).ins.reqDecomposeEquips(ids);
          }
        }

        removeComItem() {
          for (var key in this.currEquipItem) {
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.putEquipItem(this.currEquipItem[key].node);
          }

          this.currEquipItem = [];
        }

        updateResolveItems() {
          this.clearResolveItem();
          var rewards = [];

          for (var key in this.currSelectEquips) {
            var equipInfo = this.currSelectEquips[key];
            var rews = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertRewardsByList(equipInfo.equipTable.Materials);

            var _loop = function _loop(value) {
              var item = rewards.find(a => a.itemId === value.itemId);

              if (item) {
                item.num += value.num;
              } else {
                item = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                  error: Error()
                }), ItemInfo) : ItemInfo)();
                item.initItemData(value.itemId, value.num);
                rewards.push(item);
              }
            };

            for (var value of rews) {
              _loop(value);
            }
          }

          for (var _value of rewards) {
            var node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(_value, this.resolveContentNode, false, false);
            var com = node.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
              error: Error()
            }), CommonItem) : CommonItem); // com.setIsTouchItem(false);

            this.currResolveItems.push(com);
          }
        }

        clearResolveItem() {
          for (var key in this.currResolveItems) {
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.putCommonItem(this.currResolveItems[key].node);
          }

          this.currResolveItems = [];
        }

        onDisable() {
          this.removeComItem();
          this.clearResolveItem();
        }
        /**
        * 分解装备成功
        * @param msg 
        */


        on_s2c_DecomposeEquipRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            // EquipData.ins.removeEquipByIds(msg.equipList);
            this.clearResolveItem();
            this.initEquipItem();
            log("收到分解成功消息");
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.items
            });
          } // EquipData.ins.updateEquipMasterData(msg.heroClass,msg.masterData);

        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);
        }

        onToggle(event, type) {
          if (this.currTag != Number(type)) {
            this.currTag = Number(type);
            this.initView();
          }
        }

        onJadeToggle(event, type) {
          if (this.currQuality != Number(type)) {
            this.currQuality = Number(type);
            this.initJadeItem();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "equipNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jadeNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "positionNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "qualityNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "resolveContentNode", [_dec7], {
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
//# sourceMappingURL=852de1e9ab6c29c9b354f158719145a866736c50.js.map
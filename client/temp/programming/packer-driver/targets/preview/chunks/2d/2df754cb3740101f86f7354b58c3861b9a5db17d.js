System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, tab, RoleData, RedMgr, RedDotType, HEADTYPE, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, RoleInfoDecorationsItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleInfoDecorationsPop(extras) {
    _reporterNs.report("RoleInfoDecorationsPop", "./RoleInfoDecorationsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHEADTYPE(extras) {
    _reporterNs.report("HEADTYPE", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      RoleData = _unresolved_3.RoleData;
    }, function (_unresolved_4) {
      RedMgr = _unresolved_4.RedMgr;
    }, function (_unresolved_5) {
      RedDotType = _unresolved_5.RedDotType;
    }, function (_unresolved_6) {
      HEADTYPE = _unresolved_6.HEADTYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea431VMEmhEY5IlJ2YKqhRm", "RoleInfoDecorationsItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RoleInfoDecorationsItem", RoleInfoDecorationsItem = (_dec = ccclass('RoleInfoDecorationsItem'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class RoleInfoDecorationsItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "headImg", _descriptor, this);

          _initializerDefineProperty(this, "headFrameImg", _descriptor2, this);

          _initializerDefineProperty(this, "node_use", _descriptor3, this);

          _initializerDefineProperty(this, "node_select", _descriptor4, this);

          _initializerDefineProperty(this, "node_lock", _descriptor5, this);

          _initializerDefineProperty(this, "node_red", _descriptor6, this);

          this.itemId = 0;
          this.roleInfoView = null;
        }

        onLoad() {
          this.node_select.active = false;
        }

        initHeadData(itemId, view) {
          this.itemId = itemId;
          this.roleInfoView = view; // this.headImg.node.parent.active = false;
          // this.headFrameImg.node.parent.active = false;

          var itemHeadTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(itemId);

          if (itemHeadTab) {
            // this.headImg.node.parent.active = true;
            this.headImg.setTexture(itemHeadTab.Icon);
          }

          if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headFrame) {
            this.headFrameImg.setTexture((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.avatarInfo.headFrame).Icon);
          }

          this.node_use.active = itemId === (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headIcon;
          this.node_lock.active = !view.checkHeadIsHave(itemId);
          var headIconRed = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Head_Icon_Red, "0");

          if (!headIconRed) {
            this.node_red.active = false;
          } else {
            var headIconItemRed = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Head_Icon_Red, "0", "" + itemId);
            this.node_red.active = headIconItemRed;
          }
        }

        initFrameData(itemId, view) {
          this.itemId = itemId;
          this.roleInfoView = view; // this.headImg.node.parent.active = false;
          // this.headFrameImg.node.parent.active = false;

          var itemFrameTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(itemId);

          if (itemFrameTab) {
            // this.headFrameImg.node.parent.active = true;
            this.headFrameImg.setTexture(itemFrameTab.Icon);
          }

          if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headIcon) {
            this.headImg.setTexture((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.avatarInfo.headIcon).Icon);
          }

          this.node_use.active = itemId === (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headFrame;
          this.node_lock.active = !view.checkFrameIsHave(itemId);
          var headFrameRed = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Head_Icon_Red, "1");

          if (!headFrameRed) {
            this.node_red.active = false;
          } else {
            var headFrameItemRed = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Head_Icon_Red, "1", "" + itemId);
            this.node_red.active = headFrameItemRed;
          }
        }

        initData(headId, headFrameId) {
          // this.headImg.node.parent.active = false;
          // this.headFrameImg.node.parent.active = false;
          var itemHeadTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(headId);

          if (itemHeadTab) {
            // this.headImg.node.parent.active = true;
            this.headImg.setTexture(itemHeadTab.Icon);
          }

          var itemFrameTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(headFrameId);

          if (itemFrameTab) {
            // this.headFrameImg.node.parent.active = true;
            this.headFrameImg.setTexture(itemFrameTab.Icon);
          }
        }

        clickSelectHead() {
          if (!this.node_select.active) {
            if (this.roleInfoView) {
              this.roleInfoView.selectHead(this);
            }

            this.node_select.active = true;

            if (this.node_red.active) {
              this.node_red.active = false;

              if (this.roleInfoView.default_view === (_crd && HEADTYPE === void 0 ? (_reportPossibleCrUseOfHEADTYPE({
                error: Error()
              }), HEADTYPE) : HEADTYPE).HEADICON) {
                (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.clientData.newHeadIcon = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.clientData.newHeadIcon.replace("," + this.itemId, "");
                (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.setClientData("newHeadIcon", (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.clientData.newHeadIcon);
              }

              if (this.roleInfoView.default_view === (_crd && HEADTYPE === void 0 ? (_reportPossibleCrUseOfHEADTYPE({
                error: Error()
              }), HEADTYPE) : HEADTYPE).HEADFRAME) {
                (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.clientData.newHeadFrame = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.clientData.newHeadFrame.replace("," + this.itemId, "");
                (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.setClientData("newHeadFrame", (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.clientData.newHeadFrame);
              }

              (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
                error: Error()
              }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
                error: Error()
              }), RedDotType) : RedDotType).Head_Icon_Red);
            }
          }
        }

        unSelectHead() {
          this.node_select.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "headImg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "headFrameImg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_use", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_select", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_lock", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_red", [_dec7], {
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
//# sourceMappingURL=2df754cb3740101f86f7354b58c3861b9a5db17d.js.map
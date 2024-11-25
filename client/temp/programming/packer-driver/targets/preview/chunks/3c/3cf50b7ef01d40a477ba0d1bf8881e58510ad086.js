System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, Sprite, ViewPop, tab, AssociationChangeFlagItem, UIMgr, AssociationChangeInfoPop, refreshFlagImg, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, AssociationChangeFlagPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationChangeFlagItem(extras) {
    _reporterNs.report("AssociationChangeFlagItem", "./AssociationChangeFlagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationChangeInfoPop(extras) {
    _reporterNs.report("AssociationChangeInfoPop", "./AssociationChangeInfoPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrefreshFlagImg(extras) {
    _reporterNs.report("refreshFlagImg", "../../utils/GameUtil", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      AssociationChangeFlagItem = _unresolved_4.AssociationChangeFlagItem;
    }, function (_unresolved_5) {
      UIMgr = _unresolved_5.UIMgr;
    }, function (_unresolved_6) {
      AssociationChangeInfoPop = _unresolved_6.AssociationChangeInfoPop;
    }, function (_unresolved_7) {
      refreshFlagImg = _unresolved_7.refreshFlagImg;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5e6elcSPRDXID+dlR8CU6B", "AssociationChangeFlagPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationChangeFlagPop", AssociationChangeFlagPop = (_dec = ccclass('AssociationChangeFlagPop'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Sprite), _dec(_class = (_class2 = class AssociationChangeFlagPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_flag", _descriptor, this);

          _initializerDefineProperty(this, "node_content", _descriptor2, this);

          _initializerDefineProperty(this, "sp_flag_img", _descriptor3, this);

          this.view = null;
        }

        onShow() {
          // 当前旗帜id
          this.view = (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.getView("AssociationChangeInfoPop").getComponent(_crd && AssociationChangeInfoPop === void 0 ? (_reportPossibleCrUseOfAssociationChangeInfoPop({
            error: Error()
          }), AssociationChangeInfoPop) : AssociationChangeInfoPop);
          (_crd && refreshFlagImg === void 0 ? (_reportPossibleCrUseOfrefreshFlagImg({
            error: Error()
          }), refreshFlagImg) : refreshFlagImg)(this.view.curSelectFlagId, this.sp_flag_img);
          this.showView();
        }

        register() {}

        unRegister() {
          super.unRegister();
        }

        onDestroy() {
          super.onDestroy();
        }

        showView() {
          var _this = this;

          var self = this;
          this.node_content.destroyAllChildren();

          var _loop = function _loop() {
            var flagtab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GuildFlagTable[i];
            var item = instantiate(_this.pfb_flag);
            item.parent = _this.node_content;
            item.name = String(flagtab.Id);
            var itemTs = item.getComponent(_crd && AssociationChangeFlagItem === void 0 ? (_reportPossibleCrUseOfAssociationChangeFlagItem({
              error: Error()
            }), AssociationChangeFlagItem) : AssociationChangeFlagItem);
            itemTs.initData(flagtab.Id);
            itemTs.setSelectCb(() => {
              if (flagtab.Id === _this.view.curSelectFlagId) {
                return;
              } else {
                itemTs.onSelect();

                var _selectItem = self.node_content.getChildByName(String(self.view.curSelectFlagId));

                _selectItem.getComponent(_crd && AssociationChangeFlagItem === void 0 ? (_reportPossibleCrUseOfAssociationChangeFlagItem({
                  error: Error()
                }), AssociationChangeFlagItem) : AssociationChangeFlagItem).unSelect();

                self.view.curSelectFlagId = flagtab.Id;
                (_crd && refreshFlagImg === void 0 ? (_reportPossibleCrUseOfrefreshFlagImg({
                  error: Error()
                }), refreshFlagImg) : refreshFlagImg)(flagtab.Id, _this.sp_flag_img);
              }
            });

            if (flagtab.Id === _this.view.curSelectFlagId) {
              itemTs.onSelect();
            }
          };

          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildFlagTable.length; i++) {
            _loop();
          }
        }
        /* 确定更换旗帜 */


        onClickChangeFlag() {
          this.view.refreshFlagId();
          this.onClose();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_flag", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sp_flag_img", [_dec4], {
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
//# sourceMappingURL=3cf50b7ef01d40a477ba0d1bf8881e58510ad086.js.map
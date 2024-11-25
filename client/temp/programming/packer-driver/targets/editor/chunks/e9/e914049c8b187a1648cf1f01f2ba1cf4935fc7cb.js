System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, sp, Sprite, RoleData, UIMgr, ViewName, tab, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, TopWarPlayRankHeadiItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHeadInfo(extras) {
    _reporterNs.report("HeadInfo", "../../common/PlayerHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      RoleData = _unresolved_2.RoleData;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      ViewName = _unresolved_4.ViewName;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8710bvcQnNMjagqtyuBFhHN", "TopWarPlayRankHeadiItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'sp', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * TopWarPlayRankHeadiItem
       * zhudingchao
       * Tue Jul 09 2024 14:19:23 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/jianghu/topWar/TopWarPlayRankHeadiItem.ts
       *
       */

      _export("TopWarPlayRankHeadiItem", TopWarPlayRankHeadiItem = (_dec = ccclass('TopWarPlayRankHeadiItem'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(sp.Skeleton), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class TopWarPlayRankHeadiItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "headFrameImg", _descriptor, this);

          _initializerDefineProperty(this, "headImg", _descriptor2, this);

          _initializerDefineProperty(this, "rankLab", _descriptor3, this);

          _initializerDefineProperty(this, "spine", _descriptor4, this);

          _initializerDefineProperty(this, "myNode", _descriptor5, this);

          _initializerDefineProperty(this, "rankNode", _descriptor6, this);

          this.headInfo = void 0;
        }

        onLoad() {
          this.node.on(Node.EventType.TOUCH_END, this.clickHead, this);
        }

        initView(info) {
          this.headInfo = info;

          if (info.roleInfo) {
            if (!info.headFrame) {
              info.headFrame = info.roleInfo.headFrame;
            }

            if (!info.headIcon) {
              info.headIcon = info.roleInfo.headIcon;
            } // this.levelLab.string=info.level+"";

          } // this.headFrameImg.setTexture(info.headFrame)


          let itemHeadTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(info.headIcon);

          if (!itemHeadTab) {
            itemHeadTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(31201);
          }

          this.headImg.setTexture(itemHeadTab.Icon);
          let itemheadFrameTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(info.headFrame);

          if (!itemheadFrameTab) {
            //默认头像框
            itemheadFrameTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(32000);
          }

          this.headFrameImg.setTexture(itemheadFrameTab.Icon);
        }

        clickHead() {
          if (this.headInfo) {
            if (this.headInfo.roleInfo) {
              if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.id == this.headInfo.roleInfo.id) {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.show({
                  viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).RoleInfoPop
                });
              } else {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.show({
                  viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).CheckRoleInfoPop,
                  data: {
                    "info": this.headInfo.roleInfo
                  }
                });
              }
            } else if (this.headInfo.roleId) {
              if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.id == this.headInfo.roleId) {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.show({
                  viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).RoleInfoPop
                });
              } else {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.show({
                  viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).CheckRoleInfoPop,
                  data: {
                    "roleId": this.headInfo.roleId
                  }
                });
              }
            }
          } else {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).RoleInfoPop
            });
          }
        }

        setRankLab(rank) {
          if (rank > -1) {
            this.rankLab.string = "" + rank;
          } else {
            this.rankLab.string = "";
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "headFrameImg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "headImg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rankLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spine", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "myNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rankNode", [_dec7], {
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
//# sourceMappingURL=e914049c8b187a1648cf1f01f2ba1cf4935fc7cb.js.map
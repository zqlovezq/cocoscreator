System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "client_protocol"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, sp, Sprite, UIMgr, ViewName, RoleData, tab, EventMgr, proto, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, PlayerHeadItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleRoleInfo(extras) {
    _reporterNs.report("SimpleRoleInfo", "../friends/SimpleRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
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
      UIMgr = _unresolved_2.UIMgr;
    }, function (_unresolved_3) {
      ViewName = _unresolved_3.ViewName;
    }, function (_unresolved_4) {
      RoleData = _unresolved_4.RoleData;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07fbapAVw9F5pXU1c3qrjVG", "PlayerHeadItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'sp', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerHeadItem", PlayerHeadItem = (_dec = ccclass('PlayerHeadItem'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(sp.Skeleton), _dec(_class = (_class2 = class PlayerHeadItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "headFrameImg", _descriptor, this);

          _initializerDefineProperty(this, "headImg", _descriptor2, this);

          _initializerDefineProperty(this, "levelLab", _descriptor3, this);

          _initializerDefineProperty(this, "redPoint", _descriptor4, this);

          _initializerDefineProperty(this, "spine", _descriptor5, this);

          this.headInfo = null;
          this.fromUrl = "";
          this.mTouchCallBack = null;
        }

        onLoad() {
          this.node.on(Node.EventType.TOUCH_END, this.clickHead, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetHeadIconRsp, this.on_s2c_SetHeadIconRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetHeadFrameRsp, this.on_s2c_SetHeadFrameRsp, this);
          this.updateHeadInfo((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headIcon, (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headFrame);
        }

        on_s2c_SetHeadIconRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.updateHeadInfo(msg.headIcon, -1);
          }
        }

        on_s2c_SetHeadFrameRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.updateHeadInfo(-1, msg.headFrame);
          }
        }

        initHeadInfo(info, from) {
          this.headInfo = info;

          if (from) {
            this.fromUrl = from;
          }

          if (info.roleInfo) {
            if (!info.headFrame) {
              info.headFrame = info.roleInfo.headFrame;
            }

            if (!info.headIcon) {
              info.headIcon = info.roleInfo.headIcon;
            }

            if (!info.level) {
              info.level = info.roleInfo.level;
            } // this.levelLab.string=info.level+"";

          }

          if (info.level) {
            this.levelLab.string = info.level + "";
          }

          this.updateHeadInfo(info.headIcon, info.headFrame);
        }

        setCloseCallBack(closeFunc) {
          this.mTouchCallBack = closeFunc;
        }

        clickHead() {
          if (this.mTouchCallBack && typeof this.mTouchCallBack == 'function') {
            this.mTouchCallBack();
            return;
          }

          var roleInfoView = null;
          var CheckRoleInfoView = null;

          if (this.headInfo) {
            if (this.headInfo.roleInfo) {
              if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.id == this.headInfo.roleInfo.id && !this.fromUrl) {
                roleInfoView = (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.getView("RoleInfoPop");

                if (!roleInfoView) {
                  (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                    error: Error()
                  }), UIMgr) : UIMgr).ins.show({
                    viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                      error: Error()
                    }), ViewName) : ViewName).RoleInfoPop
                  });
                }
              } else {
                CheckRoleInfoView = (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.getView("CheckRoleInfoPop");

                if (!CheckRoleInfoView) {
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
              }
            } else if (this.headInfo.roleId) {
              if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.id == this.headInfo.roleId && !this.fromUrl) {
                roleInfoView = (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.getView("RoleInfoPop");

                if (!roleInfoView) {
                  (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                    error: Error()
                  }), UIMgr) : UIMgr).ins.show({
                    viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                      error: Error()
                    }), ViewName) : ViewName).RoleInfoPop
                  });
                }
              } else {
                CheckRoleInfoView = (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.getView("CheckRoleInfoPop");

                if (!CheckRoleInfoView) {
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
            }
          } else {
            roleInfoView = (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.getView("RoleInfoPop");

            if (!roleInfoView) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).RoleInfoPop
              });
            }
          }
        }
        /**
        * 刷新头像信息
        */


        updateHeadInfo(headId, headFrameId) {
          if (headId >= 0) {
            var itemHeadTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(headId);

            if (!itemHeadTab) {
              itemHeadTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ItemTableById.getValue(31201);
            }

            this.headImg.setTexture(itemHeadTab.Icon);
          }

          if (headFrameId >= 0) {
            var itemheadFrameTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(headFrameId);

            if (!itemheadFrameTab) {
              //默认头像框
              itemheadFrameTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ItemTableById.getValue(32000);
            }

            this.headFrameImg.setTexture(itemheadFrameTab.Icon);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "headFrameImg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "headImg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "levelLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "redPoint", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spine", [_dec6], {
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
//# sourceMappingURL=632b2e1e8e17e335f7cc144f4aab553d52b7eb98.js.map
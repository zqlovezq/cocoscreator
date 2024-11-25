System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, CCInteger, Component, Enum, Node, Toggle, _decorator, tab, ModuleUtil, UIMgr, OpenFunctionMgr, EventMgr, LocalEvent, RoleData, GuideController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, ModuleInJumpComp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModuleUtil(extras) {
    _reporterNs.report("ModuleUtil", "../ModuleUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../logic/mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "./OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../logic/mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../logic/define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../logic/model/role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../../logic/guide/GuideController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Enum = _cc.Enum;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      ModuleUtil = _unresolved_3.ModuleUtil;
    }, function (_unresolved_4) {
      UIMgr = _unresolved_4.UIMgr;
    }, function (_unresolved_5) {
      OpenFunctionMgr = _unresolved_5.OpenFunctionMgr;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_unresolved_7) {
      LocalEvent = _unresolved_7.LocalEvent;
    }, function (_unresolved_8) {
      RoleData = _unresolved_8.RoleData;
    }, function (_unresolved_9) {
      GuideController = _unresolved_9.GuideController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb841xCq4pGXJ0bxUV1AbxT", "ModuleInJumpComp", undefined);

      __checkObsolete__(['Button', 'CCInteger', 'Component', 'Enum', 'Node', 'Toggle', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 功能入口 解锁、跳转
       */

      _export("default", ModuleInJumpComp = (_dec = property({
        type: Enum((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).Module),
        tooltip: "功能枚举"
      }), _dec2 = property({
        type: Enum((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).OpenFunctionName),
        tooltip: "功能枚举"
      }), _dec3 = property(Node), _dec4 = property({
        type: 0,
        displayName: '点击是否跳转界面'
      }), _dec5 = property({
        type: 0,
        displayName: "点击跳转界面的页签"
      }), _dec6 = property([CCInteger]), _dec7 = property({
        type: Enum((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).OpenFunctionName),
        displayName: "额外的显示条件"
      }), ccclass(_class = (_class2 = class ModuleInJumpComp extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "opName", _descriptor, this);

          _initializerDefineProperty(this, "openFuncName", _descriptor2, this);

          _initializerDefineProperty(this, "lockNode", _descriptor3, this);

          _initializerDefineProperty(this, "isJump", _descriptor4, this);

          _initializerDefineProperty(this, "jumpTab", _descriptor5, this);

          _initializerDefineProperty(this, "jumpDeepTab", _descriptor6, this);

          _initializerDefineProperty(this, "extraOpenFunc", _descriptor7, this);
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).checkOpenFuncPop, this.checkVisible, this);
          this.checkVisible();

          if (this.isJump) {
            var btn = this.node.getComponent(Button);

            if (btn.clickEvents.length == 0) {
              this.node.on(Node.EventType.TOUCH_END, this.onClick, this);
            }
          } else {
            if (this.node.getComponent(Toggle)) {
              var toggle = this.node.getComponent(Toggle);

              if (toggle.clickEvents.length === 0) {
                this.node.on(Node.EventType.TOUCH_END, this.showTips, this);
              }
            }
          }
        }

        checkVisible() {
          var isVisible = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen(this.openFuncName, this.extraOpenFunc);

          if (this.lockNode) {
            this.node.active = true;
            this.lockNode.active = !isVisible;
          } else {
            this.node.active = isVisible;
          }
        }

        showTips() {
          var isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen(this.openFuncName, this.extraOpenFunc);

          if (!isOpen) {
            (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.showFunctionTips(this.openFuncName);
          }

          return isOpen;
        }

        onClick() {
          var isOpen = this.showTips();

          if (isOpen && this.isJump && (_crd && ModuleUtil === void 0 ? (_reportPossibleCrUseOfModuleUtil({
            error: Error()
          }), ModuleUtil) : ModuleUtil).checkIsOpen(this.opName)) {
            var isGuideBlock = this.isGuideBlockClick();

            if (isGuideBlock) {
              console.log("cocos 新手引导阶段点击屏蔽");
              return;
            }

            if (this.jumpTab > 0) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.jumpLayer(this.opName, this.jumpTab, null, this.openFuncName);
            } else {
              if (this.jumpDeepTab.length > 0) {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.jumpLayer(this.opName, 0, null, this.openFuncName, this.jumpDeepTab);
              } else {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.jumpLayer(this.opName, 0, null, this.openFuncName);
              }
            }
          }
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);
        } // 是否引导屏蔽按钮


        isGuideBlockClick() {
          var isGuiding = !(_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.IsGuideFinished();
          var isBlock = (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.blockButton;
          return isGuiding && isBlock;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "opName", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Module.Module_Unknown;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "openFuncName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_None;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lockNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isJump", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "jumpTab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "jumpDeepTab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "extraOpenFunc", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_None;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fa361bc84620de494256777a8558ed50aedd52f9.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, director, Node, ViewPop, LoginControl, UIMgr, EventMgr, SceneMgr, ScenesName, ViewName, LocalEvent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Reconnect;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginControl(extras) {
    _reporterNs.report("LoginControl", "./login/LoginControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneMgr(extras) {
    _reporterNs.report("SceneMgr", "../mgr/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScenesName(extras) {
    _reporterNs.report("ScenesName", "../mgr/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../define/LocalEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      director = _cc.director;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      LoginControl = _unresolved_3.LoginControl;
    }, function (_unresolved_4) {
      UIMgr = _unresolved_4.UIMgr;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      SceneMgr = _unresolved_6.SceneMgr;
      ScenesName = _unresolved_6.ScenesName;
    }, function (_unresolved_7) {
      ViewName = _unresolved_7.ViewName;
    }, function (_unresolved_8) {
      LocalEvent = _unresolved_8.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88e86QExpROIpSC3iraLh0F", "Reconnect", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'instantiate', 'Node', 'Prefab', 'ResolutionPolicy', 'Scene', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Reconnect", Reconnect = (_dec = ccclass('Reconnect'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class Reconnect extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "confirm_node", _descriptor, this);

          _initializerDefineProperty(this, "reconnecting_node", _descriptor2, this);
        }

        static create() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).Reconnect
          });
        }

        static hide() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
            error: Error()
          }), ViewName) : ViewName).Reconnect);
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).LoginProcessComplete, this.on_local_LoginProcessComplete, this);
        }

        onShow() {
          this.reset();
          this.node.active = true;
        }

        reset() {
          this.confirm_node.active = true;
          this.reconnecting_node.active = false;
        }

        onClickOk() {
          console.log("onClickOk");
          (_crd && LoginControl === void 0 ? (_reportPossibleCrUseOfLoginControl({
            error: Error()
          }), LoginControl) : LoginControl).ins.connect();
          this.confirm_node.active = false;
          this.reconnecting_node.active = true;
        }

        onClickCancel() {
          console.log("onClickCancel");

          if ((_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
            error: Error()
          }), SceneMgr) : SceneMgr).isFightScene()) {
            // 如果是战斗场景，则直接退出游戏
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).quitFight);
          } else {
            // 如果是其他场景，则直接返回登录场景
            (_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
              error: Error()
            }), SceneMgr) : SceneMgr).ins.loadScene((_crd && ScenesName === void 0 ? (_reportPossibleCrUseOfScenesName({
              error: Error()
            }), ScenesName) : ScenesName).login);
          }

          Reconnect.hide();
        }

        onClose() {
          console.warn("隐藏");
          this.node.active = false;
        }

        on_local_LoginProcessComplete() {
          if ((_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
            error: Error()
          }), SceneMgr) : SceneMgr).isLoginScene() || (_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
            error: Error()
          }), SceneMgr) : SceneMgr).isFightScene()) {
            return;
          }

          this.enterMain();
        }

        enterMain() {
          var toSceneName = (_crd && ScenesName === void 0 ? (_reportPossibleCrUseOfScenesName({
            error: Error()
          }), ScenesName) : ScenesName).main;

          if ((_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
            error: Error()
          }), SceneMgr) : SceneMgr).isSceneByName((_crd && ScenesName === void 0 ? (_reportPossibleCrUseOfScenesName({
            error: Error()
          }), ScenesName) : ScenesName).loading)) {
            (_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
              error: Error()
            }), SceneMgr) : SceneMgr).ins.loadScene(toSceneName);
            return;
          }

          (_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
            error: Error()
          }), SceneMgr) : SceneMgr).ins.loadScene((_crd && ScenesName === void 0 ? (_reportPossibleCrUseOfScenesName({
            error: Error()
          }), ScenesName) : ScenesName).loading, () => {
            director.preloadScene(toSceneName, () => {
              (_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
                error: Error()
              }), SceneMgr) : SceneMgr).ins.loadScene(toSceneName);
            });
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "confirm_node", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "reconnecting_node", [_dec3], {
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
//# sourceMappingURL=b2b094c2a861635b84f13a41a56dad4938236d70.js.map
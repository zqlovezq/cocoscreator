System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Prefab, SceneBase, FightRootControl, FightRootView, UIMgr, PlaySound, FightUIView, LocalEvent, NetStateEvent, EventMgr, SoundUrl, FightData, Global, RoleData, PvpUIView, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, FightScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSceneBase(extras) {
    _reporterNs.report("SceneBase", "./SceneBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../logic/fight/FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootView(extras) {
    _reporterNs.report("FightRootView", "../logic/fight/FightRootView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../logic/mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaySound(extras) {
    _reporterNs.report("PlaySound", "../logic/utils/Sound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightUIView(extras) {
    _reporterNs.report("FightUIView", "../logic/fight/FightUIView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../logic/define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetStateEvent(extras) {
    _reporterNs.report("NetStateEvent", "../logic/define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../logic/mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundUrl(extras) {
    _reporterNs.report("SoundUrl", "../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../logic/fight/data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../Global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../logic/model/role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpUIView(extras) {
    _reporterNs.report("PvpUIView", "../logic/fight/pvp/PvpUIView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      SceneBase = _unresolved_2.SceneBase;
    }, function (_unresolved_3) {
      FightRootControl = _unresolved_3.FightRootControl;
    }, function (_unresolved_4) {
      FightRootView = _unresolved_4.FightRootView;
    }, function (_unresolved_5) {
      UIMgr = _unresolved_5.UIMgr;
    }, function (_unresolved_6) {
      PlaySound = _unresolved_6.PlaySound;
    }, function (_unresolved_7) {
      FightUIView = _unresolved_7.FightUIView;
    }, function (_unresolved_8) {
      LocalEvent = _unresolved_8.LocalEvent;
      NetStateEvent = _unresolved_8.NetStateEvent;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
    }, function (_unresolved_10) {
      SoundUrl = _unresolved_10.SoundUrl;
    }, function (_unresolved_11) {
      FightData = _unresolved_11.FightData;
    }, function (_unresolved_12) {
      Global = _unresolved_12.Global;
    }, function (_unresolved_13) {
      RoleData = _unresolved_13.RoleData;
    }, function (_unresolved_14) {
      PvpUIView = _unresolved_14.PvpUIView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f67fEcLplGyaGJSYHywMhM", "FightScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'instantiate', 'Node', 'Prefab', 'ResolutionPolicy', 'SpriteFrame', 'Texture2D', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightScene", FightScene = (_dec = ccclass('FightScene'), _dec2 = property(_crd && FightRootView === void 0 ? (_reportPossibleCrUseOfFightRootView({
        error: Error()
      }), FightRootView) : FightRootView), _dec3 = property(Prefab), _dec(_class = (_class2 = class FightScene extends (_crd && SceneBase === void 0 ? (_reportPossibleCrUseOfSceneBase({
        error: Error()
      }), SceneBase) : SceneBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "rootView", _descriptor, this);

          _initializerDefineProperty(this, "pvpUI", _descriptor2, this);

          this.checkGuide = true;
          this.idx = 0;
        }

        onLoad() {
          console.log("初始化FightScene");
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.init();

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isPvp) {
            this.defaultPfb = this.pvpUI;
          }

          super.onLoad();
          this.showDefaultPfb();
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.setRoot(this.rootView);

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isPvp) {
            (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.setPvpUIView(this.defaultView.getComponent(_crd && PvpUIView === void 0 ? (_reportPossibleCrUseOfPvpUIView({
              error: Error()
            }), PvpUIView) : PvpUIView));
          } else {
            (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.setUIView(this.defaultView.getComponent(_crd && FightUIView === void 0 ? (_reportPossibleCrUseOfFightUIView({
              error: Error()
            }), FightUIView) : FightUIView));
          }

          (_crd && PlaySound === void 0 ? (_reportPossibleCrUseOfPlaySound({
            error: Error()
          }), PlaySound) : PlaySound)((_crd && SoundUrl === void 0 ? (_reportPossibleCrUseOfSoundUrl({
            error: Error()
          }), SoundUrl) : SoundUrl).BattleBGM);
        }

        resize(canvasNames) {
          canvasNames.push("FightRootView");
          super.resize(canvasNames);
        }

        start() {
          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isDebug) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: "FightTestView",
              parent: this.defaultView,
              zIndex: -1
            });
          }
          /* 新手引导wzq */


          if (this.checkGuide && ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageId === 101 || (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageId === 1) && !(_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.IsGuideFinished()) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).CheckGuide);
            this.checkGuide = false;
          }

          this.schedule(dt => {
            (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.update(dt);
            this.idx += 1; // console.log(this.idx, Fixed.toFixed(dt * 1000))
          });
          this.schedule(() => {
            // console.log("====================")
            this.idx = 0;
          }, 1);
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onNetState((_crd && NetStateEvent === void 0 ? (_reportPossibleCrUseOfNetStateEvent({
            error: Error()
          }), NetStateEvent) : NetStateEvent).CLOSE, this.onNetClose, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).LoginProcessComplete, this.on_local_LoginProcessComplete, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).quitFight, this.onQuitFight, this);
        }

        lateUpdate(dt) {
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.lateUpdate(dt);
        }

        onNetClose() {
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.pause = true;
        }

        on_local_LoginProcessComplete() {
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.pause = false;

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isDestory) {
            (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.enterMain();
          }
        }

        onQuitFight() {
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.onQuitFight();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rootView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pvpUI", [_dec3], {
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
//# sourceMappingURL=5440060b3522519e02f52030b2309d42945cc4c4.js.map
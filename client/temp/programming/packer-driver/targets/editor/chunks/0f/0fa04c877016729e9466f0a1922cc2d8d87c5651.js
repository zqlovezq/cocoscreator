System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, SpriteAtlas, SpriteFrame, SceneBase, tab, proto, ResMgr, Global, ItemPoolMgr, Sound, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, LoginScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSceneBase(extras) {
    _reporterNs.report("SceneBase", "./SceneBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWriter(extras) {
    _reporterNs.report("Writer", "protobufjs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../logic/mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../Global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../logic/model/item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSound(extras) {
    _reporterNs.report("Sound", "../logic/utils/Sound", _context.meta, extras);
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
      SpriteAtlas = _cc.SpriteAtlas;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      SceneBase = _unresolved_2.SceneBase;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      ResMgr = _unresolved_4.ResMgr;
    }, function (_unresolved_5) {
      Global = _unresolved_5.Global;
    }, function (_unresolved_6) {
      ItemPoolMgr = _unresolved_6.ItemPoolMgr;
    }, function (_unresolved_7) {
      Sound = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1835qsiI1EZ60UeOUoEEsF", "LoginScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'DynamicAtlasManager', 'Label', 'macro', 'Node', 'Prefab', 'ResolutionPolicy', 'sp', 'SpriteAtlas', 'SpriteFrame', 'Texture2D', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoginScene", LoginScene = (_dec = ccclass('LoginScene'), _dec2 = property(Label), _dec(_class = (_class2 = class LoginScene extends (_crd && SceneBase === void 0 ? (_reportPossibleCrUseOfSceneBase({
        error: Error()
      }), SceneBase) : SceneBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "verLab", _descriptor, this);
        }

        onLoad() {
          super.onLoad();
          this.showDefaultPfb();
          this.verLab.string = (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).getVersionStr();
          let conf = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ChannelTableByChannelType.getValue(0);
          console.log(conf);
        }

        start() {
          this.initLoadRes();
        }

        initLoadRes() {
          (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.loadItemPrefab();
          (_crd && Sound === void 0 ? (_reportPossibleCrUseOfSound({
            error: Error()
          }), Sound) : Sound).ins.loadBgm();
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).addRef("textrue/bg_1", SpriteFrame);
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).addRef("Animation/common/star_1", SpriteFrame);
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).addRef("Animation/common/star_2", SpriteFrame);
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).addRef("Animation/common/star_3", SpriteAtlas);
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).addRef("Animation/common/star_4", SpriteAtlas);
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).addRef("Animation/common/star_5", SpriteAtlas);
        }

        testPb() {
          console.log("测试打印protobuff");
          console.log((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl);
          let aa = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_LoginReq();
          aa.uid = "uid";
          aa.group = "group";
          aa.token = "token"; // aa.PlatID = 1
          // aa.openId = "2"
          // aa.uid = "3"

          console.log(aa);
          let unit8 = this.PbEncode(aa);
          console.log(unit8);
          let pb = this.decode((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.LoginReq, unit8);
        }

        PbEncode(message) {
          let writer = message.constructor.encode(message);
          return writer == null ? void 0 : writer.finish();
        }

        decode(ptl, unit8) {
          let pb = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto)["Msg_" + (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl[ptl]].decode(unit8);
          console.log(pb);
          return pb;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "verLab", [_dec2], {
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
//# sourceMappingURL=0fa04c877016729e9466f0a1922cc2d8d87c5651.js.map
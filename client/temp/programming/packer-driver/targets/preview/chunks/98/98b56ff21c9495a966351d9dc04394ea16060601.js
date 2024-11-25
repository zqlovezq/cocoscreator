System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "client_protocol"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, ComponentBase, TimeUtil, LangMgr, proto, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, MailListItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailInfo(extras) {
    _reporterNs.report("MailInfo", "./MailInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeUtil(extras) {
    _reporterNs.report("TimeUtil", "../../utils/TimeUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      TimeUtil = _unresolved_3.TimeUtil;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "786d32bGHxPMLSvE61IR9cu", "MailListItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * MailListItem
       * zhudingchao
       * Mon Jun 03 2024 10:55:16 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/mail/MailListItem.ts
       *
       */

      _export("MailListItem", MailListItem = (_dec = ccclass('MailListItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = class MailListItem extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nameLab", _descriptor, this);

          _initializerDefineProperty(this, "timeLab", _descriptor2, this);

          _initializerDefineProperty(this, "nameLab2", _descriptor3, this);

          _initializerDefineProperty(this, "timeLab2", _descriptor4, this);

          _initializerDefineProperty(this, "selectNode", _descriptor5, this);

          _initializerDefineProperty(this, "notSelectNode", _descriptor6, this);

          _initializerDefineProperty(this, "gotNode", _descriptor7, this);

          _initializerDefineProperty(this, "cangetNode", _descriptor8, this);

          _initializerDefineProperty(this, "readNode", _descriptor9, this);

          _initializerDefineProperty(this, "notRedaNode", _descriptor10, this);

          this.info = void 0;
          this.touchCallBcak = void 0;
        }

        register() {}

        initData(info, touchCallBcak) {
          this.info = info;
          this.selectNode.active = false;

          if (info.Type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).SysMailType.Gm) {
            this.nameLab.string = info.Title;
            this.nameLab2.string = info.Title;
          } else {
            this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(info.Title);
            this.nameLab2.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(info.Title);
          } //let timeLab="剩余"+TimeUtil.getLeftDay(Number(info.ExpireAt))+"天";


          var timeLab = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_mail_3", [(_crd && TimeUtil === void 0 ? (_reportPossibleCrUseOfTimeUtil({
            error: Error()
          }), TimeUtil) : TimeUtil).getLeftDay(Number(info.ExpireAt))]);
          this.timeLab.string = timeLab;
          this.timeLab2.string = timeLab;
          this.touchCallBcak = touchCallBcak;
          this.setShowState(); // this.gotNode
        }

        setSelectState(b) {
          this.selectNode.active = b;
        }

        setShowState() {
          this.notRedaNode.active = false;
          this.readNode.active = false;
          this.gotNode.active = false;
          this.cangetNode.active = false;

          if (this.info.isRead) {
            if (this.info.Rewards.length > 0) {
              if (this.info.IsRewardsReceived) {
                this.gotNode.active = true;
              } else {
                this.cangetNode.active = true;
              }
            } else {
              this.readNode.active = true;
            }
          } else {
            this.notRedaNode.active = true;
          }
        }

        onClickBtn() {
          if (this.touchCallBcak) {
            this.touchCallBcak(this);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "timeLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nameLab2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "timeLab2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "selectNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "notSelectNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gotNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "cangetNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "readNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "notRedaNode", [_dec11], {
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
//# sourceMappingURL=98b56ff21c9495a966351d9dc04394ea16060601.js.map
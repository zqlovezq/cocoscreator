System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, RichText, UITransform, InfiniteCell, Func, tab, UIMgr, AssociationData, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ChatAssociationItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatMessageInfo(extras) {
    _reporterNs.report("ChatMessageInfo", "./ChatMessageInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "../association/AssociationData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      RichText = _cc.RichText;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }, function (_unresolved_3) {
      Func = _unresolved_3.Func;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      UIMgr = _unresolved_5.UIMgr;
    }, function (_unresolved_6) {
      AssociationData = _unresolved_6.AssociationData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8518XYmk5N4JAb1HhAGv+u", "ChatAssociationItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'NodeEventType', 'RichText', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ChatAssociationItem", ChatAssociationItem = (_dec = ccclass('ChatAssociationItem'), _dec2 = property(UITransform), _dec3 = property(RichText), _dec(_class = (_class2 = class ChatAssociationItem extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "chatLayout", _descriptor, this);

          _initializerDefineProperty(this, "richText", _descriptor2, this);

          this._data = null;
        }

        UpdateContent(data) {
          // this.node.on(NodeEventType.TOUCH_START, this.onClickBtn, this);
          this._data = data;

          if (!data["ZH_width"]) {
            data["ZH_width"] = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).getStrZhWidth(data.normal) * 24 + 30;
          }

          if (data["ZH_width"] < 480) {
            this.chatLayout.width = data["ZH_width"];
          } else {
            this.chatLayout.width = 480;
          }

          this.richText.string = data.clientCustomNotice.content;
        }

        onClickBtn() {
          if ((_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getBargainGift() && this._data.clientCustomNotice) {
            var chatBreviaryTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ChatBreviaryTableByType.getValue(this._data.clientCustomNotice.noticeType);
            var JumpUI = chatBreviaryTable.JumpUI;
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.jumpLayer(JumpUI);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "chatLayout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "richText", [_dec3], {
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
//# sourceMappingURL=0510b9b093f6f9cb09ab949fbb7237820249f95b.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, UITransform, InfiniteCell, PlayerHeadItem, tab, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, ChatPlayerItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerHeadItem(extras) {
    _reporterNs.report("PlayerHeadItem", "../common/PlayerHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatMessageInfo(extras) {
    _reporterNs.report("ChatMessageInfo", "./ChatMessageInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
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
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }, function (_unresolved_3) {
      PlayerHeadItem = _unresolved_3.PlayerHeadItem;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      LangMgr = _unresolved_5.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ddc0JKah9BULbuqAEJkJ/W", "ChatPlayerItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ChatPlayerItem
       * zhudingchao
       * Thu Jun 13 2024 18:05:40 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/chat/ChatPlayerItem.ts
       *
       */

      _export("ChatPlayerItem", ChatPlayerItem = (_dec = ccclass('ChatPlayerItem'), _dec2 = property(_crd && PlayerHeadItem === void 0 ? (_reportPossibleCrUseOfPlayerHeadItem({
        error: Error()
      }), PlayerHeadItem) : PlayerHeadItem), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(UITransform), _dec(_class = (_class2 = class ChatPlayerItem extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "playerHeadItem", _descriptor, this);

          _initializerDefineProperty(this, "nameLab", _descriptor2, this);

          _initializerDefineProperty(this, "titleLab", _descriptor3, this);

          _initializerDefineProperty(this, "servernName", _descriptor4, this);

          _initializerDefineProperty(this, "messageLab", _descriptor5, this);

          _initializerDefineProperty(this, "messageLab2", _descriptor6, this);

          _initializerDefineProperty(this, "chatLayout", _descriptor7, this);
        }

        UpdateContent(data) {
          this.playerHeadItem.initHeadInfo({
            headFrame: data.sender.headFrame,
            headIcon: data.sender.headIcon,
            level: data.sender.level,
            roleId: data.sender.roleId
          });
          this.nameLab.string = data.sender.name;
          var table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().QuestLogTableByLevel.getValue(data.sender.questLogLevel);

          if (table) {
            this.titleLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(table.Name);
          }

          if (!data["ZH_width"]) {
            this.messageLab2.node.active = true;
            this.messageLab2.string = data.normal;
            this.chatLayout.node.active = false;
            this.scheduleOnce(() => {
              var width = this.messageLab2.getComponent(UITransform).contentSize.width + 25;

              if (width > 395) {
                width = 395;
              }

              data["ZH_width"] = width;
              this.chatLayout.width = width;
              this.messageLab2.node.active = false;
              this.messageLab.string = data.normal;
              this.chatLayout.node.active = true;
            }); // data["ZH_width"]=Func.getStrZhWidth(data.normal)*20+25;
          } else {
            this.messageLab.string = data.normal;
            this.chatLayout.width = data["ZH_width"];
          } // if(data["ZH_width"]<400){
          //     this.chatLayout.width=data["ZH_width"];
          // }else{
          //     this.chatLayout.width=400;
          // }
          // if(len*22<370){
          //     this.chatLayout.width=len*22+25;
          // }else{
          //     this.chatLayout.width=390; 
          // }

        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerHeadItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "titleLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "servernName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "messageLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "messageLab2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "chatLayout", [_dec8], {
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
//# sourceMappingURL=e0d722919468471ff54cab8d268b43c636ea0427.js.map
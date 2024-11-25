System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, PlayerHeadItem, InfiniteCell, proto, FriendControl, ShowTips, RoleData, TimeUtil, LangMgr, GameUtil, FriendData, tab, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, FriendListItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerHeadItem(extras) {
    _reporterNs.report("PlayerHeadItem", "../common/PlayerHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleRoleInfo(extras) {
    _reporterNs.report("SimpleRoleInfo", "./SimpleRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendControl(extras) {
    _reporterNs.report("FriendControl", "./FriendControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeUtil(extras) {
    _reporterNs.report("TimeUtil", "../../utils/TimeUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendData(extras) {
    _reporterNs.report("FriendData", "./FriendData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      PlayerHeadItem = _unresolved_2.PlayerHeadItem;
    }, function (_unresolved_3) {
      InfiniteCell = _unresolved_3.default;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      FriendControl = _unresolved_4.FriendControl;
    }, function (_unresolved_5) {
      ShowTips = _unresolved_5.ShowTips;
    }, function (_unresolved_6) {
      RoleData = _unresolved_6.RoleData;
    }, function (_unresolved_7) {
      TimeUtil = _unresolved_7.TimeUtil;
    }, function (_unresolved_8) {
      LangMgr = _unresolved_8.LangMgr;
    }, function (_unresolved_9) {
      GameUtil = _unresolved_9.GameUtil;
    }, function (_unresolved_10) {
      FriendData = _unresolved_10.FriendData;
    }, function (_unresolved_11) {
      tab = _unresolved_11.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "370c2EAUHdOOab0V3ZqwsdE", "FriendListItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'Label', 'Node', 'Sprite', 'spriteAssembler']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * FriendListItem
       * zhudingchao
       * Fri Jun 07 2024 17:42:17 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/friends/FriendListItem.ts
       *
       */

      _export("FriendListItem", FriendListItem = (_dec = ccclass('FriendListItem'), _dec2 = property(_crd && PlayerHeadItem === void 0 ? (_reportPossibleCrUseOfPlayerHeadItem({
        error: Error()
      }), PlayerHeadItem) : PlayerHeadItem), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(Sprite), _dec15 = property(Sprite), _dec16 = property(Sprite), _dec(_class = (_class2 = class FriendListItem extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "headItem", _descriptor, this);

          _initializerDefineProperty(this, "forceLab", _descriptor2, this);

          _initializerDefineProperty(this, "myFriendNode", _descriptor3, this);

          _initializerDefineProperty(this, "applicationNode", _descriptor4, this);

          _initializerDefineProperty(this, "addNode", _descriptor5, this);

          _initializerDefineProperty(this, "blacklistNode", _descriptor6, this);

          _initializerDefineProperty(this, "nameLab", _descriptor7, this);

          _initializerDefineProperty(this, "titleLab", _descriptor8, this);

          _initializerDefineProperty(this, "titleNode", _descriptor9, this);

          _initializerDefineProperty(this, "onLineNode", _descriptor10, this);

          _initializerDefineProperty(this, "offlineNode", _descriptor11, this);

          _initializerDefineProperty(this, "offlineTimeLab", _descriptor12, this);

          _initializerDefineProperty(this, "getValueSpr", _descriptor13, this);

          _initializerDefineProperty(this, "sendValueSpr", _descriptor14, this);

          _initializerDefineProperty(this, "addBtnSpr", _descriptor15, this);

          this.type = void 0;
          this.info = void 0;
        }

        register() {}

        UpdateContent(data) {
          if (data) {
            this.type = data["type"];
            this.info = data["info"];
            this.initView();
          }
        }

        initView() {
          this.nameLab.string = this.info.name;
          this.headItem.initHeadInfo({
            roleInfo: this.info
          });
          this.forceLab.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(this.info.powerScore) + "";
          this.myFriendNode.active = this.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.FriendList;
          this.applicationNode.active = this.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.ApplyList;
          this.addNode.active = this.type == 3;
          this.blacklistNode.active = this.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.BlackList;

          if (this.type == 3) {
            this.addBtnSpr.grayscale = this.info.isSendAddFrined;
          } else if (this.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.FriendList) {
            if (this.info.offlineTime > 0) {
              var lastTime = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.getServerUtcTime() - this.info.offlineTime;
              var str = (_crd && TimeUtil === void 0 ? (_reportPossibleCrUseOfTimeUtil({
                error: Error()
              }), TimeUtil) : TimeUtil).formaterWithOutSecond2(lastTime);
              this.offlineTimeLab.string = str;
              this.offlineNode.active = true;
              this.onLineNode.active = false;
            } else {
              this.offlineNode.active = false;
              this.onLineNode.active = true;
            }

            this.sendValueSpr.grayscale = this.info.isGiveGift;
            this.getValueSpr.grayscale = this.info.receiveGiftState != 1;
          }
        }

        onClickChat() {
          //ShowTips("点击聊天")
          (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
            error: Error()
          }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("Tips_friend_17"));
        }

        onClickGetValue() {
          if (this.info.receiveGiftState == 1) {
            (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
              error: Error()
            }), FriendControl) : FriendControl).ins.requestRecvGift([this.info.id]);
          }
        }

        onClickSendValue() {
          if (!this.info.isGiveGift) {
            (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
              error: Error()
            }), FriendControl) : FriendControl).ins.requestGivingGift([this.info.id]);
          }
        }

        onClickDenine() {
          (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
            error: Error()
          }), FriendControl) : FriendControl).ins.requestRemoveFriendApply([this.info.id]);
        }

        onClickAccept() {
          // 获取好友列表
          var friendInfo = (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.getMyFreindInfos();
          var max = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().FriendMaxCount;

          if (friendInfo.length >= max) {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_friend_18"));
          } else {
            (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
              error: Error()
            }), FriendControl) : FriendControl).ins.requestConfirmFriend([this.info.id]);
          }
        }

        onClickAdd() {
          if (!this.info.isSendAddFrined) {
            (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
              error: Error()
            }), FriendControl) : FriendControl).ins.requestAddFriend(this.info.id);
            this.info.isSendAddFrined = true;
            this.addBtnSpr.grayscale = this.info.isSendAddFrined;
          }
        }

        onClickDelect() {
          (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
            error: Error()
          }), FriendControl) : FriendControl).ins.requestRemoveBlacklist(this.info.id);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "headItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "forceLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "myFriendNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "applicationNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "addNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "blacklistNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "titleLab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "titleNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "onLineNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "offlineNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "offlineTimeLab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "getValueSpr", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "sendValueSpr", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "addBtnSpr", [_dec16], {
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
//# sourceMappingURL=afdb4bf998772b9cfd7831da8dde12dddf145d99.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "client_protocol", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EditBox, instantiate, Node, Prefab, ToggleContainer, ViewPop, InfiniteList, ShowTips, EventMgr, proto, ChatData, RoleData, Func, ChatPlayerItem, ChatControl, ChatServerItem, SensitiveWordsManager, LangMgr, AssociationData, tab, ChatAssociationItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, ChatTextLabelWidth, ChatTextSize, ChatPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatMessageInfo(extras) {
    _reporterNs.report("ChatMessageInfo", "./ChatMessageInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatData(extras) {
    _reporterNs.report("ChatData", "./ChatData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatPlayerItem(extras) {
    _reporterNs.report("ChatPlayerItem", "./ChatPlayerItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatControl(extras) {
    _reporterNs.report("ChatControl", "./ChatControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatServerItem(extras) {
    _reporterNs.report("ChatServerItem", "./ChatServerItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSensitiveWordsManager(extras) {
    _reporterNs.report("SensitiveWordsManager", "../../utils/SensitiveWordsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "../association/AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatAssociationItem(extras) {
    _reporterNs.report("ChatAssociationItem", "./ChatAssociationItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      EditBox = _cc.EditBox;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ToggleContainer = _cc.ToggleContainer;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      InfiniteList = _unresolved_3.default;
    }, function (_unresolved_4) {
      ShowTips = _unresolved_4.ShowTips;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_6) {
      ChatData = _unresolved_6.ChatData;
    }, function (_unresolved_7) {
      RoleData = _unresolved_7.RoleData;
    }, function (_unresolved_8) {
      Func = _unresolved_8.Func;
    }, function (_unresolved_9) {
      ChatPlayerItem = _unresolved_9.ChatPlayerItem;
    }, function (_unresolved_10) {
      ChatControl = _unresolved_10.ChatControl;
    }, function (_unresolved_11) {
      ChatServerItem = _unresolved_11.ChatServerItem;
    }, function (_unresolved_12) {
      SensitiveWordsManager = _unresolved_12.default;
    }, function (_unresolved_13) {
      LangMgr = _unresolved_13.LangMgr;
    }, function (_unresolved_14) {
      AssociationData = _unresolved_14.AssociationData;
    }, function (_unresolved_15) {
      tab = _unresolved_15.tab;
    }, function (_unresolved_16) {
      ChatAssociationItem = _unresolved_16.ChatAssociationItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87177SfpXJPA6/OiKa4ZQfJ", "ChatPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'instantiate', 'Node', 'Prefab', 'ToggleComponent', 'ToggleContainer']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ChatView
       * zhudingchao
       * Thu Jun 13 2024 16:29:31 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/chat/ChatView.ts
       *
       */

      _export("ChatTextLabelWidth", ChatTextLabelWidth = 390);

      _export("ChatTextSize", ChatTextSize = 20);

      _export("ChatPop", ChatPop = (_dec = ccclass('ChatView'), _dec2 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec3 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec4 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(EditBox), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Prefab), _dec12 = property(Prefab), _dec13 = property(ToggleContainer), _dec14 = property(Node), _dec(_class = (_class2 = class ChatPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "worldList", _descriptor, this);

          _initializerDefineProperty(this, "systemList", _descriptor2, this);

          _initializerDefineProperty(this, "associationList", _descriptor3, this);

          _initializerDefineProperty(this, "worldNode", _descriptor4, this);

          _initializerDefineProperty(this, "systemNode", _descriptor5, this);

          _initializerDefineProperty(this, "associationNode", _descriptor6, this);

          _initializerDefineProperty(this, "worldEditbox", _descriptor7, this);

          _initializerDefineProperty(this, "selfPfb", _descriptor8, this);

          _initializerDefineProperty(this, "otherPfb", _descriptor9, this);

          _initializerDefineProperty(this, "serverPfb", _descriptor10, this);

          _initializerDefineProperty(this, "guildPfb", _descriptor11, this);

          _initializerDefineProperty(this, "toggleContainer", _descriptor12, this);

          _initializerDefineProperty(this, "node_guild_btn", _descriptor13, this);

          this.channelType = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).ChatChannelType.World;
          this.isInitWorldList = false;
          this.isInitSystemList = false;
          this.isInitAssociationList = false;
          this.currMessageInfo = void 0;
          this.scroll = void 0;
          this.channelId = void 0;
          this.lastLen = 0;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SendChatMessageRsp, this.on_s2c_SendChatMessageRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ChatMessagePush, this.on_s2c_Msg_ChatMessagePush, this);
        }

        onShow() {
          if (this.openData) {
            this.channelType = this.openData["channelType"];
          }

          if (this.channelType != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).ChatChannelType.World) {
            this.toggleContainer.toggleItems[this.channelType].isChecked = true;
          }

          this.node_guild_btn.active = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getInGuild();
          this.initView();
        }

        initView() {
          if (this.channelType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).ChatChannelType.World) {
            this.initWorldView();
          } else if (this.channelType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).ChatChannelType.System) {
            this.initSystemView();
          } else if (this.channelType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).ChatChannelType.Guild) {
            this.initAssociationView();
          }
        }

        initAssociationView() {
          this.associationNode.active = true;
          this.worldNode.active = false;
          this.systemNode.active = false;
          this.worldEditbox.node.active = true;
          this.channelId = (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
            error: Error()
          }), ChatData) : ChatData).ins.getChanneIdByType(this.channelType);
          this.currMessageInfo = (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
            error: Error()
          }), ChatData) : ChatData).ins.getMessageInfosByType(this.channelType);
          this.lastLen = this.currMessageInfo.length;

          if (!this.isInitAssociationList) {
            this.associationList.Init({
              getCellNumber: this.GetCellNumber.bind(this),
              getCellSize: this.GetCellSize.bind(this),
              getCellIdentifer: this.GetCellIdentifer.bind(this),
              getCellView: this.GetCellView.bind(this),
              getCellData: this.GetCellData.bind(this)
            });
            this.isInitAssociationList = true;
          }

          this.scroll = this.associationList;
          this.scroll.Reload(true);

          if (this.currMessageInfo.length != 0) {
            this.scheduleOnce(() => {
              this.reloadScrollToBottom();
            });
          }
        }

        initWorldView() {
          this.worldNode.active = true;
          this.systemNode.active = false;
          this.associationNode.active = false;
          this.worldEditbox.node.active = true;
          this.channelId = (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
            error: Error()
          }), ChatData) : ChatData).ins.getChanneIdByType(this.channelType);
          this.currMessageInfo = (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
            error: Error()
          }), ChatData) : ChatData).ins.getMessageInfosByType(this.channelType);
          this.lastLen = this.currMessageInfo.length;

          if (!this.isInitWorldList) {
            this.worldList.Init({
              getCellNumber: this.GetCellNumber.bind(this),
              getCellSize: this.GetCellSize.bind(this),
              getCellIdentifer: this.GetCellIdentifer.bind(this),
              getCellView: this.GetCellView.bind(this),
              getCellData: this.GetCellData.bind(this)
            });
            this.isInitWorldList = true;
          }

          this.scroll = this.worldList;
          this.scroll.Reload(true);

          if (this.currMessageInfo.length != 0) {
            this.scheduleOnce(() => {
              this.reloadScrollToBottom();
            });
          }
        }

        initSystemView() {
          this.worldNode.active = false;
          this.systemNode.active = true;
          this.associationNode.active = false;
          this.channelId = (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
            error: Error()
          }), ChatData) : ChatData).ins.getChanneIdByType(this.channelType);
          this.currMessageInfo = (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
            error: Error()
          }), ChatData) : ChatData).ins.getMessageInfosByType(this.channelType);
          this.lastLen = this.currMessageInfo.length;

          if (!this.isInitSystemList) {
            this.systemList.Init({
              getCellNumber: this.GetCellNumber.bind(this),
              getCellSize: this.GetCellSizeSys.bind(this),
              getCellIdentifer: this.GetCellIdentifer.bind(this),
              getCellView: this.GetCellView.bind(this),
              getCellData: this.GetCellData.bind(this)
            });
            this.isInitSystemList = true;
          }

          this.scroll = this.systemList;
          this.scroll.Reload(true);

          if (this.currMessageInfo.length != 0) {
            this.scheduleOnce(() => {
              this.reloadScrollToBottom();
            });
          }
        }

        reloadScrollToBottom() {
          var nowList = this.currMessageInfo;
          this.setAllRead();

          if (nowList.length >= 10) {
            //从0-n可能太多， 就只滑动最后3个
            this.scroll.stopAutoScroll();
            this.scroll.ScrollToCell(nowList.length - 4, 0);
            this.setScrollToCell(nowList.length - 1);
          } else {
            this.setScrollToCell(nowList.length - 1);
          }
        }

        setAllRead() {
          var nowList = this.currMessageInfo;

          for (var index = 0; index < nowList.length; index++) {
            var v = nowList[index]; // v.isReaded = true
          } // this.checkRead()

        }

        setScrollToCell(idx) {
          if (this.scroll.isAutoScrolling()) {
            this.scroll.stopAutoScroll();
          }

          this.setAllRead();
          this.scroll.ScrollToCell(idx - 1);
        }

        GetCellNumber() {
          return this.currMessageInfo.length;
        }

        GetCellSize(idx) {
          var chat = this.currMessageInfo[idx];

          if (chat) {
            if (chat["zhLen"] == null) {
              chat["zhLen"] = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).getStrZhLen(chat.normal);
            }

            return Math.floor(chat["zhLen"] * ChatTextSize / ChatTextLabelWidth) * 30 + 95;
          } else {
            return 120;
          }
        }

        GetCellSizeSys(idx) {
          var chat = this.currMessageInfo[idx];

          if (chat) {
            if (chat["zhLen"] == null) {
              chat["zhLen"] = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).getStrZhLen(chat.normal);
            }

            return Math.floor(chat["zhLen"] * ChatTextSize / ChatTextLabelWidth) * 20 + 50;
          } else {
            return 120;
          }
        }

        GetCellIdentifer(idx) {
          if (this.channelType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).ChatChannelType.System) {
            return "ChatServerItem";
          } else {
            var chat = this.currMessageInfo[idx];

            if (chat.clientCustomNotice && (chat.clientCustomNotice.noticeType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ChatBreviaryType.ChatBreviaryType_GuildGiftBargain || chat.clientCustomNotice.noticeType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ChatBreviaryType.ChatBreviaryType_GuildGiftLow)) {
              return "ChatAssociationItem";
            }

            if (chat && chat.sender.roleId == (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.id) {
              return "ChatPlayerItem";
            }

            return "ChatOtherItem";
          }
        }

        GetCellView(idx, identifier) {
          switch (identifier) {
            case "ChatPlayerItem":
              return instantiate(this.selfPfb).getComponent(_crd && ChatPlayerItem === void 0 ? (_reportPossibleCrUseOfChatPlayerItem({
                error: Error()
              }), ChatPlayerItem) : ChatPlayerItem);

            case "ChatOtherItem":
              return instantiate(this.otherPfb).getComponent(_crd && ChatPlayerItem === void 0 ? (_reportPossibleCrUseOfChatPlayerItem({
                error: Error()
              }), ChatPlayerItem) : ChatPlayerItem);

            case "ChatServerItem":
              return instantiate(this.serverPfb).getComponent(_crd && ChatServerItem === void 0 ? (_reportPossibleCrUseOfChatServerItem({
                error: Error()
              }), ChatServerItem) : ChatServerItem);

            case "ChatAssociationItem":
              return instantiate(this.guildPfb).getComponent(_crd && ChatAssociationItem === void 0 ? (_reportPossibleCrUseOfChatAssociationItem({
                error: Error()
              }), ChatAssociationItem) : ChatAssociationItem);
          }

          return null;
        }

        GetCellData(idx) {
          return this.currMessageInfo[idx];
        }

        onClickToggle(event, type) {
          type = Number(type);

          if (this.channelType != type) {
            this.channelType = type;

            if (this.channelType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).ChatChannelType.System) {
              this.initSystemView();
            } else if (this.channelType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).ChatChannelType.World) {
              this.initWorldView();
            } else if (this.channelType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).ChatChannelType.Guild) {
              this.initAssociationView();
            }
          }
        }

        onClickSend() {
          var str = this.worldEditbox.string.replace(/(^\s*)|(\s*$)/g, "");

          if (str == "") {
            //ShowTips("请输入聊天内容")
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_chat_1"));
            return;
          }

          if (!(_crd && SensitiveWordsManager === void 0 ? (_reportPossibleCrUseOfSensitiveWordsManager({
            error: Error()
          }), SensitiveWordsManager) : SensitiveWordsManager).ins.check(str)) {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("CommonErrorCode_4"));
            return;
          }

          (_crd && ChatControl === void 0 ? (_reportPossibleCrUseOfChatControl({
            error: Error()
          }), ChatControl) : ChatControl).ins.requestSendChatMessage(this.channelId, str); // let chat = new proto.ChatMessage()
          // chat.type = ChatType.text
          // chat.normal = new proto.ChatMessageNormal({ content: str })
          // if (ChatCtrl.ins.sendChat(this.selectId, chat)) {
          //     this.editBox.string = ""
          //     this.checkCd()
          // }
        }

        on_s2c_SendChatMessageRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.worldEditbox.string = "";
          } else if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.SensitiveWords) {
            this.worldEditbox.string = "";
          } else if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.ChatMsgNotShow) {
            this.worldEditbox.string = "";
            var pushMsg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_ChatMessagePush();
            pushMsg.message = msg.message;
            this.on_s2c_Msg_ChatMessagePush(pushMsg);
          }
        }

        on_s2c_Msg_ChatMessagePush(msg) {
          if (Number(msg.message.channelId) == Number(this.channelId)) {
            this.currMessageInfo = (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
              error: Error()
            }), ChatData) : ChatData).ins.getMessageInfosByType(this.channelType);
            this.scroll.Reload(true);

            if (this.lastLen == 0) {
              this.lastLen = this.currMessageInfo.length;
            }

            var isBottom = false;

            var posRange = this.scroll._getActiveCellIndexRange();

            if (this.lastLen - posRange.y <= 2) {
              isBottom = true;
            }

            this.lastLen = this.currMessageInfo.length;

            if (isBottom) {
              this.scheduleOnce(() => {
                this.reloadScrollToBottom();
              });
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "worldList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "systemList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "associationList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "worldNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "systemNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "associationNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "worldEditbox", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "selfPfb", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "otherPfb", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "serverPfb", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "guildPfb", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "toggleContainer", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_guild_btn", [_dec14], {
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
//# sourceMappingURL=06f23be7630a468a587c5b28e429b01563a0f027.js.map
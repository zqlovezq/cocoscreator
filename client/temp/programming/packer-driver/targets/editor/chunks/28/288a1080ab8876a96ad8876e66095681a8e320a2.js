System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EditBox, instantiate, Label, Node, Prefab, ViewPop, EventMgr, proto, FriendControl, FriendData, FriendListItem, InfiniteList, SimpleRoleInfo, ShowTips, tab, ItemData, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _crd, ccclass, property, FriendPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendControl(extras) {
    _reporterNs.report("FriendControl", "./FriendControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendData(extras) {
    _reporterNs.report("FriendData", "./FriendData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendListItem(extras) {
    _reporterNs.report("FriendListItem", "./FriendListItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleRoleInfo(extras) {
    _reporterNs.report("SimpleRoleInfo", "./SimpleRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
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
      EditBox = _cc.EditBox;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      FriendControl = _unresolved_4.FriendControl;
    }, function (_unresolved_5) {
      FriendData = _unresolved_5.FriendData;
    }, function (_unresolved_6) {
      FriendListItem = _unresolved_6.FriendListItem;
    }, function (_unresolved_7) {
      InfiniteList = _unresolved_7.default;
    }, function (_unresolved_8) {
      SimpleRoleInfo = _unresolved_8.SimpleRoleInfo;
    }, function (_unresolved_9) {
      ShowTips = _unresolved_9.ShowTips;
    }, function (_unresolved_10) {
      tab = _unresolved_10.tab;
    }, function (_unresolved_11) {
      ItemData = _unresolved_11.ItemData;
    }, function (_unresolved_12) {
      LangMgr = _unresolved_12.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e51f1uo+vFBmp+ZrWCsnJ0C", "FriendPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'instantiate', 'Label', 'Node', 'PointToPointConstraint', 'Prefab', 'ScrollView']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * FriendPop
       * zhudingchao
       * Fri Jun 07 2024 11:09:31 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/friends/FriendPop.ts
       *
       */

      _export("FriendPop", FriendPop = (_dec = ccclass('FriendPop'), _dec2 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Prefab), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(EditBox), _dec(_class = (_class2 = class FriendPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "listScroll", _descriptor, this);

          _initializerDefineProperty(this, "friendNode", _descriptor2, this);

          _initializerDefineProperty(this, "blackNode", _descriptor3, this);

          _initializerDefineProperty(this, "blackScroll", _descriptor4, this);

          _initializerDefineProperty(this, "friendNumNode", _descriptor5, this);

          _initializerDefineProperty(this, "friendNumLab", _descriptor6, this);

          _initializerDefineProperty(this, "friendTotalNumLab", _descriptor7, this);

          _initializerDefineProperty(this, "friendValueLab", _descriptor8, this);

          _initializerDefineProperty(this, "getValueLab", _descriptor9, this);

          _initializerDefineProperty(this, "getValueTotalLab", _descriptor10, this);

          _initializerDefineProperty(this, "sendValueLab", _descriptor11, this);

          _initializerDefineProperty(this, "sendValueTotalLab", _descriptor12, this);

          _initializerDefineProperty(this, "blackNumLab", _descriptor13, this);

          _initializerDefineProperty(this, "blackTotalNumLab", _descriptor14, this);

          _initializerDefineProperty(this, "friendItemPrefab", _descriptor15, this);

          _initializerDefineProperty(this, "myfriendNode", _descriptor16, this);

          _initializerDefineProperty(this, "applicationNode", _descriptor17, this);

          _initializerDefineProperty(this, "addfriendNode", _descriptor18, this);

          _initializerDefineProperty(this, "searchEdit", _descriptor19, this);

          this.currType = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.FriendList;
          this.friendItemInfos = void 0;
          this.lastRefreshTimer = 0;
          this.searchRoleInfo = null;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFriendSimpleRoleRsp, this.on_s2c_GetFriendSimpleRoleRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.AddFriendPush, this.on_s2c_AddFriendPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RemoveFriendPush, this.on_s2c_RemoveFriendPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RecommendFriendRsp, this.on_s2c_RecommendFriendRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FindFriendRsp, this.on_s2c_FindFriendRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.AddBlacklistRsp, this.on_s2c_Msg_AddBlacklistRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RemoveBlacklistRsp, this.on_s2c_RemoveBlacklistRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.AddFriendRsp, this.on_s2c_AddFriendRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ConfirmFriendRsp, this.on_s2c_ConfirmFriendRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RemoveFriendRsp, this.on_s2c_RemoveFriendRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RemoveFriendApplyRsp, this.on_s2c_RemoveFriendApplyRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RecvGiftRsp, this.on_s2c_RecvGiftRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GivingGiftRsp, this.on_s2c_GivingGiftRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GiftPush, this.on_s2c_GiftPush, this);
        }

        onShow() {
          this.friendItemInfos = [];
          this.initListScroll();
          this.initView();
        }

        initView() {
          if (this.currType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.FriendList) {
            if ((_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
              error: Error()
            }), FriendData) : FriendData).ins.isInitMyFirend) {
              this.initMyFriendView();
            } else {
              (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
                error: Error()
              }), FriendControl) : FriendControl).ins.requestGetFriendSimpleRole((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).FriendListType.FriendList);
            }
          } else if (this.currType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.ApplyList) {
            if ((_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
              error: Error()
            }), FriendData) : FriendData).ins.isInitApply) {
              this.initApplyView();
            } else {
              (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
                error: Error()
              }), FriendControl) : FriendControl).ins.requestGetFriendSimpleRole((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).FriendListType.ApplyList);
            }
          } else if (this.currType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.BlackList) {
            if ((_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
              error: Error()
            }), FriendData) : FriendData).ins.isInitBlack) {
              this.initBlackView();
            } else {
              (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
                error: Error()
              }), FriendControl) : FriendControl).ins.requestGetFriendSimpleRole((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).FriendListType.BlackList);
            }
          } else if (this.currType == 3) {
            if ((_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
              error: Error()
            }), FriendData) : FriendData).ins.isInitRecommend) {
              this.initRecommendView();
            } else {
              (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
                error: Error()
              }), FriendControl) : FriendControl).ins.requestRecommendFriend();
            }
          }
        }

        initMyFriendView() {
          this.updateNodeShowState();
          this.friendItemInfos = (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.getMyFreindInfos(); // if(this.listScroll.isAutoScrolling()){
          //     this.listScroll.stopAutoScroll()
          // }、

          this.friendItemInfos.sort((a, b) => {
            if (a.offlineTime <= 0 && b.offlineTime <= 0) {
              return 0;
            } else {
              if (a.offlineTime <= 0) {
                return -1;
              }

              if (b.offlineTime <= 0) {
                return 1;
              }

              return b.offlineTime - a.offlineTime;
            }
          });

          if (this.friendItemInfos.length > 0) {
            this.listScroll.node.active = true;
            this.listScroll.Reload(true, true);
          } else {
            this.listScroll.node.active = false;
          }

          this.updateFriendNum();
          this.updateFriendValue();
          this.updateFriendGiftBtn();
          this.listScroll.setContentPos(0, 0, 0);
        }

        initApplyView() {
          this.updateNodeShowState();
          this.friendItemInfos = (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.getApplyInfos();

          if (this.friendItemInfos.length > 0) {
            this.listScroll.node.active = true;
            this.listScroll.Reload(true, true);
          } else {
            this.listScroll.node.active = false;
          }

          this.updateFriendNum();
          this.listScroll.setContentPos(0, 0, 0);
        }

        initRecommendView() {
          // if(this.listScroll.isAutoScrolling()){
          //     this.listScroll.stopAutoScroll()
          // }
          this.updateNodeShowState();

          if (this.searchRoleInfo) {
            this.friendItemInfos = [this.searchRoleInfo];
          } else {
            this.friendItemInfos = (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
              error: Error()
            }), FriendData) : FriendData).ins.getRecommendInfos();
          }

          if (this.friendItemInfos.length > 0) {
            this.listScroll.node.active = true;
            this.listScroll.Reload(true, true);
          } else {
            this.listScroll.node.active = false;
          } // this.listScroll.scrollToTop();


          this.listScroll.setContentPos(0, 0, 0);
        }

        initBlackView() {
          this.updateNodeShowState();
          this.friendItemInfos = (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.getBlackInfos();

          if (this.friendItemInfos.length > 0) {
            this.blackScroll.node.active = true;
            this.blackScroll.Reload(true, true);
          } else {
            this.blackScroll.node.active = false;
          }

          this.blackNumLab.string = this.friendItemInfos.length + "";
          this.blackTotalNumLab.string = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().BlackListMaxCount + "";
          this.blackScroll.setContentPos(0, 0, 0);
        }

        initListScroll() {
          this.listScroll.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHigth.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this)
          });
          this.blackScroll.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHigth.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this)
          });
        }

        updateNodeShowState() {
          this.blackNode.active = this.currType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.BlackList;
          this.listScroll.node.active = this.currType != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.BlackList;
          this.friendNumNode.active = this.currType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.FriendList || this.currType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.ApplyList;
          this.myfriendNode.active = this.currType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.FriendList;
          this.applicationNode.active = this.currType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.ApplyList;
          this.addfriendNode.active = this.currType == 3;
        }

        updateFriendNum() {
          let currNum = (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.getMyFriendNum();
          let max = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().FriendMaxCount;
          this.friendNumLab.string = currNum + "";
          this.friendTotalNumLab.string = max + "";
        }

        onClickToggle(event, type) {
          type = Number(type);

          if (this.currType != type) {
            this.currType = type;
            this.initView();
          }
        }

        updateFriendValue() {
          let num = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Friendship);
          this.friendValueLab.string = num + "";
        }

        updateFriendGiftBtn() {
          this.getValueLab.string = (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.getReceiveGiftNum() + "";
          this.getValueTotalLab.string = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().GiftRecvMaxCount + "";
        }

        onClickGetValue() {
          let max = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().GiftRecvMaxCount;
          let currNum = (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.getReceiveGiftNum();

          if (currNum <= max) {
            let infos = (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
              error: Error()
            }), FriendData) : FriendData).ins.getMyFreindInfos();
            let ids = [];

            for (let key in infos) {
              if (infos[key].receiveGiftState == 1) {
                ids.push(infos[key].id);
                currNum++;
              }
            }

            if (ids.length > 0) {
              (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
                error: Error()
              }), FriendControl) : FriendControl).ins.requestRecvGift(ids);
            } else {
              //ShowTips("没有可领取的礼物")
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("Tips_friend_1"));
            }
          } else {
            //ShowTips("今日领取已达到上线")
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_friend_2"));
          }
        }

        onClickSendValue() {
          let infos = (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.getMyFreindInfos();
          let ids = [];

          for (let key in infos) {
            if (!infos[key].isGiveGift) {
              ids.push(infos[key].id);
            }
          }

          if (ids.length > 0) {
            (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
              error: Error()
            }), FriendControl) : FriendControl).ins.requestGivingGift(ids);
          } else {
            //ShowTips("没有可赠送的好友")
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_friend_3"));
          }
        }

        onClickAllRefuse() {
          if (this.currType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.ApplyList) {
            let ids = [];

            for (let key in this.friendItemInfos) {
              ids.push(this.friendItemInfos[key].id);
            }

            if (ids.length > 0) {
              (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
                error: Error()
              }), FriendControl) : FriendControl).ins.requestRemoveFriendApply(ids);
            } else {
              //ShowTips("没有申请列表")
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("Tips_friend_4"));
            }
          }
        }

        onClickAllAgree() {
          if (this.currType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.ApplyList) {
            let ids = [];

            for (let key in this.friendItemInfos) {
              ids.push(this.friendItemInfos[key].id);
            }

            if (ids.length > 0) {
              (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
                error: Error()
              }), FriendControl) : FriendControl).ins.requestConfirmFriend(ids);
            } else {
              //ShowTips("没有申请列表")
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("Tips_friend_4"));
            }
          }
        }

        onClickRefresh() {
          let tiemr = new Date().getTime();
          let t = Math.floor((tiemr - this.lastRefreshTimer) / 1000);

          if (t > 5) {
            (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
              error: Error()
            }), FriendControl) : FriendControl).ins.requestRecommendFriend();
          } else {
            //ShowTips((5 - t) + "秒后在刷新");
            //ShowTips((5 - t) + LangMgr.getLab("Tips_friend_5"));
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("Tips_friend_5", [5 - t]));
          }
        }

        onClickSearch() {
          if (this.searchEdit.string != "" && this.searchEdit.string != (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_friend_6")) {
            (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
              error: Error()
            }), FriendControl) : FriendControl).ins.requestFindFriend(this.searchEdit.string);
          } else {
            //ShowTips("请输入角色名")
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_friend_6"));
          }
        }

        on_s2c_GetFriendSimpleRoleRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FriendListType.FriendList) {
              this.initMyFriendView();
            } else if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FriendListType.ApplyList) {
              this.initApplyView();
            } else if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FriendListType.BlackList) {
              this.initBlackView();
            }
          }
        }

        on_s2c_AddFriendPush(msg) {
          if (msg.type == this.currType) {
            this.initView();
          } else if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.ApplyList || msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.FriendList) {
            this.updateFriendNum();
          }
        }

        on_s2c_RemoveFriendPush(msg) {
          if (msg.type == this.currType) {
            this.initView();
          } else if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.ApplyList || msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.FriendList) {
            this.updateFriendNum();
          }
        }

        on_s2c_RecommendFriendRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;

          if (this.currType == 3) {
            this.searchRoleInfo = null;
            this.initRecommendView();
          }

          this.lastRefreshTimer = new Date().getTime();
        }

        on_s2c_Msg_AddBlacklistRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            //ShowTips("添加黑名单成功");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_friend_7"));
          }
        }

        on_s2c_RemoveBlacklistRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            //ShowTips("已移除黑名单");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_friend_8"));
          }
        }

        on_s2c_AddFriendRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            //ShowTips("已发送好友请求");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_friend_9"));
          } else {// ShowTips(msg.error.message);
          }
        }

        on_s2c_FindFriendRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            if (msg.role) {
              let info = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
                error: Error()
              }), SimpleRoleInfo) : SimpleRoleInfo)();
              info.merge(msg.role);
              this.searchRoleInfo = info;

              if (this.currType == 3) {
                this.initRecommendView();
              }
            } else {
              //ShowTips("找不到用户")
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("Tips_friend_10"));
            }
          } else {// if (msg.error) {
            //     ShowTips(msg.error.message)
            // }
          }
        }

        on_s2c_ConfirmFriendRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            //ShowTips("添加好友成功");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_friend_11"));
          }
        }

        on_s2c_RemoveFriendApplyRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            //ShowTips("已拒绝好友申请");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_friend_12"));
          }
        }

        on_s2c_RemoveFriendRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            //ShowTips("移除好友成功");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_friend_13"));
          }
        }

        getCellCount() {
          return this.friendItemInfos.length;
        }

        getCellHigth() {
          return 100;
        }

        getCellIdentifer() {
          return "FriendListItem";
        }

        getCellView() {
          return instantiate(this.friendItemPrefab).getComponent(_crd && FriendListItem === void 0 ? (_reportPossibleCrUseOfFriendListItem({
            error: Error()
          }), FriendListItem) : FriendListItem);
        }

        GetCellData(idx) {
          if (this.friendItemInfos[idx]) {
            return {
              type: this.currType,
              info: this.friendItemInfos[idx]
            };
          }
        }
        /**
        * 同步送礼数据
        * @param msg 
        */


        on_s2c_GiftPush(msg) {
          if (this.currType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.FriendList) {
            this.initMyFriendView();
          }
        }
        /**
        * 收取礼物返回
        * @param msg 
        */


        on_s2c_RecvGiftRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            if (this.currType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FriendListType.FriendList) {
              this.initMyFriendView();
            }
          } else {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)(msg.error.message);
          }
        }
        /**
        * 赠与礼物返回
        * @param msg 
        */


        on_s2c_GivingGiftRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            if (this.currType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FriendListType.FriendList) {
              this.initMyFriendView();
            }
          } else {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)(msg.error.message);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listScroll", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "friendNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blackNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "blackScroll", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "friendNumNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "friendNumLab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "friendTotalNumLab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "friendValueLab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "getValueLab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "getValueTotalLab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sendValueLab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sendValueTotalLab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "blackNumLab", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "blackTotalNumLab", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "friendItemPrefab", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "myfriendNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "applicationNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "addfriendNode", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "searchEdit", [_dec20], {
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
//# sourceMappingURL=288a1080ab8876a96ad8876e66095681a8e320a2.js.map
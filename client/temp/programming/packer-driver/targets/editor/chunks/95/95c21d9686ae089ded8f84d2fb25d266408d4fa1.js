System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, log, SimpleRoleInfo, proto, RedMgr, RedDotType, tab, _dec, _class, _class2, _crd, ccclass, property, FriendData;

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleRoleInfo(extras) {
    _reporterNs.report("SimpleRoleInfo", "./SimpleRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
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
      log = _cc.log;
    }, function (_unresolved_2) {
      SimpleRoleInfo = _unresolved_2.SimpleRoleInfo;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      RedMgr = _unresolved_3.RedMgr;
    }, function (_unresolved_4) {
      RedDotType = _unresolved_4.RedDotType;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b7b52G4q1B96SmeB8oRGKO", "FriendData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * FriendData
       * zhudingchao
       * Fri Jun 07 2024 11:11:08 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/friends/FriendData.ts
       *
       */

      _export("FriendData", FriendData = (_dec = ccclass('FriendData'), _dec(_class = (_class2 = class FriendData {
        constructor() {
          this._friendMap = void 0;
          this._applyMap = void 0;
          this._blackMap = void 0;
          this._recommendMap = void 0;
          this.isInitMyFirend = false;
          this.isInitApply = false;
          this.isInitBlack = false;
          this.isInitRecommend = false;
          this._removeFiendMsg = void 0;
          this._friendOnlineTimeMsg = void 0;
          this._friendPowerScoreMsg = void 0;
          this.giftListMsg = void 0;
        }

        purge() {// this._friendMap.clear();
          // this._applyMap.clear();
          // this._blackMap.clear();
          // this._recommendMap.clear();
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new FriendData();
          }

          return this._instance;
        }
        /**
         * 好友map
         */


        get friendMap() {
          if (!this._friendMap) {
            this._friendMap = new Map();
          }

          return this._friendMap;
        }
        /**
         * 申请添加好友map
         */


        get applyMap() {
          if (!this._applyMap) {
            this._applyMap = new Map();
          }

          return this._applyMap;
        }
        /**
         * 黑名单
         */


        get blackMap() {
          if (!this._blackMap) {
            this._blackMap = new Map();
          }

          return this._blackMap;
        }
        /**
         * 推荐好友map
         */


        get recommendMap() {
          if (!this._recommendMap) {
            this._recommendMap = new Map();
          }

          return this._recommendMap;
        }
        /**
         * 待移除的好友数据
         */


        get removeFiendMsg() {
          if (!this._removeFiendMsg) {
            this._removeFiendMsg = [];
          }

          return this._removeFiendMsg;
        }
        /**
         * 待处理的更新用户离线时间消息
         */


        get friendOnlineTimeMsg() {
          if (!this._friendOnlineTimeMsg) {
            this._friendOnlineTimeMsg = [];
          }

          return this._friendOnlineTimeMsg;
        }
        /**
         * 待处理的更新用户战力消息
         */


        get friendPowerScoreMsg() {
          if (!this._friendPowerScoreMsg) {
            this._friendPowerScoreMsg = [];
          }

          return this._friendPowerScoreMsg;
        }

        initFrendData(msg) {
          if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.FriendList) {
            this.isInitMyFirend = true;
            let list = msg.list;

            for (let key in list) {
              let info = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
                error: Error()
              }), SimpleRoleInfo) : SimpleRoleInfo)();
              info.merge(list[key]);
              this.friendMap.set(info.id, info);
              info.type = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).FriendListType.FriendList;
              this.setGiftState(info);
            }

            this.handleCacheData(this.friendMap, msg.type);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).FriendValueReceive);
          } else if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.BlackList) {
            this.isInitBlack = true;
            let list = msg.list;

            for (let key in list) {
              let info = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
                error: Error()
              }), SimpleRoleInfo) : SimpleRoleInfo)();
              info.merge(list[key]);
              this.blackMap.set(info.id, info);
              info.type = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).FriendListType.BlackList;
            }

            this.handleCacheData(this.blackMap, msg.type);
          } else if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.ApplyList) {
            this.isInitApply = true;
            let list = msg.list;

            for (let key in list) {
              let info = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
                error: Error()
              }), SimpleRoleInfo) : SimpleRoleInfo)();
              info.merge(list[key]);
              this.applyMap.set(info.id, info);
              info.type = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).FriendListType.ApplyList;
            }

            this.handleCacheData(this.applyMap, msg.type);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).FriendApply);
          }
        }

        initRecommendFriendData(list) {
          this.recommendMap.clear();

          for (let key in list) {
            let info = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
              error: Error()
            }), SimpleRoleInfo) : SimpleRoleInfo)();
            info.merge(list[key]);
            this.recommendMap.set(info.id, info);
          }

          this.isInitRecommend = true;
        }

        addFriendInfo(msg) {
          if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.FriendList) {
            let info = this.friendMap.get(msg.role.id);

            if (info) {
              info.merge(msg.role);
            } else {
              info = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
                error: Error()
              }), SimpleRoleInfo) : SimpleRoleInfo)();
              info.merge(msg.role);
              this.friendMap.set(info.id, info);
              this.setGiftState(info);
            }

            info.type = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FriendListType.FriendList;
          } else if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.BlackList) {
            let info = this.blackMap.get(msg.role.id);

            if (info) {
              info.merge(msg.role);
            } else {
              info = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
                error: Error()
              }), SimpleRoleInfo) : SimpleRoleInfo)();
              info.merge(msg.role);
              this.blackMap.set(info.id, info);
            }

            info.type = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FriendListType.BlackList;
          } else if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.ApplyList) {
            let info = this.applyMap.get(msg.role.id);

            if (info) {
              info.merge(msg.role);
            } else {
              info = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
                error: Error()
              }), SimpleRoleInfo) : SimpleRoleInfo)();
              info.merge(msg.role);
              this.applyMap.set(info.id, info);
            }

            info.type = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FriendListType.ApplyList;
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).FriendApply);
          }

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).FriendValueReceive);
        }

        setGiftState(info) {
          if (this.giftListMsg) {
            let index = this.giftListMsg.givingList.indexOf(info.id);
            info.isGiveGift = index >= 0;
            let idx = this.giftListMsg.recvList.indexOf(info.id);

            if (idx >= 0) {
              info.receiveGiftState = 2;
            } else {
              idx = this.giftListMsg.giftList.indexOf(info.id);

              if (idx >= 0) {
                info.receiveGiftState = 1;
              } else {
                info.receiveGiftState = 0;
              }
            }
          }
        }
        /**
         * 赠与礼物成功
         */


        givingGiftSucc(roleIds) {
          if (this.giftListMsg) {
            for (let key in roleIds) {
              let idx = this.giftListMsg.givingList.indexOf(roleIds[key]);

              if (idx < 0) {
                this.giftListMsg.givingList.push(roleIds[key]);
              }

              let info = this.friendMap.get(roleIds[key]);

              if (info) {
                info.isGiveGift = true;
              }
            }
          }
        }
        /**
         * 领取礼物成功
         * @param roleIds 
         */


        receiveGiftSucc(roleIds) {
          if (this.giftListMsg) {
            for (let key in roleIds) {
              if (!roleIds[key].error || roleIds[key].error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).CommonErrorCode.Succeed) {
                let idx = this.giftListMsg.recvList.indexOf(roleIds[key].roleId);

                if (idx < 0) {
                  this.giftListMsg.recvList.push(roleIds[key].roleId);
                }

                let info = this.friendMap.get(roleIds[key].roleId);

                if (info) {
                  info.receiveGiftState = 2;
                }

                let index = this.giftListMsg.giftList.indexOf(roleIds[key].roleId);

                if (index >= 0) {
                  this.giftListMsg.giftList.splice(index, 1);
                }
              } else {
                log("领取礼物错误=====", roleIds[key]);
              }
            }
          }
        }
        /**
         * 收到好友送礼物
         */


        giftPush(roleId) {
          if (this.giftListMsg) {
            let index = this.giftListMsg.giftList.indexOf(roleId);

            if (index < 0) {
              this.giftListMsg.giftList.push(roleId);
            }

            let info = this.friendMap.get(roleId);

            if (info) {
              info.receiveGiftState = 1;
            }
          }
        }
        /**
         * 处理前端提前收到的数据消息
         */


        handleCacheData(map, type) {
          if (this.removeFiendMsg.length > 0) {
            let remove = [];

            for (let key in this.removeFiendMsg) {
              if (this.removeFiendMsg[key].type == type) {
                let roleId = this.removeFiendMsg[key].roleId;

                if (map.has(roleId)) {
                  map.delete(roleId);
                  remove.push(this.removeFiendMsg[key]);
                }
              }
            }

            if (remove.length > 0) {
              for (let key in remove) {
                let index = this.removeFiendMsg.indexOf(remove[key]);

                if (index >= 0) {
                  this.removeFiendMsg.splice(index, 1);
                }
              }
            }

            remove = null;
          }

          if (this.friendOnlineTimeMsg.length > 0) {
            let remove = [];

            for (let key in this.friendOnlineTimeMsg) {
              let roleId = this.friendOnlineTimeMsg[key].roleId;
              let info = map.get(roleId);

              if (info) {
                info.offlineTime = this.friendOnlineTimeMsg[key].offlineTime;
                remove.push(this.friendOnlineTimeMsg[key]);
              }
            }

            if (remove.length > 0) {
              for (let key in remove) {
                let index = this.friendOnlineTimeMsg.indexOf(remove[key]);

                if (index >= 0) {
                  this.friendOnlineTimeMsg.splice(index, 1);
                }
              }
            }

            remove = null;
          }

          if (this.friendPowerScoreMsg.length > 0) {
            let remove = [];

            for (let key in this.friendPowerScoreMsg) {
              let roleId = this.friendPowerScoreMsg[key].roleId;
              let info = map.get(roleId);

              if (info) {
                info.powerScore = this.friendPowerScoreMsg[key].powerScore;
                remove.push(this.friendPowerScoreMsg[key]);
              }
            }

            if (remove.length > 0) {
              for (let key in remove) {
                let index = this.friendPowerScoreMsg.indexOf(remove[key]);

                if (index >= 0) {
                  this.friendPowerScoreMsg.splice(index, 1);
                }
              }
            }

            remove = null;
          }
        }

        removeFiendInfo(msg) {
          if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.FriendList) {
            if (this.friendMap.has(msg.roleId)) {
              this.friendMap.delete(msg.roleId);
            } else {
              this.removeFiendMsg.push(msg);
            }
          } else if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.BlackList) {
            if (this.blackMap.has(msg.roleId)) {
              this.blackMap.delete(msg.roleId);
            } else {
              this.removeFiendMsg.push(msg);
            }
          } else if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.ApplyList) {
            if (this.applyMap.has(msg.roleId)) {
              this.applyMap.delete(msg.roleId);
            } else {
              this.removeFiendMsg.push(msg);
            }

            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).FriendApply);
          }

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).FriendValueReceive);
        }

        updateFriendOnlineTime(msg) {
          let info = this.getSimpleRoleInfoByRoleID(msg.roleId);

          if (info) {
            info.offlineTime = msg.offlineTime;
          } else {
            this.friendOnlineTimeMsg.push(msg);
          }
        }

        updatFriendPowerScore(msg) {
          let info = this.getSimpleRoleInfoByRoleID(msg.roleId);

          if (info) {
            info.powerScore = msg.powerScore;
          } else {
            this.friendPowerScoreMsg.push(msg);
          }
        }

        getSimpleRoleInfoByRoleID(roleId) {
          if (this.friendMap.has(roleId)) {
            return this.friendMap.get(roleId);
          }

          if (this.blackMap.has(roleId)) {
            return this.blackMap.get(roleId);
          }

          if (this.applyMap.has(roleId)) {
            return this.applyMap.get(roleId);
          }

          return null;
        }

        getRecommendInfos() {
          return Array.from(this.recommendMap.values());
        }

        getMyFreindInfos() {
          return Array.from(this.friendMap.values());
        }

        getApplyInfos() {
          return Array.from(this.applyMap.values());
        }

        getBlackInfos() {
          return Array.from(this.blackMap.values());
        }

        getMyFriendNum() {
          return this.friendMap.size;
        }

        getReceiveGiftNum() {
          if (this.giftListMsg) {
            return this.giftListMsg.recvList.length;
          }

          return 0;
        }

        getGiveGiftNum() {
          if (this.giftListMsg) {
            return this.giftListMsg.givingList.length;
          }

          return 0;
        }

        getNotReceiveGiftNum() {
          if (this.giftListMsg) {
            if (this.giftListMsg.recvList.length >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().GiftRecvMaxCount) {
              return 0;
            }

            let myFreind = this.getMyFreindInfos();

            if (myFreind.length > 0) {
              let len = 0;

              for (let key in this.giftListMsg.giftList) {
                let id = this.giftListMsg.giftList[key];

                if (myFreind.findIndex(a => a.id == id) >= 0) {
                  len++;
                }
              }

              return len;
            } else {
              return 0;
            }
          }

          return 0;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=95c21d9686ae089ded8f84d2fb25d266408d4fa1.js.map
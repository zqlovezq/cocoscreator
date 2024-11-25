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
            var list = msg.list;

            for (var key in list) {
              var info = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
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
            var _list = msg.list;

            for (var _key in _list) {
              var _info = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
                error: Error()
              }), SimpleRoleInfo) : SimpleRoleInfo)();

              _info.merge(_list[_key]);

              this.blackMap.set(_info.id, _info);
              _info.type = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).FriendListType.BlackList;
            }

            this.handleCacheData(this.blackMap, msg.type);
          } else if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.ApplyList) {
            this.isInitApply = true;
            var _list2 = msg.list;

            for (var _key2 in _list2) {
              var _info2 = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
                error: Error()
              }), SimpleRoleInfo) : SimpleRoleInfo)();

              _info2.merge(_list2[_key2]);

              this.applyMap.set(_info2.id, _info2);
              _info2.type = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
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

          for (var key in list) {
            var info = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
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
            var info = this.friendMap.get(msg.role.id);

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
            var _info3 = this.blackMap.get(msg.role.id);

            if (_info3) {
              _info3.merge(msg.role);
            } else {
              _info3 = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
                error: Error()
              }), SimpleRoleInfo) : SimpleRoleInfo)();

              _info3.merge(msg.role);

              this.blackMap.set(_info3.id, _info3);
            }

            _info3.type = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FriendListType.BlackList;
          } else if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.ApplyList) {
            var _info4 = this.applyMap.get(msg.role.id);

            if (_info4) {
              _info4.merge(msg.role);
            } else {
              _info4 = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
                error: Error()
              }), SimpleRoleInfo) : SimpleRoleInfo)();

              _info4.merge(msg.role);

              this.applyMap.set(_info4.id, _info4);
            }

            _info4.type = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
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
            var index = this.giftListMsg.givingList.indexOf(info.id);
            info.isGiveGift = index >= 0;
            var idx = this.giftListMsg.recvList.indexOf(info.id);

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
            for (var key in roleIds) {
              var idx = this.giftListMsg.givingList.indexOf(roleIds[key]);

              if (idx < 0) {
                this.giftListMsg.givingList.push(roleIds[key]);
              }

              var info = this.friendMap.get(roleIds[key]);

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
            for (var key in roleIds) {
              if (!roleIds[key].error || roleIds[key].error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).CommonErrorCode.Succeed) {
                var idx = this.giftListMsg.recvList.indexOf(roleIds[key].roleId);

                if (idx < 0) {
                  this.giftListMsg.recvList.push(roleIds[key].roleId);
                }

                var info = this.friendMap.get(roleIds[key].roleId);

                if (info) {
                  info.receiveGiftState = 2;
                }

                var index = this.giftListMsg.giftList.indexOf(roleIds[key].roleId);

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
            var index = this.giftListMsg.giftList.indexOf(roleId);

            if (index < 0) {
              this.giftListMsg.giftList.push(roleId);
            }

            var info = this.friendMap.get(roleId);

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
            var remove = [];

            for (var key in this.removeFiendMsg) {
              if (this.removeFiendMsg[key].type == type) {
                var roleId = this.removeFiendMsg[key].roleId;

                if (map.has(roleId)) {
                  map.delete(roleId);
                  remove.push(this.removeFiendMsg[key]);
                }
              }
            }

            if (remove.length > 0) {
              for (var _key3 in remove) {
                var index = this.removeFiendMsg.indexOf(remove[_key3]);

                if (index >= 0) {
                  this.removeFiendMsg.splice(index, 1);
                }
              }
            }

            remove = null;
          }

          if (this.friendOnlineTimeMsg.length > 0) {
            var _remove = [];

            for (var _key4 in this.friendOnlineTimeMsg) {
              var _roleId = this.friendOnlineTimeMsg[_key4].roleId;
              var info = map.get(_roleId);

              if (info) {
                info.offlineTime = this.friendOnlineTimeMsg[_key4].offlineTime;

                _remove.push(this.friendOnlineTimeMsg[_key4]);
              }
            }

            if (_remove.length > 0) {
              for (var _key5 in _remove) {
                var _index = this.friendOnlineTimeMsg.indexOf(_remove[_key5]);

                if (_index >= 0) {
                  this.friendOnlineTimeMsg.splice(_index, 1);
                }
              }
            }

            _remove = null;
          }

          if (this.friendPowerScoreMsg.length > 0) {
            var _remove2 = [];

            for (var _key6 in this.friendPowerScoreMsg) {
              var _roleId2 = this.friendPowerScoreMsg[_key6].roleId;

              var _info5 = map.get(_roleId2);

              if (_info5) {
                _info5.powerScore = this.friendPowerScoreMsg[_key6].powerScore;

                _remove2.push(this.friendPowerScoreMsg[_key6]);
              }
            }

            if (_remove2.length > 0) {
              for (var _key7 in _remove2) {
                var _index2 = this.friendPowerScoreMsg.indexOf(_remove2[_key7]);

                if (_index2 >= 0) {
                  this.friendPowerScoreMsg.splice(_index2, 1);
                }
              }
            }

            _remove2 = null;
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
          var info = this.getSimpleRoleInfoByRoleID(msg.roleId);

          if (info) {
            info.offlineTime = msg.offlineTime;
          } else {
            this.friendOnlineTimeMsg.push(msg);
          }
        }

        updatFriendPowerScore(msg) {
          var info = this.getSimpleRoleInfoByRoleID(msg.roleId);

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
          var _this = this;

          if (this.giftListMsg) {
            if (this.giftListMsg.recvList.length >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().GiftRecvMaxCount) {
              return 0;
            }

            var myFreind = this.getMyFreindInfos();

            if (myFreind.length > 0) {
              var len = 0;

              var _loop = function _loop() {
                var id = _this.giftListMsg.giftList[key];

                if (myFreind.findIndex(a => a.id == id) >= 0) {
                  len++;
                }
              };

              for (var key in this.giftListMsg.giftList) {
                _loop();
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
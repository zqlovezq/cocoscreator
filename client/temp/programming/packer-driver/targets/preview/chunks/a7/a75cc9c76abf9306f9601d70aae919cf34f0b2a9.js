System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, BattleMainDataControl, Net, HeroData, LoginData, FightData, getPassDaysByZero, RoleData, _crd, ccclass, property;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "../home/battle/BattleMainDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../hero/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginData(extras) {
    _reporterNs.report("LoginData", "../login/LoginData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../fight/data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPassDaysByZero(extras) {
    _reporterNs.report("getPassDaysByZero", "../../utils/GameUtil", _context.meta, extras);
  }

  _export("RoleData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_2) {
      BattleMainDataControl = _unresolved_2.BattleMainDataControl;
    }, function (_unresolved_3) {
      Net = _unresolved_3.Net;
    }, function (_unresolved_4) {
      HeroData = _unresolved_4.HeroData;
    }, function (_unresolved_5) {
      LoginData = _unresolved_5.LoginData;
    }, function (_unresolved_6) {
      FightData = _unresolved_6.FightData;
    }, function (_unresolved_7) {
      getPassDaysByZero = _unresolved_7.getPassDaysByZero;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8c43l2CchJX5fvbGPWWXMk", "RoleData", undefined);

      __checkObsolete__(['Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RoleData", RoleData = class RoleData extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).Role {
        constructor() {
          super(...arguments);
          this._staminaInfo = void 0;

          /**
           * 特权加成
           */
          this._privilegeMap = void 0;

          /**  
           * 等级提升奖励
           */
          this._levelUpAwardMap = void 0;
          this.m_clientToServerTimeOffset = 0;
          this._guildRequests = [];
          this._gold = 0;
          this._diamond = 0;
          this._capacityLevel = 0;
          this._oldLevel = 0;
          this._curClearStageId = 0;
          this._serverTimer = 0;
          this.setTimeoutId = -1;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new RoleData();
          }

          return this._instance;
        }

        setData(role) {
          for (var key in role) {
            var v = role[key];
            this[key] = role[key];
          }

          this.diamond = this.gold = 0;
        }

        purge() {}

        get oldLevel() {
          return this._oldLevel;
        }

        set oldLevel(level) {
          this._oldLevel = level;
        }

        get curClearStageId() {
          return this._curClearStageId;
        }

        set curClearStageId(stageId) {
          this._curClearStageId = stageId;
        }
        /** 金币 */


        get gold() {
          return this._gold;
        }

        set gold(v) {
          this._gold = v;
        }
        /** 钻石 */


        get diamond() {
          return this._diamond;
        }

        set diamond(v) {
          this._diamond = v;
        }
        /** 自己的公会申请列表 */


        get guildRequests() {
          return this._guildRequests;
        }

        set guildRequests(data) {
          this._guildRequests = data;
        }
        /**服务器时间 目前没有 先暂时获取本地时间 */


        get serverTimer() {
          return this._serverTimer; //  return new Date().getTime();
        }
        /**
         * 体力相关信息
         */


        get staminaInfo() {
          return this._staminaInfo;
        }

        set staminaInfo(msg) {
          this._staminaInfo = msg;
        }

        get capacityLevel() {
          return this._capacityLevel;
        }

        set capacityLevel(v) {
          this._capacityLevel = v;
        }
        /**
         * 增加特权
         */


        addPrivilege(maps) {
          if (!this._privilegeMap) {
            this._privilegeMap = new Map();
          }

          for (var key in maps) {
            this._privilegeMap.set(Number(key), maps[key]);
          }
        }
        /**
         * 获得特权加成
         * @param type 
         * @returns 
         */


        getPrivilegeValue(type) {
          if (this._privilegeMap) {
            if (this._privilegeMap.has(type)) {
              return this._privilegeMap.get(type);
            } else {
              return 0;
            }
          }

          return 0;
        }
        /**
         * 增加奖励
         */


        addLevelUpAward(awards) {
          if (!this._levelUpAwardMap) {
            this._levelUpAwardMap = new Map();
          }

          for (var i = 0; i < awards.length; i++) {
            var award = awards[i];

            if (this._levelUpAwardMap.has(award.itemId)) {
              this._levelUpAwardMap.set(award.itemId, Number(award.num) + this._levelUpAwardMap.get(award.itemId));
            } else {
              this._levelUpAwardMap.set(award.itemId, Number(award.num));
            }
          }
        }
        /**
         * 获取升级奖励
         */


        getLevelUpAward() {
          if (this._levelUpAwardMap.size > 0) {
            return this._levelUpAwardMap;
          }

          return null;
        }
        /* 兼容一下引导到多少步了 */


        setGuideStep() {
          // // 如果基因点过则引导结束
          if (this.IsGuideFinished()) {
            return;
          }

          if (Number(RoleData.ins.clientData.guideTrunk) >= 500) {
            return;
          }

          if (this.IsInTeam()) {
            this.setClientData("guideTrunk", String(500));
          } else {
            if (this.IsGotNewHero()) {
              this.setClientData("guideTrunk", String(400));
            } else {
              if ((_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
                error: Error()
              }), BattleMainDataControl) : BattleMainDataControl).ins.getStageClearIds().length >= 1) {
                this.setClientData("guideTrunk", String(300));
              } else {
                if (this.IsLevelUp()) {
                  this.setClientData("guideTrunk", String(200));
                } else {
                  var guideTrunk = Number(RoleData.ins.clientData.guideTrunk);

                  if (!guideTrunk && !isNaN(guideTrunk)) {
                    this.setClientData("guideTrunk", String(100));
                  }
                }
              }
            }
          }
        } // 判断是否领取法师鸡


        IsGotNewHero() {
          var heroStar = 3;

          for (var i = 0; i < this.heroBag.heroes.length; i++) {
            var hero = this.heroBag.heroes[i];

            if (hero.star > heroStar) {
              heroStar = hero.star;
            }
          }

          return heroStar > 3;
        } // 判断是否升级过


        IsLevelUp() {
          var level = 1;

          for (var i = 0; i < this.heroBag.teamSlots.length; i++) {
            var slot = this.heroBag.teamSlots[i];

            if (slot.level > level) {
              level = slot.level;
            }
          }

          return level > 1;
        } // 判断是否有4星以上的英雄上阵


        IsInTeam() {
          var star = 3;

          for (var i = 0; i < this.heroBag.teamSlots.length; i++) {
            var slot = this.heroBag.teamSlots[i];
            var _star = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(slot.heroId).star;

            if (_star > star) {
              star = _star;
            }
          }

          return star > 3;
        }
        /* 引导是否结束 */


        IsGuideFinished() {
          if (RoleData.ins.clientData.guideTrunk && Number(RoleData.ins.clientData.guideTrunk)) {
            return Number(RoleData.ins.clientData.guideTrunk) >= 500;
          } else {
            if ((_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
              error: Error()
            }), BattleMainDataControl) : BattleMainDataControl).ins.getStageClearIds().length === 0) {
              if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.stageId) {
                if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                  error: Error()
                }), FightData) : FightData).ins.stageId === 1) {
                  if (Number(RoleData.ins.clientData.guideTrunk) !== 0) {
                    this.setClientData("guideTrunk", String(0));
                  }

                  return false;
                } else if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                  error: Error()
                }), FightData) : FightData).ins.stageId === 101) {
                  return false;
                } else {
                  return true;
                }
              } else {
                return false;
              }
            } else {
              return false;
            }
          }
        } // 设置客户端数据


        setClientData(key, value) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_SetClientDataReq();
          msg.key = key;
          msg.data = value;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetClientDataReq, msg);
          RoleData.ins.clientData[key] = value;
        }

        sdkRole() {
          var t_obj = {};
          t_obj.diamond = RoleData.ins.diamond;
          t_obj.gold = RoleData.ins.gold;
          t_obj.roleID = RoleData.ins.id;
          t_obj.roleName = RoleData.ins.name;
          t_obj.roleLevel = RoleData.ins.level;
          t_obj.vipLevel = RoleData.ins.vipLevel;
          t_obj.serverID = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.default_area; //sdk需要是逻辑服id

          t_obj.serverName = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.default_area_name; //sdk需要是逻辑服名字

          t_obj.createRoleTime = RoleData.ins.createTime;
          t_obj.levelUpTime = RoleData.ins.getServerUtcTime();
          t_obj.partyName = "无";
          return t_obj;
        }
        /**获取创角天数 */


        getCreateTimeDay() {
          var t_dayNum = Math.floor((_crd && getPassDaysByZero === void 0 ? (_reportPossibleCrUseOfgetPassDaysByZero({
            error: Error()
          }), getPassDaysByZero) : getPassDaysByZero)(this.createTime) + 1);
          return t_dayNum;
        }

        initServerTimer(timer) {
          if (this.setTimeoutId > -1) {
            clearTimeout(this.setTimeoutId);
          }

          this._serverTimer = timer;
          this.getClientToServerTimeOffset();
          this.setTimeoutId = setTimeout(() => {
            console.log("cocos timer", this._serverTimer);
            this._serverTimer++;
          }, 1000);
        }

        getClientToServerTimeOffset() {
          var newOffset = this._serverTimer - this.getClientUtcTime();

          if (0 == this.m_clientToServerTimeOffset) {
            this.m_clientToServerTimeOffset = newOffset;
          } else {
            // 偏离越大，说明网络延迟越小
            this.m_clientToServerTimeOffset = this.m_clientToServerTimeOffset > newOffset ? this.m_clientToServerTimeOffset : newOffset;
          }

          return this.m_clientToServerTimeOffset;
        }

        getServerUtcTime() {
          var offsetTime = this.m_clientToServerTimeOffset;
          return this.getClientUtcTime() + offsetTime;
        }

        getClientUtcTime() {
          var date = new Date();
          return Math.round(date.getTime() / 1000);
        } // 获取购买金币历史记录


        getGoldHistory(goldType) {
          for (var i = 0; i < this.buyGoldHistory.length; i++) {
            var info = this.buyGoldHistory[i];

            if (info.type === goldType) {
              return {
                type: goldType,
                count: info.count
              };
            }
          }

          return {
            type: goldType,
            count: 0
          };
        } // 刷新购买金币的数据


        refreshGoldHistory(history) {
          if (this.buyGoldHistory.length === 0) {
            // 初始化buyGoldHistrory
            this.buyGoldHistory = [{
              type: 0,
              count: 0
            }, {
              type: 1,
              count: 0
            }, {
              type: 2,
              count: 0
            }];
          }

          for (var i = 0; i < this.buyGoldHistory.length; i++) {
            var info = this.buyGoldHistory[i];

            if (info.type === history.type) {
              this.buyGoldHistory[i] = history;
            }
          }
        }

      });

      RoleData._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a75cc9c76abf9306f9601d70aae919cf34f0b2a9.js.map
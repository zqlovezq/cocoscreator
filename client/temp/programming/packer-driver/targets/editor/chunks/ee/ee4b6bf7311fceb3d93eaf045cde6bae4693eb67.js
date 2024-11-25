System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, proto, AssociationControl, tab, RoleData, TaskData, ItemData, LangMgr, ShowTips, RedMgr, RedDotType, GuildPermission, _dec, _class, _class2, _crd, ccclass, property, AssociationData;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationControl(extras) {
    _reporterNs.report("AssociationControl", "./AssociationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskData(extras) {
    _reporterNs.report("TaskData", "../task/TaskData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuildPermission(extras) {
    _reporterNs.report("GuildPermission", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      AssociationControl = _unresolved_3.AssociationControl;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      RoleData = _unresolved_5.RoleData;
    }, function (_unresolved_6) {
      TaskData = _unresolved_6.TaskData;
    }, function (_unresolved_7) {
      ItemData = _unresolved_7.ItemData;
    }, function (_unresolved_8) {
      LangMgr = _unresolved_8.LangMgr;
    }, function (_unresolved_9) {
      ShowTips = _unresolved_9.ShowTips;
    }, function (_unresolved_10) {
      RedMgr = _unresolved_10.RedMgr;
    }, function (_unresolved_11) {
      RedDotType = _unresolved_11.RedDotType;
    }, function (_unresolved_12) {
      GuildPermission = _unresolved_12.GuildPermission;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62c3f4jngdIVImLkpPYqmnj", "AssociationData", undefined);
      /*
       * @Date: 2024-08-28 11:16:05
       * @LastEditors: wzq
       * @LastEditTime: 2024-11-01 11:42:41
       */


      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationData", AssociationData = (_dec = ccclass('AssociationDataMgr'), _dec(_class = (_class2 = class AssociationData extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor(...args) {
          super(...args);
          this.AssocitionData = null;
          this.curSelectFlagId = -1;
          this.memberMap = new Map();
          this.guildAttrMap = new Map();
          //帮会属性
          this.guildSkillClass = new Map();
          //帮会属性
          this.guildSkillClassTab = new Map();
          this.bossGuildRank = [];
          //公会排行榜
          this.bossRoleRank = [];
          //公会个人排行榜
          this.memberArr = [];
          this.memberGuildArr = [];
          this.bossRoleMap = new Map();
          this.bossRoleRankMap = new Map();
          this.bossGuildMap = new Map();
          this.bossGuildRankMap = new Map();
          this.simple = null;
          this.taskTabs = [];
          this.materialMap = new Map();
          this._GuildBossMsg = void 0;
          this.roleRankSelfRanking = -1;
          this.guildRankSelfRanking = -1;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new AssociationData();
          }

          return this._instance;
        }
        /* 初始化公会信息 */


        initAssociationData(msg) {
          if (!(_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
            error: Error()
          }), AssociationControl) : AssociationControl).ins.isRegister) {
            (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
              error: Error()
            }), AssociationControl) : AssociationControl).ins.init();
          }

          this.memberMap.clear();
          this.simple = null;
          this.AssocitionData = msg.guild; // 初始化公会基本信息

          if (this.AssocitionData.simple) {
            this.simple = this.AssocitionData.simple;
          } // 初始化公会成员信心并排序


          if (this.memberMap.size === 0) {
            this.setMemberMap();
            this.sortMemberData();
            this.sortMembersByLeader();
          } // 初始化公会任务


          this.initTask(); // 初始化公会属性

          this.initSkill();
        }

        initTask() {
          this.taskTabs = [];

          for (let i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().TaskTable.length; i++) {
            const _tab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().TaskTable[i];

            if (_tab.TaskType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TaskType.TaskType_GuildDailyTask) {
              this.taskTabs.push(_tab);
            }
          }

          if (this.AssocitionData.tasks.length > 0) {
            (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
              error: Error()
            }), TaskData) : TaskData).ins.initGuildTasks();
          }

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Guild_Task);
        }

        initSkill() {
          this.guildSkillClassTab.clear();
          this.guildSkillClass.clear();

          for (let i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildAttrTable.length; i++) {
            const _tab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GuildAttrTable[i];
            const heroClass = _tab.HeroClass;

            if (this.guildSkillClassTab.has(heroClass)) {
              this.guildSkillClassTab.get(heroClass).push(_tab);
            } else {
              this.guildSkillClassTab.set(heroClass, [_tab]);
            }
          }

          for (let k = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Assassin; k <= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Warrior; k++) {
            this.guildSkillClass.set(k, 0);
          }

          if (this.AssocitionData.skillLevelMap) {
            const maps = this.AssocitionData.skillLevelMap;

            for (let key in maps) {
              this.guildSkillClass.set(Number(key), maps[key]);
            }
          }

          this.setGuildAttr();
        }

        initRank(msg) {
          this.bossRoleRank = msg.roleRank;
          this.bossGuildRank = [];

          for (let j = 0; j < msg.guildRank.length; j++) {
            const guildRankData = msg.guildRank[j];

            if (guildRankData && guildRankData.guild && guildRankData.guild.members.length > 0) {
              this.bossGuildRank.push(guildRankData);
            }
          }

          this.roleRankSelfRanking = msg.roleRankSelfRanking;
          this.guildRankSelfRanking = msg.guildRankSelfRanking;
          this.bossRoleMap.clear();
          this.bossRoleRankMap.clear();
          this.bossGuildMap.clear();
          this.bossGuildRankMap.clear();

          for (let i = 0; i < this.bossRoleRank.length; i++) {
            if (this.bossRoleRank[i].simple) {
              this.bossRoleMap.set(this.bossRoleRank[i].simple.id, this.bossRoleRank[i]);
              this.bossRoleRankMap.set(this.bossRoleRank[i].simple.id, i + 1);
            }
          }

          for (let k = 0; k < this.bossGuildRank.length; k++) {
            if (this.bossGuildRank[k].guild.simple) {
              this.bossGuildMap.set(this.bossGuildRank[k].guild.simple.id, this.bossGuildRank[k]);
              this.bossGuildRankMap.set(this.bossGuildRank[k].guild.simple.id, k + 1);
            }
          }
        } // 获取roleRankSelfRanking


        getRoleRankSelfRanking() {
          return this.roleRankSelfRanking + 1;
        } // guildRankSelfRanking


        getGuildRankSelfRanking() {
          return this.guildRankSelfRanking;
        } // 获取公会排行


        getGuildRank() {
          return this.bossGuildRank;
        } // 获取个人排行数据


        getRoleRank() {
          return this.bossRoleRank;
        }

        refreshSelfRoleRankScore(score) {
          const slefRoleRank = this.bossRoleMap.get((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.id);
          slefRoleRank.score += score;
        } // 获取个人的排行榜数据


        getSelfRoleRankInfo() {
          const selfRoleRank = this.bossRoleMap.get((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.id);
          return selfRoleRank;
        } // 获取个人的排行榜排名


        getSelfRoleRankCount() {
          var _this$bossRoleRankMap;

          return (_this$bossRoleRankMap = this.bossRoleRankMap.get((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.id)) != null ? _this$bossRoleRankMap : 0;
        } // 获取自己公会排行榜数据


        getSelfGuildRankInfo() {
          const selfGuildRank = this.bossGuildMap.get(AssociationData.ins.getAssocitionSimpleInfo().id);
          return selfGuildRank;
        } // 获取自己的公会排名


        getSelfGuildRankCount() {
          var _this$bossGuildRankMa;

          return (_this$bossGuildRankMa = this.bossGuildRankMap.get(AssociationData.ins.getAssocitionSimpleInfo().id)) != null ? _this$bossGuildRankMa : 0;
        }

        setMemberMap() {
          this.memberMap.clear();

          if (this.AssocitionData.members.length > 0) {
            for (let i = 0; i < this.AssocitionData.members.length; i++) {
              const member = this.AssocitionData.members[i];
              this.memberMap.set(member.roleId, member);
            }
          }
        }
        /* 获取当前是否有公会 */


        getInGuild() {
          if (this.simple) {
            return true;
          }

          return false;
        }
        /* 获取公会基本信息 */


        getAssocitionSimpleInfo() {
          if (this.simple) {
            return this.simple;
          }

          return null;
        }
        /* 获取公会总信息 */


        getAssocitionInfo() {
          if (this.AssocitionData) {
            return this.AssocitionData;
          }

          return null;
        }
        /* 获取当前的公会的人数跟总人数 */


        getGuildMembersCount() {
          const lvData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildLevelTableById.getValue(this.simple.level);
          const maxPersonCount = lvData.MaxCount;
          return {
            memberCount: this.memberArr.length,
            totalCount: maxPersonCount
          };
        }
        /* 获取当前职位的公会人数 */


        getJobInMemberCount(job) {
          let count = 0;

          for (let i = 0; i < this.memberArr.length; i++) {
            const member = this.memberArr[i];

            if (member.job === job) {
              count++;
            }
          }

          return count;
        }
        /* 刷新公会数据 */


        refreshGuildData(msg) {
          this.AssocitionData = msg.guild;
        } // 设置公会公告


        refreshGuildNotice(notice) {
          if (this.simple) {
            this.simple.notice = notice;
          }
        } // 设置公会公告


        refreshGuildInfo(name, flagid) {
          if (this.simple) {
            this.simple.name = name;
            this.simple.flagId = flagid;
          }
        }
        /* 刷新公会成员信息更改职位、删除成员 */


        refreshMemberInfo(roleId, job, isDelete) {
          if (isDelete) {
            this.memberMap.delete(roleId);
            this.sortMemberData();
            this.sortMembersByLeader();
            return;
          }

          const memberData = this.memberMap.get(roleId);

          if (job) {
            memberData.job = job;

            if (job === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).GuildPosition.GuildPosition_President) {
              const leaderData = this.memberMap.get(this.simple.leaderId);
              leaderData.job = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).GuildPosition.GuildPosition_Member; //会长的数据变成普通成员

              this.simple.leaderId = roleId;
              this.simple.leaderName = memberData.name;
            }
          }
        }
        /* 对成员数组并排序 */


        sortMemberData() {
          if (this.simple) {
            this.memberArr = [];
            this.memberMap.forEach((val, key) => {
              this.memberArr.push(val);
            }); // 将数据排序规则 自己--在线--职位

            this.memberArr.sort((guildMember1, guildMember2) => {
              if (guildMember1.roleId === (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.id && guildMember2.roleId !== (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.id) return -1;
              if (guildMember1.roleId !== (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.id && guildMember2.roleId === (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.id) return 1;
              if (this.getMemberOffLineTime(guildMember1) <= 0 && this.getMemberOffLineTime(guildMember2) > 0) return -1;
              if (this.getMemberOffLineTime(guildMember2) > 0 && this.getMemberOffLineTime(guildMember2) <= 0) return 1;
              return guildMember1.job - guildMember2.job;
            }); // if (RoleData.ins.id !== this.simple.leaderId) {
            //     this.memberArr.push(this.memberMap.get(RoleData.ins.id));
            //     this.memberArr.push(this.memberMap.get(this.simple.leaderId));
            // } else {
            //     this.memberArr.push(this.memberMap.get(RoleData.ins.id));
            // }
            // this.memberMap.forEach((val, key) => {
            //     if (key !== RoleData.ins.id && key !== this.simple.leaderId) {
            //         this.memberArr.push(val);
            //     }
            // })
          }
        } // 对members里面的会长必须排第一个


        sortMembersByLeader() {
          if (this.simple) {
            this.memberGuildArr = [];
            this.memberGuildArr.push(this.memberMap.get(this.simple.leaderId));
            this.memberMap.forEach((val, key) => {
              if (key !== this.simple.leaderId) {
                this.memberGuildArr.push(val);
              }
            });
          }
        }

        getGuildMemberArr() {
          return this.memberGuildArr;
        }

        getMemberArr() {
          return this.memberArr;
        }
        /* 获取鸡多多礼包 */


        getBargainGift(Button) {
          for (let i = 0; i < this.AssocitionData.gifts.length; i++) {
            const gift = this.AssocitionData.gifts[i];
            const tabData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GuildGiftTableById.getValue(gift.tabId);
            const serverTime = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getServerUtcTime();

            if (tabData.Button === Button && gift.expireTime - serverTime > 0) {
              return gift;
            }
          }

          return null;
        }
        /* 获取所有的任务tab */


        getAllTasksTab() {
          return this.taskTabs;
        }

        addSkill(heroClass) {
          this.guildSkillClass.set(heroClass, this.guildSkillClass.get(heroClass) + 1);
          this.setGuildAttr();
        }
        /* 重置技能 */


        resetSkill(heroClass) {
          this.guildSkillClass.set(heroClass, 0);
          this.setGuildAttr();
        }
        /* 获取职业技能等级 */


        getSkillLvByClass(heroClass) {
          var _this$guildSkillClass;

          return (_this$guildSkillClass = this.guildSkillClass.get(heroClass)) != null ? _this$guildSkillClass : 0;
        }
        /* 获取帮会所有属性 */


        setGuildAttr() {
          this.guildAttrMap.clear();
          this.guildSkillClass.forEach((value, key) => {
            const tabs = this.guildSkillClassTab.get(key);

            if (!this.guildAttrMap.has(key)) {
              this.guildAttrMap.set(key, new Map());
            }

            for (let i = 0; i < value; i++) {
              const _tab = tabs[i];

              const _map = this.guildAttrMap.get(key);

              for (let k = 0; k < _tab.AttrTypes.length; k++) {
                const type = _tab.AttrTypes[k];
                const val = _tab.AttrValue[k];

                if (_map.has(type)) {
                  _map.set(type, _map.get(type) + val);
                } else {
                  _map.set(type, val);
                }
              }
            }
          });
        }

        getGuildAttr(heroClass) {
          return this.guildAttrMap.get(heroClass);
        }

        getSkillTabsByClass(heroClass) {
          return this.guildSkillClassTab.get(heroClass);
        }

        getCurSkillTabByClass(heroClass) {
          const tabs = this.guildSkillClassTab.get(heroClass);
          const maxLv = tabs[tabs.length - 1].Level;
          const lv = this.getSkillLvByClass(heroClass) + 1 > maxLv ? maxLv : this.getSkillLvByClass(heroClass) + 1;

          for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].Level === lv) {
              return tabs[i];
            }
          }
        } // 判断当前是否材料够升级技能


        isMaterialEnough(heroClass) {
          const tabData = this.getCurSkillTabByClass(heroClass);

          for (let i = 0; i < tabData.CostItemIds.length; i++) {
            const costId = tabData.CostItemIds[i];
            const costCount = tabData.CostItemCount[i];
            const costHaveCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(costId);

            if (costHaveCount < costCount) {
              return {
                itemid: costId,
                isEnough: false
              };
            }
          }

          return {
            itemid: -1,
            isEnough: true
          };
        }

        isSkillLevelMax(heroClass) {
          const tabs = this.guildSkillClassTab.get(heroClass);
          const maxLv = tabs[tabs.length - 1].Level;
          const lv = this.getSkillLvByClass(heroClass) + 1;

          if (lv > maxLv) {
            return true;
          }

          return false;
        } // 获取公会日志


        getGuildLogs() {
          return this.AssocitionData.logs;
        } // 增加申请的公会的请求


        addGuildRequests(guildId) {
          const request = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).JoinGuildRequest();
          request.id = guildId;
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.guildRequests.push(request);
        }

        subGuildRequests(guildId) {
          let index = -1;

          for (let i = 0; i < (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.guildRequests.length; i++) {
            if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.guildRequests[i].id === guildId) {
              index = i;
            }
          }

          if (index >= 0) {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.guildRequests.splice(index, 1);
          }
        } // 判断当前公会是否是申请过的公会


        getGuildIsRequest(guildId) {
          if (this.simple) {
            return true;
          } else {
            for (let i = 0; i < (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.guildRequests.length; i++) {
              if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.guildRequests[i].id === guildId) {
                return true;
              }
            }
          }

          return false;
        } // 获取成员信息


        getMemberData(roleId) {
          const isInGuild = this.getInGuild();
          return this.memberMap.get(roleId);
        } // 获取离线时间


        getMemberOffLineTime(memberData) {
          const serverTime = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime();
          const loginTime = memberData.lastLoginTime;
          const logoutTime = memberData.lastLogoutTime;

          if (logoutTime >= loginTime) {
            return serverTime - logoutTime;
          } else {
            return -1;
          }
        } // 重置技能所获得的资源


        getResetSkillMaterial(heroClass) {
          this.materialMap.clear();
          const lv = this.getSkillLvByClass(heroClass);
          const tabs = this.getSkillTabsByClass(heroClass);

          for (let i = 0; i < tabs.length; i++) {
            const _tab = tabs[i];

            if (_tab.Level <= lv) {
              for (let k = 0; k < _tab.CostItemIds.length; k++) {
                const id = _tab.CostItemIds[k];
                const count = _tab.CostItemCount[k];

                if (this.materialMap.has(id)) {
                  this.materialMap.set(id, this.materialMap.get(id) + count);
                } else {
                  this.materialMap.set(id, count);
                }
              }
            }
          }

          return this.materialMap;
        } // 是否拼多多砍了一刀


        getIsCanBargain(Button) {
          const giftData = this.getBargainGift(Button);

          if (giftData && giftData.bargainRecords) {
            if (giftData.bargainRecords.length === 0) {
              return true;
            } else {
              for (let i = 0; i < giftData.bargainRecords.length; i++) {
                const record = giftData.bargainRecords[i];

                if (record.roleId === (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.id) {
                  return false;
                }
              }

              return true;
            }
          }

          return false;
        } // 拼多多是否已经是最低价


        getIsMinPrice(Button) {
          const giftData = this.getBargainGift(Button);

          if (giftData && giftData.bargainRecords && giftData.bargainRecords.length > 0) {
            const giftTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GuildGiftTableById.getValue(giftData.tabId);
            let totalPrice = giftTab.DiamondPrice;
            const minPrice = giftTab.MinPrice;

            for (let i = 0; i < giftData.bargainRecords.length; i++) {
              const record = giftData.bargainRecords[i];
              totalPrice -= record.bargainNum;
            }

            if (totalPrice <= minPrice) {
              return true;
            }
          }

          return false;
        }

        checkFunctionIsOpen(openFunc) {
          if (openFunc === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).GuildOFName.GuildOFName_None) {
            return true;
          }

          const guildOfTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildOpenFunctionTableByName.getValue(openFunc);
          const guildLevel = this.simple.level;
          return guildLevel >= guildOfTab.Level;
        }

        showFunctionTips(openFunc) {
          let tips = this.getFunctionTips(openFunc);
          (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
            error: Error()
          }), ShowTips) : ShowTips)(tips);
        }

        getFunctionTips(openFunc) {
          const guildOfTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildOpenFunctionTableByName.getValue(openFunc);
          let tips = "";
          tips = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString(guildOfTab.WordKey, [guildOfTab.Level]);
          return tips;
        }

        get GuildBossMsg() {
          return this._GuildBossMsg;
        }

        set GuildBossMsg(msg) {
          this._GuildBossMsg = msg;
        } // 获取鸡多多最后的时间
        // getBargainEndTime(Button:string) {
        //     const giftData: proto.GuildGift = this.getBargainGift(Button);
        //     if (giftData) {
        //         const serverTime = RoleData.ins.getServerUtcTime();
        //         return giftData.expireTime - serverTime;
        //     } else {
        //         return 0;
        //     }
        // }
        // 检查当前玩家是否有权限


        checkRolePromission(permission) {
          const memberData = this.memberMap.get((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.id);

          if (!memberData) {
            return false;
          }

          const positionTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildPositionTableByPosition.getValue(memberData.job);

          if (positionTab) {
            switch (permission) {
              case (_crd && GuildPermission === void 0 ? (_reportPossibleCrUseOfGuildPermission({
                error: Error()
              }), GuildPermission) : GuildPermission).GuildSetting:
                return positionTab.Setting;

              case (_crd && GuildPermission === void 0 ? (_reportPossibleCrUseOfGuildPermission({
                error: Error()
              }), GuildPermission) : GuildPermission).KickOutMember:
                return positionTab.KickOut;

              case (_crd && GuildPermission === void 0 ? (_reportPossibleCrUseOfGuildPermission({
                error: Error()
              }), GuildPermission) : GuildPermission).ProcessApply:
                return positionTab.Proces;

              case (_crd && GuildPermission === void 0 ? (_reportPossibleCrUseOfGuildPermission({
                error: Error()
              }), GuildPermission) : GuildPermission).SetJob:
                return positionTab.Appoint;

              case (_crd && GuildPermission === void 0 ? (_reportPossibleCrUseOfGuildPermission({
                error: Error()
              }), GuildPermission) : GuildPermission).setNotice:
                return positionTab.WriteNotification;

              default:
                return false;
            }
          } else {
            return false;
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ee4b6bf7311fceb3d93eaf045cde6bae4693eb67.js.map
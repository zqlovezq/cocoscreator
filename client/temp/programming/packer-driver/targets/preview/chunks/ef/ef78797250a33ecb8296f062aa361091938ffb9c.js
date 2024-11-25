System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UITransform, Vec3, AbsControl, AbsObjFactory, RoleInfo, FightRootControl, HeroFightInfo, EventMgr, FightEvent, FightData, AbsStateType, tab, FightMacro, _dec, _class, _class2, _crd, ccclass, property, tempPos, clickWorldPos, clickNodePos, isWorldChange, PlayerControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjFactory(extras) {
    _reporterNs.report("AbsObjFactory", "../../AbsObjFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRole(extras) {
    _reporterNs.report("Role", "./Role", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleInfo(extras) {
    _reporterNs.report("RoleInfo", "./RoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../../../../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroFightInfo(extras) {
    _reporterNs.report("HeroFightInfo", "../../../../data/HeroFightInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueInfo(extras) {
    _reporterNs.report("RogueInfo", "../../../../view/rogue/RogueInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../../../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "../../../../power/powerTab/SkillTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../monster/Monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuff(extras) {
    _reporterNs.report("Buff", "../../../buff/Buff", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      AbsObjFactory = _unresolved_3.AbsObjFactory;
    }, function (_unresolved_4) {
      RoleInfo = _unresolved_4.RoleInfo;
    }, function (_unresolved_5) {
      FightRootControl = _unresolved_5.FightRootControl;
    }, function (_unresolved_6) {
      HeroFightInfo = _unresolved_6.HeroFightInfo;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }, function (_unresolved_8) {
      FightEvent = _unresolved_8.FightEvent;
    }, function (_unresolved_9) {
      FightData = _unresolved_9.FightData;
    }, function (_unresolved_10) {
      AbsStateType = _unresolved_10.AbsStateType;
    }, function (_unresolved_11) {
      tab = _unresolved_11.tab;
    }, function (_unresolved_12) {
      FightMacro = _unresolved_12.FightMacro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ba3ddp/vRO6bPTY1z9oEIB", "PlayerControl", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Color', 'Component', 'Input', 'instantiate', 'Label', 'Node', 'Prefab', 'Quat', 'Rect', 'sp', 'Sprite', 'tween', 'UITransform', 'v3', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3(0, 0, 0);
      clickWorldPos = new Vec3(0, 0, 0);
      clickNodePos = new Vec3(0, 0, 0);
      isWorldChange = false;

      _export("PlayerControl", PlayerControl = (_dec = ccclass('PlayerControl'), _dec(_class = (_class2 = class PlayerControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);
          this.roleDataInfos = [];
          this.intoIndex = 0;
          this.roles = [];
          this.roleIds = [];
          this.leaderRole = null;

          /** 是否为自动 */
          this.isAuto = false;

          /** 是否点击种 */
          this._isClicking = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new PlayerControl();
          }

          return this._instance;
        }

        init() {
          this.register();
          this.isAuto = false;
          this.roles.length = 0;
          this.roleDataInfos.length = 0;
          this.leaderRole = null;
          this.intoIndex = 0;
          this._isClicking = false;
          this.roleIds.length = 0;
          console.warn("销毁");
        }

        getHeroById(id) {
          for (var index = 0; index < this.roleDataInfos.length; index++) {
            var v = this.roleDataInfos[index];

            if (v.itemId == id) {
              return v;
            }
          }
        }

        getAllHeros() {
          return this.roleDataInfos;
        }

        getRoles() {
          return this.roles;
        }

        getIntoHeros() {
          var list = [];

          for (var index = 0; index < this.roleDataInfos.length; index++) {
            var v = this.roleDataInfos[index];

            if (v.level > 0) {
              list.push(v);
            }
          }

          list.sort((a, b) => {
            return a.intoIndex - b.intoIndex;
          });
          return list;
        }

        getHeros() {
          var list = [];

          for (var index = 0; index < this.roleDataInfos.length; index++) {
            var v = this.roleDataInfos[index];
            list.push(v);
          }

          console.log(list);
          list.sort((a, b) => {
            if (a.intoIndex != 0 && b.intoIndex != 0) {
              return a.intoIndex - b.intoIndex;
            }

            return a.intoIndex > 0 ? -1 : 1;
          });
          return list;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Start, this.onFight_Start, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Start_Complete, this.onFight_Start_Complete, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Role_Active, this.onRole_Active, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Warning, this.onWarning, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Monster_Dead, this.onFight_Monster_Dead, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).ReviveByItemid, this.onReviveByItemid, this);
        }

        onFight_Start() {
          console.log("Fight_Start-------");

          for (var index = 0; index < (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.fightInfo.heroData.length; index++) {
            var v = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.fightInfo.heroData[index];
            var info = new (_crd && HeroFightInfo === void 0 ? (_reportPossibleCrUseOfHeroFightInfo({
              error: Error()
            }), HeroFightInfo) : HeroFightInfo)();
            info.setServerData(v);
            this.roleDataInfos.push(info);
            this.initRole(info);
          }
        }
        /** 战场技能加到角色身上 */


        fightSkillsToRole() {
          var _this = this;

          var skills = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.skills;

          var _loop = function _loop(index) {
            _this.roles.forEach(e => {
              e.info.addTakeSkill(skills[index]);
            });
          };

          for (var index = 0; index < skills.length; index++) {
            _loop(index);
          }

          var len = this.roles.length;

          for (var i = 0; i < len - 1; i++) {
            for (var j = i + 1; j < len; j++) {
              this.skillMutualExclusion(this.roles[i].info, this.roles[j].info);
            }
          }
        }

        skillMutualExclusion(nowRole, beRole) {
          for (var index = nowRole.takeSkills.length - 1; index >= 0; index--) {
            if (beRole.mutualExclusionBySkill(nowRole.takeSkills[index]) == 1) {
              console.log("aToB,技能互斥，检测者小， 删除");
              nowRole.takeSkills.splice(index, 1);
            }
          }
        }

        onFight_Start_Complete() {
          console.log("onFight_Start_Complete-------"); //全局技能加入到角色技能中

          this.fightSkillsToRole();
          this.roles.forEach(e => {
            e.info.initTriggerMap();
          });

          for (var index = 0; index < this.roles.length; index++) {
            var role = this.roles[index];
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).checkAbsRoleGainBuff, role);
          }
        }

        onRole_Active(rogueInfo) {
          if (rogueInfo.heroItemId) {
            var hero = this.getHeroById(rogueInfo.heroItemId);
            var lastLv = hero.level;
            hero.level = rogueInfo.rogueTab.Level;

            if (lastLv == 0) {
              this.intoIndex += 1;
              hero.intoIndex = this.intoIndex;
              this.roleActive(hero);
              this.roleIds.push(hero.id);
            }

            var role = this.getRole(rogueInfo.heroItemId);
            role.info.onLevelUp(lastLv, hero.level);
          }
        }

        onWarning(warningType) {
          this.roles.forEach(e => {
            if (e.isActive) {
              e.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).Triggertype.Triggertype_warning, {
                warningType: warningType
              });
            }
          });
        }

        onFight_Monster_Dead(absRole) {
          if (absRole.info && absRole.info.isBoss) {
            this.roles.forEach(e => {
              if (e.isActive) {
                e.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).Triggertype.Triggertype_BossDied);
              }
            });
          }
        }

        onReviveByItemid(itemId) {
          var role = this.getRole(itemId);

          if (role) {
            role.onRevive();
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Fight_Initiative_Revive, role);
          }
        }

        getNoCreateHeros() {
          var noCreateHeros = [];

          for (var i = 0; i < this.roleDataInfos.length; i++) {
            if (this.roleDataInfos[i].level == 0) {
              noCreateHeros.push(this.roleDataInfos[i]);
            }
          }

          return noCreateHeros;
        }

        setAudo(bo) {
          this.isAuto = bo;

          if (this.getLeader() == null) {
            return;
          }

          this.getLeader().info.setAudo(bo);
        }

        getNextPosIndex(roleInfo) {
          if (roleInfo.isHeroClassWarrior()) {
            return 5; //展示固定5
          } else {
            var total = 0;

            for (var i = 0; i < this.roles.length; i++) {
              if (this.roles[i].isActive && !this.roles[i].info.isHeroClassWarrior()) {
                total++;
              }
            }

            return total + 1;
          }
        }

        isHeroClassSame(roleInfo) {
          for (var i = 0; i < this.roles.length; i++) {
            if (this.roles[i].info.configTab.Class == roleInfo.configTab.Class) {
              return true;
            }
          }

          return false;
        }

        initRole(heroInfo) {
          var roleInfo = new (_crd && RoleInfo === void 0 ? (_reportPossibleCrUseOfRoleInfo({
            error: Error()
          }), RoleInfo) : RoleInfo)();
          roleInfo.setHeroInfo(heroInfo);

          if (this.isHeroClassSame(roleInfo)) {
            console.error("createRole 已有相同职业", roleInfo.configId);
            return;
          }

          roleInfo.init();
          var role = (_crd && AbsObjFactory === void 0 ? (_reportPossibleCrUseOfAbsObjFactory({
            error: Error()
          }), AbsObjFactory) : AbsObjFactory).getRole(roleInfo);
          this.addRole(role);
          return role;
        }

        getRoleActiveLen() {
          var total = 0;

          for (var index = 0; index < this.roles.length; index++) {
            var role = this.roles[index];

            if (role.isActive) {
              total++;
            }
          }

          return total;
        }

        roleActive(heroInfo) {
          var role = this.getRole(heroInfo.itemId);
          var roleInfo = role.info;

          if (this.getRoleActiveLen() == 0) {
            roleInfo.isLeader = true;
            roleInfo.setAudo(this.isAuto);
          } else {
            roleInfo.setAudo(true);
          }

          roleInfo.posIndex = this.getNextPosIndex(roleInfo);
          role.roleHead = (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.getUIView().createRoleHead(roleInfo);
          role.barItem = (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.getUIView().createBarItem(roleInfo);
          role.barItem.setAttrData(roleInfo.attrData);
          role.setPosition((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.getRootView().getRolePosByIndex(roleInfo.posIndex));
          role.avatar.updatePause(false);
          role.isActive = true;

          if (roleInfo.posIndex == (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).RolePosType.five) {
            //添加战士额外技能
            var skill = roleInfo.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_SkillTable, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().FrontSkill);
            roleInfo.addTakeSkill(skill, true);
          }

          if (roleInfo.isLeader) {
            this.leaderRole = roleInfo.abs;
            role.avatarShadow.avatar.getSprite().setTexture("textrue/fight/shadow_captain"); //添加队长额外技能

            var _skill = roleInfo.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_SkillTable, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().CaptainSkill);

            roleInfo.addTakeSkill(_skill, true);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Select_leader, this.leaderRole);
          }

          role.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleBorn);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Sort_AbsRole);
          return role;
        }

        getRole(heroId) {
          for (var index = 0; index < this.roles.length; index++) {
            var v = this.roles[index];

            if (v.info.heroFightInfo.itemId == heroId) {
              return v;
            }
          }
        }

        addRole(role) {
          this.roles.push(role);
        }
        /** 获取额外属性   初始卷轴、额外卷轴、刷新次数*/


        getGlobleAttr(attrType) {
          return this.getTotalValueByAttrType(attrType);
        }

        getTotalValueByAttrType(attr) {
          var value = 0;
          PlayerControl.ins.roles.forEach(role => {
            value += role.info.attrData.getAttr(attr);
          });
          return value;
        }

        getMaxBuffNumByBuffGroup(buffGroup) {
          var num = 0;
          var buff;
          this.roles.forEach(e => {
            buff = e.info.getBuffByGroup(buffGroup);

            if (buff && buff.ruleNumber > num) {
              num = buff.ruleNumber;
            }
          });
          return num;
        } //-------------------队长相关----------------


        getLeader() {
          return this.leaderRole;
        }
        /** 队长位置 */


        getPosition() {
          return this.leaderRole.getPosition();
        }

        getWorldPosition() {
          return this.leaderRole.body.getPosition();
        }

        setClickWorldPos(x, y) {
          if (this.getLeader() == null) {
            return;
          }

          this.isClicking(true);
          clickWorldPos.x = x;
          clickWorldPos.y = y;
          isWorldChange = true;
          PlayerControl.ins.getLeader().sendClickSkill(clickWorldPos);
        }

        isClicking(click) {
          this._isClicking = click;
        }

        getClicking() {
          return this._isClicking;
        }

        getClickNodePos() {
          if (isWorldChange) {
            isWorldChange = false;
            var nn = (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.getObjectsNode();
            nn.getComponent(UITransform).convertToNodeSpaceAR(clickWorldPos, clickNodePos);
          }

          return clickNodePos;
        }

        destroy() {
          this.init();
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef78797250a33ecb8296f062aa361091938ffb9c.js.map
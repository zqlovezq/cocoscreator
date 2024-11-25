System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, js, Label, Node, v3, ViewPop, UIMgr, FightRoleTeam, tab, LangMgr, PlayerControl, FightData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, FightTestAttr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRoleTeam(extras) {
    _reporterNs.report("FightRoleTeam", "../common/FightRoleTeam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroFightInfo(extras) {
    _reporterNs.report("HeroFightInfo", "../../data/HeroFightInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../../base/obj/role/role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "../../power/powerTab/SkillTab", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      js = _cc.js;
      Label = _cc.Label;
      Node = _cc.Node;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      FightRoleTeam = _unresolved_4.FightRoleTeam;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      LangMgr = _unresolved_6.LangMgr;
    }, function (_unresolved_7) {
      PlayerControl = _unresolved_7.PlayerControl;
    }, function (_unresolved_8) {
      FightData = _unresolved_8.FightData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b0ef2txm7RP2Z7ie2mZMAro", "FightTestAttr", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'EditBox', 'EventTouch', 'game', 'instantiate', 'js', 'Label', 'Layers', 'Node', 'Size', 'Sprite', 'SpriteFrame', 'Toggle', 'Tween', 'tween', 'UIOpacity', 'UITransform', 'v2', 'v3', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightTestAttr", FightTestAttr = (_dec = ccclass('FightTestAttr'), _dec2 = property(_crd && FightRoleTeam === void 0 ? (_reportPossibleCrUseOfFightRoleTeam({
        error: Error()
      }), FightRoleTeam) : FightRoleTeam), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec(_class = (_class2 = class FightTestAttr extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "fightTeam", _descriptor, this);

          _initializerDefineProperty(this, "nameLab", _descriptor2, this);

          _initializerDefineProperty(this, "attrNode", _descriptor3, this);

          _initializerDefineProperty(this, "skillGroupNode", _descriptor4, this);

          _initializerDefineProperty(this, "skillGroupItem", _descriptor5, this);

          _initializerDefineProperty(this, "skillLayoutItem", _descriptor6, this);

          _initializerDefineProperty(this, "skillItem", _descriptor7, this);

          _initializerDefineProperty(this, "takeSkillNode", _descriptor8, this);

          _initializerDefineProperty(this, "triggerNode", _descriptor9, this);

          _initializerDefineProperty(this, "GlobleNode", _descriptor10, this);

          _initializerDefineProperty(this, "attrLab", _descriptor11, this);
        }

        static async create() {
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.pause = true;
          await (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: "FightTestAttr"
          });
        }

        static hide() {
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.pause = false;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView("FightTestAttr");
        }

        register() {}

        onShow() {
          this.fightTeam.refresh();
          let inTest = true;

          for (let index = 0; index < this.fightTeam.items.length; index++) {
            const element = this.fightTeam.items[index];
            let nn = element.node;
            nn.on(Node.EventType.TOUCH_START, () => {
              this.showInfo(element.info);
            });

            if (element.info && inTest) {
              inTest = false;
              this.showInfo(element.info);
            }
          }

          this.globleAttr(this.GlobleNode, [(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_InitialScroll, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_AddScroll, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_RefreshCount]);
        }

        onCloseClick() {
          FightTestAttr.hide();
        }

        showInfo(info) {
          this.nameLab.string = "";
          this.attrNode.destroyAllChildren();

          if (info == null) {
            return;
          }

          let role = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getRole(info.itemId);

          if (role == null) {
            return;
          }

          let itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(info.itemId);
          this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemTab.Name);
          let attrList = [["当前血量", role.info.attrData.hp], ["最大血量", role.info.attrData.maxHp], ["当前护盾", role.info.attrData.shield]];

          for (const iterator of role.info.attrData.attr) {
            attrList.push([(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType[iterator[0]], iterator[1]]);
          }

          for (let index = 0; index < attrList.length; index++) {
            const iterator = attrList[index];
            let nn = instantiate(this.attrLab);
            nn.active = true;
            nn.position = v3(150 - (7 - iterator[1].toString().length) * 15, 0, 0);
            this.attrNode.addChild(nn);
            console.log(iterator[0], js.formatStr("%s：%s", iterator[0], iterator[1]));
            nn.getComponent(Label).string = js.formatStr("%s %s：%s ", iterator[0], (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType[iterator[0]] || 0, iterator[1]);
          }

          this.triggerNode.destroyAllChildren();
          this.skillGroupNode.destroyAllChildren();
          let skillGroups = [role.info.normalGroup, role.info.weaponeGroup];

          for (let index = 0; index < skillGroups.length; index++) {
            const v = skillGroups[index];

            if (v == null) {
              continue;
            }

            let nn = instantiate(this.skillGroupItem);
            nn.active = true;
            nn.position = v3();
            this.skillGroupNode.addChild(nn);
            nn.getChildByName("Label").getComponent(Label).string = "技能组ID:" + v.Id;
            let nn1 = instantiate(this.skillLayoutItem);
            nn1.active = true;
            nn1.position = v3();
            nn.getChildByName("skillLayoutItem").addChild(nn1);
            this.createSkill(nn1, v.skills);
          } //携带的技能


          this.createSkill(this.takeSkillNode, role.info.takeSkills);
        }

        createSkill(layout, skills) {
          layout.destroyAllChildren();

          for (let index = 0; index < skills.length; index++) {
            const v = skills[index];
            let nn = instantiate(this.skillItem);
            nn.active = true;
            nn.position = v3();
            layout.addChild(nn);
            nn.getChildByName("Label").getComponent(Label).string = "ID:" + v.Id;
            this.addtTrigger(v);
          }
        }

        addtTrigger(skill) {
          for (let index = 0; index < skill.triggerTabs.length; index++) {
            const v = skill.triggerTabs[index];
            let nn = instantiate(this.skillItem);
            nn.active = true;
            nn.position = v3();
            this.triggerNode.addChild(nn);
            nn.getChildByName("Label").getComponent(Label).string = "ID:" + v.Id;
          }
        }

        globleAttr(layout, attrs) {
          layout.destroyAllChildren();

          for (let index = 0; index < attrs.length; index++) {
            let nn = instantiate(this.skillItem);
            nn.active = true;
            nn.position = v3();
            layout.addChild(nn);
            let key = attrs[index];
            let value = this.getRoleAttr(key);
            nn.getChildByName("Label").getComponent(Label).string = js.formatStr("%s：%s", (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType[key]), value); // console.log(js.formatStr("%s：%s", iterator[0], iterator[1]))
          }
        }

        getRoleAttr(attr) {
          let value = 0;
          (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.roles.forEach(role => {
            value += role.info.attrData.getAttr(attr);
          });
          return value;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fightTeam", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "attrNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "skillGroupNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "skillGroupItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "skillLayoutItem", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "skillItem", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "takeSkillNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "triggerNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "GlobleNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "attrLab", [_dec12], {
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
//# sourceMappingURL=f21121741c0812301d38b632eec3151ce71c6c34.js.map
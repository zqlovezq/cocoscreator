System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "client_protocol", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Label, log, Node, ProgressBar, Sprite, SpriteFrame, ViewPop, ShowItemNotEnoughTips, UIMgr, ViewName, AssociationData, AssociationControl, EventMgr, proto, tab, LangMgr, ItemData, GameUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, AssociationSkillPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationControl(extras) {
    _reporterNs.report("AssociationControl", "./AssociationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Color = _cc.Color;
      Label = _cc.Label;
      log = _cc.log;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ShowItemNotEnoughTips = _unresolved_3.ShowItemNotEnoughTips;
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      ViewName = _unresolved_4.ViewName;
    }, function (_unresolved_5) {
      AssociationData = _unresolved_5.AssociationData;
    }, function (_unresolved_6) {
      AssociationControl = _unresolved_6.AssociationControl;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_8) {
      tab = _unresolved_8.tab;
    }, function (_unresolved_9) {
      LangMgr = _unresolved_9.LangMgr;
    }, function (_unresolved_10) {
      ItemData = _unresolved_10.ItemData;
    }, function (_unresolved_11) {
      GameUtil = _unresolved_11.GameUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89ece5A/j5BCo9X/0T7dv+8", "AssociationSkillPop", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'EventTouch', 'Label', 'log', 'Node', 'Prefab', 'ProgressBar', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationSkillPop", AssociationSkillPop = (_dec = ccclass('AssociationSkillPop'), _dec2 = property([Node]), _dec3 = property([SpriteFrame]), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Sprite), _dec8 = property(Sprite), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(ProgressBar), _dec12 = property(Node), _dec(_class = (_class2 = class AssociationSkillPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_skills", _descriptor, this);

          _initializerDefineProperty(this, "frames_icon", _descriptor2, this);

          _initializerDefineProperty(this, "node_attr_layout", _descriptor3, this);

          _initializerDefineProperty(this, "node_cost_layout", _descriptor4, this);

          _initializerDefineProperty(this, "node_toggle", _descriptor5, this);

          _initializerDefineProperty(this, "sp_common_info_icon", _descriptor6, this);

          _initializerDefineProperty(this, "sp_info_icon", _descriptor7, this);

          _initializerDefineProperty(this, "lbl_info_icon", _descriptor8, this);

          _initializerDefineProperty(this, "node_lv_up", _descriptor9, this);

          _initializerDefineProperty(this, "progress_bar_skill", _descriptor10, this);

          _initializerDefineProperty(this, "node_final_img", _descriptor11, this);

          this.curClass = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Assassin;
        }

        onShow() {
          this.curClass = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Assassin;
          this.setView();
        }

        setView() {
          this.setSkillInfo();
          this.setCurInfo();
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ResetGuildSkillRsp, this.on_s2c_ResetGuildSkillRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpgradeGuildSkillRsp, this.on_s2c_UpgradeGuildSkillRsp, this);
        }

        unRegister() {
          super.unRegister();
        }
        /* 重置技能 */


        resetGuildSkill() {
          var lv = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getSkillLvByClass(this.curClass);

          if (lv > 0) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).AssociationSkillResetPop,
              data: this.curClass
            });
          }
        }
        /* 点击显示全体属性 */


        showAllSkillAttr() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).AssociationAttrPop,
            data: {
              "attrMap": (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
                error: Error()
              }), AssociationData) : AssociationData).ins.getGuildAttr(this.curClass)
            }
          });
        }
        /* 升级属性 */


        onClickLvUp() {
          // 是否资源充足
          var config = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.isMaterialEnough(this.curClass);

          if (!config.isEnough) {
            (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
              error: Error()
            }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(config.itemid);
            return;
          } // 是否达到等级上限


          var isLevelMax = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.isSkillLevelMax(this.curClass);

          if (isLevelMax) {
            console.log("等级上限");
            return;
          }

          (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
            error: Error()
          }), AssociationControl) : AssociationControl).ins.reqUpgradeGuildSkill(this.curClass);
        }

        switchClass(e, heroClass) {
          if (this.curClass == Number(heroClass)) {
            return;
          }

          this.curClass = Number(heroClass);
          this.setView();
        }

        on_s2c_ResetGuildSkillRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          log("cocos 重置公会技能成功");
          this.setView();
        }

        on_s2c_UpgradeGuildSkillRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          log("cocos 升级公会技能成功");
          this.setView();
        }

        setSkillInfo() {
          var heroClassTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(this.curClass);
          var lv = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getSkillLvByClass(this.curClass);
          var showLv = Math.ceil((lv + 1) / 6);
          var tabs = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getSkillTabsByClass(this.curClass);
          var arrTabs = [];

          for (var i = 0; i < tabs.length; i++) {
            var _tab = tabs[i];

            if (showLv === _tab.ShowLevel) {
              arrTabs.push(_tab);
            }
          }

          if (lv % 6 === 5) {
            this.progress_bar_skill.progress = 1;
            this.node_final_img.active = true;
          } else {
            this.progress_bar_skill.progress = lv % 6 / 5;
            this.node_final_img.active = false;
          }

          for (var k = 0; k < 6; k++) {
            var item = this.node_skills[k];
            var info_node = item.getChildByName("info_node");
            var lock_node = item.getChildByName("lock_node");
            var lock_node_img = lock_node.getChildByName("img");
            var select_img = item.getChildByName("select_img");
            var lv_txt = info_node.getChildByName("lv_txt").getComponent(Label);
            var att_txt = info_node.getChildByName("attr_txt").getComponent(Label);
            var tabData = arrTabs[k];
            select_img.active = k === lv % 6;
            lock_node.active = k >= lv % 6;
            lock_node_img.active = k > lv % 6;

            if (tabData) {
              item.active = true;
              lv_txt.string = String(showLv);

              if (k !== 5) {
                att_txt.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).AttrType[tabData.AttrTypes[0]]) + "+" + tabData.AttrValue[0];
              } else {
                att_txt.node.active = false;
              }
            } else {
              lv_txt.string = String(showLv);
              lock_node.active = false; // att_txt.node.active = false;
            }

            if (k === 5) {
              item.getChildByName("icon").getComponent(Sprite).setTexture(heroClassTab.Icon);
            }
          }

          for (var j = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Assassin; j <= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Warrior; j++) {
            var toggle_lv = Math.floor((_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getSkillLvByClass(j) / 6);
            var toggle_node = this.node_toggle.children[j - 1];
            var toggle_node_lv = toggle_node.getChildByName("lv_txt").getComponent(Label);
            toggle_node_lv.string = String(toggle_lv);
          }
        }

        setCurInfo() {
          // 当前属性
          var heroClassTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(this.curClass);
          var tabData = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getCurSkillTabByClass(this.curClass);

          var _lv = tabData.Level % 6;

          this.sp_common_info_icon.node.parent.active = false;
          this.sp_info_icon.node.parent.active = false;

          if (_lv == 0) {
            this.sp_info_icon.node.parent.active = true;
            this.sp_info_icon.setTexture(heroClassTab.Icon);
            this.lbl_info_icon.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("Tips_guildattr_6", [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroClass[this.curClass]), tabData.ShowLevel]);
          } else {
            this.sp_common_info_icon.node.parent.active = true;
            this.sp_common_info_icon.spriteFrame = this.frames_icon[(tabData.Level - 1) % 6];
            this.lbl_info_icon.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("Tips_guildattr_" + _lv, [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroClass[this.curClass]), tabData.ShowLevel]);
          }

          for (var i = 0; i < this.node_attr_layout.children.length; i++) {
            var attr_node = this.node_attr_layout.children[i];

            if (tabData.AttrTypes[i]) {
              var attrTabData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroAttrClientTableByType.getValue(tabData.AttrTypes[i]);
              attr_node.active = true;
              var attr_icon = attr_node.getChildByName("icon").getComponent(Sprite);
              var attr_value = attr_node.getChildByName("now_txt").getComponent(Label);
              attr_icon.setTexture(attrTabData.Icon); // attr_value.string = String(tabData.AttrValue[i]);

              var _tabData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroAttrClientTableByType.getValue(tabData.AttrTypes[i]);

              attr_value.string = _tabData.ShowPercent ? tabData.AttrValue[i] / 100 + "%" : (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                error: Error()
              }), GameUtil) : GameUtil).convertNumber(tabData.AttrValue[i]) + "";
            } else {
              attr_node.active = false;
            }
          } // 当前消耗


          for (var k = 0; k < this.node_cost_layout.children.length; k++) {
            var cost_node = this.node_cost_layout.children[k];

            if (tabData.CostItemIds[k]) {
              cost_node.active = true;
              var cost_icon = cost_node.getChildByName("icon").getComponent(Sprite);
              var cost_need_value = cost_node.getChildByName("need_txt").getComponent(Label);
              var cost_have_value = cost_node.getChildByName("have_txt").getComponent(Label);
              var costId = tabData.CostItemIds[k];
              var itemData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ItemTableById.getValue(costId);
              var costCount = tabData.CostItemCount[k];
              var costHaveCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                error: Error()
              }), ItemData) : ItemData).ins.getCount(costId);
              cost_icon.setTexture(itemData.Icon);
              cost_need_value.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                error: Error()
              }), GameUtil) : GameUtil).convertNumber(costCount);
              cost_have_value.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                error: Error()
              }), GameUtil) : GameUtil).convertNumber(costHaveCount);

              if (costCount > costHaveCount) {
                cost_have_value.color = new Color().fromHEX((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
              } else {
                cost_have_value.color = new Color().fromHEX("#FFFFFF");
              }
            } else {
              cost_node.active = false;
            }
          }

          var isLevelMax = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.isSkillLevelMax(this.curClass);
          this.node_lv_up.getComponent(Button).interactable = !isLevelMax;
          this.node_lv_up.getComponent(Sprite).grayscale = isLevelMax;
        }

        clickAttrBtn(event, args) {
          var node = event.currentTarget;
          var tabData = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getCurSkillTabByClass(this.curClass);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CommonBlackTipsPop,
            data: {
              "worldPos": node.worldPosition,
              "WordTableKey": (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType[tabData.AttrTypes[args]]
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_skills", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "frames_icon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_attr_layout", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_cost_layout", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sp_common_info_icon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sp_info_icon", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbl_info_icon", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_lv_up", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "progress_bar_skill", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_final_img", [_dec12], {
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
//# sourceMappingURL=6c2885fe27b611c3210e0be82bc5d90d242ed1f0.js.map
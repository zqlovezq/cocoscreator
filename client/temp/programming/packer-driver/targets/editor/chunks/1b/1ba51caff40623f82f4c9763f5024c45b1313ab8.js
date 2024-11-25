System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "client_protocol", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, game, Label, Node, Toggle, ViewPop, RoleData, Sound, PlaySound, Func, UIMgr, ViewName, SoundUrl, ResMgr, SettingsManager, EventMgr, proto, Global, ChannelMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, RoleInfoPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSound(extras) {
    _reporterNs.report("Sound", "../../../utils/Sound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaySound(extras) {
    _reporterNs.report("PlaySound", "../../../utils/Sound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundUrl(extras) {
    _reporterNs.report("SoundUrl", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../../mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingsManager(extras) {
    _reporterNs.report("SettingsManager", "../SettingsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../../../../Global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../../channel/ChannelMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      game = _cc.game;
      Label = _cc.Label;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      RoleData = _unresolved_3.RoleData;
    }, function (_unresolved_4) {
      Sound = _unresolved_4.default;
      PlaySound = _unresolved_4.PlaySound;
    }, function (_unresolved_5) {
      Func = _unresolved_5.Func;
    }, function (_unresolved_6) {
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      ViewName = _unresolved_7.ViewName;
    }, function (_unresolved_8) {
      SoundUrl = _unresolved_8.SoundUrl;
    }, function (_unresolved_9) {
      ResMgr = _unresolved_9.ResMgr;
    }, function (_unresolved_10) {
      SettingsManager = _unresolved_10.SettingsManager;
    }, function (_unresolved_11) {
      EventMgr = _unresolved_11.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_12) {
      Global = _unresolved_12.Global;
    }, function (_unresolved_13) {
      ChannelMgr = _unresolved_13.ChannelMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b691Vx5J9N6oQ1hjSLB9XF", "RoleInfoPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'game', 'Label', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RoleInfoPop", RoleInfoPop = (_dec = ccclass('RoleInfoPop'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Toggle), _dec5 = property(Toggle), _dec6 = property(Toggle), _dec7 = property(Toggle), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = class RoleInfoPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbl_nickname", _descriptor, this);

          _initializerDefineProperty(this, "lbl_id", _descriptor2, this);

          _initializerDefineProperty(this, "toggle_bgm", _descriptor3, this);

          _initializerDefineProperty(this, "toggle_effect", _descriptor4, this);

          _initializerDefineProperty(this, "toggle_shock", _descriptor5, this);

          _initializerDefineProperty(this, "toggle_damage", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_lv", _descriptor7, this);

          _initializerDefineProperty(this, "mgrBtn", _descriptor8, this);

          _initializerDefineProperty(this, "service_btn", _descriptor9, this);

          _initializerDefineProperty(this, "redeemcodeNode", _descriptor10, this);
        }

        onLoad() {
          super.onLoad();
          this.redeemcodeNode.active = !(_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isReview;
          this.service_btn.active = this.mgrBtn.active = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).isJp37;
        }

        onShow() {
          this.setStaticView();
        }

        setStaticView() {
          // 名字
          this.lbl_nickname.string = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.name; // id

          this.lbl_id.string = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.id; // this.toggle_bgm.isChecked = Sound.ins.isEnableBGM();
          // this.toggle_effect.isChecked = Sound.ins.isEnableSE();

          this.toggle_bgm.isChecked = (_crd && SettingsManager === void 0 ? (_reportPossibleCrUseOfSettingsManager({
            error: Error()
          }), SettingsManager) : SettingsManager).ins.getSetting("bgm_flag");
          this.toggle_effect.isChecked = (_crd && SettingsManager === void 0 ? (_reportPossibleCrUseOfSettingsManager({
            error: Error()
          }), SettingsManager) : SettingsManager).ins.getSetting("se_flag");
          this.toggle_shock.isChecked = (_crd && SettingsManager === void 0 ? (_reportPossibleCrUseOfSettingsManager({
            error: Error()
          }), SettingsManager) : SettingsManager).ins.getSetting("isAutoCollect");
          this.toggle_damage.isChecked = (_crd && SettingsManager === void 0 ? (_reportPossibleCrUseOfSettingsManager({
            error: Error()
          }), SettingsManager) : SettingsManager).ins.getSetting("damage_flag");
          this.lbl_lv.string = String((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.level);
        }

        onDestroy() {
          super.onDestroy();
        }

        on_s2c_ChangeRoleName(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.hideView("RoleInfoChangeNamePop");
            this.lbl_nickname.string = msg.name;
          }
        }

        register() {
          /* 监听名字修改 */
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ChangeRoleNameRsp, this.on_s2c_ChangeRoleName, this);
        }

        unRegister() {
          super.unRegister();
        }

        onClickToggle(event, key) {
          const toggle = event.target.getComponent(Toggle);
          (_crd && SettingsManager === void 0 ? (_reportPossibleCrUseOfSettingsManager({
            error: Error()
          }), SettingsManager) : SettingsManager).ins.setSetting(key, toggle.isChecked);

          switch (key) {
            case "bgm_flag":
              this.onCheckBgm(toggle.isChecked);
              break;

            case "se_flag":
              this.onChecEffect(toggle.isChecked);
              break;

            case "isAutoCollect":
              this.onCheckAutoCollect(toggle.isChecked);
              break;

            case "damage_flag":
              this.onCheckDamage(toggle.isChecked);
              break;

            default:
              break;
          }
        }
        /* 点击复制id */

        /* 关闭开启背景音乐 */


        onCheckBgm(enabled) {
          (_crd && Sound === void 0 ? (_reportPossibleCrUseOfSound({
            error: Error()
          }), Sound) : Sound).ins.EnableBGM(enabled);

          if (enabled) {
            console.log('Music enabled');
            (_crd && PlaySound === void 0 ? (_reportPossibleCrUseOfPlaySound({
              error: Error()
            }), PlaySound) : PlaySound)((_crd && SoundUrl === void 0 ? (_reportPossibleCrUseOfSoundUrl({
              error: Error()
            }), SoundUrl) : SoundUrl).MainBGM);
          } else {
            console.log('Music disabled');
          }
        }

        onChecEffect(enabled) {
          (_crd && Sound === void 0 ? (_reportPossibleCrUseOfSound({
            error: Error()
          }), Sound) : Sound).ins.EnableSE(enabled);

          if (enabled) {
            console.log('Sound effects enabled'); // 启用音效
          } else {
            console.log('Sound effects disabled'); // 禁用音效
          }
        }

        onCheckAutoCollect(enabled) {
          if (enabled) {
            console.log('shock effects enabled'); // 启用震动
          } else {
            console.log('Sound effects disabled'); // 禁用震动
          }
        }

        onCheckDamage(enabled) {
          if (enabled) {
            console.log('Damage enabled'); // 启用伤害字体
          } else {
            console.log('Damage disabled'); // 禁用伤害字体
          }
        }

        onClickCopy() {
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).copyText((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.id);
        }
        /* 点击更改姓名 */


        onClickChangeName() {
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).printCache();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RoleInfoChangeNamePop
          });
        }

        onClickRedeemcode() {
          console.log("wwwww");
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RoleInfoRedemptionCodePop
          });
        }

        onClickChangeAccount() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).logout("", () => {
            console.log("重启游戏代码");
            game.restart();
          });
        }

        onClickUpgradeAccount() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).accountUpgrade();
        }
        /* 点击更换头像 */


        onClickHeadChange() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RoleInfoDecorationsPop
          });
        }

        onClickMgr() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).accountCenter({});
        }

        onClickService() {
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).openCustomService();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_nickname", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_id", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggle_bgm", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "toggle_effect", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "toggle_shock", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "toggle_damage", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_lv", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "mgrBtn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "service_btn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "redeemcodeNode", [_dec11], {
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
//# sourceMappingURL=1ba51caff40623f82f4c9763f5024c45b1313ab8.js.map
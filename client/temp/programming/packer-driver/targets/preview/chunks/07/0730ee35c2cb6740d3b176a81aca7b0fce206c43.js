System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UIMgr, EngineCode, LoginControl, SceneMgr, Sound, PlaySound, RoleControl, FightMsgControl, HeroControl, ItemControl, EquipControl, RareBookControl, MailControl, TaskControl, PrestigeControl, FriendControl, ChatControl, SoundUrl, ActivityControl, PayControl, GameplayControl, FengyunRankControl, LangMgr, BattleMainEliteControl, _dec, _class, _class2, _crd, ccclass, property, GameInit;

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "./logic/mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEngineCode(extras) {
    _reporterNs.report("EngineCode", "./framework/EngineCode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginControl(extras) {
    _reporterNs.report("LoginControl", "./logic/model/login/LoginControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneMgr(extras) {
    _reporterNs.report("SceneMgr", "./logic/mgr/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSound(extras) {
    _reporterNs.report("Sound", "./logic/utils/Sound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaySound(extras) {
    _reporterNs.report("PlaySound", "./logic/utils/Sound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleControl(extras) {
    _reporterNs.report("RoleControl", "./logic/model/role/RoleControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMsgControl(extras) {
    _reporterNs.report("FightMsgControl", "./logic/fight/FightMsgControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroControl(extras) {
    _reporterNs.report("HeroControl", "./logic/model/hero/HeroControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemControl(extras) {
    _reporterNs.report("ItemControl", "./logic/model/item/ItemControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipControl(extras) {
    _reporterNs.report("EquipControl", "./logic/model/equip/EquipControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookControl(extras) {
    _reporterNs.report("RareBookControl", "./logic/model/rareBook/RareBookControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailControl(extras) {
    _reporterNs.report("MailControl", "./logic/model/mail/MailControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskControl(extras) {
    _reporterNs.report("TaskControl", "./logic/model/task/TaskControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrestigeControl(extras) {
    _reporterNs.report("PrestigeControl", "./logic/model/prestige/PrestigeControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendControl(extras) {
    _reporterNs.report("FriendControl", "./logic/model/friends/FriendControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatControl(extras) {
    _reporterNs.report("ChatControl", "./logic/model/chat/ChatControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundUrl(extras) {
    _reporterNs.report("SoundUrl", "./Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityControl(extras) {
    _reporterNs.report("ActivityControl", "./logic/model/activity/ActivityControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayControl(extras) {
    _reporterNs.report("PayControl", "./logic/model/pay/PayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayControl(extras) {
    _reporterNs.report("GameplayControl", "./logic/model/jianghu/GameplayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFengyunRankControl(extras) {
    _reporterNs.report("FengyunRankControl", "./logic/model/fengyunRanking/FengyunRankControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "./logic/mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainEliteControl(extras) {
    _reporterNs.report("BattleMainEliteControl", "./logic/model/home/battle/BattleMainEliteControl", _context.meta, extras);
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
      UIMgr = _unresolved_2.UIMgr;
    }, function (_unresolved_3) {
      EngineCode = _unresolved_3.EngineCode;
    }, function (_unresolved_4) {
      LoginControl = _unresolved_4.LoginControl;
    }, function (_unresolved_5) {
      SceneMgr = _unresolved_5.SceneMgr;
    }, function (_unresolved_6) {
      Sound = _unresolved_6.default;
      PlaySound = _unresolved_6.PlaySound;
    }, function (_unresolved_7) {
      RoleControl = _unresolved_7.RoleControl;
    }, function (_unresolved_8) {
      FightMsgControl = _unresolved_8.FightMsgControl;
    }, function (_unresolved_9) {
      HeroControl = _unresolved_9.HeroControl;
    }, function (_unresolved_10) {
      ItemControl = _unresolved_10.ItemControl;
    }, function (_unresolved_11) {
      EquipControl = _unresolved_11.EquipControl;
    }, function (_unresolved_12) {
      RareBookControl = _unresolved_12.RareBookControl;
    }, function (_unresolved_13) {
      MailControl = _unresolved_13.MailControl;
    }, function (_unresolved_14) {
      TaskControl = _unresolved_14.TaskControl;
    }, function (_unresolved_15) {
      PrestigeControl = _unresolved_15.PrestigeControl;
    }, function (_unresolved_16) {
      FriendControl = _unresolved_16.FriendControl;
    }, function (_unresolved_17) {
      ChatControl = _unresolved_17.ChatControl;
    }, function (_unresolved_18) {
      SoundUrl = _unresolved_18.SoundUrl;
    }, function (_unresolved_19) {
      ActivityControl = _unresolved_19.ActivityControl;
    }, function (_unresolved_20) {
      PayControl = _unresolved_20.PayControl;
    }, function (_unresolved_21) {
      GameplayControl = _unresolved_21.GameplayControl;
    }, function (_unresolved_22) {
      FengyunRankControl = _unresolved_22.FengyunRankControl;
    }, function (_unresolved_23) {
      LangMgr = _unresolved_23.LangMgr;
    }, function (_unresolved_24) {
      BattleMainEliteControl = _unresolved_24.BattleMainEliteControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44c78uhXdxErrWGPhjR99+0", "GameInit", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameInit", GameInit = (_dec = ccclass('GameInit'), _dec(_class = (_class2 = class GameInit {
        constructor() {
          this.isInit = false;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new GameInit();
          }

          return this._instance;
        }

        startGame() {
          if (this.isInit) {
            return;
          }

          window["GlobelPlaySound"] = name => {
            (_crd && PlaySound === void 0 ? (_reportPossibleCrUseOfPlaySound({
              error: Error()
            }), PlaySound) : PlaySound)((_crd && SoundUrl === void 0 ? (_reportPossibleCrUseOfSoundUrl({
              error: Error()
            }), SoundUrl) : SoundUrl).ClickEffect);
          };

          (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).ins.init();
          this.isInit = true;
          (_crd && EngineCode === void 0 ? (_reportPossibleCrUseOfEngineCode({
            error: Error()
          }), EngineCode) : EngineCode).init();
          (_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
            error: Error()
          }), SceneMgr) : SceneMgr).ins.init();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.init();
          (_crd && Sound === void 0 ? (_reportPossibleCrUseOfSound({
            error: Error()
          }), Sound) : Sound).ins;
          this.initControl();
        }

        initControl() {
          (_crd && RoleControl === void 0 ? (_reportPossibleCrUseOfRoleControl({
            error: Error()
          }), RoleControl) : RoleControl).ins.init();
          (_crd && LoginControl === void 0 ? (_reportPossibleCrUseOfLoginControl({
            error: Error()
          }), LoginControl) : LoginControl).ins.init();
          (_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.init();
          (_crd && HeroControl === void 0 ? (_reportPossibleCrUseOfHeroControl({
            error: Error()
          }), HeroControl) : HeroControl).ins.init();
          (_crd && ItemControl === void 0 ? (_reportPossibleCrUseOfItemControl({
            error: Error()
          }), ItemControl) : ItemControl).ins.init();
          (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
            error: Error()
          }), EquipControl) : EquipControl).ins.init();
          (_crd && RareBookControl === void 0 ? (_reportPossibleCrUseOfRareBookControl({
            error: Error()
          }), RareBookControl) : RareBookControl).ins.init();
          (_crd && MailControl === void 0 ? (_reportPossibleCrUseOfMailControl({
            error: Error()
          }), MailControl) : MailControl).ins.init();
          (_crd && TaskControl === void 0 ? (_reportPossibleCrUseOfTaskControl({
            error: Error()
          }), TaskControl) : TaskControl).ins.init();
          (_crd && PrestigeControl === void 0 ? (_reportPossibleCrUseOfPrestigeControl({
            error: Error()
          }), PrestigeControl) : PrestigeControl).ins.init();
          (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
            error: Error()
          }), FriendControl) : FriendControl).ins.init();
          (_crd && ChatControl === void 0 ? (_reportPossibleCrUseOfChatControl({
            error: Error()
          }), ChatControl) : ChatControl).ins.init();
          (_crd && ActivityControl === void 0 ? (_reportPossibleCrUseOfActivityControl({
            error: Error()
          }), ActivityControl) : ActivityControl).ins.init();
          (_crd && PayControl === void 0 ? (_reportPossibleCrUseOfPayControl({
            error: Error()
          }), PayControl) : PayControl).ins.init();
          (_crd && GameplayControl === void 0 ? (_reportPossibleCrUseOfGameplayControl({
            error: Error()
          }), GameplayControl) : GameplayControl).ins.init();
          (_crd && FengyunRankControl === void 0 ? (_reportPossibleCrUseOfFengyunRankControl({
            error: Error()
          }), FengyunRankControl) : FengyunRankControl).ins.init();
          (_crd && BattleMainEliteControl === void 0 ? (_reportPossibleCrUseOfBattleMainEliteControl({
            error: Error()
          }), BattleMainEliteControl) : BattleMainEliteControl).ins.init();
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0730ee35c2cb6740d3b176a81aca7b0fce206c43.js.map
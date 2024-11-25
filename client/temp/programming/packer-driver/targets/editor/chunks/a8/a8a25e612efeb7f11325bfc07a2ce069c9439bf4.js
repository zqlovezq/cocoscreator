System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, NetStateEvent, LocalEvent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e1eaXy/mxLAY3U+kEATMWs", "LocalEvent", undefined);

      /**
       * 网络状态事件
       */
      _export("NetStateEvent", NetStateEvent = /*#__PURE__*/function (NetStateEvent) {
        NetStateEvent[NetStateEvent["NONE"] = 0] = "NONE";
        NetStateEvent[NetStateEvent["CONNCET"] = 1] = "CONNCET";
        NetStateEvent[NetStateEvent["CLOSE"] = 2] = "CLOSE";
        return NetStateEvent;
      }({}));

      ;
      /**
       *  本地事件
       */

      _export("LocalEvent", LocalEvent = /*#__PURE__*/function (LocalEvent) {
        LocalEvent[LocalEvent["LocalEvent_Begin"] = 0] = "LocalEvent_Begin";
        LocalEvent[LocalEvent["LocalEvent_Common_Net_ErrorCode"] = 1] = "LocalEvent_Common_Net_ErrorCode";
        LocalEvent[LocalEvent["SceneLoaded"] = 2] = "SceneLoaded";
        LocalEvent[LocalEvent["FightResLoadComplete"] = 3] = "FightResLoadComplete";
        LocalEvent[LocalEvent["LoginProcessComplete"] = 4] = "LoginProcessComplete";
        LocalEvent[LocalEvent["Item_Update"] = 5] = "Item_Update";
        LocalEvent[LocalEvent["Gole_Update"] = 6] = "Gole_Update";
        LocalEvent[LocalEvent["Diamond_Update"] = 7] = "Diamond_Update";
        LocalEvent[LocalEvent["Hero_Change"] = 8] = "Hero_Change";
        LocalEvent[LocalEvent["Rank_Change"] = 9] = "Rank_Change";
        LocalEvent[LocalEvent["Hero_Material_Select"] = 10] = "Hero_Material_Select";
        LocalEvent[LocalEvent["Level_Item_Select"] = 11] = "Level_Item_Select";
        LocalEvent[LocalEvent["Click_Recommend_Hero"] = 12] = "Click_Recommend_Hero";
        LocalEvent[LocalEvent["Delete_Star_Up_Hero"] = 13] = "Delete_Star_Up_Hero";
        LocalEvent[LocalEvent["Equip_Chang"] = 14] = "Equip_Chang";
        LocalEvent[LocalEvent["Prestige_Change"] = 15] = "Prestige_Change";
        LocalEvent[LocalEvent["ChatMessage_Change"] = 16] = "ChatMessage_Change";
        LocalEvent[LocalEvent["LimitedBenefits_Change"] = 17] = "LimitedBenefits_Change";
        LocalEvent[LocalEvent["FirstRecharge_Chang"] = 18] = "FirstRecharge_Chang";
        LocalEvent[LocalEvent["BreakEgg_change"] = 19] = "BreakEgg_change";
        LocalEvent[LocalEvent["quitFight"] = 20] = "quitFight";
        LocalEvent[LocalEvent["Chapter_Gift_Change"] = 21] = "Chapter_Gift_Change";
        LocalEvent[LocalEvent["VipLevel_Change"] = 22] = "VipLevel_Change";
        LocalEvent[LocalEvent["TrialRed"] = 23] = "TrialRed";
        LocalEvent[LocalEvent["checkOpenFuncPop"] = 24] = "checkOpenFuncPop";
        LocalEvent[LocalEvent["updateBookRedPoint"] = 25] = "updateBookRedPoint";
        LocalEvent[LocalEvent["openFunctions"] = 26] = "openFunctions";
        LocalEvent[LocalEvent["CancelRunningGuide"] = 27] = "CancelRunningGuide";
        LocalEvent[LocalEvent["CheckGuide"] = 28] = "CheckGuide";
        LocalEvent[LocalEvent["HideDialogue"] = 29] = "HideDialogue";
        LocalEvent[LocalEvent["ShowPop"] = 30] = "ShowPop";
        LocalEvent[LocalEvent["ShowMonster"] = 31] = "ShowMonster";
        LocalEvent[LocalEvent["ReviveHero"] = 32] = "ReviveHero";
        LocalEvent[LocalEvent["hidePop"] = 33] = "hidePop";
        LocalEvent[LocalEvent["hideHeroPop"] = 34] = "hideHeroPop";
        LocalEvent[LocalEvent["checkMainView"] = 35] = "checkMainView";
        LocalEvent[LocalEvent["heroInTeam"] = 36] = "heroInTeam";
        LocalEvent[LocalEvent["JadeDrop"] = 37] = "JadeDrop";
        LocalEvent[LocalEvent["FightWin"] = 38] = "FightWin";
        LocalEvent[LocalEvent["JadeDropFinger"] = 39] = "JadeDropFinger";
        LocalEvent[LocalEvent["roleIdleState"] = 40] = "roleIdleState";
        LocalEvent[LocalEvent["JumpLayerSuceess"] = 41] = "JumpLayerSuceess";
        LocalEvent[LocalEvent["ServerMaintain"] = 42] = "ServerMaintain";
        LocalEvent[LocalEvent["updateInspireBtn"] = 43] = "updateInspireBtn";
        LocalEvent[LocalEvent["openFuncRed"] = 44] = "openFuncRed";
        LocalEvent[LocalEvent["LocalMsg_QueueUI_check"] = 45] = "LocalMsg_QueueUI_check";
        LocalEvent[LocalEvent["LocalMsg_QueueUI_deleteUI"] = 46] = "LocalMsg_QueueUI_deleteUI";
        LocalEvent[LocalEvent["showNewOver"] = 47] = "showNewOver";
        LocalEvent[LocalEvent["Finca_Team_Change"] = 48] = "Finca_Team_Change";
        LocalEvent[LocalEvent["Finca_Book_Change"] = 49] = "Finca_Book_Change";
        return LocalEvent;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a8a25e612efeb7f11325bfc07a2ce069c9439bf4.js.map
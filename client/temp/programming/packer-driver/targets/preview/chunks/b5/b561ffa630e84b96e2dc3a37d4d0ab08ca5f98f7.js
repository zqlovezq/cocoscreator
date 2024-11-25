System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ChannelType, P8PostEventName;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "abe49wkR2VDe6hGE12lhEh3", "ChannelDefine", undefined);

      _export("ChannelType", ChannelType = /*#__PURE__*/function (ChannelType) {
        ChannelType["DEV"] = "DEV";
        ChannelType["P8"] = "P8";
        ChannelType["P8ZA"] = "P8ZA";
        ChannelType["S37"] = "S37";
        ChannelType["P8HW"] = "P8HW";
        return ChannelType;
      }({}));

      _export("P8PostEventName", P8PostEventName = /*#__PURE__*/function (P8PostEventName) {
        P8PostEventName["test"] = "test";
        P8PostEventName["dungeon_completed_3"] = "dungeon_completed_3";
        P8PostEventName["dungeon_completed_10"] = "dungeon_completed_10";
        P8PostEventName["dungeon_completed_20"] = "dungeon_completed_20";
        P8PostEventName["daily_40"] = "daily_40";
        P8PostEventName["daily_100"] = "daily_100";
        P8PostEventName["pay_0_99"] = "pay_0.99";
        P8PostEventName["pay_10"] = "pay_10";
        P8PostEventName["pay_50"] = "pay_50";
        P8PostEventName["pay_100"] = "pay_100";
        P8PostEventName["day2_login"] = "day2_login";
        P8PostEventName["ad_click"] = "ad_click";
        P8PostEventName["ad_Impression"] = "ad_Impression";
        return P8PostEventName;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b561ffa630e84b96e2dc3a37d4d0ab08ca5f98f7.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, RoleData, _dec, _class, _class2, _crd, ccclass, property, FengyunRankData;

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
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
      RoleData = _unresolved_2.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3c5791cwJLF4LXyNRUEcj3", "FengyunRankData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * FengyunRankData
       * zhudingchao
       * Thu Jul 18 2024 10:15:40 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/fengyunRanking/FengyunRankData.ts
       *
       */

      _export("FengyunRankData", FengyunRankData = (_dec = ccclass('FengyunRankData'), _dec(_class = (_class2 = class FengyunRankData {
        constructor() {
          this.honorRollMap = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new FengyunRankData();
          }

          return this._instance;
        }

        purge() {}

        getMapData() {
          return this.honorRollMap;
        }

        initMapData(msg) {
          this.honorRollMap = msg.honorRollMap;
        }

        getHonorRollInfoByActId(actId) {
          return this.honorRollMap[actId];
        }

        isOpenActivity(actId) {
          if (this.honorRollMap[actId]) {
            var endTime = this.honorRollMap[actId].activityEndTime;

            if (endTime) {
              var lastTimer = Number(endTime) - (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.getServerUtcTime();
              return lastTimer > 0;
            }

            return false;
          } else {
            return false;
          } // OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_AchievementTask)

        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=575e28b8ac14bcfbac38aab81e48247eb365b02c.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsObjType, AbsObjFactory, FightData, _dec, _class, _crd, ccclass, property, AbsObjInfoAttr, AbsObjInfo;

  function _reportPossibleCrUseOfAbsObj(extras) {
    _reporterNs.report("AbsObj", "./AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "./AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjFactory(extras) {
    _reporterNs.report("AbsObjFactory", "./AbsObjFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../data/FightData", _context.meta, extras);
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
      AbsObjType = _unresolved_2.AbsObjType;
    }, function (_unresolved_3) {
      AbsObjFactory = _unresolved_3.AbsObjFactory;
    }, function (_unresolved_4) {
      FightData = _unresolved_4.FightData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b37fgEtxxJx622e3GQiiIe", "AbsObjInfo", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AbsObjInfoAttr", AbsObjInfoAttr = /*#__PURE__*/function (AbsObjInfoAttr) {
        AbsObjInfoAttr["hitCount"] = "hitCount";
        AbsObjInfoAttr["catapultCount"] = "catapultCount";
        AbsObjInfoAttr["holdTime"] = "holdTime";
        AbsObjInfoAttr["totalLossHpPer"] = "totalLossHpPer";
        AbsObjInfoAttr["EverylHpLostPe"] = "EverylHpLostPe";
        AbsObjInfoAttr["isForwardArrow"] = "isForwardArrow";
        AbsObjInfoAttr["forwardArrowOffsetY"] = "forwardArrowOffsetY";
        AbsObjInfoAttr["bulletGroupId"] = "bulletGroupId";
        return AbsObjInfoAttr;
      }({}));

      _export("AbsObjInfo", AbsObjInfo = (_dec = ccclass('AbsObjInfo'), _dec(_class = class AbsObjInfo {
        constructor() {
          this.objType = (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).default;
          this.abs = void 0;
          this.isRecycle = false;
          this.configId = void 0;
          this.configTab = void 0;
          this.clientAttr = new Map();
        }

        //子弹属性 各种次数增加
        destroy() {
          this.abs = null;
          this.configTab = null;
          this.clientAttr.clear();
        }
        /** 回收 */


        recycle() {
          (_crd && AbsObjFactory === void 0 ? (_reportPossibleCrUseOfAbsObjFactory({
            error: Error()
          }), AbsObjFactory) : AbsObjFactory).putData(this);
        }

        reset() {
          this.clientAttr.clear();
          this.abs = null;
          this.configId = 0;
          this.configTab = null;
        }

        setAbs(_abs) {
          this.abs = _abs;
        }

        setConfigId(id) {
          this.configId = id;
        }

        setConfigTab(conf) {
          this.configTab = conf;
        }

        init() {}

        updateFrame(dt) {}
        /** 属性设置 */


        setObjAttr(key, count = 0) {
          if (key == AbsObjInfoAttr.holdTime) {
            count = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).time;
          }

          this.clientAttr.set(key, count);
        }
        /** 属性增加 */


        addObjAttr(key, addCount = 0) {
          this.clientAttr.set(key, this.getObjAttr(key) + addCount);
        }
        /** 获取属性 */


        getObjAttr(key) {
          if (!this.clientAttr.has(key)) {
            this.setObjAttr(key, 0);
          }

          return this.clientAttr.get(key);
        }

        clearObjAttr(key) {
          this.setObjAttr(key, 0);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a4d4762b8d15e9286b2a2db6c38b9c1d49a7714.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, FightAttrData, FrameControl, AbsOwner, _crd, ccclass, property;

  function _reportPossibleCrUseOfFightAttrData(extras) {
    _reporterNs.report("FightAttrData", "../../data/FightAttrData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "./AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrameControl(extras) {
    _reporterNs.report("FrameControl", "../frame/FrameControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "./role/AbsRole", _context.meta, extras);
  }

  _export("AbsOwner", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      FightAttrData = _unresolved_2.FightAttrData;
    }, function (_unresolved_3) {
      FrameControl = _unresolved_3.FrameControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18cb6lmEatM3IUBOa/NlgBB", "AbsOwner", undefined);

      __checkObsolete__(['Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 归属
       * 子弹、buff，记录来源
       */

      _export("AbsOwner", AbsOwner = class AbsOwner {
        static get(objId) {
          var owner;

          if (this.pool.length > 0) {
            owner = this.pool.pop();
          } else {
            owner = new AbsOwner();
          }

          owner.setObjId(objId);
          return owner;
        }

        static put(obj) {
          obj.reset();
          this.pool.push(obj);
        }

        static destroy() {
          this.pool.length = 0;
        }

        constructor() {
          this.objId = void 0;
          this.objType = void 0;
          this.isLock = false;
          //锁定
          this.attrData = void 0;
          this.abs = void 0;
        }

        setObjId(id) {
          this.objId = id;
          this.isLock = false;
          this.getObj();

          if (this.abs) {
            //初始化属性
            this.objType = this.abs.objType;
          }
        }

        setOwner(owner) {
          this.objId = owner.objId;
          this.objType = owner.objType;
          this.isLock = true;
          this.attrCopy(owner.attrData);
        }

        attrCopy(attr) {
          if (this.attrData == null) {
            this.attrData = new (_crd && FightAttrData === void 0 ? (_reportPossibleCrUseOfFightAttrData({
              error: Error()
            }), FightAttrData) : FightAttrData)();
          }

          this.attrData.copy(attr);
        }

        lockAttr() {
          if (this.isLock) {
            return;
          }

          this.isLock = true;
          this.attrCopy(this.abs.info.attrData);
          this.abs = null;
        }

        getAttrData() {
          if (this.isLock) {
            return this.attrData;
          }

          if (this.abs) {
            return this.abs.info.attrData;
          }
        }

        reset() {
          this.objId = 0;
          this.objType = 0;
          this.isLock = false;
          this.abs = null;

          if (this.attrData) {
            this.attrData.clear();
          }
        }

        recycle() {
          AbsOwner.put(this);
        }

        getObj() {
          if (this.abs == null) {
            this.abs = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
              error: Error()
            }), FrameControl) : FrameControl).ins.getObjById(this.objId);
          }

          return this.abs;
        }

      });

      AbsOwner.pool = [];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ac3b56fdcc3baebc13f309111a9fdb6d16832df.js.map
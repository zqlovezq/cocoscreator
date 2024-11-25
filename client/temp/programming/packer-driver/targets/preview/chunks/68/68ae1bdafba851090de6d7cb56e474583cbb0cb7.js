System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, EquipMasterInfo, EquipData, _dec, _class, _crd, ccclass, property, EquipContainerInfo;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipMasterInfo(extras) {
    _reporterNs.report("EquipMasterInfo", "./EquipMasterInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "./EquipData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_2) {
      EquipMasterInfo = _unresolved_2.EquipMasterInfo;
    }, function (_unresolved_3) {
      EquipData = _unresolved_3.EquipData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f414bNzEsJPCaA7nB9e66m9", "EquipContainerInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EquipContainerInfo", EquipContainerInfo = (_dec = ccclass('EquipContainerInfo'), _dec(_class = class EquipContainerInfo extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).EquipContainerData {
        constructor() {
          super(...arguments);
          this._masterInfo = void 0;
          this._totalAttrMap = void 0;
        }

        merge(info) {
          for (var key in info) {
            this[key] = info[key];
          }
        }

        creatorNull(heroClass) {
          var data = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).EquipContainerData();
          data.heroClass = heroClass;
          data.slotData = [null, null, null, null, null, null];
          var slot = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).EquipSlotData();
          slot.equipId = 0;
          slot.refineLv = 0;
          slot.refineLv = 0;
          data.masterData = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).HeroMasterData();
          data.masterData.enhanceLv = 0;
          data.masterData.qualityLv = 0;
          data.masterData.refineLv = 0;
          this.merge(data);
        }

        initMasterInfo() {
          if (!this.masterData) {
            this.masterData = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).HeroMasterData();
            this.masterData.enhanceLv = 0;
            this.masterData.qualityLv = 0;
            this.masterData.refineLv = 0;
          }

          this._masterInfo = new (_crd && EquipMasterInfo === void 0 ? (_reportPossibleCrUseOfEquipMasterInfo({
            error: Error()
          }), EquipMasterInfo) : EquipMasterInfo)();

          this._masterInfo.merge(this.masterData);
        }

        get masteInfo() {
          if (!this._masterInfo) {
            this.initMasterInfo();
          }

          return this._masterInfo;
        }

        initTotalAttrMap() {
          this._totalAttrMap = new Map();

          for (var key in this.slotData) {
            var slot = this.slotData[key];

            if (slot && slot.equipId && slot.equipId != 0) {
              var equipInfo = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
                error: Error()
              }), EquipData) : EquipData).ins.getEquipInfoById(slot.equipId);

              if (equipInfo) {
                var attrs = equipInfo.totalAttr;
                attrs.forEach((value, key) => {
                  this.addAttr(key, value);
                });
              }
            }
          }

          var masterAttr = this.masteInfo.totalAttrMap;
          masterAttr.forEach((value, key) => {
            this.addAttr(key, value);
          });
        }

        addAttr(type, num) {
          if (this._totalAttrMap.has(type)) {
            this._totalAttrMap.set(type, this._totalAttrMap.get(type) + num);
          } else {
            this._totalAttrMap.set(type, num);
          }
        }

        get totalAttrMap() {
          if (!this._totalAttrMap) {
            this.initTotalAttrMap();
          }

          return this._totalAttrMap;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=68ae1bdafba851090de6d7cb56e474583cbb0cb7.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, error, log, EquipInfo, RoleData, proto, tab, EquipContainerInfo, UIMgr, ViewName, EventMgr, LocalEvent, EquipData, _crd, ccclass, property;

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "./EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLong(extras) {
    _reporterNs.report("Long", "protobufjs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipContainerInfo(extras) {
    _reporterNs.report("EquipContainerInfo", "./EquipContainerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  _export("EquipData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      error = _cc.error;
      log = _cc.log;
    }, function (_unresolved_2) {
      EquipInfo = _unresolved_2.EquipInfo;
    }, function (_unresolved_3) {
      RoleData = _unresolved_3.RoleData;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      EquipContainerInfo = _unresolved_5.EquipContainerInfo;
    }, function (_unresolved_6) {
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      ViewName = _unresolved_7.ViewName;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }, function (_unresolved_9) {
      LocalEvent = _unresolved_9.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3e82fsQrKZGk6JTrwQMNodI", "EquipData", undefined);

      __checkObsolete__(['Node', 'Prefab', '_decorator', 'error', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 装备数据 */

      _export("EquipData", EquipData = class EquipData {
        constructor() {
          this.equipMap = void 0;
          this.equip = void 0;
          // private masterInfoMap: Map<number, EquipMasterInfo>;
          this.heroMasterTableMap = void 0;
          this.containerInfoMap = void 0;
          this.equipUpgradeMap = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new EquipData();
          }

          return this._instance;
        }

        purge() {
          this.equipMap.clear();
        }

        initEquipData() {
          this.equipMap = new Map();
          this.equip = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.equip;
          var list = this.equip.equipList;

          for (var key in list) {
            var info = new (_crd && EquipInfo === void 0 ? (_reportPossibleCrUseOfEquipInfo({
              error: Error()
            }), EquipInfo) : EquipInfo)();
            info.merge(list[key]);
            this.setEquipInfoById(info.id, info);
          }

          var containerList = this.equip.containerList;
          this.containerInfoMap = new Map();

          for (var _key in containerList) {
            var conInfo = new (_crd && EquipContainerInfo === void 0 ? (_reportPossibleCrUseOfEquipContainerInfo({
              error: Error()
            }), EquipContainerInfo) : EquipContainerInfo)();
            conInfo.merge(containerList[_key]);
            var slotDatas = conInfo.slotData;

            for (var value of slotDatas) {
              var _info = this.getEquipInfoById(value.equipId);

              if (_info) {
                _info.isWear = true;
                _info.slotInfo = value;
                if (_info.equipTable.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).EquipType.EquipType_Feather) _info.heroClass = containerList[_key].heroClass;
              }
            }

            this.containerInfoMap.set(conInfo.heroClass, conInfo); // let masterData = conInfo.masterData;
            // if (masterData) {
            //     masterData = new proto.HeroMasterData();
            //     masterData.enhanceLv = 0;
            //     masterData.qualityLv = 0;
            //     masterData.refineLv = 0;
            //     conInfo.masterData=masterData;
            // }
            // let master = new EquipMasterInfo();
            // master.merge(containerList[key].masterData);
            // this.masterInfoMap.set(containerList[key].heroClass, master);
          } //----------后端有些数据不写默认数据，前端补全默认数据-------------


          var classs = [(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Assassin, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Archer, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Priest, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Caster, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Warrior];

          for (var _key2 in classs) {
            if (!this.containerInfoMap.get(classs[_key2])) {
              var _info2 = new (_crd && EquipContainerInfo === void 0 ? (_reportPossibleCrUseOfEquipContainerInfo({
                error: Error()
              }), EquipContainerInfo) : EquipContainerInfo)();

              _info2.creatorNull(classs[_key2]);

              this.containerInfoMap.set(classs[_key2], _info2);
            }
          }
        }

        initHeroMasterTableMap() {
          this.heroMasterTableMap = new Map();
          var tabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroMasterTable;

          for (var key in tabs) {
            this.heroMasterTableMap.set(tabs[key].Type + "_" + tabs[key].Level, tabs[key]);
          }
        }

        initEquipUpgradeMap() {
          this.equipUpgradeMap = new Map();
          var list = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().EquipUpgradeTable;

          for (var key in list) {
            this.equipUpgradeMap.set(list[key].Type + "_" + list[key].Level, list[key]);
          }
        }

        getEquipInfoById(id) {
          return this.equipMap.get(Number(id));
        }

        setEquipInfoById(id, info) {
          this.equipMap.set(Number(id), info);
        }

        getEquips() {
          return Array.from(this.equipMap.values());
        }

        remove(id) {
          var equipId = Number(id);
          this.equipMap.delete(equipId);
          log("删除装备===", id.toString()); // Func.removeBy(this.equips, "id", id)
        }

        removeEquipByIds(ids) {
          for (var key in ids) {
            this.equipMap.delete(Number(ids[key]));
          }
        }

        getEquipContainerDataByHeroClass(heroClass) {
          return this.containerInfoMap.get(heroClass);
        }

        getWearEquipInfosByHeroClass(heroClass) {
          var data = this.getEquipContainerDataByHeroClass(heroClass);

          if (!data) {
            return [null, null, null, null, null, null];
          }

          var infos = [];

          for (var value of data.slotData) {
            if (value && value.equipId) {
              infos.push(this.getEquipInfoById(value.equipId));
            } else {
              infos.push(null);
            }
          }

          return infos;
        }

        adds(equips) {
          for (var key in equips) {
            var info = this.getEquipInfoById(equips[key].id);

            if (!info) {
              info = new (_crd && EquipInfo === void 0 ? (_reportPossibleCrUseOfEquipInfo({
                error: Error()
              }), EquipInfo) : EquipInfo)();
              this.setEquipInfoById(equips[key].id, info);
            }

            info.merge(equips[key]);
          }
        }
        /**装备替换 */


        changeEquip(ids, heroClass) {
          if (heroClass === void 0) {
            heroClass = -1;
          }

          for (var key in ids) {
            var info = this.getEquipInfoById(ids[key]);
            var slotId = info.equipTable.Type;

            if (heroClass <= 0) {
              heroClass = info.heroClass;
            }

            if (slotId == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EquipType.EquipType_Feather) {
              var equData = void 0;

              if (info.heroClass > 0) {
                equData = this.getEquipContainerDataByHeroClass(info.heroClass);

                if (equData) {
                  if (equData.slotData[slotId]) {
                    equData.slotData[slotId].equipId = 0;
                  }
                }
              }

              equData = this.getEquipContainerDataByHeroClass(heroClass);

              if (equData) {
                var slotDatas = equData.slotData;

                if (slotDatas[slotId]) {
                  slotDatas[slotId].equipId = info.id;
                } else {
                  var slot = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                    error: Error()
                  }), proto) : proto).EquipSlotData();
                  slot.equipId = Number(ids[key]);
                  slot.enhanceLv = 0;
                  slot.refineLv = 0;
                  slotDatas[slotId] = slot;
                  info.slotInfo = slotDatas[slotId];
                }

                info.isWear = true;
                info.heroClass = equData.heroClass;
                equData.initTotalAttrMap();
              }
            } else {
              var _equData = this.getEquipContainerDataByHeroClass(heroClass);

              if (_equData) {
                var _slotDatas = _equData.slotData;

                if (_slotDatas[slotId]) {
                  var lastInfo = this.getEquipInfoById(_slotDatas[slotId].equipId);

                  if (lastInfo != info) {
                    if (lastInfo) {
                      lastInfo.isWear = false;
                      lastInfo.slotInfo = null;
                    }

                    info.isWear = true;
                    info.slotInfo = _slotDatas[slotId];
                  }

                  _slotDatas[slotId].equipId = Number(ids[key]);
                } else {
                  info.isWear = true;

                  var _slot = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                    error: Error()
                  }), proto) : proto).EquipSlotData();

                  _slot.equipId = Number(ids[key]);
                  _slot.enhanceLv = 0;
                  _slot.refineLv = 0;
                  _slotDatas[slotId] = _slot;
                  info.slotInfo = _slotDatas[slotId];
                }

                _equData.initTotalAttrMap();
              }
            }
          }

          log("处理穿戴数据");
        }
        /**
         * 更新装备槽数据
         */


        updateEquipSlotData(heroClass, slotDatas) {
          if (!heroClass) {
            var info = this.getEquipInfoById(slotDatas[0].slotData.equipId);
            heroClass = info.heroClass;
          }

          if (!heroClass) {
            error("更新装备Slot数据");
            return;
          }

          var equData = this.getEquipContainerDataByHeroClass(heroClass);

          if (equData) {
            for (var value of slotDatas) {
              equData.slotData[value.equipType] = value.slotData;

              var _info3 = this.getEquipInfoById(value.slotData.equipId);

              if (_info3) {
                _info3.slotInfo = value.slotData;

                _info3.refreshRefineEquipUpgradeTable();

                _info3.refreshEquipUpgradeTable();

                _info3.updateTotalAttr();
              }
            }

            equData.initTotalAttrMap();
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).Equip_Chang, heroClass);
          } else {
            error("更新装备Slot数据 equData 错误");
          }
        }
        /**
         * 更新装备大师数据
         * @param heroClass 
         * @param masterData 
         */


        updateEquipMasterData(heroClass, masterData) {
          var equData = this.getEquipContainerDataByHeroClass(heroClass);
          var qualityLv = equData.masteInfo.qualityMasterLevel;
          var enhanceLv = equData.masteInfo.enhanceMasterLevel;
          var refineLv = equData.masteInfo.refineMasterLevel;
          equData.masteInfo.merge(masterData);

          if (qualityLv < equData.masteInfo.qualityMasterLevel) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).EquipFettersPop,
              data: {
                "type": 1,
                "level": equData.masteInfo.qualityMasterLevel
              }
            });
          } else if (enhanceLv < equData.masteInfo.enhanceMasterLevel) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).EquipFettersPop,
              data: {
                "type": 2,
                "level": equData.masteInfo.enhanceMasterLevel
              }
            });
          } else if (refineLv < equData.masteInfo.refineMasterLevel) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).EquipFettersPop,
              data: {
                "type": 3,
                "level": equData.masteInfo.refineMasterLevel
              }
            });
          }
        }
        /**
         * 根据英雄职业获取可穿戴的背包装备列表
         */


        getEquipBagByHeroClass(heroClass) {
          var list = [];
          this.equipMap.forEach(value => {
            if (!value.isWear && heroClass == value.equipTable.Class) {
              list.push(value);
            }
          });
          return list;
        }
        /**
         * 获取装备槽信息
         * @param heroClass 
         * @param type 
         * @returns 
         */


        getEquipSlotByHeroClassAndType(heroClass, type) {
          var equData = this.getEquipContainerDataByHeroClass(heroClass);

          if (equData) {
            return equData.slotData[type];
          }

          return null;
        }

        getMasterInfoByHeroClass(heroClass) {
          var info = this.containerInfoMap.get(heroClass);
          return info.masteInfo;
        }

        getHeroMasterTableByTypeAndLevel(type, level) {
          if (!this.heroMasterTableMap) {
            this.initHeroMasterTableMap();
          }

          return this.heroMasterTableMap.get(type + "_" + level);
        }

        getJadeEquipInfos() {
          var list = [];
          this.equipMap.forEach((value, key) => {
            if (value.itemTable.BagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Jade) {
              list.push(value);
            }
          });
          return list;
        }

        getEquipUpgradeTab(type, level) {
          if (!this.equipUpgradeMap) {
            this.initEquipUpgradeMap();
          }

          return this.equipUpgradeMap.get(type + "_" + level);
        }

        updateEquipInfo(data) {
          var info = this.getEquipInfoById(data.id);

          if (info) {
            info.updateData(data);
          } else {
            this.adds([data]);
          }
        }

        switchEquip(id1, id2, heroClass1, heroClass2) {
          var equip1 = this.getEquipInfoById(id1);

          if (equip1) {
            equip1.heroClass = heroClass1;
            var cont = this.getEquipContainerDataByHeroClass(heroClass1);

            if (!cont.slotData[equip1.equipTable.Type]) {
              var data = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).EquipSlotData();
              data.equipId = 0;
              data.enhanceLv = 0;
              data.refineLv = 0;
              cont.slotData[equip1.equipTable.Type] = data;
            }

            cont.slotData[equip1.equipTable.Type].equipId = Number(id1);
            cont.initTotalAttrMap();
          }

          var equip2 = this.getEquipInfoById(id2);

          if (equip2) {
            equip2.heroClass = heroClass2;
            var cont2 = this.getEquipContainerDataByHeroClass(heroClass2);
            cont2.slotData[equip2.equipTable.Type].equipId = Number(id2);
          }

          if (!equip1 && equip2) {
            var _cont = this.getEquipContainerDataByHeroClass(heroClass1);

            _cont.slotData[equip2.equipTable.Type].equipId = 0;
          }

          if (!equip2 && equip1) {
            var _cont2 = this.getEquipContainerDataByHeroClass(heroClass2);

            _cont2.slotData[equip1.equipTable.Type].equipId = 0;
          }
        }

        undressEquip(euqipId, heroClass) {
          var equip1 = this.getEquipInfoById(euqipId);
          equip1.heroClass = 0;
          equip1.slotInfo = null;
          equip1.isWear = false;
          var cont2 = this.getEquipContainerDataByHeroClass(heroClass);
          cont2.slotData[equip1.equipTable.Type].equipId = 0;
          cont2.initTotalAttrMap();
        }

        lockEquip(euqipId, state) {
          var equip1 = this.getEquipInfoById(euqipId);
          equip1.locked = state;
        } // getContainerInfoByHoreClass(hero){
        // }


        getEquipBagFull(num) {
          var total = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().EquipMaxNum;
          var currNum = 0;
          var equips = this.getEquips();

          for (var key in equips) {
            if (!equips[key].isWear && equips[key].itemTable.BagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Equip) {
              currNum++;
            }
          }

          if (currNum + num > total) {
            return true;
          } else {
            return false;
          }
        }

      });

      EquipData._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ee018dc82989774f9d71d565e6db0c8ebb580a7b.js.map
import { Node, Prefab, _decorator, error, log } from "cc";
import { IClear } from "../../../framework/base/IAbs";
import { EquipInfo } from "./EquipInfo";
import { RoleData } from "../role/RoleData";
import { proto } from "client_protocol";
import { tab } from "../../../Table/table_gen";
import { Long, Type } from "protobufjs";
import { EquipMasterInfo } from "./EquipMasterInfo";
import { EquipContainerInfo } from "./EquipContainerInfo";
import { UIMgr } from "../../mgr/UIMgr";
import { ViewName } from "../../define/ViewDefine";
import { EventMgr } from "../../mgr/EventMgr";
import { LocalEvent } from "../../define/LocalEvent";


const { ccclass, property } = _decorator;

/** 装备数据 */
export class EquipData implements IClear {
    private static _instance: EquipData;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new EquipData();
        }
        return this._instance;
    }

    private equipMap: Map<number, EquipInfo>;
    private equip: proto.IEquipPbData;
    // private masterInfoMap: Map<number, EquipMasterInfo>;
    private heroMasterTableMap:Map<string,tab.HeroMasterTable>;
    private containerInfoMap:Map<number,EquipContainerInfo>;
    private equipUpgradeMap:Map<string,tab.EquipUpgradeTable>;
   
    purge(): void {
        this.equipMap.clear();
    }
    initEquipData() {
        this.equipMap = new Map();
        this.equip = RoleData.ins.equip;
        let list = this.equip.equipList;
        for (let key in list) {
            let info = new EquipInfo();
            info.merge(list[key])
            this.setEquipInfoById(info.id, info);
        }
        let containerList = this.equip.containerList;
        this.containerInfoMap = new Map();
        for (let key in containerList) {
            let conInfo=new EquipContainerInfo();
            conInfo.merge(containerList[key]);
            let slotDatas = conInfo.slotData;
            for (let value of slotDatas) {
                let info = this.getEquipInfoById(value.equipId);
                if (info) {
                    info.isWear = true;
                    info.slotInfo = value;
                if(info.equipTable.Type==tab.EquipType.EquipType_Feather)
                    info.heroClass=containerList[key].heroClass;
                }
            }
            this.containerInfoMap.set(conInfo.heroClass,conInfo);
            // let masterData = conInfo.masterData;
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
        }
        //----------后端有些数据不写默认数据，前端补全默认数据-------------
        let classs=[tab.HeroClass.HeroClass_Assassin,tab.HeroClass.HeroClass_Archer,tab.HeroClass.HeroClass_Priest,tab.HeroClass.HeroClass_Caster,tab.HeroClass.HeroClass_Warrior]
        for(let key in classs){
            if(!this.containerInfoMap.get(classs[key])){
                let info=new EquipContainerInfo();
                info.creatorNull(classs[key]);
                this.containerInfoMap.set(classs[key],info);
            }
        }
    }
    private initHeroMasterTableMap(){
        this.heroMasterTableMap=new Map();
        let tabs=tab.getData().HeroMasterTable;
        for(let key in tabs){
            this.heroMasterTableMap.set(tabs[key].Type+"_"+tabs[key].Level,tabs[key]);
        }
    }

    private initEquipUpgradeMap(){
        this.equipUpgradeMap=new Map();
        let list=tab.getData().EquipUpgradeTable;
        for(let key in list){
            this.equipUpgradeMap.set(list[key].Type+"_"+list[key].Level,list[key]);
        }
    }
    getEquipInfoById(id: number|Long) {
        return this.equipMap.get(Number(id));
    }
    setEquipInfoById(id: number|Long, info: EquipInfo) {
        this.equipMap.set(Number(id), info);
    }

    getEquips() {
        return Array.from(this.equipMap.values());
    }

    remove(id: number|Long) {
        const equipId = Number(id);
        this.equipMap.delete(equipId);
        log("删除装备===", id.toString())
        // Func.removeBy(this.equips, "id", id)
    }
    removeEquipByIds(ids: Array<number>) {
        for (let key in ids) {
            this.equipMap.delete(Number(ids[key]));
        }
    }
    getEquipContainerDataByHeroClass(heroClass: number) {
        return this.containerInfoMap.get(heroClass);
    }

    getWearEquipInfosByHeroClass(heroClass: number) {
        let data = this.getEquipContainerDataByHeroClass(heroClass);
        if (!data) {
            return [null, null, null, null, null, null];
        }
        let infos:Array<EquipInfo> = [];
        for (let value of data.slotData) {  
            if (value && value.equipId) {
                infos.push(this.getEquipInfoById(value.equipId))
            } else {
                infos.push(null);
            }
        }
        return infos;

    }
    adds(equips: proto.EquipData[]) {
        for (let key in equips) {
            let info = this.getEquipInfoById(equips[key].id);
            if (!info) {
                info = new EquipInfo();
                this.setEquipInfoById(equips[key].id, info);
            }
            info.merge(equips[key]);
        }
    }
    /**装备替换 */
    changeEquip(ids: Array<number|Long>,heroClass:number=-1) {
        for (let key in ids) {
            let info = this.getEquipInfoById(ids[key]);
            let slotId = info.equipTable.Type;
            if(heroClass<=0){
                heroClass=info.heroClass;
            }
            if(slotId==tab.EquipType.EquipType_Feather){
                let equData;
                if(info.heroClass>0){
                     equData = this.getEquipContainerDataByHeroClass(info.heroClass);
                    if(equData){
                        if(equData.slotData[slotId]){
                            equData.slotData[slotId].equipId=0;
                        }
                    }
                }
                equData = this.getEquipContainerDataByHeroClass(heroClass);
                if(equData){
                    let slotDatas = equData.slotData;
                    if(slotDatas[slotId]){
                        slotDatas[slotId].equipId=info.id;
                    }else{
                        let slot = new proto.EquipSlotData();
                        slot.equipId = Number(ids[key]);
                        slot.enhanceLv = 0;
                        slot.refineLv = 0;
                        slotDatas[slotId] = slot;
                        info.slotInfo = slotDatas[slotId]
                    }
                    info.isWear = true;
                    info.heroClass=equData.heroClass;
                    equData.initTotalAttrMap();
                }
            }else{
                let equData = this.getEquipContainerDataByHeroClass(heroClass);
                if (equData) {
                    let slotDatas = equData.slotData;
                    if (slotDatas[slotId]) {
                        let lastInfo = this.getEquipInfoById(slotDatas[slotId].equipId);
                        if (lastInfo != info) {
                            if (lastInfo) {
                                lastInfo.isWear = false;
                                lastInfo.slotInfo = null;
                            }
                            info.isWear = true;
                            info.slotInfo = slotDatas[slotId]
                        }
                        slotDatas[slotId].equipId = Number(ids[key]);
                    } else {
                        info.isWear = true;
                        let slot = new proto.EquipSlotData();
                        slot.equipId = Number(ids[key]);
                        slot.enhanceLv = 0;
                        slot.refineLv = 0;
                        slotDatas[slotId] = slot;
                        info.slotInfo = slotDatas[slotId]
    
                    }
                    equData.initTotalAttrMap();
                } 
            }

        }
        log("处理穿戴数据")
    }
   
    /**
     * 更新装备槽数据
     */
    updateEquipSlotData(heroClass: tab.HeroClass, slotDatas: proto.IUpdateEquipSlotData[]) {
        if (!heroClass) {
            let info = this.getEquipInfoById(slotDatas[0].slotData.equipId);
            heroClass = info.heroClass;
        }
        if (!heroClass) {
            error("更新装备Slot数据")
            return;
        }
       
        let equData = this.getEquipContainerDataByHeroClass(heroClass);
        if (equData) {
            for (let value of slotDatas) {
                equData.slotData[value.equipType] = value.slotData;
                let info = this.getEquipInfoById(value.slotData.equipId);
                if (info) {
                    info.slotInfo = value.slotData;
                    info.refreshRefineEquipUpgradeTable();
                    info.refreshEquipUpgradeTable();
                    info.updateTotalAttr();
                }
            }
            equData.initTotalAttrMap();
            EventMgr.emitLocal(LocalEvent.Equip_Chang,heroClass);
        } else {
            error("更新装备Slot数据 equData 错误")
        }

    }
    /**
     * 更新装备大师数据
     * @param heroClass 
     * @param masterData 
     */
    updateEquipMasterData(heroClass: tab.HeroClass, masterData: proto.IHeroMasterData) {
        let equData = this.getEquipContainerDataByHeroClass(heroClass);
        let qualityLv=equData.masteInfo.qualityMasterLevel;
        let enhanceLv=equData.masteInfo.enhanceMasterLevel;
        let refineLv=equData.masteInfo.refineMasterLevel;
        equData.masteInfo.merge(masterData as proto.HeroMasterData);
        if(qualityLv<equData.masteInfo.qualityMasterLevel){
            UIMgr.ins.show({viewName:ViewName.EquipFettersPop,data:{"type":1,"level":equData.masteInfo.qualityMasterLevel}})
        }else if(enhanceLv<equData.masteInfo.enhanceMasterLevel){
            UIMgr.ins.show({viewName:ViewName.EquipFettersPop,data:{"type":2,"level":equData.masteInfo.enhanceMasterLevel}})
        }else if(refineLv<equData.masteInfo.refineMasterLevel){
            UIMgr.ins.show({viewName:ViewName.EquipFettersPop,data:{"type":3,"level":equData.masteInfo.refineMasterLevel}})
        }
    }
    /**
     * 根据英雄职业获取可穿戴的背包装备列表
     */

    getEquipBagByHeroClass(heroClass: number) {
        let list:Array<EquipInfo>= [];
        this.equipMap.forEach((value) => {
            if (!value.isWear && heroClass == value.equipTable.Class) {
                list.push(value);
            }
        })
        return list;
    }
    /**
     * 获取装备槽信息
     * @param heroClass 
     * @param type 
     * @returns 
     */
    getEquipSlotByHeroClassAndType(heroClass: number, type: number) {
        let equData = this.getEquipContainerDataByHeroClass(heroClass);
        if (equData) {
            return equData.slotData[type];
        }
        return null;
    }
    getMasterInfoByHeroClass(heroClass: number) {
        let info = this.containerInfoMap.get(heroClass);
        return info.masteInfo; 
    }

    getHeroMasterTableByTypeAndLevel(type:tab.MasterType,level:number){
        if(!this.heroMasterTableMap){
            this.initHeroMasterTableMap();
        }
        return this.heroMasterTableMap.get(type+"_"+level);

    }
    getJadeEquipInfos(){
        let list:EquipInfo[]=[];
        this.equipMap.forEach((value,key)=>{
            if(value.itemTable.BagType==tab.BagType.BagType_Jade){
                list.push(value);
            }
        })
        return list;

    }
    getEquipUpgradeTab(type:tab.EquipUpgradeType,level:number){
        if(!this.equipUpgradeMap){
            this.initEquipUpgradeMap();
        }
        return this.equipUpgradeMap.get(type+"_"+level);
    }

    updateEquipInfo(data:proto.EquipData){
        let info=this.getEquipInfoById(data.id);
        if(info){
            info.updateData(data);
        }else{
          
            this.adds([data])
        }

    }
    switchEquip(id1:number|Long,id2:number|Long,heroClass1:number,heroClass2:number){
        let equip1=this.getEquipInfoById(id1);
        if(equip1){
            equip1.heroClass=heroClass1;
            let cont=this.getEquipContainerDataByHeroClass(heroClass1);
            if(!cont.slotData[equip1.equipTable.Type]){
                const data = new proto.EquipSlotData();
                data.equipId = 0;
                data.enhanceLv = 0;
                data.refineLv = 0;
                cont.slotData[equip1.equipTable.Type] = data;
            }
            cont.slotData[equip1.equipTable.Type].equipId=Number(id1);
            cont.initTotalAttrMap();
        }
        let equip2=this.getEquipInfoById(id2);
        if(equip2){
            equip2.heroClass=heroClass2;
            let cont2=this.getEquipContainerDataByHeroClass(heroClass2);
            cont2.slotData[equip2.equipTable.Type].equipId=Number(id2);
        }

        if(!equip1&&equip2){
            let cont2=this.getEquipContainerDataByHeroClass(heroClass1);
            cont2.slotData[equip2.equipTable.Type].equipId=0;
        }

        
        if(!equip2&&equip1){
            let cont2=this.getEquipContainerDataByHeroClass(heroClass2);
            cont2.slotData[equip1.equipTable.Type].equipId=0;
        }
      
    }
    undressEquip(euqipId:number|Long,heroClass:number){
        let equip1=this.getEquipInfoById(euqipId);
        equip1.heroClass=0;
        equip1.slotInfo=null;
        equip1.isWear=false;
        let cont2=this.getEquipContainerDataByHeroClass(heroClass);
        cont2.slotData[equip1.equipTable.Type].equipId=0;
        cont2.initTotalAttrMap();
    }
    lockEquip(euqipId:number|Long,state:boolean){
        let equip1=this.getEquipInfoById(euqipId);
        equip1.locked=state;
    }
    // getContainerInfoByHoreClass(hero){

    // }
    getEquipBagFull(num:number){
        let total= tab.getData().GetKeyValue_ConfigTable().EquipMaxNum;
        let currNum=0;
        let equips=this.getEquips();
        for(let key in equips){
            if(!equips[key].isWear&&equips[key].itemTable.BagType == tab.BagType.BagType_Equip){
                currNum++;
            }
        }
        if(currNum+num>total){
            return true;
        }else{
            return false;
        }
    }

}
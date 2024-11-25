import { _decorator, Component, Node } from 'cc';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { EquipData } from './EquipData';
const { ccclass, property } = _decorator;

@ccclass('EquipMasterInfo')
export class EquipMasterInfo extends proto.HeroMasterData {
    private _qualityTable:tab.HeroMasterTable;
    private _enhanceTable:tab.HeroMasterTable;
    private _refineTable:tab.HeroMasterTable;

    /**品质装备大师等级 */
    public qualityMasterLevel:number=0; 
    public enhanceMasterLevel:number=0; 
    public refineMasterLevel:number=0; 
    private _totalAttrMap:Map<number,number>;

   
    merge(masteInfo: proto.HeroMasterData) {
        if(masteInfo){
            if(masteInfo.qualityLv){
                this.qualityLv=masteInfo.qualityLv;
            }else{
                this.qualityLv=0;
            }
            if(masteInfo.enhanceLv){
                this.enhanceLv=masteInfo.enhanceLv;
            }else{
                this.enhanceLv=0;
            }
            if(masteInfo.refineLv){
                this.refineLv=masteInfo.refineLv;
            }else{
                this.refineLv=0;
            }

        }else{
            this.enhanceLv=0;
            this.qualityLv=0;
            this.refineLv=0;
        }
        // for (const key in masteInfo) {
        //     this[key] = masteInfo[key]
        // }
        this._enhanceTable=null;
        this._refineTable=null;
        this._qualityTable=null;
        this._totalAttrMap=null;
        this.initMaserLevel();
      
        
    }
    public initMaserLevel(){
        let list=tab.getData().HeroMasterTable;
        // this.qualityMasterLevel=0;
        // for(let key in list){
        //     let tabdata=list[key];
        //     if(tabdata.Type==tab.MasterType.MasterType_Quality){
        //         if(this.qualityLv>=tabdata.Require){
        //             if(tabdata.Level>=this.qualityMasterLevel){
        //                 this.qualityMasterLevel=tabdata.Level;
        //             }
        //         }
        //     }else if(tabdata.Type==tab.MasterType.MasterType_Enhance){
        //         if(this.enhanceLv>=tabdata.Require){
        //             if(tabdata.Level>=this.enhanceMasterLevel){
        //                 this.enhanceMasterLevel=tabdata.Level;
        //             }
        //         }
        //     }else if(tabdata.Type==tab.MasterType.MasterType_Refine){
        //         if(this.refineLv>=tabdata.Require){
        //             if(tabdata.Level>=this.refineMasterLevel){
        //                 this.refineMasterLevel=tabdata.Level;
        //             }
        //         }
        //     }

        // }
        if (this.qualityLv != 0) {
            let cfg = tab.getData().HeroMasterTableById.getValue(this.qualityLv);
            if (cfg) {
                this.qualityMasterLevel = cfg.Level;
            }
        }

        if (this.enhanceLv != 0) {
            let cfg = tab.getData().HeroMasterTableById.getValue(this.enhanceLv);
            if (cfg) {
                this.enhanceMasterLevel = cfg.Level;
            }
        }

        if (this.refineLv != 0) {
            let cfg = tab.getData().HeroMasterTableById.getValue(this.refineLv);
            if (cfg) {
                this.refineMasterLevel = cfg.Level;
            }
        }
    }
    private initTotalAttrMap(){
        this._totalAttrMap=new Map();
        let atts=[]
        if(this.qualityTable){
            atts=atts.concat(this.qualityTable.AttrList);
        }
        if(this.enhanceTable){
            atts=atts.concat(this.enhanceTable.AttrList);
        }
        if(this.refineTable){
            atts=atts.concat(this.refineTable.AttrList);
        }
        for(let key in atts){
            let attrTab=tab.getData().EquipAttrTableById.getValue(atts[key]);
            this.addAttr(attrTab.AttrType,attrTab.Base);
        }
    }
    get totalAttrMap(){
        if(!this._totalAttrMap){
            this.initTotalAttrMap();
        }
        return this._totalAttrMap;
    }

    private addAttr(type:number,num:number){
        if(this._totalAttrMap.has(type)){
            this._totalAttrMap.set(type,this._totalAttrMap.get(type)+num);
        }else{
            this._totalAttrMap.set(type,num);
        }
    }

    get qualityTable(){
        if(this.qualityMasterLevel>0){
            this.refreshQualityTable();
            return this._qualityTable;
        }else{
            return null;
        }
    }
    refreshQualityTable(){
      
        this._qualityTable=EquipData.ins.getHeroMasterTableByTypeAndLevel(tab.MasterType.MasterType_Quality,this.qualityMasterLevel);
    }

    get enhanceTable(){
        if(this.enhanceMasterLevel>0){
            this.refreshEnhanceTable();
            return this._enhanceTable;
        }else{
            return null;
        }
    }
    refreshEnhanceTable(){
      
        this._enhanceTable=EquipData.ins.getHeroMasterTableByTypeAndLevel(tab.MasterType.MasterType_Enhance,this.enhanceMasterLevel);
    }

    get refineTable(){
        if(this.refineMasterLevel>0){
            this.refreshRefineTable();
            return this._refineTable;
        }else{
            return null;
        }
    }
    refreshRefineTable(){
        this._refineTable=EquipData.ins.getHeroMasterTableByTypeAndLevel(tab.MasterType.MasterType_Refine,this.refineMasterLevel);
    }
}



import { _decorator, Component, instantiate, Label, Node, Prefab, ProgressBar, Toggle } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { EquipmentAttrItem } from './EquipmentAttrItem';
import { EquipMasterInfo } from './EquipMasterInfo';
import { EquipData } from './EquipData';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('EquipMasterPop')
export class EquipMasterPop extends  ViewPop{
    @property(ProgressBar)
    progreBar:ProgressBar=null;
    @property(Label)
    currValueLab:Label=null;
    @property(Label)
    totalValueLab:Label=null;
    @property(Label)
    levelLab:Label=null;
    @property(Node)
    qualityNode:Node=null;
    @property(Node)
    strengthenNode:Node=null;
    @property(Node)
    forgeNode:Node=null;
    @property(Label)
    qualityLvLab:Label=null;
    @property(Label)
    qualityMasterLab:Label=null;

    @property(Label)
    strengthenLvLab:Label=null;
    @property(Label)
    strengthenMasterLab:Label=null;

    @property(Label)
    forgeLvLab:Label=null;
    @property(Label)
    forgeMasterLab:Label=null;
    @property(Node)
    attrContent:Node=null;
    @property(Prefab)
    attrItemPrefab:Prefab=null;
    @property(Toggle)
    toggle_quality:Toggle=null;
    @property(Toggle)
    toggle_enhance:Toggle=null;
    
    @property(Toggle)
    toggle_refine:Toggle=null;
    
    private currTag:number;

    private heroClass:number;
    private attrItemComs:Array<EquipmentAttrItem>;
    private currMasterInfo:EquipMasterInfo;
 
    register(): void {
       
    }
     start(): void {
        this.heroClass=this.openData["heroClass"];
        if(this.openData["type"]){
            this.currTag=this.openData["type"];
        }else{
            this.currTag=tab.MasterType.MasterType_Enhance;
        }
        if(this.currTag==tab.MasterType.MasterType_Enhance){
            this.toggle_enhance.isChecked=true;

        }else if(this.currTag==tab.MasterType.MasterType_Quality){
            this.toggle_quality.isChecked=true;

        }else if(this.currTag==tab.MasterType.MasterType_Refine){
            this.toggle_refine.isChecked=true;
        }
        this.attrItemComs=[];
        this.initView();
    }
    initView(){
        if(this.currTag==tab.MasterType.MasterType_Enhance){
            this.initEnhanceView();

        }else if(this.currTag==tab.MasterType.MasterType_Quality){
            this.initQualityView();

        }else if(this.currTag==tab.MasterType.MasterType_Refine){
            this.initRefineView();
        }
    }
    initQualityView(){
        this.qualityNode.active=true;
        this.forgeNode.active=false;
        this.strengthenNode.active=false;
        this.currMasterInfo=EquipData.ins.getMasterInfoByHeroClass(this.heroClass);
        let level=this.currMasterInfo.qualityMasterLevel;
        this.levelLab.string=this.currMasterInfo.qualityMasterLevel+"";
        let nextHeroMasterTab:tab.HeroMasterTable=EquipData.ins.getHeroMasterTableByTypeAndLevel(tab.MasterType.MasterType_Quality,level+1);
        let minLevel=this.getMinLevel(1);
      
        if(nextHeroMasterTab){
            this.qualityLvLab.node.active=true;
            this.qualityMasterLab.node.active=false;
            // let require=nextHeroMasterTab.Require;
            let level=nextHeroMasterTab.Level;
            this.qualityLvLab.string=LangMgr.getLab("heromaster_desc_1000"+level);
            // this.qualityMasterLab.string=nextHeroMasterTab.Level+"";
            this.progreBar.progress=minLevel/nextHeroMasterTab.Require;
            
            this.currValueLab.string=minLevel+"";
            this.totalValueLab.string=nextHeroMasterTab.Require+""
        }else{
            this.progreBar.progress=1;//minLevel/this.currMasterInfo.qualityTable.Require;
            
            this.currValueLab.string=this.currMasterInfo.qualityTable.Require+"";//minLevel+"";
            this.totalValueLab.string=this.currMasterInfo.qualityTable.Require+""
            //满级
            this.qualityLvLab.node.active=false;
            this.qualityMasterLab.node.active=true;
        }
        this.updateAtts(this.currMasterInfo.qualityTable,nextHeroMasterTab);
    }

    initRefineView(){
        this.qualityNode.active=false;
        this.forgeNode.active=true;
        this.strengthenNode.active=false;
        this.currMasterInfo=EquipData.ins.getMasterInfoByHeroClass(this.heroClass);
        let level=this.currMasterInfo.refineMasterLevel;
        this.levelLab.string=level+"";
        let nextHeroMasterTab:tab.HeroMasterTable=EquipData.ins.getHeroMasterTableByTypeAndLevel(tab.MasterType.MasterType_Refine,level+1);
        let minLevel=this.getMinLevel(3);
        if(nextHeroMasterTab){
            this.forgeLvLab.string=LangMgr.getLab("heromaster_desc_3000"+nextHeroMasterTab.Level);
            this.forgeMasterLab.node.active=false;
            this.forgeLvLab.node.active=true;
            // this.forgeMasterLab.string=nextHeroMasterTab.Level+"";
            this.progreBar.progress=minLevel/nextHeroMasterTab.Require;
            this.currValueLab.string=minLevel+"";
            this.totalValueLab.string=nextHeroMasterTab.Require+""
        }else{
            //满级
            this.forgeMasterLab.node.active=true;
            this.forgeLvLab.node.active=false;
            this.progreBar.progress=1;//minLevel/this.currMasterInfo.refineTable.Require;
            this.currValueLab.string=this.currMasterInfo.refineTable.Require+"";//minLevel+"";
            this.totalValueLab.string=this.currMasterInfo.refineTable.Require+""
        }
        this.updateAtts(this.currMasterInfo.refineTable,nextHeroMasterTab);
    }
    initEnhanceView(){
        this.qualityNode.active=false;
        this.forgeNode.active=false;
        this.strengthenNode.active=true;
        this.currMasterInfo=EquipData.ins.getMasterInfoByHeroClass(this.heroClass);
        let level=this.currMasterInfo.enhanceMasterLevel;
        this.levelLab.string=level+"";
        let nextHeroMasterTab:tab.HeroMasterTable=EquipData.ins.getHeroMasterTableByTypeAndLevel(tab.MasterType.MasterType_Enhance,level+1);
        let minLevel=this.getMinLevel(2);
        if(nextHeroMasterTab){
            this.strengthenLvLab.node.active=true;
            this.strengthenMasterLab.node.active=false;
            this.strengthenLvLab.string=LangMgr.getLab("heromaster_desc_2000"+nextHeroMasterTab.Level);
            // this.strengthenMasterLab.string=nextHeroMasterTab.Level+"";
            this.progreBar.progress=minLevel/nextHeroMasterTab.Require;
            this.currValueLab.string=minLevel+"";
            this.totalValueLab.string=nextHeroMasterTab.Require+""
            
        }else{
            this.strengthenLvLab.node.active=false;
            this.strengthenMasterLab.node.active=true;
            this.progreBar.progress=1;//minLevel/this.currMasterInfo.enhanceTable.Require;
            this.currValueLab.string=this.currMasterInfo.enhanceTable.Require+"";//minLevel+"";
            this.totalValueLab.string=this.currMasterInfo.enhanceTable.Require+""
            
        }
        this.updateAtts(this.currMasterInfo.enhanceTable,nextHeroMasterTab);
    }

    getMinLevel(type:number){
        let allEquips=EquipData.ins.getWearEquipInfosByHeroClass(this.heroClass);
        let minLevel=-1;
        for(let i:number=1;i<5;i++){
            if(allEquips[i]){
                let level=0;
                if(type==1){
                    level=allEquips[i].equipTable.MasterLevel;
                }else if(type==2){
                    level=allEquips[i].enhanceLv;
                }else if(type==3){
                    level=allEquips[i].refineLv
                }
                if(minLevel==-1){
                    minLevel=level;
                }
                if(level<minLevel){
                    minLevel=level;
                }
            }else{
                minLevel=0;
            }
        }
        if(minLevel==-1){
            minLevel=0;
        }
        return minLevel;
    }

    updateAtts(currMasterInfo:tab.HeroMasterTable,nextMasterInfo:tab.HeroMasterTable){
        let attrMaps:Map<number,any>=new Map();
        if(currMasterInfo){
            let atts=currMasterInfo.AttrList;
            for(let key in atts){
                let item=tab.getData().EquipAttrTableById.getValue(atts[key]);
                let info=attrMaps.get(item.AttrType);
                if(info){
                    info.value+=item.Base;
                }else{
                    info={"value":item.Base,"next":0}
                    attrMaps.set(item.AttrType,info);
                }
            }
        }
        if(nextMasterInfo){
            let atts=nextMasterInfo.AttrList;
            for(let key in atts){
                let item=tab.getData().EquipAttrTableById.getValue(atts[key]);
                let info=attrMaps.get(item.AttrType);
                if(info){
                    info.next+=item.Base;
                }else{
                    info={"value":0,"next":item.Base}
                    attrMaps.set(item.AttrType,info);
                }
            }
        }

        for(let key in this.attrItemComs){
            this.attrItemComs[key].node.active=false;
        }

        let index=0;
        attrMaps.forEach((vlaue,key)=> {
            if(!this.attrItemComs[index]){
                let node:Node=instantiate(this.attrItemPrefab);
                node.parent=this.attrContent;
                this.attrItemComs.push(node.getComponent(EquipmentAttrItem));
            }
            this.attrItemComs[index].node.active=true;
            this.attrItemComs[index].initView(key,vlaue.value,vlaue.next,"")
            index++;
        });
    }
    onClickTogle(event,type){
        if(Number(type)!=this.currTag){
            this.currTag=Number(type);
            this.initView();
        }

    }
}



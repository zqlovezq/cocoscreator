import { _decorator, Component, EventTouch, instantiate, Label, log, Node, Prefab, Sprite } from 'cc';
import { EquipInfo } from './EquipInfo';
import { proto } from 'client_protocol';
import { EquipAttrInfo } from './EquipAttrInfo';
import { EquipmentAttrItem } from './EquipmentAttrItem';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { LangMgr } from '../../mgr/LangMgr';
import { tab } from '../../../Table/table_gen';

const { ccclass, property } = _decorator;

@ccclass('EquipmentViewItem')
export class EquipmentViewItem extends Component {
    @property(Label)
    nameLab:Label=null;
    @property(Label)
    maxLevelLab:Label=null;
    @property(Label)
    nowLab:Label=null;
    @property(Label)
    nextLab:Label=null;
    @property(Node)
    attrNode:Node=null;
    @property(Prefab)
    attrItemPrefab=null;

    private slotInfo:proto.IEquipSlotData;
    private equipInfo:EquipInfo;
    private currLevel:number;
    private isMaxLevel:boolean;
    private type:number;

    start() {

    }
    initData(equipInfo:EquipInfo,type:number){
        this.slotInfo=equipInfo.slotInfo;
        this.equipInfo=equipInfo;
        this.type=type;
        if(type==1){
            //强化
            let limitLevel=equipInfo.equipTable.EnhanceLimit;
            this.maxLevelLab.string=limitLevel+""
            let qhstr=LangMgr.getLab(tab.EquipUpgradeType[tab.EquipUpgradeType.EquipUpgradeType_Enhance])
            // this.nameLab.string="强化等级(上限"+limitLevel+"级)";
            this.nameLab.string=LangMgr.getCombineString("ui_equip_1",[qhstr])+LangMgr.getCombineString("ui_equip_2",[limitLevel]);
          
            this.currLevel=this.equipInfo.enhanceLv;
            // for(let key in this.equipInfo.)
          
            if(this.equipInfo.enhanceLv>=limitLevel){
                //该装备强化上限
                this.nowLab.string=limitLevel+""
                this.isMaxLevel=true;
                this.nextLab.string=LangMgr.getLab("ui_equip_18");
            }else{
                this.nowLab.string=this.slotInfo.enhanceLv+""
                this.isMaxLevel=false;
                this.nextLab.string=this.slotInfo.enhanceLv+1+"";
            }
            this.initAttrItem(this.equipInfo.baseAttrInfos);

            
        }else if(type==2){
          
            let limitLevel=equipInfo.equipTable.RefineLimit;
            let qhstr=LangMgr.getLab(tab.EquipUpgradeType[tab.EquipUpgradeType.EquipUpgradeType_Refine])
            // this.nameLab.string="强化等级(上限"+limitLevel+"级)";
            this.nameLab.string=LangMgr.getCombineString("ui_equip_1",[qhstr])+LangMgr.getCombineString("ui_equip_2",[limitLevel]);
           

          
            this.currLevel=this.equipInfo.refineLv;
            // for(let key in this.equipInfo.)
          
            if(this.equipInfo.refineLv>=limitLevel){
                //该装备强化上限
                this.nowLab.string=limitLevel+""
                this.isMaxLevel=true;
            }else{
                this.nowLab.string=this.equipInfo.refineLv+""
                this.isMaxLevel=false;
                this.nextLab.string=this.equipInfo.refineLv+1+"";
            }
            this.initAttrItem(this.equipInfo.extraAttrInfos);
        }
    }
    onClickHelpBtn(event:EventTouch){
        // log("type===",this.type);
        let node:Node=event.currentTarget;
        let key="Tips_equip_1"
        if(this.type==1){
            key="Tips_equip_1"
        }else{
            key="Tips_equip_2"
        }
        UIMgr.ins.show({ viewName: ViewName.CommonBlackTipsPop,data:{"worldPos":node.worldPosition,"WordTableKey":key }});
    
        
    }
   

    initAttrItem(attrs:Array<EquipAttrInfo>){
        this.attrNode.removeAllChildren();
        for(let key in attrs){
            let node:Node= instantiate(this.attrItemPrefab);
            node.getComponent(EquipmentAttrItem).initData(attrs[key],this.currLevel,this.isMaxLevel)
            node.parent=this.attrNode;
           
        }


    }

 
}



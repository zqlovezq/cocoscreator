import { _decorator, Color, Component, instantiate, Label, Node, Prefab } from 'cc';
import { HeroItem } from '../../item/HeroItem';
import { HeroAttrItem } from './HeroAttrItem';
import { EquipData } from '../../equip/EquipData';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { tab } from '../../../../Table/table_gen';
import { ShowTips, UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { EquipContainerInfo } from '../../equip/EquipContainerInfo';
import { EquipControl } from '../../equip/EquipControl';
import { EquipSlotInfo } from '../../equip/EquipSlotInfo';
import { HeroEquipSlotItem } from './HeroEquipSlotItem';
import { LangMgr } from '../../../mgr/LangMgr';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
import { RoleData } from '../../role/RoleData';
const { ccclass, property } = _decorator;

@ccclass('HeroDetailEquipItem')
export class HeroDetailEquipItem extends Component {
    @property(Node)
    inteamNode: Node = null;
    @property(Node)
    notinteamNode: Node = null;
    @property(Node)
    equipNode: Node = null;
    @property(Node)
    specialEquipNode = null;
    @property(Node)
    equipAttrNode: Node = null;
   
    @property(Prefab)
    attrItemPrefab:Prefab=null;
    @property(Node)
    node_equip_red:Node = null;

    @property([HeroEquipSlotItem])
    public equipItems:Array<HeroEquipSlotItem>=[];

    @property([Node])
    masterNodes:Array<Node>=[];
    // public specialEquipItems:Array<HeroItem>;
    private equipAttrItems:Array<HeroAttrItem>;
    private heroClass:number;
    private currContainerInfo:EquipContainerInfo;

    onLoad(): void {
    
        this.equipAttrItems=[];

    }
    start() {

    }

    initView(heroClass:number,isTeam:boolean){
        this.heroClass=heroClass;
        if(isTeam){
            this.inteamNode.active=true;
            this.notinteamNode.active=false;
            this.currContainerInfo=EquipData.ins.getEquipContainerDataByHeroClass(this.heroClass);
            this.initEquipItem();
            this.updateAttrs();
            this.updateMaster();
            this.node_equip_red.active = RedMgr.ins.isRed(RedDotType.Wear_Equip, String(this.heroClass));
        }else{
            this.inteamNode.active=false;
            this.notinteamNode.active=true;
        }

    }
    private initEquipItem(){
        let datas=EquipData.ins.getWearEquipInfosByHeroClass(this.heroClass);
        // EquipType_Gloves = 1, // 手套 
		// EquipType_Clothing = 2, // 衣服 
		// EquipType_Cloak = 3, // 披风 
		// EquipType_Hat = 4, // 帽子 
        // let types=[tab.EquipType.EquipType_Gloves,tab.EquipType.EquipType_Clothing,tab.EquipType.EquipType_Cloak,tab.EquipType.EquipType_Hat]
        // for(let key in types){
        //     let data=datas[types[key]];
        //     if(!this.equipItems[key]){
        //         let node=ItemPoolMgr.ins.createHeroOrEquip(data);
        //         node.parent=this.equipNode;
        //         this.equipItems.push(node.getComponent(HeroItem));
        //     }
        //     this.equipItems[key].UpdateContent(data);
        // }
      
        for(let i:number=0;i<this.equipItems.length;i++ ){
            this.equipItems[i].initData(this.heroClass,i+1,datas[i+1])
        }
        
    }
    updateAttrs(){
        for(let key in this.equipAttrItems){
            this.equipAttrItems[key].node.active=false;
        }
        let conts=this.currContainerInfo;
       
        let totalMaps=conts.totalAttrMap;
        let index=0;
        totalMaps.forEach((value,key)=>{
            let table=tab.getData().HeroAttrClientTableByType.getValue(key);
            if(table&&table.IsBase){
                if(!this.equipAttrItems[index]){
                    let node=instantiate(this.attrItemPrefab);
                    node.parent=this.equipAttrNode;
                    this.equipAttrItems.push(node.getComponent(HeroAttrItem));
                }
                this.equipAttrItems[index].node.active=true;
                this.equipAttrItems[index].initView(key,value,table.Icon);
                index++;
            }
           
        })
        
    }
    updateMaster(){

        let qLv=this.currContainerInfo.masteInfo.qualityMasterLevel;
        let eLv=this.currContainerInfo.masteInfo.enhanceMasterLevel;
        let rLv=this.currContainerInfo.masteInfo.refineMasterLevel;
        this.initMasterItem(0,qLv);
        this.initMasterItem(1,eLv);
        this.initMasterItem(2,rLv);
        // if(qLv>0){
        //     this.qualityMasterLvLab.string=qLv+"";
        // }else{
        //     this.qualityMasterLvLab.string="未激活";
        // }
        // if(eLv>0){
        //     this.strengthenMasterLvLab.string=eLv+"";
        // }else{
        //     this.strengthenMasterLvLab.string="未激活";
        // }
        // if(rLv>0){
        //     this.forgeMasterLvLab.string=rLv+"";
        // }else{
        //     this.forgeMasterLvLab.string="未激活";
        // }
    }

    private initMasterItem(index:number,level:number){
        let item=this.masterNodes[index];
        let nameLab=item.getChildByName("txt").getComponent(Label);
        let lvLab=item.getChildByName("lv_txt").getComponent(Label);
        let lock_txt=item.getChildByName("lock_txt");
        if(level>0){
            lvLab.node.active=true;
            lvLab.string=LangMgr.getCombineString("ui_heroresonancepop_3",[level]);
            nameLab.color= new Color(255, 255, 255, 255)
            // lvLab.color= new Color(3, 226, 242, 255)
            lock_txt.active=false;
        }else{
            lvLab.node.active=false;
            lock_txt.active=true;
            nameLab.color= new Color(133, 147, 189, 255)
            // lvLab.color= new Color(255, 255, 255, 255)
        }
    }
    onClickOneWear() {
        const isEquipGuide = Boolean(RoleData.ins.clientData.equipGuildOver);
        if(!isEquipGuide){
            RoleData.ins.setClientData("equipGuildOver","true");
        }
        EquipControl.ins.reqOnekeyEquips(this.heroClass);
        
    }
    onClickStrengthen() {
        UIMgr.ins.show({viewName:ViewName.EquipmentView,data:{"type":1,"heroClass":this.heroClass}});
    }
    onClickMaster(){
        UIMgr.ins.show({ viewName: ViewName.EquipMasterPop,data:{"heroClass":this.heroClass,"type":1} });
    }
    onClickAttrTip(){
        UIMgr.ins.show({ viewName: ViewName.HeroAttrPop,data:{"attrMap":this.currContainerInfo.totalAttrMap}});
    }


}



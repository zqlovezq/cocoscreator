import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { EquipAttrInfo } from './EquipAttrInfo';
import { LangMgr } from '../../mgr/LangMgr';
import { tab } from '../../../Table/table_gen';
const { ccclass, property } = _decorator;

@ccclass('EquipmentAttrItem')
export class EquipmentAttrItem extends Component {
   @property(Sprite)
   iconSpr:Sprite=null;
   @property(Label)
   nowLab:Label=null;
   @property(Label)
   nextLab:Label=null;
   @property(Node)
   arrowNode:Node=null;

   protected start(): void {
       
   }
   initData(info:EquipAttrInfo,level:number,isMax:boolean){
      let t=tab.getData().HeroAttrClientTableByType.getValue(info.attrTable.AttrType)
      this.iconSpr.setTexture(t.Icon);
      //  this.nameLab.string=LangMgr.getLab(tab.AttrType[info.attrTable.AttrType]);
       this.nowLab.string=(info.attrTable.Base+info.getAddValueByLevel(level))+"";
       this.nextLab.string=(info.attrTable.Base+info.getAddValueByLevel(level+1))+"";
   }
   initView(type:tab.AttrType,value:number,addValue:number,icon:string){
      // this.iconSpr.setTexture(icon);
      let t=tab.getData().HeroAttrClientTableByType.getValue(type);
      this.iconSpr.setTexture(t.Icon);
      // this.nameLab.string=LangMgr.getLab(tab.AttrType[type]);
      this.nowLab.string=value+"";
      if(addValue==0){
         this.arrowNode.active=false;
         this.nextLab.node.active=false;
      }else{
         this.arrowNode.active=true;
         this.nextLab.node.active=true;
         this.nextLab.string=addValue+"";
      }
     
   }
}



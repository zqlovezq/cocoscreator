import { _decorator, Color, Component, Label, Node, RichText } from 'cc';
import { HeroStar } from '../hero/HeroStar';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookLevelPreviewPopItem
 * zhudingchao
 * Mon May 27 2024 20:13:07 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookLevelPreviewPopItem.ts
 *
 */

@ccclass('RareBookLevelPreviewPopItem')
export class RareBookLevelPreviewPopItem extends Component {
  @property(HeroStar)
  heroStar:HeroStar=null;
  @property(Label)
  effectdescLab:Label=null;
  @property([Node])
  unLockNodes:Node[]=[];
  initData(table:tab.BookStarTable,isReach:boolean=false){
     this.heroStar.showStar(table.Level);
    this.effectdescLab.string=LangMgr.getLab(table.Description);
    if(isReach){
      for(let key in this.unLockNodes){
        this.unLockNodes[key].active=false;
      }
        // this.effectdescLab.color=new Color().fromHEX(tab.getData().GetKeyValue_ConfigTable().InterfaceTxtGreen);
    }else{
      for(let key in this.unLockNodes){
        this.unLockNodes[key].active=true;
      }
    }
  }
  protected onDisable(): void {
    this.heroStar.onDisable();
  }
}
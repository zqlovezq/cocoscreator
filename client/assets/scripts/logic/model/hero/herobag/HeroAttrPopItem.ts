import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import { GameUtil } from '../../../utils/GameUtil';
const { ccclass, property } = _decorator;

@ccclass('HeroAttrPopItem')
export class HeroAttrPopItem extends Component {

    @property(Sprite)
    icon:Sprite=null;
    @property(Label)
    nameLab:Label=null;
    @property(Label)
    nowLab:Label=null;
    start() {

    }
    initData(attr:number|tab.HeroAttrClientTable,value:number){
        let attrType:number;
        let tabData:tab.HeroAttrClientTable;
        if(typeof attr == "number"){
            attrType=Number(attr);
            tabData=tab.getData().HeroAttrClientTableByType.getValue(attrType)
        }else{
            tabData=attr as tab.HeroAttrClientTable;
            attrType=tabData.Type;


        }
        this.icon.setTexture(tabData.Icon);
        this.nameLab.string=LangMgr.getLab(tab.AttrType[attrType]);
        this.nowLab.string=tabData.ShowPercent?(value/100)+"%":GameUtil.convertNumber(value)+""

    }

}



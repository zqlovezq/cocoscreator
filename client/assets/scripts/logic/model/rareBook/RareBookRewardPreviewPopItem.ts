import { _decorator, Component, instantiate, Label, Node, Prefab } from 'cc';
import { RareBookInfo } from './RareBookInfo';
import { RareBookSmallItem } from './RareBookSmallItem';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookRewardPreviewPopItem
 * zhudingchao
 * Mon May 27 2024 21:04:59 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookRewardPreviewPopItem.ts
 *
 */

@ccclass('RareBookRewardPreviewPopItem')
export class RareBookRewardPreviewPopItem extends Component {
    @property(Node)
    quality1:Node=null;
    @property(Node)
    quality2:Node=null;
    @property(Node)
    quality3:Node=null;
    @property(Label)
    probabilityLab:Label=null;
    @property(Node)
    rarebookLayout:Node=null;
    @property(Prefab)
    smallBoolItemPrefab=null;

    initData(quality:number,infos:Array<RareBookInfo>){
        for(let key in infos){
            let item=instantiate(this.smallBoolItemPrefab);
            item.parent=this.rarebookLayout;
           let com:RareBookSmallItem= item.getComponent(RareBookSmallItem);
           com.initView(infos[key],true,this.onTouchItem);
        }
        let str="";
        if(quality==tab.HeroAptitude.HeroAptitude_N){
            this.quality1.active=true;
            this.quality2.active=false;
            this.quality3.active=false;
            str="ui_book_probability_n";

        }else if(quality==tab.HeroAptitude.HeroAptitude_R){
            this.quality1.active=false;
            this.quality2.active=true;
            this.quality3.active=false;
            str="ui_book_probability_r";
        }else if(quality==tab.HeroAptitude.HeroAptitude_SR){
            this.quality1.active=false;
            this.quality2.active=false;
            this.quality3.active=true;
            str="ui_book_probability_sr";
        }
        this.probabilityLab.string=LangMgr.getLab(str);
    }

    onTouchItem(info:RareBookInfo){
        UIMgr.ins.hideView(ViewName.RareBookRewardPreviewPop);
        UIMgr.ins.show({ viewName: ViewName.RareBookDetailView,data:{"currInfo":info}})
       
    }


}
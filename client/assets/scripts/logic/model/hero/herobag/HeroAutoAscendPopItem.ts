import { _decorator, Component, Label, log, Node, Toggle } from 'cc';
import { HeroInfo } from '../HeroInfo';
import { HeroData } from '../HeroData';
import { HeroItem } from '../../item/HeroItem';
import { EventMgr } from '../../../mgr/EventMgr';
import { LocalEvent } from '../../../define/LocalEvent';
const { ccclass, property } = _decorator;

@ccclass('HeroAutoAscendPopItem')
export class HeroAutoAscendPopItem extends Component {
    @property(Node)
    node_next:Node = null;
    @property(Node)
    node_need:Node = null;
    @property(Node)
    node_material:Node = null;

    @property(Label)
    lbl_material_count:Label = null;

    @property(Toggle)
    toggle_select:Toggle = null;

    private _isCheck:boolean = true;
    private _heroId:number = 0;
    initData(materialArr:HeroInfo[],heroId:number){
        this._isCheck = true;
        this.toggle_select.isChecked = true;
        /* 初始化要升星的heroid */
        this._heroId = heroId;
        let heroInfo = HeroData.ins.getById(heroId);
        let materialHeroInfo = materialArr[0];
        let nextHeroInfo = new HeroInfo();
        nextHeroInfo.itemId = heroInfo.itemId;
        nextHeroInfo.id = 0;
        nextHeroInfo.level = heroInfo.getHeroLevel();
        nextHeroInfo.star = heroInfo.star+1;

        let lv = heroInfo.getHeroLevel();
        this.lbl_material_count.string = "x"+materialArr.length;

        this.createItem(heroInfo,this.node_need);
        this.createItem(materialHeroInfo,this.node_material,0);
        this.createItem(nextHeroInfo,this.node_next,lv)
    }
    createItem(heroInfo:HeroInfo,node:Node,lv?:number){
        let item = node.children[0];
        let ts:HeroItem = item.getComponent(HeroItem)
        ts.UpdateContent(heroInfo);
        ts.setSelect(false);
        ts.setLevel(0);
    }
    clickSelect(){
        this._isCheck = !this._isCheck;
        this.toggle_select.isChecked = this._isCheck;
        EventMgr.emitLocal(LocalEvent.Delete_Star_Up_Hero,this._heroId,!this._isCheck);
    }
}



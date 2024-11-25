import { _decorator, Component, instantiate, Node, Prefab, RichText, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { ItemInfo } from '../item/ItemInfo';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { LangMgr } from '../../mgr/LangMgr';
import { HeroInfo } from '../hero/HeroInfo';
import { HeroItem } from '../item/HeroItem';
import { CommonItem } from '../item/CommonItem';
import { WeaponItem } from '../common/WeaponItem';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { RecruitType } from '../../../Common/script/EnumTypeMgr';
const { ccclass, property } = _decorator;

@ccclass('RecruitProbabilityItem')
export class RecruitProbabilityItem extends Component {
    @property(Prefab)
    pfb_hero_item:Prefab = null;
    @property(Prefab)
    pfb_rare_book:Prefab = null;
    @property(Node)
    node_content:Node = null;
    @property(RichText)
    rich_text_aptitude:RichText = null;
    private _heroAptitudeTable:tab.HeroAptitudeTable = null;
    protected onLoad(): void {
       
    }
    setHeroData(dataArr:number[],Aptitude:tab.HeroAptitude,type:RecruitType,extra?:string){
        this._heroAptitudeTable = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(Aptitude);

        let TipsStr = "";
        let TipsStrArr = [];
        if(type==RecruitType.Senior){
            TipsStr = "Tips_recruit_"
            this.rich_text_aptitude.string = LangMgr.getLab(TipsStr+Aptitude);
        }else if(type==RecruitType.Friend){
            TipsStr = "Tips_recruit_friend_"
            this.rich_text_aptitude.string = LangMgr.getLab(TipsStr+Aptitude);
        }else if(type==RecruitType.SeniorGuarantee){
            TipsStr = "Tips_recruit_must_1";
            this.rich_text_aptitude.string = LangMgr.getLab(TipsStr);
        }else if(type===RecruitType.Book){
            TipsStr = "Tips_bookprob_"
            this.rich_text_aptitude.string = LangMgr.getLab(TipsStr+Aptitude);
        }else if(type===RecruitType.BookGuarantee){
            TipsStr = "Tips_bookprob_must_1"
            this.rich_text_aptitude.string = LangMgr.getLab(TipsStr);
        }else{
            TipsStr = extra;
            let heroTab = tab.getData().HeroTableById.getValue(dataArr[0])
            let _heroClass = LangMgr.getLab(tab.HeroClass[heroTab.Class]);
            this.rich_text_aptitude.string =  LangMgr.getCombineString(TipsStr, [_heroClass]);
        }
        this.node_content.destroyAllChildren();
        if(extra){
            if(extra=="Tips_recruit_hero_5"){
                // 5星英雄
                for(let i=0;i<dataArr.length;i++){
                    let heroTab = tab.getData().HeroTableById.getValue(dataArr[i]);
                    if(heroTab.Aptitude<tab.HeroAptitude.HeroAptitude_SR){
                        continue
                    }
                    this.createHero(dataArr[i]);
                 }
            }else if(extra=="Tips_recruit_heropiece_5"){
                // 5星英雄碎片
                for(let i=0;i<dataArr.length;i++){
                    let heroTab = tab.getData().HeroTableById.getValue(dataArr[i]);
                    if(heroTab.Aptitude<tab.HeroAptitude.HeroAptitude_SR){
                        continue
                    }
                    this.createHeroPiece(dataArr[i],50);
                 }
            }else{
                // 4星英雄
                for(let i=0;i<dataArr.length;i++){
                    let heroTab = tab.getData().HeroTableById.getValue(dataArr[i]);
                    if(heroTab.Aptitude!==tab.HeroAptitude.HeroAptitude_R){
                        continue
                    }
                    this.createHero(dataArr[i]);
                 }
            }
        }else{
            if(type===RecruitType.Book||type===RecruitType.BookGuarantee){
                for(let i=0;i<dataArr.length;i++){
                    this.createBook(dataArr[i]);
                 }
            }else{
                for(let i=0;i<dataArr.length;i++){
                    this.createHero(dataArr[i]);
                 }
            }
        }
    }
    createBook(itemId:number){
        const _bookItem = instantiate(this.pfb_rare_book);
        _bookItem.parent = this.node_content;
        const itemTs = _bookItem.getComponent(WeaponItem);
        itemTs.initBookItemId(itemId,true,true,false,()=>{
            UIMgr.ins.show({ viewName: ViewName.RareBookInfoItemPop, data: { "bookInfo": itemTs.info } });
        });
    }
    createHero(_itemId:number){
        const heroId = _itemId;
        const heroInfo = new HeroInfo();
        const heroTab = tab.getData().HeroTableById.getValue(heroId);
        heroInfo.id = 0;
        heroInfo.itemId = heroId;
        heroInfo.star = heroTab.DefaultStar
        const heroItem = ItemPoolMgr.ins.createHeroItem(heroInfo,this.node_content);
        const heroItemTs = heroItem.getComponent(HeroItem);
        heroItemTs.setHeroProbablity();
    }
    createHeroPiece(_itemId:number,count:number){
        const _heroItem = instantiate(this.pfb_hero_item);
        _heroItem.parent = this.node_content;
        const itemTs = _heroItem.getComponent(HeroItem);
        const heroTab = tab.getData().HeroTableById.getValue(_itemId);
        const heroInfo = new HeroInfo();
        heroInfo.itemId = _itemId;
        heroInfo.star = heroTab.DefaultStar;
        itemTs.UpdateContent(heroInfo);
        itemTs.setSelect(false);
        itemTs.setLevel(0);
        itemTs.setPiece(count);
    }
}



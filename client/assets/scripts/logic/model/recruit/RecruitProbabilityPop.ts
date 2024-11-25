import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { sortByVocation } from '../../utils/GameUtil';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
import { RecruitProbabilityItem } from './RecruitProbabilityItem';
import { RareBookData } from '../rareBook/RareBookData';
import { RareBookInfo } from '../rareBook/RareBookInfo';
import { RecruitType } from '../../../Common/script/EnumTypeMgr';
const { ccclass, property } = _decorator;

@ccclass('RecruitProbabilityPop')
export class RecruitProbabilityPop extends ViewPop {
    // @property(Prefab)
    // ProbabilityItem: Prefab = null;
    // @property(Node)
    // node_content: Node = null;
    // private type: RecruitType = RecruitType.None
    // private _BookMap:Map<number,number[]> = new Map()
    register(): void {

    }
    onShow(): void {
        // // TipsStrArr = ["Tips_recruit_hero_4","Tips_recruit_heropiece_5","Tips_recruit_hero_5"]
        // this.type = this.openData.type;
        // if (this.type !== RecruitType.Vocation) {
        //     if (this.type === RecruitType.SeniorGuarantee) {
        //         const data = sortByVocation(HeroDataControl.ins.getHeroListByAptitude(tab.HeroAptitude.HeroAptitude_SSR));
        //         const item = instantiate(this.ProbabilityItem);
        //         item.parent = this.node_content;
        //         const itemTs = item.getComponent(RecruitProbabilityItem)
        //         itemTs.setHeroData(data, tab.HeroAptitude.HeroAptitude_SSR, this.type);
        //     } else if(this.type === RecruitType.Book){
        //         this.getBookInfoByAptitude();
        //         for (let i = tab.HeroAptitude.HeroAptitude_SR; i >= tab.HeroAptitude.HeroAptitude_N; i--) {
        //             const item = instantiate(this.ProbabilityItem);
        //             item.parent = this.node_content;
        //             const itemTs = item.getComponent(RecruitProbabilityItem)
        //             itemTs.setHeroData(this._BookMap.get(i), i, this.type);
        //         }
        //     }else if(this.type===RecruitType.BookGuarantee){
        //         this.getBookInfoByAptitude();
        //         const item = instantiate(this.ProbabilityItem);
        //         item.parent = this.node_content;
        //         const itemTs = item.getComponent(RecruitProbabilityItem)
        //         itemTs.setHeroData(this._BookMap.get(tab.HeroAptitude.HeroAptitude_SR), tab.HeroAptitude.HeroAptitude_SR, this.type);
        //     }else {
        //         for (let i = tab.HeroAptitude.HeroAptitude_SSR; i >= tab.HeroAptitude.HeroAptitude_N; i--) {
        //             const data = sortByVocation(HeroDataControl.ins.getHeroListByAptitude(i));
        //             const item = instantiate(this.ProbabilityItem);
        //             item.parent = this.node_content;
        //             const itemTs = item.getComponent(RecruitProbabilityItem)
        //             itemTs.setHeroData(data, i, this.type);
        //         }
        //     }
        // } else {
        //     const TipsStrArr = ["Tips_recruit_hero_5", "Tips_recruit_heropiece_5", "Tips_recruit_hero_4"]
        //     for (let i = 0; i < TipsStrArr.length; i++) {
        //         const recruit = this.openData.recruit;
        //         let vocation = (recruit-190)/10
        //         const data = HeroDataControl.ins.getBookHeroListByVocation(vocation,false);
        //         const item = instantiate(this.ProbabilityItem);
        //         item.parent = this.node_content;
        //         const itemTs = item.getComponent(RecruitProbabilityItem)
        //         itemTs.setHeroData(data, i, this.type, TipsStrArr[i]);
        //     }
        // }
    }
    getBookInfoByAptitude(){
        // const bookDatas = RareBookData.ins.getBookInfos(true);
        // for (let i = 0; i < bookDatas.length; i++) {
        //     const bookData = bookDatas[i];
        //     if(this._BookMap.has(bookData.bookTable.Aptitude)){
        //         let arr = this._BookMap.get(bookData.bookTable.Aptitude);
        //         arr.push(bookData.itemId);
        //     }else{
        //         this._BookMap.set(bookData.bookTable.Aptitude, [bookData.itemId]);
        //     }
        // }
    }
}



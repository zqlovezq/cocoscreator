/*
 * @Descripttion: 背包概率详情弹框
 */

import { tab } from "../../Table/table_gen";
import { IBoxRateData, IBoxRateGroup, isValidObj, kHundredNumber, kNoneString, kOneNumber, kTenNumber, kThousandNumber, kThreeNumber, kZeroNumber } from "../Common/CommonInterface";
import PopLayer from "../Utils/PopLayer";
import BoxRateCardInfo from "./BoxRateCardInfo";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BoxRateDetailPopLayer extends PopLayer {

    @property(cc.Label)
    lbl_title: cc.Label = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Node)
    node_legend_bar: cc.Node = null;
    
    @property(cc.Node)
    layout_legend_area: cc.Node = null;

    @property(cc.Label)
    lbl_legend_rate: cc.Label = null;

    @property(cc.Node)
    node_epic_bar: cc.Node = null;
    
    @property(cc.Node)
    layout_epic_area: cc.Node = null;

    @property(cc.Label)
    lbl_epic_rate: cc.Label = null;

    @property(cc.Node)
    node_rare_bar: cc.Node = null;
    
    @property(cc.Node)
    layout_rare_area: cc.Node = null;

    @property(cc.Label)
    lbl_rare_rate: cc.Label = null;

    @property(cc.Node)
    node_normal_bar: cc.Node = null;
    
    @property(cc.Node)
    layout_normal_area: cc.Node = null;

    @property(cc.Label)
    lbl_normal_rate: cc.Label = null;

    @property(cc.Prefab)
    pfb_card_rate_bar: cc.Prefab = null;

    private _diff_value: number = kZeroNumber;
    private _box_rate_data: IBoxRateGroup = null;
    private _box_name: string = kNoneString;

    onLoad () {
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);

        this.node_legend_bar.active = false;
        this.node_epic_bar.active   = false;
        this.node_rare_bar.active   = false;
        this.node_normal_bar.active = false;

        this._box_rate_data = { legendList: {cardNameList: [], boxRate: kZeroNumber, cardRate: kZeroNumber}, 
                                epicList:   {cardNameList: [], boxRate: kZeroNumber, cardRate: kZeroNumber}, 
                                rareList:   {cardNameList: [], boxRate: kZeroNumber, cardRate: kZeroNumber}, 
                                normalList: {cardNameList: [], boxRate: kZeroNumber, cardRate: kZeroNumber}
                              };
    }

    public initData(boxID: number, seasonLv: number){
        let boxTab = tab.Data.BoxTableByBoxID.getValue(boxID);
        if(isValidObj(boxTab)){
            let idx        = tab.ItemQuality.ItemQuality_White;
            let cardArrLen = kZeroNumber;
            let weight     = kZeroNumber;
            let cardCount  = kZeroNumber;
            
            for(let type of boxTab.CardType){
                idx        = Number(type);
                cardArrLen = boxTab.CardCount.length;
                cardCount  = idx < cardArrLen ? boxTab.CardCount[idx] : kZeroNumber;
                
                cardArrLen = boxTab.CardWeight.length;
                weight     = (idx < cardArrLen && cardCount > kZeroNumber) ? boxTab.CardWeight[idx] : kZeroNumber;

                switch(type){
                    case tab.ItemQuality.ItemQuality_White:
                        this._box_rate_data.normalList.boxRate = weight;
                        break;

                    case tab.ItemQuality.ItemQuality_Blue:
                        this._box_rate_data.rareList.boxRate = weight;
                        break;

                    case tab.ItemQuality.ItemQuality_Violet:
                        this._box_rate_data.epicList.boxRate = weight;
                        break;

                    case tab.ItemQuality.ItemQuality_Golden:
                        this._box_rate_data.legendList.boxRate = weight;
                        break;
                }
            }
            this._box_name = boxTab.BoxName;
            this.groupCardList(seasonLv, boxTab.CardPoolType);
        }
        this.showPage();
    }

    /* 组织卡牌表
     */
    private groupCardList(seasonLv: number, cardPoolType: tab.CardPoolType){
        let boxCardWeightTab    = tab.Data.BoxCardWeightTable;
        let boxCardWeightTabLen = boxCardWeightTab.length;
        for(let idx = kZeroNumber; idx < boxCardWeightTabLen; idx++){
            if(boxCardWeightTab[idx].UnlockRankLevel <= seasonLv && boxCardWeightTab[idx].CardPoolType == cardPoolType){
                let cardTab = tab.Data.CardTableByID.getValue(boxCardWeightTab[idx].CardId);
                let itemTab = tab.Data.ItemTableByID.getValue(boxCardWeightTab[idx].CardId);
                if(isValidObj(cardTab) && isValidObj(itemTab) && cardTab.Type != tab.CardType.CardType_Special){
                    switch(itemTab.Quality){
                        case tab.ItemQuality.ItemQuality_White:
                            this._box_rate_data.normalList.cardNameList.push(cardTab.Name);
                            break;

                        case tab.ItemQuality.ItemQuality_Blue:
                            this._box_rate_data.rareList.cardNameList.push(cardTab.Name);
                            break;

                        case tab.ItemQuality.ItemQuality_Violet:
                            this._box_rate_data.epicList.cardNameList.push(cardTab.Name);
                            break;

                        case tab.ItemQuality.ItemQuality_Golden:
                            this._box_rate_data.legendList.cardNameList.push(cardTab.Name);
                            break;
                    }
                }
            }
        }
    }

    /* 显示页面
     */
    private showPage(){
        let data            = this._box_rate_data;
        let bHaveLegendList = isValidObj(data.legendList) && data.legendList.boxRate > kZeroNumber;
        let bHaveEpicList   = isValidObj(data.epicList)   && data.epicList.boxRate > kZeroNumber;
        let bHaveRareList   = isValidObj(data.rareList)   && data.rareList.boxRate > kZeroNumber;
        let bHaveNormalList = isValidObj(data.normalList) && data.normalList.boxRate > kZeroNumber;

        this.node_legend_bar.active = bHaveLegendList ;
        this.node_epic_bar.active   = bHaveEpicList;
        this.node_rare_bar.active   = bHaveRareList;
        this.node_normal_bar.active = bHaveNormalList;

        bHaveLegendList && this.loadLegendRate(data.legendList);
        bHaveLegendList && this.setBoxRate(this.lbl_legend_rate, data.legendList.boxRate);

        bHaveEpicList   && this.loadEpicRate(data.epicList);
        bHaveEpicList   && this.setBoxRate(this.lbl_epic_rate, data.epicList.boxRate);

        bHaveRareList   && this.loadRareRate(data.rareList);
        bHaveRareList   && this.setBoxRate(this.lbl_rare_rate, data.rareList.boxRate);

        bHaveNormalList && this.loadNormalRate(data.normalList);
        bHaveNormalList && this.setBoxRate(this.lbl_normal_rate, data.normalList.boxRate);

        this.setBoxName();
    }

    private setBoxName(){
        this.lbl_title.string = this._box_name;
    }
    
    private setBoxRate(lblRate: cc.Label, rate: number){ 
        rate = (rate / kTenNumber);
        lblRate.string = `${rate.toFixed(kThreeNumber)}%`;
    }

    private loadLegendRate(data: IBoxRateData){
        data.cardRate = this.calcEveryCardRate(data.boxRate, data.cardNameList.length);
        this.loadDetailCardRate(this.layout_legend_area, data);
    }

    private loadEpicRate(data: IBoxRateData){
        data.cardRate = this.calcEveryCardRate(data.boxRate, data.cardNameList.length);
        this.loadDetailCardRate(this.layout_epic_area, data);
    }

    private loadRareRate(data: IBoxRateData){
        data.cardRate = this.calcEveryCardRate(data.boxRate, data.cardNameList.length);
        this.loadDetailCardRate(this.layout_rare_area, data);
    }

    private loadNormalRate(data: IBoxRateData){
        data.cardRate = this.calcEveryCardRate(data.boxRate, data.cardNameList.length);
        this.loadDetailCardRate(this.layout_normal_area, data);
    }

    private loadDetailCardRate(nodeLayout: cc.Node, data: IBoxRateData){
        let len = data.cardNameList.length;
        for(let idx  = kZeroNumber; idx < len; idx++){
            let rateInfoBar = cc.instantiate(this.pfb_card_rate_bar).getComponent(BoxRateCardInfo);
            if(rateInfoBar){
                let bLastData = (idx == len - kOneNumber);
                let rate      = bLastData ? (data.cardRate - this._diff_value) : data.cardRate;
                rate          = bLastData ? Number(rate.toFixed(kThreeNumber)) : rate;
                rateInfoBar.initData(data.cardNameList[idx], rate);
                nodeLayout.addChild(rateInfoBar.node);
            }
        }
    }

    /* 计算每个卡牌的概率
     */
    private calcEveryCardRate(boxRate: number, cardCount: number){
        if(cardCount <= kZeroNumber){
            return kZeroNumber;
        }

        let midVal       = (boxRate / kTenNumber);
        let everyRate    = midVal / cardCount;
        everyRate        = parseFloat(everyRate.toFixed(kThreeNumber));
        let totalRate    = parseFloat((everyRate * cardCount).toFixed(kThreeNumber));
        this._diff_value = totalRate - midVal;
        return everyRate;
    }
}

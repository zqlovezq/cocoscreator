/*
 * @Descripttion: 联盟选择需要支援的卡牌弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import charactor_four from "../Common/charactor_four";
import { CardNodeState, isValidObj, kZeroNumber, sortCardUUIDVec, sortDevilCard } from "../Common/CommonInterface";
import Role from "../Common/Role";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;
const kCardGroup: number = 5;
@ccclass
export default class AllianceSupportCardPfb extends PopLayer {
    @property(cc.Label)
    lbl_season_lv: cc.Label = null;

    @property(cc.Label)
    lbl_normal_card_cnt: cc.Label = null;

    @property(cc.Label)
    lbl_uncommon_cnt: cc.Label = null;

    @property(cc.Node)
    layout_devil_area: cc.Node = null;

    @property(cc.Label)
    lbl_devil_card_num: cc.Label = null;

    @property(cc.Node)
    layout_own_area: cc.Node = null;

    @property(cc.Label)
    lbl_own_card_num: cc.Label = null;

    @property(cc.Prefab)
    pfb_card_group: cc.Prefab = null;

    private _own_card_vec: string[]   = [];
    private _devil_card_vec: number[] = [];

    onLoad () {

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseSupportSelectCard, (param: any)=>{
            this.setVisible(false);
        }, this);
    }

    onDestroy(){
        this._own_card_vec   = [];
        this._devil_card_vec = [];
    }

    public initData(){
        this.setSeasonLevel();
        this.setLimitCount();
        this.groupCards();
    }

    /* 组织卡牌数据
     */
    private groupCards(){
        this._own_card_vec   = [];
        this._devil_card_vec = [];
        
        //遍历物品表，组织拥有卡牌、未拥有的魔王
        for (let data of tab.Data.ItemTableByID.values()){
            let cardTabData  = tab.Data.CardTableByID.getValue(data.ID);
            //不是卡牌就pass
            if(!isValidObj(cardTabData)){
                continue;
            }

            // //是特殊卡牌【变成不能攻击的树桩等等】不作为正常卡牌显示在卡库中需要pass
            // if(cardTabData.Type == tab.CardType.CardType_Special){
            //     continue;
            // }

            //根据物品ID从玩家自身物品库中取数据
            let ownItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(data.ID);

            // //魔王卡牌
            // if(cardTabData.Type == tab.CardType.CardType_Lord){
            //     //玩家拥有该物品
            //     if(isValidObj(ownItemData)){
            //         this.checkCardQualityIsValid(data.ID) && this._devil_card_vec.push(data.ID);
            //     }
            //     continue;
            // }
            
            //是正常的英雄卡牌
            if(isValidObj(ownItemData)){
                this.checkCardQualityIsValid(data.ID) && this._own_card_vec.push(ownItemData.id);
            }
        }
        this.loadAllCardList();
    }

    /* 加载所有卡组列表
     */
    private loadAllCardList(){
         //分别排序下吧
         sortCardUUIDVec(this._own_card_vec, tab.SortType.SortType_CardQualityIncrease);
         sortDevilCard(this._devil_card_vec, tab.SortType.SortType_CardQualityIncrease);
 
         this.layout_devil_area.removeAllChildren();
         this.layout_own_area.removeAllChildren();
         
         //刷新
         this.refreshCardArea(this._own_card_vec, false);
         this.refreshCardArea(this._devil_card_vec, true);
    }

    /* 刷新拥有卡牌或者魔王卡牌
     * @param cardIDArr   卡组ID
     * @param bDevilCard  是否是魔王卡组
     */
    private refreshCardArea(cardIDArr: string[] | number[], bDevilCard: boolean){
        let tempCardIDArr = [];
        let idx = kZeroNumber;
        for(let data of cardIDArr){
            tempCardIDArr.push(data);
            if(kCardGroup == tempCardIDArr.length){
                bDevilCard ? this.loadDevilData(tempCardIDArr, idx) : this.loadOwnCardData(tempCardIDArr, idx);
                tempCardIDArr = [];
                idx++;
            }
        }

        //检测剩余部分
        tempCardIDArr.length > kZeroNumber && 
        (bDevilCard ? this.loadDevilData(tempCardIDArr, idx) : this.loadOwnCardData(tempCardIDArr, idx));
    }
    
    /* 检测卡牌品质是否合法
     * @param cardId   卡牌静态id
     */
    private checkCardQualityIsValid(cardId: number){
        let itemTab:tab.ItemTable = tab.Data.ItemTableByID.getValue(cardId);
        if(!isValidObj(itemTab)){
            return false;
        }

        let qualityTab = tab.Data.QualityTableByQuality.getValue(itemTab.Quality);
        if(!isValidObj(qualityTab)){
           return false;
        }

        return tab.ItemQuality.ItemQuality_Blue >= qualityTab.Quality;
    }

    /* 设置赛季等级
     */
    private setSeasonLevel(){
        this.lbl_season_lv.string = `${Role.Instance.RoleGrade}`;
    }

    /* 设置限制的支援卡牌数
     */
    private setLimitCount(){
        let tabData = tab.Data.AllianceSupportCardLimitTableBySeasonLv.getValue(Role.Instance.RoleGrade);
        if(!isValidObj(tabData)){
            if(!cc.sys.isNative){throw new Error("支援卡牌限制次数表有错误");}
            return;
        }

        this.setNormalCardLimit(tabData.NormalCardRequestCount);
        this.setUnCommonCardLimit(tabData.UnCommonCardRequestCount);
    }
    
    /* 设置普通卡支援限制次数
     */
    private setNormalCardLimit(cnt: number){
        this.lbl_normal_card_cnt.string = `${cnt}`;
    }

    /* 设置稀有卡支援限制次数
     */
    private setUnCommonCardLimit(cnt: number){
        this.lbl_uncommon_cnt.string = `${cnt}`;
    }

    /* 加载魔王数据
     */
    private loadDevilData(devilCardIDArr: number[], idx: number){
        if(devilCardIDArr.length > kZeroNumber){
            let cardGroup = cc.instantiate(this.pfb_card_group).getComponent(charactor_four);
            if(cardGroup){
                cardGroup.initDevilData(devilCardIDArr, CardNodeState.CARD_NODE_STATE_SUPPORT);
                cardGroup.node.scale = 0.9;
                this.layout_devil_area.addChild(cardGroup.node);
            }
        }
    }

    /* 加载拥有的卡牌数据
     */
    private loadOwnCardData(cardIDArr: string[], idx: number){
        if(cardIDArr.length > kZeroNumber){
            let cardGroup = cc.instantiate(this.pfb_card_group).getComponent(charactor_four);
            if(cardGroup){
                cardGroup.initData(cardIDArr, CardNodeState.CARD_NODE_STATE_SUPPORT);
                cardGroup.node.scale = 0.9;
                this.layout_own_area.addChild(cardGroup.node);
            }
        }
    }
}

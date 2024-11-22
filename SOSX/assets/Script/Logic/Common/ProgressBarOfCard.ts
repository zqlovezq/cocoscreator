/*
 * @Descripttion: 卡牌收集进度条通用框架
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { setTextWithAction } from "../Utils/GameUtils";
import { isValidObj, kNegativeOneNumber, kOneNumber, kZeroNumber } from "./CommonInterface";
import Role from "./Role";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ProgressBarOfCard extends cc.Component {

    @property(cc.ProgressBar)
    prog_bar_exp: cc.ProgressBar = null;

    @property(cc.Label)
    lbl_numerator: cc.Label = null;

    @property(cc.Label)
    lbl_denominator: cc.Label = null;

    @property(cc.Sprite)
    spr_bar_full: cc.Sprite = null;

    @property(cc.Sprite)
    spr_up_arrow: cc.Sprite = null;

    @property(cc.Sprite)
    spr_not_up_arrow: cc.Sprite = null;

    private _current_own_card_count: number     = kZeroNumber;
    private _need_card_count: number            = kZeroNumber;
    private _future_increase_card_count: number = kZeroNumber;
    bgeted: boolean;

    onLoad () {
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_PlayCardIncreaseAnim, (param: any) =>{
            if(this.node.active){
                this.playIncreaseCardCountAnim(param as number);
            }

         }, this);
     }

    start () {

    }

    //bgeted ：是否获得该卡牌,用于获得前的显示
    public setData(cardId: number, cardCount: number = kZeroNumber, tipNode: cc.Node = null, bgeted:boolean = true){
        // 通过cardId判断类型，然后根据道具类型决定去哪张表里去查找
        //let type  = RankScoreRewardClass.getInstance().getCardSortTypeTxt /* zhibo+ @20230404  */
        let type = tab.Data.RankScoreRewardTable[cardId].RewardType1;
        //let type  = tab.Data.RankScoreRewardTableByID.getValue(cardId);
        let cardTabData: tab.ItemTable = tab.Data.ItemTableByID.getValue(cardId);
        if(!isValidObj(cardTabData)){
            if(!cc.sys.isNative){throw new Error("Card StaticID is Error!");}
            return;
        }
        
        let cardUpLevelTab: tab.CardUpLevelTable = tab.Data.CardUpLevelTableByQuality.getValue(cardTabData.Quality);
        if(!isValidObj(cardUpLevelTab)){
            if(!cc.sys.isNative){throw new Error("Card Quality is Error!");}
            return;
        }

        let tempArr = cardUpLevelTab.Count;
        let idx     = kZeroNumber;
        while((idx  = tempArr.indexOf(kZeroNumber, kOneNumber)) > kNegativeOneNumber){
            if (idx > kNegativeOneNumber) {
                tempArr.splice(idx, kOneNumber);
            }
        }
        
        let cardList  = Role.Instance.RoleItemAtrr.getItemByType(tab.ItemType.ItemType_Tower);
        if(!isValidObj(cardList)){
            if(!cc.sys.isNative){throw new Error("Card Data is Error!");}
            return;
        }

        this.bgeted = bgeted
        
        this._future_increase_card_count = cardCount;
        
        let ownCount  = kZeroNumber;
        let needCount = kOneNumber;

        for(let data of cardList){
            if(data.staticId == cardId){
                if(data.level < tempArr.length){
                    needCount = tempArr[data.level];
                    ownCount  = data.count;
                    break;
                } else {
                    needCount = tempArr[tempArr.length-1]
                    ownCount = data.count
                }
            }
        }
        this._current_own_card_count      = ownCount;
        this._need_card_count             = needCount;
        this.setCardProgressBarState(tipNode);
    }

    private setCardProgressBarState(tipNode: cc.Node = null){
        let ownCount        = this._current_own_card_count;
        let needCount       = this._need_card_count;
        let displayOwnCount = ownCount + this._future_increase_card_count;
        // if(this.bgeted == false)
        // {
        //     displayOwnCount -= this._future_increase_card_count
        // }

        if(ownCount == 0 || ownCount == 1){
            displayOwnCount = displayOwnCount - 1
        }
        
        ownCount = ownCount > kZeroNumber ? (ownCount - kOneNumber) : ownCount; //必须减掉自身【设计缺陷】
        this.lbl_numerator.string         = `${ownCount}`;
        this.lbl_denominator.string       = `/${needCount}`;

        this.prog_bar_exp.progress        = (displayOwnCount / needCount > kOneNumber) ? kOneNumber : displayOwnCount / needCount;
        this.spr_up_arrow.node.active     = displayOwnCount >= needCount;
        this.spr_not_up_arrow.node.active = displayOwnCount < needCount;
        this.spr_bar_full.node.active     = displayOwnCount >= needCount;
        if(null != tipNode) tipNode.active = this.spr_bar_full.node.active;
    }
     
    private playIncreaseCardCountAnim(newCount: number){
        if(newCount == 1 &&  this._current_own_card_count == 0){

        }else{
            this._current_own_card_count = this._current_own_card_count > kZeroNumber ? (this._current_own_card_count - kOneNumber) : 0; //必须减掉自身【设计缺陷】
            this.scheduleOnce(()=>{
                setTextWithAction(this.lbl_numerator.node, this._current_own_card_count + newCount, this._current_own_card_count);
            }, 0.1);
        }
    }
}

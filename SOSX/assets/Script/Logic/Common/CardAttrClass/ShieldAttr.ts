/*
 * @Descripttion: 护罩次数的属性
 */

import { tab } from "../../../Table/table_gen";
import { CardAttrValueInterface, CardDisplayType, CardNodeState, isValidObj, kFiveNumber, kFourNumber, kNegativeOneNumber, kOneNumber, kSevenNumber, kSixNumber, kThreeNumber, kTwoNumber, kZeroNumber } from "../CommonInterface";
import CardAttr, { ICardAttrDataParam } from "./CardAttr";

export default class ShieldAttr extends CardAttr {
    
    public getAttrValue(cardLv: number, starUpLv: number, compoundLv: number, displayType: CardDisplayType) : CardAttrValueInterface{
        let curVal     = kZeroNumber;
        let minCurVal  = kNegativeOneNumber;
        let nextVal    = kZeroNumber;
        let minNextVal = kNegativeOneNumber;
        let bChange    = false;
        
        /*curVal  = this.calcAttrValue(cardLv, compoundLv, displayType, false);
        nextVal = this.calcAttrValue(cardLv, compoundLv, displayType, true);   
        bChange = (nextVal != curVal && nextVal != kZeroNumber) ? true : false;
        CardDisplayType.CARD_DISPLAY_TYPE_ATTR === displayType && (nextVal -= curVal);*/
        
        curVal  = this.calcAttrValue(cardLv, kOneNumber, displayType);
        nextVal = this.calcNextLvAttrValue(cardLv, compoundLv, displayType);   
        bChange = (nextVal != curVal && nextVal != kZeroNumber) ? true : false;
        if(CardDisplayType.CARD_DISPLAY_TYPE_ATTR === displayType && nextVal > curVal){
            nextVal -= curVal;
        }

        return {
                curAttrVal: curVal, 
                minCurAttrVal: minCurVal,
                nextAttrVal: nextVal,
                minNextAttrVal: minNextVal,
                bChange: bChange
              };
    }

    /*protected calcAttrValue(cardLv: number, compoundLv: number, displayType: CardDisplayType, bNext: boolean){
        if(bNext && CardDisplayType.CARD_DISPLAY_TYPE_STAR_UPLV === displayType){
            return kZeroNumber;
        }
        
        let retVal  = cardLv;
        let attrTab = tab.Data.ShieldCountTableByCardLv.getValue(cardLv);
        if(isValidObj(attrTab)){
            let finalCompoundLv = bNext && CardDisplayType.CARD_DISPLAY_TYPE_SYNTHESIS === displayType ? compoundLv : kOneNumber;
            retVal = this.getFinalShieldCount(finalCompoundLv, attrTab);
        }

        return retVal;
    }*/

    protected calcAttrValue(cardLv: number, compoundLv: number, displayType: CardDisplayType){
        let retVal  = cardLv;
        let attrTab = tab.Data.ShieldCountTableByCardLv.getValue(cardLv);
        if(isValidObj(attrTab)){
            retVal = attrTab.CompoundLv[compoundLv];
        }

        return retVal;
    }

    private calcNextLvAttrValue(cardLv: number, compoundLv: number, displayType: CardDisplayType){
        let retVal = cardLv;
        cardLv = (CardDisplayType.CARD_DISPLAY_TYPE_ATTR == displayType || CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP == displayType) ? (cardLv + kOneNumber) : cardLv;
        let attrTab = tab.Data.ShieldCountTableByCardLv.getValue(cardLv);
        if(isValidObj(attrTab)){
            retVal = attrTab.CompoundLv[compoundLv];
        }

        return retVal;
    }
}

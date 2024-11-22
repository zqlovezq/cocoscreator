/*
 * @Descripttion: 护罩次数的属性
 */

import { tab } from "../../../Table/table_gen";
import { CardAttrValueInterface, CardDisplayType, isValidObj, kNegativeOneNumber, kOneNumber, kZeroNumber } from "../CommonInterface";
import CardAttr from "./CardAttr";

export default class AtkSpeedDownAttr extends CardAttr {
    
    public getAttrValue(cardLv: number, starUpLv: number, compoundLv: number, displayType: CardDisplayType) : CardAttrValueInterface{
        let curVal     = kZeroNumber;
        let minCurVal  = kNegativeOneNumber;
        let nextVal    = kZeroNumber;
        let minNextVal = kNegativeOneNumber;
        let bChange    = false;
        
        compoundLv -= kOneNumber;
        curVal  = this.calcAttrValue(cardLv, kZeroNumber, displayType);
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

    protected calcAttrValue(cardLv: number, compoundLv: number, displayType: CardDisplayType){
        let retVal  = cardLv;
        let attrTab = tab.Data.BuffSpeedCountTableByCardLv.getValue(cardLv);
        if(isValidObj(attrTab)){
            retVal = attrTab.CompoundLv[compoundLv];
        }

        return retVal;
    }

    private calcNextLvAttrValue(cardLv: number, compoundLv: number, displayType: CardDisplayType){
        let retVal  = cardLv;
        cardLv = (CardDisplayType.CARD_DISPLAY_TYPE_ATTR == displayType || CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP == displayType) ? (cardLv + kOneNumber) : cardLv;
        let attrTab        = tab.Data.BuffSpeedCountTableByCardLv.getValue(cardLv);
        if(isValidObj(attrTab)){
            retVal = attrTab.CompoundLv[compoundLv];
        }

        return retVal;
    }
}

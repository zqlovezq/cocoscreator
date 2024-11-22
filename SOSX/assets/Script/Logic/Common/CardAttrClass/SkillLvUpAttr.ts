/*
 * @Descripttion: 都是来自于SkillLvUp表中的卡牌属性【通用】
 */

import { tab } from "../../../Table/table_gen";
import { CardDisplayType, CardAttrValueInterface, kNegativeOneNumber, kZeroNumber, isValidObj, kOneNumber, kHundredNumber } from "../CommonInterface";
import CardAttr from "./CardAttr";

export default class SkillLvUpAttr extends CardAttr {
    
    public getAttrValue(cardLv: number, starUpLv: number, compoundLv: number, displayType: CardDisplayType): CardAttrValueInterface{
        let curVal         = kZeroNumber;
        let minCurVal      = kNegativeOneNumber;
        let nextVal        = kZeroNumber;
        let minNextVal     = kNegativeOneNumber;
        let bChange        = false;

        let skillLvUpData  = this.getSkillLvUpData();
        let bValid         = isValidObj(skillLvUpData);
        let fixedLvUpVal   = bValid ? skillLvUpData.LevelUp : kZeroNumber;
        let percentLvUpVal = bValid ? skillLvUpData.LevelUpPercent : kZeroNumber;

        curVal = bValid && this.calcAttrFromSkillLvUpTab(skillLvUpData, cardLv, kZeroNumber, kZeroNumber, displayType, false);
        if(CardDisplayType.CARD_DISPLAY_TYPE_ATTR == displayType){
            nextVal = !bValid ? kZeroNumber : (fixedLvUpVal != kZeroNumber ? fixedLvUpVal : percentLvUpVal);
            nextVal = (percentLvUpVal != kZeroNumber) ? (curVal * (percentLvUpVal / kHundredNumber)) : nextVal;
            
            let skillData = this.getAttrSkillData();
            nextVal = (isValidObj(skillData) && (skillData.RandomDamageMinMultiple != kZeroNumber)) ? 
                      this.calcAttrFromSkillLvUpTab(skillLvUpData, cardLv + kOneNumber, kZeroNumber, kOneNumber, displayType, true) : 
                      nextVal;
        }else{
            nextVal = this.calcAttrFromSkillLvUpTab(skillLvUpData, cardLv, starUpLv, compoundLv, displayType, true); 
        }

        bChange     = (/*nextVal != curVal && */nextVal != kZeroNumber) ? true : false;
        
        /*if(CardDisplayType.CARD_DISPLAY_TYPE_STAR_UPLV == displayType || 
            CardDisplayType.CARD_DISPLAY_TYPE_SYNTHESIS == displayType ){
            nextVal = (nextVal == curVal) ? 
                        (!bValid ? kZeroNumber : (fixedLvUpVal != kZeroNumber ? fixedLvUpVal : percentLvUpVal)) : nextVal;
        }*/
        
        curVal     = this.getCardAttrFormatValue(curVal);
        nextVal    = this.getCardAttrFormatValue(nextVal);
        curVal     = this.getAttrPrecisionValue(curVal);
        minCurVal  = this.calcMinAttrValue(curVal);
        nextVal    = this.getAttrPrecisionValue(nextVal);
        minNextVal = this.calcMinAttrValue(nextVal);

        return {
            curAttrVal: curVal, 
            minCurAttrVal: minCurVal,
            nextAttrVal: nextVal,
            minNextAttrVal: minNextVal,
            bChange: bChange
        };
    }

    /**
     * @param skillData 
     * @param cardLv 
     * @param starUpLv 
     * @param compoundLv 
     * @param displayType 
     * @param bNextStep 
     * @returns 
     */
    protected calcAttrFromSkillLvUpTab(skillData: tab.SkillLvUpTable, cardLv: number, starUpLv: number, compoundLv: number, displayType: CardDisplayType, bNextStep: boolean){
        let retVal    = skillData.BaseValue;
        let curCardLv = (CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP == displayType && bNextStep) ? (cardLv + kOneNumber) : cardLv;
        switch(displayType){
            case CardDisplayType.CARD_DISPLAY_TYPE_ATTR:
            case CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP: 
                retVal = skillData.LevelUp != kZeroNumber ? 
                         this.calcAttrValueFromFixed(retVal,   skillData.LevelUp,        curCardLv, skillData.ValueType) : 
                         this.calcAttrValueFromPercent(retVal, skillData.LevelUpPercent, curCardLv, skillData.ValueType);
                break;
    
            case CardDisplayType.CARD_DISPLAY_TYPE_STAR_UPLV:
            case CardDisplayType.CARD_DISPLAY_TYPE_SYNTHESIS:
                retVal = skillData.LevelUp != kZeroNumber ? 
                         this.calcAttrValueFromFixed(retVal,   skillData.LevelUp,        curCardLv, skillData.ValueType) : 
                         this.calcAttrValueFromPercent(retVal, skillData.LevelUpPercent, curCardLv, skillData.ValueType);
                         
                retVal = this.calcStrengthenAttrValueFromFixed(retVal, skillData.Strength, 
                                                                skillData.Compound, starUpLv, 
                                                                compoundLv, skillData.ValueType);

                retVal = this.calcStrengthenAttrValueFromPercent(retVal, skillData.StrengthPercent, 
                                                                    skillData.CompoundPercent, starUpLv, 
                                                                    compoundLv, skillData.ValueType);
                break;
        }
    
        return retVal;
    }
}

/*
 * @Descripttion: 变身时间属性
 */

import { tab } from "../../../Table/table_gen";
import { CardAttrValueInterface, CardDisplayType, isValidObj, kNegativeOneNumber, kOneNumber, kThousandNumber, kZeroNumber } from "../CommonInterface";
import AttackSpdAttr from "./AttackSpdAttr";
import { ICardAttrDataParam } from "./CardAttr";

export default class TransformTimeAttr extends AttackSpdAttr {
    private _skillType: tab.SkillType;

    public getAttrValue(cardLv: number, starUpLv: number, compoundLv: number, displayType: CardDisplayType): CardAttrValueInterface{
        let curVal     = kZeroNumber;
        let minCurVal  = kNegativeOneNumber;
        let nextVal    = kZeroNumber;
        let minNextVal = kNegativeOneNumber;
        let bChange    = false;
        let skillData: tab.SkillTable = this.getAttrSkillData();
        if(isValidObj(skillData)){
            let paramData: ICardAttrDataParam = {
                baseVal:     skillData.CD,
                upLvVal:     skillData.CDLevel != kZeroNumber ? skillData.CDLevel : skillData.CDLvPercent,
                strengthVal: skillData.CDStrength,
                compoundVal: skillData.CDCompound,
                cardLv:      cardLv,
                strengthLv:  kZeroNumber,
                compoundLv:  kZeroNumber,
                displayType: displayType,
                calcType:    this.getRightCalcType(skillData.Type)
            };
            this._skillType = skillData.Type;
            curVal  = this.calcCurAttrValue(paramData);
            nextVal = this.calcNextLvAttrValue(skillData, cardLv, starUpLv, compoundLv, displayType);  
            curVal  = this.getAttrPrecisionValue(curVal / kThousandNumber);
            nextVal = this.getAttrPrecisionValue(nextVal / kThousandNumber);
        }

        bChange = (nextVal != curVal && nextVal != kZeroNumber) ? true : false;
        return {
                curAttrVal: curVal, 
                minCurAttrVal: minCurVal,
                nextAttrVal: nextVal,
                minNextAttrVal: minNextVal,
                bChange: bChange
              };
    }

    protected calcCurAttrValue(data: ICardAttrDataParam){
        let retVal = data.baseVal;
        retVal     = this.calcAttrValueFromFixed(retVal, data.upLvVal, data.cardLv, data.calcType);
        if( CardDisplayType.CARD_DISPLAY_TYPE_STAR_UPLV === data.displayType || 
            CardDisplayType.CARD_DISPLAY_TYPE_SYNTHESIS === data.displayType){
                retVal = this.calcAttrValueWithStarAndCompound(data);
        }

        return retVal;
    }

    protected calcNextLvAttrValue(skillData: tab.SkillTable, cardLv: number, starUpLv: number, compoundLv: number, displayType: CardDisplayType){
        let retVal = kZeroNumber;
        let bValid = isValidObj(skillData);
        let paramData: ICardAttrDataParam = {
            baseVal:     bValid ? skillData.CD : kZeroNumber,
            upLvVal:     bValid ? (skillData.CDLevel != kZeroNumber ? skillData.CDLevel : skillData.CDLvPercent) : kZeroNumber,
            strengthVal: bValid ? skillData.CDStrength : kZeroNumber,
            compoundVal: bValid ? skillData.CDCompound : kZeroNumber,
            cardLv:      cardLv,
            strengthLv:  kZeroNumber,
            compoundLv:  kZeroNumber,
            displayType: displayType,
            calcType:    this.getRightCalcType(skillData.Type)
        };

        switch(displayType){
            case CardDisplayType.CARD_DISPLAY_TYPE_ATTR:
                /*paramData.cardLv = cardLv + kOneNumber;
                retVal = this.calcCurAttrValue(paramData);
                retVal = Math.abs(curVal - retVal);*/
                retVal = bValid  ? (skillData.CDLevel != kZeroNumber ? skillData.CDLevel : skillData.CDLvPercent) : kZeroNumber;
                break;
    
            case CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP:
                paramData.cardLv     = cardLv + kOneNumber;
                paramData.compoundLv = kZeroNumber;
                paramData.strengthLv = kZeroNumber;
                retVal = this.calcCurAttrValue(paramData);
                break;
    
            default:
                paramData.cardLv     = cardLv;
                paramData.compoundLv = compoundLv;
                paramData.strengthLv = starUpLv;
                retVal = this.calcCurAttrValue(paramData);
                break;
    
        }
        return retVal;
    }
    
    protected calcAttrValueWithStarAndCompound(data: ICardAttrDataParam){
        let retVal = data.baseVal;
        retVal     = this.calcAttrValueFromFixed(retVal, data.upLvVal, data.cardLv, data.calcType);
        if( CardDisplayType.CARD_DISPLAY_TYPE_STAR_UPLV === data.displayType || 
            CardDisplayType.CARD_DISPLAY_TYPE_SYNTHESIS === data.displayType){
            if(tab.SkillType.SkillType_RandomTransform === this._skillType){
                retVal = this.calcStrengthenAttrValueFromFixed( retVal, 
                                                                data.strengthVal, 
                                                                data.compoundVal, 
                                                                data.strengthLv, 
                                                                data.compoundLv, 
                                                                data.calcType);
            }else if(tab.SkillType.SkillType_AddCompoundLvTransform === this._skillType){
                retVal = this.calcStrengthenAttrValueFromPercent(   retVal, 
                                                                    data.strengthVal, 
                                                                    data.compoundVal, 
                                                                    data.strengthLv, 
                                                                    data.compoundLv, 
                                                                    data.calcType);
            }
            
        }
        return Math.floor(retVal);
    }

    private getRightCalcType(type: tab.SkillType){
        switch(type){
            case tab.SkillType.SkillType_RandomTransform:
                return tab.SkillLvUpType.SkillLvUpType_MinusOrDivide;

            case tab.SkillType.SkillType_AddCompoundLvTransform:
                return tab.SkillLvUpType.SkillLvUpType_PlusOrMultiply
        }
    }

    protected getAttrSkillData(){
        let cardTab: tab.CardTable    = tab.Data.CardTableByID.getValue(this._card_id);
        let skillData: tab.SkillTable = isValidObj(cardTab) ? tab.Data.SkillTableByID.getValue(cardTab.TransformSkill) : null;
        return skillData;
    }
}

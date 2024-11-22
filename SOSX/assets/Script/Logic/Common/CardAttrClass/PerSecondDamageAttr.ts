/*
 * @Descripttion: 每秒伤害属性
 */

import { tab } from "../../../Table/table_gen";
import { CardDisplayType, CardAttrValueInterface, kZeroNumber, kNegativeOneNumber, isValidObj, kOneNumber, kThousandNumber, kTwoNumber, isInteger } from "../CommonInterface";
import AttackAttr from "./AttackAttr";
import { ICardAttrDataParam } from "./CardAttr";

export default class PerSecondDamageAttr extends AttackAttr {
    public getAttrValue(cardLv: number, starUpLv: number, compoundLv: number, displayType: CardDisplayType): CardAttrValueInterface{
        let curVal     = kZeroNumber;
        let minCurVal  = kNegativeOneNumber;
        let nextVal    = kZeroNumber;
        let minNextVal = kNegativeOneNumber;
        let bChange    = false;
        let skillData: tab.SkillTable = this.getAttrSkillData();
        if(isValidObj(skillData)){
            let paramData: ICardAttrDataParam = {
                baseVal:     skillData.Damage,
                upLvVal:     skillData.DamageLevel,
                strengthVal: skillData.DamageStrength,
                compoundVal: skillData.DamageCompound,
                cardLv:      cardLv,
                strengthLv:  kZeroNumber,
                compoundLv:  kZeroNumber,
                displayType: displayType,
                calcType:    tab.SkillLvUpType.SkillLvUpType_PlusOrMultiply
            };
            let damageVal         = this.calcCurAttrValue(paramData);

            paramData.baseVal     = skillData.CD;
            paramData.upLvVal     = skillData.CDLevel > kZeroNumber ? skillData.CDLevel : skillData.CDLvPercent;
            paramData.strengthVal = skillData.CDStrength;
            paramData.compoundVal = skillData.CDCompound;
            paramData.calcType    = tab.SkillLvUpType.SkillLvUpType_MinusOrDivide;
            let speedVal          = this.calcCurAttrValue(paramData);
            
            damageVal = Math.floor(damageVal);
            speedVal  /= kThousandNumber;
            speedVal  = !isInteger(speedVal) ? Number(speedVal.toFixed(kTwoNumber)) : speedVal;
            speedVal  = speedVal == kZeroNumber ? kOneNumber : speedVal;
            curVal    = Math.floor(damageVal / speedVal);
            
            damageVal = this.calcNextLvAttrValue(skillData, curVal, cardLv, starUpLv, compoundLv, displayType);
            speedVal  = this.calcNextLvSpdValue(skillData, cardLv, starUpLv, compoundLv, displayType, tab.SkillLvUpType.SkillLvUpType_MinusOrDivide);
            damageVal = Math.floor(damageVal);
            speedVal  /= kThousandNumber;
            speedVal  = !isInteger(speedVal) ? Number(speedVal.toFixed(kTwoNumber)) : speedVal;
            speedVal  = speedVal == kZeroNumber ? kOneNumber : speedVal;
            nextVal   = Math.floor(damageVal / speedVal);
        }

        bChange = (/*nextVal != curVal && */nextVal != kZeroNumber) ? true : false;
        return {
                curAttrVal: curVal, 
                minCurAttrVal: minCurVal,
                nextAttrVal: nextVal,
                minNextAttrVal: minNextVal,
                bChange: bChange
              };
    }

    /* 计算下一级攻速属性值
     * @param skillData   技能数据
     * @param cardLv      卡牌等级
     * @param starUpLv    卡牌星级
     * @param compoundLv  卡牌合成等级
     * @param displayType 显示类型
     * @param calcType    计算类型
     * @returns 
     */
    private calcNextLvSpdValue( skillData: tab.SkillTable, 
                                cardLv: number, 
                                starUpLv: number, 
                                compoundLv: number, 
                                displayType: CardDisplayType, 
                                calcType: tab.SkillLvUpType){
        let retVal = kZeroNumber;
        let bValid = isValidObj(skillData);
        let paramData: ICardAttrDataParam = {
            baseVal:     bValid ? skillData.CD : kZeroNumber,
            upLvVal:     bValid ? (skillData.CDLevel > kZeroNumber ? skillData.CDLevel : skillData.CDLvPercent) : kZeroNumber,
            strengthVal: bValid ? skillData.CDStrength : kZeroNumber,
            compoundVal: bValid ? skillData.CDCompound : kZeroNumber,
            cardLv:      cardLv,
            strengthLv:  kZeroNumber,
            compoundLv:  kZeroNumber,
            displayType: displayType,
            calcType:    calcType
        };

        switch(displayType){
            case CardDisplayType.CARD_DISPLAY_TYPE_ATTR:
                retVal = bValid  ? (skillData.CDLevel > kZeroNumber ? skillData.CDLevel : skillData.CDLvPercent) : kZeroNumber;
                retVal = retVal != kZeroNumber ? (retVal / kThousandNumber) : retVal;
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

}

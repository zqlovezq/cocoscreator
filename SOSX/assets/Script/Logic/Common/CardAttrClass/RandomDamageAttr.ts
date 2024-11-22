/*
 * @Descripttion: 随机伤害属性
 */

import { tab } from "../../../Table/table_gen";
import { CardAttrValueInterface, isValidObj, kNegativeOneNumber, kZeroNumber } from "../CommonInterface";
import AttackAttr from "./AttackAttr";
import { ICardAttrDataParam } from "./CardAttr";

export default class RandomDamageAttr extends AttackAttr {

    public getAttrValue(cardLv: number, starUpLv: number, compoundLv: number, displayType: any) : CardAttrValueInterface{
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
            
            curVal     = this.calcCurAttrValue(paramData);
            minCurVal  = (curVal > kZeroNumber) ? this.calcMinAttrValue(curVal) : minCurVal;
            nextVal    = this.calcNextLvAttrValue(skillData, curVal, cardLv, starUpLv, compoundLv, displayType);
            minNextVal = (nextVal > kZeroNumber) ? this.calcMinAttrValue(nextVal) : minNextVal;
        }

        bChange    = (/*nextVal != curVal && */nextVal != kZeroNumber) ? true : false;
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
}

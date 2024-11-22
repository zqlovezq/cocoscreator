/*
 * @Descripttion: 魔王技能CD属性
 */

import { tab } from "../../../Table/table_gen";
import { CardDisplayType, CardAttrValueInterface, kOneNumber, kTwoNumber, kThousandNumber, isInteger, isValidObj, kZeroNumber, kNegativeOneNumber } from "../CommonInterface";
import CardAttr from "./CardAttr";

export default class DevilActiveCDAttr extends CardAttr {

    public getAttrValue(cardLv: number, starUpLv: number, compoundLv: number, displayType: CardDisplayType): CardAttrValueInterface{
        let curVal     = kZeroNumber;
        let minCurVal  = kNegativeOneNumber;
        let nextVal    = kZeroNumber;
        let minNextVal = kNegativeOneNumber;
        let bChange    = false;
        let skillData  = tab.Data.LordSkillTableByLordID.getValue(this._card_id);

        curVal  = isValidObj(skillData) ? this.calcAttrValue(skillData, cardLv) : curVal;
        nextVal = isValidObj(skillData) ? this.calcNextLvAttrValue(skillData, cardLv, displayType) : nextVal;
        bChange = (/*nextVal != curVal && */nextVal != kZeroNumber) ? true : false;
        return {
                curAttrVal: curVal, 
                minCurAttrVal: minCurVal,
                nextAttrVal: nextVal,
                minNextAttrVal: minNextVal,
                bChange: bChange
              };
    }

    /* 计算属性值
     * @param skillData    技能数据
     * @param cardLv       卡牌等级
     */
    private calcAttrValue(skillData: tab.LordSkillTable, cardLv: number){
        let retVal = skillData.ActiveCD;
        retVal     = this.calcAttrValueFromFixed(retVal, skillData.CDLevel, cardLv, tab.SkillLvUpType.SkillLvUpType_MinusOrDivide);
        retVal     /= kThousandNumber;
        retVal     = !isInteger(retVal) ? Number(retVal.toFixed(kTwoNumber)) : retVal;

        return retVal;
    }

    /* 计算下一级属性值
     * @param skillData     技能数据
     * @param cardLv        卡牌等级
     * @param displayType   显示类型
     */
    private calcNextLvAttrValue(skillData: tab.LordSkillTable, cardLv: number, displayType: CardDisplayType){
        let retVal = skillData.ActiveCD;
        
        retVal     = (CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP === displayType) ? 
                      this.calcAttrValueFromFixed(retVal, skillData.CDLevel, cardLv + kOneNumber, tab.SkillLvUpType.SkillLvUpType_MinusOrDivide) : 
                      skillData.CDLevel;
        retVal     = (retVal != kZeroNumber) ? (retVal / kThousandNumber) : retVal;
        return retVal;
    }
}

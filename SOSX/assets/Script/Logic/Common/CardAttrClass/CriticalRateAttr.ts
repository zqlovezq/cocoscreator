/*
 * @Descripttion: 暴击属性
 */

import { tab } from "../../../Table/table_gen";
import { CardDisplayType, CardAttrValueInterface, kZeroNumber, kNegativeOneNumber, isValidObj } from "../CommonInterface";
import CardAttr from "./CardAttr";

export default class CriticalRateAttr extends CardAttr {
    
    public getAttrValue(cardLv: number, starUpLv: number, compoundLv: number, displayType: CardDisplayType): CardAttrValueInterface{
        let curVal     = kZeroNumber;
        let minCurVal  = kNegativeOneNumber;
        let nextVal    = kZeroNumber;
        let minNextVal = kNegativeOneNumber;
        let bChange    = false;
        let skillData  = this.getAttrSkillData();

        curVal  = isValidObj(skillData) ? skillData.CriticalRate : curVal;
        bChange = (/*nextVal != curVal && */nextVal != kZeroNumber) ? true : false;
        return {
                curAttrVal: curVal, 
                minCurAttrVal: minCurVal,
                nextAttrVal: nextVal,
                minNextAttrVal: minNextVal,
                bChange: bChange
              };
    }

}

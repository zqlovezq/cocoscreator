/*
 * @Descripttion: 狙击属性
 */

import { tab } from "../../../Table/table_gen";
import { CardDisplayType, CardAttrValueInterface, isValidObj, kZeroNumber, kNegativeOneNumber } from "../CommonInterface";
import CardAttr from "./CardAttr";

export default class SnipeAttr extends CardAttr {

    public getAttrValue(cardLv: number, starUpLv: number, compoundLv: number, displayType: CardDisplayType): CardAttrValueInterface{
        let curVal     = kZeroNumber;
        let minCurVal  = kNegativeOneNumber;
        let nextVal    = kZeroNumber;
        let minNextVal = kNegativeOneNumber;
        let bChange    = false;
        
        let cardTab: tab.CardTable    = tab.Data.CardTableByID.getValue(this._card_id);
        let skillData: tab.SkillTable = isValidObj(cardTab) ? tab.Data.SkillTableByID.getValue(cardTab.PvpCompoundSkill) : null;

        curVal  = isValidObj(skillData)  ? skillData.SnipingFailRate : curVal;
        curVal  = (curVal > kZeroNumber) ? Math.floor(curVal) : curVal;
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

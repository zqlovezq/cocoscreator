/*
 * @Descripttion: 攻击目标属性
 */

import { tab } from "../../../Table/table_gen";
import { CardDisplayType, CardAttrValueInterface, kZeroNumber, kNegativeOneNumber, isValidObj, kSingleLineString } from "../CommonInterface";
import CardAttr from "./CardAttr";

export default class AttackTargetAttr extends CardAttr {

    public getAttrValue(cardLv: number, starUpLv: number, compoundLv: number, displayType: CardDisplayType): CardAttrValueInterface{
        return {
            curAttrVal: kZeroNumber, 
            minCurAttrVal: kNegativeOneNumber,
            nextAttrVal: kZeroNumber,
            minNextAttrVal: kNegativeOneNumber,
            bChange: false
          };
    }

    public getAttrDescription(displayType: CardDisplayType, attrVal: CardAttrValueInterface, bNextStep: boolean){
        let cardTab:     tab.CardTable              = tab.Data.CardTableByID.getValue(this._card_id);
        let skillData:   tab.SkillTable             = isValidObj(cardTab)    ? tab.Data.SkillTableByID.getValue(cardTab.AttackSkill) : null;
        let targetData : tab.SkillAtkTargetDesTable = isValidObj(skillData)  ? tab.Data.SkillAtkTargetDesTableByID.getValue(skillData.Target) : null;
        let retVal                                  = isValidObj(targetData) ? targetData.TargetString : kSingleLineString;
        return retVal;
    }
}

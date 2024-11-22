/*
 * @Descripttion: 血量加成
 */
import { tab } from "../../../Table/table_gen";
import { CardDisplayType, CardAttrValueInterface, kZeroNumber, kNegativeOneNumber, isValidObj, kOneNumber, kThousandNumber, CardAttrType } from "../CommonInterface";
import CardAttr, { ICardAttrDataParam } from "./CardAttr";

export default class AttackRangeAttr extends CardAttr {

    public getAttrValue(cardLv: number,  compoundLv: number, displayType: CardDisplayType,isLevelUp:boolean): CardAttrValueInterface {
        let curVal = kZeroNumber;
        let minCurVal = kNegativeOneNumber;
        let nextVal = kZeroNumber;
        let minNextVal = kNegativeOneNumber;
        let bChange = false;
        let range = 0;
        let cardData: tab.CardTable = this.getAttrCardData();
        let attrName = tab.Data.GetKeyValue_ConfigTable().CommonTextRange;

        let skillList = cardData.SkillList;
        for(let i=0;i<skillList.length;i++){
            for(let i=0;i<skillList.length;i++){
                let skill:tab.SkillTable = tab.Data.SkillTableByID.getValue(skillList[i]);
                //显示攻击范围
                if(skill.Preview == tab.PreviewType.PreviewType_Attack){
                    range = skill.Range;
                }
            } 
        } 

        if (isValidObj(cardData)) {
            let paramData: ICardAttrDataParam = {
                baseVal:range,
                upLvVal:kZeroNumber,
                compoundVal: kZeroNumber,
                cardLv: cardLv,
                compoundLv: kZeroNumber,
                displayType: displayType,
                attrName:attrName
            };
            curVal = this.calcCurAttrValue(paramData);
            nextVal = this.calcNextLvAttrValue(cardData, curVal, cardLv, compoundLv, displayType,isLevelUp);
            curVal = this.getAttrPrecisionValue(curVal,CardAttrType.RANGE);
            nextVal = this.getAttrPrecisionValue(nextVal,CardAttrType.RANGE);
        }

        // bChange = (nextVal != curVal && nextVal != kZeroNumber) ? true : false;
        return {
            curAttrVal: curVal,
            minCurAttrVal: minCurVal,
            nextAttrVal: nextVal,
            minNextAttrVal: minNextVal,
            bChange: bChange,
            attrName:attrName
        };
    }

    /* 计算下一级属性值
     * @param skillData    技能数据
     * @param cardLv       卡牌等级
     * @param starUpLv     卡牌星级
     * @param compoundLv   卡牌合成等级
     * @param displayType  显示类型
     */
    protected calcNextLvAttrValue(cardData: tab.CardTable, curVal: number, cardLv: number,  compoundLv: number, displayType: CardDisplayType,isLevelUp:boolean) {
        let retVal = kZeroNumber;
        let bValid = isValidObj(cardData);
        let range = 0;
        let skillList = cardData.SkillList;
        for(let i=0;i<skillList.length;i++){
            for(let i=0;i<skillList.length;i++){
                let skill:tab.SkillTable = tab.Data.SkillTableByID.getValue(skillList[i]);
                //显示攻击范围
                if(skill.Preview == tab.PreviewType.PreviewType_Attack){
                    range = skill.Range;
                }
            } 
        } 

        let paramData: ICardAttrDataParam = {
            baseVal: bValid ? range : kZeroNumber,
            upLvVal: kZeroNumber,
            compoundVal: kZeroNumber,
            cardLv: cardLv,
            compoundLv: kZeroNumber,
            displayType: displayType,
            attrName:tab.Data.GetKeyValue_ConfigTable().CommonTextRange
        };

        switch (displayType) {
            case CardDisplayType.CARD_DISPLAY_TYPE_ATTR:
                //retVal = bValid  ? (skillData.CDLevel > kZeroNumber ? skillData.CDLevel : skillData.CDLvPercent) : kZeroNumber;
                paramData.cardLv = cardLv + kOneNumber;
                retVal = this.calcCurAttrValue(paramData);
                retVal = Math.abs(curVal - retVal);
                break;

            case CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP:
                paramData.cardLv = cardLv + kOneNumber;
                paramData.compoundLv = kZeroNumber;
                retVal = this.calcCurAttrValue(paramData);
                break;

            default:
                paramData.cardLv = isLevelUp?cardLv+kOneNumber:cardLv;
                paramData.compoundLv = compoundLv;
                retVal = this.calcCurAttrValue(paramData);
                break;

        }
        return retVal;
    }
}

/*
 * @Descripttion: 技能加成
 */
import { tab } from "../../../Table/table_gen";
import { CardDisplayType, CardAttrValueInterface, kZeroNumber, kNegativeOneNumber, isValidObj, kOneNumber, kThousandNumber, CardAttrType } from "../CommonInterface";
import CardAttr, { ICardAttrDataParam } from "./CardAttr";

export default class SkillAttr extends CardAttr {

    public getAttrValue(cardLv: number, compoundLv: number, displayType: CardDisplayType, isLevelUp: boolean, customData): CardAttrValueInterface {
        let curVal = kZeroNumber;
        let minCurVal = kNegativeOneNumber;
        let nextVal = kZeroNumber;
        let minNextVal = kNegativeOneNumber;
        let bChange = false;
        let table = tab.Data.SkillTableByID.getValue(Number(customData[1]));
        let value = table[customData[2]];
        let type = table.SkillCalcType;
        let paramData: ICardAttrDataParam = {
            baseVal: value[0],
            upLvVal: value[1],
            compoundVal: value[2],
            cardLv: cardLv,
            compoundLv: kZeroNumber,
            displayType: displayType,
            attrName: "skill",
            caleType: type
        };
        curVal = this.calcCurAttrValue(paramData);
        nextVal = this.calcNextLvAttrValue(value, curVal, cardLv, compoundLv, displayType, isLevelUp,type);
        curVal = this.getAttrPrecisionValue(curVal, CardAttrType.SKILL);
        nextVal = this.getAttrPrecisionValue(nextVal, CardAttrType.SKILL);

        // bChange = (nextVal != curVal && nextVal != kZeroNumber) ? true : false;
        return {
            curAttrVal: curVal,
            minCurAttrVal: minCurVal,
            nextAttrVal: nextVal,
            minNextAttrVal: minNextVal,
            bChange: bChange,
            attrName: "skill"
        };
    }

    /* 计算下一级属性值
     * @param skillData    技能数据
     * @param cardLv       卡牌等级
     * @param starUpLv     卡牌星级
     * @param compoundLv   卡牌合成等级
     * @param displayType  显示类型
     */
    protected calcNextLvAttrValue(cardData, curVal: number, cardLv: number, compoundLv: number, displayType: CardDisplayType, isLevelUp: boolean,caleType:number) {
        let retVal = kZeroNumber;
        let paramData: ICardAttrDataParam = {
            baseVal: cardData[0],
            upLvVal: cardData[1],
            compoundVal: cardData[2],
            cardLv: cardLv,
            compoundLv: kZeroNumber,
            displayType: displayType,
            attrName: "skill",
            caleType : caleType
        };

        switch (displayType) {
            case CardDisplayType.CARD_DISPLAY_TYPE_ATTR:
                //retVal = bValid  ? (skillData.CDLevel > kZeroNumber ? skillData.CDLevel : skillData.CDLvPercent) : kZeroNumber;
                paramData.cardLv = cardLv + kOneNumber;
                retVal = this.calcCurAttrValue(paramData);
                retVal =  Math.abs(curVal - retVal);
                break;

            case CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP:
                paramData.cardLv = cardLv + kOneNumber;
                paramData.compoundLv = kZeroNumber;
                retVal = this.calcCurAttrValue(paramData);
                break;

            default:
                paramData.cardLv = isLevelUp ? cardLv + 1 : cardLv;
                paramData.compoundLv = compoundLv;
                retVal = this.calcCurAttrValue(paramData);
                break;

        }
        return retVal;
    }
}

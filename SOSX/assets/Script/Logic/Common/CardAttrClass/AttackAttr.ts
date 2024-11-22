/*
 * @Descripttion: 攻击力属性
 */
import { tab } from "../../../Table/table_gen";
import { CardAttrType, CardAttrValueInterface, CardDisplayType, isValidObj, kNegativeOneNumber, kOneNumber, kThousandNumber, kZeroNumber } from "../CommonInterface";
import CardAttr, { ICardAttrDataParam } from "./CardAttr";

export default class AttackAttr extends CardAttr {
    
    public getAttrValue(cardLv: number, compoundLv: number, displayType: any,isLevelUp:boolean) : CardAttrValueInterface{
        let curVal     = kZeroNumber;
        let minCurVal  = kNegativeOneNumber;
        let nextVal    = kZeroNumber;
        let minNextVal = kNegativeOneNumber;
        let bChange    = false;
        let attrName = tab.Data.GetKeyValue_ConfigTable().CommonTextAttack;
        let cardData: tab.CardTable = this.getAttrCardData();
           if(isValidObj(cardData)){
            let paramData: ICardAttrDataParam = {
                baseVal:     cardData.Attack,
                upLvVal:     cardData.AtkLvUp,
                compoundVal: cardData.AtkCompound,
                cardLv:      cardLv,
                compoundLv:  kZeroNumber,
                displayType: displayType,
                attrName:attrName
            };
            curVal  = this.calcCurAttrValue(paramData);
            curVal  = this.getAttrPrecisionValue(curVal,CardAttrType.ATTACK);
            
            nextVal = this.calcNextLvAttrValue(cardData, curVal, cardLv, compoundLv, displayType,isLevelUp);
            nextVal = this.getAttrPrecisionValue(nextVal,CardAttrType.ATTACK);
        }
        // bChange = (/*nextVal != curVal && */nextVal != kZeroNumber) ? true : false;
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
     * @param skillData   技能数据
     * @param curVal      当前卡牌属性值
     * @param cardLv      卡牌等级
     * @param startUpLv   卡牌星级
     * @param compoundLv  卡牌合成等级
     * @param displayType 显示类型
     */
    protected calcNextLvAttrValue(  cardData: tab.CardTable, 
                                    curVal: number, 
                                    cardLv: number, 
                                    compoundLv: number, 
                                    displayType: CardDisplayType,
                                    isLevelUp:boolean
                                    ){
        let retVal = kZeroNumber;
        let bValid = isValidObj(cardData);
        let paramData: ICardAttrDataParam = {
            baseVal:     bValid ? cardData.Attack : kZeroNumber,
            upLvVal:     bValid ? cardData.AtkLvUp : kZeroNumber,
            compoundVal: bValid ? cardData.AtkCompound : kZeroNumber,
            cardLv:      cardLv,
            compoundLv:  kZeroNumber,
            displayType: displayType,
            attrName:tab.Data.GetKeyValue_ConfigTable().CommonTextAttack
        };

        switch(displayType){
            case CardDisplayType.CARD_DISPLAY_TYPE_ATTR:
                paramData.cardLv     = cardLv + kOneNumber;
                retVal = this.calcCurAttrValue(paramData);
                retVal = Math.abs(curVal - retVal);
                break;

            case CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP:
                paramData.cardLv     = cardLv + kOneNumber;
                paramData.compoundLv = kZeroNumber;
                retVal = this.calcCurAttrValue(paramData);
                break;

            default:
                paramData.compoundLv = compoundLv;
                paramData.cardLv     = isLevelUp?cardLv+kOneNumber:cardLv;
                retVal = this.calcCurAttrValue(paramData);
                break;

        }
        return retVal;
    }

}

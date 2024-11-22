/*
 * @Descripttion: 卡牌属性基类【各个不同卡牌属性都得继承该类】
 */
import { proto } from "../../../Protocol/client_protocol";
import { tab } from "../../../Table/table_gen";
import { CardAttrType, CardAttrValueInterface, CardDisplayType, isInteger, isValidObj, kNegativeOneNumber, kNoneString, kOneNumber, kPercentString, kPlusSignString, kSingleLineString, kThousandNumber, kTwoNumber, kZeroNumber } from "../CommonInterface";

/**
 * 卡牌属性数据传参结构
 */
export interface ICardAttrDataParam {
    baseVal: number; /* 属性基础值 */
    upLvVal: number; /* 属性提升等级增量 */
    compoundVal: number; /* 属性合成等级增量 */
    cardLv: number; /* 棋子等级 */
    compoundLv: number; /* 棋子合成等级 */
    displayType: CardDisplayType; /* 显示类型 */
    attrName: string;                /* 棋子类型 */
    caleType?:number;                /* 数值计算类型 */
}

export default abstract class CardAttr {
    protected _attr_type: number;
    protected _card_id: number;

    constructor(cardID: number, attrType: number) {
        this._card_id = cardID;
        this._attr_type = attrType;
    }

    /**
     
     * Description: 获取卡牌属性值
     
     * @param cardLv       卡牌等级
     * @param starUpLv     卡牌星级
     * @param compoundLv   卡牌合成等级
     * @param displayType  当前显示类型【是属性界面？ 升星界面？ 合成界面？】
     * @param isLevelUp     当前是否在升级状态
     */
    public abstract getAttrValue(cardLv: number,
        compoundLv: number,
        displayType: CardDisplayType,
        isLevelUp: boolean,
        custom?
    ): CardAttrValueInterface;

    /**
     
     * Description: 计算属性的当前值
     
     * @param data  卡牌数组数据参数
     */
    protected calcCurAttrValue(data: ICardAttrDataParam) {
        let retVal = data.baseVal;
        retVal = this.calcAttrValueFromPercent(retVal, data.upLvVal, data.cardLv, data.attrName,data.caleType);
        /* 千分比 */
        if (CardDisplayType.CARD_DISPLAY_TYPE_STAR_UPLV === data.displayType ||
            CardDisplayType.CARD_DISPLAY_TYPE_SYNTHESIS === data.displayType) {
            // retVal = this.calcAttrValueWithStarAndCompound(data);
            retVal = this.calcStrengthenAttrValueFromPercent(retVal, data.compoundVal, data.compoundLv, data.attrName);
        }
        return retVal;
    }

    /**
     
     * Description: 计算属性的值附带强化和合成效果
     
     * @param data 卡牌属性数据参数
     */
    // protected calcAttrValueWithStarAndCompound(data: ICardAttrDataParam) {
    //     let retVal = data.baseVal;
    //     retVal = this.calcAttrValueFromPercent(retVal, data.upLvVal, data.cardLv);
    //     if (CardDisplayType.CARD_DISPLAY_TYPE_STAR_UPLV === data.displayType ||
    //         CardDisplayType.CARD_DISPLAY_TYPE_SYNTHESIS === data.displayType) {
    //         retVal = this.calcStrengthenAttrValueFromPercent(retVal, data.compoundVal, data.compoundLv);
    //     }
    //     return retVal;
    // }

    /**
     
     * Description: 按照百分比计算属性值
     
     * @param retVal    返回的结果
     * @param extraVal  附加值
     * @param cardLv    卡牌等级
     * @param calcType  计算类型
     */
    protected calcAttrValueFromPercent(retVal: number, extraVal: number, cardLv: number, attrName: string,caleType?) {
        if (attrName === tab.Data.GetKeyValue_ConfigTable().CommonTextSpeed) {
            return retVal * Math.pow(kOneNumber + extraVal / kThousandNumber, (cardLv - kOneNumber));
        }
        /* 如果是buff和skill单独计算 */
        if(attrName === "buffer"||attrName === "skill"){
            if(attrName==="buffer"){
                if(caleType===tab.BuffValueType.BuffValueType_Fixed){
                    /* 固定值 */
                    return Math.floor((retVal * extraVal) * (cardLv -  kOneNumber)) + retVal;
                }else{
                    /* 千分比 */
                    return Math.floor(retVal * Math.pow(kOneNumber + extraVal, (cardLv - kOneNumber)));
                }
            }
            if(attrName==="skill"){
                if(caleType===tab.CalcType.CalcType_Permillage){
                    /* 千分比 */
                    return Math.floor(retVal * Math.pow(kOneNumber + extraVal, (cardLv - kOneNumber)));
                }else if(caleType===tab.CalcType.CalcType_Fixed){
                    /* 固定伤害 */
                    return Math.floor((retVal * extraVal) * (cardLv -  kOneNumber)) + retVal;
                }else if(caleType===tab.SkillType.SkillType_DamageByRangeGain){
                    /* 按距离增伤 */
                    // return Math.floor(retVal * Math.pow(kOneNumber + extraVal, (cardLv - kOneNumber)));
                    return Math.floor(retVal * extraVal) * (cardLv -  kOneNumber) + retVal;
                }
            }
        }
        return Math.floor(retVal * Math.pow(kOneNumber + extraVal / kThousandNumber, (cardLv - kOneNumber)));
    }

    /**
     
     * Description: 按照固定值计算属性值
     
     * @param retVal    返回的结果
     * @param extraVal  附加值
     * @param cardLv    卡牌等级
     * @param calcType  计算类型
     */
    protected calcAttrValueFromFixed(retVal: number, extraVal: number, cardLv: number, calcType: number) {
        return retVal + (cardLv - kOneNumber) * extraVal;
    }

    /**
     
     * Description: 按照百分比计算卡牌强化、合成后的属性值
     
     * @param retVal        返回值
     * @param strengthvVal  强化值
     * @param compoundVal   合成值
     * @param strengthLv    强化等级
     * @param compoundLv    合成等级
     * @param calcType      计算类型
     */
    protected calcStrengthenAttrValueFromPercent(retVal: number,
        compoundVal: number,
        compoundLv: number,
        attrName: string) {
        let percentStrength = kZeroNumber;
        let percentSynthesis = kZeroNumber;
        (compoundLv > kOneNumber && compoundVal != kZeroNumber) ?
            (percentSynthesis += (compoundLv - kOneNumber) * compoundVal) : percentSynthesis;

        if (kZeroNumber == percentStrength && kZeroNumber == percentSynthesis) {
            return retVal;
        }
        /* skill buffer 不用除以1000 */
        if(attrName==="skill"||attrName==="buffer"){
            retVal = Math.floor((retVal * compoundVal)) * (compoundLv - 1) + retVal
            return retVal;
        }
        if (attrName === tab.Data.GetKeyValue_ConfigTable().CommonTextSpeed) {
            retVal = (retVal * compoundVal / 1000) * (compoundLv - 1) + retVal
            return retVal;
        } else {
            retVal = Math.floor(retVal * compoundVal / 1000) * (compoundLv - 1) + retVal
            return retVal;
        }
    }

    /**
     
     * Description: 按照固定值计算卡牌强化、合成后的属性值
     
     * @param retVal       返回值
     * @param strengthVal  强化值
     * @param compoundVal  合成值
     * @param strengthLv   强化等级
     * @param compoundLv   合成等级
     * @param calcType     计算类型
     */
    protected calcStrengthenAttrValueFromFixed(retVal: number,
        compoundVal: number,
        compoundLv: number,
    ) {
        retVal += (compoundLv > kOneNumber && compoundVal != kZeroNumber) ? (compoundVal * (compoundLv - kOneNumber)) : kZeroNumber;
        return retVal;
    }

    /**
     
     * Description: 计算卡牌最小属性值
     
     * @param curVal     当前属性值
     * @param skillData  技能数据
     */
    protected calcMinAttrValue(curVal: number) {
        // let skillData = this.getAttrSkillData();
        // if (isValidObj(skillData)) {
        //     if (skillData.RandomDamageMinMultiple > kZeroNumber) {
        //         return Math.floor(curVal / skillData.RandomDamageMinMultiple);
        //     }
        // }

        return kNegativeOneNumber;
    }

    /**
     
     * Description: 卡牌的属性描述文本
     
     * @param displayType 显示类型
     * @param attrVal     属性值结构
     * @param bNextStep   是否是下一级段属性
     */
    public getAttrDescription(displayType: CardDisplayType, attrVal: CardAttrValueInterface, bNextStep: boolean) {
        // let cardAttrInfo = tab.Data.CardAttrTableByAttrType.getValue(this._attr_type);
        // if (!isValidObj(this._card_attr_info)) {
        //     return kNoneString;
        // }

        //let suffixMark = (CardAttrType.CARD_ATTR_TYPE_ATTACK_SPEED == attrType) ? tab.Data.ConfigTable[kZeroNumber].SecondText : kNoneString;
        // let prefixMark = (CardAttrType.CARD_ATTR_TYPE_ATTACK_SPEED == this._attr_type) ? kSingleLineString : kPlusSignString;
        // if (CardAttrType.CARD_ATTR_TYPE_ATTACK_SPEED != this._attr_type &&
        //     CardAttrType.CARD_ATTR_TYPE_ATTACK != this._attr_type &&
        //     CardAttrType.CARD_ATTR_TYPE_TARGET != this._attr_type &&
        //     tab.CardExtraAttrType.CardExtraAttrType_RandomDamage != this._attr_type) {
        //     //suffixMark = getAttrValueSuffixMark(cardAttrInfo.AttrValueType);
        //     prefixMark = this.getNextStepPrefixMark(attrVal.nextAttrVal);
        // }
        let prefixMark = this.getNextStepPrefixMark(attrVal.nextAttrVal);
        // if (!bNextStep && this.getCardIsDisplayNoAttrText()) {
        //     return cardAttrInfo.AttrNoValueText;
        // }

        switch (displayType) {
            case CardDisplayType.CARD_DISPLAY_TYPE_ATTR:
                /**
                 * 如果某个属性在skillData表中的RandomDamageMinMultiple填了值，需要特殊处理显示(xxx~xxx)(xxx~xxx)
                 */
                return bNextStep ? ((attrVal.nextAttrVal != kZeroNumber) ?
                    ((attrVal.minNextAttrVal != kNegativeOneNumber) ?
                        `${attrVal.minNextAttrVal}~${attrVal.nextAttrVal}` :
                        `${prefixMark}${attrVal.nextAttrVal}`)
                    : kNoneString)
                    : ((attrVal.curAttrVal >= kZeroNumber) ?
                        ((attrVal.minNextAttrVal != kNegativeOneNumber) ?
                            `${attrVal.minCurAttrVal}~${attrVal.curAttrVal}` :
                            `${attrVal.curAttrVal}`)
                        : kSingleLineString);

            default:
                // let tmpPrefixmark = (attrVal.bChange) ? "" : `(${prefixMark}`;
                // let tmpSuffixmark = (attrVal.bChange) ? "" : ")";

                // return bNextStep ? ((attrVal.nextAttrVal != kZeroNumber) ?
                //     ((attrVal.minNextAttrVal != kNegativeOneNumber) ?
                //         `(${attrVal.minNextAttrVal}~${attrVal.nextAttrVal})` :
                //         `${tmpPrefixmark}${attrVal.nextAttrVal}${tmpSuffixmark}`) :
                //     kNoneString)
                //     : ((attrVal.curAttrVal >= kZeroNumber) ?
                //         ((attrVal.minNextAttrVal != kNegativeOneNumber) ?
                //             `${attrVal.minCurAttrVal}~${attrVal.curAttrVal}` :
                //             `${attrVal.curAttrVal}`)
                //         : kSingleLineString);
                return bNextStep ? ((attrVal.nextAttrVal != kZeroNumber) ?
                    ((attrVal.minNextAttrVal != kNegativeOneNumber) ?
                        `${attrVal.minNextAttrVal}~${attrVal.nextAttrVal}` :
                        `${(Math.floor(attrVal.nextAttrVal*100)-Math.floor(attrVal.curAttrVal*100))/100}`) :
                    kNoneString)
                    : ((attrVal.curAttrVal >= kZeroNumber) ?
                        ((attrVal.minNextAttrVal != kNegativeOneNumber) ?
                            `${attrVal.minCurAttrVal}~${attrVal.curAttrVal}` :
                            `${attrVal.curAttrVal}`)
                        : kSingleLineString);
        }
        return kNoneString;
    }

    /**
     
     * Description: 获取卡牌该属性要不要显示无属性值的文本
     
     */
    private getCardIsDisplayNoAttrText() {
        // if (isValidObj(this._card_attr_info)) {
        //     let idx = this._card_attr_info.NoAttrValOfCards.findIndex(tmpObj => tmpObj == this._card_id);
        //     return idx != kNegativeOneNumber;
        // }

        return true;
    }

    /**
     
     * Description: 取得卡牌属性格式化值
     
     * @param val 原始属性值
     */
    protected getCardAttrFormatValue(val: number) {
        let retVal = val;
        // if (!isValidObj(this._card_attr_info)) {
        //     return retVal;
        // }

        // let calcValType = this._card_attr_info.AttrValueType;
        // (tab.CardAttrValueType.CardAttrValueType_AddPercentValueCalc == calcValType ||
        //     tab.CardAttrValueType.CardAttrValueType_SubPercentValueCalc == calcValType)
        //     && (retVal /= kThousandNumber);

        // (tab.CardAttrValueType.CardAttrValueType_AddFixedValueTimeCalc == calcValType ||
        //     tab.CardAttrValueType.CardAttrValueType_SubFixedValueTimeCalc == calcValType ||
        //     tab.CardAttrValueType.CardAttrValueType_AddFixedValueTime == calcValType ||
        //     tab.CardAttrValueType.CardAttrValueType_SubFixedValueTime == calcValType)
        //     && (retVal /= kThousandNumber);

        return retVal;
    }

    /**
     
     * Description: 获取卡牌属性值的后缀字符
     
     */
    public getSuffixMark(): string {
        if (this.getCardIsDisplayNoAttrText()) {
            return kNoneString;
        }

        // let suffixMark = (CardAttrType.CARD_ATTR_TYPE_ATTACK_SPEED == this._attr_type) ?
        //     tab.Data.GetKeyValue_ConfigTable().SecondText : kNoneString;

        // if (CardAttrType.CARD_ATTR_TYPE_ATTACK_SPEED != this._attr_type &&
        //     CardAttrType.CARD_ATTR_TYPE_ATTACK != this._attr_type &&
        //     CardAttrType.CARD_ATTR_TYPE_TARGET != this._attr_type &&
        //     tab.CardExtraAttrType.CardExtraAttrType_RandomDamage != this._attr_type) {

        //     if (isValidObj(this._card_attr_info)) {
        //         (tab.CardAttrValueType.CardAttrValueType_AddFixedValue === this._card_attr_info.AttrValueType ||
        //             tab.CardAttrValueType.CardAttrValueType_AddFixedValueCalc === this._card_attr_info.AttrValueType ||
        //             tab.CardAttrValueType.CardAttrValueType_SubFixedValue === this._card_attr_info.AttrValueType ||
        //             tab.CardAttrValueType.CardAttrValueType_SubFixedValueCalc === this._card_attr_info.AttrValueType
        //         ) && (suffixMark = kNoneString);

        //         (tab.CardAttrValueType.CardAttrValueType_AddPercentValue === this._card_attr_info.AttrValueType ||
        //             tab.CardAttrValueType.CardAttrValueType_AddPercentValueCalc === this._card_attr_info.AttrValueType ||
        //             tab.CardAttrValueType.CardAttrValueType_SubPercentValue === this._card_attr_info.AttrValueType ||
        //             tab.CardAttrValueType.CardAttrValueType_SubPercentValueCalc === this._card_attr_info.AttrValueType
        //         ) && (suffixMark = kPercentString);

        //         (tab.CardAttrValueType.CardAttrValueType_AddFixedValueTimeCalc === this._card_attr_info.AttrValueType ||
        //             tab.CardAttrValueType.CardAttrValueType_SubFixedValueTimeCalc === this._card_attr_info.AttrValueType ||
        //             tab.CardAttrValueType.CardAttrValueType_AddFixedValueTime === this._card_attr_info.AttrValueType ||
        //             tab.CardAttrValueType.CardAttrValueType_SubFixedValueTime === this._card_attr_info.AttrValueType
        //         ) && (suffixMark = tab.Data.GetKeyValue_ConfigTable().SecondText);
        //     }//end of if(isValidObj(this._card_attr_info))
        // }// end of if attrType

        return kNoneString;
    }

    /**
     
     * Description: 获取卡牌下一阶段属性值的前缀字符
     
     */
    public getNextStepPrefixMark(nextVal: number) {
        // if (isValidObj(this._card_attr_info)) {
        //     switch (this._card_attr_info.AttrValueType) {
        //         case tab.CardAttrValueType.CardAttrValueType_AddFixedValue:
        //         case tab.CardAttrValueType.CardAttrValueType_AddFixedValueCalc:
        //         case tab.CardAttrValueType.CardAttrValueType_AddPercentValue:
        //         case tab.CardAttrValueType.CardAttrValueType_AddPercentValueCalc:
        //         case tab.CardAttrValueType.CardAttrValueType_AddFixedValueTimeCalc:
        //         case tab.CardAttrValueType.CardAttrValueType_AddFixedValueTime:
        //             //case tab.CardAttrValueType.CardAttrValueType_AddPercentValueTimeCalc:
        //             return kPlusSignString;

        //         case tab.CardAttrValueType.CardAttrValueType_SubFixedValue:
        //         case tab.CardAttrValueType.CardAttrValueType_SubFixedValueCalc:
        //         case tab.CardAttrValueType.CardAttrValueType_SubPercentValue:
        //         case tab.CardAttrValueType.CardAttrValueType_SubPercentValueCalc:
        //         case tab.CardAttrValueType.CardAttrValueType_SubFixedValueTimeCalc:
        //         case tab.CardAttrValueType.CardAttrValueType_SubFixedValueTime:
        //             //case tab.CardAttrValueType.CardAttrValueType_SubPercentValueTimeCalc:
        //             if (nextVal < kZeroNumber) { return kNoneString; }
        //             return kSingleLineString;
        //     }
        // }

        return kNoneString;
    }

    /**
     
     * Description: 获取属性技能数据
     
     */
    protected getAttrCardData() {
        let cardTab: tab.CardTable = tab.Data.CardTableByID.getValue(this._card_id);
        return cardTab;
    }

    /**
     
     * Description: 获取SkillLvUp表数据
     
     * @returns 
     */
    protected getSkillLvUpData() {
        // if (!isValidObj(this._card_attr_info)) {
        //     if (!cc.sys.isNative) { throw new Error("该属性不存在，请检查配表！"); }
        //     return null;
        // }

        // let skillLvUpData: tab.SkillLvUpTable = null;
        // if (kNegativeOneNumber != this._card_attr_info.BuffID) {
        //     let buffData: tab.BuffTable = tab.Data.BuffTableByID.getValue(this._card_attr_info.BuffID);
        //     if (!isValidObj(buffData)) {
        //         if (!cc.sys.isNative) { throw new Error("该属性所配置的buff不存在，请检查配表！"); }
        //         return null;
        //     }

        //     skillLvUpData = tab.Data.SkillLvUpTableByID.getValue(buffData.ValueID);
        //     if (!isValidObj(skillLvUpData)) {
        //         if (!cc.sys.isNative) { throw new Error("@@@@@该属性所配置的buffID不存在，请检查配表！"); }
        //         return null;
        //     }

        //     return skillLvUpData;
        // }

        // skillLvUpData = (kNegativeOneNumber != this._card_attr_info.SkillLvUpID) ? tab.Data.SkillLvUpTableByID.getValue(this._card_attr_info.SkillLvUpID) : null;
        // if (!isValidObj(skillLvUpData)) {
        //     if (!cc.sys.isNative) { throw new Error("该技能数据不存在，请检查配表！"); }
        // }

        // return skillLvUpData;
        return null
    }

    /**
     
     * Description: 取得卡牌属性精度值
     
     * @param val  属性值
     * @returns 
     */
    protected getAttrPrecisionValue(val: number, type: CardAttrType) {
        // if (isValidObj(this._card_attr_info)) {
        switch (type) {
            case CardAttrType.ATTACK:
            case CardAttrType.HP:
            case CardAttrType.RANGE:
            case CardAttrType.SKILL:
            case CardAttrType.BUFFER:
                return Math.floor(val);

            case CardAttrType.ATTACK_SPEED:
                if (!isInteger(val)) { val = Number(val.toFixed(kTwoNumber)); }
                break;
        }
        return val;
    }
}

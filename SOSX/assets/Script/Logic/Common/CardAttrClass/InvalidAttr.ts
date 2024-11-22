/*
 * @Descripttion: 无效的属性
 */

import { CardAttrValueInterface, kNegativeOneNumber, kZeroNumber } from "../CommonInterface";
import CardAttr from "./CardAttr";

export default class InvalidAttr extends CardAttr {
    
    public getAttrValue(cardLv: number, starUpLv: number, compoundLv: number, displayType: any) : CardAttrValueInterface{
        let curVal     = kZeroNumber;
        let minCurVal  = kNegativeOneNumber;
        let nextVal    = kZeroNumber;
        let minNextVal = kNegativeOneNumber;
        let bChange    = false;

        return {
                curAttrVal: curVal, 
                minCurAttrVal: minCurVal,
                nextAttrVal: nextVal,
                minNextAttrVal: minNextVal,
                bChange: bChange
              };
    }
}

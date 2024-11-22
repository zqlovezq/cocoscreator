/*
 * @Descripttion: 狼人觉醒攻击速度属性
 */

import { tab } from "../../../Table/table_gen";
import { isValidObj, kZeroNumber } from "../CommonInterface";
import AttackSpdAttr from "./AttackSpdAttr";

export default class AwakeningAtkSpdAttr extends AttackSpdAttr {
    
    protected getAttrSkillData(){
        let cardTab: tab.CardTable    = tab.Data.CardTableByID.getValue(this._card_id);
        if(isValidObj(cardTab)){
            //查找该卡牌有没有觉醒
            let skillData = (cardTab.CreateSkill > kZeroNumber) ? tab.Data.SkillTableByID.getValue(cardTab.CreateSkill) : null;
            //有觉醒，再去查找觉醒的卡牌ID，找到后再去找觉醒卡牌ID的技能值
            let cardIDArr = isValidObj(skillData) ? skillData.AwakenCreateCardID : [];
            for(let cardID of cardIDArr){
                //觉醒卡组中的卡牌ID 不是当前卡牌ID 说明就是觉醒的卡牌ID 用这个卡牌ID去查找相关属性数据
                if(cardID != this._card_id){
                    //觉醒的卡牌存在, 读取该卡牌的相关技能属性
                    let awakenCardTabData = tab.Data.CardTableByID.getValue(cardID);
                    skillData = isValidObj(awakenCardTabData) ? tab.Data.SkillTableByID.getValue(awakenCardTabData.AttackSkill) : skillData;
                    return skillData;
                } //end if(cardID != this._card_id)
            }//end for
            
            skillData = tab.Data.SkillTableByID.getValue(cardTab.AttackSkill);
            return skillData;
        }//end if(isValidObj(cardTab))

        return null;
    }
}

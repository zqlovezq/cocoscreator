/*
 * @Descripttion: 
 */

import { CardAttrType, kNegativeOneNumber, kZeroNumber } from "../CommonInterface";
import AttackAttr from "./AttackAttr";
import AttackSpdAttr from "./AttackSpdAttr";
import HpAttr from "./HpAttr";
import InvalidAttr from "./InvalidAttr";
import AttackRangeAttr from "./AttackRangeAttr";
import SkillAttr from "./SkillAttr";
import BufferAttr from "./BufferAttr";

export default class ManagerCardAttr {
    private _card_attrs_map: Map<number, Function> = new Map<number, Function>();

    private static _instance: ManagerCardAttr = null;
    public static getInstance(): ManagerCardAttr {
        if (!ManagerCardAttr._instance) {
            ManagerCardAttr._instance = new ManagerCardAttr();
            ManagerCardAttr._instance.initData();
        }
        return ManagerCardAttr._instance;
    }

    public initData() {

        //无效的属性
        this._card_attrs_map.set(kNegativeOneNumber, (cardID: number) => {
            let cardAttr = new InvalidAttr(cardID, CardAttrType.ATTACK);
            return cardAttr;
        });
        this._card_attrs_map.set(kZeroNumber, (cardID: number) => {
            let cardAttr = new InvalidAttr(cardID, CardAttrType.ATTACK);
            return cardAttr;
        });

        //攻击力
        this._card_attrs_map.set(CardAttrType.ATTACK, (cardID: number) => {
            let cardAttr = new AttackAttr(cardID, CardAttrType.ATTACK);
            return cardAttr;
        });

        //攻击速度
        this._card_attrs_map.set(CardAttrType.ATTACK_SPEED, (cardID: number) => {
            let cardAttr = new AttackSpdAttr(cardID, CardAttrType.ATTACK_SPEED);
            return cardAttr;
        });

        //血量
        this._card_attrs_map.set(CardAttrType.HP, (cardID: number) => {
            let cardAttr = new HpAttr(cardID, CardAttrType.HP);
            return cardAttr;
        });
        //攻击速度
        this._card_attrs_map.set(CardAttrType.RANGE, (cardID: number) => {
            let cardAttr = new AttackRangeAttr(cardID, CardAttrType.RANGE);
            return cardAttr;
        });
        // 技能
        this._card_attrs_map.set(CardAttrType.SKILL, (cardID: number) => {
            let cardAttr = new SkillAttr(cardID, CardAttrType.SKILL);
            return cardAttr;
        });
        // buffer
        this._card_attrs_map.set(CardAttrType.BUFFER, (cardID: number) => {
            let cardAttr = new BufferAttr(cardID, CardAttrType.BUFFER);
            return cardAttr;
        });
        // //忍镖伤害
        // this._card_attrs_map.set(tab.CardExtraAttrType.CardExtraAttrType_DartlikeWeaponDamage, (cardID: number)=>{
        //     let cardAttr = new DartlikeWeaponAttr(cardID, tab.CardExtraAttrType.CardExtraAttrType_DartlikeWeaponDamage);
        //     return cardAttr;
        // });

        // //每秒伤害
        // this._card_attrs_map.set(tab.CardExtraAttrType.CardExtraAttrType_DamagePerSeconds, (cardID: number)=>{
        //     let cardAttr = new PerSecondDamageAttr(cardID, tab.CardExtraAttrType.CardExtraAttrType_DamagePerSeconds);
        //     return cardAttr;
        // });

        // //随机攻击
        // this._card_attrs_map.set(tab.CardExtraAttrType.CardExtraAttrType_RandomDamage, (cardID: number)=>{
        //     let cardAttr = new RandomDamageAttr(cardID, tab.CardExtraAttrType.CardExtraAttrType_RandomDamage);
        //     return cardAttr;
        // });

        // //变身时间
        // this._card_attrs_map.set(tab.CardExtraAttrType.CardExtraAttrType_TransformTime, (cardID: number)=>{
        //     let cardAttr = new TransformTimeAttr(cardID, tab.CardExtraAttrType.CardExtraAttrType_TransformTime);
        //     return cardAttr;
        // });

        // //暴击
        // this._card_attrs_map.set(tab.CardExtraAttrType.CardExtraAttrType_CriticalRate, (cardID: number)=>{
        //     let cardAttr = new CriticalRateAttr(cardID, tab.CardExtraAttrType.CardExtraAttrType_CriticalRate);
        //     return cardAttr;
        // });

        // //冷却时间
        // this._card_attrs_map.set(tab.CardExtraAttrType.CardExtraAttrType_DevilSkillCoolDown, (cardID: number)=>{
        //     let cardAttr = new DevilActiveCDAttr(cardID, tab.CardExtraAttrType.CardExtraAttrType_DevilSkillCoolDown);
        //     return cardAttr;
        // });

        // //狙击失败概率
        // this._card_attrs_map.set(tab.CardExtraAttrType.CardExtraAttrType_SnipeFailRate, (cardID: number)=>{
        //     let cardAttr = new SnipeAttr(cardID, tab.CardExtraAttrType.CardExtraAttrType_SnipeFailRate);
        //     return cardAttr;
        // });

        // //狼人觉醒攻击速度
        // this._card_attrs_map.set(tab.CardExtraAttrType.CardExtraAttrType_AwakenAttackSpd, (cardID: number)=>{
        //     let cardAttr = new AwakeningAtkSpdAttr(cardID, tab.CardExtraAttrType.CardExtraAttrType_AwakenAttackSpd);
        //     return cardAttr;
        // });

        // //护罩次数
        // this._card_attrs_map.set(tab.CardExtraAttrType.CardExtraAttrType_ShieldNum, (cardID: number)=>{
        //     let cardAttr = new ShieldAttr(cardID, tab.CardExtraAttrType.CardExtraAttrType_ShieldNum);
        //     return cardAttr;
        // });

        // //攻击减速
        // this._card_attrs_map.set(tab.CardExtraAttrType.CardExtraAttrType_AtkSpeedDown, (cardID: number)=>{
        //     let cardAttr = new AtkSpeedDownAttr(cardID, tab.CardExtraAttrType.CardExtraAttrType_AtkSpeedDown);
        //     return cardAttr;
        // });

        // for(let data of tab.Data.CardAttrTable){
        //     if(data.BuffID == kNegativeOneNumber && data.SkillLvUpID == kNegativeOneNumber){
        //         continue;
        //     }
        //     this._card_attrs_map.set(data.AttrType, (cardID: number)=>{
        //         let cardAttr = new SkillLvUpAttr(cardID, data.AttrType);
        //         return cardAttr;
        //     });
        // }
    }

    /* 获取卡牌属性对象
     * @param attrType   卡牌属性
     * @param cardID     卡牌ID
     * @returns          创建对应的属性类型Object
     */
    public getCardAttrObj(attrType: number, cardID: number) {
        if (this._card_attrs_map.has(attrType)) {
            return this._card_attrs_map.get(attrType)(cardID);
        }

        return null;
    }
}

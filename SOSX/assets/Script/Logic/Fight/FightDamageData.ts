/*
 *  战后统计具体数据
 */

import { isValidObj, kHundredNumber, kOneNumber, kZeroNumber} from "../Common/CommonInterface";
import PlayerCard from "../PlayerInfo/PlayerCard";
import { IFightDamageGroup } from "./FightDataStatistics";
import FightMsgManager from "./FightMsgManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FightDamageData extends cc.Component {

    @property(cc.Label)
    lbl_self_damage_val: cc.Label = null; /*  */

    @property(cc.Label) 
    lbl_other_damage_val: cc.Label = null; /*  */

    @property(cc.Node)
    node_self_card: cc.Node = null; /*  */

    @property(cc.Node)
    node_other_card: cc.Node = null; /*  */

    @property(cc.ProgressBar)
    self_prog_val: cc.ProgressBar = null; /*  */

    @property(cc.ProgressBar)
    other_prog_val: cc.ProgressBar = null; /*  */
    
    /*  */
    onLoad () {
        this.node_self_card.getComponent(PlayerCard).setCanTouch(true);
        this.node_other_card.getComponent(PlayerCard).setCanTouch(true);
    }

    /*  */
    start () {}

    /*  */
    public initData(data: IFightDamageGroup, selfTotalDamage: number, otherTotalDamage: number){
        this.setHeadCard(data.selfCardID,  true);
        this.setHeadCard(data.otherCardID, false);
        this.setDamageProgress(selfTotalDamage == kZeroNumber  ? kZeroNumber : data.selfDamageVal / selfTotalDamage,   true);
        this.setDamageProgress(otherTotalDamage == kZeroNumber ? kZeroNumber : data.otherDamageVal / otherTotalDamage, false);
        this.setDamageVal(selfTotalDamage == kZeroNumber       ? kZeroNumber : data.selfDamageVal / selfTotalDamage,   true);
        this.setDamageVal(otherTotalDamage == kZeroNumber      ? kZeroNumber : data.otherDamageVal / otherTotalDamage, false);
    }

    /* 设置头像 */
    private setHeadCard(cardID: number, bSelf: boolean){
        let cardLv = this.findCardLevel(cardID, bSelf);
        bSelf ? this.node_self_card.getComponent(PlayerCard).initData(cardID, cardLv, true) : 
                this.node_other_card.getComponent(PlayerCard).initData(cardID, cardLv, false);
    }

    /* 查找卡牌等级 */
    private findCardLevel(cardID: number, bSelf: boolean){
        let deckList = bSelf ? FightMsgManager.Instance.myFightData.deckData : FightMsgManager.Instance.otherFightData.deckData;
        if(isValidObj(deckList)){
            for(let data of deckList){
                if(data.staticId == cardID){
                    return data.level;
                }
            }
        }

        return kOneNumber;
    }
    
    /* 设置伤害进度 */
    private setDamageProgress(val: number, bSelf: boolean){
        val = val > kOneNumber ? kOneNumber : val;
        bSelf ? (this.self_prog_val.progress = val) : (this.other_prog_val.progress = val);
    }

    /* 设置伤害数值 */
    private setDamageVal(val: number, bSelf: boolean){
        val = Math.round(val * kHundredNumber);
        bSelf ? (this.lbl_self_damage_val.string = `${val}%`) : (this.lbl_other_damage_val.string = `${val}%`);
    }
}

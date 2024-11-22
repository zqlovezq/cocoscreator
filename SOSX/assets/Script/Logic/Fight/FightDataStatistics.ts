/*
 *  战后统计伤害模块
 */

import { kHundredNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import PopLayer from "../Utils/PopLayer";
import FightDamageData from "./FightDamageData";

/*  */
export interface IFightDamageData{
    cardID: number;
    damageVal: number;
}

/*  */
export interface IFightDamageGroup{
    selfCardID:     number;
    otherCardID:    number;
    selfDamageVal:  number;
    otherDamageVal: number;
}

const {ccclass, property} = cc._decorator;

@ccclass
export default class FightDataStatistics extends PopLayer {

    @property(cc.Button)
    btn_closed: cc.Button = null; /*  */

    @property(cc.Button)
    btn_confirm: cc.Button = null; /*  */

    @property(FightDamageData)
    node_fight_damage_1: FightDamageData = null; /*  */

    @property(FightDamageData)
    node_fight_damage_2: FightDamageData = null; /*  */

    @property(FightDamageData)
    node_fight_damage_3: FightDamageData = null; /*  */

    @property(FightDamageData)
    node_fight_damage_4: FightDamageData = null; /*  */

    @property(FightDamageData)
    node_fight_damage_5: FightDamageData = null; /*  */

    @property(cc.Label)
    lbl_round_count: cc.Label = null; /*  */

    @property(cc.Label)
    lbl_self_total_damage: cc.Label = null; /*  */

    @property(cc.Label)
    lbl_other_total_damage: cc.Label = null; /*  */

    @property(cc.Node)
    node_cooperation: cc.Node = null; /*  */

    @property(cc.Node)
    node_pvp: cc.Node = null; /*  */

    @property(cc.Node)
    node_total_damage: cc.Node = null; /*  */

    @property(cc.Sprite)
    spr_self_win_flag: cc.Sprite = null; /*  */

    @property(cc.Sprite)
    spr_self_failed_flag: cc.Sprite = null; /*  */

    @property(cc.Sprite)
    spr_other_win_flag: cc.Sprite = null; /*  */

    @property(cc.Sprite)
    spr_other_failed_flag: cc.Sprite = null; /*  */

    private _total_round_count: number                = kZeroNumber; /*  */
    private _damage_group_nodes: FightDamageData[]    = []; /*  */
    private _fight_damage_groups: IFightDamageGroup[] = []; /*  */
    private _bSelfWin: boolean                        = false; /*  */
    private _self_total_damage_val: number            = kZeroNumber; /*  */
    private _other_total_damage_val: number           = kZeroNumber; /*  */

    /*  */
    onLoad () {
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);},  this);
        this.btn_confirm.node.on("click", ()=>{this.setVisible(false);}, this);

        this._damage_group_nodes.push(this.node_fight_damage_1);
        this._damage_group_nodes.push(this.node_fight_damage_2);
        this._damage_group_nodes.push(this.node_fight_damage_3);
        this._damage_group_nodes.push(this.node_fight_damage_4);
        this._damage_group_nodes.push(this.node_fight_damage_5);
    }

    start () {
    }

    /*  */
    onDestroy(){
        this._damage_group_nodes  = [];
        this._fight_damage_groups = [];
    }

    /*  */
    public initData(selfDamageList: IFightDamageData[], 
                    otherDamageList: IFightDamageData[], 
                    roundCnt: number, 
                    bSelfWin: boolean, 
                    bPvp: boolean){
        this._total_round_count       = roundCnt;
        this._bSelfWin                = bSelfWin;
       
        this.setPvpNodeVisible(bPvp);
        this.sortDamageData(selfDamageList);
        this.sortDamageData(otherDamageList);
        this._fight_damage_groups = []
        this._other_total_damage_val = 0
        this._self_total_damage_val = 0
        let dataListLen = selfDamageList.length;
        for(let idx = kZeroNumber; idx < dataListLen; idx++){
            this._fight_damage_groups.push(
                {   selfCardID:     selfDamageList[idx].cardID, 
                    otherCardID:    otherDamageList[idx].cardID, 
                    selfDamageVal:  selfDamageList[idx].damageVal, 
                    otherDamageVal: otherDamageList[idx].damageVal
                }
            );

            this._self_total_damage_val  += selfDamageList[idx].damageVal;
            this._other_total_damage_val += otherDamageList[idx].damageVal;
        }

        this.showPage();
    }

    /* 显示页面 */
    private showPage(){
        this.setRoundCount();
        this.setSelfWinFlag();
        this.setTotalDamageVal();
        this.setCardGroups();
    }

    /* 设置PVP节点的可见性
     */
    private setPvpNodeVisible(bPvp: boolean){
        this.node_pvp.active          = bPvp;
        this.node_cooperation.active  = !bPvp;
        this.node_total_damage.active = !bPvp;
    }

    /* 设置战斗轮次
     */
    private setRoundCount(){
        this.node_cooperation.active && (this.lbl_round_count.string = `${this._total_round_count}`);
    }

    /* 设置PVP中谁胜利了
     */
    private setSelfWinFlag(){
        this.spr_self_failed_flag.node.active  = !this._bSelfWin;
        this.spr_self_win_flag.node.active     = this._bSelfWin;
        this.spr_other_win_flag.node.active    = !this._bSelfWin;
        this.spr_other_failed_flag.node.active = this._bSelfWin;
    }

    /* 设置总伤害值
     */
    private setTotalDamageVal(){
        if(!this.node_cooperation.active){
            return;
        }
        
        let selfPercent    = kZeroNumber;
        let otherPercent   = kZeroNumber;
        let totalDamageVal = this._self_total_damage_val + this._other_total_damage_val;
        
        if(totalDamageVal > kZeroNumber){
            selfPercent    = (this._self_total_damage_val / totalDamageVal) * kHundredNumber;
            otherPercent   = (this._other_total_damage_val / totalDamageVal) * kHundredNumber;
        }
        
        this.lbl_self_total_damage.string  = `${Math.round(selfPercent)}%`;
        this.lbl_other_total_damage.string = `${Math.round(otherPercent)}%`;
    }

    /* 设置卡组
     */
    private setCardGroups(){
        let groupsLen = this._damage_group_nodes.length;
        for(let idx = kZeroNumber; idx < groupsLen; idx++){
            this._damage_group_nodes[idx].initData( this._fight_damage_groups[idx], 
                                                    this._self_total_damage_val, 
                                                    this._other_total_damage_val);
        }
    }

    /* 排序伤害数据
     */
    private sortDamageData(dataList: IFightDamageData[]){
        if(!dataList || dataList.length < kTwoNumber){
            return;
        }
    
        dataList.sort((data1: IFightDamageData, data2: IFightDamageData): number=>{
            return data2.damageVal - data1.damageVal;
        });
    }
}

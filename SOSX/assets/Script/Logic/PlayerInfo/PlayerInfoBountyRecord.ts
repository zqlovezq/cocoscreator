/*
 * @Descripttion: 玩家赏金赛信息战斗记录模块
 */

import { proto } from "../../Protocol/client_protocol";
import { kHundredNumber, kOneNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";

import { showPopLayerV2 } from "../Utils/GameUtils";
import UIResetFightRecord from './ResetFightRecord'

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerInfoBountyRecord extends cc.Component {

    @property(cc.Label)
    lbl_first_total_count: cc.Label = null;
    @property(cc.Label)
    lbl_total_count: cc.Label = null;

    @property(cc.Label)
    lbl_fight_win_rate: cc.Label = null;

    @property(cc.Button)
    clearBtn: cc.Button = null;

    /* 设置玩家战斗记录信息
     * @param fightRecordInfo  玩家战斗记录信息
     * @param bShowClearBtn    是否显示"清除战绩"按钮
     */
    //Msg_PlayerInfoRsp
    public initData(fightRecordInfo: proto.Msg_GetBountyStatRsp,showButton:boolean){
        this.lbl_total_count.string = String(fightRecordInfo.totalCount);
        if(fightRecordInfo.winRate){
            this.lbl_fight_win_rate.string = Math.floor(fightRecordInfo.winRate*100)+"%"
        }else{
            this.lbl_fight_win_rate.string = "0%"
        }
        this.lbl_first_total_count.string = String(fightRecordInfo.firstRankCount)
        this.setClearButtnVisible(showButton)
    }

    /*  */
    private onOpenResetFightRecord() {
        showPopLayerV2("prefab/ResetFightRecord", UIResetFightRecord,false).then(nodeDetail=>{
            nodeDetail.setType(1);
        })
    }

    // /*  */
    private setClearButtnVisible(bVisible:boolean=true){
        this.clearBtn.node.active = bVisible;
    }
}

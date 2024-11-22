/*
 * @Descripttion: 玩家信息战斗记录模块
 */

import { proto } from "../../Protocol/client_protocol";
import { kHundredNumber, kOneNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";

import { showPopLayerV2 } from "../Utils/GameUtils";
import UIResetFightRecord from './ResetFightRecord'

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerInfoFightRecordModel extends cc.Component {

    @property(cc.Label)
    lbl_fight_cnt: cc.Label = null;

    @property(cc.Label)
    lbl_fight_win_rate: cc.Label = null;

    @property(cc.Button)
    clearBtn: cc.Button = null;

    /* 设置玩家战斗记录信息
     * @param fightRecordInfo  玩家战斗记录信息
     * @param bShowClearBtn    是否显示"清除战绩"按钮
     */
    public initData(fightRecordInfo: proto.IPlayerInfoFightRecord, bShowClearBtn:boolean){
        let fightWinRate = kZeroNumber;
        if( fightRecordInfo.fightCount < kOneNumber){
            fightWinRate = 0;
        } else {
            fightWinRate = (fightRecordInfo.fightWinCount / fightRecordInfo.fightCount) * kHundredNumber;
            fightWinRate = Number(fightWinRate.toFixed(kTwoNumber));
        }
       
        this.lbl_fight_cnt.string   = `${fightRecordInfo.fightCount}`;
        this.lbl_fight_win_rate.string  = `${fightWinRate}%`;
        this.setClearButtnVisible(bShowClearBtn)
    }

    /*  */
    private onOpenResetFightRecord() {
        // showPopLayerV2("prefab/ResetFightRecord", UIResetFightRecord)
        showPopLayerV2("prefab/ResetFightRecord", UIResetFightRecord,false).then(nodeDetail=>{
            nodeDetail.setType(0);
        })
    }

    /*  */
    private setClearButtnVisible(bVisible:boolean=true){
        this.clearBtn.node.active = bVisible;
    }
}

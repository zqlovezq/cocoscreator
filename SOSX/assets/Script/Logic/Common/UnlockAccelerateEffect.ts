/*
 * @Descripttion: 解锁加速效果弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { getServerUtcTime, setTimeTXT } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import { isValidObj, kOneNumber, kZeroNumber } from "./CommonInterface";
import Role from "./Role";
import RankScoreRewardClass, { getCutDownTimesString } from "./SeasonRankCommonFunc";

const totaltime = 12

const {ccclass, property} = cc._decorator;

@ccclass
export default class UnlockAccelerateEffect extends PopLayer {

    @property(cc.Label)
    lbl_accelerate_time: cc.Label = null;

    @property(cc.Label)
    lbl_cutdown_time: cc.Label = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Node)
    node_spine: cc.Node  = null;

    @property(cc.Label)
    lbl_addtime: cc.Label = null
    
    private _rank_level: number = kZeroNumber;
    private _rank_buff_end_uts: number = kZeroNumber;
    private _unlock_accelerate_effect: sp.Skeleton = null;
    private _offset:number = 0  //增加的整小时
    private oldoffset: number = 0
    private _offsethour: number = 0

    onLoad () {
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
        this._unlock_accelerate_effect = this.node_spine.getComponent(sp.Skeleton);
    }

    start () {
        let rankInfo            = Role.Instance.RoleData.rankData;
        this._rank_level        = RankScoreRewardClass.getInstance().getRankLevelToScore(rankInfo.score);
        this._rank_buff_end_uts = rankInfo.buffEndUTC;
        this.btn_closed.node.active = false;
        // this.refreshLeftTime();

        //刷新下宝箱的加速时间
        let param = new proto.Msg_GetRankPackageInfoReq()
        Net.Send(proto.Ptl.GetRankPackageInfoReq, param)

        //刷新下主界面的加速倒计时
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_RefreshBoxSpeedUpTimeLeft, null)
    }

    public initData(ntype:number){
        if(ntype == 0){
            this.setFixedTimeByLv()
            this.playAnimation()
        } else {
            this.setFixedTimes()
            this.playAnimation()
        }
    }

    setFixedTimeByLv(){
        let tabGradeData = tab.Data.RankGradeTableByGrade.getValue(this._rank_level);
        let hourStr = tab.Data.GetKeyValue_ConfigTable().HourTip;
        if(isValidObj(tabGradeData)){
            if (tabGradeData.BuffItem >= 3600){
                this._offset =  Role.Instance.RoleData.rankData.buffEndUTC - Math.max(Role.Instance.getOldBufferEndUTC(), getServerUtcTime()) + 10
                this.oldoffset = Role.Instance.getOldBufferEndUTC() - getServerUtcTime()
                this.oldoffset = this.oldoffset > 0 ? this.oldoffset : 0
                setTimeTXT(this.lbl_cutdown_time, this.oldoffset)

                let hour = tabGradeData.BuffItem / 3600;
                this._offsethour = hour
                this.lbl_accelerate_time.string = `${Math.floor(hour)}${hourStr}`;
                this.lbl_addtime.string =  `${Math.floor(hour)}${hourStr}`;
                Role.Instance.setOldBufferEndUTC(Role.Instance.RoleData.rankData.buffEndUTC)

                return;                
            }
            this.lbl_accelerate_time.string = `0${hourStr}`;
            this.lbl_addtime.string =  `0${hourStr}`;
        }
    }


    /* 设置加速固定显示时间
     */
    private setFixedTimes(){
        let hourStr = tab.Data.GetKeyValue_ConfigTable().HourTip;

        //原有的加速时间
        this.oldoffset = Role.Instance.getOldBufferEndUTC() - getServerUtcTime()
        this.oldoffset =this.oldoffset > 0 ? this.oldoffset : 0
        setTimeTXT(this.lbl_cutdown_time, this.oldoffset)

        //增加的解鎖加速时间

        this._offset =  Role.Instance.RoleData.rankData.buffEndUTC - Math.max(Role.Instance.getOldBufferEndUTC(), getServerUtcTime()) + 10
        let hour = this._offset / 3600;
        this._offsethour = hour
        this.lbl_accelerate_time.string = `${Math.floor(hour)}${hourStr}`
        this.lbl_addtime.string =  `${Math.floor(hour)}${hourStr}`

        Role.Instance.setOldBufferEndUTC(Role.Instance.RoleData.rankData.buffEndUTC)
    }

    /* 刷新剩余时间
     */
    private refreshLeftTime(){
        let leftTime = this.oldoffset + this._offset - this._offsethour * 3600
        if(leftTime >= 0 && this._offsethour >= 0)
        {
           // this.lbl_cutdown_time.string = getCutDownTimesString(leftTime);
            setTimeTXT(this.lbl_cutdown_time, leftTime)
        }
        this._offsethour--
    
    }

    /* 播放动画
     */
    private playAnimation(){
        if(isValidObj(this._unlock_accelerate_effect)){
            let times = this._offsethour
            this._unlock_accelerate_effect.setAnimation(kZeroNumber, "idle1", false);
            this._unlock_accelerate_effect.setCompleteListener(()=>{
                this.lbl_addtime.node.active = false
                this.schedule(this.refreshLeftTime.bind(this), 0.01, times+2, 0)
                this._unlock_accelerate_effect.setCompleteListener(null);
            });
            
            this._unlock_accelerate_effect.addAnimation(kZeroNumber, "idle1_2",   true);
            this.scheduleOnce(()=>{this.btn_closed.node.active = true;}, 1.0);
            this.scheduleOnce(()=>{this.lbl_addtime.node.runAction(cc.fadeOut(0.33))}, 2)
        }
    }
}

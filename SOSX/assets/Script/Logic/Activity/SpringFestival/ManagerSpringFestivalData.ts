/**
 * @Descripttion: 春节签到活动管理类
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { initUndefinedVarOfObj, kOneNumber, kZeroNumber } from "../../Common/CommonInterface";
import Role from "../../Common/Role";
import { getServerUtcTime } from "../../Utils/GameUtils";

export class ManagerSpringFestivalData {
    private _signIn_info_list: proto.ISpringFestivalInfoData[] = [];
    private _start_time: number;
    private _over_time: number;
    private _cur_login_day: number;
    private _have_unreceived_reward: Map<number, boolean> = new Map<number, boolean>();
    
    private static _instance: ManagerSpringFestivalData   = null;
    public static getInstance(): ManagerSpringFestivalData {
        if (!ManagerSpringFestivalData._instance){
            ManagerSpringFestivalData._instance = new ManagerSpringFestivalData();
        }
        return ManagerSpringFestivalData._instance;
    }

    public saveInfo(infoList: proto.ISpringFestivalInfoData[], startTime: number, overTime: number, curLoginDay: number){
        this._signIn_info_list = infoList;

        initUndefinedVarOfObj(this._signIn_info_list, "bReceived", false);
        initUndefinedVarOfObj(this._signIn_info_list, "bDoubleReward", false);

        this._start_time       = startTime;
        this._over_time        = overTime;
        this._cur_login_day    = curLoginDay;
        for(let idx = kZeroNumber, len = this._signIn_info_list.length; idx < len; idx++){
            this.checkHaveReceiveReward(idx);
        }

        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_CheckSpringFestivalSignInIsOver);
    }

    public modifyInfoData(day: number){
        let idx = day - kOneNumber;
        let infoDataLen = this._signIn_info_list.length;
        if(idx < infoDataLen){
            this._signIn_info_list[idx].bReceived = true;
        }
    }

    /* 检测是否有可领取的奖励
     */
    public checkIsHaveCanReceiveReward(){
        for(let [key, value] of this._have_unreceived_reward.entries()){
            //当前累积签到登录天数大于等于key 且该key有可领取的奖励
            if(this._cur_login_day >= key && value){
                return true;
            }
        }

        return false;
    }
    
    /* 检测入口是否开启
     */
    public checkEntryIsOpen(){
        /*** 若活动到达时限或玩家已领取完所有奖励，则隐藏入口按钮 ***/

        //活动未开启
        let bOpenActivity = Role.Instance.IsGuideFinished() && 
            (this._over_time - getServerUtcTime()) > kZeroNumber && 
            (getServerUtcTime() - this._start_time) >= kZeroNumber;
        if(!bOpenActivity){
            return false;
        }
        
        //当前累积签到登录天数已满 且 没有可领取奖励时，关闭入口
        return this.checkAllRewardReceived();
    }

    /* 检测是不是所有奖励都领取了
     */
    private checkAllRewardReceived(){
        for(let idx = kZeroNumber, len = this._signIn_info_list.length; idx < len; idx++){
            //有未领取的，入口开启
            if(!this._signIn_info_list[idx].bReceived){
                return true;
            }
        }

        return false;
    }

    /* 检测范围内有没有没领取的
     */
    public checkRangeHaveNonReceive(start: number, end: number){
        for(let idx = start; idx <= end; idx++){
            if(this._cur_login_day >= (idx + kOneNumber) && 
                !this._signIn_info_list[idx].bReceived){
                return true;
            }
        }

        return false;
    }

    public setCurrLoginDay(day: number){
        this._cur_login_day = day;
    }

    public setCurrDayReceived(day: number, bCanReceive: boolean){
        this._have_unreceived_reward.set(day, bCanReceive);
    }
    public getSignInInfo(){
        return this._signIn_info_list;
    }

    public getStartTime(){
        return this._start_time;
    }
    
    public getOverTime(){
        return this._over_time;
    }

    public getCurrLoginDay(){
        return this._cur_login_day;
    }

    private checkHaveReceiveReward(idx: number){
        let bCanReceive = !this._signIn_info_list[idx].bReceived && (idx + kOneNumber) <= this._cur_login_day;
        this._have_unreceived_reward.set(idx + kOneNumber, bCanReceive);
    }
}

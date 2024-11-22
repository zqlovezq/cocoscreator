/*
 *  七日登录签到活动管理类
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import { initUndefinedVarOfObj, isValidObj, kNoneString, kOneNumber, kSevenNumber, kZeroNumber } from "../../Common/CommonInterface";
import Role from "../../Common/Role";
import { getServerUtcTime } from "../../Utils/GameUtils";

export class ManagerSevenSignInData {
    private _seven_signIn_info_list: proto.ISevenDaySignInData[] = [];
    private _start_time: number;
    private _over_time: number;
    private _cur_login_day: number;
    private _have_unreceived_reward: Map<number, boolean> = new Map<number, boolean>();
    
    private static _instance: ManagerSevenSignInData   = null;

    public static getInstance(): ManagerSevenSignInData {
        if (!ManagerSevenSignInData._instance){
            ManagerSevenSignInData._instance = new ManagerSevenSignInData();
        }
        return ManagerSevenSignInData._instance;
    }

    public saveSevenSignInInfo(infoList: proto.ISevenDaySignInData[], startTime: number, overTime: number, curLoginDay: number){
        this._seven_signIn_info_list = infoList;
        initUndefinedVarOfObj(this._seven_signIn_info_list, "bReceived", false);

        this._start_time             = startTime;
        this._over_time              = overTime;
        this._cur_login_day          = curLoginDay;
        for(let idx = kZeroNumber, len = this._seven_signIn_info_list.length; idx < len; idx++){
            //let bCanReceive = !this._seven_signIn_info_list[idx].bReceived && (idx + kOneNumber) <= curLoginDay;
            //this._have_unreceived_reward.set(idx + kOneNumber, bCanReceive);
            this.checkHaveReceiveReward(idx);
        }
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_CheckSevenSignInIsOver);
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
        let bOpenActivity = Role.Instance.IsGuideFinished() && (this._over_time - getServerUtcTime()) > kZeroNumber;
        if(!bOpenActivity){
            return false;
        }
        //当前累积签到登录天数大于等于7 且 没有可领取奖励时，关闭入口
        return this.checkAllRewardReceived();
    }

    /* 检测是不是所有奖励都领取了
     */
    private checkAllRewardReceived(){
        //登录还未到7天，入口开启
        if(this._cur_login_day < kSevenNumber){
            return true;
        }

        for(let idx = kZeroNumber, len = this._seven_signIn_info_list.length; idx < len; idx++){
            //有未领取的，入口开启
            if(!this._seven_signIn_info_list[idx].bReceived){
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
    public getSevenSignInInfo(){
        return this._seven_signIn_info_list;
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
        let bCanReceive = !this._seven_signIn_info_list[idx].bReceived && (idx + kOneNumber) <= this._cur_login_day;
        this._have_unreceived_reward.set(idx + kOneNumber, bCanReceive);
    }
}

/**
 * Description: 获取品质ICON路径
 */
export function getQualityIconPath(itemID: number, itemType: tab.RewardType, bBg: boolean, bWhite: boolean = false){
    if(tab.RewardType.RewardType_BoxType === itemType || 
        tab.RewardType.RewardType_BoxGroupType === itemType){
        let qualityTab = tab.Data.QualityTableByQuality.getValue(bWhite ? 
                            tab.ItemQuality.ItemQuality_White : 
                            tab.ItemQuality.ItemQuality_Blue);
        if(!isValidObj(qualityTab)){
            return kNoneString;
        }
        return bBg ? qualityTab.QualityBG : qualityTab.QualityFrame;
    }

    let itemData: tab.ItemTable = tab.Data.ItemTableByID.getValue(itemID);
    if (!isValidObj(itemData)){
        return kNoneString;
    }
    
    let qualityTab = tab.Data.QualityTableByQuality.getValue(itemData.Quality);
    if(!isValidObj(qualityTab)){
        return kNoneString;
    }
    
    return bBg ? qualityTab.QualityBG : qualityTab.QualityFrame;
}

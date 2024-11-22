/*
 * @Descripttion: 分享类型管理类
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kOneNumber } from "../Common/CommonInterface";
import LoginData from "../Login/LoginData";
import { getServerUtcTime } from "../Utils/GameUtils";

export interface IQuestionClickData{
    bSelect: boolean;
    questionType: tab.QuestionnaireType
}

export default class ManagerQuestion {
    private _collection_question_list: proto.IQuestionnaireSurveyData[] = []
    private _bRedDotTip: boolean = false;
    private _overUTCTimes: number;
    
    private static _instance: ManagerQuestion   = null;
    public static getInstance(): ManagerQuestion {
        if (!ManagerQuestion._instance){
            ManagerQuestion._instance = new ManagerQuestion();
        }
        return ManagerQuestion._instance;
    }

    public cleanCollectionList(){
        this._collection_question_list = [];
    }

    public pushQuestionMsg(data: proto.IQuestionnaireSurveyData){
        this._collection_question_list.push(data);
    }

    public sendQuestion(){
        //let jsonData = JSON.stringify(this._collection_question_list);
        let param     = new proto.Msg_SubmitQuestionReceiveRewardReq();
        param.answers = this._collection_question_list;
        Net.Send(proto.Ptl.SubmitQuestionReceiveRewardReq, param);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedQuestionEntry);
    }

    public loadQuestionRedDotTip(){
        let timeKey   = this._getTodayDate();
        let key       = `${LoginData.Instance.uid}_notice_pop_${timeKey}`;
        let localData = cc.sys.localStorage.getItem(key, true);
        this._bRedDotTip = !isValidObj(localData) ? true : (localData === "true");
    }

    public saveQuestionRedDotTip(){
        this._bRedDotTip = false;
        let timeKey = this._getTodayDate();
        let key     = `${LoginData.Instance.uid}_notice_pop_${timeKey}`;
        cc.sys.localStorage.setItem(key, "false");
    }

    public getRedDotTipVisible(){
        return this._bRedDotTip;
    }

    public saveOverUTCTimes(times: number){
        this._overUTCTimes = times;
    }

    public getOverUTCTimes(){
        return this._overUTCTimes;
    }
    
    /* 获取当日日期 */
    private _getTodayDate(){
        let curUTC  = getServerUtcTime();
        let date    = new Date(curUTC * 1000);
        let timeKey = `${date.getFullYear()}-${date.getMonth() + kOneNumber}-${date.getDate()}`;
        return timeKey;
    }
}

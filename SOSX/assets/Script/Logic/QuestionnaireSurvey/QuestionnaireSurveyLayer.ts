/*
 * @Descripttion: 
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { getQualityIconPath } from "../Activity/SevenSignIn/ManagerSevenSignInData";
import { isValidObj, k255, kNegativeOneNumber, kNoneString, kOneNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import RewardPfb from "../Common/RewardPfb";
import { getItemIconURL, getServerUtcTime, LoadResAsync, popRewardLayer_Vec_Recycle, setTimeTXT, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import ManagerQuestion, { IQuestionClickData } from "./ManagerQuestion";
import QuestionToggle from "./QuestionToggle";

const {ccclass, property} = cc._decorator;

@ccclass
export default class QuestionnaireSurveyLayer extends PopLayer {

    @property(cc.Node)
    node_start: cc.Node = null;

    @property(cc.Node)
    node_question: cc.Node = null;

    @property(cc.Node)
    node_reward_layout: cc.Node = null;

    @property(cc.Label)
    lbl_condition: cc.Label = null;

    @property(cc.Label)
    lbl_question_count: cc.Label = null;

    @property(cc.Label)
    lbl_question_prog_1: cc.Label = null;

    @property(cc.Label)
    lbl_question_prog_2: cc.Label = null;

    @property(cc.Label)
    lbl_cutdown_time: cc.Label = null;
    
    @property(cc.Button)
    btn_start: cc.Button = null;

    @property(cc.Node)
    node_question_layout: cc.Node = null;

    @property(cc.Label)
    lbl_question: cc.Label = null;

    @property(cc.Node)
    node_single_select: cc.Node = null;

    @property(cc.Node)
    node_multi_select: cc.Node = null;

    @property(cc.EditBox)
    edit_input: cc.EditBox = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;
    
    @property(cc.Button)
    btn_next: cc.Button = null;

    @property(cc.Button)
    btn_next_gray: cc.Button = null;

    @property(cc.Button)
    btn_commit: cc.Button = null;

    @property(cc.Prefab)
    pfb_answer_toggle: cc.Prefab = null;

    private _question_idx: number = kZeroNumber;
    private _question_arr: tab.QuestionnaireSurveyTable[] = [];
    private _click_question_count: number = kZeroNumber;
    private _suggest_question_id: number;
    private _suggest_question: string;
    private _node_reward_list: RewardPfb[] = [];
    private _answer_count: number = kZeroNumber;
    private _tips_opt: string;
    private _question_type: tab.QuestionnaireType;

    onLoad () {
        this._initEvent();
        this._initDefaultData();
        this._initNodeVisible();

        //监听记录点击答案事件消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_RecordQuestionClick, (param: any)=>{
            let clickRet = (param as IQuestionClickData);
            if(clickRet){
                let bEnableNextBtn = this.btn_next.interactable;
                this._click_question_count += (clickRet.bSelect ? kOneNumber : kNegativeOneNumber);
                if(tab.QuestionnaireType.QuestionnaireType_SingleSelect == clickRet.questionType){
                    this.btn_next.interactable = this._click_question_count > kZeroNumber;
                    this.btn_commit.interactable = this.btn_next.interactable;
                    this._tips_opt = "QuestionSingleUnSelect";

                }else if(tab.QuestionnaireType.QuestionnaireType_MultiSelect == clickRet.questionType){
                    this.btn_next.interactable = this._click_question_count >= kTwoNumber;
                    this.btn_commit.interactable = this.btn_next.interactable;
                    this._tips_opt = "QuestionMultiUnSelect";
                }

                this.btn_next_gray.node.active = !this.btn_next.interactable;
                
                if(bEnableNextBtn !== this.btn_next.interactable){
                    let changeCount    = this.btn_next.interactable ? kOneNumber : kNegativeOneNumber;
                    this._answer_count += changeCount;
                    this.refreshAnswerProg();
                }
                
            }
        }, this);

        //监听领取问卷调查奖励消息
        Net.listenProtocol(proto.Ptl.SubmitQuestionReceiveRewardRsp, buffer=>{
            let msg = proto.Msg_SubmitQuestionReceiveRewardRsp.decode(buffer);
            cc.log("SubmitQuestionReceiveRewardRsp (提交问卷调查并领取奖励) msg: " + JSON.stringify(msg))
            if(msg && proto.Msg_SubmitQuestionReceiveRewardRsp.ErrorCode.Succeed == msg.result) {
                popRewardLayer_Vec_Recycle(msg.rewardList);
                this.scheduleOnce(()=>{this.setVisible(false);}, kOneNumber);
                return;
            }

            proto.Msg_SubmitQuestionReceiveRewardRsp.ErrorCode.ActivityOver == msg.result    && ShowTips("QuestionnaireSurveyOver");
            proto.Msg_SubmitQuestionReceiveRewardRsp.ErrorCode.AlreadyReceived == msg.result && ShowTips("AlreadyReceivedQuestionReward");
        },this);
    }

    start () {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedQuestionRedDot);
    }

    onDestroy(){
        this._node_reward_list = [];
        this.checkClosedBoxTips();
        ManagerQuestion.getInstance().cleanCollectionList();
        this.unschedule(this.refreshCutDownTime);
    }

    /* 初始化节点可见性 */
    private _initNodeVisible(){
        this.node_single_select.active = false;
        this.node_multi_select.active  = false;
        this.edit_input.node.active    = false;
        this.node_start.active         = true;
        this.node_question.active      = false;
        this.btn_commit.node.active    = false;
        this.btn_next.interactable     = false;
        this.btn_next.node.active      = false;
        this.btn_start.node.active     = true;
        this.btn_next_gray.node.active = false;
    }

    /* 初始化事件 */
    private _initEvent(){
        this.node.on(cc.Node.EventType.TOUCH_START, ()=>{
            this.checkClosedBoxTips();
        },  this);
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_next.node.on("click",   this.onClickNextQuestion, this);
        this.btn_commit.node.on("click", this.onClickCommit,       this);
        this.btn_start.node.on("click",  this.onClickStart,        this);
        this.btn_next_gray.node.on("click", this.onClickGrayNext,  this);
    }

    /* 初始化默认数据 */
    private _initDefaultData(){
        this._tips_opt = "QuestionSingleUnSelect";
        if(tab.Data.QuestionnaireSurveyTable){
            for(let data of tab.Data.QuestionnaireSurveyTable){
                this._question_arr.push(data);
            }
        }

        let nodeRewards = this.node_reward_layout.getComponentsInChildren(RewardPfb);
        this._node_reward_list = nodeRewards;
        for(let rewardNode of this._node_reward_list){
            rewardNode.node.active = false;
        }

        ManagerQuestion.getInstance().saveQuestionRedDotTip();
    }

    /*  */
    public initData(){
        this.setOpenCondition();
        this.setRewardInfo();
        this.setTotalAnswerCount();
        this.setCutDownTime();
    }

    /* 设置奖励信息 */
    private setRewardInfo(){
        let len = this._node_reward_list.length;
        let idx = kZeroNumber;
        for(let data of tab.Data.QuestionnaireSurveyRewardTable){
            if(idx < len){
                this._node_reward_list[idx].node.active = true;
                this._node_reward_list[idx].setRewardInfo(data.RewardID, data.RewardType, data.RewardCount, true);
            }
            idx++;
        }
    }

    /* 设置开启条件 */
    private setOpenCondition(){
        let condition = tab.Data.OpenFunctionLimitTableByFunctionName.getValue(tab.OpenFunctionName.OpenFunctionName_QuestionnaireSurvey);
        if(isValidObj(condition)){
            this.lbl_condition.string = `${condition.OpenCondition}`;
        }
    }

    /* 设置总答题数量 */
    private setTotalAnswerCount(){
        this.lbl_question_count.string = `${this._question_arr.length}`;
    }

    /* 刷新倒计时 */
    private refreshCutDownTime(dt: number){
        let overTimes = ManagerQuestion.getInstance().getOverUTCTimes();
        let leftTime  = overTimes - getServerUtcTime();
        if(leftTime < kZeroNumber){
            this.lbl_cutdown_time.string = tab.Data.TipsTableByKey.getValue("ActivityOver").Value;
            this.unschedule(this.refreshCutDownTime);
            return;
        }

        setTimeTXT(this.lbl_cutdown_time, leftTime);
    }
    
    /* 设置倒计时 */
    private setCutDownTime(){
        this.refreshCutDownTime(kZeroNumber);
        this.schedule(this.refreshCutDownTime, kOneNumber);
    }

    /* 设置问题次数 */
    private setAnswerCount(){
        this.lbl_question_prog_1.string = `${this._answer_count}`;
        this.lbl_question_prog_2.string = `${this._question_arr.length}`;
    }

    /* 刷新答题进度 */
    private refreshAnswerProg(){
        this._answer_count = this._answer_count < this._question_idx ? this._question_idx : this._answer_count;
        this.setAnswerCount();
    }

    /* 设置问题 */
    private setQuestion(){
        if(this._question_idx >= this._question_arr.length){
            return;
        }
        
        this.btn_commit.node.active    = this._question_idx == this._question_arr.length - kOneNumber;
        this.btn_commit.interactable   = (tab.QuestionnaireType.QuestionnaireType_Filling == this._question_type) && this.btn_commit.node.active;
        this.btn_next.node.active      = !this.btn_commit.node.active;
        this.btn_next_gray.node.active = (this.btn_next.node.active && !this.btn_next.interactable) || 
                                            (this.btn_commit.node.active && !this.btn_commit.interactable);
        this._answer_count             = this._question_idx;
        this.refreshAnswerProg();
        this.groupAnswers(this._question_arr[this._question_idx]);
    }

    /* 组织问题答案 */
    private groupAnswers(data: tab.QuestionnaireSurveyTable){
        if(!data){
            return;
        }

        this.lbl_question.string = data.Question;
        this.checkUseWhichContainer(data);
    }

    /* Description: 检测使用哪种容器去创建问答 */
    private checkUseWhichContainer(data: tab.QuestionnaireSurveyTable){
        this._question_type = data.QuestionType;

        switch(data.QuestionType){
            case tab.QuestionnaireType.QuestionnaireType_SingleSelect:
                this.createAnswers(data, this.node_single_select);
                break;

            case tab.QuestionnaireType.QuestionnaireType_MultiSelect:
                this.createAnswers(data, this.node_multi_select);
                break;

            case tab.QuestionnaireType.QuestionnaireType_MustFilling:
            case tab.QuestionnaireType.QuestionnaireType_Filling:
                this._suggest_question_id = data.ID;
                this._suggest_question    = data.Question;
                this.openSuggestion();
                break;
        }

        this.setAnswerVisible(data.QuestionType);
        this.setTips();
    }

    /* 设置哪种问题容器的可见性 */
    private setAnswerVisible(questionType: tab.QuestionnaireType){
        this.node_single_select.active = tab.QuestionnaireType.QuestionnaireType_SingleSelect === questionType;
        this.node_multi_select.active  = tab.QuestionnaireType.QuestionnaireType_MultiSelect === questionType;
        this.edit_input.node.active    = tab.QuestionnaireType.QuestionnaireType_Filling === questionType || 
                                            tab.QuestionnaireType.QuestionnaireType_MustFilling == questionType;
    }

    /* 设置tips */
    private setTips(){
        switch(this._question_type){
            case tab.QuestionnaireType.QuestionnaireType_SingleSelect:
                this._tips_opt = "QuestionSingleUnSelect";
                break;

            case tab.QuestionnaireType.QuestionnaireType_MultiSelect:
                this._tips_opt = "QuestionMultiUnSelect";
                break;

            case tab.QuestionnaireType.QuestionnaireType_Filling:
            case tab.QuestionnaireType.QuestionnaireType_MustFilling:
                this._tips_opt = "QuestionFilling";
                break;
        }
    }

    /* 创建答案选项模块 */
    private createAnswers(data: tab.QuestionnaireSurveyTable, container: cc.Node){
        container.removeAllChildren();

        if(!data.Option){
            return;
        }

        let idx = kOneNumber;
        for(let answer of data.Option){
            let pfb = cc.instantiate(this.pfb_answer_toggle).getComponent(QuestionToggle);
            if(pfb){
                pfb.initData(data, answer, idx);
                container.addChild(pfb.node);
                idx++;
            }
        }
        container.getComponent(cc.Layout).updateLayout();
    }

    /* 打开填写建议模块 */
    private openSuggestion(){
        this.edit_input.string         = kNoneString;
        this.btn_commit.interactable   = this.btn_commit.node.active;
        this.btn_next.interactable     = (this._question_type == tab.QuestionnaireType.QuestionnaireType_Filling) && 
                                            this.btn_next.node.active;
        this.btn_next_gray.node.active = (this.btn_next.node.active && !this.btn_next.interactable) || 
                                            (this.btn_commit.node.active && !this.btn_commit.interactable);
        (this._question_type == tab.QuestionnaireType.QuestionnaireType_Filling) && this._answer_count++;
        this.refreshAnswerProg();
    }

    /* 收集问题答案 */
    private collectAnswers(){
        this.node_single_select.active && this.collectSingleAnswer();
        this.node_multi_select.active  && this.collectMultiAnswer();
        this.edit_input.node.active    &&  this.collectEditAnswer();
    }

    /* 收集单选问题答案 */
    private collectSingleAnswer(){
        let childList = this.node_single_select.getComponentsInChildren(QuestionToggle);
        if(childList && childList.length > kZeroNumber){
            for(let child of childList){
                if(child.getSelect()){
                    ManagerQuestion.getInstance().pushQuestionMsg(child.getAnswerInfo());
                    return;
                }
            }
        }
    }

    /* 收集多选问题答案 */
    private collectMultiAnswer(){
        let childList = this.node_multi_select.getComponentsInChildren(QuestionToggle);
        if(childList && childList.length > kZeroNumber){
            let finalQuestion: proto.IQuestionnaireSurveyData = {ID: kZeroNumber, answers: {}};
            for(let child of childList){
                if(child.getSelect()){
                    let childData = child.getAnswerInfo();
                    finalQuestion.ID = childData.ID;
                    for(let idx in childData.answers){
                        finalQuestion.answers[idx] = childData.answers[idx];
                    }
                }
            }
            ManagerQuestion.getInstance().pushQuestionMsg(finalQuestion);
        }
    }

    /* 收集自填问题答案 */
    private collectEditAnswer(){
        ManagerQuestion.getInstance().pushQuestionMsg({ID: this._suggest_question_id, 
            answers: {1: this.edit_input.string}});
    }
    
    /* 检测是否是合法输入 */
    private checkValidInput(){
        if(!isValidObj(this.edit_input.string)){
            return false;
        }

        this.edit_input.string = this.edit_input.string.replace(/\ +/g,"");   
        this.edit_input.string = this.edit_input.string.replace(/[\r\n]/g,"");        

        let simpleNameSet: Set<string> = new Set<string>();
        let fullNameSet: Set<string>   = new Set<string>();
        for(let data of tab.Data.ProvinceTable){
            simpleNameSet.add(data.Name);
            fullNameSet.add(data.FullName);
        }

        let bValid = simpleNameSet.has(this.edit_input.string);
        !bValid && (bValid = fullNameSet.has(this.edit_input.string));

        simpleNameSet.clear();
        simpleNameSet = null;

        fullNameSet.clear();
        fullNameSet = null;

        if(!bValid){
            ShowTips("InputValidProvinceName");
        }
        return bValid;
    }
    
    private checkClosedBoxTips(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
    }
    
    /* 点击开始填写 */
    private onClickStart(){
        this.node_start.active         = false;
        this.node_question.active      = true;
        this.btn_next.node.active      = true;
        this.btn_next_gray.node.active = true;
        this.btn_start.node.active     = false;
        this.setQuestion();
        this.checkClosedBoxTips();
    }

    /* 点击下一个 */
    private onClickNextQuestion(){
        this._question_idx++;
        this.btn_next.interactable     = false;
        this.btn_next_gray.node.active = true;
        this._click_question_count     = kZeroNumber;
        this.collectAnswers();
        this.setQuestion();
    }

    /* 点击提交 */
    private onClickCommit(){
        this.collectAnswers();
        ManagerQuestion.getInstance().sendQuestion();
    }

    /*  */
    private onClickGrayNext(){
        ShowTips(this._tips_opt);
    }

    /*  */
    public onEditReturn(){
        if(tab.QuestionnaireType.QuestionnaireType_MustFilling == this._question_type){
            let bValid = this.checkValidInput();
            let preAnswerCount             = this._answer_count;
            this._answer_count             = preAnswerCount + (bValid ? kOneNumber : kNegativeOneNumber);
            this.btn_commit.interactable   = bValid && this.btn_commit.node.active;
            this.btn_next.interactable     = bValid && this.btn_next.node.active;
            this.btn_next_gray.node.active = (this.btn_next.node.active && !this.btn_next.interactable) || 
                                                (this.btn_commit.node.active && !this.btn_commit.interactable);
            this.refreshAnswerProg();
        }
    }
}

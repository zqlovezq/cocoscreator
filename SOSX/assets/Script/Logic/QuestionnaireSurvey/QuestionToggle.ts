/*
 * @Descripttion: 问卷调查选项模块
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kOneNumber, kZeroNumber } from "../Common/CommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class QuestionToggle extends cc.Component {
    @property(cc.Label)
    lbl_answer: cc.Label = null;

    @property(cc.Button)
    btn_select: cc.Button = null;

    @property(cc.Sprite)
    spr_unselect: cc.Sprite = null;

    @property(cc.Sprite)
    spr_select: cc.Sprite = null;
    
    //@property({ displayName: "默认高度" })
    //default_height: number = kZeroNumber;

    private _question_idx: number;
    private _question_data: tab.QuestionnaireSurveyTable;
    private _bSelected: boolean = false;

    onLoad () {
        //this.node.on(cc.Node.EventType.TOUCH_END, this.onClickTouch, this);
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRefreshQuestionState, (param: any)=>{
            let idx = (param as number);
            if(idx !== this._question_idx){
                this._bSelected = false;
                this.setState();
            }
        }, this);
    }

    public initData(data: tab.QuestionnaireSurveyTable, answerStr: string, idx: number){
        this._question_data    = data;
        this._question_idx     = idx;
        this.lbl_answer.string = answerStr;
        //this.node.getComponent(cc.Layout).updateLayout();
        //this.adjustNodeHeight();
    }

    /*private adjustNodeHeight(){
        if(this.lbl_answer.node.height < this.default_height){
            this.lbl_answer.lineHeight = this.default_height;
            this.lbl_answer.horizontalAlign = kOneNumber;
            (< any > this.lbl_answer)._forceUpdateRenderData();
            this.btn_select.node.getComponent(cc.Layout).updateLayout();
            this.spr_btn_bg.node.getComponent(cc.Layout).updateLayout();
            this.node.getComponent(cc.Layout).updateLayout();
        }
    }*/

    /* 检测有无被选中 */
    private checkIsSelect(){
        this._bSelected = !this._bSelected;
        this.setState();
        //是单选题，需要广播通知取消之前的选择
        tab.QuestionnaireType.QuestionnaireType_SingleSelect === this._question_data.QuestionType && 
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRefreshQuestionState, this._question_idx);
    }

    /* 设置答案状态 */
    private setState(){
        tab.QuestionnaireType.QuestionnaireType_SingleSelect === this._question_data.QuestionType && 
            (this.btn_select.interactable = !this._bSelected);
        this.spr_unselect.node.active = !this._bSelected;
        this.spr_select.node.active   = this._bSelected;
    }

    /* 获取是否被选中 */
    public getSelect(){
        return this._bSelected;
    }
    
    /* 获取答案信息 */
    public getAnswerInfo(){
        let key        = this._question_idx;
        let value      = this.lbl_answer.string;
        let answerObj  = {};
        answerObj[key] = value;
        let retInfo: proto.IQuestionnaireSurveyData = {
            ID: this._question_data.ID,
            answers: answerObj
        };
        return retInfo;
    }

    /* 广播问题点击消息 */
    private broadcastQuestionClickMsg(){
        if(tab.QuestionnaireType.QuestionnaireType_Filling != this._question_data.QuestionType){
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_RecordQuestionClick, 
                {bSelect: this._bSelected, questionType: this._question_data.QuestionType});
        }
    }
    
    /*  */
    public onClickTouch(){
        if(tab.QuestionnaireType.QuestionnaireType_SingleSelect === this._question_data.QuestionType && this._bSelected){
            return;
        }

        this.checkIsSelect();
        this.broadcastQuestionClickMsg();
    }
}

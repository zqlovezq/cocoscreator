/*
 * @Descripttion: 管理联盟弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { LoadResAsync, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import SensitiveWordsManager from "../Utils/SensitiveWordsManager";
import {correctJoinTypeIdxValid, correctMinScoreIdxValid, setAllianceBadge } from "./AllianceCommonInterface";
import SelectAllianceIconPopLayer from "./SelectAllianceIconPopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ManagerAlliancePopLayer extends PopLayer {

    @property(cc.Node)
    node_input_area: cc.Node = null;

    @property(cc.EditBox)
    edit_alliance_name: cc.EditBox = null;

    @property(cc.EditBox)
    edit_alliance_intro: cc.EditBox = null;

    @property(cc.Node)
    node_func_area: cc.Node = null;

    @property(cc.Label)
    lbl_join_type: cc.Label = null;

    @property(cc.Label)
    lbl_join_min_score: cc.Label = null;

    @property(cc.Sprite)
    spr_alliance_icon: cc.Sprite = null;
    
    @property(cc.Button)
    btn_select_icon: cc.Button = null;

    @property(cc.Button)
    btn_type_left: cc.Button = null;

    @property(cc.Button)
    btn_type_right: cc.Button = null;

    @property(cc.Button)
    btn_min_score_left: cc.Button = null;

    @property(cc.Button)
    btn_min_score_right: cc.Button = null;

    @property(cc.Button)
    btn_confirm: cc.Button = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    private _select_alliance_icon_idx: number = kZeroNumber;
    private _join_type_index: number          = kZeroNumber;
    private _join_min_score_index: number     = kZeroNumber;
    private _alliance_uuid: string;

    onLoad () {
        this.btn_confirm.node.on("click", this.onClickConfirm,               this);
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);},      this);
        this.btn_type_left.node.on("click", this.onClickLeftJoinType,        this);
        this.btn_type_right.node.on("click", this.onClickRightJoinType,      this);
        this.btn_min_score_left.node.on("click", this.onClickLeftMinScore,   this);
        this.btn_min_score_right.node.on("click", this.onClickRightMinScore, this);
        this.btn_select_icon.node.on("click", this.onClickLookAllianceIcon,  this);

        //监听联盟修改信息
        Net.listenProtocol(proto.Ptl.ModifyAllianceInfoRsp, (buffer, ptl)=>{
            let msg = proto.Msg_ModifyAllianceInfoRsp.decode(buffer);
            cc.log("ModifyAllianceInfoRsp(监听联盟修改信息) : msg " + JSON.stringify(msg))
            if(msg){
                if(proto.Msg_ModifyAllianceInfoRsp.ErrorCode.Succeed === msg.result){
                    this.setData(   msg.baseInfo.allianceID,
                                    msg.baseInfo.icon, 
                                    msg.baseInfo.joinType, 
                                    msg.baseInfo.joinMinScore, 
                                    msg.baseInfo.name, 
                                    msg.baseInfo.instruction);
                    ShowTips("ModifyAllianceSuccess");
                    Role.Instance.RoleData.allianceData.allianceName = msg.baseInfo.name;
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateAllianceBaseInfo, msg.baseInfo);
                    this.setVisible(false);
                    return;
                }

                proto.Msg_ModifyAllianceInfoRsp.ErrorCode.NoAuth === msg.result             &&  ShowTips("NoModifyAlliancePermission");
                proto.Msg_ModifyAllianceInfoRsp.ErrorCode.SensitiveWordError === msg.result && ShowTips("HaveSensitiveWord");
                proto.Msg_ModifyAllianceInfoRsp.ErrorCode.ModifyLimit === msg.result        && ShowTips("ForbidModifyAllianceInfo");

            }
        }, this);

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateSelectAllianceIconIdx, (param: any)=>{
            this._select_alliance_icon_idx = (param as number);
            this.setAllianceIcon();
        }, this);
    }

    public setData( uuid:            string,
                    allianceIconIdx: number, 
                    joinTypeIdx:     number, 
                    joinMinScore:    number, 
                    allianceName:    string, 
                    allianceIntro:   string){
        this._alliance_uuid             = uuid;
        this._select_alliance_icon_idx  = allianceIconIdx;
        this._join_type_index           = joinTypeIdx;
        this._join_min_score_index      = tab.Data.AllianceJoinMinScoreTable.findIndex(tmpObj=>tmpObj.MinSeasonScore == joinMinScore);
        this.edit_alliance_name.string  = allianceName;
        this.edit_alliance_intro.string = allianceIntro;
        this.showElements();
    }
    
    /* 显示页面元素
     */
    private showElements(){
        this.setAllianceIcon();
        this.switchJoinTypeLabel();
        this.switchJoinMinScoreLabel();
    }

    /* 设置联盟图标
     */
    private setAllianceIcon(){
        setAllianceBadge(this.spr_alliance_icon, this._select_alliance_icon_idx);
    }

    /** 
     * Description: 切换加入联盟类型文本
     */
    private switchJoinTypeLabel(){
        let joinTypeTab = tab.Data.AllianceJoinConditonTableByID.getValue(this._join_type_index);
        if(isValidObj(joinTypeTab)){
            this.lbl_join_type.string = joinTypeTab.JoinConditionDes;
        }
    }

    /* 切换加入联盟最小赛季积分
     */
    private switchJoinMinScoreLabel(){
        let score = tab.Data.AllianceJoinMinScoreTable[this._join_min_score_index].MinSeasonScore;
        this.lbl_join_min_score.string = `${score}`;
    }
    
    private onClickLeftJoinType(){
        this._join_type_index--;
        this._join_type_index = correctJoinTypeIdxValid(this._join_type_index);
        this.switchJoinTypeLabel();
    }

    private onClickRightJoinType(){
        this._join_type_index++;
        this._join_type_index = correctJoinTypeIdxValid(this._join_type_index);
        this.switchJoinTypeLabel();
    }

    private onClickLeftMinScore(){
        this._join_min_score_index--;
        this._join_min_score_index = correctMinScoreIdxValid(this._join_min_score_index);
        this.switchJoinMinScoreLabel();
    }

    private onClickRightMinScore(){
        this._join_min_score_index++;
        this._join_min_score_index = correctMinScoreIdxValid(this._join_min_score_index);
        this.switchJoinMinScoreLabel();
    }

    private onClickLookAllianceIcon(){
        showPopLayerV2("prefab/SelectAllianceIconPopLayer", SelectAllianceIconPopLayer).then(layer =>{
            layer.initData();
        });
    }

    private onClickConfirm(){
        if(!SensitiveWordsManager.Instance.check(this.edit_alliance_name.string) ||
            !SensitiveWordsManager.Instance.check(this.edit_alliance_intro.string)) {
            //有敏感词
            ShowTips("HaveSensitiveWord")
            return
        }
        let msg          = new proto.Msg_ModifyAllianceInfoReq();
        msg.Instruction  = this.edit_alliance_intro.string;
        msg.JoinType     = this._join_type_index;
        msg.JoinMinScore = tab.Data.AllianceJoinMinScoreTable[this._join_min_score_index].MinSeasonScore;
        msg.Icon         = this._select_alliance_icon_idx;
        msg.Name         = this.edit_alliance_name.string;
        Net.Send(proto.Ptl.ModifyAllianceInfoReq, msg);
    }
}

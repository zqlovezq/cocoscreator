/*
 * @Descripttion: 创建联盟预制件
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kZeroNumber } from "../Common/CommonInterface";
import { LoadResAsync, setGray, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import { checkCanCreateAlliance, checkStringIsAllSpace, correctJoinTypeIdxValid, correctMinScoreIdxValid, getJoinAllianceMinScore, setAllianceBadge } from "./AllianceCommonInterface";
import CreateAllianceConfirmPopLayer from "./CreateAllianceConfirmPopLayer";
import SelectAllianceIconPopLayer from "./SelectAllianceIconPopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CreateAlliancePfb extends cc.Component {

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
    btn_create: cc.Button = null;

    @property(cc.Sprite)
    spr_create_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_gold_coin: cc.Sprite = null;

    private _select_alliance_icon_idx: number = kZeroNumber;
    private _join_type_index: number          = kZeroNumber;
    private _join_min_score_index: number     = kZeroNumber;

    onLoad () {
        this.btn_create.node.on("click", this.onClickCreate,                 this);
        this.btn_type_left.node.on("click", this.onClickLeftJoinType,        this);
        this.btn_type_right.node.on("click", this.onClickRightJoinType,      this);
        this.btn_min_score_left.node.on("click", this.onClickLeftMinScore,   this);
        this.btn_min_score_right.node.on("click", this.onClickRightMinScore, this);
        this.btn_select_icon.node.on("click", this.onClickLookAllianceIcon,  this);

        //监听选择图标事件
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateSelectAllianceIconIdx, (param: any)=>{
            this._select_alliance_icon_idx = (param as number);
            this.setAllianceIcon();
        }, this);
    }

    public showPage(){
        this.setAllianceIcon();
        this.setCreateBtnEnable();
        this.switchJoinTypeLabel();
        this.switchJoinMinScoreLabel();
    }

    /* 设置联盟图标
     */
    private setAllianceIcon(){
        setAllianceBadge(this.spr_alliance_icon, this._select_alliance_icon_idx);
    }
    
    /* 设置创建按钮可否满足
     */
    private setCreateBtnEnable(){
        let bEnough = checkCanCreateAlliance();
        setGray(this.spr_create_bg, !bEnough);
        setGray(this.spr_gold_coin, !bEnough);
    }

    /* 切换加入联盟类型文本
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
        let score = getJoinAllianceMinScore(this._join_min_score_index);
        this.lbl_join_min_score.string = `${score}`;
    }
    
    /* 加入联盟类型事件
     */
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

    /* 加入联盟最小赛季积分事件
     */
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

    /* 打开联盟图标选择界面
     */
    private onClickLookAllianceIcon(){
        showPopLayerV2("prefab/SelectAllianceIconPopLayer", SelectAllianceIconPopLayer).then(layer =>{
            layer.initData();
        });
    }

    /* 创建联盟
     */
    private onClickCreate(){
        let bCanCreate = checkCanCreateAlliance();
        if(!bCanCreate){
            ShowTips("OnlyGoldNotEnough");
            return;
        }

        if(checkStringIsAllSpace(this.edit_alliance_name.string)){
            ShowTips("AllianceNameIsInValid");
            return;
        }

        if(checkStringIsAllSpace(this.edit_alliance_intro.string)){
            ShowTips("AllianceIntroIsInValid");
            return;
        }

        showPopLayerV2("prefab/CreateAllianceConfirmPopLayer", CreateAllianceConfirmPopLayer).then(layer =>{
            layer.setData(  this._select_alliance_icon_idx, 
                            this.edit_alliance_name.string, 
                            this.edit_alliance_intro.string, 
                            this._join_type_index, 
                            this._join_min_score_index);
        });
    }
}

/*
 * @Descripttion: 宝箱概率图示弹框
 */

import { tab } from "../../Table/table_gen";
import {IBoxRateGroup, kOneNumber, kThreeNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import RankScoreRewardClass from "../Common/SeasonRankCommonFunc";
import PopLayer from "../Utils/PopLayer";
import BoxRateBoxGroup from "./BoxRateBoxGroup";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BoxRatePopLayer extends PopLayer {

    @property(cc.Button)
    btn_pre: cc.Button = null;

    @property(cc.Button)
    btn_next: cc.Button = null;

    @property(cc.Label)
    lbl_season_lv: cc.Label = null;

    @property(cc.Label)
    lbl_high_season_tip: cc.Label = null;

    @property(cc.Label)
    lbl_normal_season_tip: cc.Label = null;

    @property(cc.Node)
    node_content: cc.Node = null;
    
    @property(cc.Prefab)
    pfb_box_group: cc.Prefab = null;
 
    private _current_select_season_level: number = kOneNumber;
    private _high_season_level: number           = kOneNumber;
    private _season_box_id_list: Map<number, number[]>              = new Map<number, number[]>();
    private _box_group_map: tab.Dictionary<number, BoxRateBoxGroup> = new tab.Dictionary<number, BoxRateBoxGroup>();

    onLoad () {
        this.btn_pre.node.on("click", this.onClickPreSelect, this);
        this.btn_next.node.on("click", this.onClickNextSelect, this);
        this.initSeasonBoxIDList();
    }

    onDestroy(){
        this._season_box_id_list.clear();
        this.clearBoxGroupMap();
    }

    public initData(){
        this.changeBoxGroup();
    }

    /* 清空宝箱组map
     */
    private clearBoxGroupMap(){
        for(let elem of this._box_group_map.values()) {
            if(elem && elem.node){
                elem.node.removeFromParent();
                elem.node.destroy();
            }
        }
        this._box_group_map.clear();
    }

    /* 初始化赛季宝箱列表
     */
    private initSeasonBoxIDList(){
        let bRecordHighSeasonLevel = false;
        for(let data of tab.Data.RankGradeTable){
            this._season_box_id_list.set(data.Grade, data.BoxIDList);
            if( !bRecordHighSeasonLevel && 
                data.Type === tab.RankFightType.RankFightType_Hight){
                this._high_season_level = data.Grade;
                bRecordHighSeasonLevel  = true;
            }
        }

        this._current_select_season_level = RankScoreRewardClass.getInstance().getRankLevelToScore(Role.Instance.RoleData.rankData.score);
        this._current_select_season_level > this._high_season_level && (this._current_select_season_level = this._high_season_level);
    }

    /* 改变宝箱组
     */
    private changeBoxGroup(){
        this.setSeasonLevel();
        this.setArrowBtnVisible();
        this.groupBox();
    }

    /* 设置赛季等级
     */
    private setSeasonLevel(){
        this._current_select_season_level < this._high_season_level && 
            (this.lbl_season_lv.string  = `${this._current_select_season_level}`);
    }

    /* 设置箭头按钮的可见性
     */
    private setArrowBtnVisible(){
        this.btn_pre.node.active               = this._current_select_season_level > kOneNumber;
        this.btn_next.node.active              = this._current_select_season_level < this._high_season_level;
        this.lbl_high_season_tip.node.active   = this._current_select_season_level == this._high_season_level;
        this.lbl_normal_season_tip.node.active = this._current_select_season_level < this._high_season_level;
        this.lbl_season_lv.node.active         = this._current_select_season_level < this._high_season_level;
    }

    /* 组织宝箱组
     */
    private groupBox(){
        this.node_content.removeAllChildren();
        if(this._season_box_id_list.has(this._current_select_season_level)){
            let boxIDArr     = this._season_box_id_list.get(this._current_select_season_level);
            let boxIDArrLen  = boxIDArr && boxIDArr.length;
            let tempBoxIDArr = [];
            let flagIdx      = kZeroNumber;
            
            for(let idx = kZeroNumber; idx < boxIDArrLen; idx++){
                tempBoxIDArr.push(boxIDArr[idx]);
                if(kThreeNumber == tempBoxIDArr.length){
                    let boxGroup = this._box_group_map.getValue(flagIdx);
                    if(!boxGroup || !boxGroup.isValid){
                        boxGroup = cc.instantiate(this.pfb_box_group).getComponent(BoxRateBoxGroup);
                    }
                    
                    this.node_content.addChild(boxGroup.node);
                    boxGroup.initData(tempBoxIDArr, this._current_select_season_level);
                    this._box_group_map.setValue(flagIdx, boxGroup);
                    flagIdx++;
                    
                    tempBoxIDArr = [];
                }
            }
        }
    }

    /*  */
    private onClickPreSelect(){
        if(this._current_select_season_level == kOneNumber){
            return;
        }
        this._current_select_season_level--;
        this.changeBoxGroup();
    }

    /*  */
    private onClickNextSelect(){
        if(this._current_select_season_level == this._high_season_level){
            return;
        }
        this._current_select_season_level++;
        this.changeBoxGroup();
    }
}

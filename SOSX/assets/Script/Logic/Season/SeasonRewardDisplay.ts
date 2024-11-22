/*
 * @Descripttion: 赛季奖励信息条二级界面
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import BoxShowNode from "../Common/BoxShowNode";
import boxtips from "../Common/boxtips";
import { isValidObj, kZeroNumber } from "../Common/CommonInterface";
import { checkIconPathIsValid } from "../Common/SeasonRankCommonFunc";
import { CreateSpine, LoadResAsync } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SeasonRewardDisplay extends PopLayer {

    @property({displayName:"段位等级", type:cc.Label})
    lbl_rank_lv:cc.Label      = null;

    @property({displayName:"剩余时间", type:cc.Label})
    lbl_left_times:cc.Label   = null;

    @property({displayName:"宝箱1", type:cc.Node})
    node_box_1:cc.Node        = null;

    @property({displayName:"宝箱2", type:cc.Node})
    node_box_2:cc.Node        = null;

    @property({displayName:"宝箱3", type:cc.Node})
    node_box_3:cc.Node        = null;

    @property({displayName:"宝箱4", type:cc.Node})
    node_box_4:cc.Node        = null;

    @property({displayName:"宝箱5", type:cc.Node})
    node_box_5:cc.Node        = null;

    @property({displayName:"宝箱6", type:cc.Node})
    node_box_6:cc.Node        = null;

    @property(cc.Sprite)
    spr_bg: cc.Sprite         = null;

    @property(cc.Label)
    lbl_rank_name: cc.Label   = null;

    @property(cc.Node)
    node_rank_spine: cc.Node  = null;

    @property(cc.Sprite)
    spr_rank_lv_bg: cc.Sprite = null;

    private _rank_level: number = kZeroNumber;

    onLoad () {
        this.spr_bg.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true);
        this.setCloseCallBack(()=>{
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        });
    }

    /* 设置赛季段位等级     
     * @param rankLv  赛季段位等级
     */
    public setRankLevel(rankLv: number){
        this._rank_level = rankLv;
        this.setDisplay();
    }

    /*  显示界面内容 */
    private setDisplay(){
        this.switchDisplayRankBadgeOrSpine();
        this.setRankName();
        this.refreshLeftTime();
        //this.schedule(this.refreshLeftTime, kOneNumber);
        this.groupAllBoxRewardIcon();
    }

    /* 切换显示徽章还是spine */
    private switchDisplayRankBadgeOrSpine(){
        let rankGradTab = tab.Data.RankGradeTableByGrade.getValue(this._rank_level);
        if (!isValidObj(rankGradTab)){
            if(!cc.sys.isNative){throw new Error("RankGradeTable Error!");}
            return;
        }

        this.node_rank_spine.active = tab.RankFightType.RankFightType_Hight == rankGradTab.Type;
        this.spr_rank_lv_bg.node.active = !this.node_rank_spine.active;
        
        if(tab.RankFightType.RankFightType_Hight == rankGradTab.Type){
            this.setRankSpine(rankGradTab.SpineId);
            return;
        }

        this.lbl_rank_lv.string = `${this._rank_level}`;
        this.setSeasonRankIcon(rankGradTab.Icon);
    }
    
    /* 设置竞技场名称 */
    private setRankName(){
        let rankGradTab = tab.Data.RankGradeTableByGrade.getValue(this._rank_level);
        if (!isValidObj(rankGradTab)){
            if(!cc.sys.isNative){throw new Error("RankGradeTable Error!");}
            return;
        }

        this.lbl_rank_name.string = rankGradTab.Title;
    }
    
    /* 显示赛季等级 */
    private async setSeasonRankIcon(rankIcon: string){
        if(!checkIconPathIsValid(rankIcon)){return;}

        let sf = await LoadResAsync(rankIcon, cc.SpriteFrame)
        if(sf) {
            this.spr_rank_lv_bg.spriteFrame = sf;
        }
    }

    /* 设置排位赛徽章spine */
    private setRankSpine(spineId: number){
        this.node_rank_spine.removeAllChildren(true);
        let self = this;
        CreateSpine(spineId).then(skel=>{
            self.node_rank_spine.addChild(skel.node);
            skel.setAnimation(kZeroNumber, "idle", false);
        });
    }
    
    /* 刷新剩余时间 */
    private refreshLeftTime(){
        let rankTabData = tab.Data.RankGradeTableByGrade.getValue(this._rank_level);
        if (!isValidObj(rankTabData)){
            if(!cc.sys.isNative){throw new Error("Season Rank Level is Error!");}
            return;
        }
        if (rankTabData.BuffItem >= 3600){
            let hour = rankTabData.BuffItem / 3600;
            this.lbl_left_times.string = `${Math.floor(hour)}${tab.Data.GetKeyValue_ConfigTable().HourTip}`;
            return;                
        }

        this.lbl_left_times.string = rankTabData.BoxBufferTimesDes;
    }

    /* 组织所有奖励宝箱的显示内容 */
    private groupAllBoxRewardIcon(){
        let rankTabData = tab.Data.RankGradeTableByGrade.getValue(this._rank_level);
        if (!isValidObj(rankTabData)){
            if(!cc.sys.isNative){throw new Error("Season Rank Level is Error!");}
            return;
        }

        this.node_box_1.getComponent(BoxShowNode).initData(rankTabData.ItemId1);
        this.node_box_2.getComponent(BoxShowNode).initData(rankTabData.ItemId2);
        this.node_box_3.getComponent(BoxShowNode).initData(rankTabData.ItemId3);
        this.node_box_4.getComponent(BoxShowNode).initData(rankTabData.ItemId4);
        this.node_box_5.getComponent(BoxShowNode).initData(rankTabData.ItemId5);
        this.node_box_6.getComponent(BoxShowNode).initData(rankTabData.ItemId6);
    }
    
    /*  */
    protected onClickClose(){
        this.setVisible(false);
    }
    
    /*  */
    private onTouchBegan(event: cc.Event.EventTouch){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
    }

}

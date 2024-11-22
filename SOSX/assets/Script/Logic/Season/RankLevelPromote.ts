/*
 * @Descripttion: 赛季段位改变动画
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kZeroNumber } from "../Common/CommonInterface";
import { checkIconPathIsValid } from "../Common/SeasonRankCommonFunc";
import { CreateSpine, LoadResAsync } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankLevelPromote extends PopLayer {

    @property(cc.Label)
    lbl_tip: cc.Label           = null;

    @property(cc.Label)
    lbl_rank_lv: cc.Label       = null;
    
    @property(cc.Label)
    lbl_title: cc.Label         = null;
    
    @property(cc.Sprite)
    spr_bg: cc.Sprite           = null;

    @property(cc.Sprite)
    spr_rank_lv_bg: cc.Sprite   = null;

    @property(cc.Node)
    node_spine: cc.Node         = null;

    @property(cc.Button)
    btn_closed: cc.Button       = null;

    @property(cc.Node)
    node_rank_bg_spine: cc.Node = null;

    //private _bTouch: boolean = false;
    private _rank_level_effect: sp.Skeleton = null;
    private _start_anim_name: string; //动画初始名
    private _end_anim_name: string;  //动画结束名
    
    onLoad () {
        //注册触摸事件 onTouchBegan                                                                                                       
        //this.spr_bg.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this).bind(this);
        //this.spr_bg.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this).bind(this);
        this.btn_closed.node.on("click", ()=>{
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_CheckUnlockAccelerateBag, null);
            this.setVisible(false);
        }, this);
        this._rank_level_effect = this.node_spine.getComponent(sp.Skeleton);
    }

    start () {
        if(isValidObj(this._rank_level_effect)){
            this._rank_level_effect.setAnimation(kZeroNumber, this._start_anim_name, false);
            this._rank_level_effect.addAnimation(kZeroNumber, this._end_anim_name,   true);
            this._rank_level_effect.setCompleteListener(()=>{
                this._rank_level_effect.setCompleteListener(null);
                //this._bTouch = true;
                this.btn_closed.node.active = true;
            });
        }
    }

    /* 播放赛季段位改变的动画 */
    public playRankLevelChangeAnim(bPromote: boolean, rankLv: number){
        //this._bTouch             = false;
        this.btn_closed.node.active = false;
        this.lbl_rank_lv.string     = `${rankLv}`;
        this.lbl_tip.node.active    = bPromote;
        this._start_anim_name       = bPromote ? "idle1"   : "idle2";
        this._end_anim_name         = bPromote ? "idle1_2" : "idle2_2";
        this.lbl_title.string       = bPromote ? 
                                      tab.Data.GetKeyValue_ConfigTable().RankLevelPromoteTip : 
                                      tab.Data.GetKeyValue_ConfigTable().RankLevelDecreaseTip;
        this.setRankLevelBg(rankLv);
    }
    
    /* 设置赛季段位背景图标
     * @param rankLv  赛季段位等级
     */
    private async setRankLevelBg(rankLv: number){
        let rankGradeTab = tab.Data.RankGradeTableByGrade.getValue(rankLv);
        if(isValidObj(rankGradeTab)){
            //this.spr_rank_lv_bg.node.active = tab.RankFightType.RankFightType_Low   == rankGradeTab.Type;
            //this.node_rank_bg_spine.active  = tab.RankFightType.RankFightType_Hight == rankGradeTab.Type;
            //this.lbl_rank_lv.node.active    = tab.RankFightType.RankFightType_Low   == rankGradeTab.Type;

            /*if(tab.RankFightType.RankFightType_Hight == rankGradeTab.Type){ //排位赛
                let self = this;
                this.node_rank_bg_spine.removeAllChildren(true);
                CreateSpine(rankGradeTab.SpineId).then(skel=>{
                    self.node_rank_bg_spine.addChild(skel.node);
                    skel.setAnimation(kZeroNumber, "idle", true);
                });
                
            }else if(tab.RankFightType.RankFightType_Low == rankGradeTab.Type)*/{ //竞技场
                if(!checkIconPathIsValid(rankGradeTab.Icon)){return;}
                
                let sf = await LoadResAsync(rankGradeTab.Icon, cc.SpriteFrame);
                if(sf) {
                    if(this.spr_rank_lv_bg){
                        this.spr_rank_lv_bg.spriteFrame = sf;
                    }
                }
            }
        }
    }
    
    /*
    private onTouchBegan(event: cc.Event.EventTouch){
        
    }

    private onTouchEnded(event: cc.Event.EventTouch){
        if(!this._bTouch){
            return;
        }

        this.setVisible(false);
    }
    */
}

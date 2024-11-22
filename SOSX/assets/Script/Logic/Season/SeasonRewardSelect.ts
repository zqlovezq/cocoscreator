/*
 * @Descripttion: 赛季奖励道具二选一界面
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { CardNodeState, getCardVisibleLevel, isValidObj, kOneNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import CommonItem from "../Common/CommonItem";
import GetNewCard from "../Common/GetNewCard";
import ProgressBarOfCard from "../Common/ProgressBarOfCard";
import Role from "../Common/Role";
import CardDetail from "../Main/CardDetail";
import { showPopLayerV2 } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;
const kMaxOpacity = 255;
@ccclass
export default class SeasonRewardSelect extends PopLayer {

    @property({displayName:"道具1", type:cc.Node})
    node_item_left:cc.Node         = null;

    @property({displayName:"道具2", type:cc.Node})
    node_item_right:cc.Node        = null;

    @property(cc.Button)
    btn_close: cc.Button           = null;

    @property(cc.Node)
    node_left_progressbar: cc.Node = null;

    @property(cc.Node)
    node_right_progressbar: cc.Node= null;

    @property(cc.Sprite)
    spr_bg: cc.Sprite              = null;

    @property(cc.Node)
    node_select: cc.Node           = null;

    @property(cc.Node)
    node_get_effect: cc.Node       = null;

    @property(cc.Node)
    node_get_item: cc.Node         = null;

    @property(cc.Node)
    node_get_progressbar: cc.Node  = null;

    @property(cc.Label)
    lbl_card_name: cc.Label        = null;

    @property(cc.Label)
    lbl_quality: cc.Label          = null;

    @property(cc.Label)
    lbl_card_level: cc.Label       = null;

    @property(cc.Label)
    lbl_can_uplv_tip: cc.Label     = null;

    @property(cc.Button)
    btn_look_left_card: cc.Button  = null;

    @property(cc.Button)
    btn_look_right_card: cc.Button = null;

    @property(cc.Node)
    node_left: cc.Node             = null;

    @property(cc.Node)
    node_right: cc.Node            = null;

    @property(cc.Node)
    node_card_info: cc.Node        = null;

    @property(cc.Label)
    lbl_title: cc.Label            = null;

    public _request_reward_idx: number = kZeroNumber;
    private _bSelectLeft: boolean       = false;
    private _select_card_id: number     = kZeroNumber;
    private _select_card_count: number  = kZeroNumber;
    private _left_card_id: number       = kZeroNumber;
    private _right_card_id: number      = kZeroNumber;
    private _score: number              = kZeroNumber;
    private _reward_count: number       = kZeroNumber;
    private _item_data_list_1: number[] = [];
    private _item_data_list_2: number[] = [];
    private _callback_after_animation:Function = null
    private _onClickClose:Function = null

    onLoad () {
        this.node_get_effect.active = false;
        this.node_card_info.opacity = kZeroNumber;
        this.btn_close.node.active  = false;
        this.btn_close.node.on("click", this.clickClose, this);
        this.btn_look_left_card.node.on("click", ()=>{
            this.onClickOpenCardDetail(this._left_card_id);
        }, this);

        this.btn_look_right_card.node.on("click", ()=>{
            this.onClickOpenCardDetail(this._right_card_id);
        }, this);
        
        this.spr_bg.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.spr_bg.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded,   this);

        /* 监听"领取赛季积分奖励"协议 */
        Net.listenProtocol(proto.Ptl.GetRankScoreRewardRsp, async  (buffer, ptl) =>{
            let msg = proto.Msg_GetRankScoreRewardRsp.decode(buffer)
            cc.log("GetRankScoreRewardRsp (领取赛季积分奖励) msg: "+JSON.stringify(msg))
            if (null != msg){
                if (msg.result == kZeroNumber){
                    this._reward_count = msg.rewards[kZeroNumber].rewardCount;
                    //this.setFinalGetCardData();
                    this.scheduleOnce(()=>{
                        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_PlayCardIncreaseAnim, this._reward_count);
                    }, 0.3);
                }
            }
        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_Reconnect, (param)=>{
           this.hide()

        }, this);
    }

    /*  */
    setClickClose(callback:Function = null){
        this._onClickClose = callback
    }

    /*  */
    clickClose(){
        if(this._onClickClose){
            this._onClickClose()
        }
        this.onClickClosed()
    }

    start () {
        this.node_left.active = false
        this.node_right.active = false    
    }

    onDestroy(){
        this._item_data_list_1 = [];
        this._item_data_list_2 = [];
    }

    public setCloseVisible(bshow:boolean){
        this.btn_close.node.active = bshow
    }

    public setCloseOpacity(bshow:boolean){
        this.btn_close.node.opacity = bshow ? 255 : 0
    }

    public setCloseCallAfter(callback:Function){
        this._callback_after_animation = callback
    }
    
    public initData(score: number, itemArr1:[number, number], itemArr2:[number, number]){
        this._left_card_id     = itemArr1[kZeroNumber];
        this._right_card_id    = itemArr2[kZeroNumber];
        this._item_data_list_1 = itemArr1;
        this._item_data_list_2 = itemArr2;
        this._score            = score;
        
        this.playEnterPageAnim();
    }

    /* 播放进入界面的初始动画 */
    private playEnterPageAnim(){
        let animNode = this.getComponent(cc.Animation);
        if(animNode){
            this.node_left.active = true
            this.node_right.active = true
            animNode.play("SeaSonRewardSelectAppear");
        }
    }
    
    /* 设置卡牌数据【用于动画关键帧事件】 */
    public setCardData(){
        //设置左边卡牌数据
        this.node_left.active = true
        this.node_right.active = true
        this.node_item_left.getComponent(CommonItem).showQualityEffect();
        this.node_item_left.getComponent(CommonItem).initWithStaticId(this._item_data_list_1[kZeroNumber], 
                                                                      tab.ItemType.ItemType_Tower,
                                                                      this._item_data_list_1[kOneNumber]);
        this.checkIsNewCard(this._item_data_list_1[kZeroNumber]) && this.node_item_left.getComponent(CommonItem).setNewCardFlagDisplay();
        
        this.node_item_left.getComponent(CommonItem).setClickCallback(()=>{
            this._select_card_id    = this._item_data_list_1[kZeroNumber];
            this._select_card_count = this._item_data_list_1[kOneNumber];
            this._bSelectLeft       = true;
    
            this.selectDisplay(this.node_item_left.getComponent(CommonItem), kZeroNumber);
        });
        

        //设置右边卡牌数据
        this.node_item_right.getComponent(CommonItem).showQualityEffect();
        this.node_item_right.getComponent(CommonItem).initWithStaticId( this._item_data_list_2[kZeroNumber], 
                                                                        tab.ItemType.ItemType_Tower,
                                                                        this._item_data_list_2[kOneNumber]);
        this.checkIsNewCard(this._item_data_list_2[kZeroNumber]) && this.node_item_right.getComponent(CommonItem).setNewCardFlagDisplay();
        
        this.node_item_right.getComponent(CommonItem).setClickCallback(()=>{
            this._select_card_id    = this._item_data_list_2[kZeroNumber];
            this._select_card_count = this._item_data_list_2[kOneNumber];
            this._bSelectLeft       = false;

            this.selectDisplay(this.node_item_right.getComponent(CommonItem), kOneNumber);
        });

        this.setProgress(this._item_data_list_1[kZeroNumber], this._item_data_list_2[kZeroNumber]);
    }
    
    /* 界面初始动画结束事件【用于动画关键帧事件】 */
    public enterPageAnimOver(){
        this.playScaleAnimation();
        this.node_left_progressbar.opacity    = kMaxOpacity;
        this.node_right_progressbar.opacity   = kMaxOpacity;
        this.btn_look_left_card.node.opacity  = kMaxOpacity;
        this.btn_look_right_card.node.opacity = kMaxOpacity;
    }
    
    /* 选择展示界面 */
    private selectDisplay(node: CommonItem, idx: number){
        // if(node.getIsNewCard()){
        //     showPopLayerV2("prefab/GetNewCard", GetNewCard).then(getNewCard => {
        //         getNewCard.setView(this._select_card_id);
        //         /*getNewCard.setClickCallback(()=>{
        //             Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_PlayCardIncreaseAnim, this._reward_count);
        //         });*/
        //     });

        //     /*
        //     this.scheduleOnce(()=>{
        //         this.sendRewardInfo(idx);
        //     }, kOneNumber);
        //     */
        // }
        
        this._request_reward_idx = idx;
        this.setFinalGetCardData();
    }

    /* 发送领取奖励协议
     * @param idx  所领取的奖励序号
     */
    private sendRewardInfo(idx: number){
        if(this._score <= 0){
            return
        }
        let msg      = new proto.Msg_GetRankScoreRewardReq();
        msg.rewardId = this._score;
        msg.itemIdx  = idx;
        Net.Send(proto.Ptl.GetRankScoreRewardReq, msg);
    }

    /* 检测是否是新卡牌
     * @param cardId 卡牌静态id
     */
    private checkIsNewCard(cardId: number){
        let cardData = Role.Instance.RoleItemAtrr.getItemByStaticID(cardId);
        if(!isValidObj(cardData)){
            return true;
        }
        return false;
    }

    /* 设置拥有的进度数据
     * @param item1  物品对象1 [id, count]
     * @param item2  物品对象2 [id, count]
     */
    private setProgress(itemId1: number, itemId2: number){
        this.node_left_progressbar.getComponent(ProgressBarOfCard).setData(itemId1);
        this.node_right_progressbar.getComponent(ProgressBarOfCard).setData(itemId2);
    }

    /* 播放左右卡牌缩放动画 */
    private playScaleAnimation(){
        if(this.node_left.active){
            let animNode = this.node_left.getComponent(cc.Animation);
            if(animNode){
                animNode.play("season_select_card_scale");
            }
        }
        
        if(this.node_right.active){
            let animNode = this.node_right.getComponent(cc.Animation);
            if(animNode){
                animNode.play("season_select_card_scale");
            }
        }
    }

    /* 设置最终选择的卡牌数据 */
    private setFinalGetCardData(){
        this.node_get_effect.active = true;
        this.node_select.active     = false;

        this.node_get_item.getComponent(CommonItem).showQualityEffect();
        this.node_get_item.getComponent(CommonItem).initWithStaticId(this._select_card_id, tab.ItemType.ItemType_Tower, this._select_card_count);
        this.node_get_item.getComponent(CommonItem).hideCount();

        let itemTab: tab.ItemTable = tab.Data.ItemTableByID.getValue(this._select_card_id);
        if(!isValidObj(itemTab)){
            if(!cc.sys.isNative){throw new Error("Card Data is Error!");}
            return;
        }

        this.lbl_card_name.string = itemTab.Name;
        let qualityTab            = tab.Data.QualityTableByQuality.getValue(itemTab.Quality);
        if(!isValidObj(qualityTab)){
            if(!cc.sys.isNative){throw new Error("Card Quality is Error!");}
            return;
        }
        let color = new cc.Color().fromHEX(qualityTab.ColorRGB);
        this.setCardName(itemTab.Name, color);
        this.setCardQuality(qualityTab.QualityDescrible, color);
        this.setCardLevel();
        this.setGetItemProgressBar();
        this.playCardInfoDisplayAnim();
    }

    /* 设置卡牌名称 */
    private setCardName(name: string, color: cc.Color){
        this.lbl_card_name.string     = name;
        this.lbl_card_name.node.color = color;
    }

    /* 设置卡牌品质 */
    private setCardQuality(qualityDes: string, color: cc.Color){
        this.lbl_quality.string     = qualityDes;
        this.lbl_quality.node.color = color;
    }

    /* 设置卡牌等级 */
    private setCardLevel(){
        let roleData = Role.Instance.RoleItemAtrr.getItemByStaticID(this._select_card_id);
        if(!isValidObj(roleData)){
            //throw new Error("Card Data is Error!");
            let reallv:number = getCardVisibleLevel(kOneNumber, this._select_card_id)
            this.lbl_card_level.string = `${reallv}${tab.Data.GetKeyValue_ConfigTable().LevelTip}`;
            return;
        }

        let reallv:number = getCardVisibleLevel(roleData.level, this._select_card_id)
        this.lbl_card_level.string = `${reallv}${tab.Data.GetKeyValue_ConfigTable().LevelTip}`;
    }

    /* 设置最终选择的卡牌进度条数据 */
    private setGetItemProgressBar(){
        this.node_get_progressbar.getComponent(ProgressBarOfCard).setData(this._select_card_id, this._select_card_count, this.lbl_can_uplv_tip.node);
        this.sendRewardInfo(this._request_reward_idx);
    }

    /*  */
    private onClickOpenCardDetail(cardId: number){
        let cardTab = tab.Data.CardTableByID.getValue(cardId);
        if(!isValidObj(cardTab)){
            return;
        }

        showPopLayerV2("prefab/CardDetai", CardDetail, false).then(nodeDetail=>{
            nodeDetail.setCardData(cardId, CardNodeState.CARD_NODE_STATE_UNOWN);
        });
    }
    
    /* 播放卡牌信息展示动画 */
    private playCardInfoDisplayAnim(){
        this.lbl_title.node.active = false;
        let anim = this.node_get_effect.getComponent(cc.Animation);
        if(null != anim && undefined !== anim){
            let animName = this._bSelectLeft ? "card_left_to_right" : "card_right_to_left";
            anim.play(animName);
            anim.on("finished", this.onSelectAniFinish.bind(this), this)
        }
    }

    /*  */
    private onSelectAniFinish(){
        if(this._callback_after_animation){
            this._callback_after_animation()
        }
    }
    
    /*  */
    private onTouchBegan(event: cc.Event.EventTouch){
        
    }

    /*  */
    private onTouchEnded(event: cc.Event.EventTouch){
        //this.setVisible(false);
    }
}

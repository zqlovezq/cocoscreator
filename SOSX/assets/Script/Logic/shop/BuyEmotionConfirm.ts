/*
 * 购买表情二次确认框
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNegativeOneNumber, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import EmojiPlayer from "../Common/EmojiPlayer";
import Role from "../Common/Role";
import { CreateSpine, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import ShopMain from "./ShopMain";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BuyEmotionConfirm extends PopLayer {

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_buy: cc.Button = null;

    @property(cc.Label)
    lbl_emotion_name: cc.Label = null;

    @property(cc.Node)
    node_emotion: cc.Node = null;
    
    @property(cc.Node)
    node_emotion_idle: cc.Node = null;

    @property(cc.Node)
    node_play_emotion: cc.Node = null;

    @property(cc.Label)
    lbl_cost: cc.Label = null;

    private _emotion_id: number;
    private _bHaveEnoughDiamond: boolean = true;
    private _goods_idx: number;

    onLoad () {
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
        
        this.btn_buy.node.on("click", this.onClickBuy, this);

        this.node_emotion.on(cc.Node.EventType.TOUCH_END, ()=>{
           this.playEmoji();
        }, this);
    }

    start () {

    }

    public initData(emotionID: number, idx: number){
        this._emotion_id = emotionID;
        this._goods_idx  = idx;

        this.displayPage();
    }

    /* 显示页面
     */
    private displayPage(){
        this.setEmotionName();
        this.setGoodsPrice();
        this.createEmotion();
    }

    /* 设置表情名称
     */
    private setEmotionName(){
        let tabData = tab.Data.EmojiTableByID.getValue(this._emotion_id);
        if(isValidObj(tabData)){
            this.lbl_emotion_name.string = tabData.Name;
        }
    }

    /* 设置商品价格
     */
    private setGoodsPrice(){
        let price = tab.Data.GetKeyValue_ConfigTable().BuyEmotionGoodsPrice;
        this._bHaveEnoughDiamond = Role.Instance.RoleData.diamond >= price;
        this.lbl_cost.string = `${price}`;
        this.lbl_cost.node.color = !this._bHaveEnoughDiamond ? cc.Color.RED : cc.Color.WHITE;
    }

    /* 创建表情
     */
    private async createEmotion(){
        let emojiData = tab.Data.EmojiTableByID.getValue(this._emotion_id);
        if(isValidObj(emojiData)) {
            let spine = await CreateSpine(emojiData.SpineID);
            spine.node.scale = kOneNumber;
            this.node_emotion_idle.addChild(spine.node);
            spine.setAnimation(kZeroNumber, "idle", true);
        }

        this.scheduleOnce(this.playEmoji, 0.6);
    }

    /* 播放表情动画
     */
     private playEmoji() {
        let nodeName = "emojiPlayer" + this._emotion_id;
        let zIndex   = kOneNumber;
        let self     = this;
        this.node_play_emotion.removeAllChildren(true);
        EmojiPlayer.play(this._emotion_id).then(player=>{
            if(cc.isValid(this.node)) {
                player.node.name = nodeName;
                self.node_play_emotion.addChild(player.node, zIndex);
            }
        });
    }
    
    /*  */
    private onClickBuy(){
        if(!this._bHaveEnoughDiamond){
            ShowTips("DiamondNotEnough");
            return;
        }

        let param       = new proto.Msg_BuyEmotionReq();
        param.goodsIdx  = this._goods_idx;
        param.emotionID = this._emotion_id;
        Net.Send(proto.Ptl.BuyEmotionReq, param);
        this.setVisible(false);
    }
}

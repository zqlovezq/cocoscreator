/*
 * @Descripttion: 表情商品类
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kFourNumber, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import EmojiPlayer from "../Common/EmojiPlayer";
import BuyEmotionConfirm from "../shop/BuyEmotionConfirm";
import ShopMain from "../shop/ShopMain";
import { CreateSpine, flyEmotion, showPopLayerV2 } from "../Utils/GameUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EmotionGoodsNode extends cc.Component {

    @property(cc.Node)
    node_already_buy: cc.Node = null;

    @property(cc.Node)
    node_cost: cc.Node = null;

    @property(cc.Label)
    lbl_diamond_cnt: cc.Label = null;

    @property(cc.Label)
    lbl_emotion_name: cc.Label = null;

    @property(cc.Node)
    node_emotion: cc.Node = null;

    @property(cc.Node)
    node_emotion_idle: cc.Node = null;

    @property(cc.Node)
    node_emotion_spine: cc.Node = null;

    private _emotion_id: number;
    private _bBought: boolean = false;
    private _goods_idx: number;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyEmotion, this);
        this.node_emotion.on(cc.Node.EventType.TOUCH_END, this.onClickEmotion, this);
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_PlayEmotionGoods, (param: any) => {
            let idx = (param as number);
            if (idx == this._goods_idx) {
                this.playEmoji();
            }
        }, this);
    }

    start() {

    }

    public initData(emotionID: number, bBought: boolean, idx: number) {
        this._emotion_id = emotionID;
        this._bBought = bBought;
        this._goods_idx = idx;

        this.displayPage();
    }

    public changeBuyState(bBought: boolean) {
        this._bBought = bBought;
        this.setBuyState();
    }

    /* 显示页面
     */
    private displayPage() {
        this.setEmotionName();
        this.setGoodsPrice();
        this.setBuyState();
        this.createEmotion();
        //this.node.active && this.schedule(this.playEmoji, kFourNumber + this._goods_idx);
    }

    /* 设置表情名称
     */
    private setEmotionName() {
        let tabData = tab.Data.EmojiTableByID.getValue(this._emotion_id);
        if (isValidObj(tabData)) {
            this.lbl_emotion_name.string = tabData.Name;
        }
    }

    /* 设置商品价格
     */
    private setGoodsPrice() {
        let price = tab.Data.GetKeyValue_ConfigTable().BuyEmotionGoodsPrice;
        this.lbl_diamond_cnt.string = `${price}`;
    }

    /* 设置购买状态
     */
    private setBuyState() {
        this.node_already_buy.active = this._bBought;
        this.node_cost.active = !this._bBought;
    }

    /* 创建表情
     */
    private async createEmotion() {
        let emojiData = tab.Data.EmojiTableByID.getValue(this._emotion_id);
        if (isValidObj(emojiData)) {
            let spine = await CreateSpine(emojiData.SpineID);
            spine.node.scale = kOneNumber;
            this.node_emotion_idle?.addChild(spine.node);
            spine.setAnimation(kZeroNumber, "idle", true);
        }
    }

    /* 播放表情动画
     */
    private playEmoji() {
        let nodeName = "emojiPlayer"// + this._emotion_id;
        let zIndex = kOneNumber;
        let self = this;
        this.node_emotion_spine.removeAllChildren(true);
        let oldNode = cc.director.getScene().getChildByName(nodeName)
        if (oldNode) {
            oldNode.destroy()
        }
        EmojiPlayer.play(this._emotion_id, false).then(player => {
            if (cc.isValid(this.node)) {
                player.node.name = nodeName;
                // self.node_emotion_spine.addChild(player.node, zIndex);
                var box = self.node_emotion_spine.getBoundingBoxToWorld()
                player.node.position = cc.v3(box.x, box.y, 0)
                cc.director.getScene().addChild(player.node, zIndex)
            }
        });
    }

    private onClickBuyEmotion() {
        /*ShopMain.oripos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        flyEmotion(ShopMain.oripos, 1);
        return;
        */
        if (this._bBought) {
            return;
        }

        let self = this;
        showPopLayerV2("prefab/BuyEmotionConfirm", BuyEmotionConfirm).then(layer => {
            layer.initData(self._emotion_id, self._goods_idx);
        });

        ShopMain.oripos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        // return true;
    }

    private onClickEmotion(event) {
        cc.log("EmotionGoodsNode.ts : onClickEmotion() Start")
        this.playEmoji()
        event.stopPropagation() /* 阻止继续传递 */
        return true;
    }
}

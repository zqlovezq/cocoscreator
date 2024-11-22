/*
 * @Descripttion: 表情仓库中单个表情框架
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, k255, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import EmojiPlayer from "../Common/EmojiPlayer";
import Role from "../Common/Role";
import { CreateSpine, setGray, ShowTips } from "../Utils/GameUtils";
import ManagerNewEmotionRedDot from "./ManagerNewEmotionRedDot";

/**
 * 表情父节点类型
 */
export enum EmotionNodeType{
    ShopType = 0,         //商店中
    EmotionStoreType = 1, //表情仓库中
}

/**
 * 表情节点的状态
 */
export enum EmotionNodeState{
    FirstPage = 0, //在阵中
    OtherPage = 1, //不在阵中
    SwitchState = 2, //切换状态
}

const {ccclass, property} = cc._decorator;

@ccclass
export default class EmotionFrame extends cc.Component {

    @property(cc.Node)
    node_emotion: cc.Node = null;

    @property(cc.Sprite)
    spr_default_icon: cc.Sprite = null;

    @property(cc.Node)
    node_play_emotion: cc.Node = null;

    @property(cc.Node)
    node_red_dot: cc.Node = null;

    private _emotion_id: number;
    private _cb:Function = null;
    private _bValid: boolean = false;
    private _bOwn: boolean   = false;
    private _emotion_state: EmotionNodeState = EmotionNodeState.FirstPage;
    private _switch_emotion_idx: number;
    private _original_emotion_idx: number;
    
    onLoad () {
        this.node_red_dot.active = false;
        this.node_emotion.scale = 1;
    }

    start () {
        //监听切换表情消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifySwitchEmotion, (param: any)=>{
            if(EmotionNodeState.FirstPage == this._emotion_state){
                this._emotion_state = EmotionNodeState.SwitchState;
                this._switch_emotion_idx = (param as number);
                this.playSwitchEmotionAni();
            }else if(EmotionNodeState.SwitchState == this._emotion_state){
                this._switch_emotion_idx = (param as number);
            }
        }, this);

        //监听重置表情状态消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_ResetEmotionState, (param: any)=>{
            if(EmotionNodeState.SwitchState == this._emotion_state){
                this.resetEmotionState();
            }

            this.node_play_emotion.removeAllChildren();
        }, this);
    }

    public async setData(id: number, idx: number, state: EmotionNodeState, bOwn: boolean) {
        this._emotion_id           = id;
        this._bOwn                 = bOwn;
        this._emotion_state        = state;
        this._original_emotion_idx = idx;
        let emojiData = tab.Data.EmojiTableByID.getValue(id);
        this._bValid                       = isValidObj(emojiData);
        //this.spr_default_icon.node.opacity = this._bValid ? kZeroNumber : k255;
        this.node_emotion.active           = this._bValid;
        this.node_emotion.removeAllChildren();
        if(this._bValid) {
            let spine = await CreateSpine(emojiData.SpineID);
            spine.node.scale = kOneNumber;
            this.node_emotion.addChild(spine.node);
            spine.setAnimation(kZeroNumber, "idle", true);
            !bOwn && this.setGray(spine);
            bOwn  && this.checkEmotionRedDot();
        }
    }

    /* 置灰spine
     */
    private setGray(spine: sp.Skeleton) {
        cc.loader.loadRes("Shader/custom-2d-gray-spine", cc.Material, function(err, res) {
                spine.setMaterial(0, res);
        });
    }

    /* 播放表情动画
     */
    private playEmoji(emotionID: number) {
        let nodeName = "emojiPlayer"// + emotionID;
        let zIndex   = kOneNumber;
        let self     = this;
        this.node_play_emotion.removeAllChildren(true);

        let oldNode = cc.director.getScene().getChildByName(nodeName)
        if (oldNode) {
            oldNode.destroy()
        }
        EmojiPlayer.play(emotionID).then(player=>{
            if(cc.isValid(this.node)) {
                player.node.name = nodeName;
                // self.node_play_emotion.addChild(player.node, zIndex);
                var box = self.node_play_emotion.getBoundingBoxToWorld()
                player.node.position = cc.v3(box.x,box.y,0)
                cc.director.getScene().addChild(player.node, zIndex)
            }
        });
    }
    
    /* 播放切换表情动画
     */
    public playSwitchEmotionAni(bPlay:boolean = true){
        let ani = this.node.getComponent(cc.Animation);
        if(ani){
            bPlay ? ani.play() : ani.stop();
        }

        if(!bPlay){
            this.node.angle = kZeroNumber;
        }
    }

    /* 表情状态机
     */
    private emotionFSM(){
        switch(this._emotion_state){
            case EmotionNodeState.FirstPage:
                this.playEmoji(this._emotion_id);
                break;

            case EmotionNodeState.OtherPage:
                this.playEmoji(this._emotion_id);
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifySwitchEmotion, this._original_emotion_idx);
                break;

            case EmotionNodeState.SwitchState:
                this.sendSwitchEmotion();
                break;
        }
    }

    /* 发送切换表情消息
     */
    private sendSwitchEmotion(){
        let msg         = new proto.Msg_SwitchEmotionReq();
        msg.originalIdx = this._original_emotion_idx;
        msg.replaceIdx  = this._switch_emotion_idx;
        Net.Send(proto.Ptl.SwitchEmotionReq, msg);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ResetEmotionState);
    }

    /* 重置表情状态
     */
    private resetEmotionState(){
        this._emotion_state = EmotionNodeState.FirstPage;
        this.playSwitchEmotionAni(false);
    }

    /* 检测表情红点
     */
    private checkEmotionRedDot(){
        if(Role.Instance.IsGuideFinished()) { 
            let bNewEmotion = ManagerNewEmotionRedDot.getInstance().checkIsNewEmotion(this._emotion_id);
            this.node_red_dot.active = bNewEmotion;
        }
    }

    /* 通知关闭红点
     */
    private notifyNonNewEmotion(){
        if(Role.Instance.IsGuideFinished() && this.node_red_dot.active) { 
            ManagerNewEmotionRedDot.getInstance().signEmotionState(this._emotion_id, false);
            this.node_red_dot.active = false;
        }
    }

    /* 
     */
    public onClickEmotion(){
        if(!this._bValid){
            return;
        }

        if(this._bOwn){
            this.emotionFSM();
            this.notifyNonNewEmotion();
        }else{
            this.playEmoji(this._emotion_id);
            //ShowTips("BuyEmotionTip");
        }
    }
}

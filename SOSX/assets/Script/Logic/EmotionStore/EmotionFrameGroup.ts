/*
 * @Descripttion: 表情组
 */

import { kZeroNumber } from "../Common/CommonInterface";
import EmotionFrame, { EmotionNodeState, EmotionNodeType } from "./EmotionFrame";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EmotionFrameGroup extends cc.Component {

    @property(cc.Node)
    node_emotion_1: cc.Node = null;

    @property(cc.Node)
    node_emotion_2: cc.Node = null;

    @property(cc.Node)
    node_emotion_3: cc.Node = null;

    @property(cc.Node)
    node_emotion_4: cc.Node = null;

    private _emotion_list: EmotionFrame[] = [];

    onLoad () {
        this.onFocusInEditor();
    }

    start () {

    }

    onDestroy(){
        this._emotion_list = [];
    }

    public initData(emotionList: number[], idx: number, bOwn: boolean){
        this.initNodeVisible();

        let emotionListLen = emotionList.length;
        for(let i = kZeroNumber; i < emotionListLen; i++){
            this._emotion_list[i].node.active = true;
            this._emotion_list[i].setData(emotionList[i], idx, EmotionNodeState.OtherPage, bOwn);
            idx++;
        }
    }

    private initNodeVisible(){
        this.node_emotion_1.active = false;
        this.node_emotion_2.active = false;
        this.node_emotion_3.active = false;
        this.node_emotion_4.active = false;
    }
    
    protected onFocusInEditor(){
        //if(this._emotion_list.length == kZeroNumber){
            this._emotion_list = [];
            this._emotion_list.push(this.node_emotion_1.getComponent(EmotionFrame));
            this._emotion_list.push(this.node_emotion_2.getComponent(EmotionFrame));
            this._emotion_list.push(this.node_emotion_3.getComponent(EmotionFrame));
            this._emotion_list.push(this.node_emotion_4.getComponent(EmotionFrame));
        //}
    }
}

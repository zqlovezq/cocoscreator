/*
 * @Descripttion: 联盟支援推送模块
 */

import {kOneNumber } from "../Common/CommonInterface";
import PlayerCard from "../PlayerInfo/PlayerCard";
import {getRequestSupportUpperCount } from "./AllianceCommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PushAllianceSupportInfo extends cc.Component {

    @property(cc.Node)
    node_card: cc.Node = null;
    
    @property(cc.Label)
    lbl_donor_name: cc.Label = null;
    
    @property(cc.Label)
    lbl_progress: cc.Label = null;

    @property(cc.ProgressBar)
    progress_bar: cc.ProgressBar = null;

    @property(cc.Button)
    btn_close: cc.Button = null;

    @property(cc.Node)
    node_animation: cc.Node = null;

    private _callback: Function = null;

    onLoad () {
        this.btn_close.node.on("click", this.onClose, this);
    }

    public setView(donorName: string, cardID: number, curGainSupportCnt: number){
        let supportUpperLimit = getRequestSupportUpperCount(cardID);
        let calcVal = curGainSupportCnt / supportUpperLimit;
        this.lbl_progress.string = `${curGainSupportCnt}/${supportUpperLimit}`;
        this.progress_bar.progress = (calcVal > kOneNumber) ? kOneNumber : calcVal;
        
        this.lbl_donor_name.string = donorName;
        this.node_card.getComponent(PlayerCard).initData(cardID, kOneNumber, true, true);
        this.playDown()
    }
    
    public setCallback(callback) {
        this._callback = callback;
    }

    private playDown(){
        let ani = this.node_animation.getComponent(cc.Animation)
        if(ani){
            ani.play()
            ani.on("finished", this.onPlayEnd, this)
        }
    }
    
    private onPlayEnd(){
        if(this._callback){
            this._callback();
        }
    }

    private onClose(){
        let ani = this.node_animation.getComponent(cc.Animation)
        if(ani){
            let curstate = ani.getAnimationState("pushtasktips")
            if(curstate.time < 4){
                ani.setCurrentTime(4);
            }
        }
    }
}

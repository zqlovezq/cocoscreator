/*
 * @Descripttion: 新好友战斗邀请提示模块
 */

import { proto } from "../../Protocol/client_protocol";
import PlayerCard from "../PlayerInfo/PlayerCard";
import { kOneNumber } from "./CommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PushFriendFightInvitation extends cc.Component {

    @property(cc.Node)
    node_animation: cc.Node = null;

    @property(PlayerCard)
    node_player_head: PlayerCard = null;

    @property(cc.Label)
    lbl_player_name: cc.Label = null;
    
    @property(cc.Label)
    lbl_friend_pvp: cc.Label = null;

    @property(cc.Label)
    lbl_friend_pve: cc.Label = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    private _callback: Function = null;

    onLoad () {
        this.btn_closed.node.on("click", this.onClose, this);
    }

    public setView(data: proto.IFriendFightInvitationData){
        this.lbl_player_name.string     = data.roleName;
        this.lbl_friend_pve.node.active = data.type === proto.FightType.FriendPve;
        this.lbl_friend_pvp.node.active = data.type === proto.FightType.FriendPvp;
        this.node_player_head.initData(data.headID, kOneNumber, false, true);
        this.playDown();
    }

    private playDown(){
        let ani = this.node_animation.getComponent(cc.Animation);
        if(ani){
            ani.play();
            ani.on("finished", this.onPlayEnd, this);
        }
    }

    public setCallback(callback) {
        this._callback = callback;
    }

    private onPlayEnd(){
        if(this._callback){
            this._callback();
        }
    }

    onClose(){
        let ani = this.node_animation.getComponent(cc.Animation)
        if(ani){
            let curstate = ani.getAnimationState("pushtasktips");
            if(curstate.time < 4){
                ani.setCurrentTime(4);
            }
        }
    }
    
}

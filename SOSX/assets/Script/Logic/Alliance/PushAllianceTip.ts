/*
 * @Descripttion: 
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { isValidObj } from "../Common/CommonInterface";
import { LoadResAsync } from "../Utils/GameUtils";
import { setAllianceBadge } from "./AllianceCommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PushAllianceTip extends cc.Component {
    @property(cc.Node)
    node_layout_join: cc.Node = null;

    @property(cc.Node)
    node_layout_expel: cc.Node = null;
    
    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;
    
    @property(cc.Label)
    lbl_title: cc.Label = null;

    @property(cc.Sprite)
    spr_alliance_badge: cc.Sprite = null;

    @property(cc.Button)
    btn_close: cc.Button = null;

    @property(cc.Node)
    node_animation: cc.Node = null;

    private _callback: Function = null;

    onLoad () {
        this.btn_close.node.on("click", this.onClose, this);
    }

    public setView(iconIdx: number, name: string, msgType: number){
        this.lbl_title.string         = name;
        this.lbl_alliance_name.string = name;
        this.node_layout_join.active  = msgType === proto.PushJoinOrExpelType.PushJoin;
        this.node_layout_expel.active = msgType === proto.PushJoinOrExpelType.PushExpel;
        this.setAllianceIcon(iconIdx);
        this.playDown()
    }

    private async setAllianceIcon(iconIdx: number){
        setAllianceBadge(this.spr_alliance_badge, iconIdx);
    }

    private playDown(){
        let ani = this.node_animation.getComponent(cc.Animation)
        if(ani){
            ani.play()
            ani.on("finished", this.onPlayEnd, this)
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
            let curstate = ani.getAnimationState("pushtasktips")
            if(curstate.time < 4){
                ani.setCurrentTime(4);
            }
        }
    }
}

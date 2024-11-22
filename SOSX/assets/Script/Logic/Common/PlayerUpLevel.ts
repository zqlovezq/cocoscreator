/*
 * @Descripttion: 
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import PopLayer from "../Utils/PopLayer";
import { isValidObj } from "./CommonInterface";
import Role from "./Role";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerUpLevel extends PopLayer {

    @property(cc.Label)
    lbl_level: cc.Label = null;

    @property(cc.Label)
    lbl_title: cc.Label = null;

    @property(cc.Label)
    lbl_tip: cc.Label   = null;

    @property(cc.Label)
    lbl_value: cc.Label = null;
    
    @property(cc.Sprite)
    spr_bg: cc.Sprite   = null;

    @property(cc.Node)
    node_spine: cc.Node = null;
    
    private _bTouch: boolean = false;
    private _player_uplv_effect: sp.Skeleton = null;

    onLoad () {
        //注册触摸事件 onTouchBegan                                                                                                       
        this.spr_bg.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.spr_bg.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);

        this._player_uplv_effect = this.node_spine.getComponent(sp.Skeleton);
     }

    start () {
        if(isValidObj(this._player_uplv_effect)){
            this._player_uplv_effect.setAnimation(0, "idle", false);
            this._player_uplv_effect.addAnimation(0, "idle2", true);
            this._player_uplv_effect.setCompleteListener(()=>{
                this._player_uplv_effect.setCompleteListener(null);
                this._bTouch = true;
                this.scheduleOnce(()=>{this.setVisible(false);}, 2.0);
            });
        }
    }

    public playRoleUpLevelEffect(){
        this._bTouch = false;
        this.lbl_level.string = `${Role.Instance.RoleData.level}`;
    }
    
    private onTouchBegan(event: cc.Event.EventTouch){
        
    }

    private onTouchEnded(event: cc.Event.EventTouch){
        if(!this._bTouch){
            return;
        }

        this.setVisible(false);
    }

    onDestroy() {
        super.onDestroy()
        if(Role.Instance.RoleData.level >= 2) {
            Net.pushLoaclMessage(LOCAL_MESSAGE.CheckGuide) 
        }
    }
}

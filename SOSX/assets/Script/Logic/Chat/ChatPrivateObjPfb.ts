/*
 * @Descripttion: 私聊对象
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { checkStringIsValid, setAllianceBadge } from "../Alliance/AllianceCommonInterface";
import { isValidObj, kNoneString, kOneNumber } from "../Common/CommonInterface";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import PlayerCard from "../PlayerInfo/PlayerCard";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import { setGray, showPopLayerV2 } from "../Utils/GameUtils";
import ManagerPrivateChatMsg, { IPrivateObjData } from "./ManagerPrivateChatMsg";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChatPrivateObjPfb extends InfiniteCell {
    @property(PlayerCard)
    player_head: PlayerCard = null;

    @property(cc.Label)
    lbl_player_name: cc.Label = null;

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Sprite)
    spr_alliance_badge: cc.Sprite = null;

    @property(cc.Button)
    btn_remove: cc.Button = null;

    @property(cc.Node)
    spr_red_dot: cc.Node = null;
    
    @property(cc.Node)
    node_original_color: cc.Node = null;

    @property(cc.Node)
    node_gray_color: cc.Node = null;

    private _private_obj_data: IPrivateObjData;

    onLoad () {
        this.btn_remove.node.on("click", this.onClickRemoveObj, this);

        //监听私聊对象新消息事件
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewPrivateMsg, (param: any)=>{
            let uuid = (param as string);
            if(uuid == this._private_obj_data.uuid){
                this.setNewMsgRedTip(true);
            }
        }, this);
    }

    start () {

    }

    public UpdateContent(data: any): void{
        this.initData(data);
    }
    
    private initData(data: IPrivateObjData){
        this._private_obj_data = data;
        let allianceName = isValidObj(data.allianceName) ? 
                            data.allianceName : kNoneString;
        this.setNewMsgRedTip(data.bNewMsg);
        this.setFriendHead(data.headID);
        this.setFriendName(data.name);
        this.setFriendAllianceName(allianceName);
        this.setFriendAllianceBadge(data.allianceIconIdx, checkStringIsValid(data.allianceName));
        this.checkOnline(data.bOnline);
    }

    /* 设置好友名称
     */
     private setFriendName(name: string){
        this.lbl_player_name.string = name;
    }

    /* 设置好友联盟名称
     */
    private setFriendAllianceName(name: string){
        this.lbl_alliance_name.string = name;
    }

    /* 设置好友联盟徽章
     */
     private setFriendAllianceBadge(iconIdx: number, bValid: boolean){
        bValid && setAllianceBadge(this.spr_alliance_badge, iconIdx);
        this.spr_alliance_badge.node.active = bValid;
    }

    /* 设置玩家头像
     */
     private setFriendHead(headId: number){
        this.player_head.getComponent(PlayerCard).setVisibleLevel(false);
        this.player_head.getComponent(PlayerCard).initData(headId, kOneNumber, false, false);
        this.player_head.getComponent(PlayerCard).setCallback(()=>{
            showPopLayerV2("prefab/PlayerInfo", PlayerInfo).then(layer =>{
                layer.initData(this._private_obj_data.uuid);
            });
        });
    }

    /* 设置是否是新消息提示
     */
    private setNewMsgRedTip(bNewMsg: boolean){
        this.spr_red_dot.active = bNewMsg;
    }

    /* 检测好友是否在线
     */
     private checkOnline(bOnline: boolean){
        this.player_head.setGray(!bOnline);
        setGray(this.spr_alliance_badge, !bOnline);
        this.lbl_alliance_name.node.color = bOnline ? this.node_original_color.color : this.node_gray_color.color;
    }

    public onClickChat(){
        this.setNewMsgRedTip(false);
        this._private_obj_data.bNewMsg = false;
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifySelectPrivateObjName, this._private_obj_data);
        ManagerPrivateChatMsg.CurrentPrivateObj = this._private_obj_data.uuid;
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdatePrivateRedTip);
    }

    private onClickRemoveObj(){
        ManagerPrivateChatMsg.getInstance().deleteMsg(this._private_obj_data.uuid);
    }
}

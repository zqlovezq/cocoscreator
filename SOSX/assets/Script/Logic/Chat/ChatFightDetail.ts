/*
 * @Descripttion: 聊天模块 - 联盟内的友谊赛和无限防御具体详情模块
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNegativeOneNumber, kNoneString, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import PlayerCard from "../PlayerInfo/PlayerCard";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import { showPopLayerV2 } from "../Utils/GameUtils";
import ChatFightInvitationSelfInfo from "./ChatFightInvitationSelfInfo";

/**
 * 战斗状态枚举
 */
enum FightState{
    Fight_Start = 0,
    Fight_Over = 1,
}

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChatFightDetail extends InfiniteCell {
    
    @property(PlayerCard)
    node_player_head: PlayerCard = null;
    
    @property(ChatFightInvitationSelfInfo)
    node_self_info: ChatFightInvitationSelfInfo = null;

    @property(cc.Sprite)
    spr_rank_icon: cc.Sprite = null;

    @property(cc.Label)
    lbl_player_name: cc.Label = null;

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Node)
    node_state: cc.Node = null;

    @property(cc.Sprite)
    spr_running_state_bg: cc.Sprite = null;

    @property(cc.Label)
    lbl_over_tip: cc.Label = null;

    @property(cc.Label)
    lbl_running_tip: cc.Label = null;

    @property({tooltip: "是否是自己"})
    public bSelf: boolean = false;
    
    private _room_id: number                        = kZeroNumber;
    private _fight_start_time: number               = kZeroNumber;
    private _left_role_id: string                   = kNoneString;
    private _right_role_id: string                  = kNoneString;
    private _fight_state: number                    = kNegativeOneNumber;
    private _fight_type: proto.FightType;

    onLoad () {
        /* 监听战斗结束消息，要改变状态 */
        Net.listenProtocol(proto.Ptl.PushAllianceFightEnd, (buffer, ptl)=>{
            let msg = proto.Msg_PushAllianceFightEnd.decode(buffer);
            cc.log("PushAllianceFightEnd(监听战斗结束) : msg " + JSON.stringify(msg));
            if(!msg){
                return;
            }
            msg.fightEnd.overData && msg.fightEnd.roomID === this._room_id && this.updateFightState(msg.fightEnd.overData);
        }, this);
    }

    public UpdateContent(celldata){
        if(!celldata){return;}
        let fightMsgObj: proto.AllianceFightStruct = null;
        try {
            fightMsgObj = JSON.parse(celldata.content);
        } catch (error) {
            if(!cc.sys.isNative){throw new Error("战斗聊天JSON数据格式错误");}
        }
        
        if(!fightMsgObj){
            if(!cc.sys.isNative){throw new Error("战斗聊天JSON数据格式错误");}
            return;
        }
    
        this.initData(fightMsgObj);
    }

    /* 获取当前节点高度
     */
    public GetCellSize(){
        return this.node.getContentSize().height;
    }

    private initData(msg: proto.AllianceFightStruct){
        this._room_id            = msg.roomID;
        this._fight_start_time   = msg.startTime;
        this._fight_type         = msg.type;
        this._left_role_id       = msg.player1.roleID;
        this._right_role_id      = msg.player2.roleID;
        this._fight_state        = msg.overData ? FightState.Fight_Over : FightState.Fight_Start;
        
        this.setDisplayElems(msg);
    }

    /* 设置页面显示元素
     */
    private setDisplayElems(msg: proto.AllianceFightStruct){
        let cardInfoList = [];
        cardInfoList = cardInfoList.concat(msg.player1.pvpCardInfo.cardLists);
        cardInfoList = cardInfoList.concat(msg.player1.devilInfo);
        let allianceName = isValidObj(msg.player1.allianceName) ? 
                                msg.player1.allianceName : tab.Data.GetKeyValue_ConfigTable().NotHaveAllianceTip;
        this.node_self_info.setData(cardInfoList, msg.type);
        this.setLabel(this.lbl_player_name,   msg.player1.roleName);
        this.setLabel(this.lbl_alliance_name, allianceName);
        this.setPlayerHeadInfo(msg.player1.indexCard);
        this.refreshFightState();
    }

    /* 设置玩家头像信息
     * @param cardID  头像卡牌ID
     */
     private setPlayerHeadInfo(cardID: number){
        this.node_player_head && this.node_player_head.setVisibleLevel(false);
        this.node_player_head && this.node_player_head.initData(cardID, kOneNumber, false, false);
        this.node_player_head && (this.node_player_head.getComponent(PlayerCard).setCallback(()=>{
            showPopLayerV2("prefab/PlayerInfo", PlayerInfo).then(layer =>{
                layer.initData(this._left_role_id);
            });
        }));
    }

    /* 设置文本
     * @param lblName    名称文本控件
     * @param name       具体名称
     */
    private setLabel(lblName: cc.Label, name: string){
        lblName.string = name;
    }

    /* 更新战斗状态
     * @param msg  战斗结束消息
     */
    private updateFightState(msg: proto.IAllianceFightOver){
        this._fight_state       = FightState.Fight_Over;
    }
    
    /* 刷新战斗状态的可见性
     */
    private refreshFightState(){
        let bFightOver = this._fight_state === FightState.Fight_Over;
        this.spr_running_state_bg.node.active = !bFightOver;
        this.lbl_running_tip.node.active      = !bFightOver;
        this.lbl_over_tip.node.active         = bFightOver;
    }
}

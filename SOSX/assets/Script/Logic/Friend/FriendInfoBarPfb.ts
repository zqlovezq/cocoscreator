/*
 * @Descripttion: 好友信息bar预制件
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { checkStringIsValid, setAllianceBadge } from "../Alliance/AllianceCommonInterface";
import ChatMainPage from "../Chat/ChatMainPage";
import { kNoneString, kOneNumber } from "../Common/CommonInterface";
import RankScoreRewardClass from "../Common/SeasonRankCommonFunc";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import PlayerCard from "../PlayerInfo/PlayerCard";
import { getServerUtcTime, setGray, showPopLayerV2 } from "../Utils/GameUtils";
import ManagerNewFriend from "./ManagerNewFriend";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FriendInfoBarPfb extends InfiniteCell {
    
    @property(PlayerCard)
    player_head: PlayerCard = null;

    @property(cc.Label)
    lbl_player_name: cc.Label = null;

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Sprite)
    spr_alliance_badge: cc.Sprite = null;

    @property(cc.Sprite)
    spr_season_badge: cc.Sprite = null;

    @property(cc.Label)
    lbl_season_score: cc.Label = null;

    @property(cc.Label)
    lbl_season_lv: cc.Label = null;

    @property(cc.Node)
    spr_red_dot: cc.Node = null;

    @property(cc.Sprite)
    spr_score_flag: cc.Sprite = null;

    @property(cc.Button)
    btn_private_chat: cc.Button = null;
    
    private _friend_role_id: string = kNoneString;
    private _bOnline: boolean       = false;
    private _friend_name: string    = kNoneString;
    private _alliance_icon_idx: number;
    private _player_head_id: number;

    onLoad () {
        this.spr_red_dot.active = false;
        this.btn_private_chat.node.on("click", this.onClickPrivateChat, this);
    }

    start () {}

    UpdateContent(data: any): void{
        if(!data){return;}

        this.initData(data);
    }

    private initData(friendInfo: proto.IFriendInfoData){
        this._friend_role_id    = friendInfo.baseInfo.roleID;
        this._bOnline           = friendInfo.bOnline;
        this._friend_name       = friendInfo.baseInfo.roleName;
        this._alliance_icon_idx = friendInfo.baseInfo.allianceIconIdx;
        this._player_head_id    = friendInfo.baseInfo.headID;
        this.setFriendHead(friendInfo.baseInfo.headID);
        this.setFriendName(friendInfo.baseInfo.roleName);
        this.setFriendAllianceName(friendInfo.baseInfo.allianceName);
        this.setFriendAllianceBadge(friendInfo.baseInfo.allianceIconIdx, checkStringIsValid(friendInfo.baseInfo.allianceName));
        this.setFriendSeason(friendInfo.baseInfo.seasonScore);
        this.checkOnline(friendInfo.bOnline);
        this.setNewFriendTip();
    }

    /* 设置好友头像
     */
    private setFriendHead(headID: number){
        this.player_head.initData(headID, kOneNumber, false, true);
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

    /* 设置好友赛季数据
     */
    private setFriendSeason(score: number){
        let seasonLv = RankScoreRewardClass.getInstance().getRankLevelToScore(score);
        this.lbl_season_score.string = `${score}`;
        this.lbl_season_lv.string    = `${seasonLv}`
    }

    /* 是否为新好友
     */
    private setNewFriendTip(){
        this.spr_red_dot.active = ManagerNewFriend.getInstance().getIsNewFriend(this._friend_role_id);
    }

    /* 检测好友是否在线
     */
    private checkOnline(bOnline: boolean){
        this.player_head.setGray(!bOnline);
        setGray(this.spr_alliance_badge, !bOnline);
        setGray(this.spr_season_badge,   !bOnline);
        setGray(this.spr_score_flag,     !bOnline);
    }
    
    /* 
     */
    public onClickOpenFriendInfo(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyOpenFriendInfo, 
                {   friendID: this._friend_role_id, 
                    selfNode: this.node, 
                    name:     this._friend_name, 
                    bOnline:  this._bOnline});

        ManagerNewFriend.getInstance().changeUnNewFriend(this._friend_role_id);
        this.spr_red_dot.active = false;
    }

    /* 
     */
    private onClickPrivateChat(){
        showPopLayerV2("prefab/ChatMainPage", ChatMainPage).then(layer =>{
            layer.initPrivateObj({  uuid: this._friend_role_id, 
                                    name: this._friend_name, 
                                    allianceName: this.lbl_alliance_name.string, 
                                    allianceIconIdx: this._alliance_icon_idx, 
                                    headID: this._player_head_id, 
                                    timestamp: getServerUtcTime(),
                                    bOnline: this._bOnline, 
                                    bNewMsg: false});
        });
    }
}

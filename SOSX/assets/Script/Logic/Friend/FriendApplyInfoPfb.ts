/*
 * @Descripttion: 添加好友信息条预制件
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { checkStringIsValid, getTimeDiffString, setAllianceBadge } from "../Alliance/AllianceCommonInterface";
import { kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import PlayerCard from "../PlayerInfo/PlayerCard";
import { getServerUtcTime} from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FriendApplyInfoPfb extends InfiniteCell {

    @property(cc.Node)
    node_time: cc.Node = null;
    
    @property(PlayerCard)
    player_head: PlayerCard = null;

    @property(cc.Label)
    lbl_player_name: cc.Label = null;

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Sprite)
    spr_alliance_badge: cc.Sprite = null;

    @property(cc.Label)
    lbl_online_time: cc.Label = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    @property(cc.Button)
    btn_agree: cc.Button = null;

    private _friend_role_id: string;

    onLoad () {
        this.btn_agree.node.on("click", ()=>{this.disposeFriendApply(true);},   this);
        this.btn_cancel.node.on("click", ()=>{this.disposeFriendApply(false);}, this);
    }

    start () {

    }

    UpdateContent(data: any): void{
        if(!data){return;}
        this.initData(data);
    }

    private initData(friendInfo: proto.IFriendApplyData){
        this._friend_role_id = friendInfo.baseInfo.roleID;
        
        this.setFriendHead(friendInfo.baseInfo.headID);
        this.setFriendName(friendInfo.baseInfo.roleName);
        this.setFriendAllianceName(friendInfo.baseInfo.allianceName);
        this.setFriendAllianceBadge(friendInfo.baseInfo.allianceIconIdx, checkStringIsValid(friendInfo.baseInfo.allianceName));
        this.setApplyTime(friendInfo.applyTime);
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
    private setApplyTime(time: number){
        let diff = time - getServerUtcTime();
        if(diff <= kZeroNumber){
            this.node_time.active = false;
            return;
        }

        this.lbl_online_time.string = getTimeDiffString(diff);
    }

    /* 处理好友申请
     */
    private disposeFriendApply(bAgree: boolean){
        let msg = new proto.Msg_OperatorFriendApplyReq();
        msg.bAgree = bAgree;
        msg.roleID = this._friend_role_id;
        Net.Send(proto.Ptl.OperatorFriendApplyReq, msg);
    }
}

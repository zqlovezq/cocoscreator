/*
 * @Descripttion: 好友设置面板
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import InvitationFightConfirm from "../Alliance/InvitationFightConfirm";
import { RequestPvePathType, SignRequestPvEPath } from "../Chat/ChatCellCommonFunc";
import { checkFunctionIsOpen, kNegativeOneNumber} from "../Common/CommonInterface";
import BattleLayer from "../Main/BattleLayer";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import { showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import Waiting from "../Utils/Waiting";
import { WaitingTag } from "../Utils/WaitingTag";
import DeleteFriendConfirmPopLayer from "./DeleteFriendConfirmPopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FriendSetPanel extends cc.Component {

    @property(cc.Button)
    btn_look: cc.Button = null;

    @property(cc.Button)
    btn_pvp_invitation: cc.Button = null;

    @property(cc.Button)
    btn_pve_invitation: cc.Button = null;

    @property(cc.Button)
    btn_delete: cc.Button = null;

    private _friend_role_id: string;
    private _friend_name: string;

    onLoad () {
        this.btn_look.node.on("click", ()=>{
            showPopLayerV2("prefab/PlayerInfo", PlayerInfo).then(layer =>{
                layer.initData(this._friend_role_id);
            });
        }, this);

        //无限防御邀请
        this.btn_pve_invitation.node.on("click", ()=>{
            let bOpenPveFight = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_CooperationModel);
            if(!bOpenPveFight){
                ShowTips("CooperationFightOpenTip");
                return;
            }
            SignRequestPvEPath.getInstance().setPvePath(RequestPvePathType.SEND_PVE_INVITATION, kNegativeOneNumber);
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_TransmitFriendRoleID, this._friend_role_id);
            Waiting.Show(WaitingTag.GetPveStatus.toString())
            BattleLayer.bOnlyPveAwardReddot = false

            Net.Send(proto.Ptl.GetPveStatusReq, new proto.Msg_GetPveStatusReq());
            
            this.node.active = false;
        }, this);

        //友谊赛邀请
        this.btn_pvp_invitation.node.on("click", ()=>{
            showPopLayerV2("prefab/InvitationFightConfirm", InvitationFightConfirm).then(layer =>{
                layer.setFightType(proto.FightType.FriendPvp, this._friend_role_id);
            });
            this.node.active = false;
        }, this);
        
        //删除好友
        this.btn_delete.node.on("click", ()=>{
            showPopLayerV2("prefab/DeleteFriendConfirmPopLayer", DeleteFriendConfirmPopLayer).then(layer =>{
                layer.initData(this._friend_role_id, this._friend_name);
            });
            this.node.active = false;
        }, this);

        //监听好友变更消息
        Net.listenProtocol(proto.Ptl.ChangeFriendInfo, (buffer, ptl)=>{
            if(!this.node.active || !this.node.activeInHierarchy){
                return;
            }
            let msg = proto.Msg_ChangeFriendInfo.decode(buffer);
            cc.log("ChangeFriendInfo (变更好友消息) msg: " + JSON.stringify(msg));
            if(msg && msg.bDelete){
                msg.friendInfo.baseInfo.roleID === this._friend_role_id && (this.node.active = false);
            }
        }, this);

        this.btn_pve_invitation.node.active = false;
        this.btn_pvp_invitation.node.active = false;
    }

    start () {}

    public initData(friendRoleID: string, name: string, bOnline: boolean){
        this._friend_role_id                  = friendRoleID;
        this._friend_name                     = name;
        this.btn_pve_invitation.node.active   = bOnline;
        this.btn_pvp_invitation.node.active   = bOnline;
    }

    /* 是否要乘以4倍的节点高度
     */
    public getMulti4TimesHeight(){
        return this.btn_pve_invitation.node.active && this.btn_pvp_invitation.node.active;
    }
}

/*
 * @Descripttion: 
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { SharePointEventReported } from "../Common/CommonInterface";
import Role from "../Common/Role";
import roleInfo from "../Common/roleInfo";
import PopLayer from "../Utils/PopLayer";
import SdkManager from "../Utils/SdkManager";
import InviteFriendsListCell from "./InviteFriendsListCell";

const {ccclass, property} = cc._decorator;

@ccclass
export default class InviteFriendsList extends PopLayer {
  
    @property(cc.ScrollView)
    list: cc.ScrollView = null;

    @property(cc.Button)
    inviteBtn: cc.Button = null

    @property(cc.Prefab)
    cell:cc.Prefab = null

    invite(){
        let data = Role.Instance.RoleData
        if(!data){
            return
        }
        //分享
        SdkManager.Instance.ShareToFriend(()=>{
                SharePointEventReported(tab.SharedType.SharedType_FriendInvite, "friend_invitation_share");
            },
            Role.Instance.ID, 
            Role.Instance.RoleData.name, 
            Role.Instance.RoleData.level, 
            Role.Instance.RoleData.createRoleUTC,
            tab.Data.GetKeyValue_ConfigTable().ShareGamePngURL,
            tab.Data.GetKeyValue_ConfigTable().ShareGameTxt
        )
    }

    setView(sharedFriends: proto.ISharedFriends[]) {
        if(sharedFriends && sharedFriends.length > 0){
            sharedFriends = sharedFriends.sort((l,r)=>{return l.rankScore - r.rankScore })
            //去重
            let shareds:proto.ISharedFriends[] = []
            shareds.push(sharedFriends[0])
            for(let i = 1; i < sharedFriends.length; i++){
                if(sharedFriends[i].playerUid.localeCompare(sharedFriends[i-1].playerUid) != 0){
                    shareds.push(sharedFriends[i])
                }
            }

            this.list.content.removeAllChildren()
            for(let i = 0; i < shareds.length; i++){
                let cell = cc.instantiate(this.cell)
                if(cell) {
                    this.list.content.addChild(cell)
                    let com = cell.getComponent(InviteFriendsListCell)
                    if(com) {
                        com.setView(i+1, shareds[i])
                    }
                }
            }
        }
    }

    start () {

    }
}

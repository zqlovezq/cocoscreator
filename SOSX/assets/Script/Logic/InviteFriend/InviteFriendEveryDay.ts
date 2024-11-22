/**
 * 
*/

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { SharePointEventReported } from "../Common/CommonInterface";
import Role from "../Common/Role";
import ManagerNotice from "../Notices/ManagerNotice";
import { getItemIconURL, popRewardLayer_Ex } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import SdkManager from "../Utils/SdkManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class InviteFriendEveryDay extends PopLayer {
  
    @property(cc.Label)
    awardCnt: cc.Label = null;

    @property(cc.Sprite)
    awardIcon:cc.Sprite = null

    @property(cc.Node)
    oneNode: cc.Node = null

    @property([cc.Sprite])
    addflag1:cc.Sprite[] = []

    @property(cc.Node)
    inviteNode:cc.Node = null

    @property(cc.Node)
    getawardNode:cc.Node = null

    @property(cc.Node)
    aleadyGetAwardNode:cc.Node = null

    @property(cc.Node)
    awardPreNode:cc.Node = null

    boxGroupId: number = 0;
    sharedFriends:proto.Msg_DailyShareInviteRsp = null

    onLoad () {
        for(let i = 0; i< this.addflag1.length; i++){
            this.addflag1[i].node.on(cc.Node.EventType.TOUCH_END, this.invite.bind(this), this)
        }
    
        /* 领取每日分享邀请奖励 */
        Net.listenProtocol(proto.Ptl.GetDailyShareInviteRewardRsp,async (buffer, ptl) =>{
            let msg = proto.Msg_GetDailyShareInviteRewardRsp.decode(buffer)
            cc.log("GetDailyShareInviteRewardRsp (领取每日分享邀请奖励) msg: " + JSON.stringify(msg));
            if (msg != null){
                if (msg.result == 0) {
                    Role.Instance.everyDaySharedData.todayFinish = true
                    this.refresh(Role.Instance.everyDaySharedData);
                    
                    Net.pushLoaclMessage(LOCAL_MESSAGE.HideInviteReddot)
                    popRewardLayer_Ex(msg.reward)
                }
            }
        }, this);

        /* 每日分享邀请信息 */
        Net.listenProtocol(proto.Ptl.DailyShareInviteRsp, async (buffer, ptl) =>{
            let msg = proto.Msg_DailyShareInviteRsp.decode(buffer)
            cc.log("DailyShareInviteRsp (每日分享邀请信息) msg: " + JSON.stringify(msg));
            if (msg != null){
                Role.Instance.everyDaySharedData = msg
                this.setView()
            }
        }, this);
    }

    /*  */
    start () {
        let param4 = new proto.Msg_DailyShareInviteReq()
        Net.Send(proto.Ptl.DailyShareInviteReq, param4)
    }

    /*  */
    setView(){
        //获得当前阶段的奖励
        let data = Role.Instance.everyDaySharedData
        if(!data){
            return
        }
        let iteminfo = getItemIconURL(data.reward.rewardId, data.reward.rewardType)
        if(iteminfo){
            this.awardIcon.setTexture(iteminfo.icon)
        }

        this.awardCnt.string =tab.Data.GetKeyValue_ConfigTable().MultiFlag +  data.reward.rewardCount.toString()

        this.refresh(data);

        if(data.sharedFriends.length > 0 && this.addflag1.length > 0){
            let friend = data.sharedFriends[0]
            ManagerNotice.getInstance().downloadImg(friend.wechatHeadIconURl, this.addflag1[0], null, ()=>{
                let cfg = tab.Data.ItemTableByID.getValue(friend.indexCard)
                if(cfg){
                    this.addflag1[0].setTexture(cfg.Icon)
                    this.addflag1[0].node.scale = 1
                }
            })
            this.addflag1[0].node.off(cc.Node.EventType.TOUCH_END)       
        }        
    }

    /*  */
    private refresh(data: proto.Msg_DailyShareInviteRsp) {
        this.inviteNode.active = data.sharedFriends.length < this.addflag1.length; //邀请按钮
        this.getawardNode.active = data.sharedFriends.length >= this.addflag1.length && data.todayFinish == false;
        this.aleadyGetAwardNode.active = data.todayFinish;
        this.awardPreNode.active = data.todayFinish == false;
    }

    /*  */
    getAward(){
        let param = new proto.Msg_GetDailyShareInviteRewardReq()
        Net.Send(proto.Ptl.GetDailyShareInviteRewardReq, param)
    }

    //分享邀请好友
    invite(){
        let data = Role.Instance.everyDaySharedData
        if(!data){
            return
        }
        SdkManager.Instance.ShareToFriend(()=>{
                SharePointEventReported(tab.SharedType.SharedType_EveryDayInviteFriend, "friend_invite_every_day_share");
            },
            Role.Instance.ID, 
            Role.Instance.RoleData.name, 
            Role.Instance.RoleData.level, 
            Role.Instance.RoleData.createRoleUTC,
            tab.Data.GetKeyValue_ConfigTable().ShareGamePngURL,
            tab.Data.GetKeyValue_ConfigTable().ShareGameTxt
        )
    }

}

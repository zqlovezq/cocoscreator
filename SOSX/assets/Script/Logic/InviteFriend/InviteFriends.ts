
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import boxtips from "../Common/boxtips";
import { SharePointEventReported } from "../Common/CommonInterface";
import Role from "../Common/Role";
import ManagerNotice from "../Notices/ManagerNotice";
import { getBoxIDAndCfg, getFormatString, popRewardLayer_Ex, showPopLayer, showPopLayerV2 } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import SdkManager from "../Utils/SdkManager";
import InviteFriendsList from "./InviteFriendsList";

const {ccclass, property} = cc._decorator;

@ccclass
export default class InviteFriends extends PopLayer {

    @property(cc.Label)
    desc: cc.Label = null;

    @property(cc.Label)
    boxname: cc.Label = null;

    @property(cc.Node)
    oneNode: cc.Node = null

    @property(cc.Node)
    twoNode: cc.Node = null

    @property(cc.Node)
    fourNode: cc.Node = null

    @property([cc.Sprite])
    addflag1:cc.Sprite[] = []

    @property([cc.Sprite])
    addflag2:cc.Sprite[] = []

    @property([cc.Sprite])
    addflag3:cc.Sprite[] = []

    @property(cc.Node)
    spineNode:cc.Node = null

    @property(cc.Node)
    tipstempnode:cc.Node = null

    @property(cc.Node)
    inviteNode:cc.Node = null

    @property(cc.Node)
    getawardNode:cc.Node = null

    @property(cc.Node)
    tipsNode:cc.Node = null
    boxGroupId: number = 0;

    sharedFriends:proto.ISharedFriends[] = null

    onLoad () {
        for(let i = 0; i< this.addflag1.length; i++){
            this.addflag1[i].node.on(cc.Node.EventType.TOUCH_END, this.invite.bind(this), this)
        }
        for(let i = 0; i< this.addflag2.length; i++){
            this.addflag2[i].node.on(cc.Node.EventType.TOUCH_END, this.invite.bind(this), this)
        }
        for(let i = 0; i< this.addflag3.length; i++){
            this.addflag3[i].node.on(cc.Node.EventType.TOUCH_END, this.invite.bind(this), this)
        }

        this.tipsNode.active = false

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBengan, this, true)
        this.spineNode.on(cc.Node.EventType.TOUCH_END, this.onTouchBox, this)

        /* 领取分享奖励 */
        Net.listenProtocol(proto.Ptl.GetSharedAwardRsp, async (buffer, ptl) =>{
            let msg = proto.Msg_GetSharedAwardRsp.decode(buffer)
            cc.log("GetSharedAwardRsp (每日分享邀请信息) msg: " + JSON.stringify(msg));
            if (msg != null){
                if (msg.result == 0){
                    popRewardLayer_Ex(msg.awards)
                    let param4 = new proto.Msg_SharedGameReq()
                    Net.Send(proto.Ptl.SharedGameReq, param4)
                }
            }
        }, this);

        /* 分享列表信息 */
        Net.listenProtocol(proto.Ptl.SharedListRsp,async (buffer, ptl) =>{
            let msg = proto.Msg_SharedListRsp.decode(buffer)
            cc.log("SharedListRsp (分享列表信息) msg: " + JSON.stringify(msg));
            if (msg != null){
                this.sharedFriends = msg.sharedFriends
                this.setHead()
            }
        }, this);

        /* 分享信息 */
        Net.listenProtocol(proto.Ptl.SharedGameRsp, (buffer, ptl) =>{
            let msg = proto.Msg_SharedGameRsp.decode(buffer);
            cc.log("SharedGameRsp (分享信息) msg: " + JSON.stringify(msg));
            if(msg != null){
                Role.Instance.sharedData = msg
                this.setView()
                let param = new proto.Msg_SharedListReq()
                Net.Send(proto.Ptl.SharedListReq, param)
            }
        }, this)
    }

    onTouchBengan() {
        if(this.tipsNode.active){
            this.tipsNode.active = false
        }
        
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
    }

    onTouchBox(){
        boxtips.showTips(0, this.tipstempnode, this.boxGroupId)
    }

    start () {
        let param4 = new proto.Msg_SharedGameReq()
        Net.Send(proto.Ptl.SharedGameReq, param4)
    }

    setView(){
        //获得当前阶段的奖励
        let data = Role.Instance.sharedData
        if(!data){
            return
        }

        let cfg = tab.Data.SharedAwardTableByID.getValue(data.CurIndex)
        if(cfg){
            if(cfg.AwardType == tab.RewardType.RewardType_BoxType){
                let boxCfg = tab.Data.BoxTableByBoxID.getValue(cfg.AwardID)
                this.boxGroupId = cfg.AwardID

                let spine:sp.Skeleton = this.spineNode.getComponent(sp.Skeleton)
                if(boxCfg){
                    spine.setAnimation(0, boxCfg.BoxSpineActionName, false)
                    this.boxname.string = boxCfg.BoxName
                }
            }  
            let cnt:number = cfg.SharedFriendsCn
            
            this.oneNode.active = data.CurIndex == 1
            this.twoNode.active = data.CurIndex == 2
            this.fourNode.active = data.CurIndex == 3

            this.desc.string = cnt.toString()

            this.inviteNode.active = cfg.SharedFriendsCn > data.SharedFriendsCnt   //邀请按钮
            this.getawardNode.active = cfg.SharedFriendsCn <= data.SharedFriendsCnt
        } else {
            this.hide()
        }
    }

    /*  */
    setHead(){
        let list = Role.Instance.sharedData
        cc.log(list)

        let alcnt = Role.Instance.sharedData && Role.Instance.sharedData.SharedFriendsCnt   //当前阶段的数量
        if(this.oneNode.active){
            for(let i = 0; i < alcnt; i++){
                if(i < this.addflag1.length){
                    let friend = this.sharedFriends[i]
                    ManagerNotice.getInstance().downloadImg(friend.wechatHeadIconURl, this.addflag1[i], null, ()=>{
                        let cfg = tab.Data.ItemTableByID.getValue(friend.indexCard)
                        if(cfg){
                            this.addflag1[i].setTexture(cfg.Icon)
                            this.addflag1[i].node.scale = 1
                        }
                    })
                    this.addflag1[i].node.off(cc.Node.EventType.TOUCH_END)
                }
            }
        } else if(this.twoNode.active) {
            for(let i = 0; i < alcnt; i++) {
                if(i < this.addflag2.length){
                    let friend = this.sharedFriends[i]
                    ManagerNotice.getInstance().downloadImg(friend.wechatHeadIconURl, this.addflag2[i], null, ()=>{
                        let cfg = tab.Data.ItemTableByID.getValue(friend.indexCard)
                        if(cfg){
                            this.addflag2[i].setTexture(cfg.Icon)
                        }
                    })
                    this.addflag2[i].node.off(cc.Node.EventType.TOUCH_END)
                }
            }
        } else if(this.fourNode.active) {
            for(let i = 0; i < alcnt; i++) {
                if(i < this.addflag3.length) {
                    //this.addflag3[i].setTexture("ShareFriend/yqhy_yqcg")    //如果已邀请则换成对号的图片样式
                    let friend = this.sharedFriends[i]
                    ManagerNotice.getInstance().downloadImg(friend.wechatHeadIconURl, this.addflag3[i], null, ()=>{
                        let cfg = tab.Data.ItemTableByID.getValue(friend.indexCard)
                        if(cfg) {
                            this.addflag3[i].setTexture(cfg.Icon)
                        }
                    })
                    this.addflag3[i].node.off(cc.Node.EventType.TOUCH_END)
                }
            }
        }
    }

    /*  */
    help() {
        this.tipsNode.active = true
    }

    /*  */
    getAward(){ 
        let param = new proto.Msg_GetSharedAwardReq()
        Net.Send(proto.Ptl.GetSharedAwardReq, param)
    }

    //分享邀请好友
    invite(){
        let data = Role.Instance.RoleData
        if(!data){
            return
        }
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

    /*  */
    lookInviteList(){
        // let param = new proto.Msg_SharedListReq()
        // Net.Send(proto.Ptl.SharedListReq, param)
        showPopLayerV2("prefab/InviteFriendsList", InviteFriendsList).then((list:InviteFriendsList)=>{
            if(list)
            {
                list.setView(this.sharedFriends)
            }
        })
    }
}

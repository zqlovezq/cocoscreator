/*
 * @Descripttion: 好友主界面
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import BuyInfiniteDefenseCountPopLayer from "../Alliance/BuyInfiniteDefenseCountPopLayer";
import InvitationFightConfirm from "../Alliance/InvitationFightConfirm";
import { RequestPvePathType, SignRequestPvEPath } from "../Chat/ChatCellCommonFunc";
import { IFriendPanelData, isValidObj, kFourNumber, kNegativeOneNumber, kOneNumber, kTenNumber, kThreeNumber, kTwoNumber, kZeroNumber, sortFriendInfo } from "../Common/CommonInterface";
import RedDotManager, { IMessageResult, RedDotType } from "../Common/ReddotManager";
import Role from "../Common/Role";
import { FightLoader } from "../Fight/FightLoader";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import { showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import Waiting from "../Utils/Waiting";
import { WaitingTag } from "../Utils/WaitingTag";
import AddFriendPopLayer from "./AddFriendPopLayer";
import FriendFightInvitation from "./FriendFightInvitation";
import FriendInfoBarPfb from "./FriendInfoBarPfb";
import FriendApplyManagerPopLayer from "./FriendApplyManagerPopLayer";
import FriendSetPanel from "./FriendSetPanel";
import ManagerNewFriend from "./ManagerNewFriend";
import MainScene from "../Main/MainScene";
import { ChildPageType, FightFromWhichLayer } from "../Alliance/AllianceCommonInterface";
import BattleLayer from "../Main/BattleLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FriendPagePfb extends cc.Component {

    @property(cc.Button)
    btn_apply: cc.Button = null;

    @property(cc.Button)
    btn_add_friend: cc.Button = null;

    @property(cc.Label)
    lbl_friend_count: cc.Label = null;

    @property(FriendFightInvitation)
    node_fight_invitation: FriendFightInvitation = null;

    @property(cc.Label)
    lbl_none_tip: cc.Label = null;

    @property(cc.Node)
    list_view: cc.Node = null;

    @property(cc.Node)
    spr_friend_reddot: cc.Node = null;
    
    @property({type:cc.Prefab, displayName: "好友信息条预制件"})
    pfb_friend_infobar: cc.Prefab = null;

    @property(FriendSetPanel)
    node_friend_set_panel: FriendSetPanel = null;

    @property(cc.Node)
    node_base_point: cc.Node = null;

    private friend_list_view: InfiniteList = null;

    @property({displayName: "好友信息条高度"})
    friend_info_bar_height: number = kZeroNumber;

    private _friend_info_list: proto.IFriendInfoData[] = [];
    private _bConstructor: boolean                     = false;
    private _invitation_friend_role_id: string;

    onLoad () {
        //this.list_view.on(cc.Node.EventType.TOUCH_START,             this.onClickShrinkSupportArea,  this);
        this.node.on(cc.Node.EventType.TOUCH_START, ()=>{
            this.node_friend_set_panel.node.active = false;
        },  this);

        this.btn_add_friend.node.on("click", ()=>{
            showPopLayerV2("prefab/AddFriendPopLayer", AddFriendPopLayer).then(layer=>{
            });
        }, this);

        this.btn_apply.node.on("click", ()=>{
            showPopLayerV2("prefab/FriendApplyManagerPopLayer", FriendApplyManagerPopLayer).then(layer=>{
                layer.initData();
            });
        }, this);

        this.node_fight_invitation.node.active = false;
        this.lbl_none_tip.node.active          = false;
        this.node_friend_set_panel.node.active = false;
        this.spr_friend_reddot.active          = false;
        this.initScrollView();

        //监听"获取好友列表"消息
        Net.listenProtocol(proto.Ptl.GetFriendInfoListRsp, (buffer, ptl)=>{
            let msg = proto.Msg_GetFriendInfoListRsp.decode(buffer);
            cc.log("GetFriendInfoListRsp (获取好友列表) msg: " + JSON.stringify(msg));
            if(!msg){
                return;
            }
            
            this.setFightInvitationData(MainScene.current_friend_fight_invitation);
            this._friend_info_list = msg.friendList;
            sortFriendInfo(this._friend_info_list);
            this.refreshPage();
        }, this);

        //监听新好友申请
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewFriendApply, (param: any)=>{
            let retData = (param as IMessageResult);
            this.spr_friend_reddot.active = retData ? retData.bVisible : false;
        }, this);

        //监听"获取pve状态"消息
        Net.listenProtocol(proto.Ptl.GetPveStatusRsp, buffer=>{
            if(BattleLayer.bOnlyPveAwardReddot) return;

            if(!this.node.activeInHierarchy || !this.node.active){return;}
            
            if(SignRequestPvEPath.getInstance().getPvePath() === RequestPvePathType.NORMAL_FIGHT){
                return;
            }
            
            Waiting.Hide(WaitingTag.GetPveStatus.toString());
            let msg = proto.Msg_GetPveStatusRsp.decode(buffer)
            cc.log("GetPveStatusRsp (获取pve状态) msg: " + JSON.stringify(msg));
            if(msg) {
                let maxCount = tab.Data.GetKeyValue_ConfigTable().PveMaxCount; 
                Role.Instance.isDemonPass && (maxCount = tab.Data.GetKeyValue_ConfigTable().PveVipMaxCount); //通行证
                
                //查看剩余无限防御次数是否足够
                let leftCount = maxCount - msg.pveCount;
                leftCount > kZeroNumber && SignRequestPvEPath.getInstance().getPvePath() === RequestPvePathType.SEND_PVE_INVITATION && 
                showPopLayerV2("prefab/InvitationFightConfirm", InvitationFightConfirm).then(layer =>{
                    layer.setFightType(proto.FightType.FriendPve, this._invitation_friend_role_id);
                });

                //无限防御次数不足就要购买次数
                leftCount <= kZeroNumber && showPopLayerV2("prefab/BuyInfiniteDefenseCountPopLayer", BuyInfiniteDefenseCountPopLayer).then(layer=>{
                    layer.setData(msg);
                });
            }
        }, this);

        //监听购买pve次数成功消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyBuyPveSuccess, (param:any)=>{
            if(!this.node.activeInHierarchy || !this.node.active){return;}
            
            SignRequestPvEPath.getInstance().getPvePath() === RequestPvePathType.SEND_PVE_INVITATION && 
            showPopLayerV2("prefab/InvitationFightConfirm", InvitationFightConfirm).then(layer =>{
                layer.setFightType(proto.FightType.FriendPve, this._invitation_friend_role_id);
            });
        }, this);

        //监听接受战斗邀请响应
        Net.listenProtocol(proto.Ptl.OperatorFriendFightInvitationRsp, (buffer, ptl)=>{
            let msg = proto.Msg_OperatorFriendFightInvitationRsp.decode(buffer);
            cc.log("OperatorFriendFightInvitationRsp (接受或者拒绝好友战斗邀请) msg: " + JSON.stringify(msg));
            if(msg && msg.result === proto.Msg_OperatorFriendFightInvitationRsp.ErrorCode.Succeed){
                msg.bAgree && FightLoader.Instance.WaitingMatchChatFight(msg.type, false);
                !msg.bAgree && RedDotManager.getInstance().UpdateRedDot(RedDotType.NewFightInvitation, false, msg.type);
                this.clearFightInvitation();
                return;
            }

            proto.Msg_OperatorFriendFightInvitationRsp.ErrorCode.AlreadyCancel === msg.result     && ShowTips("FightInvitationCancel");
            proto.Msg_OperatorFriendFightInvitationRsp.ErrorCode.PveCountNotEnough === msg.result && ShowTips("InfiniteDefenseCountOver");
        }, this);

        //监听好友战斗邀请取消推送消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCleanFriendFightInvitation, (param: any)=>{
            this.clearFightInvitation();
        }, this);

        //监听"推送好友战斗邀请"消息
        Net.listenProtocol(proto.Ptl.PushInvitationFriendFight, (buffer, ptl)=>{
            let msg = proto.Msg_PushInvitationFriendFight.decode(buffer);
            cc.log("PushInvitationFriendFight (推送好友战斗邀请) msg: " + JSON.stringify(msg));
            if(msg){
                this.setFightInvitationData(msg.fightInvitation);
            }
        }, this);

        //监听传递邀请的好友roleID消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_TransmitFriendRoleID, (param: any)=>{
            this._invitation_friend_role_id = (param as string);
        }, this);

        //监听"删除好友"回应
        Net.listenProtocol(proto.Ptl.DeleteFriendRsp, (buffer, ptl)=>{
            let msg = proto.Msg_DeleteFriendRsp.decode(buffer);
            cc.log("DeleteFriendRsp (删除好友) msg: " + JSON.stringify(msg));
            if(msg && msg.result == proto.Msg_DeleteFriendRsp.ErrorCode.Succeed){
                this.deleteFriend(msg.roleID);
            }
        }, this);

        //监听"操作好友申请"消息
        Net.listenProtocol(proto.Ptl.OperatorFriendApplyRsp, (buffer, ptl)=>{
            let msg = proto.Msg_OperatorFriendApplyRsp.decode(buffer);
            cc.log("OperatorFriendApplyRsp (操作好友申请) msg: " + JSON.stringify(msg));
            if(msg && msg.result == proto.Msg_OperatorFriendApplyRsp.ErrorCode.Succeed && msg.bAgree){
                this.addNewFriend(msg.newFriendInfo);
                return;
            }
        }, this);

        //监听点击好友弹出模块消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyOpenFriendInfo, (param: any)=>{
            let retData = (param as IFriendPanelData);
            if(retData){
                this.node_friend_set_panel.node.active = true;
                this.setFriendManagerPanel(retData);
            }
        }, this);

        //监听"变更好友消息【添加和删除都要处理】服务器下发的"消息
        Net.listenProtocol(proto.Ptl.ChangeFriendInfo, (buffer, ptl)=>{
            let msg = proto.Msg_ChangeFriendInfo.decode(buffer);
            cc.log("ChangeFriendInfo (变更好友消息) msg: " + JSON.stringify(msg));
            if(msg){
                msg.bDelete  && this.deleteFriend(msg.friendInfo.baseInfo.roleID);
                !msg.bDelete && this.addNewFriend(msg.friendInfo);
                //msg.bDelete  && (this.node_friend_set_panel.node.active = false);
            }
        }, this);

        //检测新好友申请
        RedDotManager.getInstance().CheckRedDot(RedDotType.NewFriendApply);
    }

    start () {}

    /** 
     * Description: 初始化滚动列表
     */
    private initScrollView(){
        this.friend_list_view = this.list_view.getComponent(InfiniteList);
        //初始化scrollView接口
        this.friend_list_view.Init({
            getCellNumber:    this.getCellCount.bind(this),
            getCellSize:      this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView:      this.getCellView.bind(this),
            getCellData:      this.getCellIdx.bind(this),
        });

        this.friend_list_view.node.on("scroll-began", this.onScrollStart, this);
        this.friend_list_view.node.on("touch-up",     this.onScrollStart, this);
    }
    
    /* 清除页面数据
     */
    public destroyPageData(){
        if(!this._bConstructor){return;}
        
        this._bConstructor     = false;
        this._friend_info_list = [];
        this.friend_list_view.Reload(true, true);
        ManagerNewFriend.getInstance().destroy();
        FightFromWhichLayer.getInstance().ChildPageState = ChildPageType.NonePage;
    }

    public initData(){
        this._bConstructor = true;
        FightFromWhichLayer.getInstance().ChildPageState = ChildPageType.FriendPage;
        let msg = new proto.Msg_GetFriendInfoListReq();
        Net.Send(proto.Ptl.GetFriendInfoListReq, msg);
    }
    
    /* 刷新界面
     */
     private refreshPage(){
        let friendListLen = this._friend_info_list ? this._friend_info_list.length : kZeroNumber;
        let bEmpty        = friendListLen <= kZeroNumber;
        this.setFriendCount(friendListLen);
        this.friend_list_view.Reload(true, bEmpty);
        !bEmpty && this.friend_list_view.scrollToTop(0.1);
    }
    
    /* 删除好友
     */
    private deleteFriend(roleID: string){
        let idx = this._friend_info_list.findIndex(tmpObj=>tmpObj.baseInfo.roleID === roleID);
        if(idx != kNegativeOneNumber){
            this._friend_info_list.splice(idx, kOneNumber);
            this.refreshPage();
        }
    }

    /* 添加新好友
     */
    private addNewFriend(newData: proto.IFriendInfoData){
        if(this.checkRepeatFriend(newData)){
            return;
        }
        
        this._friend_info_list.push(newData);
        ManagerNewFriend.getInstance().insertNewFriend(newData.baseInfo.roleID);
        sortFriendInfo(this._friend_info_list);
        this.refreshPage();
    }

    /* 好友去重
     */
    private checkRepeatFriend(newFriendData: proto.IFriendInfoData){
        if(!newFriendData || !newFriendData.baseInfo){
            return false;
        }

        let idx = this._friend_info_list.findIndex(tmpObj=>tmpObj.baseInfo.roleID === newFriendData.baseInfo.roleID);
        return idx != kNegativeOneNumber;
    }

    /* 设置好友数
     */
    private setFriendCount(cnt: number){
        this.lbl_friend_count.string = `${cnt}/${tab.Data.GetKeyValue_ConfigTable().MaxFriendCount}`;
        this.lbl_none_tip.node.active = cnt <= kZeroNumber;
    }
    
    /* 设置战斗邀请数据模块
     */
    private setFightInvitationData(data: proto.IFriendFightInvitationData){
        if(this.node_fight_invitation.node.active){
            return;
        }
        
        let bValid = isValidObj(data);
        this.node_fight_invitation.node.active = bValid;
        bValid && this.node_fight_invitation.setFriendInvitation(data);
    }

    /* 设置好友管理面板
     */
    private setFriendManagerPanel(data: IFriendPanelData){
        let selfPosX               = this.node_friend_set_panel.node.getPosition().x
        let friendBarNodeWorldPos  = data.selfNode.convertToWorldSpaceAR(cc.Vec3.ZERO);
        let adjustPosY             = this.node.convertToNodeSpaceAR(friendBarNodeWorldPos).y;
        let nodeBasePointWorldPosY = this.node_base_point.convertToWorldSpaceAR(cc.Vec3.ZERO).y;
        if(friendBarNodeWorldPos.y > nodeBasePointWorldPosY){
            //this.node_friend_set_panel.node.setAnchorPoint(cc.v2(0.5, 1));
            adjustPosY -= (this.friend_info_bar_height);
        } else {
            //this.node_friend_set_panel.node.setAnchorPoint(cc.v2(0.5, 0.5));
            //adjustPosY -= this.friend_info_bar_height + 50;
            adjustPosY += (this.friend_info_bar_height * 
                            (this.node_friend_set_panel.getMulti4TimesHeight() ? kFourNumber : kTwoNumber)) - kTenNumber;
        }
        this.node_friend_set_panel.node.setPosition(selfPosX, adjustPosY);
        this.node_friend_set_panel.initData(data.friendID, data.name, data.bOnline);
    }
    
    /* 清空战斗邀请数据
     */
    private clearFightInvitation(){
        this.node_fight_invitation.node.active    = false;
        MainScene.current_friend_fight_invitation = null;
    }
    
    /* 滚动开始事件
     */
    private onScrollStart(){
        this.node_friend_set_panel.node.active = false;
    }
    
    /* 获取单元格真正的下标
     * @param idx  单元格下标
     */
     private getRightCellIndex(idx: number){
        return this.getCellCount() - kOneNumber - idx;
    }
    
    /* 获取单元格数量
     */
    private getCellCount(){
        return this._friend_info_list.length;
    }

    /** 
     * Description: 获取单元格高度
     * @param idx   单元格下标
     */
    private getCellHeight(idx: number){
        return this.friend_info_bar_height;
    }

    /* 获取单元格定义
     * @param idx  单元格下标
     */
    private getCellIdentifer(idx: number): string{
        /*if(idx >= this._friend_info_list.length){
            return `null_${idx}`;
        }
        return `friend_cell:${this._friend_info_list[idx].baseInfo.roleID}_${idx}`;*/
        return "FriendCell";
    }

    /* 获取单元格真正下标
     * @param idx 单元格下标
     */
    private getCellIdx(idx: number){
        //idx = this.getRightCellIndex(idx);
        if(idx >= this._friend_info_list.length){
            return null;
        }
        return this._friend_info_list[idx];
    }
    
    /* 获取单元格真正下标
     * @param idx  单元格下标
     */
    private getCellView(idx: number): InfiniteCell{
        if(idx < kZeroNumber || idx >= this._friend_info_list.length){
            return null;
        }

        let cell = cc.instantiate(this.pfb_friend_infobar).getComponent(FriendInfoBarPfb);
        return cell;
    }
}

/*
 * @Descripttion: 聊天主界面
 */

import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { checkStringIsAllSpace } from "../Alliance/AllianceCommonInterface";
import BuyInfiniteDefenseCountPopLayer from "../Alliance/BuyInfiniteDefenseCountPopLayer";
import InvitationFightConfirm from "../Alliance/InvitationFightConfirm";
import { createAlliancePvpDetailModel, createAlliancePvpInvitationModel, createEmotionMsgModel, createNormalTxtMsgModel, createShareCardsModel, RequestPvePathType, SignRequestPvEPath} from "../Chat/ChatCellCommonFunc";
import {checkFunctionIsOpen, CheckFunctionIsOpenWithTip, isValidObj, k255, kNegativeOneNumber, kNoneString, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import RedDotManager, { IMessageResult, RedDotType } from "../Common/ReddotManager";
import Role from "../Common/Role";
import { getCutDownTimesString } from "../Common/SeasonRankCommonFunc";
import FightEmojiSelector from "../Fight/FightEmojiSelector";
import { FightLoader } from "../Fight/FightLoader";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import BattleLayer from "../Main/BattleLayer";
import {getServerUtcTime, setGray, showPopLayerV2, ShowTips, ShowTipsOfCustomString } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import Waiting from "../Utils/Waiting";
import { WaitingTag } from "../Utils/WaitingTag";
import { CheckHaveBannedCard, GenMapKey, GetChatMsgCacheList, GetUnreadMsgCountOfChat, ResetChatInfo, ResetUnreadMsgOfChat } from "./ChatCommonInterface";
import ChatPrivateObjPfb from "./ChatPrivateObjPfb";
import ManagerLocalChatMsg from "./ManagerLocalChatMsg";
import ManagerPrivateChatMsg, { IPrivateObjData } from "./ManagerPrivateChatMsg";

/**
 * 从哪个地方过来的
 */
enum FromWhereType{
    DirectEnterChatPage = 1,
    JumpFromFriend = 2,
};

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChatMainPage extends PopLayer {

    @property(cc.Label)
    lbl_title: cc.Label = null;

    @property(cc.Toggle)
    toggle_world: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_private: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_alliance: cc.Toggle = null;

    @property(cc.Node)
    node_private_red_tip: cc.Node = null;

    @property(InfiniteList)
    list_view: InfiniteList = null;

    @property(InfiniteList)
    private_obj_view: InfiniteList = null;

    @property(cc.Button)
    btn_back: cc.Button = null;

    @property(cc.Node)
    node_expand_area: cc.Node = null;

    @property(cc.Node)
    node_chat_area: cc.Node = null;

    @property(cc.Button)
    btn_open: cc.Button = null;

    @property(cc.Button)
    btn_emotion: cc.Button = null;

    @property(cc.EditBox)
    editbox_chat: cc.EditBox = null;

    @property(cc.Button)
    btn_friendly_match: cc.Button = null;

    @property(cc.Sprite)
    spr_friendly_match_btn_bg: cc.Sprite = null;

    @property(cc.Node)
    node_can_match: cc.Node = null;

    @property(cc.Button)
    btn_infiniteDefense: cc.Button = null;

    @property(cc.Sprite)
    spr_defense_btn_bg: cc.Sprite = null;

    @property(cc.Node)
    node_can_defense: cc.Node = null;

    @property(cc.Button)
    btn_send: cc.Button = null;

    @property(cc.Label)
    lbl_send: cc.Label = null;

    @property(cc.Node)
    node_cd_layout: cc.Node = null;

    @property(cc.Label)
    lbl_cd: cc.Label = null;

    @property(cc.Sprite)
    spr_send_bg: cc.Sprite = null;

    @property(cc.Label)
    lbl_loading: cc.Label = null;

    @property(cc.Node)
    node_unread_msg: cc.Node = null;
    
    @property(cc.Label)
    lbl_unread_msg: cc.Label = null;

    @property(cc.Label)
    lbl_no_chat_msg_tip: cc.Label = null;

    @property(cc.Label)
    lbl_no_private_obj: cc.Label = null;

    @property(FightEmojiSelector)
    node_emoji_selector: FightEmojiSelector = null;
    
    @property({type:cc.Prefab, displayName: "自身文本聊天消息预制件"})
    pfb_self_txt_msg: cc.Prefab = null;

    @property({type:cc.Prefab, displayName: "自身文本聊天消息预制件【不带头像】"})
    pfb_self_txt_no_head_msg: cc.Prefab = null;

    @property({type:cc.Prefab, displayName: "他人文本聊天消息预制件【不带头像】"})
    pfb_other_txt_no_head_msg: cc.Prefab = null;

    @property({type:cc.Prefab, displayName: "他人文本聊天消息预制件"})
    pfb_other_txt_msg: cc.Prefab = null;

    @property({type:cc.Prefab, displayName: "自身战斗记录消息预制件"})
    pfb_self_fight_record_msg: cc.Prefab = null;

    @property({type:cc.Prefab, displayName: "他人战斗记录消息预制件"})
    pfb_other_fight_record_msg: cc.Prefab = null;

    @property({type:cc.Prefab, displayName: "自身表情消息预制件"})
    pfb_self_emotion_msg: cc.Prefab = null;

    @property({type:cc.Prefab, displayName: "他人表情消息预制件"})
    pfb_other_emotion_msg: cc.Prefab = null;

    @property({type:cc.Prefab, displayName: "战斗邀请消息预制件"})
    pfb_fight_invitation_msg: cc.Prefab = null;

    @property({type:cc.Prefab, displayName: "自身分享卡组消息预制件"})
    pfb_self_share_cards_msg: cc.Prefab = null;

    @property({type:cc.Prefab, displayName: "他人分享卡组消息预制件"})
    pfb_other_share_cards_msg: cc.Prefab = null;

    @property({ displayName: "私聊对象预制件", type: cc.Prefab })
    pfb_private_obj: cc.Prefab = null;

    @property({displayName: "私聊对象预制件高度"})
    private_obj_height: number = 105;

    @property({displayName: "战斗记录模块的高度"})
    fight_record_height: number = 220;

    @property({displayName: "战斗邀请模块的高度"})
    fight_invitation_height: number = 220;

    @property({displayName: "自身表情模块的高度"})
    self_emotion_height: number = 150;

    @property({displayName: "对方表情模块的高度"})
    other_emotion_height: number = 150;

    @property({displayName: "分享卡组模块的高度"})
    share_cards_height: number = 150;

    private _bExpandSupportArea: boolean  = false;
    private _bLoading: boolean            = false;
    private _bInBottom: boolean           = true;
    private _from_where: FromWhereType    = FromWhereType.DirectEnterChatPage;
    private _private_obj: IPrivateObjData = null;
    private _msg_cell_map: Map<proto.GlobalMessageType, Function> = new Map<proto.GlobalMessageType, Function>();

    onLoad () {
        this._initEvent();
        this._initMsgMap();
        this._initListView();

        //监听支援区域缩回动画结束帧事件
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShrinkSupportAreaEnd, (param: any)=>{
            if(!this.node.active || !this.node.activeInHierarchy){return;}
            this.dealShrinkEvent();
        }, this);

        //监听刷新聊天列表事件
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateChatViewList, (param: any)=>{
            let bReload = (param as boolean);
            this.refreshViewList(bReload, this._bInBottom);
            this.setUnreadMsgVisible();
        }, this);

        //监听切换私聊对象事件
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifySelectPrivateObjName, (param: any)=>{
            let privateObjData = (param as IPrivateObjData);
            this.switchPrivateObj(privateObjData);
            this.refreshTitle(privateObjData.name);
        }, this);

        //监听接受战斗邀请响应
        Net.listenProtocol(proto.Ptl.AllianceFightAcceptRsp, (buffer, ptl)=>{
            let msg = proto.Msg_AllianceFightAcceptRsp.decode(buffer);
            cc.log("AllianceFightAcceptRsp(监听接受战斗邀请响应) : msg " + JSON.stringify(msg));
            if(msg && msg.result === proto.Msg_AllianceFightAcceptRsp.ErrorCode.Succeed){
                FightLoader.Instance.WaitingMatchChatFight(msg.type);
                return;
            }

            proto.Msg_AllianceFightAcceptRsp.ErrorCode.OverTime === msg.result          && ShowTips("FightInvitationOverTime");
            proto.Msg_AllianceFightAcceptRsp.ErrorCode.PveCountNotEnough === msg.result && ShowTips("CooperationFightNotEnough");
            proto.Msg_AllianceFightAcceptRsp.ErrorCode.BannedCard === msg.result        && ShowTips("HaveBannedCard");
        }, this);

        //监听查询私聊对象在线状态消息
        Net.listenProtocol(proto.Ptl.GetFriendOnlineStateListRsp, (buffer, ptl)=>{
            let msg = proto.Msg_GetFriendOnlineStateListRsp.decode(buffer);
            cc.log("GetFriendOnlineStateListRsp(监听查询私聊对象在线状态消息) : msg " + JSON.stringify(msg));
            if(msg){
                ManagerPrivateChatMsg.getInstance().initPrivateObjState(msg.friendList);
            }
        }, this);

        //监听私聊新消息红点
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdatePrivateRedTip, (param: any)=>{
            let bVisible = ManagerPrivateChatMsg.getInstance().findPrivateObjRedTip();
            this.node_private_red_tip.active = bVisible;
        }, this);

        //监听购买pve次数成功消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyBuyPveSuccess, (param:any)=>{
            if(!this.node.activeInHierarchy || !this.node.active){return;}
            
            if(SignRequestPvEPath.getInstance().getPvePath() === RequestPvePathType.SEND_PVE_INVITATION){
                showPopLayerV2("prefab/InvitationFightConfirm", InvitationFightConfirm).then(layer =>{
                    let fightType = proto.FightType.AlliancePvE;
                    (proto.ChatChannelType.WorldChannel == ManagerLocalChatMsg.CurrentChannel) && 
                        (fightType = proto.FightType.WorldChannelPvE);
                    layer.setFightType(fightType);
                });
                
            }else if(SignRequestPvEPath.getInstance().getPvePath() === RequestPvePathType.RECEIVE_PVE_INVITATION){
                this.sendReceivePvEInvitation();
            }
        }, this);

        //监听发送战斗邀请响应消息
        Net.listenProtocol(proto.Ptl.GetPveStatusRsp, buffer=>{
            if(BattleLayer.bOnlyPveAwardReddot){
                return;
            }

            if(!this.node.activeInHierarchy || !this.node.active){
                return;
            }

            if(SignRequestPvEPath.getInstance().getPvePath() === RequestPvePathType.NORMAL_FIGHT){
                return;
            }
            
            Waiting.Hide(WaitingTag.GetPveStatus.toString());
            let msg = proto.Msg_GetPveStatusRsp.decode(buffer)
            cc.log("GetPveStatusRsp(监听发送战斗邀请响应消息) : msg " + JSON.stringify(msg));
            if(msg) {
                let maxCount = tab.Data.GetKeyValue_ConfigTable().PveMaxCount; 
                if(Role.Instance.isDemonPass) {
                    //通行证
                    maxCount = tab.Data.GetKeyValue_ConfigTable().PveVipMaxCount;
                }
                
                let leftCount = maxCount - msg.pveCount;
                if(leftCount > kZeroNumber){
                    if(SignRequestPvEPath.getInstance().getPvePath() === RequestPvePathType.SEND_PVE_INVITATION){
                        showPopLayerV2("prefab/InvitationFightConfirm", InvitationFightConfirm).then(layer =>{
                            let fightType = proto.ChatChannelType.WorldChannel == ManagerLocalChatMsg.CurrentChannel ? 
                                            proto.FightType.WorldChannelPvE : proto.FightType.AlliancePvE;
                            layer.setFightType(fightType);
                        });

                    }else if(SignRequestPvEPath.getInstance().getPvePath() === RequestPvePathType.RECEIVE_PVE_INVITATION){
                        this.sendReceivePvEInvitation();
                    }
                }else{
                    showPopLayerV2("prefab/BuyInfiniteDefenseCountPopLayer", BuyInfiniteDefenseCountPopLayer).then(launcher=>{
                        launcher.setData(msg)
                    });
                }
            }
        }, this);

        //监听发送文本信息回应
        Net.listenProtocol(proto.Ptl.ChatSendMessageRsp, (buffer, ptl)=>{
            let msg = proto.Msg_ChatSendMessageRsp.decode(buffer);
            cc.log("ChatSendMessageRsp(监听发送文本信息回应) : msg " + JSON.stringify(msg));
            if(!msg){
                return;
            }

            if(proto.Msg_ChatSendMessageRsp.ErrorCode.Succeed === msg.result){
                this.setChatCD(msg.cd);
                this.refreshChatCD();
                this.checkJumpFromFriend2Chat();
                return;
            }

            proto.Msg_ChatSendMessageRsp.ErrorCode.SensitiveWordError === msg.result && ShowTips("HaveSensitiveWord");
            proto.Msg_ChatSendMessageRsp.ErrorCode.CD === msg.result                 && ShowTips("ChatCD");
            proto.Msg_ChatSendMessageRsp.ErrorCode.NoAlliance === msg.result         && ShowTips("NoAllianceTip");
            proto.Msg_ChatSendMessageRsp.ErrorCode.NotFriend === msg.result          && ShowTips("NoFriendOfChatTip");
        }, this);

        //监听发送表情信息回应
        Net.listenProtocol(proto.Ptl.ChatSendEmojiRsp, (buffer, ptl)=>{
            let msg = proto.Msg_ChatSendEmojiRsp.decode(buffer);
            cc.log("ChatSendEmojiRsp(监听发送表情信息回应) : msg " + JSON.stringify(msg));
            if(msg && msg.result === proto.Msg_ChatSendEmojiRsp.ErrorCode.Succeed){
                this.setChatCD(msg.cd);
                this.refreshChatCD();
                this.checkJumpFromFriend2Chat();
                this.node_emoji_selector.node.active = false;
                return;
            }

            proto.Msg_ChatSendEmojiRsp.ErrorCode.EmojiNotExist === msg.result && ShowTips("EmotionIDNotExist");
            proto.Msg_ChatSendEmojiRsp.ErrorCode.CD === msg.result            && ShowTips("ChatCD");
            proto.Msg_ChatSendEmojiRsp.ErrorCode.NoAlliance === msg.result    && ShowTips("NoAllianceTip");
            proto.Msg_ChatSendEmojiRsp.ErrorCode.NotFriend === msg.result     && ShowTips("NoFriendOfChatTip");
        }, this);

        //监听刷新私聊对象列表消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdatePrivateChatPlayerList, (param: any)=>{
            this.refreshPrivateObjList();
        }, this);

        this.node_unread_msg.active  = false;
        this.node_expand_area.active = false;
        this.node_private_red_tip.active = ManagerPrivateChatMsg.getInstance().findPrivateObjRedTip();
        this.node_emoji_selector.setSilentVisible(false);
        this.setUnreadMsgVisible();
        this.sendOnlinePrivateObjInfo();
        this.refreshChatCD();
    }

    start () {}

    onDestroy(){
        this._msg_cell_map.clear();
        this.unschedule(this.refreshCDCutDownTime);
    }

    public setVisible(bVisible: boolean){
        super.setVisible(bVisible);
        ResetChatInfo();
    }

    /* 初始化各种点击事件
     */
    private _initEvent(){
        // this.list_view.on(cc.Node.EventType.TOUCH_START,             this.onClickShrinkSupportArea,  this);
        //this.node.on(cc.Node.EventType.TOUCH_START, this.onClickShrinkSupportArea,  this);
        this.toggle_world.node.on("toggle",         this.onClickWorldChannel,       this);
        this.toggle_alliance.node.on("toggle",      this.onClickAllianceChannel,    this);
        this.toggle_private.node.on("toggle",       this.onClickPrivateChannel,     this);
        this.btn_open.node.on("click",              this.onClickExpandSupportPage,  this);
        this.btn_emotion.node.on("click",           this.onClickEmotionSelector,    this);
        this.btn_send.node.on("click",              this.onClickSendNormalTextMsg,  this);
        this.btn_infiniteDefense.node.on("click",   this.onClickInfiniteDefense,    this);
        this.btn_friendly_match.node.on("click",    this.onClickFriendlyMatch,      this);
        this.btn_back.node.on("click",              this.onClickBack,               this);

        this.list_view.node.on("scroll-ended", ()=>{
            let offset      = this.list_view.getScrollOffset();
            let contentSize = this.list_view.getContent().height;
            let nodeSize    = this.list_view.node.height;
            const kFactor   = 25;
            this._bInBottom = (nodeSize + offset.y + kFactor) >= contentSize;
            if(this._bInBottom){
                //到底部了
                this._bInBottom = true;
                this.setUnreadMsgVisible();
            }
        }, this);

        //设置表情的回调函数
        this.node_emoji_selector.setEmotionCallback(emotionID =>{
            let msg          = new proto.Msg_ChatSendEmojiReq();
            msg.emojiID      = emotionID;
            msg.channel      = ManagerLocalChatMsg.CurrentChannel;
            msg.receiverUUID = isValidObj(this._private_obj) ? this._private_obj.uuid : kNoneString;
            Net.Send(proto.Ptl.ChatSendEmojiReq, msg);
        });
    }

    /* 初始化listView事件
     */
    private _initListView(){
        //初始化scrollView接口
        this.list_view.Init({
            getCellNumber:    this.getCellCount.bind(this),
            getCellSize:      this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView:      this.getCellView.bind(this),
            getCellData:      this.getCellData.bind(this),
        });

        this.private_obj_view.Init({
            getCellNumber:    this.getPrivateObjCellCount.bind(this),
            getCellSize:      this.getPrivateObjCellHeight.bind(this),
            getCellIdentifer: this.getPrivateObjCellIdentifer.bind(this),
            getCellView:      this.getPrivateObjCellView.bind(this),
            getCellData:      this.getPrivateObjCellData.bind(this),
        });
    }

    /* 初始化聊天消息类型映射到对应回调函数
     */
    private _initMsgMap(){
        let self = this;
        //文本聊天消息
        this._msg_cell_map.set(proto.GlobalMessageType.MemberNormalTxtMsg, (msg: proto.IChatMsgData, idx: number)=>{
            let key = proto.ChatChannelType.PrivateChannel == ManagerLocalChatMsg.CurrentChannel ? 
                        GenMapKey(this._private_obj.uuid) : kNoneString;
            return createNormalTxtMsgModel(msg, [self.pfb_other_txt_msg, self.pfb_self_txt_msg, 
                                                    self.pfb_other_txt_no_head_msg, self.pfb_self_txt_no_head_msg], idx, key);
        });

        //表情聊天消息
        this._msg_cell_map.set(proto.GlobalMessageType.MemberEmotionMsg, (msg: proto.IChatMsgData, idx: number)=>{
            return createEmotionMsgModel(msg, [self.pfb_other_emotion_msg, self.pfb_self_emotion_msg], idx);
        });

        //友谊赛战斗记录消息
        this._msg_cell_map.set(proto.GlobalMessageType.MemberFriendlyMatchInviteMsg, (msg: proto.IChatMsgData, idx: number)=>{
            return createAlliancePvpDetailModel(msg, [self.pfb_other_fight_record_msg, self.pfb_self_fight_record_msg], idx);
        });

        //合作邀请战斗记录消息
        this._msg_cell_map.set(proto.GlobalMessageType.MemberInfiniteDefenseInviteMsg, (msg: proto.IChatMsgData, idx: number)=>{
            return createAlliancePvpDetailModel(msg, [self.pfb_other_fight_record_msg, self.pfb_self_fight_record_msg], idx);
        });

        //战斗邀请记录消息
        this._msg_cell_map.set(proto.GlobalMessageType.AlliancePvpInvitation, (msg: proto.IChatMsgData, idx: number)=>{
            return createAlliancePvpInvitationModel(msg, [self.pfb_fight_invitation_msg], idx);
        });

        //分享卡组消息
        this._msg_cell_map.set(proto.GlobalMessageType.ShareSelfCardGroup, (msg: proto.IChatMsgData, idx: number)=>{
            return createShareCardsModel(msg, [self.pfb_other_share_cards_msg, self.pfb_self_share_cards_msg], idx);
        });
    }
    
    public initData(channel: proto.ChatChannelType){
        this._from_where = FromWhereType.DirectEnterChatPage;
        this._private_obj = null;

        this.switchChatChannelToggle(channel);
        this.toggle_world.isChecked    && this.onClickWorldChannel(this.toggle_world);
        this.toggle_alliance.isChecked && this.onClickAllianceChannel(this.toggle_alliance);
        this.toggle_private.isChecked  && this.onClickPrivateChannel(this.toggle_private);
    }

    public initPrivateObj(privateObjData: IPrivateObjData){
        this._from_where = FromWhereType.JumpFromFriend;
        this.switchChatChannelToggle(proto.ChatChannelType.PrivateChannel);
        this.switchPrivateObj(privateObjData);
        this.refreshTitle(privateObjData.name);
    }

    /* 开始加载
     */
    private startLoading(){
        this.scheduleOnce(()=>{
            this._bLoading = true;
            this.refreshMessage();
            this.lbl_loading.node.opacity = kZeroNumber;
        }, kOneNumber);
    }

    /* 设置未读消息模块的可见性
     */
    private setUnreadMsgVisible(){
        this.setUnreadMsgCount();
        this._bInBottom && ResetUnreadMsgOfChat(this._private_obj);
    }
    
    /* 设置未读消息数量
     */
    private setUnreadMsgCount(){
        let msgCount = GetUnreadMsgCountOfChat(this._private_obj);
        this.lbl_unread_msg.string  = `${msgCount}`;
        this.node_unread_msg.active = !this._bInBottom && msgCount > kZeroNumber;
    }

    /* 设置聊天CD时间
     */
    private setChatCD(cd: number){
        proto.ChatChannelType.WorldChannel == ManagerLocalChatMsg.CurrentChannel && (ManagerLocalChatMsg.ChatCD = cd);
    }

    /* 刷新消息
     */
    private refreshMessage(){
        let msgCacheList = GetChatMsgCacheList();
        if(!isValidObj(msgCacheList) || msgCacheList.length < kOneNumber){
            this.lbl_no_chat_msg_tip.node.opacity = k255;
            this.list_view.Reload(true, true);
            return;
        }
        
        this.lbl_no_chat_msg_tip.node.opacity = kZeroNumber;
        this.refreshViewList(true, true);
        this._bInBottom = true;
        this.setUnreadMsgVisible();
    }

    /* 刷新视图列表
     * @param bReload 是否重新加载
     * @param bAutoScrollBottom 是否自动滚到底部
     */
    private refreshViewList(bReload: boolean, bAutoScrollBottom: boolean){
        let msgCacheList = GetChatMsgCacheList();
        let bHaveMsg = isValidObj(msgCacheList) ? msgCacheList.length > kZeroNumber : false;
        this.lbl_no_chat_msg_tip.node.opacity = !bHaveMsg ? k255 : kZeroNumber;

        if(bReload){
            this.list_view.Reload(true, true);
            bAutoScrollBottom && this.list_view.scrollToBottom(0.1);
            return;
        }
        
        this.list_view.Refresh();
    }

    /* 刷新私聊对象列表
     */
    private refreshPrivateObjList(){
        let bHaveMsg = ManagerPrivateChatMsg.getInstance().getPrivateObjCache().length > kZeroNumber;
        this.lbl_no_private_obj.node.opacity = !bHaveMsg ? k255 : kZeroNumber;
        this.private_obj_view.Reload(true, true);
        this.private_obj_view.scrollToTop(0.1);
    }

    /* 处理支援区域缩回动画结束帧事件
     */
    private dealShrinkEvent(){
        this.node_expand_area.active = false;
    }
    
    /* 刷新顶部聊天标题
     */
    private refreshTitle(title: string){
        this.lbl_title.string = title;
    }

    /* 请求获取私聊对象在线数据
     */
    private sendOnlinePrivateObjInfo(){
        let msg = new proto.Msg_GetFriendOnlineStateListReq();
        Net.Send(proto.Ptl.GetFriendOnlineStateListReq, msg);
    }
    
    /* 发送接受无限防御邀请消息 */
     private sendReceivePvEInvitation(){
        let msg     = new proto.Msg_AllianceFightAcceptReq();
        msg.type    = proto.ChatChannelType.WorldChannel == ManagerLocalChatMsg.CurrentChannel ?
                         proto.FightType.WorldChannelPvE : proto.FightType.AlliancePvE;
        msg.roomID  = SignRequestPvEPath.getInstance().getSaveRoomID();
        msg.channel = ManagerLocalChatMsg.CurrentChannel;
        Net.Send(proto.Ptl.AllianceFightAcceptReq, msg);
    }	

    /* 切换聊天频道
     */
    private switchChannel(channel: proto.ChatChannelType){
        ManagerLocalChatMsg.CurrentChannel      = channel;
        ManagerPrivateChatMsg.CurrentPrivateObj = kNoneString;
        this.btn_open.node.active         = proto.ChatChannelType.PrivateChannel !== ManagerLocalChatMsg.CurrentChannel;
        this.list_view.node.active        = ManagerLocalChatMsg.CurrentChannel == proto.ChatChannelType.WorldChannel || 
                                            ManagerLocalChatMsg.CurrentChannel == proto.ChatChannelType.AllianceChannel;
        this.private_obj_view.node.active = !this.list_view.node.active;
        this.checkFightAreaOpen();
        this.refreshChatCD();
    }

    /* 切换私聊对象
     */
    private switchPrivateObj(privateObj: IPrivateObjData){
        ManagerLocalChatMsg.CurrentChannel      = proto.ChatChannelType.PrivateChannel;
        ManagerPrivateChatMsg.CurrentPrivateObj = privateObj.uuid;
        ManagerPrivateChatMsg.getInstance().addNewPrivateObj(privateObj);
        this._private_obj                       = privateObj;
        this.list_view.node.active              = true;
        this.private_obj_view.node.active       = false;
        this.btn_open.node.active               = false;
        this.refreshMessage();
    }

    /* 切换聊天频道
     */
    private switchChatChannelToggle(channel: proto.ChatChannelType){
        this.toggle_world.isChecked    = proto.ChatChannelType.WorldChannel    == channel;
        this.toggle_alliance.isChecked = proto.ChatChannelType.AllianceChannel == channel;
        this.toggle_private.isChecked  = proto.ChatChannelType.PrivateChannel  == channel;
    }

    /* 设置发送按钮状态
     */
    private setSendBtnState(bEnable: boolean){
        setGray(this.spr_send_bg, !bEnable);
        this.node_cd_layout.active = !bEnable;
        this.lbl_send.node.opacity = bEnable ? k255 : kZeroNumber;
    }

    /* 刷新聊天CD
     */
    private refreshChatCD(){
        if(!this.checkCDIsOver()){
            this.setSendBtnState(false);
            this.refreshCDCutDownTime();
            this.unschedule(this.refreshCDCutDownTime);
            this.schedule(this.refreshCDCutDownTime, kOneNumber);
            return;
        }

        this.setSendBtnState(true);
    }

    /* 刷新聊天CD倒计时
     */
    private refreshCDCutDownTime(){
        let diff = ManagerLocalChatMsg.ChatCD - getServerUtcTime();
        if(diff <= kZeroNumber){
            this.setSendBtnState(true);
            this.unschedule(this.refreshCDCutDownTime);
            return;
        }
        
        this.lbl_cd.string = `${diff}`;
    }

    /* 检测聊天CD是否结束了
     */
    private checkCDIsOver(){
        if(proto.ChatChannelType.WorldChannel == ManagerLocalChatMsg.CurrentChannel){
            let diff = ManagerLocalChatMsg.ChatCD - getServerUtcTime();
            if(diff > kZeroNumber){
                return false;
            }
        }

        return true;
    }

    /* 检测是否是从好友界面跳过来的
     */
    private checkJumpFromFriend2Chat(){
        if(proto.ChatChannelType.PrivateChannel == ManagerLocalChatMsg.CurrentChannel && 
            FromWhereType.JumpFromFriend == this._from_where){
            ManagerPrivateChatMsg.getInstance().addNewPrivateObj(this._private_obj);
        }
    }
    
    /* 检测是否打开了战斗邀请模块
     */
    private checkFightAreaOpen(){
        if(this._bExpandSupportArea){
            this.onClickShrinkSupportArea(null);
        }
    }

    /* 检测是否达到相关开启条件
     */
    private checkOpenConditionArrive(functionName: number){
        if(proto.ChatChannelType.WorldChannel !== ManagerLocalChatMsg.CurrentChannel){
            return true;
        }
        
        let retVal  = CheckFunctionIsOpenWithTip(functionName);
        let bArrive = retVal.bArrive;
        let tips    = retVal.tip;
        if(!bArrive){
            ShowTipsOfCustomString(tips);
        }
        return bArrive;
    }

    /* 检测是否在私聊对象选择界面并且未选择私聊对象
     */
    private checkIsSelectChatPrivateObj(){
        if(proto.ChatChannelType.PrivateChannel == ManagerLocalChatMsg.CurrentChannel){
            if(!isValidObj(ManagerPrivateChatMsg.CurrentPrivateObj)){
                ShowTips("UnSelectChatPrivateObj");
                return false;
            }
        }

        return true;
    }

    /* 点击世界频道
     */
    private onClickWorldChannel(node: cc.Toggle){
        if(proto.ChatChannelType.WorldChannel == ManagerLocalChatMsg.CurrentChannel){
            return;
        }
        
        this.switchChannel(proto.ChatChannelType.WorldChannel);
        this.refreshTitle(tab.Data.GetKeyValue_ConfigTable().WorldChatChannelTip);
        this.refreshMessage();
    }

    /* 点击私聊频道
     */
    private onClickPrivateChannel(node: cc.Toggle){
        if(proto.ChatChannelType.PrivateChannel == ManagerLocalChatMsg.CurrentChannel){
            return;
        }
        
        this.switchChannel(proto.ChatChannelType.PrivateChannel);
        this.refreshTitle(tab.Data.GetKeyValue_ConfigTable().PrivateChatChannelTip);
        this.refreshPrivateObjList();
    }

    /* 点击公会频道
     */
    private onClickAllianceChannel(node: cc.Toggle){
        if(proto.ChatChannelType.AllianceChannel == ManagerLocalChatMsg.CurrentChannel){
            return;
        }
        
        this.switchChannel(proto.ChatChannelType.AllianceChannel);
        this.refreshTitle(tab.Data.GetKeyValue_ConfigTable().AllianceChatChannelTip);
        this.refreshMessage();
    }

    /* 发送文本
     */
    private onClickSendNormalTextMsg(){
        if(!this.checkOpenConditionArrive(tab.OpenFunctionName.OpenFunctionName_TextEmotionChat)){
            return;
        }

        if(!this.checkIsSelectChatPrivateObj()){
            return;
        }

        if(!this.checkCDIsOver()){
            ShowTips("ChatCD");
            return;
        }

        if(checkStringIsAllSpace(this.editbox_chat.string)){
            ShowTips("StringIsEmpty");
            return;
        }

        let msg          = new proto.Msg_ChatSendMessageReq();
        msg.message      = this.editbox_chat.string;
        msg.channel      = ManagerLocalChatMsg.CurrentChannel;
        msg.receiverUUID = isValidObj(this._private_obj) ? this._private_obj.uuid : kNoneString;
        Net.Send(proto.Ptl.ChatSendMessageReq, msg);
        this.editbox_chat.string = kNoneString;
    }

    /* 打开表情
     */
    private onClickEmotionSelector(){
        if(!this.checkOpenConditionArrive(tab.OpenFunctionName.OpenFunctionName_TextEmotionChat)){
            return;
        }

        if(!this.checkIsSelectChatPrivateObj()){
            return;
        }

        if(!this.checkCDIsOver()){
            ShowTips("ChatCD");
            return;
        }
        this.node_emoji_selector.node.active = true;
    }

    /* 点击邀请友谊赛
     */
    private onClickFriendlyMatch(){
        let bOpenPveFight = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_CooperationModel);
        if(!bOpenPveFight){
            ShowTips("CooperationFightOpenTip");
            return;
        }

        showPopLayerV2("prefab/InvitationFightConfirm", InvitationFightConfirm).then(layer =>{
            let fightType = proto.ChatChannelType.WorldChannel == ManagerLocalChatMsg.CurrentChannel ? 
                            proto.FightType.WorldChannelPvP : proto.FightType.AlliancePvP;
            layer.setFightType(fightType);
        });

        //上报打点数据
        //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.ClickFriendlyMatch);/* zhibo-@20230410 for <删除打点> */
    }

    /* 点击合作模式邀请
     */
    private onClickInfiniteDefense(){
        let bOpenPveFight = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_CooperationModel);
        if(!bOpenPveFight){
            ShowTips("CooperationFightOpenTip");
            return;
        }
            
        if(CheckHaveBannedCard() && proto.ChatChannelType.WorldChannel == ManagerLocalChatMsg.CurrentChannel){
            ShowTips("PveBanned");
            return;
        }

        //上报打点数据
        //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.ClickInfiniteInvitation);/* zhibo-@20230410 for <删除打点> */
        SignRequestPvEPath.getInstance().setPvePath(RequestPvePathType.SEND_PVE_INVITATION, kNegativeOneNumber);
        Waiting.Show(WaitingTag.GetPveStatus.toString());
        BattleLayer.bOnlyPveAwardReddot = false;
        Net.Send(proto.Ptl.GetPveStatusReq, new proto.Msg_GetPveStatusReq());
    }
    
    private onClickBack(){
        if(proto.ChatChannelType.PrivateChannel == ManagerLocalChatMsg.CurrentChannel){
            if(ManagerPrivateChatMsg.CurrentPrivateObj !== kNoneString){
                this._from_where = FromWhereType.DirectEnterChatPage;
                ManagerPrivateChatMsg.getInstance().checkPrivateObjHaveMsg(this._private_obj.uuid);
                this.switchChannel(proto.ChatChannelType.PrivateChannel);
                this.refreshTitle(tab.Data.GetKeyValue_ConfigTable().PrivateChatChannelTip);
                this.refreshPrivateObjList();
                return;
            }

            this.setVisible(false);
            return;
        }

        this.setVisible(false);
    }

    /* 获取单元格总数量
     */
    private getCellCount(){
        let msgCacheList = GetChatMsgCacheList();
        if(!msgCacheList){
            return kZeroNumber;
        }
        
        return msgCacheList.length;
        //return this._bLoading ? ManagerLocalChatMsg.getInstance().getLocalMsgCache(ManagerLocalChatMsg.CurrentChannel).length : kZeroNumber;
    }

    /* 获取单元格高度
     * @param idx   单元格下标
     */
    private getCellHeight(idx: number){
        let msgCacheList = GetChatMsgCacheList();
        if(msgCacheList && idx < msgCacheList.length){
            switch(msgCacheList[idx].msgType){
                case proto.GlobalMessageType.MemberEmotionMsg:
                    if(msgCacheList[idx].senderUUID == Role.Instance.RoleData.id){
                        return this.self_emotion_height;
                    }

                    return this.other_emotion_height;

                case proto.GlobalMessageType.MemberFriendlyMatchInviteMsg:
                case proto.GlobalMessageType.MemberInfiniteDefenseInviteMsg:
                    return this.fight_record_height;

                case proto.GlobalMessageType.AlliancePvpInvitation:
                    return this.fight_invitation_height;

                case proto.GlobalMessageType.ShareSelfCardGroup:
                    return this.share_cards_height;
            }
        }

        return kNegativeOneNumber;
    }

    /* 获取单元格标记
     * @param idx  单元格下标
     */
    private getCellIdentifer(idx: number): string{
        let msgCacheList = GetChatMsgCacheList();
        if(!msgCacheList){
            return "null";
        }

        let msgInfo = msgCacheList[idx];
        if(!isValidObj(msgInfo)){
            return "null";
        }
        
        //文本每一个idx单独一个，主要是文本的size动态变更，节点不一定能复用
        if(msgInfo.msgType === proto.GlobalMessageType.MemberNormalTxtMsg){
            return `${msgInfo.msgType}_${msgInfo.senderUUID}_${idx}`;
        }
        
        let identifier = msgInfo.senderUUID === Role.Instance.RoleData.id ? "_self" : "_other";
        return `${msgInfo.msgType}_${identifier};`

        //其他类型节点可以复用
        //return `${msgInfo.msgType}_chatmsg`;
    }

    /* 获取单元格数据
     * @param idx 单元格下标
     */
    private getCellData(idx: number){
        let msgCacheList = GetChatMsgCacheList();
        if(msgCacheList && idx < msgCacheList.length){
            return msgCacheList[idx];
        }
        return null;
    }
    
    /* 获取单元格实例
     * @param idx  单元格下标
     */
    private getCellView(idx: number): InfiniteCell{
        let msgCacheList = GetChatMsgCacheList();
        if(idx < kZeroNumber ||  idx >= msgCacheList.length){
            return null;
        }

        let msgInfo = msgCacheList[idx];
        return this._msg_cell_map.get(msgInfo.msgType)(msgInfo, idx);
    }

    /************************************************ 私聊对象listView **********************************************************/
    /* 获取单元格总数量
     */
    private getPrivateObjCellCount(){
        return ManagerPrivateChatMsg.getInstance().getPrivateObjCache().length;
    }

    /* 获取单元格高度
     * @param idx   单元格下标
     */
    private getPrivateObjCellHeight(idx: number){
        return this.private_obj_height;
    }

    /* 获取单元格标记
     * @param idx  单元格下标
     */
    private getPrivateObjCellIdentifer(idx: number): string{
        let msgCacheList = ManagerPrivateChatMsg.getInstance().getPrivateObjCache();
        if(!isValidObj(msgCacheList)){
            return "null";
        }
        
        return "private_obj";
    }

    /* 获取单元格数据
     * @param idx 单元格下标
     */
    private getPrivateObjCellData(idx: number){
        let msgCacheList = ManagerPrivateChatMsg.getInstance().getPrivateObjCache();
        if(!isValidObj(msgCacheList)){
            return "null";
        }

        return msgCacheList[idx];
    }
    
    /* 获取单元格实例
     * @param idx  单元格下标
     */
    private getPrivateObjCellView(idx: number): InfiniteCell{
        let msgCacheList = ManagerPrivateChatMsg.getInstance().getPrivateObjCache();
        if(idx < kZeroNumber ||  idx >= msgCacheList.length){
            return null;
        }

        //let msgInfo = msgCacheList[idx];
        return cc.instantiate(this.pfb_private_obj).getComponent(ChatPrivateObjPfb);
    }
    
    private onClickExpandSupportPage(){
        let bAllianceChannel = proto.ChatChannelType.AllianceChannel == ManagerLocalChatMsg.CurrentChannel;
        if(bAllianceChannel && (!Role.Instance.RoleData.allianceData || 
            !isValidObj(Role.Instance.RoleData.allianceData.allianceID))){
                ShowTips("NoAllianceTip");
            return;
        }
        
        if(!this.checkCDIsOver()){
            ShowTips("ChatCD");
            return;
        }

        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseSupportHelpFrame);
        
        if(this._bExpandSupportArea){
            this.onClickShrinkSupportArea(null);
            return;
        }
        
        this.node_expand_area.active = true;
        let aniNode = this.node_expand_area.getComponent(cc.Animation);
        if(aniNode){
           aniNode.play("support_expand_ani");
           this._bExpandSupportArea = true;
        }
    }

    private onClickShrinkSupportArea(event: cc.Event.EventTouch){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseSupportHelpFrame);

        if(!this.node_expand_area.active || !this._bExpandSupportArea){return;}
        
        let aniNode = this.node_expand_area.getComponent(cc.Animation);
        if(aniNode){
           aniNode.play("support_shrink_ani");
           this._bExpandSupportArea = false;
        }
    }

    public onClickWatchUnReadMsg(){
        this.list_view.scrollToBottom(0.1);
        this._bInBottom = true;
        this.setUnreadMsgVisible();
    }

    public onEditBoxEnd(){
        if(this.editbox_chat.string.length > tab.Data.GetKeyValue_ConfigTable().ChatTextLimitLen){
            ShowTips("ChatMsgTextLimitLen");
        }
    }
}

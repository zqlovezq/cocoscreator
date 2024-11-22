/*
 *  有联盟时的页面预制件
 */

import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import {createAlliancePersonelMsgModel, createAllianceSupportMsgModel} from "../Chat/ChatCellCommonFunc";
import {isValidObj, k255, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import RedDotManager, { IMessageResult, RedDotType } from "../Common/ReddotManager";
import Role from "../Common/Role";
import { getCutDownTimesString } from "../Common/SeasonRankCommonFunc";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import {getServerUtcTime, setGray, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import { checkRedDotOfCanSupport, getOnlineMemberCount, setAllianceBadge, sortAllianceMsgList, wrapSupportInfo } from "./AllianceCommonInterface";
import AllianceDataCacheManager from "./AllianceDataCacheManager";
import AllianceDetailPopLayer from "./AllianceDetailPopLayer";
import AllianceSupportCardPfb from "./AllianceSupportCardPfb";
import ManagerAllianceInnerMsg from "./ManagerAllianceInnerMsg";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HaveAlliancePagePfb extends cc.Component {

    @property(cc.Node)
    node_self_alliance_info: cc.Node = null;

    @property(cc.Sprite)
    spr_alliance_icon: cc.Sprite = null;

    @property(cc.Label)
    lbl_season_score: cc.Label = null;

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Label)
    lbl_members_count: cc.Label = null;

    @property(cc.Label)
    lbl_online_members_cnt: cc.Label = null;

    @property(cc.Node)
    list_view: cc.Node = null;

    @property(cc.Button)
    btn_support: cc.Button = null;

    @property(cc.Sprite)
    spr_support_btn_bg: cc.Sprite = null;

    @property(cc.Node)
    node_can_support: cc.Node = null;

    @property(cc.Node)
    node_cannot_support: cc.Node = null;

    @property(cc.Label)
    lbl_cut_down: cc.Label = null;

    @property(cc.Node)
    spr_reddot_support_btn: cc.Node = null;

    @property(cc.Node)
    spr_reddot: cc.Node = null;

    @property(cc.Label)
    lbl_loading: cc.Label = null;

    @property({type:cc.Prefab, displayName: "联盟内部消息预制件"})
    pfb_alliance_inner_msg: cc.Prefab = null;

    @property({type:cc.Prefab, displayName: "联盟支援卡牌数消息预制件【对方】"})
    pfb_other_support_card_msg: cc.Prefab = null;

    @property({type:cc.Prefab, displayName: "联盟支援卡牌数消息预制件【自身】"})
    pfb_self_support_card_msg: cc.Prefab = null;

    @property({displayName: "支援卡牌预制件高度"})
    support_pfb_height: number = 201;

    @property({displayName: "内部消息预制件高度"})
    msg_pfb_height: number = 40;

    private alliance_list_view: InfiniteList = null;
    private _bConstructor: boolean           = false;
    private _bLoading: boolean               = false;
    private _alliance_icon_idx: number       = kZeroNumber;
    private _alliance_member_list: proto.IAllianceMemberInfo[] = [];
    private _msg_cell_map: Map<proto.GlobalMessageType, Function> = new Map<proto.GlobalMessageType, Function>();

    onLoad () {
        this.node_self_alliance_info.on(cc.Node.EventType.TOUCH_END, this.onClickOpenAllianceDetail, this);
        this.btn_support.node.on("click",                            this.onClickRequestSupport,     this);
        this.spr_reddot.active             = false;
        this.spr_reddot_support_btn.active = false;
        this._initMsgMap();
        
        this.alliance_list_view = this.list_view.getComponent(InfiniteList);
        //初始化scrollView接口
        this.alliance_list_view.Init({
            getCellNumber:    this.getCellCount.bind(this),
            getCellSize:      this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView:      this.getCellView.bind(this),
            getCellData:      this.getCellIdx.bind(this),
        });

        //监听通过加入申请
        Net.listenProtocol(proto.Ptl.DealAllianceJoinRsp, (buffer, ptl)=>{
            let msg = proto.Msg_DealAllianceJoinRsp.decode(buffer);
            cc.log("DealAllianceJoinRsp(监听通过加入申请) : msg " + JSON.stringify(msg))
            if(msg && msg.result === proto.Msg_DealAllianceJoinRsp.ErrorCode.Succeed){
                //同意申请加入，刷新成员数量和申请列表数量
                this.setAllianceAllMembers(getOnlineMemberCount(msg.memberInfo));
            }
        }, this);
        
        //监听消息推送
        Net.listenProtocol(proto.Ptl.AllianceMsgPush, (buffer, ptl)=>{
            let msg = proto.Msg_AllianceMsgPush.decode(buffer);
            cc.log("AllianceMsgPush(监听消息推送) : msg " + JSON.stringify(msg))
            if(msg){
                ManagerAllianceInnerMsg.getInstance().pushChatMsg(msg.msg);
                this.refreshMessage();
            }
        }, this);

        //监听请求卡牌
        Net.listenProtocol(proto.Ptl.AllianceCardRequestDonateRsp, (buffer, ptl)=>{
            let msg = proto.Msg_AllianceCardRequestDonateRsp.decode(buffer);
            cc.log("AllianceCardRequestDonateRsp(监听请求卡牌) : msg " + JSON.stringify(msg))
            if(msg){
                if(msg.result === proto.Msg_AllianceCardRequestDonateRsp.ErrorCode.Succeed){
                    Role.Instance.RoleData.donateData.nextCardRequestTime = msg.nextRequestUTC;
                    checkRedDotOfCanSupport();
                    this.setSupportBtnState();
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateAllianceSupportCD);
                    return;
                }

                msg.result === proto.Msg_AllianceCardRequestDonateRsp.ErrorCode.CardNotExist    && ShowTips("CardNotExist");
                msg.result === proto.Msg_AllianceCardRequestDonateRsp.ErrorCode.RequestCooldown && ShowTips("RequestCD");
            }
        }, this);

        //监听支援消息响应
        Net.listenProtocol(proto.Ptl.AllianceDonateCardRsp, (buffer, ptl)=>{
            let msg = proto.Msg_AllianceDonateCardRsp.decode(buffer);
            cc.log("AllianceDonateCardRsp(监听支援消息响应) : msg " + JSON.stringify(msg))
            if(msg){
                if(msg.result === proto.Msg_AllianceDonateCardRsp.ErrorCode.Succeed){
                    //TODO:
                    return;
                }

                msg.result === proto.Msg_AllianceDonateCardRsp.ErrorCode.CardNotEnough       && ShowTips("CardNotEnough");
                msg.result === proto.Msg_AllianceDonateCardRsp.ErrorCode.DonateTopLimit      && ShowTips("OverSupportLimit");
                msg.result === proto.Msg_AllianceDonateCardRsp.ErrorCode.DonateScoreTopLimit && ShowTips("OverSupportScoreLimit");
            }
        }, this);

        //监听联盟支援小红点更新
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateAllianceSupportReddot, (param: any)=>{
            let retData = (param as IMessageResult);
            this.refreshSupportRedDot(retData ? retData.bVisible : false);
        }, this);

        //监听推送联盟其他成员的请求支援消息
        Net.listenProtocol(proto.Ptl.PushRequestSupportInfo, (buffer, ptl)=>{
            let msg = proto.Msg_PushRequestSupportInfo.decode(buffer);
            cc.log("PushRequestSupportInfo(监听推送联盟其他成员的请求支援消息) : msg " + JSON.stringify(msg))
            if(msg && msg.cardRequestInfo){
                let bReplace = AllianceDataCacheManager.getInstance().replaceAllianceSupportInfo(msg.cardRequestInfo);
                !bReplace && wrapSupportInfo(this._alliance_member_list, [msg.cardRequestInfo]);
                !bReplace && this.refreshMessage();
                bReplace  && this.alliance_list_view.Refresh();
                bReplace  && this.alliance_list_view.scrollToBottom(0.1);
            }
        }, this);

        //监听刷新联盟列表事件
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateAllianceViewList, (param: any)=>{
            let bReload = (param as boolean);
            this.refreshViewList(bReload);
        }, this);

        //监听联盟小红点更新
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateAllianceBtnReddot, (param: any)=>{
            let bHaveApply = RedDotManager.getInstance().GetRedDotVisible(RedDotType.AllianceApplyInfo);
            this.spr_reddot.active = bHaveApply;
        }, this);
    }

    start () {

    }

    onDestroy(){
        this._alliance_member_list  = [];
        this._msg_cell_map.clear();
        this.unschedule(this.refreshSupportCutDownTime);
    }

    /* 初始化聊天消息类型映射到对应回调函数 */
    private _initMsgMap(){
        //加入联盟消息
        this._msg_cell_map.set(proto.GlobalMessageType.JoinAllianceMsg, (msg: proto.IAllianceMsgData, idx: number)=>{
            return createAlliancePersonelMsgModel(msg, this.pfb_alliance_inner_msg, idx);
        });

        //退出联盟消息
        this._msg_cell_map.set(proto.GlobalMessageType.ExitAllianceMsg, (msg: proto.IAllianceMsgData, idx: number)=>{
            return createAlliancePersonelMsgModel(msg, this.pfb_alliance_inner_msg, idx);
        });

        //联盟人事任命消息
        this._msg_cell_map.set(proto.GlobalMessageType.AllianceSetPostRankMsg, (msg: proto.IAllianceMsgData, idx: number)=>{
            return createAlliancePersonelMsgModel(msg, this.pfb_alliance_inner_msg, idx);
        });

        //被驱逐联盟消息
        this._msg_cell_map.set(proto.GlobalMessageType.AllianceExpelMsg, (msg: proto.IAllianceMsgData, idx: number)=>{
            return createAlliancePersonelMsgModel(msg, this.pfb_alliance_inner_msg, idx);
        });

        //创建联盟消息
        this._msg_cell_map.set(proto.GlobalMessageType.CreateAllianceMsg, (msg: proto.IAllianceMsgData, idx: number)=>{
            return createAlliancePersonelMsgModel(msg, this.pfb_alliance_inner_msg, idx);
        });

        //联盟支援消息
        this._msg_cell_map.set(proto.GlobalMessageType.MemberRequestSupportMsg, (msg: proto.IAllianceMsgData, idx: number)=>{
            return createAllianceSupportMsgModel(msg, [this.pfb_other_support_card_msg, this.pfb_self_support_card_msg], idx);
        });
    }
    
    public initData(allianceInfo: proto.IAllianceInfo, bNewInfo: boolean){
        this.setSupportBtnState();
        if(!bNewInfo){
            this._bLoading = true;
            this.lbl_loading.node.opacity = kZeroNumber;
            this.refreshMessage();
            return;
        }
        
        this._bConstructor                  = true;
        this._alliance_icon_idx             = allianceInfo.baseInfo.icon;
        this._alliance_member_list          = allianceInfo.memberInfo;
        this.lbl_loading.node.opacity       = k255;
        ManagerAllianceInnerMsg.getInstance().initMsgList(allianceInfo.msgList);
        
        //包装联盟支援信息
        wrapSupportInfo(this._alliance_member_list, allianceInfo.cardRequestInfo);
        //按时间戳递增排序
        sortAllianceMsgList(ManagerAllianceInnerMsg.getInstance().getLocalMsgCache());
        
        this.setAllianceIcon();
        this.setAllianceSeasonScore(allianceInfo.score);
        this.setAllianceName(allianceInfo.baseInfo.name);
        this.setAllianceAllMembers(allianceInfo.memberInfo.length);
        this.setAllianceOnlineMembers(getOnlineMemberCount(allianceInfo.memberInfo));
        RedDotManager.getInstance().UpdateRedDot(RedDotType.NewAllianceInnerMsg, false);
        this.checkSupportRedDot();
        this.refreshSupportRedDot(RedDotManager.getInstance().GetRedDotVisible(RedDotType.AllianceSupport));
        this.startLoading();
    }

    private startLoading(){
        this.scheduleOnce(()=>{
            this._bLoading = true;
            this.refreshMessage();
            this.lbl_loading.node.opacity = kZeroNumber;
        }, kOneNumber);
    }

    /* 检测支援红点的可见性，主要用于加入联盟 */
    private checkSupportRedDot(){
        let bVisible = !Role.Instance.RoleData.donateData || Role.Instance.RoleData.donateData.nextCardRequestTime < getServerUtcTime();
        RedDotManager.getInstance().UpdateRedDot(RedDotType.AllianceSupport, bVisible);
    }

    /* 销毁页面数据 */
    public destroyPageData(){
        if(!this._bConstructor){return;}
        
        this._bConstructor = false;
        this._bLoading     = false;
        this.alliance_list_view.CleanCellPools();
    }
    
    /* 设置联盟图标 */
    private setAllianceIcon(){
        setAllianceBadge(this.spr_alliance_icon, this._alliance_icon_idx);
    }

    /* 设置联盟名称 */
    private setAllianceName(name: string){
        this.lbl_alliance_name.string = name;
    }

    /**
     
     * Description: 设置联盟在线成员数量
     
     * @param cnt   在线成员数量
     */
    private setAllianceOnlineMembers(cnt: number){
        this.lbl_online_members_cnt.string = `${cnt}`;
    }

    /**
     
     * Description: 设置联盟赛季总积分
     
     * @param score   联盟赛季总积分
     */
    private setAllianceSeasonScore(score: number){
        this.lbl_season_score.string = `${score}`;
    }

    /**
     
     * Description: 设置联盟所有成员数量
     
     * @param ownCnt    已拥有的成员数量
     */
    private setAllianceAllMembers(ownCnt: number){
        let maxCapacityCount          = tab.Data.GetKeyValue_ConfigTable().AllianceMaxMemberCount;
        this.lbl_members_count.string = `${ownCnt}/${maxCapacityCount}`;
    }

    /**
     
     * Description: 刷新消息
     
     */
    private refreshMessage(){
        if(ManagerAllianceInnerMsg.getInstance().getLocalMsgCache().length < kOneNumber){return;}
        
        this.refreshViewList(true);
    }

    /**
     
     * Description: 刷新视图列表
     
     * @param bReload 是否重新加载
     */
    private refreshViewList(bReload: boolean){
        if(bReload){
            this.alliance_list_view.Reload(true);
            this.alliance_list_view.scrollToBottom(0.1);
            return;
        }
        
        this.alliance_list_view.Refresh();
    }

    /**
     
     * Description: 设置支援按钮状态
     
     */
    private setSupportBtnState(){
        if(!Role.Instance.RoleData.donateData){return;}
        
        let diffTime = Role.Instance.RoleData.donateData.nextCardRequestTime - getServerUtcTime();
        this.node_can_support.active    = diffTime <= kZeroNumber;
        this.node_cannot_support.active = !this.node_can_support.active;
        setGray(this.spr_support_btn_bg, this.node_cannot_support.active);
        
        if(this.node_cannot_support.active){
            this.refreshSupportCutDownTime();
            this.schedule(this.refreshSupportCutDownTime, kOneNumber);
        }
    }

    /**
     
     * Description: 刷新可再次支援倒计时
     
     */
    private refreshSupportCutDownTime(){
        let cutDownTime = Role.Instance.RoleData.donateData.nextCardRequestTime;
        let diffTime    = cutDownTime - getServerUtcTime();
        let visibleStr  = getCutDownTimesString(diffTime, `${kZeroNumber}`);
        this.lbl_cut_down.string = visibleStr;
        diffTime <= kZeroNumber && this.setSupportBtnState();
    }

    /**
     
     * Description: 刷新联盟支援小红点
     
     * @param bVisible  是否可见
     */
    private refreshSupportRedDot(bVisible: boolean){
        this.spr_reddot_support_btn.active = bVisible;
        let bHaveApply = RedDotManager.getInstance().GetRedDotVisible(RedDotType.AllianceApplyInfo);
        this.spr_reddot.active = bHaveApply;
    }
    
     /**
     
     * Description: 获取单元格总数量
     
     */
    private getCellCount(){
        return this._bLoading ? ManagerAllianceInnerMsg.getInstance().getLocalMsgCache().length : kZeroNumber;
    }

    /**
     
     * Description: 获取单元格高度
     
     * @param idx   单元格下标
     */
    private getCellHeight(idx: number){
        let msgInfo = ManagerAllianceInnerMsg.getInstance().getChatMsg(idx);
        if(!isValidObj(msgInfo)){
            return kZeroNumber;
        }

        if(msgInfo.msgType == proto.GlobalMessageType.MemberRequestSupportMsg){
            return this.support_pfb_height;
        }

        return this.msg_pfb_height;
    }

    /**
     
     * Description: 获取单元格标记
     
     * @param idx  单元格下标
     */
    private getCellIdentifer(idx: number): string{
        let msgInfo = ManagerAllianceInnerMsg.getInstance().getChatMsg(idx);
        if(!isValidObj(msgInfo)){
            return "null";
        }
        
        //联盟支援要区分自己的还是其他人的，因为x坐标不一致，不能复用
        if(proto.GlobalMessageType.MemberRequestSupportMsg === msgInfo.msgType){
            let identifier = msgInfo.senderUUID === Role.Instance.RoleData.id ? "_self" : "_other";
            return `${msgInfo.msgType}_${identifier};`
        }

        //防止服务器那边给了个不合法的msgType，目前服务器对于默认是0 往往不会赋值，这块检测下
        !isValidObj(msgInfo.msgType) && (msgInfo.msgType = proto.GlobalMessageType.JoinAllianceMsg);

        //其他类型节点可以复用
        return `${msgInfo.msgType}_inner_msg`;
    }

    /**
     
     * Description: 获取单元格数据
     
     * @param idx 单元格下标
     */
    private getCellIdx(idx: number){
        return ManagerAllianceInnerMsg.getInstance().getChatMsg(idx);
    }
    
    /**
     
     * Description: 获取单元格实例
     
     * @param idx  单元格下标
     */
    private getCellView(idx: number): InfiniteCell{
        if(idx < kZeroNumber ||  idx >= ManagerAllianceInnerMsg.getInstance().getLocalMsgCache().length){
            return null;
        }

        let msgInfo = ManagerAllianceInnerMsg.getInstance().getChatMsg(idx);
        !isValidObj(msgInfo.msgType) && (msgInfo.msgType = proto.GlobalMessageType.JoinAllianceMsg);
        return this._msg_cell_map.get(msgInfo.msgType)(msgInfo, idx);
    }

    /**
     
     * Description: 打开联盟详情事件
     
     * @param event 
     */
    private onClickOpenAllianceDetail(event: cc.Event.EventTouch){
        showPopLayerV2("prefab/AllianceDetailPopLayer", AllianceDetailPopLayer).then(detailLayer =>{
            detailLayer.initData(Role.Instance.RoleData.allianceData.allianceID);
        });
    }

    private onClickRequestSupport(){
        if(this.node_cannot_support.active){
            ShowTips("NotRequestSupport");
            return;
        }

        showPopLayerV2("prefab/AllianceSupportCardPfb", AllianceSupportCardPfb).then(nodeDetail=>{
            nodeDetail.initData();
        });

        //上报打点数据
        //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.ClickRequestSupport); /* zhibo-@20230410 for <删除打点> */
    }
}

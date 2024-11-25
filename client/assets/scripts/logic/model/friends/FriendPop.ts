import { _decorator, Component, EditBox, instantiate, Label, Node, PointToPointConstraint, Prefab, ScrollView } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { FriendControl } from './FriendControl';
import { FriendData } from './FriendData';
import { FriendListItem } from './FriendListItem';
import InfiniteList from '../../../Common/InfiniteList/InfiniteList';
import { SimpleRoleInfo } from './SimpleRoleInfo';
import { TimeUtil } from '../../utils/TimeUtil';
import { ShowTips } from '../../mgr/UIMgr';
import { tab } from '../../../Table/table_gen';
import { ItemControl } from '../item/ItemControl';
import { ItemData } from '../item/ItemData';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * FriendPop
 * zhudingchao
 * Fri Jun 07 2024 11:09:31 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/friends/FriendPop.ts
 *
 */

@ccclass('FriendPop')
export class FriendPop extends ViewPop {
    @property(InfiniteList)
    listScroll: InfiniteList = null;
    @property(Node)
    friendNode: Node = null;
    @property(Node)
    blackNode: Node = null;
    @property(InfiniteList)
    blackScroll: InfiniteList = null;
    @property(Node)
    friendNumNode: Node = null;
    @property(Label)
    friendNumLab: Label = null;
    @property(Label)
    friendTotalNumLab: Label = null;
    @property(Label)
    friendValueLab: Label = null;
    @property(Label)
    getValueLab: Label = null;
    @property(Label)
    getValueTotalLab: Label = null;
    @property(Label)
    sendValueLab: Label = null;
    @property(Label)
    sendValueTotalLab: Label = null;
    @property(Label)
    blackNumLab: Label = null;
    @property(Label)
    blackTotalNumLab: Label = null;
    @property(Prefab)
    friendItemPrefab: Prefab = null;

    @property(Node)
    myfriendNode: Node = null;
    @property(Node)
    applicationNode: Node = null;
    @property(Node)
    addfriendNode: Node = null;

    @property(EditBox)
    searchEdit: EditBox = null;




    private currType: number = proto.FriendListType.FriendList;
    private friendItemInfos: Array<SimpleRoleInfo>;
    private lastRefreshTimer: number = 0;
    private searchRoleInfo: SimpleRoleInfo = null;
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetFriendSimpleRoleRsp, this.on_s2c_GetFriendSimpleRoleRsp, this);
        EventMgr.onMsg(proto.Ptl.AddFriendPush, this.on_s2c_AddFriendPush, this);
        EventMgr.onMsg(proto.Ptl.RemoveFriendPush, this.on_s2c_RemoveFriendPush, this);
        EventMgr.onMsg(proto.Ptl.RecommendFriendRsp, this.on_s2c_RecommendFriendRsp, this);
        EventMgr.onMsg(proto.Ptl.FindFriendRsp, this.on_s2c_FindFriendRsp, this);
        EventMgr.onMsg(proto.Ptl.AddBlacklistRsp, this.on_s2c_Msg_AddBlacklistRsp, this);
        EventMgr.onMsg(proto.Ptl.RemoveBlacklistRsp, this.on_s2c_RemoveBlacklistRsp, this);
        EventMgr.onMsg(proto.Ptl.AddFriendRsp, this.on_s2c_AddFriendRsp, this);
        EventMgr.onMsg(proto.Ptl.ConfirmFriendRsp, this.on_s2c_ConfirmFriendRsp, this);
        EventMgr.onMsg(proto.Ptl.RemoveFriendRsp, this.on_s2c_RemoveFriendRsp, this);
        EventMgr.onMsg(proto.Ptl.RemoveFriendApplyRsp, this.on_s2c_RemoveFriendApplyRsp, this);
        EventMgr.onMsg(proto.Ptl.RecvGiftRsp, this.on_s2c_RecvGiftRsp, this);
        EventMgr.onMsg(proto.Ptl.GivingGiftRsp, this.on_s2c_GivingGiftRsp, this);
        EventMgr.onMsg(proto.Ptl.GiftPush, this.on_s2c_GiftPush, this);

    }
    onShow(): void {
        this.friendItemInfos = [];
        this.initListScroll();
        this.initView();

    }

    initView() {
        if (this.currType == proto.FriendListType.FriendList) {
            if (FriendData.ins.isInitMyFirend) {
                this.initMyFriendView();
            } else {
                FriendControl.ins.requestGetFriendSimpleRole(proto.FriendListType.FriendList);
            }
        } else if (this.currType == proto.FriendListType.ApplyList) {
            if (FriendData.ins.isInitApply) {
                this.initApplyView();
            } else {
                FriendControl.ins.requestGetFriendSimpleRole(proto.FriendListType.ApplyList);
            }
        } else if (this.currType == proto.FriendListType.BlackList) {
            if (FriendData.ins.isInitBlack) {
                this.initBlackView();
            } else {
                FriendControl.ins.requestGetFriendSimpleRole(proto.FriendListType.BlackList);
            }
        } else if (this.currType == 3) {
            if (FriendData.ins.isInitRecommend) {
                this.initRecommendView();
            } else {
                FriendControl.ins.requestRecommendFriend();
            }
        }
    }
    initMyFriendView() {
        this.updateNodeShowState();
        this.friendItemInfos = FriendData.ins.getMyFreindInfos();
        // if(this.listScroll.isAutoScrolling()){
        //     this.listScroll.stopAutoScroll()
        // }、
        this.friendItemInfos.sort((a,b)=>{
            if(a.offlineTime<=0&&b.offlineTime<=0){
                return 0;
            }else{
                if(a.offlineTime<=0){
                    return -1;
                }
                if(b.offlineTime<=0){
                    return 1;
                }
                return b.offlineTime-a.offlineTime;
            }
           
        })
        if (this.friendItemInfos.length > 0) {
            this.listScroll.node.active = true;
            this.listScroll.Reload(true, true);
        } else {
            this.listScroll.node.active = false;
        }

        this.updateFriendNum();
        this.updateFriendValue();
        this.updateFriendGiftBtn();
        this.listScroll.setContentPos(0,0,0);
    }
    initApplyView() {
        this.updateNodeShowState();
        this.friendItemInfos = FriendData.ins.getApplyInfos();
        if (this.friendItemInfos.length > 0) {
            this.listScroll.node.active = true;
            this.listScroll.Reload(true, true);
        } else {
            this.listScroll.node.active = false;
        }

        this.updateFriendNum();
        this.listScroll.setContentPos(0,0,0);
    }
    initRecommendView() {
        // if(this.listScroll.isAutoScrolling()){
        //     this.listScroll.stopAutoScroll()
        // }
        this.updateNodeShowState();
        if (this.searchRoleInfo) {
            this.friendItemInfos = [this.searchRoleInfo];
        } else {
            this.friendItemInfos = FriendData.ins.getRecommendInfos();
        }
        if (this.friendItemInfos.length > 0) {
            this.listScroll.node.active = true;
            this.listScroll.Reload(true, true);
        } else {
            this.listScroll.node.active = false;
        }

        // this.listScroll.scrollToTop();
        this.listScroll.setContentPos(0,0,0);
    }
    initBlackView() {
        this.updateNodeShowState();
        this.friendItemInfos = FriendData.ins.getBlackInfos();
        if (this.friendItemInfos.length > 0) {
            this.blackScroll.node.active = true;
            this.blackScroll.Reload(true, true);
        } else {
            this.blackScroll.node.active = false;
        }
        this.blackNumLab.string = this.friendItemInfos.length + "";
        this.blackTotalNumLab.string = tab.getData().GetKeyValue_ConfigTable().BlackListMaxCount + ""
        this.blackScroll.setContentPos(0,0,0);

    }
    initListScroll() {
        this.listScroll.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHigth.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });
        this.blackScroll.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHigth.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });


    }
    updateNodeShowState() {
        this.blackNode.active = this.currType == proto.FriendListType.BlackList;
        this.listScroll.node.active = this.currType != proto.FriendListType.BlackList;
        this.friendNumNode.active = this.currType == proto.FriendListType.FriendList || this.currType == proto.FriendListType.ApplyList;
        this.myfriendNode.active = this.currType == proto.FriendListType.FriendList;
        this.applicationNode.active = this.currType == proto.FriendListType.ApplyList;
        this.addfriendNode.active = this.currType == 3;
    }
    updateFriendNum() {
        let currNum = FriendData.ins.getMyFriendNum();
        let max = tab.getData().GetKeyValue_ConfigTable().FriendMaxCount;
        this.friendNumLab.string = currNum + "";
        this.friendTotalNumLab.string = max + "";
    }


    onClickToggle(event, type) {
        type = Number(type);
        if (this.currType != type) {
            this.currType = type;
            this.initView();
        }
    }
    updateFriendValue() {
        let num = ItemData.ins.getCount(tab.CurrencyType.CurrencyType_Friendship);
        this.friendValueLab.string = num + "";
    }
    updateFriendGiftBtn() {
        this.getValueLab.string = FriendData.ins.getReceiveGiftNum() + "";
        this.getValueTotalLab.string = tab.getData().GetKeyValue_ConfigTable().GiftRecvMaxCount + ""

    }
    onClickGetValue() {
        let max = tab.getData().GetKeyValue_ConfigTable().GiftRecvMaxCount;
        let currNum=FriendData.ins.getReceiveGiftNum();
        if (currNum<= max) {
            let infos = FriendData.ins.getMyFreindInfos();
            let ids = [];
            for (let key in infos) {
                if (infos[key].receiveGiftState == 1) {
                    ids.push(infos[key].id);
                    currNum++;
                }
            }
            if (ids.length > 0) {
                FriendControl.ins.requestRecvGift(ids);
            } else {
                //ShowTips("没有可领取的礼物")
                ShowTips(LangMgr.getLab("Tips_friend_1"))
            }
        } else {
            //ShowTips("今日领取已达到上线")
            ShowTips(LangMgr.getLab("Tips_friend_2"))
        }

    }
    onClickSendValue() {
        let infos = FriendData.ins.getMyFreindInfos();
        let ids = [];
        
        for (let key in infos) {
            if (!infos[key].isGiveGift) {
                ids.push(infos[key].id);
            }
        }
        if (ids.length > 0) {
            FriendControl.ins.requestGivingGift(ids);
        } else {
            //ShowTips("没有可赠送的好友")
            ShowTips(LangMgr.getLab("Tips_friend_3"))
        }
    }
    onClickAllRefuse() {
        if (this.currType == proto.FriendListType.ApplyList) {
            let ids = [];
            for (let key in this.friendItemInfos) {
                ids.push(this.friendItemInfos[key].id);
            }
            if (ids.length > 0) {
                FriendControl.ins.requestRemoveFriendApply(ids);
            } else {
                //ShowTips("没有申请列表")
                ShowTips(LangMgr.getLab("Tips_friend_4"))
            }
        }
    }
    onClickAllAgree() {
        if (this.currType == proto.FriendListType.ApplyList) {
            let ids = [];
            for (let key in this.friendItemInfos) {
                ids.push(this.friendItemInfos[key].id);
            }
            if (ids.length > 0) {
                FriendControl.ins.requestConfirmFriend(ids);
            } else {
                //ShowTips("没有申请列表")
                ShowTips(LangMgr.getLab("Tips_friend_4"))
            }
        }
    }
    onClickRefresh() {
        let tiemr = new Date().getTime();
        let t = Math.floor((tiemr - this.lastRefreshTimer) / 1000);
        if (t > 5) {
            FriendControl.ins.requestRecommendFriend();
        } else {
            //ShowTips((5 - t) + "秒后在刷新");
            //ShowTips((5 - t) + LangMgr.getLab("Tips_friend_5"));
            ShowTips(LangMgr.getCombineString("Tips_friend_5", [(5 - t)]));
        }


    }
    onClickSearch() {
        if (this.searchEdit.string != "" && this.searchEdit.string != LangMgr.getLab("ui_friend_6")) {
            FriendControl.ins.requestFindFriend(this.searchEdit.string);
        } else {
            //ShowTips("请输入角色名")
            ShowTips(LangMgr.getLab("Tips_friend_6"))
        }

    }
    on_s2c_GetFriendSimpleRoleRsp(msg: proto.Msg_GetFriendSimpleRoleRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            if (msg.type == proto.FriendListType.FriendList) {
                this.initMyFriendView();
            } else if (msg.type == proto.FriendListType.ApplyList) {
                this.initApplyView();
            } else if (msg.type == proto.FriendListType.BlackList) {
                this.initBlackView();
            }
        }
    }
    on_s2c_AddFriendPush(msg: proto.Msg_AddFriendPush) {
        if (msg.type == this.currType) {
            this.initView();
        } else if (msg.type == proto.FriendListType.ApplyList || msg.type == proto.FriendListType.FriendList) {
            this.updateFriendNum();
        }
    }
    on_s2c_RemoveFriendPush(msg: proto.Msg_RemoveFriendPush) {
        if (msg.type == this.currType) {
            this.initView();
        } else if (msg.type == proto.FriendListType.ApplyList || msg.type == proto.FriendListType.FriendList) {
            this.updateFriendNum();
        }

    }
    on_s2c_RecommendFriendRsp(msg: proto.Msg_RecommendFriendRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        if (this.currType == 3) {
            this.searchRoleInfo = null;
            this.initRecommendView();

        }
        this.lastRefreshTimer = new Date().getTime();

    }
    on_s2c_Msg_AddBlacklistRsp(msg: proto.Msg_AddBlacklistRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            //ShowTips("添加黑名单成功");
            ShowTips(LangMgr.getLab("Tips_friend_7"));
        }
    }
    on_s2c_RemoveBlacklistRsp(msg: proto.Msg_RemoveBlacklistRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            //ShowTips("已移除黑名单");
            ShowTips(LangMgr.getLab("Tips_friend_8"));
        }
    }
    on_s2c_AddFriendRsp(msg: proto.Msg_AddFriendRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            //ShowTips("已发送好友请求");
            ShowTips(LangMgr.getLab("Tips_friend_9"));
        } else {
            // ShowTips(msg.error.message);
        }
    }
    on_s2c_FindFriendRsp(msg: proto.Msg_FindFriendRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            if (msg.role) {
                let info = new SimpleRoleInfo();
                info.merge(msg.role);
                this.searchRoleInfo = info;
                if (this.currType == 3) {
                    this.initRecommendView();
                }
            } else {
                //ShowTips("找不到用户")
                ShowTips(LangMgr.getLab("Tips_friend_10"))
            }
        } else {
            // if (msg.error) {
            //     ShowTips(msg.error.message)
            // }

        }

    }
    on_s2c_ConfirmFriendRsp(msg: proto.Msg_ConfirmFriendRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            //ShowTips("添加好友成功");
            ShowTips(LangMgr.getLab("Tips_friend_11"));
        }
    }
    on_s2c_RemoveFriendApplyRsp(msg: proto.Msg_RemoveFriendApplyRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            //ShowTips("已拒绝好友申请");
            ShowTips(LangMgr.getLab("Tips_friend_12"));
        }
    }
    on_s2c_RemoveFriendRsp(msg: proto.Msg_RemoveFriendRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            //ShowTips("移除好友成功");
            ShowTips(LangMgr.getLab("Tips_friend_13"));
        }
    }

    getCellCount() {
        return this.friendItemInfos.length;
    }
    getCellHigth() {
        return 100;
    }
    getCellIdentifer() {
        return "FriendListItem";
    }
    getCellView() {
        return instantiate(this.friendItemPrefab).getComponent(FriendListItem);
    }
    GetCellData(idx: number) {
        if (this.friendItemInfos[idx]) {
            return { type: this.currType, info: this.friendItemInfos[idx] }
        }

    }
    /**
   * 同步送礼数据
   * @param msg 
   */
    on_s2c_GiftPush(msg: proto.Msg_GiftPush) {
        if (this.currType == proto.FriendListType.FriendList) {
            this.initMyFriendView();
        }
    }
    /**
    * 收取礼物返回
    * @param msg 
    */
    on_s2c_RecvGiftRsp(msg: proto.Msg_RecvGiftRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            if (this.currType == proto.FriendListType.FriendList) {
                this.initMyFriendView();
            }
        } else {
            ShowTips(msg.error.message);
        }
    }
    /**
   * 赠与礼物返回
   * @param msg 
   */
    on_s2c_GivingGiftRsp(msg: proto.Msg_GivingGiftRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            if (this.currType == proto.FriendListType.FriendList) {
                this.initMyFriendView();
            }
        } else {
            ShowTips(msg.error.message);
        }
    }
}
/*
 * @Descripttion: 好友邀请管理
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kNegativeOneNumber, kOneNumber, kZeroNumber} from "../Common/CommonInterface";
import RedDotManager, { RedDotType } from "../Common/ReddotManager";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import { ShowTips, ShowTipsOfCustomString } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import FriendApplyInfoPfb from "./FriendApplyInfoPfb";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FriendApplyManagerPopLayer extends PopLayer {

    @property(cc.Label)
    lbl_count: cc.Label = null;

    @property(cc.Label)
    lbl_none_tip: cc.Label = null;

    @property(InfiniteList)
    list_view: InfiniteList = null;

    @property(cc.Prefab)
    pfb_friend_info_bar: cc.Prefab = null;

    @property({displayName: "好友信息条高度"})
    friend_info_bar_height: number = kZeroNumber;

    private _friend_info_list: proto.IFriendInfoData[] = [];

    onLoad () {
        //初始化scrollView接口
        this.list_view.Init({
            getCellNumber:    this.getCellCount.bind(this),
            getCellSize:      this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView:      this.getCellView.bind(this),
            getCellData:      this.getCellIdx.bind(this),
        });

        //监听"获取好友申请列表"消息
        Net.listenProtocol(proto.Ptl.GetFriendApplyListRsp, (buffer, ptl)=>{
            let msg = proto.Msg_GetFriendApplyListRsp.decode(buffer);
            cc.log("GetFriendApplyListRsp (获取好友申请列表) msg: " + JSON.stringify(msg));
            if(!msg){
                return;
            }

            this._friend_info_list = msg.friendApplyList;
            this.sortApplyInfoList();
            this.refreshPage();
        }, this);

        //监听处理好友申请消息
        Net.listenProtocol(proto.Ptl.OperatorFriendApplyRsp, (buffer, ptl)=>{
            let msg = proto.Msg_OperatorFriendApplyRsp.decode(buffer);
            cc.log("OperatorFriendApplyRsp (操作好友申请) msg: " + JSON.stringify(msg));
            if(msg && msg.result == proto.Msg_OperatorFriendApplyRsp.ErrorCode.Succeed){
                let str1 = tab.Data.TipsTableByKey.getValue("AlreadyLetPlayer").Value;    //已将玩家
                let str2 = tab.Data.TipsTableByKey.getValue("AlreadyAddFriends").Value;    //加为好友
                let str3 = tab.Data.TipsTableByKey.getValue("AlreadyRefusePlayer").Value;    //已拒绝玩家
                let str4 = tab.Data.TipsTableByKey.getValue("OfFriendRequest").Value;    //的好友申请

                msg.bAgree  && ShowTipsOfCustomString(str1 + msg.newFriendInfo.baseInfo.roleName + str2);
                let idx = this._friend_info_list.findIndex(tmpObj=>tmpObj.baseInfo.roleID === msg.newFriendInfo.baseInfo.roleID);
                if(idx != kNegativeOneNumber){
                    !msg.bAgree && ShowTipsOfCustomString(str3 + this._friend_info_list[idx].baseInfo.roleName + str4);
                    this._friend_info_list.splice(idx, kOneNumber);
                    this.refreshPage();
                }
                return;
            }
            proto.Msg_OperatorFriendApplyRsp.ErrorCode.ReachUpperLimit === msg.result && ShowTips("FriendCountMaxLimit");
        }, this);
    }

    start () {}

    onDestroy(){
        this._friend_info_list = [];
    }

    public initData(){
        let msg = new proto.Msg_GetFriendApplyListReq();
        Net.Send(proto.Ptl.GetFriendApplyListReq, msg);
    }

    /* 刷新界面
     */
    private refreshPage(){
        let applyListLen = this._friend_info_list.length;
        let bEmpty       = applyListLen <= kZeroNumber;
        RedDotManager.getInstance().UpdateRedDot(RedDotType.NewFriendApply, !bEmpty);
        this.setApplyCount(applyListLen);
        this.list_view.Reload(true, bEmpty);
    }
    
    /* 设置申请数量
     */
    private setApplyCount(cnt: number){
        this.lbl_count.string = `${cnt}/${tab.Data.GetKeyValue_ConfigTable().MaxFriendApplyCount}`;
        this.lbl_none_tip.node.active = cnt <= kZeroNumber;
    }
    
    /* 排序好友申请列表
     */
    private sortApplyInfoList(){
        this._friend_info_list.sort((data1: proto.IFriendApplyData, data2: proto.IFriendApplyData): number=>{
            if(data1.applyTime == data2.applyTime){
                return data2.baseInfo.seasonScore - data1.baseInfo.seasonScore;
            }

            return data2.applyTime - data1.applyTime;
        });
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
        return "friendApplyCell";
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

        let cell = cc.instantiate(this.pfb_friend_info_bar).getComponent(FriendApplyInfoPfb);
        return cell;
    }
}

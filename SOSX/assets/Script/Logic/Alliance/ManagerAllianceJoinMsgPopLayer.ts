/*
 * @Descripttion: 
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kNoneString, kZeroNumber } from "../Common/CommonInterface";
import { ShowTips, ShowTipsOfCustomString } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import AllianceApplyMsgPfb from "./AllianceApplyMsgPfb";
import AllianApplyInfoData, { checkRedDotOfApplyList } from "./AllianceCommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ManagerAllianceJoinMsgPopLayer extends PopLayer {

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Label)
    lbl_apply_count: cc.Label = null;

    @property(cc.Node)
    node_layout_apply: cc.Node = null;

    @property(cc.Label)
    lbl_no_msg_tip: cc.Label = null;

    @property(cc.Prefab)
    pfb_apply_info_bar: cc.Prefab = null;

    private _alliance_apply_list: proto.IAllianceApplyInfo[] = []; //当前联盟申请加入列表
    
    onLoad () {
        this.lbl_no_msg_tip.node.active = false;
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
        
        //监听联盟申请处理消息
        Net.listenProtocol(proto.Ptl.DealAllianceJoinRsp, (buffer, ptl)=>{
            let msg = proto.Msg_DealAllianceJoinRsp.decode(buffer);
            cc.log("DealAllianceJoinRsp(监听联盟申请处理消息) : msg " + JSON.stringify(msg))
            if(msg){
                this.removeApplyInfo(msg.roleID);
                
                if(proto.Msg_DealAllianceJoinRsp.ErrorCode.Succeed === msg.result){
                    let applyerName = AllianApplyInfoData.getInstance().getApplyerName();
                    let prefixStr   = kNoneString;
                    let suffixStr   = kNoneString;
                    if(AllianApplyInfoData.getInstance().getDeal()){
                        prefixStr = tab.Data.GetKeyValue_ConfigTable().PlayerText;
                        suffixStr = tab.Data.GetKeyValue_ConfigTable().ApplyJoinAllianceText
                    }else{
                        prefixStr = tab.Data.GetKeyValue_ConfigTable().RefuseJoinAllianceText;
                        suffixStr = tab.Data.GetKeyValue_ConfigTable().ApplyText;
                    }
                    ShowTipsOfCustomString(`${prefixStr}${applyerName}${suffixStr}`);
                    return;
                }

                proto.Msg_DealAllianceJoinRsp.ErrorCode.AlreadyDealed === msg.result && ShowTips("AllianceApplyDealed"); 
                proto.Msg_DealAllianceJoinRsp.ErrorCode.PastDue === msg.result       && ShowTips("AllianceApplyPastdue"); 
            }
        }, this);
    }

    onDestroy(){
        this._alliance_apply_list = [];
    }

    public initData(applyList: proto.IAllianceApplyInfo[]){
        this._alliance_apply_list = applyList;
        this.setNoMsgTipVisible();
        this.loadApplyMsgNode();
    }
    
    /* 加载申请人信息
     */
    private loadApplyMsgNode(){
        this.clearApplyInfoList();
        if(this._alliance_apply_list.length > kZeroNumber){
            for(let data of this._alliance_apply_list){
                let applyNode = cc.instantiate(this.pfb_apply_info_bar).getComponent(AllianceApplyMsgPfb);
                if(applyNode){
                    applyNode.initData(data);
                    this.node_layout_apply.addChild(applyNode.node);
                }
            } 
        }
    }

    /* 设置无申请信息的提示
     */
    private setNoMsgTipVisible(){
        let applyListLen                = this._alliance_apply_list.length;
        let maxApplyCnt                 = tab.Data.GetKeyValue_ConfigTable().AllianceMaxApplyCount;
        this.lbl_no_msg_tip.node.active = applyListLen == kZeroNumber;
        this.lbl_apply_count.string     = `${applyListLen}/${maxApplyCnt}`;
    }

    /* 清空申请人信息列表
     */
    private clearApplyInfoList(){
        for(let elem of this.node_layout_apply.getComponentsInChildren(AllianceApplyMsgPfb)){
            elem.node.removeFromParent();
            elem.node.destroy();
        } 
    }

    /* 删除申请信息根据roleID
     */
    private removeApplyInfo(roleID: string){
        this._alliance_apply_list = this._alliance_apply_list.filter(data=>data.roleID !== roleID);
        this.loadApplyMsgNode();  
        this.setNoMsgTipVisible(); 
        checkRedDotOfApplyList(this._alliance_apply_list.length);
    }
}

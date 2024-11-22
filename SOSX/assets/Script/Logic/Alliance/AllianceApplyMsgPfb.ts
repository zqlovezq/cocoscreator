/**
 * 申请加入联盟信息条预制件
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import AllianApplyInfoData, { getAllianceTimeFormat } from "./AllianceCommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AllianceApplyMsgPfb extends cc.Component {

    @property(cc.Label)
    lbl_apply_name: cc.Label = null;

    @property(cc.Label)
    lbl_apply_time: cc.Label = null;

    @property(cc.Label)
    lbl_season_score: cc.Label = null;

    @property(cc.Button)
    btn_refuse: cc.Button = null;

    @property(cc.Button)
    btn_agree: cc.Button = null;

    private _apply_role_id: string; //申请人role ID
    private _apply_name: string;  //申请人名称

    onLoad () {
        this.btn_refuse.node.on("click", this.onClickRefuse, this);
        this.btn_agree.node.on("click", this.onClickAgree,   this);
    }

    start () {

    }

    public initData(applyData: proto.IAllianceApplyInfo){
        this._apply_role_id = applyData.roleID;
        this._apply_name    = applyData.roleName;
        this.setApplyerName();
        this.setApplyTimes(applyData.applyTime);
        this.setApplyerSeasonScore(applyData.seasonScore);
    }

    /* 设置申请人名称
     */
    private setApplyerName(){
        this.lbl_apply_name.string = this._apply_name;
    }

    /* 设置申请时间
     * @param times   申请时间点
     */
    private setApplyTimes(times: number){
        this.lbl_apply_time.string = getAllianceTimeFormat(times);
    }

    /* 设置申请人赛季积分
     */
    private setApplyerSeasonScore(score: number){
        this.lbl_season_score.string = `${score}`;
    }

    /* 点击拒绝事件
     */
    private onClickRefuse(){
        this.disposeApplyInfo(false);
    }

    /* 点击同意事件
     */
    private onClickAgree(){
        this.disposeApplyInfo(true);
    }

    /* 处理申请信息
     * @param bAgree  是否同意
     */
    private disposeApplyInfo(bAgree: boolean){
        AllianApplyInfoData.getInstance().saveApplyerInfo(this._apply_name, bAgree);
        
        let msg    = new proto.Msg_DealAllianceJoinReq();
        msg.roleID = this._apply_role_id;
        msg.result = bAgree;
        Net.Send(proto.Ptl.DealAllianceJoinReq, msg);
    }
}

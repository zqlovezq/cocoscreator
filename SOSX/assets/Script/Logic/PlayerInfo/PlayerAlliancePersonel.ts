/*
 * @Descripttion: 联盟人事任命模块
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import AllianceExpelConfirmPfb from "../Alliance/AllianceExpelConfirmPfb";
import AlliancePromoteConfirmPfb from "../Alliance/AlliancePromoteConfirmPfb";
import { kNoneString, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { showPopLayerV2 } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerAlliancePersonel extends cc.Component {

    @property(cc.Button)
    btn_appoint: cc.Button = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    @property(cc.Label)
    lbl_demotion_tip: cc.Label = null;

    @property(cc.Label)
    lbl_expel_tip: cc.Label = null;

    @property(cc.Label)
    lbl_appoint_tip: cc.Label = null;

    @property(cc.Label)
    lbl_uplv: cc.Label = null;

    private _player_position: number = kZeroNumber;
    private _player_uuid: string     = kNoneString;
    private _player_name: string     = kNoneString;

    onLoad () {
        this.btn_cancel.node.on("click", this.onClickExpel,    this);
        this.btn_appoint.node.on("click", this.onClickAppoint, this);

        //监听联盟任命消息
        Net.listenProtocol(proto.Ptl.AllianceSetPostRankRsp, (buffer, ptl)=>{
            let msg = proto.Msg_AllianceSetPostRankRsp.decode(buffer);
            cc.log("AllianceSetPostRankRsp (联盟成员任职) msg: " + JSON.stringify(msg))
            if(msg && msg.result === proto.Msg_AllianceSetPostRankRsp.ErrorCode.Succeed && msg.playerUUID === this._player_uuid){
                this._player_position = msg.postRank;
                this.checkDisplayState();
            }
        }, this);
    }

    /**     
     * Description: 初始化联盟人事任命模块数据
     * @param position    联盟职位
     * @param playerUUID  玩家uuid
     * @param playerName  玩家名称
     */
    public initData(position: number, playerUUID: string, playerName: string){
        this._player_position = position;
        this._player_uuid     = playerUUID;
        this._player_name     = playerName;
        this.checkDisplayState();
    }

    /* 检测显示状态【哪些按钮要显示出来】
     */
    private checkDisplayState(){
        let selfAlliancePosition = Role.Instance.RoleData.allianceData.PostRank; //自身联盟职位
        let bCanExpel            = this._player_position == tab.AlliancePositionType.AlliancePositionType_Member; //可否驱逐
        let bCanAppoint          = false;  //可否任命【提升】
        let bCanDemotion         = false;  //可否降级
        let bVisibleUpLv         = false; //可否显示升级
        
        //自己是首领
        if(selfAlliancePosition == tab.AlliancePositionType.AlliancePositionType_Leader){
            bVisibleUpLv  = selfAlliancePosition < this._player_position;
            bCanDemotion = this._player_position < tab.AlliancePositionType.AlliancePositionType_Member;
            bCanAppoint = this._player_position === tab.AlliancePositionType.AlliancePositionType_DeputyLeader;
            this.setBtnVisible(bCanAppoint, bCanExpel, bCanDemotion, bVisibleUpLv);
            return;
        }

        //自己是副首领
        if(selfAlliancePosition == tab.AlliancePositionType.AlliancePositionType_DeputyLeader){
            bVisibleUpLv  = selfAlliancePosition < this._player_position - kOneNumber;
            bCanDemotion = this._player_position < tab.AlliancePositionType.AlliancePositionType_Member;
            this.setBtnVisible(false, bCanExpel, bCanDemotion, bVisibleUpLv);
            return;
        }

        //自身是元老，不具备任命权限，只能踢人
        if(selfAlliancePosition == tab.AlliancePositionType.AlliancePositionType_Senior){
            this.setBtnVisible(bCanAppoint, bCanExpel, bCanDemotion, false);
        }
    }
    
    /* 设置3个按钮的可见性
     * @param bCanAppoint   可否委任
     * @param bCanExpel     可否踢出
     * @param bCanDemotion  可否降级
     * @param bVisibleUpLv  可否显示升级
     */
    private setBtnVisible(bCanAppoint: boolean, bCanExpel: boolean, bCanDemotion: boolean, bVisibleUpLv: boolean){
        this.btn_appoint.node.active      = bVisibleUpLv || bCanAppoint;
        this.lbl_expel_tip.node.active    = bCanExpel;
        this.lbl_demotion_tip.node.active = bCanDemotion;
        this.lbl_appoint_tip.node.active  = bCanAppoint;
        this.lbl_uplv.node.active         = bVisibleUpLv && !bCanAppoint;
    }
    
    private onClickExpel(){
        this.lbl_demotion_tip.node.active && this.disposePersonelAppoint(true);
        this.lbl_expel_tip.node.active    && this.disposeExpel();
    }

    private onClickAppoint(){
        this.disposePersonelAppoint(false);
    }    

    /* 处理人事任命
     * @param bDemotion   是否降级
     */
    private disposePersonelAppoint(bDemotion: boolean){
        if(!bDemotion){
            let self = this;
            showPopLayerV2("prefab/AlliancePromoteConfirmPfb", AlliancePromoteConfirmPfb).then(layer =>{
                layer.initData(self._player_position, self._player_uuid, self._player_name);
            });
            return;
        }

        let msg      = new proto.Msg_AllianceSetPostRankReq();
        msg.postRank = bDemotion ? (this._player_position + kOneNumber) : 
                                   (this._player_position - kOneNumber);
        msg.roleID   = this._player_uuid;
        Net.Send(proto.Ptl.AllianceSetPostRankReq, msg);
    }

    /* 踢人 */
    private disposeExpel(){
        let self = this;
        showPopLayerV2("prefab/AllianceExpelConfirmPfb", AllianceExpelConfirmPfb).then(layer =>{
            layer.initData(self._player_uuid, self._player_name);
        });
    }
}

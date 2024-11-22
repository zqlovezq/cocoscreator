/**
 * 
*/

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { FightLoader } from "../Fight/FightLoader";
import FightMsgManager from "../Fight/FightMsgManager";
import { showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import ShareBtnModel from "../Common/ShareBtnModel";
import { tab } from "../../Table/table_gen";
import PopLayer from "../Utils/PopLayer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIGameModelFriendCreateRoom extends PopLayer {

    @property(cc.Node)
    close_btn:cc.Node = null;

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Button)
    cancal_btn: cc.Button = null;

    @property(ShareBtnModel)
    node_share_btn: ShareBtnModel = null;

    protected initPromise: Promise<any> = null; /*  */

    onLoad() {
        this.close_btn.on("click", ()=>{this.setVisible(false);}, this);
        //this.cancal_btn.node.on("click", this.onBtnClickCancle, this);
        this.cancal_btn.node.on("click", this.onMaskClicked, this);
        //this.share_btn.node.on("click", this.onShareClick, this);
        
        // /* 推送联盟战斗开始 */
        // Net.listenProtocolUnique(proto.Ptl.PushAllianceFightStart, (buffer, ptl) => {
        //     let msg = proto.Msg_PushAllianceFightStart.decode(buffer);
        //     cc.log("PushAllianceFightStart (推送联盟战斗开始) msg: " + JSON.stringify(msg))
        //     if (!msg) {
        //         return;
        //     }
        //     FightLoader.Instance.LoadFightScene("ChessFightScene", this.initPromise, proto.FightType.WorldChannelPvP);
        // }, this);
    }

    setRoom(msg) {
        this.node_share_btn.initData(tab.SharedType.SharedType_PVP, msg.roomID);
        this.label.string = msg.roomID;
        //this.initPromise = FightMsgManager.Instance.waitingMatchFight(proto.FightType.WorldChannelPvP);
    }

    /*  */
    onMaskClicked() {
        cc.log("onMaskClicked() called")
        this.setVisible(false);
        /* zhiboM@20230530,应策划的需求，点击Mask依然要取消掉房间 */
        let param = new proto.Msg_CancelMatchFightReq()
        Net.Send(proto.Ptl.CancelMatchFightReq, param)
    }

    /*  */
    onBtnClickCancle() {
        this.setVisible(false);
        console.log("zhibo+@20230522 Msg_CancelMatchFightReq(3)")
        // let param = new proto.Msg_CancelMatchFightReq()
        // Net.Send(proto.Ptl.CancelMatchFightReq, param)
        // cc.log("发送取消匹配协议")
    }

    onShareClick(){
        cc.log("onShareClick(分享至微信) Start")
    }

    onDestroy(): void {
        //Net.unlistenProtocol(proto.Ptl.PushAllianceFightStart);
    }
}

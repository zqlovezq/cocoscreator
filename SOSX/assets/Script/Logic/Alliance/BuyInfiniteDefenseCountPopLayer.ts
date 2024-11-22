/*
 * @Descripttion: 购买无限防御战斗次数弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { checkCanWatchAdvert, isValidObj, kNegativeOneNumber, kOneNumber, kZeroNumber, sendAdvertPos, WatchAdvert } from "../Common/CommonInterface";
import ConfirmTips from "../Common/ConfirmTips";
import Role from "../Common/Role";
import { ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BuyInfiniteDefenseCountPopLayer extends PopLayer {

    @property(cc.Button)
    btn_closed: cc.Button = null;
    
    @property(cc.Button)
    btn_cancel: cc.Button = null;

    @property(cc.Button)
    btn_recharge: cc.Button = null;

    @property(cc.Button)
    btn_advert: cc.Button = null;

    @property(cc.Label)
    lbl_buyDiamond: cc.Label = null;

    private _pve_data: proto.Msg_GetPveStatusRsp;

    onLoad () {
        this.btn_closed.node.on("click", ()=>{
            this.setVisible(false);
        }, this);

        this.btn_cancel.node.on("click", ()=>{
            this.setVisible(false);
        }, this);

        this.btn_advert.node.on("click", this.onClickAdvert,     this);
        this.btn_recharge.node.on("click", this.onClickRecharge, this);

        //监听合作模式广告消息响应
        Net.listenProtocol(proto.Ptl.BuyPveCountRsp, buffer=>{
            let msg = proto.Msg_BuyPveCountRsp.decode(buffer)
            cc.log("BuyPveCountRsp(监听合作模式广告消息响应) : msg " + JSON.stringify(msg))
            if(msg) {
                if(msg.result == proto.CommonErrorCode.Succeed) {
                    //this._pve_data.pveCount = msg.pveCount;
                    //this.refreshAdvertCount(this._pve_data.pveCount, this._pve_data.pveAdCount);
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyBuyPveSuccess);
                    this.setVisible(false);
                }
            }
        }, this);
    }

    public setData(data: proto.Msg_GetPveStatusRsp) {
        this._pve_data = data;
        this.setCostDiamondCount();
        this.refreshAdvertCount(data.pveCount, data.pveAdCount);
    }
    
    private setCostDiamondCount(){
        this.lbl_buyDiamond.string = `${tab.Data.GetKeyValue_ConfigTable().PveBuyCountCost}`;
    }
    
    private refreshAdvertCount(currentCount:number, adCount:number) {
        /*
        let maxCount = tab.Data.GetKeyValue_ConfigTable().PveMaxCount; 
        if(Role.Instance.isDemonPass) {
            //通行证
            maxCount = tab.Data.GetKeyValue_ConfigTable().PveVipMaxCount;
        }
        */

        //是否已达单日最大看广告次数
        this.btn_advert.node.active = checkCanWatchAdvert(tab.AdvertPosType.AdvertPosType_CooperationAddCount, adCount);
    }
    
    private onClickAdvert(){
        //sendAdvertPos(tab.AdvertPosType.AdvertPosType_CooperationAddCount);
        WatchAdvert((error: Error)=>{
            if(error === undefined){
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_CooperationAddCount, kZeroNumber);
            }
        }, 
        (bFinish: boolean)=>{
            if(bFinish){
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_CooperationAddCount, kOneNumber);
                let req = new proto.Msg_BuyPveCountReq();
                req.byAd = true;
                Net.Send(proto.Ptl.BuyPveCountReq, req);
                this._pve_data.pveAdCount++;
            }
        },tab.AdvertPosType.AdvertPosType_CooperationAddCount);
    }

    private onClickRecharge(){
        if(Role.Instance.Diamond < tab.Data.GetKeyValue_ConfigTable().PveBuyCountCost) {
            ShowTips("DiamondNotEnough")
            return;
        }

        ConfirmTips.show("BuyPveCountConfirm", ()=>{
            let req = new proto.Msg_BuyPveCountReq();
            req.byAd = false;
            Net.Send(proto.Ptl.BuyPveCountReq, req);
        })
    }
}

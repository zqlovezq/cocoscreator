/*
 * @Descripttion: 二次确认支援某卡牌弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { CardNodeState, isValidObj } from "../Common/CommonInterface";
import Role from "../Common/Role";
import SmallPortrait from "../Common/SmallPortrait";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ConfirmAllianceSupportPfb extends PopLayer {

    @property(cc.Node)
    node_card: cc.Node = null;

    @property(cc.Button)
    btn_confirm: cc.Button = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    private _card_static_id: number;
    private _card_uuid: string;

    onLoad () {
        this.btn_cancel.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_confirm.node.on("click", this.onClickSendSupport, this);
    }

    public initData(cardUUID: string){
        this._card_uuid = cardUUID;
        let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByUUID(cardUUID);
        if (!isValidObj(cardInfo)){
            if(!cc.sys.isNative){throw new Error("请求支援的卡牌数据有问题，不存在");}
            return;
        }

        this._card_static_id = cardInfo.staticId;
        this.setCard();
    }

    private setCard(){
        this.node_card.getComponent(SmallPortrait).initData(this._card_uuid, CardNodeState.CARD_NODE_STATE_NONE);
    }
    
    private onClickSendSupport(){
        let msg = new proto.Msg_AllianceCardRequestDonateReq();
        msg.cardID = this._card_static_id;
        Net.Send(proto.Ptl.AllianceCardRequestDonateReq, msg);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseSupportSelectCard);
        this.setVisible(false);
    }
}

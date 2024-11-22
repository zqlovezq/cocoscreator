/*
 * @Descripttion: 兑换码
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { checkStringIsAllSpace } from "../Alliance/AllianceCommonInterface";
import { popRewardLayer_Ex, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import { kNoneString } from "./CommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ExchangeCode extends PopLayer {
   
    @property(cc.Button)
    btn_clean: cc.Button = null;

    @property(cc.Button)
    btn_receive: cc.Button = null;

    @property(cc.EditBox)
    edit_exchange_code: cc.EditBox = null;

    onLoad () {
        
        this.btn_clean.node.on("click", ()=>{
            this.edit_exchange_code.string = kNoneString;
        }, this);

        this.btn_receive.node.on("click", ()=>{
            if(checkStringIsAllSpace(this.edit_exchange_code.string)){
                ShowTips("StringIsEmpty");
                return;
            }

            let msg  = new proto.Msg_ExchangeCodeReq();
            msg.code = this.edit_exchange_code.string;
            Net.Send(proto.Ptl.ExchangeCodeReq, msg);
        }, this);

        //监听领取奖励消息
        Net.listenProtocol(proto.Ptl.ExchangeCodeRsp, (buffer, ptl)=>{
            let msg = proto.Msg_ExchangeCodeRsp.decode(buffer);
            cc.log("ExchangeCodeRsp (监听领取奖励消息) : msg " + JSON.stringify(msg));
            if(msg && msg.result === proto.Msg_ExchangeCodeRsp.ErrorCode.Succeed){
                popRewardLayer_Ex(msg.rewards, null, true);
                this.setVisible(false);
                return;
            }

            proto.Msg_ExchangeCodeRsp.ErrorCode.Invalid === msg.result && ShowTips("ExchangeCodeInvalid");
            proto.Msg_ExchangeCodeRsp.ErrorCode.AlreadyExchange === msg.result && ShowTips("AlreadyUsedExchangeCode");
        }, this);
    }
}

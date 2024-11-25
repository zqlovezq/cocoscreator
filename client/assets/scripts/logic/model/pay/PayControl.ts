import { _decorator, Component, log, Node } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { EventMgr } from '../../mgr/EventMgr';
import { PayData } from './PayData';
import { tab } from '../../../Table/table_gen';
import { ItemData } from '../item/ItemData';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { ActivityData } from '../activity/ActivityData';
import { ActivityControl } from '../activity/ActivityControl';
import { Role } from '../../fight/base/obj/role/role/Role';
import { RoleData } from '../role/RoleData';
import { LoginData } from '../login/LoginData';
import { ChannelMgr } from '../../../channel/ChannelMgr';
import { Global } from '../../../Global';
import { P8PostEventName } from '../../../channel/ChannelDefine';
import Fixed from '../../../framework/collision/Fixed';
import { CommonTipsPop, CommonTipsPopCloseType } from '../common/CommonTipsPop';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;
/**
 * 
 * PayControl
 * zhudingchao
 * Wed Jun 26 2024 10:38:41 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/pay/PayControl.ts
 *
 */

@ccclass('PayControl')
export class PayControl extends AbsControl {
    private static _instance: PayControl;
    private payCallBack: Function;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new PayControl();
        }
        return this._instance;
    }
    purge(): void {
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetPayInfoRsp, this.on_s2c_GetPayInfoRsp, this);
        EventMgr.onMsg(proto.Ptl.StartPayRsp, this.on_s2c_StartPayRsp, this);
        EventMgr.onMsg(proto.Ptl.DeliverGoodsPush, this.on_s2c_DeliverGoodsPush, this);
        EventMgr.onMsg(proto.Ptl.EndPayRsp, this.on_s2c_EndPayRsp, this);
        EventMgr.onMsg(proto.Ptl.PayByVoucherRsp, this.on_s2c_PayByVoucherRsp, this);

    }
    request() {
        this.requestGetPayInfo();
    }
    requestGetPayInfo() {
        let msg = new proto.Msg_GetPayInfoReq();
        Net.Send(proto.Ptl.GetPayInfoReq, msg)
    }



    requestPay(rechargeId: number, callback: Function) {
        let voucherNum = ItemData.ins.getCount(tab.CurrencyType.CurrencyType_Voucher);
        let rechargeTable = tab.getData().RechargeTableById.getValue(rechargeId);
        this.payCallBack = callback;
        let price = rechargeTable[ChannelMgr.channelTab.Currency];
        if (voucherNum >= price) {
            // ShowTips("弹出使用代金券界面");
            let tips = LangMgr.getCombineString("ui_voucher_1", [price])
            CommonTipsPop.create(tips, (closeType: CommonTipsPopCloseType) => {
                if (closeType == CommonTipsPopCloseType.confirm) {
                    let msg = new proto.Msg_PayByVoucherReq();
                    msg.rechargeId = rechargeId;
                    Net.Send(proto.Ptl.PayByVoucherReq, msg)
                } else {
                    console.log("cancel")
                }
            })
            return;
        }

        let msg = new proto.Msg_StartPayReq();
        msg.rechargeId = rechargeId;
        Net.Send(proto.Ptl.StartPayReq, msg)

    }
    on_s2c_GetPayInfoRsp(msg: proto.Msg_GetPayInfoRsp) {
        PayData.ins.payInfoMsg = msg;
    }
    on_s2c_DeliverGoodsPush(msg: proto.Msg_DeliverGoodsPush) {

        let rechargeTable = tab.getData().RechargeTableById.getValue(msg.rechargeId);
        if (rechargeTable) {
            if (rechargeTable.Type == tab.GoodsType.GoodsType_FirstRecharge) {
                PayData.ins.firstRechargeSucc(msg.rechargeId);
            } else if (rechargeTable.Type == tab.GoodsType.GoodsType_BreakEgg) {
                ActivityData.ins.breakEggMsg = null;
            } else if (rechargeTable.Type == tab.GoodsType.GoodsType_MonthlyPass) {
                ActivityControl.ins.requestGetMonthlyPassInfo()
            }
            let money = rechargeTable.PriceDollar;
            if (money == 99) {
                ChannelMgr.postEvent(P8PostEventName.pay_0_99)
            } else if (money == 999) {
                ChannelMgr.postEvent(P8PostEventName.pay_10)
            } else if (money == 4999) {
                ChannelMgr.postEvent(P8PostEventName.pay_50)
            } else if (money == 9999) {
                ChannelMgr.postEvent(P8PostEventName.pay_100)
            }
        }
        if (this.payCallBack) {
            this.payCallBack(msg);
            this.payCallBack = null;
        }

        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })

    }
    on_s2c_EndPayRsp(msg: proto.Msg_EndPayRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
        }
    }
    on_s2c_StartPayRsp(msg: proto.Msg_StartPayRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            if (ChannelMgr.isDevChannel) {
                let sedMsg = new proto.Msg_EndPayReq();
                sedMsg.orderId = msg.orderId;
                Net.Send(proto.Ptl.EndPayReq, sedMsg)
            } else {
                //SDK支付
                let t_obj: any = RoleData.ins.sdkRole()

                t_obj.sign = msg.mobile37Sign || ""
                t_obj.time = msg.mobile37SignTime || RoleData.ins.getServerUtcTime()

                t_obj.onLineTime = "1"

                t_obj.objJson = msg.orderId
                t_obj.orderId = msg.orderId

                t_obj.gameOrderIdTst = Global.isDebug ? 1 : 0   //@"0"是正式环境订单  @"1" 是测试环境订单

                let rechangeTab = tab.getData().RechargeTableById.getValue(msg.rechargeId)
                console.log(msg.rechargeId)

                t_obj.productld = rechangeTab[ChannelMgr.channelTab.ProductType]
                t_obj.ptPrice = ChannelMgr.getSdkRechargePrice(rechangeTab)
                t_obj.rmb = Fixed.toFixed(ChannelMgr.getSdkRechargePrice(rechangeTab) * 100)
                t_obj.productDesc = LangMgr.getLab(rechangeTab.Desc)
                t_obj.extraInfo = { svc_group: LoginData.ins.loginGroup } //@"0.01"
                t_obj.extraInfo = JSON.stringify(t_obj.extraInfo)
                t_obj.ratio = 10;
                t_obj.goodNum = 1;
                t_obj.buyTitle = LangMgr.getLab(rechangeTab.Desc);
                t_obj.buyName = LangMgr.getLab(rechangeTab.Desc);
                t_obj.productDesc = LangMgr.getLab(rechangeTab.Desc);

                ChannelMgr.pay(t_obj)
            }
        }
    }
    on_s2c_PayByVoucherRsp(msg: proto.Msg_PayByVoucherRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            log("代金券充值 ===", msg)
        }
    }

}
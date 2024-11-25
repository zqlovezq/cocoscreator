import { _decorator, Component, EditBox, Node } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { ShowTips, UIMgr } from '../../../mgr/UIMgr';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { ViewName } from '../../../define/ViewDefine';
import { RoleControl } from '../RoleControl';
import { LangMgr } from '../../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * RoleInfoRedemptionCodePop
 * zhudingchao
 * Thu Jun 20 2024 11:35:00 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/role/roleInfo/RoleInfoRedemptionCodePop.ts
 *
 */

@ccclass('RoleInfoRedemptionCodePop')
export class RoleInfoRedemptionCodePop extends ViewPop {

    @property(EditBox)
    editBox: EditBox = null;
    register(): void {
        EventMgr.onMsg(proto.Ptl.UseRedeemCodeRsp, this.on_s2c_UseRedeemCodeRsp, this)
    }
    onShow(): void {

    }
    onClickConfirm() {
        if (this.editBox.string == "") {
            //ShowTips("请输入兑换码")
            ShowTips(LangMgr.getLab("Tips_redemptioncode_1"))
            return;
        }
        RoleControl.ins.requestUseRedeemCode(this.editBox.string);
    }
    // 使用兑换码返回
    on_s2c_UseRedeemCodeRsp(msg: proto.Msg_UseRedeemCodeRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {

            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards });
            this.onClose();
        }else{
            
        }

    }
}
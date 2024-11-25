import { _decorator, Button, Component, EditBox, Label, Node, Sprite } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { RoleData } from '../RoleData';
import { ItemData } from '../../item/ItemData';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { tab } from '../../../../Table/table_gen';
import { ShowItemNotEnoughTips, ShowTips } from '../../../mgr/UIMgr';
import { isChEngNumber } from '../../../utils/GameUtil';
import { LangMgr } from '../../../mgr/LangMgr';
import SensitiveWordsManager from '../../../utils/SensitiveWordsManager';
const { ccclass, property } = _decorator;

@ccclass('RoleInfoChangeNamePop')
export class RoleInfoChangeNamePop extends ViewPop {
    @property({ displayName: "输入名字", type: EditBox })
    r_name: EditBox = null;

    @property(Sprite)
    sp_diamond: Sprite = null;

    @property(Button)
    btn_cost: Button = null;

    @property(Label)
    lbl_cost_diamond: Label = null;

    @property(Button)
    btn_free: Button = null;

    @property(Button)
    btn_close: Button = null;

    onShow(): void {
        const changeNameConfig = tab.getData().GetKeyValue_ConfigTable().ChangeNameCost;
        this.btn_cost.node.active = RoleData.ins.changeNameTimes>0;
        this.btn_free.node.active = RoleData.ins.changeNameTimes===0;
        this.btn_cost.node.on("click", () => { this.onClickOk() }, this);
        this.btn_free.node.on("click", () => { this.onClickOk() }, this);
        const itemTab = ItemData.ins.getByItemId(1).itemTable;
        this.sp_diamond.setTexture(itemTab.Icon);
        this.lbl_cost_diamond.string = String(changeNameConfig[RoleData.ins.changeNameTimes>=2?2:RoleData.ins.changeNameTimes])

    }
    public onClickOk() {
        const changeNameConfig = tab.getData().GetKeyValue_ConfigTable().ChangeNameCost;
        const needDiamond = changeNameConfig[RoleData.ins.changeNameTimes>=2?2:RoleData.ins.changeNameTimes];
        if(this.btn_cost.node.active && RoleData.ins.diamond<needDiamond){
            ShowItemNotEnoughTips(1);
        return;
        }
        if(!isChEngNumber(this.r_name.string)) {
            ShowTips(LangMgr.getLab("Tips_changename_1"));
            return
        }

        if (!SensitiveWordsManager.ins.check(this.r_name.string)) {
            ShowTips(LangMgr.getLab("Tips_changename_1"));
            return
        }

        let msg = new proto.Msg_ChangeRoleNameReq();
        msg.name = this.r_name.string;
        Net.Send(proto.Ptl.ChangeRoleNameReq, msg)
    }
    public endedEditBox() {
        this.cutoutNameLen();
    }
    private cutoutNameLen() {
        let name = this.r_name.string;
        let bOverLimit = name.length > 7;
        if (bOverLimit) {
            name = name.substr(0, 7);
            this.r_name.string = name;
        }
    }

    private deleteSpecialStr() {
        let name = this.r_name.string;
        let idx = name.indexOf("_", 0);
        if (idx != -1) {
            name = name.substring(idx + 0);
        }
        this.r_name.string = name;
    }

    private disposeRandomName() {
        this.setSysName();
    }

    private setSysName() {
        this.r_name.string = RoleData.ins.name;
        this.cutoutNameLen();
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {

    }
    unRegister(): void {
        super.unRegister()
    }
}



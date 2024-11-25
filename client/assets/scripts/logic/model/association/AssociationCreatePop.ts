import { _decorator, Component, EditBox, Label, Node, Toggle } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { SettingsManager } from '../role/SettingsManager';
import { RoleData } from '../role/RoleData';
import { tab } from '../../../Table/table_gen';
import { ShowItemNotEnoughTips, ShowTips } from '../../mgr/UIMgr';
import { AssociationControl } from './AssociationControl';
import { AssociationData } from './AssociationData';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('AssociationCreatePop')
export class AssociationCreatePop extends ViewPop {
    @property(Toggle)
    toggle_auto_enter: Toggle = null;//自动审批加入按钮
    @property(EditBox)
    edit_box_create_name: EditBox = null;//创建公会的名字
    @property(EditBox)
    edit_box_create_notice: EditBox = null;//创建公会的公告
    @property(Label)
    lbl_cost_diamond: Label = null;
    private _clickToggle: boolean = false;
    onShow(): void {
        this.toggle_auto_enter.isChecked = !SettingsManager.ins.getSetting("needCheckAssociation")
        this.lbl_cost_diamond.string = String(tab.getData().GetKeyValue_ConfigTable().CreateGuildCostDiamond)
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {

    }
    unRegister(): void {
        super.unRegister();
    }
    /* 创建公会 */
    reqCreateGuild() {
        // 钻石不足
        if (RoleData.ins.diamond < tab.getData().GetKeyValue_ConfigTable().CreateGuildCostDiamond) {
            ShowItemNotEnoughTips(1);
            return;
        }
        if (this.edit_box_create_name.string.length === 0) {
            console.log("公会名字不能为空")
            return;
        }
        // 当前时间不足
        const curTime = RoleData.ins.getServerUtcTime();
        if (AssociationData.ins.getAssocitionInfo()&&curTime < AssociationData.ins.getAssocitionInfo().notAllowJoinTime) {
            console.log("创建公会cd未结束");
            const str = LangMgr.getCombineString("Tips_association_4", [tab.getData().GetKeyValue_ConfigTable().GuildJoinCd / 60]);
            ShowTips(str);
            return
        }
        this.onClose();
        let noticeStr = this.edit_box_create_notice.string;
        if (!noticeStr) {
            noticeStr = LangMgr.getLab("ui_association_1");
        }
        AssociationControl.ins.reqCreateGuild(this.edit_box_create_name.string, 0, noticeStr, !this.toggle_auto_enter.isChecked);
    }
    onClickEnter() {
        this._clickToggle = true;
    }
    onClickAutoEnterToggle() {
        if (this._clickToggle) {
            this._clickToggle = false;
        }
    }
}



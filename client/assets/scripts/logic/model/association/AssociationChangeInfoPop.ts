import { _decorator, Color, Component, EditBox, Label, Node, Sprite } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { AssociationData } from './AssociationData';
import { tab } from '../../../Table/table_gen';
import { RoleData } from '../role/RoleData';
import { ShowItemNotEnoughTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { AssociationControl } from './AssociationControl';
const { ccclass, property } = _decorator;

@ccclass('AssociationChangeInfoPop')
export class AssociationChangeInfoPop extends ViewPop {
    @property(Sprite)
    sp_flag_img: Sprite = null;
    @property(EditBox)
    edit_box_change_name:EditBox = null;//更改公会的名字
    @property(Label)
    lbl_cost_diamond: Label = null;
    public curSelectFlagId: number = 0;
    onShow(): void {
        this.edit_box_change_name.string = AssociationData.ins.getAssocitionSimpleInfo().name;
        this.curSelectFlagId = AssociationData.ins.getAssocitionSimpleInfo().flagId ? AssociationData.ins.getAssocitionSimpleInfo().flagId : 1;
        this.lbl_cost_diamond.string = String(tab.getData().GetKeyValue_ConfigTable().GuildChangeNameCost);
        if (RoleData.ins.diamond < tab.getData().GetKeyValue_ConfigTable().GuildChangeNameCost) {
            this.lbl_cost_diamond.color = new Color().fromHEX(tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
        }else{
            this.lbl_cost_diamond.color = new Color().fromHEX("ffffff");
        }
        this.refreshFlagId();
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {

    }
    unRegister(): void {
        super.unRegister();
    }
    refreshFlagId() {
        const flagtab = tab.getData().GuildFlagTableById.getValue(this.curSelectFlagId);
        this.sp_flag_img.setTexture(flagtab.IconUrl);
    }
    /* 更换旗帜跟公会名字 */
    onClickChangeInfo() {
        if (RoleData.ins.diamond < tab.getData().GetKeyValue_ConfigTable().GuildChangeNameCost) {
            ShowItemNotEnoughTips(1);
            return;
        }
        if (this.edit_box_change_name.string.length === 0) {
            console.log("更改信息名字不能为空")
            return;
        }
        AssociationControl.ins.reqSetGuildNameAndFlag(this.edit_box_change_name.string, this.curSelectFlagId);
        this.onClose();
    }
    /* 点击更换旗帜 */
    onClickChangeFlagId() {
        UIMgr.ins.show({ viewName: ViewName.AssociationChangeFlagPop })
    }
}



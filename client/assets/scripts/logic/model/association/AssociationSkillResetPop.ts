import { _decorator, Component, Label, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { CommonItem } from '../item/CommonItem';
import { ItemInfo } from '../item/ItemInfo';
import { tab } from '../../../Table/table_gen';
import { AssociationData } from './AssociationData';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { AssociationControl } from './AssociationControl';
import { proto } from 'client_protocol';
import { EventMgr } from '../../mgr/EventMgr';
import { RoleData } from '../role/RoleData';
import { ShowItemNotEnoughTips } from '../../mgr/UIMgr';
const { ccclass, property } = _decorator;

@ccclass('AssociationSkillResetPop')
export class AssociationSkillResetPop extends ViewPop {
    @property(Node)
    node_content: Node = null;
    @property(Label)
    lbl_diamond_cost:Label = null;
    private curClass: tab.HeroClass = tab.HeroClass.HeroClass_Assassin;
    onShow(): void {
        this.curClass = this.openData;
        this.node_content.destroyAllChildren();
        this.lbl_diamond_cost.string = String(tab.getData().GetKeyValue_ConfigTable().GuildAttrResetCost)
        const materialMap = AssociationData.ins.getResetSkillMaterial(this.curClass);
        materialMap.forEach((value, key) => {
            const award = new ItemInfo();
            award.itemId = key;
            award.num = value;
            ItemPoolMgr.ins.createItem(award, this.node_content)
        })
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.ResetGuildSkillRsp, this.on_s2c_ResetGuildSkillRsp, this);
    }
    unRegister(): void {
        super.unRegister();
    }
    /* 重置技能 */
    resetGuildSkill() {
        if (RoleData.ins.diamond < tab.getData().GetKeyValue_ConfigTable().GuildAttrResetCost) {
            ShowItemNotEnoughTips(1);
            return;
        }
        AssociationControl.ins.reqResetGuildSkill(this.curClass);
    }
    on_s2c_ResetGuildSkillRsp(msg: proto.Msg_ResetGuildSkillRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.onClose()
    }
}



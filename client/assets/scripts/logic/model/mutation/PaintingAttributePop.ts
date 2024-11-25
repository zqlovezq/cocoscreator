import { _decorator, Component, Label, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { HeroTeamControl } from '../hero/HeroTeamControl';
import { tab } from '../../../Table/table_gen';
const { ccclass, property } = _decorator;

@ccclass('PaintingAttributePop')
export class PaintingAttributePop extends ViewPop {
    @property(Label)
    lbl_atk:Label = null;
    @property(Label)
    lbl_def:Label = null;
    @property(Label)
    lbl_hp:Label = null;
    register(): void {
        
    }
    onShow(): void {
        const atkAttr = HeroTeamControl.ins.getPaintingAttrByType(tab.AttrType.AttrType_Attack);
        const defAttr = HeroTeamControl.ins.getPaintingAttrByType(tab.AttrType.AttrType_Defence);
        const hpAttr = HeroTeamControl.ins.getPaintingAttrByType(tab.AttrType.AttrType_Hp);
        this.lbl_atk.string = String(atkAttr?atkAttr:0);
        this.lbl_def.string = String(defAttr?defAttr:0);
        this.lbl_hp.string = String(hpAttr?hpAttr:0);
    }
}



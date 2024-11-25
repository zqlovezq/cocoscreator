import { _decorator, Component, EventTouch, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import { EquipInfo } from './EquipInfo';
import { EquipAttrInfo } from './EquipAttrInfo';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
const { ccclass, property } = _decorator;

@ccclass('EquipmentGrowthMaxItem')
export class EquipmentGrowthMaxItem extends Component {

    @property(Label)
    nameLab: Label = null;
    @property(Label)
    levelLab: Label = null;

    @property(Node)
    contentNode: Node = null;
    @property(Prefab)
    attrPrefab: Prefab = null;
    private type:number;

    initData(equipInfo: EquipInfo, type: number) {
        if (type == 1) {
            this.levelLab.string = equipInfo.enhanceLv + ""
            let qhstr=LangMgr.getLab(tab.EquipUpgradeType[tab.EquipUpgradeType.EquipUpgradeType_Enhance])
            // this.nameLab.string="强化等级(上限"+limitLevel+"级)";
            this.nameLab.string=LangMgr.getCombineString("ui_equip_1",[qhstr]);
            this.initAttrItem(equipInfo.baseAttrInfos,equipInfo.enhanceLv);
        } else {
            this.levelLab.string = equipInfo.refineLv + ""
            let qhstr=LangMgr.getLab(tab.EquipUpgradeType[tab.EquipUpgradeType.EquipUpgradeType_Refine])
            // this.nameLab.string="强化等级(上限"+limitLevel+"级)";
            this.nameLab.string=LangMgr.getCombineString("ui_equip_1",[qhstr]);
            this.initAttrItem(equipInfo.extraAttrInfos,equipInfo.refineLv);
        }
        this.type=type;

    }
    initAttrItem(attrs: Array<EquipAttrInfo>,level:number=0) {
        this.contentNode.removeAllChildren();
        for (let key in attrs) {
            let node: Node = instantiate(this.attrPrefab);

            node.parent = this.contentNode;
            let icon = node.getChildByName("icon").getComponent(Sprite);
            let t = tab.getData().HeroAttrClientTableByType.getValue(attrs[key].attrTable.AttrType)
            icon.setTexture(t.Icon)
            let add=attrs[key].getAddValueByLevel(level);
            node.getChildByName("now_txt").getComponent(Label).string = (attrs[key].attrTable.Base+add) + "";

        }
    }
    onClickHelpBtn(event:EventTouch) {
        let node:Node=event.currentTarget;
        let key="Tips_equip_1"
        if(this.type==1){
            key="Tips_equip_1"
        }else{
            key="Tips_equip_2"
        }
        UIMgr.ins.show({ viewName: ViewName.CommonBlackTipsPop,data:{"worldPos":node.worldPosition,"WordTableKey":key }});
    }
}



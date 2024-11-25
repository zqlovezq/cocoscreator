import { _decorator, Component, Node } from 'cc';
import { EquipInfo } from '../../equip/EquipInfo';
import { CommonItem } from '../../item/CommonItem';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { tab } from '../../../../Table/table_gen';
import { ShowTips, UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { EquipmentItem } from '../../item/EquipmentItem';
import { LangMgr } from '../../../mgr/LangMgr';
import { OpenFunctionMgr } from '../../../../Common/component/OpenFunctionMgr';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
const { ccclass, property } = _decorator;

@ccclass('HeroEquipSlotItem')
export class HeroEquipSlotItem extends Component {
    @property(Node)
    emptyNode: Node = null;
    @property(Node)
    lockNode: Node = null;
    @property(Node)
    equipItem: Node = null;
    @property(Node)
    node_red:Node = null;


    private equipInfo: EquipInfo;
    private heroClass: number;
    private equipType: number;
    private comItem: EquipmentItem;
    private isLock:boolean;

    start(): void {

    }
    initData(heroClass: number, type: number, equip: EquipInfo) {
        this.isLock=true;
        this.heroClass = heroClass;
        this.equipType = type;
        this.equipInfo = equip;
        if (this.equipInfo) {
            this.emptyNode.active=false;
            this.equipItem.active=true;
            this.lockNode.active=false;
            if (!this.comItem) {
                let node = ItemPoolMgr.ins.createEquipItem(this.equipInfo,this.equipItem,false);
                this.comItem = node.getComponent(EquipmentItem);
            } else {
                this.comItem.initData(this.equipInfo,false);
            }
            // this.comItem.setIsTouchItem(false);
        }else{
            this.equipItem.active=false;
            this.emptyNode.active=true;
            if(this.equipType==tab.EquipType.EquipType_Max){
                this.lockNode.active=true;
                this.isLock=false;
            }else{
                this.lockNode.active=false;
            } 
        }
        if(this.equipType==tab.EquipType.EquipType_Feather){
            this.node_red.active = RedMgr.ins.isRed(RedDotType.Wear_Jade, String(this.heroClass))
        }
    }

    onClickItem() {
        if(!this.isLock){
            //ShowTips("暂未开启")
            ShowTips(LangMgr.getLab("ui_climbingtower_12"))
            return;
        }
        if (this.equipInfo) {
            if(this.equipInfo.equipTable.Type==tab.EquipType.EquipType_Feather){
                const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Jade);
                if(isOpen){
                    UIMgr.ins.show({ viewName: ViewName.JadeDetailPop, data: this.equipInfo })

                }else{
                    ShowTips(LangMgr.getLab("ui_climbingtower_12"))
                }
            }else{
                UIMgr.ins.show({ viewName: ViewName.EquipmentDetailPop, data: this.equipInfo })
            }
        }else{
            if(this.equipType==tab.EquipType.EquipType_Feather){
                const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Jade);
                if(isOpen){
                    UIMgr.ins.show({ viewName: ViewName.JadeSelectPop, data: {"heroClass":this.heroClass} })
                }else{
                    ShowTips(LangMgr.getLab("ui_climbingtower_12"))
                }
            }else{
                UIMgr.ins.show({viewName:ViewName.EquipmentView,data:{"type":3,"heroClass":this.heroClass,"equipType":this.equipType}});
            }
        }
    }

}



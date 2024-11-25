import { _decorator, Component, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import { EquipInfo } from '../equip/EquipInfo';
import { LangMgr } from '../../mgr/LangMgr';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { CommonItem } from '../item/CommonItem';
import { tab } from '../../../Table/table_gen';
import { JadeSelectattrItem } from './JadeSelectattrItem';
import { EquipData } from '../equip/EquipData';
import { EquipControl } from '../equip/EquipControl';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { HeroData } from '../hero/HeroData';
import { HeroTeamControl } from '../hero/HeroTeamControl';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

@ccclass('JadeSelectItem')
export class JadeSelectItem extends Component {
    @property(Node)
    itemParent: Node = null;
    @property(Label)
    nameLab: Label = null;
    @property(Label)
    scoreLab: Label = null;
    @property(Node)
    attrNode: Node = null;
    @property(Node)
    skillNode: Node = null;
    @property(Node)
    equipNode: Node = null;
    @property(Node)
    exchangeNode: Node = null;
    @property(Node)
    unequipNode: Node = null;
    @property(Prefab)
    selectAttrItemPrefab: Prefab = null;

    @property(Node)
    belongNode: Node = null;
    @property(Node)
    heroNode: Node = null;
    @property(Label)
    heroNameLab: Label = null;
    @property(Node)
    notNode: Node = null;
    @property(Node)
    jadeNode: Node = null;


    private equipInfo: EquipInfo;
    private heroClass: number;
    start() {


    }
    initData(equipInfo: EquipInfo, heroClass: number) {
        this.equipInfo = equipInfo;
        if (this.equipInfo) {
            this.jadeNode.active = true;
            this.notNode.active = false;
            this.heroClass = heroClass;
            this.initView();
        } else {
            this.jadeNode.active = false;
            this.notNode.active = true;
        }


    }
    initView() {
        this.nameLab.string = LangMgr.getLab(this.equipInfo.itemTable.Name);
        let item = ItemPoolMgr.ins.createItem(this.equipInfo, this.itemParent,false);
        // item.getComponent(CommonItem).setIsTouchItem(false);
        this.scoreLab.string = this.equipInfo.score + "";
        this.belongNode.active = this.equipInfo.isWear;
        this.initAttrItem();
        this.initSkilItem();
        if (this.equipInfo.heroClass == this.heroClass) {
            this.unequipNode.active = true;
            this.exchangeNode.active = false;
            this.equipNode.active = false;
        } else {
            this.exchangeNode.active = this.equipInfo.isWear;
            this.equipNode.active = !this.equipInfo.isWear;
        }
        if (this.equipInfo.isWear) {
            let info = HeroTeamControl.ins.getHeroByClass(this.equipInfo.heroClass);
            //this.heroNameLab.string =LangMgr.getLab(info.itemTable.Name)+"穿戴中";
            this.heroNameLab.string = LangMgr.getLab(info.itemTable.Name) + LangMgr.getLab("ui_jade_10");
            let heroItem=ItemPoolMgr.ins.createHeroItem(info,this.heroNode);
            // heroItem.parent=this.heroNode;
            
            // this.heroIcon.setTexture(info.itemTable.Icon);
        }


    }
    initAttrItem() {
        let attrs = this.equipInfo.baseAttr;
        for (let key in attrs) {
            let table = tab.getData().EquipAttrTableById.getValue(attrs[key]);
            let item = instantiate(this.selectAttrItemPrefab);
            item.parent = this.attrNode;
            item.getComponent(JadeSelectattrItem).initAttr(table);

            // item.getChildByName("name_txt").getComponent(Label).string=LangMgr.getLab(tab.AttrType[table.AttrType]);
            // item.getChildByName("now_txt").getComponent(Label).string=table.Base+"";
        }
    }

    initSkilItem() {
        let skills = this.equipInfo.skillList;
        for (let key in skills) {
            let item = instantiate(this.selectAttrItemPrefab);
            item.parent = this.skillNode;
            item.getComponent(JadeSelectattrItem).initSkill(skills[key]);

            // item.getChildByName("name_txt").getComponent(Label).string=LangMgr.getLab(tab.AttrType[table.AttrType]);
            // item.getChildByName("now_txt").getComponent(Label).string=table.Base+"";
        }
    }

    onClickEquip() {

        const isJadeGuide = Boolean(RoleData.ins.clientData.jadeGuildOver);
        if(!isJadeGuide){
            RoleData.ins.setClientData("jadeGuildOver","true");
        }

        let con = EquipData.ins.getEquipContainerDataByHeroClass(this.heroClass);
        if (con.slotData&&con.slotData[this.equipInfo.equipTable.Type]&&con.slotData[this.equipInfo.equipTable.Type].equipId>0) {
             let id = con.slotData[this.equipInfo.equipTable.Type].equipId;
            // // EquipControl.ins.reqUndressEquip(id, this.equipInfo.heroClass)
            // EquipControl.ins.reqSwitchEquip(id, this.equipInfo.id, this.heroClass, this.equipInfo.heroClass)
            EquipControl.ins.reqUndressEquip(id,this.heroClass)
        }
        EquipControl.ins.reqChangEquips(this.heroClass, [this.equipInfo.id]);
        
      
        UIMgr.ins.hideView(ViewName.JadeSelectPop)
    }
    onClickExchange() {
        let con = EquipData.ins.getEquipContainerDataByHeroClass(this.heroClass);
        if (con.slotData&&con.slotData[this.equipInfo.equipTable.Type]) {
            let id = con.slotData[this.equipInfo.equipTable.Type].equipId;
            EquipControl.ins.reqSwitchEquip(id, this.equipInfo.id, this.heroClass, this.equipInfo.heroClass)
            
        }else{
            EquipControl.ins.reqSwitchEquip(0, this.equipInfo.id, this.heroClass, this.equipInfo.heroClass)
        }
        // EquipControl.ins.reqSwitchEquip(this)
        // EquipControl.ins.reqChangEquips(this.heroClass,[this.equipInfo.id]);
        UIMgr.ins.hideView(ViewName.JadeSelectPop)
    }
    onClickUnEquip() {
        EquipControl.ins.reqUndressEquip(this.equipInfo.id, this.equipInfo.heroClass)
        UIMgr.ins.hideView(ViewName.JadeSelectPop)
    }

}



import { _decorator, Component, instantiate, Label, Node, Prefab, RichText, Sprite, Toggle, ToggleContainer } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { JadeRecastItem } from './JadeRecastItem';
import { EquipInfo } from '../equip/EquipInfo';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { CommonItem } from '../item/CommonItem';
import { ShowItemNotEnoughTips, ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { tab } from '../../../Table/table_gen';
import { EquipData } from '../equip/EquipData';
import { ItemData } from '../item/ItemData';
import { EquipControl } from '../equip/EquipControl';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { ItemControl } from '../item/ItemControl';
import { LangMgr } from '../../mgr/LangMgr';
import { JadeSkillItem } from './JadeSkillItem';
const { ccclass, property } = _decorator;

@ccclass('JadeRecastPop')
export class JadeRecastPop extends ViewPop {
    @property(Node)
    itemNode: Node = null;
    @property(Node)
    beforeNode: Node = null;
    @property(Node)
    afterNode: Node = null;

    @property(Sprite)
    resIcon: Sprite = null;
    @property(Label)
    resHaveLab: Label = null;
    @property(Label)
    resNeedLab: Label = null;
    @property(RichText)
    luckyLab: RichText = null;


    @property(Sprite)
    resIcon2: Sprite = null;
    @property(Label)
    resHaveLab2: Label = null;
    @property(Label)
    resNeedLab2: Label = null;

    @property(JadeRecastItem)
    recastItem1: JadeRecastItem = null;
    @property(JadeRecastItem)
    recastItem2: JadeRecastItem = null;
    @property(JadeRecastItem)
    recastItem3: JadeRecastItem = null;
    @property(Node)
    currSkillNode:Node=null;
    @property(Prefab)
    skillItemPrefab:Prefab=null;
    @property(ToggleContainer)
    toggleGroup:ToggleContainer=null;

    private equipInfo: EquipInfo;
    private upgardeTab: tab.EquipUpgradeTable;
    private selectTag:number=1;
    register(): void {
        EventMgr.onMsg(proto.Ptl.FeatherRecastRsp, this.on_s2c_FeatherRecastRsp, this)
        EventMgr.onMsg(proto.Ptl.FeatherRecastConfirmRsp, this.on_s2c_FeatherRecastConfirmRsp, this)

    }
    start(): void {
        this.equipInfo = this.openData;
        this.initView();

    }
    initView() {
        let item = ItemPoolMgr.ins.createItem(this.equipInfo,this.itemNode,false);
        // item.getComponent(CommonItem).setIsTouchItem(false);
        this.upgardeTab = EquipData.ins.getEquipUpgradeTab(tab.EquipUpgradeType.EquipUpgradeType_Recast, this.equipInfo.quality);
        if (this.equipInfo.newSkillList1.length > 0 ) {
            for(let key in this.toggleGroup.toggleItems){
                this.toggleGroup.toggleItems[key].isChecked=false;
            }
            this.afterNode.active = true;
            this.beforeNode.active = false;
            if(this.equipInfo.newSkillList2.length>0){
                this.recastItem2.initData(this.equipInfo.newSkillList1, true);
                this.recastItem3.initData(this.equipInfo.newSkillList2, true);
            }else{
                this.recastItem2.initData(this.equipInfo.skillList, true);
                this.recastItem3.initData(this.equipInfo.newSkillList1, true);
            }
            let resItem = tab.getData().ItemTableById.getValue(this.upgardeTab.Materials[0]);
            this.resIcon2.setTexture(resItem.Icon);
            this.resHaveLab2.string = ItemData.ins.getCount(resItem.Id) + "";
            this.resNeedLab2.string = this.upgardeTab.Materials[1] + ""
            let currSkills=this.equipInfo.skillList;
            this.currSkillNode.removeAllChildren();
            for(let key in currSkills){
                let item=instantiate(this.skillItemPrefab);
                item.parent=this.currSkillNode;
                item.getComponent(JadeSkillItem).initSkillId(currSkills[key]);
            }

        } else {
            this.afterNode.active = false;
            this.beforeNode.active = true;
            this.recastItem1.initData(this.equipInfo.skillList, false);
            let resItem = tab.getData().ItemTableById.getValue(this.upgardeTab.Materials[0]);
            this.resIcon.setTexture(resItem.Icon);
            this.resHaveLab.string = ItemData.ins.getCount(resItem.Id) + "";
            this.resNeedLab.string = this.upgardeTab.Materials[1] + ""
        }
        let str=LangMgr.getCombineString("ui_jade_1",[this.equipInfo.luckRecastRCount])
        this.luckyLab.string = str + "";
    }
    onClickRecastBtn() {
        let resItem = tab.getData().ItemTableById.getValue(this.upgardeTab.Materials[0]);
      
        if(ItemData.ins.getCount(resItem.Id)>=this.upgardeTab.Materials[1]){
            EquipControl.ins.reqFeatherRecast(this.equipInfo.id);
        }else{
            //ShowTips(LangMgr.getLab(resItem.Name)+"不足")
            // ShowTips(LangMgr.getCombineString("Tips_itemshortage", [LangMgr.getLab(resItem.Name)]))
            this.onClose();
            ShowItemNotEnoughTips(resItem.Id);
        }
        // EquipControl.ins.reqFeatherRecast(this.equipInfo.id);
    }
    onClickSkillPreview() {
        UIMgr.ins.show({ viewName: ViewName.JadeSkillPreviewPop })
    }
    onClickHelp() {

    }
    onClickSaveBtn() {
        let tag=-1;
        for(let key in this.toggleGroup.toggleItems){
            // this.toggleGroup.toggleItems[key].isChecked=false;
            if(this.toggleGroup.toggleItems[key].isChecked){
                tag=Number(key)+1;
            }
        }
        if(tag<0){
            //ShowTips("请选择后在保存")
            ShowTips(LangMgr.getLab("Tips_jade_2"))
            return;
        }
        let r;
        if(tag==1){
           r=proto.Msg_FeatherRecastConfirmReq.ConfirmResult.Left;
           
        }else{
            r=proto.Msg_FeatherRecastConfirmReq.ConfirmResult.Right;
        }
        EquipControl.ins.reqFeatherRecastConfirmReq(this.equipInfo.id,r);
      
    }
    onClickContinuebBtn() {
        let resItem = tab.getData().ItemTableById.getValue(this.upgardeTab.Materials[0]);
      
        if(ItemData.ins.getCount(resItem.Id)>=this.upgardeTab.Materials[1]){
            EquipControl.ins.reqFeatherRecast(this.equipInfo.id);
        }else{
            //ShowTips(LangMgr.getLab(resItem.Name)+"不足")
            // ShowTips(LangMgr.getCombineString("Tips_itemshortage", [LangMgr.getLab(resItem.Name)]))
            this.onClose();
            ShowItemNotEnoughTips(resItem.Id);
        }
     
    }
    onClickTogger(event, type) {
        this.selectTag=Number(type);
    }
    /**
     * 羽毛重铸
     * @param msg 
     */
    on_s2c_FeatherRecastRsp(msg: proto.Msg_FeatherRecastRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            this.initView();
        }
        // EquipData.ins.updateEquipMasterData(msg.heroClass,msg.masterData);
    }
    /**
    * 羽毛重铸
    * @param msg 
    */
    on_s2c_FeatherRecastConfirmRsp(msg: proto.Msg_FeatherRecastConfirmRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            this.initView();
        }
        // EquipData.ins.updateEquipMasterData(msg.heroClass,msg.masterData);
    }
    protected onDestroy(): void {
        EventMgr.unTarget(this);
    }
}



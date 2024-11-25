import { _decorator, Component, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { EquipInfo } from '../equip/EquipInfo';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { CommonItem } from '../item/CommonItem';
import { LangMgr } from '../../mgr/LangMgr';
import { tab } from '../../../Table/table_gen';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { JadeSkillItem } from './JadeSkillItem';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { EquipControl } from '../equip/EquipControl';
const { ccclass, property } = _decorator;

@ccclass('JadeDetailPop')
export class JadeDetailPop extends ViewPop {
    @property(Node)
    itemNode: Node = null;
    @property(Label)
    nameLab: Label = null;
    @property(Label)
    typeLab: Label = null;
    @property(Label)
    scoreLab: Label = null;
    @property(Node)
    baseAttrNode: Node = null;
    @property(Node)
    skillNode: Node = null;
    @property(Label)
    desLab: Label = null;
    @property(Node)
    decomposeBtn: Node = null;
    @property(Node)
    exchangeBtn: Node = null;
    @property(Prefab)
    detailItemPrefab: Prefab = null;
    @property(Prefab)
    skillItemPrefab: Prefab = null;
    @property(Sprite)
    lockSpr: Sprite = null;
    @property(Node)
    yuMaoBiaoTiDiNode:Node=null;
    @property(Node)
    yuMaoBiaoTiDiNode1:Node=null;
    @property(Node)
    tipsNode:Node=null;
    @property(Node)
    btnNode:Node=null;
    private euqipInfo: EquipInfo;
    

    register() {
        EventMgr.onMsg(proto.Ptl.LockEquipRsp, this.on_s2c_LockEquipRsp, this);
    }
    start() {
        this.initData();
        this.initView();
    }
    initData() {
        this.euqipInfo = this.openData;


    }
    initView() {
        let item = ItemPoolMgr.ins.createItem(this.euqipInfo,this.itemNode, false);
        // item.getComponent(CommonItem).setIsTouchItem(false);
        this.nameLab.string = LangMgr.getLab(this.euqipInfo.itemTable.Name);
        this.typeLab.string = LangMgr.getLab(this.euqipInfo.getEquipTypeNameKey());
        this.scoreLab.string = this.euqipInfo.score + "";
        this.desLab.string = LangMgr.getLab(this.euqipInfo.itemTable.Desc);
        this.initAttrItme();
        this.exchangeBtn.active = this.euqipInfo.isWear;
        this.decomposeBtn.active = !this.euqipInfo.isWear;
        this.initSkillItem();
        this.updateLockState();

        // this.equipBtn.active=!this.euqipInfo.isWear;
        // this.growthBtn.active=this.euqipInfo.isWear;
        // this.resolveBtn.active=!this.euqipInfo.isWear;
        // this.exchangeBtn.active=this.euqipInfo.isWear;

    }
    updateLockState() {
        let lockStr = "unlock"
        if (this.euqipInfo.locked) {
            lockStr = "lock";
        }
        this.lockSpr.setTexture("textrue/common/button/" + lockStr)
    }
    initAttrItme() {
        let baseAttr = this.euqipInfo.baseAttr;
        if(baseAttr.length>0){
            for (let key in baseAttr) {
                let item = this.createAttrItem(baseAttr[key]);
                item.parent = this.baseAttrNode;
            }
            this.yuMaoBiaoTiDiNode.active=true;
            this.yuMaoBiaoTiDiNode1.active=false;
            this.btnNode.active=true;
            this.lockSpr.node.active=true;
        }else{
            this.yuMaoBiaoTiDiNode.active=false;
            this.yuMaoBiaoTiDiNode1.active=true;
            this.btnNode.active=false;
            this.lockSpr.node.active=false;
            let bast=this.euqipInfo.equipTable.BaseAttrGroupId;
            let table=tab.getData().EquipAttrGroupTableById.getValue(bast);
            let atts=table.List.split("|");
            for(let key in atts){
                let str=atts[key].split(";");
                let item = this.createAttrItem(Number(str[0]));
                item.parent = this.baseAttrNode;
            }
        }
        


    }
    initSkillItem() {
        let skills = this.euqipInfo.skillList;
        this.skillNode.active=skills.length>0;
        if(skills.length>0){
            for (let key in skills) {
                let item: Node = instantiate(this.skillItemPrefab);
                item.parent = this.skillNode;
                item.getComponent(JadeSkillItem).initSkillId(skills[key]);
    
            }
        }
        this.tipsNode.active=skills.length==0;
        
       
    }
    private createAttrItem(attrId: number) {
        let table = tab.getData().EquipAttrTableById.getValue(attrId);
        let item = instantiate(this.detailItemPrefab);

        item.getChildByName("name_txt").getComponent(Label).string = LangMgr.getLab(tab.AttrType[table.AttrType]);
        item.getChildByName("now_txt").getComponent(Label).string = table.Base + "";
        return item;
    }


    onClickResolve() {
        UIMgr.ins.hideView(ViewName.BagPop);
        UIMgr.ins.show({ viewName: ViewName.EquipResolvePop })
        this.onClose();
    }
    onClickExchange() {
        // this.onClose();
        UIMgr.ins.show({ viewName: ViewName.JadeSelectPop, data: { "heroClass": this.euqipInfo.heroClass } })
        this.onClose();
    }
    onClickGrowth() {
        if(this.euqipInfo.locked){
            //ShowTips("锁住的状态下不能重铸");
            ShowTips(LangMgr.getLab("Tips_jade_1"));
            return;
        }
        UIMgr.ins.show({ viewName: ViewName.JadeRecastPop, data: this.euqipInfo })
        this.onClose();
    }
    onClickLock() {
       // if (this.euqipInfo.locked) {
            EquipControl.ins.reqLockEquip(this.euqipInfo.id,!this.euqipInfo.locked);
        //}
    }
    on_s2c_LockEquipRsp(msg: proto.Msg_LockEquipRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            this.updateLockState();
        }
    }
    protected onDestroy(): void {
        super.onDestroy();
        EventMgr.unTarget(this);
    }


}



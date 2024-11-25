import { _decorator, Component, instantiate, Label, labelAssembler, log, Node, Prefab, SpringJoint2D, Sprite, UI, View, view } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { EquipInfo } from './EquipInfo';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { LangMgr } from '../../mgr/LangMgr';
import { tab } from '../../../Table/table_gen';
import { CommonItem } from '../item/CommonItem';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { EquipControl } from './EquipControl';
import { EquipAttrInfo } from './EquipAttrInfo';
const { ccclass, property } = _decorator;

@ccclass('EquipmentDetailPop')
export class EquipmentDetailPop extends ViewPop {
    @property(Node)
    itemNode:Node=null;
    @property(Label)
    nameLab:Label=null;
    @property(Label)
    typeLab:Label=null;
    @property(Label)
    scoreLab:Label=null;
    @property(Node)
    baseAttrNode:Node=null;
    @property(Node)
    addAttrNode:Node=null;
    @property(Node)
    additionNode:Node=null;
    @property(Label)
    desLab:Label=null;
    @property(Sprite)
    sp_bg:Sprite = null;

    @property(Node)
    resolveBtn:Node=null;
    @property(Node)
    equipBtn:Node=null;
    @property(Node)
    exchangeBtn:Node=null;
    @property(Node)
    growthBtn:Node=null;
    @property(Prefab)
    detailItemPrefab:Prefab=null;
    public euqipInfo:EquipInfo=null;
    register(){


    }
    onLoad (){

    }
    start() {
        this.initData();
        this.initView();
    }
    initData(){
        this.euqipInfo=this.openData;
       
    }
    initView(){
        let item=ItemPoolMgr.ins.createEquipItem(this.euqipInfo,this.itemNode,false);
        // item.getComponent(CommonItem).setIsTouchItem(false);
        this.nameLab.string=LangMgr.getLab(this.euqipInfo.itemTable.Name);
        this.typeLab.string=LangMgr.getLab(this.euqipInfo.getEquipTypeNameKey());
        this.scoreLab.string=this.euqipInfo.score+"";
        this.desLab.string=LangMgr.getLab(this.euqipInfo.itemTable.Desc);

        const quality = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(Number(this.euqipInfo.itemTable.Quality-1));
        if(quality&&quality.SkillBg){
            this.sp_bg.setTexture(quality.SkillBg)
        }

        this.initAttrItme();
        this.equipBtn.active=!this.euqipInfo.isWear;
        this.growthBtn.active=this.euqipInfo.isWear;
        this.resolveBtn.active=!this.euqipInfo.isWear;
        this.exchangeBtn.active=this.euqipInfo.isWear;

    }
    initAttrItme(){
        let baseAttr=this.euqipInfo.baseAttrInfos;
        let enhanceLv=this.euqipInfo.isWear?this.euqipInfo.enhanceLv:0
        let refineLv=this.euqipInfo.isWear?this.euqipInfo.refineLv:0;
        // let equipAttrInfo=this.euqipInfo.isWear?
        for(let key in baseAttr){
          let addNum=baseAttr[key].getAddValueByLevel(enhanceLv);
          let item=this.createAttrItem(baseAttr[key],addNum);
          item.parent=this.baseAttrNode;
        }

        let addAttr=this.euqipInfo.extraAttrInfos;
        this.additionNode.active=addAttr.length>0;
        for(let key in addAttr){
          let addNum=addAttr[key].getAddValueByLevel(refineLv);
          let item=this.createAttrItem(addAttr[key],addNum);
          item.parent=this.addAttrNode;
        }
    }
    private createAttrItem(attr:EquipAttrInfo,addNum:number=0){
        // let table=tab.getData().EquipAttrTableById.getValue(attrId);
        let item=instantiate(this.detailItemPrefab);
      
        item.getChildByName("name_txt").getComponent(Label).string=LangMgr.getLab(tab.AttrType[attr.attrTable.AttrType]);
        item.getChildByName("now_txt").getComponent(Label).string=attr.attrTable.Base+(addNum>0?"(+"+addNum+")":"");
        return item;
    }

    onClickEquip(){
        if(UIMgr.ins.getView(ViewName.EquipmentView)){
             log("穿戴-------------")
             EquipControl.ins.reqChangEquips(this.euqipInfo.equipTable.Class,[this.euqipInfo.id])
        }else{
            UIMgr.ins.hideView(ViewName.BagPop);
            UIMgr.ins.show({viewName:ViewName.EquipmentView,data:{"type":3,"equipInfo":this.euqipInfo}});
        }
    
       this.onClose();
    }
    onClickResolve(){
        UIMgr.ins.hideView(ViewName.BagPop);
        UIMgr.ins.show({ viewName: ViewName.EquipResolvePop })
        this.onClose();
    }
    onClickExchange(){
        UIMgr.ins.show({viewName:ViewName.EquipmentView,data:{"type":3,"equipInfo":this.euqipInfo}});
        this.onClose();

    }
    onClickGrowth(){
        UIMgr.ins.show({viewName:ViewName.EquipmentView,data:{"type":1,"equipInfo":this.euqipInfo}});
        this.onClose();
    }
    protected onDisable(): void {
        // ItemPoolMgr.ins.putCommonItem( this.itemNode.children[0])
       
    }
     public onDestroy(): void {
        super.onDestroy();
        // ItemPoolMgr.ins.putEquipItem( this.itemNode.children[0])
    }
}



import { _decorator, Button, Color, color, Component, Label, labelAssembler, log, Node, Sprite, v3 } from 'cc';
import { ItemPoolMgr } from './ItemPoolMgr';
import { EquipInfo } from '../equip/EquipInfo';
import { UIMgr } from '../../mgr/UIMgr';
import { tab } from '../../../Table/table_gen';
import { ViewName } from '../../define/ViewDefine';
import { HeroStar } from '../hero/HeroStar';
const { ccclass, property } = _decorator;

/**
 * 
 * EquipmentItem
 * zhudingchao
 * Mon May 20 2024 16:08:27 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/item/EquipmentItem.ts
 *
 */

@ccclass('EquipmentItem')
export class EquipmentItem extends Component {
    @property(Button)
    button: Button = null;
    @property(Sprite)
    qualityImg: Sprite = null;
    @property(Sprite)
    iconImg: Sprite = null;
    @property(Node)
    selectNode: Node = null;
    @property(Label)
    strengthenLvLab:Label=null;
    @property(HeroStar)
    heroStar:HeroStar=null;
    @property(Sprite)
    proSpr:Sprite=null;
    @property(Node)
    forgeNode:Node=null;
    @property(Label)
    forgeLab:Label=null;
    @property(Sprite)
    starbgNode:Sprite=null;

    private data:  EquipInfo;
    private touchCallBack: Function;
    private isTouch: boolean = true;
    public isSelectState: boolean = false;
    initData(data:  EquipInfo,isTouch:boolean=true) {
        this.data = data;
        this.isTouch=isTouch;
        this.initView();
        this.touchCallBack =null;
        if (this.button) {
            this.button.enabled = this.isTouch;
        }
      

    }

    // initId(id: number, num: number) {
    //     let info = new ItemInfo();
    //     info.itemId = id
    //     info.num = num;
    //     this.initData(info)
    // }
    start(): void {
        this.button.enabled = this.isTouch;
    }


    initView() {
        let itemTab = this.data.itemTable;
        this.qualityImg.setTexture("textrue/quality/qualityBg_" + itemTab.Quality);
        this.iconImg.setTexture(itemTab.Icon);
        this.setSelectState(false);
        if(this.equipInfo.type==tab.EquipType.EquipType_Feather){
            this.heroStar.node.active=false;
            this.forgeNode.active=false;
            this.strengthenLvLab.node.active=false;
            this.proSpr.node.active=false;
            this.starbgNode.node.active=false;

        }else{
            this.proSpr.node.active=true;
            this.heroStar.node.active=true;
            this.starbgNode.node.active=true;
            this.heroStar.showStar(this.data.equipTable.EquipStar);
            let h=tab.getData().HeroClassTableByHeroClass.getValue(this.equipInfo.equipTable.Class)
            this.proSpr.setTexture(h.Icon);
            let itemquality=tab.getData().ItemQualityTableByQuality.getValue(this.equipInfo.quality)
            this.starbgNode.setTexture(itemquality.HeroStarBg);
            if(this.equipInfo.isWear){
                if(this.equipInfo.enhanceLv>0){
                    this.strengthenLvLab.node.active=true;
                    this.strengthenLvLab.string="+"+this.equipInfo.slotInfo.enhanceLv;
                    if(this.equipInfo.enhanceLv<this.equipInfo.slotInfo.enhanceLv){
                        this.strengthenLvLab.color=new Color().fromHEX("#C11212");
                     }else{
                         this.strengthenLvLab.color=new Color().fromHEX("#FFFFFF");
                     }
                }else{
                    this.strengthenLvLab.node.active=false;
                }
                if(this.equipInfo.refineLv>0){
                    this.forgeNode.active=true;
                    this.forgeLab.string="+"+this.equipInfo.refineLv;
                    if(this.equipInfo.refineLv<this.equipInfo.slotInfo.refineLv){
                       this.forgeLab.color=new Color().fromHEX("#C11212");
                    }else{
                        this.forgeLab.color=new Color().fromHEX("#FFFFFF");
                    }
                }else{
                    this.forgeNode.active=false;
                }
            }else{
                this.forgeNode.active=false;
                this.strengthenLvLab.node.active=false;
            }
        }
      
        
        // if (itemTab.Type == tab.ItemType.ItemType_Equip) {
        //     this.numLab.node.active = false;
        // } else {
        //     let itemData = <ItemInfo>this.data;
        //     this.numLab.string = itemData.num + "";
        // }
        // this.addTouchEvent();
        // this.setSelectState(false);


    }
    setLv(EnhanceLv:number,refineLv:number){
        this.strengthenLvLab.node.active = EnhanceLv>0;
        this.forgeNode.active = refineLv>0;
        this.strengthenLvLab.string="+"+EnhanceLv;
        this.forgeLab.string="+"+refineLv;
    }
    setTouchCallBack(callBack: Function) {
        this.touchCallBack = callBack;

    }
    setIsTouchItem(b: boolean) {
        this.isTouch = b;
        if (this.button) {
            this.button.enabled = b;
        }
    }

    private onTouchItem() {
        if (!this.isTouch) {
            return;
        }
        if (this.touchCallBack) {
            this.touchCallBack(this);
        } else {
            log("点击了item")
            let type = this.data.itemTable.BagType;
            if (type == tab.BagType.BagType_Equip) {
                UIMgr.ins.show({ viewName: ViewName.EquipmentDetailPop, data: this.data })
            } else if (type == tab.BagType.BagType_Jade) {
                UIMgr.ins.show({ viewName: ViewName.JadeDetailPop, data: this.data })
            }
        }
    }
    /**设置选择状态 */
    public setSelectState(b: boolean) {
        this.isSelectState = b;
        this.selectNode.active = b;

    }
    protected onDisable(): void {
        this.heroStar.onDisable();
    }

    protected onDestroy(): void {
        this.node.targetOff(this);
        log("item onDestroy")
    }
    putItem() {
        ItemPoolMgr.ins.putEquipItem(this.node);
    }
    public get equipInfo() {
        return this.data as EquipInfo;
    }

    unuse() {
        this.node.targetOff(this);
        this.touchCallBack = null;
        this.isTouch = true;
        this.data = null;
        log("item onDisable")
        this.node.setPosition(v3(0, 0));
    }

}
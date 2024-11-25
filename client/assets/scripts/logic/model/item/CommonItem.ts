import { _decorator, Button, color, Color, Component, Label, log, Node, ProgressBar, Sprite, v3 } from 'cc';
import { ItemInfo } from './ItemInfo';
import { EquipInfo } from '../equip/EquipInfo';
import { ResMgr } from '../../mgr/ResMgr';
import { tab } from '../../../Table/table_gen';
import { ItemPoolMgr } from './ItemPoolMgr';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { HeroStar } from '../hero/HeroStar';
import { GameUtil, handleNumerText } from '../../utils/GameUtil';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
const { ccclass, property } = _decorator;

@ccclass('CommonItem')
export class CommonItem extends Component {
    @property(Button)
    button: Button = null;
    @property(Sprite)
    qualityImg: Sprite = null;
    @property(Sprite)
    iconImg: Sprite = null;
    @property(Node)
    starNode: Node = null;
    @property(Label)
    numLab: Label = null;
    @property(Node)
    selectNode: Node = null;
    @property(Node)
    consumeNode: Node = null;
    @property(Label)
    haveLab: Label = null;
    @property(Label)
    needLab: Label = null;
    @property(Label)
    consumeLab:Label=null;
    @property(Node)
    pieceNode: Node = null;

    @property(Sprite)
    sp_LT:Sprite = null;
    @property(Sprite)
    sp_LB:Sprite = null;
    @property(Sprite)
    sp_RT:Sprite = null;
    public data: ItemInfo | EquipInfo;
    private touchCallBack: Function;
    private isTouch: boolean = true;
    public isSelectState: boolean = false;
    private isConsume: boolean = false;
    initData(data: ItemInfo | EquipInfo, isTouch: boolean = true, isConsume: boolean = false) {
        this.data = data;
        this.isTouch = isTouch;
        this.node.getChildByName("redDot").active = false;
        this.isConsume = isConsume;
        this.initView();
        this.touchCallBack = null;
        if (this.button) {
            this.button.enabled = this.isTouch;
        }






    }

    initId(id: number, num: number) {
        let info = new ItemInfo();
        info.itemId = id
        info.num = num;
        this.initData(info)
    }
    start(): void {
        this.button.enabled = this.isTouch;
    }


    initView() {
        this.pieceNode.active = false;
        let itemTab = this.data.itemTable;
        this.qualityImg.setTexture("textrue/quality/qualityBg_" + itemTab.Quality);
        this.iconImg.setTexture(itemTab.Icon);
        this.setExtraPic();
        this.selectNode.active = false;
        this.starNode.active = false;
        if (itemTab.Type == tab.ItemType.ItemType_Equip || this.isConsume) {
            this.numLab.node.active = false;
        } else {
            let itemData = <ItemInfo>this.data;
            this.numLab.node.active = Number(itemData.num) > 0;
            this.numLab.string = "x" +GameUtil.convertNumber(itemData.num) + "";
            if(itemTab.Type===tab.ItemType.ItemType_Piece){
                this.setPiece();
            }
        }
        // this.addTouchEvent();
        this.setSelectState(false);
        this.consumeNode.active = this.isConsume;
        if (this.isConsume) {
            let itemData = <ItemInfo>this.data;
            this.needLab.node.active=true;
            this.consumeLab.node.active=true;
            this.haveLab.string = GameUtil.convertNumber(itemData.num) + "";
            this.needLab.string = GameUtil.convertNumber(itemData.needNum,true) + "";
            if (Number(itemData.num) >= Number(itemData.needNum)) {
                this.haveLab.color = new Color().fromHEX(tab.getData().GetKeyValue_ConfigTable().InterfaceTxtGreen);
            } else {
                this.haveLab.color = new Color().fromHEX(tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
            }

        }



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
    private addTouchEvent() {
        this.node.on(Node.EventType.TOUCH_END, this.onTouchItem, this)
    }
    private onTouchItem() {
        if (!this.isTouch) {
            return;
        }
        if (this.touchCallBack) {
            this.touchCallBack(this);
        } else {
            log("点击了item==", this.data.itemId)
            let type = this.data.itemTable.BagType;
            if (type == tab.BagType.BagType_Equip) {
                UIMgr.ins.show({ viewName: ViewName.EquipmentDetailPop, data: this.data })
            } else if (type == tab.BagType.BagType_Jade) {

                const info = new EquipInfo();
                info.itemId = this.data.itemId;

                UIMgr.ins.show({ viewName: ViewName.JadeDetailPop, data: info })
                
            } else if (type === tab.BagType.BagType_Fragment || type === tab.BagType.BagType_Goods || type === tab.BagType.BagType_Consumable) {
                UIMgr.ins.show({
                    viewName: ViewName.ItemInfoPop, data: {
                        itemId: this.data.itemId,
                    }
                })
            } else if (type === tab.BagType.BagType_None) {
                const isHero = tab.getData().HeroTableById.getValue(this.data.itemId)?true:false
                if(isHero){
                    HeroDataControl.ins.refreshBookData(this.data.itemId);
                    UIMgr.ins.show({ viewName: ViewName.HeroBagView ,data:{viewType:2},zIndex:300})
                }else{
                    UIMgr.ins.show({ viewName: ViewName.CommonBlackTipsPop, data: { "worldPos": this.node.worldPosition, "WordTableKey": this.data.itemTable.Desc } });
                }
            }
        }
    }
    /**设置选择状态 */
    public setSelectState(b: boolean) {
        this.isSelectState = b;
        this.selectNode.active = b;

    }
    getSelect() {
        return this.isSelectState;
    }
    protected onDestroy(): void {
        this.node.targetOff(this);
    }
    putCommonItem() {
        ItemPoolMgr.ins.putCommonItem(this.node);
    }
    setShowNum(num: number) {
        this.numLab.string ="x" + GameUtil.convertNumber(num) + ""
    }
    getItemCount() {
        return Number(this.numLab.string)
    }
    public get equipInfo() {
        return this.data as EquipInfo;
    }

    unuse() {
        this.node.targetOff(this);
        this.touchCallBack = null;
        this.isTouch = true;
        this.data = null;
        this.isSelectState = false;

        this.node.setPosition(v3(0, 0));
    }

    setStar(star: number) {
        this.starNode.active = true;
        this.starNode.getComponent(HeroStar).showStar(star);
    }
    setPiece() {
        const _isBag = this.judgeIsBagView();
        const itemInfo = this.data as ItemInfo;
        const quality = itemInfo.itemTable.Quality;
        const num = Number(itemInfo.num);
        this.pieceNode.active = true;
        let max = quality <= tab.ItemQuality.ItemQuality_Purple ? 30 : 50
        let bar = this.pieceNode.getChildByName("piece_bar").getComponent(ProgressBar);
        bar.node.active = _isBag;
        bar.progress = num / max;
        let num_txt = bar.node.getChildByName("num_txt").getComponent(Label);
        num_txt.string = num + "/" + max;
    }
    judgeIsBagView() {
        const BagPop = UIMgr.ins.getView('BagPop');
        if (BagPop) {
            return true;
        }
        return false;
    }
    /**隐身消耗数量分母 */
    hideConsumeFenMu(){
        this.needLab.node.active=false;
        this.consumeLab.node.active=false;
    }
    /* 设置左上图表 */
    setExtraPic(){
        const itemTab = this.data.itemTable;
        const LT = itemTab.MarkTopLeft;
        const LB = itemTab.MarkBottomLeft;
        const RT = itemTab.MarkTopRight;
        this.sp_LT.setTexture(LT);
        this.sp_LB.setTexture(LB)
        this.sp_RT.setTexture(RT);
    }
    protected onDisable(): void {
        this.starNode.getComponent(HeroStar).onDisable();
    }
}



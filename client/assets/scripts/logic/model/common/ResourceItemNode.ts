import { _decorator, Component, Label, log, Node, SpringJoint2D, Sprite } from 'cc';
import { ItemData } from '../item/ItemData';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { ItemInfo } from '../item/ItemInfo';
import { tab } from '../../../Table/table_gen';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { RoleData } from '../role/RoleData';
import {  GameUtil, setTextTime_3 } from '../../utils/GameUtil';
import { proto } from 'client_protocol';
import { ComponentBase } from '../../../framework/base/ComponentBase';
import RedComp from '../../../Common/component/RedComp';
import RedEventComp from '../../../Common/component/RedEventComp';
import { RedDotType } from '../../red/RedDotType';
import { RoleControl } from '../role/RoleControl';
import { MALLNAME } from '../../../Common/script/EnumTypeMgr';
const { ccclass, property } = _decorator;

@ccclass('ResourceItemNode')
export class ResourceItemNode extends ComponentBase {
    @property(Sprite)
    iconSpr: Sprite = null;
    @property(Label)
    numLab: Label = null;
    @property(Node)
    redPoint: Node = null;
    @property(Label)
    timerLab: Label = null;

    @property(Node)
    add_node:Node = null;
    @property(Node)
    click_item_node:Node = null;
    public itemId: number = 0;
    private itemInfo: ItemInfo;
    private lastTimer: number = 0;
    private staminaTotalTimer:number=0;

    public register(): void {
      
        EventMgr.onLocal(LocalEvent.Item_Update, this.updateResourceNum, this);
        EventMgr.onMsg(proto.Ptl.VipBonusPush, this.setShowNumLab, this)
    }
    initItemId(itemId: number) {
        this.itemId = itemId;
        if (this.itemId > 0) {
            // this.updateResourceNum();
            this.initView();

        }
        if (this.itemId == tab.CurrencyType.CurrencyType_Stamina) {
            EventMgr.onMsg(proto.Ptl.BuyStaminaRsp, this.updateStaminaTimer, this)
            EventMgr.onMsg(proto.Ptl.GetStaminaInfoRsp, this.updateStaminaTimer, this)
            let com= this.node.addComponent(RedComp);
            com.redNode=this.redPoint;
            let evet=new RedEventComp();
            evet.event=RedDotType.RedStamina;
            // evet.child = String(tab.AdType.AdType_BuyStamina)
            com.types.push(evet);
            com.addRed();
        }else if(this.itemId == tab.CurrencyType.CurrencyType_Gold){
            let com= this.node.addComponent(RedComp);
            com.redNode=this.redPoint;
            let evet=new RedEventComp();
            evet.event=RedDotType.GoldBuy;
            // evet.child = String(tab.AdType.AdType_BuyGold)
            com.types.push(evet);
            com.addRed();
        }

    }
    start() {


    }
    initView() {
        let itemInfo = ItemData.ins.getByItemId(this.itemId);
        if (!itemInfo) {
            itemInfo = new ItemInfo()
            itemInfo.initItemData(this.itemId, 0);
        }
        this.itemInfo = itemInfo;
      
        this.iconSpr.setTexture(itemInfo.itemTable.Icon);
        this.setShowNumLab();
        if (itemInfo.itemId == tab.CurrencyType.CurrencyType_Stamina) {
          
            this.updateStaminaTimer();
        } else {
        
            this.timerLab.node.active = false;
        }
        const jumpTab = tab.getData().ItemClientJumpTableByItemId.getValue(this.itemId);
        this.add_node.active = jumpTab?true:false;
        this.click_item_node.active = jumpTab?true:false;
    }
    updateStaminaTimer() {
        this.unschedule(this.staminaTimerCallBack);
        if (Number(this.itemInfo.num) >= RoleData.ins.staminaInfo.maxStamina) {
            this.timerLab.node.active = false;
        } else {
            this.timerLab.node.active = true;
            // let total = tab.getData().GetKeyValue_ConfigTable().StaminaResumeTime+RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_StaminaLimit);
            this.staminaTotalTimer= tab.getData().GetKeyValue_ConfigTable().StaminaResumeTime+RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_StaminaLimit);
            this.lastTimer = Math.floor((Number(RoleData.ins.staminaInfo.lastRecoverTime) +  this.staminaTotalTimer - RoleData.ins.getServerUtcTime()));
            // log("lasttimer===",this.lastTimer)
            if(this.lastTimer>0){
                let str = setTextTime_3(this.lastTimer);
                this.timerLab.string = str;
                this.schedule(this.staminaTimerCallBack, 1)
            }else{
                this.timerLab.string = "00:00";
            }
        }
    }
    staminaTimerCallBack = () => {
        // let total = 120+RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_StaminaLimit);
        this.lastTimer = Math.floor((Number(RoleData.ins.staminaInfo.lastRecoverTime) +  this.staminaTotalTimer - RoleData.ins.getServerUtcTime()));
        if (this.lastTimer >= 0) {
            let str = setTextTime_3(this.lastTimer);
            this.timerLab.string = str;
        } else {
            log("lasttimer===",this.lastTimer)
            this.unschedule(this.staminaTimerCallBack);
          
            
        }


    }
    
    setShowNumLab(){
        let num=ItemData.ins.getCount(this.itemId);
        if (this.itemId == tab.CurrencyType.CurrencyType_Stamina) {
            this.numLab.string=num+"/"+(tab.getData().GetKeyValue_ConfigTable().InitialStaminaMaxCount+RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_StaminaLimit));
        }else{
            this.numLab.string =GameUtil.convertNumber(num) + ""
        }
    }

    /**
     * 刷新资源显示数量
     */
    updateResourceNum(itemIds: Array<number>) {

        if (itemIds.indexOf(this.itemId) > -1) {
            this.setShowNumLab();
            // this.numLab.string = ItemData.ins.getCount(this.itemId) + ""
            // let item = ItemData.ins.getByItemId(this.itemId);
            // if (item) {
            //     let num = item.num;
            //     this.numLab.string = num + "";
            // } else {
            //     this.numLab.string = "0";
            // }

        }

    }
    onClickItem() {
        log("点击item===============")
        if (this.itemId == tab.CurrencyType.CurrencyType_Stamina) {
            // UIMgr.ins.cu
            UIMgr.ins.show({ viewName: ViewName.ResourceBuyPop, data: { "itemId": this.itemId } })
        }else if(this.itemId===tab.CurrencyType.CurrencyType_Diamond){
            UIMgr.ins.show({ viewName: ViewName.DiamondBuyPop})
        }else if(this.itemId == tab.CurrencyType.CurrencyType_Gold){
            UIMgr.ins.show({ viewName: ViewName.ResourceBuyPop, data: { "itemId": this.itemId } })
        }else if(this.itemId == tab.CurrencyType.CurrencyType_Friendship){
            UIMgr.ins.show({ viewName: ViewName.FriendPop})
        }else if(this.itemId == tab.CurrencyType.CurrencyType_FincaFightTicket){
            const jumpTab = tab.getData().ItemClientJumpTableByItemId.getValue(this.itemId);
            UIMgr.ins.show({ viewName: ViewName.ItemBuyPop,data:{name:jumpTab.JumpParam[0]} })
        }
    }

    protected onDestroy(): void {
        super.onDestroy();
    }


}



import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { RoleData } from '../role/RoleData';
import { ItemData } from '../item/ItemData';
import { RoleControl } from '../role/RoleControl';
import { ShowTips } from '../../mgr/UIMgr';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * EnergyAccumulatePop
 * zhudingchao
 * Wed Jun 19 2024 10:47:39 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/common/EnergyAccumulatePop.ts
 *
 */

@ccclass('EnergyAccumulatePop')
export class EnergyAccumulatePop extends ViewPop {
    @property(Node)
    contentNode: Node = null;
    @property(Label)
    lastTimeLab: Label = null;
    @property(Label)
    numLab: Label = null;
    @property(Sprite)
    costSpr: Sprite = null;
    @property(Label)
    costLab: Label = null;
    @property(Label)
    buyNumLab: Label = null;
    @property(Sprite)
    iconSpr:Sprite=null;
    private currLastNum: number = 0;
    private currBuyNum: number;
    private table: tab.BuyStaminaTable;
    register(): void {

    }
    onShow(): void {
        // if (this.openData && this.openData["worldPos"]) {
        //     this.contentNode.setWorldPosition(this.openData["worldPos"]);
        // }
        this.initView()
    }
    initView() {
        this.currBuyNum = Number(this.numLab.string);
        let table = tab.getData().BuyStaminaTableByType.getValue(tab.BuyStaminaType.BuyStaminaType_BuyMissStamina);
        if (table) {
            let total = table.MaxCount;
            let currNum = RoleData.ins.staminaInfo.remainBuyTimesMap[tab.BuyStaminaType.BuyStaminaType_BuyMissStamina];
            if (currNum > total) {
                currNum = total;
            }
            this.currLastNum = currNum;
            this.lastTimeLab.string = currNum + "/" + total;
            let costItem = tab.getData().ItemTableById.getValue(table.CostItemId);
            this.costSpr.setTexture(costItem.Icon);
            this.costLab.string = (table.CostItemNum * this.currBuyNum) + "";
            this.buyNumLab.string = (table.GetItemNum[0] * this.currBuyNum) + ""
            this.table = table;
            // this.iconSpr.setTexture(table.ShowIcon);
        }

    }
    updateNum() {
        this.numLab.string = this.currBuyNum + "";
        this.costLab.string = (this.table.CostItemNum * this.currBuyNum) + "";
        this.buyNumLab.string = (this.table.GetItemNum[0] * this.currBuyNum) + ""
    }
    onClickMinusBtn() {
        if (this.currBuyNum > 1) {
            this.currBuyNum--;
            this.updateNum();
        }
    }
    onClickPlusBtn() {
        if (this.currBuyNum < this.currLastNum) {
            this.currBuyNum++;
            this.updateNum();
        }
    }
    onClickMaxBtn() {
        if(this.currLastNum<=0){
            ShowTips(LangMgr.getLab("Tips_stamina_1"));
            return;
        }
        if (this.currBuyNum != this.currLastNum) {
            this.currBuyNum = this.currLastNum;
            this.updateNum();
        }



    }
    onClickBuyBtn() {
        if(this.currLastNum<=0){
            //ShowTips("没有购买次数");
            ShowTips(LangMgr.getLab("Tips_stamina_1"));
            return;
        }
        let id = ItemData.ins.isItemsEnoughByList([this.table.CostItemId], [this.table.CostItemNum * this.currBuyNum]);
        if (id <= 0) {
            RoleControl.ins.requestBuyStamina(tab.BuyStaminaType.BuyStaminaType_BuyMissStamina,this.currBuyNum);
            this.onClose();
        } else {
            let itemtab = tab.getData().ItemTableById.getValue(id);
            //ShowTips(LangMgr.getLab(itemtab.Name) + "不足");
            ShowTips(LangMgr.getCombineString("Tips_itemshortage", [LangMgr.getLab(itemtab.Name)]));
        }
    }



}
import { _decorator, Component, Label, Node, Sprite, UITransform, v2, Vec3 } from 'cc';
import { ComponentBase } from '../../../framework/base/ComponentBase';
import { tab } from '../../../Table/table_gen';
import { Role } from '../../fight/base/obj/role/role/Role';
import { RoleData } from '../role/RoleData';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { RoleControl } from '../role/RoleControl';
import { ItemData } from '../item/ItemData';
import { LangMgr } from '../../mgr/LangMgr';
import { ViewName } from '../../define/ViewDefine';
import { PlatformMgr } from '../../mgr/PlatformMgr';
import { AdMgr } from '../AdMgr';
import { BattleMainDataControl } from '../home/battle/BattleMainDataControl';
import { GameUtil } from '../../utils/GameUtil';
import { HeroRed } from '../hero/herobag/HeroRed';
const { ccclass, property } = _decorator;

/**
 * 
 * ResourceBuyItem
 * zhudingchao
 * Mon Jun 17 2024 14:08:04 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/common/ResourceBuyItem.ts
 *
 */

@ccclass('ResourceBuyItem')
export class ResourceBuyItem extends ComponentBase {
    @property(Node)
    energyNode: Node = null;
    @property(Node)
    advanceNode: Node = null;
    @property(Sprite)
    iconSpr: Sprite = null;
    @property(Node)
    disCoutNode: Node = null;
    @property(Label)
    numLable: Label = null;
    @property(Node)
    multiNode: Node = null;
    @property(Node)
    timesNode: Node = null;
    @property(Node)
    buyBtnNode: Node = null;
    @property(Node)
    freeBtnNode: Node = null;
    @property(Node)
    accumulateNode: Node = null;
    @property(Label)
    accumulatenumLab: Label = null;
    @property(Label)
    lastTimeLab: Label = null;

    @property(Sprite)
    buyIconSpr: Sprite = null;
    @property(Label)
    buyNumLab: Label = null;
    @property(Label)
    freeNumLab: Label = null;
    @property(Label)
    lbl_common_name: Label = null;
    private isHaveTime: boolean = false;
    private costItemNum: number;
    private costItemId: number;
    private isGetStamina: boolean;
    private isBuyGold: boolean = false;
    private _buyGoldType: tab.BuyGoldType = tab.BuyGoldType.BuyGoldType_Buy1;
    register(): void {

    }
    initEnergyView(table: tab.BuyStaminaTable) {
        this.isGetStamina = true;
        this.energyNode.active = true;
        this.advanceNode.active = false;
        this.disCoutNode.active = false;
        let lasttime = RoleData.ins.staminaInfo.remainBuyTimesMap[table.Type];
        this.lastTimeLab.string = lasttime + "/" + table.DailyCount;
        this.isHaveTime = lasttime > 0;
        this.numLable.string = "x" + table.GetItemNum + ""
        this.iconSpr.setTexture(table.ShowIcon);
        if (table.Type == tab.BuyStaminaType.BuyStaminaType_WatchAdverts) {
            this.freeBtnNode.active = true;
            this.buyBtnNode.active = false;
            this.freeNumLab.string = "(" + lasttime + "/" + table.DailyCount + ")";
            this.accumulateNode.active = false;
            this.freeBtnNode.getChildByName("redDot").active = RoleControl.ins.buyStaminaRedPoint();

        } else if (table.Type == tab.BuyStaminaType.BuyStaminaType_UseCurrency) {
            this.freeBtnNode.active = false;
            this.buyBtnNode.active = true;
            let info = tab.getData().ItemTableById.getValue(table.CostItemId)
            this.buyIconSpr.setTexture(info.Icon);
            this.buyNumLab.string = GameUtil.convertNumber(table.CostItemNum) + "";
            let lt = RoleData.ins.staminaInfo.remainBuyTimesMap[tab.BuyStaminaType.BuyStaminaType_BuyMissStamina];
            this.accumulateNode.active = true;
            // this.accumulateNode.active = lt > 0;
            // if (lt > 0) {
            this.accumulatenumLab.string = "" + lt;
            // }
            this.costItemId = table.CostItemId;
            this.costItemNum = table.CostItemNum;
        }
    }
    initGoldView(table: tab.BuyGoldTable) {
        const info = RoleData.ins.getGoldHistory(table.Type);
        this._buyGoldType = table.Type;
        this.isBuyGold = true;
        this.energyNode.active = false;
        this.advanceNode.active = true;
        // this.disCoutNode.active = true;
        this.buyBtnNode.active = table.AdType !== tab.AdType.AdType_BuyGold;
        this.freeBtnNode.active = table.AdType == tab.AdType.AdType_BuyGold;
        this.costItemId = table.CostItemId;
        this.costItemNum = table.CostItemCount;
        const gotTableData = tab.getData().ItemTableById.getValue(table.ItemId[0])
        const costTableData = tab.getData().ItemTableById.getValue(table.CostItemId)
        this.iconSpr.setTexture(table.ShowIcon);
        if (this.buyBtnNode.active) {
            this.buyNumLab.string = table.CostItemCount + "";
            this.buyIconSpr.setTexture(costTableData.Icon);
            let lasttime = info.count;
            this.lastTimeLab.string = (table.PurchaseCount-lasttime) + "/" + table.PurchaseCount;
            this.isHaveTime = lasttime < table.PurchaseCount; 
            this.numLable.string = "x" + GameUtil.convertNumber(table.CostItemCount) + ""
        } else {
            this.timesNode.active = false;
            const curAdTimes = AdMgr.ins.getAdCountByType(tab.AdType.AdType_BuyGold);
            const maxAdTimes = AdMgr.ins.getAdCountMaxByType(tab.AdType.AdType_BuyGold);
            this.freeNumLab.string = "(" + (maxAdTimes-curAdTimes) + "/" + maxAdTimes + ")";
            this.freeBtnNode.getChildByName("redDot").active = HeroRed.ins.red_GoldBuy();
            this.isHaveTime = maxAdTimes > curAdTimes;
        }
        this.lbl_common_name.string = LangMgr.getLab(gotTableData.Name);
        // 计算俩小时的金币数量
        const stageClearIds = BattleMainDataControl.ins.getStageClearIds();
        if(stageClearIds.length>0){
            const lastStageId = stageClearIds[stageClearIds.length-1];
            const patrolTab = tab.getData().PatrolTableByPveStageId.getValue(lastStageId);
            const hourCount = patrolTab.BaseItemNum[0]*6*(1 + RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_PatrolMoneyRatio) / 10000);
            if (table.Type == tab.BuyGoldType.BuyGoldType_Buy1) {
                this.numLable.string = "x "+GameUtil.convertNumber(2*hourCount)
            } else if (table.Type == tab.BuyGoldType.BuyGoldType_Buy2) {
                this.numLable.string = "x "+GameUtil.convertNumber(8*hourCount)
            } else if (table.Type == tab.BuyGoldType.BuyGoldType_Buy3) {
                this.numLable.string = "x "+GameUtil.convertNumber(24*hourCount)
            }
        }
    }
    onClickFree() {
        if (this.isHaveTime) {
            if (this.isGetStamina) {
                AdMgr.ins.playVideoAd(tab.AdType.AdType_BuyStamina, () => {
                    RoleControl.ins.requestBuyStamina(tab.BuyStaminaType.BuyStaminaType_WatchAdverts)
                }, false)

            } else if (this.isBuyGold) {
                AdMgr.ins.playVideoAd(tab.AdType.AdType_BuyGold, () => {
                    RoleControl.ins.requestBuyGold(tab.BuyGoldType.BuyGoldType_Buy1)
                }, false)
            }
        } else {
            //ShowTips("今日次数已用完")
            ShowTips(LangMgr.getLab("Tips_timeshortage"))
        }

    }
    onClickBuy() {
        if (this.isHaveTime) {
            let id = ItemData.ins.isItemsEnoughByList([this.costItemId], [this.costItemNum]);
            if (id <= 0) {
                if (this.isGetStamina) {
                    RoleControl.ins.requestBuyStamina(tab.BuyStaminaType.BuyStaminaType_UseCurrency)
                } else if (this.isBuyGold) {
                    RoleControl.ins.requestBuyGold(this._buyGoldType);
                }
            } else {
                let itemtab = tab.getData().ItemTableById.getValue(id);
                ShowTips(LangMgr.getCombineString("Tips_itemshortage", [LangMgr.getLab(itemtab.Name)]));
                //ShowTips( LangMgr.getLab(itemtab.Name)+"不足");
            }

        } else {
            //ShowTips("今日次数已用完")
            ShowTips(LangMgr.getLab("Tips_timeshortage"))
        }
    }
    onClickAccumulate() {
        let wordPos = new Vec3(this.node.worldPosition.x + this.node.getComponent(UITransform).contentSize.width / 2 + 30, this.node.worldPosition.y);
        UIMgr.ins.show({ viewName: ViewName.EnergyAccumulatePop, data: { "worldPos": wordPos } });
    }

}
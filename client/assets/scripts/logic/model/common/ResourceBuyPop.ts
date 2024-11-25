import { _decorator, Component, instantiate, Label, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { ResourceBuyItem } from './ResourceBuyItem';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { SettingRedManager } from '../role/SettingRedManager';
const { ccclass, property } = _decorator;

/**
 * 
 * ResourceBuyPop
 * zhudingchao
 * Mon Jun 17 2024 13:52:15 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/common/ResourceBuyPop.ts
 *
 */

@ccclass('ResourceBuyPop')
export class ResourceBuyPop extends ViewPop {

    @property(Node)
    resLayoutNode: Node = null;
    @property(Prefab)
    resBuyPrefab: Prefab = null;
    @property(Label)
    titleLab: Label = null;

    @property(Node)
    node_energy: Node = null;
    @property(Node)
    node_common: Node = null;
    @property(Label)
    lbl_common: Label = null;
    @property(Node)
    node_common_layout: Node = null;


    private itemId: number;
    register(): void {
        EventMgr.onMsg(proto.Ptl.BuyStaminaRsp, this.on_s2c_BuyStaminaRsp, this);
        EventMgr.onMsg(proto.Ptl.BuyGoldRsp, this.on_s2c_BuyGoldRsp, this)
    }
    onShow(): void {
        if (this.openData && this.openData["itemId"]) {
            this.itemId = this.openData["itemId"];
            this.initView();
        }
    }
    onClose(): void {
        super.onClose();
        if (this.itemId == tab.CurrencyType.CurrencyType_Stamina) {
            if (!SettingRedManager.ins.getSetting("RedStamina")) {
                SettingRedManager.ins.setSetting("RedStamina", true);
            }
        }else if (this.itemId === tab.CurrencyType.CurrencyType_Gold) {
            if (!SettingRedManager.ins.getSetting("GoldBuy")) {
                SettingRedManager.ins.setSetting("GoldBuy", true);
            }
        }
    }
    initView() {
        let itemTab = tab.getData().ItemTableById.getValue(this.itemId);
        //this.titleLab.string="购买"+LangMgr.getLab(itemTab.Name);
        this.titleLab.string = LangMgr.getCombineString("ui_commondesc_91", [LangMgr.getLab(itemTab.Name)]);
        this.lbl_common.string = LangMgr.getCombineString("ui_commondesc_91", [LangMgr.getLab(itemTab.Name)]);
        this.node_energy.active = this.itemId == tab.CurrencyType.CurrencyType_Stamina;
        this.node_common.active = !this.node_energy.active;
        if (this.itemId == tab.CurrencyType.CurrencyType_Stamina) {
            this.initStaminaView();
        } else if (this.itemId === tab.CurrencyType.CurrencyType_Gold) {
            this.initGoldView();
        }

    }
    private initStaminaView() {
        this.resLayoutNode.destroyAllChildren();
        let aDTable = tab.getData().BuyStaminaTableByType.getValue(tab.BuyStaminaType.BuyStaminaType_WatchAdverts);
        let currTable = tab.getData().BuyStaminaTableByType.getValue(tab.BuyStaminaType.BuyStaminaType_UseCurrency);
        let item = instantiate(this.resBuyPrefab);
        item.parent = this.resLayoutNode;
        item.getComponent(ResourceBuyItem).initEnergyView(aDTable);
        let item2 = instantiate(this.resBuyPrefab);
        item2.parent = this.resLayoutNode;
        item2.getComponent(ResourceBuyItem).initEnergyView(currTable);
    }
    private initGoldView() {
        this.node_common_layout.destroyAllChildren();
        tab.getData().BuyGoldTable.forEach((value, key) => {
            const item = instantiate(this.resBuyPrefab);
            item.parent = this.node_common_layout;
            item.getComponent(ResourceBuyItem).initGoldView(value);
        })
    }
    // 请求购买体力返回
    on_s2c_BuyStaminaRsp(msg: proto.Msg_BuyStaminaRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
            this.initStaminaView();
        }

    }
    on_s2c_BuyGoldRsp(msg: proto.Msg_BuyGoldRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.items })
            this.initGoldView();
        }
    }
}
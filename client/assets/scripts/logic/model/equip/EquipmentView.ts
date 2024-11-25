import { _decorator, Color, Component, error, instantiate, Label, log, Node, Prefab, profiler, Sprite, Toggle } from 'cc';
import { ResourceItem } from '../common/ResourceItem';
import { ViewScreen } from '../../../framework/base/ViewScreen';
import { EquipmentViewItem } from './EquipmentViewItem';
import { EquipInfo } from './EquipInfo';
import { HeroBagPainting } from '../hero/herobag/HeroBagPainting';
import { EquipData } from './EquipData';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { CommonItem } from '../item/CommonItem';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { GameUtil } from '../../utils/GameUtil';
import { EquipControl } from './EquipControl';
import { ItemData } from '../item/ItemData';
import { ShowItemNotEnoughTips, ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { LangMgr } from '../../mgr/LangMgr';
import { EquipmentGrowthMaxItem } from './EquipmentGrowthMaxItem';
import { EquipmentItem } from '../item/EquipmentItem';
import { LocalEvent } from '../../define/LocalEvent';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
const { ccclass, property } = _decorator;

@ccclass('EquipmentView')
export class EquipmentView extends ViewScreen {
    @property(Node)
    bagNode: Node = null;
    @property(Node)
    forgeNode: Node = null;
    @property(Node)
    strengthNode: Node = null;
    @property(Label)
    proLab: Label = null;
    @property(Sprite)
    proSpr: Sprite = null;
    @property(Node)
    noEquipNode: Node = null;
    @property(Node)
    bagContentNode: Node = null;
    @property(ResourceItem)
    resourceItem: ResourceItem = null;
    @property(Sprite)
    strengthCostGoldSpr: Sprite = null;
    @property(Sprite)
    strengthCostStoneSpr: Sprite = null;
    @property(Label)
    strengthCostGoldLab: Label = null;
    @property(Label)
    strengthCostStoneLab: Label = null;
    @property(EquipmentViewItem)
    strengthEquipViewItem: EquipmentViewItem = null;
    @property(EquipmentGrowthMaxItem)
    strengthEquipViewItem2: EquipmentGrowthMaxItem = null;
    @property(Node)
    strengthComItemParent: Node = null;
    @property(Node)
    notStrengthEquipNode: Node = null;
    @property(Node)
    strengthEquipNode: Node = null;


    @property(Node)
    forgeCostItemNode: Node = null;
    @property(Label)
    forgeCostGoldLab: Label = null;
    @property(Sprite)
    forgeCostGoldSpr: Sprite = null;
    @property(Label)
    forgeProbabilityLab: Label = null;
    @property(EquipmentViewItem)
    forgeEquipViewItem: EquipmentViewItem = null;
    @property(EquipmentGrowthMaxItem)
    forgeEquipViewItem2: EquipmentGrowthMaxItem = null;
    @property(Node)
    toggleNode: Node = null;
    @property(Node)
    forgeComItemParent: Node = null;
    @property(Node)
    notforgeEquipNode: Node = null;
    @property(Node)
    forgeEquipNode: Node = null;
    @property(Node)
    heroNode: Node = null;
    @property(Prefab)
    heroPaintingPrefab: Prefab = null;

    @property(Node)
    strengthMaxNode: Node = null;
    @property(Node)
    strengthNormalNode: Node = null;

    @property(Node)
    forgeMaxNode: Node = null;
    @property(Node)
    forgeNormalNode: Node = null;
    @property(Node)
    cantforgeNode: Node = null;
    @property(Node)
    node_red_strength:Node = null;
    private currTag: number = 1;
    private currHeroClass: number;
    private currEquipDatas: Array<EquipInfo>;
    private currEquipType: number;
    private bagEquipNodes: Array<Node>;
    private heroPainting: HeroBagPainting;
    public currWearEquipInfo: EquipInfo;
    private currStrengthItemNode: EquipmentItem;
    private currForgeItemNode: EquipmentItem;




    start() {
        this.initView();
    }
    register() {
        EventMgr.onMsg(proto.Ptl.ChangeEquipRsp, this.on_s2c_ChangeEquipRsp, this);
        EventMgr.onMsg(proto.Ptl.EnhanceEquipRsp, this.on_s2c_EnhanceEquipRsp, this);
        EventMgr.onMsg(proto.Ptl.RefineEquipRsp, this.on_s2c_RefineEquipRsp, this);
        EventMgr.onLocal(LocalEvent.Item_Update, this.itemChange, this);
    }
    initView() {
        this.currEquipType = tab.EquipType.EquipType_Gloves;
        if (this.openData) {
            if (this.openData["type"]) {
                this.currTag = this.openData['type'];
                // this.updateViewState();
            }
            if (this.openData["equipInfo"]) {
                let equip: EquipInfo = this.openData["equipInfo"];
                this.currHeroClass = equip.equipTable.Class;
                this.currEquipType = equip.equipTable.Type;
            }
            if (this.openData["heroClass"]) {
                this.currHeroClass = this.openData["heroClass"];
            }
            if (this.openData["equipType"]) {
                this.currEquipType = this.openData["equipType"];
            }
            //   UIMgr.ins.show({viewName:ViewName.EquipmentView,data:{"type":3,"equipInfo":this.euqipInfo}});
        }
        if (!this.currHeroClass) {
            this.currHeroClass = tab.HeroClass.HeroClass_Assassin;
        }
        this.initHeroInfo();
        this.toggleNode.children[this.currTag - 1].getComponent(Toggle).isChecked = true;

        this.updateViewState();
    }
    initHeroInfo() {
        let node: Node = instantiate(this.heroPaintingPrefab);
        node.parent = this.heroNode;
        let com = node.getComponent(HeroBagPainting);
        com.initEquipView(this.currHeroClass, this.currEquipType, this.updateHero, this.clickEquipSlot);
        this.heroPainting = com;

    }

    onClickToggle(event, type) {
        this.currTag = Number(type);
        this.updateViewState();

    }
    updateViewState() {
        if (this.currTag == 1) {
            //强化
            this.bagNode.active = false;
            this.strengthNode.active = true;
            this.forgeNode.active = false;
            this.initStrengthView();
        } else if (this.currTag == 2) {
            //淬炼
            this.bagNode.active = false;
            this.strengthNode.active = false;
            this.forgeNode.active = true;
            this.initForgeView();
        } else if (this.currTag == 3) {
            //背包
            this.bagNode.active = true;
            this.strengthNode.active = false;
            this.forgeNode.active = false;

            this.initBagView();
        }
    }

    initBagView() {
        this.updateBagEquipByHeroClass();

    }

    initForgeView() {
        this.currWearEquipInfo = this.heroPainting.getWearEquipByType(this.currEquipType);
        if (this.currWearEquipInfo) {
            if (this.currWearEquipInfo.equipTable.RefineLimit > 0) {
                if (!this.currForgeItemNode) {
                    let node: Node = ItemPoolMgr.ins.createEquipItem(this.currWearEquipInfo, this.forgeComItemParent, false);
                    this.currForgeItemNode = node.getComponent(EquipmentItem);
                } else {
                    this.currForgeItemNode.initData(this.currWearEquipInfo, false);
                }
                if (this.currWearEquipInfo.isRefineLimit()) {
                    this.forgeMaxNode.active = true;
                    this.forgeNormalNode.active = false;
                    this.forgeEquipViewItem2.initData(this.currWearEquipInfo, 2);

                } else {
                    this.forgeMaxNode.active = false;
                    this.forgeNormalNode.active = true;
                    this.forgeEquipViewItem.initData(this.currWearEquipInfo, 2);
                    this.updateForgeCost();
                }

                this.forgeEquipNode.active = true;
                this.notforgeEquipNode.active = false;
                this.cantforgeNode.active = false;
            } else {
                this.forgeEquipNode.active = false;
                this.notforgeEquipNode.active = false;
                this.cantforgeNode.active = true;
            }


        } else {

            this.forgeEquipNode.active = false;
            this.notforgeEquipNode.active = true;
            this.cantforgeNode.active = false;
        }

    }
    initStrengthView() {
        this.node_red_strength.active = RedMgr.ins.isRed(RedDotType.Equip_Strengthen, String(this.currHeroClass))
        this.currWearEquipInfo = this.heroPainting.getWearEquipByType(this.currEquipType);
        if (this.currWearEquipInfo) {
            if (!this.currStrengthItemNode) {
                let node: Node = ItemPoolMgr.ins.createEquipItem(this.currWearEquipInfo, this.strengthComItemParent, false);
                this.currStrengthItemNode = node.getComponent(EquipmentItem);
                // node.getComponent(CommonItem).setIsTouchItem(false);
            } else {
                this.currStrengthItemNode.initData(this.currWearEquipInfo);
            }
            this.strengthEquipNode.active = true;
            this.notStrengthEquipNode.active = false;


            if (this.currWearEquipInfo.isEnhanceLimit()) {
                this.strengthMaxNode.active = true;
                this.strengthNormalNode.active = false;
                this.strengthEquipViewItem2.initData(this.currWearEquipInfo, 1)
            } else {
                this.strengthMaxNode.active = false;
                this.strengthNormalNode.active = true;
                this.strengthEquipViewItem.initData(this.currWearEquipInfo, 1);
                this.updateStrengthCost();

            }


        } else {
            this.strengthEquipNode.active = false;
            this.notStrengthEquipNode.active = true;

        }

    }
    /**
     * 刷新强化花费
     */
    updateStrengthCost() {
        let moneys = this.currWearEquipInfo.enhanceUpgradeTable.Moneys;
        let materials = this.currWearEquipInfo.enhanceUpgradeTable.Materials;

        let moneysCount = ItemData.ins.getCount(moneys[0])
        let materialCount = ItemData.ins.getCount(materials[0]);

        this.strengthCostGoldLab.string = GameUtil.convertNumber(moneysCount) + "/" + GameUtil.convertNumber(moneys[1], true);
        if (moneysCount >= moneys[1]) {
            this.strengthCostGoldLab.color = new Color().fromHEX("#ffffff");
        } else {
            this.strengthCostGoldLab.color = new Color().fromHEX(tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
        }

        this.strengthCostGoldSpr.setTexture(tab.getData().ItemTableById.getValue(moneys[0]).Icon);
        this.strengthCostStoneLab.string = GameUtil.convertNumber(materialCount) + "/" + GameUtil.convertNumber(materials[1], true);
        if (materialCount >= materials[1]) {
            this.strengthCostStoneLab.color = new Color().fromHEX("#ffffff");
        } else {
            this.strengthCostStoneLab.color = new Color().fromHEX(tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
        }

        this.strengthCostStoneSpr.setTexture(tab.getData().ItemTableById.getValue(materials[0]).Icon)

    }

    updateForgeCost() {
        this.forgeCostItemNode.removeAllChildren();
        let moneys = this.currWearEquipInfo.refineUpgradeTable.Moneys;
        let materials = this.currWearEquipInfo.refineUpgradeTable.Materials;

        if (moneys.length > 0) {
            let moneysCount = ItemData.ins.getCount(moneys[0])
            this.forgeCostGoldLab.string = GameUtil.convertNumber(moneysCount) + "/" + moneys[1];

            if (moneysCount >= moneys[1]) {
                this.forgeCostGoldLab.color = new Color().fromHEX("#ffffff");
            } else {
                this.forgeCostGoldLab.color = new Color().fromHEX(tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
            }

            let itemTab = tab.getData().ItemTableById.getValue(moneys[0]);
            if (itemTab) {
                this.forgeCostGoldSpr.setTexture(itemTab.Icon);
            } else {
                error("item找不到id", moneys)
            }
            this.forgeCostGoldSpr.node.active = true;
            this.forgeCostGoldLab.node.active = true;
        } else {
            this.forgeCostGoldSpr.node.active = false;
            this.forgeCostGoldLab.node.active = false;
        }


        this.forgeProbabilityLab.string = (this.currWearEquipInfo.refineUpgradeTable.Odds / 10000 * 100) + ""
        let rewards = GameUtil.convertItemInfosByList(materials);
        for (let key in rewards) {
            ItemPoolMgr.ins.createItem(rewards[key], this.forgeCostItemNode);
        }
    }

    updateBagEquipByHeroClass() {
        this.currEquipDatas = EquipData.ins.getEquipBagByHeroClass(this.currHeroClass);
        this.updateBagEquipByType();
        let heroClassTab = tab.getData().HeroClassTableByHeroClass.getValue(this.currHeroClass)
        this.proSpr.setTexture(heroClassTab.Icon);
        this.proLab.string = LangMgr.getLab(tab.HeroClass[this.currHeroClass])

    }
    updateBagEquipByType() {
        this.removeBagEquipItem();
        let bagInfos: Array<EquipInfo> = [];
        for (let key in this.currEquipDatas) {
            if (this.currEquipDatas[key].equipTable.Type == this.currEquipType) {
                bagInfos.push(this.currEquipDatas[key]);
                // let node = ItemPoolMgr.ins.createEquipItem(this.currEquipDatas[key],this.bagContentNode);
                // this.bagEquipNodes.push(node);
            }
        }
        bagInfos.sort((a, b) => {
            return b.score - a.score;
        });
        for (let key in bagInfos) {
            let node = ItemPoolMgr.ins.createEquipItem(bagInfos[key], this.bagContentNode);
            this.bagEquipNodes.push(node);
        }

        this.noEquipNode.active = this.bagEquipNodes.length == 0;


    }
    removeBagEquipItem() {
        if (this.bagEquipNodes) {
            for (let key in this.bagEquipNodes) {
                ItemPoolMgr.ins.putEquipItem(this.bagEquipNodes[key]);
            }
        }
        this.bagEquipNodes = [];
    }


    /**
     * 点击穿戴装备
     */
    onClickWearEquip() {
        EquipControl.ins.reqOnekeyEquips(this.currHeroClass);

    }
    /**
     * 点击分解装备
     */
    onClickResolveEquip() {
        UIMgr.ins.show({ viewName: ViewName.EquipResolvePop })
    }
    /**
     * 点击强化大师
     */
    onClickMaster() {
        // UIMgr.ins.show({viewName:ViewName.EquipFettersPop,data:{"type":2,"level":2}})
        UIMgr.ins.show({ viewName: ViewName.EquipMasterPop, data: { "heroClass": this.currHeroClass, "type": 2 } });
    }

    /**
     * 点击淬炼按钮
     */
    onClickForgetBtn() {
        if (this.currWearEquipInfo) {

            let items = GameUtil.convertItemInfosByList(this.currWearEquipInfo.refineUpgradeTable.Moneys);
            items = items.concat(GameUtil.convertItemInfosByList(this.currWearEquipInfo.refineUpgradeTable.Materials));
            if (ItemData.ins.isItemsEnough(items)) {
                EquipControl.ins.reqRefineEquips(this.currHeroClass, this.currWearEquipInfo.equipTable.Type);
            } else {
                this.checkGoldMaterial(items);
            }
        }
    }
    checkGoldMaterial(items) {
        let isGold = false;
        let notEnoughtItemId = 0;
        for (let i = 0; i < items.length; i++) {
            let totalMaterialCount = ItemData.ins.getCount(items[i].itemId);
            if (totalMaterialCount < items[i].num) {
                if (items[i].itemId === tab.CurrencyType.CurrencyType_Gold) {
                    isGold = true;
                }else{
                    notEnoughtItemId = items[i].itemId;
                }
            }
        }
        if (isGold) {
            ShowItemNotEnoughTips(tab.CurrencyType.CurrencyType_Gold);
            UIMgr.ins.show({ viewName: ViewName.ResourceBuyPop, data: { "itemId": tab.CurrencyType.CurrencyType_Gold } })
        } else {
            ShowItemNotEnoughTips(notEnoughtItemId);
        }
    }
    /**
     * 点击强化按钮
     */
    onClickStrengthenBtn() {
        if (this.currWearEquipInfo) {
            this.strengthenOneEquip(this.currWearEquipInfo);
        }

    }
    private strengthenOneEquip(currEquip: EquipInfo) {
        if (!currEquip.isEnhanceLimit()) {
            let items = GameUtil.convertItemInfosByList(currEquip.enhanceUpgradeTable.Moneys);
            items = items.concat(GameUtil.convertItemInfosByList(currEquip.enhanceUpgradeTable.Materials));
            if (ItemData.ins.isItemsEnough(items)) {
                EquipControl.ins.reqEnhanceEquips(this.currHeroClass, [currEquip.equipTable.Type]);
            } else {
                this.checkGoldMaterial(items);
            }
        } else {
            log("强化超过改装备上线");
            //ShowTips("强化以达到上限");
            ShowTips(LangMgr.getLab("ui_equip_29"))
        }

    }

    /**
     * 点击一键强化按钮
     */
    onClickOnekeyStrengthen() {
        let currEquips = [];
        let list = this.heroPainting.currWearEquipDatas;

        for (let i: number = 0; i < list.length; i++) {
            if (i < tab.EquipType.EquipType_Feather) {
                currEquips.push(list[i]);
            }
        }
        let isEqual = true;
        let minLevel = -1;
        for (let key in currEquips) {
            if (currEquips[key] && !currEquips[key].isEnhanceLimit()) {
                if (minLevel < 0) {
                    minLevel = currEquips[key].enhanceLv;
                } else if (currEquips[key].enhanceLv < minLevel) {
                    minLevel = currEquips[key].enhanceLv;
                }
            }
        }

        if (minLevel >= 0) {
            let types = [];
            let totals = [];
            for (let key in currEquips) {
                let currEquip = currEquips[key];
                if (currEquip && !currEquip.isEnhanceLimit() && currEquip.enhanceLv == minLevel) {
                    let items = GameUtil.convertItemInfosByList(currEquip.enhanceUpgradeTable.Moneys);
                    items = items.concat(GameUtil.convertItemInfosByList(currEquip.enhanceUpgradeTable.Materials));
                    totals = GameUtil.itemsAddItems(totals, items);
                    if (ItemData.ins.isItemsEnough(totals)) {
                        types.push(currEquip.equipTable.Type);
                    } else {
                        continue;
                    }
                }
            }
            if (types.length > 0) {
                EquipControl.ins.reqEnhanceEquips(this.currHeroClass, types);
            } else {
                //ShowTips("一键没有可强化的装备")
                ShowTips(LangMgr.getLab("ui_equip_30"))
            }
        } else {
            ShowTips(LangMgr.getLab("ui_equip_30"))
        }
    }


    clickEquipSlot = (type: number) => {
        this.currEquipType = type;
        if (this.currTag == 1) {
            this.initStrengthView();
        } else if (this.currTag == 2) {
            this.initForgeView();
        } else {
            this.updateBagEquipByType();
        }

    }
    updateHero = (heroClass: number) => {
        this.currHeroClass = heroClass;
        this.updateBagEquipByHeroClass();

    }

    /**
     * 替换装备成功
     * @param msg 
     */
    on_s2c_ChangeEquipRsp(msg: proto.Msg_ChangeEquipRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            this.updateBagEquipByHeroClass();
            this.heroPainting.updateEquipSlot();
        }
    }
    /**
    * 强化装备成功
    * @param msg 
    */
    on_s2c_EnhanceEquipRsp(msg: proto.Msg_EnhanceEquipRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            this.heroPainting.updateEquipSlot();
            this.initStrengthView();

        }
    }
    on_s2c_RefineEquipRsp(msg: proto.Msg_RefineEquipRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            this.heroPainting.updateEquipSlot();
            this.initForgeView();

        }
    }
    protected onDisable(): void {
        this.removeBagEquipItem();
        if (this.currForgeItemNode) {
            this.currForgeItemNode.putItem();
        }
        if (this.currStrengthItemNode) {
            this.currStrengthItemNode.putItem();
        }
        this.currForgeItemNode = null;
        this.currStrengthItemNode = null;
        for (let node of this.forgeCostItemNode.children) {
            ItemPoolMgr.ins.putCommonItem(node);
        }
    }
    itemChange(items: Array<number>) {
        if (this.currTag == 1) {

            let moneys = this.currWearEquipInfo.enhanceUpgradeTable.Moneys;
            let materials = this.currWearEquipInfo.enhanceUpgradeTable.Materials;
            if (items.indexOf(moneys[0]) > -1 || items.indexOf(materials[0]) > -1) {
                this.updateStrengthCost();
            }



        }
    }
    protected onDestroy(): void {
        EventMgr.unTarget(this);
    }


}



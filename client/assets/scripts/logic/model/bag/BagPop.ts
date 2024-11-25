import { _decorator, Button, Component, Label, log, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import { ItemData } from '../item/ItemData';
import { ItemInfo } from '../item/ItemInfo';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { CommonItem } from '../item/CommonItem';
import { tab } from '../../../Table/table_gen';
import { EventMgr } from '../../mgr/EventMgr';
import { Net } from '../../net/Net';
import { EquipData } from '../equip/EquipData';
import { EquipInfo } from '../equip/EquipInfo';
import { EquipmentItem } from '../item/EquipmentItem';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { LangMgr } from '../../mgr/LangMgr';
import { ViewName } from '../../define/ViewDefine';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
const { ccclass, property } = _decorator;

@ccclass('BagPop')
export class BagPop extends ViewPop {
    @property(Button)
    decomposeBtn: Button = null;
    @property(Button)
    composeBtn: Button = null;
    @property(Label)
    currNumLab: Label = null;
    @property(Label)
    totalNumLab: Label = null;
    @property(Node)
    havebtn_contentNode: Node = null;
    @property(Node)
    nobtn_contentNode: Node = null;
    @property(Node)
    capacityNode: Node = null;
    @property(Node)
    EmptyNode: Node = null;
    @property(Label)
    equipNumLab: Label = null;
    @property(Label)
    equipMaxNumLab: Label = null;

    private bagDataMap: Map<number, Array<ItemInfo | EquipInfo>>;
    private currBagType: number = 1;
    private bagItemNodes: Array<Node>;
    //private equipItemNodes: Array<EquipmentItem>;
    register(): void {
        EventMgr.onMsg(proto.Ptl.ItemChangePush, this.on_s2c_Msg_ItemChangePush, this)
        EventMgr.onMsg(proto.Ptl.UseHeroPieceOneClickRsp, this.on_s2c_UseHeroPieceOneClickRsp, this)
    }
    on_s2c_UseHeroPieceOneClickRsp(msg: proto.Msg_UseHeroPieceOneClickRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
    }
    // onLoad(): void {
    //     // super.onLoad();

    // }

    start() {
        this.initBagData();
        this.bagItemNodes = [];
        // this.equipItemNodes=[];
        this.initBagView();

    }
    initBagData() {
        this.bagDataMap = new Map();
        let itemList = ItemData.ins.getItems();
        for (let value of itemList) {
            let bagType = value.itemTable.BagType;
            if (bagType > tab.BagType.BagType_None && Number(value.num) > 0) {
                this.addByBagDataMap(bagType, value);
            }
        }
        let equips = EquipData.ins.getEquips();
        for (let value of equips) {
            if (!value.isWear) {
                if (value.itemTable.BagType == tab.BagType.BagType_Equip) {
                    this.addByBagDataMap(tab.BagType.BagType_Equip, value);
                } else if (value.itemTable.BagType == tab.BagType.BagType_Jade) {
                    this.addByBagDataMap(tab.BagType.BagType_Jade, value);
                }

            }

        }
        this.sortBagData(Array.from(this.bagDataMap.keys()));
    }
    private addByBagDataMap(type: number, info: ItemInfo | EquipInfo, isFind = false) {
        let list = this.bagDataMap.get(type);
        let isAdd = false;
        if (!list) {
            list = [];
            this.bagDataMap.set(type, list);
        }
        if (isFind) {
            let value = list.find((value, index) => {
                if (value.itemId == info.itemId)
                    return value;
            });
            if (value) {
                value = info;
            } else {
                list.push(info);
                isAdd = true;
            }

        } else {
            list.push(info);
            isAdd = true;
        }
        return isAdd;

    }
    private removeByBagData(bagType: number, itemId: number) {
        let list = this.bagDataMap.get(bagType);
        if (list) {
            let index = -1;
            index = list.findIndex((value) => value.itemId == itemId)
            if (index >= 0) {
                list.splice(index, 1);
            }
        }
    }
    private removeBagEquipData(id: number) {
        let list = this.bagDataMap.get(tab.BagType.BagType_Equip);
        if (list) {
            let index = -1;
            index = list.findIndex((value) => Number(value.id) == id)
            if (index >= 0) {
                list.splice(index, 1);
            }
        }
    }

    private sortBagData(bagTypes: Array<number>) {
        for (let key in bagTypes) {
            let list = this.bagDataMap.get(bagTypes[key]);
            if (list) {
                list.sort((a, b) => {
                    return a.itemTable.Sort - b.itemTable.Sort;
                })
            }
        }

    }
    initBagView() {
        this.removeComItem();
        this.nobtn_contentNode.parent.parent.active = false;
        this.havebtn_contentNode.parent.parent.active = false;
        this.nobtn_contentNode.destroyAllChildren();
        this.havebtn_contentNode.destroyAllChildren();
        let list = this.bagDataMap.get(this.currBagType);
        this.EmptyNode.active = list ? list.length === 0 : true;
        for (let key in list) {
            let node:Node = null;
            if (this.currBagType == tab.BagType.BagType_Equip || this.currBagType == tab.BagType.BagType_Fragment || this.currBagType == tab.BagType.BagType_Jade) {
                this.havebtn_contentNode.parent.parent.active = true;
                if (this.currBagType == tab.BagType.BagType_Equip || this.currBagType == tab.BagType.BagType_Jade) {
                    node = ItemPoolMgr.ins.createEquipItem(list[key], this.havebtn_contentNode);
                } else {
                    node = ItemPoolMgr.ins.createItem(list[key], this.havebtn_contentNode);
                }
            } else {
                this.nobtn_contentNode.parent.parent.active = true;
                node = ItemPoolMgr.ins.createItem(list[key], this.nobtn_contentNode);
                const redNode = node.getChildByName("redDot");
                if(list[key].itemTable.Type===tab.ItemType.ItemType_Box){
                    if(redNode){
                        redNode.active = RedMgr.ins.isRed(RedDotType.HeroBagRed,String(list[key].itemId));
                    }
                }else{
                    if(redNode){
                        redNode.active = false;
                    }
                }
            }
            this.bagItemNodes.push(node);
        }

        this.composeBtn.node.active = this.currBagType == tab.BagType.BagType_Fragment;
        this.decomposeBtn.node.active = this.currBagType == tab.BagType.BagType_Equip;
        // || this.currBagType == tab.BagType.BagType_Jade;
        if (this.currBagType == tab.BagType.BagType_Equip) {
            this.capacityNode.active = true;
            this.updateEquipNum();
        } else {
            this.capacityNode.active = false;
        }

    }

    updateEquipNum() {
        let list = this.bagDataMap.get(this.currBagType);
        this.equipNumLab.string = list ? list.length + "" : "0";
        this.equipMaxNumLab.string = tab.getData().GetKeyValue_ConfigTable().EquipMaxNum + "";
    }


    onClickToggle(event, data) {
        console.log("data==", data)
        this.currBagType = Number(data);
        this.initBagView();

    }
    /**
     * 点击分解
     */
    onClickDecompose() {

    }
    /**
     * 点击一键合成
     */
    onClickCompose() {
        // 先判断当前是否有可以合成的碎片
        let list = this.bagDataMap.get(tab.BagType.BagType_Fragment);
        let composeCount = 0;
        if (!list) {
            return;
        }
        for (let i = 0; i < list.length; i++) {
            const data = list[i] as ItemInfo;
            const itemTab = ItemData.ins.getByItemId(data.itemId);
            let needCount = 0
            if (itemTab.itemTable.Quality === tab.ItemQuality.ItemQuality_Purple) {
                needCount = 30;
            } else if (itemTab.itemTable.Quality > tab.ItemQuality.ItemQuality_Purple) {
                needCount = 50;
            }
            const count = Number(data.num);
            if (count >= needCount) {
                composeCount += Math.floor(count / needCount);
            }
        }
        if (composeCount > 0) {
            if (HeroDataControl.ins.getHeroBagFull(composeCount)) {
                ShowTips(LangMgr.getLab("Tips_herobag_1"))
                return
            }
            let msg = new proto.Msg_UseHeroPieceOneClickReq();
            Net.Send(proto.Ptl.UseHeroPieceOneClickReq, msg)
        } else {
            ShowTips(LangMgr.getLab("CommonErrorCode_6"))
        }
    }
    onClickAddTestData() {
        Net.Send(proto.Ptl.FinishStageReq);
    }
    on_s2c_Msg_ItemChangePush(msg: proto.Msg_ItemChangePush) {
        let isRefresh = false;
        let sortTyps = [];
        for (let value of msg.updatedItems) {
            let itemTab = tab.getData().ItemTableById.getValue(value.itemId);
            if (itemTab.Type != tab.ItemType.ItemType_Hero) {

                if (itemTab.Type == tab.ItemType.ItemType_Equip) {
                    //根据装备唯一di 获取装备item
                } else {
                    let itemInfo = ItemData.ins.getByItemId(value.itemId)
                    let isSort = this.addByBagDataMap(itemTab.BagType, itemInfo, true);
                    if (isSort) {
                        if (sortTyps.indexOf(itemTab.BagType) < 0) {
                            sortTyps.push(itemTab.BagType);
                        }
                    }

                }
                if (itemTab.BagType == this.currBagType) {
                    isRefresh = true;
                }
            }
        }
        for (let value of msg.removedItems) {
            let itemTab = tab.getData().ItemTableById.getValue(value.itemId);
            if (itemTab.Type != tab.ItemType.ItemType_Hero) {
                let itemTab = tab.getData().ItemTableById.getValue(value.itemId);
                if (itemTab.Type == tab.ItemType.ItemType_Equip) {
                    //根据装备唯一di 获取装备item
                    this.removeBagEquipData(Number(value.id))
                } else {
                    this.removeByBagData(itemTab.BagType, value.itemId)
                }
                if (itemTab.BagType == this.currBagType) {
                    isRefresh = true;
                }
            }
        }
        for (let value of msg.updatedItems) {
            let itemTab = tab.getData().ItemTableById.getValue(value.itemId);
            const itemNum = value.num;
            if (itemNum === 0) {
                this.removeByBagData(itemTab.BagType, value.itemId)
            }
            if (itemTab.BagType == this.currBagType) {
                isRefresh = true;
            }
        }
        //刷新装备数据
        for (let value of msg.updatedEquipments) {
            let info = EquipData.ins.getEquipInfoById(value.id);
            if (!info.isWear) {
                this.addByBagDataMap(tab.BagType.BagType_Equip, info);
            }
            if (this.currBagType == tab.BagType.BagType_Equip) {
                isRefresh = true;
            }
            if (sortTyps.indexOf(tab.BagType.BagType_Equip) < 0) {
                sortTyps.push(tab.BagType.BagType_Equip);
            }
        }
        if (sortTyps.length > 0) {
            this.sortBagData(sortTyps);
        }
        if (isRefresh) {
            this.initBagView();
        }
        // this.initBagView();

    }
    protected onDestroy(): void {
        EventMgr.unTarget(this);
    }
    private removeComItem() {
        for (let key in this.bagItemNodes) {
            if (this.bagItemNodes[key].name == "EquipmentItem") {
                ItemPoolMgr.ins.putEquipItem(this.bagItemNodes[key])
            } else {
                ItemPoolMgr.ins.putCommonItem(this.bagItemNodes[key])
            }

        }
        this.bagItemNodes = [];
    }

}



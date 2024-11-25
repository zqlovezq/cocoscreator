import { _decorator, Component, director, Label, log, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { CommonItem } from '../item/CommonItem';
import { tab } from '../../../Table/table_gen';
import { ItemInfo } from '../item/ItemInfo';
import { LangMgr } from '../../mgr/LangMgr';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { HeroInfo } from '../hero/HeroInfo';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ItemData } from '../item/ItemData';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { EventMgr } from '../../mgr/EventMgr';
import { ViewName } from '../../define/ViewDefine';
import { HeroItem } from '../item/HeroItem';
import { GameUtil } from '../../utils/GameUtil';
import { EquipData } from '../equip/EquipData';
const { ccclass, property } = _decorator;

@ccclass('ItemInfoPop')
export class ItemInfoPop extends ViewPop {
    @property(Node)
    node_top: Node = null;
    @property(Node)
    node_list: Node = null;
    @property(Node)
    node_num: Node = null;
    @property(Node)
    node_btn: Node = null;
    @property(CommonItem)
    item: CommonItem = null;
    @property(Label)
    lbl_name: Label = null;
    @property(Label)
    lbl_desc: Label = null;
    @property(Node)
    node_list_content: Node = null;
    @property(Label)
    lbl_num: Label = null;
    @property(Node)
    node_use_btn: Node = null;
    @property(Node)
    node_compound_btn: Node = null;

    @property(Node)
    node_hava_item_count: Node = null;
    @property(Node)
    node_way: Node = null;
    @property(Label)
    lbl_way: Label = null;

    private _itemId: number = 0;
    private _itemUseCount: number = 0;
    private _isBag: boolean = false;
    private _itemCount: number = 0;
    private _selectHeroId: number = 0;
    private equipComItems: Array<Node> = [];
    private heroComItems: Array<Node> = [];
    private comItems: Array<Node> = [];
    private bookComItems: Array<Node> = [];
    // 判断当前是否是背包界面
    judgeIsBagView() {
        const BagPop = UIMgr.ins.getView('BagPop');
        if (BagPop) {
            return true;
        }
        return false;
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.UseItemRsp, this.on_s2c_UseItemRsp, this)
    }
    on_s2c_UseItemRsp(msg: proto.Msg_UseItemRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            if (msg.rewards && msg.rewards.length > 0) {
                UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
            } else {
                log("奖励是空的")
                //ShowTips("背包已满,去邮箱领取英雄");
                // ShowTips(LangMgr.getLab("Tips_herobag_2"));
            }
        } else if (msg.error) {
            ShowTips(msg.error.message);
        }

        this.onClose();
    }
    onShow(): void {
        this._isBag = this.judgeIsBagView();
        this._itemId = this.openData.itemId;
        this.node_top.active = true;
        this.node_list.active = false;
        this.node_num.active = false;
        this.node_btn.active = false;
        const itemData = tab.getData().ItemTableById.getValue(this._itemId)
        if (itemData.Type === tab.ItemType.ItemType_Piece) {
            this._itemUseCount = itemData.Quality === tab.ItemQuality.ItemQuality_Purple ? 30 : 50;
        } else if (itemData.Type === tab.ItemType.ItemType_ChoiceBox) {
            this._itemUseCount = 1;
        }
        const count = ItemData.ins.getCount(this._itemId);
        if (count >= this._itemUseCount) {
            this._itemCount = 1;
        }
        this.updatePieceLbl();
        switch (itemData.Type) {
            case tab.ItemType.ItemType_Elixir:
            case tab.ItemType.ItemType_Head:
            case tab.ItemType.ItemType_HeadFrame:
            case tab.ItemType.ItemType_ChatBubble:
            case tab.ItemType.ItemType_MainScene:
                break;
            case tab.ItemType.ItemType_Piece:
            case tab.ItemType.ItemType_Material:
            case tab.ItemType.ItemType_ChoiceBox:
                this.showMaterialTip()
                break
            case tab.ItemType.ItemType_Box:
            case tab.ItemType.ItemType_IdleReward:
                this._itemUseCount = 1;
                this.node_compound_btn.active = false;
                this.node_use_btn.active = true;
                this.node_num.active = true;
                this.node_btn.active = true;
                break;
            default:
                break;
        }
        let itemInfo = new ItemInfo();
        itemInfo.itemId = this._itemId;
        itemInfo.num = ItemData.ins.getCount(this._itemId);
        this.item.initData(itemInfo);
        this.item.setSelectState(false);
        this.lbl_name.string = LangMgr.getLab(itemData.Name);
        this.lbl_desc.string = LangMgr.getLab(itemData.Desc);
        /* 是否在玩家背包内 如果不是不显示 num_node  btn_node*/
        if (!this._isBag) {
            this.node_num.active = false;
            this.node_btn.active = false;
            this.node_hava_item_count.active = false;
        }
        /* 是否存在跳转路径 */
        const jumpTab = tab.getData().ItemClientJumpTableByItemId.getValue(this._itemId);
        this.node_way.active = jumpTab ? true : false;
        if (itemData.AcquireWay.length > 0) {
            const arr = [];
            for (let i = 0; i < itemData.AcquireWay.length; i++) {
                const opName = itemData.AcquireWay[i];
                const str = LangMgr.getLab(tab.OpenFunctionName[opName]);
                arr.push(str);
            }
            this.lbl_way.string = arr.join(", ");
            this.node_way.active = true;
        }
    }
    /* 材料点击 */
    showMaterialTip() {
        const itemData = tab.getData().ItemTableById.getValue(this._itemId);
        this.node_use_btn.active = itemData.BagType !== tab.BagType.BagType_Fragment;
        this.node_compound_btn.active = itemData.BagType === tab.BagType.BagType_Fragment
        if (itemData.BagType === tab.BagType.BagType_Fragment) {
            // 碎片
            if (this._itemId >= 6001 && this._itemId <= 6003) {
                // 随机英雄品质碎片
                this.createRdmPiece(itemData.DropId[1] ? itemData.DropId[1] : itemData.DropId[0])
            } else if (this._itemId >= 6004 && this._itemId <= 6008) {
                // 随机英雄职业碎片
                this.createRdmPiece(itemData.DropId[1] ? itemData.DropId[1] : itemData.DropId[0])
            } else {
                if (tab.getData().HeroTableById.getValue(this._itemId - 4000)) {
                    // 单英雄碎片
                    this.node_num.active = true;
                    this.node_btn.active = true;
                }
            }
        } else if (itemData.BagType === tab.BagType.BagType_Goods) {
            const boxTab = tab.getData().ChoiceBoxTableByChoiceBoxId.getValue(itemData.DropId[0]);
            if (boxTab) {
                this.createRdmPiece(0, true)
            } 
            // else {
            //     if (itemData.Type === tab.ItemType.ItemType_Box) {
            //         this.createRdmPiece(itemData.DropId[0], false)
            //     }
            // }
        }
    }
    /* 随机碎片、随机宝箱：显示top_node list_node num_node btn_node，滑动列表道具不可选中 */
    createRdmPiece(isAutoBoxDropId: number, isSelfSelectBox?: boolean) {
        var self = this;
        this.node_list.active = true;
        this.node_btn.active = true;
        this.node_num.active = true;
        this.node_list_content.destroyAllChildren();
        const itemData = tab.getData().ItemTableById.getValue(this._itemId);
        // const heroId = this._itemId;
        if (this.heroComItems) {
            for (let key in this.heroComItems) {
                ItemPoolMgr.ins.putHeroItem(this.heroComItems[key]);
            }
        }
        let heroList = [];
        let boxList = [];
        // if (isVocation) {
        //     heroList = HeroDataControl.ins.getBookHeroListByVocation(6009 - heroId, false);
        // } else {
        //     heroList = HeroDataControl.ins.getHeroListByAptitude(heroId - 5999)
        // }
        // 如果是自选宝箱 数据为自选宝箱表
        if (isSelfSelectBox) {
            const boxTab = tab.getData().ChoiceBoxTableByChoiceBoxId.getValue(itemData.DropId[0]);
            heroList = boxTab.ChoiceItemIds;
            boxList = boxTab.ChoiceItemNum;
        }
        if (isAutoBoxDropId) {
            heroList = [];
            // 如果是随机宝箱
            const list = GameUtil.getRewardsByDropId(isAutoBoxDropId);
            for (let i = 0; i < list.length; i++) {
                heroList.push(list[i].itemId);
            }
        }
        for (let i = 0; i < heroList.length; i++) {
            const itemTab = tab.getData().HeroTableById.getValue(heroList[i])
            let itemTs = null;
            if (itemTab) {
                const info = new HeroInfo();
                info.itemId = heroList[i]
                info.id = 0;
                info.star = itemTab.DefaultStar;
                const itemNode = ItemPoolMgr.ins.createHeroItem(info, this.node_list_content);
                itemTs = itemNode.getComponent(HeroItem);
                itemTs.setLevel(0);
            } else {
                const info = new ItemInfo();
                info.itemId = heroList[i]
                info.num = 1;
                const itemNode = ItemPoolMgr.ins.createItem(info, this.node_list_content);
                itemTs = itemNode.getComponent(CommonItem);
            }
            if (this._isBag && itemData.Type === tab.ItemType.ItemType_ChoiceBox) {
                itemTs.setTouchCallBack(() => {
                    self._selectHeroId = heroList[i];
                    if (boxList.length > 0) {
                        self._itemUseCount = boxList[i];
                    }
                    this.setAllHerosSelect();
                })
            }
        }
    }
    setAllHerosSelect() {
        for (let i = 0; i < this.node_list_content.children.length; i++) {
            let item = this.node_list_content.children[i];
            let ts = null;
            if (item.getComponent(HeroItem)) {
                ts = item.getComponent(HeroItem)
                ts.setSelect(this._selectHeroId === ts.heroInfo.itemId ? true : false);
            } else if (item.getComponent(CommonItem)) {
                ts = item.getComponent(CommonItem)
                ts.setSelectState(this._selectHeroId === ts.data.itemId ? true : false);
            }
        }
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    protected onDisable(): void {
        if (this.equipComItems) {
            for (let key in this.equipComItems) {
                ItemPoolMgr.ins.putEquipItem(this.equipComItems[key]);
            }
        }
        if (this.heroComItems) {
            for (let key in this.heroComItems) {
                ItemPoolMgr.ins.putHeroItem(this.heroComItems[key]);
            }
        }
        if (this.comItems) {
            for (let key in this.comItems) {
                ItemPoolMgr.ins.putCommonItem(this.comItems[key]);
            }
        }
        if (this.bookComItems) {
            for (let key in this.bookComItems) {
                ItemPoolMgr.ins.putBookItme(this.bookComItems[key]);
            }
        }
    }
    // add碎片
    private clickAddPiece() {
        this._itemCount++;
        const count = ItemData.ins.getCount(this._itemId);
        const max = Math.floor(count / this._itemUseCount);
        if (this._itemCount > max) {
            this._itemCount = max;
        }
        this.updatePieceLbl();
    }
    // sub碎片
    private clickSubPiece() {
        this._itemCount--;
        const count = ItemData.ins.getCount(this._itemId);
        const max = Math.floor(count / this._itemUseCount);
        if (max >= 1 && this._itemCount < 1) {
            this._itemCount = 1;
        }
        if (this._itemCount < 0) {
            this._itemCount = 0;
        }
        this.updatePieceLbl();
    }
    // max碎片
    private clickMaxPiece() {
        const count = ItemData.ins.getCount(this._itemId);
        const max = Math.floor(count / this._itemUseCount);
        this._itemCount = max;
        this.updatePieceLbl();
    }
    private useBtn() {
        console.log("cocos 点击使用道具");
        const itemData = tab.getData().ItemTableById.getValue(this._itemId)
        let choiceIndex = -1;
        if (itemData.Type === tab.ItemType.ItemType_ChoiceBox) {
            const boxTab = tab.getData().ChoiceBoxTableByChoiceBoxId.getValue(itemData.DropId[0]);
            const heroList = boxTab.ChoiceItemIds;
            choiceIndex = heroList.indexOf(this._selectHeroId);
            if (choiceIndex < 0) {
                //ShowTips("请选择物品");
                ShowTips(LangMgr.getLab("Tips_iteminfo_1"));
                return;
            }
        }else{
            if (itemData.DropId&&(itemData.Type === tab.ItemType.ItemType_Gift||itemData.Type === tab.ItemType.ItemType_Box)) {
                let heroCount = 0;
                let totalEquip = 0;
                let totalhero = 0;
                let equipCount = 0;
                for (let key in itemData.DropId) {
                    let items = GameUtil.getRewardsByDropId(itemData.DropId[key]);
                    for (let k in items) {
                        if (items[k].itemTable.Type == tab.ItemType.ItemType_Hero) {
                            if (heroCount < items[k].num) {
                                heroCount = items[k].num;
                            }
                        } else if (items[k].itemTable.BagType == tab.BagType.BagType_Equip) {
    
                            if (equipCount < items[k].num) {
                                equipCount = items[k].num;
                            }
                        }
                    }
                    totalEquip += equipCount;
                    totalhero += heroCount;
                    log("使用宝箱最大数量 ---装备--" + totalEquip + "-----英雄-----" + totalhero, '---掉落id---', itemData.DropId[key])
                }
    
                if (totalhero > 0) {
                    if (HeroDataControl.ins.getHeroBagFull(totalhero * this._itemCount)) {
                        ShowTips(LangMgr.getLab("Tips_herobag_1"))
                        return
                    }
                }
                if (totalEquip > 0) {
                    if (EquipData.ins.getEquipBagFull(totalEquip * this._itemCount)) {
                        ShowTips(LangMgr.getLab("Tips_bag_1"))
                        return;
                    }
                }
    
            }
        }

        if (this._itemCount > 0) {
            let msg = new proto.Msg_UseItemReq();
            msg.itemId = this._itemId;
            msg.itemCount = this._itemUseCount * this._itemCount;
            if (choiceIndex >= 0) {
                msg.extra = new proto.UseItemExtra();
                msg.extra.choiceIndexes = [];
                for (let i = 0; i < this._itemCount; i++) {
                    msg.extra.choiceIndexes.push(choiceIndex);
                }
            }
            Net.Send(proto.Ptl.UseItemReq, msg)
        }
    }
    private compoundBtn() {
        console.log("cocos 点击合成碎片");
        if (HeroDataControl.ins.getHeroBagFull(this._itemCount)) {
            ShowTips(LangMgr.getLab("Tips_herobag_1"))
            return
        }
        if (this._itemCount > 0) {
            let msg = new proto.Msg_UseItemReq();
            msg.itemId = this._itemId;
            msg.itemCount = this._itemUseCount * this._itemCount;
            Net.Send(proto.Ptl.UseItemReq, msg)
        }
    }
    // use碎片
    updatePieceLbl() {
        this.lbl_num.string = String(this._itemCount);
    }
}



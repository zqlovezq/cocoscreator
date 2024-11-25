import { _decorator, Asset, Component, error, instantiate, Node, NodePool, Prefab, v3 } from 'cc';
import { LoadResAsync } from '../../mgr/ResMgr';
import { CommonItem } from './CommonItem';
import { tab } from '../../../Table/table_gen';
import { HeroItem } from './HeroItem';
import { HeroInfo } from '../hero/HeroInfo';
import { EquipmentItem } from './EquipmentItem';
import { WeaponItem } from '../common/WeaponItem';

import { proto } from 'client_protocol';
import { ItemInfo } from './ItemInfo';
import { EquipInfo } from '../equip/EquipInfo';
import { RareBookData } from '../rareBook/RareBookData';

const { ccclass, property } = _decorator;

@ccclass('ItemPoolMgr')
export class ItemPoolMgr {
    private static _instance: ItemPoolMgr;
    private _itemCommonPool: NodePool;
    private _itemHeroPool: NodePool;
    private _equipmentItemPool: NodePool;
    private _bookItemPool: NodePool;
    private conmmonPrefab: Prefab;
    private equipmentPrefab: Prefab;
    private heroPrefab: Prefab;
    private bookPrefab: Prefab;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new ItemPoolMgr();
            this._instance.initPool();
        }
        return this._instance;
    }
    private initPool() {
        this._itemCommonPool = new NodePool();
        this._itemHeroPool = new NodePool();
        this._equipmentItemPool = new NodePool();
        this._bookItemPool = new NodePool();
    }
    async loadItemPrefab() {
        this.heroPrefab = await LoadResAsync('prefab/common/HeroItem', Prefab);
        this.conmmonPrefab = await LoadResAsync('prefab/common/CommonItem', Prefab);
        this.equipmentPrefab = await LoadResAsync('prefab/common/EquipmentItem', Prefab);
        this.bookPrefab = await LoadResAsync('prefab/common/WeaponItem', Prefab);
        this.addRef(this.heroPrefab)
        this.addRef(this.conmmonPrefab)
        this.addRef(this.equipmentPrefab)
        this.addRef(this.bookPrefab)
    }
    addRef(ass: Asset) {
        if (ass) {
            ass.addRef()
        }
    }

    createRewadItem(reward: proto.Item, parentNode: Node, isTouch = true) {
        let itemTab = tab.getData().ItemTableById.getValue(reward.itemId);
        if (!itemTab) {
            error("itemTabel 未配置---", reward.itemId)
            return;
        }
        let Type = itemTab.Type;
        let node;
        switch (Type) {
            case tab.ItemType.ItemType_Hero:
                let info = new HeroInfo();
                info.createDefaultData(reward.itemId);
                node = this.createHeroItem(info, parentNode);
                break;
            case tab.ItemType.ItemType_Book:
                node = this.createBookItem(reward.itemId, parentNode);
                break;
            case tab.ItemType.ItemType_Currency:
            case tab.ItemType.ItemType_Material:
            case tab.ItemType.ItemType_HeroCommonCost:
            case tab.ItemType.ItemType_LimitTimeItem:
            case tab.ItemType.ItemType_Elixir:
            case tab.ItemType.ItemType_Box:
            case tab.ItemType.ItemType_ChoiceBox:
                if (itemTab.Id > 6100 && itemTab.Id < 9000) {
                    reward.itemId = itemTab.Id - 4000
                    let info = new HeroInfo();
                    info.createDefaultData(reward.itemId);
                    node = this.createHeroItem(info, parentNode);
                } else {
                    let itemInfo = new ItemInfo();
                    itemInfo.initItemData(reward.itemId, Number(reward.num));
                    node = this.createItem(itemInfo, parentNode, isTouch);
                }
                break;
            case tab.ItemType.ItemType_Equip:
                let euqipInfo = new EquipInfo();
                euqipInfo.createDefaultData(reward.itemId);
                node = this.createEquipItem(euqipInfo, parentNode, isTouch);
                // this.createEquipItem(data, parentNode)
                break;
            default:
                let itemInfo = new ItemInfo();
                itemInfo.initItemData(reward.itemId, Number(reward.num));
                node = this.createItem(itemInfo, parentNode, isTouch);
                break;
        }
        return node;

    }
    createItem(data: any, parentNode: Node, isTouch = true, isConsume: boolean = false): Node {
        let node: Node = null;
        node = this._itemCommonPool.get();
        if (!node) {
            node = instantiate(this.conmmonPrefab);
        }
        node.parent = parentNode;
        let com = node.getComponent(CommonItem);
        com.initData(data, isTouch, isConsume);
        node.setPosition(v3(0, 0));
        node.setScale(1, 1);
        return node;

    }
    createEquipItem(data: any, parentNode: Node, isTouch = true): Node {
        let node = null;
        node = this._equipmentItemPool.get();
        if (!node) {
            node = instantiate(this.equipmentPrefab);
        }
        node.parent = parentNode;
        let com = node.getComponent(EquipmentItem);
        com.initData(data, isTouch);
        node.setPosition(v3(0, 0));
        return node;

    }
    createHeroItem(data: any, parent: Node) {
        let node: Node = null;
        node = this._itemHeroPool.get();
        if (!node) {
            node = instantiate(this.heroPrefab);
        }
        node.parent = parent;
        node.setPosition(0, 0);
        node.getComponent(HeroItem).UpdateContent(data);
        node.getComponent(HeroItem).setLevel(0);
        return node;
    }
    createBookItem(data: any, parent: Node) {
        let node: Node = null;
        node = this._bookItemPool.get();
        if (!node) {
            node = instantiate(this.bookPrefab);
        }
        node.parent = parent;
        node.setPosition(0, 0);
        const itemTs = node.getComponent(WeaponItem)
        itemTs.initData(data,false,false);
        return node;
    }
    putCommonItem(node: Node) {
        this._itemCommonPool.put(node);
    }
    putEquipItem(node: Node) {
        this._equipmentItemPool.put(node);
    }
    putHeroItem(node: Node) {
        this._itemHeroPool.put(node);
    }
    putBookItme(node: Node) {
        this._bookItemPool.put(node);
    }
    clear() {
        this._itemCommonPool.clear();
        this._itemHeroPool.clear();
        this._equipmentItemPool.clear()
        this._bookItemPool.clear()
    }




}



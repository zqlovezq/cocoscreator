import { _decorator, Component, Layout, Node, Animation } from 'cc';
import { proto } from 'client_protocol';
import { ItemInfo } from '../item/ItemInfo';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { HeroInfo } from '../hero/HeroInfo';
import { tab } from '../../../Table/table_gen';
import { HeroItem } from '../item/HeroItem';
import { WeaponItem } from '../common/WeaponItem';
import { EquipInfo } from '../equip/EquipInfo';
import { EquipmentItem } from '../item/EquipmentItem';
import { CommonItem } from '../item/CommonItem';
import { RareBookInfo } from '../rareBook/RareBookInfo';
const { ccclass, property } = _decorator;

@ccclass('CongratulationItem')
export class CongratulationItem extends Component {
    private data:proto.Item[] = [];
    private count:number = 0;
    
    private equipComItems: Array<Node> = [];
    private heroComItems: Array<Node> = [];
    private comItems: Array<Node> = [];
    private bookComItems: Array<Node> = [];
    setData(data: proto.Item[]) {
        this.data = data;
        this.count = 0;
        for (let i = 0; i < 6; i++) {
            const parentNode = this.node.children[i];
            if (data[i]) {
                parentNode.active = true;
            } else {
                parentNode.active = false;
            }
        }
        this.unschedule(this.playAnim);
        this.schedule(this.playAnim, 0.25, data.length - 1)
    }
    playAnim() {
        const parentNode = this.node.children[ this.count];
        const anim = parentNode.getComponent(Animation);
        anim.play();
        this.createItemByType(this.data[ this.count], parentNode);
        this.count++;
    }
    // 根据类型创建不同的item
    createItemByType(data: proto.Item, parentNode: Node) {
        const itemTab = tab.getData().ItemTableById.getValue(data.itemId);
        const Type = itemTab.Type;
        switch (Type) {
            case tab.ItemType.ItemType_Hero:
                this.createHeroItem(data, parentNode)
                break;
            case tab.ItemType.ItemType_Book:
                this.createBookItem(data, parentNode)
                break;
            case tab.ItemType.ItemType_Currency:
            case tab.ItemType.ItemType_Material:
            case tab.ItemType.ItemType_HeroCommonCost:
            case tab.ItemType.ItemType_LimitTimeItem:
            case tab.ItemType.ItemType_Elixir:
            case tab.ItemType.ItemType_Box:
            case tab.ItemType.ItemType_Piece:
            case tab.ItemType.ItemType_IdleReward:
            case tab.ItemType.ItemType_ChoiceBox:
                if (itemTab.Id > 6100 && itemTab.Id < 9000) {
                    data.itemId = itemTab.Id - 4000
                    this.createHeroItem(data, parentNode, true);
                } else {
                    this.createCommonItem(data, parentNode);
                }
                break;
            case tab.ItemType.ItemType_HeadFrame:
            case tab.ItemType.ItemType_ChatBubble:
            case tab.ItemType.ItemType_Head:
            case tab.ItemType.ItemType_MainScene:
            case tab.ItemType.ItemType_LimitTimeItem:
                this.createCommonItem(data, parentNode);
                break;
            case tab.ItemType.ItemType_Equip:
                this.createEquipItem(data, parentNode)
                break;
            default:
                break;
        }
    }
    // 创建普通item
    createCommonItem(data: proto.Item, parentNode: Node) {
        const info = new ItemInfo();
        info.itemId = data.itemId;
        info.num = data.num;
        const itemItem = ItemPoolMgr.ins.createItem(info, parentNode);
        this.comItems.push(itemItem);
        const itemTs = itemItem.getComponent(CommonItem);
        itemTs.setTouchCallBack(() => {

        })
    }
    // 创建英雄item
    createHeroItem(data: proto.Item, parentNode: Node, isPiece: boolean = false) {
        const info = new HeroInfo();
        info.itemId = data.itemId;
        const itemTab = tab.getData().HeroTableById.getValue(data.itemId)
        info.id = 0;
        info.star = data.extra && data.extra.heroStar ? data.extra.heroStar : itemTab.DefaultStar;
        const heroItem = ItemPoolMgr.ins.createHeroItem(info, parentNode);
        this.heroComItems.push(heroItem);
        const itemTs = heroItem.getComponent(HeroItem);
        itemTs.setTouchCallBack(() => {

        })
        if (isPiece) {
            itemTs.setPiece(Number(data.num));
        }
    }
    // 创建秘籍
    createBookItem(data: proto.Item, parentNode: Node) {
        let info = new RareBookInfo();
        info.initItemId(data.itemId);
        const Weapon_Item = ItemPoolMgr.ins.createBookItem(info, parentNode);
        this.bookComItems.push(Weapon_Item);
        const itemTs = Weapon_Item.getComponent(WeaponItem);
        itemTs.initBookItemId(data.itemId)
    }
    // 创建装备
    createEquipItem(data: proto.Item, parentNode: Node) {
        const info = new EquipInfo();
        info.itemId = data.itemId;
        const equipItem = ItemPoolMgr.ins.createEquipItem(info, parentNode, false);
        this.equipComItems.push(equipItem);
        const itemTs = equipItem.getComponent(EquipmentItem);
        itemTs.setTouchCallBack(() => {

        })
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
}



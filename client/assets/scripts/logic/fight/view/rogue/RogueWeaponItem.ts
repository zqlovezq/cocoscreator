import { _decorator, Component, instantiate, Label, Node, Prefab, sp, Sprite } from "cc";
import { RogueInfo } from "./RogueInfo";
import { tab } from "../../../../Table/table_gen";
import { RogueBaseItem } from "./RogueBaseItem";
import { LangMgr } from "../../../mgr/LangMgr";
import { RogueWeaponHeroItem } from "./RogueWeaponHeroItem";
import { WeaponInfoItem } from "../../../model/common/WeaponInfoItem";
import { RareBookInfo } from "../../../model/rareBook/RareBookInfo";
import { RareBookData } from "../../../model/rareBook/RareBookData";
import { ItemInfo } from "../../../model/item/ItemInfo";

const { ccclass, property } = _decorator;


@ccclass('RogueBookItem')
export class RogueBookItem extends RogueBaseItem {
    @property(Prefab)
    weaponPfb: Prefab = null

    @property(Prefab)
    heroPfb: Prefab = null
    @property(Prefab)
    RogueFullPfb: Prefab = null

    

    @property(Node)
    parentNode: Node = null


    setData(info: RogueInfo) {
        super.setData(info)

        if (info.heroItemId) {
            let nn = instantiate(this.heroPfb)
            this.parentNode.addChild(nn)
            nn.getComponent(RogueWeaponHeroItem).setData(info)
        }else if (info.ifFullId()){
            let nn = instantiate(this.RogueFullPfb)
            this.parentNode.addChild(nn)
        } else {
            let nn = instantiate(this.weaponPfb)
            this.parentNode.addChild(nn)

            let bookInfo = RareBookData.ins.getBookInfoByItemId(info.rogueTab.BookId)
            // let bookInfo = new RareBookInfo()
            // bookInfo.initItemId(info.rogueTab.BookId)
            nn.getComponent(WeaponInfoItem).initData(bookInfo,info)
        }

    }
}
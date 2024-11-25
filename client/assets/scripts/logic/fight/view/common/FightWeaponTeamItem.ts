import { _decorator, Button, Color, Component, Label, Node, Prefab, ProgressBar, Sprite, tween } from "cc";
import { tab } from "../../../../Table/table_gen";
import { HeroFightInfo } from "../../data/HeroFightInfo";
import { RogueInfo } from "../rogue/RogueInfo";
import { LangMgr } from "../../../mgr/LangMgr";
import { UIMgr } from "../../../mgr/UIMgr";
import { ViewName } from "../../../define/ViewDefine";
import { RareBookInfo } from "../../../model/rareBook/RareBookInfo";
import { RareBookData } from "../../../model/rareBook/RareBookData";
import { BuffControl } from "../../base/buff/BuffControl";
import { AbsObjType } from "../../base/obj/AbsObj";

const { ccclass, property } = _decorator;

@ccclass('FightWeaponTeamItem')
export class FightWeaponTeamItem extends Component {
    @property(Node)
    baseNode: Node = null
    @property(Node)
    blackNode: Node = null

    @property(Sprite)
    qualityImg: Sprite = null;

    @property(Sprite)
    iconImg: Sprite = null;

    @property(Button)
    btn: Button = null;

    @property(Sprite)
    bookPlaysSpr: Sprite = null;

    @property(Node)
    lookNode: Node = null

    @property(ProgressBar)
    cdBar: ProgressBar = null

    @property(Label)
    buffNumberLab: Label = null;
    protected onLoad(): void {
        this.buffNumberLab.node.active = false
        this.buffNumberLab.string = ""
    }

    info: RogueInfo
    setData(info: RogueInfo, isTouch: boolean = false) {
        this.info = info;
        this.btn.enabled = isTouch;
        if (info == null) {
            this.blackNode.active = true
            this.baseNode.active = !this.blackNode.active
            return
        }
        this.blackNode.active = false
        this.baseNode.active = !this.blackNode.active

        let itemTab = tab.getData().ItemTableById.getValue(info.rogueTab.BookId)
        let bookTab = tab.getData().BookTableById.getValue(info.rogueTab.BookId)

        this.iconImg.setTexture(itemTab.Icon)
        this.qualityImg.setTexture("textrue/quality/qualityBg_" + itemTab.Quality);

        this.bookPlaysSpr.node.active = bookTab.PlaystyleName != "";
        if (bookTab.PlaystyleName != "") {
            this.bookPlaysSpr.setTexture(bookTab.PlaystyleName)
        }

        this.buffNumberLab.node.active = false
        let idlist = tab.getData().GetKeyValue_ConfigTable().FinalBuffId
        for (let i = 0; i < idlist.length; i++) {
            let rogueId = idlist[i]
            let buffid = idlist[i + 1]
            //指定id显示一个buff层数共享
            if (info.Id == rogueId) {
                let num = BuffControl.ins.getBuffNumByObjTypeAndBuffId(AbsObjType.role, buffid)
                if (num > 0) {
                    this.buffNumberLab.node.active = true
                    this.buffNumberLab.string = num.toString()
                }
            }
            i++
        }


    }
    onClickItem() {
        let bookId = 0
        if (this.info && this.info.rogueTab && this.info.rogueTab.BookId) {
            bookId = this.info.rogueTab.BookId
        } else {
            bookId = this.bookId
        }
        if (bookId == 0){
            return
        }

        let bookInfo = RareBookData.ins.getBookInfoByItemId(bookId)
        UIMgr.ins.show({ viewName: ViewName.RareBookInfoItemPop, data: { "bookInfo": bookInfo } });

        // UIMgr.ins.show({ viewName: ViewName.HeroSkillPop,data: {
        //     type:this._type,
        //     heroInfo:this._heroInfo
        // },zIndex:300})
    }


    bookId: number = 0
    /** pvp 0未设置， -1未解锁 */
    setBookId(bookId: number) {
        this.bookId = bookId
        if (bookId <= 0) {
            this.blackNode.active = true
            this.baseNode.active = !this.blackNode.active
            this.lookNode.active = bookId == -1
            return
        }
        this.blackNode.active = false
        this.baseNode.active = !this.blackNode.active
        this.btn.enabled = false
        let itemTab = tab.getData().ItemTableById.getValue(bookId)
        let bookTab = tab.getData().BookTableById.getValue(bookId)

        this.iconImg.setTexture(itemTab.Icon)
        this.qualityImg.setTexture("textrue/quality/qualityBg_" + itemTab.Quality);

        this.bookPlaysSpr.node.active = bookTab.PlaystyleName != "";
        if (bookTab.PlaystyleName != "") {
            this.bookPlaysSpr.setTexture(bookTab.PlaystyleName)
        }
        this.cdBar.node.active = true
        this.cdBar.progress = 1
    }

    activeBook() {
        if (this.bookId > 0) {
            tween(this.cdBar).to(0.2, { progress: 0 }).start()
        }
    }

}


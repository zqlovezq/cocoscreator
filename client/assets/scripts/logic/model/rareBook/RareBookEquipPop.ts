import { _decorator, Component, Label, Node, RichText } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { WeaponItem } from '../common/WeaponItem';
import { RareBookInfo } from './RareBookInfo';
import { LangMgr } from '../../mgr/LangMgr';
import { tab } from '../../../Table/table_gen';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { RareBookData } from './RareBookData';
import { RareBookControl } from './RareBookControl';
import { RareBookSmallItem } from './RareBookSmallItem';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookEquipPop
 * zhudingchao
 * Tue May 28 2024 14:52:13 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookEquipPop.ts
 *
 */

@ccclass('RareBookEquipPop')
export class RareBookEquipPop extends ViewPop {
    @property(RareBookSmallItem)
    weaponItem: RareBookSmallItem = null;
    @property(Label)
    nameLab: Label = null;
    @property(Label)
    rarebooklevelLab: Label = null;
    @property(RichText)
    descRichText: RichText = null;
    @property(Node)
    developNode: Node = null;
    @property(Node)
    cancelNode: Node = null;
    @property(Node)
    notcancelNode: Node = null;
    private info: RareBookInfo;
    register(): void {

    }
    onShow(): void {
        this.info = this.openData["bookInfo"];
        if (this.info) {
            this.initView();
        }
    }
    initView() {
        this.weaponItem.initView(this.info, false, null, false);
        this.nameLab.string = LangMgr.getLab(this.info.itemTable.Name);
        let str = "";
        if (this.info.bookTable.Aptitude == tab.HeroAptitude.HeroAptitude_N) {
            str = LangMgr.getCombineString("ui_rarebook_20", [1])
        } else if (this.info.bookTable.Aptitude == tab.HeroAptitude.HeroAptitude_R) {
            str = LangMgr.getCombineString("ui_rarebook_20", [2])
        } else if (this.info.bookTable.Aptitude == tab.HeroAptitude.HeroAptitude_SR) {
            str = LangMgr.getCombineString("ui_rarebook_20", [3])
        }
        this.rarebooklevelLab.string = str;
        this.descRichText.string = LangMgr.getLab(this.info.bookStarTable.BookDescription);
        if (this.info.isWear) {
            this.notcancelNode.active = false;
            this.cancelNode.active = true;
        } else {
            this.notcancelNode.active = true;
            this.cancelNode.active = false;
        }

    }

    onClickDevelop() {
        UIMgr.ins.show({ viewName: ViewName.RareBookDetailView, data: { "currInfo": this.info } })
        this.onClose();
    }
    onClickCancel() {
        RareBookControl.ins.requestDropBook(this.info.id);
        this.onClose();
    }
    onClickNotCancel() {
        let slots = RareBookData.ins.getBookSlotsByHeroClass(this.info.bookTable.Class);
        let isHavePos = false;
        for (let key in slots) {
            if (!slots[key].bookInfo && slots[key].isLock) {
                isHavePos = true;
                break;
            }
        }
        if (isHavePos) {
            RareBookControl.ins.requestTakeBook(this.info.id);
            this.onClose();
        } else {
            ShowTips(LangMgr.getLab("Tips_rarebook_3"));
            this.onClose();
        }


    }
}
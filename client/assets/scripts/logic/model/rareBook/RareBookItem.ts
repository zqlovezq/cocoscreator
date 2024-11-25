import { _decorator, Component, Label, Node, ProgressBar, Sprite } from 'cc';
import { HeroStar } from '../hero/HeroStar';
import { RareBookInfo } from './RareBookInfo';
import { LangMgr } from '../../mgr/LangMgr';
import { tab } from '../../../Table/table_gen';
import { ItemData } from '../item/ItemData';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { ComponentBase } from '../../../framework/base/ComponentBase';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { GameUtil } from '../../utils/GameUtil';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookItem
 * zhudingchao
 * Wed May 22 2024 11:30:22 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookItem.ts
 *
 */

@ccclass('RareBookItem')
export class RareBookItem extends ComponentBase {
    @property(Node)
    emptyNode: Node = null;
    @property(Node)
    bigLockNode: Node = null;
    @property(Node)
    lockNode: Node = null;
    @property(Node)
    rareBookNode: Node = null;


    @property(Sprite)
    bookSpr: Sprite = null;
    @property(Label)
    bookNameLab: Label = null;
    @property(Sprite)
    qualitySpr: Sprite = null;
    @property(Sprite)
    qualityBgSpr: Sprite = null;
    @property(Sprite)
    bookPlaystyleSpr: Sprite = null;

    @property(Sprite)
    vocationTypeSpr: Sprite = null;
    @property(Label)
    levelLv: Label = null;
    @property(Node)
    equipNode: Node = null;
    @property(HeroStar)
    starItem: HeroStar = null;
    @property(Node)
    fragmentNode: Node = null;
    @property(Label)
    fragmentNumLab: Label = null;
    @property(Node)
    scoreNode: Node = null;
    @property(Label)
    scoreLab: Label = null;
    @property(Node)
    redDotNode: Node = null;
    @property(Label)
    unlockLab: Label = null;
    @property(ProgressBar)
    fragmentBar: ProgressBar = null;
    public info: RareBookInfo;
    private touchCallBack: Function;
    private isShowFragment: boolean;
    private isShowScore: boolean;
    private isShowRed: boolean;
    start() {

    }
    register(): void {
        EventMgr.onLocal(LocalEvent.updateBookRedPoint, this.updateRed, this)
    }
    initData(info: RareBookInfo, isTouch = true, callBack: Function = null, isShowFragment: boolean = true, isShowScore = false, isShowRed: boolean = false) {
        this.info = info;
        this.isShowFragment = isShowFragment;
        this.bigLockNode.active = false;
        this.isShowScore = isShowScore;
        this.isShowRed = isShowRed;
        if (this.info) {
            // this.lockNode.active=false;
            this.rareBookNode.active = true;
            this.emptyNode.active = false;
            this.bookNameLab.string = LangMgr.getLab(this.info.itemTable.Name);
            this.bookSpr.setTexture(this.info.itemTable.Icon);
            let atpTab = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(this.info.bookTable.Aptitude);
            this.qualitySpr.setTexture(atpTab.Icon);
            this.qualityBgSpr.setTexture(atpTab.BookBg);
            let heroclass = tab.getData().HeroClassTableByHeroClass.getValue(this.info.bookTable.Class);
            this.vocationTypeSpr.setTexture(heroclass.Icon);
            this.bookPlaystyleSpr.node.active = this.info.bookTable.PlaystyleName != "";
            if (this.info.bookTable.PlaystyleName != "") {
                this.bookPlaystyleSpr.setTexture(this.info.bookTable.PlaystyleName);
            }
            // this.bookPlaystyleLab.string = LangMgr.getLab(tab.Playstyle[this.info.bookTable.PlaystyleName]);
            this.equipNode.active = this.info.isWear;
            this.updateView();
            // this.qualityFrameSpr.setTexture()

        } else {
            this.rareBookNode.active = false;
            this.emptyNode.active = true;
        }
        if (isTouch) {
            // this.addTouchEvent();
        }
        this.touchCallBack = callBack;
        this.redDotNode.active = this.isShowRed && this.info.isRedPoint;

    }
    initLockView(tips: string) {
        this.bigLockNode.active = true;
        this.emptyNode.active = false;
        this.rareBookNode.active = false;
        this.unlockLab.string = tips;

    }
    initEmptyView() {
        this.bigLockNode.active = false;
        this.emptyNode.active = true;
        this.rareBookNode.active = false;
    }

    updateView() {
        if (this.info.isLock) {
            this.starItem.showStar(this.info.star);
            this.starItem.node.active = true;
            this.fragmentNode.active = false;
            if (this.info.level > 0) {
                this.levelLv.node.active = true;
                this.levelLv.string = "+" + this.info.level;
            } else {
                this.levelLv.node.active = false;
            }

            this.lockNode.active = false;
            this.scoreNode.active = this.isShowScore;
            this.scoreLab.string = GameUtil.convertNumber(this.info.powerScore) + "";
        } else {
            this.scoreNode.active = false;
            this.starItem.node.active = false;
            if (this.isShowFragment) {
                this.fragmentNode.active = true;
                let table = this.info.fragmentTable;
                let curr = ItemData.ins.getCount(table.Id);
                this.fragmentNumLab.string = curr + "/" + table.Count;
                this.fragmentBar.progress = curr / table.Count;
            } else {
                this.fragmentNode.active = false;
            }




            this.levelLv.node.active = false;

            this.lockNode.active = false;
            this.lockNode.active = true;
           
        }
        this.redDotNode.active = this.isShowRed && this.info.isRedPoint;
    }
    onClickItem() {
        if (this.touchCallBack) {
            this.touchCallBack(this.info);
            // if (this.isShowRed && this.info.isRedPoint) {
            //     // this.info.isRedPoint = false;
            //     // this.redDotNode.active = this.info.isRedPoint;
            // }
        }
    }
    updateRed() {
        if (this.isShowRed) {
            this.redDotNode.active = this.info.isRedPoint;
        }
    }

    protected onDisable(): void {
        this.starItem.onDisable();
    }


}
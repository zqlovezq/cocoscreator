import { _decorator, Component, EventTouch, instantiate, Node, Prefab, ProgressBar, Toggle } from 'cc';
import { ViewBase } from '../../../framework/base/ViewBase';
import { tab } from '../../../Table/table_gen';
import { WeaponInfoItem } from '../common/WeaponInfoItem';
import { RareBookData } from '../rareBook/RareBookData';
import { WeaponItem } from '../common/WeaponItem';
import { ViewPop } from '../../../framework/base/ViewPop';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * WeaponPop
 * zhudingchao
 * Tue May 28 2024 15:38:56 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/weapon/WeaponPop.ts
 *
 */

@ccclass('WeaponPop')
export class WeaponPop extends ViewPop {
    @property([Node])
    toggles1: Array<Node> = [];
    @property([Node])
    toggles2: Array<Node> = [];
    @property([Node])
    toggles3: Array<Node> = [];
    @property(ProgressBar)
    proBar: ProgressBar = null;
    @property(WeaponInfoItem)
    WeaponInfoItem: WeaponInfoItem = null;
    @property(Node)
    defaultToggleNode: Node = null;
    @property(Prefab)
    weaponItemPrefab: Prefab = null;

    private currTag: number = 1;
    private boosDicTabs: Map<number, tab.BookDictionary>;

    private currWeaponItem: WeaponItem;
    private currNode: Node;
    register(): void {

    }
    onShow(): void {
        this.boosDicTabs = new Map();
        let tabs = tab.getData().BookDictionary;
        for (let key in tabs) {
            let bookId = tabs[key].PhaseOneBook;
            let heroClass = RareBookData.ins.getBookInfoByItemId(bookId).bookTable.Class;
            this.boosDicTabs.set(heroClass, tabs[key]);
        }
        this.initView();
        this.currNode = this.defaultToggleNode;
        this.currNode.getChildByName("redNode").active = false;
    }
    initView() {
        let currTab = this.boosDicTabs.get(this.currTag);
        this.updateItem(this.toggles1[0], currTab.PhaseOneBook, false)
        for (let key in currTab.PhaseTwoBook) {
            this.updateItem(this.toggles2[key], currTab.PhaseTwoBook[key], false);
        }
        let allLock = true;
        for (let key in currTab.PhaseThreeBook) {
            let isLock = this.updateItem(this.toggles3[key], currTab.PhaseThreeBook[key], true,true);
            if (allLock) {
                allLock = isLock;
            }
        }
        this.proBar.progress = allLock ? 1 : 0.5;
        this.currWeaponItem = this.toggles1[0].children[0].getComponent(WeaponItem);
        this.currWeaponItem.setSelect(true);
        this.updateWeaponInfoItem();
    }

    private updateItem(item: Node, bookId: number, isShowLock: boolean,isShowRedPoint:boolean=false) {
        let weaponItem: Node = null;
        if (item.children.length == 0) {
            weaponItem = instantiate(this.weaponItemPrefab);
            weaponItem.parent = item;
        } else {
            weaponItem = item.children[0];
        }
        let bookInfo = RareBookData.ins.getBookInfoByItemId(bookId);
        let com = weaponItem.getComponent(WeaponItem);
        com.initData(bookInfo, true, true, isShowLock, this.onTocchItem);
        com.setNotOpen();
        if(isShowRedPoint&&bookInfo.tujianRedPoint){
            com.redPointNode.active=true;
        }else{
            com.redPointNode.active=false;
        }
        return bookInfo.isLock;
    }
    onTocchItem = (weapon: WeaponItem) => {
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook);
        let atpTab = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(weapon.info.bookTable.Aptitude);
        if(!isOpen&&atpTab.HeroAptitude===tab.HeroAptitude.HeroAptitude_SR){
            this.currWeaponItem.setSelect(false);
            OpenFunctionMgr.ins.showFunctionTips(tab.OpenFunctionName.OpenFunctionName_RareBook)
            this.currWeaponItem = weapon;
        }else{
            if (this.currWeaponItem != weapon) {
                this.currWeaponItem.setSelect(false);
                weapon.setSelect(true);
                if(weapon.redPointNode){
                    weapon.redPointNode.active=false;
                    weapon.info.tujianRedPoint=false;
                }
                this.currWeaponItem = weapon;
                this.updateWeaponInfoItem();
            }
        }
    }
    updateWeaponInfoItem() {
        this.WeaponInfoItem.initData(this.currWeaponItem.info);
        this.WeaponInfoItem.setShowStar(this.currWeaponItem.info.bookTable.Aptitude == tab.HeroAptitude.HeroAptitude_SR);
    }

    onClickProToggle(event: EventTouch, tag) {
        tag = Number(tag);
        if (tag != this.currTag) {
            this.currTag = tag;
            this.initView();
            if (this.currNode) {
                this.currNode.getChildByName("redNode").active = true;
            }
            event.target.getChildByName("redNode").active = false;
            this.currNode = event.target;
        }

        // tab.HeroClass
    }
}
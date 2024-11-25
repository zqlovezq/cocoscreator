import { _decorator, Component, Label, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { WeaponInfoItem } from '../common/WeaponInfoItem';
import { RareBookData } from './RareBookData';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
const { ccclass, property } = _decorator;

@ccclass('RareBookGetPop')
export class RareBookGetPop extends ViewPop {
    @property(WeaponInfoItem)
    weaponItem:WeaponInfoItem = null;
    @property(Label)
    lbl_name:Label = null;
    @property(Label)
    lbl_aptitude:Label = null;
    private itemId: number = 0;
    private mClosedCallBack: Function = null;
    onShow(): void {
        this.itemId = this.openData.itemId;
        const itemTab = tab.getData().ItemTableById.getValue(this.itemId);
        const bookInfo = RareBookData.ins.getBookInfoByItemId(this.itemId);
        this.weaponItem.initData(bookInfo)
        // 品阶
        const bookAptitude = bookInfo.bookTable.Aptitude;
        const AptitudeStr = LangMgr.getLab("ui_weapon_"+bookAptitude);
        this.lbl_aptitude.string = AptitudeStr
        this.lbl_name.string = LangMgr.getLab(itemTab.Name);
    }
    register(): void {
        
    }
    unRegister(): void {
        super.unRegister();
    }
    setCloseCallBack(closeFunc: Function) {
        this.mClosedCallBack = closeFunc;
    }
    protected onDestroy(): void {
        super.onDestroy();
        EventMgr.emitLocal(LocalEvent.showNewOver);
        if (this.mClosedCallBack && typeof this.mClosedCallBack == 'function') {
            this.mClosedCallBack();
            this.mClosedCallBack = null;
        }
    }
}



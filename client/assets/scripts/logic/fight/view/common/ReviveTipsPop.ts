import { _decorator, Component, EventTouch, js, Label, Node, RichText, Toggle, UITransform } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { LangMgr } from '../../../mgr/LangMgr';
import { tab } from '../../../../Table/table_gen';
import { ItemData } from '../../../model/item/ItemData';
import { FightData } from '../../data/FightData';
const { ccclass, property } = _decorator;


/** 复活弹窗 */
@ccclass('ReviveTipsPop')
export class ReviveTipsPop extends ViewPop {

    @property(RichText)
    count_txt: RichText = null;

    onShow(): void {
        FightData.ins.pause = true
        this.count_txt.string = LangMgr.getCombineString("ui_revive_5", [ItemData.ins.getCount(tab.CurrencyType.CurrencyType_ReviveCurrency)])
    }
    register(): void {
        
    }
    onClose(): void {
        FightData.ins.pause = false
        super.onClose()
    }

    onAd() {
        this.openData.callback(1);
        this.close()
    }

    onClick() {
        this.openData.callback(2);
        this.onClose()
    }

}
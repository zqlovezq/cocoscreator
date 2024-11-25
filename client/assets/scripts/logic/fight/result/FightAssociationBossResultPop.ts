import { _decorator, Component, Label, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { FightRootControl } from '../FightRootControl';
import { AssociationData } from '../../model/association/AssociationData';
const { ccclass, property } = _decorator;

@ccclass('FightAssociationBossResultPop')
export class FightAssociationBossResultPop extends ViewPop {
    @property(Label)
    damageLab: Label = null;

    register(): void {

    }

    onShow(): void {
        this.damageLab.string = AssociationData.ins.GuildBossMsg.maxScore;
    }

    // 点击确定返回主页
    clickGoHomeBtn() {
        FightRootControl.ins.enterMain();
    }
    close() {
        if (this.openData && this.openData.cb) {
            this.openData.cb()
        }
        super.close()
    }
}



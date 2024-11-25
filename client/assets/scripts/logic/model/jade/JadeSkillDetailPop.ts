import { _decorator, Component, Label, labelAssembler, Node, Sprite } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('JadeSkillDetailPop')
export class JadeSkillDetailPop extends ViewPop {
    @property(Sprite)
    bgSpr: Sprite = null;
    @property(Sprite)
    skillIcon: Sprite = null;
    @property(Label)
    skillName: Label = null;
    @property(Label)
    skillDes: Label = null;
    @property(Label)
    typeLab:Label=null;

    private skillTable: tab.EquipSkillTable;
    private closeCallBack:Function;
    register(): void {

    }
    onShow(): void {
        if(this.openData&&this.openData["closeCallBack"]){
            this.closeCallBack=this.openData["closeCallBack"];
        }
        this.skillTable = this.openData["skillTable"];
        this.skillIcon.setTexture(this.skillTable.SkillIcon);
        this.skillName.string = LangMgr.getLab(this.skillTable.SkillName);
        this.skillDes.string=LangMgr.getLab(this.skillTable.SkillDesc);
        this.bgSpr.setTexture("textrue/quality/qualityBg_B_" + this.skillTable.Quality);
        this.typeLab.string=LangMgr.getLab(this.skillTable.Group);
    }
    protected onDestroy(): void {
        super.onDestroy();
        if(this.closeCallBack){
            this.closeCallBack();
            this.closeCallBack=null;
        }
    }
}



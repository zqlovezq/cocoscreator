import { _decorator, Component, Label, log, Node, Sprite } from 'cc';
import { HeroInfo } from '../hero/HeroInfo';
import { HeroStar } from '../hero/HeroStar';
import { HeroData } from '../hero/HeroData';
import { tab } from '../../../Table/table_gen';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
import { FincaFightData } from './FincaFightData';
import { FincaFightTeamState } from '../../../Common/script/EnumTypeMgr';
import { ShowTips } from '../../mgr/UIMgr';
import { LangMgr } from '../../mgr/LangMgr';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
const { ccclass, property } = _decorator;

@ccclass('FincaBagItem')
export class FincaBagItem extends Component {
    @property(Sprite)
    sp_hero: Sprite = null;//英雄头像
    @property(Sprite)
    sp_vocation: Sprite = null;//职业
    @property(Sprite)
    sp_quality: Sprite = null;//品质
    @property(Sprite)
    sp_quality_bg: Sprite = null;//品质框
    @property(Sprite)
    sp_quality_star_bg: Sprite = null;//装备星级职业底
    @property(Node)
    node_star: Node = null;
    @property(Label)
    lbl_level: Label = null;
    @property(Node)
    node_select: Node = null;
    @property(Node)
    node_select_1: Node = null;
    private touchCallBack: Function;
    private heroInfo: HeroInfo;
    UpdateContent(data: HeroInfo) {
        this.heroInfo = data;
        this.node.name = String(data.id);
        let itemTab = this.heroInfo.itemTable;
        let heroTab = this.heroInfo.heroTable;
        let heroClassTable = tab.getData().HeroClassTableByHeroClass.getValue(heroTab.Class);
        let heroAptitudeTab = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(heroTab.Aptitude);
        /* 获取品质 */
        let itemQualityTab = null;
        let level = this.heroInfo.getHeroLevel()
        let maxLevel = this.heroInfo.heroStarUpTable.MaxLevel;
        if (maxLevel < this.heroInfo.getHeroLevel()) {
            level = maxLevel;
        }
        this.lbl_level.string = String(level);
        let star = this.heroInfo.star;
        itemQualityTab = HeroDataControl.ins.getItemQualityTableByStar(star);
        this.sp_quality_bg.setTexture(itemQualityTab.HeroBagQuality);
        this.sp_quality_star_bg.setTexture(itemQualityTab.HeroStarBg)
        this.sp_vocation.setTexture(heroClassTable.Icon);
        this.sp_hero.setTexture(itemTab.Icon);
        this.sp_quality.setTexture(heroAptitudeTab.Icon);
        this.node_star.getComponent(HeroStar).showStar(data.star);

        const inTeam = FincaFightData.ins.getHeroInTeam(this.heroInfo.id);
        this.node_select.active = inTeam>-1;
        this.setSelectCircle(this.heroInfo.id === FincaFightData.ins.curSelectHero);
    }
    setSelectCircle(isShow:boolean){
        this.node_select_1.active = isShow
    }
    setTouchCallBack(callBack: Function) {
        this.touchCallBack = callBack;
    }
    private onTouchItem() {
        if (this.touchCallBack) {
            this.touchCallBack();
        } else {
            log("点击了item");
            this.changeSelect();
            FincaFightData.ins.curSelectHero = this.heroInfo.id;
            const index = FincaFightData.ins.HeroToggleIndex;
            const teamIndex = FincaFightData.ins.getHeroInTeam(this.heroInfo.id);
            // 点击的英雄是否在队伍中
            if (teamIndex>-1) {
                FincaFightData.ins.heroIds[teamIndex] = 0;
                EventMgr.emitLocal(LocalEvent.Finca_Team_Change,teamIndex+1);
            } else {
                // 判断不在队伍中的英雄是否可以替换
                const canReplace = FincaFightData.ins.checkReplaceHero(this.heroInfo.id);
                if(canReplace){
                    FincaFightData.ins.heroIds[index - 1] = this.heroInfo.id;
                    EventMgr.emitLocal(LocalEvent.Finca_Team_Change,index);
                }else{
                    ShowTips(LangMgr.getLab("Tips_finca_4"))
                }
            }
            console.log(FincaFightData.ins.heroIds);
        }
    }
    protected onDisable(): void {
        this.node_star.getComponent(HeroStar).onDisable();
    }
    protected onDestroy(): void {
        this.node.targetOff(this);
    }
    // 替换选择状态
    changeSelect(){
        const node = this.node.parent.getChildByName(String(FincaFightData.ins.curSelectHero));
        if(node&&node.isValid){
            const itemTs = node.getComponent(FincaBagItem);
            if(itemTs&&itemTs.isValid){
                itemTs.setSelectCircle(false);
            }
        }
        this.setSelectCircle(true);   
    }
}



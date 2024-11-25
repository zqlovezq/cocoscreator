import { _decorator, Component, instantiate, Node, Prefab, sp, Animation, Sprite, Label, AnimationComponent, animation, Vec3 } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { HeroInfo } from '../hero/HeroInfo';
import { tab } from '../../../Table/table_gen';
import { HeroSkillItem } from '../hero/herobag/HeroSkillItem';
import { createAnimation } from '../../utils/GameUtil';
import { LangMgr } from '../../mgr/LangMgr';
import { GuideController } from '../../guide/GuideController';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
const { ccclass, property } = _decorator;

@ccclass('NewHeroPop')
export class NewHeroPop extends ViewPop {
    @property(Prefab)
    pfb_skill_item: Prefab = null;
    @property(Node)
    node_skill_layout: Node = null;
    @property(sp.Skeleton)
    ske_hero: sp.Skeleton = null;
    @property(Sprite)
    sp_vocation: Sprite = null;//职业
    @property(Sprite)
    sp_quality: Sprite = null;//品质
    @property(Label)
    lbl_hero_name: Label = null;
    @property(Label)
    lbl_speciality: Label = null;
    // @property(Node)
    // node_new:Node = null
    // @property(Node)
    // node_rare:Node = null
    private itemId: number = 0;
    private _heroInfo: HeroInfo = null;
    private mClosedCallBack: Function = null;
    register(): void {

    }
    unRegister(): void {
        super.unRegister()
    }
    onShow(): void {
        this.itemId = this.openData.itemId;
        const heroTab = tab.getData().HeroTableById.getValue(this.itemId);
        let heroInfo = new HeroInfo();
        heroInfo.itemId = this.itemId;
        heroInfo.id = 0;
        heroInfo.star = heroTab.DefaultStar;
        this._heroInfo = heroInfo;
        this.showBaseInfo();
        this.showSkillItem();
    }
    setCloseCallBack(closeFunc: Function) {
        this.mClosedCallBack = closeFunc;
    }
    onClose(): void {
        if(GuideController.ins.isGuiding()){
            if(GuideController.ins.canHideHeroPop){
                super.onClose();
                EventMgr.emitLocal(LocalEvent.hideHeroPop);
            }
        }else{
            super.onClose();
        }
    }
    onDestroy() {
        super.onDestroy();
        EventMgr.emitLocal(LocalEvent.showNewOver);
        if (this.mClosedCallBack && typeof this.mClosedCallBack == 'function') {
            this.mClosedCallBack();
            this.mClosedCallBack = null;
        }
    }
    // 创建技能
    showSkillItem() {
        let heroTab = this._heroInfo.heroTable;
        this.node_skill_layout.destroyAllChildren();
        let skillMap = this._heroInfo.getHeroSkillMap();
        for (let i = 1; i <= 3; i++) {
            let iconUrl = heroTab["SkillIcon" + i];
            if (iconUrl) {
                let skillData: tab.HeroStarUpTable[] = skillMap.get(i);
                if (skillData) {
                    let skill_item = instantiate(this.pfb_skill_item);
                    let ts = skill_item.getComponent(HeroSkillItem);
                    ts.initData(i, this._heroInfo);
                    skill_item.parent = this.node_skill_layout;
                }
            }
        }
    }
    // 创建职业
    // 基本信息
    showBaseInfo() {
        const anim: Animation = this.getComponent(Animation);
        this.ske_hero.node.setPosition(new Vec3(-400, -180, 0))
        createAnimation(this.ske_hero.node, this._heroInfo.heroTable.Born);
        this.ske_hero.setCompleteListener((listener) => {
            if (listener.animation.name === "action_born") {
                this.ske_hero.addAnimation(0, "action_move", true)
                anim.play("NewHeroWalk");
                anim.on(AnimationComponent.EventType.FINISHED, this.walkFinish, this);
            }
        })
        let itemId = this.itemId;
        let itemTab = tab.getData().ItemTableById.getValue(itemId);
        let heroTab = tab.getData().HeroTableById.getValue(itemId);
        let heroClassTab = tab.getData().HeroClassTableByHeroClass.getValue(heroTab.Class)
        let heroAptitudeTab = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(heroTab.Aptitude);

        this.sp_vocation.setTexture(heroClassTab.Icon);
        this.sp_quality.setTexture(heroAptitudeTab.Icon);
        /* 英雄名称 */
        this.lbl_hero_name.string = LangMgr.getLab(itemTab.Name);
        /* 技能 */
        this.lbl_speciality.string = LangMgr.getLab(heroTab.Speciality);
    }
    walkFinish(type, state) {
        const anim: Animation = this.getComponent(Animation);
        console.log("播放完成-----");
        let heroTab = tab.getData().HeroTableById.getValue(this.itemId);
        if (state.name === "NewHeroNew" || state.name === "NewHeroRare") {
            anim.play("NewHeroIdle");
        } else if (state.name === "NewHeroWalk") {
            this.ske_hero.clearAnimation();
            this.ske_hero.setAnimation(0, "action_idle", true);
            if (heroTab.Aptitude === tab.HeroAptitude.HeroAptitude_SSR) {
                anim.play("NewHeroRare");
            } else if (heroTab.Aptitude === tab.HeroAptitude.HeroAptitude_SR) {
                anim.play("NewHeroNew");
            }
        }
        if (GuideController.ins.isGuiding()) {
            this.scheduleOnce(() => {
                EventMgr.emitLocal(LocalEvent.ShowPop);
            }, 3.2)
        }
    }
}



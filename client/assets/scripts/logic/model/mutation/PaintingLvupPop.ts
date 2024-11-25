import { _decorator, Button, Component, Label, log, Node, sp, Sprite } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { HeroTeamControl } from '../hero/HeroTeamControl';
import { Net } from '../../net/Net';
import { HeroStar } from '../hero/HeroStar';
import { LangMgr } from '../../mgr/LangMgr';
import { createAnimation } from '../../utils/GameUtil';
const { ccclass, property } = _decorator;

@ccclass('PaintingLvupPop')
export class PaintingLvupPop extends ViewPop {
    @property(Label)
    lbl_atk_cur: Label = null;
    @property(Label)
    lbl_hp_cur: Label = null;
    @property(Label)
    lbl_def_cur: Label = null;

    @property(Label)
    lbl_atk_next: Label = null;
    @property(Label)
    lbl_hp_next: Label = null;
    @property(Label)
    lbl_def_next: Label = null;

    @property(Label)
    lbl_atk_max: Label = null;
    @property(Label)
    lbl_hp_max: Label = null;
    @property(Label)
    lbl_def_max: Label = null;

    @property(Node)
    node_lv_up:Node = null;
    @property(Node)
    node_max:Node = null;

    @property(Button)
    btn_star_up: Button = null;

    @property(sp.Skeleton)
    ske_hero: sp.Skeleton = null;
    
    @property(Label)
    lbl_name = null;
    @property(Node)
    node_cur_star:Node = null;
    @property(Node)
    node_next_star:Node = null;
    @property(Node)
    node_max_star:Node = null;
    private _heroTab: tab.HeroTable = null;
    register(): void {
        EventMgr.onMsg(proto.Ptl.UpgradeScrollPaintingStarRsp, this.on_s2c_UpgradeScrollPaintingStarRsp, this);
    }
    on_s2c_UpgradeScrollPaintingStarRsp(msg: proto.Msg_UpgradeScrollPaintingStarRsp) {
        this.refreshView();
    }
    onShow(): void {
        const heroId = this.openData.heroId;
        this._heroTab = tab.getData().HeroTableById.getValue(heroId);
        let itemTab = tab.getData().ItemTableById.getValue(heroId);
        // this.sp_icon.setTexture(itemTab.Icon);
        this.lbl_name.string = LangMgr.getLab(itemTab.Name);
        this.refreshView();
        createAnimation(this.ske_hero.node,this._heroTab.Idle);
    }
    refreshView() {
        const aptitude = this._heroTab.Aptitude;
        const activeStar = HeroDataControl.ins.paintingActive.get(this._heroTab.Id);
        let star = activeStar ? activeStar : 0
        let nextStar = 5;
        let curData = null;
        let nextData = null;
        if (activeStar) {
            // 升级
            star = activeStar;
            nextStar = activeStar+1;
            curData = HeroTeamControl.ins.getPaintingAttr(aptitude, star).values
            const nextPainting = HeroTeamControl.ins.getPaintingAttr(aptitude, star + 1)
            if(nextPainting){
                nextData = nextPainting.values
            }
        } else {
            // 激活
            curData = [0, 0, 0]
            nextData = HeroTeamControl.ins.getPaintingAttr(aptitude, 5).values
        }
        this.lbl_atk_cur.string = String(curData[0]);
        this.lbl_hp_cur.string = String(curData[1]);
        this.lbl_def_cur.string = String(curData[2]);

        const maxStar = HeroDataControl.ins.getMaxPaintingStar(this._heroTab.Id);
        this.btn_star_up.interactable = maxStar && maxStar > star;
        this.btn_star_up.node.getComponent(Sprite).grayscale = !this.btn_star_up.interactable;
        this.node_cur_star.getComponent(HeroStar).showStar(star==0?5:star);

        if(nextData){
            this.node_max.active = false;
            this.node_lv_up.active = true;
            this.lbl_atk_next.string = String(nextData[0]);
            this.lbl_hp_next.string = String(nextData[1]);
            this.lbl_def_next.string = String(nextData[2]);
            this.node_next_star.getComponent(HeroStar).showStar(nextStar);
        }else{
            this.node_max.active = true;
            this.node_lv_up.active = false;
            this.lbl_atk_max.string = String(curData[0]);
            this.lbl_hp_max.string = String(curData[1]);
            this.lbl_def_max.string = String(curData[2]);
            this.node_max_star.getComponent(HeroStar).showStar(star==0?5:star);
        }
    }
    protected onDisable(): void {
        this.node_cur_star.getComponent(HeroStar).onDisable();
        this.node_next_star.getComponent(HeroStar).onDisable();
        this.node_max_star.getComponent(HeroStar).onDisable();
    }
    clickLevelUp() {
        let msg = new proto.Msg_UpgradeScrollPaintingStarReq();
        msg.heroItemId = this._heroTab.Id;
        Net.Send(proto.Ptl.UpgradeScrollPaintingStarReq, msg)
    }
}



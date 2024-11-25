import { _decorator, Component, Label, log, Node, sp, Sprite } from 'cc';
import { proto } from 'client_protocol';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
import { tab } from '../../../Table/table_gen';
import { HeroStar } from '../hero/HeroStar';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { LangMgr } from '../../mgr/LangMgr';
import { LoadResAsync } from '../../mgr/ResMgr';
import { createAnimation, setGraySpine } from '../../utils/GameUtil';
const { ccclass, property } = _decorator;
enum itemState {
    NOACTIVE = 1,
    ACTIVE = 2,
    ACTIVE_UP = 3
}
@ccclass('PaintingHeroItem')
export class PaintingHeroItem extends Component {
    @property(Node)
    node_star: Node = null;
    @property(Sprite)
    sp_vocation:Sprite = null;
    @property(sp.Skeleton)
    ske_hero: sp.Skeleton = null;
    @property(Label)
    lbl_name = null;
    @property(Node)
    node_star_up: Node = null;
    @property(Sprite)
    sp_name_bg: Sprite = null;
    private _heroId: number = 0;
    private _state: itemState = itemState.NOACTIVE;
    initData(itemId: number, isFirstActive?: boolean) {
        this._heroId = itemId;
        const heroTab = tab.getData().HeroTableById.getValue(this._heroId);
        const itemTab = tab.getData().ItemTableById.getValue(itemId);
        const activeStar = HeroDataControl.ins.paintingActive.get(this._heroId);
        let heroClassTable = tab.getData().HeroClassTableByHeroClass.getValue(heroTab.Class);
        this.sp_vocation.setTexture(heroClassTable.Icon);
        if (activeStar) {
            this.node_star.active = true;
            this.node_star.getComponent(HeroStar).showStar(activeStar);
        } else {
            this.node_star.active = false;
        }
        this.lbl_name.string = LangMgr.getLab(itemTab.Name);
        if (activeStar) {
            const maxStar = HeroDataControl.ins.getMaxPaintingStar(itemId);
            if (maxStar && maxStar <= activeStar) {
                // 当前不可提升等级
                this._state = itemState.ACTIVE;
            } else {
                this._state = itemState.ACTIVE_UP;
            }
            if (!isFirstActive) {
                createAnimation(this.ske_hero.node,heroTab.Idle);
                setGraySpine(this.ske_hero, false);
            }
        } else {
            // 未激活
            // this.sp_icon.grayscale = true;
            const maxStar = HeroDataControl.ins.getMaxPaintingStar(itemId);
            if (maxStar) {
                this._state = itemState.ACTIVE_UP;
            } else {
                this._state = itemState.NOACTIVE;
            }
            if (!isFirstActive) {
                createAnimation(this.ske_hero.node,heroTab.Idle, 0);
                setGraySpine(this.ske_hero, true);
            }
        }
        this.node_star_up.active = this._state === itemState.ACTIVE_UP;
        // 根据状态创建spine
        this.sp_name_bg.grayscale = this._state === itemState.NOACTIVE;
        if (isFirstActive) {
            createAnimation(this.ske_hero.node,heroTab.Born,heroTab.Idle);
            setGraySpine(this.ske_hero, false);
        }

    }
    // 点击升级绘卷星级
    clickPaintingUp() {
        UIMgr.ins.show({
            viewName: ViewName.PaintingLvupPop, data: {
                heroId: this._heroId
            }
        })
    }
    protected onDisable(): void {
        this.node_star.getComponent(HeroStar).onDisable();
    }
}



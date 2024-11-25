import { _decorator, Sprite } from 'cc';
import InfiniteCell from '../../../../Common/InfiniteList/InfiniteCell';
import { tab } from '../../../../Table/table_gen';
const { ccclass, property } = _decorator;

@ccclass('HeroBookLayoutQuality')
export class HeroBookLayoutQuality extends InfiniteCell {
    @property(Sprite)
    sp_quality:Sprite = null;
    UpdateContent(quality: tab.HeroAptitude) {
        let aptitudeTab = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(quality);
        this.sp_quality.setTexture(aptitudeTab.Icon);
    }
}



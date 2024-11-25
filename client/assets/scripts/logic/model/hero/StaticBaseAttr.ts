import { _decorator } from 'cc';
import { tab } from '../../../Table/table_gen';
import { HeroData } from './HeroData';
import { Long } from 'protobufjs';
const { ccclass, property } = _decorator;

/** 静态基础属性 */
@ccclass('StaticBaseAttr')
export class StaticBaseAttr {
    /** 获取英雄基础属性 */
    public static getAttrByHeroId(heroId: number|Long, outMap?: Map<tab.AttrType, number>): Map<tab.AttrType, number> {
        /* 基础属性 */
        outMap = outMap ? outMap : new Map();
        outMap.clear()
        let heroInfo = HeroData.ins.getById(heroId);
        let level = heroInfo.getHeroLevel();

        let heroStarUpTable = null;
        for (let i = 0; i < tab.getData().HeroStarUpTable.length; i++) {
            let starTab = tab.getData().HeroStarUpTable[i];
            if (starTab.HeroStar === heroInfo.star && heroInfo.itemId === starTab.HeroId) {
                heroStarUpTable = tab.getData().HeroStarUpTableById.getValue(starTab.Id);
            }
        }
        let _heroLevelUpAttrTable = tab.getData().HeroAttrTableById.getValue(heroStarUpTable.AttrPerLevel);

        // 先获得初始属性id
        for (let i = 0; i < heroInfo.heroAttrTable.HeroAttrType.length; i++) {
            let type = heroInfo.heroAttrTable.HeroAttrType[i];
            outMap.set(type, heroInfo.heroAttrTable.HeroAttrValue[i]);
        }
        // 获取升级属性
        for (let i = 0; i < _heroLevelUpAttrTable.HeroAttrType.length; i++) {
            let type = _heroLevelUpAttrTable.HeroAttrType[i];
            if (outMap.get(type)) {
                outMap.set(type, outMap.get(type) +_heroLevelUpAttrTable.HeroAttrValue[i] * (level - 1));
            } else {
                outMap.set(type, _heroLevelUpAttrTable.HeroAttrValue[i] * (level - 1));
            }
        }
        return outMap;
    }
}



import { _decorator } from "cc";
import { proto } from "client_protocol";
import { tab } from "../../../Table/table_gen";
import { HeroTeamControl } from "./HeroTeamControl";
import { ItemData } from "../item/ItemData";
import { HeroData } from "./HeroData";
import { StaticBaseAttr } from "./StaticBaseAttr";
import { Long } from "protobufjs";
export interface materialHeros {
    type: tab.HeroStarUpType,
    needCount: number,
    itemId?: number
}
export interface needMaterial {
    map: Map<number, number>,
    resonanceLimit: boolean,
    maxLevelLimit: boolean
}

const { ccclass, property } = _decorator;

/** 英雄数据 */
export class HeroInfo extends proto.Hero {
    private _AttrMap: Map<tab.AttrType, number> = new Map()
    private _extrarMap: Map<tab.AttrType, number> = new Map()
    private _stepsMap: Map<tab.AttrType, number> = new Map()//阶段属性
    private _MaterialItemMap: Map<number, number> = new Map()
    private _MaterialHeroMap: Map<number, number> = new Map()
    // private _MaterialStepMap: Map<tab.HeroStarUpType, number[]> = new Map();
    private _HeroSkillMap: Map<tab.HeroStarDescType, tab.HeroStarUpTable[]> = new Map()
    private _itemTable: tab.ItemTable;
    private _heroTable: tab.HeroTable;
    private _heroStarUpTable: tab.HeroStarUpTable;
    private _heroBaseAttrTable: tab.HeroAttrTable;
    private _heroClassTable: tab.HeroClassTable;
    private _heroAptitudeTable: tab.HeroAptitudeTable;
    private _herosMaterialMap: Map<number, materialHeros> = new Map();
    constructor() {
        super()
    }

    merge(hero: proto.Hero) {
        for (const key in hero) {
            this[key] = hero[key]
        }
        this._AttrMap = StaticBaseAttr.getAttrByHeroId(this.id, this._AttrMap);
    }
    /**
     * 创建默认数据
     * @param itemId 
     */
    createDefaultData(itemId: number, star?: number) {
        this.itemId = itemId;
        this.id = 0;
        this.star = star ? star : this.heroTable.DefaultStar;
        this.level = 0;
    }
    /* 获取英雄属性 */
    get AttrMap() {
        return this._AttrMap;
    }
    /* 刷新英雄基础属性 */
    refreshBaseAttrMap() {
        this._AttrMap = StaticBaseAttr.getAttrByHeroId(this.id, this._AttrMap);
    }
    /**
     * 道具数据
    */
    get itemTable() {
        if (!this._itemTable) {
            this._itemTable = tab.getData().ItemTableById.getValue(this.itemId);
        }
        return this._itemTable;
    }
    /**
     * 英雄数据
    */
    get heroTable() {
        if (!this._heroTable) {
            this._heroTable = tab.getData().HeroTableById.getValue(this.itemId);
        }
        return this._heroTable;
    }
    /**
     * 英雄升星数据
    */
    get heroStarUpTable() {
        if (!this._heroStarUpTable) {
            for (let i = 0; i < tab.getData().HeroStarUpTable.length; i++) {
                let starTab = tab.getData().HeroStarUpTable[i];
                if (starTab.HeroStar === this.star && this.itemId === starTab.HeroId) {
                    return tab.getData().HeroStarUpTableById.getValue(starTab.Id);
                }
            }
        }
        return this._heroStarUpTable;
    }
    /** 
     * 英雄基础数据  
    */
    get heroAttrTable() {
        if (!this._heroBaseAttrTable) {
            this._heroBaseAttrTable = tab.getData().HeroAttrTableById.getValue(this.heroTable.BaseHeroAttrId);
        }
        return this._heroBaseAttrTable;
    }
    /** 
     * 英雄职业数据 
    */
    get heroClassTable() {
        if (!this._heroClassTable) {
            this._heroClassTable = tab.getData().HeroClassTableByHeroClass.getValue(this.heroTable.Class);
        }
        return this._heroClassTable;
    }
    /** 
    * 英雄品质数据 
   */
    get heroAptitudeTable() {
        if (!this._heroAptitudeTable) {
            this._heroAptitudeTable = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(this.heroTable.Aptitude);
        }
        return this._heroAptitudeTable;
    }
    /**
     * 获取当前英雄的等级
    */
    getHeroLevel() {
        let level = 1;
        /* 英雄是否上阵 返回队伍等级 */
        let TeamSlot: proto.ITeamSlot = HeroTeamControl.ins.heroInTeam(this.id)
        if (TeamSlot) {
            level = TeamSlot.level;
        } else {
            /* 返回共鸣等级---队伍中最小的等级 */
            level = HeroTeamControl.ins.getMinTeamLevel();
        }
        return level;
    }
    /**
    * 获取当前英雄的基础属性
    */
    getAttrByType(type: tab.AttrType) {
        /* 遍历基础属性 */
        return this.AttrMap.get(type);
    }
    /*  */
    /**
    * 获取当前英雄的totoal属性
    */
    getAttrTotoalByType(type: tab.AttrType) {
        /* 遍历基础属性 */
        let baseAttr = Number(this.AttrMap.has(type) ? this.AttrMap.get(type) : 0);
        /* 装备属性 */
        // let equipAttrMap = EquipData.ins.getEquipContainerDataByHeroClass(type).totalAttrMap;
        // baseAttr += equipAttrMap.has(type) ? equipAttrMap.get(type) : 0
        let extraSelfAttr = this.getExtraAttrMap();
        let extraAllAttr = HeroTeamControl.ins.getExtraAttr();
        if (HeroTeamControl.ins.heroInTeam(this.id)) {
            /* 等级共鸣属性 */
            let resonanceLevel = HeroTeamControl.ins.getResonanceAttrByType(type, true);
            /* 星级共鸣属性 */
            let resonanceStar = HeroTeamControl.ins.getResonanceAttrByType(type, false);
            baseAttr += resonanceLevel ? resonanceLevel : 0;
            baseAttr += resonanceStar ? resonanceStar : 0;

            baseAttr += extraAllAttr.has(type) ? extraAllAttr.get(type) : 0
            baseAttr += extraSelfAttr.has(type) ? extraSelfAttr.get(type) : 0

            if (type == tab.AttrType.AttrType_Attack) {
                // 攻击百分比
                let selfPer1 = extraSelfAttr.has(tab.AttrType.AttrType_DamagePer1) ? extraSelfAttr.get(tab.AttrType.AttrType_DamagePer1) : 0;
                let selfPer2 = extraSelfAttr.has(tab.AttrType.AttrType_DamagePer2) ? extraSelfAttr.get(tab.AttrType.AttrType_DamagePer2) : 0;
                let selfPer3 = extraSelfAttr.has(tab.AttrType.AttrType_DamagePer3) ? extraSelfAttr.get(tab.AttrType.AttrType_DamagePer3) : 0;

                let allPer1 = extraAllAttr.has(tab.AttrType.AttrType_DamagePer1) ? extraAllAttr.get(tab.AttrType.AttrType_DamagePer1) : 0;
                let allfPer2 = extraAllAttr.has(tab.AttrType.AttrType_DamagePer2) ? extraAllAttr.get(tab.AttrType.AttrType_DamagePer2) : 0;
                let allfPer3 = extraAllAttr.has(tab.AttrType.AttrType_DamagePer3) ? extraAllAttr.get(tab.AttrType.AttrType_DamagePer3) : 0;
                let per = selfPer1 + selfPer2 + selfPer3 + allPer1 + allfPer2 + allfPer3;
                baseAttr = baseAttr = Math.floor((1 + per / 10000) * baseAttr);
            } else if (type == tab.AttrType.AttrType_Hp) {
                // 生命百分比
                let selfPer1 = extraSelfAttr.has(tab.AttrType.AttrType_HpPer) ? extraSelfAttr.get(tab.AttrType.AttrType_HpPer) : 0;
                let allPer1 = extraAllAttr.has(tab.AttrType.AttrType_HpPer) ? extraAllAttr.get(tab.AttrType.AttrType_HpPer) : 0;
                let per = selfPer1 + allPer1;
                baseAttr = baseAttr = Math.floor((1 + per / 10000) * baseAttr);
            } else if (type == tab.AttrType.AttrType_Defence) {
                // 生命百分比
                // 攻击百分比
                let selfPer1 = extraSelfAttr.has(tab.AttrType.AttrType_DefencePer1) ? extraSelfAttr.get(tab.AttrType.AttrType_DefencePer1) : 0;
                let selfPer2 = extraSelfAttr.has(tab.AttrType.AttrType_DefencePer2) ? extraSelfAttr.get(tab.AttrType.AttrType_DefencePer2) : 0;
                let selfPer3 = extraSelfAttr.has(tab.AttrType.AttrType_DefencePer3) ? extraSelfAttr.get(tab.AttrType.AttrType_DefencePer3) : 0;

                let allPer1 = extraAllAttr.has(tab.AttrType.AttrType_DefencePer1) ? extraAllAttr.get(tab.AttrType.AttrType_DefencePer1) : 0;
                let allfPer2 = extraAllAttr.has(tab.AttrType.AttrType_DefencePer2) ? extraAllAttr.get(tab.AttrType.AttrType_DamagePer2) : 0;
                let allfPer3 = extraAllAttr.has(tab.AttrType.AttrType_DefencePer3) ? extraAllAttr.get(tab.AttrType.AttrType_DefencePer3) : 0;
                let per = selfPer1 + selfPer2 + selfPer3 + allPer1 + allfPer2 + allfPer3;
                baseAttr = Math.floor((1 + per / 10000) * baseAttr);
            } else {
                baseAttr += extraAllAttr.has(type) ? extraAllAttr.get(type) : 0
                baseAttr += extraSelfAttr.has(type) ? extraSelfAttr.get(type) : 0
            }
        } else {
            return baseAttr;
        }
        return baseAttr;
    }
    getExtraAttrMap() {
        this._extrarMap.clear();
        let _heroStarUpTable = this.heroStarUpTable;
        if (_heroStarUpTable.ExtraAttrTarget.length > 0) {
            for (let i = 0; i < _heroStarUpTable.ExtraAttrTarget.length; i++) {
                let type = _heroStarUpTable.ExtraAttrTarget[i];
                let value = _heroStarUpTable.ExtraAttrList[i];
                let _attrTab = tab.getData().HeroAttrTableById.getValue(value);
                if (type === tab.ExtraAttrTarget.ExtraAttrTarget_Mine) {
                    for (let k = 0; k < _attrTab.HeroAttrType.length; k++) {
                        let _type = _attrTab.HeroAttrType[k];
                        let _value = _attrTab.HeroAttrValue[k];
                        if (_type) {
                            if (this._extrarMap.has(_type)) {
                                let mapValue = this._extrarMap.get(_type)
                                if (mapValue) {
                                    this._extrarMap.set(_type, mapValue + _value);
                                }
                            } else {
                                this._extrarMap.set(_type, _value);
                            }
                        }
                    }
                }
            }
        }
        return this._extrarMap;
    }
    /* 当前英雄传入任意level 获取到达需要的材料 */
    getMaterialByLevel(starLevel: number, endLevel: number): needMaterial {
        this._MaterialItemMap.clear();
        if (endLevel === 1) {
            return { map: this._MaterialItemMap, resonanceLimit: false, maxLevelLimit: false };
        }
        let maxLevel = this.heroStarUpTable.MaxLevel;
        let minLevel = HeroTeamControl.ins.getMinTeamLevel();
        let _resonanceLimit = false;
        let _maxLevelLimit = false;
        for (let i = starLevel; i < endLevel; i++) {
            /* 需要的资源 */
            let levelUpData: tab.HeroLevelUpTable = tab.getData().HeroLevelUpTableByLevel.getValue(i);
            if (minLevel < levelUpData.MinTeamLevel) {
                /* 升级表里 有最小队伍等级限制时 不达标 返回材料 */
                _resonanceLimit = true;
                break;
            }
            if (i >= maxLevel) {
                /* 升级表里 有最大等级限制 */
                _maxLevelLimit = true;
                break;
            }
            /* 消耗材料组 */
            for (let k = 0; k < levelUpData.MaterialIds.length; k++) {
                let MaterialId = levelUpData.MaterialIds[k];
                let MaterialCount = levelUpData.MaterialNum[k];
                if (this._MaterialItemMap.get(MaterialId)) {
                    this._MaterialItemMap.set(MaterialId, this._MaterialItemMap.get(MaterialId) + MaterialCount)
                } else {
                    this._MaterialItemMap.set(MaterialId, MaterialCount);
                }
            }
        }
        return { map: this._MaterialItemMap, resonanceLimit: _resonanceLimit, maxLevelLimit: _maxLevelLimit };
    }
    /* 当前英雄传入任意星级获取需要的材料 */
    getMaterialByStar(): Map<number, number> {
        let star = this.star;
        this._MaterialHeroMap.clear();
        let defaultTab: tab.HeroStarUpTable;
        for (let i = 0; i < tab.getData().HeroStarUpTable.length; i++) {
            let _starTab = tab.getData().HeroStarUpTable[i];
            if (_starTab.HeroStar === this.heroTable.DefaultStar && this.itemId === _starTab.HeroId) {
                defaultTab = _starTab;
                break;
            }
        }
        let id = defaultTab.Id
        for (let j = defaultTab.HeroStar; j < star; j++) {
            let starTab = tab.getData().HeroStarUpTableById.getValue(id + (j - defaultTab.HeroStar));
            this.setDataInMaterialHeroMap(starTab, defaultTab);
        }
        if (this.finshedStarSteps.length > 0) {
            for (let k = 0; k < this.finshedStarSteps.length; k++) {
                let stepId = this.finshedStarSteps[k];
                let starTab = tab.getData().HeroStarStepTableById.getValue(stepId);
                this.setDataInMaterialHeroMap(starTab, defaultTab);
            }
        }
        return this._MaterialHeroMap;
    }
    /* 将重置数据放入map中 */
    setDataInMaterialHeroMap(starTab: tab.HeroStarUpTable | tab.HeroStarStepTable, defaultTab: tab.HeroStarUpTable) {
        for (let i = 0; i < starTab.HeroStarUpType.length; i++) {
            let type: tab.HeroStarUpType = starTab.HeroStarUpType[i];
            let star: number = starTab.CostHeroStar[i];
            let costCount: number = starTab.CostHeroNum[i];
            // 同名
            let keyId = 0;
            if (type === tab.HeroStarUpType.HeroStarUpType_SameNameHero) {
                /* 根据itemId+star生成starUpId */
                keyId = (star - defaultTab.HeroStar) + defaultTab.Id
            } else if (type == tab.HeroStarUpType.HeroStarUpType_SameClassHero) {
                keyId = this.getHeroCommonCost(star, this.heroTable.Class);
            } else {
                keyId = this.getHeroCommonCost(star, tab.HeroClass.HeroClass_Any);
            }
            if (this._MaterialHeroMap.has(keyId)) {
                this._MaterialHeroMap.set(keyId, this._MaterialHeroMap.get(keyId) + costCount)
            } else {
                this._MaterialHeroMap.set(keyId, costCount)
            }
        }
    }
    getHeroCommonCost(star: number, heroClass: tab.HeroClass) {
        for (let i = 0; i < tab.getData().HeroCommonCostTable.length; i++) {
            let costData = tab.getData().HeroCommonCostTable[i];
            if (costData.HeroStar === star && costData.HeroClass == heroClass) {
                return costData.Id;
            }
        }
    }
    getHerosCommonCost(star: number, heroClass: tab.HeroClass, type: tab.HeroStarUpType) {
        let arr = [];
        if (type === tab.HeroStarUpType.HeroStarUpType_SameClassHero) {
            for (let i = 0; i < tab.getData().HeroCommonCostTable.length; i++) {
                let costData = tab.getData().HeroCommonCostTable[i];
                if (costData.HeroStar === star && (costData.HeroClass == heroClass || costData.HeroClass === tab.HeroClass.HeroClass_Any)) {
                    arr.push(costData.Id);
                }
            }
        } else if (type === tab.HeroStarUpType.HeroStarUpType_AnyHero) {
            for (let i = 0; i < tab.getData().HeroCommonCostTable.length; i++) {
                let costData = tab.getData().HeroCommonCostTable[i];
                if (costData.HeroStar === star) {
                    arr.push(costData.Id);
                }
            }
        }
        return arr;
    }
    /* 检查heroId连升N级 */
    checkLevelUp1(): number {
        /* 升级需要经验+金币 */
        /* 先获取当前hero等级 */
        let level = this.getHeroLevel();
        let minLevel = HeroTeamControl.ins.getMinTeamLevel();
        let startLevel = level;
        /* 检查所有的条件 */
        // let MaterialMap: Map<number, number> = new Map();
        // let minLevel = HeroTeamControl.ins.getMinTeamLevel();
        /* 获取当前heroid最高等级 */
        let maxLevel = this.heroStarUpTable.MaxLevel;
        let MaterialNoEnough = false;
        for (let i = level; i < maxLevel; i++) {
            let materialMap = this.getMaterialByLevel(startLevel, i + 1).map;

            let levelUpData: tab.HeroLevelUpTable = tab.getData().HeroLevelUpTableByLevel.getValue(i);
            if (minLevel < levelUpData.MinTeamLevel) {
                /* 升级表里 有最小队伍等级限制时 不达标 返回材料 */
                level = i;
                break;
            }

            if (materialMap.get(1002)) {
                level = i;
                break
            }
            materialMap.forEach((value, key) => {
                let totalMaterialCount = ItemData.ins.getCount(key);
                if (totalMaterialCount < value) {
                    MaterialNoEnough = true;
                }
            })
            if (MaterialNoEnough) {
                level = i;
                break
            } else {
                level = i + 1;
            }
        }
        return level;
    }
    checkLevelUp(): number {
        // step1 英雄等级是否相同
        let minTeamLevel = HeroTeamControl.ins.getMinTeamLevel();
        let maxTeamLevel = HeroTeamControl.ins.getMaxTeamLevel();
        let startLevel = -1;
        let endLevel = -1;
        let level = this.getHeroLevel();
        let levelUpData: tab.HeroLevelUpTable = tab.getData().HeroLevelUpTableByLevel.getValue(maxTeamLevel);
        if (minTeamLevel === maxTeamLevel) {
            startLevel = minTeamLevel;
            endLevel = (Math.floor(startLevel / 10) + 1) * 10;
            return this.checkLevelEnd(startLevel, endLevel);
        } else {
            //要升级英雄等级是否达到队友最低等级需求
            if (level < levelUpData.MinTeamLevel) {
                // 否 升级至【队友最低等级】
                startLevel = level;
                endLevel = levelUpData.MinTeamLevel;
                return this.checkLevelEnd(startLevel, endLevel);
            } else {
                // 是
                // 要升级英雄等级是否为最高等级
                if (level === maxTeamLevel) {
                    // 是 英雄升至10的整数倍数
                    startLevel = level;
                    endLevel = (Math.floor(startLevel / 10) + 1) * 10;
                    return this.checkLevelEnd(startLevel, endLevel);
                } else {
                    // 否 英雄升级至5的整数倍数
                    startLevel = level;
                    endLevel = (Math.floor(startLevel / 5) + 1) * 5;
                    return this.checkLevelEnd(startLevel, endLevel);
                }
            }
        }
    }
    checkLevelEnd(startLevel: number, endLevel: number): number {
        let MaterialNoEnough = false;
        // 队友最低等级约束
        const teammateLevel = HeroTeamControl.ins.getMinTeamLevel(this);
        const minLevelMax = this.getMaxLevelByTeammate(teammateLevel);
        if (minLevelMax < endLevel) {
            endLevel = minLevelMax;
        }
        // 星级约束
        const starLevelMax = this.heroStarUpTable.MaxLevel;
        if (starLevelMax < endLevel) {
            endLevel = starLevelMax;
        }

        // 材料约束
        for (let i = startLevel; i < endLevel; i++) {
            let materialMap = this.getMaterialByLevel(startLevel, i + 1).map;
            materialMap.forEach((value, key) => {
                let totalMaterialCount = ItemData.ins.getCount(key);
                if (totalMaterialCount < value) {
                    MaterialNoEnough = true;
                }
            })
            if (MaterialNoEnough) {
                return i;
            }
        }
        return endLevel;
    }
    /* 通过队友的最低等级获取当前可以升级的最大值 */
    getMaxLevelByTeammate(level: number) {
        for (let i = level; i < tab.getData().HeroLevelUpTable.length; i++) {
            const upTab = tab.getData().HeroLevelUpTable[i];
            const minLevel = upTab.MinTeamLevel;
            if (minLevel > level) {
                return upTab.Level;
            }
        }
    }
    /* 当前阶段完成的step数量 */
    getFinishStep(): number {
        let count = 0;
        let starTab = this.heroStarUpTable;
        let steps = starTab.NeedStarSteps;
        // 所有玩家完成的阶段ids数组this.finshedStarSteps
        for (let i = 0; i < steps.length; i++) {
            let id = steps[i];
            if (this.finshedStarSteps.indexOf(id) > -1) {
                count++;
            }
        }
        return count;
    }
    /* 检查hero升星材料是否够 HeroStarUpType*/
    checkStarUpMaterialEnough(stepId?: number) {
        /* 升星消耗的都是英雄 */
        // 先获取当前的StarUpTable
        let starTab = stepId ? tab.getData().HeroStarStepTableById.getValue(stepId) : this.heroStarUpTable;
        let MaterialEnough = true;

        if (starTab.HeroStarUpType.length === 0 && this.heroStarUpTable.NeedStarSteps.length === 0) {
            return false;
        }

        let filterMap = new Map();
        let totalCount = 0;
        for (let i = 0; i < starTab.HeroStarUpType.length; i++) {
            let costType: tab.HeroStarUpType = starTab.HeroStarUpType[i];
            let costCount: number = starTab.CostHeroNum[i];
            totalCount += costCount;
            let heros = this.getHerosByType(costType, stepId, filterMap);
            if (heros.map.size < costCount) {
                MaterialEnough = false;
                break;
            } else {
                let count = 0;
                heros.map.forEach((value, key) => {
                    count++;
                    if (count <= costCount) {
                        filterMap.set(key, value);
                    }
                })
            }
        }
        /* 如果当前是进阶阶段 */
        if (this.heroStarUpTable.NeedStarSteps.length > 0 && this.getFinishStep() < 4) {
            // 判断进阶的每个部分是否材料够 够的话返回
            if (!stepId) {
                for (let i = 0; i < this.heroStarUpTable.NeedStarSteps.length; i++) {
                    let stepId = this.heroStarUpTable.NeedStarSteps[i];
                    const _stepIdMaterialEnough = this.checkIsFullByStepId(stepId, totalCount, MaterialEnough, filterMap)
                    MaterialEnough = MaterialEnough && _stepIdMaterialEnough;
                }
            } else {
                MaterialEnough = this.checkIsFullByStepId(stepId, totalCount, MaterialEnough, filterMap)
            }
        } else {
            /* 升星需要材料 */
            if (starTab.CostItemId.length > 0) {
                for (let i = 0; i < starTab.CostItemId.length; i++) {
                    let itemId = starTab.CostItemId[i];
                    let itemCount = starTab.CostItemNum[i];
                    let totalCount = ItemData.ins.getCount(itemId);
                    if (totalCount < itemCount) {
                        MaterialEnough = false;
                        break;
                    }
                }
            }
        }
        return MaterialEnough;
    }
    /* 通过stepId返回材料是否满足 */
    checkIsFullByStepId(stepId: number, totalCount, MaterialEnough, filterMap) {
        if (this.finshedStarSteps.indexOf(stepId) > -1) {
            return true
        }
        let starTab = tab.getData().HeroStarStepTableById.getValue(stepId);
        // 当前阶段消耗类型
        for (let i = 0; i < starTab.HeroStarUpType.length; i++) {
            let costType: tab.HeroStarUpType = starTab.HeroStarUpType[i];
            let costCount: number = starTab.CostHeroNum[i];
            totalCount += costCount;
            let stepHeros = this.getHerosByType(costType, stepId);
            if (stepHeros.map.size < costCount) {
                return false
            }
            else {
                let count = 0;
                stepHeros.map.forEach((value, key) => {
                    count++;
                    if (count <= costCount) {
                        filterMap.set(key, value);
                    }
                })
            }
        }
        // 阶段消耗道具
        let itemEnough = true;
        for(let i=0;i<starTab.CostItemId.length;i++){
            const haveCount = ItemData.ins.getCount(starTab.CostItemId[i]);
            const needCount = starTab.CostItemNum[i];
            if(haveCount<needCount){
                itemEnough = false;
            }
        }
        return MaterialEnough&&itemEnough;
    }
    getHerosByType(type: tab.HeroStarUpType, stepId?: number, filterMap?: Map<number, any>) {
        let map = new Map<number, any>()
        let starTab = stepId ? tab.getData().HeroStarStepTableById.getValue(stepId) : this.heroStarUpTable;
        let needCount = 0;
        let needStar = 0;
        for (let i = 0; i < starTab.HeroStarUpType.length; i++) {
            let _type: tab.HeroStarUpType = starTab.HeroStarUpType[i];
            let _count: number = starTab.CostHeroNum[i];
            let _star: number = starTab.CostHeroStar[i];
            // 同名
            if (type === _type) {
                needCount = _count;
                needStar = _star;
                break;
            }
        }
        let heros = HeroData.ins.getHeros();
        const id = Number(this.id);
        for (let i = 0; i < heros.length; i++) {
            let info: HeroInfo = heros[i];
            // 是否是升级id
            const infoId = Number(info.id);
            let isSelf = infoId === id;
            // 是否在队伍中
            let isTeam = HeroTeamControl.ins.heroInTeam(infoId);
            let isStar = info.star === needStar
            if (isStar && !isSelf && !isTeam) {
                // 同名
                if (filterMap && filterMap.get(infoId) && filterMap.get(infoId).type !== type) {
                    continue;
                }
                if (type === tab.HeroStarUpType.HeroStarUpType_SameNameHero) {
                    if (info.itemId == this.itemId) {
                        map.set(infoId, info);
                    }
                } else if (type === tab.HeroStarUpType.HeroStarUpType_SameClassHero) {
                    if (info.heroTable.Class == this.heroTable.Class) {
                        map.set(infoId, info);
                    }
                } else {
                    map.set(infoId, info);
                }
            }
        }
        if (type !== tab.HeroStarUpType.HeroStarUpType_SameNameHero) {
            let heroClass = type === tab.HeroStarUpType.HeroStarUpType_AnyHero ? tab.HeroClass.HeroClass_Any : this.heroTable.Class
            let TamagonIds = this.getHerosCommonCost(needStar, heroClass, type);
            if (TamagonIds) {
                for (let i = 0; i < TamagonIds.length; i++) {
                    let TamagonId = TamagonIds[i];
                    const itemCount = ItemData.ins.getCount(TamagonId);
                    for (let t = 0; t < itemCount; t++) {
                        let value = t + 1;
                        map.set(TamagonId + value, value);
                    }
                }
            }
        }
        return { map: map, needCount: needCount, star: needStar };
    }
    /* 获取当前hero的所有技能map */
    getHeroSkillMap(): Map<tab.HeroStarDescType, tab.HeroStarUpTable[]> {
        if (this._HeroSkillMap.size > 0) {
            return this._HeroSkillMap;
        }
        for (let i = 0; i < tab.getData().HeroStarUpTable.length; i++) {
            let starTab = tab.getData().HeroStarUpTable[i];
            if (this.itemId === starTab.HeroId) {
                for (let j = 0; j < starTab.DescType.length; j++) {
                    const DescType = starTab.DescType[j];
                    let data = this._HeroSkillMap.get(DescType) ? this._HeroSkillMap.get(DescType) : [];
                    data.push(starTab);
                    this._HeroSkillMap.set(DescType, data);
                }

            }
        }
        return this._HeroSkillMap;
    }
    /* 传入任意星级获取当前的HeroStarUpTable信息 */
    getHeroStarUpTableByStar(star: number): tab.HeroStarUpTable {
        for (let i = 0; i < tab.getData().HeroStarUpTable.length; i++) {
            let starTab = tab.getData().HeroStarUpTable[i];
            if (this.itemId === starTab.HeroId && star === starTab.HeroStar) {
                return starTab;
            }
        }
        return this.heroStarUpTable;
    }
    setHerosMaterialMap(stepId?: number): Map<number, materialHeros> {
        this._herosMaterialMap.clear();
        let sameName = this.getHerosByType(tab.HeroStarUpType.HeroStarUpType_SameNameHero, stepId);
        let count = 0;
        sameName.map.forEach((value, key) => {
            count++;
            if (count <= sameName.needCount) {
                this._herosMaterialMap.set(key, {
                    needCount: sameName.needCount,
                    type: tab.HeroStarUpType.HeroStarUpType_SameNameHero,
                })
            }
        })
        return this._herosMaterialMap
    }
    /* 选择材料的数量 */
    getHerosMaterialMapCount(type: tab.HeroStarUpType): number {
        let count = 0;
        this._herosMaterialMap.forEach((value, key) => {
            if (value.type === type) {
                count++;
            }
        })
        return count;
    }
    /* 添加|删除选择的材料 */
    setHerosMaterialById(isSelect: boolean, heroId: number, type: tab.HeroStarUpType, itemId?: number) {
        if (this._herosMaterialMap.get(heroId) && this._herosMaterialMap.get(heroId).type !== type) {
            return;
        }
        const sameClass = this.getHerosByType(type);

        if (isSelect) {
            let obj: materialHeros = {
                needCount: sameClass.needCount,
                type: type,
            }
            if (itemId) {
                obj.itemId = itemId;
            }
            this._herosMaterialMap.set(heroId, obj);
        } else {
            this._herosMaterialMap.delete(heroId);
        }
    }
    getHerosMaterialById(heroId: number) {
        let obj = null;
        if (this._herosMaterialMap.get(heroId)) {
            obj = this._herosMaterialMap.get(heroId)
        }
        return obj
    }
    getHerosMaterialMap() {
        return this._herosMaterialMap;
    }
    /* 通过材料类型获取需要的数据 */
    getStepMaterialData(stepTab: tab.HeroStarStepTable, type: tab.HeroStarUpType) {
        const useType = stepTab.HeroStarUpType;
        for (let i = 0; i < useType.length; i++) {
            const _type = useType[i];
            const _num = stepTab.CostHeroNum[i];
            const _star = stepTab.CostHeroStar[i];
            if (_type === type) {
                return {
                    num: _num,
                    star: _star
                }
            }
        }
    }
    initHeroItemId(heroId: number) {
        this.id = 0;
        this.itemId = heroId;;
        this.star = this.heroTable.DefaultStar;
    }
}
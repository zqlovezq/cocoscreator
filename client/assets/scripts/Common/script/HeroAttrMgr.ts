// 此脚本由后端维护，遇到错误或需要变更需要同时修正后端代码
import { Long } from 'protobufjs';
import { tab } from "../../Table/table_gen";
import { proto } from "client_protocol";
import { FightMacro } from '../../logic/fight/define/FightDefine';
import { RoleData } from '../../logic/model/role/RoleData';
import { HeroData } from "../../logic/model/hero/HeroData";
import { HeroInfo } from "../../logic/model/hero/HeroInfo";
import { HeroTeamControl } from "../../logic/model/hero/HeroTeamControl";
import { RareBookData } from '../../logic/model/rareBook/RareBookData';
import { RareBookInfo } from '../../logic/model/rareBook/RareBookInfo';
import { EquipData } from '../../logic/model/equip/EquipData';
import { EquipInfo } from '../../logic/model/equip/EquipInfo';
import { EquipContainerInfo } from '../../logic/model/equip/EquipContainerInfo';
import { PrestigeData } from '../../logic/model/prestige/PrestigeData';
import { AssociationData } from '../../logic/model/association/AssociationData';

export class HeroAttr {
    powerScore: number = 0;                         // 英雄战力
    attr: Map<tab.AttrType, number> = new Map();    // 英雄数据集

    // 初始化数据
    init(heroId: number | Long) {
        // 获得要计算的英雄数据集
        let heroInfo = HeroData.ins.getById(heroId);
        if (heroInfo == null) { return; }
        // 获得英雄属性及技能
        let heroSkills: number[] = []
        HeroAttrMgr.getHeroAttrAndSkills(this, heroInfo, heroSkills);
        // 计算英雄战力
        HeroAttrMgr.getHeroPowerScore(this, heroInfo, heroSkills);
        console.log(this)
    }

    // 增加属性
    addAttr(type: tab.AttrType, value: number) {
        if (type == tab.AttrType.AttrType_EquipSkill) { return; }
        let oldVal = this.attr.get(type) ?? 0;
        this.attr.set(type, oldVal + value);
    }

    // 获得属性
    getAttr(type: tab.AttrType): number {
        return this.attr.get(type) ?? 0
    }
}

export class HeroAttrMgr {
    // 获得英雄战力及属性集
    public static getHeroInfoAttr(heroId: number | Long): HeroAttr {
        let heroAttr = new HeroAttr;
        heroAttr.init(heroId);
        return heroAttr;
    }

    // 计算英雄整体攻击力
    // [backend]rps.getHeroTotalAttack
    public static getHeroTotalAttack(heroAttr: HeroAttr): number {
        let atk = heroAttr.getAttr(tab.AttrType.AttrType_Attack);
        let per1 = heroAttr.getAttr(tab.AttrType.AttrType_DamagePer1);
        let per2 = heroAttr.getAttr(tab.AttrType.AttrType_DamagePer2);
        let per3 = heroAttr.getAttr(tab.AttrType.AttrType_DamagePer3);
        atk = Math.floor(atk * (FightMacro.MAX_CHANCE + per1) / FightMacro.MAX_CHANCE)
        atk = Math.floor(atk * (FightMacro.MAX_CHANCE + per2) / FightMacro.MAX_CHANCE)
        atk = Math.floor(atk * (FightMacro.MAX_CHANCE + per3) / FightMacro.MAX_CHANCE)
        return atk
    }

    // 计算英雄整体防御力
    // [backend]rps.getHeroTotalDefence
    public static getHeroTotalDefence(heroAttr: HeroAttr): number {
        let def = heroAttr.getAttr(tab.AttrType.AttrType_Defence);
        let per1 = heroAttr.getAttr(tab.AttrType.AttrType_DefencePer1);
        let per2 = heroAttr.getAttr(tab.AttrType.AttrType_DefencePer2);
        let per3 = heroAttr.getAttr(tab.AttrType.AttrType_DefencePer3);
        def = Math.floor(def * (FightMacro.MAX_CHANCE + per1) / FightMacro.MAX_CHANCE)
        def = Math.floor(def * (FightMacro.MAX_CHANCE + per2) / FightMacro.MAX_CHANCE)
        def = Math.floor(def * (FightMacro.MAX_CHANCE + per3) / FightMacro.MAX_CHANCE)
        return def
    }

    // 计算英雄整体血量
    // [backend]rps.getHeroTotalHp
    public static getHeroTotalHp(heroAttr: HeroAttr): number {
        let hp = heroAttr.getAttr(tab.AttrType.AttrType_Hp);
        let per = heroAttr.getAttr(tab.AttrType.AttrType_HpPer);
        return Math.floor(hp * (FightMacro.MAX_CHANCE + per) / FightMacro.MAX_CHANCE)
    }

    /****************************************************************/
    // 获得英雄属
    // [backend]Hero.GetHeroAttrs
    private static getHeroAttrs(heroAttr: HeroAttr, heroInfo: HeroInfo) {
        // 获得上阵数据
        let teamSlot: proto.ITeamSlot[] = HeroTeamControl.ins.getTeam();
        // 获得英雄等级
        let heroLevel = 1;
        let slot = teamSlot.find(a => a.heroClass == heroInfo.heroTable.Class);
        if (slot && slot.heroId == heroInfo.id) {
            heroLevel = slot.level
        } else {
            heroLevel = HeroTeamControl.ins.getMinTeamLevel()
        }

        // 检查等级限制
        if (heroLevel > heroInfo.getHeroStarUpTableByStar(heroInfo.star).MaxLevel) {
            heroLevel = heroInfo.getHeroStarUpTableByStar(heroInfo.star).MaxLevel;
        }

        // 获得基础属性
        HeroAttrMgr.getHeroBaseAttr(heroAttr, heroInfo, heroLevel - 1);

        // 获得额外全体属性加成
        for (let i = 0; i < teamSlot.length; ++i) {
            let slot = teamSlot[i];
            if (slot == null) { continue; }
            let heroInfo = HeroData.ins.getById(slot.heroId);
            if (heroInfo == null) { continue; }
            // 获得星级属性配置
            let starUpCfg = heroInfo.getHeroStarUpTableByStar(heroInfo.star);
            if (starUpCfg == null) { continue; }
            // 获得全体附加属性
            HeroAttrMgr.getHeroExtraAllAttrsByType(heroAttr, heroInfo, tab.ExtraAttrTarget.ExtraAttrTarget_All)
            // 获得星级阶段属性
            HeroAttrMgr.getHeroStarStepAttrsByType(heroAttr, heroInfo, tab.ExtraAttrTarget.ExtraAttrTarget_All)
        }
    }

    // 获得英雄基础属性
    // [backend]Hero.GetAttrs
    private static getHeroBaseAttr(heroAttr: HeroAttr, heroInfo: HeroInfo, level: number) {
        // 获得基础属性
        let baseAttr = heroInfo.heroAttrTable;
        if (baseAttr) {
            for (let i = 0; i < baseAttr.HeroAttrType.length; ++i) {
                heroAttr.addAttr(baseAttr.HeroAttrType[i], baseAttr.HeroAttrValue[i]);
            }
        }
        // 获得等级提升属性
        let starUpCfg = heroInfo.getHeroStarUpTableByStar(heroInfo.star);
        if (starUpCfg == null) { return; }
        if (starUpCfg.AttrPerLevel != 0) {
            let attrCfg = tab.getData().HeroAttrTableById.getValue(starUpCfg.AttrPerLevel);
            if (attrCfg) {
                for (let i = 0; i < attrCfg.HeroAttrType.length; ++i) {
                    heroAttr.addAttr(attrCfg.HeroAttrType[i], attrCfg.HeroAttrValue[i] * level);
                }
            }
        }
        // 获得附加属性
        HeroAttrMgr.getHeroExtraAllAttrsByType(heroAttr, heroInfo, tab.ExtraAttrTarget.ExtraAttrTarget_Mine)
        // 获得星级阶段属性
        HeroAttrMgr.getHeroStarStepAttrsByType(heroAttr, heroInfo, tab.ExtraAttrTarget.ExtraAttrTarget_Mine)
    }

    // 获得额外属性加成
    // [backend]Hero.getExtraAllAttrsByType
    public static getHeroExtraAllAttrsByType(heroAttr: HeroAttr, heroInfo: HeroInfo, target:tab.ExtraAttrTarget) {
        let starUpCfg = heroInfo.getHeroStarUpTableByStar(heroInfo.star);
        if (starUpCfg == null) { return; }
        for (let i = 0; i < starUpCfg.ExtraAttrTarget.length; ++i) {
            if (starUpCfg.ExtraAttrTarget[i] == target) {
                let attrId = starUpCfg.ExtraAttrList[i];
                let attrCfg = tab.getData().HeroAttrTableById.getValue(attrId);
                if (attrCfg) {
                    for (let i = 0; i < attrCfg.HeroAttrType.length; ++i) {
                        heroAttr.addAttr(attrCfg.HeroAttrType[i], attrCfg.HeroAttrValue[i]);
                    }
                }
            }
        }
    }

    // 获得星级阶段升级带来得属性加成
    // [backend]Hero.getStarStepAttrsByType
    public static getHeroStarStepAttrsByType(heroAttr: HeroAttr, heroInfo: HeroInfo, target:tab.ExtraAttrTarget) {
        for (let i = 0; i < heroInfo.finshedStarSteps.length; i++) {
            let stepConfig = tab.getData().HeroStarStepTableById.getValue(heroInfo.finshedStarSteps[i]);
            if (stepConfig == null) { continue; }
            for (let i = 0; i < stepConfig.ExtraAttrTarget.length; ++i) {
                if (stepConfig.ExtraAttrTarget[i] == target) {
                    let attrId = stepConfig.ExtraAttrList[i];
                    let attrCfg = tab.getData().HeroAttrTableById.getValue(attrId);
                    if (attrCfg) {
                        for (let i = 0; i < attrCfg.HeroAttrType.length; ++i) {
                            heroAttr.addAttr(attrCfg.HeroAttrType[i], attrCfg.HeroAttrValue[i]);
                        }
                    }
                }
            }
        }
    }
    // 获取头像 头像框 属性加成
    // [backend]AvatarManager.GetAttrs
    public static getHeadAndFrameAttrs(heroAttr: HeroAttr){
        for(let i=0;i<RoleData.ins.avatarInfo.headFrames.length;i++){
            const frameTab = tab.getData().HeadFramTableById.getValue(RoleData.ins.avatarInfo.headFrames[i].itemId);
            for (let k = 0; k < frameTab.AttrTypes.length; k++) {
                heroAttr.addAttr(frameTab.AttrTypes[k], frameTab.AttrValue[k]);
            }
        }

        for(let j=0;j<RoleData.ins.avatarInfo.headIcons.length;j++){
            const headTab = tab.getData().HeadTableById.getValue(RoleData.ins.avatarInfo.headIcons[j].itemId);
            for (let v = 0; v < headTab.AttrTypes.length; v++) {
                heroAttr.addAttr(headTab.AttrTypes[v], headTab.AttrValue[v]);
            }
        }
    }
    // 获得英雄共鸣属性加成
    // [backend]HeroManager.GetResonanceAttrs
    public static getHeroResonanceAttrs(heroAttr: HeroAttr) {
        // 获得等级共鸣配置
        let lvTab = HeroTeamControl.ins.getResonanceLevelTab();
        if (lvTab) {
            for (let i = 0; i < lvTab.AttrTypes.length; i++) {
                heroAttr.addAttr(lvTab.AttrTypes[i], lvTab.AttrValue[i]);
            }
        }

        // 获得星级共鸣配置
        let starTab = HeroTeamControl.ins.getResonanceStarTab();
        if (starTab) {
            for (let i = 0; i < starTab.AttrTypes.length; i++) {
                heroAttr.addAttr(starTab.AttrTypes[i], starTab.AttrValue[i]);
            }
        }
    }
    // 成就属性加成
    public static getHeroPrestigeAttrs(heroAttr: HeroAttr){
        const prestigeAttr = PrestigeData.ins.attrMap;
        prestigeAttr.forEach((val,key)=>{
            heroAttr.addAttr(key, val);
        })
    }
    // 获得英雄总属性
    // [backend]RPSManager.GetHeroAttrAndSkills
    public static getHeroAttrAndSkills(heroAttr: HeroAttr, heroInfo: HeroInfo, heroSkills: number[]) {
        // 获得英雄属性
        HeroAttrMgr.getHeroAttrs(heroAttr, heroInfo);
        // 检查英雄是否在队伍中
        if (HeroTeamControl.ins.heroInTeam(heroInfo.id)) {
            // 获得秘籍属性技能加成
            HeroAttrMgr.getBookAttrAndSkills(heroAttr, heroInfo, heroSkills);
            // 获得秘籍套装属性加成
            HeroAttrMgr.getBookSerialAttrs(heroAttr);
            // 获得绘卷属性加成
            HeroAttrMgr.getScrollPaintAttrs(heroAttr, heroInfo);
            // 获得基因属性技能加成
            HeroAttrMgr.getGeneAttrAndSkills(heroAttr, heroInfo, heroSkills);
            // 获得丹药属性加成
            HeroAttrMgr.getElixirAttrs(heroAttr, heroInfo);
            // 获得装备属性技能加成
            HeroAttrMgr.getEquipAttrAndSkills(heroAttr, heroInfo, heroSkills);
            // 获得英雄共鸣属性加成
            HeroAttrMgr.getHeroResonanceAttrs(heroAttr);
            // 获得装备共鸣属性加成
            HeroAttrMgr.getEquipResonanceAttrs(heroAttr, heroInfo);
            HeroAttrMgr.getHeroPrestigeAttrs(heroAttr);
            // 头像头像框属性加成
            HeroAttrMgr.getHeadAndFrameAttrs(heroAttr);
            // 帮会属性加成
            HeroAttrMgr.getGuildtAttrs(heroAttr,heroInfo);
        }
        // 填充最终属性
        heroAttr.attr.set(tab.AttrType.AttrType_TotalAttack,HeroAttrMgr.getHeroTotalAttack(heroAttr))
        heroAttr.attr.set(tab.AttrType.AttrType_TotalDefence,HeroAttrMgr.getHeroTotalDefence(heroAttr))
        heroAttr.attr.set(tab.AttrType.AttrType_TotalHp,HeroAttrMgr.getHeroTotalHp(heroAttr))
    }
    /****************************************************************/
    // 获得秘籍属性加成
    // [backend]BookManager.GetAttrs
    private static getBookAttrAndSkills(heroAttr: HeroAttr, heroInfo: HeroInfo, heroSkills: number[]) {
        // 通过英雄类型获得全部秘籍
        let bookList = RareBookData.ins.getBookInfosByHeroClass(heroInfo.heroTable.Class);
        if (!bookList) { return; }
        for (let i = 0; i < bookList.length; ++i) {
            let bookInfo: RareBookInfo = bookList[i];
            let startCfg: tab.BookStarTable = bookInfo.bookStarTable
            let levelRatio = 1;
            if (bookInfo.bookLevelTable) {
                levelRatio = bookInfo.bookLevelTable.Ratio;
            }

            for (let i = 0; i < startCfg.AttrType.length; ++i) {
                let val = Math.floor(startCfg.AttrValue[i] * (FightMacro.MAX_CHANCE + levelRatio /** bookInfo.level*/) / FightMacro.MAX_CHANCE)
                heroAttr.addAttr(startCfg.AttrType[i], val);
            }

            for (let i = 0; i < startCfg.ExtraAttrType.length; ++i) {
                heroAttr.addAttr(startCfg.ExtraAttrType[i], startCfg.ExtraAttrValue[i]);
            }

            // 已穿戴的情况把技能也加上
            if (bookInfo.isWear) {
                heroSkills.push(...startCfg.SkillId);
            }
        }
    }
    // 获得秘籍套装属性加成
    // [backend]BookManager.GetSerialAttrs
    private static getBookSerialAttrs(heroAttr: HeroAttr) {
        for (let i = 0; i < tab.getData().BookSeriesTable.length; ++i) {
            let cfg = tab.getData().BookSeriesTable[i];
            if (!cfg) { continue; }
            let serialIfno = RareBookData.ins.getSerieInfoById(cfg.Id);
            if (serialIfno != null && serialIfno.isComplete()) {
                for (let i = 0; i < cfg.AttrType.length; ++i) {
                    heroAttr.addAttr(cfg.AttrType[i], cfg.AttrValue[i]);
                }
            }
        }
    }
    /****************************************************************/
    // 获得绘卷属性加成
    // [backend]ScrollPaintingManager.GetAttrs
    private static getScrollPaintAttrs(heroAttr: HeroAttr, heroInfo: HeroInfo) {
        let attrMap = HeroTeamControl.ins.getPaintingAttrMap();
        attrMap.forEach((val, type) => {
            heroAttr.addAttr(type, val);
        });
    }
     /****************************************************************/
    // 获得帮会属性技能加成
    // [backend]GeneManager.GetAttr
    /****************************************************************/
    private static getGuildtAttrs(heroAttr: HeroAttr,heroInfo: HeroInfo) {
        if(AssociationData.ins.getInGuild()){
            let attrMap = AssociationData.ins.getGuildAttr(heroInfo.heroTable.Class);
            attrMap.forEach((val, type) => {
                heroAttr.addAttr(type, val);
            });
        }
    }
    // 获得基因属性技能加成
    // [backend]GeneManager.GetAttr
    private static getGeneAttrAndSkills(heroAttr: HeroAttr, heroInfo: HeroInfo, heroSkills: number[]) {
        let smallLevel = RoleData.ins.gene.smallGeneLevel;
        let bigLevel = RoleData.ins.gene.bigGeneLevel;
        for (let i = 0; i < tab.getData().GeneLevelTable.length; i++) {
            let geneTab = tab.getData().GeneLevelTable[i];
            if ((geneTab.Type == tab.GeneType.GeneType_SmallGene && geneTab.Level <= smallLevel) ||
                (geneTab.Type == tab.GeneType.GeneType_BigGene && geneTab.Level <= bigLevel)) {
                if (geneTab.AttrType == tab.AttrType.AttrType_EquipSkill) {
                    heroSkills.push(geneTab.AttrValue)
                } else {
                    heroAttr.addAttr(geneTab.AttrType, geneTab.AttrValue);
                }
            }
        }
    }
    /****************************************************************/
    // 获得丹药属性加成
    // [backend]ElixirManager.GetAttr
    private static getElixirAttrs(heroAttr: HeroAttr, heroInfo: HeroInfo) {
        let elixirAttrs:Map<tab.AttrType, number> = HeroTeamControl.ins.getElixirAttr();
        if (elixirAttrs) {
            elixirAttrs.forEach((val, type) => {
                heroAttr.addAttr(type, val);
            });
        }
    }
    /****************************************************************/
    // 获得装备属性技能加成
    private static getEquipAttrAndSkills(heroAttr: HeroAttr, heroInfo: HeroInfo, heroSkills: number[]) {
        // 获得装备槽位
        let container: EquipContainerInfo = EquipData.ins.getEquipContainerDataByHeroClass(heroInfo.heroTable.Class);
        if (!container) { return; }
        for (let i = 0; i < container.slotData.length; ++i) {
            HeroAttrMgr.getEquipAttr(heroAttr, container.slotData[i], heroSkills)
        }
    }
    // 获得装备属性加成
    // [backend]Equip.GetAttr
    private static getEquipAttr(heroAttr: HeroAttr, slot: proto.IEquipSlotData, heroSkills: number[]) {
        if (!slot) { return; }

        // 获得强化等级
        let enhanceLv = slot.enhanceLv ?? 0;
        // 获得精炼等级
        let refineLv = slot.refineLv ?? 0;

        let equipInfo: EquipInfo = EquipData.ins.getEquipInfoById(slot.equipId);
        if (!equipInfo) { return; }

        // 检查强化等级是否超过武器上限
        if (enhanceLv > equipInfo.equipTable.EnhanceLimit) {
            enhanceLv = equipInfo.equipTable.EnhanceLimit;
        }
        
        // 检查淬炼等级是否超过武器上限
        if (refineLv > equipInfo.equipTable.RefineLimit) {
            refineLv = equipInfo.equipTable.RefineLimit;
        }

        // 基础属性
        for (let i = 0; i < equipInfo.baseAttr.length; ++i) {
            let attrId = equipInfo.baseAttr[i];
            let cfg = tab.getData().EquipAttrTableById.getValue(attrId);
            if (!cfg) { continue; }
            let val = cfg.Base + Math.floor(cfg.Base * enhanceLv * cfg.Growth / FightMacro.MAX_CHANCE);
            heroAttr.addAttr(cfg.AttrType, val);
        }

        // 附加属性
        for (let i = 0; i < equipInfo.extraAttr.length; ++i) {
            let attrId = equipInfo.extraAttr[i];
            let cfg = tab.getData().EquipAttrTableById.getValue(attrId);
            if (!cfg) { continue; }
            let val = cfg.Base + Math.floor(cfg.Base * refineLv * cfg.Growth / FightMacro.MAX_CHANCE);
            heroAttr.addAttr(cfg.AttrType, val);
        }

        // 设置技能
        if (equipInfo.skillList.length > 0) {
            heroSkills.push(...equipInfo.skillList);
        }
    }
    // 获得装备共鸣属性加成
    // [backend]EquipManager.GetResonanceAttrs
    private static getEquipResonanceAttrs(heroAttr: HeroAttr, heroInfo: HeroInfo) {
        let container = EquipData.ins.getEquipContainerDataByHeroClass(heroInfo.heroTable.Class);
        if (!container) { return; }
        // 品质共鸣
        let masterTab:tab.HeroMasterTable = container.masteInfo.qualityTable;
        if (masterTab) {
            for (let i = 0; i < masterTab.AttrList.length; i++) {
                let attrCfg = tab.getData().EquipAttrTableById.getValue(masterTab.AttrList[i]);
                if (attrCfg) {
                    heroAttr.addAttr(attrCfg.AttrType, attrCfg.Base);
                }
            }
        }
        // 强化共鸣
        masterTab = container.masteInfo.enhanceTable;
        if (masterTab) {
            for (let i = 0; i < masterTab.AttrList.length; i++) {
                let attrCfg = tab.getData().EquipAttrTableById.getValue(masterTab.AttrList[i]);
                if (attrCfg) {
                    heroAttr.addAttr(attrCfg.AttrType, attrCfg.Base);
                }
            }
        }
        // 淬炼共鸣
        masterTab = container.masteInfo.refineTable;
        if (masterTab) {
            for (let i = 0; i < masterTab.AttrList.length; i++) {
                let attrCfg = tab.getData().EquipAttrTableById.getValue(masterTab.AttrList[i]);
                if (attrCfg) {
                    heroAttr.addAttr(attrCfg.AttrType, attrCfg.Base);
                }
            }
        }
    }
    /****************************************************************/
    // 计算英雄战力
    public static getHeroPowerScore(heroAttr: HeroAttr, heroInfo: HeroInfo, heroSkills: number[]) {
        HeroAttrMgr.initHeroStarPSMap();
        // 计算英雄星级战力加成
        //heroAttr.powerScore = HeroAttrMgr.getHeroStarPowerScore(heroInfo);
        // 计算英雄属性战力
        heroAttr.attr.forEach((val, type) => {
            if (HeroAttrMgr.m_heroPreCalcAttrMap.has(type)) { return; }
            heroAttr.powerScore += HeroAttrMgr.calcHeroPowerScore(type, val);
        });
        // 计算攻击力
        heroAttr.powerScore += HeroAttrMgr.calcHeroPowerScore(tab.AttrType.AttrType_Attack, heroAttr.getAttr(tab.AttrType.AttrType_TotalAttack));
        // 计算防御力
        heroAttr.powerScore += HeroAttrMgr.calcHeroPowerScore(tab.AttrType.AttrType_Defence, heroAttr.getAttr(tab.AttrType.AttrType_TotalDefence));
        // 计算血量
        heroAttr.powerScore += HeroAttrMgr.calcHeroPowerScore(tab.AttrType.AttrType_Hp, heroAttr.getAttr(tab.AttrType.AttrType_TotalHp));
        // 计算技能战力
        heroAttr.powerScore += HeroAttrMgr.calcSkillPowerScore(heroSkills);
    }
    // 预解析战力表
    private static m_heroStarPSMap: Map<tab.AttrType, tab.HeroPowerScore> = null;
    private static m_heroAttrPSMap: Map<tab.AttrType, tab.HeroPowerScore> = new Map();
    private static m_heroSkillPSMap: Map<tab.AttrType, tab.HeroPowerScore> = new Map();
    private static m_heroPreCalcAttrMap: Set<tab.AttrType> = new Set();
    private static initHeroStarPSMap() {
        if (HeroAttrMgr.m_heroStarPSMap) { return; }
        HeroAttrMgr.m_heroStarPSMap = new Map();
        for (let i = 0; i < tab.getData().HeroPowerScore.length; ++i) {
            let cfg = tab.getData().HeroPowerScore[i];
            if (cfg.Type == tab.AttrType.AttrType_HeroStar) {
                HeroAttrMgr.m_heroStarPSMap.set(cfg.Args, cfg);
            } else if (cfg.Type == tab.AttrType.AttrType_EquipSkill) {
                HeroAttrMgr.m_heroSkillPSMap.set(cfg.Args, cfg);
            } else {
                HeroAttrMgr.m_heroAttrPSMap.set(cfg.Type, cfg);
            }
        }

        HeroAttrMgr.m_heroPreCalcAttrMap.add(tab.AttrType.AttrType_Attack);
        HeroAttrMgr.m_heroPreCalcAttrMap.add(tab.AttrType.AttrType_DamagePer1);
        HeroAttrMgr.m_heroPreCalcAttrMap.add(tab.AttrType.AttrType_DamagePer2);
        HeroAttrMgr.m_heroPreCalcAttrMap.add(tab.AttrType.AttrType_DamagePer3);
        HeroAttrMgr.m_heroPreCalcAttrMap.add(tab.AttrType.AttrType_Hp);
        HeroAttrMgr.m_heroPreCalcAttrMap.add(tab.AttrType.AttrType_HpPer);
        HeroAttrMgr.m_heroPreCalcAttrMap.add(tab.AttrType.AttrType_Defence);
        HeroAttrMgr.m_heroPreCalcAttrMap.add(tab.AttrType.AttrType_DefencePer1);
        HeroAttrMgr.m_heroPreCalcAttrMap.add(tab.AttrType.AttrType_DefencePer2);
        HeroAttrMgr.m_heroPreCalcAttrMap.add(tab.AttrType.AttrType_DefencePer3);
    }
    // 计算英雄星级战力加成
    private static getHeroStarPowerScore(heroInfo: HeroInfo): number {
        if (HeroAttrMgr.m_heroStarPSMap.has(heroInfo.itemId)) {
            let score = HeroAttrMgr.m_heroStarPSMap.get(heroInfo.itemId).Score;
            return Math.floor(score * heroInfo.star / FightMacro.MAX_CHANCE);
        }
        return 0;
    }
    // 计算属性战力
    private static calcHeroPowerScore(type: tab.AttrType, val: number): number {
        if (HeroAttrMgr.m_heroAttrPSMap.has(type)) {
            return Math.floor(HeroAttrMgr.m_heroAttrPSMap.get(type).Score * val / FightMacro.MAX_CHANCE);
        }
        return 0;
    }
    // 计算技能战力
    private static calcSkillPowerScore(skillList: number[]): number {
        let powerScore = 0;
        for (let i = 0; i < skillList.length; ++i) {
            let id = skillList[i];
            if (HeroAttrMgr.m_heroSkillPSMap.has(id)) {
                powerScore += HeroAttrMgr.m_heroSkillPSMap.get(id).Score;
            }
        }
        return powerScore;
    }
}
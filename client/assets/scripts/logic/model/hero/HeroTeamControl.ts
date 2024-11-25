import { _decorator } from 'cc';
import { proto } from 'client_protocol';
import { HeroData } from './HeroData';
import { tab } from '../../../Table/table_gen';
import { HeroInfo } from './HeroInfo';
import { RoleData } from '../role/RoleData';
import { Long } from 'protobufjs';


const { ccclass, property } = _decorator;

@ccclass('HeroTeamControl')
export class HeroTeamControl {
    private teamSlots: proto.ITeamSlot[] = [];
    public teamResonanceLevel: number = 0;//共鸣等级
    public teamResonanceStar: number = 0;//共鸣星级
    private _extraAttrMap: Map<tab.AttrType, number> = new Map()//英雄升星额外属性
    private _paintingAttrMap: Map<tab.AttrType, number> = new Map();//绘卷属性
    private _elixirAttrMap: Map<tab.AttrType, number> = new Map();//丹药属性
    private _elixirCountMap: Map<number, number> = new Map();
    private static _instance: HeroTeamControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new HeroTeamControl();
        }
        return this._instance;
    }
    public initTeam(teamData: proto.ITeamSlot[], levelResonance: number, starResonance: number) {
        for (let i = 0; i < teamData.length; i++) {
            let data: proto.ITeamSlot = teamData[i];
            if (!data.heroClass) {
                data.heroClass = i + 1;
                data.heroId = 0;
                data.level = 1;
            }
            this.teamSlots[i] = data;
        }
        this.teamResonanceLevel = levelResonance;
        this.teamResonanceStar = starResonance;
        this.initPaintingAttr();
        this.setTeamExtraAttr();
        this.initElixirData();
    }
    getElixirCountById(id: number) {
        return this._elixirCountMap.get(id) ? this._elixirCountMap.get(id) : 0;
    }
    getElixirAttrByType(type: tab.AttrType) {
        return this._elixirAttrMap.get(type) ? this._elixirAttrMap.get(type) : 0;
    }
    // 获取所有丹药属性
    getElixirAttr() {
        return this._elixirAttrMap;
    }
    initElixirData() {
        this._elixirCountMap.clear();
        this._elixirAttrMap.clear();
        for (let i = 0; i < RoleData.ins.elixir.data.length; i++) {
            const data: proto.IElixirData = RoleData.ins.elixir.data[i];
            if(this._elixirCountMap.has(data.id)){
                if(data.count>this._elixirCountMap.get(data.id)){
                    this._elixirCountMap.set(data.id, data.count);
                }
            }else{
                this._elixirCountMap.set(data.id, data.count);
            }
        }
        this._elixirCountMap.forEach((value, key) => {
            // 判断当前数量的丹药增加的属性
            const ElixirTab = tab.getData().ElixirTableById.getValue(key);
            for (let k = 0; k < ElixirTab.AttrType.length; k++) {
                const attrType = ElixirTab.AttrType[k];
                if (this._elixirAttrMap.has(attrType)) {
                    this._elixirAttrMap.set(attrType, this._elixirAttrMap.get(attrType) + value * ElixirTab.AttrValue[k])
                } else {
                    this._elixirAttrMap.set(attrType, value * ElixirTab.AttrValue[k])
                }
            }
        })
    }
    /* 初始化计算绘卷属性 */
    initPaintingAttr() {
        let paintingData: proto.IScrollPainting[] = RoleData.ins.paintings;
        for (let i = 0; i < paintingData.length; i++) {
            const heroId = paintingData[i].heroItemId;
            const star = paintingData[i].star;
            if(star){
                this.addPaintingAttr(heroId, star);
            }
        }
    }
    // 添加绘卷属性
    addPaintingAttr(heroId: number, star: number,addAttr?:any) {
        const heroTab: tab.HeroTable = tab.getData().HeroTableById.getValue(heroId);
        // 资质
        const aptitude = heroTab.Aptitude;
        const attrData = this.getPaintingAttr(aptitude, star);
        const SPAttrTypes = attrData.types;
        if(addAttr){
            const addAttrTypes = addAttr.types;
            const addAttrValus = addAttr.values;
            for (let j = 0; j < addAttrTypes.length; j++) {
                const type = addAttrTypes[j];
                if (this._paintingAttrMap.has(type)) {
                    this._paintingAttrMap.set(type, addAttrValus[j] + this._paintingAttrMap.get(type))
                } else {
                    this._paintingAttrMap.set(type, addAttrValus[j])
                }
            }
        }else{
            for (let j = 0; j < SPAttrTypes.length; j++) {
                const type = SPAttrTypes[j];
                if (this._paintingAttrMap.has(type)) {
                    this._paintingAttrMap.set(type, attrData.values[j] + this._paintingAttrMap.get(type))
                } else {
                    this._paintingAttrMap.set(type, attrData.values[j])
                }
            }
        }
    }
    /* 通过资质|star查找绘卷id */
    getPaintingAttr(aptitude: tab.HeroAptitude, star: number) {
        let  obj = null;
        for (let i = 0; i < tab.getData().ScrollPaintingTable.length; i++) {
            let paintingData: tab.ScrollPaintingTable = tab.getData().ScrollPaintingTable[i];
            if (aptitude === paintingData.Aptitude && star === paintingData.HeroStar) {
                obj =  {
                    types: paintingData.SPAttrTypes,
                    values: paintingData.SPAttrValue
                }
                break;
            }
        }
        return obj;
    }
    getPaintingAttrGap(heroId: number, star: number){
        const heroTab: tab.HeroTable = tab.getData().HeroTableById.getValue(heroId);
        // 资质
        const aptitude = heroTab.Aptitude;
        const attrLast = HeroTeamControl.ins.getPaintingAttr(aptitude, star-1);
        const attrNow = HeroTeamControl.ins.getPaintingAttr(aptitude, star);
        const _types = [];
        const _values = [];
        for(let i=0;i<attrNow.types.length;i++){
            const type = attrNow.types[i];
            const val1 = attrNow.values[i];
            if(attrLast.types[i]){
                _types.push(type);
                _values.push(val1-attrLast.values[i]);
            }else{
                _types.push(type);
                _values.push(val1);
            }
        }
        const obj =  {
            types: _types,
            values: _values
        }
        return obj;
    }
    /* 设置共鸣等级 */
    setTeamResonanceLevel(lv: number) {
        this.teamResonanceLevel = lv;
    }
    /* 设置共鸣星级 */
    setTeamResonanceStar(star: number) {
        this.teamResonanceStar = star;
    }
    public getTeam() {
        return this.teamSlots;
    }
    public heroInTeam(id: number|Long): proto.ITeamSlot {
        const _id = Number(id)
        let inTeam = null;
        for (let i = 0; i < this.teamSlots.length; i++) {
            let slot = this.teamSlots[i];
            if (slot.heroId && Number(slot.heroId)===_id) {
                inTeam = slot;
                return inTeam
            }
        }
        return inTeam
    }
    public getTeamIndexById(id: number) {
        const _id = Number(id)
        let index = -1;
        for (let i = 0; i < this.teamSlots.length; i++) {
            let teamSlot = this.teamSlots[i];
            if (teamSlot.heroId && Number(teamSlot.heroId)===_id) {
                index = i;
                break;
            }
        }
        return index
    }
    public getHeroByClass(heroClass: tab.HeroClass): HeroInfo {
        for (let i = 0; i < this.teamSlots.length; i++) {
            let teamHeroInfo = HeroData.ins.getById(this.teamSlots[i].heroId);
            if (!teamHeroInfo) {
                continue;
            }
            if (teamHeroInfo.heroTable.Class === heroClass) {
                return teamHeroInfo;
            }
        }
    }
    public refreshTeam(heroId: number|Long, newLevel?: number) {
        let info = HeroData.ins.getById(heroId);
        if (!info) {
            return;
        }
        let heroClass = info.heroTable.Class;
        for (let i = 0; i < this.teamSlots.length; i++) {
            let teamHeroInfo = HeroData.ins.getById(this.teamSlots[i].heroId);
            if (!teamHeroInfo) {
                this.teamSlots[i].heroId = 0;
                this.teamSlots[i].level = 1;
                this.teamSlots[i].heroClass = heroClass;
            } else {
                if (teamHeroInfo.heroTable.Class === heroClass) {
                    this.teamSlots[i].heroId = Number(heroId);
                    if (newLevel) {
                        this.teamSlots[i].level = newLevel;
                        HeroData.ins.getById(heroId).refreshBaseAttrMap();
                    }
                }
            }
        }
        /* 刷新队伍的同时 刷新全体属性 */
        this.setTeamExtraAttr();
    }
    /* 队伍的共鸣等级 */
    public getMinTeamLevel(heroInfo?:HeroInfo): number {
        let level = 999;
        for (let i = 0; i < this.teamSlots.length; i++) {
            let slot = this.teamSlots[i];
            let isSelf = false;
            if(heroInfo){
                isSelf = slot.heroClass===heroInfo.heroClassTable.HeroClass;
            }
            if (slot.level < level&&!isSelf) {
                level = slot.level;
            }
        }
        return level
    }
    /* 队伍的最大等级 */
    public getMaxTeamLevel():number{
        let level = -1;
        for (let i = 0; i < this.teamSlots.length; i++) {
            let slot = this.teamSlots[i];
            if (slot.level > level) {
                level = slot.level;
            }
        }
        return level
    }
    /* 队伍的共鸣星级 */
    public getMinTeamStar(): number {
        let star = 999;
        for (let i = 0; i < this.teamSlots.length; i++) {
            let slot = this.teamSlots[i];
            let heroInfo = HeroData.ins.getById(slot.heroId);
            if (heroInfo && heroInfo.star < star) {
                star = heroInfo.star;
            }
        }
        return star;
    }
    /* 获取职业等级 */
    public getClassTeamData(heroClass: tab.HeroClass): proto.ITeamSlot {
        for (let i = 0; i < this.teamSlots.length; i++) {
            let slot = this.teamSlots[i];
            if (slot.heroClass === heroClass) {
                return slot
            }
        }
    }


    /* 队伍共鸣等级tab*/
    public getResonanceLevelTab(next?: boolean) {
        let id = next ? this.teamResonanceLevel + 1 : this.teamResonanceLevel;
        return tab.getData().HeroLevelResonanceTableById.getValue(id);
    }
    /* 队伍共鸣星级tab */
    public getResonanceStarTab(next?: boolean) {
        let id = next ? this.teamResonanceStar + 1 : this.teamResonanceStar;
        return tab.getData().HeroStarResonanceTableById.getValue(id);
    }
    /* 团队固定属性S */
    /* 共鸣属性 */
    public getResonanceAttrByType(type: tab.AttrType, isLevel: boolean) {
        let attr = isLevel ? this.getResonanceLevelTab() : this.getResonanceStarTab();
        for (let i = 0; i < attr.AttrTypes.length; i++) {
            let _type = attr.AttrTypes[i];
            if (_type == type) {
                return attr.AttrValue[i];
            }
        }
    }
    /* 绘卷增加的全体固定属性 */
    public getPaintingAttrByType(type: tab.AttrType) {
        return this._paintingAttrMap.get(type);
    }
    /* 获得绘卷增加的固定属性 */
    public getPaintingAttrMap():Map<tab.AttrType, number> {
        return this._paintingAttrMap;
    }
    /* 团队固定属性E */
    /* 英雄升星额外属性中增加的全体属性 */
    public getExtraAttr() {
        return this._extraAttrMap;
    }
    public setTeamExtraAttr() {
        this._extraAttrMap.clear();
        for (let i = 0; i < this.teamSlots.length; i++) {
            let heroInfo = HeroData.ins.getById(this.teamSlots[i].heroId);
            if (!heroInfo) {
                continue;
            }
            let _heroStarUpTable = heroInfo.heroStarUpTable;
            if (_heroStarUpTable.ExtraAttrTarget.length > 0) {
                for (let i = 0; i < _heroStarUpTable.ExtraAttrTarget.length; i++) {
                    let type = _heroStarUpTable.ExtraAttrTarget[i];
                    let value = _heroStarUpTable.ExtraAttrList[i];
                    let _attrTab = tab.getData().HeroAttrTableById.getValue(value);
                    if (type) {
                        if (type === tab.ExtraAttrTarget.ExtraAttrTarget_All) {
                            for (let k = 0; k < _attrTab.HeroAttrType.length; k++) {
                                let _type = _attrTab.HeroAttrType[k];
                                let _value = _attrTab.HeroAttrValue[k];
                                if (this._extraAttrMap.has(_type)) {
                                    let mapValue = this._extraAttrMap.get(_type)
                                    if (mapValue) {
                                        this._extraAttrMap.set(_type, mapValue + _value);
                                    }
                                } else {
                                    this._extraAttrMap.set(_type, _value);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}



import { Node, Prefab, _decorator } from "cc";
import { tab } from "../../../Table/table_gen";
import { PREVIEW } from "cc/env";
import { IClear } from "../../../framework/base/IAbs";
import { proto } from "client_protocol";
import { ItemControl } from "../item/ItemControl";
import { ItemData } from "../item/ItemData";
import { BattleMainDataControl } from "../home/battle/BattleMainDataControl";
import { Net } from "../../net/Net";
import { EventMgr } from "../../mgr/EventMgr";
import { LocalEvent } from "../../define/LocalEvent";
import { HeroData } from "../hero/HeroData";
import { LoginData } from "../login/LoginData";
import { FightData } from "../../fight/data/FightData";
import { getPassDaysByZero } from "../../utils/GameUtil";
import { Role } from "../../fight/base/obj/role/role/Role";


const { ccclass, property } = _decorator;



export class RoleData extends proto.Role implements IClear {
    private static _instance: RoleData;
    private _staminaInfo: proto.Msg_GetStaminaInfoRsp;
    /**
     * 特权加成
     */
    private _privilegeMap: Map<tab.VipBonus, number>;
    /**  
     * 等级提升奖励
     */
    private _levelUpAwardMap: Map<number, number>;
    private m_clientToServerTimeOffset: number = 0;
    private _guildRequests: proto.IJoinGuildRequest[] = [];
    public static get ins() {
        if (null == this._instance) {
            this._instance = new RoleData();
        }
        return this._instance;
    }

    setData(role: proto.IRole) {
        for (const key in role) {
            const v = role[key];
            this[key] = role[key]
        }
        this.diamond = this.gold = 0
    }

    purge(): void {
    }

    private _gold: number = 0
    private _diamond: number = 0
    private _capacityLevel: number = 0;
    private _oldLevel: number = 0;
    private _curClearStageId: number = 0;
    private _serverTimer:number=0;
    get oldLevel() {
        return this._oldLevel
    }
    set oldLevel(level) {
        this._oldLevel = level;
    }
    get curClearStageId() {
        return this._curClearStageId
    }
    set curClearStageId(stageId) {
        this._curClearStageId = stageId;
    }
    /** 金币 */
    get gold() {
        return this._gold
    }

    set gold(v: number) {
        this._gold = v
    }

    /** 钻石 */
    get diamond() {
        return this._diamond
    }

    set diamond(v: number) {
        this._diamond = v
    }
    /** 自己的公会申请列表 */
    get guildRequests() {
        return this._guildRequests
    }

    set guildRequests(data: proto.IJoinGuildRequest[]) {
        this._guildRequests = data
    }
    /**服务器时间 目前没有 先暂时获取本地时间 */
    get serverTimer() {
        return this._serverTimer;
      //  return new Date().getTime();
    }
    /**
     * 体力相关信息
     */
    get staminaInfo() {
        return this._staminaInfo;
    }

    set staminaInfo(msg: proto.Msg_GetStaminaInfoRsp) {
        this._staminaInfo = msg;
    }

    get capacityLevel() {
        return this._capacityLevel
    }

    set capacityLevel(v: number) {
        this._capacityLevel = v
    }
    /**
     * 增加特权
     */
    addPrivilege(maps: any) {
        if (!this._privilegeMap) {
            this._privilegeMap = new Map();
        }
        for (let key in maps) {
            this._privilegeMap.set(Number(key), maps[key]);
        }
    }
    /**
     * 获得特权加成
     * @param type 
     * @returns 
     */
    getPrivilegeValue(type: tab.VipBonus) {
        if (this._privilegeMap) {
            if (this._privilegeMap.has(type)) {
                return this._privilegeMap.get(type);
            } else {
                return 0;
            }

        }
        return 0;
    }
    /**
     * 增加奖励
     */
    addLevelUpAward(awards: proto.IItem[]) {
        if (!this._levelUpAwardMap) {
            this._levelUpAwardMap = new Map();
        }
        for (let i = 0; i < awards.length; i++) {
            const award = awards[i];
            if (this._levelUpAwardMap.has(award.itemId)) {
                this._levelUpAwardMap.set(award.itemId, Number(award.num) + this._levelUpAwardMap.get(award.itemId))
            } else {
                this._levelUpAwardMap.set(award.itemId, Number(award.num))
            }
        }
    }
    /**
     * 获取升级奖励
     */
    getLevelUpAward() {
        if (this._levelUpAwardMap.size > 0) {
            return this._levelUpAwardMap
        }
        return null;
    }
    /* 兼容一下引导到多少步了 */
    public setGuideStep() {
        // // 如果基因点过则引导结束
        if (this.IsGuideFinished()) {
            return;
        }
        if (Number(RoleData.ins.clientData.guideTrunk) >= 500) {
            return
        }
        if(this.IsInTeam()){
            this.setClientData("guideTrunk", String(500));
        }else{
            if (this.IsGotNewHero()){
                this.setClientData("guideTrunk", String(400));
            }else{
                if(BattleMainDataControl.ins.getStageClearIds().length >=1){
                    this.setClientData("guideTrunk", String(300));
                }else{
                    if (this.IsLevelUp()){
                        this.setClientData("guideTrunk", String(200));
                    }else{
                        const guideTrunk = Number(RoleData.ins.clientData.guideTrunk)
                        if(!guideTrunk&&!isNaN(guideTrunk)){
                            this.setClientData("guideTrunk", String(100));
                        }
                    }
                }
            }
        }
    }
    // 判断是否领取法师鸡
    private IsGotNewHero() {
        let heroStar = 3;
        for (let i = 0; i < this.heroBag.heroes.length; i++) {
            const hero = this.heroBag.heroes[i];
            if (hero.star > heroStar) {
                heroStar = hero.star
            }
        }
        return heroStar > 3;
    }
    // 判断是否升级过
    private IsLevelUp() {
        let level = 1;
        for (let i = 0; i < this.heroBag.teamSlots.length; i++) {
            const slot = this.heroBag.teamSlots[i];
            if (slot.level > level) {
                level = slot.level;
            }
        }
        return level > 1;
    }
    // 判断是否有4星以上的英雄上阵
    private IsInTeam() {
        let star = 3;
        for (let i = 0; i < this.heroBag.teamSlots.length; i++) {
            const slot = this.heroBag.teamSlots[i];
            const _star = HeroData.ins.getById(slot.heroId).star
            if (_star > star) {
                star = _star
            }
        }
        return star > 3;
    }
    /* 引导是否结束 */
    public IsGuideFinished() {
        if(RoleData.ins.clientData.guideTrunk&&Number(RoleData.ins.clientData.guideTrunk)){
            return Number(RoleData.ins.clientData.guideTrunk)>=500;
        }else{
            if(BattleMainDataControl.ins.getStageClearIds().length === 0){
                if(FightData.ins.stageId){
                    if(FightData.ins.stageId===1){
                        if(Number(RoleData.ins.clientData.guideTrunk)!==0){
                            this.setClientData("guideTrunk", String(0));
                        }
                        return false;
                    }else if(FightData.ins.stageId===101){
                        return false;
                    }else{
                        return true;
                    }   
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }
    }
    // 设置客户端数据
    public setClientData(key: string, value: string) {
        let msg = new proto.Msg_SetClientDataReq();
        msg.key = key;
        msg.data = value;
        Net.Send(proto.Ptl.SetClientDataReq, msg);
        RoleData.ins.clientData[key] = value;
    }


    sdkRole() {
        let t_obj: any = {}

        t_obj.diamond = RoleData.ins.diamond
        t_obj.gold = RoleData.ins.gold

        t_obj.roleID = RoleData.ins.id
        t_obj.roleName = RoleData.ins.name
        t_obj.roleLevel = RoleData.ins.level
        t_obj.vipLevel = RoleData.ins.vipLevel
        t_obj.serverID = LoginData.ins.default_area //sdk需要是逻辑服id
        t_obj.serverName = LoginData.ins.default_area_name //sdk需要是逻辑服名字
        t_obj.createRoleTime=RoleData.ins.createTime;
        t_obj.levelUpTime = RoleData.ins.getServerUtcTime();
        t_obj.partyName = "无"
        return t_obj
    }
     /**获取创角天数 */
     public getCreateTimeDay(): number {
        var t_dayNum: number = Math.floor(getPassDaysByZero(this.createTime) + 1);
        return t_dayNum;
    }
    private setTimeoutId:number=-1;
    
    initServerTimer(timer:number){
        if(this.setTimeoutId>-1){
            clearTimeout(this.setTimeoutId);
        }
        this._serverTimer=timer;
        this.getClientToServerTimeOffset()
        this.setTimeoutId=setTimeout(() => {
            console.log("cocos timer",this._serverTimer);
            this._serverTimer++;
        }, 1000);
    
    }
    getClientToServerTimeOffset(){
        let newOffset = this._serverTimer - this.getClientUtcTime();
        if (0 == this.m_clientToServerTimeOffset) {
            this.m_clientToServerTimeOffset = newOffset;
        } else {
            // 偏离越大，说明网络延迟越小
            this.m_clientToServerTimeOffset =
                this.m_clientToServerTimeOffset > newOffset ? this.m_clientToServerTimeOffset : newOffset;
        }
        return this.m_clientToServerTimeOffset;
    }
    getServerUtcTime(): number {
        const offsetTime = this.m_clientToServerTimeOffset;
        return this.getClientUtcTime() + offsetTime
    }
    getClientUtcTime(): number {
        let date = new Date();
        return Math.round(date.getTime() / 1000);
    }
    // 获取购买金币历史记录
    getGoldHistory(goldType:tab.BuyGoldType){
        for(let i=0;i<this.buyGoldHistory.length;i++){
            const info = this.buyGoldHistory[i];
            if(info.type===goldType){
                return {
                    type: goldType, count: info.count
                }
            }
        }
        return {
            type: goldType, count: 0
        }
    }
    // 刷新购买金币的数据
    refreshGoldHistory(history:proto.BuyGoldHistory){

        if(this.buyGoldHistory.length===0){
            // 初始化buyGoldHistrory
            this.buyGoldHistory = [
                {type:0,count:0},
                {type:1,count:0},
                {type:2,count:0}
            ]
        }

        for(let i=0;i<this.buyGoldHistory.length;i++){
            const info = this.buyGoldHistory[i];
            if(info.type===history.type){
                this.buyGoldHistory[i] = history;
            }
        }
    }
}